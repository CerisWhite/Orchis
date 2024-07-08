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

module.exports = { Create, Delete, Read, Write, DirectRead, DirectWrite, Exists, List, Save, Append };
