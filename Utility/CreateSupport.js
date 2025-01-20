const fs = require('fs');
const Now = Math.floor(Date.now() / 1000);
global.Master = {};
let MasterList = fs.readdirSync('../Library/Master');
for (const x in MasterList) {
	global.Master[MasterList[x].slice(0, MasterList[x].length - 5)] = JSON.parse(fs.readFileSync('../Library/Master/' + MasterList[x]));
}

function MaxCharacter(ID) {
	function GetInfo(CharacterID, Attribute) {
		return global.Master.CharaData[String(CharacterID)][String(Attribute)];
	}
	function GetNodeValue(NodeID, TypeID, CircleName, CharacterID) {
		const MCData = global.Master.MC[CircleName].find(z => z._Id == NodeID);
		const PieceType = MCData['_ManaPieceType'];
		const CurrentFloor = MCData['_Hierarchy'];
		let FloorTotal = 0;
		for (const x in global.Master.MC[CircleName]) {
			if (global.Master.MC[CircleName][x]['_ManaPieceType'] == PieceType && global.Master.MC[CircleName][x]['_Hierarchy'] == CurrentFloor) {
				FloorTotal += 1;
			}
		}
		
		let SingleValue = 0;
		if (TypeID == 10101) {
			SingleValue = Math.ceil(GetInfo(CharacterID, "_PlusHp" + String(CurrentFloor - 1)) / FloorTotal);
		}
		else if (TypeID == 10102) {
			SingleValue = Math.ceil(GetInfo(CharacterID, "_PlusAtk" + String(CurrentFloor - 1)) / FloorTotal);
		}
		return SingleValue;
	}
	function GetNodeStep(NodeID, CircleName, NodeList) {
		let Step = 1;
		const MCData = global.Master.MC[CircleName].find(z => z._Id == NodeID);
		const PieceType = MCData['_ManaPieceType'];
		for (const x in NodeList) {
			const StepMCData = global.Master.MC[CircleName].find(z => z._Id == NodeList[x]);
			if (StepMCData['_ManaPieceType'] == PieceType) { Step = Step + 1; }
		}
		return Step;
	}
	function CalculateStats(CharacterID, Data) {
		let HP = GetInfo(CharacterID, "_MinHp" + String(Data['rarity']));
		let Attack = GetInfo(CharacterID, "_MinAtk" + String(Data['rarity']));
		if (Data['mana_circle_piece_id_list'].length >= 70) {
			HP = GetInfo(CharacterID, "_AddMaxHp1") + GetInfo(CharacterID, "_McFullBonusHp5");
			Attack = GetInfo(CharacterID, "_AddMaxAtk1") + GetInfo(CharacterID, "_McFullBonusAtk5");
		}
		else if (Data['mana_circle_piece_id_list'].length >= 50) {
			HP = GetInfo(CharacterID, "_MaxHp") + GetInfo(CharacterID, "_McFullBonusHp5");
			Attack = GetInfo(CharacterID, "_MaxAtk") + GetInfo(CharacterID, "_McFullBonusAtk5");
		}
		
		const CircleName = GetInfo(CharacterID, "_ManaCircleName");
		for (const x in Data['mana_circle_piece_id_list']) {
			const NodeID = Data['mana_circle_piece_id_list'][x];
			const MCData = global.Master.MC[CircleName].find(z => z._Id == NodeID);
			const TypeID = MCData['_ManaPieceType'];
			const ToAdd = GetNodeValue(NodeID, TypeID, CircleName, CharacterID);
			if (TypeID == 10101) { HP = HP + ToAdd; }
			else if (TypeID == 10102) { Attack = Attack + ToAdd; }
		}
		return { 'HP': HP, 'Attack': Attack }
	}
	function Create(CharacterID, Level) {
		const Rarity = GetInfo(CharacterID, "_Rarity");
		const Stats = CalculateStats(CharacterID, {
			'rarity': Rarity,
			'mana_circle_piece_id_list': []
		});
		const Data = {
			"chara_id": CharacterID,
			"rarity": GetInfo(CharacterID, "_Rarity"),
			"exp": 0,
			"level": Level != undefined ? Level : 1,
			"additional_max_level": 0,
			"hp_plus_count": 100,
			"attack_plus_count": 100,
			"limit_break_count": 0,
			"is_new": 0,
			"gettime": Now,
			"skill_1_level": 1,
			"skill_2_level": 0,
			"ability_1_level": GetInfo(CharacterID, "_DefaultAbility1Level"),
			"ability_2_level": GetInfo(CharacterID, "_DefaultAbility2Level"),
			"ability_3_level": GetInfo(CharacterID, "_DefaultAbility3Level"),
			"burst_attack_level": GetInfo(CharacterID, "_DefaultBurstAttackLevel"),
			"combo_buildup_count": 0,
			"hp": Stats['HP'],
			"attack": Stats['Attack'],
			"ex_ability_level": 1,
			"ex_ability_2_level": 1,
			"is_temporary": 0,
			"is_unlock_edit_skill": GetInfo(CharacterID, "_DefaultIsUnlockEditSkill"),
			"mana_circle_piece_id_list": [],
			"list_view_flag": 1
		}
		return Data;
	}
	
	const CircleName = GetInfo(ID, "_ManaCircleName");
	let CharacterData = Create(ID, 1);
	let StoryList = [];
	CharacterData['limit_break_count'] = GetInfo(ID, "_MaxLimitBreakCount");
	
	const NodeCount = CharacterData['limit_break_count'] == 5 ? 70 : 50;
	if (NodeCount == 70) { CharacterData['additional_max_level'] = 5; }
	while (CharacterData['mana_circle_piece_id_list'].length < NodeCount) {
		const NodeData = global.Master.MC[CircleName].find(z => z._Id == CharacterData['mana_circle_piece_id_list'].length + 1);
		const NodeType = NodeData['_ManaPieceType'];
		const Step = GetNodeStep(CharacterData['mana_circle_piece_id_list'].length + 1, CircleName, CharacterData['mana_circle_piece_id_list']);
		switch(NodeType) {
			case 10101: break;
			case 10102: break;
			case 10201:
				CharacterData['burst_attack_level'] += 1;
			break;
			case 10301:
				CharacterData['ability_1_level'] += 1;
			break;
			case 10302:
				CharacterData['ability_2_level'] += 1;
			break;
			case 10303:
				CharacterData['ability_3_level'] += 1;
			break;
			case 10401:
				CharacterData['skill_1_level'] += 1;
			break;
			case 10402:
				CharacterData['skill_2_level'] += 1;
			break;
			case 10501:
				CharacterData['ex_ability_level'] += 1;
				CharacterData['ex_ability_2_level'] += 1;
			break;
			case 10601: undefined;
			case 10602:
			break;
			case 10701:
				CharacterData['combo_buildup_count'] += 1;
			break;
			case 10801:
				CharacterData['additional_max_level'] += 5;
			break;
		}
		CharacterData['mana_circle_piece_id_list'].push(CharacterData['mana_circle_piece_id_list'].length + 1);
	}
	
	if (NodeCount == 50) {
		CharacterData['level'] = 80;
		CharacterData['exp'] = 1191950;
	}
	else if (NodeCount == 70) {
		CharacterData['level'] = 100;
		CharacterData['exp'] = 8866950;
	}
	
	CharacterData['rarity'] = 5;
	const Stats = CalculateStats(ID, CharacterData)
	CharacterData['hp'] = Stats['HP'];
	CharacterData['attack'] = Stats['Attack'];
	return CharacterData;
}
function MaxDragon(KeyID, ID) {
	function GetInfo(DragonID, Attribute) {
		return global.Master.DragonData[String(DragonID)][String(Attribute)];
	}
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
		'get_time': Now,
		'skill_1_level': 2,
		'ability_1_level': MaxLimitBreak + 1,
		'ability_2_level': MaxLimitBreak + 1,
		'limit_break_count': MaxLimitBreak
	}
}
function MaxWeapon(ID) {
	function GetInfo(WeaponID, Attribute) {
		return global.Master.WeaponBody[String(WeaponID)][String(Attribute)];
	}
	const Rarity = GetInfo(ID, "_Rarity");
	const MaxLimitOver = GetInfo(ID, "_MaxLimitOverCount");
	let MaxLevel = global.Master.WeaponBodyRarity[String(Rarity)]['_MaxLimitLevelByLimitBreak4'];
	let MaxLimit = 4;
	if (MaxLimitOver == 1) { MaxLevel = global.Master.WeaponBodyRarity[String(Rarity)]['_MaxLimitLevelByLimitBreak8']; MaxLimit = 8; }
	if (MaxLimitOver == 2) { MaxLevel = global.Master.WeaponBodyRarity[String(Rarity)]['_MaxLimitLevelByLimitBreak9']; MaxLimit = 9; }
	let PassiveList = [];
	Object.values(global.Master.WeaponPassiveAbility).forEach((Passive) => {
		if (Passive['_WeaponPassiveAbilityGroupId'] == GetInfo(ID, "_WeaponPassiveAbilityGroupId")) {
			PassiveList.push(1);
		}
	});
	while (PassiveList.length < 15) { PassiveList.push(0); }
	return {
        'weapon_body_id': ID,
        'buildup_count': MaxLevel,
        'limit_break_count': MaxLimit,
        'limit_over_count': MaxLimitOver,
        'equipable_count': 4,
        'additional_crest_slot_type_1_count': GetInfo(ID, "_CrestSlotType1MaxCount") - GetInfo(ID, "_CrestSlotType1BaseCount"),
        'additional_crest_slot_type_2_count': GetInfo(ID, "_CrestSlotType2MaxCount") - GetInfo(ID, "_CrestSlotType2BaseCount"),
        'additional_crest_slot_type_3_count': GetInfo(ID, "_CrestSlotType3MaxCount") - GetInfo(ID, "_CrestSlotType3BaseCount"),
        'additional_effect_count': 0,
        'unlock_weapon_passive_ability_no_list': PassiveList,
        'fort_passive_chara_weapon_buildup_count': 1,
        'is_new': 0,
        'gettime': Now
	}
}
function MaxCrest(ID) {
	function GetInfo(CrestID, Attribute) {
		return global.Master.AbilityCrest[String(CrestID)][String(Attribute)];
	}
	const Rarity = GetInfo(ID, "_Rarity");
	return {
		'ability_crest_id': ID,
		'buildup_count': global.Master.AbilityCrestRarity[String(Rarity)]['_MaxLimitLevelByLimitBreak4'],
		'limit_break_count': 4,
		'equipable_count': GetInfo(ID, "_MaxEquipableCount"),
		'hp_plus_count': global.Master.AbilityCrestRarity[String(Rarity)]['_MaxHpPlusCount'],
		'attack_plus_count': global.Master.AbilityCrestRarity[String(Rarity)]['_MaxAtkPlusCount'],
		'is_new': 0,
		'is_favorite': 0,
		'gettime': Now
	}
}

let SupportData = {
	'support_user_list': [],
	'support_user_detail_list': []
}
const SupportList = JSON.parse(fs.readFileSync('./SupportList.json'));
SupportList.forEach((Helper) => {
	let CharacterID = 0;
	let DragonID = 0;
	let WeaponID = 0;
	let CrestList1 = [];
	let CrestList2 = [];
	let CrestList3 = [];
	
	Object.values(global.Master.CharaData).forEach((Entry) => {
		if (Entry['_IsPlayable'] == 0 || CharacterID != 0) { return; }
		if (global.Master.TextLabel[Entry['_SecondName']] == undefined) {
			if (global.Master.TextLabel[Entry['_Name']]['_Text'] == Helper['Character']) {
				CharacterID = Entry['_Id'];
			}
		}
		else if (global.Master.TextLabel[Entry['_SecondName']]['_Text'] == Helper['Character']) { CharacterID = Entry['_Id']; }
	});
	Object.values(global.Master.DragonData).forEach((Entry) => {
		if (Entry['_IsPlayable'] == 0 || DragonID != 0) { return; }
		if (global.Master.TextLabel[Entry['_SecondName']] == undefined) {
			if (global.Master.TextLabel[Entry['_Name']]['_Text'] == Helper['Dragon']) {
				DragonID = Entry['_Id'];
			}
		}
		else if (global.Master.TextLabel[Entry['_SecondName']]['_Text'] == Helper['Dragon']) { DragonID = Entry['_Id']; }
	});
	Object.values(global.Master.WeaponBody).forEach((Entry) => {
		if (Entry['_IsPlayable'] == 0 || WeaponID != 0) { return; }
		if (global.Master.TextLabel[Entry['_Name']]['_Text'] == Helper['Weapon']) { WeaponID = Entry['_Id']; }
	});
	Helper['5'].forEach((Crest) => {
		Object.values(global.Master.AbilityCrest).forEach((Entry) => {
			if (Entry['_IsPlayable'] == 0) { return; }
			if (global.Master.TextLabel[Entry['_Name']]['_Text'] == Crest) { CrestList1.push(Entry['_Id']); }
		});
	});
	Helper['4'].forEach((Crest) => {
		Object.values(global.Master.AbilityCrest).forEach((Entry) => {
			if (Entry['_IsPlayable'] == 0) { return; }
			if (global.Master.TextLabel[Entry['_Name']]['_Text'] == Crest) { CrestList2.push(Entry['_Id']); }
		});
	});
	Helper['9'].forEach((Crest) => {
		let SplitName = Crest.split(" ");
		let Boon = SplitName[SplitName.length - 2] + " " + SplitName[SplitName.length - 1];
		let RealName = "";
		let z = 0; while (z < SplitName.length - 2) {
			RealName += SplitName[z] + " ";
			z++;
		}
		RealName = RealName.slice(0, RealName.length - 1);
		Object.values(global.Master.AbilityCrest).forEach((Entry) => {
			if (Entry['_IsPlayable'] == 0) { return; }
			if (global.Master.TextLabel[Entry['_Name']]['_Text'] == RealName) {
				let IsMatch = false;
				switch(Entry['_UnionAbilityGroupId']) {
					case 1:
						if (Boon == "(Crown\'s Boon)") { IsMatch = true; }
					break;
					case 2:
						if (Boon == "(Axe\'s Boon)") { IsMatch = true; }
					break;
					case 3:
						if (Boon == "(Sword\'s Boon)") { IsMatch = true; }
					break;
					case 4:
						if (Boon == "(Bow\'s Boon)") { IsMatch = true; }
					break;
					case 5:
						if (Boon == "(Dragon\'s Boon)") { IsMatch = true; }
					break;
					case 6:
						if (Boon == "(Lance\'s Boon)") { IsMatch = true; }
					break;
					case 7:
						if (Boon == "(Eagle\'s Boon)") { IsMatch = true; }
					break;
					case 8:
						if (Boon == "(Wolf\'s Boon)") { IsMatch = true; }
					break;
					case 9:
						if (Boon == "(Bull\'s Boon)") { IsMatch = true; }
					break;
					case 10:
						if (Boon == "(Serpent\'s Boon)") { IsMatch = true; }
					break;
					case 11:
						if (Boon == "(Staff\'s Boon)") { IsMatch = true; }
					break;
					case 12:
						if (Boon == "(Spider\'s Boon)") { IsMatch = true; }
					break;
					case 13:
						if (Boon == "(Deer\'s Boon)") { IsMatch = true; }
					break;
					case 14:
						if (Boon == "(Bat\'s Boon)") { IsMatch = true; }
					break;
					case 15:
						if (Boon == "(Fish\'s Boon)") { IsMatch = true; }
					break;
					case 16:
						if (Boon == "(Butterfly\'s Boon)") { IsMatch = true; }
					break;
				}
				if (IsMatch == true) { CrestList3.push(Entry['_Id']); }
			}
		});
	});
	
	let Index = {
		'party_power_data': {
			'max_party_power': 50000
		},
		'chara_list': [ MaxCharacter(CharacterID) ],
		'dragon_list': [ MaxDragon(1, DragonID) ],
		'dragon_reliability_list': [{
			"dragon_id": DragonID,
			"gettime": Now,
			"reliability_level": 30,
			"reliability_total_exp": global.Master.DragonData[String(DragonID)]['_Rarity'] == 5 ? 36300 : 2900,
			"last_contact_time": Now
		}],
		'weapon_body_list': [ MaxWeapon(WeaponID) ],
		'ability_crest_list': [
			MaxCrest(CrestList1[0]), MaxCrest(CrestList1[1]), MaxCrest(CrestList1[2]),
			MaxCrest(CrestList2[0]), MaxCrest(CrestList2[1]),
			MaxCrest(CrestList3[0]), MaxCrest(CrestList3[1])
		]
	}
	let Persist = {
		'User': {
			'viewer_id': 11 + SupportData['support_user_detail_list'].length,
			'name': Helper['Character'],
			'level': 120,
			'exp': 10000000,
			'crystal': 1,
			'coin': 1,
			'max_dragon_quantity': 1,
			'max_weapon_quantity': 1,
			'max_amulet_quantity': 1,
			'quest_skip_point': 1,
			'main_party_no': 1,
			'emblem_id': CharacterID,
			'active_memory_event_id': 0,
			'mana_point': 0,
			'dew_point': 0,
			'build_time_point': 0,
			'last_login_time': 0,
			'stamina_single': 0,
			'last_stamina_single_update_time': 0,
			'stamina_single_surplus_second': 0,
			'stamina_multi': 0,
			'last_stamina_multi_update_time': 0,
			'stamina_multi_surplus_second': 0,
			'tutorial_status': 60999,
			'tutorial_flag_list': [],				
			'prologue_end_time': 1595969801,
			'is_optin': 1,
			'fort_open_time': 0,
			'create_time': 0
		},
		'Support': {
			'last_active_time': Now,
			'chara_id': CharacterID,
			'equip_dragon_key_id': 1,
			'equip_weapon_body_id': WeaponID,
			'equip_crest_slot_type_1_crest_id_1': CrestList1[0],
			'equip_crest_slot_type_1_crest_id_2': CrestList1[1],
			'equip_crest_slot_type_1_crest_id_3': CrestList1[2],
			'equip_crest_slot_type_2_crest_id_1': CrestList2[0],
			'equip_crest_slot_type_2_crest_id_2': CrestList2[1],
			'equip_crest_slot_type_3_crest_id_1': CrestList3[0],
			'equip_crest_slot_type_3_crest_id_2': CrestList3[1],
			'equip_talisman_key_id': 0,
			'user_level_group': 0
		},
		'ViewerID': 11 + SupportData['support_user_detail_list'].length
	}
	SupportData['support_user_list'].push({
		'viewer_id': 11 + SupportData['support_user_detail_list'].length,
		'name': Helper['Character'],
		'level': 120,
		'last_login_date': Now,
		'emblem_id': CharacterID,
		'max_party_power': 50000,
		'support_chara': Index['chara_list'][0],
		'support_dragon': { 'dragon_key_id': 1 },
		'support_weapon_body': { 'weapon_body_id': WeaponID },
		'support_talisman': { 'talisman_key_id': 0 },
		'support_crest_slot_type_1_list': [
			{ 'ability_crest_id': CrestList1[0] }, { 'ability_crest_id': CrestList1[1] },
			{ 'ability_crest_id': CrestList1[2] }
		],
		'support_crest_slot_type_2_list': [
			{ 'ability_crest_id': CrestList2[0] }, { 'ability_crest_id': CrestList2[1] }
		],
		'support_crest_slot_type_3_list': [
			{ 'ability_crest_id': CrestList3[0] }, { 'ability_crest_id': CrestList3[1] }
		],
		'guild': { 'guild_id': 0 }
	});
	SupportData['support_user_detail_list'].push({
		"viewer_id": 11 + SupportData['support_user_detail_list'].length,
		"gettable_mana_point": 0,
		"is_friend": 1
	});
	fs.writeFileSync('./Index/index_' + String(11 + SupportData['support_user_detail_list'].length - 1) + ".json", JSON.stringify(Index, null, 2));
	fs.writeFileSync('./Persist/persist_' + String(11 + SupportData['support_user_detail_list'].length - 1) + ".json", JSON.stringify(Persist, null, 2));
});
fs.writeFileSync('./Support.json', JSON.stringify(SupportData, null, 2));