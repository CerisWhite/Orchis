const fs = require('fs');

const QuestEnemyList = JSON.parse(fs.readFileSync('./Library/Event/QuestEnemyList.json'));

const PassiveIDs = Object.keys(global.Master.DmodeServitorPassiveLevel);
async function BuildPassive(BuildList, res) {
	for (const x in BuildList) {
		const PassiveID = BuildList[x]['passive_no'];
		const RequestLevel = BuildList[x]['passive_level'];
		if (RequestLevel > 20) { RequestLevel = 20; }
		const Index = res.mid.Persist['DMode']['Passive'].findIndex(z => z.passive_no == PassiveID);
		res.mid.Persist['DMode']['Passive'][Index]['passive_level'] = RequestLevel;
		let Cost = {};
		for (const z in PassiveIDs) {
			if (global.Master.DmodeServitorPassiveLevel[PassiveIDs[z]]['_PassiveNum'] == PassiveID
			&& global.Master.DmodeServitorPassiveLevel[PassiveIDs[z]]['_Level'] == RequestLevel) {
				Cost = global.Master.DmodeServitorPassiveLevel[PassiveIDs[z]];
				break;
			}
		}
		res.mid.ItemList.push({ 'type': Cost['_ReleaseEntityType1'], 'id': Cost['_ReleaseEntityId1'], 'quantity': Cost['_ReleaseEntityQuantity1'] * -1 });
		res.mid.ItemList.push({ 'type': Cost['_ReleaseEntityType2'], 'id': Cost['_ReleaseEntityId2'], 'quantity': Cost['_ReleaseEntityQuantity2'] * -1 });
	}
	res.mid.Data = {
		'dmode_servitor_passive_list': res.mid.Persist['DMode']['Passive']
	}
	return;
}

const TalismanIDs = Object.keys(global.Master.TalismanData);
const SpecialList = [1604, 110120004, 100000401, 100001301, 100001401, 100001501, 100001601, 100001701];
function GenerateTalisman(res, CharacterID, Floor) {
	let List = {
		'Reward': [],
		'Update': []
	}
	let Count = 0;
	let Complexity = 0;
	let AbilityCount = Math.floor(Math.random() * 3);
	let UseSpecial = false;
	if (Floor >= 60) {
		Count = Math.floor(Math.random() * 4) + 5;
		Complexity = 8;
		AbilityCount = 2;
		UseSpecial = true;
	}
	else if (Floor >= 50) {
		Count = Math.floor(Math.random() * 4) + 3;
		Complexity = 8;
		AbilityCount = 2;
		UseSpecial = true;
	}
	else if (Floor >= 40) {
		Count = Math.floor(Math.random() * 3) + 3;
		Complexity = 6;
		AbilityCount = Math.floor(Math.random() * 2) + 1;
	}
	else if (Floor >= 30) {
		Count = Math.floor(Math.random() * 3) + 2;
		Complexity = 5;
		AbilityCount = Math.floor(Math.random() * 2) + 1;
	}
	else if (Floor >= 20) {
		Count = Math.floor(Math.random() * 2) + 2;
		Complexity = 4;
	}
	else if (Floor >= 0) {
		Count = Math.floor(Math.random() * 2) + 2;
		Complexity = 3;
	}
	let PortraitID = 0;
	for (const x in TalismanIDs) {
		if (global.Master.TalismanData[TalismanIDs[x]]['_TalismanCharaId'] == CharacterID) {
			PortraitID = global.Master.TalismanData[TalismanIDs[x]]['_Id']; break;
		}
	}
	if (PortraitID == 0) { PortraitID = 50140101; }
	
	while (List['Update'].length < Count) {
		let AbilityList = [];
		let UsedBase = [];
		while (AbilityList.length < AbilityCount) {
			let AbilityBase = 340000000 + (Math.floor(Math.random() * 13) * 10);
			while (UsedBase.includes(AbilityBase)) {
				AbilityBase = 340000000 + (Math.floor(Math.random() * 13) * 10);
			}
			UsedBase.push(AbilityBase);
			const AbilityLevel = Math.floor(Math.random() * 3) + Complexity;
			if (AbilityLevel > 10) { AbilityLevel = 10; }
			if (AbilityList.length == 1 && Complexity > 6 && (Math.random() * 20) > 10) {
				AbilityList.push(340000130 + Math.floor(Math.random() * 4) + 1);
				continue;
			}
			AbilityList.push(AbilityBase + AbilityLevel);
		}
		if (UseSpecial == true && AbilityCount == 2 && (Math.random() * 20) > 10) {
			AbilityList.push(SpecialList[Math.floor(Math.random() * SpecialList.length)]);
		}
		
		let Additional = 0;
		switch(AbilityCount) {
			case 0: Additional = 100; break;
			case 1: Additional = 50; break;
		}
		res.mid.Persist['Key']['Talisman'] += 1;
		List['Reward'].push({
			'talisman_id': PortraitID,
			'talisman_ability_id_1': AbilityList[0] != undefined ? AbilityList[0] : 0,
			'talisman_ability_id_2': AbilityList[1] != undefined ? AbilityList[1] : 0,
			'talisman_ability_id_3': AbilityList[2] != undefined ? AbilityList[2] : 0,
			'additional_hp': Additional,
			'additional_attack': Additional
		});
		List['Update'].push({
			'talisman_key_id': res.mid.Persist['Key']['Talisman'],
			'talisman_id': PortraitID,
			'is_lock': 0,
			'is_new': 0,
			'talisman_ability_id_1': AbilityList[0] != undefined ? AbilityList[0] : 0,
			'talisman_ability_id_2': AbilityList[1] != undefined ? AbilityList[1] : 0,
			'talisman_ability_id_3': AbilityList[2] != undefined ? AbilityList[2] : 0,
			'additional_hp': Additional,
			'additional_attack': Additional,
			'gettime': global.ServerTime
		});
	}
	
	return List;
}
function ExpeditionTalisman(Expedition, res) {
	let List = {
		'Reward': [],
		'Update': []
	};
	let Count = 0;
	let Complexity = 1;
	switch(Expedition['target_floor_num']) {
		case 10: Count = 2; Complexity = 1; break;
		case 15: Count = 2; Complexity = 1; break;
		case 20: Count = 3; Complexity = 2; break;
		case 25: Count = 4; Complexity = 2; break;
		case 30: Count = 5; Complexity = 4; break;
		case 35: Count = 5; Complexity = 4; break;
		case 40: Count = 6; Complexity = 4; break;
	}
	while (List['Update'].length < Count) {
		let Character = 0;
		while (Character == 0) {
			const Roll = Math.floor(Math.random() * 4) + 1;
			Character = Expedition['chara_id_' + String(Roll)];
		}
		let AbilityCount = Math.floor(Math.random() * 3);
		if (Complexity > 2) {
			AbilityCount = Math.floor(Math.random() * 2) + 1;
		}
		let AbilityList = [];
		let UsedBase = [];
		while (AbilityList.length < AbilityCount) {
			let AbilityBase = 340000000 + (Math.floor(Math.random() * 13) * 10);
			while (UsedBase.includes(AbilityBase)) {
				AbilityBase = 340000000 + (Math.floor(Math.random() * 13) * 10);
			}
			UsedBase.push(AbilityBase);
			const AbilityLevel = Math.floor(Math.random() * 5) + Complexity;
			AbilityList.push(AbilityBase + AbilityLevel);
		}
		let PortraitID = 0;
		for (const x in TalismanIDs) {
			if (global.Master.TalismanData[TalismanIDs[x]]['_TalismanCharaId'] == Character) {
				PortraitID = global.Master.TalismanData[TalismanIDs[x]]['_Id']; break;
			}
		}
		if (PortraitID == 0) { PortraitID = 50140101; }
		let Additional = 0;
		switch(AbilityCount) {
			case 0: Additional = 100; break;
			case 1: Additional = 50; break;
		}
		
		res.mid.Persist['Key']['Talisman'] += 1;
		List['Update'].push({
			'talisman_key_id': res.mid.Persist['Key']['Talisman'],
			'talisman_id': PortraitID,
			'is_lock': 0,
			'is_new': 0,
			'talisman_ability_id_1': AbilityList[0] != undefined ? AbilityList[0] : 0,
			'talisman_ability_id_2': AbilityList[1] != undefined ? AbilityList[1] : 0,
			'talisman_ability_id_3': AbilityList[2] != undefined ? AbilityList[2] : 0,
			'additional_hp': Additional,
			'additional_attack': Additional,
			'gettime': global.ServerTime
		});
		List['Reward'].push({
			'talisman_id': PortraitID,
			'talisman_ability_id_1': AbilityList[0] != undefined ? AbilityList[0] : 0,
			'talisman_ability_id_2': AbilityList[1] != undefined ? AbilityList[1] : 0,
			'talisman_ability_id_3': AbilityList[2] != undefined ? AbilityList[2] : 0,
			'additional_hp': Additional,
			'additional_attack': Additional
		});
	}
	
	return List;
}

async function ExpeditionFinish(res) {
	const Dusk = global.Master.DmodeExpeditionFloor[String(res.mid.Persist['DMode']['Expedition']['target_floor_num'])]['_RewardDmodePoint1'];
	const Dawn = global.Master.DmodeExpeditionFloor[String(res.mid.Persist['DMode']['Expedition']['target_floor_num'])]['_RewardDmodePoint2'];
	res.mid.Persist['DMode']['Info']['dmode_point_1'] += Dusk;
	res.mid.Persist['DMode']['Info']['dmode_point_2'] += Dawn;
	res.mid.Persist['DMode']['Expedition']['state'] = 1;
	const NewTalisman = ExpeditionTalisman(
		res.mid.Persist['DMode']['Expedition'],
		res
	);
	res.mid.Data = {
		'dmode_ingame_result': {
			'floor_num': res.mid.Persist['DMode']['Expedition']['target_floor_num'],
			'is_record_floor_num': 0,
			'chara_id_list': [
				res.mid.Persist['DMode']['Expedition']['chara_id_1'],
				res.mid.Persist['DMode']['Expedition']['chara_id_2'],
				res.mid.Persist['DMode']['Expedition']['chara_id_3'],
				res.mid.Persist['DMode']['Expedition']['chara_id_4']
			],
			'reward_talisman_list': NewTalisman['Reward'],
			'take_dmode_point_1': Dusk,
			'take_dmode_point_2': Dawn,
			'take_player_exp': 0,
			'player_level_up_fstone': 0,
			'quest_time': 0,
			'is_view_quest_time': 0,
			'dmode_score': 0,
			'clear_state': 0
		},
		'dmode_expedition': res.mid.Persist['DMode']['Expedition'],
		'update_data_list': {
			'dmode_info': res.mid.Persist['DMode']['Info'],
			'talisman_list': NewTalisman['Update']
		}
	}
	return;
}

async function DungeonStart(res, LastServerReset) {
	res.mid.Persist['DMode']['State'] = {
		'Key': String((Math.random() * 2).toFixed(15)).slice(2, 13),
		'Complete': false,
		'Unit': {
			'level': 1,
			'exp': 0,
			'dmode_hold_dragon_list': [],
			'equip_crest_item_no_sort_list': [0, 0, 0],
			'bag_item_no_sort_list': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			'skill_bag_item_no_sort_list': [0, 0, 0, 0, 0, 0, 0, 0],
			'take_dmode_point_1': 0,
			'take_dmode_point_2': 0
		},
		'Servitor': res.mid.Request['servitor_id'],
		'Shared': [],
		'ItemCount': 0,
		'ItemList': [],
		'DragonList': [],
		'Stage': {
			'Theme': 0,
			'Area': 0
		},
		'Agito': Math.floor(Math.random() * 4)
	}
	for (const x in res.mid.Request['bring_edit_skill_chara_id_list']) {
		res.mid.Persist['DMode']['State']['ItemCount'] += 1;
		let TargetShareID = res.mid.Request['bring_edit_skill_chara_id_list'][x];
		if (global.Master.CharaData[TargetShareID] == undefined) { TargetShareID = 10840501; }
		const SharedID = global.Module.Character.GetInfo(TargetShareID, "_EditSkillId");
		res.mid.Persist['DMode']['State']['ItemList'].push({
			'item_no': res.mid.Persist['DMode']['State']['ItemCount'],
			'item_id': SharedID,
			'item_state': 14,
			'option': []
		});
		res.mid.Persist['DMode']['State']['Unit']['skill_bag_item_no_sort_list'][x] = res.mid.Persist['DMode']['State']['ItemCount'];
		res.mid.Persist['DMode']['State']['Shared'].push(TargetShareID);
	}
	res.mid.Persist['DMode']['Dungeon'] = {
		'chara_id': res.mid.Request['chara_id'],
		'floor_num': res.mid.Request['start_floor_num'],
		'quest_time': 0,
		'dungeon_score': 0,
		'is_play_end': 0,
		'state': 2
	}
	const CharaListIndex = res.mid.Persist['DMode']['CharacterList'].findIndex(z => z.chara_id == res.mid.Request['chara_id']);
	if (CharaListIndex == -1) {
		res.mid.Persist['DMode']['CharacterList'].push({
			'chara_id': res.mid.Request['chara_id'],
			'max_floor_num': 0,
			'select_servitor_id': res.mid.Request['servitor_id'],
			'select_edit_skill_chara_id_1': res.mid.Request['bring_edit_skill_chara_id_list'][0],
			'select_edit_skill_chara_id_2': res.mid.Request['bring_edit_skill_chara_id_list'][1],
			'select_edit_skill_chara_id_3': 0,
			'max_dmode_score': 0
		});
	}
	else {
		res.mid.Persist['DMode']['CharacterList'][CharaListIndex]['select_servitor_id'] = res.mid.Request['servitor_id'];
		res.mid.Persist['DMode']['CharacterList'][CharaListIndex]['select_edit_skill_chara_id_1'] = res.mid.Request['bring_edit_skill_chara_id_list'][0];
		res.mid.Persist['DMode']['CharacterList'][CharaListIndex]['select_edit_skill_chara_id_2'] = res.mid.Request['bring_edit_skill_chara_id_list'][1];
	}
	
	res.mid.Data = {
		'dmode_dungeon_state': 2,
		'dmode_ingame_data': {
			'recovery_count': res.mid.Persist['DMode']['Recovery'],
			'recovery_time': LastServerReset,
			'unique_key': res.mid.Persist['DMode']['State']['Key'],
			'start_floor_num': res.mid.Persist['DMode']['Dungeon']['floor_num'],
			'target_floor_num': 60,
			'dmode_level_group_id': 1,
			'unit_data': global.Module.Character.DModeStats(res.mid.Request['chara_id']),
			'servitor_id': res.mid.Request['servitor_id'],
			'dmode_servitor_passive_list': res.mid.Persist['DMode']['Passive']
		}
	}
	return;
}

async function DungeonRestart(res, LastServerReset) {
	res.mid.Persist['DMode']['Dungeon']['state'] = 7;
	res.mid.Data = {
		'dmode_dungeon_state': 7,
		'dmode_dungeon_info': res.mid.Persist['DMode']['Dungeon'],
		'dmode_ingame_data': {
			'recovery_count': res.mid.Persist['DMode']['Recovery'],
			'recovery_time': LastServerReset,
			'unique_key': res.mid.Persist['DMode']['State']['Key'],
			'start_floor_num': res.mid.Persist['DMode']['Dungeon']['floor_num'],
			'target_floor_num': 60,
			'dmode_level_group_id': 1,
			'unit_data': global.Module.Character.DModeStats(res.mid.Persist['DMode']['Dungeon']['chara_id']),
			'servitor_id': res.mid.Persist['DMode']['State']['Servitor'],
			'dmode_servitor_passive_list': res.mid.Persist['DMode']['Passive']
		}
	}
	return;
}

const DragonIDs = Object.keys(global.Master.DragonData);
let DModeDragonList = [];
for (const x in DragonIDs) {
	if (global.Master.DragonData[DragonIDs[x]]['_DmodePassiveAbilityId'] != 0) {
		DModeDragonList.push(global.Master.DragonData[DragonIDs[x]]['_Id']);
	}
}
let DModeAreaList = {};
Object.values(global.Master.DmodeDungeonArea).forEach((DungeonArea) => {
	if (DModeAreaList[String(DungeonArea['_ThemeGroupId'])] == undefined) {
		DModeAreaList[String(DungeonArea['_ThemeGroupId'])] = [];
	}
	DModeAreaList[String(DungeonArea['_ThemeGroupId'])].push(DungeonArea['_Id']);
});
let StrengthAbility = {};
Object.values(global.Master.DmodeStrengthAbility).forEach((Ability) => {
	if (StrengthAbility[String(Ability['_StrengthAbilityGroupId'])] == undefined) {
		StrengthAbility[String(Ability['_StrengthAbilityGroupId'])] = [];
	}
	if (Ability['_AbilityId'] != 0) {
		StrengthAbility[String(Ability['_StrengthAbilityGroupId'])].push(Ability);
	}
	
});
let StrengthParam = {};
Object.values(global.Master.DmodeStrengthParam).forEach((Param) => {
	if (StrengthParam[String(Param['_StrengthParamGroupId'])] == undefined) {
		StrengthParam[String(Param['_StrengthParamGroupId'])] = [];
	}
	StrengthParam[String(Param['_StrengthParamGroupId'])].push(Param);
});
let StrengthSkill = {};
Object.values(global.Master.DmodeStrengthSkill).forEach((Skill) => {
	if (StrengthSkill[String(Skill['_StrengthSkillGroupId'])] == undefined) {
		StrengthSkill[String(Skill['_StrengthSkillGroupId'])] = [];
	}
	if (Skill['_SkillId'] != 0) {
		StrengthSkill[String(Skill['_StrengthSkillGroupId'])].push(Skill);
	}
});
const DModeCrestList = Object.values(global.Master.DmodeAbilityCrest);
const DModeSharedList = [
	102502034, 108505021, 108503022, 103505055, 105502042,
	107503011, 102502042, 103503033, 101502021, 107502011,
	109503035
];
async function Floor(res) {
	let ViewEquip = 0;
	if (res.mid.Persist['DMode']['Dungeon']['state'] == 2 || res.mid.Persist['DMode']['Dungeon']['state'] == 4) {
		let GenDragon = 0;
		let GenPrint = 0;
		if (res.mid.Persist['DMode']['Dungeon']['floor_num'] >= 40) {
			res.mid.Persist['DMode']['State']['Unit']['level'] = 100;
			res.mid.Persist['DMode']['State']['Unit']['exp'] = 100000;
			GenDragon = 4;
			GenPrint = 3;
		}
		else if (res.mid.Persist['DMode']['Dungeon']['floor_num'] >= 30) {
			res.mid.Persist['DMode']['State']['Unit']['level'] = 80;
			res.mid.Persist['DMode']['State']['Unit']['exp'] = 80000;
			GenDragon = 3;
			GenPrint = 2;
		}
		else if (res.mid.Persist['DMode']['Dungeon']['floor_num'] >= 20) {
			res.mid.Persist['DMode']['State']['Unit']['level'] = 60;
			res.mid.Persist['DMode']['State']['Unit']['exp'] = 60000;
			GenDragon = 2;
			GenPrint = 2;
		}
		else if (res.mid.Persist['DMode']['Dungeon']['floor_num'] >= 10) {
			res.mid.Persist['DMode']['State']['Unit']['level'] = 40;
			res.mid.Persist['DMode']['State']['Unit']['exp'] = 40000;
			GenDragon = 2;
			GenPrint = 1;
		}
		
		if (res.mid.Persist['DMode']['Dungeon']['floor_num'] > 1) {
			ViewEquip = 1;
			let DragonList = [];
			while (GenDragon > 0) {
				let DragonID = DModeDragonList[Math.floor(Math.random() * DModeDragonList.length)];
				while (DragonList.includes(DragonID)) {
					DragonID = DModeDragonList[Math.floor(Math.random() * DModeDragonList.length)];
				}
				DragonList.push(DragonID);
				res.mid.Persist['DMode']['State']['Unit']['dmode_hold_dragon_list'].push({
					'dragon_id': DragonID,
					'count': 0
				});
				GenDragon--;
			}
			
			res.mid.Persist['DMode']['State']['ItemCount'] += 1;
			let WeaponItem = {
				'item_no': res.mid.Persist['DMode']['State']['ItemCount'],
				'item_id': 0,
				'item_state': 12,
				'option': {
					'strength_param_id': 0,
					'strength_ability_id': 0,
					'strength_skill_id': 0,
					'abnormal_status_invalid_count': 0
				}
			}
			const WeaponType = global.Module.Character.GetInfo(res.mid.Persist['DMode']['Dungeon']['chara_id'], "_WeaponType");
			let DModeWeaponList = [];
			Object.values(global.Master.DmodeWeapon).forEach((Weapon) => {
				if (Weapon['_WeaponType'] == WeaponType && Weapon['_IsDefaultWeapon'] == 0) {
					DModeWeaponList.push(Weapon);
				}
			});
			const WeaponData = DModeWeaponList[Math.floor(Math.random() * DModeWeaponList.length)];
			WeaponItem['item_id'] = WeaponData['_Id'];
			const ParamList = StrengthParam[String(WeaponData['_StrengthParamGroupId'])];
			WeaponItem['option']['strength_param_id'] = ParamList[Math.floor(Math.random() * ParamList.length)]['_Id'];
			if ((Math.random() * 20) > 8) {
				const AbilityList = StrengthAbility[String(WeaponData['_StrengthAbilityGroupId'])];
				WeaponItem['option']['strength_ability_id'] = AbilityList[Math.floor(Math.random() * AbilityList.length)]['_Id'];
			}
			if ((Math.random() * 20) > 8) {
				const SkillList = StrengthSkill[String(WeaponData['_StrengthSkillGroupId'])];
				WeaponItem['option']['strength_skill_id'] = SkillList[Math.floor(Math.random() * SkillList.length)]['_Id'];
			}
			res.mid.Persist['DMode']['State']['ItemList'].push(WeaponItem);
			
			while (GenPrint > 0) {
				res.mid.Persist['DMode']['State']['ItemCount'] += 1;
				let PrintItem = {
					'item_no': res.mid.Persist['DMode']['State']['ItemCount'],
					'item_id': 0,
					'item_state': 13,
					'option': {
						'strength_param_id': 0,
						'strength_ability_id': 0,
						'strength_skill_id': 0,
						'abnormal_status_invalid_count': 0
					}
				}
				const PrintData = DModeCrestList[Math.floor(Math.random() * DModeCrestList.length)];
				PrintItem['item_id'] = PrintData['_Id'];
				const ParamList = StrengthParam[String(PrintData['_StrengthParamGroupId'])];
				PrintItem['option']['strength_param_id'] = ParamList[Math.floor(Math.random() * ParamList.length)]['_Id'];
				if ((Math.random() * 20) > 8) {
					const AbilityList = StrengthAbility[String(PrintData['_StrengthAbilityGroupId'])];
					PrintItem['option']['strength_ability_id'] = AbilityList[Math.floor(Math.random() * AbilityList.length)]['_Id'];
				}
				res.mid.Persist['DMode']['State']['ItemList'].push(PrintItem);
				GenPrint--;
			}
		}
		res.mid.Persist['DMode']['Dungeon']['state'] = 5;
	}
	else if (res.mid.Persist['DMode']['Dungeon']['state'] == 7) {
		res.mid.Persist['DMode']['State']['Unit']['level'] = 100;
		res.mid.Persist['DMode']['State']['Unit']['exp'] = 100000;
	}
	else {
		res.mid.Persist['DMode']['Dungeon']['floor_num'] += 1;
		if (res.mid.Persist['DMode']['Dungeon']['floor_num'] > 60) { res.mid.Persist['DMode']['Dungeon']['floor_num'] = 60; }
	}
	
	const FloorData = global.Master.DmodeQuestFloor[String(res.mid.Persist['DMode']['Dungeon']['floor_num'])];
	if (res.mid.Persist['DMode']['Dungeon']['state'] != 7) {
		let ThemeIDs = [];
		let i = 0; while (i < 5) {
			if (FloorData['_DrawDungeonThemeId' + String(i + 1)] != 0) {
				ThemeIDs.push(FloorData['_DrawDungeonThemeId' + String(i + 1)]);
			}
			i++;
		}
		res.mid.Persist['DMode']['State']['Stage']['Theme'] = ThemeIDs[Math.floor(Math.random() * ThemeIDs.length)];
		const AreaIndex = Math.floor(Math.random() * DModeAreaList[String(res.mid.Persist['DMode']['State']['Stage']['Theme'])].length);
		res.mid.Persist['DMode']['State']['Stage']['Area'] = DModeAreaList[String(res.mid.Persist['DMode']['State']['Stage']['Theme'])][AreaIndex];
	}
	res.mid.Persist['DMode']['Dungeon']['state'] = 5;
	
	let CreateDragon = false;
	if (res.mid.Persist['DMode']['Dungeon']['floor_num'] == 3
	|| res.mid.Persist['DMode']['Dungeon']['floor_num'] == 5
	|| res.mid.Persist['DMode']['Dungeon']['floor_num'] == 10
	|| res.mid.Persist['DMode']['Dungeon']['floor_num'] == 30
	|| res.mid.Persist['DMode']['Dungeon']['floor_num'] == 40
	|| res.mid.Persist['DMode']['Dungeon']['floor_num'] == 45
	|| res.mid.Persist['DMode']['Dungeon']['floor_num'] == 50) {
		CreateDragon = true;
	}
	if (CreateDragon == false && FloorData['_BossAppear'] == 1 && Math.floor(Math.random() * 10) == 9) {
		CreateDragon = true;
	}
	
	if (CreateDragon == true) {
		let DragonCount = Math.floor(Math.random() * 2) + 2;
		const Remaining = DModeDragonList.length - res.mid.Persist['DMode']['State']['Unit']['dmode_hold_dragon_list'].length;
		if (Remaining < DragonCount) { DragonCount = Remaining; }
		while (res.mid.Persist['DMode']['State']['DragonList'].length < DragonCount) {
			let RandomDragon = DModeDragonList[Math.floor(Math.random() * DModeDragonList.length)];
			while (res.mid.Persist['DMode']['State']['Unit']['dmode_hold_dragon_list'].findIndex(z => z.dragon_id == RandomDragon) != -1
			|| res.mid.Persist['DMode']['State']['DragonList'].findIndex(z => z.dragon_id == RandomDragon) != -1) {
				RandomDragon = DModeDragonList[Math.floor(Math.random() * DModeDragonList.length)];
			}
			const Rare = Math.round(Math.random() * 10);
			res.mid.Persist['DMode']['State']['DragonList'].push({
				'select_dragon_no': res.mid.Persist['DMode']['State']['DragonList'].length + 1,
				'dragon_id': RandomDragon,
				'is_rare': 0,
				'pay_dmode_point_1': Rare == 10 ? Math.floor(Math.random() * 200) + 1 : Math.floor(Math.random() * 30) + 1,
				'pay_dmode_point_2': 0,
			});
		}
	}
	
	const ThemeData = global.Master.DmodeDungeonTheme[String(res.mid.Persist['DMode']['State']['Stage']['Theme'])];
	let SceneName = global.Master.DmodeDungeonArea[String(res.mid.Persist['DMode']['State']['Stage']['Area'])]['_Scene'];
	let AreaName = global.Master.DmodeDungeonArea[String(res.mid.Persist['DMode']['State']['Stage']['Area'])]['_AreaName'];
	let EnemyList = QuestEnemyList[SceneName][AreaName]["1"];
	if (res.mid.Persist['DMode']['Dungeon']['floor_num'] == 45 || res.mid.Persist['DMode']['Dungeon']['floor_num'] == 50) {
		res.mid.Persist['DMode']['State']['Stage']['Area'] = DModeAreaList[String(res.mid.Persist['DMode']['State']['Stage']['Theme'])][res.mid.Persist['DMode']['State']['Agito']];
		AreaName = global.Master.DmodeDungeonArea[String(res.mid.Persist['DMode']['State']['Stage']['Area'])]['_AreaName'];
		EnemyList = [
			EnemyList[0],
			EnemyList[0] + 1,
			EnemyList[0] + 1,
			EnemyList[0] + 1,
			EnemyList[0] + 1,
			EnemyList[0] + 2,
			EnemyList[0] + 2,
			EnemyList[0] + 2,
			EnemyList[0] + 2,
			EnemyList[0] + 3,
			EnemyList[0] + 4,
			EnemyList[0] + 5,
		]
	}
	let EnemyDropInfo = [];
	for (const x in EnemyList) {
		let EnemyLevel = FloorData['_BaseEnemyLevel'] + (Math.floor(Math.random() * (ThemeData['_PlusLevelMax'] - ThemeData['_PlusLevelMin'])) + 1);
		let DropList = [];
		let DropCount = Math.floor(Math.random() * 3) + 1;
		if (ThemeData['_BossAppear'] == 1) {
			EnemyLevel = FloorData['_BaseBossEnemyLevel'] + (Math.floor(Math.random() * (ThemeData['_PlusLevelMax'] - ThemeData['_PlusLevelMin'])) + 1);
			DropCount = Math.floor(Math.random() * 5) + 2;
		}
		if (ThemeData['_BossAppear'] == 1
		|| res.mid.Persist['DMode']['State']['Stage']['Theme'] == 7
		|| Math.floor(Math.random() * 20) > 15) {
			while (DropList.length < DropCount) {
				const DropRoll = Math.floor(Math.random() * 10);
				let DropType = 0;
				if (DropRoll >= 8) { DropType = 2; }
				else if (DropRoll <= 2) { DropType = 1; }
				res.mid.Persist['DMode']['State']['ItemCount'] += 1;
				let ItemBase = {
					'item_no': res.mid.Persist['DMode']['State']['ItemCount'],
					'item_id': 0,
					'item_state': 0,
					'option': []
				}
				let DropBase = {
					'type': 43,
					'id': res.mid.Persist['DMode']['State']['ItemCount'],
					'quantity': 1
				}
				let OptionStrengthID = 0;
				let OptionAbilityID = 0;
				let OptionSkillID = 0;
				switch(DropType) {
					case 0: // skill
						ItemBase['item_id'] = DModeSharedList[Math.floor(Math.random() * DModeSharedList.length)];
						break;
					case 1: // wyrmprint
						const PrintData = DModeCrestList[Math.floor(Math.random() * DModeCrestList.length)];
						ItemBase['item_id'] = PrintData['_Id'];
						OptionStrengthID = PrintData['_StrengthParamGroupId'];
						if ((Math.random() * 20) > 8) {
							OptionAbilityID = PrintData['_StrengthAbilityGroupId'];
						}
						ItemBase['option'] = {
							'strength_param_id': 0,
							'strength_ability_id': 0,
							'strength_skill_id': 0,
							'abnormal_status_invalid_count': 0
						}
						break;
					case 2: // weapon
						const WeaponType = global.Module.Character.GetInfo(res.mid.Persist['DMode']['Dungeon']['chara_id'], "_WeaponType");
						let DModeWeaponList = [];
						Object.values(global.Master.DmodeWeapon).forEach((Weapon) => {
							if (Weapon['_WeaponType'] == WeaponType && Weapon['_IsDefaultWeapon'] == 0) {
								DModeWeaponList.push(Weapon);
							}
						});
						const WeaponData = DModeWeaponList[Math.floor(Math.random() * DModeWeaponList.length)];
						ItemBase['item_id'] = WeaponData['_Id'];
						OptionStrengthID = WeaponData['_StrengthParamGroupId'];
						if ((Math.random() * 20) > 8) {
							OptionAbilityID = WeaponData['_StrengthAbilityGroupId'];
						}
						if ((Math.random() * 20) > 8) {
							OptionSkillID = WeaponData['_StrengthSkillGroupId'];
						}
						ItemBase['option'] = {
							'strength_param_id': 0,
							'strength_ability_id': 0,
							'strength_skill_id': 0,
							'abnormal_status_invalid_count': 0
						}
						break;
				}
				if (OptionStrengthID != 0) {
					const ParamList = StrengthParam[String(OptionStrengthID)];
					ItemBase['option']['strength_param_id'] = ParamList[Math.floor(Math.random() * ParamList.length)]['_Id'];
				}
				if (OptionAbilityID != 0) {
					const AbilityList = StrengthAbility[String(OptionAbilityID)];
					ItemBase['option']['strength_ability_id'] = AbilityList[Math.floor(Math.random() * AbilityList.length)]['_Id'];
				}
				if (OptionSkillID != 0) {
					const SkillList = StrengthSkill[String(OptionSkillID)];
					ItemBase['option']['strength_skill_id'] = SkillList[Math.floor(Math.random() * SkillList.length)]['_Id'];
				}
				res.mid.Persist['DMode']['State']['ItemList'].push(ItemBase);
				DropList.push(DropBase);
			}
		}
		if (EnemyLevel > 100) { EnemyLevel = 100; }
		EnemyDropInfo.push({
			'enemy_idx': parseInt(x),
			'is_pop': 1,
			'level': EnemyLevel,
			'param_id': EnemyList[x],
			'dmode_drop_list': DropList
		});
	}
	
	if (res.mid.Request['dmode_play_record'] != null && res.mid.Request['dmode_play_record'] != undefined) {
		res.mid.Persist['DMode']['State']['Unit']['equip_crest_item_no_sort_list'] = res.mid.Request['dmode_play_record']['equip_crest_item_no_sort_list'];
		res.mid.Persist['DMode']['State']['Unit']['bag_item_no_sort_list'] = res.mid.Request['dmode_play_record']['bag_item_no_sort_list'];
		res.mid.Persist['DMode']['State']['Unit']['skill_bag_item_no_sort_list'] = res.mid.Request['dmode_play_record']['skill_bag_item_no_sort_list'];
		for (const x in res.mid.Request['dmode_play_record']['dmode_dragon_use_list']) {
			const Index = res.mid.Persist['DMode']['State']['Unit']['dmode_hold_dragon_list'].findIndex(z => z.dragon_id == res.mid.Request['dmode_play_record']['dmode_dragon_use_list'][x]['dragon_id']);
			res.mid.Persist['DMode']['State']['Unit']['dmode_hold_dragon_list'][Index]['count'] += res.mid.Request['dmode_play_record']['dmode_dragon_use_list'][x]['use_count'];
		}
		for (const x in res.mid.Request['dmode_play_record']['dmode_dungeon_item_state_list']) {
			const Index = res.mid.Persist['DMode']['State']['ItemList'].findIndex(z => z.item_no == res.mid.Request['dmode_play_record']['dmode_dungeon_item_state_list'][x]['item_no']);
			if (Index == -1) { continue; }
			const State = res.mid.Request['dmode_play_record']['dmode_dungeon_item_state_list'][x]['state'];
			if (State == 0 || State == 1) {
				res.mid.Persist['DMode']['State']['ItemList'].splice(Index, 1);
			}
			else if (State == 2 || State == 3) {
				if (res.mid.Persist['DMode']['State']['ItemList'][Index]['option']['strength_param_id'] != undefined) {
					const Rarity = global.Master.DmodeStrengthParam[String(res.mid.Persist['DMode']['State']['ItemList'][Index]['option']['strength_param_id'])]['_Scarcity'];
					res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_1'] += (Rarity * 5);
				}
				res.mid.Persist['DMode']['State']['ItemList'].splice(Index, 1);
			}
			else {
				res.mid.Persist['DMode']['State']['ItemList'][Index]['item_state'] = State;
			}
		}
		if (res.mid.Request['dmode_play_record']['select_dragon_no'] != 0) {
			const DModeDragon = res.mid.Persist['DMode']['State']['DragonList'].find(z => z.select_dragon_no == res.mid.Request['dmode_play_record']['select_dragon_no']);
			if (DModeDragon != undefined) { 
				res.mid.Persist['DMode']['State']['Unit']['dmode_hold_dragon_list'].push({
					'dragon_id': DModeDragon['dragon_id'],
					'count': 0
				});
				res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_1'] -= DModeDragon['pay_dmode_point_1'];
				res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_2'] -= DModeDragon['pay_dmode_point_2'];
				if (res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_1'] < 0) { res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_1'] = 0; }
				if (res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_2'] < 0) { res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_2'] = 0; }
			}
			res.mid.Persist['DMode']['State']['DragonList'] = [];
		}
	}
	
	res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_1'] += 100;
	res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_2'] += 15;
	
	res.mid.Data = {
		'dmode_dungeon_state': res.mid.Persist['DMode']['Dungeon']['state'],
		'dmode_floor_data': {
			'unique_key': res.mid.Persist['DMode']['State']['Key'],
			'floor_key': res.mid.Persist['DMode']['State']['Key'],
			'is_play_end': 0,
			'is_view_area_start_equipment': ViewEquip,
			'dmode_area_info': {
				'floor_num': res.mid.Persist['DMode']['Dungeon']['floor_num'],
				'quest_time': 0,
				'dmode_score': 9999999,
				'current_area_theme_id': res.mid.Persist['DMode']['State']['Stage']['Theme'],
				'current_area_id': res.mid.Persist['DMode']['State']['Stage']['Area']
			},
			'dmode_unit_info': res.mid.Persist['DMode']['State']['Unit'],
			'dmode_dungeon_odds': {
				'dmode_odds_info': {
					'dmode_drop_obj': [],
					'dmode_enemy': EnemyDropInfo
				},
				'dmode_dungeon_item_list': res.mid.Persist['DMode']['State']['ItemList'],
				'dmode_select_dragon_list': res.mid.Persist['DMode']['State']['DragonList']
			}
		}
	}
	
	if (res.mid.Persist['DMode']['State']['Complete'] == true) {
		res.mid.Data['dmode_floor_data']['is_play_end'] = 1;
		res.mid.Data['dmode_floor_data']['dmode_dungeon_odds'] = {};
		return;
	}
	if (res.mid.Persist['DMode']['Dungeon']['floor_num'] >= 60) {
		res.mid.Persist['DMode']['Dungeon']['floor_num'] = 60;
		res.mid.Persist['DMode']['State']['Complete'] = true;
	}
	
	return;
}
async function Finish(res) {
	const Index = res.mid.Persist['DMode']['CharacterList'].findIndex(z => z.chara_id == res.mid.Persist['DMode']['Dungeon']['chara_id']);
	let IsBest = 0;
	if (Index == -1) {
		IsBest = 1;
		res.mid.Persist['DMode']['CharacterList'].push({
			'chara_id': res.mid.Persist['DMode']['Dungeon']['chara_id'],
			'max_floor_num': res.mid.Persist['DMode']['Dungeon']['floor_num'],
			'select_servitor_id': res.mid.Persist['DMode']['Servitor'],
			'select_edit_skill_chara_id_1': res.mid.Persist['DMode']['State']['Shared'][0],
			'select_edit_skill_chara_id_2': res.mid.Persist['DMode']['State']['Shared'][1],
			'select_edit_skill_chara_id_3': 0,
			'max_dmode_score': 9999999
		});
	}
	else {
		if (res.mid.Persist['DMode']['Dungeon']['floor_num'] > res.mid.Persist['DMode']['CharacterList'][Index]['max_floor_num']) {
			IsBest = 1;
			res.mid.Persist['DMode']['CharacterList'][Index]['max_floor_num'] = res.mid.Persist['DMode']['Dungeon']['floor_num'];
		}
		res.mid.Persist['DMode']['CharacterList'][Index]['select_servitor_id'] = res.mid.Persist['DMode']['State']['Servitor'];
		res.mid.Persist['DMode']['CharacterList'][Index]['select_edit_skill_chara_id_1'] = res.mid.Persist['DMode']['State']['Shared'][0]
		res.mid.Persist['DMode']['CharacterList'][Index]['select_edit_skill_chara_id_2'] = res.mid.Persist['DMode']['State']['Shared'][1];
	}
	
	if (res.mid.Persist['DMode']['Dungeon']['floor_num'] > res.mid.Persist['DMode']['Info']['total_max_floor_num']) {
		res.mid.Persist['DMode']['Info']['total_max_floor_num'] = res.mid.Persist['DMode']['Dungeon']['floor_num'];
	}
	
	const Talisman = GenerateTalisman(res, res.mid.Persist['DMode']['Dungeon']['chara_id'], res.mid.Persist['DMode']['Dungeon']['floor_num']);	
	if (res.mid.Persist['DMode']['Dungeon']['floor_num'] >= 60) {
		res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_1'] += 3000;
		res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_2'] += 300;
	}
	else if (res.mid.Persist['DMode']['Dungeon']['floor_num'] >= 50) {
		res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_1'] += 2000;
		res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_2'] += 200;
	}
	res.mid.Persist['DMode']['Dungeon']['state'] = 1;
	res.mid.Persist['DMode']['Info']['dmode_point_1'] += res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_1'];
	res.mid.Persist['DMode']['Info']['dmode_point_2'] += res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_2'];
	res.mid.Data = {
		'dmode_dungeon_state': res.mid.Persist['DMode']['Dungeon']['state'],
		'dmode_ingame_result': {
			'floor_num': res.mid.Persist['DMode']['Dungeon']['floor_num'],
			'is_record_floor_num': IsBest,
			'chara_id_list': [ res.mid.Persist['DMode']['Dungeon']['chara_id'] ],
			'reward_talisman_list': Talisman['Reward'],
			'take_dmode_point_1': res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_1'],
			'take_dmode_point_2': res.mid.Persist['DMode']['State']['Unit']['take_dmode_point_2'],
			'take_player_exp': 0,
			'player_level_up_fstone': 0,
			'quest_time': 0,
			'is_view_quest_time': 0,
			'dmode_score': 9999999,
			'clear_state': 1
		},
		'dmode_dungeon_info': res.mid.Persist['DMode']['Dungeon'],
		'update_data_list': {
			'dmode_info': res.mid.Persist['DMode']['Info'],
			'talisman_list': Talisman['Update']
		}
	}
	return;
}

module.exports = {
	BuildPassive, ExpeditionTalisman, ExpeditionFinish,
	DungeonStart, DungeonRestart,
	Floor, Finish
}