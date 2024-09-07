// Fluoresce DB "driver"
const net = require('net');

function Create(Database) {
	return new Promise((resolve, reject) => {
		let Response = "";
		const socket = net.connect(4781, "127.0.0.1");
		socket.end(JSON.stringify({ 'type': "create", 'destination': Database, 'userid': 0 }));
		socket.on("data", (data) => {
			Response += data;
		});
		socket.on("end", () => {
			socket.destroy();
			resolve(JSON.parse(Response));
		});
	});
}

function Delete(Database, UserID) {
	return new Promise((resolve, reject) => {
		let Response = "";
		const socket = net.connect(4781, "127.0.0.1");
		if (UserID != undefined) {
			socket.end(JSON.stringify({ 'type': "delete", 'destination': Database, 'userid': UserID }));
			socket.on("data", (data) => {
				Response += data;
			});
			socket.on("end", () => {
				socket.destroy();
				resolve(JSON.parse(Response));
			});
		}
		else {
			socket.end(JSON.stringify({ 'type': "destroy", 'destination': Database, 'userid': 0 }));
			socket.on("data", (data) => {
				Response += data;
			});
			socket.on("end", () => {
				socket.destroy();
				resolve(JSON.parse(Response));
			});
		}
	});
}

function Read(Database, UserID) {
	return new Promise((resolve, reject) => {
		let Response = "";
		const socket = net.connect(4781, "127.0.0.1");
		socket.end(JSON.stringify({ 'type': "read", 'destination': Database, 'userid': UserID }));
		socket.on("data", (data) => {
			Response += data;
		});
		socket.on("end", () => {
			socket.destroy();
			resolve(JSON.parse(Response));
		});
	});
}

function Write(Database, UserID, Data) {
	return new Promise((resolve, reject) => {
		let Response = "";
		if (UserID == 0) { return false; }
		const socket = net.connect(4781, "127.0.0.1");
		socket.end(JSON.stringify({ 'type': "write", 'destination': Database, 'userid': UserID, 'data': Data }));
		socket.on("data", (data) => {
			Response += data;
		});
		socket.on("end", () => {
			socket.destroy();
			resolve(JSON.parse(Response));
		});
	});
}

function DirectRead(Database, UserID) {
	return new Promise((resolve, reject) => {
		let Response = "";
		const socket = net.connect(4781, "127.0.0.1");
		socket.end(JSON.stringify({ 'type': "directread", 'destination': Database, 'userid': UserID }));
		socket.on("data", (data) => {
			Response += data;
		});
		socket.on("end", () => {
			socket.destroy();
			resolve(JSON.parse(Response));
		});
	});
}

function DirectWrite(Database, UserID, Data) {
	return new Promise((resolve, reject) => {
		let Response = "";
		if (UserID == 0) { return false; }
		const socket = net.connect(4781, "127.0.0.1");
		socket.end(JSON.stringify({ 'type': "directwrite", 'destination': Database, 'userid': UserID, 'data': Data }));
		socket.on("data", (data) => {
			Response += data;
		});
		socket.on("end", () => {
			socket.destroy();
			resolve(JSON.parse(Response));
		});
	});
}

function ReadIndex(Database, UserID, Index) {
	//Index: {'valuename': "", 'value': ?}
	return new Promise((resolve, reject) => {
		let Response = "";
		const socket = net.connect(4781, "127.0.0.1");
		socket.end(JSON.stringify({ 'type': "readindex", 'destination': Database, 'userid': UserID, 'index': Index }));
		socket.on("data", (data) => {
			Response += data;
		});
		socket.on("end", () => {
			socket.destroy();
			resolve(JSON.parse(Response));
		});
	});
}

function WriteIndex(Database, UserID, Index, Data) {
	return new Promise((resolve, reject) => {
		let Response = "";
		if (UserID == 0) { return false; }
		const socket = net.connect(4781, "127.0.0.1");
		socket.end(JSON.stringify({ 'type': "writeindex", 'destination': Database, 'userid': UserID, 'index': Index, 'data': Data }));
		socket.on("data", (data) => {
			Response += data;
		});
		socket.on("end", () => {
			socket.destroy();
			resolve(JSON.parse(Response));
		});
	});
}

function ReadObject(Database, UserID, ObjectName) {
	return new Promise((resolve, reject) => {
		let Response = "";
		const socket = net.connect(4781, "127.0.0.1");
		socket.end(JSON.stringify({ 'type': "readobject", 'destination': Database, 'userid': UserID, 'objectname': ObjectName }));
		socket.on("data", (data) => {
			Response += data;
		});
		socket.on("end", () => {
			socket.destroy();
			resolve(JSON.parse(Response));
		});
	});
}

function WriteObject(Database, UserID, ObjectName, Data) {
	return new Promise((resolve, reject) => {
		let Response = "";
		if (UserID == 0) { return false; }
		const socket = net.connect(4781, "127.0.0.1");
		socket.end(JSON.stringify({ 'type': "writeobject", 'destination': Database, 'userid': UserID, 'objectname': ObjectName, 'data': Data }));
		socket.on("data", (data) => {
			Response += data;
		});
		socket.on("end", () => {
			socket.destroy();
			resolve(JSON.parse(Response));
		});
	});
}

function ReadObjectIndex(Database, UserID, ObjectName, Index) {
	return new Promise((resolve, reject) => {
		let Response = "";
		const socket = net.connect(4781, "127.0.0.1");
		socket.end(JSON.stringify({ 'type': "readobjectindex", 'destination': Database, 'userid': UserID, 'objectname': ObjectName, 'index': Index }));
		socket.on("data", (data) => {
			Response += data;
		});
		socket.on("end", () => {
			socket.destroy();
			resolve(JSON.parse(Response));
		});
	});
}

function WriteObjectIndex(Database, UserID, ObjectName, Index, Data) {
	return new Promise((resolve, reject) => {
		let Response = "";
		if (UserID == 0) { return false; }
		const socket = net.connect(4781, "127.0.0.1");
		socket.end(JSON.stringify({ 'type': "writeobjectindex", 'destination': Database, 'userid': UserID, 'objectname': ObjectName, 'index': Index, 'data': Data }));
		socket.on("data", (data) => {
			Response += data;
		});
		socket.on("end", () => {
			socket.destroy();
			resolve(JSON.parse(Response));
		});
	});
}

function Exists(Database, UserID) {
	return new Promise((resolve, reject) => {
		let Response = "";
		const socket = net.connect(4781, "127.0.0.1");
		if (UserID != undefined) {
			socket.end(JSON.stringify({ 'type': "exists", 'destination': Database, 'userid': UserID }));
			socket.on("data", (data) => {
				Response += data;
			});
			socket.on("end", () => {
				socket.destroy();
				Response = JSON.parse(Response);
				resolve(Response['exists']);
			});
		}
		else {
			socket.end(JSON.stringify({ 'type': "exists", 'destination': Database, 'userid': 0 }));
			socket.on("data", (data) => {
				Response += data;
			});
			socket.on("end", () => {
				socket.destroy();
				Response = JSON.parse(Response);
				resolve(Response['exists']);
			});
		}
	});
}

function List(Database) {
	return new Promise((resolve, reject) => {
		let Response = "";
		const socket = net.connect(4781, "127.0.0.1");
		socket.end(JSON.stringify({ 'type': "list", 'destination': Database, 'userid': 0 }));
		socket.on("data", (data) => {
			Response += data;
		});
		socket.on("end", () => {
			socket.destroy();
			Response = JSON.parse(Response);
			resolve(Response['list']);
		});
	});
}

function Save(Database) {
	return new Promise((resolve, reject) => {
		let Response = "";
		const socket = net.connect(4781, "127.0.0.1");
		socket.end(JSON.stringify({ 'type': "forcesave", 'destination': Database }));
		socket.on("data", (data) => {
			Response += data;
		});
		socket.on("end", () => {
			socket.destroy();
			resolve(JSON.parse(Response));
		});
	});
}

function Append(Database, UserID, Data) {
	return new Promise((resolve, reject) => {
		let Response = "";
		if (UserID == 0) { return false; }
		const socket = net.connect(4781, "127.0.0.1");
		socket.end(JSON.stringify({ 'type': "append", 'destination': Database, 'userid': UserID, 'data': Data }));
		socket.on("data", (data) => {
			Response += data;
		});
		socket.on("end", () => {
			socket.destroy();
			resolve(JSON.parse(Response));
		});
	});
}

module.exports = { Create, Delete, Read, Write, DirectRead, DirectWrite, ReadIndex, WriteIndex, ReadObject, WriteObject, ReadObjectIndex, WriteObjectIndex, Exists, List, Save, Append };
