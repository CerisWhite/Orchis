const fs = require('fs');
const EventIDs = Object.keys(global.Master.EventData);
const PassiveIDs = Object.keys(global.Master.EventPassive);
const EventTradeList = JSON.parse(fs.readFileSync('./Library/Event/EventTradeList.json'));
const EventTradeIDs = Object.keys(EventTradeList);
const TradeGroupIDs = Object.keys(global.Master.EventTradeGroup);
const BlazonList = JSON.parse(fs.readFileSync('./Library/Event/BlazonList.json'));
const BoxSummonIDs = Object.keys(global.Master.BoxSummonData);
const LocationIDs = Object.keys(global.Master.CombatEventLocationReward);

function GetInfo(ID, Attribute) {
	return global.Master.EventData[String(ID)][Attribute];
}

function GetTypeString(TypeID) {
	switch(TypeID) {
		case 1: return "Raid"; break;
		//case 2: return "Field"; break;
		//case 3: return "Maze"; break;
		case 4: return "Build"; break;
		case 5: return "Story"; break;
		case 6: return "CLB01"; break;
		case 7: return "MegaMan"; break;
		case 8: return "MonsterHunter"; break;
		case 9: return "Simple"; break;
		case 10: return "Combat"; break;
		case 11: return "ABR"; break;
		case 12: return "Earn"; break;
	}
}

function GetEventAbility(EventID) {
	EventID = String(EventID);
	EventData = global.Master.EventData[EventID];
	return [{
		'chara_id': EventData['_EventCharaId'],
		'ability_id_1': EventData['_EventCharaAbilityId1'],
		'ability_id_2': EventData['_EventCharaAbilityId2']
	}];
}
function GetPassiveList(EventID) {
	EventID = parseInt(EventID);
	let PassiveList = [];
	for (const x in PassiveIDs) {
		if (global.Master.EventPassive[PassiveIDs[x]]['_EventId'] == EventID) {
			PassiveList.push({ 'passive_id': global.Master.EventPassive[PassiveIDs[x]]['_Id'], 'progress': 0 });
		}
	}
	return PassiveList;
}
function GetBlazonData(EventID, BoxCount, UserBox) {
	const BoxData = BlazonList[String(EventID)][String(BoxCount)];
	const BlazonData = [];
	for (const x in BoxData) {
		const Remain = UserBox.find(z => z.ID == BoxData[x]['ID']);
		BlazonData.push({
			'id': BoxData[x]['ID'],
			'entity_type': BoxData[x]['Item']['type'],
			'entity_id': BoxData[x]['Item']['id'],
			'entity_quantity': BoxData[x]['Item']['quantity'],
			'limit': BoxData[x]['Limit'] - Remain['Count'],
			'reset_item_flag': 0,
			'pickup_item_state': 0,
			'total_count': BoxData[x]['Limit']
		});
	}
	return BlazonData;
}
function BlazonUserReset(EventID, BoxCount) {
	if (BlazonList[String(EventID)] == undefined) { return []; }
	const BoxData = BlazonList[String(EventID)][String(BoxCount)];
	let UserBox = [];
	for (const x in BoxData) {
		UserBox.push({
			'ID': BoxData[x]['ID'],
			'Count': 0
		});
	}
	return UserBox;
}
async function BlazonSummon(res, EventID, Count, IsStop) {
	EventID = String(EventID);
	let BoxSummonInfo = {};
	for (const x in BoxSummonIDs) {
		if (global.Master.BoxSummonData[BoxSummonIDs[x]]['_EventId'] == EventID) {
			BoxSummonInfo = global.Master.BoxSummonData[BoxSummonIDs[x]];
			break;
		}
	}
	const Box = res.mid.Persist['Event'][EventID]['Summon']['Count'];
	let BoxData = [];
	
	if (Box >= 5) { BoxData = BlazonList[String(EventID)]["5"]; }
	else { BoxData = BlazonList[String(EventID)][String(Box)]; }
	let DrawTable = [];
	let Remaining = 0;
	for (const x in BoxData) {
		const User = res.mid.Persist['Event'][EventID]['Summon']['Data'].find(z => z.ID == BoxData[x]['ID']);
		Remaining += (BoxData[x]['Limit'] - User['Count']);
	}
	let d = 0; while (d < Count) {
		if (Remaining <= 0) { break; }
		let Draw = BoxData[Math.floor(Math.random() * BoxData.length)];
		let UserIndex = res.mid.Persist['Event'][EventID]['Summon']['Data'].findIndex(z => z.ID == Draw['ID']);
		
		let Tracker = 0;
		while ((Draw['Limit'] - res.mid.Persist['Event'][EventID]['Summon']['Data'][UserIndex]['Count']) <= 0) {
			Draw = BoxData[Math.floor(Math.random() * BoxData.length)];
			UserIndex = res.mid.Persist['Event'][EventID]['Summon']['Data'].findIndex(z => z.ID == Draw['ID']);
			if (Tracker > 99) { d = Count; break; }
			Tracker++;
		}
		
		let Rarity = 5;
		if (Draw['Item']['type'] == 8) {
			Rarity = global.Master.MaterialData[String(Draw['Item']['id'])]['_MaterialRarity'];
		}
		DrawTable.push({
			'id': Draw['ID'],
			'entity_type': Draw['Item']['type'],
			'entity_id': Draw['Item']['id'],
			'entity_quantity': Draw['Item']['quantity'],
			'view_rarity': Rarity,
			'is_new': 0
		});
		res.mid.ItemList.push({
			'type': Draw['Item']['type'],
			'id': Draw['Item']['id'],
			'quantity': Draw['Item']['quantity']
		});
		if (global.Master.EventData[EventID]['_EventKindType'] == 8) {
			res.mid.ItemList.push({'type': 32, 'id': BoxSummonInfo['_EventItemId'], 'quantity': BoxSummonInfo['_CostNum'] * -1});
		}
		else {
			res.mid.ItemList.push({'type': 20, 'id': BoxSummonInfo['_EventItemId'], 'quantity': BoxSummonInfo['_CostNum'] * -1});
		}
		
		res.mid.Persist['Event'][EventID]['Summon']['Data'][UserIndex]['Count'] += 1;
		Remaining -= 1;
		if (Draw['Target'] == true) { 
			res.mid.Persist['Event'][EventID]['Summon']['Target'] = 1;
			if (IsStop == 1) { break; }
		}
		d++;
	}
	
	const NewBoxData = GetBlazonData(EventID, Box, res.mid.Persist['Event'][EventID]['Summon']['Data']);
	res.mid.Data = {
		'box_summon_result': {
			'event_id': parseInt(EventID),
			'box_summon_seq': Box,
			'reset_possible': res.mid.Persist['Event'][EventID]['Summon']['Target'],
			'remaining_quantity': Remaining,
			'draw_details': DrawTable,
			'box_summon_detail': NewBoxData,
			'max_exec_count': Remaining > res.mid.Persist['Event'][EventID]['User']['box_summon_point'] ? Remaining : res.mid.Persist['Event'][EventID]['User']['box_summon_point'],
			'is_stopped_by_target': IsStop,
			'event_point': res.mid.Persist['Event'][EventID]['User']['box_summon_point'] - Count
		}
	}
	return;
}
async function EmblemReward(res, EventID, RewardList) {
	const Target = String(EventID);
	const RaidRewardList = global.Master.RaidEventReward[Target];
	for (const x in RewardList) {
		const RewardData = RaidRewardList.find(z => z._Id == RewardList[x]);
		res.mid.ItemList.push({
			'type': RewardData['_RewardEntityType'],
			'id': RewardData['_RewardEntityId'],
			'quantity': RewardData['_RewardEntityQuantity']
		});
		res.mid.Persist['Event'][Target]['Reward'].push({
			'raid_event_id': EventID,
			'raid_event_reward_id': RewardList[x]
		});
	}
	res.mid.Data = {
		'raid_event_user_data': res.mid.Persist['Event'][Target]['User'],
		'raid_event_reward_list': res.mid.Persist['Event'][Target]['Reward']
	}
	return;
}
async function EmblemRewardExHunter(res, EventID, RewardList) {
	const Target = String(EventID);
	const RaidRewardList = global.Master.RaidEventReward[Target];
	for (const x in RewardList) {
		const RewardData = RaidRewardList.find(z => z._Id == RewardList[x]);
		res.mid.ItemList.push({
			'type': RewardData['_RewardEntityType'],
			'id': RewardData['_RewardEntityId'],
			'quantity': RewardData['_RewardEntityQuantity']
		});
		res.mid.Persist['Event'][Target]['Reward'].push({
			'event_id': EventID,
			'event_reward_id': RewardList[x]
		});
	}
	res.mid.Data = {
		'ex_hunter_event_reward_list': res.mid.Persist['Event'][Target]['Reward']
	}
	return;
}

async function GetBuildReward(res, EventID) {
	Target = String(EventID);
	const BuildRewardData = global.Master.BuildEventReward[Target];
	const EventType = global.Master.EventData[Target]['_EventKindType'];
	let EventPoint = 0;
	let EventPrefix = "";
	switch(EventType) {
		case 4:
			EventPoint = res.mid.Persist['Event'][Target]['User'].find(z => z.user_build_event_item == 10001)['event_item_value'];
			EventPrefix = "build";
		break;
		case 6:
			EventPoint = res.mid.Persist['Event'][Target]['User'].find(z => z.user_clb_01_event_item == 10201)['event_item_value'];
			EventPrefix = "clb_01";
		break;
		case 8:
		
			EventPrefix = "ex_hunter";
		break;
		case 10:
			EventPoint = res.mid.Persist['Event'][Target]['User']['event_point'];
			EventPrefix = "combat";
		break;
		case 12:
			EventPoint = res.mid.Persist['Event'][Target]['User']['event_point'];
			EventPrefix = "earn";
		break;
	}
	
	let RewardList = [];
	for (const x in BuildRewardData) {
		if (BuildRewardData[x]['_EventItemQuantity'] > EventPoint) { break; }
		if (res.mid.Persist['Event'][Target]['Reward'].findIndex(z => z.event_reward_id == BuildRewardData[x]['_Id']) != -1) {
			continue;
		}
		RewardList.push({
			'entity_type': BuildRewardData[x]['_RewardEntityType'],
			'entity_id': BuildRewardData[x]['_RewardEntityId'],
			'entity_quantity': BuildRewardData[x]['_RewardEntityQuantity'],
		});
		res.mid.ItemList.push({
			'type': BuildRewardData[x]['_RewardEntityType'],
			'id': BuildRewardData[x]['_RewardEntityId'],
			'quantity': BuildRewardData[x]['_RewardEntityQuantity']
		});
		res.mid.Persist['Event'][Target]['Reward'].push({
			'event_id': EventID,
			'event_reward_id': BuildRewardData[x]['_Id']
		});
	}
	
	res.mid.Data = {
		[EventPrefix + "_event_reward_list"]: res.mid.Persist['Event'][Target]['Reward'],
		[EventPrefix + "_event_reward_entity_list"]: RewardList
	}
}
async function GetCombatReward(res, EventID, GroupID) {
	res.mid.Persist['Event'][EventID]['Location'].push({
		'event_id': EventID,
		'location_reward_id': GroupID
	});
	EventID = String(EventID);
	GroupID = String(GroupID);
	const EventTarget = parseInt(EventID);
	const Target = parseInt(GroupID.slice(-2));
	res.mid.Data = {
		'user_event_location_reward_list': res.mid.Persist['Event'][EventID]['Location'],
		'event_location_reward_entity_list': []
	}
	
	for (const x in LocationIDs) {
		if (
			global.Master.CombatEventLocationReward[LocationIDs[x]]['_EventId'] == EventTarget &&
			global.Master.CombatEventLocationReward[LocationIDs[x]]['_LocationRewardId'] == Target
		) {
			res.mid.ItemList.push({
				'type': global.Master.CombatEventLocationReward[LocationIDs[x]]['_EntityType'],
				'id': global.Master.CombatEventLocationReward[LocationIDs[x]]['_EntityId'],
				'quantity': global.Master.CombatEventLocationReward[LocationIDs[x]]['_EntityQuantity']
			});
			res.mid.Data['event_location_reward_entity_list'].push({
				'entity_type': global.Master.CombatEventLocationReward[LocationIDs[x]]['_EntityType'],
				'entity_id': global.Master.CombatEventLocationReward[LocationIDs[x]]['_EntityId'],
				'entity_quantity': global.Master.CombatEventLocationReward[LocationIDs[x]]['_EntityQuantity']
			});
		}
	}
}

function EventTradeData(EventID) {
	let TradeGroup = 0;
	for (const x in TradeGroupIDs) {
		if (global.Master.EventTradeGroup[TradeGroupIDs[x]]['_EventId'] == parseInt(EventID)) {
			TradeGroup = String(global.Master.EventTradeGroup[TradeGroupIDs[x]]['_Id']);
			break;
		}
	}
	if (TradeGroup == 0) { return []; }
	let TradeData = [];
	for (const x in EventTradeList[TradeGroup]) {
		let NeedList = [];
		for (const y in EventTradeList[TradeGroup][x]['Cost']) {
			NeedList.push({
				'entity_type': EventTradeList[TradeGroup][x]['Cost'][y]['type'],
				'entity_id': EventTradeList[TradeGroup][x]['Cost'][y]['id'],
				'entity_quantity': EventTradeList[TradeGroup][x]['Cost'][y]['quantity']
			});
		}
		TradeData.push({
			'event_trade_id':  EventTradeList[TradeGroup][x]['TradeID'],
			'trade_group_id': EventTradeList[TradeGroup][x]['TradeGroup'],
			'read_story_count': 0,
			'priority': EventTradeList[TradeGroup][x]['Priority'],
			'commence_date': 0,
			'complete_date': 0,
			'is_lock_view': 0,
			'clear_target_quest_id': 0,
			'reset_type': 0,
			'limit': EventTradeList[TradeGroup][x]['Limit'],
			'destination_entity_type': EventTradeList[TradeGroup][x]['Reward']['type'],
			'destination_entity_id': EventTradeList[TradeGroup][x]['Reward']['id'],
			'destination_entity_quantity': EventTradeList[TradeGroup][x]['Reward']['quantity'],
			'need_entity_list': NeedList
		});
	}
	return TradeData;
}
async function EventTrade(res, TradeGroup, TradeID, Count) {
	const TradeData = EventTradeList[String(TradeGroup)].find(z => z.TradeID == TradeID);
	res.mid.ItemList.push({ 'type': TradeData['Reward']['type'], 'id': TradeData['Reward']['id'], 'quantity': TradeData['Reward']['quantity'] * Count });
	for (const x in TradeData['Cost']) {
		res.mid.ItemList.push({ 'type': TradeData['Cost'][x]['type'], 'id': TradeData['Cost'][x]['id'], 'quantity': (TradeData['Cost'][x]['quantity'] * Count) * -1 });
	}
	const EventID = global.Master.EventTradeGroup[String(TradeGroup)]['_EventId']
	const TradeIndex = res.mid.Persist['Event'][EventID]['Trade'].findIndex(z => z.event_trade_id == TradeID);
	if (TradeIndex == -1) {
		res.mid.Persist['Event'][EventID]['Trade'].push({ 'event_trade_id': TradeID, 'trade_count': Count });
	}
	else {
		res.mid.Persist['Event'][EventID]['Trade'][TradeIndex]['trade_count'] += Count;
	}
	
	res.mid.Data = {
		'user_event_item_data': [],
		'user_event_trade_list': res.mid.Persist['Event'][EventID]['Trade'],
		'event_trade_list': EventTradeData(global.Master.EventTradeGroup[String(TradeGroup)]['_EventId'])
	}
	return;
}

module.exports = {
	GetInfo, GetTypeString, GetEventAbility, GetPassiveList,
	GetBlazonData, BlazonUserReset, BlazonSummon,
	EmblemReward, GetBuildReward, GetCombatReward,
	EventTradeData, EventTrade
}