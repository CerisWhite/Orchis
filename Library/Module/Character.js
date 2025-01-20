function GetInfo(ID, Attribute) {
	ID = String(ID);
	let Data = null;
	if (Attribute == "StoryID") {
		if (ID == 10750102) { return 0; }
		const BaseID = String(global.Master.CharaData[ID]['_BaseId']);
		let Variation = String(global.Master.CharaData[ID]['_VariationId']);
		if (Variation.length == 1) { Variation = "0" + Variation; }
		Data = parseInt(BaseID + Variation + "1");
	}
	else {
		Data = global.Master.CharaData[ID][Attribute];
	}
	return Data;
}
function HasStory(ID) {
	if (GetInfo(ID, "_IsPlayable") == 1 && ID != 10750102) {
		return true;
	}
	return false;
}
async function GetUnitData(ViewerID, ID) {
	const Data = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "chara_list", { 'chara_id': ID });
	return Data;
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
function GetStoryID(ID, CircleName, CharacterData) {
	let StoryCount = 1;
	for (const x in CharacterData['mana_circle_piece_id_list']) {
		const MCData = global.Master.MC[CircleName].find(z => z._Id == CharacterData['mana_circle_piece_id_list'][x]);
		if (MCData['_IsReleaseStory'] == 1) { StoryCount += 1; }
	}
	return (GetInfo(ID, "StoryID") + StoryCount);
}
function CalculateStats(ID, Data) {
	let HP = GetInfo(ID, "_MinHp" + String(Data['rarity']));
	let Attack = GetInfo(ID, "_MinAtk" + String(Data['rarity']));
	let HPLevel = 0;
	let AttackLevel = 0;
	
	if (Data['limit_break_count'] >= 5) {
		HPLevel = (GetInfo(ID, "_AddMaxHp1") - GetInfo(ID, "_MinHp" + String(Data['rarity']))) / 100;
		AttackLevel = (GetInfo(ID, "_AddMaxAtk1") - GetInfo(ID, "_MinAtk" + String(Data['rarity']))) / 100;
	}
	else {
		HPLevel = (GetInfo(ID, "_MaxHp") - GetInfo(ID, "_MinHp" + String(Data['rarity']))) / 80;
		AttackLevel = (GetInfo(ID, "_MaxAtk") - GetInfo(ID, "_MinAtk" + String(Data['rarity']))) / 80;
	}
	
	HP += Math.ceil(Data['level'] * HPLevel);
	Attack += Math.ceil(Data['level'] * AttackLevel);
	
	if (Data['mana_circle_piece_id_list'].length >= 50) {
		HP += GetInfo(ID, "_McFullBonusHp5");
		Attack += GetInfo(ID, "_McFullBonusAtk5");
	}
	
	const CircleName = GetInfo(ID, "_ManaCircleName");
	for (const x in Data['mana_circle_piece_id_list']) {
		const NodeID = Data['mana_circle_piece_id_list'][x];
		const MCData = global.Master.MC[CircleName].find(z => z._Id == NodeID);
		const TypeID = MCData['_ManaPieceType'];
		const ToAdd = GetNodeValue(NodeID, TypeID, CircleName, ID);
		if (TypeID == 10101) { HP = HP + ToAdd; }
		else if (TypeID == 10102) { Attack = Attack + ToAdd; }
	}
	return { 'HP': HP, 'Attack': Attack }
}

function Create(ID, Level) {
	const Rarity = GetInfo(ID, "_Rarity");
	const Stats = CalculateStats(ID, {
		'level': 1,
		'rarity': Rarity,
		'mana_circle_piece_id_list': [],
		'limit_break_count': 0
	});
	const Data = {
		"chara_id": ID,
		"rarity": GetInfo(ID, "_Rarity"),
		"exp": 0,
		"level": Level != undefined ? Level : 1,
		"additional_max_level": 0,
		"hp_plus_count": 0,
		"attack_plus_count": 0,
		"limit_break_count": 0,
		"is_new": 1,
		"gettime": global.ServerTime,
		"skill_1_level": 1,
		"skill_2_level": 0,
		"ability_1_level": GetInfo(ID, "_DefaultAbility1Level"),
		"ability_2_level": GetInfo(ID, "_DefaultAbility2Level"),
		"ability_3_level": GetInfo(ID, "_DefaultAbility3Level"),
		"burst_attack_level": GetInfo(ID, "_DefaultBurstAttackLevel"),
		"combo_buildup_count": 0,
		"hp": Stats['HP'],
		"attack": Stats['Attack'],
		"ex_ability_level": 1,
		"ex_ability_2_level": 1,
		"is_temporary": 0,
		"is_unlock_edit_skill": GetInfo(ID, "_DefaultIsUnlockEditSkill"),
		"mana_circle_piece_id_list": [],
		"list_view_flag": 1
	}
	return Data;
}

const LevelIDs = Object.keys(global.Master.CharaLevel);
function GetLevel(CharacterData) {
	let LevelData = { 'Level': 0, 'EXP': 0 };
	const MaxLevel = global.Master.CharaRarity[String(CharacterData['rarity'])]['_MaxLimitLevel'];
	const MaxEXP = global.Master.CharaLevel[String(MaxLevel + CharacterData['additional_max_level'])]['_TotalExp'];
	if (CharacterData['exp'] > MaxEXP) {
		LevelData['EXP'] = MaxEXP;
		LevelData['Level'] = MaxLevel + CharacterData['additional_max_level'];
	}
	else {
		for (const x in LevelIDs) {
			if (global.Master.CharaLevel[LevelIDs[x]]['_TotalExp'] > CharacterData['exp']) {
				LevelData['Level'] = global.Master.CharaLevel[LevelIDs[x]]['_Id'] - 1;
				LevelData['EXP'] = CharacterData['exp'];
				break;
			}
		}
	}
	
	return LevelData;
}
async function RaiseLevel(res, ID, GrowList) {
	let CharacterData = await GetUnitData(res.mid.ViewerID, ID);
	for (const x in GrowList) {
		if (GrowList[x]['id'] == 116001001) {
			CharacterData['hp_plus_count'] += GrowList[x]['quantity'];
		}
		else if (GrowList[x]['id'] == 117001001) {
			CharacterData['attack_plus_count'] += GrowList[x]['quantity'];
		}
		else {
			CharacterData['exp'] += global.Master.MaterialData[String(GrowList[x]['id'])]['_Exp'] * GrowList[x]['quantity'];
		}
		res.mid.ItemList.push({ 'type': 8, 'id': GrowList[x]['id'], 'quantity': GrowList[x]['quantity'] * -1 });
	}
	
	const MaxEXP = global.Master.CharaLevel[String(80 + CharacterData['additional_max_level'])]['_TotalExp'];
	if (CharacterData['exp'] > MaxEXP) {
		CharacterData['exp'] = MaxEXP;
		CharacterData['level'] = 80 + CharacterData['additional_max_level'];
	}
	else {
		for (const x in LevelIDs) {
			if (global.Master.CharaLevel[LevelIDs[x]]['_TotalExp'] > CharacterData['exp']) {
				CharacterData['level'] = global.Master.CharaLevel[LevelIDs[x]]['_Id'] - 1;
				break;
			}
		}
	}
	
	const Stats = CalculateStats(ID, CharacterData);
	CharacterData['hp'] = Stats['HP'];
	CharacterData['attack'] = Stats['Attack'];
	
	res.mid.Data['update_data_list'] = {
		'chara_list': [ CharacterData ],
		'fort_bonus_list': []
	}
	return;
}
const PieceMaterialList = Object.keys(global.Master.ManaPieceMaterial);
async function RaiseManaCircle(res, ID, GrowList, IsConviction) {
	let CharacterData = await GetUnitData(res.mid.ViewerID, ID);
	const ConvictionID = GetInfo(ID, "_GrowMaterialId");
	const CircleName = GetInfo(ID, "_ManaCircleName");
	const MaterialID = GetInfo(ID, "_PieceMaterialElementId");
	let StoryList = [];
	
	for (const x in GrowList) {
		const NodeData = global.Master.MC[CircleName].find(z => z._Id == GrowList[x]);
		const NodeType = NodeData['_ManaPieceType'];
		const Step = GetNodeStep(GrowList[x], CircleName, CharacterData['mana_circle_piece_id_list']);
		let PieceData = {
			'_DewPoint': 0, '_MaterialId1': 0,'_MaterialQuantity1': 0,
			'_MaterialId2': 0,'_MaterialQuantity2': 0,
			'_MaterialId3': 0,'_MaterialQuantity3': 0,
		};
		for (const z in PieceMaterialList) {
			if (
				global.Master.ManaPieceMaterial[PieceMaterialList[z]]['_ElementId'] == MaterialID &&
				global.Master.ManaPieceMaterial[PieceMaterialList[z]]['_ManaPieceType'] == NodeType &&
				global.Master.ManaPieceMaterial[PieceMaterialList[z]]['_Step'] == Step
			) {
				PieceData = global.Master.ManaPieceMaterial[PieceMaterialList[z]];
				break;
			}
		}		
		if (IsConviction == true) {
			res.mid.ItemList.push({ 'type': 8, 'id': ConvictionID, 'quantity': NodeData['_GrowMaterialCount'] * -1 });
		}
		else {
			res.mid.ItemList.push({ 'type': 18, 'id': 0, 'quantity': NodeData['_NecessaryManaPoint'] * -1 });
			res.mid.ItemList.push({ 'type': 14, 'id': 0, 'quantity': PieceData['_DewPoint'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': PieceData['_MaterialId1'], 'quantity': PieceData['_MaterialQuantity1'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': PieceData['_MaterialId2'], 'quantity': PieceData['_MaterialQuantity2'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': PieceData['_MaterialId3'], 'quantity': PieceData['_MaterialQuantity3'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': GetInfo(ID, "_UniqueGrowMaterialId1"), 'quantity': NodeData['_UniqueGrowMaterialCount1'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': GetInfo(ID, "_UniqueGrowMaterialId2"), 'quantity': NodeData['_UniqueGrowMaterialCount2'] * -1 });
		}
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
				res.mid.ItemList.push({ 'type': 8, 'id': 201007001, 'quantity': 1});
			break;
			case 10701:
				CharacterData['combo_buildup_count'] += 1;
			break;
			case 10801:
				CharacterData['additional_max_level'] += 5;
			break;
		}
		if (NodeData['_IsReleaseStory'] == 1) {
			StoryList.push({
				'unit_story_id': GetStoryID(ID, CircleName, CharacterData),
				'is_read': 0
			});
		}
		CharacterData['mana_circle_piece_id_list'].push(GrowList[x]);
	}
	const Stats = CalculateStats(ID, CharacterData)
	CharacterData['hp'] = Stats['HP'];
	CharacterData['attack'] = Stats['Attack'];
	res.mid.Data['update_data_list'] = {
		'chara_list': [ CharacterData ],
		'unit_story_list': StoryList,
		'fort_bonus_list': []
	}
	return;
}
async function RaiseLimit(res, ID, TargetLevel, IsConviction) {
	let CharacterData = await GetUnitData(res.mid.ViewerID, ID);
	const LimitBreakID = GetInfo(ID, "_CharaLimitBreak");
	const LimitBreakData = global.Master.CharaLimitBreak[String(LimitBreakID)];
	
	while (CharacterData['limit_break_count'] < TargetLevel) {
		CharacterData['limit_break_count'] += 1;
		if (IsConviction == 1) {
			res.mid.ItemList.push({
				'type': 8,
				'id': GetInfo(ID, "_GrowMaterialId"),
				'quantity': LimitBreakData['_GrowMaterialNum' + String(CharacterData['limit_break_count'])] * -1
			});
		}
		else {
			let m = 0; while (m < 5) {
				res.mid.ItemList.push({
					'type': 8,
					'id': LimitBreakData['_OrbData' + String(m + 1) + 'Id' + String(CharacterData['limit_break_count'])],
					'quantity': LimitBreakData['_OrbData' + String(m + 1) + 'Num' + String(CharacterData['limit_break_count'])] * -1
				});
				m++;
			}
			res.mid.ItemList.push({
				'type': 8,
				'id': GetInfo(ID, "_UniqueGrowMaterialId1"),
				'quantity': LimitBreakData['_UniqueGrowMaterial1Num' + String(CharacterData['limit_break_count'])] * -1
			});
			res.mid.ItemList.push({
				'type': 8,
				'id': GetInfo(ID, "_UniqueGrowMaterialId2"),
				'quantity': LimitBreakData['_UniqueGrowMaterial2Num' + String(CharacterData['limit_break_count'])] * -1
			});
		}
	}
	if (CharacterData['limit_break_count'] == 5) { CharacterData['additional_max_level'] = 5; }
	
	res.mid.Data['update_data_list'] = {
		'chara_list': [ CharacterData ]
	}
	return;
}
async function RaiseManaAndLimit(res, ID, GrowList, IsConviction, TargetLevel) {
	let CharacterData = await GetUnitData(res.mid.ViewerID, ID);
	const ConvictionID = GetInfo(ID, "_GrowMaterialId");
	const CircleName = GetInfo(ID, "_ManaCircleName");
	const MaterialID = GetInfo(ID, "_PieceMaterialElementId");
	const LimitBreakID = GetInfo(ID, "_CharaLimitBreak");
	const LimitBreakData = global.Master.CharaLimitBreak[String(LimitBreakID)];
	let StoryList = [];
	
	while (CharacterData['limit_break_count'] < TargetLevel) {
		CharacterData['limit_break_count'] += 1;
		if (IsConviction == 1) {
			res.mid.ItemList.push({
				'type': 8,
				'id': GetInfo(ID, "_GrowMaterialId"),
				'quantity': LimitBreakData['_GrowMaterialNum' + String(CharacterData['limit_break_count'])] * -1
			});
		}
		else {
			let m = 0; while (m < 5) {
				res.mid.ItemList.push({
					'type': 8,
					'id': LimitBreakData['_OrbData' + String(m + 1) + 'Id' + String(CharacterData['limit_break_count'])],
					'quantity': LimitBreakData['_OrbData' + String(m + 1) + 'Num' + String(CharacterData['limit_break_count'])] * -1
				});
				m++;
			}
			res.mid.ItemList.push({
				'type': 8,
				'id': GetInfo(ID, "_UniqueGrowMaterialId1"),
				'quantity': LimitBreakData['_UniqueGrowMaterial1Num' + String(CharacterData['limit_break_count'])] * -1
			});
			res.mid.ItemList.push({
				'type': 8,
				'id': GetInfo(ID, "_UniqueGrowMaterialId2"),
				'quantity': LimitBreakData['_UniqueGrowMaterial2Num' + String(CharacterData['limit_break_count'])] * -1
			});
		}
	}
	if (CharacterData['limit_break_count'] == 5) { CharacterData['additional_max_level'] = 5; }
	
	for (const x in GrowList) {
		const NodeData = global.Master.MC[CircleName].find(z => z._Id == GrowList[x]);
		const NodeType = NodeData['_ManaPieceType'];
		const Step = GetNodeStep(GrowList[x], CircleName, CharacterData['mana_circle_piece_id_list']);
		let PieceData = {
			'_DewPoint': 0, '_MaterialId1': 0,'_MaterialQuantity1': 0,
			'_MaterialId2': 0,'_MaterialQuantity2': 0,
			'_MaterialId3': 0,'_MaterialQuantity3': 0,
		};
		for (const z in PieceMaterialList) {
			if (
				global.Master.ManaPieceMaterial[PieceMaterialList[z]]['_ElementId'] == MaterialID &&
				global.Master.ManaPieceMaterial[PieceMaterialList[z]]['_ManaPieceType'] == NodeType &&
				global.Master.ManaPieceMaterial[PieceMaterialList[z]]['_Step'] == Step
			) {
				PieceData = global.Master.ManaPieceMaterial[PieceMaterialList[z]];
				break;
			}
		}
		
		if (IsConviction == true) {
			res.mid.ItemList.push({ 'type': 8, 'id': ConvictionID, 'quantity': NodeData['_GrowMaterialCount'] * -1 });
		}
		else {
			res.mid.ItemList.push({ 'type': 18, 'id': 0, 'quantity': NodeData['_NecessaryManaPoint'] * -1 });
			res.mid.ItemList.push({ 'type': 14, 'id': 0, 'quantity': PieceData['_DewPoint'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': PieceData['_MaterialId1'], 'quantity': PieceData['_MaterialQuantity1'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': PieceData['_MaterialId2'], 'quantity': PieceData['_MaterialQuantity2'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': PieceData['_MaterialId3'], 'quantity': PieceData['_MaterialQuantity3'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': GetInfo(ID, "_UniqueGrowMaterialId1"), 'quantity': NodeData['_UniqueGrowMaterialCount1'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': GetInfo(ID, "_UniqueGrowMaterialId2"), 'quantity': NodeData['_UniqueGrowMaterialCount2'] * -1 });
		}
		
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
				res.mid.ItemList.push({ 'type': 8, 'id': 201007001, 'quantity': 1});
			break;
			case 10701:
				CharacterData['combo_buildup_count'] += 1;
			break;
			case 10801:
				CharacterData['additional_max_level'] += 5;
			break;
		}
		if (NodeData['_IsReleaseStory'] == 1) {
			StoryList.push({
				'unit_story_id': GetStoryID(ID, CircleName, CharacterData),
				'is_read': 0
			});
		}
		CharacterData['mana_circle_piece_id_list'].push(GrowList[x]);
	}
	
	const Stats = CalculateStats(ID, CharacterData)
	CharacterData['hp'] = Stats['HP'];
	CharacterData['attack'] = Stats['Attack'];
	res.mid.Data['update_data_list'] = {
		'chara_list': [ CharacterData ],
		'unit_story_list': StoryList,
		'fort_bonus_list': []
	}
	return;
}
async function Awaken(res, ID, NextRarity) {
	let CharacterData = await GetUnitData(res.mid.ViewerID, ID);
	CharacterData['rarity'] = NextRarity;
	res.mid.ItemList.push({
		'type': global.Module.Character.GetInfo(ID, "_AwakeNeedEntityType" + String(NextRarity)),
		'id': global.Module.Character.GetInfo(ID, "_AwakeNeedEntityId" + String(NextRarity)),
		'quantity': global.Module.Character.GetInfo(ID, "_AwakeNeedEntityQuantity" + String(NextRarity)) * -1
	});
	res.mid.Data['update_data_list'] = {
		'chara_list': [ CharacterData ]
	}
}
async function Unlock(res, ID) {
	let CharacterData = await GetUnitData(res.mid.ViewerID, ID);
	CharacterData['is_unlock_edit_skill'] = 1;
	res.mid.ItemList.push({
		'type': GetInfo(ID, "_EditReleaseEntityType1"),
		'id': GetInfo(ID, "_EditReleaseEntityId1"),
		'quantity': GetInfo(ID, "_EditReleaseEntityQuantity1") * -1
	});
	res.mid.Data = {
		'update_data_list': {
			'chara_list': [ CharacterData ]
		}
	}
	return;
}
function RaisePlatinum(res, ID) {
	const CircleName = GetInfo(ID, "_ManaCircleName");
	let CharacterData = Create(ID, 1);
	CharacterData['hp_plus_count'] = 100;
	CharacterData['attack_plus_count'] = 100;
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
				res.mid.ItemList.push({ 'type': 8, 'id': 201007001, 'quantity': 1});
			break;
			case 10701:
				CharacterData['combo_buildup_count'] += 1;
			break;
			case 10801:
				CharacterData['additional_max_level'] += 5;
			break;
		}
		if (NodeData['_IsReleaseStory'] == 1) {
			StoryList.push({
				'unit_story_id': GetStoryID(ID, CircleName, CharacterData),
				'is_read': 0
			});
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
	
	res.mid.ItemList.push({ 'type': 8, 'id': 125001001, 'quantity': -1 });
	CharacterData['rarity'] = 5;
	const Stats = CalculateStats(ID, CharacterData)
	CharacterData['hp'] = Stats['HP'];
	CharacterData['attack'] = Stats['Attack'];
	res.mid.Data['update_data_list'] = {
		'chara_list': [ CharacterData ],
		'unit_story_list': StoryList,
		'fort_bonus_list': []
	}
	return;
}
async function ResetAugments(res, ID, GrowList) {
	let CharacterData = await GetUnitData(res.mid.ViewerID, ID);
	for (const x in GrowList) {
		let Target = "";
		switch(GrowList[x]) {
			case 1:
				Target = "hp_plus_count";
				TargetMaterial = 116001001;
			break;
			case 2:
				Target = "attack_plus_count";
				TargetMaterial = 117001001;
			break;
		}
		res.mid.ItemList({ 'type': 8, 'id': TargetMaterial, 'quantity': CharacterData[Target] * -1 });
		CharacterData[Target] = 0;
	}
	res.mid.Data = {
		'update_data_list': {
			'chara_list': [ CharacterData ]
		}
	}
}

function DModeStats(ID) {
	const CircleName = GetInfo(ID, "_ManaCircleName");
	let NodeCount = 50;
	let CharacterData = {};
	if (GetInfo(ID, "_MaxLimitBreakCount") == 5) {
		NodeCount = 70;
		CharacterData = Create(ID, 100);
		CharacterData['limit_break_count'] = 5;
		CharacterData['additional_max_level'] = 5;
	}
	else {
		NodeCount = 50;
		CharacterData = Create(ID, 80);
		CharacterData['limit_break_count'] = 4;
	}
		
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

function GetIDByName(Name) {
	let CharacterID = 0;
	Object.values(global.Master.CharaData).forEach((Entry) => {
		if (Entry['_IsPlayable'] == 0 || CharacterID != 0) { return; }
		if (global.Master.TextLabel[Entry['_SecondName']] == undefined) {
			if (global.Master.TextLabel[Entry['_Name']]['_Text'] == Name) {
				CharacterID = Entry['_Id'];
			}
		}
		else if (global.Master.TextLabel[Entry['_SecondName']]['_Text'] == Name) { CharacterID = Entry['_Id']; }
	});
	return CharacterID;
}

let UnitList = {
	"5": [],
	"4": [],
	"3": []
};
Object.values(global.Master.CharaData).forEach((Unit) => {
	if (Unit['_IsPlayable'] == 1) {
		UnitList[String(Unit['_Rarity'])].push(Unit['_Id']);
	}
});
const Blacklist = [ 10140101, 10150402, 10140503, 10240101, 10240201, 10240302,
					10240402, 10240503, 10250305, 10250403, 10340101, 10340301,
					10340502, 10350403, 10350506, 10440301, 10450303, 10450404,
					10540102, 10540201, 10540501, 10550305, 10550404, 10640401,
					10640403, 10650305, 10650503, 10740202, 10750102, 10750203,
					10750205, 10750504, 10840403, 10840501, 10850103,
						
					19900001, 19900002, 19900003, 19900004, 19900005, 19900006,
					19100017, 19100018, 19100019, 19100020, 19100021, 19100021,
					19100022, 19100023, 19100024, 19100067,
					10550101, 10750102,

					10990001 ];
function Draw(SummonID, BannerData, IsTenfold, IsPlatinum) {
	let ID = 0;
	if (BannerData != undefined && BannerData['characters'][0] != undefined) {
		let RerollCount = 5;
		ID = BannerData['characters'][Math.floor(Math.random() * BannerData['characters'].length)];
		const Boosted = BannerData['characters'][Math.floor(Math.random() * BannerData['characters'].length)];
		if (BannerData['boost_rate'].includes(Boosted)) {
			ID = Boosted; RerollCount = 2;
		}
		while (RerollCount > 0) {
			let MinRarity = 3;
			if (IsTenfold == true && IsPlatinum == true) { MinRarity = 5; }
			else if (IsTenfold == true) { MinRarity = 4; }
			let Redraw = BannerData['characters'][Math.floor(Math.random() * BannerData['characters'].length)];
			let RedrawRarity = GetInfo(Redraw, "_Rarity");
			while (RedrawRarity < MinRarity) {
				Redraw = BannerData['characters'][Math.floor(Math.random() * BannerData['characters'].length)];
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
	
	return { 'entity_type': 1, 'id': ID, 'rarity': GetInfo(ID, "_Rarity") }
}
module.exports = {
	GetInfo, GetUnitData, HasStory, Create, GetLevel,
	CalculateStats, RaiseLevel, RaiseManaCircle, RaiseLimit,
	RaiseManaAndLimit, Unlock, Awaken,
	RaisePlatinum, ResetAugments,
	GetIDByName, DModeStats,
	Draw
}