const express = require('express');
const errorhandler = require('express-async-handler');
const bodyParser = require('body-parser');
const compression = require('compression');
const crypto = require('crypto');
const msgpack = require('msgpackr');
const fs = require('fs-extra');
const http = require('http');
const https = require('https');
const zlib = require('zlib');
const jwt_decode = require('jwt-decode');
const Fluoresce = require('fluoresce');
process.on('uncaughtException', function (error) {
   console.log(error.stack);
   LogFile.write(error.stack + "\n");
});
var Orchis = express();
let ServerConfig = {}
if (fs.existsSync('./config.json')) {
	ServerConfig = JSON.parse(fs.readFileSync('./config.json'));
}
else {
	ServerConfig = {
		'URL': "127.0.0.1",
		'Port': 9000,
		'ZenaEnabled': false,
		'ZenaHost': "127.0.0.1",
		'ZenaPort': 9362,
		'ZenaToken': "",
		'PhotonURL': "127.0.0.1:9001",
		'StateURL': "",
		'AssetPass': "",
		'BasicIndex': "./static/index.html",
		'AdvancedIndex': "./static/index.html",
		'PageURLs': [
			{
				'function_name': "ability_crest_advice",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "battle_royal_how_to",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "comic",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "plotsynopsis",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "time_attack_ranking",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "time_attack_reward",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "faq",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "help_comic",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "help",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "information",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "inquiry_attention",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "dragon_battle_info",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "quest_info",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "copyright",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "health",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "payment_services_act",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "privacy_policy",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "specified_commercial_transactions_law",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "user_policy",
				'url': "127.0.0.1:9000/index.html"
			},
			{
				'function_name': "summon_info",
				'url': "127.0.0.1:9000/index.html"
			}
		],
		'SSL': false,
		'Certs': {
			'key': "/path/to/key.pem",
			'cert': "/path/to/cert.pem",
			'ca': "/path/to/chain.pem"
		}
	}
}

const StaticData = require('./Library/Function/StaticData.js');
const IndexTools = require('./Library/Function/IndexTools.js');
const DataManager = require('./Library/Function/DataManager.js');
const Filter = require('./Library/Function/Filter.js');
const CharacterMap = require('./Library/IDMaps/CharacterMap.js');
const WyrmprintMap = require('./Library/IDMaps/WyrmprintMap.js');
const DragonMap = require('./Library/IDMaps/DragonMap.js');
const WeaponMap = require('./Library/IDMaps/WeaponMap.js');
const QuestMap = require('./Library/IDMaps/QuestMap.js');
const DModeMap = require('./Library/IDMaps/DModeMap.js');
const EventMap = require('./Library/IDMaps/EventMap.js');
const LevelMap = require('./Library/IDMaps/LevelMap.js');
const ShopMap = require('./Library/IDMaps/ShopMap.js');
const FortMap = require('./Library/IDMaps/FortMap.js');

let AssetList = JSON.parse(fs.readFileSync('./Library/Event/AssetList.json'));
let IndexPage = fs.readFileSync(ServerConfig['AdvancedIndex']);
let BasicIndexPage = fs.readFileSync(ServerConfig['BasicIndex']);
let MaintXML = fs.readFileSync('./static/maintenance.xml');
let SupportData = JSON.parse(fs.readFileSync('./Library/Event/Support.json'));
let ActiveBonusList = JSON.parse(fs.readFileSync('./Library/Event/EventBonus.json'));
let BannerList = JSON.parse(fs.readFileSync('./Library/Event/BannerList.json'));
let SummonOddsList = DataManager.GenerateSummonOdds(BannerList);
let MainQuestRotationSet = JSON.parse(fs.readFileSync('./Library/Event/QuestMainRotation.json'));
let EventList = JSON.parse(fs.readFileSync('./Library/Event/EventList.json'));
const MaintenanceJSON = { 'data_headers': { 'result_code': 101 }, 'data': { 'result_code': 101 } }
const OutdatedAssetJSON = { 'data_headers': { 'result_code': 111 }, 'data': { 'result_code': 111 } }
let TopSummonList = [];
const DragonItemList = [ 20006, 20001, 20002, 20003, 20004, 20005, 20006 ];
let DailyDragonItem = DragonItemList[new Date().getDay()];
const EmptyRooms = JSON.stringify({ 'room_list': [], 'friend_room_list': [], 'event_room_list': [], 'event_friend_room_list': [] });

const Passphrase = crypto.createHash('md5').update(String(Math.floor(Date.now() * Math.random() * 1000))).digest('hex');
fs.writeFileSync('./passphrase.txt', Passphrase + "\n");
const iOS_Version = "/2.19.0_20220719103923"; const Android_Version = "/2.19.0_20220714193707";
const GlobalExpireContext = 'Tue, 1 Jan 2030 00:00:00 GMT';
const GlobalDeployHashContext = "Ceryph"; const CurrentServerURL = ServerConfig['ServerURL'];
const DBDir = "./Library/Fluoresce/database/";
let GatherMedalReset = Math.floor(Date.now() / 1000) - (new Date().getDay() * 86400);
let IsMaintenance = 0;
let IsSaving = 0;
const IgnoredEndpoints = [
	"/dungeon_record/record", "/tool/get_service_status", "/load/index",
	"/eula/get_version_list", "/eula/get_version", "/deploy/get_deploy_version",
	"/version/get_resource_version", "/webview_version/url_list"
];
const UpdateEndpoints = [
	"/login/index",
	"/tutorial/update_step",
	"/tutorial/update_flag_list",
	"/redoable_summon/fix_exec",
	"/summon/summon_point_trade",
	"/summon/request",
	"/ability_crest/get_ability_crest_set_list",
	"/ability_crest/set_ability_crest_set",
	"/ability_crest/update_ability_crest_set_name",
	
	"/dungeon_record/record"
];
const NoTrackList = [
	"100", "201", "202", "203", "204", "208", "210", "211", "214",
	"218", "220", "222", "223", "229", "300", "301", "310", 
]
const ExceptionList = [
	"210010104", "210011104", "210020104", "210021104",
	"210030104", "210031104", "210040104", "210041104",
	"210050104", "210051104", "100260108", "100260208",
	"100260308"
]

async function InitDatabase() {
	const IDStatus = await Fluoresce.Exists("MasterIDRecord");
	const AccStatus = await Fluoresce.Exists("MasterAccountRecord");
	const SessStatus = await Fluoresce.Exists("MasterSessionRecord");
	const IndexStatus = await Fluoresce.Exists("MasterIndexRecord");
	const AnalyticsStatus = await Fluoresce.Exists("AnalyticsRecord");
	const DPSStatus = await Fluoresce.Exists("MasterDPSRecord");
	const TeamStatus = await Fluoresce.Exists("MasterTeamRecord");
	if (IDStatus == false) {
		await Fluoresce.Create("MasterIDRecord");
		await Fluoresce.Write("MasterIDRecord", "LastAssignedID", 9999999);
		await Fluoresce.Write("MasterIDRecord", "LastGuildID", 10001);
		await Fluoresce.Save("MasterIDRecord");
	}
	if (AccStatus == false) { await Fluoresce.Create("MasterAccountRecord"); }
	if (SessStatus == false) { await Fluoresce.Create("MasterSessionRecord"); }
	if (IndexStatus == false) { await Fluoresce.Create("MasterIndexRecord"); }
	if (AnalyticsStatus == false) { await Fluoresce.Create("AnalyticsRecord"); }
	if (DPSStatus == false) { await Fluoresce.Create("MasterDPSRecord"); }
	if (TeamStatus == false) { await Fluoresce.Create("MasterTeamRecord"); }
}
InitDatabase();
let MasterGuildDatabase = {};
let MasterGiftDatabase = {};
let MasterUpdateRecord = {};
let MasterDeleteRecord = {};
if (fs.existsSync(DBDir + 'masterguild.msg.gz')) {
	MasterGuildDatabase = msgpack.unpack(zlib.gunzipSync(fs.readFileSync(DBDir + 'masterguild.msg.gz')));
}
if (fs.existsSync(DBDir + 'mastergift.msg.gz')) {
	MasterGiftDatabase = msgpack.unpack(zlib.gunzipSync(fs.readFileSync(DBDir + 'mastergift.msg.gz')));
}
if (fs.existsSync(DBDir + 'masterupdate.msg.gz')) {
	MasterUpdateRecord = msgpack.unpack(zlib.gunzipSync(fs.readFileSync(DBDir + 'masterupdate.msg.gz')));
}
if (fs.existsSync(DBDir + 'masterdelete.msg.gz')) {
	MasterDeleteRecord = msgpack.unpack(zlib.gunzipSync(fs.readFileSync(DBDir + 'masterdelete.msg.gz')));
}

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
let LastServerReset = GetDayBegin();
let NextServerReset = 86400 - (Math.floor(Date.now() / 1000) - LastServerReset);
let DayEnd = GetDayEnd();
let DayNumber = GetDayNo();
function GetCurrentDate() {
	const date = new Date();
	return date.toUTCString();
}
function ResHeaders(DataLength) {
	const Headers = { 
		'content-type': 'application/x-msgpack',
		'access-control-allow-origin': '*', 
		'expires': GlobalExpireContext, 
		'cache-control': 'max-age=0, no-cache, no-store', 
		'pragma': 'no-cache', 'date': GetCurrentDate(), 
		'content-length': DataLength
	}
	return Headers;
}
function URLContains(URL, List) {
	for (let x in List) { if (URL.includes(List[x])) { return true; } }
	return false;
}
function PadLeft(Source, Count, Value) {
	while (String(Source).length < Count) {
		Source = String(Value) + String(Source);
	}
	return String(Source);
}

async function SendToZena(URLPath, Data) {
	if (ServerConfig['ZenaEnabled'] != true) { return; }
	const OutRequest = http.request({
		host: ServerConfig['ZenaHost'],
		port: ServerConfig['ZenaPort'],
		method: 'POST',
		path: URLPath,
		headers: {
			'Content-Type': "application/json",
			'Authorization': ServerConfig['ZenaToken']
		}
	});
	OutRequest.write(Data);
	OutRequest.end();
	return;
}
async function ReadSessionRecord(SessionID) {
	const SessionData = await Fluoresce.Read("MasterSessionRecord", SessionID);
	return SessionData;
}
async function WriteSessionRecord(SessionID, Data) {
	await Fluoresce.Write("MasterSessionRecord", SessionID, Data);
	return;
}
async function ReadIndexRecord(ViewerID) {
	const IndexData = await Fluoresce.Read("MasterIndexRecord", ViewerID);
	return IndexData;
}
async function WriteIndexRecord(ViewerID, Data) {
	await Fluoresce.Write("MasterIndexRecord", ViewerID, Data);
	return;
}
async function ReadDPSRecord(ViewerID) {
	const DPSData = await Fluoresce.Read("MasterDPSRecord", ViewerID);
	return DPSData;
}
async function WriteDPSRecord(ViewerID, Data) {
	await Fluoresce.Append("MasterDPSRecord", ViewerID, Data);
	return;
}
async function ReadGuildRecord(GuildID) {
	const SessionData = await Fluoresce.Read("MasterGuildRecord", GuildID);
	return SessionData;
}
async function WriteGuildRecord(GuildID, Data) {
	await Fluoresce.Write("MasterGuildRecord", GuildID, Data);
	return;
}

let LogFile = fs.createWriteStream('./Library/Log/URL_' + LastServerReset + '.txt');
let TimeFile = {};
let TimeFilePath = './Library/Log/TimeTrack_' + LastServerReset + '.json';
async function RecordManager (req, res, next) {
	LogFile.write(req.url + "\n");
	if (TimeFile[req.url] == undefined) { TimeFile[req.url] = []; }
	res.locals.TimeTrack = Date.now();
	
	res.locals.ResponseBody = {
		'data_headers': { 'result_code': 1 },
		'data': {}
	}
	res.locals.DailyMissions = [];
	
	if (req.url.includes("/../")) { res.end(); return; }
	else if (req.url.endsWith("/tool/auth")) { next(); return; }
	else if (req.url.endsWith("/maintenance/get_text")) { next(); return; }
	else if (req.url.includes("/heroparam/")) { next(); return; }
	else if (req.url.includes("/dungeon_record/record_multi")) { next(); return; }
	else if (req.url.includes("/utility/")) {
		if (req.get('passphrase') != Passphrase) { res.end("Denied.\n"); return; }
		next();
		return;
	}
	else if (IsMaintenance == 1 && !req.url.endsWith("/dungeon_record/record")) { res.end(msgpack.pack(MaintenanceJSON)); return; }
	
	if (req.get('sid') != undefined) {
		res.locals.UserSessionRecord = await ReadSessionRecord(req.get('sid'));
		if (req.get('res-ver') != undefined && !URLContains(req.url, IgnoredEndpoints) && res.locals.UserSessionRecord['VanillaAssets'] != true) {
			if ((req.get('platform') == 1 && req.get('res-ver') != AssetList['iOS_Manifest']) ||
			(req.get('platform') == 2 && req.get('res-ver') != AssetList['Android_Manifest'])) {
				res.end(msgpack.pack(OutdatedAssetJSON)); return;
			}
		}
		if (res.locals.UserSessionRecord['AccountState'] != 0) { res.end(msgpack.pack(res.locals.UserSessionRecord['AccountMessage'])); return; }
		res.locals.UserIndexRecord = await ReadIndexRecord(String(res.locals.UserSessionRecord['ViewerID'])); 
	}
	/*if (URLContains(req.url, UpdateEndpoints)) {
		res.locals.UpdateList = [];
		res.locals.DeleteList = [];
		res.locals.UpdateEndpoint = true;
		if (MasterUpdateRecord[String(res.locals.UserSessionRecord['ViewerID'])] != undefined && MasterUpdateRecord[String(res.locals.UserSessionRecord['ViewerID'])].length > 0) {
			for (let u in MasterUpdateRecord[String(res.locals.UserSessionRecord['ViewerID'])]) {
				UpdateRecord = MasterUpdateRecord[String(res.locals.UserSessionRecord['ViewerID'])][u];
				if (UpdateRecord['type'] == "user_data" || UpdateRecord['type'] == "diamond_data") {
					res.locals.UpdateList[UpdateRecord['type']] = UpdateRecord['data'];
				}
				else {
					if (res.locals.UpdateList[UpdateRecord['type']] == undefined) { res.locals.UpdateList[UpdateRecord['type']] = []; }
					res.locals.UpdateList[UpdateRecord['type']].push(UpdateRecord['data']);
				}
				delete MasterUpdateRecord[String(res.locals.UserSessionRecord['ViewerID'])][u];
			}
		}
		if (MasterDeleteRecord[String(res.locals.UserSessionRecord['ViewerID'])] != undefined && MasterDeleteRecord[String(res.locals.UserSessionRecord['ViewerID'])].length > 0) {
			for (let d in MasterDeleteRecord[String(res.locals.UserSessionRecord['ViewerID'])]) {
				DeleteRecord = MasterDeleteRecord[String(res.locals.UserSessionRecord['ViewerID'])][d];
				if (res.locals.UpdateList[DeleteRecord['type']] == undefined) { res.locals.UpdateList[DeleteRecord['type']] = []; }
				res.locals.UpdateList[DeleteRecord['type']].push(DeleteRecord['data']);
				delete MasterDeleteRecord[String(res.locals.UserSessionRecord['ViewerID'])][d];
			}
		}
	}*/
	next();
}

Orchis.use(bodyParser.json({ type: ['application/json'], limit: "6mb" }));
Orchis.use(bodyParser.raw({ type: ['application/x-msgpack', 'application/msgpack', 'application/octet-stream'], limit: "4mb" }));
Orchis.use(compression());
Orchis.use(express.static('static'));
Orchis.use(RecordManager);
Orchis.disable('x-powered-by');
let server = {};
if (ServerConfig['SSL'] == true) {
	server = https.createServer({
			key: fs.readFileSync(ServerConfig['Certs']['key']),
			cert: fs.readFileSync(ServerConfig['Certs']['cert']),
			ca: fs.readFileSync(ServerConfig['Certs']['ca'])
		}, Orchis).listen(ServerConfig['Port'], function() {
		console.log("Orchis system, clear. Server passphrase is " + Passphrase);
	});	
}
else {
	server = http.createServer(Orchis).listen(ServerConfig['Port'], function() {
		console.log("Orchis system, clear. Passphrase: " + Passphrase);
	});
}
Orchis.post(["/api/v1/Session", "/api/v1/MeasurementEvent"], async (req, res, next) => { res.status(202); res.end(); });

function ErasePartyList() {
	let FinalPartyList = [];
	let i = 0; while (i <= 53) {
		var DefaultPartySettings = {
				"party_no": i + 1,
				"party_name": "",
				"party_setting_list": [
					{
						"unit_no": 1,
						"chara_id": 10140101,
						"equip_dragon_key_id": 0,
						"equip_weapon_body_id": 0,
						"equip_weapon_skin_id": 0,
						"equip_crest_slot_type_1_crest_id_1": 0,
						"equip_crest_slot_type_1_crest_id_2": 0,
						"equip_crest_slot_type_1_crest_id_3": 0,
						"equip_crest_slot_type_2_crest_id_1": 0,
						"equip_crest_slot_type_2_crest_id_2": 0,
						"equip_crest_slot_type_3_crest_id_1": 0,
						"equip_crest_slot_type_3_crest_id_2": 0,
						"equip_talisman_key_id": 0,
						"edit_skill_1_chara_id": 0,
						"edit_skill_2_chara_id": 0
					},
					{
						"unit_no": 2,
						"chara_id": 0,
						"equip_dragon_key_id": 0,
						"equip_weapon_body_id": 0,
						"equip_weapon_skin_id": 0,
						"equip_crest_slot_type_1_crest_id_1": 0,
						"equip_crest_slot_type_1_crest_id_2": 0,
						"equip_crest_slot_type_1_crest_id_3": 0,
						"equip_crest_slot_type_2_crest_id_1": 0,
						"equip_crest_slot_type_2_crest_id_2": 0,
						"equip_crest_slot_type_3_crest_id_1": 0,
						"equip_crest_slot_type_3_crest_id_2": 0,
						"equip_talisman_key_id": 0,
						"edit_skill_1_chara_id": 0,
						"edit_skill_2_chara_id": 0
					},
					{
						"unit_no": 3,
						"chara_id": 0,
						"equip_dragon_key_id": 0,
						"equip_weapon_body_id": 0,
						"equip_weapon_skin_id": 0,
						"equip_crest_slot_type_1_crest_id_1": 0,
						"equip_crest_slot_type_1_crest_id_2": 0,
						"equip_crest_slot_type_1_crest_id_3": 0,
						"equip_crest_slot_type_2_crest_id_1": 0,
						"equip_crest_slot_type_2_crest_id_2": 0,
						"equip_crest_slot_type_3_crest_id_1": 0,
						"equip_crest_slot_type_3_crest_id_2": 0,
						"equip_talisman_key_id": 0,
						"edit_skill_1_chara_id": 0,
						"edit_skill_2_chara_id": 0
					},
					{
						"unit_no": 4,
						"chara_id": 0,
						"equip_dragon_key_id": 0,
						"equip_weapon_body_id": 0,
						"equip_weapon_skin_id": 0,
						"equip_crest_slot_type_1_crest_id_1": 0,
						"equip_crest_slot_type_1_crest_id_2": 0,
						"equip_crest_slot_type_1_crest_id_3": 0,
						"equip_crest_slot_type_2_crest_id_1": 0,
						"equip_crest_slot_type_2_crest_id_2": 0,
						"equip_crest_slot_type_3_crest_id_1": 0,
						"equip_crest_slot_type_3_crest_id_2": 0,
						"equip_talisman_key_id": 0,
						"edit_skill_1_chara_id": 0,
						"edit_skill_2_chara_id": 0
					}
				]
			}
		FinalPartyList[i] = DefaultPartySettings;
		i++;
	}
	return FinalPartyList;
}
async function CreateAccountShell(TokenData) {
	let UserIDRecord = {};
	const LastAssignedID = await Fluoresce.Read("MasterIDRecord", "LastAssignedID");
	const ViewerID = LastAssignedID + 1;
	Fluoresce.Write("MasterIDRecord", "LastAssignedID", ViewerID);
	const SessionID = crypto.randomBytes(32).toString("hex");
	UserIDRecord = { 'ViewerID': ViewerID, 'SessionID': SessionID };
	const UserSessionRecord = DefaultSessionRecord(ViewerID, TokenData);
	const NewUserData = {
	   	"viewer_id": ViewerID,
		"name": "Euden",
		"level": 1,
		"exp": 0,
		"crystal": 400,
		"coin": 200000,
		"max_dragon_quantity": 120,
		"max_weapon_quantity": 0,
		"max_amulet_quantity": 0,
		"quest_skip_point": 0,
		"main_party_no": 1,
		"emblem_id": 40000001,
		"active_memory_event_id": 0,
		"mana_point": 500, 
		"dew_point": 500,
		"build_time_point": 500,
		"last_login_time": Math.floor(Date.now() / 1000),
		"stamina_single": 18,
		"last_stamina_single_update_time": 0,
		"stamina_single_surplus_second": 0, 
		"stamina_multi": 12,
		"last_stamina_multi_update_time": 0,
		"stamina_multi_surplus_second": 0,
		"tutorial_status": 0,
	   	"tutorial_flag_list": [],
		"prologue_end_time": 0,
		"is_optin": 0,
		"fort_open_time": 0, 
  		"create_time": Math.floor(Date.now() / 1000)
	}
	let UserIndexRecord = {};
	UserIndexRecord['user_data'] = NewUserData;
	
	return [UserIDRecord, UserSessionRecord, UserIndexRecord];
}
function DefaultSessionRecord(ViewerID, TokenData) {
	const DefaultOptions = {
		"is_enable_auto_lock_unit": 1,
		"is_auto_lock_dragon_sr": 0,
		"is_auto_lock_dragon_ssr": 1,
		"is_auto_lock_weapon_sr": 0,
		"is_auto_lock_weapon_ssr": 0,
		"is_auto_lock_weapon_sssr": 0,
		"is_auto_lock_amulet_sr": 0,
		"is_auto_lock_amulet_ssr": 0
	}
	const DefaultSmithData = {
		'max_carpenter_count': 5,
	   	'carpenter_num': 2,
	   	'working_carpenter_num': 0
	}
	const DefaultProductionData = {
		'RP_Production': {
		   	'speed': 0,
		   	'max': 0
	   	},
	   	"DF_Production": {
		   	'speed': 0,
		   	'max': 0
	   	},
	   	"ST_Production": {
		   	'speed': 0.03,
		   	'max': 144
	   	}
	}
	const DefaultMissionNotice = {
		'NormalMission': { 'is_update': 0, 'receivable_reward_count': 0, 'new_complete_mission_id_list': [], 'pickup_mission_count': 0, 'all_mission_count': 252, 'completed_mission_count': 252, 'current_mission_id': 0 },
		'DailyMission': { 'is_update': 0, 'receivable_reward_count': 0, 'new_complete_mission_id_list': [], 'pickup_mission_count': 0, 'all_mission_count': 9, 'completed_mission_count': 9, 'current_mission_id': 0 },
		'EventMission': { 'is_update': 0, 'receivable_reward_count': 0, 'new_complete_mission_id_list': [], 'pickup_mission_count': 0, 'all_mission_count': 10, 'completed_mission_count': 10, 'current_mission_id': 0 },
		'BeginnerMission': { 'is_update': 0, 'receivable_reward_count': 0, 'new_complete_mission_id_list': [], 'pickup_mission_count': 0, 'all_mission_count': 0, 'completed_mission_count': 0, 'current_mission_id': 0 },
		'SpecialMission': { 'is_update': 0, 'receivable_reward_count': 0, 'new_complete_mission_id_list': [], 'pickup_mission_count': 0, 'all_mission_count': 56, 'completed_mission_count': 56, 'current_mission_id': 0 },
		'StoryMission': { 'is_update': 0, 'receivable_reward_count': 0, 'new_complete_mission_id_list': [], 'pickup_mission_count': 0, 'all_mission_count': 0, 'completed_mission_count': 0, 'current_mission_id': 0 },
		'CompendiumMission': { 'is_update': 0, 'receivable_reward_count': 0, 'new_complete_mission_id_list': [], 'pickup_mission_count': 0, 'all_mission_count': 0, 'completed_mission_count': 0, 'current_mission_id': 0 },
		'DrillMission': { 'is_update': 0, 'receivable_reward_count': 0, 'new_complete_mission_id_list': [], 'pickup_mission_count': 0, 'all_mission_count': 0, 'completed_mission_count': 0, 'current_mission_id': 0 },
		'AlbumMission': { 'is_update': 0, 'receivable_reward_count': 0, 'new_complete_mission_id_list': [], 'pickup_mission_count': 0, 'all_mission_count': 22, 'completed_mission_count': 22, 'current_mission_id': 0 }
	}
	const DefaultSupportCharacter = {
		"last_active_time": Math.floor(Date.now() / 1000),
		"chara_id": 10140101,
		"equip_dragon_key_id": 0,
		"equip_weapon_body_id": 0,
		"equip_crest_slot_type_1_crest_id_1": 0,
		"equip_crest_slot_type_1_crest_id_2": 0,
		"equip_crest_slot_type_1_crest_id_3": 0,
		"equip_crest_slot_type_2_crest_id_1": 0,
		"equip_crest_slot_type_2_crest_id_2": 0,
		"equip_crest_slot_type_3_crest_id_1": 0,
		"equip_crest_slot_type_3_crest_id_2": 0,
		"equip_talisman_key_id": 0,
		"user_level_group": 0
	}
	const DmodeInfo = {
			'total_max_floor_num': 0,
			'recovery_count': 0,
			'recovery_time': 0,
			'floor_skip_count': 0,
			'floor_skip_time': 0,
			'dmode_point_1': 0,
			'dmode_point_2': 0,
			'is_entry': 0
	}
	const DmodeDungeonInfo = {
			'chara_id': 0,
			'floor_num': 0,
			'quest_time': 0,
			'dungeon_score': 0,
			'is_play_end': 0,
			'state': 0
	}
	const Expedition = {
			'chara_id_1': 0,
			'chara_id_2': 0,
			'chara_id_3': 0,
			'chara_id_4': 0,
			'start_time': 0,
			'target_floor_num': 0,
			'state': 0
	}
	const DefaultEventData = {
		'Raid': {},
		'Build': {},
		'Story': {},
		'CLB01': {},
		'MegaMan': {},
		'MonsterHunter': {},
		'Special': {},
		'Combat': {},
		'ABR': {},
		'Earn': {}
	}
	const DefaultEnergyItems = [
		{'item_id': 100601, 'quantity': 5000},
		{'item_id': 100602, 'quantity': 5000},
		{'item_id': 100603, 'quantity': 5000},
		{'item_id': 100604, 'quantity': 5000},
		{'item_id': 100605, 'quantity': 5000},
		{'item_id': 100606, 'quantity': 5000},
		{'item_id': 100607, 'quantity': 5000},
		{'item_id': 100608, 'quantity': 5000},
		{'item_id': 100609, 'quantity': 5000},
		{'item_id': 100701, 'quantity': 5000},
		{'item_id': 100702, 'quantity': 5000}
	]	
	const DefaultEndeavour = {
		'Tracker': {
			'Album': {
				'Flame': 0,
				'Water': 0,
				'Wind': 0,
				'Light': 0,
				'Shadow': 0,
				'Sword': 0,
				'Blade': 0,
				'Dagger': 0,
				'Axe': 0,
				'Lance': 0,
				'Bow': 0,
				'Wand': 0,
				'Staff': 0,
				'Manacaster': 0,
				'Attack': 0,
				'Defense': 0,
				'Support': 0,
				'Healing': 0,
				'AdventurersMaxed': 0,
				'DragonsMaxed': 0,
				'MedalCount': 0
			},
			'Beginner': {
				'MCNodesUnlocked': 0
			},
			'Daily': {
				'Quests': 0,
				'Blazons': 0,
				'EventQuests': 0
			},
			'Limited': {
				'Raids': 0,
				'Boss': 0,
				'DailyClear': 0
			},
			'Main': {},
			'Memory': {},
			'Normal': {
				'MaxAdventurerLevel': 0,
				'MaxDragonLevel': 0,
				'MaxDragonBond': 0,
				'MaxWyrmprintLevel': 0,
				'MaxWeaponLevel': 0,
				'MaxWeaponUpgrade': 0,
				'MaxMight': 0,
				'FacilityUpgrades': 0,
				'AdvHPAugments': 0,
				'AdvATKAugments': 0,
				'PrintHPAugments': 0,
				'PrintATKAugments': 0,
				'TotalQuests': 0,
				'CoinsClaimed': 0,
				'DragonfruitClaimed': 0,
				'MentorBonus': 0,
				'FafnirMedals': 0,
				'KScapeExpeditionFloors': 0,
				'KScapeTotalFloors': 0
			}
		},
		'Active': {
			'normal_mission_list': [],
			'daily_mission_list': [],
			'period_mission_list': [],
			'beginner_mission_list': [],
			'special_mission_list': [],
			'main_story_mission_list': [],
			'memory_event_mission_list': [],
			'album_mission_list': []
		}
	}
	let UserSessionRecord = {
		'BaasID': TokenData['sub'],
		'CreatedAt': Math.floor(Date.now() / 1000),
		'ViewerID': ViewerID,
		'AccountState': 0,
		'AccountMessage': { 'data_headers': { 'result_code': 0 }, 'data': { 'result_code': 0 } },
		'LoginBonus': {
			'Display': true,
			'17': { 'DayCount': 1, 'IsComplete': false }			
		},
		'LastLogin': Math.floor(Date.now() / 1000),
		'SaveUpdatedAt': 0,
		'Diamantium': 1200,
		'GiftRecord': {
			'GiftNormalList': [],
			'GiftLimitedList': [],
			'GiftHistory': []
		},
		'SummonRecord': {
			'FreeTenfoldCount': 0,
			'DailyLimitCount': 1,
			'ItemCount': 0,
			'SummonHistory': [],
			'UserSummonData': [],
			'UserLimitData': []
		},
		'Wyrmsigil': [],
		'FortData': {
			'Smiths': DefaultSmithData,
			'Production': DefaultProductionData,
			'BuildID': 9999,
			'Build': {},
			'DragonGiftList': [
				{
					"dragon_gift_id": 10001,
					"price": 0,
					"is_buy": 1
				},
				{
					"dragon_gift_id": 10002,
					"price": 1500,
					"is_buy": 1
				},
				{
					"dragon_gift_id": 10003,
					"price": 4000,
					"is_buy": 1
				},
				{
					"dragon_gift_id": 10004,
					"price": 8000,
					"is_buy": 1
				},
				{
					"dragon_gift_id": DailyDragonItem,
					"price": 12000,
					"is_buy": 1
				}
			]
		},
		'EnergyItems': DefaultEnergyItems,
		'DungeonRecord': {},
		'Wall': {},
		'Kaleidoscape': {
			'DmodeInfo': DmodeInfo,
			'DungeonInfo': DmodeDungeonInfo,
			'Passive': [],
			'Expedition': Expedition,
			'CharacterList': [],
			'StoryList': [],
			'RecoveryCount': 0,
			'UnitInfo': [],
			'ItemTracker': 0,
			'ItemList': [],
			'DragonList': []
		},
		'QuestNotice': DefaultMissionNotice,
		'MissionRecord': {},
		'Endeavour': DefaultEndeavour,
		'AlbumData': { 'Medals': [] },
		'WyrmprintSets': IndexTools.DefaultWyrmprints,
		'EquipmentSets': {},
		'Event': DefaultEventData,
		'Epithet': StaticData.DefaultEpithets,
		'SupportCharacter': DefaultSupportCharacter,
		'CrestTrade': [],
		'SetOptions': DefaultOptions,
		'Stickers': StaticData.DefaultStickers,
		'MyPage': {},
		'SupportCharacter': {
			'last_active_time': Math.floor(Date.now() / 1000),
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
			'user_level_group': 1
		},
		'Analytics': {
			'SummonCount': 0
		},
		'GuildLastCheck': 0,
		'Other': {}
	}
	
	return UserSessionRecord;
}
async function CreateGuild(GuildName, Epithet, Intro, Phrase) {
	const LastGuildID = await Fluoresce.Read("MasterIDRecord", "LastGuildID");
	NextGuildID = LastGuildID + 1;
	Fluoresce.Write("MasterIDRecord", "LastGuildID", NextGuildID)
	const GuildID = NextGuildID;
	const GuildData = {
		'guild_id': GuildID,
		'guild_name': GuildName,
		'guild_emblem_id': Epithet,
		'guild_introduction': Intro,
		'joining_condition_type': 1,
		'activity_policy_type': 1,
		'is_penalty_guild_name': 0,
		'is_penalty_guild_introduction': 0,
		'guild_member_count': 0,
		'guild_board': Phrase,
		'is_penalty_guild_board': 0
	}
	MasterGuildDatabase[String(GuildID)] = {};
	MasterGuildDatabase[String(GuildID)]['BoardData'] = GuildData;
	MasterGuildDatabase[String(GuildID)]['Users'] = [];
	MasterGuildDatabase[String(GuildID)]['Chat'] = [];
	return GuildID;
}
function AssignGuildData(GuildID, UserIndexRecord) {
	UserIndexRecord['user_guild_data'] = {
		"guild_id": GuildID,
		"guild_apply_id": 0,
		"penalty_end_time": 0,
		"guild_push_notification_type_running": 1,
		"guild_push_notification_type_suspending": 1,
		"profile_entity_type": 1,
		"profile_entity_id": 10140101,
		"profile_entity_rarity": 5,
		"last_attend_time": 0,
		"is_enable_invite_receive": 0,
		"is_enable_invite_send": 1
	}
	if (MasterGuildDatabase[String(GuildID)]['Users'].findIndex(x => x.viewer_id == UserIndexRecord['user_data']['viewer_id']) == -1) {
		MasterGuildDatabase[String(GuildID)]['Users'].push({
			'viewer_id': UserIndexRecord['user_data']['viewer_id'],
			'user_name': UserIndexRecord['user_data']['name'],
			'user_level': UserIndexRecord['user_data']['level'],
			'max_party_power': UserIndexRecord['party_power_data']['max_party_power'],
			'profile_entity_type': 1,
			'profile_entity_id': 10140101,
			'profile_entity_rarity': 5,
			'last_active_time': UserIndexRecord['user_data']['last_login_time'],
			'last_guild_active_time': 0,
			'last_attend_time': 1648514238,
			'guild_position_type': 3,
			'temporary_end_time': 0
		});
		MasterGuildDatabase[String(GuildID)]['BoardData']['guild_member_count'] += 1;
	}
	/*const ChatMessageTemplate = {
		'chat_message_id': MasterGuildDatabase[String(GuildID)]['Chat'].length,
		'viewer_id': UserIndexRecord['user_data']['viewer_id'],
		'user_name': UserIndexRecord['user_data']['name'],
		'profile_entity_type': UserIndexRecord['user_guild_data']['profile_entity_type'],
		'profile_entity_id': UserIndexRecord['user_guild_data']['profile_entity_id'],
		'profile_entity_rarity': UserIndexRecord['user_guild_data']['profile_entity_rarity'],
		'chat_message_type': 90001,
		'chat_message_text': "",
		'chat_message_stamp_id': 0,
		'chat_message_system_id': 1,
		'chat_message_param_value_1': 0,
		'chat_message_param_value_2': 0,
		'chat_message_param_value_3': 0,
		'chat_message_param_value_4': 0,
		'create_time': Math.floor(Date.now() / 1000)
	}
	MasterGuildDatabase[String(GuildID)]['Chat'].unshift(ChatMessageTemplate); */
	UserIndexRecord['guild_data'] = MasterGuildDatabase[String(GuildID)]['BoardData'];
	return UserIndexRecord;
}
async function SaveDatabases() {
	zlib.gzip(msgpack.pack(MasterGuildDatabase), (err, buffer) => {
		fs.writeFile(DBDir + 'masterguild.msg.gz', buffer) });
	zlib.gzip(msgpack.pack(MasterGiftDatabase), (err, buffer) => {
		fs.writeFile(DBDir + 'mastergift.msg.gz', buffer) });
	zlib.gzip(msgpack.pack(MasterUpdateRecord), (err, buffer) => {
		fs.writeFile(DBDir + 'masterupdate.msg.gz', buffer) });
	zlib.gzip(msgpack.pack(MasterDeleteRecord), (err, buffer) => {
		fs.writeFile(DBDir + 'masterdelete.msg.gz', buffer) });
	await Fluoresce.Save("MasterAccountRecord");
	await Fluoresce.Save("MasterIDRecord");
	await Fluoresce.Save("MasterSessionRecord");
	await Fluoresce.Save("MasterIndexRecord");
	await Fluoresce.Save("MasterDPSRecord");
}

async function PeriodicSave() {
	while (true) {
		await new Promise(resolve => setTimeout(resolve, 180000));
		if (IsMaintenance == 0) {
			SaveDatabases();
		}
		AssetList = JSON.parse(fs.readFileSync('./Library/Event/AssetList.json'));
		IndexPage = await fs.readFile(ServerConfig['AdvancedIndex']);
		BasicIndexPage = fs.readFileSync(ServerConfig['BasicIndex']);
		MaintXML = await fs.readFile('./static/maintenance.xml');
		SupportData = JSON.parse(fs.readFileSync('./Library/Event/Support.json'));
		ActiveBonusList = JSON.parse(fs.readFileSync('./Library/Event/EventBonus.json'));
		BannerList = JSON.parse(fs.readFileSync('./Library/Event/BannerList.json'));
		EventList = JSON.parse(fs.readFileSync('./Library/Event/EventList.json'));
		
		fs.writeFileSync(TimeFilePath, JSON.stringify(TimeFile, null, 2));
	}
}
async function ServerReset() {
	while (true) {
		await new Promise(resolve => setTimeout(resolve, (NextServerReset * 1000)));
		LastServerReset = GetDayBegin();
		NextServerReset = 86400 - (Math.floor(Date.now() / 1000) - LastServerReset);
		DayEnd = GetDayEnd();
		DayNumber = GetDayNo();
		const WeekdayNumber = new Date().getDay();
		DailyDragonItem = DragonItemList[WeekdayNumber];
		if (WeekdayNumber == 6) { GatherMedalReset = LastServerReset; }
		SummonOddsList = DataManager.GenerateSummonOdds(BannerList);
		MainQuestRotationSet = JSON.parse(fs.readFileSync('./Library/Event/QuestMainRotation.json'));
		
		fs.writeFileSync(TimeFilePath, JSON.stringify(TimeFile, null, 2));
		TimeFile = {};
		TimeFilePath = './Library/Log/TimeTrack_' + LastServerReset + '.json';
		LogFile = fs.createWriteStream('./Library/Log/URL_' + LastServerReset + '.txt');
	}
} 

PeriodicSave();
ServerReset();

Orchis.post([iOS_Version + "/maintenance/get_text", Android_Version + "/maintenance/get_text"], async (req, res, next) => {
	res.locals.ResponseBody['data'] = { 'maintenance_text': String(MaintXML) }
	next();
});
Orchis.post([iOS_Version + "/transition/transition_by_n_account", Android_Version + "/transition/transition_by_n_account"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const IDToken = MsgPackData['id_token']; let TokenData = jwt_decode(IDToken);
	let UserIDRecord = {};
	const RecordExists = await Fluoresce.Exists("MasterIDRecord", TokenData['sub']);
	if (RecordExists == false) {
		const NewAccountData = await CreateAccountShell(TokenData);
		UserIDRecord = NewAccountData[0];
		UserSessionRecord = NewAccountData[1];
		await Fluoresce.Write("MasterAccountRecord", UserIDRecord['ViewerID'], UserIDRecord);
		await Fluoresce.Write("MasterIDRecord", TokenData['sub'], UserIDRecord);
		await WriteSessionRecord(UserIDRecord['SessionID'], UserSessionRecord);
		await WriteIndexRecord(String(UserIDRecord['ViewerID']), NewAccountData[2]);
	}
	else {
		UserIDRecord = await Fluoresce.Read("MasterIDRecord", TokenData['sub']);
	}
	res.locals.ResponseBody['data'] = { 'transition_result_data': { 'abolished_viewer_id': 0, 'linked_viewer_id': UserIDRecord['ViewerID'] } }
	next();					
}));
Orchis.post([iOS_Version + "/tool/signup", Android_Version + "/tool/signup"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const IDToken = MsgPackData['id_token']; let TokenData = jwt_decode(IDToken);
	const NewAccountData = await CreateAccountShell(TokenData);
	const UserIDRecord = NewAccountData[0]
	await Fluoresce.Write("MasterAccountRecord", UserIDRecord['ViewerID'], NewAccountData[0]);
	await Fluoresce.Write("MasterIDRecord", TokenData['sub'], UserIDRecord);
	await WriteSessionRecord(UserIDRecord['SessionID'], NewAccountData[1]);
	await WriteIndexRecord(String(UserIDRecord['ViewerID']), NewAccountData[2]);
		
	res.locals.ResponseBody['data'] = { 'viewer_id': UserIDRecord['ViewerID'] }
	next();
}));
Orchis.post([iOS_Version + "/tool/auth", Android_Version + "/tool/auth"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const IDToken = MsgPackData['id_token']; let TokenData = jwt_decode(IDToken);
	let UserIDRecord = {};
	let UserSessionRecord = {};
	const RecordExists = await Fluoresce.Exists("MasterIDRecord", TokenData['sub']);
	if (RecordExists == false) {
		const NewAccountData = await CreateAccountShell(TokenData);
		UserIDRecord = NewAccountData[0];
		UserSessionRecord = NewAccountData[1];
		await Fluoresce.Write("MasterAccountRecord", UserIDRecord['ViewerID'], UserIDRecord);
		await Fluoresce.Write("MasterIDRecord", TokenData['sub'], UserIDRecord);
		await WriteSessionRecord(UserIDRecord['SessionID'], UserSessionRecord);
		await WriteIndexRecord(String(UserIDRecord['ViewerID']), NewAccountData[2]);
	}
	else {
		UserIDRecord = await Fluoresce.Read("MasterIDRecord", TokenData['sub']);
		const SessionExists = await Fluoresce.Exists("MasterSessionRecord", UserIDRecord['SessionID']);
		if (SessionExists == false) {
			let SessionData = DefaultSessionRecord(UserIDRecord['ViewerID'], TokenData);
			await WriteSessionRecord(UserIDRecord['SessionID'], SessionData);
			UserSessionRecord = SessionData; }
		else { UserSessionRecord = await ReadSessionRecord(UserIDRecord['SessionID']); }
	}
	if (UserSessionRecord['AccountState'] != 0) { res.end(msgpack.pack(UserSessionRecord['AccountMessage'])); return; }
	if (UserSessionRecord['LastLogin'] < LastServerReset) {
		UserSessionRecord['LoginBonus']['Display'] = true;
		UserSessionRecord['LastLogin'] = Math.floor(Date.now() / 1000);
		if (req.get('sid') != undefined) {
			await WriteSessionRecord(UserIDRecord['SessionID'], UserSessionRecord);
			res.end(msgpack.pack({'data_headers':{'result_code':112},'data':{'result_code':112}}));
			return;
		}
	}
	if (TokenData['sav:a'] == true && TokenData['sav:ts'] > UserSessionRecord['SaveUpdatedAt']) {
		try {
			const UserIndex = await DataManager.GetUserSave(IDToken);
			let UserIndexRecord = {}
			UserIndexRecord = UserIndex['data'];
			UserIndexRecord = DataManager.CleanIndex(UserIndexRecord);
			UserIndexRecord['user_data']['viewer_id'] = UserIDRecord['ViewerID'];
			UserIndexRecord['user_data']['last_login_time'] = UserSessionRecord['LastLogin'];
			UserIndexRecord['user_data']['create_time'] = UserSessionRecord['CreatedAt'];
			UserIndexRecord['user_data']['tutorial_status'] = 60999;
			UserIndexRecord['user_data']['tutorial_flag_list'] = IndexTools.TutorialFlagsList;
			UserIndexRecord['party_power_data']['max_party_power'] = 50000;
			UserIndexRecord['weapon_passive_ability_list'] = IndexTools.VoidPassives;
			UserSessionRecord['SaveUpdatedAt'] = Math.floor(Date.now() / 1000);
			await WriteIndexRecord(String(UserIDRecord['ViewerID']), UserIndexRecord);
		} catch (err) { console.log('Failed import for ID ' + UserIDRecord['ViewerID'] + ": " + err); }
	}
	UserSessionRecord['LastLogin'] = Math.floor(Date.now() / 1000);
	await WriteSessionRecord(UserIDRecord['SessionID'], UserSessionRecord);
	res.locals.ResponseBody['data'] = { 'viewer_id': UserIDRecord['ViewerID'], 'session_id': UserIDRecord['SessionID'], 'nonce': null }
	next();
}));
Orchis.post([iOS_Version + "/tool/get_service_status", Android_Version + "/tool/get_service_status"], async (req, res, next) => {
	res.locals.ResponseBody['data'] = { 'service_status': 1 }
	next();
});

Orchis.post([iOS_Version + "/eula/get_version_list", Android_Version + "/eula/get_version_list"], async (req, res, next) => {
	res.locals.ResponseBody['data'] = { 'version_hash_list': StaticData.VersionData, }
	next();
});
Orchis.post([iOS_Version + "/eula/get_version", Android_Version + "/eula/get_version"], async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	let DeviceRegion = MsgPackData['region'];
	let DeviceLanguage = MsgPackData['lang'];
	if (DeviceRegion == undefined) { DeviceRegion = "us" } else { DeviceRegion = DeviceRegion.toLowerCase(); }
	res.locals.ResponseBody['data'] = {
		'version_hash': {
			"region": DeviceRegion,
			"lang": DeviceLanguage,
	   		"eula_version": 1,
			"privacy_policy_version": 6
		},
		'agreement_status': 0,
		'is_required_agree': false
	}
	next();
});
Orchis.post([iOS_Version + "/eula_agree/agree", Android_Version + "/eula_agree/agree"], async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const Region = MsgPackData['region']; const Language = MsgPackData['lang'];
	const EulaVer = MsgPackData['eula_version']; const PrivVer = MsgPackData['privacy_policy_version'];
	res.locals.ResponseBody['data'] = {
		'version_hash': {
			'region': Region,
			'language': Language,
			'eula_version': EulaVer,
			'privacy_policy_version': PrivVer
		}
	}
	next();
});

Orchis.post([iOS_Version + "/deploy/get_deploy_version", Android_Version + "/deploy/get_deploy_version"], async (req, res, next) => {
	res.locals.ResponseBody['data'] = { 'deploy_hash': GlobalDeployHashContext }
	next();
});
Orchis.post([iOS_Version + "/version/get_resource_version", Android_Version + "/version/get_resource_version"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const OSType = MsgPackData['platform'];
	// Analytics
		const AnalyticsTemplate = {
			'Platform': OSType,
			'DeviceID': req.get('DeviceId'),
			'DeviceName': req.get('DeviceName'),
			'OS': req.get('OS-Version'),
			'LastDeviceLogin': Math.floor(Date.now() / 1000)
		}
		const RecordExists = await Fluoresce.Exists("AnalyticsRecord", res.locals.UserSessionRecord['ViewerID']);
		if (!RecordExists) {
			await Fluoresce.Write("AnalyticsRecord", res.locals.UserSessionRecord['ViewerID'], [ AnalyticsTemplate ]);
		}
		else {
			const AnalyticsData = await Fluoresce.Read("AnalyticsRecord", res.locals.UserSessionRecord['ViewerID']);
			let Duplicate = false;
			for (const a in AnalyticsData) {
				if (AnalyticsData[a]['DeviceID'] == AnalyticsTemplate['DeviceID']) {
					Duplicate = true;
					if (AnalyticsData[a]['OS'] == AnalyticsTemplate['OS']) {
						AnalyticsData[a]['LastDeviceLogin'] = Math.floor(Date.now() / 1000);
					}
					else {
						AnalyticsData[a]['OS'] = AnalyticsTemplate['OS'];
						AnalyticsData[a]['LastDeviceLogin'] = Math.floor(Date.now() / 1000);
					}
					break;
				}
			}
			if (Duplicate == false) {
				AnalyticsData.push(AnalyticsTemplate);
			}
			await Fluoresce.Write("AnalyticsRecord", res.locals.UserSessionRecord['ViewerID'], AnalyticsData);
		}
	// ---------
	let ResourceVersion = ""
	if (OSType == 1) { ResourceVersion = AssetList['iOS_Manifest'] } else { ResourceVersion = AssetList['Android_Manifest'] }
	if (res.locals.UserSessionRecord['VanillaAssets'] == true) {
		if (OSType == 1) { ResourceVersion = "b1HyoeTFegeTexC0"; }
		else { ResourceVersion = "y2XM6giU6zz56wCm"; }
	}
	res.locals.ResponseBody['data'] = { 'resource_version': ResourceVersion }
	next();
}));

Orchis.post([iOS_Version + "/login/verify_jws", Android_Version + "/login/verify_jws"], async (req, res, next) => {
	res.locals.ResponseBody['data'] = { 'result_code': 1 }
	next();
});
Orchis.post([iOS_Version + "/load/index", Android_Version + "/load/index"], errorhandler(async (req, res, next) => {
	if (JSON.stringify(res.locals.UserIndexRecord) == "{}") {
		res.locals.UserIndexRecord = IndexTools.GenerateDefaultSaveData("Euden", res.locals.UserSessionRecord['ViewerID']);
		res.locals.UserIndexRecord['party_list'] = ErasePartyList();
		res.locals.UserIndexRecord['fort_bonus_list'] = FortMap.GenerateBonuses(res.locals.UserIndexRecord);
		res.locals.UpdatedIndexRecord = true;
	}
	
	if (res.locals.UserSessionRecord == undefined || res.locals.UserIndexRecord == undefined || res.locals.UserIndexRecord['user_data'] == undefined) {
		res.end(msgpack.pack({'data_headers':{'result_code':117},'data':{'result_code': 117}})); return;
	}
	else {
		res.locals.ResponseBody['data'] = res.locals.UserIndexRecord;
		res.locals.ResponseBody['data']['treasure_trade_all_list'] = ShopMap.TreasureTrade;
		res.locals.ResponseBody['data']['mission_notice'] = DataManager.GetMissionNotice(res.locals.UserSessionRecord);
		res.locals.ResponseBody['data']['server_time'] = Math.floor(Date.now() / 1000);
		res.locals.ResponseBody['data']['multi_server'] = { 'host': ServerConfig['PhotonURL'], 'app_id': "" };
		
		if (res.locals.UserSessionRecord['CustomPhotonURL'] != undefined && res.locals.UserSessionRecord['CustomPhotonURL'] != false) {
			res.locals.ResponseBody['data']['multi_server'] = { 'host': res.locals.UserSessionRecord['CustomPhotonURL'], 'app_id': "" };
		}
	}
	
	next();
}));
Orchis.post([iOS_Version + "/login/index", Android_Version + "/login/index"], errorhandler(async (req, res, next) => {
	const LoginData = DataManager.LoginBonusData(res.locals.UserIndexRecord, res.locals.UserSessionRecord, ActiveBonusList, DailyDragonItem, GatherMedalReset, LastServerReset, DayEnd, DayNumber);
	res.locals.ResponseBody['data'] = LoginData[0];
	res.locals.UserIndexRecord = LoginData[1];
	res.locals.UserIndexRecord['fort_bonus_list'] = FortMap.GenerateBonuses(res.locals.UserIndexRecord);
	res.locals.ResponseBody['data']['update_data_list']['fort_bonus_list'] = res.locals.UserIndexRecord['fort_bonus_list'];
	res.locals.UserSessionRecord = LoginData[2];
	res.locals.UserSessionRecord['DungeonRecord']['IsRepeat'] = 0;
	if (res.locals.UserIndexRecord['user_guild_data'] != undefined) {
		const GuildID = res.locals.UserIndexRecord['user_guild_data']['guild_id'];
		if (GuildID == 0 && res.locals.UserIndexRecord['user_guild_data']['profile_entity_id'] == undefined) {
			res.locals.UserIndexRecord = AssignGuildData(10001, res.locals.UserIndexRecord); }
		else {
			if (MasterGuildDatabase[String(GuildID)] != undefined) {
				const GuildIndex = MasterGuildDatabase[String(GuildID)]['Users'].findIndex(x => x.viewer_id == res.locals.UserSessionRecord['ViewerID']);
				if (GuildIndex != -1) { MasterGuildDatabase[String(GuildID)]['Users'][GuildIndex]['last_active_time'] = Math.floor(Date.now() / 1000); }
			}
		}
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));

Orchis.post([iOS_Version + "/webview_version/url_list", Android_Version + "/webview_version/url_list"], async (req, res, next) => {
	res.locals.ResponseBody['data']['webview_url_list'] = ServerConfig['PageURLs'];
	next();
});
Orchis.post([iOS_Version + "/mypage/info", Android_Version + "/mypage/info"], async (req, res, next) => {	
	res.locals.ResponseBody['data'] = DataManager.MyPageInfo(res.locals.UserSessionRecord, MainQuestRotationSet, EventList);
	next();
});
Orchis.get("/information/top", async (req, res, next) => {
	const Serialized = JSON.stringify(StaticData.NewsData);
	res.end(Serialized);
});

Orchis.post([iOS_Version + "/tutorial/update_step", Android_Version + "/tutorial/update_step"], errorhandler(async (req, res, next) => {
	const StepID = msgpack.unpack(req.body)['step'];
	res.locals.UserIndexRecord['user_data']['tutorial_status'] = StepID;
	if (StepID == 401) {
		res.locals.UserIndexRecord = IndexTools.GenerateDefaultSaveData(res.locals.UserIndexRecord['user_data']['name'], res.locals.UserSessionRecord['ViewerID']);
		res.locals.UserIndexRecord['party_list'] = ErasePartyList();
		res.locals.UserIndexRecord['fort_bonus_list'] = FortMap.GenerateBonuses(res.locals.UserIndexRecord);
	}
	res.locals.ResponseBody['data'] = {
		"step": StepID,
		"update_data_list": { 
	  		'user_data': res.locals.UserIndexRecord['user_data']
		}
 	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/tutorial/update_flags", Android_Version + "/tutorial/update_flags"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	res.locals.UserIndexRecord['user_data']['tutorial_flag_list'].push(MsgPackData['flag_id']);
	res.locals.ResponseBody['data'] = {
		'update_data_list': { 'tutorial_flag_list': res.locals.UserIndexRecord['user_data']['tutorial_flag_list'] }
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/redoable_summon/get_data", Android_Version + "/redoable_summon/get_data"], async (req, res, next) => {
	const Serialized = msgpack.pack(IndexTools.RedoableSummonData);
	res.set(ResHeaders(Serialized.length));
	res.end(Serialized);
});
Orchis.post([iOS_Version + "/redoable_summon/pre_exec", Android_Version + "/redoable_summon/pre_exec"], errorhandler(async (req, res, next) => {
	let SummonData = [];
	let DrawData = null;
	let i = 0; while (i < 50) {
		let Result = Math.round(Math.random());
		switch(Result) {
			case 0:
				DrawData = CharacterMap.DrawCharacterCorrect(90001011, BannerList, false);
				break;
			case 1:
				DrawData = DragonMap.DrawDragonCorrect(90001011, BannerList, false);
				break;
		}
		var Template = {
			'entity_type': DrawData['entity_type'],
			'id': DrawData['id'],
			'rarity': DrawData['rarity'],
		}
		SummonData.push(Template);
		i++;
	}
	res.locals.ResponseBody['data'] = {
		'user_redoable_summon_data': {
		   	'is_fixed_result': 0,
			'redoable_summon_result_unit_list': SummonData
		},
		'update_data_list': {
		   	'functional_maintenance_list': [
		   		]
		}
	}
	res.locals.UserSessionRecord['RedoableSummonData'] = SummonData;
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/redoable_summon/fix_exec", Android_Version + "/redoable_summon/fix_exec"], errorhandler(async (req, res, next) => {
	let UpdateData = {};
	UpdateData['chara_list'] = [];
	UpdateData['dragon_list'] = [];
	UpdateData['unit_story_list'] = [];
	UpdateData['dragon_reliability_list'] = [];
	let EntityData = [];
	for (let y in res.locals.UserSessionRecord['RedoableSummonData']) {
		const DrawData = {
			'id': res.locals.UserSessionRecord['RedoableSummonData'][y]['id']
		}
		switch(res.locals.UserSessionRecord['RedoableSummonData'][y]['entity_type']) {
			case 1:
				if (UpdateData['chara_list'].findIndex(x => x.chara_id === DrawData['id']) == -1) {
					const NewCharacterData = CharacterMap.CreateCharacterFromGift(DrawData['id'], 1);
					UpdateData['chara_list'].push(NewCharacterData);
					res.locals.UserIndexRecord['chara_list'].push(NewCharacterData);
					EntityData.push({ 'entity_type': 1, 'entity_id': DrawData['id'] });
					const CharacterElement = CharacterMap.GetCharacterInfo(DrawData['id'], 'elemental_type');
					const CharacterBonusIndex = res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'].findIndex(x => x.elemental_type == CharacterElement);
					res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][CharacterBonusIndex]['hp'] += 0.1;
					res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][CharacterBonusIndex]['attack'] += 0.1;
					UpdateData['fort_bonus_list'] = res.locals.UserIndexRecord['fort_bonus_list'];
					const UnitStoryData = CharacterMap.GenerateUnitStory(DrawData['id'])
					if (UnitStoryData[0] != undefined) {
						UpdateData['unit_story_list'].push(UnitStoryData[0]);
						res.locals.UserIndexRecord['unit_story_list'].push(UnitStoryData[0]); }
				}
				break;
			case 7:
				let NextID = 39999;
				if (res.locals.UserIndexRecord['dragon_list'].length != 0) { NextID = res.locals.UserIndexRecord['dragon_list'][res.locals.UserIndexRecord['dragon_list'].length - 1]['dragon_key_id'] + 1; }
				if (UpdateData['dragon_list'].findIndex(x => x.dragon_id === DrawData['id']) == -1) {
					UpdateData['dragon_reliability_list'].push(DragonMap.GenerateDragonReliability(DrawData['id']));
					res.locals.UserIndexRecord['dragon_reliability_list'].push(DragonMap.GenerateDragonReliability(DrawData['id']));
					const DragonElement = DragonMap.GetDragonInfo(DrawData['id'], "element");
					const DragonBonusIndex = res.locals.UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'].findIndex(x => x.elemental_type == DragonElement);
					res.locals.UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'][DragonBonusIndex]['hp'] += 0.1;
					res.locals.UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'][DragonBonusIndex]['attack'] += 0.1;
				}
				const NewDragonData = DragonMap.CreateDragonFromGift(NextID, DrawData['id'], 1);
				UpdateData['dragon_list'].push(NewDragonData);
				res.locals.UserIndexRecord['dragon_list'].push(NewDragonData);
				EntityData.push({ 'entity_type': 7, 'entity_id': DrawData['id'] });
				break;
		}
	}
	res.locals.UserIndexRecord['user_data']['tutorial_status'] = 60999;
	res.locals.UserIndexRecord['user_data']['tutorial_flag_list'] = [
		1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008,
		1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016,
		1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024,
		1025, 1026, 1027, 1028, 1029, 1030
	];
	res.locals.ResponseBody['data'] = {
		'user_redoable_summon_data': {
		   	'is_fixed_result': 1,
		   	'redoable_summon_result_unit_list': res.locals.UserSessionRecord['RedoableSummonData']
		},
		'update_data_list': UpdateData,
		'entity_result': { 'new_get_entity_list': EntityData }
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/summon_exclude/get_list", Android_Version + "/summon_exclude/get_list"], async (req, res, next) => {
	res.locals.ResponseBody['data'] = { 'summon_exclude_list': [] }
	next();
});
Orchis.post([iOS_Version + "/summon/get_odds_data", Android_Version + "/summon/get_odds_data"], async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const SummonID = MsgPackData['summon_id'];
	const OddsListData = SummonOddsList.find(x => x.summon_id == SummonID);
	res.locals.ResponseBody['data'] = {
		'odds_rate_list': OddsListData['odds'],
		'summon_prize_odds_rate_list': OddsListData['prize_odds']
	}
	next();
});
Orchis.post([iOS_Version + "/summon/get_summon_history", Android_Version + "/summon/get_summon_history"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = { 'summon_history_list': res.locals.UserSessionRecord['SummonRecord']['SummonHistory'] }
	next();
}));
Orchis.post([iOS_Version + "/summon/get_summon_list", Android_Version + "/summon/get_summon_list"], errorhandler(async (req, res, next) => {
	SummonList = [];
	SummonPointList = [];
	const RightNow = Math.floor(Date.now() / 1000);
	for (let x in BannerList) {
		const SummonID = BannerList[x]['summon_id'];
		let FreeCount = res.locals.UserSessionRecord['SummonRecord']['FreeTenfoldCount'];
		let LimitCount = res.locals.UserSessionRecord['SummonRecord']['DailyLimitCount'];
		let CrystalCost = BannerList[x]['summon_cost'];
		let StoneCost = BannerList[x]['summon_cost'];
		let LimitCost = BannerList[x]['summon_cost'] / 5;
		if (String(SummonID).slice(0,5) == "10500" || String(SummonID).slice(0,5) == "11100") { // Platinum Showcase
			FreeCount = 0; LimitCount = 0; CrystalCost = 0; LimitCost = 0; }
		if (BannerList[x]['campaign_type'] != 14) { FreeCount = 0; }
		if (BannerList[x]['start_time'] < RightNow && BannerList[x]['end_time'] > RightNow) {
			const Template = {
				'summon_id': SummonID,
				'summon_type': BannerList[x]['summon_type'],
				'single_crystal': CrystalCost,
				'single_diamond': StoneCost,
				'multi_crystal': CrystalCost * 10,
				'multi_diamond': StoneCost * 10,
				'limited_crystal': 0,
				'limited_diamond': LimitCost,
				'summon_point_id': SummonID,
				'add_summon_point': BannerList[x]['add_sigil_crystal'],
				'add_summon_point_stone': BannerList[x]['add_sigil_stone'],
				'exchange_summon_point': BannerList[x]['sigil_cost'],
				'status': 1,
				'commence_date': parseInt(BannerList[x]['start_time']),
				'complete_date': parseInt(BannerList[x]['end_time']),
				'daily_count': 0,
				'daily_limit': LimitCount,
				'total_limit': 0,
				'total_count': 0,
				'campaign_type': BannerList[x]['campaign_type'],
				'free_count_rest': FreeCount,
				'is_beginner_campaign': 0,
				'beginner_campaign_count_rest': 0,
				'consecution_campaign_count_rest': 0
			}
			SummonList.push(Template);
			if (BannerList[x]['sigil_cost'] != 0) {
				let SigilIndex = res.locals.UserSessionRecord['Wyrmsigil'].findIndex(x => x.summon_point_id == SummonID);
				if (SigilIndex == -1) {
					const SigilTemplate = {
						'summon_point_id': SummonID,
						'summon_point': 0,
						'cs_summon_point': 0,
						'cs_point_term_min_date': 0,
						'cs_point_term_max_date': 0
					}
					res.locals.UserSessionRecord['Wyrmsigil'].push(SigilTemplate);
					SummonPointList.push(SigilTemplate);
					res.locals.UpdatedSessionRecord = true;
				}
				else { SummonPointList.push(res.locals.UserSessionRecord['Wyrmsigil'][SigilIndex]); }
			}
		}
	}
	res.locals.ResponseBody['data'] = { 
		"summon_list": SummonList,
		"summon_point_list": SummonPointList
	}
	next();
}));
Orchis.post([iOS_Version + "/summon/get_summon_point_trade", Android_Version + "/summon/get_summon_point_trade"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const SummonID = MsgPackData['summon_id'];
	let SummonPointTradeList = [];
	let SummonPointList = [];
	const SummonIndex = BannerList.findIndex(x => x.summon_id == SummonID);
	let SigilIndex = res.locals.UserSessionRecord['Wyrmsigil'].findIndex(x => x.summon_point_id == SummonID);
	res.locals.ResponseBody['data'] = {
		'summon_point_trade_list': BannerList[SummonIndex]['sigil'],
		'summon_point_list': [ res.locals.UserSessionRecord['Wyrmsigil'][SigilIndex] ]
	}
	next();
}));
Orchis.post([iOS_Version + "/summon/summon_point_trade", Android_Version + "/summon/summon_point_trade"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const SummonID = MsgPackData['summon_id']; const TradeID = MsgPackData['trade_id'];
	const SummonIndex = BannerList.findIndex(x => x.summon_id == SummonID);
	const TradeData = BannerList[SummonIndex]['sigil'].find(x => x.trade_id == TradeID);
	const SigilIndex = res.locals.UserSessionRecord['Wyrmsigil'].findIndex(x => x.summon_point_id == SummonID);
	const Remainder = res.locals.UserSessionRecord['Wyrmsigil'][SigilIndex]['summon_point'] - BannerList[SummonIndex]['sigil_cost'];
	if (Remainder <= 0) { res.locals.UserSessionRecord['Wyrmsigil'][SigilIndex]['summon_point'] = 0; }
	else { res.locals.UserSessionRecord['Wyrmsigil'][SigilIndex]['summon_point'] = Remainder }
	let UpdateData = {};
	UpdateData['summon_point_list'] = [ res.locals.UserSessionRecord['Wyrmsigil'][SigilIndex] ];
	UpdateData['chara_list'] = [];
	UpdateData['dragon_list'] = [];
	UpdateData['unit_story_list'] = [];
	UpdateData['dragon_reliability_list'] = [];
	ExchangeEntityList = [];
	if (TradeData['entity_type'] == 1) {
		const CharacterData = CharacterMap.CreateCharacterFromGift(TradeData['entity_id'], 1);
		const UnitStoryData = CharacterMap.GenerateUnitStory(TradeData['entity_id']);
		res.locals.UserIndexRecord['chara_list'].push(CharacterData);
		UpdateData['chara_list'].push(CharacterData);
		if (UnitStoryData[0] != undefined) {
			res.locals.UserIndexRecord['unit_story_list'].push(UnitStoryData[0]);
			UpdateData['unit_story_list'].push(UnitStoryData[0]);
		}
		ExchangeEntityList.push({ 'entity_type': 1, 'entity_id': TradeData['entity_id'], 'entity_quantity': 1 });
	}
	else if (TradeData['entity_type'] == 7) {
		let NextID = 39999;
		if (res.locals.UserIndexRecord['dragon_list'].length != 0) {
			NextID = res.locals.UserIndexRecord['dragon_list'][res.locals.UserIndexRecord['dragon_list'].length - 1]['dragon_key_id'] + 1;
		}
		const DragonData = DragonMap.CreateDragonFromGift(NextID, TradeData['entity_id'], 1);
		res.locals.UserIndexRecord['dragon_list'].push(DragonData);
		UpdateData['dragon_list'].push(DragonData);
		if (res.locals.UserIndexRecord['dragon_reliability_list'].findIndex(x => x.dragon_id === TradeData['entity_id']) == -1) {
			const DragonReliability = DragonMap.GenerateDragonReliability(TradeData['entity_id']);
			res.locals.UserIndexRecord['dragon_reliability_list'].push(DragonReliability);
			UpdateData['dragon_reliability_list'].push(DragonReliability);
		}
		ExchangeEntityList.push({ 'entity_type': 7, 'entity_id': TradeData['entity_id'], 'entity_quantity': 1 });
	}
	res.locals.ResponseBody['data'] = {
		'exchange_entity_list': ExchangeEntityList,
		'update_data_list': UpdateData
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/summon/request", Android_Version + "/summon/request"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const SummonID = MsgPackData['summon_id'];
	let BannerData = BannerList.find(x => x.summon_id == SummonID);
	let SigilIndex = res.locals.UserSessionRecord['Wyrmsigil'].findIndex(x => x.summon_point_id == SummonID);
	let SigilPoint = 0;
	let ExecCount = MsgPackData['exec_count'];
	if (ExecCount < 1) { ExecCount = 1; }
	if (MsgPackData['exec_type'] == 2) { ExecCount = 10; }
	const PaymentType = MsgPackData['payment_type'];
	let ReversalIndex = -1;
	let PreSageEffectList = [ 1, 1 ];
	let SummonData = []; let IsTenfold = false; let IsPlatinum = false;
	let UpdateInfo = {}; let NewEntityList = [];
	switch(PaymentType) {
		case 2:
			if (MsgPackData['exec_type'] == 3) {
				res.locals.UserSessionRecord['Diamantium'] -= (BannerData['summon_cost'] / 5);
				SigilPoint = BannerData['add_sigil_stone']; 
				res.locals.UserSessionRecord['SummonRecord']['DailyLimitCount'] = 0; }
			else {
				res.locals.UserSessionRecord['Diamantium'] -= (BannerData['summon_cost'] * ExecCount);
				SigilPoint = ExecCount * BannerData['add_sigil_stone']; }
			UpdateInfo['diamond_data'] = { 'free_diamond': 0, 'paid_diamond': res.locals.UserSessionRecord['Diamantium'] }
			break;
		case 3:
			res.locals.UserIndexRecord['user_data']['crystal'] -= (BannerData['summon_cost'] * ExecCount);
			UpdateInfo['user_data'] = res.locals.UserIndexRecord['user_data'];
			SigilPoint = ExecCount * BannerData['add_sigil_crystal'];
			break;
		case 8: // this is vouchers | exec_type 1 == single 2 == 10x
			if (MsgPackData['exec_type'] == 1) {
				const TicketIndex = res.locals.UserIndexRecord['summon_ticket_list'].findIndex(x => x.summon_ticket_id == 10101);
				res.locals.UserIndexRecord['summon_ticket_list'][TicketIndex]['quantity'] -= ExecCount;
			}
			else if (MsgPackData['exec_type'] == 2) {
				const TicketIndex = res.locals.UserIndexRecord['summon_ticket_list'].findIndex(x => x.summon_ticket_id == 10102);
				res.locals.UserIndexRecord['summon_ticket_list'][TicketIndex]['quantity'] -= 1;
			}
			SigilPoint = ExecCount * BannerData['add_sigil_crystal'];
			break;
		case 9: // free daily tenfold!
			res.locals.UserSessionRecord['SummonRecord']['FreeTenfoldCount'] -= 1;
			SigilPoint = ExecCount * BannerData['add_sigil_crystal'];
			break;
		case 10: // beginner daily tenfold!
			res.locals.UserSessionRecord['SummonRecord']['FreeTenfoldCount'] -= 1;
			SigilPoint = ExecCount * BannerData['add_sigil_crystal'];
			break;
	}
	if (SigilPoint != 0) { res.locals.UserSessionRecord['Wyrmsigil'][SigilIndex]['summon_point'] += SigilPoint; }
	let i = 0; while (i < ExecCount) {
		let Result = 0;
		if (BannerData['entity_focus'] == -1 || BannerData['entity_focus'] == undefined) {
			const TypeDraw = Math.floor(Math.random() * 100 + 1);
			if (TypeDraw > 95) {Result = 2;} else if (TypeDraw > 45) {Result = 1;}
		}
		else { Result = BannerData['entity_focus']; }
		let DrawData = "";
		let IsNew = false;
		let DewPoints = 0;
		if (MsgPackData['exec_type'] == 2 && i == 9) { IsTenfold = true; }
		if (BannerData['summon_type'] == 5 && i == 9) { IsPlatinum = true; }
		switch(Result) {
			case 0:
				DrawData = CharacterMap.DrawCharacterCorrect(SummonID, BannerList, IsTenfold, IsPlatinum);
				if (res.locals.UserIndexRecord['chara_list'].findIndex(x => x.chara_id === DrawData['id']) == -1) {
					IsNew = true; if (UpdateInfo['chara_list'] == undefined) { UpdateInfo['chara_list'] = []; }
					const NewCharacterData = CharacterMap.CreateCharacterFromGift(DrawData['id'], 1);
					UpdateInfo['chara_list'].push(NewCharacterData);
					res.locals.UserIndexRecord['chara_list'].push(NewCharacterData);
					NewEntityList.push({ 'entity_type': 1, 'entity_id': DrawData['id'] });
					const CharacterElement = CharacterMap.GetCharacterInfo(DrawData['id'], 'elemental_type');
					const CharacterBonusIndex = res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'].findIndex(x => x.elemental_type == CharacterElement);
					res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][CharacterBonusIndex]['hp'] += 0.1;
					res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][CharacterBonusIndex]['attack'] += 0.1;
					UpdateInfo['fort_bonus_list'] = res.locals.UserIndexRecord['fort_bonus_list'];
					if (UpdateInfo['unit_story_list'] == undefined) { UpdateInfo['unit_story_list'] = []; } 
					const UnitStoryID = CharacterMap.GetCharacterInfo(DrawData['id'], "story_id");
					if (UnitStoryID != "N/A") {
						res.locals.UserIndexRecord['unit_story_list'].push({'unit_story_id': UnitStoryID, 'is_read': 0});
						UpdateInfo['unit_story_list'].push({'unit_story_id': UnitStoryID, 'is_read': 0}); } }
				else {
					switch(DrawData['rarity']) {
					case 3: DewPoints = 300; break; case 4: DewPoints = 2500; break; case 5: DewPoints = 8000; break; } }
				break;
			case 1:
				DrawData = DragonMap.DrawDragonCorrect(SummonID, BannerList, IsTenfold, IsPlatinum);
				let NextID = 39999;
			if (res.locals.UserIndexRecord['dragon_list'].length != 0) { NextID = res.locals.UserIndexRecord['dragon_list'][res.locals.UserIndexRecord['dragon_list'].length - 1]['dragon_key_id'] + 1; }
				if (UpdateInfo['dragon_list'] == undefined) { UpdateInfo['dragon_list'] = []; }
				if (res.locals.UserIndexRecord['dragon_list'].length + UpdateInfo['dragon_list'].length < 1000) {
					const NewDragonData = DragonMap.CreateDragonFromGift(NextID, DrawData['id'], 1);
					UpdateInfo['dragon_list'].push(NewDragonData);
					res.locals.UserIndexRecord['dragon_list'].push(NewDragonData);
					if (res.locals.UserIndexRecord['dragon_reliability_list'].findIndex(x => x.dragon_id === DrawData['id']) == -1) {
						if (UpdateInfo['dragon_reliability_list'] == undefined) { UpdateInfo['dragon_reliability_list'] = []; }
						IsNew = true; const NewReliability = DragonMap.GenerateDragonReliability(DrawData['id']);
						UpdateInfo['dragon_reliability_list'].push(NewReliability); res.locals.UserIndexRecord['dragon_reliability_list'].push(NewReliability); }
					const DragonElement = DragonMap.GetDragonInfo(DrawData['id'], "element");
					const DragonBonusIndex = res.locals.UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'].findIndex(x => x.elemental_type == DragonElement);
					res.locals.UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'][DragonBonusIndex]['hp'] += 0.1;
					res.locals.UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'][DragonBonusIndex]['attack'] += 0.1;
					UpdateInfo['fort_bonus_list'] = res.locals.UserIndexRecord['fort_bonus_list'];
					NewEntityList.push({ 'entity_type': 7, 'entity_id': DrawData['id'] }); }
				break;
			case 2:
				DrawData = WyrmprintMap.DrawWyrmprintCorrect(SummonID, BannerList, IsTenfold, IsPlatinum);
				if (UpdateInfo['ability_crest_list'] == undefined) { UpdateInfo['ability_crest_list'] = []; }
				const PrintIndex = res.locals.UserIndexRecord['ability_crest_list'].findIndex(x => x.ability_crest_id == DrawData['id']);
				if (PrintIndex == -1) {
					IsNew = true; const PrintData = WyrmprintMap.CreateWyrmprintFromGift(DrawData['id']);
					UpdateInfo['ability_crest_list'].push(PrintData); res.locals.UserIndexRecord['ability_crest_list'].push(PrintData);
					NewEntityList.push({ 'entity_type': 39, 'entity_id': DrawData['id'] }); }
				else {
					if (res.locals.UserIndexRecord['ability_crest_list'][PrintIndex]['equipable_count'] < 4) {
						res.locals.UserIndexRecord['ability_crest_list'][PrintIndex]['equipable_count'] += 1;
						UpdateInfo['ability_crest_list'].push(res.locals.UserIndexRecord['ability_crest_list'][PrintIndex]); }
					else {
						switch(DrawData['rarity']) {
						case 2: DewPoints = 150; case 3: DewPoints = 300; break; case 4: DewPoints = 2500; break; case 5: DewPoints = 8000; break; } } }
				break;
		}
		
		let Template = {
			'entity_type': DrawData['entity_type'],
			'id': DrawData['id'],
			'rarity': DrawData['rarity'],
			'is_new': IsNew
		}
		if (DewPoints != 0) {
			const NewDewTotal = res.locals.UserIndexRecord['user_data']['dew_point'] + DewPoints;
			if (NewDewTotal > 3000000000) { res.locals.UserIndexRecord['user_data']['dew_point'] = 3000000000; }
			else { res.locals.UserIndexRecord['user_data']['dew_point'] = NewDewTotal; }
			UpdateInfo['user_data'] = res.locals.UserIndexRecord['user_data'];
			Template['dew_point'] = DewPoints; }
		SummonData.push(Template);
		i++;
	}
	if (SummonData.findIndex(x => x.rarity === 4) != -1) { PreSageEffectList[0] = Math.round(Math.random() * 2 + 1); PreSageEffectList[1] = 2; }
	if (SummonData.findIndex(x => x.rarity === 5) != -1) { PreSageEffectList[0] = Math.round(Math.random() * 4 + 1); PreSageEffectList[1] = 3; }
	if (MsgPackData['exec_type'] == 2) {
		let rl = 0; rli = 0; for (let rls in SummonData) {
			if (SummonData[rls]['rarity'] == 5) { rl += 1; rli = rls; } }
		if (rl == 1) {
			RDraw2 = Math.floor(Math.random() * 100);
			if (RDraw2 >= 94) {
				ReversalIndex = parseInt(rli); PreSageEffectList[0] = Math.round(Math.random() * 2 + 1); PreSageEffectList[1] = 2; } }
	}
	if (SigilPoint != 0) { UpdateInfo['summon_point_list'] = [ res.locals.UserSessionRecord['Wyrmsigil'][SigilIndex] ]; }
	res.locals.ResponseBody['data'] = {
		'reversal_effect_index': ReversalIndex,
		'presage_effect_list': PreSageEffectList,
		'result_unit_list': SummonData,
		'result_prize_list': [],
		'result_summon_point': SigilPoint,
		'summon_ticket_list': res.locals.UserIndexRecord['summon_ticket_list'],
		'update_data_list': UpdateInfo,
		'entity_result': { 'new_get_entity_list': NewEntityList }
	}
	res.locals.UserSessionRecord['Analytics']['SummonCount'] += ExecCount;
	const UserSummonIndex = res.locals.UserSessionRecord['SummonRecord']['UserSummonData'].findIndex(x => x.summon_id == SummonID);
	if (UserSummonIndex != -1) { res.locals.UserSessionRecord['SummonRecord']['UserSummonData']['summon_count'] += ExecCount; }
	else {
		const Template = {
			"summon_id": SummonID,
			"summon_count": ExecCount,
			"campaign_type": BannerData['campaign_type'],
			"free_count_rest": 0,
			"is_beginner_campaign": 0,
			"beginner_campaign_count_rest": 0,
			"consecution_campaign_count_rest": 0
		}
		res.locals.UserSessionRecord['SummonRecord']['UserSummonData'].push(Template);
	}
	
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));

Orchis.post([iOS_Version + "/ability_crest/get_ability_crest_set_list", Android_Version + "/ability_crest/get_ability_crest_set_list"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = { "ability_crest_set_list": res.locals.UserSessionRecord['WyrmprintSets'] }
	next();
}));
Orchis.post([iOS_Version + "/ability_crest/set_ability_crest_set", Android_Version + "/ability_crest/set_ability_crest_set"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const SetNumber = MsgPackData['ability_crest_set_no'];
	let RequestedName = MsgPackData['ability_crest_set_name'];
	if (RequestedName.length > 12) { RequestedName = RequestedName.substring(0, 12); }
	res.locals.ResponseBody['data'] = { 'update_data_list': {
		'ability_crest_set_list': [
			{
				'ability_crest_set_no': SetNumber,
				'ability_crest_set_name': RequestedName,
				'crest_slot_type_1_crest_id_1': MsgPackData['request_ability_crest_set_data']['crest_slot_type_1_crest_id_1'],
				'crest_slot_type_1_crest_id_2': MsgPackData['request_ability_crest_set_data']['crest_slot_type_1_crest_id_2'],
				'crest_slot_type_1_crest_id_3': MsgPackData['request_ability_crest_set_data']['crest_slot_type_1_crest_id_3'],
				'crest_slot_type_2_crest_id_1': MsgPackData['request_ability_crest_set_data']['crest_slot_type_2_crest_id_1'],
				'crest_slot_type_2_crest_id_2': MsgPackData['request_ability_crest_set_data']['crest_slot_type_2_crest_id_2'],
				'crest_slot_type_3_crest_id_1': MsgPackData['request_ability_crest_set_data']['crest_slot_type_3_crest_id_1'],
				'crest_slot_type_3_crest_id_2': MsgPackData['request_ability_crest_set_data']['crest_slot_type_3_crest_id_2'],
				'talisman_key_id': MsgPackData['request_ability_crest_set_data']['talisman_key_id']
			}
		]
	}}
	res.locals.UserSessionRecord['WyrmprintSets'][SetNumber - 1] = res.locals.ResponseBody['data']['update_data_list']['ability_crest_set_list'][0];
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/ability_crest/update_ability_crest_set_name", Android_Version + "/ability_crest/update_ability_crest_set_name"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const SetNumber = MsgPackData['ability_crest_set_no'];
	let RequestedName = MsgPackData['ability_crest_set_name'];
	if (RequestedName.length > 12) { RequestedName = RequestedName.substring(0, 12); }
	res.locals.UserSessionRecord['WyrmprintSets'][SetNumber - 1]['ability_crest_set_name'] = RequestedName;
	res.locals.ResponseBody['data']['update_data_list'] = {
		'ability_crest_set_list': [ res.locals.UserSessionRecord['WyrmprintSets'][SetNumber - 1] ]
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/ability_crest/buildup_piece", Android_Version + "/ability_crest/buildup_piece"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const PrintID = MsgPackData['ability_crest_id'];
	const PrintBuildup = MsgPackData['buildup_ability_crest_piece_list']; const Augments = MsgPackData['plus_count_parameters'];
	const NewData = WyrmprintMap.WyrmprintBuild(PrintID, PrintBuildup, Augments, res.locals.UserIndexRecord);
	res.locals.UserIndexRecord = NewData[2];
	res.locals.ResponseBody['data']['update_data_list'] = {
		'ability_crest_list': [ NewData[0] ],
		'user_data': res.locals.UserIndexRecord['user_data'],
		'material_list': NewData[1]
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/ability_crest/buildup_plus_count", Android_Version + "/ability_crest/buildup_plus_count"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const PrintID = MsgPackData['ability_crest_id'];
	const Augments = MsgPackData['plus_count_params_list']; const PrintIndex = res.locals.UserIndexRecord['ability_crest_list'].findIndex(x => x.ability_crest_id === PrintID);
	const PrintData = res.locals.UserIndexRecord['ability_crest_list'][PrintIndex]; 
	const NewData = WyrmprintMap.WyrmprintAugment(PrintID, Augments, res.locals.UserIndexRecord);
	res.locals.UserIndexRecord = NewData[2];
	res.locals.ResponseBody['data']['update_data_list'] = {
		'ability_crest_list': [ NewData[0] ],
		'user_data': res.locals.UserIndexRecord['user_data'],
		'material_list': NewData[1]
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/ability_crest/reset_plus_count", Android_Version + "/ability_crest/reset_plus_count"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const PrintID = MsgPackData['ability_crest_id']; let Type = MsgPackData['plus_count_type_list'][0];
	const PrintIndex = res.locals.UserIndexRecord['ability_crest_list'].findIndex(x => x.ability_crest_id == PrintID);
	let MatIndex = -1;
	if (Type == 1) {
		Type = "hp_plus_count";
		MatIndex = res.locals.UserIndexRecord['material_list'].findIndex(x => x.material_id == 122001001);
	}
	else if (Type == 2) {
		Type = "attack_plus_count";
		MatIndex = res.locals.UserIndexRecord['material_list'].findIndex(x => x.material_id == 123001001);
	}
	res.locals.UserIndexRecord['material_list'][MatIndex]['quantity'] += res.locals.UserIndexRecord['ability_crest_list'][PrintIndex][Type];
	res.locals.UserIndexRecord['ability_crest_list'][PrintIndex][Type] = 0;
	res.locals.ResponseBody['data']['update_data_list'] = {
		'ability_crest_list': [ res.locals.UserIndexRecord['ability_crest_list'][PrintIndex] ],
		'material_list': [ res.locals.UserIndexRecord['material_list'][MatIndex] ]
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/ability_crest/set_favorite", Android_Version + "/ability_crest/set_favorite"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const PrintID = MsgPackData['ability_crest_id']; const Favorite = MsgPackData['is_favorite'];
	const PrintIndex = res.locals.UserIndexRecord['ability_crest_list'].findIndex(x => x.ability_crest_id == PrintID);
	res.locals.UserIndexRecord['ability_crest_list'][PrintIndex]['is_favorite'] = Favorite;
	res.locals.ResponseBody['data']['update_data_list'] = {
		'ability_crest_list': [
			res.locals.UserIndexRecord['ability_crest_list'][PrintIndex]
		]
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));

Orchis.post([iOS_Version + "/chara/get_chara_unit_set", Android_Version + "/chara/get_chara_unit_set"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	res.locals.ResponseBody['data'] = {
		'chara_unit_set_list': [],
		'update_data_list': {}
	}
	for (let x in MsgPackData['chara_id_list']) {
		res.locals.ResponseBody['data']['chara_unit_set_list'][x] = {}
		res.locals.ResponseBody['data']['chara_unit_set_list'][x]['chara_id'] = MsgPackData['chara_id_list'][x];
		if (res.locals.UserSessionRecord['EquipmentSets'][String(MsgPackData['chara_id_list'][x])] == undefined) {
			res.locals.ResponseBody['data']['chara_unit_set_list'][x]['chara_unit_set_detail_list'] = []; }
		else {
			res.locals.ResponseBody['data']['chara_unit_set_list'][x]['chara_unit_set_detail_list'] = res.locals.UserSessionRecord['EquipmentSets'][String(MsgPackData['chara_id_list'][x])]; }
	}
	next();
}));
Orchis.post([iOS_Version + "/chara/set_chara_unit_set", Android_Version + "/chara/set_chara_unit_set"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const SetNo = MsgPackData['unit_set_no']; const SetName = MsgPackData['unit_set_name'];
	const CharaID = MsgPackData['chara_id']; const RequestData = MsgPackData['request_chara_unit_set_data'];
	if (res.locals.UserSessionRecord['EquipmentSets'][String(CharaID)] == undefined) {
		res.locals.UserSessionRecord['EquipmentSets'][String(CharaID)] = StaticData.DefaultEquipment();
	}
	res.locals.UserSessionRecord['EquipmentSets'][String(CharaID)][SetNo - 1] = {
		'unit_set_no': SetNo,
		'unit_set_name': SetName,
		'dragon_key_id': RequestData['dragon_key_id'],
		'weapon_body_id': RequestData['weapon_body_id'],
		'crest_slot_type_1_crest_id_1': RequestData['crest_slot_type_1_crest_id_1'],
		'crest_slot_type_1_crest_id_2': RequestData['crest_slot_type_1_crest_id_2'],
		'crest_slot_type_1_crest_id_3': RequestData['crest_slot_type_1_crest_id_3'],
		'crest_slot_type_2_crest_id_1': RequestData['crest_slot_type_2_crest_id_1'],
		'crest_slot_type_2_crest_id_2': RequestData['crest_slot_type_2_crest_id_2'],
		'crest_slot_type_3_crest_id_1': RequestData['crest_slot_type_3_crest_id_1'],
		'crest_slot_type_3_crest_id_2': RequestData['crest_slot_type_3_crest_id_2'],
		'talisman_key_id': RequestData['talisman_key_id']
	}
	
	res.locals.ResponseBody['data']['update_data_list'] = {
		'chara_unit_set_list': [
			{
				'chara_id': CharaID,
				'chara_unit_set_detail_list': res.locals.UserSessionRecord['EquipmentSets'][String(CharaID)]
			}
		]
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/chara/awake", Android_Version + "/chara/awake"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const CharacterID = MsgPackData['chara_id']; const Rarity = MsgPackData['next_rarity'];
	const CharacterIndex = res.locals.UserIndexRecord['chara_list'].findIndex(x => x.chara_id === CharacterID);
	if (MsgPackData['next_rarity'] == 4) { res.locals.UserIndexRecord['user_data']['dew_point'] -= 2500; }
	else if (MsgPackData['next_rarity'] == 5) { res.locals.UserIndexRecord['user_data']['dew_point'] -= 25000; }
	res.locals.UserIndexRecord['chara_list'][CharacterIndex]['rarity'] = MsgPackData['next_rarity'];
	res.locals.ResponseBody['data']['update_data_list'] = {
		'chara_list': [ res.locals.UserIndexRecord['chara_list'][CharacterIndex] ],
		'user_data': res.locals.UserIndexRecord['user_data']
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/chara/buildup", Android_Version + "/chara/buildup"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const CharacterID = MsgPackData['chara_id']; const GrowList = MsgPackData['material_list'];
	const CharacterIndex = res.locals.UserIndexRecord['chara_list'].findIndex(x => x.chara_id === CharacterID);
	const NewData = CharacterMap.LevelUp(CharacterID, GrowList, res.locals.UserIndexRecord['chara_list'][CharacterIndex]);
	let UpdateMaterial = [];
	for (let w in GrowList) {
		const MaterialIndex = res.locals.UserIndexRecord['material_list'].findIndex(x => x.material_id == GrowList[w]['id']);
		res.locals.UserIndexRecord['material_list'][MaterialIndex]['quantity'] -= GrowList[w]['quantity'];
		UpdateMaterial.push(res.locals.UserIndexRecord['material_list'][MaterialIndex]);
	}
	const BonusIndex = res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'].findIndex(x => x.elemental_type == CharacterMap.GetCharacterInfo(CharacterID, "elemental_type"));
	res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][BonusIndex]['hp'] += NewData[1];
	res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][BonusIndex]['attack'] += NewData[1];
	res.locals.ResponseBody['data']['update_data_list'] = {
		'chara_list': [ NewData[0] ],
		'user_data': res.locals.UserIndexRecord['user_data'],
		'material_list': UpdateMaterial
	}
	
	if (NewData[1] != 0.0) {
		res.locals.ResponseBody['data']['update_data_list']['fort_bonus_list'] = res.locals.UserIndexRecord['fort_bonus_list'];
	}
	res.locals.UserIndexRecord['chara_list'][CharacterIndex] = NewData[0];
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/chara/buildup_mana", Android_Version + "/chara/buildup_mana"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const CharacterID = MsgPackData['chara_id']; const MCList = MsgPackData['mana_circle_piece_id_list']; const IsConviction = MsgPackData['is_use_grow_material'];
	const CharacterIndex = res.locals.UserIndexRecord['chara_list'].findIndex(x => x.chara_id === CharacterID); const CharacterData = res.locals.UserIndexRecord['chara_list'][CharacterIndex];
	const NewData = CharacterMap.RaiseManaCircle(CharacterID, MCList, 0, CharacterData, res.locals.UserIndexRecord['unit_story_list'], IsConviction);
	let UpdateMaterial = [];
	for (let u in NewData[2]) {
		switch(NewData[2][u]['type']) {
			case 8:
				const MatIndex = res.locals.UserIndexRecord['material_list'].findIndex(x => x.material_id == NewData[2][u]['id']);
				res.locals.UserIndexRecord['material_list'][MatIndex]['quantity'] -= NewData[2][u]['count'];
				UpdateMaterial.push(res.locals.UserIndexRecord['material_list'][MatIndex]);
				break;
			case 14:
				if (NewData[2][u]['count'] != 0) { res.locals.UserIndexRecord['user_data']['dew_point'] -= NewData[2][u]['count']; }
				break;
			case 18:
				if (NewData[2][u]['count'] != 0) { res.locals.UserIndexRecord['user_data']['mana_point'] -= NewData[2][u]['count']; }
				break;
		}
	}
	const BonusIndex = res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'].findIndex(x => x.elemental_type == CharacterMap.GetCharacterInfo(CharacterID, "elemental_type"));
	res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][BonusIndex]['hp'] += NewData[1];
	res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][BonusIndex]['attack'] += NewData[1];
	res.locals.UserIndexRecord['chara_list'][CharacterIndex] = NewData[0];
	res.locals.ResponseBody['data']['update_data_list'] = {
		'user_data': res.locals.UserIndexRecord['user_data'],
		'chara_list': [ NewData[0] ],
		'material_list': UpdateMaterial,
		'unit_story_list': []
	}
	if (NewData[1] != 0.0) {
		res.locals.ResponseBody['data']['update_data_list']['fort_bonus_list'] = res.locals.UserIndexRecord['fort_bonus_list'];
	}
	if (NewData[3][0] != 0) {
		for (let s in NewData[3]) {
			const StoryIndex = res.locals.UserIndexRecord['unit_story_list'].findIndex(x => x.unit_story_id == NewData[3][s]['unit_story_id']);
			if (StoryIndex == -1) {
				res.locals.UserIndexRecord['unit_story_list'].push(NewData[3][s]);
				res.locals.ResponseBody['data']['update_data_list']['unit_story_list'].push(NewData[3][s]);
			}
		}
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/chara/limit_break", Android_Version + "/chara/limit_break"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const CharacterID = MsgPackData['chara_id'];
	const LimitBreakCount = MsgPackData['next_limit_break_count'];
	const CharacterIndex = res.locals.UserIndexRecord['chara_list'].findIndex(x => x.chara_id === CharacterID);
	res.locals.UserIndexRecord['chara_list'][CharacterIndex]['limit_break_count'] = LimitBreakCount;
	if (LimitBreakCount == 5) { res.locals.UserIndexRecord['chara_list'][CharacterIndex]['additional_max_level'] = 5; }
	const LimitBreakCost = CharacterMap.RaiseLimit(CharacterID, LimitBreakCount);
	let UpdateMaterial = [];
	for (let u in LimitBreakCost) {
		switch(LimitBreakCost[u]['type']) {
			case 8:
				if (LimitBreakCost[u]['id'] == 0) { break; }
				const MatIndex = res.locals.UserIndexRecord['material_list'].findIndex(x => x.material_id == LimitBreakCost[u]['id']);
				if (MatIndex == -1) { res.end(msgpack.pack({'data_headers':{'result_code':10010},'data':{'result_code':10010}})); return; }
				res.locals.UserIndexRecord['material_list'][MatIndex]['quantity'] -= LimitBreakCost[u]['quantity'];
				UpdateMaterial.push(res.locals.UserIndexRecord['material_list'][MatIndex]);
				break;
			case 14:
				if (LimitBreakCost[u]['quantity'] != 0) { res.locals.UserIndexRecord['user_data']['dew_point'] -= LimitBreakCost[u]['quantity']; }
				break;
			case 18:
				if (LimitBreakCost[u]['quantity'] != 0) { res.locals.UserIndexRecord['user_data']['mana_point'] -= LimitBreakCost[u]['quantity']; }
				break;
		}
	}
	res.locals.ResponseBody['data']['update_data_list'] = {
		'chara_list': [ res.locals.UserIndexRecord['chara_list'][CharacterIndex] ],
		'material_list': UpdateMaterial
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/chara/limit_break_and_buildup_mana", Android_Version + "/chara/limit_break_and_buildup_mana"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const CharacterID = MsgPackData['chara_id']; const MCList = MsgPackData['mana_circle_piece_id_list']; const IsConviction = MsgPackData['is_use_grow_material'];
	const CharacterIndex = res.locals.UserIndexRecord['chara_list'].findIndex(x => x.chara_id === CharacterID); const CharacterData = res.locals.UserIndexRecord['chara_list'][CharacterIndex];
	const LimitBreakCount = MsgPackData['next_limit_break_count']; const NewData = CharacterMap.RaiseManaCircle(CharacterID, MCList, LimitBreakCount, CharacterData, res.locals.UserIndexRecord['unit_story_list'], IsConviction);
	let UpdateMaterial = [];
	for (let u in NewData[2]) {
		switch(NewData[2][u]['type']) {
			case 8:
				if (NewData[2][u]['id'] == 0) { break; }
				const MatIndex = res.locals.UserIndexRecord['material_list'].findIndex(x => x.material_id == NewData[2][u]['id']);
				res.locals.UserIndexRecord['material_list'][MatIndex]['quantity'] -= NewData[2][u]['count'];
				UpdateMaterial.push(res.locals.UserIndexRecord['material_list'][MatIndex]);
				break;
			case 14:
				if (NewData[2][u]['count'] != 0) { res.locals.UserIndexRecord['user_data']['dew_point'] -= NewData[2][u]['count']; }
				break;
			case 18:
				if (NewData[2][u]['count'] != 0) { res.locals.UserIndexRecord['user_data']['mana_point'] -= NewData[2][u]['count']; }
				break;
		}
	}
	const BonusIndex = res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'].findIndex(x => x.elemental_type == CharacterMap.GetCharacterInfo(CharacterID, "elemental_type"));
	res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][BonusIndex]['hp'] += NewData[1];
	res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][BonusIndex]['attack'] += NewData[1];
	res.locals.UserIndexRecord['chara_list'][CharacterIndex] = NewData[0];
	res.locals.ResponseBody['data']['update_data_list'] = {
		'user_data': res.locals.UserIndexRecord['user_data'],
		'chara_list': [ NewData[0] ],
		'material_list': UpdateMaterial,
		'unit_story_list': []
	}
	if (NewData[1] != 0.0) {
		res.locals.ResponseBody['data']['update_data_list']['fort_bonus_list'] = res.locals.UserIndexRecord['fort_bonus_list'];
	}
	if (NewData[3][0] != 0) {
		for (let s in NewData[3]) {
			const StoryIndex = res.locals.UserIndexRecord['unit_story_list'].findIndex(x => x.unit_story_id == NewData[3][s]['unit_story_id']);
			if (StoryIndex == -1) {
				res.locals.UserIndexRecord['unit_story_list'].push(NewData[3][s]);
				res.locals.ResponseBody['data']['update_data_list']['unit_story_list'].push(NewData[3][s]);
			}
		}
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/chara/unlock_edit_skill", Android_Version + "/chara/unlock_edit_skill"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const CharacterID = MsgPackData['chara_id']; 
	const CharacterIndex = res.locals.UserIndexRecord['chara_list'].findIndex(x => x.chara_id == CharacterID);
	const CharacterData = res.locals.UserIndexRecord['chara_list'][CharacterIndex];
	const NewData = CharacterMap.UnlockSharedSkill(CharacterID, CharacterData);
	res.locals.UserIndexRecord['chara_list'][CharacterIndex] = NewData;
	res.locals.ResponseBody['data']['update_data_list'] = {
		'chara_list': [ NewData ],
		'material_list': []
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/chara/buildup_platinum", Android_Version + "/chara/buildup_platinum"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const CharacterID = MsgPackData['chara_id']; 
	const CharacterIndex = res.locals.UserIndexRecord['chara_list'].findIndex(x => x.chara_id === CharacterID); const CharacterData = res.locals.UserIndexRecord['chara_list'][CharacterIndex];
	const NewData = CharacterMap.RaiseOmnicite(CharacterID, CharacterData);
	const StoryData = CharacterMap.FillMissingStories(CharacterID, res.locals.UserIndexRecord);
	const BonusIndex = res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'].findIndex(x => x.elemental_type == CharacterMap.GetCharacterInfo(CharacterID, "elemental_type"));
	let y = 0; while (y < StoryData.length) { res.locals.UserIndexRecord['unit_story_list'].push(StoryData[y]); y++; } res.locals.UserIndexRecord['chara_list'][CharacterIndex] = NewData;
	if (CharacterData['mana_circle_piece_id_list'].length < 50 && CharacterMap.GetCharacterInfo(CharacterID, "has_spiral") == true) { 
		res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][BonusIndex]['hp'] += 0.4; res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][BonusIndex]['attack'] += 0.4; }
	else { res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][BonusIndex]['hp'] += 0.2; res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][BonusIndex]['attack'] += 0.2; }
	res.locals.ResponseBody['data']['update_data_list'] = {
		'chara_list': [ NewData ],
		'unit_story_list': StoryData,
		'fort_bonus_list': res.locals.UserIndexRecord['fort_bonus_list'],
		'user_data': res.locals.UserIndexRecord['user_data']
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/chara/reset_plus_count", Android_Version + "/chara/reset_plus_count"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const CharacterID = MsgPackData['chara_id']; let Type = MsgPackData['plus_count_type'];
	const CharacterIndex = res.locals.UserIndexRecord['chara_list'].findIndex(x => x.chara_id === CharacterID);
	if (Type == 1) { Type = "hp_plus_count"; } else if (Type == 2) { Type = "attack_plus_count"; }
	res.locals.UserIndexRecord['chara_list'][CharacterIndex][Type] = 0;
	res.locals.ResponseBody['data']['update_data_list'] = {
		'chara_list': [ res.locals.UserIndexRecord['chara_list'][CharacterIndex] ]
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));

Orchis.post([iOS_Version + "/dragon/sell", Android_Version + "/dragon/sell"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const DragonList = MsgPackData['dragon_key_id_list']; let i = 0;
	let DeletedDragonList = []; while (i < DragonList.length) { 
		const DragonIndex = res.locals.UserIndexRecord['dragon_list'].findIndex(x => x.dragon_key_id === DragonList[i]);
		const WorthCoins = DragonMap.GetDragonInfo(res.locals.UserIndexRecord['dragon_list'][DragonIndex]['dragon_id'], "sellcoin");
		const WorthWater = DragonMap.GetDragonInfo(res.locals.UserIndexRecord['dragon_list'][DragonIndex]['dragon_id'], "sellwater");
		res.locals.UserIndexRecord['dragon_list'].splice(DragonIndex, 1); 
		DeletedDragonList.push({ 'dragon_key_id': DragonList[i] }); 
		const NewCoinTotal = res.locals.UserIndexRecord['user_data']['coin'] + WorthCoins;
		if (NewCoinTotal > 3000000000) { res.locals.UserIndexRecord['user_data']['coin'] = 3000000000; }
		else { res.locals.UserIndexRecord['user_data']['coin'] += WorthCoins; }
		const NewDewTotal = res.locals.UserIndexRecord['user_data']['dew_point'] + WorthWater;
		if (NewDewTotal > 2000000000) { res.locals.UserIndexRecord['user_data']['dew_point'] = 2000000000; }
		else { res.locals.UserIndexRecord['user_data']['dew_point'] += WorthWater; } 
		i++; }
	res.locals.ResponseBody['data'] = {
		'delete_data_list': { 'delete_dragon_list': DeletedDragonList }, 
		'update_data_list': { 'user_data': res.locals.UserIndexRecord['user_data'] } }
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dragon/set_lock", Android_Version + "/dragon/set_lock"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const KeyID = MsgPackData['dragon_key_id']; const IsLock = MsgPackData['is_lock'];
	const DragonIndex = res.locals.UserIndexRecord['dragon_list'].findIndex(x => x.dragon_key_id === KeyID);
	res.locals.UserIndexRecord['dragon_list'][DragonIndex]['is_lock'] = IsLock;
	res.locals.ResponseBody['data']['update_data_list'] = {
		'dragon_list': [ res.locals.UserIndexRecord['dragon_list'][DragonIndex] ]
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dragon/limit_break", Android_Version + "/dragon/limit_break"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const KeyID = MsgPackData['base_dragon_key_id']; const GrowList = MsgPackData['limit_break_grow_list'];
	const DragonIndex = res.locals.UserIndexRecord['dragon_list'].findIndex(x => x.dragon_key_id === KeyID);
	const PreviousData = res.locals.UserIndexRecord['dragon_list'][DragonIndex]; const UpdateData = DragonMap.LimitBreakDragon(res.locals.UserIndexRecord, KeyID, PreviousData, GrowList, res.locals.UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album']);
	res.locals.ResponseBody['data'] = {
		'delete_data_list': {
			'delete_dragon_list': UpdateData[1]
		},
		'update_data_list': {
			'dragon_list': [ UpdateData[0] ],
			'material_list': UpdateData[2],
			'album_dragon_list': UpdateData[4]
		}
	}
	res.locals.UserIndexRecord = UpdateData[3];
	const NewIndex = res.locals.UserIndexRecord['dragon_list'].findIndex(x => x.dragon_key_id === KeyID); res.locals.UserIndexRecord['dragon_list'][NewIndex] = UpdateData[0];
	res.locals.UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'] = UpdateData[5];
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dragon/buildup", Android_Version + "/dragon/buildup"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const KeyID = MsgPackData['base_dragon_key_id']; const GrowList = MsgPackData['grow_material_list']; 
	const DragonIndex = res.locals.UserIndexRecord['dragon_list'].find(x => x.dragon_key_id === KeyID);
	const UpdateData = DragonMap.BuildDragon(KeyID, GrowList, DragonIndex, res.locals.UserIndexRecord);
	res.locals.ResponseBody['data'] = {
		'update_data_list': {
			'dragon_list': [ UpdateData[0] ],
			'material_list': UpdateData[3]
		},
		'delete_data_list': {
			'delete_dragon_list': UpdateData[1]
		}
	}
	await WriteIndexRecord(String(res.locals.UserSessionRecord['ViewerID']), UpdateData[2]);
	next();
}));
Orchis.post([iOS_Version + "/dragon/get_contact_data", Android_Version + "/dragon/get_contact_data"], async (req, res, next) => {
	res.locals.ResponseBody['data'] = { "shop_gift_list": res.locals.UserSessionRecord['FortData']['DragonGiftList'] }
	next();
});
Orchis.post([iOS_Version + "/dragon/reset_plus_count", Android_Version + "/dragon/reset_plus_count"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const KeyID = MsgPackData['dragon_key_id']; let Type = MsgPackData['plus_count_type'];
	const DragonIndex = res.locals.UserIndexRecord['dragon_list'].findIndex(x => x.dragon_key_id === KeyID);
	if (Type == 1) { Type = "hp_plus_count"; } else if (Type == 2) { Type = "attack_plus_count"; }
	res.locals.UserIndexRecord['dragon_list'][DragonIndex][Type] = 0;
	res.locals.ResponseBody['data']['update_data_list'] = { 'dragon_list': [ res.locals.UserIndexRecord['dragon_list'][DragonIndex] ] }
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dragon/buy_gift_to_send", Android_Version + "/dragon/buy_gift_to_send"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const DragonID = MsgPackData['dragon_id'];
	const DragonIndex = res.locals.UserIndexRecord['dragon_reliability_list'].findIndex(x => x.dragon_id == DragonID);
	
	const GiftID = MsgPackData['dragon_gift_id'];
	const GiftIndex = res.locals.UserSessionRecord['FortData']['DragonGiftList'].findIndex(x => x.dragon_gift_id == GiftID);
	res.locals.UserIndexRecord['user_data']['coin'] -= res.locals.UserSessionRecord['FortData']['DragonGiftList'][GiftIndex]['price'];
	res.locals.UserSessionRecord['FortData']['DragonGiftList'][GiftIndex]['is_buy'] = 0;
	
	const CurrentBond = res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex];
	
	const BondData = DragonMap.DragonGift(DragonID, GiftID, CurrentBond);
	res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex]['reliability_level'] = BondData[1][0];
	res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex]['reliability_total_exp'] = BondData[1][1];
	res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex]['last_contact_time'] = Math.floor(Date.now() / 1000);
	for (let s in BondData[3]) { res.locals.UserIndexRecord['unit_story_list'].push(BondData[3][s]); }
	const Parsed = DataManager.ItemParser(BondData[4], res.locals.UserSessionRecord, res.locals.UserIndexRecord, "entity");
	res.locals.UserSessionRecord = Parsed[0]; res.locals.UserIndexRecord = Parsed[1];
	res.locals.ResponseBody['data'] = {
		"shop_gift_list": res.locals.UserSessionRecord['FortData']['DragonGiftList'],
		"return_gift_list": BondData[4],
		"is_favorite": BondData[0],
		"reward_reliability_list": BondData[2],
		"dragon_contact_free_gift_count": res.locals.UserSessionRecord['FortData']['DragonGiftList'][0]['is_buy'],
		"update_data_list": {
			"user_data": res.locals.UserIndexRecord['user_data'],
			"dragon_reliability_list": [ res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex] ],
			"material_list": Parsed[2]['material_list'],
			"unit_story_list": BondData[3]
		}
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dragon/buy_gift_to_send_multiple", Android_Version + "/dragon/buy_gift_to_send_multiple"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const DragonID = MsgPackData['dragon_id']; const GiftList = MsgPackData['dragon_gift_id_list'];
	const DragonIndex = res.locals.UserIndexRecord['dragon_reliability_list'].findIndex(x => x.dragon_id == DragonID);
	const DragonFavorite = DragonMap.GetDragonInfo(DragonID, "favorite");
	const BondType = DragonMap.GetDragonInfo(DragonID, "bond_type");
	let NewStory = [];
	let Gifts = [];
	let MergedGifts = [];
	for (let x in GiftList) {
		const GiftID = GiftList[x];
		const GiftIndex = res.locals.UserSessionRecord['FortData']['DragonGiftList'].findIndex(x => x.dragon_gift_id == GiftID);
		res.locals.UserIndexRecord['user_data']['coin'] -= res.locals.UserSessionRecord['FortData']['DragonGiftList'][GiftIndex]['price'];
		res.locals.UserSessionRecord['FortData']['DragonGiftList'][GiftIndex]['is_buy'] = 0;
		
		const CurrentBond = res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex];
		
		const BondData = DragonMap.DragonGift(DragonID, GiftID, CurrentBond);
		let IsFavorite = 0;
		if (BondData[0] == 1) { IsFavorite = 1; }
		res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex]['reliability_level'] = BondData[1][0];
		res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex]['reliability_total_exp'] = BondData[1][1];
		res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex]['last_contact_time'] = Math.floor(Date.now() / 1000);
		let CycleBondReward = [];
		for (let r in BondData[2]) { CycleBondReward.push(BondData[2][r]); }
		for (let s in BondData[3]) {
			res.locals.UserIndexRecord['unit_story_list'].push(BondData[3][s]);
			NewStory.push(BondData[3][s]);
		}
		let CycleGift = [];
		for (let g in BondData[4]) {
			const InGifts = MergedGifts.findIndex(u => u.entity_id == BondData[4][g]['entity_id']);
			if (InGifts == -1) { MergedGifts.push(BondData[4][g]); }
			else { MergedGifts[InGifts]['entity_quantity'] += BondData[4][g]['entity_quantity']; }
			
			CycleGift.push(BondData[4][g]);
		}
		Gifts.push({
			'dragon_gift_id': GiftList[x],
			'return_gift_list': CycleGift,
			'is_favorite': IsFavorite,
			'reward_reliability_list': CycleBondReward
		});
	}
	const Parsed = DataManager.ItemParser(MergedGifts, res.locals.UserSessionRecord, res.locals.UserIndexRecord, "entity");
	res.locals.UserSessionRecord = Parsed[0]; res.locals.UserIndexRecord = Parsed[1];
	res.locals.ResponseBody['data'] = {
		"shop_gift_list": res.locals.UserSessionRecord['FortData']['DragonGiftList'],
		"dragon_gift_reward_list": Gifts,
		"dragon_contact_free_gift_count": res.locals.UserSessionRecord['FortData']['DragonGiftList'][0]['is_buy'],
		"update_data_list": {
			"user_data": res.locals.UserIndexRecord['user_data'],
			"dragon_reliability_list": [ res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex] ],
			"material_list": Parsed[2]['material_list'],
			"unit_story_list": NewStory
		}
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dragon/send_gift", Android_Version + "/dragon/send_gift"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const DragonID = MsgPackData['dragon_id'];
	const DragonIndex = res.locals.UserIndexRecord['dragon_reliability_list'].findIndex(x => x.dragon_id == DragonID);
	
	const GiftID = MsgPackData['dragon_gift_id'];
	const GiftIndex = res.locals.UserIndexRecord['dragon_gift_list'].findIndex(x => x.dragon_gift_id == GiftID);
	res.locals.UserIndexRecord['dragon_gift_list'][GiftIndex]['quantity'] -= 1;
	
	const CurrentBond = res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex];
	
	const BondData = DragonMap.DragonGift(DragonID, GiftID, CurrentBond);
	res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex]['reliability_level'] = BondData[1][0];
	res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex]['reliability_total_exp'] = BondData[1][1];
	res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex]['last_contact_time'] = Math.floor(Date.now() / 1000);
	let NewStory = [];
	for (let s in BondData[3]) { res.locals.UserIndexRecord['unit_story_list'].push(BondData[3][s]); }
	const Parsed = DataManager.ItemParser(BondData[4], res.locals.UserSessionRecord, res.locals.UserIndexRecord, "entity");
	res.locals.UserSessionRecord = Parsed[0]; res.locals.UserIndexRecord = Parsed[1];
	res.locals.ResponseBody['data'] = {
		"shop_gift_list": res.locals.UserSessionRecord['FortData']['DragonGiftList'],
		"return_gift_list": BondData[4],
		"is_favorite": BondData[0],
		"reward_reliability_list": BondData[2],
		"dragon_contact_free_gift_count": res.locals.UserSessionRecord['FortData']['DragonGiftList'][0]['is_buy'],
		"update_data_list": {
			"user_data": res.locals.UserIndexRecord['user_data'],
			"dragon_reliability_list": [ res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex] ],
			"material_list": Parsed[2]['material_list'],
			"unit_story_list": BondData[3],
			"dragon_gift_list": [ res.locals.UserIndexRecord['dragon_gift_list'][GiftIndex] ]
		}
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dragon/send_gift_multiple", Android_Version + "/dragon/send_gift_multiple"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const Count = MsgPackData['quantity'];
	const DragonID = MsgPackData['dragon_id'];
	const DragonIndex = res.locals.UserIndexRecord['dragon_reliability_list'].findIndex(x => x.dragon_id == DragonID);
	
	const GiftID = MsgPackData['dragon_gift_id'];
	const GiftIndex = res.locals.UserIndexRecord['dragon_gift_list'].findIndex(x => x.dragon_gift_id == GiftID);
	res.locals.UserIndexRecord['dragon_gift_list'][GiftIndex]['quantity'] -= Count;
	
	let NewStory = [];
	let Gifts = [];
	let BondReward = [];
	let IsFavorite = 0;
	let c = 0; while (c < Count) {
		const CurrentBond = res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex];
		
		const BondData = DragonMap.DragonGift(DragonID, GiftID, CurrentBond);
		if (BondData[0] == 1) { IsFavorite = 1; }
		res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex]['reliability_level'] = BondData[1][0];
		res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex]['reliability_total_exp'] = BondData[1][1];
		res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex]['last_contact_time'] = Math.floor(Date.now() / 1000);
		for (let r in BondData[2]) { BondReward.push(BondData[2][r]); }
		for (let s in BondData[3]) {
			res.locals.UserIndexRecord['unit_story_list'].push(BondData[3][s]);
			NewStory.push(BondData[3][s]);
		}
		for (let g in BondData[4]) {
			const InGifts = Gifts.findIndex(u => u.entity_id == BondData[4][g]['entity_id']);
			if (InGifts == -1) { Gifts.push(BondData[4][g]); }
			else { Gifts[InGifts]['entity_quantity'] += BondData[4][g]['entity_quantity']; }
		}
		c++;
	}
	const Parsed = DataManager.ItemParser(Gifts, res.locals.UserSessionRecord, res.locals.UserIndexRecord, "entity");
	res.locals.UserSessionRecord = Parsed[0]; res.locals.UserIndexRecord = Parsed[1];
	
	res.locals.ResponseBody['data'] = {
		"shop_gift_list": res.locals.UserSessionRecord['FortData']['DragonGiftList'],
		"return_gift_list": Gifts,
		"is_favorite": IsFavorite,
		"reward_reliability_list": BondReward,
		"dragon_contact_free_gift_count": res.locals.UserSessionRecord['FortData']['DragonGiftList'][0]['is_buy'],
		"update_data_list": {
			"user_data": res.locals.UserIndexRecord['user_data'],
			"dragon_reliability_list": [ res.locals.UserIndexRecord['dragon_reliability_list'][DragonIndex] ],
			"material_list": Parsed[2]['material_list'],
			"unit_story_list": NewStory,
			"dragon_gift_list": [ res.locals.UserIndexRecord['dragon_gift_list'][GiftIndex] ]
		}
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));

Orchis.post([iOS_Version + "/update/namechange", Android_Version + "/update/namechange"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	let RequestedName = MsgPackData['name'];
	if (RequestedName.length > 12) { RequestedName = RequestedName.substring(0, 12); }
	if (Filter.Validate(RequestedName)) { res.end(msgpack.pack({'data_headers':{"result_code": 1010},'data':{"result_code": 1010}})); return; }
	
	res.locals.ResponseBody['data'] = { 'checked_name': String(RequestedName) }
	res.locals.UserIndexRecord['user_data']['name'] = String(RequestedName);
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/emblem/get_list", Android_Version + "/emblem/get_list"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = { 'emblem_list': res.locals.UserSessionRecord['Epithet'] }
	next();
}));
Orchis.post([iOS_Version + "/emblem/set", Android_Version + "/emblem/set"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const RequestedEpithet = MsgPackData['emblem_id'];
	if (typeof RequestedEpithet != "number") { const Serialized = msgpack.pack({'data_headers':{'result_code':114},'data':{'result':114}}); res.set(ResHeaders(Serialized.length)); res.end(Serialized); }
	else {
		res.locals.UserIndexRecord['user_data']['emblem_id'] = RequestedEpithet;
		res.locals.ResponseBody['data'] = { 
			'result': 1,
			'update_data_list': { 'user_data': res.locals.UserIndexRecord['user_data'] } 
		}
		next();
	}
	res.locals.UpdatedIndexRecord = true;
}));
Orchis.post([iOS_Version + "/option/get_option", Android_Version + "/option/get_option"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = { 'option_data': res.locals.UserSessionRecord['SetOptions'] }
	next();
}));
Orchis.post([iOS_Version + "/option/set_option", Android_Version + "/option/set_option"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const UserOptions = MsgPackData['option_setting'];
	res.locals.ResponseBody['data'] = {
		'option_data': UserOptions
	}
	res.locals.UserSessionRecord['SetOptions'] = UserOptions;
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/push_notification/update_setting", Android_Version + "/push_notification/update_setting"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = { 'result': 1 }
	next();
}));

Orchis.post([iOS_Version + "/party/index", Android_Version + "/party/index"], async (req, res, next) => {
	res.locals.ResponseBody['data'] = {}
	next();
});
Orchis.post([iOS_Version + "/party/set_main_party_no", Android_Version + "/party/set_main_party_no"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const RequestedPartyNumber = MsgPackData['main_party_no'];
	res.locals.ResponseBody['data'] = { 'main_party_no': RequestedPartyNumber }
	res.locals.UserIndexRecord['user_data']['main_party_no'] = RequestedPartyNumber;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/party/set_party_setting", Android_Version + "/party/set_party_setting"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const PartyNumber = MsgPackData['party_no'];
	if (PartyNumber <= 0 || PartyNumber >= 55 || typeof PartyNumber === "string") { res.end(msgpack.pack({'data_headers':{'result_code':117},'data':{'result_code':117}})); return; }
	const PartyName = MsgPackData['party_name'];
	if (PartyName.length > 12) { PartyName == PartyName.substring(0, 12); }
	const PartyData = MsgPackData['request_party_setting_list'];
	res.locals.ResponseBody['data']['update_data_list'] = {
		'party_list': [
			{
				'party_no': PartyNumber,
				'party_name': PartyName,
				'party_setting_list': PartyData
			}
		]
	}
	res.locals.UserIndexRecord['party_list'][PartyNumber - 1]['party_name'] = PartyName;
	res.locals.UserIndexRecord['party_list'][PartyNumber - 1]['party_setting_list'] = PartyData;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/party/update_party_name", Android_Version + "/party/update_party_name"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const PartyNumber = MsgPackData['party_no'];
	const PartyName = MsgPackData['party_name'];
	if (PartyNumber <= 0 || PartyNumber >= 54 || typeof PartyNumber === "string") { res.end(msgpack.pack({'data_headers':{'result_code':117},'data':{'result_code':117}})); return; }
	if (PartyName.length > 12) { PartyName == PartyName.substring(0, 12); }
	if (Filter.Validate(PartyName)) { res.end(msgpack.pack({'data_headers':{"result_code": 1010},'data':{"result_code": 1010}})); return; }
	res.locals.ResponseBody['data']['update_data_list'] = {
		'party_list': [
			{
				'party_no': PartyNumber,
				'party_name': PartyName,
				'party_setting_list': res.locals.UserIndexRecord['party_list'][PartyNumber - 1]['party_setting_list']
			}
		]
	}
	res.locals.UserIndexRecord['party_list'][PartyNumber - 1]['party_name'] = PartyName;
	res.locals.UpdatedIndexRecord = true;
	next();
}));

Orchis.post([iOS_Version + "/friend/get_support_chara", Android_Version + "/friend/get_support_chara"], async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
		'result': 1,
		'setting_support': res.locals.UserSessionRecord['SupportCharacter']
	}
	next();
});
Orchis.post([iOS_Version + "/friend/get_support_chara_detail", Android_Version + "/friend/get_support_chara_detail"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const SupportViewerID = MsgPackData['support_viewer_id'];
	const SupportAccountRecord = await Fluoresce.Read("MasterAccountRecord", SupportViewerID);
	const SupportSessionRecord = await ReadSessionRecord(SupportAccountRecord['SessionID']);
	const SupportIndexRecord = await ReadIndexRecord(SupportViewerID);
	const SupportCharacterID = SupportSessionRecord['SupportCharacter']['chara_id'];
	const SupportCharacter = SupportIndexRecord['chara_list'].find(x => x.chara_id == SupportCharacterID);
	const SupportDragonID = SupportSessionRecord['SupportCharacter']['equip_dragon_key_id'];
	let SupportDragon = { 'dragon_key_id': 0 }; let DragonReliability = 0;
	if (SupportDragonID != 0) {
		SupportDragon = SupportIndexRecord['dragon_list'].find(x => x.dragon_key_id == SupportDragonID);
		DragonReliabilityIndex = SupportIndexRecord['dragon_reliability_list'].findIndex(x => x.dragon_id == SupportDragon['dragon_id']);
		DragonReliability = SupportIndexRecord['dragon_reliability_list'][DragonReliabilityIndex]['reliability_level'];
	}
	const SupportWeaponID = SupportSessionRecord['SupportCharacter']['equip_weapon_body_id'];
	let SupportWeapon = { 'weapon_body_id': 0 };
	if (SupportWeaponID != 0) { SupportWeapon = SupportIndexRecord['weapon_body_list'].find(x => x.weapon_body_id == SupportWeaponID); }
	const SupportTalismanID = SupportSessionRecord['SupportCharacter']['equip_talisman_key_id'];
	let SupportTalisman = { 'talisman_key_id': 0 };
	if (SupportTalismanID != 0) { SupportTalisman = SupportIndexRecord['talisman_list'].find(x => x.talisman_key_id == SupportTalismanID); }
	
	const SupportCrestSlotType1List = [{'ability_crest_id': 0},{'ability_crest_id': 0},{'ability_crest_id': 0}];
	const SupportCrestSlotType2List = [{'ability_crest_id': 0},{'ability_crest_id': 0}];
	const SupportCrestSlotType3List = [{'ability_crest_id': 0},{'ability_crest_id': 0}];
	if (SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_1_crest_id_1'] != 0) {
		SupportCrestSlotType1List[0] = SupportIndexRecord['ability_crest_list'].find(x => x.ability_crest_id == SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_1_crest_id_1']);
	}
	if (SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_1_crest_id_2'] != 0) {
		SupportCrestSlotType1List[1] = SupportIndexRecord['ability_crest_list'].find(x => x.ability_crest_id == SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_1_crest_id_2']);
	}
	if (SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_1_crest_id_3'] != 0) {
		SupportCrestSlotType1List[2] = SupportIndexRecord['ability_crest_list'].find(x => x.ability_crest_id == SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_1_crest_id_3']);
	}
	if (SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_2_crest_id_1'] != 0) {
		SupportCrestSlotType2List[0] = SupportIndexRecord['ability_crest_list'].find(x => x.ability_crest_id == SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_2_crest_id_1']);
	}
	if (SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_2_crest_id_2'] != 0) {
		SupportCrestSlotType2List[1] = SupportIndexRecord['ability_crest_list'].find(x => x.ability_crest_id == SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_2_crest_id_2']);
	}
	if (SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_3_crest_id_1'] != 0) {
		SupportCrestSlotType3List[0] = SupportIndexRecord['ability_crest_list'].find(x => x.ability_crest_id == SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_3_crest_id_1']);
	}
	if (SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_3_crest_id_2'] != 0) {
		SupportCrestSlotType3List[1] = SupportIndexRecord['ability_crest_list'].find(x => x.ability_crest_id == SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_3_crest_id_2']);
	}
	
	let Guild = { 'guild_id': 0 }
	if (SupportIndexRecord['user_guild_data'] != undefined && ['guild_id'] != 0) { Guild = SupportIndexRecord['user_guild_data']; }
	
	let FortBonusList = [];
	if (SupportIndexRecord['fort_bonus_list'] == undefined) { FortBonusList = StaticData.DefaultFortBonus; }
	
	res.locals.ResponseBody['data'] = {
		'support_user_data_detail': {
			'user_support_data': {
				'viewer_id': SupportViewerID,
				'name': SupportIndexRecord['user_data']['name'],
				'level': SupportIndexRecord['user_data']['level'],
				'last_login_date': SupportIndexRecord['user_data']['last_login_time'],
				'emblem_id': SupportIndexRecord['user_data']['emblem_id'],
				'max_party_power': SupportIndexRecord['party_power_data']['max_party_power'],
				'support_chara': SupportCharacter,
				'support_dragon': SupportDragon,
				'support_weapon_body': SupportWeapon,
				'support_talisman': SupportTalisman,
				'support_crest_slot_type_1_list': SupportCrestSlotType1List,
				'support_crest_slot_type_2_list': SupportCrestSlotType2List,
				'support_crest_slot_type_3_list': SupportCrestSlotType3List,
				'guild': Guild
			},
			'fort_bonus_list': FortBonusList,
			'mana_circle_piece_id_list': SupportCharacter['mana_circle_piece_id_list'],
			'dragon_reliability_level': DragonReliability,
			'is_friend': 1,
			'apply_send_status': 0
		}
	}
	next();
}));
Orchis.post([iOS_Version + "/friend/set_support_chara", Android_Version + "/friend/set_support_chara"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	res.locals.UserSessionRecord['SupportCharacter'] = {
		'last_active_time': Math.floor(Date.now() / 1000),
		'chara_id': MsgPackData['chara_id'],
		'equip_dragon_key_id': MsgPackData['dragon_key_id'],
		'equip_weapon_body_id': MsgPackData['weapon_body_id'],
		'equip_crest_slot_type_1_crest_id_1': MsgPackData['crest_slot_type_1_crest_id_1'],
		'equip_crest_slot_type_1_crest_id_2': MsgPackData['crest_slot_type_1_crest_id_2'],
		'equip_crest_slot_type_1_crest_id_3': MsgPackData['crest_slot_type_1_crest_id_3'],
		'equip_crest_slot_type_2_crest_id_1': MsgPackData['crest_slot_type_2_crest_id_1'],
		'equip_crest_slot_type_2_crest_id_2': MsgPackData['crest_slot_type_2_crest_id_2'],
		'equip_crest_slot_type_3_crest_id_1': MsgPackData['crest_slot_type_3_crest_id_1'],
		'equip_crest_slot_type_3_crest_id_2': MsgPackData['crest_slot_type_3_crest_id_2'],
		'equip_talisman_key_id': MsgPackData['talisman_key_id'],
		'user_level_group': 1
	}
	res.locals.ResponseBody['data'] = {
		'result': 1,
		'setting_support': res.locals.UserSessionRecord['SupportCharacter']
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));

Orchis.post([iOS_Version + "/quest/read_story", Android_Version + "/quest/read_story"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const ReadStory = MsgPackData['quest_story_id'];
	res.locals.ResponseBody['data'] = {
		'quest_story_reward_list': [],
		'update_data_list': {
			'quest_story_list': [
				{
					'quest_story_id': ReadStory,
					'state': 1
				}
			],
			'user_data': res.locals.UserIndexRecord['user_data'],
			'chara_list': [],
			'unit_story_list': []
		},
		'entity_result': {
			'new_get_entity_list': []
		}
	}
	const StoryIndex = res.locals.UserIndexRecord['quest_story_list'].findIndex(x => x.quest_story_id == ReadStory);
	if (StoryIndex == -1 || res.locals.UserIndexRecord['quest_story_list'][StoryIndex]['state'] != 1) {
		if (StoryIndex == -1) { res.locals.UserIndexRecord['quest_story_list'].push({'quest_story_id': ReadStory, 'state': 1}); }
		else if (res.locals.UserIndexRecord['quest_story_list'][StoryIndex]['state'] != 1) {
			res.locals.UserIndexRecord['quest_story_list'][StoryIndex]['state'] = 1;
		}
		
		if (QuestMap.HasRewardCharacter(ReadStory) == true) {
			const RewardData = QuestMap.RewardCharacter(ReadStory);
			const CharacterIndex = res.locals.UserIndexRecord['chara_list'].findIndex(x => x.chara_id == RewardData['entity_id']);
			if (CharacterIndex == -1) {
				res.locals.ResponseBody['data']['entity_result']['new_get_entity_list'].push(RewardData);
				res.locals.UserIndexRecord['chara_list'].push(CharacterMap.CreateCharacterFromGift(RewardData['entity_id'], 1));
				const NewIndex = res.locals.UserIndexRecord['chara_list'].findIndex(x => x.chara_id == RewardData['entity_id']);
				res.locals.UserIndexRecord['chara_list'][NewIndex]['is_unlock_edit_skill'] = 1;
				res.locals.ResponseBody['data']['update_data_list']['chara_list'] = [];
				res.locals.ResponseBody['data']['update_data_list']['chara_list'].push(res.locals.UserIndexRecord['chara_list'][NewIndex]);
				res.locals.ResponseBody['data']['quest_story_reward_list'].push({'entity_type': RewardData['entity_type'], 'entity_id': RewardData['entity_id'],
																  'entity_level': 1, 'entity_limit_break_count': 0, 'entity_quantity': 1});
				const UnitStoryData = CharacterMap.GenerateUnitStory(RewardData['entity_id']);
				if (UnitStoryData[0] != undefined) {
					res.locals.ResponseBody['data']['update_data_list']['unit_story_list'] = [];
					res.locals.ResponseBody['data']['update_data_list']['unit_story_list'].push(UnitStoryData[0], UnitStoryData[1], UnitStoryData[2], UnitStoryData[3], UnitStoryData[4]);
					res.locals.UserIndexRecord['unit_story_list'].push(UnitStoryData[0], UnitStoryData[1], UnitStoryData[2], UnitStoryData[3], UnitStoryData[4]); }
				const CharacterElement = CharacterMap.GetCharacterInfo(RewardData['entity_id'], 'elemental_type');
				const CharacterBonusIndex = res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'].findIndex(x => x.elemental_type == CharacterElement);
				res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][CharacterBonusIndex]['hp'] += 0.1;
				res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][CharacterBonusIndex]['attack'] += 0.1;
			}
		}
		if (QuestMap.HasRewardDragon(ReadStory) == true) {
			const RewardData = QuestMap.RewardDragon(ReadStory);
			res.locals.ResponseBody['data']['entity_result']['new_get_entity_list'].push(RewardData);
			let NextID = 39999;
			if (res.locals.UserIndexRecord['dragon_list'].length != 0) { NextID = res.locals.UserIndexRecord['dragon_list'][res.locals.UserIndexRecord['dragon_list'].length - 1]['dragon_key_id'] + 1; }
			res.locals.UpdatedSessionRecord = true;
			res.locals.UserIndexRecord['dragon_list'].push(DragonMap.CreateDragonFromGift(NextID, RewardData['entity_id'], 1));
			const NewIndex = res.locals.UserIndexRecord['dragon_list'].findIndex(x => x.dragon_key_id == NextID);
			res.locals.ResponseBody['data']['update_data_list']['dragon_list'] = [];
			res.locals.ResponseBody['data']['update_data_list']['dragon_list'].push(res.locals.UserIndexRecord['dragon_list'][NewIndex]);
			res.locals.ResponseBody['data']['quest_story_reward_list'].push({'entity_type': RewardData['entity_type'], 'entity_id': RewardData['entity_id'],
															  'entity_level': 1, 'entity_limit_break_count': 0, 'entity_quantity': 1});
			res.locals.ResponseBody['data']['update_data_list']['dragon_reliability_list'] = [];
			res.locals.ResponseBody['data']['update_data_list']['dragon_reliability_list'].push(DragonMap.GenerateDragonReliability(RewardData['entity_id']));
			res.locals.UserIndexRecord['dragon_reliability_list'].push(DragonMap.GenerateDragonReliability(RewardData['entity_id']));
			const DragonElement = DragonMap.GetDragonInfo(RewardData['entity_id'], "element");
			const DragonBonusIndex = res.locals.UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'].findIndex(x => x.elemental_type == DragonElement);
			res.locals.UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'][DragonBonusIndex]['hp'] += 0.1;
			res.locals.UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'][DragonBonusIndex]['attack'] += 0.1;
		}
		if (QuestMap.HasRewardFacility(ReadStory) == true) {
			res.locals.ResponseBody['data']['update_data_list']['build_list'] = [];
			const RewardData = QuestMap.RewardFacility(ReadStory);
			for (let z in RewardData) {
				const BuildID = res.locals.UserIndexRecord['build_list'][res.locals.UserIndexRecord['build_list'].length - 1]['build_id'] + 1;
				const Template = {
					"build_id": BuildID,
					"fort_plant_detail_id": parseInt(String(RewardData[z]) + "01"),
					"position_x": -1,
					"position_z": -1,
					"build_status": 0,
					"build_start_date": 0,
					"build_end_date": 0,
					"level": 1,
					"plant_id": RewardData[z],
					"is_new": 0,
					"remain_time": 0,
					"last_income_date": -1
				}
				res.locals.UserIndexRecord['build_list'].push(Template);
				res.locals.ResponseBody['data']['update_data_list']['build_list'].push(Template);
			}
		}
		
		const QuestBase = String(ReadStory).slice(0, 3);
		if (QuestBase == 204 || QuestBase == 214) {
			let EventType = "Raid"; if (QuestBase == 214) { EventType = "CLB01"; }
			const EventID = String(ReadStory).slice(0, 5);
			if (EventMap.EventFriendStory(EventID) == ReadStory) {
				const CharacterID = EventMap.EventInfoMap[EventID]['event_character'];
				if (res.locals.UserIndexRecord['chara_list'].findIndex(x => x.chara_id == CharacterID) == -1) {
					const CharacterData = CharacterMap.CreateCharacterFromGift(CharacterID, 1);
					const CharacterStoryData = CharacterMap.GenerateUnitStory(CharacterID);
					res.locals.UserIndexRecord['chara_list'].push(CharacterData);
					res.locals.UserIndexRecord['unit_story_list'].push(CharacterStoryData[0]);
					res.locals.ResponseBody['data']['update_data_list']['chara_list'].push(CharacterData);
					res.locals.ResponseBody['data']['update_data_list']['unit_story_list'].push(CharacterStoryData[0]);
					res.locals.ResponseBody['data']['entity_result']['new_get_entity_list'].push({ 'entity_type': 1, 'entity_id': CharacterID });
						
					if (!EventMap.EventFriendList[String(CharacterID)]['is_compendium']) {
						res.locals.UserSessionRecord['Event'][EventType][EventID]['Friendship'] = [
							{
								'chara_id': CharacterID,
								'total_point': 0,
								'is_temporary': 1
							}
						]
					}
					else {
						res.locals.UserSessionRecord['Event'][EventType][EventID]['Friendship'] = [
							{
								'chara_id': CharacterID,
								'total_point': 500,
								'is_temporary': 0
							}
						]
					}
				}
				res.locals.UpdatedSessionRecord = true;
				res.locals.UpdatedIndexRecord = true;
			}
		}
		
		res.locals.UserIndexRecord['user_data']['crystal'] += 25;
		res.locals.ResponseBody['data']['quest_story_reward_list'].push({"entity_type": 23, "entity_id": 0, "entity_quantity": 25});
		res.locals.ResponseBody['data']['update_data_list']['user_data'] = res.locals.UserIndexRecord['user_data'];
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/story/read", Android_Version + "/story/read"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const ReadStory = MsgPackData['unit_story_id'];
	const StoryIndex = res.locals.UserIndexRecord['unit_story_list'].findIndex(x => x.unit_story_id == ReadStory);
	let RewardList = [];
	if (StoryIndex == -1) {
		res.locals.UserIndexRecord['unit_story_list'].push({'unit_story_id': ReadStory, 'is_read': 1});
		RewardList.push({ "entity_type": 23, "entity_id": 0, "entity_quantity": 25 });
		res.locals.UserIndexRecord['user_data']['crystal'] += 25; }
	else if (res.locals.UserIndexRecord['unit_story_list'][StoryIndex]['is_read'] == 0) {
		res.locals.UserIndexRecord['unit_story_list'][StoryIndex]['is_read'] = 1;
		RewardList.push({ "entity_type": 23, "entity_id": 0, "entity_quantity": 25 });
		res.locals.UserIndexRecord['user_data']['crystal'] += 25; }
	res.locals.ResponseBody['data'] = {
		'unit_story_reward_list': RewardList,
		'update_data_list': {
			'unit_story_list': [{'unit_story_id': ReadStory, 'is_read': 1}],
			'user_data': res.locals.UserIndexRecord['user_data']
		}
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/castle_story/read", Android_Version + "/castle_story/read"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const ReadStory = MsgPackData['castle_story_id'];
	let RewardList = [];
	const StoryIndex = res.locals.UserIndexRecord.castle_story_list.findIndex(x => x.castle_story_id == ReadStory);
	if (StoryIndex == -1) {
		res.locals.UserIndexRecord['user_data']['crystal'] += 50;
		res.locals.UserIndexRecord['castle_story_list'].push({'castle_story_id': ReadStory, 'is_read': 1}); 
		RewardList.push({'entity_type': 23, 'entity_id': 0, 'entity_quantity': 50}); }
	else if (res.locals.UserIndexRecord['castle_story_list'][StoryIndex]['is_read'] = 0) {
		res.locals.UserIndexRecord['castle_story_list'][StoryIndex]['is_read'] = 1;
		res.locals.UserIndexRecord['user_data']['crystal'] += 50;
		RewardList.push({'entity_type': 23, 'entity_id': 0, 'entity_quantity': 50}); }
	res.locals.ResponseBody['data'] = {
		'castle_story_reward_list': RewardList,
		'update_data_list': {
			'castle_story_list': [
				{
					'castle_story_id': ReadStory,
					'is_read': 1
				}
			],
			'user_data': res.locals.UserIndexRecord['user_data']
		}
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/quest/open_treasure", Android_Version + "/quest/open_treasure"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const TreasureID = MsgPackData['quest_treasure_id'];
	const Reward = QuestMap.RewardChest(TreasureID);
	const Parsed = DataManager.ItemParser(Reward, res.locals.UserSessionRecord, res.locals.UserIndexRecord, "entity");
	res.locals.ResponseBody['data'] = {
		'quest_treasure_reward_list': Reward,
		'update_data_list': Parsed[2],
		'entity_result': Parsed[3]
	}
	const RewardIndex = res.locals.UserIndexRecord['quest_treasure_list'].findIndex(x => x.quest_treasure_id == TreasureID);
	if (RewardIndex == -1) {
		Parsed[1]['quest_treasure_list'].push({'quest_treasure_id': TreasureID});
		res.locals.ResponseBody['data']['update_data_list']['quest_treasure_list'] = [ {'quest_treasure_id': TreasureID} ];
	}
	await WriteIndexRecord(String(res.locals.UserSessionRecord['ViewerID']), Parsed[1]);
	next();
}));

Orchis.post([iOS_Version + "/fort/get_data", Android_Version + "/fort/get_data"], errorhandler(async (req, res, next) => {
	if (res.locals.UserIndexRecord['build_list'] == undefined) { res.locals.UserIndexRecord['build_list'] = IndexTools.MinimalFortData; }
	for (let x in res.locals.UserIndexRecord['build_list']) {
		const StartTime = res.locals.UserIndexRecord['build_list'][x]['build_start_date'];
		const EndTime = res.locals.UserIndexRecord['build_list'][x]['build_end_date'];
		let RemainTime = EndTime - StartTime;
		if (RemainTime < 0) { RemainTime = 0; }
		res.locals.UserIndexRecord['build_list'][x]['remain_time'] = RemainTime;
		
		if (res.locals.UserIndexRecord['build_list'][x]['last_income_date'] != -1) {
			res.locals.UserIndexRecord['build_list'][x]['last_income_time'] = Math.floor(Date.now() / 1000) - res.locals.UserIndexRecord['build_list'][x]['last_income_date'];
		}
	}
	res.locals.ResponseBody['data'] = {
		'build_list': res.locals.UserIndexRecord['build_list'],
		'fort_detail': res.locals.UserSessionRecord['FortData']['Smiths'],
		'fort_bonus_list': res.locals.UserIndexRecord['fort_bonus_list'],
		'production_rp': res.locals.UserSessionRecord['FortData']['Production']['RP_Production'],
		'production_df': res.locals.UserSessionRecord['FortData']['Production']['DF_Production'],
		'production_st': res.locals.UserSessionRecord['FortData']['Production']['ST_Production'],
		'dragon_contact_free_gift_count': 0,
		'current_server_time': Math.floor(Date.now() / 1000)
	}
	next();
}));
Orchis.post([iOS_Version + "/fort/get_multi_income", Android_Version + "/fort/get_multi_income"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); BuildIDList = MsgPackData['build_id_list'];
	res.locals.ResponseBody['data'] = {
		'result': 1,
		'harvest_build_list': [],
		'add_coin_list': [],
		'add_stamina_list': [],
		'is_over_coin': 0,
		'is_over_material': 0,
		'update_data_list': {}
	}
	let UpdateDataList = {};
	UpdateDataList['build_list'] = [];
	for (const i in BuildIDList) {
		const BuildID = BuildIDList[i];
		const BuildIndex = res.locals.UserIndexRecord['build_list'].findIndex(x => x.build_id == BuildID);
		if (BuildIndex == -1) { continue; }
		switch(res.locals.UserIndexRecord['build_list'][BuildIndex]['plant_id']) {
			case 100101:
				let StaminaAdd = 0;
				if (res.locals.UserIndexRecord['build_list'][BuildIndex]['last_income_time'] >= 259200) {
					StaminaAdd = Math.floor(res.locals.UserIndexRecord['build_list'][BuildIndex]['last_income_time'] / 1800);
					if (StaminaAdd == 0) { StaminaAdd = 1; }
				}
				if (res.locals.UserIndexRecord['stamina_single'] + StaminaAdd > 999) { res.locals.UserIndexRecord['stamina_single'] = 999; }
				else { res.locals.UserIndexRecord['user_data']['stamina_single'] += StaminaAdd; }
				res.locals.ResponseBody['data']['add_stamina_list'].push({'build_id': BuildID, 'add_stamina': StaminaAdd});
				UpdateDataList['user_data'] = res.locals.UserIndexRecord['user_data'];
				break;
			case 100201:
				let RupieGain = 100;
				if (res.locals.UserIndexRecord['build_list'][BuildIndex]['level'] < 10 && res.locals.UserIndexRecord['build_list'][BuildIndex]['level'] > 0) { RupieGain = 1000; }
				if (res.locals.UserIndexRecord['build_list'][BuildIndex]['level'] < 20 && res.locals.UserIndexRecord['build_list'][BuildIndex]['level'] > 10) { RupieGain = 2500; }
				if (res.locals.UserIndexRecord['build_list'][BuildIndex]['level'] < 30 && res.locals.UserIndexRecord['build_list'][BuildIndex]['level'] > 20) { RupieGain = 3000; }
				if (res.locals.UserIndexRecord['build_list'][BuildIndex]['level'] < 40 && res.locals.UserIndexRecord['build_list'][BuildIndex]['level'] > 30) { RupieGain = 4500; }
				if (res.locals.UserIndexRecord['build_list'][BuildIndex]['level'] > 40) { RupieGain = 6000; }
				res.locals.ResponseBody['data']['add_coin_list'].push({'build_id': BuildID, 'add_coin': RupieGain});
				const NewCoinTotal = res.locals.UserIndexRecord['user_data']['coin'] + RupieGain;
				if (NewCoinTotal > 3000000000) { res.locals.UserIndexRecord['user_data']['coin'] = 3000000000 }
				else { res.locals.UserIndexRecord['user_data']['coin'] += RupieGain; }
				UpdateDataList['user_data'] = res.locals.UserIndexRecord['user_data'];
				
				res.locals.DailyMissions.push(15070201);
				
				break;
			case 100301:
				if (UpdateDataList['material_list'] == undefined) { UpdateDataList['material_list'] = []; }
				let HarvestList = [];
				const Tier1 = Math.floor(Math.random() * 15 + 5);
				HarvestList.push({'material_id': 102001001, 'add_num': Tier1});
				const Tier1Index = res.locals.UserIndexRecord['material_list'].findIndex(x => x.material_id == 102001001);
				if (Tier1Index != -1) { res.locals.UserIndexRecord['material_list'][Tier1Index]['quantity'] += Tier1; 
										UpdateDataList['material_list'].push(res.locals.UserIndexRecord['material_list'][Tier1Index]); }
				else { res.locals.UserIndexRecord['material_list'].push({'material_id': 102001001, 'quantity': Tier1}); 
					   UpdateDataList['material_list'].push({'material_id': 102001001, 'quantity': Tier1}); }
				if (res.locals.UserIndexRecord['build_list'][BuildIndex]['level'] > 9) {
					const Tier2 = Math.floor(Math.random() * 19 + 1);
					HarvestList.push({'material_id': 102001002, 'add_num': Tier2});
					const Tier2Index = res.locals.UserIndexRecord['material_list'].findIndex(x => x.material_id == 102001002);
					if (Tier2Index != -1) { res.locals.UserIndexRecord['material_list'][Tier2Index]['quantity'] += Tier2;
											UpdateDataList['material_list'].push(res.locals.UserIndexRecord['material_list'][Tier2Index]); }
					else { res.locals.UserIndexRecord['material_list'].push({'material_id': 102001002, 'quantity': Tier2}); 
						   UpdateDataList['material_list'].push({'material_id': 102001002, 'quantity': Tier2}); }
				}
				if (res.locals.UserIndexRecord['build_list'][BuildIndex]['level'] > 19) {
					const Tier3 = Math.floor(Math.random() * 19 + 1);
					HarvestList.push({'material_id': 102001003, 'add_num': Tier3});
					const Tier3Index = res.locals.UserIndexRecord['material_list'].findIndex(x => x.material_id == 102001003);
					if (Tier3Index != -1) { res.locals.UserIndexRecord['material_list'][Tier3Index]['quantity'] += Tier3; 
											UpdateDataList['material_list'].push(res.locals.UserIndexRecord['material_list'][Tier3Index]); }
					else { res.locals.UserIndexRecord['material_list'].push({'material_id': 102001003, 'quantity': Tier3});
						   UpdateDataList['material_list'].push({'material_id': 102001003, 'quantity': Tier3}); }
				}
				res.locals.ResponseBody['data']['harvest_build_list'].push({ 'build_id': BuildID, 'add_harvest_list': HarvestList });
				break;
		}
		res.locals.UserIndexRecord['build_list'][BuildIndex]['last_income_date'] = Math.floor(Date.now() / 1000);
		res.locals.UserIndexRecord['build_list'][BuildIndex]['last_income_time'] = 0;
		UpdateDataList['build_list'].push(res.locals.UserIndexRecord['build_list'][BuildIndex]);
	}
	res.locals.ResponseBody['data']['update_data_list'] = UpdateDataList;
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/fort/move", Android_Version + "/fort/move"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); BuildID = MsgPackData['build_id'];
	NewX = MsgPackData['after_position_x']; NewZ = MsgPackData['after_position_z'];
	BuildIndex = res.locals.UserIndexRecord['build_list'].findIndex(x => x.build_id == BuildID);
	res.locals.UserIndexRecord['build_list'][BuildIndex]['position_x'] = NewX; res.locals.UserIndexRecord['build_list'][BuildIndex]['position_z'] = NewZ;
	res.locals.ResponseBody['data'] = {
		'result': 1, 'build_id': BuildID, 'fort_bonus_list': res.locals.UserIndexRecord['fort_bonus_list'],
		'update_data_list': { 'build_list': [ res.locals.UserIndexRecord['build_list'][BuildIndex] ] }
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/fort/build_start", Android_Version + "/fort/build_start"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const FacilityID = MsgPackData['fort_plant_id'];
	let DetailID = parseInt(String(FacilityID) + "01");
	let BuildStatus = 1;
	let BuildStartTime = Math.floor(Date.now() / 1000);
	if (String(FacilityID).slice(0, 5) == "10070" || String(FacilityID).slice(0, 5) == "10090") {
		DetailID = parseInt(String(FacilityID) + "00");
		BuildStatus = 0;
		BuildStartTime = 0;
	}
	const UpgradeTime = FortMap.GetFacilityData(DetailID, "level_up_time"); 
	const UpgradeCostCoin = FortMap.GetFacilityData(DetailID, "level_up_rupies");
	const UpgradeCostMaterial = FortMap.GetFacilityData(DetailID, "level_up_materials");
	let UpdateInfo = {}; UpdateInfo['build_list'] = [];
	const BuildID = res.locals.UserIndexRecord['build_list'][res.locals.UserIndexRecord['build_list'].length - 1]['build_id'] + 1;
	const BuildTemplate = {
		'build_id': BuildID,
		'fort_plant_detail_id': DetailID,
		'position_x': MsgPackData['position_x'],
		'position_z': MsgPackData['position_z'],
		'build_status': BuildStatus,
		'build_start_date': BuildStartTime,
		'build_end_date': BuildStartTime + UpgradeTime,
		'level': 0,
		'plant_id': FacilityID,
		'is_new': 0,
		'remain_time': UpgradeTime,
		'last_income_date': -1
	}
	UpdateInfo['build_list'].push(BuildTemplate);
	res.locals.UserIndexRecord['build_list'].push(BuildTemplate);
	res.locals.UserIndexRecord['user_data']['coin'] -= UpgradeCostCoin;
	UpdateInfo['user_data'] = res.locals.UserIndexRecord['user_data'];
	if (UpgradeCostMaterial != undefined) {
		UpdateInfo['material_list'] = [];
		for (let y in UpgradeCostMaterial) {
			const MaterialIndex = res.locals.UserIndexRecord['material_list'].findIndex(x => x.material_id == UpgradeCostMaterial[y]['entity_id']);
			if (MaterialIndex == -1) { res.end(msgpack.pack({'data_headers':{'result_code':10010},'data':{'result_code':10010}})); return; }
			res.locals.UserIndexRecord['material_list'][MaterialIndex]['quantity'] -= UpgradeCostMaterial[y]['quantity'];
			UpdateInfo['material_list'].push(res.locals.UserIndexRecord['material_list'][MaterialIndex]);
		}
	}
	if (FortMap.GetFacilityData(DetailID, "cost_max_time") != 0) { res.locals.UserSessionRecord['FortData']['Smiths']['working_carpenter_num'] += 1; }
	res.locals.ResponseBody['data'] = {
		'result': 1,
		'levelup_start_date': Math.floor(Date.now() / 1000),
		'levelup_end_date': Math.floor(Date.now() / 1000) + UpgradeTime,
		'remain_time': UpgradeTime,
		'build_id': BuildID,
		'fort_detail': res.locals.UserSessionRecord['FortData']['Smiths'],
		'update_data_list': UpdateInfo
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/fort/build_end", Android_Version + "/fort/build_end"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const BuildID = MsgPackData['build_id'];
	const BuildIndex = res.locals.UserIndexRecord['build_list'].findIndex(x => x.build_id == BuildID);
	const FacilityID = res.locals.UserIndexRecord['build_list'][BuildIndex]['plant_id'];
	res.locals.UserIndexRecord['build_list'][BuildIndex]['level'] += 1;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_status'] = 0;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_start_date'] = 0;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_end_date'] = 0;
	res.locals.UserIndexRecord['fort_bonus_list'] = FortMap.GenerateBonuses(res.locals.UserIndexRecord);
	if (FacilityID == 100101 || FacilityID == 100201 || FacilityID == 100301) {
		res.locals.UserIndexRecord['build_list'][BuildIndex]['last_income_date'] = Math.floor(Date.now() / 1000);
		res.locals.UserIndexRecord['build_list'][BuildIndex]['last_income_time'] = 0;
	}
	let UpdateInfo = {}; UpdateInfo['build_list'] = [];
	UpdateInfo['build_list'].push(res.locals.UserIndexRecord['build_list'][BuildIndex]);
	if (res.locals.UserSessionRecord['FortData']['Smiths']['working_carpenter_num'] > 0) {
		res.locals.UserSessionRecord['FortData']['Smiths']['working_carpenter_num'] -= 1;
	}
	res.locals.ResponseBody['data'] = {
		'result': 1,
		'build_id': BuildID,
		'fort_detail': res.locals.UserSessionRecord['FortData']['Smiths'],
		'production_rp': res.locals.UserSessionRecord['FortData']['Production']['RP_Production'],
		'production_df': res.locals.UserSessionRecord['FortData']['Production']['DF_Production'],
		'production_st': res.locals.UserSessionRecord['FortData']['Production']['ST_Production'],
		'fort_bonus_list': res.locals.UserIndexRecord['fort_bonus_list'],
		'update_data_list': UpdateInfo
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/fort/build_at_once", Android_Version + "/fort/build_at_once"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const BuildID = MsgPackData['build_id'];
	const PaymentType = MsgPackData['payment_type'];
	const BuildIndex = res.locals.UserIndexRecord['build_list'].findIndex(x => x.build_id == BuildID);
	res.locals.UserIndexRecord['build_list'][BuildIndex]['level'] += 1;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_status'] = 0;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_start_date'] = 0;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_end_date'] = 0;
	res.locals.UserIndexRecord['fort_bonus_list'] = FortMap.GenerateBonuses(res.locals.UserIndexRecord);
	let UpdateInfo = {}; UpdateInfo['build_list'] = []; UpdateInfo['user_data'] = res.locals.UserIndexRecord['user_data'];
	UpdateInfo['build_list'].push(res.locals.UserIndexRecord['build_list'][BuildIndex]);
	if (res.locals.UserSessionRecord['FortData']['Smiths']['working_carpenter_num'] > 0) {
		res.locals.UserSessionRecord['FortData']['Smiths']['working_carpenter_num'] -= 1;
	}
	res.locals.ResponseBody['data'] = {
		'result': 1,
		'build_id': BuildID,
		'fort_detail': res.locals.UserSessionRecord['FortData']['Smiths'],
		'production_rp': res.locals.UserSessionRecord['FortData']['Production']['RP_Production'],
		'production_df': res.locals.UserSessionRecord['FortData']['Production']['DF_Production'],
		'production_st': res.locals.UserSessionRecord['FortData']['Production']['ST_Production'],
		'fort_bonus_list': res.locals.UserIndexRecord['fort_bonus_list'],
		'update_data_list': UpdateInfo
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/fort/build_cancel", Android_Version + "/fort/build_cancel"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const BuildID = MsgPackData['build_id'];
	const BuildIndex = res.locals.UserIndexRecord['build_list'].findIndex(x => x.build_id == BuildID);
	const FacilityID = res.locals.UserIndexRecord['build_list'][BuildIndex]['fort_plant_detail_id'];
	const UpgradeCostCoin = FortMap.GetFacilityData(FacilityID, "level_up_rupies");
	const UpgradeCostMaterial = FortMap.GetFacilityData(FacilityID, "level_up_materials");
	res.locals.UserIndexRecord['user_data']['coin'] += UpgradeCostCoin;
	if (UpgradeCostMaterial != undefined) {
		for (let y in UpgradeCostMaterial) {
			const MaterialIndex = res.locals.UserIndexRecord['material_list'].findIndex(x => x.material_id == UpgradeCostMaterial[y]['entity_id']);
			res.locals.UserIndexRecord['material_list'][MaterialIndex]['quantity'] += UpgradeCostMaterial[y]['quantity'];
		}
	}
	res.locals.UserIndexRecord['build_list'].splice(BuildIndex);
	res.locals.UserSessionRecord['FortData']['Smiths']['working_carpenter_num'] -= 1;
	res.locals.ResponseBody['data'] = {
		'result': 1,
		'build_id': BuildID,
		'fort_detail': res.locals.UserSessionRecord['FortData']['Smiths'],
		'update_data_list': {
			'build_list': []
		}
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/fort/levelup_start", Android_Version + "/fort/levelup_start"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const BuildID = MsgPackData['build_id'];
	const BuildIndex = res.locals.UserIndexRecord['build_list'].findIndex(x => x.build_id == BuildID);
	const FacilityID = res.locals.UserIndexRecord['build_list'][BuildIndex]['fort_plant_detail_id'];
	const NextFacilityID = FortMap.GetFacilityData(FacilityID, "next_level_id");
	if (NextFacilityID == 0) { res.end(msgpack.pack({'data_headers':{'result_code':10010},'data':{'result_code':10010}})); return; }
	const UpgradeTime = FortMap.GetFacilityData(NextFacilityID, "level_up_time");
	const UpgradeCostCoin = FortMap.GetFacilityData(NextFacilityID, "level_up_rupies");
	const UpgradeCostMaterial = FortMap.GetFacilityData(NextFacilityID, "level_up_materials");
	let UpdateInfo = {};
	res.locals.UserIndexRecord['user_data']['coin'] -= UpgradeCostCoin;
	UpdateInfo['user_data'] = res.locals.UserIndexRecord['user_data'];
	UpdateInfo['material_list'] = [];
	for (let y in UpgradeCostMaterial) {
		const MaterialIndex = res.locals.UserIndexRecord['material_list'].findIndex(x => x.material_id == UpgradeCostMaterial[y]['entity_id']);
		if (MaterialIndex == -1) { res.end(msgpack.pack({'data_headers':{'result_code':10010},'data':{'result_code':10010}})); return; }
		res.locals.UserIndexRecord['material_list'][MaterialIndex]['quantity'] -= UpgradeCostMaterial[y]['quantity'];
		UpdateInfo['material_list'].push(res.locals.UserIndexRecord['material_list'][MaterialIndex]);
	}
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_status'] = 2;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_start_date'] = Math.floor(Date.now() / 1000);
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_end_date'] = Math.floor(Date.now() / 1000) + UpgradeTime;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['remain_time'] = UpgradeTime;
	UpdateInfo['build_list'] = [ res.locals.UserIndexRecord['build_list'][BuildIndex] ];
	res.locals.UserSessionRecord['FortData']['Smiths']['working_carpenter_num'] += 1;
	res.locals.ResponseBody['data'] = {
		'result': 1,
		'levelup_start_date': Math.floor(Date.now() / 1000),
		'levelup_end_date': Math.floor(Date.now() / 1000) + UpgradeTime,
		'remain_time': UpgradeTime,
		'build_id': BuildID,
		'fort_detail': res.locals.UserSessionRecord['FortData']['Smiths'],
		'update_data_list': UpdateInfo
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/fort/levelup_end", Android_Version + "/fort/levelup_end"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const BuildID = MsgPackData['build_id'];
	const BuildIndex = res.locals.UserIndexRecord['build_list'].findIndex(x => x.build_id == BuildID);
	const FacilityID = res.locals.UserIndexRecord['build_list'][BuildIndex]['fort_plant_detail_id'];
	const NextFacilityID = FortMap.GetFacilityData(FacilityID, "next_level_id");
	res.locals.UserIndexRecord['build_list'][BuildIndex]['fort_plant_detail_id'] = NextFacilityID;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['level'] += 1;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_status'] = 0;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_start_date'] = 0;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_end_date'] = 0;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['remain_time'] = 0;
	res.locals.UserIndexRecord['fort_bonus_list'] = FortMap.GenerateBonuses(res.locals.UserIndexRecord);
	if (res.locals.UserSessionRecord['FortData']['Smiths']['working_carpenter_num'] > 0) {
		res.locals.UserSessionRecord['FortData']['Smiths']['working_carpenter_num'] -= 1; }
	res.locals.ResponseBody['data'] = {
		'result': 1,
		'build_id': BuildID,
		'fort_detail': res.locals.UserSessionRecord['FortData']['Smiths'],
		'fort_bonus_list': res.locals.UserIndexRecord['fort_bonus_list'],
		'production_rp': res.locals.UserSessionRecord['FortData']['Production']['RP_Production'],
		'production_df': res.locals.UserSessionRecord['FortData']['Production']['DF_Production'],
		'production_st': res.locals.UserSessionRecord['FortData']['Production']['ST_Production'],
		'update_data_list': {
			'user_data': res.locals.UserIndexRecord['user_data'],
			'build_list': [ res.locals.UserIndexRecord['build_list'][BuildIndex] ]
		}
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/fort/levelup_at_once", Android_Version + "/fort/levelup_at_once"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const BuildID = MsgPackData['build_id'];
	const PaymentType = MsgPackData['payment_type'];
	const BuildIndex = res.locals.UserIndexRecord['build_list'].findIndex(x => x.build_id == BuildID);
	const FacilityID = res.locals.UserIndexRecord['build_list'][BuildIndex]['fort_plant_detail_id'];
	const NextFacilityID = FortMap.GetFacilityData(FacilityID, "next_level_id");
	res.locals.UserIndexRecord['build_list'][BuildIndex]['fort_plant_detail_id'] = NextFacilityID;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['level'] += 1;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_status'] = 0;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_start_date'] = 0;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_end_date'] = 0;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['remain_time'] = 0;
	res.locals.UserIndexRecord['fort_bonus_list'] = FortMap.GenerateBonuses(res.locals.UserIndexRecord);
	if (res.locals.UserSessionRecord['FortData']['Smiths']['working_carpenter_num'] > 0) {
		res.locals.UserSessionRecord['FortData']['Smiths']['working_carpenter_num'] -= 1; }
	res.locals.ResponseBody['data'] = {
		'result': 1,
		'build_id': BuildID,
		'fort_detail': res.locals.UserSessionRecord['FortData']['Smiths'],
		'fort_bonus_list': res.locals.UserIndexRecord['fort_bonus_list'],
		'production_rp': res.locals.UserSessionRecord['FortData']['Production']['RP_Production'],
		'production_df': res.locals.UserSessionRecord['FortData']['Production']['DF_Production'],
		'production_st': res.locals.UserSessionRecord['FortData']['Production']['ST_Production'],
		'update_data_list': {
			'user_data': res.locals.UserIndexRecord['user_data'],
			'build_list': [ res.locals.UserIndexRecord['build_list'][BuildIndex] ]
		}
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/fort/levelup_cancel", Android_Version + "/fort/levelup_cancel"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const BuildID = MsgPackData['build_id'];
	const BuildIndex = res.locals.UserIndexRecord['build_list'].findIndex(x => x.build_id == BuildID);
	const FacilityID = res.locals.UserIndexRecord['build_list'][BuildIndex]['fort_plant_detail_id'];
	const NextFacilityID = FortMap.GetFacilityData(FacilityID, "next_level_id");
	const UpgradeCostCoin = FortMap.GetFacilityData(NextFacilityID, "level_up_rupies");
	const UpgradeCostMaterial = FortMap.GetFacilityData(NextFacilityID, "level_up_materials");
	res.locals.UserIndexRecord['user_data']['coin'] += UpgradeCostCoin;
	if (UpgradeCostMaterial != undefined) {
		for (let y in UpgradeCostMaterial) {
			const MaterialIndex = res.locals.UserIndexRecord['material_list'].findIndex(x => x.material_id == UpgradeCostMaterial[y]['entity_id']);
			res.locals.UserIndexRecord['material_list'][MaterialIndex]['quantity'] += UpgradeCostMaterial[y]['quantity'];
		}
	}
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_status'] = 0;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_start_date'] = 0;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['build_end_date'] = 0;
	res.locals.UserIndexRecord['build_list'][BuildIndex]['remain_time'] = 0;
	res.locals.UserSessionRecord['FortData']['Smiths']['working_carpenter_num'] -= 1;
	res.locals.ResponseBody['data'] = {
		'result': 1,
		'build_id': BuildID,
		'fort_detail': res.locals.UserSessionRecord['FortData']['Smiths'],
		'update_data_list': {
			'build_list': [ res.locals.UserIndexRecord['build_list'][BuildIndex] ]
		}
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/fort/add_carpenter", Android_Version + "/fort/add_carpenter"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	res.locals.UserSessionRecord['FortData']['Smiths']['carpenter_num'] += 1;
	res.locals.ResponseBody['data'] = {
		'result': 1,
		'fort_detail': res.locals.UserSessionRecord['FortData']['Smiths'],
		'update_data_list': {
			'build_list': [ res.locals.UserIndexRecord['user_data'] ]
		}
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));

Orchis.post([iOS_Version + "/present/get_present_list", Android_Version + "/present/get_present_list"], errorhandler(async (req, res, next) => {
	const MsgPackData = req.body; const IsLimit = MsgPackData['is_limit'];
	res.locals.ResponseBody['data'] = { 
		'update_data_list': {
			'present_notice': {
				'present_count': res.locals.UserSessionRecord['GiftRecord']['GiftNormalList'].length,
				'present_limit_count': res.locals.UserSessionRecord['GiftRecord']['GiftLimitedList'].length
			}
		}
	}
	if (IsLimit) { res.locals.ResponseBody['data']['present_limit_list'] = res.locals.UserSessionRecord['GiftRecord']['GiftLimitedList']; }
	else { res.locals.ResponseBody['data']['present_list'] = res.locals.UserSessionRecord['GiftRecord']['GiftNormalList']; }
	next();
}));
Orchis.post([iOS_Version + "/present/receive", Android_Version + "/present/receive"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const IDList = MsgPackData['present_id_list']; const IsLimit = MsgPackData['is_limit'];
	let ItemTable = [];
	let GiftRecord = res.locals.UserSessionRecord['GiftRecord'];
	if (IsLimit == 1) {
		for (let p in IDList) {
			const Index = GiftRecord['GiftLimitedList'].findIndex(x => x.present_id == IDList[p]);
			ItemTable.push({
				'entity_type': GiftRecord['GiftLimitedList'][Index]['entity_type'],
				'entity_id': GiftRecord['GiftLimitedList'][Index]['entity_id'],
				'entity_quantity': GiftRecord['GiftLimitedList'][Index]['entity_quantity']
			});
			GiftRecord['GiftHistory'].unshift({
				'id': GiftRecord['GiftLimitedList'][Index]['present_id'],
				'viewer_id': res.locals.UserSessionRecord['ViewerID'],
				'entity_type': GiftRecord['GiftLimitedList'][Index]['entity_type'],
				'entity_id': GiftRecord['GiftLimitedList'][Index]['entity_id'],
				'entity_quantity': GiftRecord['GiftLimitedList'][Index]['entity_quantity'],
				'entity_level': GiftRecord['GiftLimitedList'][Index]['entity_level'],
				'entity_limit_break_count': GiftRecord['GiftLimitedList'][Index]['entity_limit_break_count'],
				'entity_status_plus_count': GiftRecord['GiftLimitedList'][Index]['entity_status_plus_count'],
				'message_id': GiftRecord['GiftLimitedList'][Index]['message_id'],
				'message_param_value_1': GiftRecord['GiftLimitedList'][Index]['message_param_value_1'],
				'message_param_value_2': GiftRecord['GiftLimitedList'][Index]['message_param_value_2'],
				'message_param_value_3': GiftRecord['GiftLimitedList'][Index]['message_param_value_3'],
				'message_param_value_4': GiftRecord['GiftLimitedList'][Index]['message_param_value_4'],
				'create_time': GiftRecord['GiftLimitedList'][Index]['create_time']
			});
			GiftRecord['GiftLimitedList'].splice(Index, 1);
		}
	}
	else {
		for (let p in IDList) {
			const Index = GiftRecord['GiftNormalList'].findIndex(x => x.present_id == IDList[p]);
			ItemTable.push({
				'entity_type': GiftRecord['GiftNormalList'][Index]['entity_type'],
				'entity_id': GiftRecord['GiftNormalList'][Index]['entity_id'],
				'entity_quantity': GiftRecord['GiftNormalList'][Index]['entity_quantity']
			});
			GiftRecord['GiftHistory'].unshift({
				'id': GiftRecord['GiftNormalList'][Index]['present_id'],
				'viewer_id': res.locals.UserSessionRecord['ViewerID'],
				'entity_type': GiftRecord['GiftNormalList'][Index]['entity_type'],
				'entity_id': GiftRecord['GiftNormalList'][Index]['entity_id'],
				'entity_quantity': GiftRecord['GiftNormalList'][Index]['entity_quantity'],
				'entity_level': GiftRecord['GiftNormalList'][Index]['entity_level'],
				'entity_limit_break_count': GiftRecord['GiftNormalList'][Index]['entity_limit_break_count'],
				'entity_status_plus_count': GiftRecord['GiftNormalList'][Index]['entity_status_plus_count'],
				'message_id': GiftRecord['GiftNormalList'][Index]['message_id'],
				'message_param_value_1': GiftRecord['GiftNormalList'][Index]['message_param_value_1'],
				'message_param_value_2': GiftRecord['GiftNormalList'][Index]['message_param_value_2'],
				'message_param_value_3': GiftRecord['GiftNormalList'][Index]['message_param_value_3'],
				'message_param_value_4': GiftRecord['GiftNormalList'][Index]['message_param_value_4'],
				'create_time': GiftRecord['GiftNormalList'][Index]['create_time']
			});
			GiftRecord['GiftNormalList'].splice(Index, 1);
		}
	}
	const Parsed = DataManager.ItemParser(ItemTable, res.locals.UserSessionRecord, res.locals.UserIndexRecord, "entity");
	res.locals.UserSessionRecord = Parsed[0];
	res.locals.UserIndexRecord = Parsed[1];
	res.locals.ResponseBody['data'] = {
		'present_limit_list': res.locals.UserSessionRecord['GiftRecord']['GiftLimitedList'],
		'receive_present_id_list': IDList,
		'not_receive_present_id_list': [],
		'update_data_list': Parsed[2],
		"entity_result": Parsed[3]
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/present/get_history_list", Android_Version + "/present/get_history_list"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
		'present_history_list': res.locals.UserSessionRecord['GiftRecord']['GiftHistory']
	}
	next();
}));

Orchis.post([iOS_Version + "/friend/friend_index", Android_Version + "/friend/friend_index"], errorhandler(async (req, res, next) => {
	if (res.locals.UserSessionRecord['Friends'] == undefined) { res.locals.UserSessionRecord['Friends'] = []; res.locals.UpdatedSessionRecord = true; }
	
	res.locals.ResponseBody['data'] = {
		'friend_count': SupportData['data']['support_user_list'].length
	}
	next();
}));
Orchis.post([iOS_Version + "/friend/friend_list", Android_Version + "/friend/friend_list"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
		'result': 1,
		'friend_list': SupportData['data']['support_user_list'],
		'new_friend_viewer_id_list': []
	}
	next();
}));

Orchis.post([iOS_Version + "/weapon_body/craft", Android_Version + "/weapon_body/craft"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const WeaponID = MsgPackData['weapon_body_id'];
	const CraftCost = WeaponMap.GetWeaponInfo(WeaponID, "craft_cost");
	let UpdateMaterialList = [];
	if (CraftCost != undefined) {
		for (let y in CraftCost) {
			switch(CraftCost[y]['entity_type']) {
				case 4:
					res.locals.UserIndexRecord['user_data']['coin'] -= CraftCost[y]['quantity'];
					break;
				case 8:
					const MaterialIndex = res.locals.UserIndexRecord['material_list'].findIndex(x => x.material_id == CraftCost[y]['entity_id']);
					res.locals.UserIndexRecord['material_list'][MaterialIndex]['quantity'] -= CraftCost[y]['quantity'];
					UpdateMaterialList.push(res.locals.UserIndexRecord['material_list'][MaterialIndex]);
					break;
			}
		}
	}
	const NewData = WeaponMap.CreateWeaponFromGift(WeaponID);
	res.locals.ResponseBody['data']['update_data_list'] = {
		'weapon_body_list': [NewData[0]],
		'weapon_skin_list': [NewData[1]],
		'user_data': res.locals.UserIndexRecord['user_data'],
		'material_list': UpdateMaterialList
	}
	res.locals.UserIndexRecord['weapon_body_list'].push(NewData[0]); res.locals.UserIndexRecord['weapon_skin_list'].push(NewData[1]);
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/weapon_body/buildup_piece", Android_Version + "/weapon_body/buildup_piece"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const WeaponID = MsgPackData['weapon_body_id']; const WeaponBuildup = MsgPackData['buildup_weapon_body_piece_list'];
	const WeaponIndex = res.locals.UserIndexRecord['weapon_body_list'].findIndex(x => x.weapon_body_id === WeaponID);
	const WeaponData = res.locals.UserIndexRecord['weapon_body_list'][WeaponIndex];
	let UpdateMaterialList = [];
	let UpdateSkinList = [];
	const CostData = WeaponMap.WeaponCost(WeaponID, WeaponBuildup, res.locals.UserIndexRecord);
	res.locals.UserIndexRecord = CostData[0];
	const UpgradeData = WeaponMap.WeaponBuild(WeaponID, WeaponBuildup, WeaponData, res.locals.UserIndexRecord['weapon_passive_ability_list']);
	res.locals.ResponseBody['data']['update_data_list'] = {
		'weapon_body_list': [UpgradeData[0]],
		'material_list': CostData[1],
		'weapon_skin_list': CostData[2],
		'user_data': res.locals.UserIndexRecord['user_data']
	}
	res.locals.UserIndexRecord['weapon_body_list'][WeaponIndex] = UpgradeData[0];
	if (UpgradeData[2] == true) {
		res.locals.UserIndexRecord['weapon_passive_ability_list'] = UpgradeData[1];
		res.locals.ResponseBody['data']['update_data_list']['weapon_passive_ability_list'] = UpgradeData[1];
	}
	if (WeaponData['fort_passive_chara_weapon_buildup_count'] == 0 && UpgradeData[0]['fort_passive_chara_weapon_buildup_count'] == 1) {
		const WeaponType = WeaponMap.GetWeaponInfo(WeaponID, "weapon_type");
		const WeaponBonusIndex = res.locals.UserIndexRecord['fort_bonus_list']['param_bonus_by_weapon'].findIndex(x => x.weapon_type == WeaponType);
		if (WeaponMap.GetWeaponInfo(WeaponID, "rarity") == 6) {
			res.locals.UserIndexRecord['fort_bonus_list']['param_bonus_by_weapon'][WeaponBonusIndex]['hp'] += 1.5;
			res.locals.UserIndexRecord['fort_bonus_list']['param_bonus_by_weapon'][WeaponBonusIndex]['attack'] += 1.5;
		}
		else {
			res.locals.UserIndexRecord['fort_bonus_list']['param_bonus_by_weapon'][WeaponBonusIndex]['hp'] += 0.5;
			res.locals.UserIndexRecord['fort_bonus_list']['param_bonus_by_weapon'][WeaponBonusIndex]['attack'] += 0.5;
		}
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));

Orchis.post([iOS_Version + "/memory_event/activate", Android_Version + "/memory_event/activate"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	let RequestedEvent = MsgPackData['event_id'];
	res.locals.UserIndexRecord['user_data']['active_memory_event_id'] = RequestedEvent;
	res.locals.ResponseBody['data'] = { 'result': 1, 'update_data_list': { 'user_data': res.locals.UserIndexRecord['user_data'] } }
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/event_trade/get_list", Android_Version + "/event_trade/get_list"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const EventTradeList = EventMap.EventTradeTemplate(MsgPackData['trade_group_id']);
	const EventInfo = EventMap.GetEventByTradeID(MsgPackData['trade_group_id']);
	let FinalTradeList = [];
	if (res.locals.UserSessionRecord['Event'][EventInfo[1]][String(EventInfo[0])] != undefined) {	
		FinalTradeList = res.locals.UserSessionRecord['Event'][EventInfo[1]][String(EventInfo[0])]['TradeList'];
	}
	res.locals.ResponseBody['data'] = {
		'user_event_item_data': [],
		'user_event_trade_list': FinalTradeList,
		'event_trade_list': EventTradeList
	}
	next();
}));
Orchis.post([iOS_Version + "/event_trade/trade", Android_Version + "/event_trade/trade"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const TradeID = MsgPackData['trade_id'];
	const EventID = String(TradeID).slice(0, String(TradeID).length - 2);
	const PerformTrade = EventMap.EventTrade(res.locals.UserSessionRecord, res.locals.UserIndexRecord, EventID, MsgPackData);
	res.locals.UserSessionRecord = PerformTrade[0]; res.locals.UserIndexRecord = PerformTrade[1];
	res.locals.ResponseBody['data'] = {
		'user_event_item_data': [],
		'user_event_trade_list': res.locals.UserSessionRecord['Event'][PerformTrade[3]][EventID]['TradeList'],
		'event_trade_list': PerformTrade[2],
		'update_data_list': PerformTrade[4]
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/event_summon/get_data", Android_Version + "/event_summon/get_data"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const EventID = MsgPackData['event_id']; const BoxCount = res.locals.UserSessionRecord['Event']['Raid'][String(EventID)]['Summon']['Count'];
	res.locals.ResponseBody['data'] = {
		'box_summon_data': EventMap.BlazonList(BoxCount, EventID, res.locals.UserSessionRecord),
		'update_data_list': {}
	}
	next();
}));
Orchis.post([iOS_Version + "/event_summon/exec", Android_Version + "/event_summon/exec"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const SummonCount = MsgPackData['count'];
	const EventID = MsgPackData['event_id']; const BoxCount = res.locals.UserSessionRecord['Event']['Raid'][String(EventID)]['Summon']['Count'];
	const SummonData = EventMap.BlazonSummon(SummonCount, BoxCount, EventID, res.locals.UserSessionRecord);
	const Parsed = DataManager.ItemParser(SummonData[0]['draw_details'], SummonData[1], res.locals.UserIndexRecord, "entity", 0);
	res.locals.ResponseBody['data'] = {
		'box_summon_result': SummonData[0],
		'update_data_list': Parsed[2],
		'entity_result': Parsed[3]
	}
	res.locals.UserSessionRecord = Parsed[0];
	res.locals.UpdatedSessionRecord = true;
	res.locals.UserIndexRecord = Parsed[1];
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/event_summon/reset", Android_Version + "/event_summon/reset"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const EventID = MsgPackData['event_id'];
	res.locals.UserSessionRecord['Event']['Raid'][String(EventID)]['Summon']['Count'] += 1;
	res.locals.UserSessionRecord['Event']['Raid'][String(EventID)]['Summon']['BoxData'] = EventMap.BlazonAddData(EventID, res.locals.UserSessionRecord['Event']['Raid'][String(EventID)]['Summon']['Count']);
	res.locals.ResponseBody['data'] = {
		'box_summon_data': EventMap.BlazonList(res.locals.UserSessionRecord['Event']['Raid'][String(EventID)]['Summon']['Count'], EventID, res.locals.UserSessionRecord)
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/raid_event/entry", Android_Version + "/raid_event/entry"], errorhandler(async (req, res, next) => {
	let UpdateData = {}; let EntityList = [];
	const MsgPackData = msgpack.unpack(req.body); const EventID = String(MsgPackData['raid_event_id']);
	res.locals.UserSessionRecord['Event']['Raid'][EventID] = {};
	res.locals.UserSessionRecord['Event']['Raid'][EventID]['UserData'] = {
		'raid_event_id': MsgPackData['raid_event_id'],
		'box_summon_point': 0,
		'raid_point_1': 0,
		'raid_point_2': 0,
		'raid_point_3': 0,
		'advent_item_quantity_1': 0,
		'advent_item_quantity_2': 0,
		'ultimate_key_count': 0,
		'exchange_item_count': 0,
		'exchange_item_count_2': 0
	}
	res.locals.UserSessionRecord['Event']['Raid'][EventID]['Summon'] = {
		'BoxData': EventMap.BlazonAddData(MsgPackData['raid_event_id'], 1),
		'Count': 1
	}
	res.locals.UserSessionRecord['Event']['Raid'][EventID]['TradeList'] = [];
	res.locals.UserSessionRecord['Event']['Raid'][EventID]['Friendship'] = [
		{
			'chara_id': 0,
			'total_point': 0,
			'is_temporary': 0
		}
	];
	res.locals.UserSessionRecord['Event']['Raid'][EventID]['Passive'] = [];
	res.locals.UpdatedSessionRecord = true;
	res.locals.ResponseBody['data'] = {
		'raid_event_user_data': res.locals.UserSessionRecord['Event']['Raid'][EventID]['UserData'],
		'update_data_list': UpdateData,
		'entity_result': { 'new_get_entity_list': EntityList }
	}
	next();
}));
Orchis.post([iOS_Version + "/raid_event/get_event_data", Android_Version + "/raid_event/get_event_data"], errorhandler(async (req, res, next) => {
	let UpdateData = {}; let EntityList = [];
	const MsgPackData = msgpack.unpack(req.body); const EventID = String(MsgPackData['raid_event_id']);
	if (res.locals.UserSessionRecord['Event']['Raid'][EventID] == undefined) {
		res.locals.ResponseBody['data'] = {
			'raid_event_user_data': []
		}
		next(); return;
	}
	res.locals.ResponseBody['data'] = {
		'raid_event_user_data': res.locals.UserSessionRecord['Event']['Raid'][EventID]['UserData'],
		'raid_event_reward_list': res.locals.UserSessionRecord['Event']['Raid'][EventID]['TradeList'],
		'chara_friendship_list': res.locals.UserSessionRecord['Event']['Raid'][EventID]['Friendship'],
		'event_trade_list': [],
		'event_passive_list': [ res.locals.UserSessionRecord['Event']['Raid'][EventID]['Passive'] ],
		'is_receive_event_damage_reward': 0,
		'event_damage_data': {
			'user_damage_value': 0,
			'user_target_time': 0,
			'total_damage_value': 0,
			'total_target_time': 0,
			'total_aggregate_time': 0
		},
		'event_ability_chara_list': [],
		'update_data_list': UpdateData,
		'entity_result': { 'new_get_entity_list': EntityList }
	}
	next();
}));
Orchis.post([iOS_Version + "/raid_event/receive_raid_point_reward", Android_Version + "/raid_event/receive_raid_point_reward"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const EventID = String(MsgPackData['raid_event_id']);
	const RewardList = MsgPackData['raid_event_reward_id_list'];
	const RewardData = EventMap.RaidEmblemReward(EventID, RewardList, res.locals.UserSessionRecord['Event']['Raid'][EventID]['TradeList']);
	res.locals.UserSessionRecord['Event']['Raid'][EventID]['TradeList'] = RewardData[1];
	const Parsed = DataManager.ItemParser(RewardData[0], res.locals.UserSessionRecord, res.locals.UserIndexRecord, "entity", EventID);
	res.locals.UserSessionRecord = Parsed[0]; res.locals.UserIndexRecord = Parsed[1];
	const UpdateData = Parsed[2];
	res.locals.ResponseBody['data'] = {
		'raid_event_user_data': res.locals.UserSessionRecord['Event']['Raid'][EventID]['UserData'],
		'raid_event_reward_list': res.locals.UserSessionRecord['Event']['Raid'][EventID]['TradeList'],
		'update_data_list': UpdateData
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/build_event/entry", Android_Version + "/build_event/entry"], errorhandler(async (req, res, next) => {
	let UpdateData = {};
	const MsgPackData = msgpack.unpack(req.body); const EventID = String(MsgPackData['event_id']);
	res.locals.UserSessionRecord['Event']['Build'][EventID] = {};
	res.locals.UserSessionRecord['Event']['Build'][EventID]['UserData'] = {
		'build_event_id': MsgPackData['event_id'],
		'user_build_event_item_list': [
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
		]
	}
	res.locals.UserSessionRecord['Event']['Build'][EventID]['Reward'] = [];
	res.locals.UserSessionRecord['Event']['Build'][EventID]['TradeList'] = [];
	res.locals.UpdatedSessionRecord = true;
	if (EventMap.EventHasFacility(MsgPackData['event_id']) == true) {
		if (res.locals.UserIndexRecord['build_list'].findIndex(x => x.plant_id == EventMap.EventInfoMap[EventID]['event_facility']) == -1) {
			UpdateData['build_list'] = [];
			const BuildID = res.locals.UserIndexRecord['build_list'][res.locals.UserIndexRecord['build_list'].length - 1]['build_id'] + 1;
			const PlantID = EventMap.EventInfoMap[EventID]['event_facility'];
			const Template = {
				"build_id": BuildID,
				"fort_plant_detail_id": parseInt(String(PlantID) + "01"),
				"position_x": -1,
				"position_z": -1,
				"build_status": 0,
				"build_start_date": 0,
				"build_end_date": 0,
				"level": 1,
				"plant_id": PlantID,
				"is_new": 0,
				"remain_time": 0,
				"last_income_date": -1
			}
			res.locals.UserIndexRecord['build_list'].push(Template);
			UpdateData['build_list'].push(Template);
			res.locals.UpdatedIndexRecord = true;
		}
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.ResponseBody['data'] = {
		'build_event_user_data': res.locals.UserSessionRecord['Event']['Build'][EventID]['UserData'],
		'update_data_list': UpdateData
	}
	next();
}));
Orchis.post([iOS_Version + "/build_event/get_event_data", Android_Version + "/build_event/get_event_data"], errorhandler(async (req, res, next) => {
	let UpdateData = {};
	const MsgPackData = msgpack.unpack(req.body); const EventID = String(MsgPackData['event_id']);
	if (res.locals.UserSessionRecord['Event']['Build'][EventID] == undefined) {
		res.locals.ResponseBody['data'] = {
			'build_event_user_data': []
		}
		next(); return;
	}
	if (EventMap.EventHasFacility(MsgPackData['event_id']) == true) {
		if (res.locals.UserIndexRecord['build_list'].findIndex(x => x.plant_id == EventMap.EventInfoMap[EventID]['event_facility']) == -1) {
			UpdateData['build_list'] = [];
			const BuildID = res.locals.UserIndexRecord['build_list'][res.locals.UserIndexRecord['build_list'].length - 1]['build_id'] + 1;
			const PlantID = EventMap.EventInfoMap[EventID]['event_facility'];
			const Template = {
				"build_id": BuildID,
				"fort_plant_detail_id": parseInt(String(PlantID) + "01"),
				"position_x": -1,
				"position_z": -1,
				"build_status": 0,
				"build_start_date": 0,
				"build_end_date": 0,
				"level": 1,
				"plant_id": PlantID,
				"is_new": 0,
				"remain_time": 0,
				"last_income_date": -1
			}
			res.locals.UserIndexRecord['build_list'].push(Template);
			UpdateData['build_list'].push(Template);
			res.locals.UpdatedIndexRecord = true;
		}
	}
	res.locals.ResponseBody['data'] = {
		'event_fort_data': [],
		'is_receivable_event_daily_bonus': 0,
		'build_event_reward_list': EventMap.BuildRewardList(EventID, res.locals.UserSessionRecord['Event']['Build'][EventID]['UserData']['user_build_event_item_list'][0]['event_item_value']),
		'event_trade_list': EventMap.GetEventTrade(EventID),
		'build_event_user_data': res.locals.UserSessionRecord['Event']['Build'][EventID]['UserData'],
		'update_data_list': UpdateData
	}
	next();
}));
Orchis.post([iOS_Version + "/build_event/receive_build_point_reward", Android_Version + "/build_event/receive_build_point_reward"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const EventID = String(MsgPackData['event_id']);
	const RewardData = EventMap.GetBuildReward(EventID, 'Build', res.locals.UserSessionRecord, res.locals.UserIndexRecord);
	let RewardList = EventMap.BuildRewardList(EventID, res.locals.UserSessionRecord['Event']['Build'][EventID]['UserData']['user_build_event_item_list'][0]['event_item_value']);
	res.locals.UserSessionRecord['Event']['Build'][EventID]['Reward'] = RewardList;
	const Parsed = DataManager.ItemParser(RewardData, res.locals.UserSessionRecord, res.locals.UserIndexRecord, "entity", EventID + "0101");
	res.locals.UserSessionRecord = Parsed[0];
	res.locals.UserIndexRecord = Parsed[1];
	res.locals.ResponseBody['data'] = {
		'build_event_reward_list': RewardList,
		'build_event_reward_entity_list': RewardData,
		'update_data_list': Parsed[2]
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/combat_event/entry", Android_Version + "/combat_event/entry"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const EventID = String(MsgPackData['event_id']);
	res.locals.UserSessionRecord['Event']['Combat'][EventID] = {};
	res.locals.UserSessionRecord['Event']['Combat'][EventID]['UserData'] = {
		'event_id': MsgPackData['event_id'],
		'event_point': 0, // glory
		'exchange_item_01': 0, // crystal
		'quest_unlock_item_01': 0, // battle chart
		'story_unlock_item_01': 0, // war chronicle
		'advent_item_01': 0 // stratagem
	}
	res.locals.UserSessionRecord['Event']['Combat'][EventID]['Reward'] = [];
	res.locals.UserSessionRecord['Event']['Combat'][EventID]['TradeList'] = [];
	res.locals.UserSessionRecord['Event']['Combat'][EventID]['LocationReward'] = [];
	res.locals.UpdatedSessionRecord = true;
	res.locals.ResponseBody['data'] = {
		'combat_event_user_data': res.locals.UserSessionRecord['Event']['Combat'][EventID]['UserData']
	}
	next();
}));
Orchis.post([iOS_Version + "/combat_event/get_event_data", Android_Version + "/combat_event/get_event_data"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const EventID = String(MsgPackData['event_id']);
	if (res.locals.UserSessionRecord['Event']['Combat'][EventID] == undefined) {
		res.locals.ResponseBody['data'] = {
			'combat_event_user_data': []
		}
		next(); return;
	}
	res.locals.ResponseBody['data'] = {
		'combat_event_user_data': res.locals.UserSessionRecord['Event']['Combat'][EventID]['UserData'],
		'event_trade_list': EventMap.GetEventTrade(EventID),
		"user_event_location_reward_list": res.locals.UserSessionRecord['Event']['Combat'][EventID]['LocationReward']
	}
	next();
}));
Orchis.post([iOS_Version + "/combat_event/receive_event_point_reward", Android_Version + "/combat_event/receive_event_point_reward"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const EventID = String(MsgPackData['event_id']);
	const RewardData = EventMap.GetBuildReward(EventID, 'Combat', res.locals.UserSessionRecord, res.locals.UserIndexRecord);
	const RewardList = EventMap.BuildRewardList(EventID, res.locals.UserSessionRecord['Event']['Combat'][EventID]['UserData']['event_point']);
	res.locals.UserSessionRecord['Event']['Combat'][EventID]['Reward'] = RewardList;
	const Parsed = DataManager.ItemParser(RewardData, res.locals.UserSessionRecord, res.locals.UserIndexRecord, "entity", EventID + "0101");
	res.locals.UserSessionRecord = Parsed[0];
	res.locals.UserIndexRecord = Parsed[1];
	res.locals.ResponseBody['data'] = {
		'event_reward_list': RewardList,
		'event_reward_entity_list': RewardData,
		'update_data_list': Parsed[2]
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/combat_event/receive_event_location_reward", Android_Version + "/combat_event/receive_event_location_reward"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const EventID = MsgPackData['event_id']; const LocationID = MsgPackData['event_location_reward_id'];
	const RewardData = EventMap.GetCombatReward(EventID, parseInt(String(MsgPackData['event_location_reward_id']).slice(-2)));
	res.locals.UserSessionRecord['Event']['Combat'][EventID]['LocationReward'].push({
		'event_id': EventID,
		'location_reward_id': LocationID
	});
	const Parsed = DataManager.ItemParser(RewardData, res.locals.UserSessionRecord, res.locals.UserIndexRecord, "entity", EventID + "0101");
	res.locals.UserSessionRecord = Parsed[0];
	res.locals.UserIndexRecord = Parsed[1];
	res.locals.ResponseBody['data'] = {
		'user_event_location_reward_list': res.locals.UserSessionRecord['Event']['Combat'][EventID]['LocationReward'],
		'update_data_list': Parsed[2],
		'event_location_reward_entity_list': RewardData
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/clb01_event/entry", Android_Version + "/clb01_event/entry"], errorhandler(async (req, res, next) => {
	let UpdateData = {};
	const MsgPackData = msgpack.unpack(req.body); const EventID = String(MsgPackData['event_id']);
	res.locals.UserSessionRecord['Event']['CLB01'][EventID] = {};
	res.locals.UserSessionRecord['Event']['CLB01'][EventID]['UserData'] = {
		'event_id': MsgPackData['event_id'],
		'user_clb_01_event_item_list': [
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
		]
	}
	res.locals.UserSessionRecord['Event']['CLB01'][EventID]['Reward'] = [];
	res.locals.UserSessionRecord['Event']['CLB01'][EventID]['TradeList'] = [];
	res.locals.UserSessionRecord['Event']['CLB01'][EventID]['Friendship'] = [
		{
			'chara_id': 0,
			'total_point': 0,
			'is_temporary': 0
		}
	];
	res.locals.UpdatedSessionRecord = true;
	res.locals.ResponseBody['data'] = {
		'clb_01_event_user_data': res.locals.UserSessionRecord['Event']['CLB01'][EventID]['UserData'],
		'update_data_list': UpdateData
	}
	next();
}));
Orchis.post([iOS_Version + "/clb01_event/get_event_data", Android_Version + "/clb01_event/get_event_data"], errorhandler(async (req, res, next) => {
	let UpdateData = {}; let EntityList = [];
	const MsgPackData = msgpack.unpack(req.body); const EventID = String(MsgPackData['event_id']);
	if (res.locals.UserSessionRecord['Event']['CLB01'][EventID] == undefined) {
		res.locals.ResponseBody['data'] = {
			'clb_01_event_user_data': []
		}
		next(); return;
	}
	res.locals.ResponseBody['data'] = {
		'chara_friendship_list': res.locals.UserSessionRecord['Event']['CLB01'][EventID]['Friendship'],
		'clb_01_event_reward_list': EventMap.BuildRewardList(EventID, res.locals.UserSessionRecord['Event']['CLB01'][EventID]['UserData']['user_clb_01_event_item_list'][2]['event_item_value']),
		'clb_01_trade_list': res.locals.UserSessionRecord['Event']['CLB01'][EventID]['TradeList'],
		'clb_01_event_user_data': res.locals.UserSessionRecord['Event']['CLB01'][EventID]['UserData'],
		'update_data_list': UpdateData,
		'entity_result': { 'new_get_entity_list': EntityList }
	}
	next();
}));
Orchis.post([iOS_Version + "/clb01_event/receive_clb01_point_reward", Android_Version + "/clb01_event/receive_clb01_point_reward"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const EventID = String(MsgPackData['event_id']);
	const RewardData = EventMap.GetBuildReward(EventID, 'CLB01', res.locals.UserSessionRecord, res.locals.UserIndexRecord);
	const RewardList = EventMap.BuildRewardList(EventID, res.locals.UserSessionRecord['Event']['CLB01'][EventID]['UserData']['user_clb_01_event_item_list'][2]['event_item_value']);
	res.locals.UserSessionRecord['Event']['CLB01'][EventID]['Reward'] = RewardList;
	const Parsed = DataManager.ItemParser(RewardData, res.locals.UserSessionRecord, res.locals.UserIndexRecord, "entity", EventID + "0101");
	res.locals.UserSessionRecord = Parsed[0];
	res.locals.UserIndexRecord = Parsed[1];
	res.locals.ResponseBody['data'] = {
		'clb01_event_reward_list': RewardList,
		'clb01_event_reward_entity_list': RewardData,
		'update_data_list': Parsed[2]
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/earn_event/entry", Android_Version + "/earn_event/entry"], errorhandler(async (req, res, next) => {
	let UpdateData = {};
	const MsgPackData = msgpack.unpack(req.body); const EventID = String(MsgPackData['event_id']);
	res.locals.UserSessionRecord['Event']['Earn'][EventID] = {};
	res.locals.UserSessionRecord['Event']['Earn'][EventID]['UserData'] = {
		'event_id': parseInt(EventID),
		'event_point': 0,
		'exchange_item_01': 0,
		'exchange_item_02': 0,
		'advent_item_quantity_01': 0
	}
	res.locals.UserSessionRecord['Event']['Earn'][EventID]['Reward'] = [];
	res.locals.UserSessionRecord['Event']['Earn'][EventID]['TradeList'] = [];
	res.locals.UpdatedSessionRecord = true;
	res.locals.ResponseBody['data'] = {
		'earn_event_user_data': res.locals.UserSessionRecord['Event']['Earn'][EventID]['UserData'],
		'update_data_list': UpdateData
	}
	next();
}));
Orchis.post([iOS_Version + "/earn_event/get_event_data", Android_Version + "/earn_event/get_event_data"], errorhandler(async (req, res, next) => {
	let UpdateData = {};
	const MsgPackData = msgpack.unpack(req.body); const EventID = String(MsgPackData['event_id']);
	if (res.locals.UserSessionRecord['Event']['Earn'][EventID] == undefined) {
		res.locals.ResponseBody['data'] = {
			'earn_event_user_data': []
		}
		next(); return;
	}
	res.locals.ResponseBody['data'] = {
		'is_receivable_event_daily_bonus': 0,
		'event_reward_list': EventMap.BuildRewardList(EventID, res.locals.UserSessionRecord['Event']['Earn'][EventID]['UserData']['event_point']),
		'event_trade_list': EventMap.GetEventTrade(EventID),
		'earn_event_user_data': res.locals.UserSessionRecord['Event']['Earn'][EventID]['UserData'],
		'update_data_list': UpdateData
	}
	next();
}));
Orchis.post([iOS_Version + "/earn_event/receive_event_point_reward", Android_Version + "/earn_event/receive_event_point_reward"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const EventID = String(MsgPackData['event_id']);
	const RewardData = EventMap.GetBuildReward(EventID, 'Earn', res.locals.UserSessionRecord, res.locals.UserIndexRecord);
	const RewardList = EventMap.BuildRewardList(EventID, res.locals.UserSessionRecord['Event']['Earn'][EventID]['UserData']['event_point']);
	res.locals.UserSessionRecord['Event']['Earn'][EventID]['Reward'] = RewardList;
	const Parsed = DataManager.ItemParser(RewardData, res.locals.UserSessionRecord, res.locals.UserIndexRecord, "entity", EventID + "0101");
	res.locals.UserSessionRecord = Parsed[0];
	res.locals.UserIndexRecord = Parsed[1];
	res.locals.ResponseBody['data'] = {
		'event_reward_list': RewardList,
		'event_reward_entity_list': RewardData,
		'update_data_list': Parsed[2]
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/battle_royal_event/get_event_data", Android_Version + "/battle_royal_event/get_event_data"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody = { 'data_headers': { 'result_code': 151 }, 'data': { 'result_code': 151 } }
	next();
}));

Orchis.post([iOS_Version + "/story_skip/skip", Android_Version + "/story_skip/skip"], errorhandler(async (req, res, next) => {
	const QuestList = IndexTools.CampaignQuestList;
	const StoryList = IndexTools.CampaignStoryList;
	const TimeNow = Math.floor(Date.now() / 1000);
	let CharacterList = [];
	let DragonList = [];
	let EntityList = [];
	let UnitStoryList = [];
	let DragonBond = [];
	let FirstClearSet = [];
	for (let y in QuestList) {
		const QuestTemplate = {
			"quest_id": QuestList[y],
			"state": 3,
			"is_mission_clear_1": 1,
			"is_mission_clear_2": 1,
			"is_mission_clear_3": 1,
			"play_count": 1,
			"daily_play_count": 1,
			"weekly_play_count": 1,
			"last_daily_reset_time": TimeNow,
			"last_weekly_reset_time": TimeNow,
			"is_appear": 1,
			"best_clear_time": 0.0
		}
		const QuestIndex = res.locals.UserIndexRecord['quest_list'].findIndex(x => x.quest_id == QuestList[y]);
		if (QuestIndex == -1) {
			res.locals.UserIndexRecord['quest_list'].push(QuestTemplate);
			res.locals.UserIndexRecord['user_data']['crystal'] += 40;
			const FirstReward = QuestMap.GetFirstReward(QuestList[y]);
			for (const i in FirstReward) {
				const SearchIndex = FirstClearSet.findIndex(e => e.type == FirstReward[i]['type'] && e.id == FirstReward[i]['id']);
				if (SearchIndex != -1) { FirstClearSet[SearchIndex]['quantity'] += FirstReward[i]['quantity']; }
				else { FirstClearSet.push(FirstReward[i]); }
			}
		}
	}
	for (let v in StoryList) {
		const StoryTemplate = {
			"quest_story_id": StoryList[v],
			"state": 1
		}
		const StoryID = res.locals.UserIndexRecord['quest_story_list'].findIndex(x => x.quest_story_id == StoryList[v]);
		if (StoryID == -1) {
			if (QuestMap.HasRewardCharacter(StoryList[v]) == true) {
				const RewardData = QuestMap.RewardCharacter(StoryList[v]);
				const CharacterIndex = res.locals.UserIndexRecord['chara_list'].findIndex(x => x.chara_id == RewardData['entity_id']);
				if (CharacterIndex == -1) {
					EntityList.push(RewardData);
					res.locals.UserIndexRecord['chara_list'].push(CharacterMap.CreateCharacterFromGift(RewardData['entity_id'], 1));
					const NewIndex = res.locals.UserIndexRecord['chara_list'].findIndex(x => x.chara_id == RewardData['entity_id']);
					res.locals.UserIndexRecord['chara_list'][NewIndex]['is_unlock_edit_skill'] = 1;
					CharacterList.push(res.locals.UserIndexRecord['chara_list'][NewIndex]);
					const UnitStoryData = CharacterMap.GenerateUnitStory(RewardData['entity_id']);
					if (UnitStoryData[0] != undefined) {
						UnitStoryList.push(UnitStoryData[0], UnitStoryData[1], UnitStoryData[2], UnitStoryData[3], UnitStoryData[4]);
						res.locals.UserIndexRecord['unit_story_list'].push(UnitStoryData[0], UnitStoryData[1], UnitStoryData[2], UnitStoryData[3], UnitStoryData[4]); }
					const CharacterElement = CharacterMap.GetCharacterInfo(RewardData['entity_id'], 'elemental_type');
					const CharacterBonusIndex = res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'].findIndex(x => x.elemental_type == CharacterElement);
					res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][CharacterBonusIndex]['hp'] += 0.1;
					res.locals.UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][CharacterBonusIndex]['attack'] += 0.1;
				}
			}
			if (QuestMap.HasRewardDragon(StoryList[v]) == true) {
				const RewardData = QuestMap.RewardDragon(StoryList[v]);
				EntityList.push(RewardData);
				let NextID = 39999;
			if (res.locals.UserIndexRecord['dragon_list'].length != 0) { NextID = res.locals.UserIndexRecord['dragon_list'][res.locals.UserIndexRecord['dragon_list'].length - 1]['dragon_key_id'] + 1; }
				res.locals.UserIndexRecord['dragon_list'].push(DragonMap.CreateDragonFromGift(NextID, RewardData['entity_id'], 1));
				const NewIndex = res.locals.UserIndexRecord['dragon_list'].findIndex(x => x.dragon_key_id == NextID);
				DragonList.push(res.locals.UserIndexRecord['dragon_list'][NewIndex]);
				DragonBond.push(DragonMap.GenerateDragonReliability(RewardData['entity_id']));
				res.locals.UserIndexRecord['dragon_reliability_list'].push(DragonMap.GenerateDragonReliability(RewardData['entity_id']));
				const DragonElement = DragonMap.GetDragonInfo(RewardData['entity_id'], "element");
				const DragonBonusIndex = res.locals.UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'].findIndex(x => x.elemental_type == DragonElement);
				res.locals.UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'][DragonBonusIndex]['hp'] += 0.1;
				res.locals.UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'][DragonBonusIndex]['attack'] += 0.1;
			}
			res.locals.UserIndexRecord['user_data']['crystal'] += 25;
			res.locals.UserIndexRecord['quest_story_list'].push(StoryTemplate);
		}
	}
	res.locals.UserIndexRecord['user_data']['tutorial_status'] = 60999;
	res.locals.UserIndexRecord['user_data']['tutorial_flag_list'] = IndexTools.TutorialFlagsList;
	res.locals.UserIndexRecord['current_main_story_mission'] = {
		'main_story_mission_group_id': 11,
		'main_story_mission_state_list': [
			{'main_story_mission_id': 10110101,'state': 2},
			{'main_story_mission_id': 10110201,'state': 2},
			{'main_story_mission_id': 10110301,'state': 2},
			{'main_story_mission_id': 10110401,'state': 2},
			{'main_story_mission_id': 10110501,'state': 2}
		]
	}
	let NewFaciList = []; const DoubleFacilityID = [ 100401, 100402, 100403, 100404, 100405, 100501, 100502, 100503,
													 100504, 100505, 100506, 100507, 100508, 100509 ];
						  const DracolithFacilID = [ 100601, 100602, 100603, 100604, 100605 ];
	let LastBuildID = res.locals.UserIndexRecord['build_list'][res.locals.UserIndexRecord['build_list'].length - 1]['build_id'];
	for (let entry in res.locals.UserIndexRecord['build_list']) {
		const CurrentPlantID = res.locals.UserIndexRecord['build_list'][entry]['plant_id'];
		if (CurrentPlantID == 100201 || CurrentPlantID == 100301) { //lv 15
			if (res.locals.UserIndexRecord['build_list'][entry]['level'] < 15) {
				const NewDetail = parseInt(String(CurrentPlantID) + "15");
				res.locals.UserIndexRecord['build_list'][entry]['fort_plant_detail_id'] = NewDetail;
				res.locals.UserIndexRecord['build_list'][entry]['level'] = 15;
				NewFaciList.push(res.locals.UserIndexRecord['build_list'][entry]);
			}
			else { NewFaciList.push(res.locals.UserIndexRecord['build_list'][entry]); }
		}
		else if (CurrentPlantID > 100400 && CurrentPlantID < 100510) { //lv 10
			if (res.locals.UserIndexRecord['build_list'][entry]['level'] < 10) {
				const NewDetail = parseInt(String(CurrentPlantID) + "10");
				res.locals.UserIndexRecord['build_list'][entry]['fort_plant_detail_id'] = NewDetail;
				res.locals.UserIndexRecord['build_list'][entry]['level'] = 10;
				NewFaciList.push(res.locals.UserIndexRecord['build_list'][entry]);
			}
			else { NewFaciList.push(res.locals.UserIndexRecord['build_list'][entry]); }
		}
		else {
			NewFaciList.push(res.locals.UserIndexRecord['build_list'][entry]);
		}
	}
	for (let id in DoubleFacilityID) {
		let FacilityCount = 0;
		const NewDetailID = parseInt(String(DoubleFacilityID[id]) + "10");
		for (let build in res.locals.UserIndexRecord['build_list']) {
			if (res.locals.UserIndexRecord['build_list'][build]['plant_id'] == DoubleFacilityID[id]) {
				FacilityCount += 1;
			}
		}
		while (FacilityCount < 2) {
			LastBuildID += 1
			const Template = {
				"build_id": LastBuildID,
				"fort_plant_detail_id": NewDetailID,
				"position_x": -1,
				"position_z": -1,
				"build_status": 0,
				"build_start_date": 0,
				"build_end_date": 0,
				"level": 10,
				"plant_id": DoubleFacilityID[id],
				"is_new": 0,
				"remain_time": 0,
				"last_income_date": -1
			}
			NewFaciList.push(Template);
			FacilityCount += 1;
		}
	}
	for (let id in DracolithFacilID) {
		if (res.locals.UserIndexRecord['build_list'].findIndex(x => x.plant_id == DracolithFacilID) == -1) {
			LastBuildID += 1;
			const NewDetailID = parseInt(String(DracolithFacilID[id]) + "01");
			const Template = {
				"build_id": LastBuildID,
				"fort_plant_detail_id": NewDetailID,
				"position_x": -1,
				"position_z": -1,
				"build_status": 0,
				"build_start_date": 0,
				"build_end_date": 0,
				"level": 1,
				"plant_id": DracolithFacilID[id],
				"is_new": 0,
				"remain_time": 0,
				"last_income_date": -1
			}
			NewFaciList.push(Template);
		}
	}
	res.locals.UserIndexRecord['build_list'] = NewFaciList;
	const LevelUp = 60 - res.locals.UserIndexRecord['user_data']['level'];
	if (LevelUp > 0) {
		const WyrmiteReward = LevelUp * 50; res.locals.UserIndexRecord['user_data']['crystal'] += WyrmiteReward; 
		res.locals.UserIndexRecord['user_data']['level'] = 60;
		res.locals.UserIndexRecord['user_data']['exp'] = 69990;
	}
	for (const i in FirstClearSet) {
		if (FirstClearSet[i]['type'] == 8) {
			const MatIndex = res.locals.UserIndexRecord['material_list'].findIndex(x => x.material_id == FirstClearSet[i]['id']);
			if (MatIndex != -1) { res.locals.UserIndexRecord['material_list'][MatIndex]['quantity'] += FirstClearSet[i]['quantity']; }
			else { res.locals.UserIndexRecord['material_list'].push({'material_id': FirstClearSet[i]['id'], 'quantity': FirstClearSet[i]['quantity']}); }
		}
	}
	res.locals.UserIndexRecord['user_data']['quest_skip_point'] = 30;
	res.locals.ResponseBody['data'] = {
		'result_state': 1,
		'update_data_list': {
			'user_data': res.locals.UserIndexRecord['user_data'],
			'chara_list': CharacterList,
			'dragon_list': DragonList,
			'unit_story_list': UnitStoryList,
			'dragon_reliability_list': DragonBond,
			'fort_bonus_list': res.locals.UserIndexRecord['fort_bonus_list'],
			'build_list': res.locals.UserIndexRecord['build_list']
		},
		'entity_result': { 'new_entity_get_list': EntityList }
	}
	res.locals.UpdatedIndexRecord = true;
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/mission/unlock_main_story_group", Android_Version + "/mission/unlock_main_story_group"], errorhandler(async (req, res, next) => {
	res.locals.UserIndexRecord['user_data']['tutorial_status'] = 60999;
	res.locals.UserIndexRecord['user_data']['tutorial_flag_list'] = IndexTools.TutorialFlagsList;
	res.locals.UserIndexRecord['current_main_story_mission']['main_story_mission_group_id'] = 11
	res.locals.UserIndexRecord['current_main_story_mission']['main_story_mission_state_list'] = [
		{
			'main_story_mission_id': 10110101,
			'state': 2
		},
		{
			'main_story_mission_id': 10110201,
			'state': 2
		},
		{
			'main_story_mission_id': 10110301,
			'state': 2
		},
		{
			'main_story_mission_id': 10110401,
			'state': 2
		},
		{
			'main_story_mission_id': 10110501,
			'state': 2
		}
	]
	res.locals.UserIndexRecord['quest_entry_condition_list'] = [
		{ "quest_entry_condition_id": 1 },
		{ "quest_entry_condition_id": 2 },
		{ "quest_entry_condition_id": 3 },
		{ "quest_entry_condition_id": 8 },
		{ "quest_entry_condition_id": 9 },
		{ "quest_entry_condition_id": 10 },
		{ "quest_entry_condition_id": 11 }
	]
	res.locals.UpdatedIndexRecord = true;
	res.locals.ResponseBody['data'] = {
		'main_story_mission_list': [], 
		'update_data_list': { 
			'user_data': res.locals.UserIndexRecord['user_data'], 
			'current_main_story_mission': {
				'main_story_mission_group_id': 11,
				'main_story_mission_state_list': [
					{
						'main_story_mission_id': 10110101,
						'state': 2
					},
					{
						'main_story_mission_id': 10110201,
						'state': 2
					},
					{
						'main_story_mission_id': 10110301,
						'state': 2
					},
					{
						'main_story_mission_id': 10110401,
						'state': 2
					},
					{
						'main_story_mission_id': 10110501,
						'state': 2
					}
				]
			},
			'quest_entry_condition_list': [
				{
					"quest_entry_condition_id": 1
				},
				{
					"quest_entry_condition_id": 2
				},
				{
					"quest_entry_condition_id": 3
				},
				{
					"quest_entry_condition_id": 8
				},
				{
					"quest_entry_condition_id": 9
				},
				{
					"quest_entry_condition_id": 10
				},
				{
					"quest_entry_condition_id": 11
				}
			]
		}
	}
	next();
}));
Orchis.post([iOS_Version + "/mission/get_mission_list", Android_Version + "/mission/get_mission_list"], errorhandler(async (req, res, next) => {
	const Cleared = DataManager.CheckDailyCompleted(res.locals.UserSessionRecord);
	if (Cleared != 0) {
		const AllIndex = res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'].findIndex(x => x.daily_mission_id == 15070601);
		if (res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][AllIndex]['state'] != 2) {
			if (Cleared == 5) {
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][AllIndex]['state'] = 1;
			}
			res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][AllIndex]['progress'] = Cleared;
		}
	}
	res.locals.ResponseBody['data'] = DataManager.MissionList(res.locals.UserSessionRecord, StaticData.DefaultMissionList);
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/mission/get_drill_mission_list", Android_Version + "/mission/get_drill_mission_list"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
		'drill_mission_list': [],
		'current_main_story_mission': [],
		'drill_mission_group_list': [],
		'mission_notice': []
	}
	next();
}));
Orchis.post([iOS_Version + "/mission/unlock_drill_mission_group", Android_Version + "/mission/unlock_drill_mission_group"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
		'drill_mission_list': []
	}
	next();
}));
Orchis.post([iOS_Version + "/mission/receive_daily_reward", Android_Version + "/mission/receive_daily_reward"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const MissionList = MsgPackData['mission_params_list'];
	let Table = [];
	for (let x in MissionList) {
		const MissionID = MissionList[x]['daily_mission_id'];
		const MissionDay = MissionList[x]['day_no'];
		switch(MissionID) {
			case 15070101: Table.push({'type': 14, 'id': 0, 'quantity': 300}); break;
			case 15070201: Table.push({'type': 2, 'id': 100602, 'quantity': 1}); break;
			case 15070301: Table.push({'type': 18, 'id': 0, 'quantity': 5000}); break;
			case 15070401: Table.push({'type': 8, 'id': 1130010030, 'quantity': 5}); break;
			case 15070501: Table.push({'type': 2, 'id': 100603, 'quantity': 5}); break;
			case 15070601: Table.push({'type': 23, 'id': 0, 'quantity': 50}); break;
		}
		const Index = res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'].findIndex(x => x.daily_mission_id == MissionID);
		res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Index]['state'] = 2;
	}
	const Parsed = DataManager.ItemParser(Table, res.locals.UserSessionRecord, res.locals.UserIndexRecord, "plain", 0);
	res.locals.ResponseBody['data'] = res.locals.UserSessionRecord['Endeavour']['Active']
	res.locals.ResponseBody['data']['not_received_mission_id_list_with_day_no'] = [];
	res.locals.ResponseBody['data']['update_data_list'] = Parsed[2];
	res.locals.ResponseBody['data']['update_data_list']['mission_notice'] = {
		'normal_mission_notice': res.locals.UserSessionRecord['QuestNotice']['NormalMission'],
		'daily_mission_notice': res.locals.UserSessionRecord['QuestNotice']['DailyMission'],
		'period_mission_notice': res.locals.UserSessionRecord['QuestNotice']['EventMission'],
		'beginner_mission_notice': res.locals.UserSessionRecord['QuestNotice']['BeginnerMission'],
		'special_mission_notice': res.locals.UserSessionRecord['QuestNotice']['SpecialMission'],
		'main_story_mission_notice': res.locals.UserSessionRecord['QuestNotice']['StoryMission'],
		'memory_event_mission_notice': res.locals.UserSessionRecord['QuestNotice']['CompendiumMission'],
		'drill_mission_notice': res.locals.UserSessionRecord['QuestNotice']['DrillMission'],
		'album_mission_notice': res.locals.UserSessionRecord['QuestNotice']['AlbumMission']
	}
	res.locals.ResponseBody['data']['update_data_list']['mission_notice']['daily_mission_notice']['is_update'] = 1;
	res.locals.ResponseBody['data']['update_data_list']['current_main_story_mission'] = [];
	res.locals.ResponseBody['data']['entity_result'] = Parsed[3];
	res.locals.ResponseBody['data']['converted_entity_list'] = [];
	res.locals.ResponseBody['data']['need_entry_event_id_list'] = [];
	res.locals.UserSessionRecord = Parsed[0];
	res.locals.UpdatedSessionRecord = true;
	res.locals.UserIndexRecord = Parsed[1];
	res.locals.UpdatedIndexRecord = true;
	next();
}));

Orchis.post([iOS_Version + "/item/get_list", Android_Version + "/item/get_list"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = { 'item_list': res.locals.UserIndexRecord['material_list'] }
	for (const i in res.locals.UserSessionRecord['EnergyItems']) {
		res.locals.ResponseBody['data']['item_list'].push(res.locals.UserSessionRecord['EnergyItems'][i]);
	}
	next();
}));
Orchis.post([iOS_Version + "/item/use_recovery_stamina", Android_Version + "/item/use_recovery_stamina"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const UseList = MsgPackData['use_item_list'];
	let RecoverType = 0; let RecoverAmount = 0; RecoverIndex = 0; let UpdateItemList = [];
	for (const i in UseList) {
		ItemCount = UseList[i]['item_quantity'];
		switch(UseList[i]['item_id']) {
			case 100601: RecoverType = 1006; RecoverAmount += 10 * ItemCount;
				RecoverIndex = res.locals.UserSessionRecord['EnergyItems'].findIndex(x => x.item_id == UseList[i]['item_id']); 
				res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]['quantity'] -= ItemCount; UpdateItemList.push(res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]); break;
			case 100602: RecoverType = 1006; RecoverAmount += 20 * ItemCount;
				RecoverIndex = res.locals.UserSessionRecord['EnergyItems'].findIndex(x => x.item_id == UseList[i]['item_id']); 
				res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]['quantity'] -= ItemCount; UpdateItemList.push(res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]); break;
			case 100603: RecoverType = 1006; RecoverAmount += 30 * ItemCount;
				RecoverIndex = res.locals.UserSessionRecord['EnergyItems'].findIndex(x => x.item_id == UseList[i]['item_id']); 
				res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]['quantity'] -= ItemCount; UpdateItemList.push(res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]); break;
			case 100604: RecoverType = 1006; RecoverAmount += 100 * ItemCount;
				RecoverIndex = res.locals.UserSessionRecord['EnergyItems'].findIndex(x => x.item_id == UseList[i]['item_id']); 
				res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]['quantity'] -= ItemCount; UpdateItemList.push(res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]); break;
			case 100605: RecoverType = 1006; RecoverAmount += 100 * ItemCount;
				RecoverIndex = res.locals.UserSessionRecord['EnergyItems'].findIndex(x => x.item_id == UseList[i]['item_id']); 
				res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]['quantity'] -= ItemCount; UpdateItemList.push(res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]); break;
			case 100606: RecoverType = 1006; RecoverAmount += 100 * ItemCount;
				RecoverIndex = res.locals.UserSessionRecord['EnergyItems'].findIndex(x => x.item_id == UseList[i]['item_id']); 
				res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]['quantity'] -= ItemCount; UpdateItemList.push(res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]); break;
			case 100607: RecoverType = 1006; RecoverAmount += 100 * ItemCount;
				RecoverIndex = res.locals.UserSessionRecord['EnergyItems'].findIndex(x => x.item_id == UseList[i]['item_id']); 
				res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]['quantity'] -= ItemCount; UpdateItemList.push(res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]); break;
			case 100608: RecoverType = 1006; RecoverAmount += 99 * ItemCount;
				RecoverIndex = res.locals.UserSessionRecord['EnergyItems'].findIndex(x => x.item_id == UseList[i]['item_id']); 
				res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]['quantity'] -= ItemCount; UpdateItemList.push(res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]); break;
			case 100609: RecoverType = 1006; RecoverAmount += 100 * ItemCount;
				RecoverIndex = res.locals.UserSessionRecord['EnergyItems'].findIndex(x => x.item_id == UseList[i]['item_id']); 
				res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]['quantity'] -= ItemCount; UpdateItemList.push(res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]); break;
			case 100701: RecoverType = 1007; RecoverAmount += 1 * ItemCount;
				RecoverIndex = res.locals.UserSessionRecord['EnergyItems'].findIndex(x => x.item_id == UseList[i]['item_id']); 
				res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]['quantity'] -= ItemCount; UpdateItemList.push(res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]); break;
			case 100702: RecoverType = 1007; RecoverAmount += 6 * ItemCount;
				RecoverIndex = res.locals.UserSessionRecord['EnergyItems'].findIndex(x => x.item_id == UseList[i]['item_id']); 
				res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]['quantity'] -= ItemCount; UpdateItemList.push(res.locals.UserSessionRecord['EnergyItems'][RecoverIndex]); break;
		}
	}
	let TypeString = ""; if (RecoverType == 1006) { TypeString = "stamina_single"; } else if (RecoverType == 1007) { TypeString = "stamina_multi"; }
	const NewTotal = res.locals.UserIndexRecord['user_data'][TypeString] + RecoverAmount;
	if (RecoverType == 1006 && NewTotal > 999) { res.locals.UserIndexRecord['user_data'][TypeString] = 999; }
	else if (RecoverType == 1007 && NewTotal > 99) { res.locals.UserIndexRecord['user_data'][TypeString] = 99; }
	else { res.locals.UserIndexRecord['user_data'][TypeString] += RecoverAmount; }
	res.locals.ResponseBody['data'] = {
		'recover_data': { 'recover_stamina_type': RecoverType, 'recover_stamina_point': RecoverAmount },
		'update_data_list': {
			'user_data': res.locals.UserIndexRecord['user_data'],
			'item_list': UpdateItemList
		}
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));

Orchis.post([iOS_Version + "/album/index", Android_Version + "/album/index"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
		'album_dragon_list': res.locals.UserIndexRecord['album_dragon_list'],
		'album_quest_play_record_list': [],
		'chara_honor_list': res.locals.UserSessionRecord['AlbumData']['Medals'],
		'album_passive_update_list': { 'is_update_chara': 0, 'is_update_dragon': 0 } }
	next();
}));

Orchis.post([iOS_Version + "/shop/get_list", Android_Version + "/shop/get_list"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
		'is_quest_bonus': 0, 'is_stone_bonus': 0, 'is_stamina_bonus': 0, 'stone_bonus': [], 'stamina_bonus': [], 'quest_bonus': [],
		'material_shop_purchase': [], 'normal_shop_purchase': [], 'special_shop_purchase': [], 'product_lock_list': [],
		'user_item_summon': { 'daily_summon_count': res.locals.UserSessionRecord['SummonRecord']['ItemCount'], 'last_summon_time': LastServerReset },
		'product_list': [], 'infancy_paid_diamond_limit': 0
	}
	next();
}));
Orchis.post([iOS_Version + "/shop/item_summon_odd", Android_Version + "/shop/item_summon_odd"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
		'item_summon_rate_list': [
			{ 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 10000, 'entity_rate': "0.001%" },
			{ 'entity_type': 17, 'entity_id': 10102, 'entity_quantity': 10, 'entity_rate': "0.005%" },
			{ 'entity_type': 14, 'entity_id': 0, 'entity_quantity': 100000, 'entity_rate': "0.10%" },
			{ 'entity_type': 8, 'entity_id': 125001001, 'entity_quantity': 1, 'entity_rate': "1.00%" },
			{ 'entity_type': 8, 'entity_id': 111002001, 'entity_quantity': 4, 'entity_rate': "1.00%" },
			{ 'entity_type': 8, 'entity_id': 112003001, 'entity_quantity': 1, 'entity_rate': "1.00%" },
			{ 'entity_type': 8, 'entity_id': 114002001, 'entity_quantity': 4, 'entity_rate': "1.00%" },
			{ 'entity_type': 8, 'entity_id': 111001001, 'entity_quantity': 4, 'entity_rate': "5.00%" },
			{ 'entity_type': 8, 'entity_id': 112002001, 'entity_quantity': 1, 'entity_rate': "5.00%" },
			{ 'entity_type': 8, 'entity_id': 114001001, 'entity_quantity': 4, 'entity_rate': "5.00%" },
			{ 'entity_type': 8, 'entity_id': 104003002, 'entity_quantity': 1, 'entity_rate': "5.00%" }
		]
	}
	next();
}));
Orchis.post([iOS_Version + "/shop/item_summon_exec", Android_Version + "/shop/item_summon_exec"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	if (res.locals.UserSessionRecord['SummonRecord']['ItemCount'] == undefined) {res.locals.UserSessionRecord['SummonRecord']['ItemCount'] = 0;}
	let SummonList = [];
	let i = 0; while (i < 10) {
		let DrawData = "";
		if (i > 4) { DrawData = ShopMap.DrawShopItemSpecial(); }
		else { DrawData = ShopMap.DrawShopItem(); }
		SummonList.push(DrawData);
		i++;
	}
	const ParsedData = DataManager.ItemParser(SummonList, res.locals.UserSessionRecord, res.locals.UserIndexRecord, "entity");
	res.locals.UserSessionRecord = ParsedData[0]; res.locals.UserIndexRecord = ParsedData[1];
	let UpdateData = ParsedData[2]; let EntityList = ParsedData[3];
	res.locals.ResponseBody['data'] = {
		'user_item_summon': { 'daily_summon_count': res.locals.UserSessionRecord['SummonRecord']['ItemCount'],
							  'last_summon_time': Math.floor(Date.now() / 1000) },
		'item_summon_reward_list': SummonList,
		'update_data_list': UpdateData
	}
	res.locals.UserSessionRecord['SummonRecord']['ItemCount'] += 1;
	
	res.locals.DailyMissions.push(15070101);
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/shop/material_shop_purchase", Android_Version + "/shop/material_shop_purchase"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const ShopID = MsgPackData['goods_id']; const PurchaseCount = MsgPackData['quantity'];
	const ShopData = ShopMap.GetMaterialShopData(ShopID, PurchaseCount);
	switch(ShopData['Cost']['type']) {
		case 2:
			res.locals.UserSessionRecord['Diamantium'] -= ShopData['Cost']['quantity'];
			break;
		case 4:
			res.locals.UserIndexRecord['user_data']['coin'] -= ShopData['Cost']['quantity'];
			break;
		case 23:
			res.locals.UserIndexRecord['user_data']['crystal'] -= ShopData['Cost']['quantity'];
			break;
	}
	const Parsed = DataManager.ItemParser(ShopData['Purchase'], res.locals.UserSessionRecord, res.locals.UserIndexRecord, "plain", 0);
	const Now = Math.floor(Date.now() / 1000);
	res.locals.ResponseBody['data'] = {
		'is_quest_bonus': 0,
		'is_stone_bonus': 0,
		'is_stamina_bonus': 0,
		'material_shop_purchase': [
			{
				'goods_id': ShopID,
				'last_buy_time': Now,
				'effect_start_time': 0,
				'effect_end_time': 0,
				'buy_count': PurchaseCount
			}
		],
		'update_data_list': Parsed[2]
	}
	res.locals.UserSessionRecord = Parsed[0];
	res.locals.UpdatedSessionRecord = true;
	res.locals.UserIndexRecord = Parsed[1];
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/ability_crest_trade/get_list", Android_Version + "/ability_crest_trade/get_list"], async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
		'user_ability_crest_trade_list': res.locals.UserSessionRecord['CrestTrade'],
		'ability_crest_trade_list': ShopMap.WyrmprintTrade
	}
	next();
});
Orchis.post([iOS_Version + "/ability_crest_trade/trade", Android_Version + "/ability_crest_trade/trade"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const TradeID = MsgPackData['ability_crest_trade_id'];
	const NewPrintData = WyrmprintMap.CreateWyrmprintFromGift(ShopMap.GetTradePrintID(TradeID));
	res.locals.UserIndexRecord['user_data']['dew_point'] -= ShopMap.GetPrintTradeCost(TradeID);
	res.locals.UserIndexRecord['ability_crest_list'].push(NewPrintData);
	res.locals.UserSessionRecord['CrestTrade'].push({"ability_crest_trade_id": TradeID, "trade_count": 1});
	res.locals.ResponseBody['data'] = {
		'user_ability_crest_trade_list': res.locals.UserSessionRecord['CrestTrade'],
		'ability_crest_trade_list': ShopMap.WyrmprintTrade,
		'update_data_list': {
			'ability_crest_list': [ NewPrintData ],
			'user_data': res.locals.UserIndexRecord['user_data']
		}
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/treasure_trade/get_list_all", Android_Version + "/treasure_trade/get_list_all"], async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
		'user_treasure_trade_list': res.locals.UserIndexRecord['user_treasure_trade_list'],
		'treasure_trade_all_list': ShopMap.TreasureTrade,
		'dmode_info': res.locals.UserSessionRecord['Kaleidoscape']['DmodeInfo']
	}
	next();
});
Orchis.post([iOS_Version + "/treasure_trade/trade", Android_Version + "/treasure_trade/trade"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const TradeID = MsgPackData['treasure_trade_id']; const TradeCount = MsgPackData['trade_count'];
	const FinalizedTrade = ShopMap.TradeTreasure(TradeID, TradeCount, res.locals.UserIndexRecord, res.locals.UserSessionRecord);
	res.locals.ResponseBody['data'] = FinalizedTrade[0];
	res.locals.UserSessionRecord = FinalizedTrade[2];
	res.locals.UpdatedSessionRecord = true;
	res.locals.UserIndexRecord = FinalizedTrade[1];
	res.locals.UpdatedIndexRecord = true;
	next();
}));

//Orchis.post([iOS_Version + "/guild/establish", Android_Version + "/guild/establish"], errorhandler(async (req, res, next) => {}));
Orchis.post([iOS_Version + "/guild/update_user_setting", Android_Version + "/guild/update_user_setting"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	if (MasterGuildDatabase[String(res.locals.UserIndexRecord['user_guild_data']['guild_id'])] == undefined) {
		res.locals.ResponseBody['data'] = {
			'update_data_list': {
				'user_guild_data': {
					"guild_id": res.locals.UserIndexRecord['user_guild_data']['guild_id'],
					"guild_apply_id": 0,
					"penalty_end_time": 0,
					"guild_push_notification_type_running": MsgPackData['guild_push_notification_type_running'],
					"guild_push_notification_type_suspending": MsgPackData['guild_push_notification_type_suspending'],
					"profile_entity_type": MsgPackData['profile_entity_type'],
					"profile_entity_id": MsgPackData['profile_entity_id'],
					"profile_entity_rarity": MsgPackData['profile_entity_rarity'],
					"last_attend_time": 0,
					"is_enable_invite_receive": MsgPackData['is_enable_invite_receive'],
					"is_enable_invite_send": 1	
				},
				'guild_data': {}
			}
		}
		next();
		return;
	}
	const UserGuildData = {
		"guild_id": res.locals.UserIndexRecord['user_guild_data']['guild_id'],
		"guild_apply_id": 0,
		"penalty_end_time": 0,
		"guild_push_notification_type_running": MsgPackData['guild_push_notification_type_running'],
		"guild_push_notification_type_suspending": MsgPackData['guild_push_notification_type_suspending'],
		"profile_entity_type": MsgPackData['profile_entity_type'],
		"profile_entity_id": MsgPackData['profile_entity_id'],
		"profile_entity_rarity": MsgPackData['profile_entity_rarity'],
		"last_attend_time": 0,
		"is_enable_invite_receive": MsgPackData['is_enable_invite_receive'],
		"is_enable_invite_send": 1	
	}
	const UpdateGuildUser = {
		'viewer_id': res.locals.UserIndexRecord['user_data']['viewer_id'],
		'user_name': res.locals.UserIndexRecord['user_data']['name'],
		'user_level': res.locals.UserIndexRecord['user_data']['level'],
		'max_party_power': res.locals.UserIndexRecord['party_power_data']['max_party_power'],
		'profile_entity_type': MsgPackData['profile_entity_type'],
		'profile_entity_id': MsgPackData['profile_entity_id'],
		'profile_entity_rarity': MsgPackData['profile_entity_rarity'],
		'last_active_time': res.locals.UserIndexRecord['user_data']['last_login_time'],
		'last_guild_active_time': Math.floor(Date.now() / 1000),
		'last_attend_time': Math.floor(Date.now() / 1000),
		'guild_position_type': 3,
		'temporary_end_time': 0
	}
	const GuildUserIndex = MasterGuildDatabase[String(res.locals.UserIndexRecord['user_guild_data']['guild_id'])]['Users'].findIndex(x => x.viewer_id == res.locals.UserIndexRecord['user_data']['viewer_id']);
	MasterGuildDatabase[String(res.locals.UserIndexRecord['user_guild_data']['guild_id'])]['Users'][GuildUserIndex] = UpdateGuildUser;
	res.locals.UserIndexRecord['user_guild_data'] = UserGuildData;
	res.locals.UpdatedIndexRecord = true;
	res.locals.ResponseBody['data']['update_data_list'] = {
		'user_guild_data': UserGuildData,
		'guild_data': MasterGuildDatabase[String(res.locals.UserIndexRecord['user_guild_data']['guild_id'])]['BoardData']
	}
	next();
}));
Orchis.post([iOS_Version + "/guild/index", Android_Version + "/guild/index"], errorhandler(async (req, res, next) => {
	if (res.locals.UserIndexRecord['user_guild_data'] == undefined) {
		res.locals.UserIndexRecord = AssignGuildData(10001, res.locals.UserIndexRecord);
	}
	const GuildID = res.locals.UserIndexRecord['user_guild_data']['guild_id'];
	/*if (GuildID == 0 && res.locals.UserIndexRecord['user_guild_data']['profile_entity_id'] == undefined) {
		res.locals.UserIndexRecord = AssignGuildData(10001, res.locals.UserIndexRecord);
		res.locals.UpdatedIndexRecord = true;
	}*/
	if (MasterGuildDatabase[String(GuildID)] == undefined) {
		res.locals.UserIndexRecord['guild_data']['guild_member_count'] = 0;
		const Response = msgpack.pack({'data_headers': { 'result_code': 1 }, 'data': {
			'is_update_guild_postition_type': 0,
			'attend_bonus_list': [],
			'guild_invite_receive_count': 0,
			'guild_member_list': [],
			'guild_apply_list': [],
			'guild_invite_send_list': [],
			'guild_chat_message_list': [],
			'polling_interval': 5,
			'current_server_time': Math.floor(Date.now() / 1000),
			'update_data_list': {'user_guild_data': res.locals.UserIndexRecord['user_guild_data'], 'guild_data': res.locals.UserIndexRecord['guild_data'],
				'guild_notice': {
					'is_update_guild_apply_reply': 0,
					'guild_apply_count': 0,
					'is_update_guild_board': 0,
					'is_update_guild': 0,
					'is_update_guild_invite': 0
				}}
		}});
		res.set(ResHeaders(Response.length)); res.end(Response); return; }
	let ChatList = [];
	let MemberList = [];
	const ReversedGDB = MasterGuildDatabase[String(GuildID)]['Users'].reverse();
	let i = 0; while (i < 26) {
		if (i == MasterGuildDatabase[String(GuildID)]['Chat'].length) { break; }
		ChatList.push(MasterGuildDatabase[String(GuildID)]['Chat'][i]);
		MemberList.push(ReversedGDB[i]);
		i++;
	}
	const GuildIndex = MasterGuildDatabase[String(GuildID)]['Users'].findIndex(x => x.viewer_id == res.locals.UserSessionRecord['ViewerID']);
	if (GuildIndex != -1) {
		MemberList.push(MasterGuildDatabase[String(GuildID)]['Users'][GuildIndex]);
	}
	res.locals.ResponseBody['data'] = {
		'is_update_guild_postition_type': 0,
		'attend_bonus_list': [],
		'guild_invite_receive_count': 0,
		'guild_member_list': MemberList, //MasterGuildDatabase[String(GuildID)]['Users'],
		'guild_apply_list': [],
		'guild_invite_send_list': [],
		'guild_chat_message_list': ChatList,
		'current_server_time': Math.floor(Date.now() / 1000),
		'polling_interval': 10,
		'update_data_list': {
			'user_guild_data': res.locals.UserIndexRecord['user_guild_data'],
			'guild_data': MasterGuildDatabase[String(GuildID)]['BoardData'],
			'guild_notice': {
				'is_update_guild_apply_reply': 0,
				'guild_apply_count': 0,
				'is_update_guild_board': 0,
				'is_update_guild': 0,
				'is_update_guild_invite': 0
			}
		}
	}
	//res.locals.ResponseBody['data']['update_data_list']['guild_data']['guild_id'] = 100000;
	//res.locals.ResponseBody['data']['update_data_list']['guild_data']['activity_policy_type'] = 5;
	//res.locals.ResponseBody['data']['update_data_list']['user_guild_data']['guild_id'] = 100000;
	//res.locals.ResponseBody['data']['update_data_list']['user_guild_data']['penalty_end_time'] = 1005430040;
	res.locals.ResponseBody['data']['update_data_list']['user_guild_data']['last_attend_time'] = res.locals.UserSessionRecord['GuildLastCheck'];
	res.locals.UserSessionRecord['GuildLastCheck'] = Math.floor(Date.now() / 1000);
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/guild_chat/get_new_message_list", Android_Version + "/guild_chat/get_new_message_list"], errorhandler(async (req, res, next) => {
	const GuildID = res.locals.UserIndexRecord['user_guild_data']['guild_id'];
	if (MasterGuildDatabase[String(GuildID)] == undefined) {
		const Response = msgpack.pack({'data_headers': { 'result_code': 1 }, 'data': {
			'guild_chat_message_list': [],
			'polling_interval': 900
		}});
		res.set(ResHeaders(Response.length)); res.end(Response); return; }
	let ChatList = [];
	let i = 0; while (i < 26) {
		if (i == MasterGuildDatabase[String(GuildID)]['Chat'].length) { break; }
		if (MasterGuildDatabase[String(GuildID)]['Chat'][i]['create_time'] > res.locals.UserSessionRecord['GuildLastCheck']) {
			ChatList.push(MasterGuildDatabase[String(GuildID)]['Chat'][i]);
		}
		i++;
	}
	res.locals.ResponseBody['data'] = {
		'guild_chat_message_list': ChatList,
		'polling_interval': 10
	}
	res.locals.UserSessionRecord['GuildLastCheck'] = Math.floor(Date.now() / 1000);
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/guild_chat/get_old_message_list", Android_Version + "/guild_chat/get_old_message_list"], errorhandler(async (req, res, next) => {
	const GuildID = res.locals.UserIndexRecord['user_guild_data']['guild_id'];
	const MsgPackData = msgpack.unpack(req.body);
	if (MasterGuildDatabase[String(GuildID)] == undefined) {
		const Response = msgpack.pack({'data_headers': { 'result_code': 1 }, 'data': {
			'guild_chat_message_list': [],
			'polling_interval': 900
		}});
		res.set(ResHeaders(Response.length)); res.end(Response); return; }
	let ChatList = [];
	const Offset = MasterGuildDatabase[String(GuildID)]['Chat'].findIndex(x => x.chat_message_id == MsgPackData['chat_message_id']);
	const SaneCount = 26 + Offset;
	let i = 0 + Offset; while (i < SaneCount) {
		if (i == MasterGuildDatabase[String(GuildID)]['Chat'].length) { break; }
		ChatList.push(MasterGuildDatabase[String(GuildID)]['Chat'][i]);
		i++;
	}
	res.locals.ResponseBody['data'] = {
		'guild_chat_message_list': ChatList,
		'polling_interval': 10
	}
	res.locals.UserSessionRecord['GuildLastCheck'] = Math.floor(Date.now() / 1000);
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/guild_chat/post_message_text", Android_Version + "/guild_chat/post_message_text"], errorhandler(async (req, res, next) => {
	const GuildID = res.locals.UserIndexRecord['user_guild_data']['guild_id'];
	const MsgPackData = msgpack.unpack(req.body);
	if (MasterGuildDatabase[String(GuildID)] == undefined) {
		const Response = msgpack.pack({'data_headers': { 'result_code': 1 }, 'data': {
			'guild_chat_message_list': [],
			'polling_interval': 10
		}});
		res.set(ResHeaders(Response.length)); res.end(Response); return; }
	const MessageID = MsgPackData['chat_message_id']; let Message = MsgPackData['chat_message_text'];
	if (Message.length > 500) { Message = Message.slice(0, 500); }
	if (Filter.Validate(Message)) { res.end(msgpack.pack({'data_headers':{"result_code": 28012},'data':{"result_code": 28012}})); return; }
	
	const NextMessageID = MasterGuildDatabase[String(GuildID)]['Chat'][0]['chat_message_id'] + 1;
	
	let UserName = res.locals.UserIndexRecord['user_data']['name'];
	if (UserName == undefined || UserName == null || typeof UserName != "string") { UserName = "Euden"; }
	let ProfileType = res.locals.UserIndexRecord['user_guild_data']['profile_entity_type'];
	if (ProfileType == undefined || ProfileType == null || ProfileType <= 0 || typeof ProfileType != "number" || isNaN(ProfileType)) { ProfileType = 1; }
	let ProfileID = res.locals.UserIndexRecord['user_guild_data']['profile_entity_id'];
	if (ProfileID == undefined || ProfileID == null || ProfileID <= 0 || typeof ProfileID != "number" || isNaN(ProfileID)) { ProfileID = 10140101; }
	let ProfileRarity = res.locals.UserIndexRecord['user_guild_data']['profile_entity_rarity'];
	if (ProfileRarity == undefined || ProfileRarity == null || ProfileRarity <= 0 || typeof ProfileRarity != "number" || isNaN(ProfileRarity)) { ProfileRarity = 5; }
	
	const ChatMessageTemplate = {
		'chat_message_id': NextMessageID,
		'viewer_id': res.locals.UserIndexRecord['user_data']['viewer_id'],
		'user_name': UserName,
		'profile_entity_type': ProfileType,
		'profile_entity_id': ProfileID,
		'profile_entity_rarity': ProfileRarity,
		'chat_message_type': 1,
		'chat_message_text': Message,
		'chat_message_stamp_id': 0,
		'chat_message_system_id': 0,
		'chat_message_param_value_1': 0,
		'chat_message_param_value_2': 0,
		'chat_message_param_value_3': 0,
		'chat_message_param_value_4': 0,
		'create_time': Math.floor(Date.now() / 1000)
	}
	MasterGuildDatabase[String(GuildID)]['Chat'].unshift(ChatMessageTemplate);
	let ChatList = [];
	let i = 0; while (i < 26) {
		if (i == MasterGuildDatabase[String(GuildID)]['Chat'].length) { break; }
		ChatList.push(MasterGuildDatabase[String(GuildID)]['Chat'][i]);
		i++;
	}
	res.locals.ResponseBody['data'] = {
		'guild_chat_message_list': ChatList,
		'polling_interval': 5
	}
	next();
	
	SendToZena("/zena/new_guild_message", JSON.stringify({
		'name': ChatMessageTemplate['user_name'],
		'viewerid': ChatMessageTemplate['viewer_id'],
		'message_type': 1,
		'message': ChatMessageTemplate['chat_message_text'],
		'stamp': 0,
		'icon': {
			'type': ChatMessageTemplate['profile_entity_type'],
			'id': ChatMessageTemplate['profile_entity_id'],
			'rarity': ChatMessageTemplate['profile_entity_rarity']
		}
	}));
}));
Orchis.post([iOS_Version + "/guild_chat/post_message_stamp", Android_Version + "/guild_chat/post_message_stamp"], errorhandler(async (req, res, next) => {
	const GuildID = res.locals.UserIndexRecord['user_guild_data']['guild_id'];
	const MsgPackData = msgpack.unpack(req.body);
	if (MasterGuildDatabase[String(GuildID)] == undefined) {
		const Response = msgpack.pack({'data_headers': { 'result_code': 1 }, 'data': {
			'guild_chat_message_list': [],
			'polling_interval': 900
		}});
		res.set(ResHeaders(Response.length)); res.end(Response); return; }
	const MessageID = MsgPackData['chat_message_id']; let Stamp = MsgPackData['chat_message_stamp_id'];
	const NextMessageID = MasterGuildDatabase[String(GuildID)]['Chat'][0]['chat_message_id'] + 1;
	
	let ProfileType = res.locals.UserIndexRecord['user_guild_data']['profile_entity_type'];
	if (ProfileType == undefined || ProfileType == null || ProfileType < 0) { ProfileType = 1; }
	let ProfileID = res.locals.UserIndexRecord['user_guild_data']['profile_entity_id'];
	if (ProfileID == undefined || ProfileID == null || ProfileID < 0) { ProfileID = 10140101; }
	let ProfileRarity = res.locals.UserIndexRecord['user_guild_data']['profile_entity_rarity'];
	if (ProfileRarity == undefined || ProfileRarity == null || ProfileRarity < 0) { ProfileRarity = 5; }
	
	const ChatMessageTemplate = {
		'chat_message_id': NextMessageID,
		'viewer_id': res.locals.UserIndexRecord['user_data']['viewer_id'],
		'user_name': res.locals.UserIndexRecord['user_data']['name'],
		'profile_entity_type': ProfileType,
		'profile_entity_id': ProfileID,
		'profile_entity_rarity': ProfileRarity,
		'chat_message_type': 2,
		'chat_message_text': "",
		'chat_message_stamp_id': Stamp,
		'chat_message_system_id': 0,
		'chat_message_param_value_1': 0,
		'chat_message_param_value_2': 0,
		'chat_message_param_value_3': 0,
		'chat_message_param_value_4': 0,
		'create_time': Math.floor(Date.now() / 1000)
	}
	MasterGuildDatabase[String(GuildID)]['Chat'].unshift(ChatMessageTemplate);
	let ChatList = [];
	let i = 0; while (i < 26) {
		if (i == MasterGuildDatabase[String(GuildID)]['Chat'].length) { break; }
		ChatList.push(MasterGuildDatabase[String(GuildID)]['Chat'][i]);
		i++;
	}
	res.locals.ResponseBody['data'] = {
		'guild_chat_message_list': ChatList,
		'polling_interval': 10
	}
	next();
	
	SendToZena("/zena/new_guild_message", JSON.stringify({
		'name': ChatMessageTemplate['user_name'],
		'viewerid': ChatMessageTemplate['viewer_id'],
		'message_type': 2,
		'message': "",
		'stamp': ChatMessageTemplate['chat_message_stamp_id'],
		'icon': {
			'type': ChatMessageTemplate['profile_entity_type'],
			'id': ChatMessageTemplate['profile_entity_id'],
			'rarity': ChatMessageTemplate['profile_entity_rarity']
		}
	}));
}));
Orchis.post([iOS_Version + "/guild/get_guild_member_data", Android_Version + "/guild/get_guild_member_data"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const GuildID = MsgPackData['guild_id'];
	let MemberList = [];
	if (MasterGuildDatabase[String(GuildID)] != undefined) {
		const NewList = MasterGuildDatabase[String(GuildID)]['Users'].reverse();
		let i = 20; while (i > 0) {
			if (MemberList.length == MasterGuildDatabase[String(GuildID)]['Users'].length) { break; }
			MemberList.push(NewList[i]);
			i--;
		}
	}
	res.locals.ResponseBody['data'] = {
		'guild_member_list': MemberList
	}
	next();
}));

Orchis.post([iOS_Version + "/quest/get_support_user_list", Android_Version + "/quest/get_support_user_list"], async (req, res, next) => {
	const Serialized = msgpack.pack(SupportData); res.set(ResHeaders(Serialized.length)); res.end(Serialized);
});
Orchis.post([iOS_Version + "/quest/get_quest_clear_party", Android_Version + "/quest/get_quest_clear_party",
iOS_Version + "/quest/get_quest_clear_party_multi", Android_Version + "/quest/get_quest_clear_party_multi"], async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const QuestID = String(MsgPackData['quest_id']);
	let TeamData = [];
	if (ExceptionList.includes(QuestID) || !NoTrackList.includes(QuestID.slice(0, 3))) {
		const UserTeamRecord = await Fluoresce.Read("MasterTeamRecord", res.locals.UserSessionRecord['ViewerID']);
		if (UserTeamRecord[QuestID] != undefined) { TeamData = UserTeamRecord[QuestID]; }
	}
	res.locals.ResponseBody['data'] = {
		'quest_clear_party_setting_list': TeamData,
		'lost_unit_list': []
	}
	next();
});
Orchis.post([iOS_Version + "/quest/set_quest_clear_party", Android_Version + "/quest/set_quest_clear_party",
iOS_Version + "/quest/set_quest_clear_party_multi", Android_Version + "/quest/set_quest_clear_party_multi"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const QuestID = String(MsgPackData['quest_id']);
	if (ExceptionList.includes(QuestID) || !NoTrackList.includes(QuestID.slice(0, 3))) {
		let UserTeamRecord = await Fluoresce.Read("MasterTeamRecord", res.locals.UserSessionRecord['ViewerID']);
		UserTeamRecord[QuestID] = MsgPackData['request_party_setting_list'];
		await Fluoresce.Write("MasterTeamRecord", res.locals.UserSessionRecord['ViewerID'], UserTeamRecord);
	}
	res.locals.ResponseBody['data'] = { 'result': 1 }
	next();
}));
Orchis.post([iOS_Version + "/quest/drop_list", Android_Version + "/quest/drop_list"], async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
		'quest_drop_info': { 
			'drop_info_list': [], 
			'host_drop_info_list': [], 
			'fever_drop_info_list': [], 
			'quest_bonus_info_list': [], 
			'quest_reborn_bonus_info_list': [], 
			'campaign_extra_reward_info_list': []
		}
	}
	next();
});

Orchis.post([iOS_Version + "/dungeon_start/start", Android_Version + "/dungeon_start/start"], errorhandler(async (req, res, next) => {
	const ViewerID = res.locals.UserSessionRecord['ViewerID'];
	const DungeonKey = crypto.randomBytes(16).toString("hex");
	const MsgPackData = msgpack.unpack(req.body); const QuestID = MsgPackData['quest_id']; if (typeof QuestID === 'string') { res.end(); return; }
	const PartyNo_List = MsgPackData['party_no_list'];
	LogFile.write("Starting Quest " + QuestID + "\n");
	const SupportViewerID = MsgPackData['support_viewer_id']; let SupportSessionRecord = {}; let SupportIndexRecord = {};
	let PartyNumberList = []; let PartyListData = [];
	PartyListData = DataManager.PopulateUnitData(PartyNo_List, ViewerID, res.locals.UserIndexRecord, res.locals.UserSessionRecord, QuestID);
	let AreaInfo = QuestMap.GetQuestInfo(QuestID, "area_info");
	if (res.locals.UserSessionRecord['DungeonRecord']['SetFixedTeam'] == 1) { PartyListData[0]['party_unit_list'] = res.locals.UserSessionRecord['DungeonRecord']['FixedTeamData']; }
	if (res.locals.UserSessionRecord['DungeonRecord']['SetFixedArea'] == 1) { AreaInfo = res.locals.UserSessionRecord['DungeonRecord']['FixedAreaData']; }
	res.locals.UserSessionRecord['DungeonRecord']['IsSkipping'] = false;
	res.locals.UserSessionRecord['DungeonRecord']['LastQuestID'] = QuestID;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonKey'] = DungeonKey;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonStep'] = 0;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonIsHost'] = 1;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonPlayType'] = 1;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonStartedAt'] = Math.floor(Date.now() / 1000);
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonPartyNumber'] = PartyNumberList;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonPartyData'] = PartyListData[0]['party_unit_list'];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonPartySettings'] = PartyListData[1];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportPlayer'] = [];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'] = [];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'][0] = [];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'][1] = [];
	res.locals.UserSessionRecord['DungeonRecord']['DidRareSpawn'] = false;
	res.locals.UserSessionRecord['DungeonRecord']['DropTable'] = QuestMap.GetQuestDrops(QuestID, EventList, PartyListData[0]['party_unit_list']);
	if (res.locals.UserSessionRecord['DungeonRecord']['Repeat'] == undefined) { res.locals.UserSessionRecord['DungeonRecord']['Repeat'] = {}; }
	if (MsgPackData['repeat_state'] == 1) {
		if (MsgPackData['repeat_setting'] != null) {
			res.locals.UserSessionRecord['DungeonRecord']['Repeat'] = {
				'active': 1,
				'key': crypto.randomBytes(16).toString("hex"),
				'count': MsgPackData['repeat_setting']['repeat_count'],
				'track': 1,
				'drops': [],
				'event_points': 0,
				'boost_points': 0,
				'total_coin': 0
			}
		}
		else { res.locals.UserSessionRecord['DungeonRecord']['Repeat']['track'] += 1; }
	}
	else { res.locals.UserSessionRecord['DungeonRecord']['Repeat']['active'] = 0; }
		
	if (SupportViewerID != 0) {
		const SupportAccountRecord = await Fluoresce.Read("MasterAccountRecord", SupportViewerID);
		SupportSessionRecord = await ReadSessionRecord(SupportAccountRecord['SessionID']); SupportIndexRecord = await ReadIndexRecord(SupportViewerID);
		res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportPlayer'].push({'viewer_id': SupportViewerID, 'get_mana_point': 25, 'is_friend': 1, 'apply_send_status': 0});
		res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'] = DataManager.PopulateSupportData(SupportSessionRecord, SupportIndexRecord);
		PartyListData[0]['support_data'] = res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'][0]; }
	let ReviveLimit = QuestMap.GetQuestInfo(QuestID, "revives"); if (ReviveLimit == undefined) { ReviveLimit = 0; }
	res.locals.ResponseBody['data'] = {
		'ingame_data': {
			'viewer_id': ViewerID, 'dungeon_key': DungeonKey,
			'dungeon_type': QuestMap.GetQuestInfo(QuestID, "type"),
		   	'play_type': 1, 'quest_id': QuestID, 'is_host': 1,
		   	'continue_limit': QuestMap.GetQuestInfo(QuestID, "continues"),
		   	'reborn_limit': ReviveLimit,
		   	'start_time': Math.floor(Date.now() / 1000),
		   	'party_info': PartyListData[0], 'area_info_list': AreaInfo,
			'use_stone': 50, 'is_fever_time': 0, 'repeat_state': MsgPackData['repeat_state'],
		   	'is_use_event_chara_ability': 0, 'event_ability_chara_list': [],
		   	'is_bot_tutorial': 0, 'is_receivable_carry_bonus': 0,
			'first_clear_viewer_id_list': [], 'multi_disconnect_type': 0,
		},
		'ingame_quest_data': DataManager.GetPlayerQuestDataShort(QuestID, res.locals.UserIndexRecord),
		'odds_info': QuestMap.GenerateOddsList(QuestID, res.locals.UserSessionRecord, res.locals.UserSessionRecord['DungeonRecord']['LastDungeonStep'])
	}
	const QuestIndex = res.locals.UserIndexRecord['quest_list'].findIndex(x => x.quest_id == res.locals.UserSessionRecord['DungeonRecord']['LastQuestID']);
	if (QuestIndex == -1) {
		const QuestEntry = {
			'quest_id': res.locals.UserSessionRecord['DungeonRecord']['LastQuestID'],
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
		res.locals.ResponseBody['data']['update_data_list'] = { 'quest_list': [ QuestEntry ] }
		res.locals.UserIndexRecord['quest_list'].push(QuestEntry);
		res.locals.UpdatedIndexRecord = true;
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dungeon_start/start_assign_unit", Android_Version + "/dungeon_start/start_assign_unit"], errorhandler(async (req, res, next) => {
	const ViewerID = res.locals.UserSessionRecord['ViewerID'];
	const DungeonKey = crypto.randomBytes(16).toString("hex");
	const MsgPackData = msgpack.unpack(req.body); const QuestID = MsgPackData['quest_id']; if (typeof QuestID === 'string') { res.end(); }
	const PartyList = MsgPackData['request_party_setting_list'];
	const SupportViewerID = MsgPackData['support_viewer_id']; let SupportSessionRecord = {}; let SupportIndexRecord = {};
	let PartyListData = []; let DungeonTypeID = 1; if (PartyList.length > 4) { DungeonTypeID = 15; }
	PartyListData = DataManager.PopulateAssignedUnitData(PartyList, ViewerID, res.locals.UserIndexRecord, res.locals.UserSessionRecord, QuestID);
	let AreaInfo = QuestMap.GetQuestInfo(QuestID, "area_info");
	if (res.locals.UserSessionRecord['DungeonRecord']['SetFixedTeam'] == 1) { PartyListData[0]['party_unit_list'] = res.locals.UserSessionRecord['DungeonRecord']['FixedTeamData']; }
	if (res.locals.UserSessionRecord['DungeonRecord']['SetFixedArea'] == 1) { AreaInfo = res.locals.UserSessionRecord['DungeonRecord']['FixedAreaData']; }
	res.locals.UserSessionRecord['DungeonRecord']['IsSkipping'] = false;
	res.locals.UserSessionRecord['DungeonRecord']['LastQuestID'] = QuestID;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonKey'] = DungeonKey;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonStep'] = 0;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonIsHost'] = 1;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonPlayType'] = 1;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonStartedAt'] = Math.floor(Date.now() / 1000);
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonPartyData'] = PartyListData[0]['party_unit_list'];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonPartySettings'] = PartyListData[1];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportPlayer'] = [];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'] = [];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'][0] = [];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'][1] = [];
	res.locals.UserSessionRecord['DungeonRecord']['DropTable'] = QuestMap.GetQuestDrops(QuestID, EventList, PartyListData[0]['party_unit_list']);
	res.locals.UserSessionRecord['DungeonRecord']['DidRareSpawn'] = false;
	if (res.locals.UserSessionRecord['DungeonRecord']['Repeat'] == undefined) { res.locals.UserSessionRecord['DungeonRecord']['Repeat'] = {}; }
	if (MsgPackData['repeat_state'] == 1) {
		if (MsgPackData['repeat_setting'] != null) {
			res.locals.UserSessionRecord['DungeonRecord']['Repeat'] = {
				'active': 1,
				'key': crypto.randomBytes(16).toString("hex"),
				'count': MsgPackData['repeat_setting']['repeat_count'],
				'track': 1,
				'drops': [],
				'event_points': 0,
				'boost_points': 0
			}
		}
		else { res.locals.UserSessionRecord['DungeonRecord']['Repeat']['track'] += 1; }
	}
	else { res.locals.UserSessionRecord['DungeonRecord']['Repeat']['active'] = 0; }
	if (SupportViewerID != 0) {
		const SupportAccountRecord = await Fluoresce.Read("MasterAccountRecord", SupportViewerID);
		SupportSessionRecord = await ReadSessionRecord(SupportAccountRecord['SessionID']); SupportIndexRecord = await ReadIndexRecord(SupportViewerID);
		res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportPlayer'].push({'viewer_id': SupportViewerID, 'get_mana_point': 25, 'is_friend': 1, 'apply_send_status': 0});
		res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'] = DataManager.PopulateSupportData(SupportSessionRecord, SupportIndexRecord);
		PartyListData[0]['support_data'] = res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'][0]; }
	let ReviveLimit = QuestMap.GetQuestInfo(QuestID, "revives"); if (ReviveLimit == undefined) { ReviveLimit = 0; }
	res.locals.ResponseBody['data'] = {
		'ingame_data': {
			'viewer_id': ViewerID, 'dungeon_key': DungeonKey, 'dungeon_type': DungeonTypeID,
		   	'play_type': 1, 'quest_id': QuestID, 'is_host': 1,
		   	'continue_limit': QuestMap.GetQuestInfo(QuestID, "continues"),
		   	'reborn_limit': ReviveLimit,
		   	'start_time': Math.floor(Date.now() / 1000),
		   	'party_info': PartyListData[0], 'area_info_list': AreaInfo,
			'use_stone': 50, 'is_fever_time': 0, 'repeat_state': MsgPackData['repeat_state'],
		   	'is_use_event_chara_ability': 0, 'event_ability_chara_list': [],
		   	'is_bot_tutorial': 0, 'is_receivable_carry_bonus': 0,
			'first_clear_viewer_id_list': [], 'multi_disconnect_type': 0,
		},
		'ingame_quest_data': DataManager.GetPlayerQuestDataShort(QuestID, res.locals.UserIndexRecord),
		'odds_info': QuestMap.GenerateOddsList(QuestID, res.locals.UserSessionRecord, res.locals.UserSessionRecord['DungeonRecord']['LastDungeonStep'])
	}
	const QuestIndex = res.locals.UserIndexRecord['quest_list'].findIndex(x => x.quest_id == res.locals.UserSessionRecord['DungeonRecord']['LastQuestID']);
	if (QuestIndex == -1) {
		const QuestEntry = {
			'quest_id': res.locals.UserSessionRecord['DungeonRecord']['LastQuestID'],
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
		res.locals.ResponseBody['data']['update_data_list'] = { 'quest_list': [ QuestEntry ] }
		res.locals.UserIndexRecord['quest_list'].push(QuestEntry);
		res.locals.UpdatedIndexRecord = true;
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dungeon_start/start_multi", Android_Version + "/dungeon_start/start_multi"], errorhandler(async (req, res, next) => {
	const ViewerID = res.locals.UserSessionRecord['ViewerID'];
	const DungeonKey = crypto.randomBytes(16).toString("hex");
	const MsgPackData = msgpack.unpack(req.body); const QuestID = MsgPackData['quest_id']; if (typeof QuestID === 'string') { res.end(); return; }
	const PartyNo_List = MsgPackData['party_no_list'];
	LogFile.write("Starting Quest " + QuestID + "\n");
	const FromStateManager = await fetch( ServerConfig['StateURL'] + "get/ishost/" + ViewerID, { method: "GET" });
	let StateManagerResponse = false; 
	if (FromStateManager.status != 200) { StateManagerResponse = false; }
	else { StateManagerResponse = await FromStateManager.json(); }
	let IsHost = 0; if (StateManagerResponse == true) { IsHost = 1; }
	let PartyNumberList = []; let PartyListData = [];
	PartyListData = DataManager.PopulateUnitData(PartyNo_List, ViewerID, res.locals.UserIndexRecord, res.locals.UserSessionRecord, QuestID);
	let AreaInfo = QuestMap.GetQuestInfo(QuestID, "area_info");
	if (res.locals.UserSessionRecord['DungeonRecord']['SetFixedTeam'] == 1) { PartyListData[0]['party_unit_list'] = res.locals.UserSessionRecord['DungeonRecord']['FixedTeamData']; }
	if (res.locals.UserSessionRecord['DungeonRecord']['SetFixedArea'] == 1) { AreaInfo = res.locals.UserSessionRecord['DungeonRecord']['FixedAreaData']; }
	res.locals.UserSessionRecord['DungeonRecord']['IsSkipping'] = false;
	res.locals.UserSessionRecord['DungeonRecord']['LastQuestID'] = QuestID;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonKey'] = DungeonKey;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonStep'] = 0;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonIsHost'] = IsHost;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonPlayType'] = 2;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonStartedAt'] = Math.floor(Date.now() / 1000);
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonPartyNumber'] = PartyNumberList;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonPartyData'] = PartyListData[0]['party_unit_list'];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonPartySettings'] = PartyListData[1];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportPlayer'] = [];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'] = [];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'][0] = [];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'][1] = [];
	res.locals.UserSessionRecord['DungeonRecord']['DropTable'] = QuestMap.GetQuestDrops(QuestID, EventList, PartyListData[0]['party_unit_list']);
	let ReviveLimit = QuestMap.GetQuestInfo(QuestID, "revives"); if (ReviveLimit == undefined) { ReviveLimit = 0; }
	res.locals.ResponseBody['data'] = {
		'ingame_data': {
			'viewer_id': ViewerID, 'dungeon_key': DungeonKey,
			'dungeon_type': QuestMap.GetQuestInfo(QuestID, "type"),
		   	'play_type': 2, 'quest_id': QuestID, 'is_host': IsHost,
		   	'continue_limit': QuestMap.GetQuestInfo(QuestID, "continues"),
		   	'reborn_limit': ReviveLimit,
		   	'start_time': Math.floor(Date.now() / 1000),
		   	'party_info': PartyListData[0], 'area_info_list': AreaInfo,
			'use_stone': 50, 'is_fever_time': 0,
		   	'is_use_event_chara_ability': 0, 'event_ability_chara_list': [],
		   	'is_bot_tutorial': 0, 'is_receivable_carry_bonus': 0,
			'first_clear_viewer_id_list': [], 'multi_disconnect_type': 0,
		},
		'ingame_quest_data': DataManager.GetPlayerQuestDataShort(QuestID, res.locals.UserIndexRecord),
		'odds_info': QuestMap.GenerateOddsList(QuestID, res.locals.UserSessionRecord, res.locals.UserSessionRecord['DungeonRecord']['LastDungeonStep'])
	}
	const QuestIndex = res.locals.UserIndexRecord['quest_list'].findIndex(x => x.quest_id == res.locals.UserSessionRecord['DungeonRecord']['LastQuestID']);
	if (QuestIndex == -1) {
		const QuestEntry = {
			'quest_id': res.locals.UserSessionRecord['DungeonRecord']['LastQuestID'],
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
		res.locals.ResponseBody['data']['update_data_list'] = { 'quest_list': [ QuestEntry ] }
		res.locals.UserIndexRecord['quest_list'].push(QuestEntry);
		res.locals.UpdatedIndexRecord = true;
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dungeon_record/record", Android_Version + "/dungeon_record/record"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const PlayData = MsgPackData['play_record'];
	const DungeonKey = MsgPackData['dungeon_key'];
	res.locals.UserSessionRecord['Endeavour']['Tracker']['Daily']['Quests'] += 1;
	let ResultData = DataManager.DungeonRecord(res.locals.UserSessionRecord, res.locals.UserIndexRecord, DungeonKey, PlayData, EventList, false, MsgPackData['repeat_state']);
	res.locals.ResponseBody['data'] = ResultData[0];
	res.locals.UserIndexRecord = ResultData[1];
	res.locals.UserSessionRecord = ResultData[2];
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	const QuestID = String(res.locals.UserSessionRecord['DungeonRecord']['LastQuestID']);
	if (ExceptionList.includes(QuestID) || !NoTrackList.includes(QuestID.slice(0, 3))) {
		WriteDPSRecord(res.locals.UserSessionRecord['ViewerID'], ResultData[3]);
	}
	next();
}));
Orchis.post([iOS_Version + "/dungeon_record/record_multi", Android_Version + "/dungeon_record/record_multi"], errorhandler(async (req, res, next) => {
	let UserSessionRecord = "";
	let UserIndexRecord = "";
	if (req.get('Authorization') != "Bearer Ceryphim_Photon") {
		if (req.get('sid') == undefined) { res.status(401); res.end("Rejected.\n"); return; }
		else {
			const SIDExists = await Fluoresce.Exists("MasterSessionRecord", req.get('sid'));
			if (SIDExists == false) { res.status(403); res.end("Rejected.\n"); return; }
			UserSessionRecord = await ReadSessionRecord(req.get('sid'));
			UserIndexRecord = await ReadIndexRecord(UserSessionRecord['ViewerID']);
		}
	}
	else {
		const UserAccountRecord = await Fluoresce.Read("MasterAccountRecord", req.get('Auth-ViewerId'));
		req.headers['sid'] = UserAccountRecord['SessionID'];
		UserSessionRecord = await ReadSessionRecord(UserAccountRecord['SessionID']);
		UserIndexRecord = await ReadIndexRecord(UserAccountRecord['ViewerID']);
	}
	
	const MsgPackData = msgpack.unpack(req.body);
	const PlayData = MsgPackData['play_record'];
	const DungeonKey = MsgPackData['dungeon_key'];
	UserSessionRecord['Endeavour']['Tracker']['Daily']['Quests'] += 1;
	const ResultData = DataManager.DungeonRecord(UserSessionRecord, UserIndexRecord, DungeonKey, PlayData, EventList, true, 0);
	res.locals.ResponseBody['data'] = ResultData[0];
	res.locals.UserSessionRecord = ResultData[2];
	res.locals.UpdatedSessionRecord = true;
	res.locals.UserIndexRecord = ResultData[1];
	res.locals.UpdatedIndexRecord = true;
	let OutData = JSON.stringify(MsgPackData, null, 2) + "\n" + res.locals.UserSessionRecord['DungeonRecord']['LastQuestID'];
	fs.writeFileSync('./example.json', OutData);
	const QuestID = String(res.locals.UserSessionRecord['DungeonRecord']['LastQuestID']);
	if (ExceptionList.includes(QuestID) || !NoTrackList.includes(QuestID.slice(0, 3))) {
		WriteDPSRecord(res.locals.UserSessionRecord['ViewerID'], ResultData[3]);
	}
	next();
}));
Orchis.post([iOS_Version + "/dungeon/get_area_odds", Android_Version + "/dungeon/get_area_odds"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const DungeonKey = MsgPackData['dungeon_key'];
	let QuestID = res.locals.UserSessionRecord['DungeonRecord']['LastQuestID'];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonStep'] += 1;
	res.locals.ResponseBody['data'] = {
		'odds_info': QuestMap.GenerateOddsList(QuestID, res.locals.UserSessionRecord, res.locals.UserSessionRecord['DungeonRecord']['LastDungeonStep'])
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dungeon/fail", Android_Version + "/dungeon/fail"], errorhandler(async (req, res, next) => {
	// res.locals.UserSessionRecord['DungeonRecord']['LastDungeonKey'] = 0;
	// request sends dungeon_key
	res.locals.ResponseBody['data'] = {
		'result': 1,
		'fail_helper_list': res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'][1],
		'fail_helper_detail_list': res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportPlayer'],
		'fail_quest_detail': {
			'quest_id': res.locals.UserSessionRecord['DungeonRecord']['LastQuestID'],
			'is_host': res.locals.UserSessionRecord['DungeonRecord']['LastDungeonIsHost']
		}
	}
	next();
}));
Orchis.post([iOS_Version + "/dungeon/retry", Android_Version + "/dungeon/retry"], async (req, res, next) => {
	res.locals.ResponseBody['data'] = { 'continue_count': 1 }
	next();
});
Orchis.post([iOS_Version + "/dungeon_skip/start", Android_Version + "/dungeon_skip/start"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const ViewerID = res.locals.UserSessionRecord['ViewerID'];
	const QuestID = MsgPackData['quest_id']; const PartyNo = [MsgPackData['party_no']];
	const PlayCount = MsgPackData['play_count']; const DungeonKey = crypto.randomBytes(16).toString("hex");
	let PartyListData = []; let DungeonTypeID = 1; if (PartyNo.length > 1) { DungeonTypeID = 15; }
	PartyListData = DataManager.PopulateUnitData(PartyNo, ViewerID, res.locals.UserIndexRecord);
	res.locals.UserSessionRecord['DungeonRecord']['IsSkipping'] = true;
	res.locals.UserSessionRecord['DungeonRecord']['LastQuestID'] = QuestID;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonKey'] = DungeonKey;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonStep'] = 0;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonStartedAt'] = Math.floor(Date.now() / 1000);
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonPartyData'] = PartyListData[0]['party_unit_list'];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonPartySettings'] = PartyListData[1];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportPlayer'] = [];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'] = [];
	res.locals.UserSessionRecord['Endeavour']['Tracker']['Daily']['Quests'] += PlayCount;
	const ResultData = DataManager.DungeonSkipRecord(res.locals.UserSessionRecord, res.locals.UserIndexRecord, DungeonKey, PlayCount, EventList);
	res.locals.ResponseBody['data'] = ResultData[0];
	res.locals.UserIndexRecord = ResultData[1];
	res.locals.UserSessionRecord = ResultData[2];
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dungeon_skip/start_assign_unit", Android_Version + "/dungeon_skip/start_assign_unit"], errorhandler(async (req, res, next) => {
	const ViewerID = res.locals.UserSessionRecord['ViewerID'];
	const DungeonKey = crypto.randomBytes(16).toString("hex");
	const MsgPackData = msgpack.unpack(req.body); const QuestID = MsgPackData['quest_id']; if (typeof QuestID === 'string') { res.end(); }
	const PartyList = MsgPackData['request_party_setting_list']; const PlayCount = MsgPackData['play_count'];
	const RepeatState = MsgPackData['repeat_state']; const RepeatSettings = MsgPackData['repeat_setting'];
	const SupportViewerID = MsgPackData['support_viewer_id']; let SupportSessionRecord = {}; let SupportIndexRecord = {};
	let PartyListData = []; let DungeonTypeID = 1; if (PartyList.length > 4) { DungeonTypeID = 15; }
	PartyListData = DataManager.PopulateAssignedUnitData(PartyList, ViewerID, res.locals.UserIndexRecord);
	res.locals.UserSessionRecord['DungeonRecord']['IsSkipping'] = true;
	res.locals.UserSessionRecord['DungeonRecord']['LastQuestID'] = QuestID;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonKey'] = DungeonKey;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonStep'] = 0;
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonStartedAt'] = Math.floor(Date.now() / 1000);
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonPartyData'] = PartyListData[0]['party_unit_list'];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonPartySettings'] = PartyListData[1];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportPlayer'] = [];
	res.locals.UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'] = [];
	res.locals.UserSessionRecord['Endeavour']['Tracker']['Daily']['Quests'] += PlayCount;
	const ResultData = DataManager.DungeonSkipRecord(res.locals.UserSessionRecord, res.locals.UserIndexRecord, DungeonKey, PlayCount, EventList);
	res.locals.ResponseBody['data'] = ResultData[0];
	res.locals.UserIndexRecord = ResultData[1];
	res.locals.UserSessionRecord = ResultData[2];
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dungeon_skip/start_multiple_quest", Android_Version + "/dungeon_skip/start_multiple_quest"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const QuestList = MsgPackData['request_quest_multiple_list'];
	let QuestIDList = [];
	for (let x in QuestList) {
		if (typeof QuestList[x]['quest_id'] == "string") { res.end(); return; }
		QuestIDList.push(QuestList[x]['quest_id']);
	}
	const ResultData = DataManager.DungeonMultiClear(
		res.locals.UserSessionRecord,
		res.locals.UserIndexRecord,
		QuestIDList,
		EventList,
		MsgPackData['party_no']
	);
	res.locals.ResponseBody['data'] = ResultData[0];
	res.locals.UserIndexRecord = ResultData[1];
	res.locals.UserSessionRecord = ResultData[2];
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/repeat/end", Android_Version + "/repeat/end"], errorhandler(async (req, res, next) => {
	const DungeonKey = res.locals.UserSessionRecord['DungeonRecord']['LastDungeonKey'];
	res.locals.UserSessionRecord['DungeonRecord']['Repeat']['track'] = res.locals.UserSessionRecord['DungeonRecord']['Repeat']['count'];
	PlayData = {
		'time': 0,
		'damage_record': []
	}
	const ResultData = DataManager.DungeonRecord(res.locals.UserSessionRecord, res.locals.UserIndexRecord, DungeonKey, PlayData, EventList, false, 1);
	res.locals.ResponseBody['data'] = ResultData[0];
	res.locals.UserIndexRecord = ResultData[1];
	res.locals.UserSessionRecord = ResultData[2];
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));

Orchis.post([iOS_Version + "/heroparam/batch"], errorhandler(async (req, res) => {
	const RecievedData = req.body;
	const ResponseTable = [];
	for (let x in RecievedData) {
		const UserAccountRecord = await Fluoresce.Read("MasterAccountRecord", RecievedData[x]['viewerId']);
		const UserIndexRecord = await ReadIndexRecord(UserAccountRecord['ViewerID']);
		const UserSessionRecord = await ReadSessionRecord(UserAccountRecord['SessionID']);
		const PartyData = DataManager.PopulateCoOpUnitData(RecievedData[x]['partySlots'], RecievedData[x]['viewerId'], UserIndexRecord, UserSessionRecord);
		const Template = {
			'actorNr': RecievedData[x]['actorNr'],
			'viewerId': RecievedData[x]['viewerId'],
			'heroParamLists': PartyData
		}
		ResponseTable.push(Template);
	}
	const Serialized = JSON.stringify(ResponseTable); res.set(ResHeaders(Serialized.length)); res.end(Serialized); return;
}));
Orchis.post([iOS_Version + "/matching/check_penalty_user", Android_Version + "/matching/check_penalty_user"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = { 'result': 1 }
	next();
}));
Orchis.post([iOS_Version + "/matching/get_room_list", Android_Version + "/matching/get_room_list"], errorhandler(async (req, res, next) => {
	if (res.locals.UserSessionRecord['VanillaAssets'] == true) { res.end(EmptyRooms); return; }
	const MsgPackData = msgpack.unpack(req.body);
	const FromStateManager = await fetch( ServerConfig['StateURL'] + "get/gamelist", { method: "GET" });
	if (FromStateManager.status != 200) {
		res.end(msgpack.pack({ 'data_headers': { 'result_code': 1 }, 'data': {
			'room_list': [],
			'friend_room_list': [],
			'event_room_list': [],
			'event_friend_room_list': []
		}})); return;
	}
	const RoomList = await FromStateManager.json();
	let NewRoomList = [];
	for (let y in RoomList) {
		const IsMatch = await QuestMap.IsQuestTypeMatchMulti(MsgPackData['tab_type'], RoomList[y]['questId']);
		if (IsMatch) {
			let CurrentPlayers = [];
			for (let z in RoomList[y]['players']) {
				const Players = {
					'viewerid': RoomList[y]['players'][z]['viewerId'],
					'party_no_list': RoomList[y]['players'][z]['partyNoList'],
					'is_first_clear': 0,
					'is_clear_party': 0
				}
				CurrentPlayers.push(Players);
			}
			const RoomIndexRecord = await ReadIndexRecord(RoomList[y]['hostViewerId']);
			const LeadPartyNumber = RoomList[y]['players'][0]['partyNoList'][0];
			const LeadCharacter = RoomIndexRecord['party_list'][LeadPartyNumber - 1]['party_setting_list'][0]['chara_id'];
			const CharacterIndex = RoomIndexRecord['chara_list'].findIndex(x => x.chara_id == LeadCharacter);
			let DungeonType = 1; if (RoomList[y]['players'][0]['partyNoList'].length > 1) { DungeonType = 15; }
			let GuildID = 0; if (RoomIndexRecord['guild_data'] != undefined) { GuildID = RoomIndexRecord['guild_data']['guild_id']; }
			const Template = {
				'room_id': RoomList[y]['roomId'],
				'room_name': RoomList[y]['name'],
				'region': RoomList[y]['region'],
				'language': RoomList[y]['language'],
				'status': 1,
				'entry_type': RoomList[y]['matchingType'],
				'entry_guild_id': GuildID,
				'host_viewer_id': RoomList[y]['hostViewerId'],
				'host_name': RoomIndexRecord['user_data']['name'],
				'host_level': RoomIndexRecord['user_data']['level'],
				'leader_chara_id': LeadCharacter,
				'leader_chara_level': RoomIndexRecord['chara_list'][CharacterIndex]['level'],
				'leader_chara_rarity': RoomIndexRecord['chara_list'][CharacterIndex]['rarity'],
				'quest_id': RoomList[y]['questId'],
				'quest_type': DungeonType,
				'room_member_list': CurrentPlayers,
				'start_entry_time': parseInt(new Date(RoomList[y]['startEntryTime']).valueOf() / 1000),
				'entry_conditions': {
					'objective_text_id': RoomList[y]['entryConditions']['objectiveTextId'],
					'unaccepted_weapon_type_list': RoomList[y]['entryConditions']['unacceptedWeaponTypeList'],
					'unaccepted_element_type_list': RoomList[y]['entryConditions']['unacceptedElementTypeList'],
					'required_party_power': RoomList[y]['entryConditions']['requiredPartyPower']
				},
				'compatible_id': RoomList[y]['matchingCompatibleId'],
				'member_num': RoomList[y]['players'].length
			}
			NewRoomList.push(Template);
		}
	}
	res.locals.ResponseBody['data'] = {
		'room_list': NewRoomList,
		'friend_room_list': [],
		'event_room_list': [],
		'event_friend_room_list': []
	}
	next();
}));
Orchis.post([iOS_Version + "/matching/get_room_list_by_location", Android_Version + "/matching/get_room_list_by_location"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = { 'room_list': [] }
	next();
}));
Orchis.post([iOS_Version + "/matching/get_room_list_by_quest_id", Android_Version + "/matching/get_room_list_by_quest_id"], errorhandler(async (req, res, next) => {
	if (res.locals.UserSessionRecord['VanillaAssets'] == true) { res.end(EmptyRooms); return; }
	const MsgPackData = msgpack.unpack(req.body); const QuestID = parseInt(MsgPackData['quest_id']);
	if (isNaN(QuestID) || QuestID==undefined || QuestID==0){res.end(msgpack.pack({'data_headers':{'result_code':121},'data':{'result':121}}));return;}
	const FromStateManager = await fetch( ServerConfig['StateURL'] + "get/gamelist?questId=" + QuestID, { method: "GET" });
	if (FromStateManager.status != 200) {
		res.end(msgpack.pack({ 'data_headers': { 'result_code': 1 }, 'data': {
			'room_list': [],
			'friend_room_list': [],
			'event_room_list': [],
			'event_friend_room_list': []
		}})); return;
	}
	const RoomList = await FromStateManager.json();
	let NewRoomList = [];
	for (let y in RoomList) {
		let CurrentPlayers = [];
		for (let z in RoomList[y]['players']) {
			const Players = {
				'viewerid': RoomList[y]['players'][z]['viewerId'],
				'party_no_list': RoomList[y]['players'][z]['partyNoList'],
				'is_first_clear': 0,
				'is_clear_party': 0
			}
			CurrentPlayers.push(Players);
		}
		const RoomIndexRecord = await ReadIndexRecord(RoomList[y]['hostViewerId']);
		let GuildID = 0; if (RoomIndexRecord['guild_data'] != undefined) { GuildID = RoomIndexRecord['guild_data']['guild_id']; }
		const LeadPartyNumber = RoomList[y]['players'][0]['partyNoList'][0];
		const LeadCharacter = RoomIndexRecord['party_list'][LeadPartyNumber - 1]['party_setting_list'][0]['chara_id'];
		const CharacterIndex = RoomIndexRecord['chara_list'].findIndex(x => x.chara_id == LeadCharacter);
		let DungeonType = 1; if (RoomList[y]['players'][0]['partyNoList'].length > 1) { DungeonType = 15; }
		const Template = {
			'room_id': RoomList[y]['roomId'],
			'room_name': RoomList[y]['name'],
			'region': RoomList[y]['region'],
			'language': RoomList[y]['language'],
			'status': 1,
			'entry_type': RoomList[y]['matchingType'],
			'entry_guild_id': GuildID,
			'host_viewer_id': RoomList[y]['hostViewerId'],
			'host_name': RoomIndexRecord['user_data']['name'],
			'host_level': RoomIndexRecord['user_data']['level'],
			'leader_chara_id': LeadCharacter,
			'leader_chara_level': RoomIndexRecord['chara_list'][CharacterIndex]['level'],
			'leader_chara_rarity': RoomIndexRecord['chara_list'][CharacterIndex]['rarity'],
			'quest_id': RoomList[y]['questId'],
			'quest_type': DungeonType,
			'room_member_list': CurrentPlayers,
			'start_entry_time': parseInt(new Date(RoomList[y]['startEntryTime']).valueOf() / 1000),
			'entry_conditions': {
				'objective_text_id': RoomList[y]['entryConditions']['objectiveTextId'],
				'unaccepted_weapon_type_list': RoomList[y]['entryConditions']['unacceptedWeaponTypeList'],
				'unaccepted_element_type_list': RoomList[y]['entryConditions']['unacceptedElementTypeList'],
				'required_party_power': RoomList[y]['entryConditions']['requiredPartyPower']
			},
			'compatible_id': RoomList[y]['matchingCompatibleId'],
			'member_num': RoomList[y]['players'].length
		}
		NewRoomList.push(Template);
	}
	res.locals.ResponseBody['data'] = {
		'room_list': NewRoomList
	}
	next();
}));
Orchis.post([iOS_Version + "/matching/get_room_name", Android_Version + "/matching/get_room_name"], errorhandler(async (req, res, next) => {
	if (res.locals.UserSessionRecord['VanillaAssets'] == true) { res.end(EmptyRooms); return; }
	const MsgPackData = msgpack.unpack(req.body); const RoomID = MsgPackData['room_id'];
	const FromStateManager = await fetch( ServerConfig['StateURL'] + "get/byid/" + RoomID, { method: "GET" });
	if (FromStateManager.status != 200) {
		res.end(msgpack.pack({ 'data_headers': { 'result_code': 1 }, 'data': {
			'room_list': {}
		}})); return;
	}
	const RoomList = await FromStateManager.json();
	let CurrentPlayers = [];
	for (let z in RoomList['players']) {
		const Players = {
			'viewerid': RoomList['players'][z]['viewerId'],
			'party_no_list': RoomList['players'][z]['partyNoList'],
			'is_first_clear': 0,
			'is_clear_party': 0
		}
		CurrentPlayers.push(Players);
	}
	const RoomIndexRecord = await ReadIndexRecord(RoomList['hostViewerId']);
	let GuildID = 0; if (RoomIndexRecord['guild_data'] != undefined) { GuildID = RoomIndexRecord['guild_data']['guild_id']; }
	const LeadPartyNumber = RoomList['players'][0]['partyNoList'][0];
	const LeadCharacter = RoomIndexRecord['party_list'][LeadPartyNumber - 1]['party_setting_list'][0]['chara_id'];
	const CharacterIndex = RoomIndexRecord['chara_list'].findIndex(x => x.chara_id == LeadCharacter);
	let DungeonType = 1; if (RoomList['players'][0]['partyNoList'].length > 1) { DungeonType = 15; }
	res.locals.ResponseBody['data'] = { 
		'room_list': {
			'room_id': RoomList['roomId'],
			'room_name': RoomList['name'],
			'region': RoomList['region'],
			'language': RoomList['language'],
			'status': 1,
			'entry_type': RoomList['matchingType'],
			'entry_guild_id': GuildID,
			'host_viewer_id': RoomList['hostViewerId'],
			'host_name': RoomIndexRecord['user_data']['name'],
			'host_level': RoomIndexRecord['user_data']['level'],
			'leader_chara_id': LeadCharacter,
			'leader_chara_level': RoomIndexRecord['chara_list'][CharacterIndex]['level'],
			'leader_chara_rarity': RoomIndexRecord['chara_list'][CharacterIndex]['rarity'],
			'quest_id': RoomList['questId'],
			'quest_type': DungeonType,
			'room_member_list': CurrentPlayers,
			'start_entry_time': parseInt(new Date(RoomList['startEntryTime']).valueOf() / 1000),
			'entry_conditions': {
				'objective_text_id': RoomList['entryConditions']['objectiveTextId'],
				'unaccepted_weapon_type_list': RoomList['entryConditions']['unacceptedWeaponTypeList'],
				'unaccepted_element_type_list': RoomList['entryConditions']['unacceptedElementTypeList'],
				'required_party_power': RoomList['entryConditions']['requiredPartyPower']
			},
			'compatible_id': RoomList['matchingCompatibleId'],
			'member_num': RoomList['players'].length
		}
	}
	next();
}));

Orchis.post([iOS_Version + "/wall/get_wall_clear_party", Android_Version + "/wall/get_wall_clear_party"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const QuestID = MsgPackData['wall_id'];
	res.locals.ResponseBody['data'] = {
		'wall_clear_party_setting_list': [],
		'lost_unit_list': []
	}
	next();
}));
Orchis.post([iOS_Version + "/wall/set_wall_clear_party", Android_Version + "/wall/set_wall_clear_party"], errorhandler(async (req, res, next) => {
	// const MsgPackData = msgpack.unpack(req.body); # This is the wall id and party data to be set
	res.locals.ResponseBody['data'] = { 'result': 1 }
	next();
}));
Orchis.post([iOS_Version + "/wall_start/start", Android_Version + "/wall_start/start"], errorhandler(async (req, res, next) => {
	const ViewerID = res.locals.UserSessionRecord['ViewerID'];
	const DungeonKey = crypto.randomBytes(16).toString("hex");
	const MsgPackData = msgpack.unpack(req.body); const WallID = MsgPackData['wall_id']; if (typeof WallID === 'string') { res.end(); return; }
	const WallLevel = MsgPackData['wall_level']; const PartyNo = MsgPackData['party_no'];
	const RepeatState = MsgPackData['repeat_state']; const RepeatSettings = MsgPackData['repeat_setting'];
	const SupportViewerID = MsgPackData['support_viewer_id']; let SupportSessionRecord = {}; let SupportIndexRecord = {};
	let PartyListData = []; let DungeonTypeID = 1;
	PartyListData = DataManager.PopulateUnitData([PartyNo], ViewerID, res.locals.UserIndexRecord);
	if (res.locals.UserSessionRecord['DungeonRecord']['SetFixedTeam'] == 1) { 
		PartyListData[0]['party_unit_list'] = res.locals.UserSessionRecord['DungeonRecord']['FixedTeamData']; }
	res.locals.UserSessionRecord['Wall']['DungeonKey'] = DungeonKey;
	res.locals.UserSessionRecord['Wall']['LastID'] = WallID;
	res.locals.UserSessionRecord['Wall']['LastPartyNumber'] = [PartyNo];
	res.locals.UserSessionRecord['Wall']['LastPartyData'] = PartyListData[0]['party_unit_list'];
	res.locals.UserSessionRecord['Wall']['LastPartySettings'] = PartyListData[1];
	res.locals.UserSessionRecord['Wall']['LastLevel'] = MsgPackData['wall_level'];
	res.locals.UserSessionRecord['Wall']['RewardList'] = DataManager.GetWallDrop();
	res.locals.UserSessionRecord['Wall']['LastSupportPlayer'] = [];
	res.locals.UserSessionRecord['Wall']['LastSupportCharacter'] = [];
	res.locals.UserSessionRecord['Wall']['LastSupportCharacter'][0] = [];
	res.locals.UserSessionRecord['Wall']['LastSupportCharacter'][1] = [];
	if (SupportViewerID != 0) {
		const SupportAccountRecord = await Fluoresce.Read("MasterAccountRecord", SupportViewerID);
		SupportSessionRecord = await ReadSessionRecord(SupportAccountRecord['SessionID']); SupportIndexRecord = await ReadIndexRecord(SupportViewerID);
		res.locals.UserSessionRecord['Wall']['LastSupportPlayer'].push({'viewer_id': SupportViewerID, 'get_mana_point': 25, 'is_friend': 1, 'apply_send_status': 0});
		res.locals.UserSessionRecord['Wall']['LastSupportCharacter'] = DataManager.PopulateSupportData(SupportSessionRecord, SupportIndexRecord); 
		PartyListData[0]['support_data'] = res.locals.UserSessionRecord['Wall']['LastSupportCharacter'][0]; }
	let SceneVar = 0; let ElementNumber = 0;
	switch(WallID) {
		case 216010001: SceneVar = 0; ElementNumber = 1; break;
		case 216010002: SceneVar = 1; ElementNumber = 2; break;
		case 216010003: SceneVar = 2; ElementNumber = 3; break;
		case 216010004: SceneVar = 3; ElementNumber = 4; break;
		case 216010005: SceneVar = 4; ElementNumber = 5; break;
	}
	const SceneData = "Boss/BG034_5001_00/BG034_5001_00_0" + SceneVar;
	const AreaData = "WALL_01_010" + ElementNumber + "_01";
	res.locals.ResponseBody['data'] = {
		'ingame_data': {
			'viewer_id': ViewerID,
		   	'dungeon_key': DungeonKey,
		   	'dungeon_type': DungeonTypeID,
		   	'play_type': 1,
		   	'is_host': 1,
		   	'continue_limit': -1,
		   	'reborn_limit': 0,
		   	'start_time': Math.floor(Date.now() / 1000),
		   	'party_info': PartyListData[0],
			'area_info_list': [ { 'scene_path': SceneData, 'area_name': AreaData } ],
			'use_stone': -1,
			'is_fever_time': 0,
		   	'repeat_state': 0,
		   	'is_bot_tutorial': 0,
		   	'is_receivable_carry_bonus': 0,
			'first_clear_viewer_id_list': [],
			'multi_disconnect_type': 0
		},
		'ingame_wall_data': { 'wall_id': WallID, 'wall_level': WallLevel },
		'odds_info': res.locals.UserSessionRecord['Wall']['RewardList']
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/wall_start/start_assign_unit", Android_Version + "/wall_start/start_assign_unit"], errorhandler(async (req, res, next) => {
	const ViewerID = res.locals.UserSessionRecord['ViewerID'];
	const DungeonKey = crypto.randomBytes(16).toString("hex");
	const MsgPackData = msgpack.unpack(req.body); const WallID = MsgPackData['wall_id']; if (typeof WallID === 'string') { res.end(); return; }
	const WallLevel = MsgPackData['wall_level']; const PartyList = MsgPackData['request_party_setting_list'];
	const RepeatState = MsgPackData['repeat_state']; const RepeatSettings = MsgPackData['repeat_setting'];
	const SupportViewerID = MsgPackData['support_viewer_id']; let SupportSessionRecord = {}; let SupportIndexRecord = {};
	let PartyNumberList = []; let PartyListData = []; let DungeonTypeID = 1;
	PartyListData = DataManager.PopulateAssignedUnitData(PartyList, ViewerID, res.locals.UserIndexRecord);
	if (res.locals.UserSessionRecord['DungeonRecord']['SetFixedTeam'] == 1) { 
		PartyListData[0]['party_unit_list'] = res.locals.UserSessionRecord['DungeonRecord']['FixedTeamData']; }
	res.locals.UserSessionRecord['Wall']['DungeonKey'] = DungeonKey;
	res.locals.UserSessionRecord['Wall']['LastID'] = WallID;
	res.locals.UserSessionRecord['Wall']['LastPartyData'] = PartyListData[0]['party_unit_list'];
	res.locals.UserSessionRecord['Wall']['LastPartySettings'] = PartyListData[1];
	res.locals.UserSessionRecord['Wall']['LastLevel'] = MsgPackData['wall_level'];
	res.locals.UserSessionRecord['Wall']['RewardList'] = DataManager.GetWallDrop();
	res.locals.UserSessionRecord['Wall']['LastSupportPlayer'] = [];
	res.locals.UserSessionRecord['Wall']['LastSupportCharacter'] = [];
	res.locals.UserSessionRecord['Wall']['LastSupportCharacter'][0] = [];
	res.locals.UserSessionRecord['Wall']['LastSupportCharacter'][1] = [];
	if (SupportViewerID != 0) {
		const SupportAccountRecord = await Fluoresce.Read("MasterAccountRecord", SupportViewerID);
		SupportSessionRecord = await ReadSessionRecord(SupportAccountRecord['SessionID']); SupportIndexRecord = await ReadIndexRecord(SupportViewerID);
		res.locals.UserSessionRecord['Wall']['LastSupportPlayer'].push({'viewer_id': SupportViewerID, 'get_mana_point': 25, 'is_friend': 1, 'apply_send_status': 0});
		res.locals.UserSessionRecord['Wall']['LastSupportCharacter'] = DataManager.PopulateSupportData(SupportSessionRecord, SupportIndexRecord); 
		PartyListData[0]['support_data'] = res.locals.UserSessionRecord['Wall']['LastSupportCharacter'][0]; }
	let SceneVar = 0; let ElementNumber = 0;
	switch(WallID) {
		case 216010001: SceneVar = 0; ElementNumber = 1; break;
		case 216010002: SceneVar = 1; ElementNumber = 2; break;
		case 216010003: SceneVar = 2; ElementNumber = 3; break;
		case 216010004: SceneVar = 3; ElementNumber = 4; break;
		case 216010005: SceneVar = 4; ElementNumber = 5; break;
	}
	const SceneData = "Boss/BG034_5001_00/BG034_5001_00_0" + SceneVar;
	const AreaData = "WALL_01_010" + ElementNumber + "_01";
	res.locals.ResponseBody['data'] = {
		'ingame_data': {
			'viewer_id': ViewerID,
		   	'dungeon_key': DungeonKey,
		   	'dungeon_type': DungeonTypeID,
		   	'play_type': 1,
		   	'is_host': 1,
		   	'continue_limit': -1,
		   	'reborn_limit': 0,
		   	'start_time': Math.floor(Date.now() / 1000),
		   	'party_info': PartyListData[0],
			'area_info_list': [ { 'scene_path': SceneData, 'area_name': AreaData } ],
			'use_stone': -1,
			'is_fever_time': 0,
		   	'repeat_state': 0,
		   	'is_bot_tutorial': 0,
		   	'is_receivable_carry_bonus': 0,
			'first_clear_viewer_id_list': [],
			'multi_disconnect_type': 0
		},
		'ingame_wall_data': { 'wall_id': WallID, 'wall_level': WallLevel },
		'odds_info': res.locals.UserSessionRecord['Wall']['RewardList']
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/wall_record/record", Android_Version + "/wall_record/record"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const WallID = MsgPackData['wall_id']
	const ResultData = DataManager.WallRecord(res.locals.UserSessionRecord, res.locals.UserIndexRecord, WallID);
	res.locals.ResponseBody['data'] = ResultData[0];
	res.locals.UserIndexRecord = ResultData[1];
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/wall/fail", Android_Version + "/wall/fail"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
		'result': 1,
		'fail_helper_list': res.locals.UserSessionRecord['Wall']['LastSupportCharacter'][1],
		'fail_helper_detail_list': res.locals.UserSessionRecord['Wall']['LastSupportPlayer'],
		'fail_quest_detail': {
			'quest_id': 0,
			'wall_id': res.locals.UserSessionRecord['Wall']['LastID'],
			'wall_level': res.locals.UserSessionRecord['Wall']['LastLevel'],
			'is_host': 1
		}
	}
	next();
}));

Orchis.post([iOS_Version + "/dmode/entry", Android_Version + "/dmode/entry"], errorhandler(async (req, res, next) => {
	res.locals.UserSessionRecord['Kaleidoscape']['DmodeInfo'] = {
		"total_max_floor_num": 0,
		"recovery_count": 0,
		"recovery_time": 0,
		"floor_skip_count": 0,
		"floor_skip_time": 0,
		"dmode_point_1": 0,
		"dmode_point_2": 0,
		"is_entry": 1
	}
	res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo'] = {
		"chara_id": 0,
		"floor_num": 0,
		"quest_time": 0,
		"dungeon_score": 0,
		"is_play_end": 0,
		"state": 1
	}
	res.locals.UserSessionRecord['Kaleidoscape']['Passive'] = [
		{ "passive_no": 1, "passive_level": 0 },
		{ "passive_no": 2, "passive_level": 0 },
		{ "passive_no": 3, "passive_level": 0 },
		{ "passive_no": 4, "passive_level": 0 },
		{ "passive_no": 5, "passive_level": 0 },
		{ "passive_no": 6, "passive_level": 0 },
		{ "passive_no": 7, "passive_level": 0 },
		{ "passive_no": 8, "passive_level": 0 },
		{ "passive_no": 9, "passive_level": 0 },
		{ "passive_no": 10, "passive_level": 0 },
		{ "passive_no": 11, "passive_level": 0 },
		{ "passive_no": 12, "passive_level": 0 },
		{ "passive_no": 13, "passive_level": 0 },
		{ "passive_no": 14, "passive_level": 0 },
		{ "passive_no": 15, "passive_level": 0 },
		{ "passive_no": 16, "passive_level": 0 },
		{ "passive_no": 17, "passive_level": 0 }
	]
	
	res.locals.ResponseBody['data'] = {
		'dmode_info': res.locals.UserSessionRecord['Kaleidoscape']['DmodeInfo'],
		'dmode_chara_list': [],
		'dmode_servitor_passive_list': res.locals.UserSessionRecord['Kaleidoscape']['Passive'],
		'dmode_dungeon_info': res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo'],
		'update_data_list': {}
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dmode/get_data", Android_Version + "/dmode/get_data"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
		'dmode_info': res.locals.UserSessionRecord['Kaleidoscape']['DmodeInfo'],
		'dmode_chara_list': res.locals.UserSessionRecord['Kaleidoscape']['CharacterList'],
		'dmode_servitor_passive_list': res.locals.UserSessionRecord['Kaleidoscape']['Passive'],
		'dmode_dungeon_info': res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo'],
		'dmode_story_list': res.locals.UserSessionRecord['Kaleidoscape']['StoryList'],
		'dmode_expedition': res.locals.UserSessionRecord['Kaleidoscape']['Expedition'],
		'update_data_list': {},
		'current_server_time': Math.floor(Date.now() / 1000)
	}
	next();
}));
Orchis.post([iOS_Version + "/dmode/read_story", Android_Version + "/dmode/read_story"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); StoryID = MsgPackData['dmode_story_id'];
	const UpdateData = { 'dmode_story_id': StoryID, 'is_read': 1 };
	const StoryIndex = res.locals.UserSessionRecord['Kaleidoscape']['StoryList'].findIndex(x => x.dmode_story_id == StoryID);
	if (StoryIndex == -1) {
		res.locals.UserIndexRecord['user_data']['crystal'] += 25;
		res.locals.UserSessionRecord['Kaleidoscape']['StoryList'].push(UpdateData);
		res.locals.UpdatedSessionRecord = true;
		res.locals.UpdatedIndexRecord = true;
		res.locals.ResponseBody['data'] = {
			'dmode_story_reward_list': [ { 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 25 } ],
			'update_data_list': { 'dmode_story_list': [ UpdateData ], 'user_data': res.locals.UserIndexRecord['user_data'] }
		}
	}
	else { res.locals.ResponseBody['data'] = { 'update_data_list': { 'functional_maintenance_list': [] } } };
	next();
}));
Orchis.post([iOS_Version + "/dmode/expedition_start", Android_Version + "/dmode/expedition_start"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	res.locals.UserSessionRecord['Kaleidoscape']['Expedition'] = {
		'chara_id_1': MsgPackData['chara_id_list'][0],
		'chara_id_2': MsgPackData['chara_id_list'][1],
		'chara_id_3': MsgPackData['chara_id_list'][2],
		'chara_id_4': MsgPackData['chara_id_list'][3],
		'start_time': Math.floor(Date.now() / 1000),
		'target_floor_num': MsgPackData['target_floor_num'],
		'state': 2
	}
	res.locals.ResponseBody['data'] = {
		'dmode_expedition': res.locals.UserSessionRecord['Kaleidoscape']['Expedition']
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dmode/expedition_finish", Android_Version + "/dmode/expedition_finish"], errorhandler(async (req, res, next) => {
	const DuskAmber = DModeMap.ExpeditionDuskAmber(res.locals.UserSessionRecord['Kaleidoscape']['Expedition']['target_floor_num']);
	const DawnAmber = DModeMap.ExpeditionDawnAmber(res.locals.UserSessionRecord['Kaleidoscape']['Expedition']['target_floor_num']);
	const Talismans = DModeMap.CreateExpeditionTalismans(res.locals.UserSessionRecord, res.locals.UserIndexRecord);
	
	res.locals.UserSessionRecord['Kaleidoscape']['Expedition']['state'] = 1;
	res.locals.UserSessionRecord['Kaleidoscape']['DmodeInfo']['dmode_point_1'] += DuskAmber;
	res.locals.UserSessionRecord['Kaleidoscape']['DmodeInfo']['dmode_point_2'] += DawnAmber;
	res.locals.ResponseBody['data'] = {
		'dmode_ingame_result': { 
			'floor_num': res.locals.UserSessionRecord['Kaleidoscape']['Expedition']['target_floor_num'],
			'is_record_floor_num': 0,
			'chara_id_list': [ res.locals.UserSessionRecord['Kaleidoscape']['Expedition']['chara_id_1'],
							   res.locals.UserSessionRecord['Kaleidoscape']['Expedition']['chara_id_2'],
							   res.locals.UserSessionRecord['Kaleidoscape']['Expedition']['chara_id_3'],
							   res.locals.UserSessionRecord['Kaleidoscape']['Expedition']['chara_id_4'] ],
			'reward_talisman_list': Talismans[0],
			'take_dmode_point_1': DuskAmber,
			'take_dmode_point_2': DawnAmber,
			'take_player_exp': 0,
			'player_level_up_fstone': 0,
			'quest_time': 0,
			'is_view_quest_time': 0,
			'dmode_score': 0,
			'clear_state': 0
		},
		'dmode_expedition': res.locals.UserSessionRecord['Kaleidoscape']['Expedition'],
		'update_data_list': { 'dmode_info': res.locals.UserSessionRecord['Kaleidoscape']['DmodeInfo'], 'talisman_list': Talismans[1] }
	}
	res.locals.UserSessionRecord = Talismans[2];
	res.locals.UpdatedSessionRecord = true;
	res.locals.UserIndexRecord = Talismans[3];
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dmode/expedition_force_finish", Android_Version + "/dmode/expedition_force_finish"], errorhandler(async (req, res, next) => {
	const DuskAmber = 0;
	const DawnAmber = 0;
	const Talismans = [];
	res.locals.UserSessionRecord['Kaleidoscape']['Expedition']['state'] = 1;
	res.locals.UserSessionRecord['Kaleidoscape']['DmodeInfo']['dmode_point_1'] += DuskAmber;
	res.locals.UserSessionRecord['Kaleidoscape']['DmodeInfo']['dmode_point_2'] += DawnAmber;
	res.locals.ResponseBody['data'] = {
		'dmode_ingame_result': { 
			'floor_num': res.locals.UserSessionRecord['Kaleidoscape']['Expedition']['target_floor_num'],
			'is_record_floor_num': 0,
			'chara_id_list': [ res.locals.UserSessionRecord['Kaleidoscape']['Expedition']['chara_id_1'],
							   res.locals.UserSessionRecord['Kaleidoscape']['Expedition']['chara_id_2'],
							   res.locals.UserSessionRecord['Kaleidoscape']['Expedition']['chara_id_3'],
							   res.locals.UserSessionRecord['Kaleidoscape']['Expedition']['chara_id_4'] ],
			'reward_talisman_list': Talismans,
			'take_dmode_point_1': DuskAmber,
			'take_dmode_point_2': DawnAmber,
			'take_player_exp': 0,
			'player_level_up_fstone': 0,
			'quest_time': 0,
			'is_view_quest_time': 0,
			'dmode_score': 0,
			'clear_state': 0
		},
		'dmode_expedition': res.locals.UserSessionRecord['Kaleidoscape']['Expedition'],
		'update_data_list': { 'dmode_info': res.locals.UserSessionRecord['Kaleidoscape']['DmodeInfo'] }
	}
	res.locals.UpdatedSessionRecord = true;
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dmode_dungeon/start", Android_Version + "/dmode_dungeon/start"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const CharacterID = MsgPackData['chara_id'];
	const StartFloor = MsgPackData['start_floor_num']; const ServitorID = MsgPackData['servitor_id'];
	const SkillList = MsgPackData['bring_edit_skill_chara_id_list'];
	const DModeKey = String((Math.random() * 2).toFixed(15)).slice(2, 13) + "_" + Math.floor(Date.now() / 1000);
	res.locals.UserSessionRecord['Kaleidoscape']['IsStart'] = true;
	res.locals.UserSessionRecord['Kaleidoscape']['IsRestart'] = false;
	res.locals.UserSessionRecord['Kaleidoscape']['Complete'] = false;
	res.locals.UserSessionRecord['Kaleidoscape']['FloorNumber'] = StartFloor;
	res.locals.UserSessionRecord['Kaleidoscape']['UniqueKey'] = DModeKey;
	res.locals.UserSessionRecord['Kaleidoscape']['UnitInfo'] = {
		'level': 1,
		'exp': 0,
		'dmode_hold_dragon_list': [],
		'equip_crest_item_no_sort_list': [0, 0, 0],
		'bag_item_no_sort_list': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		'skill_bag_item_no_sort_list': [0, 0, 0, 0, 0, 0, 0, 0],
		'take_dmode_point_1': 0,
		'take_dmode_point_2': 0
	}
	res.locals.UserSessionRecord['Kaleidoscape']['ItemTracker'] = 0;
	res.locals.UserSessionRecord['Kaleidoscape']['ItemList'] = [];
	for (let s in SkillList) {
		res.locals.UserSessionRecord['Kaleidoscape']['ItemTracker'] += 1;
		let NewSkillID = parseInt(String(SkillList[s]) + CharacterMap.GetCharacterInfo(SkillList[s], "shared_skill_number"));
		if (SkillList[s] == 10350304 || SkillList[s] == 10950503 || SkillList[s] == 10550204) { NewSkillID = parseInt(String(SkillList[s]) + "2"); }
		else if (SkillList[s] == 10250104 || SkillList[s] == 10750104 || SkillList[s] == 10350303) { NewSkillID = parseInt(String(SkillList[s]) + "3"); }
		else if (SkillList[s] == 10250503 || SkillList[s] == 10250504 || SkillList[s] == 10550205 || SkillList[s] == 10750102) { NewSkillID = parseInt(String(SkillList[s]) + "4"); }
		else if (SkillList[s] == 10250203 || SkillList[s] == 10350405 || SkillList[s] == 10850203 || SkillList[s] == 10350505 || SkillList[s] == 10950303) { NewSkillID = parseInt(String(SkillList[s]) + "5"); }
		else if (SkillList[s] == 10450104) { NewSkillID = parseInt(String(SkillList[s]) + "7"); }
		const SkillBase = {
			"item_no": res.locals.UserSessionRecord['Kaleidoscape']['ItemTracker'],
			"item_id": NewSkillID,
			"item_state": 14,
			'option': []
		}
		res.locals.UserSessionRecord['Kaleidoscape']['ItemList'].push(SkillBase);
		res.locals.UserSessionRecord['Kaleidoscape']['UnitInfo']['skill_bag_item_no_sort_list'][s] = res.locals.UserSessionRecord['Kaleidoscape']['ItemTracker'];
	}
	const CharacterListIndex = res.locals.UserSessionRecord['Kaleidoscape']['CharacterList'].findIndex(x => x.chara_id == CharacterID);
	if (CharacterListIndex == -1) { res.locals.UserSessionRecord['Kaleidoscape']['CharacterList'].push({
		"chara_id": CharacterID,
		"max_floor_num": 0,
		"select_servitor_id": ServitorID,
		"select_edit_skill_chara_id_1": SkillList[0],
		"select_edit_skill_chara_id_2": SkillList[1],
		"select_edit_skill_chara_id_3": 0,
		"max_dmode_score": 0
    }); }
	else {
		res.locals.UserSessionRecord['Kaleidoscape']['CharacterList'][CharacterListIndex]['select_servitor_id'] = ServitorID;
		res.locals.UserSessionRecord['Kaleidoscape']['CharacterList'][CharacterListIndex]['select_edit_skill_chara_id_1'] = SkillList[0];
		res.locals.UserSessionRecord['Kaleidoscape']['CharacterList'][CharacterListIndex]['select_edit_skill_chara_id_2'] = SkillList[1];
	}
	res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo'] = {
		"chara_id": CharacterID,
		"floor_num": 0,
		"quest_time": 0,
		"dungeon_score": 0,
		"is_play_end": 0,
		"state": 2
    }
	res.locals.UserSessionRecord['Kaleidoscape']['Agito'] = Math.floor(Math.random() * 4);
	res.locals.ResponseBody['data'] = {
		'dmode_dungeon_state': 2,
		'dmode_ingame_data': {
			'recovery_count': res.locals.UserSessionRecord['Kaleidoscape']['DmodeInfo']['recovery_count'],
			'recovery_time': LastServerReset,
			'unique_key': DModeKey,
			'start_floor_num': StartFloor,
			'target_floor_num': 60,
			'dmode_level_group_id': 1,
			'unit_data': CharacterMap.KaleidoStats(CharacterID),
			'servitor_id': ServitorID,
			'dmode_servitor_passive_list': res.locals.UserSessionRecord['Kaleidoscape']['Passive']
		}
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dmode_dungeon/floor", Android_Version + "/dmode_dungeon/floor"], errorhandler(async (req, res, next) => {
	res.locals.UserSessionRecord['Kaleidoscape']['FloorKey'] = crypto.randomBytes(20).toString("hex");
	res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']['state'] = 5;
	const AreaInfo = DModeMap.GenerateKaleidoData(res.locals.UserSessionRecord, msgpack.unpack(req.body)['dmode_play_record']);
	res.locals.ResponseBody['data'] = {
		'dmode_dungeon_state': 5,
		'dmode_floor_data': AreaInfo[0]
	}
	res.locals.UserSessionRecord = AreaInfo[1];
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dmode_dungeon/floor_skip", Android_Version + "/dmode_dungeon/floor_skip"], errorhandler(async (req, res, next) => {
	res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']['state'] = 4;
	res.locals.ResponseBody['data'] = {
		'dmode_dungeon_state': 4,
		'update_data_list': {
			'dmode_info': res.locals.UserSessionRecord['Kaleidoscape']['DmodeInfo']
		}
	}
	next();
}));
Orchis.post([iOS_Version + "/dmode_dungeon/restart", Android_Version + "/dmode_dungeon/restart"], errorhandler(async (req, res, next) => {
	res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']['state'] = 7;
	const CharacterListIndex = res.locals.UserSessionRecord['Kaleidoscape']['CharacterList'].findIndex(x => x.chara_id == res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']['chara_id']);
	const Servitor = res.locals.UserSessionRecord['Kaleidoscape']['CharacterList'][CharacterListIndex]['select_servitor_id'];
	res.locals.UserSessionRecord['Kaleidoscape']['IsRestart'] = true;
	res.locals.UserSessionRecord['Kaleidoscape']['FloorNumber'] = res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']['floor_num'];
	res.locals.ResponseBody['data'] = {
		'dmode_dungeon_state': 7,
		'dmode_dungeon_info': res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo'],
		'dmode_ingame_data': {
			'recovery_count': res.locals.UserSessionRecord['Kaleidoscape']['DmodeInfo']['recovery_count'],
			'recovery_time': LastServerReset,
			'unique_key': res.locals.UserSessionRecord['Kaleidoscape']['UniqueKey'],
			'start_floor_num': res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']['floor_num'],
			'target_floor_num': 60,
			'dmode_level_group_id': 1,
			'unit_data': CharacterMap.KaleidoStats(res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']['chara_id']),
			'servitor_id': Servitor,
			'dmode_servitor_passive_list': res.locals.UserSessionRecord['Kaleidoscape']['Passive']
		},
		'update_data_list': {
			'dmode_info': res.locals.UserSessionRecord['Kaleidoscape']['DmodeInfo']
		}
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dmode_dungeon/finish", Android_Version + "/dmode_dungeon/finish"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	let Floor = res.locals.UserSessionRecord['Kaleidoscape']['FloorNumber'];
	if (res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']['state'] == 6) { Floor -= 1;}
	else if (res.locals.UserSessionRecord['Kaleidoscape']['Complete'] != true) { Floor -= 2; }
	const CharacterID = res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']['chara_id'];
	const CharacterListIndex = res.locals.UserSessionRecord['Kaleidoscape']['CharacterList'].findIndex(x=>x.chara_id == CharacterID);
	let IsBest = 0;
	if (CharacterListIndex == -1) { res.locals.UserSessionRecord['Kaleidoscape']['CharacterList'].push({
		"chara_id": CharacterID,
		"max_floor_num": 0,
		"select_servitor_id": 1,
		"select_edit_skill_chara_id_1": 10440102,
		"select_edit_skill_chara_id_2": 10850502,
		"select_edit_skill_chara_id_3": 0,
		"max_dmode_score": 0
    }); }
	if (res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']['floor_num'] > res.locals.UserSessionRecord['Kaleidoscape']['CharacterList'][CharacterListIndex]['max_floor_num']) {
		IsBest = 1;
		res.locals.UserSessionRecord['Kaleidoscape']['CharacterList'][CharacterListIndex]['max_floor_num'] = Floor;
	}
	if (Floor >= 50) { 
		const ExIndex = res.locals.UserSessionRecord['AlbumData']['Medals'].findIndex(x => x.chara_id == CharacterID);
		if (ExIndex == -1) {
			const Template = {
				'chara_id': CharacterID,
				'honor_list': [
					{
						'honor_id': 101201
					}
				]
			}
			if (Floor >= 60) { Template['honor_list'].push({'honor_id': 101202}); }
			res.locals.UserSessionRecord['AlbumData']['Medals'].push(Template);
		}
		else {
			if (res.locals.UserSessionRecord['AlbumData']['Medals'][ExIndex]['honor_list'].findIndex(x => x.honor_id == 101201) == -1) {
				res.locals.UserSessionRecord['AlbumData']['Medals'][ExIndex]['honor_list'].push({'honor_id': 101201});
			}
			if (Floor >= 60) {
				if (res.locals.UserSessionRecord['AlbumData']['Medals'][ExIndex]['honor_list'].findIndex(x => x.honor_id == 101202) == -1) {
					res.locals.UserSessionRecord['AlbumData']['Medals'][ExIndex]['honor_list'].push({'honor_id': 101202});
				}
			}
		}
	}
	const DModePoint = DModeMap.GetAmber(Floor);
	let TalismanData = DModeMap.CreateTalismans(Floor, res.locals.UserSessionRecord, res.locals.UserIndexRecord);
	if (Floor > res.locals.UserSessionRecord['Kaleidoscape']['DmodeInfo']['total_max_floor_num']) {
		TalismanData[2]['Kaleidoscape']['DmodeInfo']['total_max_floor_num'] = Floor;
	}
	TalismanData[2]['Kaleidoscape']['DmodeInfo']['dmode_point_1'] += DModePoint[0] + res.locals.UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_1'];
	TalismanData[2]['Kaleidoscape']['DmodeInfo']['dmode_point_2'] += DModePoint[1] + res.locals.UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_2'];
	
	TalismanData[2]['Kaleidoscape']['DungeonInfo'] = {
		'chara_id': CharacterID,
		'floor_num': 0,
		'quest_time': 0,
		'dungeon_score': 0,
		'is_play_end': 0,
		'state': 1
	}
	res.locals.ResponseBody['data'] = { 
		'dmode_dungeon_state': 1,
		'dmode_ingame_result': {
			'floor_num': Floor,
			'is_record_floor_num': IsBest,
			'chara_id_list': [ CharacterID ],
			'reward_talisman_list': TalismanData[1],
			'take_dmode_point_1': DModePoint[0],
			'take_dmode_point_2': DModePoint[1],
			'take_player_exp': 0,
			'player_level_up_fstone': 0,
			'quest_time': res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']['quest_time'],
			'is_view_quest_time': 0,
			'dmode_score': 0,
			'clear_state': 1
		},
		'dmode_dungeon_info': TalismanData[2]['Kaleidoscape']['DungeonInfo'],
		'update_data_list': {
			'dmode_info': TalismanData[2]['Kaleidoscape']['DmodeInfo'],
			'talisman_list': TalismanData[0]
		}
	}
	res.locals.UserSessionRecord = TalismanData[2];
	res.locals.UpdatedSessionRecord = true;
	res.locals.UserIndexRecord = TalismanData[3];
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dmode_dungeon/user_halt", Android_Version + "/dmode_dungeon/user_halt"], errorhandler(async (req, res, next) => {
	res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']['state'] = 6;
	res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']['floor_num'] = res.locals.UserSessionRecord['Kaleidoscape']['FloorNumber'];
	res.locals.ResponseBody['data'] = {
		'dmode_dungeon_state': 6,
		'dmode_dungeon_info': res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dmode_dungeon/system_halt", Android_Version + "/dmode_dungeon/system_halt"], errorhandler(async (req, res, next) => {
	res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']['state'] = 6;
	res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']['floor_num'] = res.locals.UserSessionRecord['Kaleidoscape']['FloorNumber'];
	res.locals.ResponseBody['data'] = {
		'dmode_dungeon_state': 6,
		'dmode_dungeon_info': res.locals.UserSessionRecord['Kaleidoscape']['DungeonInfo']
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/dmode/buildup_servitor_passive", Android_Version + "/dmode/buildup_servitor_passive"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const RequestBuild = MsgPackData['request_buildup_passive_list'];
	res.locals.UserSessionRecord = DModeMap.BuildPassive(RequestBuild, res.locals.UserSessionRecord);
	res.locals.ResponseBody['data'] = {
		'dmode_servitor_passive_list': res.locals.UserSessionRecord['Kaleidoscape']['Passive'],
		'update_data_list': {
			'dmode_info': res.locals.UserSessionRecord['Kaleidoscape']['DmodeInfo']
		}
	}
	res.locals.UpdatedSessionRecord = true;
	next();
}));

Orchis.post([iOS_Version + "/talisman/sell", Android_Version + "/talisman/sell"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body);
	const SellList = MsgPackData['talisman_key_id_list'];
	let DeleteList = [];
	for (let x in SellList) {
		const KeyID = SellList[x];
		const TalismanIndex = res.locals.UserIndexRecord['talisman_list'].findIndex(x => x.talisman_key_id == KeyID);
		res.locals.UserIndexRecord['talisman_list'].splice(TalismanIndex, 1);
		DeleteList.push({'talisman_key_id': KeyID});
		const SellCoin = 10000; if ((res.locals.UserIndexRecord['user_data']['coin'] + SellCoin) > 3000000000) {res.locals.UserIndexRecord['user_data']['coin'] = 3000000000;}
		else { res.locals.UserIndexRecord['user_data']['coin'] += SellCoin; }
	}
	res.locals.ResponseBody['data'] = {
		'update_data_list': { 'user_data': res.locals.UserIndexRecord['user_data'] },
		'delete_data_list': { 'delete_talisman_list': DeleteList }
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));
Orchis.post([iOS_Version + "/talisman/set_lock", Android_Version + "/talisman/set_lock"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const PrintID = MsgPackData['talisman_key_id']; const Lock = MsgPackData['is_lock'];
	const PrintIndex = res.locals.UserIndexRecord['talisman_list'].findIndex(x => x.talisman_key_id == PrintID);
	res.locals.UserIndexRecord['talisman_list'][PrintIndex]['is_lock'] = Lock;
	res.locals.ResponseBody['data']['update_data_list'] = {
		'talisman_list': [
			res.locals.UserIndexRecord['talisman_list'][PrintIndex]
		]
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));

Orchis.post([iOS_Version + "/stamp/get_stamp", Android_Version + "/stamp/get_stamp"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
		'stamp_list': res.locals.UserSessionRecord['Stickers']
	}
	next();
}));
Orchis.post([iOS_Version + "/stamp/set_equip_stamp", Android_Version + "/stamp/set_equip_stamp"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const StampList = MsgPackData['stamp_list']
	res.locals.UserIndexRecord['equip_stamp_list'] = StampList;
	res.locals.ResponseBody['data'] = {
		'equip_stamp_list': StampList
	}
	res.locals.UpdatedIndexRecord = true;
	next();
}));

Orchis.post([iOS_Version + "/suggestion/get_category_list", Android_Version + "/suggestion/get_category_list"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
		'category_list': [
			{
				'category_id': 1,
				'name': "General Requests"
			},
			{
				'category_id': 2,
				'name': "General Suggestions"
			},
			{
				'category_id': 3,
				'name': "Save Modifications"
			},
			{
				'category_id': 4,
				'name': "Bug Report"
			}
		]
	}
	next();
}));
Orchis.post([iOS_Version + "/suggestion/set", Android_Version + "/suggestion/set"], errorhandler(async (req, res, next) => {
	const MsgPackData = msgpack.unpack(req.body); const Category = MsgPackData['category_id'];
	const Message = MsgPackData['message']; let SuggestType = ""; res.locals.ResponseBody['data'] = { 'result_code': 1 }
	if (Category == 1) { SuggestType = "Request"; } else if (Category == 2) { SuggestType = "Suggestion"; }
	else if (Category == 3) {
		SuggestType = "SaveMod";
		switch(Message) {
			case "Weapons":
				const WeaponTemplate = WeaponMap.GenerateWeaponMaxSaveTemplate();
				res.locals.UserIndexRecord['weapon_body_list'] = WeaponTemplate[0];
				res.locals.UserIndexRecord['weapon_skin_list'] = WeaponTemplate[1];
				break;
			case "Characters":
				const CharacterTemplate = CharacterMap.GenerateCharacterMaxSaveTemplate();
				let NextID = 39999;
				if (res.locals.UserIndexRecord['dragon_list'].length != 0) { NextID = res.locals.UserIndexRecord['dragon_list'][res.locals.UserIndexRecord['dragon_list'].length - 1]['dragon_key_id'] + 1; }
				const DragonTemplate = DragonMap.GenerateDragonMaxSaveTemplate(NextID);
				let CharacterBondTemplate = CharacterMap.GenerateCharacterStoryTemplate();
				CharacterBondTemplate = DragonMap.GenerateDragonMaxStoryTemplate(CharacterBondTemplate);
				const DragonBondTemplate = DragonMap.GenerateDragonMaxReliabilityTemplate();
				res.locals.UserIndexRecord['chara_list'] = CharacterTemplate;
				res.locals.UserIndexRecord['unit_story_list'] = CharacterBondTemplate;
				res.locals.UserIndexRecord['dragon_list'] = DragonTemplate[0];
				res.locals.UserIndexRecord['user_data']['max_dragon_quantity'] = Object.keys(DragonTemplate[0]).length;
				res.locals.UserIndexRecord['dragon_reliability_list'] = DragonBondTemplate;
				//res.locals.UserIndexRecord['party_list'] = ErasePartyList();
				for (const p in res.locals.UserIndexRecord['party_list']) {
					for (const s in res.locals.UserIndexRecord['party_list'][p]['party_setting_list']) {
						res.locals.UserIndexRecord['party_list'][p]['party_setting_list'][s]['equip_dragon_key_id'] = 0;
					}
				}
				res.locals.UpdatedSessionRecord = true;
				break;
			case "Wyrmprints":
				const PrintTemplate = WyrmprintMap.GenerateWyrmprintMaxTemplate();
				res.locals.UserIndexRecord['ability_crest_list'] = PrintTemplate;
				break;
			case "Guild":
				res.locals.UserIndexRecord = AssignGuildData(10001, res.locals.UserIndexRecord);
				break;
			case "Facilities":
				res.locals.UserIndexRecord['build_list'] = FortMap.GenerateFacilityMaxTemplate();
				break;
			case "ResetAll":
				res.locals.UserIndexRecord = IndexTools.GenerateDefaultSaveData(res.locals.UserIndexRecord['user_data']['name'], res.locals.UserSessionRecord['ViewerID']);
				break;
			case "ResetAllForRealz":
				res.locals.UserSessionRecord = DefaultSessionRecord(res.locals.UserSessionRecord['ViewerID'], {'sub': res.locals.UserSessionRecord['BaasID']});
				res.locals.UserSessionRecord['SaveUpdatedAt'] = Math.floor(Date.now() / 1000);
				res.locals.UpdatedSessionRecord = true;
				res.locals.UserIndexRecord = IndexTools.GenerateResetSaveData(res.locals.UserIndexRecord['user_data']['name'], res.locals.UserSessionRecord['ViewerID']);
				break;
			case "Dawn":
				if (res.locals.UserSessionRecord['VanillaAssets'] == undefined || res.locals.UserSessionRecord['VanillaAssets'] == false) {
					res.locals.UserSessionRecord['VanillaAssets'] = true;
				}
				else { res.locals.UserSessionRecord['VanillaAssets'] = false; }
				res.locals.UpdatedSessionRecord = true;
				break;
		}
		const Split = Message.split(" ");
		if (Split[0] == "CashMoney") {
			let Amount = parseInt(Split[1]);
			if (isNaN(Amount)) { res.locals.ResponseBody = { 'data_headers': { 'result_code': 1050 }, 'data': { 'result_code': 1050 } }; return; }
			else {
				if (Amount > 10000) { Amount = 10000; }
				res.locals.UserIndexRecord['user_data']['crystal'] += Amount;
			}
		}
		res.locals.UpdatedIndexRecord = true;
		res.locals.ResponseBody = { 'data_headers': { 'result_code': 101 }, 'data': { 'result_code': 101 } }
	}
	else if ( Category == 4) {
		SuggestType = "BugReport";
		SendToZena("/zena/bug_report", JSON.stringify({
			'origin': "Orchis",
			'name': res.locals.UserIndexRecord['user_data']['name'],
			'viewerid': res.locals.UserSessionRecord['ViewerID'],
			'message': String(Message)
		}));
	}
	else { res.end("Invalid"); return; }
	const FileName = String(res.locals.UserSessionRecord['ViewerID']) + "_" + String(Math.floor(Date.now() / 1000)) + "-" + SuggestType;
	await fs.writeFile(__dirname + '/Library/Function/Feedback/' + FileName, String(Message) + "\n");
	next();
}));
Orchis.post([iOS_Version + "/user/get_n_account_info", Android_Version + "/user/get_n_account_info"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = { 'n_account_info': { 'email': "ceryphim@orchis.cherrymint.live", 'nickname': res.locals.UserIndexRecord['user_data']['name'] } }
	next();
}));
Orchis.post([iOS_Version + "/user/linked_n_account", Android_Version + "/user/linked_n_account"], errorhandler(async (req, res, next) => {
	res.locals.ResponseBody['data'] = { 'result_code': 1 }
	next();
}));

Orchis.get("/cartoon/top", async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
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
	}
	next();
});
Orchis.post([iOS_Version + "/cartoon/latest", Android_Version + "/cartoon/latest"], async (req, res, next) => {
	res.locals.ResponseBody['data'] = {
		"latest": {
			"episode": 468
		}
	}
	next();
});

Orchis.get(["/", "/index", "/index.html"], async (req,res) => {
	res.set('content-type', 'text/html');
	if (req.query.pf == "android" || req.query.pf == "ios") { res.end(IndexPage); }
	else { res.end(BasicIndexPage); }
});
Orchis.get("/dragalipatch/config", async (req,res) => {
	res.end(JSON.stringify({ 'mode': 'RAW', 'cdnUrl': 'https://minty.sbs', 'coneshellKey': null, 'useUnifiedLogin': true }));
});
Orchis.get("/assetver", async (req,res) => {
	res.end(JSON.stringify(AssetList));
});
Orchis.get("/savedata.json", errorhandler(async (req,res) => {
	let ViewerID = parseInt(req.query.id);
	const IsExists = await Fluoresce.Exists("MasterIndexRecord", ViewerID);
	if (!IsExists) {
		const ID2 = ViewerID + 1000000000;
		const IsExists2 = await Fluoresce.Exists("MasterIndexRecord", ID2);
		if (!IsExists2) { res.status(404); res.end("Viewer ID does not exist."); return; }
		ViewerID = ID2;
	}
	const UserIndexRecord = await ReadIndexRecord(ViewerID);
	UserIndexRecord['origin'] = "orchis";
	const WrappedData = { 'data_headers': { 'result_code': 1 }, 'data': UserIndexRecord }
	res.set('content-type', 'application/msgpack');
	res.end(JSON.stringify(WrappedData, null, 2));
}));
Orchis.get("/damagestats", errorhandler(async (req,res) => {
	const ViewerID = req.query.id;
	const IsExists = await Fluoresce.Exists("MasterDPSRecord", ViewerID);
	if (!IsExists) { res.status(404); res.end("No data"); return; }
	let UserDPSRecord = await ReadDPSRecord(ViewerID);
	if (UserDPSRecord[0] == undefined) { res.end("No data"); return; }
	UserDPSRecord.reverse();
	let HTMLOpen = '<html><style>@font-face {font-family: "NotoSans";src: url(https://orchis.cherrymint.live/NotoSans-regular.ttf) format("truetype");}';
		HTMLOpen += 'p.NotoSans {font-family: "NotoSans";}';
		HTMLOpen += 'p.Base {font-family: "NotoSans";font-size: 100%;color: #000000;}';
		HTMLOpen += 'p.Tab {margin-left: 3%;font-family: "NotoSans";font-size: 100%;color: #000000;}';
		HTMLOpen += 'p.DoubleTab {margin-left: 6%;font-family: "NotoSans";font-size: 100%;color: #000000;}';
		HTMLOpen += 'p.TripleTab {margin-left: 9%;font-family: "NotoSans";font-size: 100%;color: #000000;}';
		HTMLOpen += '</style>';
	let HTMLBody = '<p style="color: #000000; font-size: 150%"; class="NotoSans">Previous 10 quests:</p><body>';
	let HTMLClose = "</body></html>";
	for (const i in UserDPSRecord) {
		let ClearTime = "0:00"; if (UserDPSRecord[i]['ClearTime'] != undefined) { ClearTime = PrettyTime(UserDPSRecord[i]['ClearTime']); }
		HTMLBody += "<p class=\"Base\">Quest: <strong>" + QuestMap.GetQuestInfo(UserDPSRecord[i]['QuestID'], "name") + " (" + ClearTime + ")</strong></p><div>";
		for (const c in UserDPSRecord[i]['CharacterStats']) {
			const CharacterStats = UserDPSRecord[i]['CharacterStats'][c];
			if (CharacterStats['CharacterID'] == 0) { continue; }
			const CharacterName = CharacterMap.GetCharacterInfo(CharacterStats['CharacterID'], "name");
			const AltID = PadLeft(CharacterMap.GetCharacterInfo(CharacterStats['CharacterID'], "alt_id"), 2, "0");
			const CharacterImageURL = "https://minty.sbs/images/icon/chara/m/" + CharacterMap.GetCharacterInfo(CharacterStats['CharacterID'], "base_id") + "_" + AltID + "_r05.webp";
			HTMLBody += "<p class=\"Base\">Character: <img height=30 width=30 src=" + CharacterImageURL + "> " + CharacterName + "</p>";
			HTMLBody += "<p class=\"Tab\">Total Damage: " + CharacterStats['Total'] + "<br />";
			HTMLBody += "Skill Damage: " + CharacterStats['Skill'] + "<br />";
			HTMLBody += "Affliction Damage: " + CharacterStats['DoT'] + "<br />";
			HTMLBody += "Critical Damage: " + CharacterStats['Critical'] + "<br />";
			HTMLBody += "Overdamage: " + CharacterStats['Enchant'] + "<br />";
			if (CharacterStats['Loadout']['Dragon'] != {}) {
				const DragonName = DragonMap.GetDragonInfo(CharacterStats['Loadout']['Dragon']['dragon_id'], "name");
				HTMLBody += "Dragon: " + DragonName + "<br />";
				HTMLBody += "Total Dragon Damage: " + CharacterStats['DragonTotal'] + "<br />";
				HTMLBody += "Dragon Skill Damage: " + CharacterStats['DragonSkill'] + "<br />";
				HTMLBody += "Dragon Affliction Damage: " + CharacterStats['DragonDoT'] + "<br />";
				HTMLBody += "Dragon Critical Damage: " + CharacterStats['DragonCritical'] + "<br />";
				HTMLBody += "Dragon Overdamage: " + CharacterStats['DragonEnchant'] + "<br /></p>";
			}
			else { HTMLBody += "</p>"; }
		}
		HTMLBody += "</div>";
	}
	res.end(HTMLOpen + HTMLBody + HTMLClose);
	
}));
Orchis.get("/zena/get_team_data", errorhandler(async (req,res) => {
	if (req.get('Authorization') != ServerConfig['ZenaToken']) { res.end("Authentication Failed.\n"); return; }
	const ViewerID = req.query.id;
	const TeamID = parseInt(req.query.teamnum);
	const TeamID2 = parseInt(req.query.teamnum2);
	const UserIndexRecord = await ReadIndexRecord(ViewerID);
	const Team1Data = UserIndexRecord['party_list'].find(x => x.party_no == TeamID);
	let Response = {
		'name': UserIndexRecord['user_data']['name'],
		'unit1': Team1Data['party_setting_list'][0]['chara_id'],
		'unit2': Team1Data['party_setting_list'][1]['chara_id'],
		'unit3': Team1Data['party_setting_list'][2]['chara_id'],
		'unit4': Team1Data['party_setting_list'][3]['chara_id']
	}
	if (TeamID2 != -1) {
		const Team2Data = UserIndexRecord['party_list'].find(x => x.party_no == TeamID2);
		Response['unit5'] = Team2Data['party_setting_list'][0]['chara_id'];
		Response['unit6'] = Team2Data['party_setting_list'][1]['chara_id'];
		Response['unit7'] = Team2Data['party_setting_list'][2]['chara_id'];
		Response['unit8'] = Team2Data['party_setting_list'][3]['chara_id'];
	}
	res.type('application/json');
	res.end(JSON.stringify(Response));
}));
Orchis.post("/zena/send_guild_message", errorhandler(async (req,res) => {
	if (req.get('Authorization') != ServerConfig['ZenaToken']) { res.end("Authentication Failed.\n"); return; }
	const JSONData = req.body;
	const NextMessageID = MasterGuildDatabase["10001"]['Chat'][0]['chat_message_id'] + 1;
	let ChatMessageTemplate = {};
	if (JSONData['type'] == "text") {
		ChatMessageTemplate = {
			'chat_message_id': NextMessageID,
			'viewer_id': 999999999,
			'user_name': JSONData['name'],
			'profile_entity_type': JSONData['icon']['type'],
			'profile_entity_id': JSONData['icon']['id'],
			'profile_entity_rarity': 5,
			'chat_message_type': 1,
			'chat_message_text': JSONData['message'],
			'chat_message_stamp_id': 0,
			'chat_message_system_id': 0,
			'chat_message_param_value_1': 0,
			'chat_message_param_value_2': 0,
			'chat_message_param_value_3': 0,
			'chat_message_param_value_4': 0,
			'create_time': Math.floor(Date.now() / 1000)
		}
	}
	else if (JSONData['type'] == "stamp") {
		ChatMessageTemplate = {
			'chat_message_id': NextMessageID,
			'viewer_id': 999999999,
			'user_name': JSONData['name'],
			'profile_entity_type': JSONData['icon']['type'],
			'profile_entity_id': JSONData['icon']['id'],
			'profile_entity_rarity': 5,
			'chat_message_type': 2,
			'chat_message_text': "",
			'chat_message_stamp_id': JSONData['stamp'],
			'chat_message_system_id': 0,
			'chat_message_param_value_1': 0,
			'chat_message_param_value_2': 0,
			'chat_message_param_value_3': 0,
			'chat_message_param_value_4': 0,
			'create_time': Math.floor(Date.now() / 1000)
		}
	}
	else if (JSONData['type'] == "special") {
		if (MasterGuildDatabase["10001"]['LastSystemID'] == undefined) { MasterGuildDatabase["10001"]['LastSystemID'] = 1; }
		MasterGuildDatabase["10001"]['LastSystemID'] += 1;
		const SystemChatID = MasterGuildDatabase["10001"]['LastSystemID'];
		ChatMessageTemplate = {
			'chat_message_id': NextMessageID,
			'viewer_id': 999999999,
			'user_name': JSONData['name'],
			'profile_entity_type': JSONData['icon']['type'],
			'profile_entity_id': JSONData['icon']['id'],
			'profile_entity_rarity': 5,
			'chat_message_type': 3,
			'chat_message_text': JSONData['message'],
			'chat_message_stamp_id': JSONData['stamp'],
			'chat_message_system_id': JSONData['special']['system_id'],
			'chat_message_param_value_1': JSONData['special']['param_1'],
			'chat_message_param_value_2': JSONData['special']['param_2'],
			'chat_message_param_value_3': JSONData['special']['param_3'],
			'chat_message_param_value_4': JSONData['special']['param_4'],
			'create_time': Math.floor(Date.now() / 1000)
		}
	}
	else if (JSONData['type'] == "co-op") {
		ChatMessageTemplate = {
			'chat_message_id': NextMessageID,
			'viewer_id': 999999999,
			'user_name': JSONData['name'],
			'profile_entity_type': JSONData['icon']['type'],
			'profile_entity_id': JSONData['icon']['id'],
			'profile_entity_rarity': 5,
			'chat_message_type': 4,
			'chat_message_text': JSONData['message'],
			'chat_message_stamp_id': JSONData['stamp'],
			'chat_message_system_id': 0,
			'chat_message_param_value_1': JSONData['special']['param_1'],
			'chat_message_param_value_2': JSONData['special']['param_2'],
			'chat_message_param_value_3': JSONData['special']['param_3'],
			'chat_message_param_value_4': JSONData['special']['param_4'],
			'create_time': Math.floor(Date.now() / 1000)
		}
	}
	MasterGuildDatabase["10001"]['Chat'].unshift(ChatMessageTemplate);
	res.end();
}));

Orchis.post("/utility/graceful_shutdown", async (req,res) => {
	IsMaintenance = 1;
	await SaveDatabases();
	console.log("Awaiting shutdown...");
	res.end("Awaiting shutdown...\n");
});
Orchis.post("/utility/unmaintenance", async (req,res) => {
	IsMaintenance = 0;
	await SaveDatabases();
	console.log("Shutdown stopped.");
	res.end("Shutdown stopped.\n");
});
Orchis.post("/utility/force_save_database", async (req,res) => {
	SaveDatabases();
	res.end('Databases saved.\n');
});
Orchis.post("/utility/inject_session_data", errorhandler(async (req,res) => {
	if (req.get('viewerid') == undefined) { res.end('No Viewer ID presented.\n'); return; }
	if (req.get('content-type') != 'application/json') { res.end("Define content-type.\n"); }
	const UserAccountRecord = await Fluoresce.Read("MasterAccountRecord", req.get('viewerid'));
	const RecievedData = req.body; const UserSessionRecord = RecievedData; await WriteSessionRecord(UserAccountRecord['SessionID'], UserSessionRecord);
	res.end('Injected session for ViewerID ' + String(req.get('viewerid')) + '\n');
}));
Orchis.post("/utility/inject_index_data", errorhandler(async (req,res) => {
	if (req.get('viewerid') == undefined) { res.end('No Viewer ID presented.\n'); return; }
	if (req.get('content-type') != 'application/json') { res.end("Define content-type.\n"); }
	const RecievedData = req.body; let UserIndexRecord = {};
	UserIndexRecord = RecievedData['data']; UserIndexRecord['user_data']['viewer_id'] = parseInt(req.get('viewerid'));
	await WriteIndexRecord(req.get('viewerid'), UserIndexRecord);
	res.end('Injected index for ViewerID ' + String(req.get('viewerid')) + '\n');
}));
Orchis.post("/utility/inject_kscape_data", errorhandler(async (req,res) => {
	if (req.get('viewerid') == undefined) { res.end('No Viewer ID presented.\n'); return; }
	if (req.get('content-type') != 'application/json') { res.end("Define content-type.\n"); }
	const UserAccountRecord = await Fluoresce.Read("MasterAccountRecord", req.get('viewerid'));
	let UserSessionRecord = await ReadSessionRecord(UserAccountRecord['SessionID']);
	const RawData = req.body; const UserKscapeData = RawData['data'];
	UserSessionRecord['Kaleidoscape']['DmodeInfo'] = UserKscapeData['dmode_info'];
	UserSessionRecord['Kaleidoscape']['DungeonInfo'] = UserKscapeData['dmode_dungeon_info'];
	UserSessionRecord['Kaleidoscape']['Passive'] = UserKscapeData['dmode_servitor_passive_list']
	UserSessionRecord['Kaleidoscape']['Expedition'] = UserKscapeData['dmode_expedition'];
	UserSessionRecord['Kaleidoscape']['StoryList'] = UserKscapeData['dmode_story_list'];
	UserSessionRecord['Kaleidoscape']['CharacterList'] = UserKscapeData['dmode_chara_list'];
	await WriteSessionRecord(UserAccountRecord['SessionID'], UserSessionRecord);
	res.end('Injected Kaleidoscape data for ViewerID ' + String(req.get('viewerid')) + '\n');
}));
Orchis.post("/utility/migrate_index_data", async (req,res) => {
	if (req.get('oldviewerid') == undefined || req.get('newviewerid') == undefined) { res.end('Malformed parameters.\n'); return; }
	const Old_UserIndex = await ReadIndexRecord(String(req.get('oldviewerid'))); if (Old_UserIndex == undefined) { res.end('No index data at ViewerID ' + String(req.get('oldviewerid')) + '\n'); }
	await WriteIndexRecord(String(req.get('newviewerid')), Old_UserIndex);
	res.end('Migrated index data from ViewerID ' + String(req.get('oldviewerid')) + ' to ViewerID ' + String(req.get('newviewerid')) + '\n');
});
Orchis.post("/utility/get_index_data", errorhandler(async (req,res) => {
	if (req.get('viewerid') == undefined) { res.end('No Viewer ID presented.\n'); return; }
	const UserIndexRecord = await ReadIndexRecord(parseInt(req.get('viewerid')));
	const WrappedData = { 'data_headers': { 'result_code': 1 }, 'data': UserIndexRecord }
	res.set('content-type', 'application/msgpack');
	res.end(JSON.stringify(WrappedData, null, 2));
}));
Orchis.post("/utility/get_session_data", errorhandler(async (req,res) => {
	if (req.get('viewerid') == undefined) { res.end('No Viewer ID presented.\n'); return; }
	const UserAccountRecord = await Fluoresce.Read("MasterAccountRecord", req.get('viewerid'));
	const UserSessionRecord = await ReadSessionRecord(UserAccountRecord['SessionID']);
	res.set('content-type: application/json'); res.end(JSON.stringify(UserSessionRecord, null, 2));
}));
Orchis.post("/utility/create_default_save", async (req,res) => {
	if (req.get('viewerid') == undefined) { res.end('No Viewer ID presented.\n'); return; }
	let UserIndexRecord = await ReadIndexRecord(req.get('viewerid'));
	UserIndexRecord = IndexTools.GenerateDefaultSaveData(UserIndexRecord['user_data']['name'], parseInt(req.get('viewerid')))
	UserIndexRecord['party_list'] = ErasePartyList();
	await WriteIndexRecord(req.get('viewerid'), UserIndexRecord);
	res.end("Wrote new save for " + req.get('viewerid') + "\n");
});
Orchis.post("/utility/create_support_account", async (req,res) => {
	const AccountID = req.get('viewerid'); if (AccountID == undefined) { res.end('No Viewer ID presented.\n'); return; }
	let UserAccountRecord = {}; UserAccountRecord['ViewerID'] = parseInt(AccountID); 
	const SessionID = crypto.randomBytes(32).toString("hex"); UserAccountRecord['SessionID'] = SessionID;
	let UserSessionRecord = {}; UserSessionRecord = req.body;
	await Fluoresce.Write("MasterAccountRecord", AccountID, UserAccountRecord); 
	await WriteSessionRecord(SessionID, UserSessionRecord);
	res.end('Created support account for ID ' + AccountID + '.\n');
});
Orchis.post("/utility/poll_account", async (req,res) => {
	const AccountID = req.get('viewerid'); if (AccountID == undefined) { res.end('No Viewer ID presented.\n'); return; }
	const AccountExists = await Fluoresce.Exists("MasterAccountRecord", AccountID);
	if (AccountExists) { res.end('Account ID ' + AccountID + ' exists.\n'); } else { res.end('Account ID ' + AccountID + ' does not exist.\n'); } return;
});
Orchis.post("/utility/set_fixed_team", async (req,res) => {
	if (req.get('viewerid') == undefined) { res.end('No Viewer ID presented.\n'); return; }
	if (req.get('content-type') != 'application/json') { res.end("Define content-type.\n"); return; }
	const UserAccountRecord = await Fluoresce.Read("MasterAccountRecord", req.get('viewerid'));
	let UserSessionRecord = await ReadSessionRecord(UserAccountRecord['SessionID']);
	UserSessionRecord['DungeonRecord']['FixedTeamData'] = req.body;
	UserSessionRecord['DungeonRecord']['SetFixedTeam'] = 1;
	await WriteSessionRecord(UserAccountRecord['SessionID'], UserSessionRecord);
	res.end('Set fixed team data for ID ' + req.get('viewerid') + '.\n');
});
Orchis.post("/utility/unset_fixed_team", async (req,res) => {
	if (req.get('viewerid') == undefined) { res.end('No Viewer ID presented.\n'); return; } 
	const UserAccountRecord = await Fluoresce.Read("MasterAccountRecord", req.get('viewerid'));
	let UserSessionRecord = await ReadSessionRecord(UserAccountRecord['SessionID']);
	UserSessionRecord['DungeonRecord']['SetFixedTeam'] = 0;
	await WriteSessionRecord(UserAccountRecord['SessionID'], UserSessionRecord);
	res.end('Unset fixed team data for ID ' + req.get('viewerid') + '.\n');
});
Orchis.post("/utility/set_custom_party", async (req,res) => {
	if (req.get('viewerid') == undefined) { res.end('No Viewer ID presented.\n'); return; }
	if (req.get('content-type') != 'application/json') { res.end("Define content-type.\n"); }
	let UserIndexRecord = await ReadIndexRecord(String(req.get('viewerid'))); const partydata = req.body;
	UserIndexRecord['party_list'][partydata['party_no'] - 1] = partydata;
	await WriteIndexRecord(String(req.get('viewerid')), UserIndexRecord);
	res.end('Set custom team data for ID ' + req.get('viewerid') + '.\n');
});
Orchis.post("/utility/add_all_units", async (req,res) => {
	const AccountID = req.get('viewerid'); if (AccountID == undefined) { res.end('No Viewer ID presented.\n'); return; }
	const UserAccountRecord = await Fluoresce.Read("MasterAccountRecord", req.get('viewerid'));
	let UserSessionRecord = await ReadSessionRecord(UserAccountRecord['SessionID']);
	let UserIndexRecord = await ReadIndexRecord(String(AccountID));
	const CharacterTemplate = CharacterMap.GenerateCharacterSaveTemplate();
	let NextID = 39999;
	if (res.locals.UserIndexRecord['dragon_list'].length != 0) { NextID = res.locals.UserIndexRecord['dragon_list'][res.locals.UserIndexRecord['dragon_list'].length - 1]['dragon_key_id'] + 1; }
	const DragonTemplate = DragonMap.GenerateDragonSaveTemplate(NextID)
	const CharacterBondTemplate = CharacterMap.GenerateCharacterStoryTemplate();
	const DragonBondTemplate = DragonMap.GenerateDragonReliabilityTemplate();
	UserIndexRecord['chara_list'] = CharacterTemplate;
	UserIndexRecord['unit_story_list'] = CharacterBondTemplate;
	UserIndexRecord['dragon_list'] = DragonTemplate[0];
	UserIndexRecord['user_data']['max_dragon_quantity'] = 300
	UserIndexRecord['dragon_reliability_list'] = DragonBondTemplate;
	UserIndexRecord['party_list'] = ErasePartyList();
	await WriteSessionRecord(UserAccountRecord['SessionID'], UserSessionRecord);
	await WriteIndexRecord(String(AccountID), UserIndexRecord);
	res.end('Updated Characters and Dragons for ' + AccountID + '.\n');
});
Orchis.post("/utility/add_all_units_max", async (req,res) => {
	const AccountID = req.get('viewerid'); if (AccountID == undefined) { res.end('No Viewer ID presented.\n'); return; }
	const UserAccountRecord = await Fluoresce.Read("MasterAccountRecord", req.get('viewerid'));
	let UserSessionRecord = await ReadSessionRecord(UserAccountRecord['SessionID']);
	let UserIndexRecord = await ReadIndexRecord(String(AccountID));
	const CharacterTemplate = CharacterMap.GenerateCharacterMaxSaveTemplate();
	let NextID = 39999;
	if (res.locals.UserIndexRecord['dragon_list'].length != 0) { NextID = res.locals.UserIndexRecord['dragon_list'][res.locals.UserIndexRecord['dragon_list'].length - 1]['dragon_key_id'] + 1; }
	const DragonTemplate = DragonMap.GenerateDragonMaxSaveTemplate(NextID);
	let CharacterBondTemplate = CharacterMap.GenerateCharacterStoryTemplate();
	CharacterBondTemplate = DragonMap.GenerateDragonMaxStoryTemplate(CharacterBondTemplate);
	const DragonBondTemplate = DragonMap.GenerateDragonMaxReliabilityTemplate();
	UserIndexRecord['chara_list'] = CharacterTemplate;
	UserIndexRecord['unit_story_list'] = CharacterBondTemplate;
	UserIndexRecord['dragon_list'] = DragonTemplate[0];
	UserIndexRecord['user_data']['max_dragon_quantity'] = Object.keys(DragonTemplate[0]).length;
	UserIndexRecord['dragon_reliability_list'] = DragonBondTemplate;
	UserIndexRecord['party_list'] = ErasePartyList();
	await WriteSessionRecord(UserAccountRecord['SessionID'], UserSessionRecord);
	await WriteIndexRecord(String(AccountID), UserIndexRecord);
	res.end('Updated Characters and Dragons for ' + AccountID + '.\n');
});
Orchis.post("/utility/add_all_units_hacked", async (req,res) => {
	const AccountID = req.get('viewerid'); if (AccountID == undefined) { res.end('No Viewer ID presented.\n'); return; }
	const UserAccountRecord = await Fluoresce.Read("MasterAccountRecord", req.get('viewerid'));
	let UserSessionRecord = await ReadSessionRecord(UserAccountRecord['SessionID']);
	let UserIndexRecord = await ReadIndexRecord(String(AccountID));
	const CharacterTemplate = CharacterMap.GenerateCharacterHackedSaveTemplate();
	let NextID = 39999;
	if (res.locals.UserIndexRecord['dragon_list'].length != 0) { NextID = res.locals.UserIndexRecord['dragon_list'][res.locals.UserIndexRecord['dragon_list'].length - 1]['dragon_key_id'] + 1; }
	const DragonTemplate = DragonMap.GenerateDragonHackedSaveTemplate(NextID)
	let CharacterBondTemplate = CharacterMap.GenerateCharacterStoryTemplate();
	CharacterBondTemplate = DragonMap.GenerateDragonMaxStoryTemplate(CharacterBondTemplate);
	const DragonBondTemplate = DragonMap.GenerateDragonMaxReliabilityTemplate();
	UserIndexRecord['chara_list'] = CharacterTemplate;
	UserIndexRecord['unit_story_list'] = CharacterBondTemplate;
	UserIndexRecord['dragon_list'] = DragonTemplate[0];
	UserIndexRecord['user_data']['max_dragon_quantity'] = Object.keys(DragonTemplate[0]).length;
	UserIndexRecord['dragon_reliability_list'] = DragonBondTemplate;
	UserIndexRecord['party_list'] = ErasePartyList();
	await WriteSessionRecord(UserAccountRecord['SessionID'], UserSessionRecord);
	await WriteIndexRecord(String(AccountID), UserIndexRecord);
	res.end('Updated Characters and Dragons for ' + AccountID + '.\n');
});
Orchis.post("/utility/add_all_weapons_max", async (req,res) => {
	const AccountID = req.get('viewerid'); if (AccountID == undefined) { res.end('No Viewer ID presented.\n'); return; }
	let UserIndexRecord = await ReadIndexRecord(String(AccountID));
	const WeaponTemplate = WeaponMap.GenerateWeaponMaxSaveTemplate();
	UserIndexRecord['weapon_body_list'] = WeaponTemplate[0];
	UserIndexRecord['weapon_skin_list'] = WeaponTemplate[1];
	await WriteIndexRecord(String(AccountID), UserIndexRecord);
	res.end('Weapons and skins updated for ' + AccountID + ".\n");
});
Orchis.post("/utility/add_all_prints_max", async (req,res) => {
	const AccountID = req.get('viewerid'); if (AccountID == undefined) { res.end('No Viewer ID presented.\n'); return; }
	let UserIndexRecord = await ReadIndexRecord(String(AccountID));
	const PrintTemplate = WyrmprintMap.GenerateWyrmprintMaxTemplate();
	UserIndexRecord['ability_crest_list'] = PrintTemplate;
	await WriteIndexRecord(String(AccountID), UserIndexRecord);
	res.end('Wyrmprints updated for ' + AccountID + ".\n");
});
Orchis.post("/utility/add_all_prints_hacked", async (req,res) => {
	const AccountID = req.get('viewerid'); if (AccountID == undefined) { res.end('No Viewer ID presented.\n'); return; }
	let UserIndexRecord = await ReadIndexRecord(String(AccountID));
	const PrintTemplate = WyrmprintMap.GenerateWyrmprintHackedTemplate();
	UserIndexRecord['ability_crest_list'] = PrintTemplate;
	await WriteIndexRecord(String(AccountID), UserIndexRecord);
	res.end('Wyrmprints updated for ' + AccountID + ".\n");
});
Orchis.post("/utility/revert_party_list", async (req,res) => {
	const AccountID = req.get('viewerid'); if (AccountID == undefined) { res.end('No Viewer ID presented.\n'); return; }
	let UserIndexRecord = await ReadIndexRecord(String(AccountID));
	UserIndexRecord['party_list'] = ErasePartyList();
	UserIndexRecord['user_data']['main_party_no'] = 1;
	await WriteIndexRecord(String(AccountID), UserIndexRecord);
	res.end('Cleared all party data for ' + AccountID + '.\n');
});
Orchis.post("/utility/add_gift_to_database", async (req,res) => {
	if (req.get('content-type') != 'application/json') { res.end('Bad data.\n'); return; }
	var GiftNames = []; var GiftData = req.body; let i = 0; while (i < GiftData.length) {
		if (MasterGiftDatabase[String(GiftData[i]['present_id'])] == undefined) { MasterGiftDatabase[String(GiftData[i]['present_id'])] = GiftData[i]; GiftNames[i] = String(GiftData[i]['present_id']) }
		i++;
	}
	res.end('Gifts ' + GiftNames + ' added to database.\n');
});
Orchis.post("/utility/get_gift_info", async (req,res) => {
	const GiftID = req.get('giftid'); if (MasterGiftDatabase[String(GiftID)] != undefined) { res.end(JSON.stringify(MasterGiftDatabase[String(GiftID)]) + '\n'); } else { res.end('ID ' + GiftID + ' does not exist.\n'); }
});
Orchis.post("/utility/merry_christmas", async (req,res) => {
	const GiftID = req.get('giftid');
	if (GiftID == undefined) { res.end('No Gift ID presented.\n'); return; }
	const UserList = await Fluoresce.List("MasterSessionRecord");
	for (let x in UserList) {
		let UserSessionRecord = await Fluoresce.DirectRead("MasterSessionRecord", UserList[x]);
		UserSessionRecord['GiftRecord']['GiftNormalList'].push(MasterGiftDatabase[String(GiftID)]);
		await Fluoresce.DirectWrite("MasterSessionRecord", UserList[x], UserSessionRecord);
	}
	res.end('Gifts delivered!\n');
});
Orchis.post("/utility/clear_gift_db", async (req,res) => {
	MasterGiftDatabase = {};
	res.end('Database cleared.\n');
});
Orchis.post("/utility/send_gift", async (req,res) => {
	const GiftID = req.get('giftid'); const ViewerID = req.get('viewerid');
	if (GiftID == undefined) { res.end('No Gift ID presented.\n'); return; } if (ViewerID == undefined) { res.end('No Viewer ID presented.\n'); return; }
	if (MasterGiftDatabase[String(GiftID)] == undefined) { res.end('No such gift in database.\n'); }
	const UserAccountRecord = await Fluoresce.Read("MasterAccountRecord", ViewerID);
	let UserSessionRecord = await Fluoresce.Read("MasterSessionRecord", UserAccountRecord['SessionID']);
	UserSessionRecord['GiftRecord']['GiftNormalList'].push(MasterGiftDatabase[String(GiftID)]);
	await Fluoresce.Write("MasterSessionRecord", UserAccountRecord['SessionID'], UserSessionRecord);
	res.end('Gift ' + GiftID + ' sent to ' + ViewerID + '.\n');
});
Orchis.post("/utility/send_diamantium", async (req,res) => {
	if (req.get('amount') == undefined) { res.end('No amount specified.\n'); return; }
	if (req.get('viewerid') == undefined) { res.end('No Viewer ID specified.\n'); return; }
	const UserAccountRecord = await Fluoresce.Read("MasterAccountRecord", req.get('viewerid'));
	let UserSessionRecord = await Fluoresce.Read("MasterSessionRecord", UserAccountRecord['SessionID']);
	UserSessionRecord['Diamantium'] += parseInt(req.get('amount'));
	await Fluoresce.Write("MasterSessionRecord", UserAccountRecord['SessionID'], UserSessionRecord);
	res.end('Added ' + req.get('amount') + ' Diamantium to ' + req.get('viewerid') + '.\n');
});
Orchis.post("/utility/send_diamantium_all", async (req,res) => {
	if (req.get('amount') == undefined) { res.end('No amount specified.\n'); return; }
	const UserList = await Fluoresce.List("MasterSessionRecord");
	for (let x in UserList) {
		let UserSessionRecord = await Fluoresce.DirectRead("MasterSessionRecord", UserList[x]);
		if (UserSessionRecord['Diamantium'] != undefined) {
			UserSessionRecord['Diamantium'] += parseInt(req.get('amount'));
		}
		await Fluoresce.DirectWrite("MasterSessionRecord", UserList[x], UserSessionRecord);
	}
	res.end('Added ' + req.get('amount') + ' Diamantium.\n');
});
Orchis.post("/utility/set_account_status", async (req,res) => {
	const AccountID = req.get('viewerid'); if (AccountID == undefined) { res.end('No Viewer ID presented.\n'); return; }
	const AccountStatus = req.get('status'); if (AccountStatus == undefined) { res.end('No status supplied'); return; }
	const UserAccountRecord = await Fluoresce.Read("MasterAccountRecord", AccountID);
	UserSessionRecord = await ReadSessionRecord(UserAccountRecord['SessionID']);
	UserSessionRecord['AccountState'] = parseInt(AccountStatus); UserSessionRecord['AccountMessage'] = { 'data_headers': { 'result_code': parseInt(AccountStatus) }, 'data': { 'result_code': parseInt(AccountStatus) } };
	await WriteSessionRecord(UserAccountRecord['SessionID'], UserSessionRecord);
	res.end("Account status for " + AccountID + " set to " + AccountStatus + "\n");
});
Orchis.post("/utility/ban_user", async (req,res) => {
	const AccountID = req.get('viewerid'); if (AccountID == undefined) { res.end('No Viewer ID presented.\n'); return; }
	const UserAccountRecord = await Fluoresce.Read("MasterAccountRecord", AccountID);
	UserSessionRecord = await ReadSessionRecord(UserAccountRecord['SessionID']);
	UserSessionRecord['AccountState'] = 102; UserSessionRecord['AccountMessage'] = { 'data_headers': { 'result_code': 102 }, 'data': { 'result_code': 102 } };
	await WriteSessionRecord(UserAccountRecord['SessionID'], UserSessionRecord);
	res.end("User " + AccountID + " banned.\n");
});
Orchis.post("/utility/unban_user", async (req,res) => {
	const AccountID = req.get('viewerid'); if (AccountID == undefined) { res.end('No Viewer ID presented.\n'); return; }
	const UserAccountRecord = await Fluoresce.Read("MasterAccountRecord", AccountID);
	UserSessionRecord = await ReadSessionRecord(UserAccountRecord['SessionID']);
	UserSessionRecord['AccountState'] = 0; UserSessionRecord['AccountMessage'] = { 'data_headers': { 'result_code': 0 }, 'data': { 'result_code': 0 } };
	await WriteSessionRecord(UserAccountRecord['SessionID'], UserSessionRecord);
	res.end("User " + AccountID + " unbanned.\n");
});
Orchis.post("/utility/create_guild", async (req,res) => {
	const GuildName = req.get('name'); if (GuildName == undefined) { res.end('No name presented.\n'); return; }
	const Epithet = req.get('epithet'); if (Epithet == undefined) { res.end('No epithet presented.\n'); return; }
	const Intro = req.get('intro'); if (Intro == undefined) { res.end('No intro presented.\n'); return; }
	const Phrase = req.get('phrase'); if (Phrase == undefined) { res.end('No phrase presented.\n'); return; }
	LastGuildID = await Fluoresce.Read("MasterIDRecord", "LastGuildID");
	let NewGuildID = LastGuildID + 1;
	Fluoresce.Write("MasterIDRecord", "LastGuildID", NewGuildID);
	if (req.get('id') != undefined) { NewGuildID = parseInt(req.get('id')); }
	const GuildData = {
		'guild_id': NewGuildID,
		'guild_name': GuildName,
		'guild_emblem_id': parseInt(Epithet),
		'guild_introduction': Intro,
		'joining_condition_type': 1,
		'activity_policy_type': 1,
		'is_penalty_guild_name': 0,
		'is_penalty_guild_introduction': 0,
		'guild_member_count': 0,
		'guild_board': Phrase,
		'is_penalty_guild_board': 0
	}
	MasterGuildDatabase[String(NewGuildID)] = {};
	MasterGuildDatabase[String(NewGuildID)]['BoardData'] = GuildData;
	MasterGuildDatabase[String(NewGuildID)]['Users'] = [];
	MasterGuildDatabase[String(NewGuildID)]['Chat'] = [];
	
	res.end("Created Guild with ID " + NewGuildID + "\n");
});
Orchis.post("/utility/upload_new_hash", errorhandler(async (req,res) => {
	if (req.get('passphrase') != ServerConfig['AssetPass']) { res.end('Authentication failed.\n'); return; }
	if (req.get('content-type') != 'application/json') { res.end("Define content-type.\n"); }
	fs.writeFileSync("./Library/Event/AssetList.json", JSON.stringify(req.body, null, 2));
	res.end("Accepted new AssetList\n");
}));

async function Judgement(req, res, next) {
	const URL = req.url;
	
	// ---------------------------- Daily
	for (let e in res.locals.DailyMissions) {
		EndeavourIndex = res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'].findIndex(x => x.daily_mission_id == res.locals.DailyMissions[e]);
		res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][EndeavourIndex]['progress'] = 1;
		res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][EndeavourIndex]['state'] = 1;
		res.locals.UpdatedSessionRecord = true;
	}
	if (URL.includes("dungeon_record") || URL.includes("dungeon_skip")) {
		const TotalQuests = res.locals.UserSessionRecord['Endeavour']['Tracker']['Daily']['Quests'];
		let Quest1Index = res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'].findIndex(x => x.daily_mission_id == 15070301);
		let Quest3Index = res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'].findIndex(x => x.daily_mission_id == 15070401);
		let Quest5Index = res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'].findIndex(x => x.daily_mission_id == 15070501);
		function DMTemplate(MissionID, Progress, State) {
			Mission = {
				'daily_mission_id': MissionID, 'progress': Progress, 'state': State,
				'day_no': res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest1Index]['day_no'],
				'is_lock_receive_reward': 0, 'is_pickup': 0,
				'start_date': res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest1Index]['start_date'],
				'end_date': res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest1Index]['end_date']
			}
			return Mission;
		}
		
		if (TotalQuests >= 5) {
			if (Quest5Index == -1) {
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'].push(DMTemplate(15070501, 5, 1));
			}
			else if (res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest5Index]['state'] != 2) {
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest5Index]['state'] = 1;
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest5Index]['progress'] = 5;
			}
			
			if (Quest3Index == -1) {
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'].push(DMTemplate(15070401, 3, 1));
			}
			else if (res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest3Index]['state'] != 2) {
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest3Index]['state'] = 1;
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest3Index]['progress'] = 3;
			}
			
			if (res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest1Index]['state'] != 2) {
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest1Index]['state'] = 1;
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest1Index]['progress'] = 1;
			}
		}
		else if (TotalQuests == 1) {
			res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest1Index]['progress'] = 1;
			res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest1Index]['state'] = 1;
			res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'].push(DMTemplate(15070401, 1, 0));
		}
		else if (TotalQuests <  3) {
			if (Quest3Index == -1) {
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'].push(DMTemplate(15070401, TotalQuests, 0));
				Quest3Index = res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'].findIndex(x => x.daily_mission_id == 15070401);
			}
			else {
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest3Index]['progress'] = TotalQuests;
			}
			
			if (res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest1Index]['state'] != 2) {
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest1Index]['state'] = 1;
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest1Index]['progress'] = 1;
			}
		}
		else if (TotalQuests <  5) {
			if (Quest5Index == -1) {
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'].push(DMTemplate(15070501, TotalQuests, 0));
				Quest5Index = res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'].findIndex(x => x.daily_mission_id == 15070501);
			}
			else {
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest5Index]['progress'] = TotalQuests;
			}
			
			if (Quest3Index == -1) {
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'].push(DMTemplate(15070401, 3, 1));
				Quest3Index = res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'].findIndex(x => x.daily_mission_id == 15070401);
			}
			else {
				if (res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest3Index]['state'] != 2) {
					res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest3Index]['state'] = 1;
					res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest3Index]['progress'] = 3;
				}
			}
			
			if (res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest1Index]['state'] != 2) {
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest1Index]['state'] = 1;
				res.locals.UserSessionRecord['Endeavour']['Active']['daily_mission_list'][Quest1Index]['progress'] = 1;
			}
		}
	}
	// ---------------------------- Daily
	// ----------------------- Compendium
	// ----------------------- Compendium
	// -------------------------- Limited
	// -------------------------- Limited
	// ---------------------- Event Daily
	// ---------------------- Event Daily
	next();
}
Orchis.use(Judgement);
async function FinalizeResponse(req, res, next) {
	/*if (res.locals.UpdateEndpoint == true) {
		if (res.locals.UpdateList.length > 0) {
			const UpdateKeys = Object.keys(res.locals.UpdateList);
			for (let u in UpdateKeys) {
				for (let e in UpdateKeys[u]) {
					let Index = -1;
					switch(UpdateKeys[u]) {
						case "chara_list":
							Index = res.locals.ResponseBody['data']['update_data_list']['chara_list'].findIndex(c => c.chara_id == res.locals.UpdateList['chara_list'][e]['chara_id']);
							if (Index == -1) { res.locals.ResponseBody['data']['update_data_list']['chara_list'].push(res.locals.UpdateList['chara_list'][e]); }
							else { res.locals.ResponseBody['data']['update_data_list']['chara_list'][Index] = res.locals.UpdateList['chara_list'][e]; }
							break;
						case "dragon_list":
							Index = res.locals.ResponseBody['data']['update_data_list']['dragon_list'].findIndex(c => c.dragon_key_id == res.locals.UpdateList['dragon_list'][e]['dragon_key_id']);
							if (Index == -1) { res.locals.ResponseBody['data']['update_data_list']['dragon_list'].push(res.locals.UpdateList['dragon_list'][e]); }
							else { res.locals.ResponseBody['data']['update_data_list']['dragon_list'][Index] = res.locals.UpdateList['dragon_list'][e]; }
							break;
						case "material_list":
							Index = res.locals.ResponseBody['data']['update_data_list']['material_list'].findIndex(c => c.material_id == res.locals.UpdateList['material_list'][e]['material_id']);
							if (Index == -1) { res.locals.ResponseBody['data']['update_data_list']['material_list'].push(res.locals.UpdateList['material_list'][e]); }
							else { res.locals.ResponseBody['data']['update_data_list']['material_list'][Index] = res.locals.UpdateList['material_list'][e]; }
							break;
						case "ability_crest_list":
							Index = res.locals.ResponseBody['data']['update_data_list']['ability_crest_list'].findIndex(c => c.ability_crest_id == res.locals.UpdateList['ability_crest_list'][e]['ability_crest_id']);
							if (Index == -1) { res.locals.ResponseBody['data']['update_data_list']['ability_crest_list'].push(res.locals.UpdateList['ability_crest_list'][e]); }
							else { res.locals.ResponseBody['data']['update_data_list']['ability_crest_list'][Index] = res.locals.UpdateList['ability_crest_list'][e]; }
							break;
						case "user_data":
							res.locals.ResponseBody['data']['update_data_list']['user_data'] = res.locals.UpdateList['user_data'];
							break;
						case "diamond_data":
							res.locals.ResponseBody['data']['update_data_list']['diamond_data'] = res.locals.UpdateList['diamond_data'];
							break;
					}
				}
			}
		}
		if (res.locals.DeleteList.length > 0) {
			const UpdateKeys = Object.keys(res.locals.DeleteList);
			for (let u in UpdateKeys) {
				for (let e in UpdateKeys[u]) {
					let Index = -1;
					switch(UpdateKeys[u]) {
						case "chara_list":
							Index = res.locals.ResponseBody['data']['delete_data_list']['chara_list'].findIndex(c => c.chara_id == res.locals.DeleteList['chara_list'][e]['chara_id']);
							if (Index == -1) { res.locals.ResponseBody['data']['delete_data_list']['chara_list'].push(res.locals.DeleteList['chara_list'][e]); }
							else { res.locals.ResponseBody['data']['delete_data_list']['chara_list'][Index] = res.locals.DeleteList['chara_list'][e]; }
							break;
						case "dragon_list":
							Index = res.locals.ResponseBody['data']['delete_data_list']['dragon_list'].findIndex(c => c.dragon_key_id == res.locals.DeleteList['dragon_list'][e]['dragon_key_id']);
							if (Index == -1) { res.locals.ResponseBody['data']['delete_data_list']['dragon_list'].push(res.locals.DeleteList['dragon_list'][e]); }
							else { res.locals.ResponseBody['data']['delete_data_list']['dragon_list'][Index] = res.locals.DeleteList['dragon_list'][e]; }
							break;
						case "material_list":
							Index = res.locals.ResponseBody['data']['delete_data_list']['material_list'].findIndex(c => c.material_id == res.locals.DeleteList['material_list'][e]['material_id']);
							if (Index == -1) { res.locals.ResponseBody['data']['delete_data_list']['material_list'].push(res.locals.DeleteList['material_list'][e]); }
							else { res.locals.ResponseBody['data']['delete_data_list']['material_list'][Index] = res.locals.DeleteList['material_list'][e]; }
							break;
						case "ability_crest_list":
							Index = res.locals.ResponseBody['data']['delete_data_list']['ability_crest_list'].findIndex(c => c.ability_crest_id == res.locals.DeleteList['ability_crest_list'][e]['ability_crest_id']);
							if (Index == -1) { res.locals.ResponseBody['data']['delete_data_list']['ability_crest_list'].push(res.locals.DeleteList['ability_crest_list'][e]); }
							else { res.locals.ResponseBody['data']['delete_data_list']['ability_crest_list'][Index] = res.locals.DeleteList['ability_crest_list'][e]; }
							break;
					}
				}
			}
		}
	}*/
	
	if (res.locals.UpdatedSessionRecord == true) {
		await WriteSessionRecord(req.get('sid'), res.locals.UserSessionRecord);
	}
	if (res.locals.UpdatedIndexRecord == true) {
		await WriteIndexRecord(String(res.locals.UserSessionRecord['ViewerID']), res.locals.UserIndexRecord);
	}
	const Serialized = msgpack.pack(res.locals.ResponseBody);
	
	TimeFile[req.url].push(Date.now() - res.locals.TimeTrack);
	
	res.set(ResHeaders(Serialized.length));
	res.end(Serialized);
}
Orchis.use(FinalizeResponse);

Orchis.post("*", async (req, res) => {
	console.log('POST on URL ' + req.url);
	res.locals.ResponseBody = { 'data_headers': { 'result_code': 151 }, 'data': { 'result_code': 151 } }
	const Serialized = msgpack.pack(res.locals.ResponseBody);
	res.set(ResHeaders(Serialized.length));
	res.end(Serialized);
});
Orchis.get("*", async (req,res) => {
	if (req.url.includes("/dl/assetbundles") || req.url.includes("/dl/manifests")) {
		res.redirect(301, "https://minty.sbs/" + req.url);
		return;
	}
	else { console.log('GET on URL ' + req.url); }
	res.status(404);
	res.end('<p>But nobody came.</p>');
});

module.exports = Orchis;