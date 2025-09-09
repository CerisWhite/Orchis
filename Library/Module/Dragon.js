function GetInfo(ID, Attribute) {
	ID = String(ID);
	let Data = null;
	if (Attribute == "StoryID") {
		const BaseID = String(global.Master.DragonData[ID]['_BaseId']);
		let Variation = String(global.Master.DragonData[ID]['_VariationId']);
		if (Variation.length == 1) { Variation = "0" + Variation; }
		Data = parseInt(BaseID + Variation + "1");
	}
	else {
		Data = global.Master.DragonData[ID][Attribute];
	}
	return Data;
}

function Create(KeyID, ID, Level, LimitBreak) {
	if (Level == undefined) { Level = 1; }
	if (LimitBreak == undefined) { LimitBreak = 0; }
	return {
		'dragon_key_id': KeyID,
		'dragon_id': ID,
		'rarity': GetInfo(ID, "_Rarity"),
		'level': Level,
		'hp_plus_count': 0,
		'attack_plus_count': 0,
		'exp': 0,
		'is_lock': 0,
		'is_new': 1,
		'get_time': global.ServerTime,
		'skill_1_level': LimitBreak + 1,
		'ability_1_level': LimitBreak + 1,
		'ability_2_level': LimitBreak + 1,
		'limit_break_count': LimitBreak
	}
}
function CreateMax(KeyID, ID) {
	const Rarity = GetInfo(ID, "_Rarity");
	let MaxLevel = global.Master.DragonRarity[String(Rarity)]['_LimitLevel04'];
	const MaxLimitBreak = GetInfo(ID, "_MaxLimitBreakCount");
	if (MaxLimitBreak == 5) { MaxLevel = global.Master.DragonRarity[String(Rarity)]['_LimitLevel05']; }
	const MaxEXP = global.Master.DragonLevel[String(MaxLevel)]['_TotalExp'];
	
	return {
		'dragon_key_id': KeyID,
		'dragon_id': ID,
		'rarity': Rarity,
		'level': MaxLevel,
		'hp_plus_count': 50,
		'attack_plus_count': 50,
		'exp': MaxEXP,
		'is_lock': 0,
		'is_new': 0,
		'get_time': global.ServerTime,
		'skill_1_level': 2,
		'ability_1_level': MaxLimitBreak + 1,
		'ability_2_level': MaxLimitBreak + 1,
		'limit_break_count': MaxLimitBreak
	}
}

async function GetUnitData(ViewerID, ID) {
	const Data = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "dragon_list", { 'dragon_key_id': ID });
	return Data;
}

const RewardList = {
	"1": {
		"3": [
			{'id': 201005001, 'min': 2, 'max': 4},
			{'id': 104001011, 'min': 2, 'max': 4},
			{'id': 104002011, 'min': 2, 'max': 4},
			{'id': 113001001, 'min': 2, 'max': 4},
			{'id': 201015001, 'min': 1, 'max': 3}
		],
		"4": [
			{'id': 201005001, 'min': 2, 'max': 4},
			{'id': 104001011, 'min': 4, 'max': 7},
			{'id': 104001012, 'min': 2, 'max': 4},
			{'id': 104002011, 'min': 4, 'max': 7},
			{'id': 113001001, 'min': 4, 'max': 7},
			{'id': 113001002, 'min': 2, 'max': 4},
			{'id': 201015001, 'min': 1, 'max': 3}
		],
		"5": [
			{'id': 201005001, 'min': 2, 'max': 5},
			{'id': 104001011, 'min': 7, 'max': 10},
			{'id': 104001012, 'min': 4, 'max': 7},
			{'id': 104001013, 'min': 2, 'max': 5},
			{'id': 104002011, 'min': 7, 'max': 10},
			{'id': 104002012, 'min': 4, 'max': 7},
			{'id': 113001001, 'min': 7, 'max': 10},
			{'id': 113001002, 'min': 4, 'max': 7},
			{'id': 113001003, 'min': 2, 'max': 5},
			{'id': 201015001, 'min': 1, 'max': 3},
			{'id': 202010011, 'min': 1, 'max': 2}
		]
	},
	"2": {
		"3": [
			{'id': 201005001, 'min': 2, 'max': 4},
			{'id': 104001021, 'min': 2, 'max': 4},
			{'id': 104002021, 'min': 2, 'max': 4},
			{'id': 113001001, 'min': 2, 'max': 4},
			{'id': 201015001, 'min': 1, 'max': 3}
		],
		"4": [
			{'id': 201005001, 'min': 2, 'max': 4},
			{'id': 104001021, 'min': 4, 'max': 7},
			{'id': 104001022, 'min': 2, 'max': 4},
			{'id': 104002021, 'min': 4, 'max': 7},
			{'id': 113001001, 'min': 4, 'max': 7},
			{'id': 113001002, 'min': 2, 'max': 4},
			{'id': 201015001, 'min': 1, 'max': 3}
		],
		"5": [
			{'id': 201005001, 'min': 2, 'max': 5},
			{'id': 104001021, 'min': 7, 'max': 10},
			{'id': 104001022, 'min': 4, 'max': 7},
			{'id': 104001023, 'min': 2, 'max': 5},
			{'id': 104002021, 'min': 7, 'max': 10},
			{'id': 104002022, 'min': 4, 'max': 7},
			{'id': 113001001, 'min': 7, 'max': 10},
			{'id': 113001002, 'min': 4, 'max': 7},
			{'id': 113001003, 'min': 2, 'max': 5},
			{'id': 201015001, 'min': 1, 'max': 3},
			{'id': 202010021, 'min': 1, 'max': 2}
		]
	},
	"3": {
		"3": [
			{'id': 201005001, 'min': 2, 'max': 4},
			{'id': 104001031, 'min': 2, 'max': 4},
			{'id': 104002031, 'min': 2, 'max': 4},
			{'id': 113001001, 'min': 2, 'max': 4},
			{'id': 201015001, 'min': 1, 'max': 3}
		],
		"4": [
			{'id': 201005001, 'min': 2, 'max': 4},
			{'id': 104001031, 'min': 4, 'max': 7},
			{'id': 104001032, 'min': 2, 'max': 4},
			{'id': 104002031, 'min': 4, 'max': 7},
			{'id': 113001001, 'min': 4, 'max': 7},
			{'id': 113001002, 'min': 2, 'max': 4},
			{'id': 201015001, 'min': 1, 'max': 3}
		],
		"5": [
			{'id': 201005001, 'min': 2, 'max': 5},
			{'id': 104001031, 'min': 7, 'max': 10},
			{'id': 104001032, 'min': 4, 'max': 7},
			{'id': 104001033, 'min': 2, 'max': 5},
			{'id': 104002031, 'min': 7, 'max': 10},
			{'id': 104002032, 'min': 4, 'max': 7},
			{'id': 113001001, 'min': 7, 'max': 10},
			{'id': 113001002, 'min': 4, 'max': 7},
			{'id': 113001003, 'min': 2, 'max': 5},
			{'id': 201015001, 'min': 1, 'max': 3},
			{'id': 202010031, 'min': 1, 'max': 2}
		]
	},
	"4": {
		"3": [
			{'id': 201005001, 'min': 2, 'max': 4},
			{'id': 104001041, 'min': 2, 'max': 4},
			{'id': 104002041, 'min': 2, 'max': 4},
			{'id': 113001001, 'min': 2, 'max': 4},
			{'id': 201015001, 'min': 1, 'max': 3}
		],
		"4": [
			{'id': 201005001, 'min': 2, 'max': 4},
			{'id': 104001041, 'min': 4, 'max': 7},
			{'id': 104001042, 'min': 2, 'max': 4},
			{'id': 104002041, 'min': 4, 'max': 7},
			{'id': 113001001, 'min': 4, 'max': 7},
			{'id': 113001002, 'min': 2, 'max': 4},
			{'id': 201015001, 'min': 1, 'max': 3}
		],
		"5": [
			{'id': 201005001, 'min': 2, 'max': 5},
			{'id': 104001041, 'min': 7, 'max': 10},
			{'id': 104001042, 'min': 4, 'max': 7},
			{'id': 104001043, 'min': 2, 'max': 5},
			{'id': 104002041, 'min': 7, 'max': 10},
			{'id': 104002042, 'min': 4, 'max': 7},
			{'id': 113001001, 'min': 7, 'max': 10},
			{'id': 113001002, 'min': 4, 'max': 7},
			{'id': 113001003, 'min': 2, 'max': 5},
			{'id': 201015001, 'min': 1, 'max': 3},
			{'id': 202010041, 'min': 1, 'max': 2}
		]
	},
	"5": {
		"3": [
			{'id': 201005001, 'min': 2, 'max': 4},
			{'id': 104001051, 'min': 2, 'max': 4},
			{'id': 104002051, 'min': 2, 'max': 4},
			{'id': 113001001, 'min': 2, 'max': 4},
			{'id': 201015001, 'min': 1, 'max': 3}
		],
		"4": [
			{'id': 201005001, 'min': 2, 'max': 4},
			{'id': 104001051, 'min': 4, 'max': 7},
			{'id': 104001052, 'min': 2, 'max': 4},
			{'id': 104002051, 'min': 4, 'max': 7},
			{'id': 113001001, 'min': 4, 'max': 7},
			{'id': 113001002, 'min': 2, 'max': 4},
			{'id': 201015001, 'min': 1, 'max': 3}
		],
		"5": [
			{'id': 201005001, 'min': 2, 'max': 5},
			{'id': 104001051, 'min': 7, 'max': 10},
			{'id': 104001052, 'min': 4, 'max': 7},
			{'id': 104001053, 'min': 2, 'max': 5},
			{'id': 104002051, 'min': 7, 'max': 10},
			{'id': 104002052, 'min': 4, 'max': 7},
			{'id': 113001001, 'min': 7, 'max': 10},
			{'id': 113001002, 'min': 4, 'max': 7},
			{'id': 113001003, 'min': 2, 'max': 5},
			{'id': 201015001, 'min': 1, 'max': 3},
			{'id': 202010051, 'min': 1, 'max': 2}
		]
	}
}
const RewardEXList = [
	{'id': 201019011, 'min': 1, 'max': 2},
	{'id': 201019021, 'min': 1, 'max': 2},
	{'id': 201019031, 'min': 1, 'max': 2},
	{'id': 201019041, 'min': 1, 'max': 2},
	{'id': 201019051, 'min': 1, 'max': 2},
	{'id': 201011001, 'min': 1, 'max': 1},
	{'id': 201012001, 'min': 1, 'max': 1}
];
const RewardFruitList = {
	"3": [
		{'id': 102001001, 'min': 3, 'max': 7}
	],
	"4": [
		{'id': 102001001, 'min': 5, 'max': 10},
		{'id': 102001002, 'min': 3, 'max': 7}
	],
	"5": [
		{'id': 102001001, 'min': 7, 'max': 14},
		{'id': 102001002, 'min': 5, 'max': 10},
		{'id': 102001002, 'min': 3, 'max': 7}
	]
}

function GetBondGifts(ID) {
	const Element = GetInfo(ID, "_ElementalType");
	const Rarity = GetInfo(ID, "_Rarity");
	const Essence = GetInfo(ID, "_LimitBreakMaterialId");
	let GiftList = [];
	
	let DropCount = Math.floor(Math.random() * 2) + 1;
	if (DropCount == 2 && (Math.random() * 12) > 10) {
		const RewardEX = Math.floor(Math.random() * RewardEXList.length);
		GiftList.push({
			'entity_type': 8,
			'entity_id': RewardEXList[RewardEX]['id'],
			'entity_quantity': Math.floor(Math.random() * RewardEXList[RewardEX]['max']) + RewardEXList[RewardEX]['min']
		});
		DropCount -= 1;
	}
	const RewardTable = RewardList[String(Element)][String(Rarity)];
	while (GiftList.length < DropCount) {
		const Reward = Math.floor(Math.random() * RewardTable.length);
		GiftList.push({
			'entity_type': 8,
			'entity_id': RewardTable[Reward]['id'],
			'entity_quantity': Math.floor(Math.random() * RewardTable[Reward]['max']) + RewardTable[Reward]['min']
		});
	}
	const RewardFruitTable = RewardFruitList[String(Rarity)];
	const RewardFruit = Math.floor(Math.random() * RewardFruitTable.length);
	GiftList.push({
		'entity_type': 8,
		'entity_id': RewardFruitTable[RewardFruit]['id'],
		'entity_quantity': Math.floor(Math.random() * RewardFruitTable[RewardFruit]['max']) + RewardFruitTable[RewardFruit]['min']
	});
	
	if (Essence != 0) {
		GiftList.push({
			'entity_type': 8,
			'entity_id': Essence,
			'entity_quantity': 1
		});
	}
	
	return global.Module.Util.CompactEntityList(GiftList);
}

async function RaiseLimit(res, KeyID, GrowList) {
	let DragonIndex = await GetUnitData(res.mid.ViewerID, KeyID);
	let DeleteList = [];
	for (const x in GrowList) {
		switch(GrowList[x]['limit_break_item_type']) {
			case 1:
				DeleteList.push({'dragon_key_id': GrowList[x]['target_id']});
			break;
			case 2:
				res.mid.ItemList.push({ 'type': 8, 'id': GrowList[x]['target_id'], 'quantity': -1 });
			break;
			case 4:
				res.mid.ItemList.push({ 'type': 8, 'id': GrowList[x]['target_id'], 'quantity': -50 });
			break;
		}
		if (GrowList[x]['limit_break_count'] > DragonIndex['limit_break_count']) {
			DragonIndex['limit_break_count'] = GrowList[x]['limit_break_count'];
			DragonIndex['ability_1_level'] = GrowList[x]['limit_break_count'] + 1;
			DragonIndex['ability_2_level'] = GrowList[x]['limit_break_count'] + 1;
		}
		if (DragonIndex['limit_break_count'] >= 2) {
			DragonIndex['skill_1_level'] = 2;
		}
	}
	
	res.mid.Data = {
		'update_data_list': {
			'dragon_list': [ DragonIndex ],
			'fort_bonus_list': []
		},
		'delete_data_list': {
			'delete_dragon_list': DeleteList
		}
	}
	
	return;
}
const LevelIDs = Object.keys(global.Master.DragonLevel);
async function RaiseLevel(res, KeyID, GrowList) {
	let DragonIndex = await GetUnitData(res.mid.ViewerID, KeyID);
	let DeleteList = [];
	for (const x in GrowList) {
		switch(GrowList[x]['type']) {
			case 8:
				res.mid.ItemList.push({ 'type': 8, 'id': GrowList[x]['id'], 'quantity': GrowList[x]['quantity'] * -1 });
				if (global.Master.MaterialData[String(GrowList[x]['id'])]['_Exp'] != 0) {
					DragonIndex['exp'] += global.Master.MaterialData[String(GrowList[x]['id'])]['_Exp'] * GrowList[x]['quantity'];
				}
				switch(GrowList[x]['id']) {
					case 118001001: DragonIndex['hp_plus_count'] += GrowList[x]['quantity']; break;
					case 119001001: DragonIndex['attack_plus_count'] += GrowList[x]['quantity']; break;
				}
			break;
			case 7:
				const SourceIndex = await GetUnitData(res.mid.ViewerID, GrowList[x]['id']);
				const SourceRarity = GetInfo(SourceIndex['dragon_id'], "_Rarity");
				DragonIndex['exp'] += (global.Master.DragonRarity[String(SourceRarity)]['_BuildupBaseExp']
				+ (SourceIndex['level'] * global.Master.DragonRarity[String(SourceRarity)]['_BuildupLevelExp']));
				DeleteList.push({'dragon_key_id': GrowList[x]['id']});
			break;
		}
	}
	
	const Rarity = GetInfo(DragonIndex['dragon_id'], "_Rarity");
	const LimitBreak = DragonIndex['limit_break_count'];
	const MaxLevel = global.Master.DragonRarity[String(Rarity)]['_LimitLevel0' + String(LimitBreak)];
	const MaxEXP = global.Master.DragonLevel[String(MaxLevel)]['_TotalExp'];
	if (DragonIndex['exp'] >= MaxEXP) {
		DragonIndex['exp'] = MaxEXP;
		DragonIndex['level'] = MaxLevel;
	}
	else {
		for (const x in LevelIDs) {
			if (global.Master.DragonLevel[LevelIDs[x]]['_TotalExp'] > DragonIndex['exp']) {
				DragonIndex['level'] = global.Master.DragonLevel[LevelIDs[x]]['_Id'] - 1;
				break;
			}
		}
	}
	
	res.mid.Data = {
		'update_data_list': {
			'dragon_list': [ DragonIndex ],
			'fort_bonus_list': []
		},
		'delete_data_list': {
			'delete_dragon_list': DeleteList
		}
	}
	
	return;
}
const BondLevelIDs = Object.keys(global.Master.DragonReliabilityLevel);
function RaiseBond(BondIndex, ID, GiftID) {
	let IsFavorite = 0;
	let XP = 0;
	const PreviousLevel = BondIndex['reliability_level'];
	if (global.Master.DragonGiftData[String(GiftID)]['_FavoriteType'] == 99
	|| GetInfo(ID, "_FavoriteType") == global.Master.DragonGiftData[String(GiftID)]['_FavoriteType']) {
		IsFavorite = 1;
		BondIndex['reliability_total_exp'] += global.Master.DragonGiftData[String(GiftID)]['_FavoriteReliability'];
	}
	else {
		BondIndex['reliability_total_exp'] += global.Master.DragonGiftData[String(GiftID)]['_Reliability'];
	}

	const Rarity = GetInfo(ID, "_Rarity");
	if (Rarity >= 5) {
		if (BondIndex['reliability_total_exp'] > 36300) {
			BondIndex['reliability_total_exp'] = 36300;
			BondIndex['reliability_level'] = 30;
		}
		else {
			for (const x in BondLevelIDs) {
				if (global.Master.DragonReliabilityLevel[BondLevelIDs[x]]['_DragonUnitType'] != 1) { continue; }
				if (global.Master.DragonReliabilityLevel[BondLevelIDs[x]]['_TotalReliability'] >= BondIndex['reliability_total_exp']) {
					BondIndex['reliability_level'] = global.Master.DragonReliabilityLevel[BondLevelIDs[x]]['_Level'] - 1;
					break;
				}
			}
		}
	}
	else {
		if (BondIndex['reliability_total_exp'] > 2900) {
			BondIndex['reliability_total_exp'] = 2900;
			BondIndex['reliability_level'] = 30;
		}
		else {
			for (const x in BondLevelIDs) {
				if (global.Master.DragonReliabilityLevel[BondLevelIDs[x]]['_DragonUnitType'] != 2) { continue; }
				if (global.Master.DragonReliabilityLevel[BondLevelIDs[x]]['_TotalReliability'] >= BondIndex['reliability_total_exp']) {
					BondIndex['reliability_level'] = global.Master.DragonReliabilityLevel[BondLevelIDs[x]]['_Level'] - 1;
					break;
				}
			}
		}
	}
	
	let LevelRewardList = [];
	let StoryList = [];
	if (PreviousLevel < 5 && BondIndex['reliability_level'] >= 5) {
		LevelRewardList.push({
			'levelup_entity_list': [ { 'entity_type': 0, 'entity_id': 0, 'entity_quantity': 0, 'is_over': 0 } ],
			'level': 5,
			'is_release_story': 1
		});
		StoryList.push({ 'unit_story_id': GetInfo(BondIndex['dragon_id'], "StoryID"), 'is_read': 0 });
	}
	if (PreviousLevel < 10 && BondIndex['reliability_level'] >= 10) {
		LevelRewardList.push({
			'levelup_entity_list': [ { 'entity_type': 0, 'entity_id': 0, 'entity_quantity': 0, 'is_over': 0 } ],
			'level': 10,
			'is_release_story': 1
		});
		StoryList.push({ 'unit_story_id': GetInfo(BondIndex['dragon_id'], "StoryID") + 1, 'is_read': 0 });
	}
	
	const RewardList = GetBondGifts(ID);
	let Converted = [];
	for (const z in RewardList) {
		Converted.push({
			'type': RewardList[z]['entity_type'],
			'id': RewardList[z]['entity_id'],
			'quantity': RewardList[z]['entity_quantity']
		});
	}
	
	return {
		'Index': BondIndex,
		'IsFavorite': IsFavorite,
		'LevelReward': LevelRewardList,
		'Story': StoryList,
		'Reward': RewardList,
		'ItemList': Converted
	};
}

function GetIDByName(Name) {
	let DragonID = 0;
	Object.values(global.Master.DragonData).forEach((Entry) => {
		if (Entry['_IsPlayable'] == 0 || DragonID != 0) { return; }
		if (global.Master.TextLabel[Entry['_SecondName']] == undefined) {
			if (global.Master.TextLabel[Entry['_Name']]['_Text'] == Name) {
				DragonID = Entry['_Id'];
			}
		}
		else if (global.Master.TextLabel[Entry['_SecondName']]['_Text'] == Name) { DragonID = Entry['_Id']; }
	});
	return DragonID;
}

let UnitList = {
	"5": [],
	"4": [],
	"3": []
};
Object.values(global.Master.DragonData).forEach((Unit) => {
	if (Unit['_IsPlayable'] == 1) {
		UnitList[String(Unit['_Rarity'])].push(Unit['_Id']);
	}
});
const Blacklist = [ 20040101, 20050102, 20040301, 20050302, 20040201, 20050202,
					20040401, 20050402, 20040501, 20050502, 20050511, 20040504,
					20040505, 20050103, 20050105, 20050111, 20050115, 20050206,
					20050215, 20050303, 20050307, 20050310, 20050417, 20050504,
					20050505, 20050507, 20050512, 20050515, 20050517, 
				    29900001, 29900002, 29900003, 29900004, 29900005, 29900006,
				    29900007, 29900008, 29900009, 29900010, 29900011, 29900012,
				    29900013, 29900014, 29900015, 29900016, 29900017, 29900018,
				    29900019, 29900020, 29900021, 29900022, 29900023, 29900024,
				    29900025, 29900026, 29900027,								
					29800001, 29800002, 29800003,
					21000001, 21000002, 21000003, 21000004, 21000005, 21000006,
					29950116, 29950121, 29950317, 29950320, 29950405, 29950415,
					29950416, 29950518, 29950522, 29950523, 29950524, 29950525,
					20050513,
					29990001, 29990002, 29990003, 29990004, 29990005, 29990006 ];
function Draw(SummonID, BannerData, IsTenfold, IsPlatinum) {
	let ID = 0;
	if (BannerData != undefined && BannerData['dragons'][0] != undefined) {
		let RerollCount = 6;
		ID = BannerData['dragons'][Math.floor(Math.random() * BannerData['dragons'].length)];
		const Boosted = BannerData['dragons'][Math.floor(Math.random() * BannerData['dragons'].length)];
		if (BannerData['boost_rate'].includes(Boosted)) {
			ID = Boosted; RerollCount = 3;
		}
		while (RerollCount > 0) {
			let MinRarity = 3;
			if (IsTenfold == true && IsPlatinum == true) { MinRarity = 5; }
			else if (IsTenfold == true) { MinRarity = 4; }
			let Redraw = BannerData['dragons'][Math.floor(Math.random() * BannerData['dragons'].length)];
			let RedrawRarity = GetInfo(Redraw, "_Rarity");
			while (RedrawRarity < MinRarity) {
				Redraw = BannerData['dragons'][Math.floor(Math.random() * BannerData['dragons'].length)];
				RedrawRarity = GetInfo(Redraw, "_Rarity");
			}
			if (RedrawRarity < GetInfo(ID, "_Rarity")) { ID = Redraw; }
			RerollCount = RerollCount - 1;
		}
	}
	else {
		let FinalRoll = 5;
		let r = 0; while (r < 2) {
			const Reroll = Math.floor(Math.random() * 3) + 3;
			if (Reroll < FinalRoll) { FinalRoll = Reroll; }
			r++;
		}
		ID = UnitList[String(FinalRoll)][Math.floor(Math.random() * UnitList[String(FinalRoll)].length)];
		while (Blacklist.includes(ID)) {
			ID = UnitList[String(FinalRoll)][Math.floor(Math.random() * UnitList[String(FinalRoll)].length)];
		}
	}
	
	return { 'entity_type': 7, 'id': ID, 'rarity': GetInfo(ID, "_Rarity") }
}

module.exports = { GetInfo, GetUnitData, RaiseLimit, RaiseLevel, RaiseBond, Create, CreateMax, GetIDByName, Draw }
