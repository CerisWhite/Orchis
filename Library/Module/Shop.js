const SpecialSummonMap = {
	"Crystal": { 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 10000, 'entity_rate': "0.001%" },
	"10xVoucher": { 'entity_type': 17, 'entity_id': 10102, 'entity_quantity': 10, 'entity_rate': "0.005%" },
	"Eldwater": { 'entity_type': 14, 'entity_id': 0, 'entity_quantity': 100000, 'entity_rate': "0.10%" },
	"Omnicite": { 'entity_type': 8, 'entity_id': 125001001, 'entity_quantity': 1, 'entity_rate': "1.00%" },
	"10xVoucherLow": { 'entity_type': 17, 'entity_id': 10102, 'entity_quantity': 1, 'entity_rate': "0.005%" },
	"Sunlight": { 'entity_type': 8, 'entity_id': 111002001, 'entity_quantity': 4, 'entity_rate': "1.00%" },
	"Adamantite": { 'entity_type': 8, 'entity_id': 112003001, 'entity_quantity': 1, 'entity_rate': "1.00%" },
	"GoldKeys": { 'entity_type': 8, 'entity_id': 114002001, 'entity_quantity': 4, 'entity_rate': "1.00%" },
	"Moonlight": { 'entity_type': 8, 'entity_id': 111001001, 'entity_quantity': 4, 'entity_rate': "5.00%" },
	"Damascus": { 'entity_type': 8, 'entity_id': 112002001, 'entity_quantity': 1, 'entity_rate': "5.00%" },
	"SilverKeys": { 'entity_type': 8, 'entity_id': 114001001, 'entity_quantity': 4, 'entity_rate': "5.00%" },
	"Champion": { 'entity_type': 8, 'entity_id': 104003002, 'entity_quantity': 1, 'entity_rate': "5.00%" },
	"Mirr2": { 'entity_type': 8, 'entity_id': 201008001, 'entity_quantity': 3, 'entity_rate': "5.00%" }
}
const NormalSummonMap = {
	"CrystalLow": { 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 20 },
	"VoucherLow": { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 1 },
	"Orichalcum": { 'entity_type': 8, 'entity_id': 202004005, 'entity_quantity': 20 },
	"Talonstone": { 'entity_type': 8, 'entity_id': 201005001, 'entity_quantity': 20 },
	"CWater": { 'entity_type': 8, 'entity_id': 113001003, 'entity_quantity': 30 },
	"Knight": { 'entity_type': 8, 'entity_id': 104003001, 'entity_quantity': 1 },
	"GWhets": { 'entity_type': 8, 'entity_id': 103001003, 'entity_quantity': 100 },
	"Rainbow": { 'entity_type': 8, 'entity_id': 104001001, 'entity_quantity': 30 },
	"Fire4": { 'entity_type': 8, 'entity_id': 104001014, 'entity_quantity': 15 },
	"Aqua4": { 'entity_type': 8, 'entity_id': 104001024, 'entity_quantity': 15 },
	"Wind4": { 'entity_type': 8, 'entity_id': 104001034, 'entity_quantity': 15 },
	"Lite4": { 'entity_type': 8, 'entity_id': 104001044, 'entity_quantity': 15 },
	"Dark4": { 'entity_type': 8, 'entity_id': 104001054, 'entity_quantity': 15 },
	"Fire3": { 'entity_type': 8, 'entity_id': 104001013, 'entity_quantity': 20 },
	"Aqua3": { 'entity_type': 8, 'entity_id': 104001023, 'entity_quantity': 20 },
	"Wind3": { 'entity_type': 8, 'entity_id': 104001033, 'entity_quantity': 20 },
	"Lite3": { 'entity_type': 8, 'entity_id': 104001043, 'entity_quantity': 20 },
	"Dark3": { 'entity_type': 8, 'entity_id': 104001053, 'entity_quantity': 20 },
	"Fire2": { 'entity_type': 8, 'entity_id': 104001012, 'entity_quantity': 30 },
	"Aqua2": { 'entity_type': 8, 'entity_id': 104001022, 'entity_quantity': 30 },
	"Wind2": { 'entity_type': 8, 'entity_id': 104001032, 'entity_quantity': 30 },
	"Lite2": { 'entity_type': 8, 'entity_id': 104001042, 'entity_quantity': 30 },
	"Dark2": { 'entity_type': 8, 'entity_id': 104001052, 'entity_quantity': 30 },
	"Fire1": { 'entity_type': 8, 'entity_id': 104001011, 'entity_quantity': 50 },
	"Aqua1": { 'entity_type': 8, 'entity_id': 104001021, 'entity_quantity': 50 },
	"Wind1": { 'entity_type': 8, 'entity_id': 104001031, 'entity_quantity': 50 },
	"Lite1": { 'entity_type': 8, 'entity_id': 104001041, 'entity_quantity': 50 },
	"Dark1": { 'entity_type': 8, 'entity_id': 104001051, 'entity_quantity': 50 },
	"Iron": { 'entity_type': 8, 'entity_id': 202001001, 'entity_quantity': 50 },
	"Gran": { 'entity_type': 8, 'entity_id': 202001002, 'entity_quantity': 50 },
	"Meto": { 'entity_type': 8, 'entity_id': 202001003, 'entity_quantity': 50 },
	"Claw": { 'entity_type': 8, 'entity_id': 202002001, 'entity_quantity': 50 },
	"Horn": { 'entity_type': 8, 'entity_id': 202002002, 'entity_quantity': 50 },
	"Eyes": { 'entity_type': 8, 'entity_id': 202002003, 'entity_quantity': 50 },
	"Bats": { 'entity_type': 8, 'entity_id': 202003001, 'entity_quantity': 50 },
	"Feth": { 'entity_type': 8, 'entity_id': 202003002, 'entity_quantity': 50 },
	"Wing": { 'entity_type': 8, 'entity_id': 202003003, 'entity_quantity': 50 },
	"Mirr": { 'entity_type': 8, 'entity_id': 201008001, 'entity_quantity': 1 }
}

function DrawEX() {
	let DrawData = "";
	const Roll = Math.floor(Math.random() * 16);
	if (Roll == 4) {
		const RandomNumber = Math.floor(Math.random() * Object.keys(SpecialSummonMap).length);
		const RandomItem = Object.keys(SpecialSummonMap)[RandomNumber];
		if (SpecialSummonMap[RandomItem]['entity_type'] == 23) {
			const RandomNumber2 = Math.floor(Math.random() * Object.keys(SpecialSummonMap).length);
			const RandomItem2 = Object.keys(SpecialSummonMap)[RandomNumber2];
			if (SpecialSummonMap[RandomItem2]['type'] == 23) { DrawData = SpecialSummonMap[RandomItem]; }
			else { DrawData = SpecialSummonMap[RandomItem2]; }
		}
		if (SpecialSummonMap[RandomItem]['entity_type'] == 17) {
			const SubRoll = Math.floor(Math.random() * 16);
			if (SubRoll == 10 || SubRoll == 12 || SubRoll == 14) {
				DrawData = SpecialSummonMap[RandomItem];
			}
			else {
				const RandomNumber2 = Math.floor(Math.random() * Object.keys(SpecialSummonMap).length);
				const RandomItem2 = Object.keys(SpecialSummonMap)[RandomNumber2];
				DrawData = SpecialSummonMap[RandomItem2];
				while (DrawData['entity_type'] == 23 || DrawData['entity_type'] == 17) {
					const RandomNumber3 = Math.floor(Math.random() * Object.keys(SpecialSummonMap).length);
					const RandomItem3 = Object.keys(SpecialSummonMap)[RandomNumber3];
					DrawData = SpecialSummonMap[RandomItem3];
				}
			}
		}
		else { DrawData = SpecialSummonMap[RandomItem]; }
	}
	else {
		const RandomNumber = Math.floor(Math.random() * Object.keys(NormalSummonMap).length);
		const RandomItem = Object.keys(NormalSummonMap)[RandomNumber];
		DrawData = NormalSummonMap[RandomItem];
	}
	return DrawData;
}
function Draw() {
	const RandomNumber = Math.floor(Math.random() * Object.keys(NormalSummonMap).length);
	const RandomItem = Object.keys(NormalSummonMap)[RandomNumber];
	const DrawData = NormalSummonMap[RandomItem];
	return DrawData;
}

const TradeListIDs = Object.keys(global.Master.TreasureTrade);
let TradeList = [];
for (const x in TradeListIDs) {
	const TradeData = global.Master.TreasureTrade[TradeListIDs[x]];
	TradeList.push({
		'treasure_trade_id': TradeData['_Id'],
		'priority': TradeData['_Priority'],
		'tab_group_id': TradeData['_TabGroupId'],
		'commence_date': TradeData['_CommenceDate'] != "" ? Math.floor(new Date().getTime(TradeData['_CommenceDate'])) : 0,
		'complete_date': TradeData['_CompleteDate'] != "" ? Math.floor(new Date().getTime(TradeData['_CompleteDate'])) : 0,
		'is_lock_view': TradeData['_IsLockView'],
		'reset_type': TradeData['_ResetType'],
		'limit': TradeData['_Limit'],
		'destination_entity_type': TradeData['_DestinationEntityType'],
		'destination_entity_id': TradeData['_DestinationEntityId'],
		'destination_entity_quantity': TradeData['_DestinationEntityQuantity'],
		'destination_limit_break_count': TradeData['_DestinationLimitBreakCount'],
		'need_trade_entity_list': [
			{ 'entity_type': TradeData['_NeedEntityType1'], 'entity_id': TradeData['_NeedEntityId1'], 'entity_quantity': TradeData['_NeedEntityQuantity1'], 'limit_break_count': TradeData['_NeedLimitBreakCount1'] },
			{ 'entity_type': TradeData['_NeedEntityType2'], 'entity_id': TradeData['_NeedEntityId2'], 'entity_quantity': TradeData['_NeedEntityQuantity2'], 'limit_break_count': TradeData['_NeedLimitBreakCount2'] },
			{ 'entity_type': TradeData['_NeedEntityType3'], 'entity_id': TradeData['_NeedEntityId3'], 'entity_quantity': TradeData['_NeedEntityQuantity3'], 'limit_break_count': TradeData['_NeedLimitBreakCount3'] },
			{ 'entity_type': TradeData['_NeedEntityType4'], 'entity_id': TradeData['_NeedEntityId4'], 'entity_quantity': TradeData['_NeedEntityQuantity4'], 'limit_break_count': TradeData['_NeedLimitBreakCount4'] },
			{ 'entity_type': TradeData['_NeedEntityType5'], 'entity_id': TradeData['_NeedEntityId5'], 'entity_quantity': TradeData['_NeedEntityQuantity5'], 'limit_break_count': TradeData['_NeedLimitBreakCount5'] }
		]
	});
}
for (const x in TradeList) {
	let i = TradeList[x]['need_trade_entity_list'].length;
	while (i > 0) {
		if (TradeList[x]['need_trade_entity_list'][i - 1]['entity_type'] == 0) {
			TradeList[x]['need_trade_entity_list'].splice(i - 1, 1);
		}
		i--;
	}
}
async function ShopTrade(res, TradeID, TradeCount, ResetTimes) {
	const TradeData = TradeList.find(z => z.treasure_trade_id == TradeID);
	res.mid.ItemList.push({
		'type': TradeData['destination_entity_type'],
		'id': TradeData['destination_entity_id'],
		'quantity': TradeData['destination_entity_quantity'] * TradeCount,
		'limit_break': TradeData['destination_limit_break_count']
	});
	for (const x in TradeData['need_trade_entity_list']) {
		res.mid.ItemList.push({
			'type': TradeData['need_trade_entity_list'][x]['entity_type'],
			'id': TradeData['need_trade_entity_list'][x]['entity_id'],
			'quantity': (TradeData['need_trade_entity_list'][x]['entity_quantity'] * TradeCount) * -1
		});
	}
	
	const UserTradeList = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "user_treasure_trade_list");
	let LastResetTime = 0;
	if (TradeData['reset_type'] == 1) { LastResetTime = ResetTimes['Daily']; }
	else if (TradeData['reset_type'] == 2) { LastResetTime = ResetTimes['Weekly']; }
	else if (TradeData['reset_type'] == 3) { LastResetTime = ResetTimes['Monthly']; }
	const UserTradeIndex = UserTradeList.findIndex(z => z.treasure_trade_id == TradeID);
	if (UserTradeIndex == -1) {
		UserTradeList.push({
			'treasure_trade_id': TradeID,
			'trade_count': TradeCount,
			'last_reset_time': LastResetTime
		});
	}
	else {
		if (UserTradeList[UserTradeIndex]['last_reset_time'] < LastResetTime) { UserTradeList[UserTradeIndex]['trade_count'] = 0; }
		UserTradeList[UserTradeIndex]['trade_count'] += TradeCount;
		UserTradeList[UserTradeIndex]['last_reset_time'] = LastResetTime;
	}
	await global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, UserTradeList, "user_treasure_trade_list");
	res.mid.Data = {
		'user_treasure_trade_list': UserTradeList,
		'treasure_trade_all_list': TradeList
	}
	return;
}
function SetLimitTrade(UserTradeList, ResetTimes) {
	if (UserTradeList == undefined) { return []; }
	for (const x in UserTradeList) {
		const TradeData = TradeList.find(z => z.treasure_trade_id == UserTradeList[x]['treasure_trade_id']);
		let LastResetTime = 0;
		if (TradeData['reset_type'] == 1) { LastResetTime = ResetTimes['Daily']; }
		else if (TradeData['reset_type'] == 2) { LastResetTime = ResetTimes['Weekly']; }
		else if (TradeData['reset_type'] == 3) { LastResetTime = ResetTimes['Monthly']; }
		if (UserTradeList[x]['last_reset_time'] < LastResetTime) { UserTradeList[x]['trade_count'] = 0; }
		UserTradeList[x]['last_reset_time'] = LastResetTime;
	}
	return UserTradeList;
}
const CrestListIDs = Object.keys(global.Master.AbilityCrestTrade);
let CrestList = [];
for (const x in CrestListIDs) {
	const TradeData = global.Master.AbilityCrestTrade[CrestListIDs[x]];
	CrestList.push({
		'ability_crest_trade_id': TradeData['_Id'],
		'ability_crest_id': TradeData['_AbilityCrestId'],
		'priority': TradeData['_Priority'],
		'need_dew_point': TradeData['_NeedDewPoint'],
		'complete_date': 0,
		'pickup_view_start_date': 0,
		'pickup_view_end_date': 0
	});
}
async function CrestTrade(res, TradeID) {
	const TradeData = CrestList.find(z => z.ability_crest_trade_id == TradeID);
	res.mid.ItemList.push({ 'type': 14, 'id': 0, 'quantity': TradeData['need_dew_point'] * -1 });
	res.mid.ItemList.push({ 'type': 39, 'id': TradeData['ability_crest_id'], 'quantity': 1 });
	res.mid.Persist['CrestTrade'].push({ 'ability_crest_trade_id': TradeID, 'trade_count': 1 });
	res.mid.Data = {
		'user_ability_crest_trade_list': res.mid.Persist['CrestTrade'],
		'ability_crest_trade_list': CrestList
	}
	return;
}

function MaterialTrade(res, GoodsID, Count) {
	GoodsID = String(GoodsID);
	let TradeData = {};
	switch(parseInt(GoodsID.slice(0, 1))) {
		case 1:
			TradeData = global.Master.MaterialShopDaily[GoodsID];
		break;
		case 2:
			TradeData = global.Master.MaterialShopWeekly[GoodsID];
		break;
		case 3:
			TradeData = global.Master.MaterialShopMonthly[GoodsID];
		break;
	}
	switch(TradeData['_PaymentType']) {
		case 3:
			res.mid.ItemList.push({ 'type': 23, 'id': 0, 'quantity': (TradeData['_NeedCost'] * Count) * -1 });
		break;
		default:
			res.mid.ItemList.push({ 'type': 4, 'id': 0, 'quantity': (TradeData['_NeedCost'] * Count) * -1 });
		break;
	}
	let i = 0; while (i < 8) {
		res.mid.ItemList.push({
			'type': TradeData['_DestinationEntityType' + String(i + 1)],
			'id': TradeData['_DestinationEntityId' + String(i + 1)],
			'quantity': TradeData['_DestinationEntityQuantity' + String(i + 1)] * Count,
			'limit_break': TradeData['_DestinationLimitBreakCount' + String(i + 1)]
		});
		i++;
	}
	res.mid.Data = { 'update_data_list': { 'user_data': res.mid.Persist['User'] } }
	return;
}

module.exports = { DrawEX, Draw, TradeList, CrestList, ShopTrade, SetLimitTrade, CrestTrade, MaterialTrade }