// DataManager.js
const QuestMap = require('../IDMaps/QuestMap.js');
const CharacterMap = require('../IDMaps/CharacterMap.js');
const WeaponMap = require('../IDMaps/WeaponMap.js');
const DragonMap = require('../IDMaps/DragonMap.js');
const ItemMap = require('../IDMaps/ItemMap.js');
const WyrmprintMap = require('../IDMaps/WyrmprintMap.js');
const LevelMap = require('../IDMaps/LevelMap.js');
const MissionMap = require('../IDMaps/MissionMap.js');
const EventMap = require('../IDMaps/EventMap.js');
const FortMap = require('../IDMaps/FortMap.js');

const fs = require('fs');
const LoginBonusMap = JSON.parse(fs.readFileSync('./Library/Event/LoginBonusMap.json'));

async function GetUserSave(IDToken) {
	const Answer = await fetch('https://baas.lukefz.xyz/gameplay/v1/savefile', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({ 'idToken': IDToken })
	});
	return Answer.json();
}
function CleanIndex(UserIndexRecord) {
	UserIndexRecord['special_shop_purchase'] = [];
	UserIndexRecord['user_treasure_trade_list'] = [];
	UserIndexRecord['treasure_trade_all_list'] = [];
	if (UserIndexRecord['user_data']['name'].length > 12) { UserIndexRecord['user_data']['name'].substring(0, 12); }
	if (UserIndexRecord['user_data']['crystal'] > 3000000000) {
		UserIndexRecord['user_data']['crystal'] = 3000000000;
	}
	if (UserIndexRecord['user_data']['coin'] > 3000000000) {
		UserIndexRecord['user_data']['coin'] = 3000000000;
	}
	if (UserIndexRecord['user_data']['mana_point'] > 3000000000) {
		UserIndexRecord['user_data']['mana_point'] = 3000000000;
	}
	if (UserIndexRecord['user_data']['dew_point'] > 3000000000) {
		UserIndexRecord['user_data']['dew_point'] = 3000000000;
	}
	UserIndexRecord['user_data']['max_dragon_quantity'] = 1000;
	UserIndexRecord['present_notice'] = {};
	UserIndexRecord['present_notice']['present_count'] = 0;
	UserIndexRecord['present_notice']['present_limit_count'] = 0;
	if (UserIndexRecord['material_list'] != undefined) { 
		const OmniIndex = UserIndexRecord['material_list'].findIndex(x => x.material_id === 125001001); 
		if (OmniIndex == -1) { UserIndexRecord['material_list'].push({'material_id': 125001001, 'quantity': 1}); }
		else if (UserIndexRecord['material_list'][OmniIndex]['quantity'] == 0) { UserIndexRecord['material_list'][OmniIndex]['quantity'] = 1; }
	}
	for (let i in UserIndexRecord['chara_list']) {
		UserIndexRecord['chara_list'][i]['is_temporary'] = 0;
		UserIndexRecord['chara_list'][i]['list_view_flag'] = 0;
	}
	if (UserIndexRecord['build_list'].length < 2) {
		UserIndexRecord['build_list'] = [
			{
				"build_id": 1,
				"fort_plant_detail_id": 10010111,
				"position_x": 16,
				"position_z": 17,
				"build_status": 0,
				"build_start_date": 0,
				"build_end_date": 0,
				"level": 11,
				"plant_id": 100101,
				"is_new": 0,
				"remain_time": 0,
				"last_income_date": 1642893300,
				"last_income_time": 19314814
			},
			{
				"build_id": 2,
				"fort_plant_detail_id": 10140109,
				"position_x": 21,
				"position_z": 3,
				"build_status": 0,
				"build_start_date": 0,
				"build_end_date": 0,
				"level": 9,
				"plant_id": 101401,
				"is_new": 0,
				"remain_time": 0,
				"last_income_date": -1
			}
		]
	}
	UserIndexRecord['quest_entry_condition_list'] = [
		{ "quest_entry_condition_id": 1 },
		{ "quest_entry_condition_id": 2 },
		{ "quest_entry_condition_id": 3 },
		{ "quest_entry_condition_id": 8 },
		{ "quest_entry_condition_id": 9 },
		{ "quest_entry_condition_id": 10 },
		{ "quest_entry_condition_id": 11 }
	]
	UserIndexRecord['mission_notice'] = {};
	let NextBuildID = 599998;
	for (let build in UserIndexRecord['build_list']) {
		NextBuildID += 1;
		UserIndexRecord['build_list'][build]['build_id'] = NextBuildID;
		if (String(UserIndexRecord['build_list'][build]['plant_id']).slice(0, 5) == "10070" || String(UserIndexRecord['build_list'][build]['plant_id']).slice(0, 5) == "10090") {
			UserIndexRecord['build_list'][build]['build_status'] = 0;
			UserIndexRecord['build_list'][build]['build_start_date'] = 0;
			UserIndexRecord['build_list'][build]['build_end_date'] = 0;
		}
	}
	
	const IgnoreIDs = [ 20427, 20428, 20443, 20444, 20462,
						20816, 20817, 20818, 20820, 20822,
						20826, 20829, 20931, 20839, 20841,
						20842, 20843, 20844, 20845, 20846,
						21404, 21405, 22219, 22220, 22223,
						22224, 22226, 22227 ]
	let u = UserIndexRecord['quest_list'].length - 1;
	while (u > 0) {
		const QuestID = String(UserIndexRecord['quest_list'][u]['quest_id']);
		const BaseID = parseInt(QuestID.slice(0, 3));
		const EvID = parseInt(QuestID.slice(0, 5));
		if (!IgnoreIDs.includes(EvID)) {
			if (BaseID == 204 || BaseID == 208 || BaseID == 213 || BaseID == 214 || BaseID == 218 ||
				BaseID == 220 || BaseID == 222 || BaseID == 229 || BaseID == 310) {
				
				UserIndexRecord['quest_list'].splice(u, 1);
			}
		}
		u--;
	}
	let y = UserIndexRecord['quest_story_list'].length - 1;
	while (y > 1) {
		const StoryID = String(UserIndexRecord['quest_story_list'][y]['quest_story_id']);
		const BaseID = parseInt(StoryID.slice(0, 3));
		const EvID = parseInt(StoryID.slice(0, 5));
		if (!IgnoreIDs.includes(EvID)) {
			if (BaseID == 204 || BaseID == 208 || BaseID == 213 || BaseID == 214 || BaseID == 218 ||
				BaseID == 220 || BaseID == 222 || BaseID == 229 || BaseID == 310) {
				UserIndexRecord['quest_story_list'].splice(y, 1);
			}
		}
		y--;
	}
	UserIndexRecord['quest_event_list'] = [];
	if (UserIndexRecord['gather_item_list'] == undefined) { UserIndexRecord['gather_item_list'] = []; }
	if (UserIndexRecord['astral_item_list'] == undefined) { UserIndexRecord['astral_item_list'] = []; }
	if (UserIndexRecord['quest_wall_list'] == undefined || UserIndexRecord['quest_wall_list'][0] == undefined) {
		UserIndexRecord['quest_wall_list'] = [
			{ "quest_group_id": 21601, "wall_id": 216010001, "wall_level": 0, "is_start_next_level": 1 },
			{ "quest_group_id": 21601, "wall_id": 216010002, "wall_level": 0, "is_start_next_level": 1 },
			{ "quest_group_id": 21601, "wall_id": 216010003, "wall_level": 0, "is_start_next_level": 1 },
			{ "quest_group_id": 21601, "wall_id": 216010004, "wall_level": 0, "is_start_next_level": 1 },
			{ "quest_group_id": 21601, "wall_id": 216010005, "wall_level": 0, "is_start_next_level": 1 }
		];
	}
	if (UserIndexRecord['material_list'] == undefined) { UserIndexRecord['material_list'] = []; }
	for (const d in UserIndexRecord['dragon_list']) {
		const BondIndex = UserIndexRecord['dragon_reliability_list'].findIndex(v => v.dragon_id == UserIndexRecord['dragon_list'][d]['dragon_id']);
		if (BondIndex == -1) {
			UserIndexRecord['dragon_reliability_list'].push({
				"dragon_id": UserIndexRecord['dragon_list'][d]['dragon_id'],
				"get_time": UserIndexRecord['dragon_list'][d]['get_time'],
				"reliability_level": 1,
				"reliability_total_exp": 0,
				"last_contact_time": 0
			});
		}
	}
	return UserIndexRecord;
}
function InitialTrackEndeavour(UserSessionRecord, UserIndexRecord) {
	// Track existing endeavor completion here and assign correct data as necessary.
	
}

function ValidateIndex(UserIndexRecord) {
	
	
	return UserIndexRecord;
}

function IsSkillOneOrTwo(CharacterID) {
	const SkillNumber = CharacterMap.GetCharacterInfo(CharacterID, "shared_skill_number");
	let Value = ""
	switch(SkillNumber) {
		case 1:
			Value = "skill_1_level";
			break;
		case 2:
			Value = "skill_2_level";
			break;
		default:
			Value = "skill_1_level";
	}
	return Value;
}

function GetPlayerQuestDataShort(Quest_ID, UserIndexRecord) {
	var QuestIndex = UserIndexRecord.quest_list.findIndex(x => x.quest_id == Quest_ID);
	var QuestData = {}
	if (QuestIndex == -1) {
		QuestData = {
			'quest_id': Quest_ID,
			'play_count': 0,
			'is_mission_clear_1': 0,
			'is_mission_clear_2': 0,
			'is_mission_clear_3': 0
		}
	}
	else {
		QuestData = {
			'quest_id': Quest_ID,
			'play_count': UserIndexRecord['quest_list'][QuestIndex]['play_count'],
			'is_mission_clear_1': UserIndexRecord['quest_list'][QuestIndex]['is_mission_clear_1'],
			'is_mission_clear_2': UserIndexRecord['quest_list'][QuestIndex]['is_mission_clear_2'],
			'is_mission_clear_3': UserIndexRecord['quest_list'][QuestIndex]['is_mission_clear_3']
		}
	}
	return QuestData;
}
function GetPlayerQuestData(Quest_ID, UserIndexRecord) {
	var QuestIndex = UserIndexRecord.quest_list.findIndex(x => x.quest_id == Quest_ID);
	var QuestData = [];
	if (QuestIndex == -1) {
		QuestData.push({
			"quest_id": 100010101,
			"state": 1,
			"is_mission_clear_1": 0,
			"is_mission_clear_2": 0,
			"is_mission_clear_3": 0,
			"play_count": 0,
			"daily_play_count": 0,
			"weekly_play_count": 0,
			"last_daily_reset_time": 0,
			"last_weekly_reset_time": 0,
			"is_appear": 1,
			"best_clear_time": -1.0
		});
	}
	else {
		QuestData.push(UserIndexRecord['quest_list'][QuestIndex]);
	}
	return QuestData;
}
function GetPlayerQuestPlayCount(Quest_ID, UserIndexRecord) {
	var QuestIndex = UserIndexRecord.quest_list.findIndex(x => x.quest_id == Quest_ID);
	var QuestData = {}
	if (QuestIndex == -1) {
		QuestData = 0;
	}
	else {
		QuestData = UserIndexRecord['quest_list'][QuestIndex]['play_count'];
	}
	return QuestData;
}

function GetMissionNotice(UserSessionRecord) {
	var Data = {
		'normal_mission_notice': UserSessionRecord['QuestNotice']['NormalMission'],
		'daily_mission_notice': UserSessionRecord['QuestNotice']['DailyMission'],
		'period_mission_notice': UserSessionRecord['QuestNotice']['EventMission'],
		'beginner_mission_notice': UserSessionRecord['QuestNotice']['BeginnerMission'],
		'special_mission_notice': UserSessionRecord['QuestNotice']['SpecialMission'],
		'main_story_mission_notice': UserSessionRecord['QuestNotice']['StoryMission'],
		'memory_event_mission_notice': UserSessionRecord['QuestNotice']['CompendiumMission'],
		'drill_mission_notice': UserSessionRecord['QuestNotice']['DrillMission'],
		'album_mission_notice': UserSessionRecord['QuestNotice']['AlbumMission']
	}
	return Data;
}
function GenerateSummonOdds(BannerList) {
	let Data = [];
	for (let x in BannerList) {
		let Template = {
			'summon_id': BannerList[x]['summon_id'],
			'odds': {
				'required_count_to_next': 999,
				'normal': {
					'rarity_list': [
						{'rarity': 5, 'total_rate': "5.00%"},
						{'rarity': 4, 'total_rate': "16.00%"},
						{'rarity': 3, 'total_rate': "79.00%"}
					],
					'rarity_group_list': [],
					'unit': {
						'chara_odds_list': [
							{'pickup': false, 'rarity': 5, 'unit_list': []},
							{'pickup': false, 'rarity': 4, 'unit_list': []},
							{'pickup': false, 'rarity': 3, 'unit_list': []}
						],
						'dragon_odds_list': [
							{'pickup': false, 'rarity': 5, 'unit_list': []},
							{'pickup': false, 'rarity': 4, 'unit_list': []},
							{'pickup': false, 'rarity': 3, 'unit_list': []}
						]
					}
				},
				'guarantee': {
					'rarity_list': [],
					'rarity_group_list': [],
					'unit': {
						'chara_odds_list': [],
						'dragon_odds_list': []
					}
				}
			},
			'prize_odds': {
				'normal': [],
				'guarantee': []
			}
		}
		for (let y in BannerList[x]['characters']) {
			const Current = BannerList[x]['characters'][y];
			const Rarity = CharacterMap.CharacterInfoMap[String(Current)]['rarity'];
			let IsBoosted = false; if (BannerList[x]['boost_rate'].includes(Current)) { IsBoosted = true; }
			let OddsTemplate = {}
			switch(Rarity) {
				case 5:
					if (IsBoosted) { OddsTemplate = {'id': Current, 'rate': "0.600%"}; }
					else { OddsTemplate = {'id': Current, 'rate': "0.021%"}; }
					Template['odds']['normal']['unit']['chara_odds_list'][0]['unit_list'].push(OddsTemplate);
					break;
				case 4:
					if (IsBoosted) { OddsTemplate = {'id': Current, 'rate': "2.00%"}; }
					else { OddsTemplate = {'id': Current, 'rate': "0.194%"}; }
					Template['odds']['normal']['unit']['chara_odds_list'][1]['unit_list'].push(OddsTemplate);
					break;
				case 3:
					if (IsBoosted) { OddsTemplate = {'id': Current, 'rate': "5.00%"}; }
					else { OddsTemplate = {'id': Current, 'rate': "2.494%"}; }
					Template['odds']['normal']['unit']['chara_odds_list'][2]['unit_list'].push(OddsTemplate);
					break;
			}
		}
		for (let z in BannerList[x]['dragons']) {
			const Current = BannerList[x]['dragons'][z];
			const Rarity = DragonMap.DragonInfoMap[String(Current)]['rarity'];
			let IsBoosted = false; if (BannerList[x]['boost_rate'].includes(Current)) { IsBoosted = true; }
			let OddsTemplate = {}
			switch(Rarity) {
				case 5:
					if (IsBoosted) { OddsTemplate = {'id': Current, 'rate': "0.600%"}; }
					else { OddsTemplate = {'id': Current, 'rate': "0.046%"}; }
					Template['odds']['normal']['unit']['dragon_odds_list'][0]['unit_list'].push(OddsTemplate);
					break;
				case 4:
					if (IsBoosted) { OddsTemplate = {'id': Current, 'rate': "5.00%"}; }
					else { OddsTemplate = {'id': Current, 'rate': "0.745%"}; }
					Template['odds']['normal']['unit']['dragon_odds_list'][1]['unit_list'].push(OddsTemplate);
					break;
				case 3:
					if (IsBoosted) { OddsTemplate = {'id': Current, 'rate': "5.00%"}; }
					else { OddsTemplate = {'id': Current, 'rate': "2.106%"}; }
					Template['odds']['normal']['unit']['dragon_odds_list'][2]['unit_list'].push(OddsTemplate);
					break;
			}
		}
		Data.push(Template);
	}
	return Data;
}
function KeyIDByTicket(ID) {
	let TicketKeyID = 0;
	switch(ID) {
		case 10101: TicketKeyID = 1; break;
		case 10102: TicketKeyID = 2; break;
		case 10202: TicketKeyID = 3; break;
		case 10301: TicketKeyID = 4; break;
		case 10302: TicketKeyID = 5; break;
		case 10401: TicketKeyID = 6; break;
		case 10402: TicketKeyID = 7; break;
		case 10403: TicketKeyID = 8; break;
		case 10501: TicketKeyID = 9; break;
		case 10502: TicketKeyID = 10; break;
	}
	return TicketKeyID;
}

function MergeDropTable(Table1, Table2) {
	for (const d in Table2) {
		const ItemIndex = Table1.findIndex(x => x.type == Table2[d]['type'] && x.id == Table2[d]['id']);
		if (ItemIndex != -1) {
			Table1[ItemIndex]['quantity'] += Table2[d]['quantity'];
		}
		else { Table1.push(Table2[d]); }
	}
	return Table1;
}
function DungeonRecord(UserSessionRecord, UserIndexRecord, DungeonKey, PlayData, EventList, IsMulti, RepeatFlag) {
	const QuestID = UserSessionRecord['DungeonRecord']['LastQuestID'];
	const QuestBase = String(QuestID).slice(0, 3);
	const EventID = String(QuestID).slice(0, 5);
	let GrowthTable = [];
	let FullGrowthTable = [];
	let FriendshipTable = [];
	let LimitRewardList = [];
	
	const DropTable = UserSessionRecord['DungeonRecord']['DropTable'];
	DropTable[0].push({"type": 23, "id": 0, "quantity": DropTable[3], "place": 0, "factor": 0});
	let FinalDropTable = JSON.parse(JSON.stringify(UserSessionRecord['DungeonRecord']['DropTable'][0]));
	let TotalCoin = DropTable[1] + DropTable[4];
	let EventPoints = DropTable[5] + DropTable[6];
	let BoostPoints = DropTable[6];
	let FirstReward = [];
	const FinalQuestData = {
		'quest_id': QuestID,
		'state': 3,
		'is_mission_clear_1': 1,
		'is_mission_clear_2': 1,
		'is_mission_clear_3': 1,
		'play_count': GetPlayerQuestPlayCount(QuestID, UserIndexRecord) + 1,
		'daily_play_count': 1,
		'weekly_play_count': 1,
		'last_daily_reset_time': Math.floor(Date.now() / 1000),	
		'last_weekly_reset_time': Math.floor(Date.now() / 1000),
		'is_appear': 1,
		'best_clear_time': Math.floor(Date.now() / 1000) - UserSessionRecord['DungeonRecord']['LastDungeonStartedAt']
	}
	const QuestIndex = UserIndexRecord['quest_list'].findIndex(x => x.quest_id == UserSessionRecord['DungeonRecord']['LastQuestID']);
	if (QuestIndex != -1) {
		if (UserIndexRecord['quest_list'][QuestIndex]['state'] == 2) {
			FirstReward = QuestMap.GetFirstReward(QuestID);
			for (const i in FirstReward) {
				const SearchIndex = FinalDropTable.findIndex(e => e.type == FirstReward[i]['type'] && e.id == FirstReward[i]['id']);
				if (SearchIndex != -1) { FinalDropTable[SearchIndex]['quantity'] += FirstReward[i]['quantity']; }
				else { FinalDropTable.push(FirstReward[i]); }
			}
		}
		UserIndexRecord['quest_list'][QuestIndex] = FinalQuestData;
	}
	
	let RepeatInfo = [];
	if (UserSessionRecord['DungeonRecord']['Repeat']['active'] == 1) {
		UserSessionRecord['DungeonRecord']['Repeat']['drops'] = MergeDropTable(UserSessionRecord['DungeonRecord']['Repeat']['drops'], DropTable[0]);
		UserSessionRecord['DungeonRecord']['Repeat']['event_points'] += EventPoints;
		UserSessionRecord['DungeonRecord']['Repeat']['boost_points'] += BoostPoints;
		UserSessionRecord['DungeonRecord']['Repeat']['total_coin'] += TotalCoin;
		if (RepeatFlag == 0 || (UserSessionRecord['DungeonRecord']['Repeat']['track'] >= UserSessionRecord['DungeonRecord']['Repeat']['count'])) {
			DropTable[0] = UserSessionRecord['DungeonRecord']['Repeat']['drops'];
			EventPoints = UserSessionRecord['DungeonRecord']['Repeat']['event_points'];
			BoostPoints = UserSessionRecord['DungeonRecord']['Repeat']['boost_points'];
			TotalCoin = UserSessionRecord['DungeonRecord']['Repeat']['total_coin'];
		}
		else {
			RepeatInfo = {
				'repeat_key': UserSessionRecord['DungeonRecord']['Repeat']['key'],
				'repeat_count': UserSessionRecord['DungeonRecord']['Repeat']['track'],
				'repeat_state': RepeatFlag
			}
		}
	}
	
	const ParsedDrops = ItemParser(FinalDropTable, UserSessionRecord, UserIndexRecord, "plain", UserSessionRecord['DungeonRecord']['LastQuestID']);
	let PlayerEXP = QuestMap.GetEXP(UserSessionRecord['DungeonRecord']['LastQuestID']);
	let DungeonEXP = PlayerEXP * 2;
	PlayerEXP += Math.floor(PlayerEXP * DropTable[7]);
	DungeonEXP += Math.floor(DungeonEXP * DropTable[8]);
	for (let i in UserSessionRecord['DungeonRecord']['LastDungeonPartyData']) {
		if (IsMulti == true && i > 0) { break; }
		if (UserSessionRecord['DungeonRecord']['LastDungeonPartyData'][i]['chara_data']['chara_id'] != undefined) {
			const CharacterData = UserSessionRecord['DungeonRecord']['LastDungeonPartyData'][i]['chara_data'];
			const MaxLevel = 80 + CharacterData['additional_max_level'];
			if (CharacterData['level'] != MaxLevel) {
				var GrowthRecord = {
					'chara_id': CharacterData['chara_id'],
					'take_exp': DungeonEXP
				}
				GrowthTable.push(GrowthRecord);
				const CharacterIndex = UserIndexRecord.chara_list.findIndex(x => x.chara_id == CharacterData['chara_id']);
				const NewData = LevelMap.Character(CharacterData['additional_max_level'], UserIndexRecord['chara_list'][CharacterIndex]['exp'] + DungeonEXP, UserIndexRecord['chara_list'][CharacterIndex]['level']);
				UserIndexRecord['chara_list'][CharacterIndex]['level'] = NewData[0];
				UserIndexRecord['chara_list'][CharacterIndex]['exp'] = NewData[1];
				if (NewData[2] > 0) {
					UserIndexRecord['chara_list'][CharacterIndex]['hp'] += (NewData[2] * 10);
					UserIndexRecord['chara_list'][CharacterIndex]['attack'] += (NewData[2] * 7);
				}
				FullGrowthTable.push(UserIndexRecord['chara_list'][CharacterIndex]);
			} else { GrowthTable.push({'chara_id': CharacterData['chara_id'], 'take_exp': 0}); }
			if (EventMap.EventFriendList[String(CharacterData['chara_id'])] != undefined) {
				const FriendEventID = EventMap.EventFriendList[String(CharacterData['chara_id'])]['event_id'];
				if (!EventMap.EventFriendList[String(CharacterData['chara_id'])]['is_compendium'] &&
					(UserSessionRecord['Event']['Raid'][String(FriendEventID)] != undefined) &&
					(UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0] != undefined) &&
					(UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['total_point'] < 500)) {
					const AddPoints = 6;
					let TotalPoints = UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['total_point'] + AddPoints;
					if (TotalPoints > 500) {
						TotalPoints = 500;
						UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['total_point'] = 500;
						UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['is_temporary'] = 0;
					}
					else { UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['total_point'] = TotalPoints; }
					const FriendTemplate = {
						'chara_id': CharacterData['chara_id'],
						'add_point': AddPoints,
						'total_point': TotalPoints,
						'is_temporary': UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['is_temporary']
					}
					FriendshipTable.push(FriendTemplate);
				}
			}
		}
	}
	UserSessionRecord = ParsedDrops[0]; UserIndexRecord = ParsedDrops[1];
	let UpdateData = ParsedDrops[2]; let EntityList = ParsedDrops[3];
	UpdateData['quest_list'] = [ FinalQuestData ];
	if (Math.round(Math.random() * 3) >= 2) {
		const GatherItemAmount = Math.floor(Math.random() * 3) + 1;
		const GatherIndex = UserIndexRecord['gather_item_list'].findIndex(x => x.gather_item_id == 10001);
		if (GatherIndex == -1) {
			LimitRewardList.push({'type': 33, 'id': 10001, 'quantity': GatherItemAmount});
			const GatherItemData = {
				"gather_item_id": 10001,
				"quantity": GatherItemAmount,
				"quest_last_weekly_reset_time": Math.floor(Date.now() / 1000),
				"quest_take_weekly_quantity": GatherItemAmount
			}
			UserIndexRecord['gather_item_list'].push(GatherItemData);
			UpdateData['gather_item_list'] = [ GatherItemData ];
		}
		else if (UserIndexRecord['gather_item_list'][GatherIndex]['quest_take_weekly_quantity'] < 20) {
			const NewGatherQuantity = UserIndexRecord['gather_item_list'][GatherIndex]['quest_take_weekly_quantity'] + GatherItemAmount;
			const AllowedGatherAmount = 20 - NewGatherQuantity;
			if (GatherItemAmount <= AllowedGatherAmount) {
				LimitRewardList.push({'type': 33, 'id': 10001, 'quantity': GatherItemAmount});
				UserIndexRecord['gather_item_list'][GatherIndex]['quantity'] += GatherItemAmount;
				UpdateData['gather_item_list'] = [ UserIndexRecord['gather_item_list'][GatherIndex] ];
			}
			else {
				LimitRewardList.push({'type': 33, 'id': 10001, 'quantity': AllowedGatherAmount});
				UserIndexRecord['gather_item_list'][GatherIndex]['quantity'] += AllowedGatherAmount;
				UpdateData['gather_item_list'] = [ UserIndexRecord['gather_item_list'][GatherIndex] ];
			}
		}
	}
	UserIndexRecord['user_data']['coin'] += DropTable[1];
	UserIndexRecord['user_data']['mana_point'] += DropTable[2];
	UserIndexRecord['user_data']['crystal'] += DropTable[3];
	UserIndexRecord['user_data']['coin'] += DropTable[4];
	if (UserIndexRecord['user_data']['coin'] > 3000000000) { UserIndexRecord['user_data']['coin'] = 3000000000 }
	if (UserIndexRecord['user_data']['mana_point'] > 3000000000) { UserIndexRecord['user_data']['mana_point'] = 3000000000; }
	if (UserIndexRecord['user_data']['crystal'] > 3000000000) { UserIndexRecord['user_data']['crystal'] = 3000000000 }
	UpdateData['diamond_data'] = { 'free_diamond': 0, 'paid_diamond': UserSessionRecord['Diamantium'] }
	//const MissionCleared = QuestMap.CheckMissionClear(PlayData);
	let JSONDict = {
		'time_attack_ranking_data': [],
		'ingame_result_data': {
			'dungeon_key': DungeonKey, // Also stored in SessionRecord. Check if match and only give rewards then?
			'play_type': UserSessionRecord['DungeonRecord']['LastDungeonPlayType'], // QuestMap.GetQuestTypeID(QuestID)
			'quest_id': UserSessionRecord['DungeonRecord']['LastQuestID'],
			'reward_record': {
				'drop_all':	DropTable[0],
				'first_clear_set': FirstReward,
				'quest_bonus_list': [],
				'reborn_bonus': [],
				'weekly_limit_reward_list': LimitRewardList,
				'challenge_quest_bonus_list': [],
				'campaign_extra_reward_list': [],
				'shop_quest_bonus_factor': 0,
				'mission_complete': [],
				'missions_clear_set': [],
				'enemy_piece': [],
				'take_coin': TotalCoin,
				'take_accumulate_point': EventPoints,
				'take_boost_accumulate_point': BoostPoints,
				'player_level_up_fstone':  0,
				'first_meeting': [],
				'take_astral_item_quantity': 0,
				'carry_bonus': []
			},
			'grow_record': {
				'take_player_exp': PlayerEXP,
				'take_chara_exp': DungeonEXP,
				'take_mana': DropTable[2],
				'bonus_factor': 1.0,
				'mana_bonus_factor': 1.0,
				'chara_grow_record': GrowthTable,
				'chara_friendship_list': FriendshipTable
			},
			'start_time': UserSessionRecord['DungeonRecord']['LastDungeonStartedAt'],
			'end_time': 0,
			'current_play_count': GetPlayerQuestPlayCount(UserSessionRecord['DungeonRecord']['LastQuestID'], UserIndexRecord),
			'is_clear': 1,
			'state': 1,
			'is_host': UserSessionRecord['DungeonRecord']['LastDungeonIsHost'],
			'is_fever_time': 0,
			'wave_count': 0,
			'reborn_count': 0,
			'helper_list': UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'][1],
			'helper_detail_list': UserSessionRecord['DungeonRecord']['LastDungeonSupportPlayer'],
			'quest_party_setting_list': UserSessionRecord['DungeonRecord']['LastDungeonPartySettings'],
			'bonus_factor_list': [],
			'scoring_enemy_point_list': [],
			'score_mission_success_list': [],
			'event_passive_up_list': [],
			'clear_time': PlayData['time'],
			'is_best_clear_time': 0,
			'converted_entity_list': EntityList['converted_entity_list'],
			'dungeon_skip_type': 0,
			'total_play_damage': 0
		},
		'event_damage_ranking': [],
		'repeat_data': RepeatInfo,
		'update_data_list': UpdateData,
		'entity_result': EntityList
	}
	if (IsMulti == true) { delete JSONDict['repeat_data']; }
	const PlayerLevel = LevelMap.Player(UserIndexRecord['user_data']['exp'] + PlayerEXP);
	const CurrentLevel = UserIndexRecord['user_data']['level'];
	UserIndexRecord['user_data']['level'] = PlayerLevel[0];
	UserIndexRecord['user_data']['exp'] = PlayerLevel[1];
	if (PlayerLevel[0] > CurrentLevel) {
		if (UserIndexRecord['user_data']['stamina_single'] < PlayerLevel[2]) { UserIndexRecord['user_data']['stamina_single'] = PlayerLevel[2]; }
		const LevelUpCount = PlayerLevel[0] - CurrentLevel;
		const WyrmiteCount = 50 * LevelUpCount;
		UserIndexRecord['user_data']['crystal'] += WyrmiteCount;
		JSONDict['entity_result']['new_entity_get_list'].push({'entity_type': 23, 'entity_id': 0, 'entity_quantity': WyrmiteCount});
		UserIndexRecord = FacilityCheck(PlayerLevel[0], CurrentLevel, UserIndexRecord);
	}
	JSONDict['update_data_list']['user_data'] = UserIndexRecord['user_data'];
	JSONDict['update_data_list']['chara_list'] = FullGrowthTable;
	if (QuestBase == 204) {
		const QuestSuffix = String(QuestID).slice(-3);
		if (QuestSuffix == 302 || QuestSuffix == 501 || QuestSuffix == 602 || QuestSuffix == 604 || QuestSuffix == 606) {
			UserSessionRecord['Event']['Raid'][EventID]['UserData']['advent_item_quantity_1'] -= 5;
		}
		else if (QuestSuffix == 301) {
			UserSessionRecord['Event']['Raid'][EventID]['UserData']['advent_item_quantity_1'] -= 3;
		}
		else if (QuestSuffix == 401) {
			UserSessionRecord['Event']['Raid'][EventID]['UserData']['advent_item_quantity_2'] -= 1;
		}
		
		if (QuestSuffix == 501 && QuestIndex == -1) {
			UserSessionRecord['Event']['Raid'][EventID]['Passive'] = {
				'event_id': parseInt(EventID),
				'event_passive_grow_list': [
					{'passive_id': parseInt(EventID + "01"), 'progress': 100},
					{'passive_id': parseInt(EventID + "02"), 'progress': 50},
					{'passive_id': parseInt(EventID + "03"), 'progress': 25},
					{'passive_id': parseInt(EventID + "04"), 'progress': 1},
					{'passive_id': parseInt(EventID + "05"), 'progress': 1},
					{'passive_id': parseInt(EventID + "06"), 'progress': 1},
					{'passive_id': parseInt(EventID + "07"), 'progress': 1},
					{'passive_id': parseInt(EventID + "08"), 'progress': 1},
					{'passive_id': parseInt(EventID + "09"), 'progress': 50},
					{'passive_id': parseInt(EventID + "10"), 'progress': 1},
					{'passive_id': parseInt(EventID + "11"), 'progress': 1}
				]
			}
			JSONDict['ingame_result_data']['event_passive_up_list'] = [ UserSessionRecord['Event']['Raid'][EventID]['Passive'] ];
			JSONDict['update_data_list']['event_passive_list'] = [ UserSessionRecord['Event']['Raid'][EventID]['Passive'] ];
			JSONDict['update_data_list']['raid_event_user_list'] = UserSessionRecord['Event']['Raid'][EventID]['UserData'];
		}
	}
	else if (QuestBase == 229) {
		const QuestTakePoint = QuestMap.GetEarnPoint(QuestID, PlayData);
		JSONDict['ingame_result_data']['reward_record']['take_accumulate_point'] = QuestTakePoint[0];
		JSONDict['ingame_result_data']['scoring_enemy_point_list'] = QuestTakePoint[1];
		
		if (QuestTakePoint[0] != 0) {
			UserSessionRecord['Event']['Earn'][EventID]['UserData']['event_point'] = QuestTakePoint[0]; }
	}
	else if (QuestBase == 208) {
		UserSessionRecord['Event']['Build'][EventID]['UserData']['user_build_event_item_list'][0]['event_item_value'] += (DropTable[5] + DropTable[6]);
		JSONDict['update_data_list']['build_event_user_list'] = [ UserSessionRecord['Event']['Build'][EventID]['UserData'] ];
	}
	else if (QuestBase == 214) {
		UserSessionRecord['Event']['CLB01'][EventID]['UserData']['user_clb_01_event_item_list'][2]['event_item_value'] += (DropTable[5] + DropTable[6]);
		JSONDict['update_data_list']['clb_01_event_user_list'] = [ UserSessionRecord['Event']['CLB01'][EventID]['UserData'] ];
	}
	else if (QuestBase == 222) {
		UserSessionRecord['Event']['Combat'][EventID]['UserData']['event_point'] += (DropTable[5] + DropTable[6]);
		JSONDict['update_data_list']['combat_event_user_list'] = [ UserSessionRecord['Event']['Combat'][EventID]['UserData'] ];
	}
	
	let DPSRecord = {
		'QuestID': UserSessionRecord['DungeonRecord']['LastQuestID'],
		'ClearTime': PlayData['time'],
		'CharacterStats': []
	}
	for (const p in PlayData['damage_record']) {
		if (p >= UserSessionRecord['DungeonRecord']['LastDungeonPartySettings'].length) { break; }
		const Character = UserSessionRecord['DungeonRecord']['LastDungeonPartySettings'].findIndex(y => y.unit_no == parseInt(p) + 1);
		const CData = UserSessionRecord['DungeonRecord']['LastDungeonPartySettings'][Character];
		const PartyCharacter = UserSessionRecord['DungeonRecord']['LastDungeonPartyData'].findIndex(y => y.position == parseInt(p) + 1);
		const PartyCData = UserSessionRecord['DungeonRecord']['LastDungeonPartyData'][PartyCharacter];
		if (CData == undefined || PartyCData == undefined) { break; }
		const Dragon = PartyCData['dragon_data'];
		let DmgTemplate = {
			'CharacterID': CData['chara_id'],
			'Loadout': {
				'Weapon': PartyCData['weapon_body_data'],
				'Dragon': PartyCData['dragon_data'],
				'Prints': {
					'5*': PartyCData['crest_slot_type_1_crest_list'],
					'4*': PartyCData['crest_slot_type_2_crest_list'],
					'9*': PartyCData['crest_slot_type_3_crest_list']
				},
				'Talisman': PartyCData['talisman_data'],
				'Skills': {
					"1": PartyCData['edit_skill_1_chara_data'] == null ? {} : PartyCData['edit_skill_1_chara_data'],
					"2": PartyCData['edit_skill_2_chara_data']
				}
			},
			'Total': PlayData['damage_record'][p]['total'],
			'Skill': PlayData['damage_record'][p]['skill'],
			'DoT': PlayData['damage_record'][p]['dot'],
			'Critical': PlayData['damage_record'][p]['critical'],
			'Enchant': PlayData['damage_record'][p]['enchant'],
			'DragonTotal': Dragon == {} ? 0 : PlayData['dragon_damage_record'][p]['total'],
			'DragonSkill': Dragon == {} ? 0 : PlayData['dragon_damage_record'][p]['skill'],
			'DragonDoT': Dragon == {} ? 0 : PlayData['dragon_damage_record'][p]['dot'],
			'DragonCritical': Dragon == {} ? 0 : PlayData['dragon_damage_record'][p]['critical'],
			'DragonEnchant': Dragon == {} ? 0 : PlayData['dragon_damage_record'][p]['enchant'],
		}
		DPSRecord['CharacterStats'].push(DmgTemplate);
	}
	
	UserSessionRecord = MissionMap.CheckMedalCompletion(UserSessionRecord['DungeonRecord']['LastQuestID'], GrowthTable, UserSessionRecord);
	return [JSONDict, UserIndexRecord, UserSessionRecord, DPSRecord];
}
function DungeonSkipRecord(UserSessionRecord, UserIndexRecord, DungeonKey, PlayCount, EventList) {
	let GrowthTable = [];
	let FullGrowthTable = [];
	let FriendshipTable = [];
	let LimitRewardList = [];
	const DropTable = QuestMap.GetQuestDropsSkip(String(UserSessionRecord['DungeonRecord']['LastQuestID']), PlayCount, EventList, UserSessionRecord['DungeonRecord']['LastDungeonPartyData']);
	let PlayerEXP = QuestMap.GetEXP(UserSessionRecord['DungeonRecord']['LastQuestID']) * PlayCount;
	let DungeonEXP = parseInt(PlayerEXP * 1.5) * PlayCount;
	PlayerEXP += Math.floor(PlayerEXP * DropTable[7]);
	DungeonEXP += Math.floor(DungeonEXP * DropTable[8]);
	for (let i in UserSessionRecord['DungeonRecord']['LastDungeonPartyData']) {
		if (UserSessionRecord['DungeonRecord']['LastDungeonPartyData'][i]['chara_data']['chara_id'] != undefined) {
			const CharacterData = UserSessionRecord['DungeonRecord']['LastDungeonPartyData'][i]['chara_data'];
			const MaxLevel = 80 + CharacterData['additional_max_level'];
			if (CharacterData['level'] != MaxLevel) {
				var GrowthRecord = {
					'chara_id': CharacterData['chara_id'],
					'take_exp': DungeonEXP
				}
				GrowthTable.push(GrowthRecord);
				const CharacterIndex = UserIndexRecord.chara_list.findIndex(x => x.chara_id == CharacterData['chara_id']);
				const NewData = LevelMap.Character(CharacterData['additional_max_level'], UserIndexRecord['chara_list'][CharacterIndex]['exp'] + DungeonEXP, UserIndexRecord['chara_list'][CharacterIndex]['level']);
				UserIndexRecord['chara_list'][CharacterIndex]['level'] = NewData[0];
				UserIndexRecord['chara_list'][CharacterIndex]['exp'] = NewData[1];
				if (NewData[2] > 0) {
					UserIndexRecord['chara_list'][CharacterIndex]['hp'] += (NewData[2] * 10);
					UserIndexRecord['chara_list'][CharacterIndex]['attack'] += (NewData[2] * 7);
				}
				FullGrowthTable.push(UserIndexRecord['chara_list'][CharacterIndex]);
			} else { GrowthTable.push({'chara_id': CharacterData['chara_id'], 'take_exp': 0}); }
			if (EventMap.EventFriendList[String(CharacterData['chara_id'])] != undefined) {
				const FriendEventID =  EventMap.EventFriendList[String(CharacterData['chara_id'])]['event_id'];
				if (!EventMap.EventFriendList[String(CharacterData['chara_id'])]['is_compendium'] &&
					(UserSessionRecord['Event']['Raid'][String(FriendEventID)] != undefined) &&
					(UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0] != undefined) &&
					(UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['total_point'] < 500)) {
					const AddPoints = 6 * PlayCount;
					let TotalPoints = UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['total_point'] + AddPoints;
					if (TotalPoints > 500) {
						TotalPoints = 500
						UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['total_point'] = 500;
						UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['is_temporary'] = 0;
					}
					else { UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['total_point'] = TotalPoints; }
					const FriendTemplate = {
						'chara_id': CharacterData['chara_id'],
						'add_point': AddPoints,
						'total_point': TotalPoints,
						'is_temporary': UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['is_temporary']
					}
					FriendshipTable.push(FriendTemplate);
				}
			}
		}
	}
	const ParsedDrops = ItemParser(DropTable[0], UserSessionRecord, UserIndexRecord, "plain", UserSessionRecord['DungeonRecord']['LastQuestID']);
	UserSessionRecord = ParsedDrops[0]; UserIndexRecord = ParsedDrops[1];
	let UpdateData = ParsedDrops[2]; let EntityList = ParsedDrops[3];
	if (Math.round(Math.random() * 3) >= 2) {
		const GatherItemAmount = Math.floor(Math.random() * 3) + 1;
		const GatherIndex = UserIndexRecord['gather_item_list'].findIndex(x => x.gather_item_id == 10001);
		if (GatherIndex == -1) {
			LimitRewardList.push({'type': 33, 'id': 10001, 'quantity': GatherItemAmount});
			const GatherItemData = {
				"gather_item_id": 10001,
				"quantity": GatherItemAmount,
				"quest_last_weekly_reset_time": Math.floor(Date.now() / 1000),
				"quest_take_weekly_quantity": GatherItemAmount
			}
			UserIndexRecord['gather_item_list'].push(GatherItemData);
			UpdateData['gather_item_list'] = [ GatherItemData ];
		}
		else if (UserIndexRecord['gather_item_list'][GatherIndex]['quest_take_weekly_quantity'] < 20) {
			const NewGatherQuantity = UserIndexRecord['gather_item_list'][GatherIndex]['quest_take_weekly_quantity'] + GatherItemAmount;
			const AllowedGatherAmount = 20 - NewGatherQuantity;
			if (GatherItemAmount <= AllowedGatherAmount) {
				LimitRewardList.push({'type': 33, 'id': 10001, 'quantity': GatherItemAmount});
				UserIndexRecord['gather_item_list'][GatherIndex]['quantity'] += GatherItemAmount;
				UpdateData['gather_item_list'] = [ UserIndexRecord['gather_item_list'][GatherIndex] ];
			}
			else {
				LimitRewardList.push({'type': 33, 'id': 10001, 'quantity': AllowedGatherAmount});
				UserIndexRecord['gather_item_list'][GatherIndex]['quantity'] += AllowedGatherAmount;
				UpdateData['gather_item_list'] = [ UserIndexRecord['gather_item_list'][GatherIndex] ];
			}
		}
	}
	UserIndexRecord['user_data']['coin'] += DropTable[1];
	UserIndexRecord['user_data']['mana_point'] += DropTable[2];
	UserIndexRecord['user_data']['crystal'] += DropTable[3];
	UserIndexRecord['user_data']['coin'] += DropTable[4];
	if (UserIndexRecord['user_data']['coin'] > 3000000000) { UserIndexRecord['user_data']['coin'] = 3000000000 }
	if (UserIndexRecord['user_data']['mana_point'] > 3000000000) { UserIndexRecord['user_data']['mana_point'] = 3000000000; }
	if (UserIndexRecord['user_data']['crystal'] > 3000000000) { UserIndexRecord['user_data']['crystal'] = 3000000000 }
	UpdateData['diamond_data'] = { 'free_diamond': 0, 'paid_diamond': UserSessionRecord['Diamantium'] }
	let JSONDict = {
		'time_attack_ranking_data': [],
		'ingame_result_data': {
			'dungeon_key': DungeonKey, // Also stored in SessionRecord. Check if match and only give rewards then?
			'play_type': 1, // QuestMap.GetQuestTypeID(QuestID)
			'quest_id': UserSessionRecord['DungeonRecord']['LastQuestID'],
			'reward_record': {
				'drop_all':	DropTable[0],
				'first_clear_set': [],
				'quest_bonus_list': [],
				'reborn_bonus': [],
				'weekly_limit_reward_list': LimitRewardList,
				'challenge_quest_bonus_list': [],
				'campaign_extra_reward_list': [],
				'shop_quest_bonus_factor': 0,
				'mission_complete': [],
				'missions_clear_set': [],
				'enemy_piece': [],
				'take_coin': DropTable[1] + DropTable[4],
				'take_accumulate_point': DropTable[5] + DropTable[6],
				'take_boost_accumulate_point': DropTable[6],
				'player_level_up_fstone':  0,
				'first_meeting': [],
				'take_astral_item_quantity': 0,
				'carry_bonus': []
			},
			'grow_record': {
				'take_player_exp': PlayerEXP,
				'take_chara_exp': DungeonEXP,
				'take_mana': DropTable[2],
				'bonus_factor': 1.0,
				'mana_bonus_factor': 1.0,
				'chara_grow_record': GrowthTable,
				'chara_friendship_list': FriendshipTable
			},
			'start_time': UserSessionRecord['DungeonRecord']['LastDungeonStartedAt'],
			'end_time': 0,
			'current_play_count': GetPlayerQuestPlayCount(UserSessionRecord['DungeonRecord']['LastQuestID'], UserIndexRecord),
			'is_clear': 1,
			'state': 1,
			'is_host': 1,
			'is_fever_time': 0,
			'wave_count': 0,
			'reborn_count': 0,
			'helper_list': UserSessionRecord['DungeonRecord']['LastDungeonSupportCharacter'],
			'helper_detail_list': UserSessionRecord['DungeonRecord']['LastDungeonSupportPlayer'],
			'quest_party_setting_list': UserSessionRecord['DungeonRecord']['LastDungeonPartySettings'],
			'bonus_factor_list': [],
			'scoring_enemy_point_list': [],
			'score_mission_success_list': [],
			'event_passive_up_list': [],
			'clear_time': Math.floor(Date.now() / 1000) - UserSessionRecord['DungeonRecord']['LastDungeonStartedAt'],
			'is_best_clear_time': 0,
			'converted_entity_list': EntityList['converted_entity_list'],
			'dungeon_skip_type': 0,
			'total_play_damage': 0
		},
		'event_damage_ranking': [],
		'repeat_data': [],
		'update_data_list': UpdateData,
		'entity_result': EntityList
	}
	const PlayerLevel = LevelMap.Player(UserIndexRecord['user_data']['exp'] + PlayerEXP);
	const CurrentLevel = UserIndexRecord['user_data']['level'];
	UserIndexRecord['user_data']['level'] = PlayerLevel[0];
	UserIndexRecord['user_data']['exp'] = PlayerLevel[1];
	if (PlayerLevel[0] > CurrentLevel) {
		if (UserIndexRecord['user_data']['stamina_single'] < PlayerLevel[2]) { UserIndexRecord['user_data']['stamina_single'] = PlayerLevel[2]; }
		const LevelUpCount = PlayerLevel[0] - CurrentLevel;
		const WyrmiteCount = 50 * LevelUpCount;
		UserIndexRecord['user_data']['crystal'] += WyrmiteCount;
		JSONDict['entity_result']['new_entity_get_list'].push({'entity_type': 23, 'entity_id': 0, 'entity_quantity': WyrmiteCount});
		UserIndexRecord = FacilityCheck(PlayerLevel[0], CurrentLevel, UserIndexRecord);
	}
	JSONDict['update_data_list']['user_data'] = UserIndexRecord['user_data'];
	JSONDict['update_data_list']['chara_list'] = FullGrowthTable;
	const FinalQuestData = [{
		'quest_id': UserSessionRecord['DungeonRecord']['LastQuestID'],
		'state': 3,
		'is_mission_clear_1': 1,
		'is_mission_clear_2': 1,
		'is_mission_clear_3': 1,
		'play_count': GetPlayerQuestPlayCount(UserSessionRecord['DungeonRecord']['LastQuestID'], UserIndexRecord),
		'daily_play_count': 1,
		'weekly_play_count': 1,
		'last_daily_reset_time': Math.floor(Date.now() / 1000),	
		'last_weekly_reset_time': Math.floor(Date.now() / 1000),
		'is_appear': 1,
		'best_clear_time': Math.floor(Date.now() / 1000) - UserSessionRecord['DungeonRecord']['LastDungeonStartedAt']
	}]
	JSONDict['update_data_list']['quest_list'] = FinalQuestData;
	const QuestIndex = UserIndexRecord.quest_list.findIndex(x => x.quest_id == UserSessionRecord['DungeonRecord']['LastQuestID']);
	if (QuestIndex != -1) { UserIndexRecord['quest_list'][QuestIndex] = FinalQuestData[0]; }
	else { UserIndexRecord['quest_list'].push(FinalQuestData[0]); }
	
	const QuestID = UserSessionRecord['DungeonRecord']['LastQuestID'];
	const QuestBase = String(QuestID).slice(0, 3);
	const EventID = String(QuestID).slice(0, 5);
	if (QuestBase == 208) {
		UserSessionRecord['Event']['Build'][EventID]['UserData']['user_build_event_item_list'][0]['event_item_value'] += (DropTable[5] + DropTable[6]);
		JSONDict['update_data_list']['build_event_user_list'] = [ UserSessionRecord['Event']['Build'][EventID]['UserData'] ];
	}
	else if (QuestBase == 214) {
		UserSessionRecord['Event']['CLB01'][EventID]['UserData']['user_clb_01_event_item_list'][2]['event_item_value'] += (DropTable[5] + DropTable[6]);
		JSONDict['update_data_list']['clb_01_event_user_list'] = [ UserSessionRecord['Event']['CLB01'][EventID]['UserData'] ];
	}
	else if (QuestBase == 222) {
		UserSessionRecord['Event']['Combat'][EventID]['UserData']['event_point'] += (DropTable[5] + DropTable[6]);
		JSONDict['update_data_list']['combat_event_user_list'] = [ UserSessionRecord['Event']['Combat'][EventID]['UserData'] ];
	}
	return [JSONDict, UserIndexRecord, UserSessionRecord];
}
function DungeonMultiClear(UserSessionRecord, UserIndexRecord, QuestIDList, EventList, PartyNo) {
	const PartyData = PopulateUnitData([PartyNo], UserSessionRecord['ViewerID'], UserIndexRecord, UserSessionRecord, 0);
	// [0]['party_unit_list'] = LastDungeonPartyData
	// [1] = LastDungeonPartySettings
	
	let GrowthTable = [];
	let FullGrowthTable = [];
	let FriendshipTable = [];
	let LimitRewardList = [];
	let DropTable = [
		[],
		0,
		0,
		0,
		0
	];
	let NewQuestData = [];
	let PlayerEXP = 0; 
	for (let q in QuestIDList) {
		PlayerEXP += QuestMap.GetEXP(QuestIDList[q]);
		const NewDropTable = QuestMap.GetQuestDrops(QuestIDList[q], EventList);
		NewDropTable[0].push({"type": 23, "id": 0, "quantity": NewDropTable[3], "place": 0, "factor": 0});
		for (let d in NewDropTable[0]) {
			const ExistIndex = DropTable[0].findIndex(i => i.type == NewDropTable[0][d]['type'] && i.id == NewDropTable[0][d]['id']);
			if (ExistIndex == -1) { DropTable[0].push(NewDropTable[0][d]); }
			else { DropTable[0][ExistIndex]['quantity'] += NewDropTable[0][d]['quantity']; }
		}
		DropTable[1] += NewDropTable[1];
		DropTable[2] += NewDropTable[2];
		DropTable[3] += NewDropTable[3];
		
		const FinalQuestData = {
			'quest_id': UserSessionRecord['DungeonRecord']['LastQuestID'],
			'state': 3,
			'is_mission_clear_1': 1,
			'is_mission_clear_2': 1,
			'is_mission_clear_3': 1,
			'play_count': GetPlayerQuestPlayCount(UserSessionRecord['DungeonRecord']['LastQuestID'], UserIndexRecord) + 1,
			'daily_play_count': 1,
			'weekly_play_count': 1,
			'last_daily_reset_time': Math.floor(Date.now() / 1000),	
			'last_weekly_reset_time': Math.floor(Date.now() / 1000),
			'is_appear': 1,
			'best_clear_time': 9999
		}
		NewQuestData.push(FinalQuestData);
	}
	const DungeonEXP = (PlayerEXP * 2);
	for (let i in PartyData[0]['party_unit_list']) {
		if (PartyData[0]['party_unit_list'][i]['chara_data']['chara_id'] != undefined) {
			const CharacterData = PartyData[0]['party_unit_list'][i]['chara_data'];
			const MaxLevel = 80 + CharacterData['additional_max_level'];
			if (CharacterData['level'] != MaxLevel) {
				var GrowthRecord = {
					'chara_id': CharacterData['chara_id'],
					'take_exp': DungeonEXP
				}
				GrowthTable.push(GrowthRecord);
				const CharacterIndex = UserIndexRecord.chara_list.findIndex(x => x.chara_id == CharacterData['chara_id']);
				const NewData = LevelMap.Character(CharacterData['additional_max_level'], UserIndexRecord['chara_list'][CharacterIndex]['exp'] + DungeonEXP, UserIndexRecord['chara_list'][CharacterIndex]['level']);
				UserIndexRecord['chara_list'][CharacterIndex]['level'] = NewData[0];
				UserIndexRecord['chara_list'][CharacterIndex]['exp'] = NewData[1];
				if (NewData[2] > 0) {
					UserIndexRecord['chara_list'][CharacterIndex]['hp'] += (NewData[2] * 10);
					UserIndexRecord['chara_list'][CharacterIndex]['attack'] += (NewData[2] * 7);
				}
				FullGrowthTable.push(UserIndexRecord['chara_list'][CharacterIndex]);
			} else { GrowthTable.push({'chara_id': CharacterData['chara_id'], 'take_exp': 0}); }
			if (EventMap.EventFriendList[String(CharacterData['chara_id'])] != undefined) {
				const FriendEventID = EventMap.EventFriendList[String(CharacterData['chara_id'])]['event_id'];
				if (!EventMap.EventFriendList[String(CharacterData['chara_id'])]['is_compendium'] &&
					(UserSessionRecord['Event']['Raid'][String(FriendEventID)] != undefined) &&
					(UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0] != undefined) &&
					(UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['total_point'] < 500)) {
					const AddPoints = 6 * QuestIDList.length;
					let TotalPoints = UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['total_point'] + AddPoints;
					if (TotalPoints > 500) {
						TotalPoints = 500;
						UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['total_point'] = 500;
						UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['is_temporary'] = 0;
					}
					else { UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['total_point'] = TotalPoints; }
					const FriendTemplate = {
						'chara_id': CharacterData['chara_id'],
						'add_point': AddPoints,
						'total_point': TotalPoints,
						'is_temporary': UserSessionRecord['Event']['Raid'][String(FriendEventID)]['Friendship'][0]['is_temporary']
					}
					FriendshipTable.push(FriendTemplate);
				}
			}
		}
	}
	
	const ParsedDrops = ItemParser(DropTable[0], UserSessionRecord, UserIndexRecord, "plain", 0);
	UserSessionRecord = ParsedDrops[0]; UserIndexRecord = ParsedDrops[1];
	let UpdateData = ParsedDrops[2]; let EntityList = ParsedDrops[3];
	UserIndexRecord['user_data']['coin'] += DropTable[1];
	UserIndexRecord['user_data']['mana_point'] += DropTable[2];
	UserIndexRecord['user_data']['crystal'] += DropTable[3];
	if (UserIndexRecord['user_data']['coin'] > 3000000000) { UserIndexRecord['user_data']['coin'] = 3000000000; }
	if (UserIndexRecord['user_data']['mana_point'] > 3000000000) { UserIndexRecord['user_data']['mana_point'] = 3000000000; }
	if (UserIndexRecord['user_data']['crystal'] > 3000000000) { UserIndexRecord['user_data']['crystal'] = 3000000000; }
	UpdateData['diamond_data'] = { 'free_diamond': 0, 'paid_diamond': UserSessionRecord['Diamantium'] }
	UpdateData['chara_list'] = FullGrowthTable;
	UpdateData['quest_list'] = NewQuestData;
	for (let qu in NewQuestData) {
		const QuestIndex = UserIndexRecord.quest_list.findIndex(x => x.quest_id == NewQuestData[qu]['quest_id']);
		if (QuestIndex != -1) { UserIndexRecord['quest_list'][QuestIndex] = NewQuestData[qu]; }
	}
	let JSONDict = {
		'time_attack_ranking_data': [],
		'ingame_result_data': {
			'play_type': 1,
			'reward_record': {
				'drop_all':	DropTable[0],
				'first_clear_set': [],
				'quest_bonus_list': [],
				'reborn_bonus': [],
				'weekly_limit_reward_list': [],
				'challenge_quest_bonus_list': [],
				'campaign_extra_reward_list': [],
				'shop_quest_bonus_factor': 0,
				'mission_complete': [],
				'missions_clear_set': [],
				'enemy_piece': [],
				'take_coin': DropTable[1],
				'take_accumulate_point': 0,
				'take_boost_accumulate_point': 0,
				'player_level_up_fstone':  0,
				'first_meeting': [],
				'take_astral_item_quantity': 0,
				'carry_bonus': []
			},
			'grow_record': {
				'take_player_exp': PlayerEXP,
				'take_chara_exp': DungeonEXP,
				'take_mana': DropTable[2],
				'bonus_factor': 1.0,
				'mana_bonus_factor': 1.0,
				'chara_grow_record': GrowthTable,
				'chara_friendship_list': FriendshipTable
			},
			'start_time': Math.floor(Date.now() / 1000),
			'end_time': Math.floor(Date.now() / 1000),
			'current_play_count': 1,
			'is_clear': 1,
			'state': 5,
			'is_host': 1,
			'is_fever_time': 0,
			'wave_count': 0,
			'reborn_count': 0,
			'helper_list': [],
			'helper_detail_list': [],
			'quest_party_setting_list': PartyData[1],
			'bonus_factor_list': [],
			'scoring_enemy_point_list': [],
			'score_mission_success_list': [],
			'event_passive_up_list': [],
			'clear_time': -1,
			'is_best_clear_time': 0,
			'converted_entity_list': EntityList['converted_entity_list'],
			'dungeon_skip_type': 2,
		},
		'update_data_list': UpdateData,
		'entity_result': EntityList
	}
	const PlayerLevel = LevelMap.Player(UserIndexRecord['user_data']['exp'] + PlayerEXP);
	const CurrentLevel = UserIndexRecord['user_data']['level'];
	UserIndexRecord['user_data']['level'] = PlayerLevel[0];
	UserIndexRecord['user_data']['exp'] = PlayerLevel[1];
	if (PlayerLevel[0] > CurrentLevel) {
		if (UserIndexRecord['user_data']['stamina_single'] < PlayerLevel[2]) { UserIndexRecord['user_data']['stamina_single'] = PlayerLevel[2]; }
		const LevelUpCount = PlayerLevel[0] - CurrentLevel;
		const WyrmiteCount = 50 * LevelUpCount;
		UserIndexRecord['user_data']['crystal'] += WyrmiteCount;
		JSONDict['entity_result']['new_entity_get_list'].push({'entity_type': 23, 'entity_id': 0, 'entity_quantity': WyrmiteCount});
		UserIndexRecord = FacilityCheck(PlayerLevel[0], CurrentLevel, UserIndexRecord);
	}
	JSONDict['update_data_list']['user_data'] = UserIndexRecord['user_data'];
	
	return [JSONDict, UserIndexRecord, UserSessionRecord];
}

function QuestStep(QuestID) {
	var JSONDict = { 'data_headers': { 'result_code': 1 }, 'data': {
		'odds_info': QuestMap.GetQuestInfo(QuestID, "odds_info")
		},
		"update_data_list": {  "functional_maintenance_list": [] }
	}
	return JSONDict;
}

function SetClearParty(UserSessionRecord) {
	var JSONDict = {
		"quest_clear_party_setting_list": UserSessionRecord['DungeonRecord']['LastDungeonPartyData'],
		"lost_unit_list": [],
		"update_data_list": { "functional_maintenance_list": [] }
	}
	return JSONDict;
}

function GetWallDrop() {
	let GeneratedDropData = [];
	const DropNumber = Math.round(Math.random() * 4) + 1;
	const PromisedDropList = [ { 'entity_type': 8, 'entity_id': 201021001, 'entity_quantity': 1 } ]
	const SecondaryDropList = [
		{ 'entity_type': 8, 'entity_id': 202005011, 'entity_quantity': 5 },
		{ 'entity_type': 8, 'entity_id': 202005021, 'entity_quantity': 5 },
		{ 'entity_type': 8, 'entity_id': 202005031, 'entity_quantity': 5 },
		{ 'entity_type': 8, 'entity_id': 202005041, 'entity_quantity': 5 },
		{ 'entity_type': 8, 'entity_id': 202005051, 'entity_quantity': 5 },
		{ 'entity_type': 8, 'entity_id': 202005061, 'entity_quantity': 5 },
		{ 'entity_type': 8, 'entity_id': 202005071, 'entity_quantity': 5 },
		{ 'entity_type': 8, 'entity_id': 202005081, 'entity_quantity': 5 },
		{ 'entity_type': 8, 'entity_id': 202005091, 'entity_quantity': 5 }
	]
	const TertiaryDropList = [
		{ 'entity_type': 8, 'entity_id': 201019011, 'entity_quantity': 1 },
		{ 'entity_type': 8, 'entity_id': 201019021, 'entity_quantity': 1 },
		{ 'entity_type': 8, 'entity_id': 201019031, 'entity_quantity': 1 },
		{ 'entity_type': 8, 'entity_id': 201019041, 'entity_quantity': 1 },
		{ 'entity_type': 8, 'entity_id': 201019051, 'entity_quantity': 1 }
	]
	let i = 0; while (i < DropNumber) {
		switch(i) {
			case 0: for ( let v in PromisedDropList ) { GeneratedDropData.push(PromisedDropList[v]); } break;
			case 1:
				const ElementalValue = Math.floor(Math.random() * 4 + 1); const ElementalID = "20600" + String(ElementalValue) + "001";
				const EssenceValue = parseInt(ElementalID) + Math.floor(Math.random() * 7);
				GeneratedDropData.push({'entity_type': 8, 'entity_id': parseInt(EssenceValue), 'entity_quantity': 5}); break;
			case 2: for ( let v in SecondaryDropList ) { GeneratedDropData.push(SecondaryDropList[v]); } break;
			case 3: for ( let v in TertiaryDropList ) { GeneratedDropData.push(TertiaryDropList[v]); } break;
			case 4: GeneratedDropData.push(DrawRareItem()); break;
		}
		i++;
	}
	var Template = {
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
						'drop_list': GeneratedDropData
					}
				]
			}
		],
		'grade': []
	}
	return Template;
}
function DrawRareItem() {
	const EntityType = [8, 17];
	const RareMaterialIDs = [ 125001001, 111002001, 112003001, 114002001 ];
	const RareTicketIDs = [ 10101, 10102, 10202, 10301, 10302,
						10401, 10402, 10403, 10501, 10502 ];
	const DrawType = Math.round(Math.random());
	let DrawID = 0;
	switch(DrawType) { 
		case 0: DrawID = RareMaterialIDs[Math.round(Math.random() * (RareMaterialIDs.length) )]; break;
		case 1: DrawID = RareTicketIDs[Math.round(Math.random() * (RareTicketIDs.length) )]; break; 
	}
	var DrawData = { 'entity_type': EntityType[DrawType], 'entity_id': DrawID, 'entity_quantity': 1 };
	return DrawData;
}
function WallRecord(UserSessionRecord, UserIndexRecord, WallID) {
	const DropTable = QuestMap.FormatWallDrops(UserSessionRecord['Wall']['RewardList']);
	const UpdateData = {}
	for (let y in DropTable) {
		switch(DropTable[y]['entity_type']) {
			case 4:
				UserIndexRecord['user_data']['coin'] += DropTable[y]['entity_quantity'];
				break;
			// case 5: break; case 6: break; case 28: break; case 33: break; case 34: break; case 39: break;
			case 8:
				let NewMaterialData = { 'material_id': DropTable[y]['entity_id'], 'quantity': DropTable[y]['entity_quantity'] }
				const ItemIndex = UserIndexRecord['material_list'].findIndex(x => x.material_id == DropTable[y]['entity_id']);
				if (UpdateData['material_list'] == undefined) { UpdateData['material_list'] = []; }
				if (ItemIndex == -1) { UserIndexRecord['material_list'].push(NewMaterialData); UpdateData['material_list'].push(NewMaterialData); }
				else { UserIndexRecord['material_list'][ItemIndex]['quantity'] += NewMaterialData['quantity']; UpdateData['material_list'].push(UserIndexRecord['material_list'][ItemIndex]); }				
				break;
			case 13:
				UserSessionRecord['Diamantium'] += DropTable[y]['entity_quantity'];
				break;
			case 14:
				UserIndexRecord['user_data']['dew_point'] += DropTable[y]['entity_quantity'];
				break;
			case 15:
				const TicketIndex = UserIndexRecord['summon_ticket_list'].findIndex(x => x.summon_ticket_id === DropTable[y]['entity_id']);
				if (TicketIndex != -1) { UserIndexRecord['summon_ticket_list'][TicketIndex]['quantity'] += DropTable[y]['entity_quantity']; }
				else { UserIndexRecord['summon_ticket_list'].push({'key_id': KeyIDByTicket(DropTable[0][y]['entity_id']), 'summon_ticket_id': DropTable[y]['entity_id'], 'quantity': DropTable[y]['entity_quantity'], 'use_limit_time': 0}); }
				if (UpdateData['summon_ticket_list'] == undefined) { UpdateData['summon_ticket_list'] = []; }
				UpdateData['summon_ticket_list'].push({'key_id': KeyIDByTicket(DropTable[y]['entity_id']), 'summon_ticket_id': DropTable[y]['entity_id'], 'quantity': DropTable[y]['entity_quantity'], 'use_limit_time': 0});
				break;
			case 16:
				UserIndexRecord['user_data']['quest_skip_point'] += DropTable[y]['entity_quantity'];
				break;
			case 18:
				UserIndexRecord['user_data']['mana_point'] += DropTable[y]['entity_quantity'];
				break;
			case 23:
				UserIndexRecord['user_data']['crystal'] += DropTable[y]['entity_quantity'];
				break;
			case 28:
				UserIndexRecord['user_data']['build_time_point'] += DropTable[y]['entity_quantity'];
				break;
			case 39:
				break;
		}
	}
	UserIndexRecord['user_data']['coin'] += UserSessionRecord['Wall']['RewardList']['enemy'][0]['enemy_drop_list'][0]['coin'];
	UserIndexRecord['user_data']['mana_point'] += UserSessionRecord['Wall']['RewardList']['enemy'][0]['enemy_drop_list'][0]['mana'];
	let NextLevel = 0; if (UserSessionRecord['Wall']['LastLevel'] >= 80) { NextLevel = 80; } else { NextLevel = UserSessionRecord['Wall']['LastLevel']; }
	var PlayDetail = { 'wall_id': WallID, 'before_wall_id': UserSessionRecord['Wall']['LastLevel'], 'after_wall_id': NextLevel };
	var FinalizeWallLevel = { 'quest_group_id': 21601, 'wall_id': WallID, 'wall_level': NextLevel, 'is_start_next_level': 0 }
	const WallIndex = UserIndexRecord['quest_wall_list'].findIndex(x => x.wall_id === WallID);
	UserIndexRecord['quest_wall_list'][WallIndex] = FinalizeWallLevel;
	UpdateData['quest_wall_list'] = [ FinalizeWallLevel ];
	UpdateData['user_data'] = UserIndexRecord['user_data'];
	const JSONDict = {
		'wall_clear_reward_list': [
			{
				'entity_type': 23,
				'entity_id': 0,
				'entity_quantity': 25
			}
		],
		'wall_drop_reward': {
			'reward_entity_list': DropTable,
			'take_coin': UserSessionRecord['Wall']['RewardList']['enemy'][0]['enemy_drop_list'][0]['coin'],
			'take_mana': UserSessionRecord['Wall']['RewardList']['enemy'][0]['enemy_drop_list'][0]['mana']
		},
		'wall_unit_info': {
			'helper_list': UserSessionRecord['Wall']['LastSupportCharacter'][1],
			'helper_detail_list': UserSessionRecord['Wall']['LastSupportPlayer'],
			'quest_party_setting_list': UserSessionRecord['Wall']['LastPartySettings']
		},
		'play_wall_detail': PlayDetail,
		'update_data_list': UpdateData
	}	
	return [JSONDict, UserIndexRecord];
}

function FacilityCheck(NewLevel, OldLevel, UserIndexRecord) {
	if (NewLevel > 40 && OldLevel < 40) {
		
	}
	if (NewLevel > 45 && OldLevel < 45) {
		
	}
	if (NewLevel > 50 && OldLevel < 50) {
		
	}
	if (NewLevel > 55 && OldLevel < 55) {
		
	}
	if (NewLevel > 60 && OldLevel < 60) {
		
	}
	return UserIndexRecord;
}

function LoginBonusData(UserIndexRecord, UserSessionRecord, ActiveBonusList, DailyDragonItem, GatherMedalReset, DayStart, DayEnd, DayNumber) {
	let UpdateData = {}; let EntityList = {};
	let LoginBonusList = [];
	if (UserSessionRecord['LoginBonus']['Display'] == true) {
		let RewardDay = parseInt(String(UserSessionRecord['LoginBonus']['17']['DayCount']).slice(-1));
		if (RewardDay == 0) { RewardDay = 10; }
		const DailyRewardData = LoginBonusMap["17"][String(RewardDay)];
		const DailyBonus = {
			'reward_code': 0,
			'login_bonus_id': 17,
			'total_login_day': UserSessionRecord['LoginBonus']['17']['DayCount'],
			'reward_day': RewardDay,
			'entity_type': DailyRewardData['entity_type'],
			'entity_id': DailyRewardData['entity_id'],
			'entity_quantity': DailyRewardData['entity_quantity'],
			'entity_level': DailyRewardData['entity_level'],
			'entity_limit_break_count': DailyRewardData['entity_limit_break_count']
		}
		if ((UserIndexRecord['user_data']['quest_skip_point'] + 12) > 400) { UserIndexRecord['user_data']['quest_skip_point'] = 400; }
		else { UserIndexRecord['user_data']['quest_skip_point'] += 12; }
		UserSessionRecord['LoginBonus']['17']['DayCount'] += 1;
		LoginBonusList.push(DailyBonus);
		
		for (let x in ActiveBonusList) {
			if ((ActiveBonusList[x]['start_time'] < Math.floor(Date.now() / 1000)) && (ActiveBonusList[x]['end_time'] > Math.floor(Date.now() / 1000))) {
				if (UserSessionRecord['LoginBonus'][String(ActiveBonusList[x]['id'])] == undefined) {
					UserSessionRecord['LoginBonus'][String(ActiveBonusList[x]['id'])] = { 'DayCount': 1, 'IsComplete': false }
				}
				if (UserSessionRecord['LoginBonus'][String(ActiveBonusList[x]['id'])]['IsComplete'] != true) {
					const CurrentDay = UserSessionRecord['LoginBonus'][String(ActiveBonusList[x]['id'])]['DayCount'];
					const ActiveBonusReward = LoginBonusMap[String(ActiveBonusList[x]['id'])][String(CurrentDay)];
					const Template = {
						'reward_code': 0,
						'login_bonus_id': ActiveBonusList[x]['id'],
						'total_login_day': UserSessionRecord['LoginBonus'][String(ActiveBonusList[x]['id'])]['DayCount'],
						'reward_day': UserSessionRecord['LoginBonus'][String(ActiveBonusList[x]['id'])]['DayCount'],
						'entity_type': ActiveBonusReward['entity_type'],
						'entity_id': ActiveBonusReward['entity_id'],
						'entity_quantity': ActiveBonusReward['entity_quantity'],
						'entity_level': ActiveBonusReward['entity_level'],
						'entity_limit_break_count': ActiveBonusReward['entity_limit_break_count']
					}
					LoginBonusList.push(Template);
					if (LoginBonusMap[String(ActiveBonusList[x]['id'])][String(CurrentDay + 1)] == undefined) {
						UserSessionRecord['LoginBonus'][String(ActiveBonusList[x]['id'])]['IsComplete'] = true;
					}
					else { UserSessionRecord['LoginBonus'][String(ActiveBonusList[x]['id'])]['DayCount'] += 1; }
				}
			}
		}
		
		UserSessionRecord['LoginBonus']['Display'] = false;
		let Parsed = ItemParser(LoginBonusList, UserSessionRecord, UserIndexRecord, "entity");
		UserSessionRecord = Parsed[0];
		UserIndexRecord = Parsed[1];
		UpdateData = Parsed[2]; EntityList = Parsed[3];
		UpdateData['user_data'] = UserIndexRecord['user_data'];
		UpdateData['diamond_data'] = { 'free_diamond': 0, 'paid_diamond': UserSessionRecord['Diamantium'] };
		UpdateData['present_notice'] = { 'present_count': UserSessionRecord['GiftRecord']['GiftNormalList'].length, 'present_limit_count': UserSessionRecord['GiftRecord']['GiftLimitedList'].length };
		UserIndexRecord['user_data']['crystal'] += 50;
		UserIndexRecord['user_data']['last_login_time'] = Math.floor(Date.now() / 1000);
		if (UserIndexRecord['gather_item_list'][0] != undefined && UserIndexRecord['gather_item_list'][0]['quest_last_weekly_reset_time'] < GatherMedalReset) {
			UserIndexRecord['gather_item_list'][0]['quest_last_weekly_reset_time'] = GatherMedalReset;
			UserIndexRecord['gather_item_list'][0]['quest_take_weekly_quantity'] = 0;
		}
		UserSessionRecord['SummonRecord']['ItemCount'] = 0;
		UserSessionRecord['SummonRecord']['FreeTenfoldCount'] += 1;
		UserSessionRecord['SummonRecord']['DailyLimitCount'] = 1;
		UserSessionRecord['Kaleidoscape']['RecoveryCount'] = 0;
		UserSessionRecord['FortData']['DragonGiftList'] = [
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
			},
		]
		UserSessionRecord['Endeavour']['Active']['daily_mission_list'] = [
			{ 'daily_mission_id': 15070101, 'progress': 0, 'state': 0, 'day_no': DayNumber, 'is_lock_receive_reward': 0, 'is_pickup': 0, 'start_date': DayStart, 'end_date': DayEnd }, //item summon
			{ 'daily_mission_id': 15070201, 'progress': 0, 'state': 0, 'day_no': DayNumber, 'is_lock_receive_reward': 0, 'is_pickup': 0, 'start_date': DayStart, 'end_date': DayEnd }, //rupies from facility
			{ 'daily_mission_id': 15070301, 'progress': 0, 'state': 0, 'day_no': DayNumber, 'is_lock_receive_reward': 0, 'is_pickup': 0, 'start_date': DayStart, 'end_date': DayEnd }, //clear quest
			//{ 'daily_mission_id': 15070401, 'progress': 0, 'state': 0, 'day_no': DayNumber, 'is_lock_receive_reward': 0, 'is_pickup': 0, 'start_date': DayStart, 'end_date': DayEnd }, //clear 3 quests
			//{ 'daily_mission_id': 15070501, 'progress': 0, 'state': 0, 'day_no': DayNumber, 'is_lock_receive_reward': 0, 'is_pickup': 0, 'start_date': DayStart, 'end_date': DayEnd }, //clear 5 quests
			{ 'daily_mission_id': 15070601, 'progress': 0, 'state': 0, 'day_no': DayNumber, 'is_lock_receive_reward': 0, 'is_pickup': 0, 'start_date': DayStart, 'end_date': DayEnd }  //clear all Endeavour
		]
		UserSessionRecord['Endeavour']['Tracker']['Daily']['Quests'] = 0;
	}
	UpdateData['diamond_data'] = { 'free_diamond': 0, 'paid_diamond': UserSessionRecord['Diamantium'] };
	const JSONDict = {
		'support_reward': {},
		'login_bonus_list': LoginBonusList,
		'login_lottery_reward_list': [],
		'dragon_contact_free_gift_count': 0,
		'monthly_wall_receive_list': [],
		'penalty_data': [],
		'exchange_summom_point_list': [],
		'before_exchange_summon_item_quantity': 0,
		'server_time': Math.floor(Date.now() / 1000),
		'update_data_list': UpdateData,
		'entity_list': EntityList
	}
	return [JSONDict, UserIndexRecord, UserSessionRecord];
}
function CheckDailyCompleted(UserSessionRecord) {
	const SummonDailyIndex = UserSessionRecord['Endeavour']['Active']['daily_mission_list'].findIndex(x => x.daily_mission_id == 15070101);
	const CoinDailyIndex = UserSessionRecord['Endeavour']['Active']['daily_mission_list'].findIndex(x => x.daily_mission_id == 15070201);
	const QuestsCleared = UserSessionRecord['Endeavour']['Tracker']['Daily']['Quests'];
	
	let ClearCount = 0;
	
	if (UserSessionRecord['Endeavour']['Active']['daily_mission_list'][SummonDailyIndex]['state'] == 1 || UserSessionRecord['Endeavour']['Active']['daily_mission_list'][SummonDailyIndex]['state'] == 2) {
		ClearCount += 1;
	}
	if (UserSessionRecord['Endeavour']['Active']['daily_mission_list'][CoinDailyIndex]['state'] == 1 || UserSessionRecord['Endeavour']['Active']['daily_mission_list'][CoinDailyIndex]['state'] == 2) {
		ClearCount += 1;
	}
	if (UserSessionRecord['Endeavour']['Tracker']['Daily']['Quests'] >= 5) { ClearCount += 3; }
	else if (UserSessionRecord['Endeavour']['Tracker']['Daily']['Quests'] >= 3) { ClearCount += 2; }
	else if (UserSessionRecord['Endeavour']['Tracker']['Daily']['Quests'] >= 1) { ClearCount += 1; }
	
	return ClearCount;
}

function MissionList(UserSessionRecord) {
	const JSONDict = {
		'normal_mission_list': [],
		'daily_mission_list': UserSessionRecord['Endeavour']['Active']['daily_mission_list'],
		'period_mission_list': [],
		'beginner_mission_list': [],
		'special_mission_list': [],
		'main_story_mission_list': [],
		'memory_event_mission_list': [],
		'album_mission_list': [],
		'mission_notice': {
			'normal_mission_notice': UserSessionRecord['QuestNotice']['NormalMission'],
			'daily_mission_notice': UserSessionRecord['QuestNotice']['DailyMission'],
			'period_mission_notice': UserSessionRecord['QuestNotice']['EventMission'],
			'beginner_mission_notice': UserSessionRecord['QuestNotice']['BeginnerMission'],
			'special_mission_notice': UserSessionRecord['QuestNotice']['SpecialMission'],
			'main_story_mission_notice': UserSessionRecord['QuestNotice']['StoryMission'],
			'memory_event_mission_notice': UserSessionRecord['QuestNotice']['CompendiumMission'],
			'drill_mission_notice': UserSessionRecord['QuestNotice']['DrillMission'],
			'album_mission_notice': UserSessionRecord['QuestNotice']['AlbumMission']
		},
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
		'special_mission_purchased_group_id_list': []	
	}
	return JSONDict;
}
function MyPageInfo(UserSessionRecord, QuestRotationSet, EventList) {
	let QuestRotation = [];
	const RightNow = Math.floor(Date.now()/1000)
	const TypeList = Object.keys(QuestRotationSet);
	for (let y in QuestRotationSet) {
		if (QuestRotationSet[y]['start'] < RightNow && QuestRotationSet[y]['end'] > RightNow) {
			const Template = {
				'schedule_detail_id': QuestRotationSet[y]['detail_id'],
				'schedule_group_id': QuestRotationSet[y]['group_id'],
				'drop_bonus_percent': QuestRotationSet[y]['drop_multiplier'] * 100,
				'interval_type': QuestRotationSet[y]['interval'],
				'start_date': QuestRotationSet[y]['start'],
				'end_date': QuestRotationSet[y]['end'],
				'limit_shop_goods_type': QuestRotationSet[y]['limit_shop_goods_type']
			}
			QuestRotation.push(Template);
		}
	}
	for (let z in EventList['astralraid']) {
		if (EventList['astralraid'][z]['start'] < RightNow && EventList['astralraid'][z]['end'] > RightNow) {
			const Template = {
				'schedule_detail_id': EventList['astralraid'][z]['detail_id'],
				'schedule_group_id': EventList['astralraid'][z]['group_id'],
				'drop_bonus_percent': EventList['astralraid'][z]['drop_multiplier'] * 100,
				'interval_type': EventList['astralraid'][z]['interval'],
				'start_date': EventList['astralraid'][z]['start'],
				'end_date': EventList['astralraid'][z]['end'],
				'limit_shop_goods_type': EventList['astralraid'][z]['limit_shop_goods_type']
			}
			QuestRotation.push(Template);
		}
	}
	for (let z in EventList['totm']) {
		if (EventList['totm'][z]['start'] < RightNow && EventList['totm'][z]['end'] > RightNow) {
			const Template = {
				'schedule_detail_id': EventList['totm'][z]['detail_id'],
				'schedule_group_id': EventList['totm'][z]['group_id'],
				'drop_bonus_percent': EventList['totm'][z]['drop_multiplier'] * 100,
				'interval_type': EventList['totm'][z]['interval'],
				'start_date': EventList['totm'][z]['start'],
				'end_date': EventList['totm'][z]['end'],
				'limit_shop_goods_type': EventList['totm'][z]['limit_shop_goods_type']
			}
			QuestRotation.push(Template);
		}
	}
	const JSONDict = {
		'user_summon_list': UserSessionRecord['SummonRecord']['UserSummonData'],
		'is_shop_notification': 0,
		'is_view_start_dash': 0,
		'is_view_dream_select': 0,
		'quest_event_schedule_list': [],
		'quest_schedule_detail_list': QuestRotation,
		'repeat_data': [],
		'is_receive_event_damage_reward': 0
	}
	return JSONDict;
}

function ItemParser(ItemTable, UserSessionRecord, UserIndexRecord, TableType, QuestID) {
	let UpdateData = {};
	let EntityList = {
		'new_entity_get_list': [],
		'converted_entity_list': [],
		'over_discard_entity_list': []
	};
	TypeName = "type"; IDName = "id"; AmountName = "quantity";
	switch(TableType) {
		case "destination":
			TypeName = "destination_entity_type"; IDName = "destination_entity_id"; AmountName = "destination_entity_quantity"; break;
		case "entity":
			TypeName = "entity_type"; IDName = "entity_id"; AmountName = "entity_quantity"; break;
		case "plain":
			TypeName = "type"; IDName = "id"; AmountName = "quantity"; break;
		default:
			TypeName = "type"; IDName = "id"; AmountName = "quantity"; break;
	}
	
	for (let y in ItemTable) {
		switch(ItemTable[y][TypeName]) {
			case 1:
				if (UserIndexRecord['chara_list'].findIndex(x => x.chara_id === ItemTable[y][IDName]) == -1) {
					if (UpdateData['chara_list'] == undefined) { UpdateData['chara_list'] = []; }
					UpdateData['chara_list'].push(CharacterMap.CreateCharacterFromGift(ItemTable[y][IDName], 1));
					UserIndexRecord['chara_list'].push(CharacterMap.CreateCharacterFromGift(ItemTable[y][IDName], 1));
					EntityList['new_entity_get_list'].push({ 'entity_type': 1, 'entity_id': ItemTable[y][IDName] });
					const CharacterElement = CharacterMap.GetCharacterInfo(ItemTable[y][IDName], 'elemental_type');
					const CharacterBonusIndex = UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'].findIndex(x => x.elemental_type == CharacterElement);
					UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][CharacterBonusIndex]['hp'] += 0.1;
					UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][CharacterBonusIndex]['attack'] += 0.1;
					UpdateData['fort_bonus_list'] = UserIndexRecord['fort_bonus_list'];
					if (UpdateData['unit_story_list'] == undefined) { UpdateData['unit_story_list'] = []; } 
					const UnitStoryData = CharacterMap.GenerateUnitStory(ItemTable[y][IDName]);
					if (UnitStoryData[0] != undefined) {
						UpdateData['unit_story_list'].push(UnitStoryData[0], UnitStoryData[1], UnitStoryData[2], UnitStoryData[3], UnitStoryData[4]);
						UserIndexRecord['unit_story_list'].push(UnitStoryData[0], UnitStoryData[1], UnitStoryData[2], UnitStoryData[3], UnitStoryData[4]); } }
				break;
			case 2:
				const NewStamItemData = {'item_id': ItemTable[y][IDName], 'quantity': ItemTable[y][AmountName]}
				if (UpdateData['item_list'] == undefined) { UpdateData['item_list'] = []; }
				const StamItemIndex = UserSessionRecord['EnergyItems'].findIndex(x => x.item_id == NewStamItemData['item_id']);
				if (StamItemIndex == -1) {
					UserSessionRecord['EnergyItems'].push(NewStamItemData);
					UpdateData['item_list'].push(NewStamItemData); }
				else {
					UserSessionRecord['EnergyItems'][StamItemIndex]['quantity'] += NewStamItemData['quantity'];
					if (UpdateData['item_list'] == undefined) { UpdateData['item_list'] = []; }
					UpdateData['item_list'].push(UserSessionRecord['EnergyItems'][StamItemIndex]); } 
				break;
			case 4:
				UserIndexRecord['user_data']['coin'] += ItemTable[y][AmountName];
				if (UserIndexRecord['user_data']['coin'] > 3000000000) { UserIndexRecord['user_data']['coin'] = 3000000000; }
				break;
			case 5:
				UserSessionRecord['Diamantium'] += ItemTable[y][AmountName];
				if (UserSessionRecord['Diamantium'] > 3000000000) { UserSessionRecord['Diamantium'] = 3000000000; }
				break;
			case 7:
				let NextID = UserIndexRecord['dragon_list'][UserIndexRecord['dragon_list'].length - 1]['dragon_key_id'] + 1;
				if (UserIndexRecord['dragon_list'].length == 0) { NextID = 39999; }
				if (UpdateData['dragon_list'] == undefined) { UpdateData['dragon_list'] = []; }
				if (UserIndexRecord['dragon_list'].length < 1000) {
					const DragonData = { 'id': ItemTable[y][IDName] }
					UpdateData['dragon_list'].push(DragonMap.CreateDragonFromGift(NextID, DragonData['id'], 1));
					UserIndexRecord['dragon_list'].push(DragonMap.CreateDragonFromGift(NextID, DragonData['id'], 1));
					if (UserIndexRecord['dragon_reliability_list'].findIndex(x => x.dragon_id === DragonData['id']) == -1) {
						if (UpdateData['dragon_reliability_list'] == undefined) { UpdateData['dragon_reliability_list'] = []; }
						UpdateData['dragon_reliability_list'].push(DragonMap.GenerateDragonReliability(DragonData['id']));
						UserIndexRecord['dragon_reliability_list'].push(DragonMap.GenerateDragonReliability(DragonData['id'])); }
						const DragonElement = DragonMap.GetDragonInfo(DragonData['id'], "element");
						const DragonBonusIndex = UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'].findIndex(x => x.elemental_type == DragonElement);
						UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'][DragonBonusIndex]['hp'] += 0.1;
						UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'][DragonBonusIndex]['attack'] += 0.1;
						UpdateData['fort_bonus_list'] = UserIndexRecord['fort_bonus_list'];
					EntityList['new_entity_get_list'].push({ 'entity_type': 7, 'entity_id': DragonData['id'] }); }
				break;
			case 8:
				let NewMaterialData = { 'material_id': ItemTable[y][IDName], 'quantity': ItemTable[y][AmountName] }
				const ItemIndex = UserIndexRecord['material_list'].findIndex(x => x.material_id == ItemTable[y][IDName]);
				if (UpdateData['material_list'] == undefined) { UpdateData['material_list'] = []; }
				if (ItemIndex == -1) { UserIndexRecord['material_list'].push(NewMaterialData); UpdateData['material_list'].push(NewMaterialData); }
				else {
					const NewTotal = UserIndexRecord['material_list'][ItemIndex][AmountName] + NewMaterialData['quantity'];
					if (NewTotal > 999000) { UserIndexRecord['material_list'][ItemIndex]['quantity'] = 999000; }
					else { UserIndexRecord['material_list'][ItemIndex]['quantity'] += NewMaterialData['quantity']; }
					UpdateData['material_list'].push(UserIndexRecord['material_list'][ItemIndex]);
				}
				
				if (String(NewMaterialData['material_id']).slice(0,5) == "20700") {
					const PrintID = "400900" + String(NewMaterialData['material_id']).slice(-2);
					if (UserIndexRecord['ability_crest_list'].findIndex(x => x.ability_crest_id == PrintID) == -1) {
						NewPrint = WyrmprintMap.CreateWyrmprintFromGift(PrintID);
						UserIndexRecord['ability_crest_list'].push(NewPrint);
						if (UpdateData['ability_crest_list'] == undefined) { UpdateData['ability_crest_list'] = []; }
						UpdateData['ability_crest_list'].push(NewPrint);
					}
				}
				break;
			case 9:
				let BuildTemplate = {
					'build_id': UserIndexRecord['build_list'][UserIndexRecord['build_list'].length - 1]['build_id'] + 1,
					'fort_plant_detail_id': parseInt(String(ItemTable[y][IDName] + "01")),
					'position_x': -1,
					'position_z': -1,
					'build_status': 0,
					'build_start_date': 0,
					'build_end_date': 0,
					'level': 1,
					'plant_id': ItemTable[y][IDName],
					'is_new': 0,
					'remain_time': 0,
					'last_income_date': -1
				}
				if (FortMap.IsDecorative(ItemTable[y][IDName])) {
					BuildTemplate['fort_plant_detail_id'] = parseInt(String(ItemTable[y][IDName] + "00"));
					BuildTempalte['level'] = 0;
				}
				if (FortMap.IsIncome(ItemTable[y][IDName])) {
					BuildTemplate['last_income_date'] = Math.floor(Date.now() / 1000) - 10000;
					BuildTemplate['last_income_time'] = 10000;
				}
				if (UpdateData['build_list'] == undefined) { UpdateData['build_list'] = []; }
				UpdateData['build_list'].push(BuildTemplate);
				UserIndexRecord['build_list'].push(BuildTemplate);
				break;
			case 12:
				if (UpdateData['ability_crest_list'] == undefined) { UpdateData['ability_crest_list'] = []; }
				const CrestIndex = UserIndexRecord['ability_crest_list'].findIndex(x => x.ability_crest_id == ItemTable[y][IDName]);
				if (CrestIndex == -1) {
					const PrintData = WyrmprintMap.CreateWyrmprintFromGift(ItemTable[y][IDName]);
					UpdateData['ability_crest_list'].push(PrintData); UserIndexRecord['ability_crest_list'].push(PrintData);
					EntityList['new_entity_get_list'].push({ 'entity_type': 12, 'entity_id': ItemTable[y][IDName] }); }
				else {
					const PrintRarity = WyrmprintMap.GetWyrmprintInfo(ItemTable[y][IDName], "rarity");
					switch(PrintRarity) {
						case 3:
							UserIndexRecord['user_data']['dew_point'] += 300 * ItemTable[y][AmountName];
							EntityList['converted_entity_list'].push({
								'before_entity_type': ItemTable[y][TypeName],
								'before_entity_id': ItemTable[y][IDName],
								'before_entity_quantity': ItemTable[y][AmountName],
								'after_entity_type': 14,
								'after_entity_id': 0,
								'after_entity_quantity': 300 * ItemTable[y][AmountName]
							});
							break;
						case 4:
							UserIndexRecord['user_data']['dew_point'] += 1000 * ItemTable[y][AmountName];
							EntityList['converted_entity_list'].push({
								'before_entity_type': ItemTable[y][TypeName],
								'before_entity_id': ItemTable[y][IDName],
								'before_entity_quantity': ItemTable[y][AmountName],
								'after_entity_type': 14,
								'after_entity_id': 0,
								'after_entity_quantity': 1000 * ItemTable[y][AmountName]
							});
							break;
						case 5:
							UserIndexRecord['user_data']['dew_point'] += 3000 * ItemTable[y][AmountName];
							EntityList['converted_entity_list'].push({
								'before_entity_type': ItemTable[y][TypeName],
								'before_entity_id': ItemTable[y][IDName],
								'before_entity_quantity': ItemTable[y][AmountName],
								'after_entity_type': 14,
								'after_entity_id': 0,
								'after_entity_quantity': 3000 * ItemTable[y][AmountName]
							});
							break;
					}
				}
				break;
			case 13:
				UserSessionRecord['Diamantium'] += ItemTable[y][AmountName];
				if (UserSessionRecord['Diamantium'] > 3000000000) { UserSessionRecord['Diamantium'] = 3000000000; } 
				break;
			case 14:
				UserIndexRecord['user_data']['dew_point'] += ItemTable[y][AmountName];
				if (UserIndexRecord['user_data']['dew_point'] > 3000000000) { UserIndexRecord['user_data']['dew_point'] = 3000000000; }
				break;
			case 15:
				if (UpdateData['dragon_gift_list'] == undefined) { UpdateData['dragon_gift_list'] = []; }
				const DragonGiftIndex = UserIndexRecord['dragon_gift_list'].findIndex(x => x.dragon_gift_id == ItemTable[y][IDName]);
				if (DragonGiftIndex == -1) {
					UserIndexRecord['dragon_gift_list'].push({'dragon_gift_id': ItemTable[y][IDName], 'quantity': ItemTable[y][AmountName]});
					UpdateData['dragon_gift_list'].push({'dragon_gift_id': ItemTable[y][IDName], 'quantity': ItemTable[y][AmountName]});
				}
				else {
					if (UserIndexRecord['dragon_gift_list'][DragonGiftIndex]['quantity'] + ItemTable[y][AmountName] >= 3000000000) {
						UserIndexRecord['dragon_gift_list'][DragonGiftIndex]['quantity'] = 3000000000;
					}
					else if (UserIndexRecord['dragon_gift_list'][DragonGiftIndex]['quantity'] == 0) {
						UserIndexRecord['dragon_gift_list'][DragonGiftIndex]['quantity'] = ItemTable[y][AmountName];
					}
					else { UserIndexRecord['dragon_gift_list'][DragonGiftIndex]['quantity'] += ItemTable[y][AmountName]; }
					UpdateData['dragon_gift_list'].push(UserIndexRecord['dragon_gift_list'][DragonGiftIndex]);
				}
				break;
			case 16:
				UserIndexRecord['user_data']['quest_skip_point'] += ItemTable[y][AmountName];
				if (UserIndexRecord['user_data']['quest_skip_point'] > 400) { UserIndexRecord['user_data']['quest_skip_point'] = 400; }
				break;
			case 17:
				const TicketData = { 'id': ItemTable[y][IDName], 'quantity': ItemTable[y][AmountName] }
				const TicketIndex = UserIndexRecord['summon_ticket_list'].findIndex(x => x.summon_ticket_id == TicketData['id']);
				if (TicketIndex != -1) {
					const TickTotal = UserIndexRecord['summon_ticket_list'][TicketIndex]['quantity'] + TicketData['quantity'];
					if (TickTotal > 999) { UserIndexRecord['summon_ticket_list'][TicketIndex]['quantity'] = 999; }
					else { UserIndexRecord['summon_ticket_list'][TicketIndex]['quantity'] += TicketData['quantity']; } 
				}
				else {
					const GivenKeyID = KeyIDByTicket(TicketData['id']);
					UserIndexRecord['summon_ticket_list'].push({'key_id': GivenKeyID, 'summon_ticket_id': TicketData['id'], 'quantity': TicketData['quantity'], 'use_time_limit': 0});
				}
				UpdateData['summon_ticket_list'] = UserIndexRecord['summon_ticket_list'];
				break;
			case 18:
				UserIndexRecord['user_data']['mana_point'] += ItemTable[y][AmountName];
				if (UserIndexRecord['user_data']['mana_point'] > 3000000000) { UserIndexRecord['user_data']['mana_point'] = 3000000000; }
				break;
			case 20:
				const RaidID = String(QuestID).slice(0, 5);
				const SpecialRaidItems = [ 2041308, 2042908, 2042909, 2042506, 2043306 ];
				const RaidItem = ItemTable[y][IDName];
				if (!SpecialRaidItems.includes(RaidItem)) {
					const RaidItemType = parseInt(String(RaidItem).slice(-1));
					switch(RaidItemType) {
						case 1: //blazon
							UserSessionRecord['Event']['Raid'][RaidID]['UserData']['box_summon_point'] += ItemTable[y][AmountName];
							break;
						case 2: //bronze emblem
							UserSessionRecord['Event']['Raid'][RaidID]['UserData']['raid_point_1'] += ItemTable[y][AmountName];
							break;
						case 3: //silver emblem
							UserSessionRecord['Event']['Raid'][RaidID]['UserData']['raid_point_2'] += ItemTable[y][AmountName];
							break;
						case 4: //gold emblem
							UserSessionRecord['Event']['Raid'][RaidID]['UserData']['raid_point_3'] += ItemTable[y][AmountName];
							break;
						case 5: //otherworld gem (tier 1)
							UserSessionRecord['Event']['Raid'][RaidID]['UserData']['advent_item_quantity_1'] += ItemTable[y][AmountName];
							break;
						case 6: //otherworld crystal (tier 2)
							UserSessionRecord['Event']['Raid'][RaidID]['UserData']['advent_item_quantity_2'] += ItemTable[y][AmountName];
							break;
						case 7: //omega key
							UserSessionRecord['Event']['Raid'][RaidID]['UserData']['ultimate_key_count'] += ItemTable[y][AmountName];
							break;
					}
				}
				break;
			case 22:
				const BuildID = String(QuestID).slice(0, 5);
				const BuildItem = ItemTable[y][IDName];
				const BuildItemType = parseInt(String(BuildItem).slice(-1));
				switch(BuildItemType) {
					case 1: //Event point
						UserSessionRecord['Event']['Build'][BuildID]['UserData']['user_build_event_item_list'][0]['event_item_value'] += ItemTable[y][AmountName];
						break;
					case 2: //tier 1
						UserSessionRecord['Event']['Build'][BuildID]['UserData']['user_build_event_item_list'][1]['event_item_value'] += ItemTable[y][AmountName];
						break;
					case 3: //tier 2
						UserSessionRecord['Event']['Build'][BuildID]['UserData']['user_build_event_item_list'][2]['event_item_value'] += ItemTable[y][AmountName];
						break;
				}
				break;
			case 23:
				UserIndexRecord['user_data']['crystal'] += ItemTable[y][AmountName];
				if (UserIndexRecord['user_data']['crystal'] > 3000000000) { UserIndexRecord['user_data']['crystal'] = 3000000000; }
				break;
			case 25:
				const CLB01ID = String(QuestID).slice(0, 5);
				const CLB01Item = ItemTable[y][IDName];
				const CLB01ItemType = parseInt(String(CLB01Item).slice(-1));
				switch(CLB01ItemType) {
					case 1: //tier 1
						UserSessionRecord['Event']['CLB01'][CLB01ID]['UserData']['user_clb_01_event_item_list'][0]['event_item_value'] += ItemTable[y][AmountName];
						break;
					case 2: //tier 2
						UserSessionRecord['Event']['CLB01'][CLB01ID]['UserData']['user_clb_01_event_item_list'][1]['event_item_value'] += ItemTable[y][AmountName];
						break;
					case 3: //Event point
						UserSessionRecord['Event']['CLB01'][CLB01ID]['UserData']['user_clb_01_event_item_list'][2]['event_item_value'] += ItemTable[y][AmountName];
						break;
				}
				break;
			case 26:
				if (UserIndexRecord['astral_item_list'][0] == undefined) { UserIndexRecord['astral_item_list'] = [{
					'astral_item_id': 10101,
					'quantity': ItemTable[y][AmountName]
					}]; }
				else {
					if ((UserIndexRecord['astral_item_list'][0]['quantity'] + ItemTable[y][AmountName]) > 300) { 
						const OverCount = (UserIndexRecord['astral_item_list'][0]['quantity'] + ItemTable[y][AmountName]) - 300;
						UserIndexRecord['astral_item_list'][0]['quantity'] = 300;
						EntityList['over_discard_entity_list'].push({
							'entity_type': 26,
							'entity_id': 10101,
							'entity_quantity': OverCount
						});
					}
					else { UserIndexRecord['astral_item_list'][0]['quantity'] += ItemTable[y][AmountName]; } }
				UpdateData['astral_item_list'] = UserIndexRecord['astral_item_list'];
				break;
			case 28:
				UserIndexRecord['user_data']['build_time_point'] += ItemTable[y][AmountName];
				if (UserIndexRecord['user_data']['build_time_point'] > 999) { UserIndexRecord['user_data']['build_time_point'] = 999; }
				break;
			case 33:
				UpdateData['gather_item_list'] = [];
				const GatherIndex = UserIndexRecord['gather_item_list'].findIndex(x => x.gather_item_id == ItemTable[y][IDName]);
				if (GatherIndex == -1) {
					const GatherItemData = {
						"gather_item_id": 10001,
						"quantity": ItemTable[y][AmountName],
						"quest_last_weekly_reset_time": Math.floor(Date.now() / 1000),
						"quest_take_weekly_quantity": ItemTable[y][AmountName]
					}
					UserIndexRecord['gather_item_list'].push(GatherItemData); 
					UpdateData['gather_item_list'].push(GatherItemData);
				}
				else {
					UserIndexRecord['gather_item_list'][GatherIndex]['quantity'] += ItemTable[y][AmountName];
					UserIndexRecord['gather_item_list'][GatherIndex]['quest_take_weekly_quantity'] += ItemTable[y][AmountName];
					UpdateData['gather_item_list'].push(UserIndexRecord['gather_item_list'][GatherIndex]);
				}
				break;
			case 34:
				const CombatID = String(QuestID).slice(0, 5);
				const CombatItem = ItemTable[y][IDName];
				const CombatItemType = parseInt(String(CombatItem).slice(-1));
				switch(CombatItemType) {
					case 1: //Event point
						UserSessionRecord['Event']['Combat'][CombatID]['UserData']['exchange_item_01'] += ItemTable[y][AmountName];
						break;
					case 2: //glory
						UserSessionRecord['Event']['Combat'][CombatID]['UserData']['event_point'] += ItemTable[y][AmountName];
						break;
					case 3: //stratagem
						UserSessionRecord['Event']['Combat'][CombatID]['UserData']['advent_item_01'] += ItemTable[y][AmountName];
						break;
					case 4: //battle chart
						UserSessionRecord['Event']['Combat'][CombatID]['UserData']['quest_unlock_item_01'] += ItemTable[y][AmountName];
						break;
					case 5: //war chronicle
						UserSessionRecord['Event']['Combat'][CombatID]['UserData']['story_unlock_item_01'] += ItemTable[y][AmountName];
						break;
				}
				break;
			case 37:
				const WeaponSkinIndex = UserIndexRecord['weapon_skin_list'].findIndex(x => x.weapon_skin_id == ItemTable[y][IDName]);
				if (WeaponSkinIndex == -1) {
					const SkinTemplate = {
						"weapon_skin_id": ItemTable[y][IDName],
						"is_new": 1,
						"gettime": Math.floor(Date.now() / 1000)
					}
					if (UpdateData['weapon_skin_list'] == undefined) { UpdateData['weapon_skin_list'] = []; }
					UpdateData['weapon_skin_list'].push(SkinTemplate);
					UserIndexRecord['weapon_skin_list'].push(SkinTemplate);
				}
				break;
			case 39:
				if (UpdateData['ability_crest_list'] == undefined) { UpdateData['ability_crest_list'] = []; }
				if (UserIndexRecord['ability_crest_list'].findIndex(x => x.ability_crest_id == ItemTable[y][IDName]) == -1) {
					const PrintData = WyrmprintMap.CreateWyrmprintFromGift(ItemTable[y][IDName]);
					UpdateData['ability_crest_list'].push(PrintData); UserIndexRecord['ability_crest_list'].push(PrintData);
					EntityList['new_entity_get_list'].push({ 'entity_type': 12, 'entity_id': ItemTable[y][IDName] }); }
				else {
					const PrintRarity = WyrmprintMap.GetWyrmprintInfo(ItemTable[y][IDName], "rarity");
					switch(PrintRarity) {
						case 3:
							UserIndexRecord['user_data']['dew_point'] += 300 * ItemTable[y][AmountName];
							EntityList['converted_entity_list'].push({
								'before_entity_type': ItemTable[y][TypeName],
								'before_entity_id': ItemTable[y][IDName],
								'before_entity_quantity': ItemTable[y][AmountName],
								'after_entity_type': 14,
								'after_entity_id': 0,
								'after_entity_quantity': 300 * ItemTable[y][AmountName]
							});
							break;
						case 4:
							UserIndexRecord['user_data']['dew_point'] += 1000 * ItemTable[y][AmountName];
							EntityList['converted_entity_list'].push({
								'before_entity_type': ItemTable[y][TypeName],
								'before_entity_id': ItemTable[y][IDName],
								'before_entity_quantity': ItemTable[y][AmountName],
								'after_entity_type': 14,
								'after_entity_id': 0,
								'after_entity_quantity': 1000 * ItemTable[y][AmountName]
							});
							break;
						case 5:
							UserIndexRecord['user_data']['dew_point'] += 3000 * ItemTable[y][AmountName];
							EntityList['converted_entity_list'].push({
								'before_entity_type': ItemTable[y][TypeName],
								'before_entity_id': ItemTable[y][IDName],
								'before_entity_quantity': ItemTable[y][AmountName],
								'after_entity_type': 14,
								'after_entity_id': 0,
								'after_entity_quantity': 3000 * ItemTable[y][AmountName]
							});
							break;
					}
				}
				break;
			case 42:
				switch(ItemTable[y][IDName]) {
					case 10001:
						UserSessionRecord['Kaleidoscape']['DmodeInfo']['dmode_point_1'] += ItemTable[y][AmountName];
						break;
					case 10002:
						UserSessionRecord['Kaleidoscape']['DmodeInfo']['dmode_point_2'] += ItemTable[y][AmountName];
						break;
				}
				UpdateData['dmode_info'] = UserSessionRecord['Kaleidoscape']['DmodeInfo'];
				break;
		}
	}
	UpdateData['user_data'] = UserIndexRecord['user_data'];
	return [UserSessionRecord, UserIndexRecord, UpdateData, EntityList];
}

function CharacterDataReturn(UserIndexRecord, Character_ID) {
	const CharacterData = UserIndexRecord.chara_list.find(x => x.chara_id === Character_ID);
	if (Character_ID == 0 || CharacterData == undefined) { return undefined; }
	var Template = {
		'viewer_id': UserIndexRecord['user_data']['viewer_id'],
		'chara_id': Character_ID,
		'rarity': CharacterData['rarity'],
		'exp': CharacterData['exp'],
		'is_new': CharacterData['is_new'],
		'limit_break_count': CharacterData['limit_break_count'],
		'status_plus_count': 0,
		'hp_plus_count': CharacterData['hp_plus_count'],
		'attack_plus_count': CharacterData['attack_plus_count'],
		'gettime': CharacterData['gettime'],
		'level': CharacterData['level'],
		'additional_max_level': CharacterData['additional_max_level'],
		'hp': CharacterData['hp'],
		'attack': CharacterData['attack'],
		'defence': 0,
		'skill_1_level': CharacterData['skill_1_level'],
		'skill_2_level': CharacterData['skill_2_level'],
		'ability_1_level': CharacterData['ability_1_level'],
		'ability_2_level': CharacterData['ability_2_level'],
		'ability_3_level': CharacterData['ability_3_level'],
		'ex_ability_level': CharacterData['ex_ability_level'],
		'ex_ability_2_level': CharacterData['ex_ability_2_level'],
		'burst_attack_level': CharacterData['burst_attack_level'],
		'combo_buildup_count': CharacterData['combo_buildup_count'],
		'is_temporary': CharacterData['is_temporary'],
		'is_unlock_edit_skill': CharacterData['is_unlock_edit_skill']
	}
	return Template;
}
function WyrmprintDataReturn(UserIndexRecord, WyrmprintID) {
	const WyrmprintData = UserIndexRecord.ability_crest_list.find(x => x.ability_crest_id == WyrmprintID);
	let AbilityLevel = 1;
	if (WyrmprintData == undefined) { return {}; }
	if (WyrmprintData['limit_break_count'] >= 2 && WyrmprintData['limit_break_count'] < 4) { AbilityLevel = 2; }
	if (WyrmprintData['limit_break_count'] == 4) { AbilityLevel = 3; }
	var Template = {
		'ability_crest_id': WyrmprintData['ability_crest_id'],
		'buildup_count': WyrmprintData['buildup_count'],
		'equipable_count': WyrmprintData['equipable_count'],
		'limit_break_count': WyrmprintData['limit_break_count'],
		'hp_plus_count': WyrmprintData['hp_plus_count'],
		'attack_plus_count': WyrmprintData['attack_plus_count'],
		'ability_1_level': AbilityLevel,
		'ability_2_level': AbilityLevel
	}
	return Template;
}
function CoOpWyrmprintDataReturn(UserIndexRecord, WyrmprintID) {
	const WyrmprintData = UserIndexRecord.ability_crest_list.find(x => x.ability_crest_id == WyrmprintID);
	let AbilityLevel = 1;
	if (WyrmprintData == undefined) {
		var Template = {
			'ability_crest_id': 0,
			'buildup_count': 0,
			'equipable_count': 0,
			'limit_break_count': 0,
			'hp_plus_count': 0,
			'attack_plus_count': 0,
			'ability_1_level': 0,
			'ability_2_level': 0
		}
		return Template;
	}
	if (WyrmprintData['limit_break_count'] >= 2 && WyrmprintData['limit_break_count'] < 4) { AbilityLevel = 2; }
	if (WyrmprintData['limit_break_count'] == 4) { AbilityLevel = 3; }
	var Template = {
		'ability_crest_id': WyrmprintData['ability_crest_id'],
		'buildup_count': WyrmprintData['buildup_count'],
		'equipable_count': WyrmprintData['equipable_count'],
		'limit_break_count': WyrmprintData['limit_break_count'],
		'hp_plus_count': WyrmprintData['hp_plus_count'],
		'attack_plus_count': WyrmprintData['attack_plus_count'],
		'ability_1_level': AbilityLevel,
		'ability_2_level': AbilityLevel
	}
	return Template;
}
function WeaponDataReturn(UserIndexRecord, CharacterID, WeaponID) {
	if (CharacterID == 0) { return {}; }
	if (WeaponID == 0) {
		CharacterWeapon = CharacterMap.GetCharacterInfo(CharacterID, "weapon_type");
		WeaponID = parseInt(String("30" + CharacterWeapon + "19901"));
	}
	const WeaponData = UserIndexRecord.weapon_body_list.find(x => x.weapon_body_id == WeaponID);
	if (WeaponData == undefined) { return {}; }
	let AbilityLevel = 1;
	if (WeaponData['limit_break_count'] >= 2 && WeaponData['limit_break_count'] < 5) { AbilityLevel = 1; }
	if (WeaponData['limit_break_count'] >= 5) { AbilityLevel = 2; }
	var Template = {
		'weapon_body_id': WeaponID,
		'buildup_count': WeaponData['buildup_count'],
		'limit_break_count': WeaponData['limit_break_count'],
		'limit_over_count': WeaponData['limit_over_count'],
		'equipable_count': WeaponData['equipable_count'],
		'additional_crest_slot_type_1_count': WeaponData['additional_crest_slot_type_1_count'],
		'additional_crest_slot_type_2_count': WeaponData['additional_crest_slot_type_2_count'],
		'additional_crest_slot_type_3_count': WeaponData['additional_crest_slot_type_3_count'],
		'addition_effect_count': WeaponData['additional_effect_count'],
		'skill_no': 1,
		'skill_level': AbilityLevel,
		'ability_1_level': AbilityLevel,
		'ability_2_level': AbilityLevel
	}
	return Template
}
function CoOpWeaponDataReturn(UserIndexRecord, CharacterID, WeaponID) {
	if (CharacterID == 0) {
		const Template = {
			'weapon_body_id': 0,
			'buildup_count': 0,
			'limit_break_count': 0,
			'limit_over_count': 0,
			'equipable_count': 0,
			'additional_crest_slot_type_1_count': 0,
			'additional_crest_slot_type_2_count': 0,
			'additional_crest_slot_type_3_count': 0,
			'addition_effect_count': 0,
			'skill_no': 0,
			'skill_level': 0,
			'ability_1_level': 0,
			'ability_2_level': 0
		}
	}
	if (WeaponID == 0) {
		CharacterWeapon = CharacterMap.GetCharacterInfo(CharacterID, "weapon_type");
		WeaponID = parseInt(String("30" + CharacterWeapon + "19901"));
	}
	const WeaponData = UserIndexRecord.weapon_body_list.find(x => x.weapon_body_id == WeaponID);
	if (WeaponData == undefined) {
		const DefaultTemplate = {
			'weapon_body_id': WeaponID,
			'buildup_count': 0,
			'limit_break_count': 0,
			'limit_over_count': 0,
			'equipable_count': 4,
			'additional_crest_slot_type_1_count': 0,
			'additional_crest_slot_type_2_count': 0,
			'additional_crest_slot_type_3_count': 0,
			'addition_effect_count': 0,
			'skill_no': 1,
			'skill_level': 0,
			'ability_1_level': 0,
			'ability_2_level': 0
		}
		return DefaultTemplate; 
	}
	let AbilityLevel = 1;
	if (WeaponData['limit_break_count'] >= 2 && WeaponData['limit_break_count'] < 5) { AbilityLevel = 1; }
	if (WeaponData['limit_break_count'] >= 5) { AbilityLevel = 2; }
	const Template = {
		'weapon_body_id': WeaponID,
		'buildup_count': WeaponData['buildup_count'],
		'limit_break_count': WeaponData['limit_break_count'],
		'limit_over_count': WeaponData['limit_over_count'],
		'equipable_count': WeaponData['equipable_count'],
		'additional_crest_slot_type_1_count': WeaponData['additional_crest_slot_type_1_count'],
		'additional_crest_slot_type_2_count': WeaponData['additional_crest_slot_type_2_count'],
		'additional_crest_slot_type_3_count': WeaponData['additional_crest_slot_type_3_count'],
		'addition_effect_count': WeaponData['additional_effect_count'],
		'skill_no': 1,
		'skill_level': AbilityLevel,
		'ability_1_level': AbilityLevel,
		'ability_2_level': AbilityLevel
	}
	return Template
}

const AstralPassives = [
	1010108, 1020108, 1030108, 1040108, 1050108, 1060108, 1070108, 1080108, 1090108,
	1010210, 1020210, 1030210, 1040210, 1050210, 1060210, 1070210, 1080210, 1090210,
	1010309, 1020309, 1030309, 1040309, 1050309, 1060309, 1070309, 1080309, 1090309,
	1010408, 1020408, 1030408, 1040408, 1050408, 1060408, 1070408, 1080408, 1090408,
	1010507, 1020507, 1030507, 1040507, 1050507, 1060507, 1070507, 1080507, 1090507
]
const HighDragonPassives = [
	1010109, 1020109, 1030109, 1040109, 1050109, 1060109, 1070109, 1080109, 1090109,
	1010211, 1020211, 1030211, 1040211, 1050211, 1060211, 1070211, 1080211, 1090211,
	1010310, 1020310, 1030310, 1040310, 1050310, 1060310, 1070310, 1080310, 1090310,
	1010409, 1020409, 1030409, 1040409, 1050409, 1060409, 1070409, 1080409, 1090409,
	1010508, 1020508, 1030508, 1040508, 1050508, 1060508, 1070508, 1080508, 1090508
]
function PassiveDataReturn(UserIndexRecord, CharacterID, QuestID) {
	if (CharacterID == 0) { return []; }
	const ElementType = CharacterMap.GetCharacterInfo(CharacterID, 'elemental_type');
	const WeaponType = CharacterMap.GetCharacterInfo(CharacterID, 'weapon_type');
	const PassiveList = UserIndexRecord['weapon_passive_ability_list'];
	const CharacterString = parseInt("10" + WeaponType + "0" + ElementType);
	let Template = [];
	for (let x in PassiveList) {
		const CurrentID = PassiveList[x]['weapon_passive_ability_id'];
		if (AstralPassives.includes(CurrentID) && String(QuestID).slice(0, 3) != 217) { continue; }
		if (HighDragonPassives.includes(CurrentID) && String(QuestID).slice(0, 3) != 210) { continue; }
		const MatchID = parseInt(String(CurrentID).slice(0, String(CurrentID).length - 2));
		if (MatchID == CharacterString) {
			Template.push(PassiveList[x]);
		}
	}
	return Template;
}
function CoOpPassiveDataReturn(UserIndexRecord, CharacterID, QuestID) {
	if (CharacterID == 0) { return []; }
	const ElementType = CharacterMap.GetCharacterInfo(CharacterID, 'elemental_type');
	const WeaponType = CharacterMap.GetCharacterInfo(CharacterID, 'weapon_type');
	const PassiveList = UserIndexRecord['weapon_passive_ability_list'];
	const CharacterString = parseInt("10" + WeaponType + "0" + ElementType);
	let Template = [];
	for (let x in PassiveList) {
		const CurrentID = PassiveList[x]['weapon_passive_ability_id'];
		if (AstralPassives.includes(CurrentID) && String(QuestID).slice(0, 3) != 217) { continue; }
		if (HighDragonPassives.includes(CurrentID) && String(QuestID).slice(0, 3) != 210) { continue; }
		const MatchID = parseInt(String(CurrentID).slice(0, String(CurrentID).length - 2));
		if (MatchID == CharacterString) {
			Template.push(PassiveList[x]['weapon_passive_ability_id']);
		}
	}
	return Template;
}
function CoOpDragonDataReturn(UserIndexRecord, DragonKeyID) {
	if (DragonKeyID == 0) {
		const DefaultTemplate = {
			"dragon_id": 0,
			"level": 0,
			"hp_plus_count": 0,
			"attack_plus_count": 0,
			"exp": 0,
			"is_lock": 0,
			"is_new": 0,
			"get_time": 0,
			"skill_1_level": 0,
			"skill_2_level": 0,
			"ability_1_level": 0,
			"ability_2_level": 0,
			"limit_break_count": 0
		}
		return DefaultTemplate;
	}
	let DragonData = UserIndexRecord.dragon_list.find(x => x.dragon_key_id === DragonKeyID);
	if (DragonData['skill_2_level'] == undefined) { DragonData['skill_2_level'] = 0; }
	return DragonData;
}
function CoOpTalismanDataReturn(UserIndexRecord, TalismanID) {
	const TalismanData = UserIndexRecord.talisman_list.find(x => x.talisman_key_id === TalismanID);
	if (TalismanData == undefined) {
		DefaultTemplate = {
			"talisman_id": 0,
			"is_lock": 0,
			"is_new": 0,
			"talisman_ability_id_1": 0,
			"talisman_ability_id_2": 0,
			"talisman_ability_id_3": 0,
			"additional_hp": 0,
			"additional_attack": 0,
		}
		return DefaultTemplate;
	}
	return TalismanData;
}
function CoOpBonusCalc(UserIndexRecord, CharacterID, DragonID) {
	if (CharacterID == 0 || CharacterID == undefined) {
		return {
			'HpFort': 0,
			'AtkFort': 0,
			'HpAlbum': 0,
			'AtkAlbum': 0,
			'draHpFort': 0,
			'draAtkFort': 0,
			'draDmgFort': 0,
			'draHpAlbum': 0,
			'draAtkAlbum': 0
		}
	}
	const CharacterWeapon = CharacterMap.GetCharacterInfo(CharacterID, "weapon_type");
	const CharacterElement = CharacterMap.GetCharacterInfo(CharacterID, "elemental_type");
	const WeaponIndex1 = UserIndexRecord['fort_bonus_list']['param_bonus'].findIndex(x => x.weapon_type == CharacterWeapon);
	const WeaponIndex2 = UserIndexRecord['fort_bonus_list']['param_bonus_by_weapon'].findIndex(x => x.weapon_type == CharacterWeapon);
	const ElementIndex1 = UserIndexRecord['fort_bonus_list']['element_bonus'].findIndex(x => x.elemental_type == CharacterElement);
	const ElementIndex2 = UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'].findIndex(x => x.elemental_type == CharacterElement);
	const FortHPCombined = UserIndexRecord['fort_bonus_list']['param_bonus'][WeaponIndex1]['hp'] +
						   UserIndexRecord['fort_bonus_list']['param_bonus'][WeaponIndex2]['hp'] +
						   UserIndexRecord['fort_bonus_list']['element_bonus'][ElementIndex1]['hp'];
	const FortAtkCombined = UserIndexRecord['fort_bonus_list']['param_bonus'][WeaponIndex1]['attack'] +
							UserIndexRecord['fort_bonus_list']['param_bonus'][WeaponIndex2]['attack'] +
							UserIndexRecord['fort_bonus_list']['element_bonus'][ElementIndex1]['attack'];
	if (DragonID == 0 || DragonID == undefined) {
		return {
			'HpFort': FortHPCombined,
			'AtkFort': FortAtkCombined,
			'HpAlbum': UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][ElementIndex2]['hp'],
			'AtkAlbum': UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][ElementIndex2]['attack'],
			'draHpFort': 0,
			'draAtkFort': 0,
			'draDmgFort': 0,
			'draHpAlbum': 0,
			'draAtkAlbum': 0
		}
	}
	const DragonElement = DragonMap.GetDragonInfo(DragonID, "element");
	const DragonIndex1 = UserIndexRecord['fort_bonus_list']['dragon_bonus'].findIndex(x => x.elemental_type == DragonElement);
	const DragonIndex2 = UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'].findIndex(x => x.elemental_type == DragonElement);

	const BonusData = {
		'HpFort': FortHPCombined / 100,
		'AtkFort': FortAtkCombined / 100,
		'HpAlbum': UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][ElementIndex2]['hp'] / 100,
		'AtkAlbum': UserIndexRecord['fort_bonus_list']['chara_bonus_by_album'][ElementIndex2]['attack'] / 100,
		'draHpFort': UserIndexRecord['fort_bonus_list']['dragon_bonus'][DragonIndex1]['hp'] / 100,
		'draAtkFort': UserIndexRecord['fort_bonus_list']['dragon_bonus'][DragonIndex1]['attack'] / 100,
		'draDmgFort': UserIndexRecord['fort_bonus_list']['dragon_bonus'][DragonIndex1]['dragon_bonus'] / 100,
		'draHpAlbum': UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'][DragonIndex2]['hp'] / 100,
		'draAtkAlbum': UserIndexRecord['fort_bonus_list']['dragon_bonus_by_album'][DragonIndex2]['attack'] / 100
	}
	return BonusData;
}

function PopulateUnitData(PartyNo_List, ViewerID, UserIndexRecord, UserSessionRecord, QuestID) {
	let PartyUnitList = [];
	let PartyListSettings = [];
	let EventBoost = [];
	let EventPassive = [];
	for (let i in PartyNo_List) {
		let CompletedCharacters = 0;
		while (CompletedCharacters <= 3) {
			const Character_ID = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['chara_id']
			const Dragon_Key_ID = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_dragon_key_id']
			const Weapon_Body_ID = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_weapon_body_id']
			const Weapon_Skin_ID = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_weapon_skin_id']
			const Wyrmprint_Slot_one = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_crest_slot_type_1_crest_id_1']
			const Wyrmprint_Slot_two = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_crest_slot_type_1_crest_id_2']
			const Wyrmprint_Slot_three = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_crest_slot_type_1_crest_id_3']
			const Wyrmprint_Slot_four = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_crest_slot_type_2_crest_id_1']
			const Wyrmprint_Slot_five = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_crest_slot_type_2_crest_id_2']
			const Wyrmprint_Slot_six = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_crest_slot_type_3_crest_id_1']
			const Wyrmprint_Slot_seven = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_crest_slot_type_3_crest_id_2']
			const Talisman_ID = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_talisman_key_id']
			const Shared_Skill_one = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['edit_skill_1_chara_id']
			const Shared_Skill_two = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['edit_skill_2_chara_id']

			let Crest_Slot_Type_One = []
			let Crest_Slot_Type_Two = []
			let Crest_Slot_Type_Thr = []
			
			Crest_Slot_Type_One[0] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_one);
			Crest_Slot_Type_One[1] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_two);
			Crest_Slot_Type_One[2] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_three);
			Crest_Slot_Type_Two[0] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_four);
			Crest_Slot_Type_Two[1] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_five);
			Crest_Slot_Type_Thr[0] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_six);
			Crest_Slot_Type_Thr[1] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_seven);

			let Skill_Level_One = 0; 
			let SharedSkill_One_Data = {}
			let Skill_Level_Two = 0;
			let SharedSkill_Two_Data = {}
			if (Shared_Skill_one != 0) {
				const Character_One = UserIndexRecord.chara_list.findIndex(x => x.chara_id === Shared_Skill_one)
				if (Character_One == -1) { Skill_Level_One = 1; }
				else { Skill_Level_One = UserIndexRecord['chara_list'][Character_One][IsSkillOneOrTwo(Shared_Skill_one)] }
				SharedSkill_One_Data = {
					'chara_id': Shared_Skill_one,
					'edit_skill_level': Skill_Level_One
				}
			}
			else { SharedSkill_One_Data = null; }
			if (Shared_Skill_two != 0) {
				const Character_Two = UserIndexRecord.chara_list.findIndex(x => x.chara_id === Shared_Skill_two)
				if (Character_Two == -1) { Skill_Level_Two = 1; }
				else { Skill_Level_Two = UserIndexRecord['chara_list'][Character_Two][IsSkillOneOrTwo(Shared_Skill_two)] }
				SharedSkill_Two_Data = {
					'chara_id': Shared_Skill_two,
					'edit_skill_level': Skill_Level_Two
				}
			}
			const DragonIndex = UserIndexRecord.dragon_list.findIndex(x => x.dragon_key_id === Dragon_Key_ID)
			let DragonBond = 0;
			if (DragonIndex != -1) {
				const DragonID = UserIndexRecord['dragon_list'][DragonIndex]['dragon_id'];
				if (DragonID == 20050522) { DragonBond = 30; }
				else { const DragonBondIndex = UserIndexRecord.dragon_reliability_list.findIndex(x => x.dragon_id === DragonID);
					DragonBond = UserIndexRecord['dragon_reliability_list'][DragonBondIndex]['reliability_level']; }
			}

			// SANITIZE DATA.
			let CharacterData = CharacterDataReturn(UserIndexRecord, Character_ID);
			let WeaponSkinData = UserIndexRecord.weapon_skin_list.find(x => x.weapon_skin_id === Weapon_Skin_ID);
			let DragonData = UserIndexRecord.dragon_list.find(x => x.dragon_key_id === Dragon_Key_ID);
			let TalismanData = UserIndexRecord.talisman_list.find(x => x.talisman_key_id === Talisman_ID);
			let PassiveData = PassiveDataReturn(UserIndexRecord, Character_ID, QuestID);
			if (CharacterData == undefined) { CharacterData = {}; } if (WeaponSkinData == undefined) { WeaponSkinData = {}; }
			if (DragonData == undefined) { DragonData = {}; } if (TalismanData == undefined) { TalismanData = {}; }
			if (Crest_Slot_Type_One[0] == undefined) { Crest_Slot_Type_One[0] = {}; } if (Crest_Slot_Type_One[1] == undefined) { Crest_Slot_Type_One[1] = {}; } if (Crest_Slot_Type_One[2] == undefined) { Crest_Slot_Type_One[2] = {}; }
			if (Crest_Slot_Type_Two[0] == undefined) { Crest_Slot_Type_Two[0] = {}; } if (Crest_Slot_Type_Two[1] == undefined) { Crest_Slot_Type_Two[1] = {}; }
			if (Crest_Slot_Type_Thr[0] == undefined) { Crest_Slot_Type_Thr[0] = {}; } if (Crest_Slot_Type_Thr[1] == undefined) { Crest_Slot_Type_Thr[1] = {}; }

			if (String(QuestID).slice(0,3) == "204" && EventMap.EventInfoMap[String(QuestID).slice(0,5)]['event_character'] == Character_ID) { 
				CharacterData['attack'] = CharacterData['attack'] + Math.floor(CharacterData['attack'] * 1.30);
				CharacterData['defence'] = 30;
			}

			let FinalCharaData = {
				'position': CompletedCharacters + 1,
				'chara_data': CharacterData,
				'dragon_data': DragonData,
				'weapon_skin_data': WeaponSkinData,
				'weapon_body_data': WeaponDataReturn(UserIndexRecord, Character_ID, Weapon_Body_ID),
				'crest_slot_type_1_crest_list': Crest_Slot_Type_One,
				'crest_slot_type_2_crest_list': Crest_Slot_Type_Two,
				'crest_slot_type_3_crest_list': Crest_Slot_Type_Thr,
				'talisman_data': TalismanData,
				'edit_skill_1_chara_data': SharedSkill_One_Data,
				'edit_skill_2_chara_data': SharedSkill_Two_Data,
				'dragon_reliability_level': DragonBond,
				'game_weapon_passive_ability_list': PassiveData
			}
			if (PartyNo_List[i] != undefined) { const PositionCalc = i * 4; FinalCharaData['position'] += PositionCalc; PartyUnitList.push(FinalCharaData); }
			CompletedCharacters++;
		}
		if (PartyNo_List[i] != undefined) {
			let y = 0; while (y < UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'].length) {
				PartyListSettings.push(UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][y]); y++; } }
	}

	if (String(QuestID).slice(0,3) == 204) {
		const EventID = String(QuestID).slice(0,5);
		if (UserSessionRecord['Event']['Raid'][EventID]['Passive']['event_id'] != undefined) {
			EventPassive = UserSessionRecord['Event']['Raid'][EventID]['Passive']['event_passive_grow_list'];
		}
	}
	
	const QuestUnitData = {
		'party_unit_list': PartyUnitList,
		'fort_bonus_list': UserIndexRecord['fort_bonus_list'],
		'event_boost': EventBoost,
		'event_passive_grow_list': EventPassive
	}

	return [QuestUnitData, PartyListSettings];
}

function PopulateSupportData(SupportSessionRecord, SupportIndexRecord) {
	let Crest_Slot_Type_One = [];
	let Crest_Slot_Type_Two = [];
	let Crest_Slot_Type_Thr = [];
	Crest_Slot_Type_One[0] = WyrmprintDataReturn(SupportIndexRecord, SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_1_crest_id_1']);
	Crest_Slot_Type_One[1] = WyrmprintDataReturn(SupportIndexRecord, SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_1_crest_id_2']);
	Crest_Slot_Type_One[2] = WyrmprintDataReturn(SupportIndexRecord, SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_1_crest_id_3']);
	Crest_Slot_Type_Two[0] = WyrmprintDataReturn(SupportIndexRecord, SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_2_crest_id_1']);
	Crest_Slot_Type_Two[1] = WyrmprintDataReturn(SupportIndexRecord, SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_2_crest_id_2']);
	Crest_Slot_Type_Thr[0] = WyrmprintDataReturn(SupportIndexRecord, SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_3_crest_id_1']);
	Crest_Slot_Type_Thr[1] = WyrmprintDataReturn(SupportIndexRecord, SupportSessionRecord['SupportCharacter']['equip_crest_slot_type_3_crest_id_2']);
	const DragonIndex = SupportIndexRecord.dragon_list.findIndex(x => x.dragon_key_id === SupportSessionRecord['SupportCharacter']['equip_dragon_key_id'])
	let DragonBond = 0;
	if (DragonIndex != -1) {
		const DragonID = SupportIndexRecord['dragon_list'][DragonIndex]['dragon_id']
		if (DragonID == 20050522) { DragonBond = 30; }
		else { const DragonBondIndex = SupportIndexRecord.dragon_reliability_list.findIndex(x => x.dragon_id === DragonID)
			DragonBond = SupportIndexRecord['dragon_reliability_list'][DragonBondIndex]['reliability_level'] }
	}
	let CharacterData = CharacterDataReturn(SupportIndexRecord, SupportSessionRecord['SupportCharacter']['chara_id']);
	let DragonData = SupportIndexRecord.dragon_list.find(x => x.dragon_key_id === SupportSessionRecord['SupportCharacter']['equip_dragon_key_id']);
	let TalismanData = SupportIndexRecord.dragon_list.find(x => x.talisman_key_id === SupportSessionRecord['SupportCharacter']['equip_talisman_key_id']);
	if (DragonData == undefined) { DragonData = {}; } if (TalismanData == undefined) { TalismanData = {}; }
	if (Crest_Slot_Type_One[0] == undefined) { Crest_Slot_Type_One[0] = {}; } if (Crest_Slot_Type_One[1] == undefined) { Crest_Slot_Type_One[1] = {}; } if (Crest_Slot_Type_One[2] == undefined) { Crest_Slot_Type_One[2] = {}; }
	if (Crest_Slot_Type_Two[0] == undefined) { Crest_Slot_Type_Two[0] = {}; } if (Crest_Slot_Type_Two[1] == undefined) { Crest_Slot_Type_Two[1] = {}; }
	if (Crest_Slot_Type_Thr[0] == undefined) { Crest_Slot_Type_Thr[0] = {}; } if (Crest_Slot_Type_Thr[1] == undefined) { Crest_Slot_Type_Thr[1] = {}; }
	const FinalSupportData = {
		'viewer_id': SupportIndexRecord['user_data']['viewer_id'],
		'name': SupportIndexRecord['user_data']['name'],
		'is_friend': 1,
		'level': SupportIndexRecord['user_data']['level'],
		'last_login_date': SupportIndexRecord['user_data']['last_login_time'],
		'emblem_id': SupportIndexRecord['user_data']['emblem_id'],
		'max_party_power': SupportIndexRecord['party_power_data']['max_party_power'],
		'chara_data': CharacterData,
		'dragon_data': DragonData,
		'weapon_body_data': WeaponDataReturn(SupportIndexRecord, SupportSessionRecord['SupportCharacter']['chara_id'], SupportSessionRecord['SupportCharacter']['equip_weapon_body_id']),
		'crest_slot_type_1_crest_list': Crest_Slot_Type_One,
		'crest_slot_type_2_crest_list': Crest_Slot_Type_Two,
		'crest_slot_type_3_crest_list': Crest_Slot_Type_Thr,
		'talisman_data': TalismanData
	}
	const FinalSupportDataRecord = [{
		'viewer_id': SupportIndexRecord['user_data']['viewer_id'],
		'name': SupportIndexRecord['user_data']['name'],
		'is_friend': 1,
		'level': SupportIndexRecord['user_data']['level'],
		'last_login_date': SupportIndexRecord['user_data']['last_login_time'],
		'emblem_id': SupportIndexRecord['user_data']['emblem_id'],
		'max_party_power': SupportIndexRecord['party_power_data']['max_party_power'],
		'support_chara': CharacterData,
		'support_dragon': DragonData,
		'support_weapon_body': WeaponDataReturn(SupportIndexRecord, SupportSessionRecord['SupportCharacter']['equip_weapon_body_id']),
		'support_crest_slot_type_1_list': Crest_Slot_Type_One,
		'support_crest_slot_type_2_list': Crest_Slot_Type_Two,
		'support_crest_slot_type_3_list': Crest_Slot_Type_Thr,
		'support_talisman': TalismanData,
		'guild': { 'guild_id': 0 }
	}]
	return [FinalSupportData, FinalSupportDataRecord];
}

function PopulateAssignedUnitData(PartySettings, ViewerID, UserIndexRecord, UserSessionRecord, QuestID) {
	let PartyUnitList = [];
	let PartyListSettings = [];
	let EventBoost = [];
	let EventPassive = [];
	for (let CompletedCharacters in PartySettings) {
		const Character_ID = PartySettings[CompletedCharacters]['chara_id']
		const Dragon_Key_ID = PartySettings[CompletedCharacters]['equip_dragon_key_id']
		const Weapon_Body_ID = PartySettings[CompletedCharacters]['equip_weapon_body_id']
		const Weapon_Skin_ID = PartySettings[CompletedCharacters]['equip_weapon_skin_id']
		const Wyrmprint_Slot_one = PartySettings[CompletedCharacters]['equip_crest_slot_type_1_crest_id_1']
		const Wyrmprint_Slot_two = PartySettings[CompletedCharacters]['equip_crest_slot_type_1_crest_id_2']
		const Wyrmprint_Slot_three = PartySettings[CompletedCharacters]['equip_crest_slot_type_1_crest_id_3']
		const Wyrmprint_Slot_four = PartySettings[CompletedCharacters]['equip_crest_slot_type_2_crest_id_1']
		const Wyrmprint_Slot_five = PartySettings[CompletedCharacters]['equip_crest_slot_type_2_crest_id_2']
		const Wyrmprint_Slot_six = PartySettings[CompletedCharacters]['equip_crest_slot_type_3_crest_id_1']
		const Wyrmprint_Slot_seven = PartySettings[CompletedCharacters]['equip_crest_slot_type_3_crest_id_2']
		const Talisman_ID = PartySettings[CompletedCharacters]['equip_talisman_key_id']
		const Shared_Skill_one = PartySettings[CompletedCharacters]['edit_skill_1_chara_id']
		const Shared_Skill_two = PartySettings[CompletedCharacters]['edit_skill_2_chara_id']

		let Crest_Slot_Type_One = []
		let Crest_Slot_Type_Two = []
		let Crest_Slot_Type_Thr = []
			
		Crest_Slot_Type_One[0] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_one);
		Crest_Slot_Type_One[1] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_two);
		Crest_Slot_Type_One[2] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_three);
		Crest_Slot_Type_Two[0] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_four);
		Crest_Slot_Type_Two[1] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_five);
		Crest_Slot_Type_Thr[0] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_six);
		Crest_Slot_Type_Thr[1] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_seven);

		let Skill_Level_One = 0; 
		let SharedSkill_One_Data = {}
		let Skill_Level_Two = 0;
		let SharedSkill_Two_Data = {}
		if (Shared_Skill_one != 0) {
			const Character_One = UserIndexRecord.chara_list.findIndex(x => x.chara_id === Shared_Skill_one)
			if (Character_One == -1) { Skill_Level_One = 1; }
			else { Skill_Level_One = UserIndexRecord['chara_list'][Character_One][IsSkillOneOrTwo(Shared_Skill_one)] }
			SharedSkill_One_Data = {
				'chara_id': Shared_Skill_one,
				'edit_skill_level': Skill_Level_One
			}
		}
		else { SharedSkill_One_Data = null; }
		if (Shared_Skill_two != 0) {
			const Character_Two = UserIndexRecord.chara_list.findIndex(x => x.chara_id === Shared_Skill_two)
			if (Character_Two == -1) { Skill_Level_Two = 1; }
			else { Skill_Level_Two = UserIndexRecord['chara_list'][Character_Two][IsSkillOneOrTwo(Shared_Skill_two)] }
			SharedSkill_Two_Data = {
				'chara_id': Shared_Skill_two,
				'edit_skill_level': Skill_Level_Two
			}
		}
		const DragonIndex = UserIndexRecord.dragon_list.findIndex(x => x.dragon_key_id === Dragon_Key_ID)
		let DragonBond = 0;
		if (DragonIndex != -1) {
			const DragonID = UserIndexRecord['dragon_list'][DragonIndex]['dragon_id']
			if (DragonID == 20050522) { DragonBond = 30; }
			else { const DragonBondIndex = UserIndexRecord.dragon_reliability_list.findIndex(x => x.dragon_id === DragonID)
				DragonBond = UserIndexRecord['dragon_reliability_list'][DragonBondIndex]['reliability_level'] }
		}

		// SANITIZE DATA.
		let CharacterData = CharacterDataReturn(UserIndexRecord, Character_ID);
		let WeaponSkinData = UserIndexRecord.weapon_skin_list.find(x => x.weapon_skin_id === Weapon_Skin_ID);
		let DragonData = UserIndexRecord.dragon_list.find(x => x.dragon_key_id === Dragon_Key_ID);
		let TalismanData = UserIndexRecord.talisman_list.find(x => x.talisman_key_id === Talisman_ID);
		if (CharacterData == undefined) { CharacterData = {}; } if (WeaponSkinData == undefined) { WeaponSkinData = {}; }
		if (DragonData == undefined) { DragonData = {}; } if (TalismanData == undefined) { TalismanData = {}; }
		if (Crest_Slot_Type_One[0] == undefined) { Crest_Slot_Type_One[0] = {}; } if (Crest_Slot_Type_One[1] == undefined) { Crest_Slot_Type_One[1] = {}; } if (Crest_Slot_Type_One[2] == undefined) { Crest_Slot_Type_One[2] = {}; }
		if (Crest_Slot_Type_Two[0] == undefined) { Crest_Slot_Type_Two[0] = {}; } if (Crest_Slot_Type_Two[1] == undefined) { Crest_Slot_Type_Two[1] = {}; }
		if (Crest_Slot_Type_Thr[0] == undefined) { Crest_Slot_Type_Thr[0] = {}; } if (Crest_Slot_Type_Thr[1] == undefined) { Crest_Slot_Type_Thr[1] = {}; }

		const FinalCharaData = {
			'position': parseInt(CompletedCharacters) + 1,
			'chara_data': CharacterData,
			'dragon_data': DragonData,
			'weapon_skin_data': WeaponSkinData,
			'weapon_body_data': WeaponDataReturn(UserIndexRecord, Character_ID, Weapon_Body_ID),
			'crest_slot_type_1_crest_list': Crest_Slot_Type_One,
			'crest_slot_type_2_crest_list': Crest_Slot_Type_Two,
			'crest_slot_type_3_crest_list': Crest_Slot_Type_Thr,
			'talisman_data': TalismanData,
			'edit_skill_1_chara_data': SharedSkill_One_Data,
			'edit_skill_2_chara_data': SharedSkill_Two_Data,
			'dragon_reliability_level': DragonBond,
			'game_weapon_passive_ability_list': []
		}
		PartyUnitList.push(FinalCharaData);
	}	

	if (String(QuestID).slice(0,3) == 204) {
		if (UserSessionRecord['Event']['Raid'][String(QuestID).slice(0,5)]['Passive'][0] != undefined) {
			EventPassive = UserSessionRecord['Event']['Raid'][String(QuestID).slice(0,5)]['Passive']['event_passive_grow_list'];
		}
	}
	const QuestUnitData = {
		'party_unit_list': PartyUnitList,
		'fort_bonus_list': UserIndexRecord['fort_bonus_list'],
		'event_boost': EventBoost,
		'event_passive_grow_list': EventPassive
	}

	return [QuestUnitData, PartySettings];
}

function PopulateCoOpUnitData(PartyNo_List, ViewerID, UserIndexRecord, UserSessionRecord) {
	let PartyUnitList = [];
	const QuestID = UserSessionRecord['DungeonRecord']['LastQuestID'];
	for (let i in PartyNo_List) {
		let CurrentPartyList = [];
		let CompletedCharacters = 0;
		while (CompletedCharacters <= 3) {
			const Character_ID = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['chara_id']
			if (Character_ID != 0) {
				const Dragon_Key_ID = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_dragon_key_id']
				const Weapon_Body_ID = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_weapon_body_id']
				const Weapon_Skin_ID = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_weapon_skin_id']
				const Wyrmprint_Slot_one = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_crest_slot_type_1_crest_id_1']
				const Wyrmprint_Slot_two = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_crest_slot_type_1_crest_id_2']
				const Wyrmprint_Slot_three = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_crest_slot_type_1_crest_id_3']
				const Wyrmprint_Slot_four = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_crest_slot_type_2_crest_id_1']
				const Wyrmprint_Slot_five = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_crest_slot_type_2_crest_id_2']
				const Wyrmprint_Slot_six = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_crest_slot_type_3_crest_id_1']
				const Wyrmprint_Slot_seven = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_crest_slot_type_3_crest_id_2']
				const Talisman_ID = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['equip_talisman_key_id']
				const Shared_Skill_one = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['edit_skill_1_chara_id']
				const Shared_Skill_two = UserIndexRecord['party_list'][PartyNo_List[i] - 1]['party_setting_list'][CompletedCharacters]['edit_skill_2_chara_id']
				let Crest_Slot_Type_One = []
				let Crest_Slot_Type_Two = []
				let Crest_Slot_Type_Thr = []
				
				Crest_Slot_Type_One[0] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_one);
				Crest_Slot_Type_One[1] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_two);
				Crest_Slot_Type_One[2] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_three);
				Crest_Slot_Type_Two[0] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_four);
				Crest_Slot_Type_Two[1] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_five);
				Crest_Slot_Type_Thr[0] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_six);
				Crest_Slot_Type_Thr[1] = WyrmprintDataReturn(UserIndexRecord, Wyrmprint_Slot_seven);

				const DragonIndex = UserIndexRecord.dragon_list.findIndex(x => x.dragon_key_id === Dragon_Key_ID)
				let DragonBond = 0;
				if (DragonIndex != -1) {
					const DragonID = UserIndexRecord['dragon_list'][DragonIndex]['dragon_id']
					if (DragonID == 20050522) { DragonBond = 30; }
					else { const DragonBondIndex = UserIndexRecord.dragon_reliability_list.findIndex(x => x.dragon_id === DragonID)
						 DragonBond = UserIndexRecord['dragon_reliability_list'][DragonBondIndex]['reliability_level'] }
				}

				// SANITIZE DATA.
				let CharacterData = CharacterDataReturn(UserIndexRecord, Character_ID);
				let WeaponData = CoOpWeaponDataReturn(UserIndexRecord, Character_ID, Weapon_Body_ID);
				let DragonData = CoOpDragonDataReturn(UserIndexRecord, Dragon_Key_ID);
				let TalismanData = CoOpTalismanDataReturn(UserIndexRecord, Talisman_ID);
				let PassiveData = CoOpPassiveDataReturn(UserIndexRecord, Character_ID, QuestID);
				let BonusData = CoOpBonusCalc(UserIndexRecord, Character_ID, DragonData['dragon_id']);
				if (CharacterData == undefined) { CharacterData = {}; }
				if (TalismanData == undefined) { TalismanData = {}; }
				if (Crest_Slot_Type_One[0] == undefined) { Crest_Slot_Type_One[0] = {}; } if (Crest_Slot_Type_One[1] == undefined) { Crest_Slot_Type_One[1] = {}; } if (Crest_Slot_Type_One[2] == undefined) { Crest_Slot_Type_One[2] = {}; }
				if (Crest_Slot_Type_Two[0] == undefined) { Crest_Slot_Type_Two[0] = {}; } if (Crest_Slot_Type_Two[1] == undefined) { Crest_Slot_Type_Two[1] = {}; }
				if (Crest_Slot_Type_Thr[0] == undefined) { Crest_Slot_Type_Thr[0] = {}; } if (Crest_Slot_Type_Thr[1] == undefined) { Crest_Slot_Type_Thr[1] = {}; }
				
				let Skill_Level_One = 0; 
				let SharedSkill_One_Data = { 'chara_id': 0, 'edit_skill_level': 0 }
				let Skill_Level_Two = 0;
				let SharedSkill_Two_Data = { 'chara_id': 0, 'edit_skill_level': 0 }
				if (CompletedCharacters == 0) {
					if (Shared_Skill_one != 0) {
						const Character_One = UserIndexRecord.chara_list.findIndex(x => x.chara_id === Shared_Skill_one)
						if (Character_One == -1) { Skill_Level_One = 1; }
						else { Skill_Level_One = UserIndexRecord['chara_list'][Character_One][IsSkillOneOrTwo(Shared_Skill_one)] }
						SharedSkill_One_Data = {
							'chara_id': Shared_Skill_one,
							'edit_skill_level': Skill_Level_One
						}
					}
					else { SharedSkill_One_Data = { 'chara_id': 0, 'edit_skill_level': WeaponData['skill_level'] }; }
					if (Shared_Skill_two != 0) {
						const Character_Two = UserIndexRecord.chara_list.findIndex(x => x.chara_id === Shared_Skill_two)
						if (Character_Two == -1) { Skill_Level_Two = 1; }
						else { Skill_Level_Two = UserIndexRecord['chara_list'][Character_Two][IsSkillOneOrTwo(Shared_Skill_two)] }
						SharedSkill_Two_Data = {
							'chara_id': Shared_Skill_two,
							'edit_skill_level': Skill_Level_Two
						}
					}
				}
				
				let EventPassiveList = [];
				if (String(QuestID).slice(0,3) == "204") {
					const EventID = String(QuestID).slice(0,5);
					if (UserSessionRecord['Event']['Raid'][EventID]['Passive']['event_id'] != undefined) {
						EventPassiveList = [
							UserSessionRecord['Event']['Raid'][EventID]['Passive']['event_passive_grow_list'][0]['progress'],
							UserSessionRecord['Event']['Raid'][EventID]['Passive']['event_passive_grow_list'][1]['progress'],
							UserSessionRecord['Event']['Raid'][EventID]['Passive']['event_passive_grow_list'][2]['progress'],
							UserSessionRecord['Event']['Raid'][EventID]['Passive']['event_passive_grow_list'][3]['progress'],
							UserSessionRecord['Event']['Raid'][EventID]['Passive']['event_passive_grow_list'][4]['progress'],
							UserSessionRecord['Event']['Raid'][EventID]['Passive']['event_passive_grow_list'][5]['progress'],
							UserSessionRecord['Event']['Raid'][EventID]['Passive']['event_passive_grow_list'][6]['progress'],
							UserSessionRecord['Event']['Raid'][EventID]['Passive']['event_passive_grow_list'][7]['progress'],
							UserSessionRecord['Event']['Raid'][EventID]['Passive']['event_passive_grow_list'][8]['progress'],
							UserSessionRecord['Event']['Raid'][EventID]['Passive']['event_passive_grow_list'][9]['progress'],
							UserSessionRecord['Event']['Raid'][EventID]['Passive']['event_passive_grow_list'][10]['progress']
						];
					}
					else { EventPassiveList = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; }
					
					if (EventMap.EventInfoMap[String(QuestID).slice(0,5)]['event_character'] == Character_ID) { 
						CharacterData['attack'] = CharacterData['attack'] + Math.floor(CharacterData['attack'] * 1.30);
						CharacterData['defence'] = 30;
					}
				}
				
				let FinalCharaData = {
					'level': CharacterData['level'],
					'characterId': Character_ID,
					'hp': CharacterData['hp'],
					'attack': CharacterData['attack'],
					'defence': CharacterData['defence'],
					'exAbilityLv': CharacterData['ex_ability_level'],
					'exAbility2Lv': CharacterData['ex_ability_2_level'],
					'ability1Lv': CharacterData['ability_1_level'],
					'ability2Lv': CharacterData['ability_2_level'],
					'ability3Lv': CharacterData['ability_3_level'],
					'skill1Lv': CharacterData['skill_1_level'],
					'skill2Lv': CharacterData['skill_2_level'],
					'burstAttackLv': CharacterData['burst_attack_level'],
					'hpPlusCount': CharacterData['hp_plus_count'],
					'attackPlusCount': CharacterData['attack_plus_count'],
					'comboBuildupCount': CharacterData['combo_buildup_count'],
					'dragonId': DragonData['dragon_id'],
					'dragonLevel': DragonData['level'],
					'dragonAbility1Lv': DragonData['ability_1_level'],
					'dragonAbility2Lv': DragonData['ability_2_level'],
					'dragonSkill1Lv': DragonData['skill_1_level'],
					'dragonSkill2Lv': DragonData['skill_2_level'],
					'dragonHpPlusCount': DragonData['hp_plus_count'],
					'dragonAttackPlusCount': DragonData['attack_plus_count'],
					'weaponBodyId': WeaponData['weapon_body_id'],
					'weaponBodyBuildupCount': WeaponData['buildup_count'],
					'weaponBodySkillNo': 1,
					'weaponBodySkillLv': WeaponData['skill_level'],
					'weaponBodyAbility1Lv': WeaponData['ability_1_level'],
					'weaponBodyAbility2Lv': WeaponData['ability_2_level'],
					'weaponPassiveAbilityIds': PassiveData,
					'weapon_skin_data': Weapon_Skin_ID,
					'abilityCrestId': Crest_Slot_Type_One[0]['ability_crest_id'],
					'abilityCrestBuildupCount': Crest_Slot_Type_One[0]['buildup_count'],
					'abilityCrestAbility1Lv': Crest_Slot_Type_One[0]['ability_1_level'],
					'abilityCrestAbility2Lv': Crest_Slot_Type_One[0]['ability_2_level'],
					'abilityCrestHpPlusCount': Crest_Slot_Type_One[0]['hp_plus_count'],
					'abilityCrestAttackPlusCount': Crest_Slot_Type_One[0]['attack_plus_count'],
					'abilityCrest2Id': Crest_Slot_Type_One[1]['ability_crest_id'],
					'abilityCrest2BuildupCount': Crest_Slot_Type_One[1]['buildup_count'],
					'abilityCrest2Ability1Lv': Crest_Slot_Type_One[1]['ability_1_level'],
					'abilityCrest2Ability2Lv': Crest_Slot_Type_One[1]['ability_2_level'],
					'abilityCrest2HpPlusCount': Crest_Slot_Type_One[1]['hp_plus_count'],
					'abilityCrest2AttackPlusCount': Crest_Slot_Type_One[1]['attack_plus_count'],
					'abilityCrest3Id': Crest_Slot_Type_One[2]['ability_crest_id'],
					'abilityCrest3BuildupCount': Crest_Slot_Type_One[2]['buildup_count'],
					'abilityCrest3Ability1Lv': Crest_Slot_Type_One[2]['ability_1_level'],
					'abilityCrest3Ability2Lv': Crest_Slot_Type_One[2]['ability_2_level'],
					'abilityCrest3HpPlusCount': Crest_Slot_Type_One[2]['hp_plus_count'],
					'abilityCrest3AttackPlusCount': Crest_Slot_Type_One[2]['attack_plus_count'],
					'abilityCrest4Id': Crest_Slot_Type_Two[0]['ability_crest_id'],
					'abilityCrest4BuildupCount': Crest_Slot_Type_Two[0]['buildup_count'],
					'abilityCrest4Ability1Lv': Crest_Slot_Type_Two[0]['ability_1_level'],
					'abilityCrest4Ability2Lv': Crest_Slot_Type_Two[0]['ability_2_level'],
					'abilityCrest4HpPlusCount': Crest_Slot_Type_Two[0]['hp_plus_count'],
					'abilityCrest4AttackPlusCount': Crest_Slot_Type_Two[0]['attack_plus_count'],
					'abilityCrest5Id': Crest_Slot_Type_Two[1]['ability_crest_id'],
					'abilityCrest5BuildupCount': Crest_Slot_Type_Two[1]['buildup_count'],
					'abilityCrest5Ability1Lv': Crest_Slot_Type_Two[1]['ability_1_level'],
					'abilityCrest5Ability2Lv': Crest_Slot_Type_Two[1]['ability_2_level'],
					'abilityCrest5HpPlusCount': Crest_Slot_Type_Two[1]['hp_plus_count'],
					'abilityCrest5AttackPlusCount': Crest_Slot_Type_Two[1]['attack_plus_count'],
					'plusHp': 0,
					'plusAtk': 0,
					'plusDef': 0,
					'dragonRelativeDmg': BonusData['draDmgFort'],
					'dragonTime': UserIndexRecord['fort_bonus_list']['dragon_time_bonus']['dragon_time_bonus'],
					'position': CompletedCharacters + 1,
					'aiType': 0,
					'isEnemyTarget': true,
					'isFriend': false,
					'dragonReliabilityLevel': DragonBond,
					'dragonRelativeHp': 0,
					'dragonRelativeAtk': 0,
					'dragonRelativeDef': 0,
					'battleGroup': 0,
					'eventPassiveGrowList': EventPassiveList,
					'eventBoostDmg': 0,
					'editSkillCharacterId1': SharedSkill_One_Data['chara_id'],
					'editSkillCharacterId2': SharedSkill_Two_Data['chara_id'],
					'editSkillLv1': SharedSkill_One_Data['edit_skill_level'],
					'editSkillLv2': SharedSkill_Two_Data['edit_skill_level'],
					'abilityCrest6Id': Crest_Slot_Type_Two[0]['ability_crest_id'],
					'abilityCrest6BuildupCount': Crest_Slot_Type_Thr[0]['buildup_count'],
					'abilityCrest6Ability1Lv': Crest_Slot_Type_Thr[0]['ability_1_level'],
					'abilityCrest6Ability2Lv': Crest_Slot_Type_Thr[0]['ability_2_level'],
					'abilityCrest6HpPlusCount': Crest_Slot_Type_Thr[0]['hp_plus_count'],
					'abilityCrest6AttackPlusCount': Crest_Slot_Type_Thr[0]['attack_plus_count'],
					'abilityCrest7Id': Crest_Slot_Type_Two[1]['ability_crest_id'],
					'abilityCrest7BuildupCount': Crest_Slot_Type_Thr[1]['buildup_count'],
					'abilityCrest7Ability1Lv': Crest_Slot_Type_Thr[1]['ability_1_level'],
					'abilityCrest7Ability2Lv': Crest_Slot_Type_Thr[1]['ability_2_level'],
					'abilityCrest7HpPlusCount': Crest_Slot_Type_Thr[1]['hp_plus_count'],
					'abilityCrest7AttackPlusCount': Crest_Slot_Type_Thr[1]['attack_plus_count'],
					'originalPosition': 0,
					'relativeHpFort': BonusData['HpFort'],
					'relativeAtkFort': BonusData['AtkFort'],
					'relativeDefFort': 0,
					'relativeHpAlbum': BonusData['HpAlbum'],
					'relativeAtkAlbum': BonusData['AtkAlbum'],
					'relativeDefAlbum': 0,
					'dragonRelativeHpFort': BonusData['draHpFort'],
					'dragonRelativeAtkFort': BonusData['draAtkFort'],
					'dragonRelativeDefFort': 0,
					'dragonRelativeHpAlbum': BonusData['draHpAlbum'],
					'dragonRelativeAtkAlbum': BonusData['draAtkAlbum'],
					'talismanId': TalismanData['talisman_id'],
					'talismanAbilityId1': TalismanData['talisman_ability_id_1'],
					'talismanAbilityId2': TalismanData['talisman_ability_id_2'],
					'talismanAbilityId3': TalismanData['talisman_ability_id_3'],
					'talismanAdditionalHp': TalismanData['additional_hp'],
					'talismanAdditionalAttack': TalismanData['additional_attack']
				}
				if (PartyNo_List[i] != undefined) { CurrentPartyList.push(FinalCharaData); }
			}
			CompletedCharacters++;
		}
		PartyUnitList[i] = CurrentPartyList;
	}
	return PartyUnitList;
}

module.exports = { GetUserSave, ValidateIndex, CleanIndex, GetPlayerQuestData, GetPlayerQuestDataShort, GetPlayerQuestPlayCount, GetMissionNotice, GenerateSummonOdds, LoginBonusData, MyPageInfo, MissionList, DungeonRecord, DungeonSkipRecord, DungeonMultiClear, SetClearParty, ItemParser, CheckDailyCompleted, PopulateUnitData, PopulateSupportData, PopulateAssignedUnitData, PopulateCoOpUnitData, WallRecord, GetWallDrop, KeyIDByTicket }