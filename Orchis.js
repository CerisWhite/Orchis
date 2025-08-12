const express = require('express');
const compression = require('compression');
const crypto = require('crypto');
const msgpack = require('msgpackr');
const fs = require('fs');
const http = require('http');
const https = require('https');
const zlib = require('zlib');
const jwt_decode = require('jwt-decode').jwtDecode;
const Orchis = express();
global.Config = {}
if (fs.existsSync('./config.json')) {
	global.Config = JSON.parse(fs.readFileSync('./config.json'));
}
else {
	global.Config = {
		'URL': "127.0.0.1",
		'Port': 9000,
		'Patch': {
			'mode': "RAW",
			'cdnUrl': "https://dragalialost.akamaized.net",
			'coneshellKey': null,
			'useUnifiedLogin': true
		},
		'Zena': {
			'Enabled': false,
			'Host': "127.0.0.1",
			'Port': 9362,
			'Token': "",
			'Overcharge': false
		},
		'Photon': {
			'URL': "127.0.0.1:9001",
			'Token': "",
			'StateURL': "",
			'StatePort': 0
		},
		'BaaS': {
			'URL': "baas.lukefz.xyz",
			'Port': 443,
			'KeyPath': "/.well-known/jwks.json",
			'NamePath': "/gameplay/v1/webUser",
			'IndexPath': "/gameplay/v1/savefile"
		},
		'AssetPass': "",
		'Index': "./static/page/basic.html",
		'AdvancedIndex': "./static/page/index.html",
		'PageURLs': [
			{
				'function_name': "ability_crest_advice",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "battle_royal_how_to",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "comic",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "plotsynopsis",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "time_attack_ranking",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "time_attack_reward",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "faq",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "help_comic",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "help",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "information",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "inquiry_attention",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "dragon_battle_info",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "quest_info",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "copyright",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "health",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "payment_services_act",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "privacy_policy",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "specified_commercial_transactions_law",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "user_policy",
				'url': "http://127.0.0.1:9000/index.html"
			},
			{
				'function_name': "summon_info",
				'url': "http://127.0.0.1:9000/index.html"
			}
		],
		'SSL': false,
		'Certs': {
			'key': "/path/to/key.pem",
			'cert': "/path/to/cert.pem",
			'ca': "/path/to/chain.pem"
		}
	}
	fs.writeFileSync('./config.json', JSON.stringify(global.Config, null, 2));
	console.log("config.json has been generated. Please edit it accordingly.");
	return;
}
process.on('uncaughtException', function (error) {
	console.log(Date.now() + ": " + error.stack);
});

const Passphrase = crypto.createHash('md5').update(String(Math.floor(Date.now() * Math.random() * 1000))).digest('hex');

let MasterUpdated = 0;
global.Master = {};
let MasterList = fs.readdirSync('./Library/Master');
for (const x in MasterList) {
	global.Master[MasterList[x].slice(0, MasterList[x].length - 5)] = JSON.parse(fs.readFileSync('./Library/Master/' + MasterList[x]));
}
global.Module = {
	'Fluoresce': require('fluoresce'),
	'Util': require('./Library/Module/CherryUtil.js'),
	
	'Director': require('./Library/Module/Director.js'),
	'IndexTools': require('./Library/Module/IndexTools.js'),
	'Filter': require('./Library/Module/Filter.js'),
	
	'Character': require('./Library/Module/Character.js'),
	'Dragon': require('./Library/Module/Dragon.js'),
	'Weapon': require('./Library/Module/Weapon.js'),
	'WeaponBody': require('./Library/Module/WeaponBody.js'),
	'Amulet': require('./Library/Module/Amulet.js'),
	'Crest': require('./Library/Module/AbilityCrest.js'),
	
	'Shop': require('./Library/Module/Shop.js'),
	'Event': require('./Library/Module/Event.js'),
	
	'Quest': require('./Library/Module/Quest.js'),
	'Endeavour': require('./Library/Module/Endeavour.js'),
	'DMode': require('./Library/Module/DMode.js')
}

let AssetList = JSON.parse(fs.readFileSync('./Library/Event/AssetList.json'));
let SupportData = fs.existsSync('./Library/Event/Support.json') ? JSON.parse(fs.readFileSync('./Library/Event/Support.json')) : {};
let EventList = JSON.parse(fs.readFileSync('./Library/Event/EventList.json'));
let BannerList = JSON.parse(fs.readFileSync('./Library/Event/BannerList.json'));
let QuestRotation = JSON.parse(fs.readFileSync('./Library/Event/QuestMainRotation.json'));
let ActiveBonusList = JSON.parse(fs.readFileSync('./Library/Event/EventBonus.json'));
let IndexPage = String(fs.readFileSync(global.Config['Index']));
let AdvancedIndexPage = String(fs.readFileSync(global.Config['AdvancedIndex']));
let SummonOddsList = global.Module.Director.GenerateOdds(BannerList);

let MaintenanceXML = String(fs.readFileSync('./static/maintenance.xml'));
const Maintenance = msgpack.pack({'data_headers': { 'result_code': 101 }, 'data': { 'result_code': 101 } });
const AssetReply = msgpack.pack({'data_headers': { 'result_code': 111 }, 'data': { 'result_code': 111 } });
const EmptyRoom = msgpack.pack({
	'room_list': [],
	'friend_room_list': [],
	'event_room_list': [],
	'event_friend_room_list': []
});

let IsMaintenance = false;

function GetDayBegin() {
	let Now = new Date();
	const BeginDay = new Date(Now.getFullYear(), Now.getMonth(), Now.getDate());
	return (BeginDay / 1000);
}
function GetDayNo() {
	let Now = new Date();
	const DateYear = String(Now.getFullYear()).slice(-2);
	const DateMonth = ("0" + String(Now.getMonth() + 1)).slice(-2);
	const DateDay = ("0" + String(Now.getDate())).slice(-2);
	const Formatted = parseInt(DateYear + DateMonth + DateDay);
	return Formatted;
}
function GetDayEnd() {
	let Now = new Date();
	const EndDay = new Date(Now.getFullYear(), Now.getMonth(), Now.getDate() + 1);
	return (EndDay / 1000);
}
function GetDragonItem(DayBegin) {
	let DragonItem = 20000 + new Date().getDay();
	if (DragonItem == 20000) { DragonItem = 20006; }
	return DragonItem;
}
function GetCurrentDate() {
	const date = new Date();
	return date.toUTCString();
}
function PrettyTime(TimeData) {
	const Hour = Math.floor(TimeData / 3600);
	const Min = Math.floor((TimeData % 3600) / 60);
	const Sec = Math.floor(TimeData % 60);
	let Time = "";
	if (Hour > 0) { Time += "" + Hour + ":" + (Min < 10 ? "0" : ""); }
	Time += "" + Min + ":" + (Sec < 10 ? "0" : "");
	Time += "" + Sec;
	return Time;
}
function GetWeeklyReset() {
	const Now = new Date();
	const WeekStart = new Date();
	WeekStart.setDate(Now.getDate() - Now.getDay());
	WeekStart.setHours(0, 0, 0, 0);
	return WeekStart.getTime() / 1000;
}
function GetMonthlyReset(Day) {
	const Now = new Date();
	const Y = Now.getFullYear();
	const M = Now.getMonth();
	const MonthReset = new Date(Y, M, 15); 
	return MonthReset.getTime() / 1000;
}
function SetHeaders(DataLength, Type) {
	const DataType = Type == "JSON" ? "application/json" : "application/x-msgpack";
	const Headers = {
		'content-type': DataType,
		'access-control-allow-origin': "*",
		'access-control-allow-headers': "sid",
		'cache-control': "max-age=0, no-cache, no-store", 
		'pragma': "no-cache",
		'content-length': DataLength
	}
	return Headers;
}
global.ServerTime = Math.floor(Date.now() / 1000);
let LastServerReset = GetDayBegin();
let NextServerReset = 86400 - (global.ServerTime - LastServerReset);
let DayEnd = GetDayEnd();
let DayNumber = GetDayNo();
let DragonItem = GetDragonItem(LastServerReset);
let ResetTimes = {
	'Daily': LastServerReset,
	'Weekly': GetWeeklyReset(),
	'Monthly': GetMonthlyReset(1),
	'Wall': GetMonthlyReset(15)
}

global.LogFile = fs.createWriteStream('./Library/Log/' + LastServerReset + '.txt');
global.Mesh = e => function r(...t){let l=e(...t),n=t[t.length-1];return Promise.resolve(l).catch(n)};

async function InitFluoresce() {
	const ViewerIDStatus = await global.Module.Fluoresce.Exists("OrchisKeyID", "ViewerID");
	const GuildIDStatus = await global.Module.Fluoresce.Exists("OrchisKeyID", "GuildID");
	const IDStatus = await global.Module.Fluoresce.Exists("OrchisID");
	const AccStatus = await global.Module.Fluoresce.Exists("OrchisAccount");
	const PersistStatus = await global.Module.Fluoresce.Exists("OrchisPersist");
	const IndexStatus = await global.Module.Fluoresce.Exists("OrchisIndex");
	const AnalyticsStatus = await global.Module.Fluoresce.Exists("OrchisAnalytics");
	const DPSStatus = await global.Module.Fluoresce.Exists("OrchisDPS");
	const TeamStatus = await global.Module.Fluoresce.Exists("OrchisTeam");
	
	if (ViewerIDStatus == false) { await global.Module.Fluoresce.Create("OrchisKeyID", "incremental", 999999999, "ViewerID"); }
	if (GuildIDStatus == false) { await global.Module.Fluoresce.Create("OrchisKeyID", "incremental", 10001, "GuildID"); }
	if (IDStatus == false) { await global.Module.Fluoresce.Create("OrchisID"); }
	if (AccStatus == false) { await global.Module.Fluoresce.Create("OrchisAccount"); }
	if (PersistStatus == false) { await global.Module.Fluoresce.Create("OrchisPersist"); }
	if (IndexStatus == false) { await global.Module.Fluoresce.Create("OrchisIndex"); }
	if (AnalyticsStatus == false) { await global.Module.Fluoresce.Create("OrchisAnalytics"); }
	if (DPSStatus == false) { await global.Module.Fluoresce.Create("OrchisDPS"); }
	if (TeamStatus == false) { await global.Module.Fluoresce.Create("OrchisTeam"); }
	
	const GBoardStatus = await global.Module.Fluoresce.Exists("OrchisGuildBoard");
	const GUserStatus = await global.Module.Fluoresce.Exists("OrchisGuildUser");
	const GChatStatus = await global.Module.Fluoresce.Exists("OrchisGuildChat");
	if (GBoardStatus == false) {
		await global.Module.Fluoresce.Create("OrchisGuildBoard");
		await global.Module.Fluoresce.Write("OrchisGuildBoard", "10001", {
			"guild_id": 10001,
			"guild_name": "Cherrymint",
			"guild_emblem_id": 10008,
			"guild_introduction": "Main Hub",
			"joining_condition_type": 1,
			"activity_policy_type": 1,
			"is_penalty_guild_name": 0,
			"is_penalty_guild_introduction": 0,
			"guild_member_count": 0,
			"guild_board": "The Cherry Tree of Life",
			"is_penalty_guild_board": 0
		});
	}
	if (GUserStatus == false) {
		await global.Module.Fluoresce.Create("OrchisGuildUser");
		await global.Module.Fluoresce.Write("OrchisGuildUser", "10001", []);
	}
	if (GChatStatus == false) {
		await global.Module.Fluoresce.Create("OrchisGuildChat");
		await global.Module.Fluoresce.Write("OrchisGuildChat", "10001", []);
		await global.Module.Fluoresce.Create("OrchisChatID", "incremental", 0, "10001");
	}
}
InitFluoresce();

Orchis.use(compression());
Orchis.use(express.static('static'));
Orchis.disable('x-powered-by');
Orchis.use(function (req, res, next) {
    let data = [];
    req.on('data', chunk => {
        data.push(chunk);
    });
    req.on('end', () => {
        req.body = Buffer.concat(data);
        next();
    });
    req.on('error', (err) => {
        console.error('Error processing request body:', err);
        res.status(500).end('Error processing request');
    });
});
let server = {};
if (global.Config['SSL'] == true) {
	server = https.createServer({
			key: fs.readFileSync(global.Config['Certs']['key']),
			cert: fs.readFileSync(global.Config['Certs']['cert']),
			ca: fs.readFileSync(global.Config['Certs']['ca'])
		}, Orchis).listen(global.Config['Port'], function() {
		console.log("Orchis system, clear. Server passphrase is " + Passphrase);
	});	
}
else {
	server = http.createServer(Orchis).listen(global.Config['Port'], function() {
		console.log("Orchis system, clear. Passphrase: " + Passphrase);
	});
}

Orchis.get("/dragalipatch/config", async (req, res) => {
	res.end(JSON.stringify(global.Config['Patch']));
	return;
});
Orchis.get("/assetver", async (req, res) => {
	res.end(JSON.stringify(AssetList));
	return;
});
Orchis.get("/zena/get_team_data", global.Mesh(async (req,res) => {
	if (req.get('Authorization') != global.Config['Zena']['Token']) { res.end("Authentication Failed.\n"); return; }
	const ViewerID = req.query.id;
	const TeamID = parseInt(req.query.teamnum);
	const TeamID2 = parseInt(req.query.teamnum2);
	const AccountData = await global.Module.Fluoresce.Read("OrchisAccount", ViewerID);
	const PersistData = await global.Module.Fluoresce.Read("OrchisPersist", AccountData['PersistID']);
	const PartyList = await global.Module.Fluoresce.Read("OrchisIndex", AccountData['ViewerID'], "party_list");
	const Team1Data = PartyList.find(x => x.party_no == TeamID);
	let Response = {
		'name': PersistData['User']['name'],
		'unit1': Team1Data['party_setting_list'][0]['chara_id'],
		'unit2': Team1Data['party_setting_list'][1]['chara_id'],
		'unit3': Team1Data['party_setting_list'][2]['chara_id'],
		'unit4': Team1Data['party_setting_list'][3]['chara_id']
	}
	if (TeamID2 != -1) {
		const Team2Data = PartyList.find(x => x.party_no == TeamID2);
		Response['unit5'] = Team2Data['party_setting_list'][0]['chara_id'];
		Response['unit6'] = Team2Data['party_setting_list'][1]['chara_id'];
		Response['unit7'] = Team2Data['party_setting_list'][2]['chara_id'];
		Response['unit8'] = Team2Data['party_setting_list'][3]['chara_id'];
	}
	res.type('application/json');
	res.end(JSON.stringify(Response));
	return;
}));
Orchis.post("/zena/send_guild_message", global.Mesh(async (req,res) => {
	if (req.get('Authorization') != global.Config['Zena']['Token']) { res.end("Authentication Failed.\n"); return; }
	const JSONData = JSON.parse(req.body);
	const NextMessageID = await global.Module.Fluoresce.ReadIncrement("OrchisChatID", "10001");
	let ChatMessage = {
		'chat_message_id': NextMessageID,
		'viewer_id': 999999999,
		'user_name': JSONData['name'],
		'profile_entity_type': JSONData['icon']['type'],
		'profile_entity_id': JSONData['icon']['id'],
		'profile_entity_rarity': 5,
		'chat_message_type': 1,
		'chat_message_text': "",
		'chat_message_stamp_id': 0,
		'chat_message_system_id': 0,
		'chat_message_param_value_1': 0,
		'chat_message_param_value_2': 0,
		'chat_message_param_value_3': 0,
		'chat_message_param_value_4': 0,
		'create_time': Math.floor(Date.now() / 1000)
	};
	if (JSONData['type'] == "text") {
		ChatMessage['chat_message_text'] = JSONData['message'];
	}
	else if (JSONData['type'] == "stamp") {
		ChatMessage['chat_message_type'] = 2;
		ChatMessage['chat_message_stamp_id'] = JSONData['stamp'];
	}
	else if (JSONData['type'] == "co-op") {
		ChatMessage['chat_message_type'] = 4;
		ChatMessage['chat_message_text'] = JSONData['message'];
		ChatMessage['chat_message_param_value_1'] = JSONData['special']['param_1'];
		ChatMessage['chat_message_param_value_2'] = JSONData['special']['param_2'];
		ChatMessage['chat_message_param_value_3'] = JSONData['special']['param_3'];
		ChatMessage['chat_message_param_value_4'] = JSONData['special']['param_4'];
		ChatMessage['create_time'] = Math.floor(Date.now() / 1000);
	}
	await global.Module.Fluoresce.Append("OrchisGuildChat", "10001", [ ChatMessage ]);
	res.end();
	return;
}));
Orchis.post("/zena/request_index", global.Mesh(async (req,res) => {
	if (req.get('Authorization') != global.Config['Zena']['Token']) { res.end("Authentication Failed.\n"); return; }
	const ViewerID = req.query.id;
	const IsExists = await global.Module.Fluoresce.Exists("OrchisIndex", String(ViewerID));
	if (IsExists == false) {
		res.end(JSON.stringify({
			'Exists': false,
			'Index': {}
		}));
		return;
	}
	UserIndexRecord = await global.Module.Fluoresce.DirectRead("OrchisIndex", String(ViewerID));
	res.end(JSON.stringify({
		'Exists': true,
		'Index': {
			'chara_list': UserIndexRecord['chara_list'],
			'dragon_list': UserIndexRecord['dragon_list'],
			'weapon_body_list': UserIndexRecord['weapon_body_list'],
			'ability_crest_list': UserIndexRecord['ability_crest_list'],
			'party_list': UserIndexRecord['party_list']
		}
	}));
	return;
}));

async function PerformSSLRequest(TargetURL, TargetPort, TargetPath, TargetMethod, TargetHeaders, Data) {
	const Reply = await new Promise((resolve, reject) => {
		const OutRequest = https.request({
			host: TargetURL,
			port: TargetPort,
			path: TargetPath,
			method: TargetMethod,
			headers: TargetHeaders
		}, (res) => {
			const TimeOut = setTimeout(() => {
				res.destroy();
				resolve(408);
			}, 3000);
			let ResponseData = "";
			res.on('data', function (chunk) {
				ResponseData += chunk;
			});
			res.on('end', function () {
				try {
					const Decoded = JSON.parse(ResponseData);
					clearTimeout(TimeOut);
					resolve(Decoded);
				} catch (e) {
					return {};
				}
			});
			res.on('error', function () { resolve({}); });
		});
		OutRequest.write(Data);
		OutRequest.end();
	});
	return Reply;
}
async function PerformRequest(TargetURL, TargetPort, TargetPath, TargetMethod, TargetHeaders, Data) {
	const Reply = await new Promise((resolve, reject) => {
		const OutRequest = http.request({
			host: TargetURL,
			port: TargetPort,
			path: TargetPath,
			method: TargetMethod,
			headers: TargetHeaders
		}, (res) => {
			const TimeOut = setTimeout(() => {
				res.destroy();
				resolve(408);
			}, 3000);
			let ResponseData = "";
			res.on('data', function (chunk) {
				ResponseData += chunk;
			});
			res.on('end', function () {
				try {
					const Decoded = JSON.parse(ResponseData);
					clearTimeout(TimeOut);
					resolve(Decoded);
				} catch (e) {
					return {};
				}
			});
			res.on('error', function () { resolve({}); });
		});
		OutRequest.write(Data);
		OutRequest.end();
	});
	return Reply;
}
async function StateRequest(Path) {
	const Reply = await PerformSSLRequest(
		global.Config['Photon']['StateURL'],
		global.Config['Photon']['StatePort'],
		Path,
		'GET',
		{},
		""
	);
	return Reply;
}
async function SendToZena(TargetPath, Data) {
	if (global.Config['Zena']['Enabled'] != true) { return {}; }
	const Reply = await PerformRequest(
		global.Config['Zena']['Host'],
		global.Config['Zena']['Port'],
		TargetPath,
		"POST",
		{
			'Content-Type': "application/json",
			'Authorization': global.Config['Zena']['Token']
		},
		JSON.stringify(Data)
	);
	return Reply;
}
async function GetRoomList() {
	let OpenRooms = [];
	const RoomList = await StateRequest("/get/gamelist");
	for (const x in RoomList) {
		const IsMatch = true; //QuestMap.IsQuestTypeMatchMulti(MsgPackData['tab_type'], RoomList[y]['questId']);
		if (IsMatch == true) {
			const PlayerList = [];
			let HostTeamID = 0;
			for (let y in RoomList[x]['players']) {
				PlayerList.push({
					'viewerid': RoomList[x]['players'][y]['viewerId'],
					'party_no_list': RoomList[x]['players'][y]['partyNoList'],
					'is_first_clear': 0,
					'is_clear_party': 0
				});
				if (RoomList[x]['players'][y]['viewerId'] == RoomList[x]['hostViewerId']) {
					HostTeamID = RoomList[x]['players'][y]['partyNoList'][0];
				}
			}
			const HostAccount = await global.Module.Fluoresce.Read("OrchisAccount", RoomList[x]['hostViewerId']);
			const HostUser = await global.Module.Fluoresce.Read("OrchisPersist", HostAccount['PersistID'], 'User');
			const HostTeam = await global.Module.Fluoresce.Read("OrchisIndex", HostAccount['ViewerID'], "party_list", { 'party_no': HostTeamID });
			const HostLead = await global.Module.Fluoresce.Read("OrchisIndex", HostAccount['ViewerID'], "chara_list", { 'chara_id': HostTeam['party_setting_list'][0]['chara_id'] });
			const HostGuild = await global.Module.Fluoresce.Read("OrchisIndex", HostAccount['ViewerID'], "guild_data");
			OpenRooms.push({
				'room_id': RoomList[x]['roomId'],
				'room_name': RoomList[x]['name'],
				'region': RoomList[x]['region'],
				'language': RoomList[x]['language'],
				'status': 1,
				'entry_type': RoomList[x]['matchingType'],
				'entry_guild_id': HostGuild['guild_id'],
				'host_viewer_id': RoomList[x]['hostViewerId'],
				'host_name': HostUser['name'],
				'host_level': HostUser['level'],
				'leader_chara_id': HostLead['chara_id'],
				'leader_chara_level': HostLead['level'],
				'leader_chara_rarity': HostLead['rarity'],
				'quest_id': RoomList[x]['questId'],
				'quest_type': global.Module.Quest.GetInfo(RoomList[x]['questId'], "_DungeonType"),
				'room_member_list': PlayerList,
				'start_entry_time': parseInt(new Date(RoomList[x]['startEntryTime']).valueOf() / 1000),
				'entry_conditions': {
					'objective_text_id': RoomList[x]['entryConditions']['objectiveTextId'],
					'unaccepted_weapon_type_list': RoomList[x]['entryConditions']['unacceptedWeaponTypeList'],
					'unaccepted_element_type_list': RoomList[x]['entryConditions']['unacceptedElementTypeList'],
					'required_party_power': RoomList[x]['entryConditions']['requiredPartyPower']
				},
				'compatible_id': RoomList[x]['matchingCompatibleId'],
				'member_num': RoomList[x]['players'].length
			});
		}
	}
	return OpenRooms;
}

function DigitPIN() {
	return String(Math.floor((Math.random() * 999999) + 100000)).slice(0, 6);
}
function DefaultPersistRecord(ViewerID, SubjectID, BaaSName) {
	const PersistRecord = {
		'SubjectID': SubjectID,
		'BaaSName': BaaSName,
		'ViewerID': ViewerID,
		'PIN': DigitPIN(),
		'CreatedAt': global.ServerTime,
		'LastLogin': global.ServerTime,
		'SaveUpdatedAt': 0,
		'User': {
			'viewer_id': ViewerID,
			'name': "Euden",
			'level': 1,
			'exp': 0,
			'crystal': 400,
			'coin': 200000,
			'max_dragon_quantity': 750,
			'max_weapon_quantity': 750,
			'max_amulet_quantity': 750,
			'quest_skip_point': 10,
			'main_party_no': 1,
			'emblem_id': 40000001,
			'active_memory_event_id': 0,
			'mana_point': 500,
			'dew_point': 500,
			'build_time_point': 100,
			'last_login_time': global.ServerTime,
			'stamina_single': 18,
			'last_stamina_single_update_time': 0,
			'stamina_single_surplus_second': 0,
			'stamina_multi': 12,
			'last_stamina_multi_update_time': 0,
			'stamina_multi_surplus_second': 0,
			'tutorial_status': 0,
			'tutorial_flag_list': [],
			'prologue_end_time': 0,
			'is_optin': 0,
			'fort_open_time': 0,
			'create_time': global.ServerTime
		},
		'AccountState': 0,
		'LoginBonus': {
			'Display': true,
			'17': { 'DayCount': 0, 'IsComplete': false }
		},
		'Diamantium': 2000,
		'Gift': {
			'Normal': [],
			'Limited': [],
			'History': [],
			'ID': 10000
		},
		'Summon': {
			'Tenfold': 0,
			'DailyCount': 0,
			'ItemCount': 0,
			'History': [],
			'User': [],
			'Limit': [],
			'Redoable': [],
			'Sigil': []
		},
		'Fort': {
			'Smiths': {
				'max_carpenter_count': 99,
				'carpenter_num': 5,
				'working_carpenter_num': 0
			},
			'Production': {
				'RP': { 'speed': 0.03, 'max': 50000 },
				'DF': { 'speed': 0.03, 'max': 18 },
				'ST': { 'speed': 0.03, 'max': 144 }
			}
		},
		'DragonGift': [
			{ 'dragon_gift_id': 10001, 'price': 0, 'is_buy': 1 },
			{ 'dragon_gift_id': 10002, 'price': 1500, 'is_buy': 1 },
			{ 'dragon_gift_id': 10003, 'price': 4000, 'is_buy': 1 },
			{ 'dragon_gift_id': 10004, 'price': 8000, 'is_buy': 1 },
			{ 'dragon_gift_id': DragonItem, 'price': 12000, 'is_buy': 1 }
		],
		'Item': [
			{ 'item_id': 100601, 'quantity': 50 },
			{ 'item_id': 100602, 'quantity': 30 },
			{ 'item_id': 100603, 'quantity': 15 },
			{ 'item_id': 100606, 'quantity': 10 },
			{ 'item_id': 100701, 'quantity': 60 },
			{ 'item_id': 100702, 'quantity': 20 }
		],
		'Key': {
			'Weapon': 10000,
			'Amulet': 20000,
			'Build': 30000,
			'Dragon': 40000,
			'Talisman': 50000
		},
		'Dungeon': {},
		'Wall': {},
		'WallRewardTime': global.ServerTime,
		'DMode': {
			'State': {},
			'Info': {},
			'Dungeon': {},
			'Passive': [],
			'Expedition': {
				'chara_id_1': 0,
				'chara_id_2': 0,
				'chara_id_3': 0,
				'chara_id_4': 0,
				'start_time': 0,
				'target_floor_num': 0,
				'state': 0
			},
			'CharacterList': [],
			'StoryList': [],
			'Recovery': 0
		},
		'Endeavour': {
			'Normal': [],
			'Daily': [],
			'Drill': [],
			'Period': [],
			'Beginner': [],
			'Special': [],
			'Campaign': [],
			'Memory': [],
			'Album': [],
			'Tracker': {
				'Daily': {
					'Quests': 0
				},
				'Event': {},
				'Album': {
					'Element': { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "99": 0 },
					'Weapon': { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0 },
					'Type': { "1": 0, "2": 0, "3": 0, "4": 0 }
				}
			}
		},
		'Medals': [],
		'Sets': {
			'Crest': global.Module.IndexTools.DefaultPrintSet,
			'Equip': {}
		},
		'Event': {},
		'Epithet': [
			{ 'emblem_id': 10140101, 'is_new': 0, 'gettime': global.ServerTime }
		],
		'Support': {
			'last_active_time': global.ServerTime,
			'chara_id': 10140101,
			'equip_dragon_key_id': 0,
			'equip_weapon_body_id': 0,
			'equip_crest_slot_type_1_crest_id_1': 0,
			'equip_crest_slot_type_1_crest_id_2': 0,
			'equip_crest_slot_type_1_crest_id_3': 0,
			'equip_crest_slot_type_2_crest_id_1': 0,
			'equip_crest_slot_type_2_crest_id_2': 0,
			'equip_crest_slot_type_3_crest_id_1': 0,
			'equip_crest_slot_type_3_crest_id_2': 0,
			'equip_talisman_key_id': 0,
			'user_level_group': 0
		},
		'CrestTrade': [],
		'Options': {
			'is_enable_auto_lock_unit': 1,
			'is_auto_lock_dragon_sr': 0,
			'is_auto_lock_dragon_ssr': 1,
			'is_auto_lock_weapon_sr': 0,
			'is_auto_lock_weapon_ssr': 1,
			'is_auto_lock_amulet_sr': 0,
			'is_auto_lock_amulet_ssr': 1
		},
		'Stickers': global.Module.IndexTools.StickerList,
		'Analytics': { 'SummonCount': 0 },
		'GuildLastCheck': global.ServerTime,
		'Dawn': false,
		'Stamina': false
	}
	return PersistRecord;
}
async function CreateAccountShell(SubjectID, Token) {
	let BaaSName = "";
	const Response = await PerformSSLRequest(
		global.Config['BaaS']['URL'],
		443,
		global.Config['BaaS']['NamePath'],
		'GET',
		{ 'Authorization': "Bearer " + Token },
		""
	);
	if (Response != 408) { BaaSName = Response; }
	
	const ViewerID = await global.Module.Fluoresce.ReadIncrement("OrchisKeyID", "ViewerID");
	const PersistID = crypto.randomBytes(32).toString("hex");
	const IDRecord = { 'ViewerID': ViewerID, 'PersistID': PersistID };
	const PersistRecord = DefaultPersistRecord(ViewerID, SubjectID, BaaSName);
	return [IDRecord, PersistRecord];
}
async function AssignGuild(res, GuildID) {
	const UserGuildData = {
		'guild_id': GuildID,
		'guild_apply_id': 0,
		'penalty_end_time': 0,
		'guild_push_notification_type_running': 0,
		'guild_push_notification_type_suspending': 0,
		'profile_entity_type': 1,
		'profile_entity_id': 10140101,
		'profile_entity_rarity': 5,
		'last_attend_time': 0,
		'is_enable_invite_receive': 0,
		'is_enable_invite_send': 0
	}
	const GuildBoardData = await global.Module.Fluoresce.Read("OrchisGuildBoard", String(GuildID));
	await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, GuildBoardData, "guild_data");
	await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, UserGuildData, "user_guild_data");
	await global.Module.Fluoresce.Write("OrchisGuildUser", String(GuildID), {
		'viewer_id': res.mid.ViewerID,
		'user_name': res.mid.Persist['User']['name'],
		'user_level': res.mid.Persist['User']['level'],
		'max_party_power': 50000,
		'profile_entity_type': 1,
		'profile_entity_id': 10140101,
		'profile_entity_rarity': 5,
		'last_active_time': global.ServerTime,
		'last_guild_active_time': 0,
		'last_attend_time': global.ServerTime,
		'guild_position_type': 3,
		'temporary_end_time': 0
	}, false, { 'viewer_id': res.mid.ViewerID });
	return UserGuildData;
}

async function SaveDatabases() {
	await global.Module.Fluoresce.Save("OrchisID");
	await global.Module.Fluoresce.Save("OrchisAccount");
	await global.Module.Fluoresce.Save("OrchisPersist");
	await global.Module.Fluoresce.Save("OrchisIndex");
	await global.Module.Fluoresce.Save("OrchisAnalytics");
	await global.Module.Fluoresce.Save("OrchisDPS");
	await global.Module.Fluoresce.Save("OrchisTeam");
	await global.Module.Fluoresce.Save("OrchisGuildBoard");
	await global.Module.Fluoresce.Save("OrchisGuildUser");
	await global.Module.Fluoresce.Save("OrchisGuildChat");
}
async function Refresh() {
	while (true) {
		await new Promise(resolve => setTimeout(resolve, 180000));
		AssetList = JSON.parse(fs.readFileSync('./Library/Event/AssetList.json'));
		SupportData = JSON.parse(fs.readFileSync('./Library/Event/Support.json'));
		ActiveBonusList = JSON.parse(fs.readFileSync('./Library/Event/EventBonus.json'));
		BannerList = JSON.parse(fs.readFileSync('./Library/Event/BannerList.json'));
		EventList = JSON.parse(fs.readFileSync('./Library/Event/EventList.json'));
		MaintenanceXML = String(fs.readFileSync('./static/maintenance.xml'));
		IndexPage = String(fs.readFileSync(global.Config['Index']));
		AdvancedIndexPage = String(fs.readFileSync(global.Config['AdvancedIndex']));
		
		global.ServerTime = Math.floor(Date.now() / 1000);
	}
}
async function ServerReset() {
	while (true) {
		await new Promise(resolve => setTimeout(resolve, (NextServerReset * 1000)));
		LastServerReset = GetDayBegin();
		NextServerReset = 86400 - (Math.floor(Date.now() / 1000) - LastServerReset);
		DayEnd = GetDayEnd();
		DayNumber = GetDayNo();
		DragonItem = GetDragonItem(LastServerReset);
		ResetTimes = {
			'Daily': LastServerReset,
			'Weekly': GetWeeklyReset(),
			'Monthly': GetMonthlyReset(1),
			'Wall': GetMonthlyReset(15)
		}
		SummonOddsList = global.Module.Director.GenerateOdds(BannerList);
		//MainQuestRotationSet = JSON.parse(fs.readFileSync('./Library/Event/QuestMainRotation.json'));
		
		global.ServerTime = Math.floor(Date.now() / 1000);
		global.LogFile.end();
		global.LogFile = fs.createWriteStream('./Library/Log/' + LastServerReset + '.txt');
		
		if (MasterUpdated == 1) {
			MasterList = fs.readdirSync('./Library/Master');
			for (const x in MasterList) {
				global.Master[MasterList[x].slice(0, MasterList[x].length - 5)] = JSON.parse(fs.readFileSync('./Library/Master/' + MasterList[x]));
			}
			MasterUpdated = 0;
		}
	}
}
Refresh();
ServerReset();

Orchis.get(["/", "/index", "/index.html"], async (req, res) => {
	res.set("content-type", "text/html");
	if (req.query.pf == "android" || req.query.pf == "ios") { res.end(AdvancedIndexPage); }
	else { res.end(IndexPage); }
	return;
});
Orchis.get("/request_index", async (req, res) => {
	let ViewerID = req.query.id;
	const Key = req.query.key;
	
	if (ViewerID.includes(" ")) {
		const Split = req.query.id.split(" ");
		if (Split[0].slice(0, 1) == "0") { Split[0] = Split[0].slice(1, Split[0].length); }
		ViewerID = "";
		for (const x in Split) {
			ViewerID += Split[x];
		}
	}
	
	const AccountExists = await global.Module.Fluoresce.Exists("OrchisAccount", ViewerID);
	if (AccountExists == false) { res.end("Invalid ID."); return; }
	const UserAccount = await global.Module.Fluoresce.Read("OrchisAccount", ViewerID);
	if (UserAccount == false) { res.end("Invalid ID."); return; }
	
	const UserPersist = await global.Module.Fluoresce.Read("OrchisPersist", UserAccount['PersistID']);
	if (String(Key) != UserPersist['PIN']) { res.end("Incorrect PIN."); return; }
	
	let UserIndex = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID);
	UserIndex['user_data'] = UserPersist['User'];
	UserIndex['fort_bonus_list'] = {
		'param_bonus': [
			{ "weapon_type": 1, "hp": 0, "attack": 0 },
			{ "weapon_type": 2, "hp": 0, "attack": 0 },
			{ "weapon_type": 3, "hp": 0, "attack": 0 },
			{ "weapon_type": 4, "hp": 0, "attack": 0 },
			{ "weapon_type": 5, "hp": 0, "attack": 0 },
			{ "weapon_type": 6, "hp": 0, "attack": 0 },
			{ "weapon_type": 7, "hp": 0, "attack": 0 },
			{ "weapon_type": 8, "hp": 0, "attack": 0 },
			{ "weapon_type": 9, "hp": 0, "attack": 0 }
		],
		'param_bonus_by_weapon': [
			{ "weapon_type": 1, "hp": 0, "attack": 0 },
			{ "weapon_type": 2, "hp": 0, "attack": 0 },
			{ "weapon_type": 3, "hp": 0, "attack": 0 },
			{ "weapon_type": 4, "hp": 0, "attack": 0 },
			{ "weapon_type": 5, "hp": 0, "attack": 0 },
			{ "weapon_type": 6, "hp": 0, "attack": 0 },
			{ "weapon_type": 7, "hp": 0, "attack": 0 },
			{ "weapon_type": 8, "hp": 0, "attack": 0 },
			{ "weapon_type": 9, "hp": 0, "attack": 0 }
		],
		'element_bonus': [
			{ "elemental_type": 1, "hp": 0, "attack": 0 },
			{ "elemental_type": 2, "hp": 0, "attack": 0 },
			{ "elemental_type": 3, "hp": 0, "attack": 0 },
			{ "elemental_type": 4, "hp": 0, "attack": 0 },
			{ "elemental_type": 5, "hp": 0, "attack": 0 },
			{ "elemental_type": 99, "hp": 0, "attack": 0 }
		],
		'dragon_bonus': [
			{ "elemental_type": 1, "dragon_bonus": 0, "hp": 0, "attack": 0 },
			{ "elemental_type": 2, "dragon_bonus": 0, "hp": 0, "attack": 0 },
			{ "elemental_type": 3, "dragon_bonus": 0, "hp": 0, "attack": 0 },
			{ "elemental_type": 4, "dragon_bonus": 0, "hp": 0, "attack": 0 },
			{ "elemental_type": 5, "dragon_bonus": 0, "hp": 0, "attack": 0 },
			{ "elemental_type": 99, "dragon_bonus": 0, "hp": 0, "attack": 0 }
		],
		'chara_bonus_by_album': [
			{ "elemental_type": 1, "hp": 0, "attack": 0 },
			{ "elemental_type": 2, "hp": 0, "attack": 0 },
			{ "elemental_type": 3, "hp": 0, "attack": 0 },
			{ "elemental_type": 4, "hp": 0, "attack": 0 },
			{ "elemental_type": 5, "hp": 0, "attack": 0 },
			{ "elemental_type": 99, "hp": 0, "attack": 0 }
		],
		'dragon_bonus_by_album': [
			{ "elemental_type": 1, "hp": 0, "attack": 0 },
			{ "elemental_type": 2, "hp": 0, "attack": 0 },
			{ "elemental_type": 3, "hp": 0, "attack": 0 },
			{ "elemental_type": 4, "hp": 0, "attack": 0 },
			{ "elemental_type": 5, "hp": 0, "attack": 0 },
			{ "elemental_type": 99, "hp": 0, "attack": 0 }
		],
		'all_bonus': {
			'hp': 0.0,
			'attack': 0.0
		},
		'dragon_time_bonus': {
			'dragon_time_bonus': 0.0
		}
	}
	res.set({"content-type": "application/json", 'access-control-allow-origin': "*"});
	res.end(JSON.stringify({
		'data_headers': {},
		'data': UserIndex,
		'extend': {
			'origin': "Orchis",
			'dmode': {
				'dusk_amber': UserPersist['DMode']['Info'] != undefined ? UserPersist['DMode']['Info']['dmode_point_1'] : 0,
				'dawn_amber': UserPersist['DMode']['Info'] != undefined ? UserPersist['DMode']['Info']['dmode_point_2'] : 0,
			},
			'diamantium': UserPersist['Diamantium'],
			'stamina_items': UserPersist['Item']
		}
	}));
});
Orchis.get("/damage_stat", async (req, res) => {
	let ViewerID = req.query.id;
	const Key = req.query.key;
	
	if (ViewerID.includes(" ")) {
		const Split = req.query.id.split(" ");
		if (Split[0].slice(0, 1) == "0") { Split[0] = Split[0].slice(1, Split[0].length); }
		ViewerID = "";
		for (const x in Split) {
			ViewerID += Split[x];
		}
	}
	
	const AccountExists = await global.Module.Fluoresce.Exists("OrchisAccount", ViewerID);
	if (AccountExists == false) { res.end("Invalid ID."); return; }
	const UserAccount = await global.Module.Fluoresce.Read("OrchisAccount", ViewerID);
	if (UserAccount == false) { res.end("Invalid ID."); return; }
	
	const DamageRecord = await global.Module.Fluoresce.ReadList("OrchisDPS", UserAccount['ViewerID'], 10);
	res.end(JSON.stringify(DamageRecord));
});

let HalidomDataList = {
	'icons': [],
	'stickers': [],
	'ability': [],
	'quest': []
};
Object.values(global.Master.CharaData).forEach((Unit) => {
	if (Unit['_IsPlayable'] == 1) {
		let Name = "";
		if (global.Master.TextLabel[Unit['_SecondName']] != undefined) {
			Name = global.Master.TextLabel[Unit['_SecondName']]['_Text'];
		}
		else {
			Name = global.Master.TextLabel[Unit['_Name']]['_Text'];
		}
		HalidomDataList['icons'].push({
			'type': 1,
			'id': Unit['_Id'],
			'base': Unit['_BaseId'],
			'alt': Unit['_VariationId'],
			'name': Name
		});
	}
});
Object.values(global.Master.DragonData).forEach((Unit) => {
	if (Unit['_IsPlayable'] == 1) {
		let Name = "";
		if (global.Master.TextLabel[Unit['_SecondName']] != undefined) {
			Name = global.Master.TextLabel[Unit['_SecondName']]['_Text'];
		}
		else {
			Name = global.Master.TextLabel[Unit['_Name']]['_Text'];
		}
		HalidomDataList['icons'].push({
			'type': 7,
			'id': Unit['_Id'],
			'base': Unit['_BaseId'],
			'alt': Unit['_VariationId'],
			'name': Name
		});
	}
});
Object.values(global.Master.MaterialData).forEach((Unit) => {
	HalidomDataList['icons'].push({
		'type': 8,
		'id': Unit['_Id']
	});
});
Object.values(global.Master.WeaponData).forEach((Unit) => {
	if (Unit['_IsPlayable'] == 1) {
		HalidomDataList['icons'].push({
			'type': 38,
			'id': Unit['_Id'],
			'base': Unit['_BaseId'],
			'alt': Unit['_VariationId'],
			'form': Unit['_FormId'],
			'name': global.Master.TextLabel[Unit['_Name']] != undefined ? global.Master.TextLabel[Unit['_Name']]['_Text'] : ""
		});
	}
});
Object.values(global.Master.AbilityCrest).forEach((Unit) => {
	if (Unit['_IsPlayable'] == 1) {
		HalidomDataList['icons'].push({
			'type': 39,
			'id': Unit['_Id'],
			'base': Unit['_BaseId'],
			'alt': Unit['_VariationId'],
			'name': global.Master.TextLabel[Unit['_Name']] != undefined ? global.Master.TextLabel[Unit['_Name']]['_Text'] : ""
		});
	}
});
Object.values(global.Master.TalismanData).forEach((Unit) => {
	HalidomDataList['icons'].push({
		'type': 41,
		'id': Unit['_Id'],
		'character': Unit['_TalismanCharaId']
	});
});
Object.values(global.Master.StampData).forEach((Sticker) => {
	HalidomDataList['stickers'].push({
		'type': 11,
		'id': Sticker['_Id']
	});
});
Object.values(global.Master.AbilityData).forEach((Unit) => {
	HalidomDataList['ability'].push({
		'id': Unit['_Id'],
		'name': global.Master.TextLabel[Unit['_Name']] != undefined ? global.Master.TextLabel[Unit['_Name']]['_Text'] : "",
		'icon': Unit['_AbilityIconName']
	});
});
Object.values(global.Master.QuestData).forEach((Unit) => {
	HalidomDataList['quest'].push({
		'id': Unit['_Id'],
		'name': global.Master.TextLabel[Unit['_QuestViewName']] != undefined ? global.Master.TextLabel[Unit['_QuestViewName']]['_Text'] : ""
	});
});
Orchis.get("/halidom/icons", async (req, res) => {
	res.set({"content-type": "application/json", 'access-control-allow-origin': "*"});
	res.end(JSON.stringify(HalidomDataList));
});
Orchis.get("/halidom/login", global.Mesh(async (req, res) => {
	let ViewerID = req.query.id;
	const Key = req.query.key;
	
	if (ViewerID.includes(" ")) {
		const Split = req.query.id.split(" ");
		if (Split[0].slice(0, 1) == "0") { Split[0] = Split[0].slice(1, Split[0].length); }
		ViewerID = "";
		for (const x in Split) {
			ViewerID += Split[x];
		}
	}
	
	const AccountExists = await global.Module.Fluoresce.Exists("OrchisAccount", ViewerID);
	if (AccountExists == false) { res.end("Invalid ID."); return; }
	const UserAccount = await global.Module.Fluoresce.Read("OrchisAccount", ViewerID);
	if (UserAccount == false) { res.end("Invalid ID."); return; }
	
	const UserPersist = await global.Module.Fluoresce.Read("OrchisPersist", UserAccount['PersistID']);
	if (String(Key) != UserPersist['PIN']) { res.end("Incorrect PIN."); return; }
	
	const UserGuildData = await global.Module.Fluoresce.Read("OrchisIndex", UserAccount['ViewerID'], "user_guild_data");
	let BaseID = 0;
	let AltID = 0;
	if (UserGuildData['profile_entity_type'] == 1) {
		BaseID = global.Module.Character.GetInfo(UserGuildData['profile_entity_id'], "_BaseId");
		AltID = global.Module.Character.GetInfo(UserGuildData['profile_entity_id'], "_VariationId");
	}
	else if (UserGuildData['profile_entity_type'] == 7) {
		BaseID = global.Module.Dragon.GetInfo(UserGuildData['profile_entity_id'], "_BaseId");
		AltID = global.Module.Dragon.GetInfo(UserGuildData['profile_entity_id'], "_VariationId");
	}
	res.set({"content-type": "application/json", 'access-control-allow-origin': "*"});
	res.end(JSON.stringify({
		'sid': UserAccount['PersistID'],
		'user_name': UserPersist['User']['name'],
		'guild_id': 10001,
		'profile_entity_type': UserGuildData['profile_entity_type'],
		'profile_entity_id': UserGuildData['profile_entity_id'],
		'profile_base_id': BaseID,
		'profile_alt_id': AltID,
		'guild_push_notification_type_running': UserGuildData['guild_push_notification_type_running'],
		'guild_push_notification_type_suspending': UserGuildData['guild_push_notification_type_suspending']
	}));
}));

const IgnoreList = [
	"/dungeon_record/record", "/tool/get_service_status", "/load/index",
	"/eula/get_version_list", "/eula/get_version", "/deploy/get_deploy_version",
	"/version/get_resource_version", "/webview_version/url_list"
];
const StandardResponse = {
	'/maintenance/get_text': { "maintenance_text": MaintenanceXML },
	'/tool/get_service_status': { "service_status": 1 },
	'/login/verify_jws': { "result_code": 1 },
	'/eula/get_version_list': {
		"version_hash_list": [
			{"region": "us", "lang": "en_us", "eula_version": 1, "privacy_policy_version": 1}
		]
	},
	'/eula/get_version': {
		"version_hash": { "region": "us", "lang": "us_en", "eula_version": 1, "privacy_policy_version": 1 },
		"agreement_status": 1,
		"is_required_agree": false
	},
	'/eula_agree/agree': {
		"version_hash": { "region": "us", "lang": "us_en", "eula_version": 1, "privacy_policy_version": 1 }
	},
	'/deploy/get_deploy_version': { "deploy_hash": "Ceryphim" },
	'/webview_version/url_list': { "webview_url_list": global.Config['PageURLs'] },
	'/redoable_summon/get_data': global.Module.IndexTools.Redoable,
	'/friend/friend_index': { 'friend_count': 0 },
	'/summon_exclude/get_list': { "summon_exclude_list": [] },
	'/mission/get_drill_mission_list': {
		'drill_mission_list': [],
		'current_main_story_mission': [],
		'drill_mission_group_list': [],
		'mission_notice': []
	},
	'/mission/unlock_drill_mission_group': { 'drill_mission_list': [] },
	'/push_notification/update_setting': { 'result': 1 },
	'/shop/item_summon_odd': { 'item_summon_rate_list': [] },
	'/fort/add_carpenter': { 'result': 1 },
	'/matching/check_penalty_user': { 'result': 1 },
	'/matching/get_room_list_by_location': { 'room_list': [] },
	'/suggestion/get_category_list': { 'category_list': [
		{ 'category_id': 1, 'name': "Requests" },
		{ 'category_id': 2, 'name': "Bug Report" },
		{ 'category_id': 3, 'name': "Save Modifications" }
	]},
	'/cartoon/top': {
		"top": {
			"id_1st": 9,
			"id": 1916,
			"episode": 468,
			"title": "That's a Wrap!",
			"image": "https://dragalialost.akamaized.net/attached/cartoon/images/bafb6a3cd4b9207ae60e67ee5b4d2801.png"
		},
		"text_list": [
			{
				"message_id": "back_to_comic_list",
				"text": "View All",
				"function_name": "comic"
			},
			{
				"message_id": "comic_banner",
				"text": "https://dragalialost.akamaized.net/static/image/comic/localized/en_us/banner_top_comic_01_webview.png",
				"function_name": "comic"
			},
			{
				"message_id": "comic_episode_format",
				"text": "#%s",
				"function_name": "comic"
			},
			{
				"message_id": "comic_help_link_image",
				"text": "https://dragalialost.akamaized.net/static/image/comic/localized/en_us/btn_helpcomic_01.png\t",
				"function_name": "comic"
			},
			{
				"message_id": "comic_link_image_plotsynopsis",
				"text": "https://dragalialost.akamaized.net/static/image/comic/localized/en_us/btn_comic_01.png",
				"function_name": "comic"
			},
			{
				"message_id": "comic_update_info",
				"text": "#%s added!",
				"function_name": "comic"
			},
			{
				"message_id": "comic_update_info_accent",
				"text": "#%s added!",
				"function_name": "comic"
			},
			{
				"message_id": "plotsynopsis_banner",
				"text": "https://dragalialost.akamaized.net/static/image/comic/localized/en_us/banner_top_plotsynopsis_01_webview.png\t",
				"function_name": "comic"
			},
			{
				"message_id": "read_from_first_episode",
				"text": "Start from #1",
				"function_name": "comic"
			},
			{
				"message_id": "to_comic_help",
				"text": "Need help? Start here!",
				"function_name": "comic"
			}
		]
	},
	'/cartoon/latest/': {
		"latest": {
			"episode": 468
		}
	}
}
Orchis.use(async function (req, res, next) { // Record Manager
	LogFile.write(req.url + "\n");
	res.mid = {
		'Error': 0,
		'ViewerID': 0,
		'Data': {},
		'ItemList': [],
		'IsArchaea': false
	}
	
	if (req.url.includes("/heroparam/")) {
		const SplitURL = req.url.split("/");
		req.url = "/" + SplitURL[2] + "/" + SplitURL[3];
		res.mid.Request = JSON.parse(req.body);
		next(); 
		return;
	}
	
	const SlicedURL = req.url.slice(0, 7);
	if (SlicedURL == "/1.23.1") { res.mid.IsArchaea = true; }
	if (SlicedURL == "/2.19.0" || SlicedURL == "/1.23.1") {
		const SplitURL = req.url.split("/");
		req.url = "/" + SplitURL[2] + "/" + SplitURL[3];
		if (StandardResponse[req.url] != undefined) {
			res.mid.Data = StandardResponse[req.url];
			const Serialized = msgpack.pack({
				'data_headers': { 'result_code': 1 },
				'data': StandardResponse[req.url]
			});
			res.set(SetHeaders(Serialized.length)); res.end(Serialized);
			return;
		}
		if (req.get("UseJSON") == "true") {
			res.mid.UseJSON = true;
			res.mid.Request = JSON.parse(req.body);
		}
		else {
			try {
				res.mid.Request = msgpack.unpack(req.body);
			} catch {
				console.log("Failed to decode " + req.body + " as messagepack.");
			}
		}
	}
	
	if (req.url.includes("/../")) { res.end(); return; }
	else if (req.url.includes("/tool/auth")) { next(); return; }
	else if (req.url.endsWith("/dungeon_record/record_multi")) { next(); return; }
	else if (req.url.endsWith("/maintenance/get_text")) { next(); return; }
	else if (req.url.endsWith("/asset")) {
		if (req.get('passphrase') != global.Config['AssetPass']) { res.end("Denied.\n"); return; }
		next(); return;
	}
	else if (req.url.includes("/utility")) {
		if (req.get('passphrase') != Passphrase) { res.end("Denied.\n"); return; }
		next(); return;
	}
	else if (IsMaintenance == 1 && !req.url.endsWith("/dungeon_record/record")) { res.end(Maintenance); return; }
	if (req.url == "/api/v1/Session" || req.url == "/api/v1/MeasurementEvent") {
		req.url = "/null";
		next();
	}

	if (req.get("sid") != undefined) {
		res.mid.Persist = await global.Module.Fluoresce.Read("OrchisPersist", req.get("sid"));
		if (res.mid.Persist['AccountState'] != 0) {
			res.end(msgpack.pack({
				'data_headers': { 'result_code': res.mid.Persist['AccountState'] },
				'data': { 'result_code': res.mid.Persist['AccountState'] }
			})); return;
		}
		res.mid.ViewerID = res.mid.Persist['ViewerID'];
		res.mid.Prefunction = JSON.stringify(res.mid.Persist);
		const Resource = req.get("res-ver");
		if (Resource != undefined && !IgnoreList.includes(req.url)) {
			if (res.mid.IsArchaea == true) { next(); }
			if (res.mid.Persist['VanillaAssets'] == true) { next(); }
			if (req.get("platform") == 1 && Resource != AssetList['iOS_Manifest']) { res.end(AssetReply); return; }
			else if (req.get("platform") == 2 && Resource != AssetList['Android_Manifest']) { res.end(AssetReply); return; }
		}
	}
	
	next();
});

Orchis.post("/asset", async (req, res) => {
	const Param = req.query.param;
	let FileName = "";
	switch(Param) {
		case "upload_new_hash":
			AssetList = JSON.parse(req.body);
			fs.writeFileSync("./Library/Event/AssetList.json", req.body);
			res.end("Accepted new Asset List\n");
		break;
		case "master_updated":
			MasterUpdated = 1;
			res.end("Accepted.");
		break;
	}
	return;
});
Orchis.post("/utility", async (req, res) => {
	//-H "passphrase: passphrase" '/utility?param=set_state&id=1000000000&state=0'
	const Param = req.query.param;
	const Temp = {
		'Account': {},
		'Persist': {},
		'Write': false
	}
	if (req.query.id != undefined) {
		Temp['Account'] = await global.Module.Fluoresce.Read("OrchisAccount", req.query.id);
		if (Temp['Account'] == false) { res.end("Invalid account?\n"); return; }
	}
	
	switch(Param.toLowerCase()) {
		case "ban":
			if (req.query.id == undefined) { res.end("ID required.\n"); return; }
			Temp['Persist'] = await global.Module.Fluoresce.Read("OrchisPersist", Temp['Account']['Persist']);
			Temp['Persist']['AccountState'] = 102;
			Temp['Write'] = true;
		break;
		case "set_state":
			if (req.query.id == undefined) { res.end("ID required.\n"); return; }
			if (req.query.state == undefined) { res.end("State required.\n"); return }
			Temp['Persist'] = await global.Module.Fluoresce.Read("OrchisPersist", Temp['Account']['Persist']);
			Temp['Persist']['AccountState'] = parseInt(req.query.state);
			Temp['Write'] = true;
		break;
		case "get_baas_id":
			if (req.query.id == undefined) { res.end("ID required.\n"); return; }
			Temp['Persist'] = await global.Module.Fluoresce.Read("OrchisPersist", Temp['Account']['Persist']);
			res.end(Temp['Persist']['SubjectID'] + "\n");
		break;
		
		case "graceful_shutdown":
			IsMaintenance = 1;
			await global.Module.Fluoresce.Save();
			console.log("Awaiting shutdown.");
		break;
		case "unmaintenance":
			IsMaintenance = 0;
		break;
	}
	
	if (Temp['Write'] == true) {
		await global.Module.Fluoresce.Write("OrchisPersist", Temp['Account']['Persist'], Temp['Persist']);
	}
	res.end("Done.\n");
	return;
});

Orchis.post("/null", function(req, res) { res.status(202); res.end(); return; });
Orchis.post("/information/top", function(req, res) {
	res.mid.Data = { 'result_code': 1 };
	const Serialized = JSON.stringify(res.mid.Data);
	res.set(SetHeaders(Serialized.length, "JSON")); res.end(Serialized);
});

Orchis.post("/transition/transition_by_n_account", global.Mesh(async (req, res, next) => {
	const TokenData = jwt_decode(res.mid.Request['id_token']);
	let IDRecord = {};
	const IDExists = await global.Module.Fluoresce.Exists("OrchisID", TokenData['sub']);
	if (IDExists == false) {
		const NewAccount = await CreateAccountShell(TokenData['sub'], res.mid.Request['id_token']);
		IDRecord = NewAccount[0];
		NewAccount[1]['BaaSName'] = await PerformSSLRequest(
			global.Config['BaaS']['URL'],
			global.Config['BaaS']['Port'],
			global.Config['BaaS']['NamePath'],
			"GET", { 'content-type': "application/json", 'authorization': "Bearer " + res.mid.Request['id_token'] },
			""
		);
		await global.Module.Fluoresce.Write("OrchisAccount", IDRecord['ViewerID'], IDRecord);
		await global.Module.Fluoresce.Write("OrchisID", TokenData['sub'], IDRecord);
		await global.Module.Fluoresce.Write("OrchisPersist", IDRecord['PersistID'], NewAccount[1]);
	}
	else {
		IDRecord = await global.Module.Fluoresce.Read("OrchisID", TokenData['sub']);
		let BaaSName = "";
		const Response = await PerformSSLRequest(
			global.Config['BaaS']['URL'],
			443,
			global.Config['BaaS']['NamePath'],
			'GET',
			{ 'Authorization': "Bearer " + res.mid.Request['id_token'] },
			""
		);
		if (Response != 408) { BaaSName = Response; }
		const PersistRecord = await global.Module.Fluoresce.Read("OrchisPersist", IDRecord['PersistID']);
		PersistRecord['BaaSName'] = BaaSName;
		await global.Module.Fluoresce.Write("OrchisPersist", IDRecord['PersistID'], PersistRecord);
	}
	res.mid.Data = {
		'transition_result_data': {
			'abolished_viewer_id': 0,
			'linked_viewer_id': IDRecord['ViewerID']
		}
	}
	next();
}));
Orchis.post("/tool/signup", global.Mesh(async (req, res, next) => {
	const TokenData = jwt_decode(res.mid.Request['id_token']);
	const NewAccount = await CreateAccountShell(TokenData['sub'], res.mid.Request['id_token']);
	const IDRecord = NewAccount[0];
	await global.Module.Fluoresce.Write("OrchisAccount", IDRecord['ViewerID'], IDRecord);
	await global.Module.Fluoresce.Write("OrchisID", TokenData['sub'], IDRecord);
	await global.Module.Fluoresce.Write("OrchisPersist", IDRecord['PersistID'], NewAccount[1]);
	res.mid.Data = { 'viewer_id': IDRecord['ViewerID'] }
	next();
}));
Orchis.post("/tool/auth", global.Mesh(async (req, res, next) => {
	const TokenData = jwt_decode(res.mid.Request['id_token']);
	let IDRecord = await global.Module.Fluoresce.Read("OrchisID", TokenData['sub']);
	let PersistRecord = {};
	if (IDRecord['ViewerID'] == undefined) {
		const NewAccount = await CreateAccountShell(TokenData['sub'], res.mid.Request['id_token']);
		IDRecord = NewAccount[0];
		PersistRecord = NewAccount[1];
		global.Module.Fluoresce.Write("OrchisAccount", IDRecord['ViewerID'], IDRecord);
		global.Module.Fluoresce.Write("OrchisID", TokenData['sub'], IDRecord);
	}
	else {
		PersistRecord = await global.Module.Fluoresce.Read("OrchisPersist", IDRecord['PersistID']);
		if (PersistRecord['SubjectID'] == undefined) {
			PersistRecord = DefaultPersistRecord(IDRecord['PersistID'], TokenData['sub']);
		}
	}
	res.mid.ViewerID = PersistRecord['ViewerID'];
	if (PersistRecord['AccountState'] != 0) {
		res.end(msgpack.pack({
			'data_headers': { 'result_code': PersistRecord['AccountState'] },
			'data': { 'result_code': PersistRecord['AccountState'] }
		}));
		return;
	}
	if (PersistRecord['LastLogin'] < LastServerReset) {
		PersistRecord['PIN'] = DigitPIN();
		PersistRecord['LoginBonus']['Display'] = true;
		PersistRecord['LastLogin'] = Math.floor(Date.now() / 1000);
		await global.Module.Fluoresce.Write("OrchisPersist", IDRecord['PersistID'], PersistRecord);
		if (req.get("sid") != undefined) {
			res.mid.Error = 112;
			next();
			return;
		}
	}
	if (TokenData['sav:a'] == true && TokenData['sav:ts'] > PersistRecord['SaveUpdatedAt']) {
		const UserIndexRecord = await PerformSSLRequest(
			global.Config['BaaS']['URL'],
			global.Config['BaaS']['Port'],
			global.Config['BaaS']['IndexPath'],
			"POST", { 'content-type': "application/json" },
			JSON.stringify({ 'idToken': res.mid.Request['id_token'] })
		);
		await global.Module.IndexTools.OrchisImport(UserIndexRecord, res.mid.ViewerID, PersistRecord);
		await global.Module.Fluoresce.Write("OrchisTeam", IDRecord['ViewerID'], {});
	}
	PersistRecord['LastLogin'] = Math.floor(Date.now() / 1000);
	await global.Module.Fluoresce.Write("OrchisPersist", IDRecord['PersistID'], PersistRecord);
	res.mid.Data = {
		'viewer_id': IDRecord['ViewerID'],
		'session_id': IDRecord['PersistID'],
		'nonce': null
	}
	next();
}));

Orchis.post("/version/get_resource_version", async (req, res, next) => {
	// Analytics
		const AnalyticData = {
			'Platform': res.mid.Request['platform'],
			'DeviceID': req.get('DeviceId'),
			'DeviceName': req.get('DeviceName'),
			'OS': req.get('OS-Version'),
			'LastDeviceLogin': Date.now()
		}
		let AnalyticsData = await global.Module.Fluoresce.Read("OrchisAnalytics", res.mid.ViewerID);
		if (AnalyticsData[0] == undefined) {
			await global.Module.Fluoresce.Write("OrchisAnalytics", res.mid.ViewerID, [ AnalyticData ]);
		}
		else {
			let Duplicate = false;
			for (const a in AnalyticsData) {
				if (AnalyticsData[a]['DeviceID'] == AnalyticData['DeviceID']) {
					Duplicate = true;
					AnalyticsData[a]['OS'] = AnalyticData['OS'];
					AnalyticsData[a]['LastDeviceLogin'] = Date.now();
					break;
				}
			}
			
			if (Duplicate == false) {
				AnalyticsData.push(AnalyticData);
			}
			global.Module.Fluoresce.Write("OrchisAnalytics", res.mid.ViewerID, AnalyticsData);
		}
	// ---------
	let ResourceVersion = ""
	if (res.mid.Request['platform'] == 1) { ResourceVersion = AssetList['iOS_Manifest'] } else { ResourceVersion = AssetList['Android_Manifest'] }
	if (res.mid.Persist['Dawn'] == true) {
		if (OSType == 1) { ResourceVersion = "b1HyoeTFegeTexC0"; }
		else { ResourceVersion = "y2XM6giU6zz56wCm"; }
	}
	if (res.mid.IsArchaea == true) { ResourceVersion = "IeLazHAje7oFnpbV"; }
	res.mid.Data = { 'resource_version': ResourceVersion }
	next();
});

Orchis.post("/load/index", global.Mesh(async (req, res, next) => {
	res.mid.Data = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID);	
	res.mid.Data['user_data'] = res.mid.Persist['User'];
	res.mid.Data['user_treasure_trade_list'] = global.Module.Shop.SetLimitTrade(res.mid.Data['user_treasure_trade_list'], ResetTimes);
	res.mid.Data['mission_notice'] = global.Module.Endeavour.MissionNotice(res.mid.Persist);
	res.mid.Data['fort_bonus_list'] = await global.Module.Director.CalculateBonuses(res);
	res.mid.Data['server_time'] = global.ServerTime;
	res.mid.Data['multi_server'] = { 'host': global.Config['Photon']['URL'], 'app_id': "" }
	next();
}));
Orchis.post("/login/index", global.Mesh(async (req, res, next) => {
	await global.Module.Director.LoginBonus(
		res, ActiveBonusList, DragonItem,
		ResetTimes, LastServerReset,
		DayEnd, DayNumber
	);
	next();
}));
Orchis.post("/mypage/info", async (req, res, next) => {
	res.mid.Data = {
		'user_summon_list': res.mid.Persist['Summon']['User'],
		'is_shop_notification': 0,
		'is_view_start_dash': 0,
		'is_view_dream_select': 0,
		'quest_event_schedule_list': [],
		'quest_schedule_detail_list': global.Module.Director.GetQuestRotation(QuestRotation, EventList),
		'repeat_data': [],
		'is_receive_event_damage_reward': 0
	}
	next();
});
Orchis.post("/friend/get_support_chara", async (req, res, next) => {
	res.mid.Data = {
		'result': 1,
		'setting_support': res.mid.Persist['Support']
	}
	next();
});

Orchis.post("/mission/get_mission_list", async (req, res, next) => {
	res.mid.Data = global.Module.Endeavour.MissionList(res);
	next();
});
Orchis.post("/mission/receive_daily_reward", async (req, res, next) => {
	res.mid.Request['mission_params_list'].forEach((Mission) => {
		const MissionData = Object.values(global.Master.MissionDailyData).find(z => z._Id == Mission['daily_mission_id']);
		res.mid.ItemList.push({
			'type': MissionData['_EntityType'],
			'id': MissionData['_EntityId'],
			'quantity': MissionData['_EntityQuantity']
		});
		const MissionIndex = res.mid.Persist['Endeavour']['Daily'].findIndex(z => z.daily_mission_id == Mission['daily_mission_id']);
		res.mid.Persist['Endeavour']['Daily'][MissionIndex]['state'] = 2;
	});
	res.mid.Data = global.Module.Endeavour.MissionList(res);
	res.mid.Data['not_received_mission_id_list_with_day_no'] = [];
	res.mid.Data['need_entry_event_id_list'] = [];
	res.mid.Data['converted_entity_list'] = [];
	next();
});

Orchis.post("/tutorial/update_step", global.Mesh(async (req, res, next) => {
	if (res.mid.Request['step'] == 401) {
		res.mid.Index = global.Module.IndexTools.DefaultSaveData();
		global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, res.mid.Index);
	}
	
	res.mid.Persist['User']['tutorial_status'] = res.mid.Request['step'];
	res.mid.Data = {
		'step': res.mid.Request['step'],
		'update_data_list': { 'user_data': res.mid.Persist['User'] }
	}
	next();
}));
Orchis.post("/tutorial/update_flags", global.Mesh(async (req, res, next) => {
	res.mid.Persist['User']['tutorial_flag_list'].push(res.mid.Request['flag_id']);
	res.mid.Data['update_data_list'] = {
		'user_data': res.mid.Persist['User']
	}
	next();
}));
Orchis.post("/update/namechange", global.Mesh(async (req, res, next) => {
	res.mid.Request['name'] = String(res.mid.Request['name']);
	if (global.Module.Filter.Validate(res.mid.Request['name'])) { res.mid.Error = 1010; }
	else {
		if (res.mid.Request['name'].length > 12) {
			res.mid.Request['name'] = res.mid.Request['name'].slice(0, 12);
		}
		res.mid.Data = { 'checked_name': res.mid.Request['name'] }
		res.mid.Persist['User']['name'] = res.mid.Request['name'];
	}
	next();
}));
Orchis.post("/emblem/get_list", global.Mesh(async (req, res, next) => {
	res.mid.Data = { 'emblem_list': res.mid.Persist['Epithet'] }
	next();
}));
Orchis.post("/emblem/set", global.Mesh(async (req, res, next) => {
	res.mid.Persist['User']['emblem_id'] = res.mid.Request['emblem_id'];
	res.mid.Data = {
		'result': 1,
		'update_data_list': { 'user_data': res.mid.Persist['User'] }
	}
	next();
}));
Orchis.post("/option/get_option", global.Mesh(async (req, res, next) => {
	res.mid.Data = { 'option_data': res.mid.Persist['Options'] }
	next();
}));
Orchis.post("/option/set_option", global.Mesh(async (req, res, next) => {
	res.mid.Persist['Options'] = res.mid.Request['option_setting'];
	res.mid.Data = { 'option_data': res.mid.Persist['Options'] }
	next();
}));

Orchis.post("/party/set_main_party_no", global.Mesh(async (req, res, next) => {
	res.mid.Persist['User']['main_party_no'] = res.mid.Request['main_party_no'];
	res.mid.Data['main_party_no'] = res.mid.Request['main_party_no'];
	next();
}));
Orchis.post("/party/set_party_setting", global.Mesh(async (req, res, next) => {
	if (global.Module.Filter.Validate(res.mid.Request['party_name'])) {
		res.mid.Error = 1010;
	}
	else {
		res.mid.Data['update_data_list'] = {
			'party_list': [{
				'party_no': res.mid.Request['party_no'],
				'party_name': res.mid.Request['party_name'],
				'party_setting_list': res.mid.Request['request_party_setting_list']
			}]
		}
	}
	next();
}));
Orchis.post("/party/update_party_name", global.Mesh(async (req, res, next) => {
	if (global.Module.Filter.Validate(res.mid.Request['party_name'])) {
		res.mid.Error = 1010;
	}
	else {
		let PartyData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "party_list", { 'party_no': res.mid.Request['party_no'] });
		PartyData['party_name'] = res.mid.Request['party_name'];
		res.mid.Data['update_data_list'] = {
			'party_list': [ PartyData ]
		}
	}
	next();
}));

Orchis.post("/redoable_summon/pre_exec", async (req, res, next) => {
	let SummonList = [];
	while (SummonList.length < 50) {
		let Draw = {};
		const Result = Math.floor(Math.random() * 2) + 1
		if (Result == 1) { Draw = global.Module.Character.Draw(9900000, undefined, false, false); }
		else if (Result == 2) { Draw = global.Module.Dragon.Draw(9900000, undefined, false, false); }
		SummonList.push(Draw);
	}
	res.mid.Persist['Summon']['Redoable'] = SummonList;
	res.mid.Data = {
		'user_redoable_summon_data': {
			'is_fixed_result': 0,
			'redoable_summon_result_unit_list': SummonList
		}
	}
	next();
});
Orchis.post("/redoable_summon/fix_exec", async (req, res, next) => {
	res.mid.Data = {
		'user_redoable_summon_data': {
			'is_fixed_result': 0,
			'redoable_summon_result_unit_list': res.mid.Persist['Summon']['Redoable']
		},
		'update_data_list': {
			'user_data': res.mid.Persist['User'],
			'chara_list': [ global.Module.Character.Create(10140101, 1) ],
			'dragon_list': [],
			'ability_crest_list': [ global.Module.Crest.Create(40040089, 40, 4, 4) ],
			'unit_story_list': [],
			'dragon_reliability_list': []
		}
	}
	res.mid.ItemList = [];
	for (const x in res.mid.Persist['Summon']['Redoable']) {
		if (
		res.mid.Persist['Summon']['Redoable'][x]['entity_type'] == 1 &&
		res.mid.Data['update_data_list']['chara_list'].findIndex(z => z.chara_id == res.mid.Persist['Summon']['Redoable'][x]['id']) == -1
		) {
			res.mid.ItemList.push({'type': 1, 'id': res.mid.Persist['Summon']['Redoable'][x]['id'], 'quantity': 1});
		}
		if (res.mid.Persist['Summon']['Redoable'][x]['entity_type'] == 7) {
			res.mid.ItemList.push({'type': 7, 'id': res.mid.Persist['Summon']['Redoable'][x]['id'], 'quantity': 1, 'level': 1, 'limit_break_count': 0});
		}
	}
	res.mid.Persist['Summon']['Redoable'] = [];
	res.mid.Persist['User']['tutorial_status'] = 60999;
	res.mid.Persist['User']['tutorial_flag_list'] = global.Module.IndexTools.Flags;
	next();
});
Orchis.post("/summon/get_odds_data", async (req, res, next) => {
	const OddsData = SummonOddsList.find(z => z.summon_id == res.mid.Request['summon_id']);
	res.mid.Data = {
		'odds_rate_list': OddsData != undefined ? OddsData['odds'] : [],
		'summon_prize_odds_rate_list': OddsData != undefined ? OddsData['prize_odds'] : []
	}
	next();
});
Orchis.post("/summon/get_summon_history", async (req, res, next) => {
	res.mid.Data = { 'summon_history_list': res.mid.Persist['Summon']['History'] }
	next();
});
Orchis.post("/summon/get_summon_list", async (req, res, next) => {
	res.mid.Data = global.Module.Director.GetSummonList(res, BannerList);
	next();
});
Orchis.post("/summon/get_summon_point_trade", async (req, res, next) => {
	res.mid.Data = global.Module.Director.GetSigilTrade(res, BannerList, res.mid.Request['summon_id']);
	next();
});
Orchis.post("/summon/summon_point_trade", global.Mesh(async (req, res, next) => {
	await global.Module.Director.PerformSigilTrade(
		res,
		BannerList
	);
	next();
}));
Orchis.post("/summon/request", global.Mesh(async (req, res, next) => {
	await global.Module.Director.PerformSummon(
		res,
		BannerList
	);
	next();
}));

Orchis.post("/item/get_list", async (req, res, next) => {
	const MaterialList = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "material_list");
	for (const x in res.mid.Persist['Item']) {
		MaterialList.push(res.mid.Persist['Item'][x]);
	}
	res.mid.Data = {
		'item_list': MaterialList
	}
	next();
});
Orchis.post("/item/use_recovery_stamina", global.Mesh(async (req, res, next) => {
	let EffectType = 0; let RecoverValue = 0;
	for (const x in res.mid.Request['use_item_list']) {
		EffectType = global.Master.UseItem[String(res.mid.Request['use_item_list'][x]['item_id'])]['_ItemEffect'];
		const EffectValue = global.Master.UseItem[String(res.mid.Request['use_item_list'][x]['item_id'])]['_ItemEffectValue'];
		RecoverValue = EffectValue * res.mid.Request['use_item_list'][x]['item_quantity'];
		if (EffectType == 1006) {
			res.mid.Persist['User']['stamina_single'] += RecoverValue;
			if (res.mid.Persist['User']['stamina_single'] > 999) { res.mid.Persist['User']['stamina_single'] = 999; }
		}
		else if (EffectType == 1007) {
			res.mid.Persist['User']['stamina_multi'] += RecoverValue;
			if (res.mid.Persist['User']['stamina_multi'] > 99) { res.mid.Persist['User']['stamina_multi'] = 99; }
		}
		
		const ItemIndex = res.mid.Persist['Item'].findIndex(z => z.item_id == res.mid.Request['use_item_list'][x]['item_id']);
		res.mid.Persist['Item'][ItemIndex]['quantity'] -= res.mid.Request['use_item_list'][x]['item_quantity'];
	}
	res.mid.Data = {
		'recover_data': { 'recover_stamina_type': EffectType, 'recover_stamina_point': RecoverValue },
		'update_data_list': {
			'user_data': res.mid.Persist['User'],
			'item_list': res.mid.Persist['Item']
		}
	}
	next();
}));
Orchis.post("/shop/get_list", async (req, res, next) => {
	res.mid.Data = {
		'is_quest_bonus': 0, 'is_stone_bonus': 0, 'is_stamina_bonus': 0,
		'stone_bonus': [], 'stamina_bonus': [], 'quest_bonus': [],
		'material_shop_purchase': [], 'normal_shop_purchase': [], 'special_shop_purchase': [],
		'product_lock_list': [],
		'user_item_summon': {
			'daily_summon_count': res.mid.Persist['Summon']['ItemCount'],
			'last_summon_time': LastServerReset
		},
		'product_list': [], 'infancy_paid_diamond_limit': 0
	}
	next();
});
Orchis.post("/shop/item_summon_exec", async (req, res, next) => {
	res.mid.Persist['Summon']['ItemCount'] += 1;
	let SummonList = [];
	while (SummonList.length < 10) {
		let DrawData = {};
		if (SummonList.length > 6) {
			DrawData = global.Module.Shop.DrawEX();
		}
		else { DrawData = global.Module.Shop.Draw(); }
		SummonList.push(DrawData);
		res.mid.ItemList.push({ 'type': DrawData['entity_type'], 'id': DrawData['entity_id'], 'quantity': DrawData['entity_quantity'] });
	}
	res.mid.Data = {
		'user_item_summon': {
			'daily_summon_count': res.mid.Persist['Summon']['ItemCount'],
			'last_summon_time': global.ServerTime
		},
		'item_summon_reward_list': SummonList,
		'update_data_list': { 'user_data': res.mid.Persist['User'] }
	}
	next();
});
Orchis.post("/shop/material_shop_purchase", global.Mesh(async (req, res, next) => {
	await global.Module.Shop.MaterialTrade(res, res.mid.Request['goods_id'], res.mid.Request['quantity']);
	next();
}));
Orchis.post("/treasure_trade/get_list_all", async (req, res, next) => {
	res.mid.Data = {
		'user_treasure_trade_list': await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "user_treasure_trade_list"),
		'treasure_trade_all_list': global.Module.Shop.TradeList,
		'dmode_info': res.mid.Persist['DMode']['Info']
	}
	next();
});
Orchis.post("/treasure_trade/trade", global.Mesh(async (req, res, next) => {
	await global.Module.Shop.ShopTrade(res, res.mid.Request['treasure_trade_id'], res.mid.Request['trade_count'], ResetTimes);
	next();
}));
Orchis.post("/ability_crest_trade/get_list", async (req, res, next) => {
	res.mid.Data = {
		'user_ability_crest_trade_list': res.mid.Persist['CrestTrade'],
		'ability_crest_trade_list': global.Module.Shop.CrestList
	}
	next();
});
Orchis.post("/ability_crest_trade/trade", global.Mesh(async (req, res, next) => {
	await global.Module.Shop.CrestTrade(res, res.mid.Request['ability_crest_trade_id']);
	next();
}));

Orchis.post("/ability_crest/get_ability_crest_set_list", async (req, res, next) => {
	res.mid.Data = { 'ability_crest_set_list': res.mid.Persist['Sets']['Crest'] }
	next();
});
Orchis.post("/ability_crest/set_ability_crest_set", global.Mesh(async (req, res, next) => {
	res.mid.Request['ability_crest_set_name'] = String(res.mid.Request['ability_crest_set_name']);
	if (global.Module.Filter.Validate(res.mid.Request['ability_crest_set_name'])) {
		res.mid.Error = 1010;
	}
	else {
		if (res.mid.Request['ability_crest_set_name'].length > 12) {
			res.mid.Request['ability_crest_set_name'] = res.mid.Request['ability_crest_set_name'].slice(0, 12);
		}
		res.mid.Request['request_ability_crest_set_data']['ability_crest_set_no'] = res.mid.Request['ability_crest_set_no'];
		res.mid.Request['request_ability_crest_set_data']['ability_crest_set_name'] = res.mid.Request['ability_crest_set_name'];
		const SetIndex = res.mid.Persist['Sets']['Crest'].findIndex(z => z.ability_crest_set_no == res.mid.Request['ability_crest_set_no']);
		res.mid.Persist['Sets']['Crest'][SetIndex] = res.mid.Request['request_ability_crest_set_data'];
		res.mid.Data['update_data_list'] = {
			'ability_crest_set_list': [ res.mid.Request['request_ability_crest_set_data'] ]
		}
	}
	next();
}));
Orchis.post("/ability_crest/update_ability_crest_set_name", global.Mesh(async (req, res, next) => {
	res.mid.Request['ability_crest_set_name'] = String(res.mid.Request['ability_crest_set_name']);
	if (global.Module.Filter.Validate(res.mid.Request['ability_crest_set_name'])) {
		res.mid.Error = 1010;
		next();
	}
	else {
		if (res.mid.Request['ability_crest_set_name'].length > 12) {
			res.mid.Request['ability_crest_set_name'] = res.mid.Request['ability_crest_set_name'].slice(0, 12);
		}
		const SetIndex = res.mid.Persist['Sets']['Crest'].findIndex(z => z.ability_crest_set_no == res.mid.Request['ability_crest_set_no']);
		res.mid.Persist['Sets']['Crest'][SetIndex]['ability_crest_set_name'] = res.mid.Request['ability_crest_set_name'];
		res.mid.Data['update_data_list'] = {
			'ability_crest_set_list': [ res.mid.Persist['Sets']['Crest'][SetIndex] ]
		}
	}
	next();
}));
Orchis.post("/ability_crest/buildup_piece", global.Mesh(async (req, res, next) => {
	await global.Module.Crest.RaiseCrest(
		res,
		res.mid.Request['ability_crest_id'],
		res.mid.Request['buildup_ability_crest_piece_list'],
		[]
	);
	next();
}));
Orchis.post("/ability_crest/buildup_plus_count", global.Mesh(async (req, res, next) => {
	await global.Module.Crest.RaiseCrest(
		res,
		res.mid.Request['ability_crest_id'],
		[],
		res.mid.Request['plus_count_params_list']
	);
	next();
}));
Orchis.post("/ability_crest/reset_plus_count", global.Mesh(async (req, res, next) => {
	await global.Module.Crest.ResetAugments(
		res,
		res.mid.Request['ability_crest_id'],
		res.mid.Request['plus_count_type_list']
	);
	next();
}));
Orchis.post("/ability_crest/set_favorite", global.Mesh(async (req, res, next) => {
	const CrestData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "ability_crest_list", { 'ability_crest_id': res.mid.Request['ability_crest_id'] });
	CrestData['is_favorite'] = res.mid.Request['is_favorite'];
	res.mid.Data['update_data_list'] = { 'ability_crest_list': [ CrestData ] }
	next();
}));

//Orchis.post("/amulet/buildup", global.Mesh(async (req, res, next) => {}));
//Orchis.post("/amulet/limit_break", global.Mesh(async (req, res, next) => {}));
//Orchis.post("/amulet/sell", global.Mesh(async (req, res, next) => {}));
//Orchis.post("/amulet/reset_plus_count", global.Mesh(async (req, res, next) => {}));
//Orchis.post("/amulet/set_lock", global.Mesh(async (req, res, next) => {}));
//Orchis.post("/amulet_trade/get_list", global.Mesh(async (req, res, next) => {}));
//Orchis.post("/amulet_trade/trade", global.Mesh(async (req, res, next) => {}));

Orchis.post("/talisman/sell", global.Mesh(async (req, res, next) => {
	res.mid.Data = {
		'delete_data_list': {
			'delete_talisman_list': []
		}
	}
	for (const x in res.mid.Request['talisman_key_id_list']) {
		res.mid.Data['delete_data_list']['delete_talisman_list'].push({
			'talisman_key_id': res.mid.Request['talisman_key_id_list'][x]
		});
		res.mid.ItemList.push({ 'type': 4, 'id': 0, 'quantity': 10000 });
	}
	next();
}));
Orchis.post("/talisman/set_lock", global.Mesh(async (req, res, next) => {
	const TalismanIndex = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "talisman_list", { 'talisman_key_id': res.mid.Request['talisman_key_id'] });
	
	TalismanIndex['is_lock'] = res.mid.Request['is_lock'];
	res.mid.Data = {
		'update_data_list': { 'talisman_list': [ TalismanIndex ] }
	}
	next();
}));

Orchis.post("/chara/get_chara_unit_set", global.Mesh(async (req, res, next) => {
	res.mid.Data['chara_unit_set_list'] = [];
	for (const x in res.mid.Request['chara_id_list']) {
		if (res.mid.Persist['Sets']['Equip'][String(res.mid.Request['chara_id_list'][x])] == undefined) {
			res.mid.Data['chara_unit_set_list'].push({
				'chara_unit_set_detail_list': []
			});
		}
		else {
			res.mid.Data['chara_unit_set_list'].push({
				'chara_unit_set_detail_list': res.mid.Persist['Sets']['Equip'][String(res.mid.Request['chara_id_list'][x])]
			});
		}
	}
	next();
}));
Orchis.post("/chara/set_chara_unit_set", global.Mesh(async (req, res, next) => {
	if (global.Module.Filter.Validate(res.mid.Request['unit_set_name'])) {
		res.mid.Error = 1010;
	}
	else {
		if (res.mid.Request['unit_set_name'].length > 12) {
			res.mid.Request['unit_set_name'] = res.mid.Request['unit_set_name'].slice(0, 12);
		}
		if (res.mid.Persist['Sets']['Equip'][String(res.mid.Request['chara_id'])] == undefined) {
			res.mid.Persist['Sets']['Equip'][String(res.mid.Request['chara_id'])] = global.Module.IndexTools.DefaultEquipment();
		}
		res.mid.Request['request_chara_unit_set_data']['unit_set_no'] = res.mid.Request['unit_set_no'];
		res.mid.Request['request_chara_unit_set_data']['unit_set_name'] = res.mid.Request['unit_set_name'];
		const SetIndex = res.mid.Persist['Sets']['Equip'][String(res.mid.Request['chara_id'])].findIndex(z => z.unit_set_no == res.mid.Request['unit_set_no']);
		res.mid.Persist['Sets']['Equip'][String(res.mid.Request['chara_id'])][SetIndex] = res.mid.Request['request_chara_unit_set_data'];
		res.mid.Data['update_data_list'] = {
			'chara_unit_set_list': [
				{
					'chara_id': res.mid.Request['chara_id'],
					'chara_unit_set_detail_list': [ res.mid.Request['request_chara_unit_set_data'] ]
					
				}
			]
		}
	}
	next();
}));
Orchis.post("/chara/awake", global.Mesh(async (req, res, next) => {
	await global.Module.Character.Awaken(
		res,
		res.mid.Request['chara_id'],
		res.mid.Request['next_rarity']
	);
	next();
}));
Orchis.post("/chara/buildup", global.Mesh(async (req, res, next) => {
	await global.Module.Character.RaiseLevel(
		res,
		res.mid.Request['chara_id'],
		res.mid.Request['material_list']
	);
	next();
}));
Orchis.post("/chara/buildup_mana", global.Mesh(async (req, res, next) => {
	await global.Module.Character.RaiseManaCircle(
		res,
		res.mid.Request['chara_id'],
		res.mid.Request['mana_circle_piece_id_list'],
		res.mid.Request['is_use_grow_material']
	);
	next();
}));
Orchis.post("/chara/limit_break", global.Mesh(async (req, res, next) => {
	await global.Module.Character.RaiseLimit(
		res,
		res.mid.Request['chara_id'],
		res.mid.Request['next_limit_break_count'],
		res.mid.Request['is_use_grow_material']
	);
	next();
}));
Orchis.post("/chara/limit_break_and_buildup_mana", global.Mesh(async (req, res, next) => {
	await global.Module.Character.RaiseManaAndLimit(
		res,
		res.mid.Request['chara_id'],
		res.mid.Request['mana_circle_piece_id_list'],
		res.mid.Request['is_use_grow_material'],
		res.mid.Request['next_limit_break_count']
	);
	next();
}));
Orchis.post("/chara/unlock_edit_skill", global.Mesh(async (req, res, next) => {
	await global.Module.Character.Unlock(
		res,
		res.mid.Request['chara_id']
	);
	next();
}));
Orchis.post("/chara/buildup_platinum", global.Mesh(async (req, res, next) => {
	await global.Module.Character.RaisePlatinum(res, res.mid.Request['chara_id']);
	next();
}));
Orchis.post("/chara/reset_plus_count", global.Mesh(async (req, res, next) => {
	await global.Module.Character.ResetAugments(res, res.mid.Request['chara_id']);
	next();
}));

Orchis.post("/dragon/sell", global.Mesh(async (req, res, next) => {
	let DeleteList = [];
	for (const x in res.mid.Request['dragon_key_id_list']) {
		DeleteList.push({ 'dragon_key_id': res.mid.Request['dragon_key_id_list'][x] });
		const DragonIndex = await global.Module.Dragon.GetUnitData(res.mid.ViewerID, res.mid.Request['dragon_key_id_list'][x]);
		res.mid.ItemList.push({ 'type': 4, 'id': 0, 'quantity': global.Module.Dragon.GetInfo(DragonIndex['dragon_id'], "_SellCoin") });
		res.mid.ItemList.push({ 'type': 14, 'id': 0, 'quantity': global.Module.Dragon.GetInfo(DragonIndex['dragon_id'], "_SellDewPoint") });
	}
	res.mid.Data = {
		'delete_data_list': { 'delete_dragon_list': DeleteList }
	}
	next();
}));
Orchis.post("/dragon/set_lock", global.Mesh(async (req, res, next) => {
	const DragonIndex = await global.Module.Dragon.GetUnitData(res.mid.ViewerID, res.mid.Request['dragon_key_id']);
	DragonIndex['is_lock'] = res.mid.Request['is_lock'];
	res.mid.Data = {
		'update_data_list': { 'dragon_list': [ DragonIndex ] }
	}
	next();
}));
Orchis.post("/dragon/limit_break", global.Mesh(async (req, res, next) => {
	await global.Module.Dragon.RaiseLimit(res, res.mid.Request['base_dragon_key_id'], res.mid.Request['limit_break_grow_list']);
	next();
}));
Orchis.post("/dragon/buildup", global.Mesh(async (req, res, next) => {
	await global.Module.Dragon.RaiseLevel(res, res.mid.Request['base_dragon_key_id'], res.mid.Request['grow_material_list']);
	next();
}));
Orchis.post("/dragon/reset_plus_count", global.Mesh(async (req, res, next) => {
	const DragonIndex = await global.Module.Dragon.GetUnitData(res.mid.ViewerID, res.mid.Request['dragon_key_id']);
	if (res.mid.Request['plus_count_type'] == 1) {
		res.mid.ItemList.push({ 'type': 8, 'id': 118001001, 'quantity': DragonIndex['hp_plus_count'] });
		DragonIndex['hp_plus_count'] = 0;
	}
	else if (res.mid.Request['plus_count_type'] == 2) {
		res.mid.ItemList.push({ 'type': 8, 'id': 119001001, 'quantity': DragonIndex['attack_plus_count'] });
		DragonIndex['attack_plus_count'] = 0;
	}
	res.mid.Data = {
		'update_data_list': {
			'dragon_list': [ DragonIndex ]
		}
	}
}));
Orchis.post("/dragon/get_contact_data", global.Mesh(async (req, res, next) => {
	res.mid.Data = { 'shop_gift_list': res.mid.Persist['DragonGift'] }
	next();
}));
Orchis.post("/dragon/buy_gift_to_send", global.Mesh(async (req, res, next) => {
	const GiftIndex = res.mid.Persist['DragonGift'].findIndex(z => z.dragon_gift_id == res.mid.Request['dragon_gift_id']);
	if (res.mid.Persist['DragonGift'][GiftIndex]['price'] != 0) {
		res.mid.Persist['User']['coin'] -= res.mid.Persist['DragonGift'][GiftIndex]['price'];
	}
	res.mid.Persist['DragonGift'][GiftIndex]['is_buy'] = 0;
	
	const BondIndex = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "dragon_reliability_list", { 'dragon_id': res.mid.Request['dragon_id'] });
	const BondGift = global.Module.Dragon.RaiseBond(BondIndex, res.mid.Request['dragon_id'], res.mid.Request['dragon_gift_id']);
	for (const z in BondGift['ItemList']) { res.mid.ItemList.push(BondGift['ItemList'][z]); }
	
	res.mid.Data = {
		'shop_gift_list': res.mid.Persist['DragonGift'],
		'return_gift_list': BondGift['Reward'],
		'is_favorite': BondGift['IsFavorite'],
		'reward_reliability_list': BondGift['LevelReward'],
		'dragon_contact_free_gift_count': res.mid.Persist['DragonGift'].find(x => x.dragon_gift_id == 10001)['is_buy'],
		'update_data_list': {
			'user_data': res.mid.Persist['User'],
			'dragon_reliability_list': [ BondGift['Index'] ],
			'unit_story_list': BondGift['Story']
		}
	}
	next();
}));
Orchis.post("/dragon/buy_gift_to_send_multiple", global.Mesh(async (req, res, next) => {
	let BondIndex = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "dragon_reliability_list", { 'dragon_id': res.mid.Request['dragon_id'] });
	let MultiGiftList = [];
	let StoryList = [];
	for (const x in res.mid.Request['dragon_gift_id_list']) {
		const GiftIndex = res.mid.Persist['DragonGift'].findIndex(z => z.dragon_gift_id == res.mid.Request['dragon_gift_id_list'][x]);
		if (res.mid.Persist['DragonGift'][GiftIndex]['price'] != 0) {
			res.mid.Persist['User']['coin'] -= res.mid.Persist['DragonGift'][GiftIndex]['price'];
		}
		res.mid.Persist['DragonGift'][GiftIndex]['is_buy'] = 0;
		
		const BondGift = global.Module.Dragon.RaiseBond(BondIndex, res.mid.Request['dragon_id'], res.mid.Request['dragon_gift_id_list'][x]);
		for (const z in BondGift['ItemList']) { res.mid.ItemList.push(BondGift['ItemList'][z]); }
		for (const z in BondGift['Story']) { StoryList.push(BondGift['Story'][z]); }
		MultiGiftList.push({
			'dragon_gift_id': res.mid.Request['dragon_gift_id_list'][x],
			'return_gift_list': BondGift['Reward'],
			'is_favorite': BondGift['IsFavorite'],
			'reward_reliability_list': BondGift['LevelReward']
		});
		BondIndex = BondGift['Index'];
	}
	res.mid.Data = {
		'shop_gift_list': res.mid.Persist['DragonGift'],
		'dragon_gift_reward_list': MultiGiftList,
		'dragon_contact_free_gift_count': res.mid.Persist['DragonGift'].find(x => x.dragon_gift_id == 10001)['is_buy'],
		'update_data_list': {
			'user_data': res.mid.Persist['User'],
			'dragon_reliability_list': [ BondIndex ],
			'unit_story_list': StoryList
		}
	}
	next();
}));
Orchis.post("/dragon/send_gift", global.Mesh(async (req, res, next) => {
	res.mid.ItemList.push({ 'type': 15, 'id': res.mid.Request['dragon_gift_id'], 'quantity': -1 });
	
	const BondIndex = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "dragon_reliability_list", { 'dragon_id': res.mid.Request['dragon_id'] });
	const BondGift = global.Module.Dragon.RaiseBond(BondIndex, res.mid.Request['dragon_id'], res.mid.Request['dragon_gift_id']);
	for (const z in BondGift['ItemList']) { res.mid.ItemList.push(BondGift['ItemList'][z]); }
	
	res.mid.Data = {
		'return_gift_list': BondGift['Reward'],
		'is_favorite': 0,
		'reward_reliability_list': BondGift['LevelReward'],
		'update_data_list': {
			'user_data': res.mid.Persist['User'],
			'dragon_reliability_list': [ BondGift['Index'] ],
			'unit_story_list': BondGift['Story']
		}
	}
	next();
}));
Orchis.post("/dragon/send_gift_multiple", global.Mesh(async (req, res, next) => {
	res.mid.ItemList.push({ 'type': 15, 'id': res.mid.Request['dragon_gift_id'], 'quantity': res.mid.Request['quantity'] * -1 });
	let BondIndex = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "dragon_reliability_list", { 'dragon_id': res.mid.Request['dragon_id'] });
	
	let FinalReward = [];
	let FinalLevelReward = [];
	let FinalStoryList = [];
	let i = 0; while (i < res.mid.Request['quantity']) {
		const BondGift = global.Module.Dragon.RaiseBond(BondIndex, res.mid.Request['dragon_id'], res.mid.Request['dragon_gift_id']);
		BondIndex = BondGift['Index'];
		for (const z in BondGift['ItemList']) {
			res.mid.ItemList.push(BondGift['ItemList'][z]);
			FinalReward.push({
				'entity_type': BondGift['ItemList'][z]['type'],
				'entity_id': BondGift['ItemList'][z]['id'],
				'entity_quantity': BondGift['ItemList'][z]['quantity'],
			});
		}
		for (const z in BondGift['LevelReward']) { FinalLevelReward.push(BondGift['LevelReward'][z]); }
		for (const z in BondGift['Story']) { FinalStoryList.push(BondGift['Story'][z]); }
		i++;
	}
	FinalReward = global.Module.Util.CompactEntityList(FinalReward);
	for (const x in FinalReward) { FinalReward[x]['is_over'] = 0; }
	
	res.mid.Data = {
		'return_gift_list': FinalReward,
		'is_favorite': 0,
		'reward_reliability_list': FinalLevelReward,
		'update_data_list': {
			'user_data': res.mid.Persist['User'],
			'dragon_reliability_list': [ BondIndex ],
			'unit_story_list': FinalStoryList
		}
	}
	next();
}));

//Orchis.post("/weapon/buildup", global.Mesh(async (req, res, next) => {}));
//Orchis.post("/weapon/limit_break", global.Mesh(async (req, res, next) => {}));
//Orchis.post("/weapon/sell", global.Mesh(async (req, res, next) => {}));
//Orchis.post("/weapon/reset_plus_count", global.Mesh(async (req, res, next) => {}));
//Orchis.post("/weapon/set_lock", global.Mesh(async (req, res, next) => {}));

Orchis.post("/weapon_body/craft", global.Mesh(async (req, res, next) => {
	const ID = String(res.mid.Request['weapon_body_id']);
	res.mid.ItemList.push({ 'type': 38, 'id': parseInt(ID), 'quantity': 1 });
	res.mid.ItemList.push({ 'type': 4, 'id': 0, 'quantity': global.Master.WeaponBody[ID]['_CreateCoin'] * -1 });
	res.mid.ItemList.push({
		'type': global.Master.WeaponBody[ID]['_CreateEntityType1'],
		'id': global.Master.WeaponBody[ID]['_CreateEntityId1'],
		'quantity': global.Master.WeaponBody[ID]['_CreateEntityQuantity1'] * -1
	});
	res.mid.ItemList.push({
		'type': global.Master.WeaponBody[ID]['_CreateEntityType2'],
		'id': global.Master.WeaponBody[ID]['_CreateEntityId2'],
		'quantity': global.Master.WeaponBody[ID]['_CreateEntityQuantity2'] * -1
	});
	res.mid.ItemList.push({
		'type': global.Master.WeaponBody[ID]['_CreateEntityType3'],
		'id': global.Master.WeaponBody[ID]['_CreateEntityId3'],
		'quantity': global.Master.WeaponBody[ID]['_CreateEntityQuantity3'] * -1
	});
	res.mid.ItemList.push({
		'type': global.Master.WeaponBody[ID]['_CreateEntityType4'],
		'id': global.Master.WeaponBody[ID]['_CreateEntityId4'],
		'quantity': global.Master.WeaponBody[ID]['_CreateEntityQuantity4'] * -1
	});
	res.mid.ItemList.push({
		'type': global.Master.WeaponBody[ID]['_CreateEntityType5'],
		'id': global.Master.WeaponBody[ID]['_CreateEntityId5'],
		'quantity': global.Master.WeaponBody[ID]['_CreateEntityQuantity5'] * -1
	});
	res.mid.Data = { 'update_data_list': { 'user_data': res.mid.Persist['User'] } }
	next();
}));
Orchis.post("/weapon_body/buildup_piece", global.Mesh(async (req, res, next) => {
	await global.Module.WeaponBody.Buildup(res, res.mid.Request['weapon_body_id'], res.mid.Request['buildup_weapon_body_piece_list']);
	next();
}));

Orchis.post("/album/index", async (req, res, next) => {
	const DragonList = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "dragon_list");
	let DragonData = [];
	for (const x in DragonList) {
		const Index = DragonData.findIndex(z => z.dragon_id == DragonList[x]['dragon_id']);
		if (Index != -1) {
			if (DragonData[Index]['max_level'] < DragonList[x]['level']) { DragonData[Index]['max_level'] = DragonList[x]['level']; }
			if (DragonData[Index]['max_limit_break_count'] < DragonList[x]['limit_break_count']) { DragonData[Index]['max_limit_break_count'] = DragonList[x]['limit_break_count']; }
		}
		else {
			DragonData.push({'dragon_id': DragonList[x]['dragon_id'], 'max_level': DragonList[x]['level'], 'max_limit_break_count': DragonList[x]['limit_break_count']});
		}
	}

	const AlbumTracker = res.mid.Persist['Endeavour']['Tracker']['Album'];
	const QuestRecord = [
		{ 'quest_play_record_id': 101, 'quest_play_record_value': AlbumTracker['Element']['1'] },
		{ 'quest_play_record_id': 102, 'quest_play_record_value': AlbumTracker['Element']['2'] },
		{ 'quest_play_record_id': 103, 'quest_play_record_value': AlbumTracker['Element']['3'] },
		{ 'quest_play_record_id': 104, 'quest_play_record_value': AlbumTracker['Element']['4'] },
		{ 'quest_play_record_id': 105, 'quest_play_record_value': AlbumTracker['Element']['5'] },
		//{ 'quest_play_record_id': 199, 'quest_play_record_value': AlbumTracker['Element']['99'] },
		
		{ 'quest_play_record_id': 201, 'quest_play_record_value': AlbumTracker['Weapon']['1'] },
		{ 'quest_play_record_id': 202, 'quest_play_record_value': AlbumTracker['Weapon']['2'] },
		{ 'quest_play_record_id': 203, 'quest_play_record_value': AlbumTracker['Weapon']['3'] },
		{ 'quest_play_record_id': 204, 'quest_play_record_value': AlbumTracker['Weapon']['4'] },
		{ 'quest_play_record_id': 205, 'quest_play_record_value': AlbumTracker['Weapon']['5'] },
		{ 'quest_play_record_id': 206, 'quest_play_record_value': AlbumTracker['Weapon']['6'] },
		{ 'quest_play_record_id': 207, 'quest_play_record_value': AlbumTracker['Weapon']['7'] },
		{ 'quest_play_record_id': 208, 'quest_play_record_value': AlbumTracker['Weapon']['8'] },
		{ 'quest_play_record_id': 209, 'quest_play_record_value': AlbumTracker['Weapon']['9'] },
		
		{ 'quest_play_record_id': 301, 'quest_play_record_value': AlbumTracker['Type']['1'] },
		{ 'quest_play_record_id': 302, 'quest_play_record_value': AlbumTracker['Type']['2'] },
		{ 'quest_play_record_id': 303, 'quest_play_record_value': AlbumTracker['Type']['3'] },
		{ 'quest_play_record_id': 304, 'quest_play_record_value': AlbumTracker['Type']['4'] }
	];
	
	res.mid.Data = {
		'album_dragon_list': DragonData,
		'album_quest_play_record_list': QuestRecord,
		'chara_honor_list': res.mid.Persist['Medals'],
		'album_passive_update_list': { 'is_update_chara': 0, 'is_update_dragon': 0 }
	}
	next();
});

Orchis.post("/story_skip/skip", global.Mesh(async (req, res, next) => {
	await global.Module.Quest.CampaignSkip(res);
	next();
}));
Orchis.post("/story/read", global.Mesh(async (req, res, next) => {
	res.mid.Persist['User']['crystal'] += 25;
	res.mid.Data = {
		'unit_story_reward_list': [ { "entity_type": 23, "entity_id": 0, "entity_quantity": 25 } ],
		'update_data_list': {
			'unit_story_list': [ { 'unit_story_id': res.mid.Request['unit_story_id'], 'is_read': 1 } ],
			'user_data': res.mid.Persist['User']
		}
	}
	next();
}));
Orchis.post("/castle_story/read", global.Mesh(async (req, res, next) => {
	res.mid.Persist['User']['crystal'] += 50;
	res.mid.ItemList.push({ 'type': 8, 'id': 201008001, 'quantity': -1 });
	res.mid.Data = {
		'castle_story_reward_list': [ { "entity_type": 23, "entity_id": 0, "entity_quantity": 50 } ],
		'update_data_list': {
			'castle_story_list': [ { 'castle_story_id': res.mid.Request['castle_story_id'], 'is_read': 1 } ],
			'user_data': res.mid.Persist['User']
		}
	}
	next();
}));
Orchis.post("/quest/read_story", global.Mesh(async (req, res, next) => {
	await global.Module.Quest.ReadStory(res, res.mid.Request['quest_story_id']);
	next();
}));
Orchis.post("/quest/open_treasure", global.Mesh(async (req, res, next) => {
	const RewardData = global.Module.Quest.RewardChest[String(res.mid.Request['quest_treasure_id'])];
	for (const x in RewardData) {
		res.mid.ItemList.push({
			'type': RewardData[x]['entity_type'],
			'id': RewardData[x]['entity_id'],
			'quantity': RewardData[x]['entity_quantity']
		});
	}
	res.mid.Data = {
		'quest_treasure_reward_list': RewardData,
		'update_data_list': {
			'quest_treasure_list': [ { 'quest_treasure_id': res.mid.Request['quest_treasure_id'] } ]
		}
	}
	next();
}));
Orchis.post("/quest/get_support_user_list", async (req, res, next) => {
	if (SupportData['support_user_list'] == undefined || SupportData['support_user_list'].length == 0) {
		res.mid.Data = {
			'support_user_list': [],
			'support_user_detail_list': []
		}
	}
	else {
		res.mid.Data = SupportData
	}
	next();
});
Orchis.post(["/quest/get_quest_clear_party", "/quest/get_quest_clear_party_multi"], async (req, res, next) => {
	res.mid.Data = {
		'quest_clear_party_setting_list': [],
		'lost_unit_list': []
	}
	next();
});
Orchis.post(["/quest/set_quest_clear_party", "/quest/set_quest_clear_party_multi"], async (req, res, next) => {
	res.mid.Data = { 'result': 1 }
	next();
});
Orchis.post("/quest/drop_list", async(req, res, next) => {
	res.mid.Data = global.Module.Quest.DropSummary(res.mid.Request['quest_id']);
	next();
});

Orchis.post("/dungeon_start/start", global.Mesh(async (req, res, next) => {
	res.mid.Persist['Dungeon'] = {
		'IsSkip': false,
		'IsRareSpawn': false,
		'IsHost': 1,
		'QuestID': res.mid.Request['quest_id'],
		'QuestData': await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "quest_list", { 'quest_id': res.mid.Request['quest_id'] }),
		'Key': crypto.randomBytes(16).toString('hex'),
		'PlayType': 1,
		'Started': Math.floor(Date.now() / 1000),
		'Repeat': { 'Active': false }
	}
	const EventID = String(global.Master.QuestData[String(res.mid.Request['quest_id'])]['_Gid']);
	const EventEntry = global.Master.EventData[EventID];
	if (res.mid.IsArchaea == true) {
		res.mid.Persist['Dungeon']['Party'] = await global.Module.Director.DungeonDataArchaea(
			res,
			res.mid.Request['party_no'],
			res.mid.Request['quest_id'],
			res.mid.Request['support_viewer_id']
		);
	}
	else {
		res.mid.Persist['Dungeon']['Party'] = await global.Module.Director.DungeonData(
			res,
			res.mid.Request['party_no_list'],
			res.mid.Request['quest_id'],
			res.mid.Request['support_viewer_id']
		);
	}
	
	if (res.mid.Request['repeat_state'] == 1) {
		if (res.mid.Request['repeat_setting'] != null) {
			res.mid.Persist['Dungeon']['Repeat'] = {
				'Active': true,
				'Key': crypto.randomBytes(16).toString("hex"),
				'Count': res.mid.Request['repeat_setting']['repeat_count'],
				'Cycle': 1,
				'ItemList': [],
				'EventPoint': 0,
				'EventPointBonus': 0,
				'Coin': 0,
				'CoinBonus': 0,
				'Wyrmite': 0
			}
		}
		else { res.mid.Persist['Dungeon']['Repeat']['Cycle'] += 1; }
	}
	
	res.mid.Persist['Dungeon']['Drop'] = global.Module.Quest.GetDrops(
		res.mid.Request['quest_id'],
		EventList,
		res.mid.Persist['Dungeon']['Party']['Info']['party_unit_list'],
		1
	);
	if (res.mid.Persist['Dungeon']['QuestData'] == false) {
		res.mid.Persist['Dungeon']['QuestData'] = {
			'quest_id': res.mid.Request['quest_id'],
			'state': 2,
			'is_mission_clear_1': 0,
			'is_mission_clear_2': 0,
			'is_mission_clear_3': 0,
			'play_count': 0,
			'daily_play_count': 0,
			'weekly_play_count': 0,
			'last_daily_reset_time': 0,	
			'last_weekly_reset_time': 0,
			'is_appear': 1,
			'best_clear_time': -1
		}
	}
	else if (res.mid.Persist['Dungeon']['QuestData']['state'] == 1) {
		res.mid.Persist['Dungeon']['QuestData']['state'] = 2;
	}
	res.mid.Data = {
		'ingame_data': {
			'viewer_id': res.mid.ViewerID,
			'dungeon_key': res.mid.Persist['Dungeon']['Key'],
			'dungeon_type': global.Module.Quest.GetInfo(res.mid.Request['quest_id'], "_DungeonType"),
			'play_type': 1,
			'quest_id': res.mid.Request['quest_id'],
			'is_host': 1,
			'continue_limit': global.Module.Quest.GetInfo(res.mid.Request['quest_id'], "_ContinueLimit"),
			'reborn_limit': global.Module.Quest.GetInfo(res.mid.Request['quest_id'], "_RebornLimit"),
			'start_time': res.mid.Persist['Dungeon']['Started'],
			'party_info': res.mid.Persist['Dungeon']['Party']['Info'],
			'area_info_list': global.Module.Quest.GetAreaList(res.mid.Request['quest_id']),
			'repeat_state': res.mid.Request['repeat_state'],
			'is_use_event_chara_ability': EventEntry != undefined && EventEntry['_EventKindType'] == 1 ? 1 : 0,
			'event_ability_chara_list': EventEntry != undefined && EventEntry['_EventKindType'] == 1 ? [{
				'chara_id': EventEntry['_EventCharaId'],
				'ability_id_1': EventEntry['_EventCharaAbilityId1'],
				'ability_id_2': EventEntry['_EventCharaAbilityId2']
			}] : [],
			'use_stone': 50, 'is_fever_time': 0, 'is_bot_tutorial': 0,
			'is_receivable_carry_bonus': 0,
			'first_clear_viewer_id_list': [], 'multi_disconnect_type': 0
		},
		'ingame_quest_data': {
			'quest_id': res.mid.Persist['Dungeon']['QuestData']['quest_id'],
			'play_count': res.mid.Persist['Dungeon']['QuestData']['play_count'],
			'is_mission_clear_1': res.mid.Persist['Dungeon']['QuestData']['is_mission_clear_1'],
			'is_mission_clear_2': res.mid.Persist['Dungeon']['QuestData']['is_mission_clear_2'],
			'is_mission_clear_3': res.mid.Persist['Dungeon']['QuestData']['is_mission_clear_3']
		},
		'odds_info': global.Module.Quest.AreaOdds(res.mid.Request['quest_id'], res.mid.Persist, 1),
		'update_data_list': { 'quest_list': [ res.mid.Persist['Dungeon']['QuestData'] ] }
	}
	next();
}));
Orchis.post("/dungeon_start/start_assign_unit", global.Mesh(async (req, res, next) => {
	res.mid.Persist['Dungeon'] = {
		'IsSkip': false,
		'IsRareSpawn': false,
		'IsHost': 1,
		'QuestID': res.mid.Request['quest_id'],
		'QuestData': await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "quest_list", { 'quest_id': res.mid.Request['quest_id'] }),
		'Key': crypto.randomBytes(16).toString('hex'),
		'Step': 1,
		'PlayType': 1,
		'Started': Math.floor(Date.now() / 1000),
		'Repeat': { 'Active': false }
	}
	const EventID = String(global.Master.QuestData[String(res.mid.Request['quest_id'])]['_Gid']);
	const EventEntry = global.Master.EventData[EventID];
	if (res.mid.IsArchaea == true) {
		res.mid.Persist['Dungeon']['Party'] = await global.Module.Director.DungeonDataArchaea(
			res,
			res.mid.Request['party_no'],
			res.mid.Request['quest_id'],
			res.mid.Request['support_viewer_id'],
			res.mid.Request['request_party_setting_list']
		);
	}
	else {
		res.mid.Persist['Dungeon']['Party'] = await global.Module.Director.DungeonData(
			res,
			[ 0 ],
			res.mid.Request['quest_id'],
			res.mid.Request['support_viewer_id'],
			res.mid.Request['request_party_setting_list']
		);
	}
	
	if (res.mid.Request['repeat_state'] == 1) {
		if (res.mid.Request['repeat_setting'] != null) {
			res.mid.Persist['Dungeon']['Repeat'] = {
				'Active': true,
				'Key': crypto.randomBytes(16).toString("hex"),
				'Count': MsgPackData['repeat_setting']['repeat_count'],
				'Cycle': 1,
				'ItemList': [],
				'EventPoint': 0,
				'EventPointBonus': 0,
				'Coin': 0,
				'CoinBonus': 0,
				'Wyrmite': 0
			}
		}
		else { res.mid.Persist['Dungeon']['Repeat']['Cycle'] += 1; }
	}
	if (res.mid.Persist['Dungeon']['QuestData'] == false) {
		res.mid.Persist['Dungeon']['QuestData'] = {
			'quest_id': res.mid.Request['quest_id'],
			'state': 2,
			'is_mission_clear_1': 0,
			'is_mission_clear_2': 0,
			'is_mission_clear_3': 0,
			'play_count': 0,
			'daily_play_count': 0,
			'weekly_play_count': 0,
			'last_daily_reset_time': 0,	
			'last_weekly_reset_time': 0,
			'is_appear': 1,
			'best_clear_time': -1
		}
	}
	else if (res.mid.Persist['Dungeon']['QuestData']['state'] == 1) {
		res.mid.Persist['Dungeon']['QuestData']['state'] = 2;
	}
	
	res.mid.Persist['Dungeon']['Drop'] = global.Module.Quest.GetDrops(
		res.mid.Request['quest_id'],
		EventList,
		res.mid.Persist['Dungeon']['Party']['Info']['party_unit_list'],
		1
	);
	res.mid.Data = {
		'ingame_data': {
			'viewer_id': res.mid.ViewerID,
			'dungeon_key': res.mid.Persist['Dungeon']['Key'],
			'dungeon_type': global.Module.Quest.GetInfo(res.mid.Request['quest_id'], "_DungeonType"),
			'play_type': 1,
			'quest_id': res.mid.Request['quest_id'],
			'is_host': 1,
			'continue_limit': global.Module.Quest.GetInfo(res.mid.Request['quest_id'], "_ContinueLimit"),
			'reborn_limit': global.Module.Quest.GetInfo(res.mid.Request['quest_id'], "_RebornLimit"),
			'start_time': res.mid.Persist['Dungeon']['Started'],
			'party_info': res.mid.Persist['Dungeon']['Party']['Info'],
			'area_info_list': global.Module.Quest.GetAreaList(res.mid.Request['quest_id']),
			'repeat_state': res.mid.Request['repeat_state'],
			'is_use_event_chara_ability': EventEntry != undefined && EventEntry['_EventKindType'] == 1 ? 1 : 0,
			'event_ability_chara_list': EventEntry != undefined && EventEntry['_EventKindType'] == 1 ? [{
				'chara_id': EventEntry['_EventCharaId'],
				'ability_id_1': EventEntry['_EventCharaAbilityId1'],
				'ability_id_2': EventEntry['_EventCharaAbilityId2']
			}] : [],
			'use_stone': 50, 'is_fever_time': 0, 'is_bot_tutorial': 0,
			'is_receivable_carry_bonus': 0,
			'first_clear_viewer_id_list': [], 'multi_disconnect_type': 0
		},
		'ingame_quest_data': {
			'quest_id': res.mid.Persist['Dungeon']['QuestData']['quest_id'],
			'play_count': res.mid.Persist['Dungeon']['QuestData']['play_count'],
			'is_mission_clear_1': res.mid.Persist['Dungeon']['QuestData']['is_mission_clear_1'],
			'is_mission_clear_2': res.mid.Persist['Dungeon']['QuestData']['is_mission_clear_2'],
			'is_mission_clear_3': res.mid.Persist['Dungeon']['QuestData']['is_mission_clear_3']
		},
		'odds_info': global.Module.Quest.AreaOdds(res.mid.Request['quest_id'], res.mid.Persist, 1),
		'update_data_list': { 'quest_list': [ res.mid.Persist['Dungeon']['QuestData'] ] }
	}
	next();
}));
Orchis.post("/dungeon_start/start_multi", global.Mesh(async (req, res, next) => {
	res.mid.Persist['Dungeon'] = {
		'IsSkip': false,
		'IsRareSpawn': false,
		'IsHost': 0,
		'QuestID': res.mid.Request['quest_id'],
		'QuestData': await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "quest_list", { 'quest_id': res.mid.Request['quest_id'] }),
		'Key': crypto.randomBytes(16).toString('hex'),
		'PlayType': 2,
		'Started': Math.floor(Date.now() / 1000),
		'Repeat': { 'Active': false },
		'Support': { 'Player': [], 'Info': [] }
	}
	const EventID = String(global.Master.QuestData[String(res.mid.Request['quest_id'])]['_Gid']);
	const EventEntry = global.Master.EventData[EventID];
	
	const GetHost = await PerformSSLRequest(
		global.Config['Photon']['StateURL'],
		global.Config['Photon']['StatePort'],
		"/get/ishost/" + res.mid.ViewerID,
		"GET",
		{},
		""
	);
	if (GetHost == true) { res.mid.Persist['Dungeon']['IsHost'] = 1; }
	
	if (res.mid.IsArchaea == true) {
		res.mid.Persist['Dungeon']['Party'] = await global.Module.Director.DungeonDataArchaea(
			res,
			res.mid.Request['party_no'],
			res.mid.Request['quest_id'],
			0
		);	
	}
	else {
		res.mid.Persist['Dungeon']['Party'] = await global.Module.Director.DungeonData(
			res,
			res.mid.Request['party_no_list'],
			res.mid.Request['quest_id'],
			0
		);
	}
	
	res.mid.Persist['Dungeon']['Drop'] = global.Module.Quest.GetDrops(
		res.mid.Request['quest_id'],
		EventList,
		res.mid.Persist['Dungeon']['Party']['Info']['party_unit_list'],
		1
	);
	if (res.mid.Persist['Dungeon']['QuestData'] == false) {
		res.mid.Persist['Dungeon']['QuestData'] = {
			'quest_id': res.mid.Request['quest_id'],
			'state': 2,
			'is_mission_clear_1': 0,
			'is_mission_clear_2': 0,
			'is_mission_clear_3': 0,
			'play_count': 0,
			'daily_play_count': 0,
			'weekly_play_count': 0,
			'last_daily_reset_time': 0,	
			'last_weekly_reset_time': 0,
			'is_appear': 1,
			'best_clear_time': -1
		}
	}
	res.mid.Data = {
		'ingame_data': {
			'viewer_id': res.mid.ViewerID,
			'dungeon_key': res.mid.Persist['Dungeon']['Key'],
			'dungeon_type': global.Module.Quest.GetInfo(res.mid.Request['quest_id'], "_DungeonType"),
			'play_type': 2,
			'quest_id': res.mid.Request['quest_id'],
			'is_host': res.mid.Persist['Dungeon']['IsHost'],
			'continue_limit': global.Module.Quest.GetInfo(res.mid.Request['quest_id'], "_ContinueLimit"),
			'reborn_limit': global.Module.Quest.GetInfo(res.mid.Request['quest_id'], "_RebornLimit"),
			'start_time': res.mid.Persist['Dungeon']['Started'],
			'party_info': res.mid.Persist['Dungeon']['Party']['Info'],
			'area_info_list': global.Module.Quest.GetAreaList(res.mid.Request['quest_id']),
			'is_use_event_chara_ability': EventEntry != undefined && EventEntry['_EventKindType'] == 1 ? 1 : 0,
			'event_ability_chara_list': EventEntry != undefined && EventEntry['_EventKindType'] == 1 ? [{
				'chara_id': EventEntry['_EventCharaId'],
				'ability_id_1': EventEntry['_EventCharaAbilityId1'],
				'ability_id_2': EventEntry['_EventCharaAbilityId2']
			}] : [],
			'use_stone': 50, 'is_fever_time': 0, 'is_bot_tutorial': 0,
			'is_receivable_carry_bonus': 0,
			'first_clear_viewer_id_list': [], 'multi_disconnect_type': 0
		},
		'ingame_quest_data': {
			'quest_id': res.mid.Persist['Dungeon']['QuestData']['quest_id'],
			'play_count': res.mid.Persist['Dungeon']['QuestData']['play_count'],
			'is_mission_clear_1': res.mid.Persist['Dungeon']['QuestData']['is_mission_clear_1'],
			'is_mission_clear_2': res.mid.Persist['Dungeon']['QuestData']['is_mission_clear_2'],
			'is_mission_clear_3': res.mid.Persist['Dungeon']['QuestData']['is_mission_clear_3']
		},
		'odds_info': global.Module.Quest.AreaOdds(res.mid.Request['quest_id'], res.mid.Persist, 1),
		'update_data_list': { 'quest_list': [ res.mid.Persist['Dungeon']['QuestData'] ] }
	}
	next();
}));
Orchis.post("/dungeon_skip/start", global.Mesh(async (req, res, next) => {
	res.mid.Persist['Dungeon'] = {
		'IsSkip': true,
		'IsRareSpawn': false,
		'IsHost': 1,
		'QuestID': res.mid.Request['quest_id'],
		'QuestData': await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "quest_list", { 'quest_id': res.mid.Request['quest_id'] }),
		'Key': crypto.randomBytes(16).toString('hex'),
		'PlayType': 1,
		'Started': Math.floor(Date.now() / 1000),
		'Repeat': { 'Active': false }
	}
	if (res.mid.IsArchaea == true) {
		res.mid.Persist['Dungeon']['Party'] = await global.Module.Director.DungeonDataArchaea(
			res,
			res.mid.Request['party_no'],
			res.mid.Request['quest_id'],
			res.mid.Request['support_viewer_id']
		);
	}
	else {
		res.mid.Persist['Dungeon']['Party'] = await global.Module.Director.DungeonData(
			res,
			[ res.mid.Request['party_no'] ],
			res.mid.Request['quest_id'],
			res.mid.Request['support_viewer_id']
		);
	}
	
	res.mid.Persist['Dungeon']['Drop'] = global.Module.Quest.GetDrops(
		res.mid.Request['quest_id'],
		EventList,
		res.mid.Persist['Dungeon']['Party']['Info']['party_unit_list'],
		res.mid.Request['play_count']
	);
	res.mid.Request['play_record'] = { 'time': 0 }
	await global.Module.Director.DungeonRecord(res, res.mid.Request['play_count'], false);
	next();
}));
Orchis.post("/dungeon_skip/start_assign_unit", global.Mesh(async (req, res, next) => {
	res.mid.Persist['Dungeon'] = {
		'IsSkip': true,
		'IsRareSpawn': false,
		'IsHost': 1,
		'QuestID': res.mid.Request['quest_id'],
		'QuestData': await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "quest_list", { 'quest_id': res.mid.Request['quest_id'] }),
		'Key': crypto.randomBytes(16).toString('hex'),
		'Step': 1,
		'PlayType': 1,
		'Started': Math.floor(Date.now() / 1000),
		'Repeat': { 'Active': false }
	}
	if (res.mid.IsArchaea == true) {
		res.mid.Persist['Dungeon']['Party'] = await global.Module.Director.DungeonDataArchaea(
			res,
			res.mid.Request['party_no'],
			res.mid.Request['quest_id'],
			res.mid.Request['support_viewer_id'],
			res.mid.Request['request_party_setting_list']
		);
	}
	else {
		res.mid.Persist['Dungeon']['Party'] = await global.Module.Director.DungeonData(
			res,
			[ 0 ],
			res.mid.Request['quest_id'],
			res.mid.Request['support_viewer_id'],
			res.mid.Request['request_party_setting_list']
		);
	}
	
	res.mid.Persist['Dungeon']['Drop'] = global.Module.Quest.GetDrops(
		res.mid.Request['quest_id'],
		EventList,
		res.mid.Persist['Dungeon']['Party']['Info']['party_unit_list'],
		res.mid.Request['play_count']
	);
	res.mid.Request['play_record'] = { 'time': 0 }
	await global.Module.Director.DungeonRecord(res, res.mid.Request['play_count'], false);
	next();
}));
Orchis.post("/dungeon_skip/start_multiple_quest", global.Mesh(async (req, res, next) => {
	res.mid.Request['play_record'] = { 'time': 0 }
	res.mid.Persist['Dungeon'] = {
		'Repeat': { 'Active': false }
	}
	await global.Module.Director.DungeonMultiClear(
		res,
		res.mid.Request['request_quest_multiple_list'],
		res.mid.Request['party_no'],
		EventList
	);
	next();
}));
Orchis.post("/dungeon/get_area_odds", global.Mesh(async (req, res, next) => {
	res.mid.Data = {
		'odds_info': global.Module.Quest.AreaOdds(res.mid.Persist['Dungeon']['QuestID'], res.mid.Persist, res.mid.Request['area_idx']),
	}
	next();
}));
Orchis.post("/dungeon_record/record", global.Mesh(async (req, res, next) => {
	if (res.mid.IsArchaea == true) {
		await global.Module.Director.DungeonRecordArchaea(res, 1, false);
	}
	else {
		await global.Module.Director.DungeonRecord(res, 1, false);
	}
	next();
}));
Orchis.post("/dungeon_record/record_multi", global.Mesh(async (req, res, next) => {
	if (req.get("Authorization") != global.Config['Photon']['Token']) {
		if (req.get('sid') == undefined) { res.status(401); res.end("Rejected.\n"); return; }
	}
	else {
		if (req.get('sid') == undefined) {
			const UserAccount = await global.Module.Fluoresce.Read("OrchisAccount", req.get("Auth-ViewerId"));
			req.headers['sid'] = UserAccount['PersistID'];
		}
	}
	res.mid.Persist = await global.Module.Fluoresce.Read("OrchisPersist", req.get('sid'));
	res.mid.ViewerID = res.mid.Persist['ViewerID'];
	res.mid.Prefunction = JSON.stringify(res.mid.Persist);
	if (res.mid.IsArchaea == true) {
		await global.Module.Director.DungeonRecordArchaea(res, 1, true);
	}
	else {
		await global.Module.Director.DungeonRecord(res, 1, true);
	}
	next();
}));
Orchis.post("/repeat/end", global.Mesh(async (req, res, next) => {
	res.mid.Request['play_record'] = {
		'time': 0,
		'damage_record': []
	}
	if (res.mid.IsArchaea == true) {
		await global.Module.Director.DungeonRecordArchaea(res, 1, false);
	}
	else {
		await global.Module.Director.DungeonRecord(res, 1, false);
	}
	next();
}));
Orchis.post("/dungeon/fail", async (req, res, next) => {
	res.mid.Data = {
		'result': 1,
		'fail_helper_list': res.mid.Persist['Dungeon']['Party']['Support']['Info'],
		'fail_helper_detail_list': res.mid.Persist['Dungeon']['Party']['Support']['Player'],
		'fail_quest_detail': {
			'quest_id': res.mid.Persist['Dungeon']['QuestID'],
			'is_host': res.mid.Persist['Dungeon']['IsHost'] == true ? 1 : 0
		}
	}
	next();
});
Orchis.post("/dungeon/retry", async (req, res, next) => {
	res.mid.Data = { 'continue_count': 1 }
	next();
});
Orchis.post("/heroparam/batch", global.Mesh(async (req, res) => {
	const Requested = JSON.parse(req.body);
	let Reply = [];
	for (const x in Requested) {
		const UserAccount = await global.Module.Fluoresce.Read("OrchisAccount", Requested[x]['viewerId']);
		let UserPersist = await global.Module.Fluoresce.Read("OrchisPersist", UserAccount['PersistID']);
		const ParamList = await global.Module.Director.CoOpDungeonData(UserPersist, Requested[x]['partySlots'], Requested[x]['questId']);
		Reply.push({
			'actorNr': Requested[x]['actorNr'],
			'viewerId': Requested[x]['viewerId'],
			'heroParamLists': ParamList
		});
	}
	const Serialized = JSON.stringify(Reply); res.set(SetHeaders(Serialized.length, "JSON")); res.end(Serialized);
	return;
}));
Orchis.post("/matching/get_room_list", async (req, res, next) => {
	if (res.mid.Persist['Dawn'] == true) { res.end(EmptyRoom); return; }
	const RoomList = await GetRoomList();
	res.mid.Data = {
		'room_list': RoomList,
		'friend_room_list': [],
		'event_room_list': [],
		'event_friend_room_list': []
	}
	next();
});
Orchis.post("/matching/get_room_list_by_quest_id", async (req, res, next) => {
	if (res.mid.Persist['Dawn'] == true) { res.end(EmptyRoom); return; }
	const RoomList = await GetRoomList();
	let Filtered = [];
	for (const x in RoomList) {
		if (RoomList[x]['quest_id'] == res.mid.Request['quest_id']) {
			Filtered.push(RoomList[x]);
		}
	}
	res.mid.Data = {
		'room_list': Filtered,
		'friend_room_list': [],
		'event_room_list': [],
		'event_friend_room_list': []
	}
	next();
});
Orchis.post("/matching/get_room_name", async (req, res, next) => {
	if (res.mid.Persist['Dawn'] == true) { res.end(EmptyRoom); return; }
	const RoomList = await GetRoomList();
	let Filtered = {};
	for (const x in RoomList) {
		if (RoomList[x]['room_id'] == res.mid.Request['room_id']) {
			Filtered = RoomList[x];
			break;
		}
	}
	res.mid.Data = {
		'room_list': Filtered
	}
	next();
});

Orchis.post("/fort/get_data", async (req, res, next) => {
	const BuildList = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "build_list");
	for (const x in BuildList) {
		if (BuildList[x]['build_status'] != 0) {
			let Remain = BuildList[x]['build_end_date'] - BuildList[x]['build_start_date'];
			if (Remain < 0) { Remain = 0; }
			BuildList[x]['remain_time'] = Remain;
		}
		
		if (BuildList[x]['last_income_date'] != -1) {
			let Remain = global.ServerTime - BuildList[x]['last_income_date'];
			if (Remain < 0) { Remain = 0; }
			BuildList[x]['last_income_time'] = Remain;
			
		}
	}
	res.mid.Data = {
		'build_list': BuildList,
		'fort_bonus_list': await global.Module.Director.CalculateBonuses(res),
		'fort_detail': res.mid.Persist['Fort']['Smiths'],
		'production_rp': res.mid.Persist['Fort']['Production']['RP'],
		'production_df': res.mid.Persist['Fort']['Production']['DF'],
		'production_st': res.mid.Persist['Fort']['Production']['ST'],
		'dragon_contact_free_gift_count': 0,
		'current_server_time': global.ServerTime
	}
	next();
});
Orchis.post("/fort/get_multi_income", global.Mesh(async (req, res, next) => {
	res.mid.Data = {
		'result': 1,
		'harvest_build_list': [],
		'add_coin_list': [],
		'add_stamina_list': [],
		'is_over_coin': 0,
		'is_over_material': 0,
		'update_data_list': {
			'user_data': res.mid.Persist['User'],
			'build_list': []
		}
	}
	for (const x in res.mid.Request['build_id_list']) {
		const BuildData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "build_list", { 'build_id': res.mid.Request['build_id_list'][x] });
		const PlantDetail = global.Master.FortPlantDetail[String(BuildData['fort_plant_detail_id'])];
		if (PlantDetail == undefined) { console.log("Unknown facility " + BuildData['fort_plant_detail_id']); res.mid.Error = 115; next(); }
		const LastIncome = global.ServerTime - BuildData['last_income_date'];
		switch(BuildData['plant_id']) {
			case 100101:
				if (LastIncome > PlantDetail['_StaminaMaxTime']) {
					res.mid.Persist['User']['stamina_single'] += PlantDetail['_StaminaMax'];
					res.mid.Data['add_stamina_list'].push({
						'build_id': res.mid.Request['build_id_list'][x],
						'add_stamina': PlantDetail['_StaminaMax']
					});
				}
				else {
					const TimePoint = PlantDetail['_StaminaMaxTime'] / PlantDetail['_StaminaMax'];
					const Gain = Math.floor(LastIncome / TimePoint);
					res.mid.Persist['User']['stamina_single'] += Gain;
					res.mid.Data['add_stamina_list'].push({
						'build_id': res.mid.Request['build_id_list'][x],
						'add_stamina': Gain
					});
				}
				if (res.mid.Persist['User']['stamina_single'] > 999) { res.mid.Persist['User']['stamina_single'] = 999; }
			break;
			case 100201:
				if (LastIncome > PlantDetail['_CostMaxTime']) {
					res.mid.ItemList.push({ 'type': 4, 'id': 0, 'quantity': PlantDetail['_CostMax'] });
					res.mid.Data['add_coin_list'].push({
						'build_id': res.mid.Request['build_id_list'][x],
						'add_coin': PlantDetail['_CostMax']
					});
				}
				else {
					const TimePoint = PlantDetail['_CostMaxTime'] / PlantDetail['_CostMax'];
					const Gain = Math.floor(LastIncome / TimePoint);
					res.mid.ItemList.push({ 'type': 4, 'id': 0, 'quantity': Gain });
					res.mid.Data['add_coin_list'].push({
						'build_id': res.mid.Request['build_id_list'][x],
						'add_coin': Gain
					});
				}
			break;
			case 100301:
				const Tier1 = Math.floor(Math.random() * 11) + 5;
				const Tier2 = Math.floor(Math.random() * 6) + 5;
				const Tier3 = Math.floor(Math.random() * 5) + 2;
				res.mid.ItemList.push({ 'type': 8, 'id': 102001001, 'quantity': Tier1 });
				res.mid.ItemList.push({ 'type': 8, 'id': 102001002, 'quantity': Tier2 });
				res.mid.ItemList.push({ 'type': 8, 'id': 102001003, 'quantity': Tier3 });
				res.mid.Data['harvest_build_list'].push({
					'build_id': res.mid.Request['build_id_list'][x],
					'add_harvest_list': [
						{ 'material_id': 102001001, 'add_num': Tier1 },
						{ 'material_id': 102001002, 'add_num': Tier2 },
						{ 'material_id': 102001003, 'add_num': Tier3 },
					]
				});
			break;
		}
		BuildData['last_income_date'] = global.ServerTime;
		res.mid.Data['update_data_list']['build_list'].push(BuildData);
	}
	next();
}));
Orchis.post("/fort/move", global.Mesh(async (req, res, next) => {
	const BuildData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "build_list", { 'build_id': res.mid.Request['build_id'] });
	BuildData['position_x'] = res.mid.Request['after_position_x'];
	BuildData['position_z'] = res.mid.Request['after_position_z'];
	res.mid.Data = {
		'result': 1,
		'build_id': res.mid.Request['build_id'],
		'update_data_list': { 'build_list': [ BuildData ] }
	}
	next();
}));
Orchis.post("/fort/build_start", global.Mesh(async (req, res, next) => {
	res.mid.Persist['Key']['Build'] += 1;
	const BuildData = global.Module.Director.CreateBuild(
		res.mid.Request['fort_plant_id'],
		res.mid.Persist['Key']['Build'],
		{ 'x': res.mid.Request['position_x'], 'z': res.mid.Request['position_z'] }
	);
	res.mid.Data = {
		'result': 1,
		'levelup_start_date': global.ServerTime,
		'levelup_end_date': global.ServerTime + BuildData['Time'],
		'remain_time': BuildData['Time'],
		'build_id': res.mid.Persist['Key']['Build'],
		'fort_detail': res.mid.Persist['Fort']['Smiths'],
		'update_data_list': {
			'build_list': [ BuildData['Build'] ]
		}
	}
	next();
}));
Orchis.post(["/fort/build_end", "/fort/build_at_once"], global.Mesh(async (req, res, next) => {
	const BuildData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "build_list", { 'build_id': res.mid.Request['build_id'] });
	BuildData['level'] += 1;
	BuildData['build_status'] = 0;
	BuildData['build_start_date'] = 0;
	BuildData['build_end_date'] = 0;
	BuildData['remain_time'] = 0;
	res.mid.Data = {
		'result': 1,
		'build_id': res.mid.Request['build_id'],
		'fort_detail': res.mid.Persist['Fort']['Smiths'],
		'production_rp': res.mid.Persist['Fort']['Production']['RP'],
		'production_df': res.mid.Persist['Fort']['Production']['DF'],
		'production_st': res.mid.Persist['Fort']['Production']['ST'],
		'update_data_list': {
			'build_list': [ BuildData ]
		}
	}
	next();
}));
Orchis.post("/fort/build_cancel", global.Mesh(async (req, res, next) => {
	await global.Module.Fluoresce.Delete("OrchisIndex", res.mid.ViewerID, "build_list", { 'build_id': res.mid.Request['build_id'] });
	res.mid.Data = {
		'result': 1,
		'build_id': res.mid.Request['build_id']
	}
	next();
}));
Orchis.post("/fort/levelup_start", global.Mesh(async (req, res, next) => {
	const BuildData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "build_list", { 'build_id': res.mid.Request['build_id'] });
	const NextData = global.Master.FortPlantDetail[String(global.Master.FortPlantDetail[String(BuildData['fort_plant_detail_id'])]['_NextAssetGroup'])];
	if (NextData == undefined) { res.mid.Error = 10010; next(); return; }
	res.mid.ItemList.push({ 'type': 4, 'id': 0, 'quantity': NextData['_Cost'] * -1 });
	let i = 0; while (i < 5) {
		res.mid.ItemList.push({
			'type': 8,
			'id': NextData['_MaterialsId' + String(i + 1)],
			'quantity': NextData['_MaterialsNum' + String(i + 1)] * -1
		});
		i++;
	}
	BuildData['build_status'] = 2;
	BuildData['build_start_date'] = global.ServerTime;
	BuildData['build_end_date'] = global.ServerTime + NextData['_Time'];
	BuildData['remain_time'] = NextData['_Time'];
	res.mid.Data = {
		'result': 1,
		'build_id': res.mid.Request['build_id'],
		'fort_detail': res.mid.Persist['Fort']['Smiths'],
		'production_rp': res.mid.Persist['Fort']['Production']['RP'],
		'production_df': res.mid.Persist['Fort']['Production']['DF'],
		'production_st': res.mid.Persist['Fort']['Production']['ST'],
		'update_data_list': {
			'build_list': [ BuildData ]
		}
	}
	next();
}));
Orchis.post("/fort/levelup_end", global.Mesh(async (req, res, next) => {
	const BuildData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "build_list", { 'build_id': res.mid.Request['build_id'] });
	BuildData['level'] += 1;
	const DetailID = BuildData['level'] < 10 ?
		parseInt(String(BuildData['plant_id'] + "0" + String(BuildData['level']))) :
		parseInt(String(BuildData['plant_id'] + String(BuildData['level'])));
	BuildData['fort_plant_detail_id'] = DetailID;
	BuildData['build_status'] = 0;
	BuildData['build_start_date'] = 0;
	BuildData['build_end_date'] = 0;
	BuildData['remain_time'] = 0;
	res.mid.Data = {
		'result': 1,
		'build_id': res.mid.Request['build_id'],
		'fort_detail': res.mid.Persist['Fort']['Smiths'],
		'fort_bonus_list': await global.Module.Director.CalculateBonuses(res),
		'production_rp': res.mid.Persist['Fort']['Production']['RP'],
		'production_df': res.mid.Persist['Fort']['Production']['DF'],
		'production_st': res.mid.Persist['Fort']['Production']['ST'],
		'update_data_list': {
			'build_list': [ BuildData ]
		}
	}
	next();
}));
Orchis.post("/fort/levelup_cancel", global.Mesh(async (req, res, next) => {
	const BuildData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "build_list", { 'build_id': res.mid.Request['build_id'] });
	BuildData['build_status'] = 0;
	BuildData['build_start_date'] = 0;
	BuildData['build_end_date'] = 0;
	BuildData['remain_time'] = 0;
	res.mid.Data = {
		'result': 1,
		'build_id': res.mid.Request['build_id'],
		'fort_detail': res.mid.Persist['Fort']['Smiths'],
		'production_rp': res.mid.Persist['Fort']['Production']['RP'],
		'production_df': res.mid.Persist['Fort']['Production']['DF'],
		'production_st': res.mid.Persist['Fort']['Production']['ST'],
		'update_data_list': {
			'build_list': [ BuildData ]
		}
	}
	next();
}));
Orchis.post("/fort/levelup_at_once", global.Mesh(async (req, res, next) => {
	const BuildData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "build_list", { 'build_id': res.mid.Request['build_id'] });
	BuildData['level'] += 1;
	const DetailID = BuildData['level'] < 10 ?
		parseInt(String(BuildData['plant_id'] + "0" + String(BuildData['level']))) :
		parseInt(String(BuildData['plant_id'] + String(BuildData['level'])));
	BuildData['fort_plant_detail_id'] = DetailID;
	BuildData['build_status'] = 0;
	BuildData['build_start_date'] = 0;
	BuildData['build_end_date'] = 0;
	BuildData['remain_time'] = 0;
	//switch(res.mid.Request['payment_type']) {}
	
	res.mid.Data = {
		'result': 1,
		'build_id': res.mid.Request['build_id'],
		'fort_detail': res.mid.Persist['Fort']['Smiths'],
		'fort_bonus_list': await global.Module.Director.CalculateBonuses(res),
		'production_rp': res.mid.Persist['Fort']['Production']['RP'],
		'production_df': res.mid.Persist['Fort']['Production']['DF'],
		'production_st': res.mid.Persist['Fort']['Production']['ST'],
		'update_data_list': {
			'build_list': [ BuildData ]
		}
	}
	next();
}));

Orchis.post("/memory_event/activate", global.Mesh(async (req, res, next) => {
	res.mid.Persist['User']['active_memory_event_id'] = res.mid.Request['event_id'];
	res.mid.Data = { 'update_data_list': { 'user_data': res.mid.Persist['User'] } }
	next();
}));
Orchis.post("/event_trade/get_list", global.Mesh(async (req, res, next) => {
	const EventID = String(global.Master.EventTradeGroup[String(res.mid.Request['trade_group_id'])]['_EventId']);
	const TradeList = global.Module.Event.EventTradeData(EventID);
	res.mid.Data = {
		'user_event_item_data': [],
		'user_event_trade_list': res.mid.Persist['Event'][EventID] == undefined ? [] : res.mid.Persist['Event'][EventID]['Trade'],
		'event_trade_list': res.mid.Persist['Event'][EventID] == undefined ? [] : TradeList
	}
	next();
}));
Orchis.post("/event_trade/trade", global.Mesh(async (req, res, next) => {
	await global.Module.Event.EventTrade(
		res,
		res.mid.Request['trade_group_id'],
		res.mid.Request['trade_id'],
		res.mid.Request['trade_count']
	);
	next();
}));
Orchis.post("/event_summon/get_data", global.Mesh(async (req, res, next) => {
	const EventID = String(res.mid.Request['event_id']);
	const BlazonData = global.Module.Event.GetBlazonData(
		EventID,
		res.mid.Persist['Event'][EventID]['Summon']['Count'],
		res.mid.Persist['Event'][EventID]['Summon']['Data']
	);
	let Remaining = 0;
	let MaxExec = 0;
	for (const x in BlazonData) {
		Remaining += BlazonData[x]['limit'];
		MaxExec += BlazonData[x]['total_count'];
	}
	res.mid.Data = {
		'box_summon_data': {
			'event_id': parseInt(EventID),
			'event_point': res.mid.Persist['Event'][EventID]['User']['box_summon_point'],
			'box_summon_seq': res.mid.Persist['Event'][EventID]['Summon']['Count'],
			'reset_possible': res.mid.Persist['Event'][EventID]['Summon']['Target'],
			'remaining_quantity': Remaining,
			'box_summon_detail': BlazonData,
			'max_exec_count': MaxExec
		}
	}
	next();
}));
Orchis.post("/event_summon/exec", global.Mesh(async (req, res, next) => {
	await global.Module.Event.BlazonSummon(
		res,
		res.mid.Request['event_id'],
		res.mid.Request['count'],
		res.mid.Request['is_enable_stop_by_target']
	);
	next();
}));
Orchis.post("/event_summon/reset", global.Mesh(async (req, res, next) => {
	const EventID = String(res.mid.Request['event_id']);
	res.mid.Persist['Event'][EventID]['Summon']['Count'] += 1;
	res.mid.Persist['Event'][EventID]['Summon']['Data'] = global.Module.Event.BlazonUserReset(EventID, res.mid.Persist['Event'][EventID]['Summon']['Count']);
	res.mid.Persist['Event'][EventID]['Summon']['Target'] = res.mid.Persist['Event'][EventID]['Summon']['Count'] > 4 ? 1 : 0;
	const BlazonData = global.Module.Event.GetBlazonData(
		EventID,
		res.mid.Persist['Event'][EventID]['Summon']['Count'],
		res.mid.Persist['Event'][EventID]['Summon']['Data']
	);
	let Remaining = 0;
	for (const x in BlazonData) {
		Remaining += BlazonData[x]['limit'];
	}
	res.mid.Data = {
		'box_summon_data': {
			'event_id': parseInt(EventID),
			'event_point': res.mid.Persist['Event'][EventID]['User']['box_summon_point'],
			'box_summon_seq': res.mid.Persist['Event'][EventID]['Summon']['Count'],
			'reset_possible': res.mid.Persist['Event'][EventID]['Summon']['Target'],
			'remaining_quantity': Remaining,
			'box_summon_detail': BlazonData,
			'max_evec_count': Remaining > res.mid.Persist['Event'][EventID]['User']['box_summon_point'] ? Remaining : res.mid.Persist['Event'][EventID]['User']['box_summon_point']
		}
	}
	next();
}));
Orchis.post("/raid_event/entry", global.Mesh(async (req, res, next) => {
	const EventID = String(res.mid.Request['raid_event_id']);
	res.mid.Persist['Event'][EventID] = {
		'User': {
			'raid_event_id': parseInt(EventID),
			'box_summon_point': 0,
			'raid_point_1': 0,
			'raid_point_2': 0,
			'raid_point_3': 0,
			'advent_item_quantity_1': 0,
			'advent_item_quantity_2': 0,
			'ultimate_key_count': 0,
			'exchange_item_count': 0,
			'exchange_item_count_2': 0
		},
		'Summon': {
			'Data': global.Module.Event.BlazonUserReset(EventID, 1),
			'Count': 1,
			'Target': 0
		},
		'Reward': [],
		'Trade': [],
		'Friendship': [],
		'Passive': global.Module.Event.GetPassiveList(EventID),
		'Damage': {
			'user_damage_value': 0,
			'user_target_time': 0,
			'total_damage_value': 0,
			'total_target_time': 0,
			'total_aggregate_time': 0
		},
		'Ability': global.Module.Event.GetEventAbility(EventID)
	}
	res.mid.Data = {
		'raid_event_user_data': res.mid.Persist['Event'][EventID]['User']
	}
	next();
}));
Orchis.post("/raid_event/get_event_data", global.Mesh(async (req, res, next) => {
	const EventID = String(res.mid.Request['raid_event_id']);
	if (res.mid.Persist['Event'][EventID] == undefined) {
		res.mid.Data = {
			'raid_event_user_data': []
		}
		next(); return;
	}
	res.mid.Data = {
		'raid_event_user_data': res.mid.Persist['Event'][EventID]['User'],
		'raid_event_reward_list': res.mid.Persist['Event'][EventID]['Reward'],
		'chara_friendship_list': res.mid.Persist['Event'][EventID]['Friendship'],
		'event_trade_list': global.Module.Event.EventTradeData(EventID),
		'event_passive_list': [
			{
				'event_id': res.mid.Request['raid_event_id'],
				'event_passive_grow_list': res.mid.Persist['Event'][EventID]['Passive']
			}
		],
		'event_damage_data': res.mid.Persist['Event'][EventID]['Damage'],
		'event_ability_chara_list': res.mid.Persist['Event'][EventID]['Ability']
	}
	next();
}));
Orchis.post("/raid_event/receive_raid_point_reward", global.Mesh(async (req, res, next) => {
	await global.Module.Event.EmblemReward(
		res,
		res.mid.Request['raid_event_id'],
		res.mid.Request['raid_event_reward_id_list']
	);
	next();
}));
Orchis.post("/build_event/entry", global.Mesh(async (req, res, next) => {
	const EventID = String(res.mid.Request['event_id']);
	res.mid.Persist['Event'][EventID] = {
		'User': [
			{
				'user_build_event_item': 10001,
				'event_item_value': 0
			},
			{
				'user_build_event_item': 10002,
				'event_item_value': 0
			},
			{
				'user_build_event_item': 10003,
				'event_item_value': 0
			}
		],
		'Reward': [],
		'Trade': [],
		'Friendship': []
	}
	res.mid.ItemList.push({ 'type': 9, 'id': global.Master.EventData[EventID]['_EventFortId'], 'quantity': 1 });
	res.mid.Data = {
		'build_event_user_data': {
			'build_event_id': res.mid.Request['event_id'],
			'user_build_event_item_list': res.mid.Persist['Event'][EventID]['User']
		}
	}
	next();
}));
Orchis.post("/build_event/get_event_data", global.Mesh(async (req, res, next) => {
	const EventID = String(res.mid.Request['event_id']);
	if (res.mid.Persist['Event'][EventID] == undefined) {
		res.mid.Data = {
			'build_event_user_data': []
		}
		next(); return;
	}
	const EventPoint = res.mid.Persist['Event'][EventID]['User'].find(z => z.user_build_event_item == 10001);
	const EventFacility = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "build_list", { 'plant_id': global.Master.EventData[EventID]['_EventFortId'] });
	res.mid.Data = {
		'event_fort_data': { 'plant_id': global.Master.EventData[EventID]['_EventFortId'], 'level': EventFacility['level'] },
		'build_event_user_data': {
			'build_event_id': res.mid.Request['event_id'],
			'user_build_event_item_list': res.mid.Persist['Event'][EventID]['User']
		},
		'build_event_reward_list': res.mid.Persist['Event'][EventID]['Reward'],
		'event_trade_list': global.Module.Event.EventTradeData(EventID),
		'is_receivable_event_daily_bonus': 0
	}
	next();
}));
Orchis.post("/build_event/receive_build_point_reward", global.Mesh(async (req, res, next) => {
	await global.Module.Event.GetBuildReward(res, res.mid.Request['event_id']);
	next();
}));
Orchis.post("/clb01_event/entry", global.Mesh(async (req, res, next) => {
	const EventID = String(res.mid.Request['event_id']);
	res.mid.Persist['Event'][EventID] = {
		'User': [
			{
				'user_clb_01_event_item': 10101,
				'event_item_value': 0
			},
			{
				'user_clb_01_event_item': 10102,
				'event_item_value': 0
			},
			{
				'user_clb_01_event_item': 10201,
				'event_item_value': 0
			}
		],
		'Reward': [],
		'Trade': [],
		'Friendship': []
	}
	res.mid.Data = {
		'clb_01_event_user_data': {
			'event_id': res.mid.Request['event_id'],
			'user_clb_01_event_item_list': res.mid.Persist['Event'][EventID]['User']
		}
	}
	next();
}));
Orchis.post("/clb01_event/get_event_data", global.Mesh(async (req, res, next) => {
	const EventID = String(res.mid.Request['event_id']);
	if (res.mid.Persist['Event'][EventID] == undefined) {
		res.mid.Data = {
			'clb_01_event_user_data': []
		}
		next(); return;
	}
	const EventPoint = res.mid.Persist['Event'][EventID]['User'].find(z => z.user_build_event_item == 10001);
	const EventFacility = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "build_list", { 'plant_id': global.Master.EventData[EventID]['_EventFortId'] });
	res.mid.Data = {
		'chara_friendship_list': res.mid.Persist['Event'][EventID]['Friendship'],
		'clb_01_event_user_data': {
			'event_id': res.mid.Request['event_id'],
			'user_clb_01_event_item_list': res.mid.Persist['Event'][EventID]['User']
		},
		'clb_01_event_reward_list': res.mid.Persist['Event'][EventID]['Reward'],
		'clb_01_trade_list': res.mid.Persist['Event'][EventID]['Trade']
	}
	next();
}));
Orchis.post("/clb01_event/receive_clb01_point_reward", global.Mesh(async (req, res, next) => {
	await global.Module.Event.GetBuildReward(res, res.mid.Request['event_id']);
	next();
}));
Orchis.post("/combat_event/entry", global.Mesh(async (req, res, next) => {
	const EventID = String(res.mid.Request['event_id']);
	res.mid.Persist['Event'][EventID] = {
		'User': {
			'event_id': parseInt(EventID),
			'event_point': 0,
			'exchange_item_01': 0,
			'quest_unlock_item_01': 0,
			'quest_unlock_item_02': 0,
			'advent_item_01': 0
		},
		'Reward': [],
		'Trade': [],
		'Location': [],
		'Friendship': []
	}
	res.mid.Data = {
		'combat_event_user_data': res.mid.Persist['Event'][EventID]['User']
	}
	next();
}));
Orchis.post("/combat_event/get_event_data", global.Mesh(async (req, res, next) => {
	const EventID = String(res.mid.Request['event_id']);
	if (res.mid.Persist['Event'][EventID] == undefined) {
		res.mid.Data = {
			'combat_event_user_data': []
		}
		next(); return;
	}
	res.mid.Data = {
		'combat_event_user_data': res.mid.Persist['Event'][EventID]['User'],
		'event_trade_list': global.Module.Event.EventTradeData(EventID),
		'user_event_location_reward_list': res.mid.Persist['Event'][EventID]['Location']
	}
	next();
}));
Orchis.post("/combat_event/receive_event_point_reward", global.Mesh(async (req, res, next) => {
	await global.Module.Event.GetBuildReward(res, res.mid.Request['event_id'] );
	next();
}));
Orchis.post("/combat_event/receive_event_location_reward", global.Mesh(async (req, res, next) => {
	await global.Module.Event.GetCombatReward(
		res,
		res.mid.Request['event_id'],
		res.mid.Request['event_location_reward_id']
	);
	next();
}));
Orchis.post("/earn_event/entry", global.Mesh(async (req, res, next) => {
	const EventID = String(res.mid.Request['event_id']);
	res.mid.Persist['Event'][EventID] = {
		'User': {
			'event_id': parseInt(EventID),
			'event_point': 0,
			'exchange_item_01': 0,
			'exchange_item_02': 0,
			'advent_item_quantity_01': 0
		},
		'Reward': [],
		'Trade': [],
		'Friendship': []
	}
	res.mid.Data = {
		'earn_event_user_data': res.mid.Persist['Event'][EventID]['User']
	}
	next();
}));
Orchis.post("/earn_event/get_event_data", global.Mesh(async (req, res, next) => {
	const EventID = String(res.mid.Request['event_id']);
	if (res.mid.Persist['Event'][EventID] == undefined) {
		res.mid.Data = {
			'earn_event_user_data': {}
		}
		next(); return;
	}
	res.mid.Data = {
		'is_receivable_event_daily_bonus': 0,
		'event_reward_list': res.mid.Persist['Event'][EventID]['Reward'],
		'earn_event_user_data': res.mid.Persist['Event'][EventID]['User'],
		'event_trade_list': global.Module.Event.EventTradeData(EventID),
	}
	next();
}));
Orchis.post("/earn_event/receive_event_point_reward", global.Mesh(async (req, res, next) => {
	await global.Module.Event.GetBuildReward(res, res.mid.Request['event_id'] );
	next();
}));

Orchis.post("/guild/update_user_setting", global.Mesh(async (req, res, next) => {
	const UserGuildData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "user_guild_data");
	const GuildBoardData = await global.Module.Fluoresce.Read("OrchisGuildBoard", UserGuildData['guild_id']);
	const MemberCount = await global.Module.Fluoresce.CountUser("OrchisGuildUser", UserGuildData['guild_id']);
	GuildBoardData['guild_member_count'] = MemberCount;
	
	const RightNow = Math.floor(Date.now() / 1000);
	const UserUpdateData = {
		'viewer_id': res.mid.ViewerID,
		'user_name': res.mid.Persist['User']['name'],
		'user_level': res.mid.Persist['User']['level'],
		'max_party_power': 50000,
		'profile_entity_type': res.mid.Request['profile_entity_type'],
		'profile_entity_id': res.mid.Request['profile_entity_id'],
		'profile_entity_rarity': res.mid.Request['profile_entity_rarity'],
		'last_active_time': RightNow,
		'last_guild_active_time': RightNow,
		'last_attend_time': RightNow,
		'guild_position_type': 3,
		'temporary_end_time': 0
	}
	await global.Module.Fluoresce.Write("OrchisGuildUser", UserGuildData['guild_id'], UserUpdateData, false, { 'viewer_id': res.mid.ViewerID });
	
	res.mid.Data['update_data_list'] = {
		'user_guild_data': {
			'guild_id': UserGuildData['guild_id'],
			'guild_apply_id': 0,
			'penalty_end_time': 0,
			'guild_push_notification_type_running': res.mid.Request['guild_push_notification_type_running'],
			'guild_push_notification_type_suspending': res.mid.Request['guild_push_notification_type_suspending'],
			'profile_entity_type': res.mid.Request['profile_entity_type'],
			'profile_entity_id': res.mid.Request['profile_entity_id'],
			'profile_entity_rarity': res.mid.Request['profile_entity_rarity'],
			'last_attend_time': RightNow,
			'is_enable_invite_receive': 0, //res.mid.Request['is_enable_invite_receive'],
			'is_enable_invite_send': 1
		},
		'guild_data': GuildBoardData
	}
	next();
}));
Orchis.post("/guild/index", global.Mesh(async (req, res, next) => {
	let UserGuildData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "user_guild_data");
	if (UserGuildData['guild_id'] == 0) {
		UserGuildData = await AssignGuild(res, 10001);
	}
	let MemberList = await global.Module.Fluoresce.ReadList("OrchisGuildUser", UserGuildData['guild_id'], 19);
	const UserMemberData = await global.Module.Fluoresce.QueryList("OrchisGuildUser", UserGuildData['guild_id'], { 'viewer_id': res.mid.ViewerID });
	MemberList.push(UserMemberData);
	UserGuildData['last_attend_time'] = global.ServerTime;
	await global.Module.Fluoresce.Write("OrchisIndexRecord", res.mid.ViewerID, UserGuildData, "user_guild_data");
	let GuildBoardData = await global.Module.Fluoresce.Read("OrchisGuildBoard", UserGuildData['guild_id']);
	const GuildMemberCount = await global.Module.Fluoresce.CountUser("OrchisGuildUser", UserGuildData['guild_id']);
	GuildBoardData['guild_member_count'] = GuildMemberCount;
	res.mid.Data = {
		'is_update_guild_position': 0,
		'attend_bonus_list': [],
		'guild_invite_receive_count': 0,
		'current_server_time': global.ServerTime,
		'guild_member_list': MemberList,
		'update_data_list': {
			'user_guild_data': UserGuildData,
			'guild_data': GuildBoardData,
			'guild_notice': {
				'is_update_guild_apply_reply': 0,
				'guild_apply_count': 0,
				'is_update_guild_board': 0,
				'is_update_guild': 0,
				'is_update_guild_invite': 0
			}
		}
	}
	next();
}));
Orchis.post("/guild_chat/get_new_message_list", global.Mesh(async (req, res, next) => {
	let GuildChatList = [];
	if (res.mid.Request['chat_message_id'] == 0) {
		GuildChatList = await global.Module.Fluoresce.ReadList("OrchisGuildChat", res.mid.Request['guild_id'], 10);
	}
	else {
		const List = await global.Module.Fluoresce.ReadList("OrchisGuildChat", res.mid.Request['guild_id'], 10);
		for (const x in List) {
			if (List[x]['chat_message_id'] >= res.mid.Request['chat_message_id']) {
				GuildChatList.shift(List[x]);
			}
		}
	}
	res.mid.Data = {
		'guild_chat_message_list': GuildChatList,
		'polling_interval': 10
	}
	const UserGuildData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "user_guild_data");
	UserGuildData['last_attend_time'] = Math.floor(Date.now(), 1000);
	await global.Module.Fluoresce.Write("OrchisIndexRecord", res.mid.ViewerID, UserGuildData, "user_guild_data");
	next();
}));
Orchis.post("/guild_chat/get_old_message_list", global.Mesh(async (req, res, next) => {
	const GuildChatList = await global.Module.Fluoresce.ReadList("OrchisGuildChat", res.mid.Request['guild_id'], 10, "chat_message_id", res.mid.Request['chat_message_id']);
	res.mid.Data = {
		'guild_chat_message_list': GuildChatList,
		'polling_interval': 10
	}
	next();
}));
Orchis.post("/guild_chat/post_message_text", global.Mesh(async (req, res, next) => {
	if (res.mid.Request['chat_message_text'] > 500) {
		res.mid.Request['chat_message_text'] = res.mid.Request['chat_message_text'].slice(0, 500);
	}
	if (global.Module.Filter.Validate(res.mid.Request['chat_message_text'])) {
		res.mid.Error = 28012; next();
	}
	const UserGuildData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "user_guild_data");
	const MessageID = await global.Module.Fluoresce.ReadIncrement("OrchisChatID", res.mid.Request['guild_id']);
	const Message = {
		'chat_message_id': MessageID,
		'viewer_id': res.mid.ViewerID,
		'user_name': res.mid.Persist['User']['name'],
		'profile_entity_type': UserGuildData['profile_entity_type'],
		'profile_entity_id': UserGuildData['profile_entity_id'],
		'profile_entity_rarity': UserGuildData['profile_entity_rarity'],
		'chat_message_type': 1,
		'chat_message_text': res.mid.Request['chat_message_text'],
		'chat_message_stamp_id': 0,
		'chat_message_system_id': 0,
		'chat_message_param_value_1': 0,
		'chat_message_param_value_2': 0,
		'chat_message_param_value_3': 0,
		'chat_message_param_value_4': 0,
		'create_time': Math.floor(Date.now() / 1000)
	}
	await global.Module.Fluoresce.Append("OrchisGuildChat", res.mid.Request['guild_id'], [ Message ]);
	let GuildChatList = [];
	const List = await global.Module.Fluoresce.ReadList("OrchisGuildChat", res.mid.Request['guild_id'], 10);
	for (const x in List) {
		if (List[x]['chat_message_id'] >= MessageID) {
			GuildChatList.push(List[x]);
		}
	}
	res.mid.Data = {
		'guild_chat_message_list': GuildChatList,
		'polling_interval': 10
	}
	SendToZena("/zena/new_guild_message", {
		'name': res.mid.Persist['User']['name'],
		'viewerid': res.mid.ViewerID,
		'message_type': 1,
		'message': res.mid.Request['chat_message_text'],
		'stamp': 0,
		'icon': {
			'type': UserGuildData['profile_entity_type'],
			'id': UserGuildData['profile_entity_id'],
			'rarity': UserGuildData['profile_entity_rarity']
		}
	});
	next();
}));
Orchis.post("/guild_chat/post_message_stamp", global.Mesh(async (req, res, next) => {
	const UserGuildData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "user_guild_data");
	const MessageID = await global.Module.Fluoresce.ReadIncrement("OrchisChatID", res.mid.Request['guild_id']);
	const Message = {
		'chat_message_id': MessageID,
		'viewer_id': res.mid.ViewerID,
		'user_name': res.mid.Persist['User']['name'],
		'profile_entity_type': UserGuildData['profile_entity_type'],
		'profile_entity_id': UserGuildData['profile_entity_id'],
		'profile_entity_rarity': UserGuildData['profile_entity_rarity'],
		'chat_message_type': 2,
		'chat_message_text': "",
		'chat_message_stamp_id': res.mid.Request['chat_message_stamp_id'],
		'chat_message_system_id': 0,
		'chat_message_param_value_1': 0,
		'chat_message_param_value_2': 0,
		'chat_message_param_value_3': 0,
		'chat_message_param_value_4': 0,
		'create_time': Math.floor(Date.now() / 1000)
	}
	await global.Module.Fluoresce.Append("OrchisGuildChat", res.mid.Request['guild_id'], [ Message ]);
	let GuildChatList = [];
	const List = await global.Module.Fluoresce.ReadList("OrchisGuildChat", res.mid.Request['guild_id'], 10);
	for (const x in List) {
		if (List[x]['chat_message_id'] >= MessageID) {
			GuildChatList.push(List[x]);
		}
	}
	res.mid.Data = {
		'guild_chat_message_list': GuildChatList,
		'polling_interval': 10
	}
	SendToZena("/zena/new_guild_message", {
		'name': res.mid.Persist['User']['name'],
		'viewerid': res.mid.ViewerID,
		'message_type': 2,
		'message': "",
		'stamp': res.mid.Request['chat_message_stamp_id'],
		'icon': {
			'type': UserGuildData['profile_entity_type'],
			'id': UserGuildData['profile_entity_id'],
			'rarity': UserGuildData['profile_entity_rarity']
		}
	});
	next();
}));
Orchis.post("/guild/get_guild_member_data", global.Mesh(async (req, res, next) => {
	const MemberList = await global.Module.Fluoresce.ReadList("OrchisGuildUser", res.mid.Request['guild_id'], 20);
	res.mid.Data = {
		'guild_member_list': MemberList
	}
	next();
}));

Orchis.post("/wall/get_wall_clear_party", async (req, res, next) => {
	res.mid.Data = {
		'wall_clear_party_setting_list': [],
		'lost_unit_list': []
	}
	next();
});
Orchis.post("/wall/set_wall_clear_party", async (req, res, next) => {
	res.mid.Data = {
		'result': 1
	}
	next();
});
Orchis.post("/wall_start/start", global.Mesh(async (req, res, next) => {
	res.mid.Persist['Wall'] = {
		'IsSkip': false,
		'IsRareSpawn': false,
		'IsHost': 1,
		'Key': crypto.randomBytes(16).toString('hex'),
		'PlayType': 1,
		'Started': Math.floor(Date.now() / 1000),
		'Level': res.mid.Request['wall_level'],
		'Drop': {
			'area_index': 0,
			'reaction_object_count': 0,
			'drop_obj': [],
			'enemy': [
				{
					'param_id': 216011001,
					'is_pop': 1,
					'is_rare': 0,
					'piece': 0,
					'enemy_idx': 0,
					'enemy_drop_list': [
						{
							'coin': 500,
							'mana': 120,
							'drop_list': []
						}
					]
				}
			],
			'grade': []
		}
	}
	if (res.mid.IsArchaea == true) {
		res.mid.Persist['Wall']['Party'] = await global.Module.Director.DungeonDataArchaea(
			res,
			res.mid.Request['party_no'],
			0,
			res.mid.Request['support_viewer_id']
		);
	}
	else {
		res.mid.Persist['Wall']['Party'] = await global.Module.Director.DungeonData(
			res,
			[ res.mid.Request['party_no'] ],
			0,
			res.mid.Request['support_viewer_id']
		);
	}
	let SceneVar = 0; let ElementNumber = 1;
	switch(res.mid.Request['wall_id']) {
		case 216010001: SceneVar = 0; ElementNumber = 1; break;
		case 216010002: SceneVar = 1; ElementNumber = 2; break;
		case 216010003: SceneVar = 2; ElementNumber = 3; break;
		case 216010004: SceneVar = 3; ElementNumber = 4; break;
		case 216010005: SceneVar = 4; ElementNumber = 5; break;
	}
	res.mid.Data = {
		'ingame_data': {
			'viewer_id': res.mid.ViewerID,
			'dungeon_key': res.mid.Persist['Wall']['Key'],
			'dungeon_type': 1,
			'is_host': 1,
			'continue_limit': -1,
			'reborn_limit': 0,
			'start_time': res.mid.Persist['Wall']['Started'],
			'party_info': res.mid.Persist['Wall']['Party']['Info'],
			'area_info_list': [{
				'scene_path': "Boss/BG034_5001_00/BG034_5001_00_0" + SceneVar,
				'area_name': "WALL_01_010" + ElementNumber + "_01"
			}],
			'use_stone': -1,
			'is_fever_time': 0,
			'repeat_state': 0,
			'is_bot_tutorial': 0,
			'is_receivable_carry_bonus': 0,
			'first_clear_viewer_id_list': [],
			'multi_disconnect_type': 0
		},
		'ingame_wall_data': {
			'wall_id': res.mid.Request['wall_id'],
			'wall_level': res.mid.Request['wall_level']
		},
		'odds_info': res.mid.Persist['Wall']['Drop']
	}
	next();
}));
Orchis.post("/wall_start/start_assign_unit", global.Mesh(async (req, res, next) => {
	res.mid.Persist['Wall'] = {
		'IsSkip': false,
		'IsRareSpawn': false,
		'IsHost': 1,
		'Key': crypto.randomBytes(16).toString('hex'),
		'PlayType': 1,
		'Started': Math.floor(Date.now() / 1000),
		'Level': res.mid.Request['wall_level'],
		'Drop': {
			'area_index': 0,
			'reaction_object_count': 0,
			'drop_obj': [],
			'enemy': [
				{
					'param_id': 216011001,
					'is_pop': 1,
					'is_rare': 0,
					'piece': 0,
					'enemy_idx': 0,
					'enemy_drop_list': [
						{
							'coin': 500,
							'mana': 120,
							'drop_list': []
						}
					]
				}
			],
			'grade': []
		}
	}
	if (res.mid.IsArchaea == true) {
		res.mid.Persist['Wall']['Party'] = await global.Module.Director.DungeonDataArchaea(
			res,
			res.mid.Request['party_no'],
			0,
			res.mid.Request['support_viewer_id'],
			res.mid.Request['request_party_setting_list']
		);
	}
	else {
		res.mid.Persist['Wall']['Party'] = await global.Module.Director.DungeonData(
			res,
			[ res.mid.Request['party_no'] ],
			0,
			res.mid.Request['support_viewer_id'],
			res.mid.Request['request_party_setting_list']
		);
	}
	let SceneVar = 0; let ElementNumber = 1;
	switch(res.mid.Request['wall_id']) {
		case 216010001: SceneVar = 0; ElementNumber = 1; break;
		case 216010002: SceneVar = 1; ElementNumber = 2; break;
		case 216010003: SceneVar = 2; ElementNumber = 3; break;
		case 216010004: SceneVar = 3; ElementNumber = 4; break;
		case 216010005: SceneVar = 4; ElementNumber = 5; break;
	}
	res.mid.Data = {
		'ingame_data': {
			'viewer_id': res.mid.ViewerID,
			'dungeon_key': res.mid.Persist['Wall']['Key'],
			'dungeon_type': 1,
			'is_host': 1,
			'continue_limit': -1,
			'reborn_limit': 0,
			'start_time': res.mid.Persist['Wall']['Started'],
			'party_info': res.mid.Persist['Wall']['Party']['Info'],
			'area_info_list': [{
				'scene_path': "Boss/BG034_5001_00/BG034_5001_00_0" + SceneVar,
				'area_name': "WALL_01_010" + ElementNumber + "_01"
			}],
			'use_stone': -1,
			'is_fever_time': 0,
			'repeat_state': 0,
			'is_bot_tutorial': 0,
			'is_receivable_carry_bonus': 0,
			'first_clear_viewer_id_list': [],
			'multi_disconnect_type': 0
		},
		'ingame_wall_data': {
			'wall_id': res.mid.Request['wall_id'],
			'wall_level': res.mid.Request['wall_level']
		},
		'odds_info': res.mid.Persist['Wall']['Drop']
	}
	next();
}));
Orchis.post("/wall_record/record", global.Mesh(async (req, res, next) => {
	await global.Module.Director.WallRecord(res, res.mid.Request['wall_id']);
	next();
}));
Orchis.post("/wall/get_monthly_reward", async (req, res, next) => {
	await global.Module.Director.WallReward(res, ResetTimes['Wall']);
	next();
});

Orchis.post("/dmode/entry", async (req, res, next) => {
	res.mid.Persist['DMode']['Info'] = {
		'total_max_floor_num': 0,
		'recovery_count': 0,
		'recovery_time': 0,
		'floor_skip_count': 0,
		'floor_skip_time': 0,
		'dmode_point_1': 0,
		'dmode_point_2': 0,
		'is_entry': 1
	}
	res.mid.Persist['DMode']['Dungeon'] = {
		'chara_id': 0,
		'floor_num': 0,
		'quest_time': 0,
		'dungeon_score': 0,
		'is_play_end': 0,
		'state': 1
	}
	res.mid.Persist['DMode']['Passive'] = [
		{ 'passive_no': 1, 'passive_level': 0 },
		{ 'passive_no': 2, 'passive_level': 0 },
		{ 'passive_no': 3, 'passive_level': 0 },
		{ 'passive_no': 4, 'passive_level': 0 },
		{ 'passive_no': 5, 'passive_level': 0 },
		{ 'passive_no': 6, 'passive_level': 0 },
		{ 'passive_no': 7, 'passive_level': 0 },
		{ 'passive_no': 8, 'passive_level': 0 },
		{ 'passive_no': 9, 'passive_level': 0 },
		{ 'passive_no': 10, 'passive_level': 0 },
		{ 'passive_no': 11, 'passive_level': 0 },
		{ 'passive_no': 12, 'passive_level': 0 },
		{ 'passive_no': 13, 'passive_level': 0 },
		{ 'passive_no': 14, 'passive_level': 0 },
		{ 'passive_no': 15, 'passive_level': 0 },
		{ 'passive_no': 16, 'passive_level': 0 },
		{ 'passive_no': 17, 'passive_level': 0 }
	]
	res.mid.Data = {
		'dmode_info': res.mid.Persist['DMode']['Info'],
		'dmode_chara_list': [],
		'dmode_servitor_passive_list': res.mid.Persist['DMode']['Passive'],
		'dmode_dungeon_info': res.mid.Persist['DMode']['Dungeon']
	}
	next();
});
Orchis.post("/dmode/get_data", async (req, res, next) => {
	res.mid.Data = {
		'dmode_info': res.mid.Persist['DMode']['Info'],
		'dmode_chara_list': res.mid.Persist['DMode']['CharacterList'],
		'dmode_servitor_passive_list': res.mid.Persist['DMode']['Passive'],
		'dmode_dungeon_info': res.mid.Persist['DMode']['Dungeon'],
		'dmode_story_list': res.mid.Persist['DMode']['StoryList'],
		'dmode_expedition': res.mid.Persist['DMode']['Expedition']
	}
	next();
});
Orchis.post("/dmode/read_story", global.Mesh(async (req, res, next) => {
	res.mid.Persist['User']['crystal'] += 25;
	res.mid.Data = {
		'dmode_story_reward_list': [ { 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 25 } ],
		'update_data_list': {
			'dmode_story_list': [ {
				'dmode_story_id': res.mid.Request['dmode_story_id'],
				'is_read': 1
			} ]
		}
	}
	next();
}));
Orchis.post("/dmode/buildup_servitor_passive", global.Mesh(async (req, res, next) => {
	await global.Module.DMode.BuildPassive(res.mid.Request['request_buildup_passive_list'], res);
	next();
}));
Orchis.post("/dmode/expedition_start", global.Mesh(async (req, res, next) => {
	res.mid.Persist['DMode']['Expedition'] = {
		'chara_id_1': res.mid.Request['chara_id_list'][0],
		'chara_id_2': res.mid.Request['chara_id_list'][1],
		'chara_id_3': res.mid.Request['chara_id_list'][2],
		'chara_id_4': res.mid.Request['chara_id_list'][3],
		'start_time': global.ServerTime,
		'target_floor_num': res.mid.Request['target_floor_num'],
		'state': 2
	}
	res.mid.Data = { 'dmode_expedition': res.mid.Persist['DMode']['Expedition'] }
	next();
}));
Orchis.post("/dmode/expedition_finish", global.Mesh(async (req, res, next) => {
	await global.Module.DMode.ExpeditionFinish(res);
	next();
}));
Orchis.post("/dmode/expedition_force_finish", global.Mesh(async (req, res, next) => {
	res.mid.Persist['DMode']['Expedition']['state'] = 1;
	res.mid.Data = {
		'dmode_ingame_result': {
			'floor_num': 0,
			'is_record_floor_num': 0,
			'chara_id_list': [
				res.mid.Persist['DMode']['Expedition']['chara_id_1'],
				res.mid.Persist['DMode']['Expedition']['chara_id_2'],
				res.mid.Persist['DMode']['Expedition']['chara_id_3'],
				res.mid.Persist['DMode']['Expedition']['chara_id_4']
			],
			'reward_talisman_list': [],
			'take_dmode_point_1': 0,
			'take_dmode_point_2': 0,
			'take_player_exp': 0,
			'player_level_up_fstone': 0,
			'quest_time': 0,
			'is_view_quest_time': 0,
			'dmode_score': 0,
			'clear_state': 0
		},
		'dmode_expedition': res.mid.Persist['DMode']['Expedition'],
		'update_data_list': {
			'dmode_info': res.mid.Persist['DMode']['Info']
		}
	}
	next();
}));
Orchis.post("/dmode_dungeon/start", global.Mesh(async (req, res, next) => {
	await global.Module.DMode.DungeonStart(res, LastServerReset);
	next();
}));
Orchis.post("/dmode_dungeon/floor", global.Mesh(async (req, res, next) => {
	await global.Module.DMode.Floor(res);
	next();
}));
Orchis.post("/dmode_dungeon/floor_skip", global.Mesh(async (req, res, next) => {
	res.mid.Persist['DMode']['Dungeon']['state'] = 4;
	res.mid.Data = {
		'dmode_dungeon_state': 4,
		'update_data_list': {
			'dmode_info': res.mid.Persist['DMode']['Info']
		}
	}
	next();
}));
Orchis.post("/dmode_dungeon/restart", global.Mesh(async (req, res, next) => {
	await global.Module.DMode.DungeonRestart(res, LastServerReset);
	next();
}));
Orchis.post("/dmode_dungeon/finish", global.Mesh(async (req, res, next) => {
	await global.Module.DMode.Finish(res);
	next();
}));
Orchis.post(["/dmode_dungeon/user_halt", "/dmode_dungeon/system_halt"], global.Mesh(async (req, res, next) => {
	res.mid.Persist['DMode']['Dungeon']['state'] = 6;
	res.mid.Data = {
		'dmode_dungeon_state': 6,
		'dmode_dungeon_info': res.mid.Persist['DMode']['Dungeon']
	}
	next();
}));

Orchis.post("/present/get_present_list", global.Mesh(async (req, res, next) => {
	if (res.mid.Request['is_limit'] == 1) {
		res.mid.Data = {
			'present_limit_list': res.mid.Persist['Gift']['Limited']
		}
	}
	else {
		res.mid.Data = {
			'present_list': res.mid.Persist['Gift']['Normal']
		}
	}
	next();
}));
Orchis.post("/present/get_history_list", global.Mesh(async (req, res, next) => {
	res.mid.Data = {
		'present_history_list': res.mid.Persist['Gift']['History']
	}
	next();
}));
Orchis.post("/present/receive", global.Mesh(async (req, res, next) => {
	res.mid.Data = {
		'receive_present_id_list': [],
		'not_receive_present_id_list': [],
		'converted_entity_list': [],
		'delete_present_id_list': []
	}
	async function Overcheck(ItemType) {
		if (ItemType == 3) {
			const Count = await global.Module.Fluoresce.Count("OrchisIndex", res.mid.ViewerID, "weapon_list");
			if (Count >= res.mid.Persist['User']['max_weapon_quantity']) { return true; }
		}
		else if (ItemType == 7) {
			const Count = await global.Module.Fluoresce.Count("OrchisIndex", res.mid.ViewerID, "dragon_list");
			if (Count >= res.mid.Persist['User']['max_dragon_quantity']) { return true; }
		}
		else if (ItemType == 12) {
			const Count = await global.Module.Fluoresce.Count("OrchisIndex", res.mid.ViewerID, "amulet_list");
			if (Count >= res.mid.Persist['User']['max_amulet_quantity']) { return true; }
		}
		return false;
	}
	let Target = "Normal"; let ListTarget = "present_list";
	if (res.mid.Request['is_limit'] == 1) { Target = "Limited"; ListTarget = "present_limit_list"; }
	for (const x in res.mid.Request['present_id_list']) {
		const Index = res.mid.Persist['Gift'][Target].findIndex(z => z.present_id == res.mid.Request['present_id_list'][x]);
		if (Index == -1) {
			res.mid.Error = 17002;
			for (const z in res.mid.Persist['Gift']['Normal']) {
				if (res.mid.Persist['Gift']['Normal'][z]['present_id'] == res.mid.Request['present_id_list'][x]) {
					res.mid.Persist['Gift']['Normal'].splice(z, 1);
				}
			}
			for (const z in res.mid.Persist['Gift']['Limited']) {
				if (res.mid.Persist['Gift']['Limited'][z]['present_id'] == res.mid.Request['present_id_list'][x]) {
					res.mid.Persist['Gift']['Limited'].splice(z, 1);
				}
			}
			next();
			return;
		}
		const MaxQuantity = await Overcheck(res.mid.Persist['Gift'][Target][Index]['entity_type']);
		if (MaxQuantity == true) {
			res.mid.Data['not_receive_present_id_list'].push(res.mid.Request['present_id_list'][x]);
		}
		else {
			res.mid.Data['receive_present_id_list'].push(res.mid.Request['present_id_list'][x]);
			res.mid.ItemList.push({
				'type': res.mid.Persist['Gift'][Target][Index]['entity_type'],
				'id': res.mid.Persist['Gift'][Target][Index]['entity_id'],
				'quantity': res.mid.Persist['Gift'][Target][Index]['entity_quantity'],
				'level': res.mid.Persist['Gift'][Target][Index]['entity_level'],
				'limit_break_count': res.mid.Persist['Gift'][Target][Index]['entity_limit_break_count']
			});
			res.mid.Persist['Gift']['History'].unshift({
				'id': res.mid.Persist['Gift'][Target][Index]['present_id'],
				'entity_type': res.mid.Persist['Gift'][Target][Index]['entity_type'],
				'entity_id': res.mid.Persist['Gift'][Target][Index]['entity_id'],
				'entity_quantity': res.mid.Persist['Gift'][Target][Index]['entity_quantity'],
				'entity_level': res.mid.Persist['Gift'][Target][Index]['entity_level'],
				'entity_limit_break_count': res.mid.Persist['Gift'][Target][Index]['entity_limit_break_count'],
				'entity_status_plus_count': res.mid.Persist['Gift'][Target][Index]['entity_status_plus_count'],
				'message_id': res.mid.Persist['Gift'][Target][Index]['message_id'],
				'message_param_value_1': res.mid.Persist['Gift'][Target][Index]['message_param_value_1'],
				'message_param_value_2': res.mid.Persist['Gift'][Target][Index]['message_param_value_2'],
				'message_param_value_3': res.mid.Persist['Gift'][Target][Index]['message_param_value_3'],
				'message_param_value_4': res.mid.Persist['Gift'][Target][Index]['message_param_value_4'],
				'create_time': res.mid.Persist['Gift'][Target][Index]['create_time']
			});
			if (res.mid.Persist['Gift']['History'].length > 100) {
				res.mid.Persist['Gift']['History'].splice(99, 1);
			}
			res.mid.Persist['Gift'][Target].splice(Index, 1);
		}
	}
	res.mid.Data[ListTarget] = res.mid.Persist['Gift'][Target];
	res.mid.Data['present_notice'] = {
		'present_count': res.mid.Persist['Gift']['Normal'].length,
		'present_limit_count': res.mid.Persist['Gift']['Limited'].length
	}
	next();
}));

Orchis.post("/stamp/get_stamp", async (req, res, next) => {
	res.mid.Data = { 'stamp_list': res.mid.Persist['Stickers'] }
	next();
});
Orchis.post("/stamp/set_equip_stamp", async (req, res, next) => {
	await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, res.mid.Request['stamp_list'], "equip_stamp_list");
	res.mid.Data = { 'equip_stamp_list': res.mid.Request['stamp_list'] }
	next();
});

Orchis.post("/suggestion/set", async (req, res, next) => {
	let Type = "";
	if (res.mid.Request['category_id'] == 1) {
		Type = "Request";
	}
	else if (res.mid.Request['category_id'] == 2) {
		Type = "BugReport";
		await SendToZena("/zena/bug_report", JSON.stringify({
			'origin': "Orchis",
			'name': res.mid.Persist['User']['name'],
			'viewerid': res.mid.ViewerID,
			'message': res.mid.Request['message']
		}));
	}
	else if (res.mid.Request['category_id'] == 3) {
		Type = "SaveMod";
		res.mid.SaveMod = true;
		let Temp = "";
		let Temp2 = "";
		let Temp3 = "";
		let UnitStoryList = [];
		let DragonBondList = [];
		const Split = res.mid.Request['message'].split(" ");
		if (Split.length == 1) {
			switch(Split[0]) {
				case "Weapons":
					Temp = [];
					Object.values(global.Master.WeaponBody).forEach((Weapon) => {
						if (Weapon['_IsPlayable'] == 1) {
							Temp.push(global.Module.WeaponBody.Create(Weapon['_Id'], 1, 0));
						}
					});
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, Temp, "weapon_body_list");
					break;
				case "Characters":
					Temp = [];
					UnitStoryList = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "unit_story_list");
					if (UnitStoryList == undefined) { UnitStoryList = []; }
					Object.values(global.Master.CharaData).forEach((Character) => {
						if (Character['_IsPlayable'] == 1) {
							Temp.push(global.Module.Character.Create(Character['_Id'], 1));
							const StoryID = global.Module.Character.GetInfo(Character['_Id'], "StoryID");
							if (StoryID != 0 && UnitStoryList.findIndex(x => x.unit_story_id == StoryID) == -1) {
								UnitStoryList.push({'unit_story_id': StoryID, 'is_read': 0});
							}
						}
					});
					
					Temp2 = [];
					res.mid.Persist['Key']['Dragon'] = 40000;
					Object.values(global.Master.DragonData).forEach((Dragon) => {
						if (Dragon['_IsPlayable'] == 1) {
							res.mid.Persist['Key']['Dragon'] += 1;
							Temp2.push(global.Module.Dragon.Create(res.mid.Persist['Key']['Dragon'], Dragon['_Id'], 1, 0));
							res.mid.Persist['Key']['Dragon'] += 1;
							Temp2.push(global.Module.Dragon.Create(res.mid.Persist['Key']['Dragon'], Dragon['_Id'], 1, 0));
							if (Dragon['_DefaultReliabilityLevel'] != 0) {
								DragonBondList.push({
									"dragon_id": Dragon['_Id'],
									"gettime": global.ServerTime,
									"reliability_level": Dragon['_DefaultReliabilityLevel'],
									"reliability_total_exp": Dragon['_Rarity'] == 5 ? 36300 : 2900,
									"last_contact_time": global.ServerTime
								});
							}
							else {
								DragonBondList.push({
									"dragon_id": Dragon['_Id'],
									"gettime": global.ServerTime,
									"reliability_level": 1,
									"reliability_total_exp": 0,
									"last_contact_time": global.ServerTime
								});
							}
						}
					});
					
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, Temp, "chara_list");
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, UnitStoryList, "unit_story_list");
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, Temp2, "dragon_list");
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, DragonBondList, "dragon_reliability_list");
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, global.Module.IndexTools.ErasePartyList(), "party_list");
					break;
				case "Wyrmprints":
					Temp = Object.keys(global.Master.AbilityCrest);
					Temp2 = [];
					for (const z in Temp) {
						if (global.Master.AbilityCrest[Temp[z]]['_IsPlayable'] == 1) {
							Temp2.push(global.Module.Crest.Create(parseInt(Temp[z]), 0, 0, 1));
						}
					}
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, Temp2, "ability_crest_list");
					break;
				
				case "MaxWeapons":
					Temp = [];
					Temp2 = [];
					Temp3 = [];
					Object.values(global.Master.WeaponBody).forEach((Weapon) => {
						if (Weapon['_IsPlayable'] == 1) {
							Temp.push(global.Module.WeaponBody.CreateMax(Weapon['_Id']));
						}
					});
					Object.values(global.Master.WeaponPassiveAbility).forEach((Passive) => {
						Temp2.push({'weapon_passive_ability_id': Passive['_Id']});
					});
					Object.values(global.Master.WeaponSkin).forEach((Skin) => {
						if (Skin['_IsPlayable'] == 1) {
							Temp3.push({'weapon_skin_id': Skin['_Id'], 'is_new': 0, 'gettime': global.ServerTime});
						}
					});
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, Temp, "weapon_body_list");
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, Temp2, "weapon_passive_ability_list");
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, Temp3, "weapon_skin_list");
					break;
				case "MaxCharacters":
					Temp = [];
					Temp2 = [];
					Temp3 = [];
					DragonBondList = [];
					Object.values(global.Master.CharaData).forEach((Character) => {
						if (Character['_IsPlayable'] == 1) {
							global.Module.Character.RaisePlatinum(res, Character['_Id']);
							const StoryID = global.Module.Character.GetInfo(Character['_Id'], "StoryID");
							if (StoryID != 0 && Temp2.findIndex(x => x.unit_story_id == StoryID) == -1) {
								Temp2.push({'unit_story_id': StoryID, 'is_read': 0});
							}
							Temp.push(res.mid.Data['update_data_list']['chara_list'][0]);
							for (const x in res.mid.Data['update_data_list']['unit_story_list']) {
								Temp2.push(res.mid.Data['update_data_list']['unit_story_list'][x]);
							}
							res.mid.ItemList.push({'type': 10, 'id': Character['_Id']});
						}
					});
					for (const z in Temp) {
						Temp[z]['hp_plus_count'] = 100;
						Temp[z]['attack_plus_count'] = 100;
						if (global.Module.Character.GetInfo(Temp[z]['chara_id'], "_EditSkillId") != 0) {
							Temp[z]['is_unlock_edit_skill'] = 1;
						}
					}
					
					res.mid.Persist['Key']['Dragon'] = 40000;
					Object.values(global.Master.DragonData).forEach((Dragon) => {
						if (Dragon['_IsPlayable'] == 1) {
							res.mid.Persist['Key']['Dragon'] += 1;
							Temp3.push(global.Module.Dragon.CreateMax(res.mid.Persist['Key']['Dragon'], Dragon['_Id']));
							res.mid.Persist['Key']['Dragon'] += 1;
							Temp3.push(global.Module.Dragon.CreateMax(res.mid.Persist['Key']['Dragon'], Dragon['_Id']));
							DragonBondList.push({
								"dragon_id": Dragon['_Id'],
								"gettime": global.ServerTime,
								"reliability_level": 30,
								"reliability_total_exp": Dragon['_Rarity'] == 5 ? 36300 : 2900,
								"last_contact_time": global.ServerTime
							});
							if (Dragon['_DefaultReliabilityLevel'] == 0) {
								const StoryID = global.Module.Dragon.GetInfo(Dragon['_Id'], "StoryID");
								Temp2.push({ 'unit_story_id': StoryID, 'is_read': 0 });
								Temp2.push({ 'unit_story_id': StoryID + 1, 'is_read': 0 });
							}
							res.mid.ItemList.push({'type': 10, 'id': Dragon['_Id']});
						}
					});
					
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, Temp, "chara_list");
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, Temp2, "unit_story_list");
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, Temp3, "dragon_list");
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, DragonBondList, "dragon_reliability_list");
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, global.Module.IndexTools.ErasePartyList(), "party_list");
					break;
				case "MaxWyrmprints":
					Temp = [];
					Object.values(global.Master.AbilityCrest).forEach((Print) => {
						if (Print['_IsPlayable'] == 1) { Temp.push(global.Module.Crest.CreateMax(Print['_Id'])); }
					});
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, Temp, "ability_crest_list");
					break;
				case "MaxFacilities":
					Temp = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "build_list");
					Temp2 = Object.values(global.Master.FortPlantDetail);
					for (const x in Temp) {
						if (Temp[x]['level'] > 1) { Temp[x]['level'] = 1; }
						Temp[x]['build_status'] = 0;
						Temp[x]['build_start_date'] = 0;
						Temp[x]['build_end_date'] = 0;
						Temp2.forEach((Entry) => {
							if (Entry['_AssetGroup'] == Temp[x]['plant_id'] && Entry['_Level'] > Temp[x]['level']) {
								Temp[x]['level'] = Entry['_Level']; 
								Temp[x]['fort_plant_detail_id'] = Entry['_Id'];
							}
						});
					}
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, Temp, "build_list");
					break;
				case "Guild": 
					await AssignGuild(res, 10001);
					break;
				case "ResetAllForRealz":
					const NewPersist = DefaultPersistRecord(res.mid.Persist['ViewerID'], res.mid.Persist['SubjectID']);
					res.mid.Persist = NewPersist;
				case "ResetAll":
					res.mid.Persist['Event'] = {};
					res.mid.Persist['User']['tutorial_status'] = 401;
					res.mid.Persist['User']['tutorial_flag_list'] = [];
					res.mid.Persist['User']['main_party_no'] = 1;
					res.mid.Index = global.Module.IndexTools.DefaultSaveData();
					global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, res.mid.Index);
					break;
				case "ResetParty":
					res.mid.Persist['User']['main_party_no'] = 1;
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, global.Module.IndexTools.ErasePartyList(), "party_list");
					break;				
				case "Dawn":
					if (res.mid.Persist['Dawn'] == true) { res.mid.Persist['Dawn'] = false; }
					else { res.mid.Persist['Dawn'] = true; }
					break;
				case "Stamina":
					if (res.mid.Persist['Stamina'] == true) { res.mid.Persist['Stamina'] = false; }
					else { res.mid.Persist['Stamina'] = true; }
					break;
				case "ClearStory":
					Temp = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "quest_list");
					Temp2 = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "quest_story_list");
					Object.values(global.Master.QuestData).forEach((Quest) => {
						if (Quest['_Id'] > 0 && Quest['_Id'] < 200000000) {
							const Exists = Temp.findIndex(z => z.quest_id == Quest['_Id']);
							if (Exists == -1) {
								Temp.push({
									'quest_id': Quest['_Id'],
									'state': 3,
									'is_mission_clear_1': 1,
									'is_mission_clear_2': 1,
									'is_mission_clear_3': 1,
									'play_count': 1,
									'daily_play_count': 0,
									'weekly_play_count': 0,
									'last_daily_reset_time': 0,	
									'last_weekly_reset_time': 0,
									'is_appear': 1,
									'best_clear_time': 0
								});
								res.mid.ItemList.push({'type': 23, 'id': 0, 'quantity': 25});
								const FirstClearSet = global.Module.Quest.GetFirstClearSet(Quest['_Id']);
								const MissionClearSet = global.Module.Quest.GetMissionClearSet(Quest['_Id']);
								for (const x in FirstClearSet) {
									res.mid.ItemList.push(FirstClearSet[x]);
								}
								for (const x in MissionClearSet['Clear']) {
									res.mid.ItemList.push(MissionClearSet['Clear'][x]);
								}
							}
						}
					});
					Object.values(global.Master.QuestStory).forEach((Story) => {
						if (Story['_Id'] > 0 && Story['_Id'] < 2000000) {
							const Exists = Temp2.findIndex(z => z.quest_story_id == Story['_Id']);
							if (Exists == -1) {
								Temp2.push({'quest_story_id': Story['_Id'], 'state': 1});
								res.mid.ItemList.push({'type': 23, 'id': 0, 'quantity': 25});
								global.Module.Quest.ClearStory(res, Story['_Id']);
							}
						}
					});
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, Temp, "quest_list");
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, Temp2, "quest_story_list");
					break;

				case "Debug_ClearAll":
					Temp = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "quest_list");
					Temp2 = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "quest_story_list");
					Object.values(global.Master.QuestData).forEach((Quest) => {
						if (Quest['_Id'] > 0) {
							const Exists = Temp.findIndex(z => z.quest_id == Quest['_Id']);
							if (Exists == -1) {
								Temp.push({
									'quest_id': Quest['_Id'],
									'state': 3,
									'is_mission_clear_1': 1,
									'is_mission_clear_2': 1,
									'is_mission_clear_3': 1,
									'play_count': 1,
									'daily_play_count': 0,
									'weekly_play_count': 0,
									'last_daily_reset_time': 0,	
									'last_weekly_reset_time': 0,
									'is_appear': 1,
									'best_clear_time': 0
								});
								res.mid.ItemList.push({'type': 23, 'id': 0, 'quantity': 25});
								const FirstClearSet = global.Module.Quest.GetFirstClearSet(Quest['_Id']);
								const MissionClearSet = global.Module.Quest.GetMissionClearSet(Quest['_Id']);
								for (const x in FirstClearSet) {
									res.mid.ItemList.push(FirstClearSet[x]);
								}
								for (const x in MissionClearSet['Clear']) {
									res.mid.ItemList.push(MissionClearSet['Clear'][x]);
								}
							}
						}
					});
					Object.values(global.Master.QuestStory).forEach((Story) => {
						if (Story['_Id'] > 0) {
							const Exists = Temp2.findIndex(z => z.quest_story_id == Story['_Id']);
							if (Exists == -1) {
								Temp2.push({'quest_story_id': Story['_Id'], 'state': 1});
								res.mid.ItemList.push({'type': 23, 'id': 0, 'quantity': 25});
								global.Module.Quest.ClearStory(res, Story['_Id']);
							}
						}
					});
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, Temp, "quest_list");
					await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, Temp2, "quest_story_list");
					break;
			}
		}
		else {
			let Value = 0;
			let Name = "";
			let ID = 0;
			switch(Split[0]) {
				case "Character":
					Value = 1; while (Value < Split.length) {
						Name += Split[Value] + " ";
						Value++;
					}
					Name = Name.slice(0, Name.length - 1);
					ID = global.Module.Character.GetIDByName(Name);
					
					if (ID != 0) {
						res.mid.ItemList.push({
							'type': 1,
							'id': ID,
							'quantity': 1
						});
					}
				break;
				case "Dragon":
					Value = 1; while (Value < Split.length) {
						Name += Split[Value] + " ";
						Value++;
					}
					Name = Name.slice(0, Name.length - 1);
					ID = global.Module.Dragon.GetIDByName(Name);
					
					if (ID != 0) {
						res.mid.ItemList.push({
							'type': 7,
							'id': ID,
							'quantity': 1
						});
					}
				break;
				case "Print":
					Value = 1; while (Value < Split.length) {
						Name += Split[Value] + " ";
						Value++;
					}
					Name = Name.slice(0, Name.length - 1);
					ID = global.Module.Crest.GetIDByName(Name);
					
					if (ID != 0) {
						res.mid.ItemList.push({
							'type': 39,
							'id': ID,
							'quantity': 1
						});
					}
				break;
				case "CashMoney":
					Value = parseInt(Split[1]);
					if (!isNaN(Value)) {
						if (Value > 10000) { Value = 10000; }
						res.mid.Persist['User']['crystal'] += Value;
					}
				break;
				case "Platinum":
					Value = parseInt(Split[1]);
					if (!isNaN(Value)) {
						res.mid.ItemList.push({ 'type': 8, 'id': 125001001, 'quantity': Value });
					}
				break;
			}
		}
	}
	else {
		Type = "Unknown";
	}
	
	const FileName = String(res.mid.ViewerID) + "_" + Type + "_" + String(Date.now());
	fs.writeFileSync('./Library/Feedback/' + FileName, String(res.mid.Request['message']) + "\n");
	
	res.mid.Data = { 'result_code': 1 }
	next();
});
Orchis.post("/user/get_n_account_info", async (req, res, next) => {
	let UserName = "";
	if (res.mid.Persist['BaaSName'] != undefined && res.mid.Persist['BaaSName']['username'] != undefined) {
		UserName = res.mid.Persist['BaaSName']['username'];
	}
	res.mid.Data = {
		"n_account_info": {
			'email': "",
			'nickname': UserName + "\n" + res.mid.Persist['PIN']
		}
	}
	next();
});
Orchis.use(async function (req, res, next) { // Judgement
	if (res.mid.Persist != undefined) {
		await global.Module.Endeavour.Judge(res, req.url);
	}
	next();
});

const UpdateExecution = {
	'chara_list': { "FullWrite": false, "ValueName": "chara_id" },
	'dragon_list': { "FullWrite": false, "ValueName": "dragon_key_id" },
	'dragon_gift_list': { "FullWrite": false, "ValueName": "dragon_gift_id" },
	'dragon_reliability_list': { "FullWrite": false, "ValueName": "dragon_id" },
	'weapon_list': { "FullWrite": false, "ValueName": "weapon_key_id" },
	'album_weapon_list': { "FullWrite": false, "ValueName": "weapon_id" },
	'skin_weapon_list': { "FullWrite": false, "ValueName": "skin_weapon_id" },
	'weapon_body_list': { "FullWrite": false, "ValueName": "weapon_body_id" },
	'weapon_skin_list': { "FullWrite": false, "ValueName": "weapon_skin_id" },
	'amulet_list': { "FullWrite": false, "ValueName": "amulet_key_id" },
	'talisman_list': { "FullWrite": false, "ValueName": "talisman_key_id" },
	'ability_crest_list': { "FullWrite": false, "ValueName": "ability_crest_id" },
	'material_list': { "FullWrite": false, "ValueName": "material_id" },
	'astral_item_list': { "FullWrite": false, "ValueName": "astral_item_id" },
	'gather_item_list': { "FullWrite": false, "ValueName": "gather_item_id" },
	'party_list': { "FullWrite": false, "ValueName": "party_no" },
	'build_list': { "FullWrite": false, "ValueName": "build_id" },
	'quest_list': { "FullWrite": false, "ValueName": "quest_id" },
	'quest_wall_list': { "FullWrite": false, "ValueName": "wall_id" },
	'unit_story_list': { "FullWrite": false, "ValueName": "unit_story_id" },
	'quest_story_list': { "FullWrite": false, "ValueName": "quest_story_id" },
	'castle_story_list': { "FullWrite": false, "ValueName": "castle_story_id" },
	'exchange_ticket_list': { "FullWrite": false, "ValueName": "exchange_ticket_id" },
	'summon_ticket_list': { "FullWrite": false, "ValueName": "summon_ticket_id" },
	'lottery_ticket_list': { "FullWrite": false, "ValueName": "lottery_ticket_id" },
	'user_summon_list': { "FullWrite": false, "ValueName": "summon_id" },
	'dmode_story_list': { "FullWrite": false, "ValueName": "dmode_story_id" },
	
	'weapon_passive_ability_list': { "FullWrite": true },
	'fort_plant_list': { "FullWrite": true },
	
	'user_data': { "Ignore": true },
	'item_list': { "Ignore": true },
	'emblem_list': { "Ignore": true },
	'stamp_list': { "Ignore": true },
	'diamond_data': { "Ignore": true },
	'summon_point_list': { "Ignore": true },
	'dmode_info': { "Ignore": true },
	'raid_event_user_list': { "Ignore": true },
	'event_passive_list': { "Ignore": true },
	'maze_event_user_list': { "Ignore": true },
	'build_event_user_list': { "Ignore": true },
	'collect_event_user_list': { "Ignore": true },
	'clb_01_event_user_list': { "Ignore": true },
	'ex_rush_event_user_list': { "Ignore": true },
	'ex_hunter_event_user_list': { "Ignore": true },
	'simple_event_user_list': { "Ignore": true },
	'combat_event_user_list': { "Ignore": true },
	'earn_event_user_list': { "Ignore": true },
	'functional_maintenance_list': { "Ignore": true },
	'present_notice': { "Ignore": true },
	'guild_notice': { "Ignore": true },
	'shop_notice': { "Ignore": true },
	'mission_notice': { "Ignore": true },
	'multi_server': { "Ignore": true },
	'ability_crest_set_list': { "Ignore": true },
	'chara_unit_set_list': { "Ignore": true }
}
Orchis.use(async function (req, res, next) { // Store
	if (res.mid.Error != 0) {
		const Serialized = msgpack.pack({
			'data_headers': { 'result_code': res.mid.Error },
			'data': { 'result_code': res.mid.Error }
		});
		res.set(SetHeaders(Serialized.length)); res.end(Serialized);
		return;
	}
	if (Object.keys(res.mid.Data).length == 0) {
		const Serialized = msgpack.pack({
			'data_headers': { 'result_code': 151 },
			'data': { 'result_code': 151 }
		});
		res.set(SetHeaders(Serialized.length)); res.end(Serialized);
		return;
	}
	
	if (res.mid.ItemList.length > 0) {
		await global.Module.Director.ItemParser(res.mid.ItemList, res, "");
	}
	
	if (req.url.includes("dungeon_record") || req.url.includes("dungeon_skip")) {
		if (res.mid.Persist['Dungeon']['Repeat']['Active'] == false) {
			res.mid.Persist['Dungeon'] = {};
		}
		res.mid.Data['ingame_result_data']['converted_entity_list'] = res.mid.Data['entity_result']['converted_entity_list'];
	}
	
	if (res.mid.Data['update_data_list'] != undefined) {
		const UpdateList = res.mid.Data['update_data_list'];
		const UpdateKeys = Object.keys(UpdateList);
		for (const u in UpdateKeys) {
			let ExecutionData = { "FullWrite": true }
			if (UpdateExecution[UpdateKeys[u]] != undefined) {
				ExecutionData = UpdateExecution[UpdateKeys[u]];
			}
			if (UpdateKeys[u] == "fort_bonus_list") {
				res.mid.Data['update_data_list']['fort_bonus_list'] = await global.Module.Director.CalculateBonuses(res);
			}
			else if (ExecutionData['Ignore'] == true) { continue; }
			else if (ExecutionData['FullWrite'] == true) {
				await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, res.mid.Data['update_data_list'][UpdateKeys[u]], UpdateKeys[u]);
			}
			else {
				for (const d in UpdateList[UpdateKeys[u]]) {
					let Search = {};
					Search[ExecutionData['ValueName']] = UpdateList[UpdateKeys[u]][d][ExecutionData['ValueName']];
					const Success = await global.Module.Fluoresce.Write(
						"OrchisIndex",
						res.mid.ViewerID,
						UpdateList[UpdateKeys[u]][d],
						UpdateKeys[u],
						Search
					);
					if (Success == 3) {
						console.log(req.url);
						fs.writeFileSync('./Library/Log/Error__' + req.url.replaceAll("/", "_") + " " + req.get('sid'), JSON.stringify({
							'Request': res.mid.Request,
							'Response': res.mid.Data
						}));
					}
				}
			}
		}
	}
	
	if (res.mid.Data['delete_data_list'] != undefined) {
		const DeleteList = res.mid.Data['delete_data_list'];
		const DeleteKeys = Object.keys(DeleteList);
		for (const d in DeleteKeys) {
			const Target = DeleteKeys[d].slice(7, DeleteKeys[d].length);
			const ExecutionData = UpdateExecution[Target];
			for (const x in DeleteList[DeleteKeys[d]]) {
				let Search = {};
				Search[ExecutionData['ValueName']] = DeleteList[DeleteKeys[d]][x][ExecutionData['ValueName']];
				global.Module.Fluoresce.Delete(
					"OrchisIndex",
					res.mid.ViewerID,
					Target,
					Search
				);
			}
		}
	}
	
	if (JSON.stringify(res.mid.Persist) != res.mid.Prefunction) {
		await global.Module.Fluoresce.Write("OrchisPersist", req.get("sid"), res.mid.Persist);
	}
	
	next();
});

Orchis.use(async function (req, res, next) { // Finalize
	if (res.mid.SaveMod == true) {
		res.send(msgpack.pack({
			'data_headers': { 'result_code': 101 },
			'data': { 'result_code': 101 }
		}));
		return;
	}

	if (res.mid.Data['update_data_list'] != undefined) {
		if (res.mid.Persist['Gift']['Normal'].length > 0 || res.mid.Persist['Gift']['Limited'].length > 0) {
			res.mid.Data['update_data_list']['present_notice'] = {
				'present_count': res.mid.Persist['Gift']['Normal'].length,
				'present_limit_count': res.mid.Persist['Gift']['Limited'].length
			}
		}
	}
	
	/*fs.writeFileSync('./Library/Log/' + res.mid.ViewerID + "_" + req.url.replaceAll("/", "_") + "_" + Date.now(), JSON.stringify({
		'Request': res.mid.Request,
		'Respond': res.mid.Data
	}));*/
	
	if (res.mid.UseJSON == true) {
		const Serialized = JSON.stringify({
			'data_headers': { 'result_code': 1 },
			'data': res.mid.Data
		});
		res.set(SetHeaders(Serialized.length, "JSON"))
		res.send(Serialized);
	}
	else {
		const Serialized = msgpack.pack({
			'data_headers': { 'result_code': 1 },
			'data': res.mid.Data
		});
		res.set(SetHeaders(Serialized.length));
		res.send(Serialized);
	}
});
