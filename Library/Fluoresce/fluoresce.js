const net = require('net');
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
process.on('uncaughtException', function (error) {
   console.log(error.stack);
});
const DBDir = "database"
const MaxAppendObjects = 10;
let IsForceSave = 0;

let MasterObject = {};
let ArchiveObject = {};
if (!fs.existsSync(path.join(process.cwd(), DBDir))) { fs.mkdirSync(path.join(process.cwd(), DBDir)); }
if (!fs.existsSync(path.join(process.cwd(), DBDir, "Archive"))) { fs.mkdirSync(path.join(process.cwd(), DBDir, "Archive")); }
const ReloadDir = fs.readdirSync(path.join(process.cwd(), DBDir));
for (let e in ReloadDir) {
	MasterObject[ReloadDir[e]] = {};
}
async function Delay(Time) {
	await new Promise(resolve => setTimeout(resolve, Time));
	return;
}

function ReadUserData(Destination, UserID) {
	if (MasterObject[Destination] == undefined) { return JSON.stringify({'exists': false}); }
	let Response = {};
	if (MasterObject[Destination][UserID] != undefined) {
		MasterObject[Destination][UserID]['lastinteraction'] = Math.floor(Date.now() / 1000);
		Response = MasterObject[Destination][UserID]['data'];
	}
	else if (fs.existsSync(path.join(process.cwd(), DBDir, Destination, UserID + ".gz"))) {
		MasterObject[Destination][UserID] = JSON.parse(zlib.gunzipSync(fs.readFileSync(path.join(process.cwd(), DBDir, Destination, UserID + ".gz"))));
		MasterObject[Destination][UserID]['warmtime'] = Math.floor(Date.now() / 1000);
		MasterObject[Destination][UserID]['lastinteraction'] = Math.floor(Date.now() / 1000);
		Response = MasterObject[Destination][UserID]['data'];
	}
	return JSON.stringify(Response);
}
function WriteUserData(Destination, UserID, Data) {
	if (MasterObject[Destination] == undefined) { return JSON.stringify({'exists': false}); }
	if (MasterObject[Destination][UserID] == undefined) { MasterObject[Destination][UserID] = { 'warmtime': Math.floor(Date.now() / 1000) }; }
	MasterObject[Destination][UserID]['data'] = Data;
	MasterObject[Destination][UserID]['lastinteraction'] = Math.floor(Date.now() / 1000);
	return JSON.stringify({});
}
function DirectReadUserData(Destination, UserID) {
	if (MasterObject[Destination] == undefined) { return JSON.stringify({'exists': false}); }
	let Response = {};
	if (MasterObject[Destination][UserID] != undefined) {
		MasterObject[Destination][UserID]['lastinteraction'] = Math.floor(Date.now() / 1000);
		Response = MasterObject[Destination][UserID]['data'];
	}
	else if (fs.existsSync(path.join(process.cwd(), DBDir, Destination, UserID + ".gz"))) {
		const UserData = JSON.parse(zlib.gunzipSync(fs.readFileSync(path.join(process.cwd(), DBDir, Destination, UserID + ".gz"))));
		Response = UserData['data'];
	}
	return JSON.stringify(Response);
}
function DirectWriteUserData(Destination, UserID, Data) {
	const UserPath = path.join(process.cwd(), DBDir, Destination, UserID + ".gz");
	if (MasterObject[Destination] == undefined) { return JSON.stringify({'exists': false}); }
	if (MasterObject[Destination][UserID] != undefined) {
		MasterObject[Destination][UserID]['data'] = Data;
		MasterObject[Destination][UserID]['lastinteraction'] = Math.floor(Date.now() / 1000);
	}
	else if (fs.existsSync(UserPath)) {
		let UserData = JSON.parse(zlib.gunzipSync(fs.readFileSync(UserPath)));
		UserData['data'] = Data;
		UserData['lastinteraction'] = Math.floor(Date.now() / 1000);
		fs.writeFileSync(UserPath, zlib.gzipSync(JSON.stringify(UserData)));
	}
	return JSON.stringify({});
}
function AppendData(Destination, UserID, Data) {
	if (MasterObject[Destination] == undefined) { return JSON.stringify({'exists': false}); }
	Data['timestamp'] = Date.now();
	
	if (MasterObject[Destination][UserID] != undefined) {
		MasterObject[Destination][UserID]['data'].push(Data);
		MasterObject[Destination][UserID]['lastinteraction'] = Math.floor(Date.now() / 1000);
	}
	else if (fs.existsSync(path.join(process.cwd(), DBDir, Destination, UserID + ".gz"))) {
		MasterObject[Destination][UserID] = JSON.parse(zlib.gunzipSync(fs.readFileSync(path.join(process.cwd(), DBDir, Destination, UserID + ".gz"))));
		MasterObject[Destination][UserID]['data'].push(Data);
		MasterObject[Destination][UserID]['lastinteraction'] = Math.floor(Date.now() / 1000);
	}
	else {
		MasterObject[Destination][UserID] = {};
		MasterObject[Destination][UserID]['data'] = [ Data ];
		MasterObject[Destination][UserID]['lastinteraction'] = Math.floor(Date.now() / 1000);
	}
	
	if (ArchiveObject[Destination] == undefined) { ArchiveObject[Destination] = {}; }
	if (ArchiveObject[Destination][UserID] == undefined) { ArchiveObject[Destination][UserID] = {}; }
	if (!fs.existsSync(path.join(process.cwd(), DBDir, "Archive", Destination))) {
		fs.mkdirSync(path.join(process.cwd(), DBDir, "Archive", Destination));
	}
	
	if (MasterObject[Destination][UserID]['data'].length > MaxAppendObjects) {
		const MoveObjectCount = (MasterObject[Destination][UserID]['data'].length - MaxAppendObjects);
		let i = 0; while (i < MoveObjectCount) {
			const ArchiveDate = new Date(MasterObject[Destination][UserID]['data'][0]['timestamp']);
			const FormatDate = String(ArchiveDate.getDate()) + String(ArchiveDate.getMonth()) + String(ArchiveDate.getFullYear());
			if (ArchiveObject[Destination][UserID][FormatDate] == undefined) {
				ArchiveObject[Destination][UserID][FormatDate] = [];
			}
			else if (fs.existsSync(path.join(process.cwd(), DBDir, "Archive", Destination, UserID + "_" + FormatDate + ".gz"))) {
				ArchiveObject[Destination][UserID][FormatDate] = JSON.parse(zlib.gunzipSync(fs.readFileSync(path.join(process.cwd(), DBDir, "Archive", Destination, UserID + "_" + FormatDate + ".gz"))));
			}
			ArchiveObject[Destination][UserID][FormatDate].push(MasterObject[Destination][UserID]['data'].shift());
			i++;
		}
	}
	return JSON.stringify({});
}
async function ForceSaveDatabases() {
	IsForceSave = 1;
	const DBList = Object.keys(MasterObject);
	for (let ent in DBList) {
		const ExistData = MasterObject[DBList[ent]];
		const ExpectPath = path.join(process.cwd(), DBDir, DBList[ent]);
		const UserList = Object.keys(ExistData);
		for (let u in UserList) {
			const UserData = ExistData[UserList[u]];
			const UserName = UserList[u] + ".gz";
			const UserPath = path.join(process.cwd(), DBDir, DBList[ent], UserName);
			fs.writeFileSync(UserPath, zlib.gzipSync(JSON.stringify(UserData)));
		}
	}
	IsForceSave = 0;
	return 0;
}
async function ForceSaveDatabase(Database) {
	IsForceSave = 1;
	if (MasterObject[String(Database)] == undefined) { IsForceSave = 0; return 0; }
	const UserList = Object.keys(MasterObject[String(Database)]);
	for (let u in UserList) {
		const UserData = MasterObject[String(Database)][UserList[u]];
		const UserName = UserList[u] + ".gz";
		const UserPath = path.join(process.cwd(), DBDir, Database, UserName);
		fs.writeFileSync(UserPath, zlib.gzipSync(JSON.stringify(UserData)));
	}
	IsForceSave = 0;
	return 0;
}

async function ColdLoop() {
	while (true) {
	while (IsForceSave == 0) {
		await Delay(60000);
		const DBList = Object.keys(MasterObject);
		for (let ent in DBList) {
			const ExistData = MasterObject[DBList[ent]];
			const ExpectPath = path.join(process.cwd(), DBDir, DBList[ent]);
			const UserList = Object.keys(ExistData);
			for (let u in UserList) {
				if (ExistData[UserList[u]]['warmtime'] < (Math.floor(Date.now() / 1000) - 300)) {
					const UserData = ExistData[UserList[u]];
					const UserName = UserList[u] + ".gz";
					const UserPath = path.join(process.cwd(), DBDir, DBList[ent], UserName);
					fs.writeFileSync(UserPath, zlib.gzipSync(JSON.stringify(UserData)));
					MasterObject[DBList[ent]][UserList[u]]['warmtime'] = Math.floor(Date.now() / 1000);
				}
				if (ExistData[UserList[u]]['lastinteraction'] < (Math.floor(Date.now() / 1000) - 600)) {
					const UserData = ExistData[UserList[u]];
					const UserName = UserList[u] + ".gz";
					const UserPath = path.join(process.cwd(), DBDir, DBList[ent], UserName);
					fs.writeFileSync(UserPath, zlib.gzipSync(JSON.stringify(UserData)));
					
					delete MasterObject[DBList[ent]][UserList[u]];
				}
			}
		}
	}}
}

async function ArchiveColdLoop() {
	while (true) {
		await Delay(600000);
		const DBList = Object.keys(ArchiveObject);
		for (let ent in DBList) {
			const ExistData = ArchiveObject[DBList[ent]];
			const ExpectPath = path.join(process.cwd(), DBDir, "Archive", DBList[ent]);
			const UserList = Object.keys(ExistData);
			for (let u in UserList) {
				const ArchiveDate = Object.keys(ArchiveObject[DBList[ent]][UserList[u]]);
				for (let d in ArchiveDate) {
					const UserData = ExistData[UserList[u]][ArchiveDate[d]];
					const UserName = UserList[u] + "_" + ArchiveDate[d] + ".gz";
					const UserPath = path.join(process.cwd(), DBDir, "Archive", DBList[ent], UserName);
					fs.writeFileSync(UserPath, zlib.gzipSync(JSON.stringify(UserData)));
				}
				delete ArchiveObject[DBList[ent]][UserList[u]];
			}
		}
	}
}

net.createServer((socket) => {
	let Parsed = "";
	socket.on('data', (Input) => {
		// Expected input: { 'type': "write", 'destination': "xyz", 'userid': 1000, 'data': {} }
		Parsed += Input;
	});
	socket.on('end', () => {
		let Result = {};
		try {
		Parsed = JSON.parse(Parsed);
		const Destination = Parsed['destination'];
		const UserID = Parsed['userid'];
		switch(Parsed['type']) {
			case "create":
				if (MasterObject[Destination] == undefined) { MasterObject[Destination] = {}; }
				const ExpectPath = path.join(process.cwd(), DBDir, Destination);
				if (!fs.existsSync(ExpectPath)) { fs.mkdirSync(ExpectPath); }
				Result['success'] = true;
				Result = JSON.stringify(Result);
				break;
			case "delete":
				delete MasterObject[Destination][String(UserID)];
				Result['success'] = true;
				Result = JSON.stringify(Result);
				break;
			case "destroy":
				delete MasterObject[Destination];
				Result['success'] = true;
				Result = JSON.stringify(Result);
				break;
			case "forcesave":
				if (Destination != undefined) {
					ForceSaveDatabase(Destination);
				}
				else { ForceSaveDatabases(); }
				Result['success'] = true;
				Result = JSON.stringify(Result);
				break;
			case "shutdown":
				Result['success'] = false;
				Result = JSON.stringify(Result);
				break;
			case "exists":
				Result['exists'] = false;
				if (UserID != 0) {
					if (MasterObject[Destination] == undefined) { break; }
					if (MasterObject[Destination][String(UserID)] != undefined) {
						Result['exists'] = true;
					}
					else if (fs.existsSync(path.join(process.cwd(), DBDir, Destination, UserID + ".gz"))) {
						MasterObject[Destination][String(UserID)] = JSON.parse(zlib.gunzipSync(fs.readFileSync(path.join(process.cwd(), DBDir, Destination, UserID + ".gz"))));
						Result['exists'] = true;
					}
				}
				else {
					if (fs.existsSync(path.join(process.cwd(), DBDir, Destination))) {
						Result['exists'] = true;
					}
				}
				Result = JSON.stringify(Result);
				break;
			case "list":
				const UserList = { 'list': [] }
				for (let x in Object.keys(MasterObject[Destination])) {
					UserList['list'].push(Object.keys(MasterObject[Destination])[x]);
				}
				const AllList = fs.readdirSync(path.join(__dirname, DBDir, Destination));
				for (let y in AllList) {
					const Sliced = AllList[y].slice(0, AllList[y].length - 3);
					if (!UserList['list'].includes(Sliced)) { UserList['list'].push(Sliced); }
				}
				Result = JSON.stringify(UserList);
				break;
			case "read":
				Result = ReadUserData(Destination, String(UserID));
				break;
			case "write":
				if (UserID == 0) { Result['success'] = false; socket.end(Result); return; }
				Result = WriteUserData(Destination, String(UserID), Parsed['data']);
				break;
			case "directread":
				Result = DirectReadUserData(Destination, String(UserID));
				break;
			case "directwrite":
				if (UserID == 0) { Result['success'] = false; socket.end(Result); return; }
				Result = DirectWriteUserData(Destination, String(UserID), Parsed['data']);
				break;
			case "append":
				if (UserID == 0) { Result['success'] = false; socket.end(Result); return; }
				Result = AppendData(Destination, String(UserID), Parsed['data']);
				break;
		}
		} catch (err) { console.log(err); Result = JSON.stringify(Result); }
		socket.end(Result);
	});
}).listen(4781, "127.0.0.1");
ColdLoop();
ArchiveColdLoop();
console.log("Fluoresce is listening.");
