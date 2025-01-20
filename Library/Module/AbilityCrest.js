function GetInfo(ID, Attribute) {
	ID = String(ID);
	return global.Master.AbilityCrest[ID][Attribute];
}
async function GetUnitData(ViewerID, ID) {
	const Data = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "ability_crest_list", { 'ability_crest_id': ID });
	return Data;
}

function Create(ID, BuildupCount, LimitBreak, EquipCount) {
	return {
		'ability_crest_id': ID,
		'buildup_count': BuildupCount != undefined ? BuildupCount : 0,
		'limit_break_count': LimitBreak != undefined ? LimitBreak : 0,
		'equipable_count': EquipCount != undefined ? EquipCount : 1,
		'hp_plus_count': 0,
		'attack_plus_count': 0,
		'is_new': 1,
		'is_favorite': 0,
		'gettime': global.ServerTime
	}
}
function CreateMax(ID) {
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
		'gettime': global.ServerTime
	}
}

const BuildupKeyIDs = Object.keys(global.Master.AbilityCrestBuildupGroup);
const LevelKeyIDs = Object.keys(global.Master.AbilityCrestBuildupLevel);
async function RaiseCrest(res, ID, GrowList, AugmentList) {
	const CrestData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "ability_crest_list", { 'ability_crest_id': ID});
	res.mid.Data = {
		'update_data_list': {
			'ability_crest_list': [ CrestData ]
		}
	}
	
	const Rarity = GetInfo(ID, "_Rarity");
	const BuildupGroup = GetInfo(ID, "_AbilityCrestBuildupGroupId");
	const BuildupRarity = GetInfo(ID, "_AbilityCrestLevelRarityGroupId");
	const UniqueMaterial = GetInfo(ID, "_UniqueBuildupMaterialId");
	for (const x in GrowList) {
		if (GrowList[x]['buildup_piece_type'] == 1 || GrowList[x]['buildup_piece_type'] == 6) {
			if (GrowList[x]['is_use_dedicated_material'] == 1) {
				res.mid.ItemList.push({ 'type': 8, 'id': Rarity == 5 ? 114002001 : 114001001, 'quantity': -1 });
			}
			else {
				for (const z in BuildupKeyIDs) {
					if (global.Master.AbilityCrestBuildupGroup[BuildupKeyIDs[z]]['_BuildupPieceType'] == GrowList[x]['buildup_piece_type'] &&
						global.Master.AbilityCrestBuildupGroup[BuildupKeyIDs[z]]['_AbilityCrestBuildupGroupId'] == BuildupGroup &&
						global.Master.AbilityCrestBuildupGroup[BuildupKeyIDs[z]]['_Step'] == GrowList[x]['step']
					) {
						res.mid.ItemList.push({ 'type': 14, 'id': 0, 'quantity': global.Master.AbilityCrestBuildupGroup[BuildupKeyIDs[z]]['_BuildupDewPoint'] * -1 });
						res.mid.ItemList.push({ 'type': 8, 'id': global.Master.AbilityCrestBuildupGroup[BuildupKeyIDs[z]]['_BuildupMaterialId1'], 'quantity': global.Master.AbilityCrestBuildupGroup[BuildupKeyIDs[z]]['_BuildupMaterialQuantity1'] * -1 });
						res.mid.ItemList.push({ 'type': 8, 'id': global.Master.AbilityCrestBuildupGroup[BuildupKeyIDs[z]]['_BuildupMaterialId2'], 'quantity': global.Master.AbilityCrestBuildupGroup[BuildupKeyIDs[z]]['_BuildupMaterialQuantity2'] * -1 });
						res.mid.ItemList.push({ 'type': 8, 'id': global.Master.AbilityCrestBuildupGroup[BuildupKeyIDs[z]]['_BuildupMaterialId3'], 'quantity': global.Master.AbilityCrestBuildupGroup[BuildupKeyIDs[z]]['_BuildupMaterialQuantity3'] * -1 });
					}
				}
			}
		}
		else if (GrowList[x]['buildup_piece_type'] == 7) {
			for (const z in LevelKeyIDs) {
				if (global.Master.AbilityCrestBuildupLevel[LevelKeyIDs[z]]['_RarityGroup'] == BuildupRarity &&
					global.Master.AbilityCrestBuildupLevel[LevelKeyIDs[z]]['_Level'] == GrowList[x]['step']
				) {
					res.mid.ItemList.push({ 'type': 8, 'id': global.Master.AbilityCrestBuildupLevel[LevelKeyIDs[z]]['_BuildupMaterialId1'], 'quantity': global.Master.AbilityCrestBuildupLevel[LevelKeyIDs[z]]['_BuildupMaterialQuantity1'] * -1 });
					res.mid.ItemList.push({ 'type': 8, 'id': global.Master.AbilityCrestBuildupLevel[LevelKeyIDs[z]]['_BuildupMaterialId2'], 'quantity': global.Master.AbilityCrestBuildupLevel[LevelKeyIDs[z]]['_BuildupMaterialQuantity2'] * -1 });
					res.mid.ItemList.push({ 'type': 8, 'id': global.Master.AbilityCrestBuildupLevel[LevelKeyIDs[z]]['_BuildupMaterialId3'], 'quantity': global.Master.AbilityCrestBuildupLevel[LevelKeyIDs[z]]['_BuildupMaterialQuantity3'] * -1 });
					res.mid.ItemList.push({ 'type': 8, 'id': UniqueMaterial, 'quantity': global.Master.AbilityCrestBuildupLevel[LevelKeyIDs[z]]['_UniqueBuildupMaterialCount'] * -1 });
				}
			}
		}
		
		if (GrowList[x]['buildup_piece_type'] == 1 && GrowList[x]['step'] > CrestData['limit_break_count']) { CrestData['limit_break_count'] = GrowList[x]['step']; }
		else if (GrowList[x]['buildup_piece_type'] == 6 && GrowList[x]['step'] > CrestData['equipable_count']) { CrestData['equipable_count'] = GrowList[x]['step']; }
		else if (GrowList[x]['buildup_piece_type'] == 7 && GrowList[x]['step'] > CrestData['buildup_count']) { CrestData['buildup_count'] = GrowList[x]['step'] }
	}
	
	for (const x in AugmentList) {
		switch(AugmentList[x]['plus_count_type']) {
			case 1:
				res.mid.ItemList.push({ 'type': 8, 'id': 122001001, 'quantity': AugmentList[x]['plus_count'] * -1 });
				CrestData['hp_plus_count'] += AugmentList[x]['plus_count'];
			break;
			case 2:
				res.mid.ItemList.push({ 'type': 8, 'id': 123001001, 'quantity': AugmentList[x]['plus_count'] * -1 });
				CrestData['attack_plus_count'] += AugmentList[x]['plus_count'];
			break;
		}
	}
	
	return;
}
async function ResetAugments(res, ID, GrowList) {
	const CrestData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "ability_crest_list", { 'ability_crest_id': ID});
	res.mid.Data = {
		'update_data_list': {
			'ability_crest_list': [ CrestData ]
		}
	}
	
	for (const x in GrowList) {
		let Target = "";
		switch(GrowList[x]) {
			case 1:
				Target = "hp_plus_count";
				TargetMaterial = 122001001;
			break;
			case 2:
				Target = "attack_plus_count";
				TargetMaterial = 123001001;
			break;
		}
		res.mid.ItemList.push({ 'type': 8, 'id': TargetMaterial, 'quantity': CrestData[Target] * -1 });
		CrestData[Target] = 0;
	}
}

function GetIDByName(Name) {
	let CrestID = 0;
	Object.values(global.Master.AbilityCrest).forEach((Entry) => {
		if (Entry['_IsPlayable'] == 0) { return; }
		if (global.Master.TextLabel[Entry['_Name']]['_Text'] == Name) { CrestID = Entry['_Id']; }
	});
	return CrestID;
}

let UnitList = {
	"5": [],
	"4": [],
	"3": []
};
Object.values(global.Master.AbilityCrest).forEach((Unit) => {
	if (
		Unit['_IsPlayable'] == 1 &&
		Unit['_Rarity'] > 2 &&
		Unit['_Rarity'] < 6
	) {
		UnitList[String(Unit['_Rarity'])].push(Unit['_Id']);
	}
});

const Blacklist = [];
function Draw(SummonID, BannerData, IsTenfold, IsPlatinum) {
	let ID = 0;
	if (BannerData != undefined && BannerData['wyrmprints'][0] != undefined) {
		let RerollCount = 5;
		ID = BannerData['wyrmprints'][Math.floor(Math.random() * BannerData['wyrmprints'].length)];
		const Boosted = BannerData['wyrmprints'][Math.floor(Math.random() * BannerData['wyrmprints'].length)];
		if (BannerData['boost_rate'].includes(Boosted)) {
			ID = Boosted; RerollCount = 2;
		}
		while (RerollCount > 0) {
			let MinRarity = 3;
			if (IsTenfold == true && IsPlatinum == true) { MinRarity = 5; }
			else if (IsTenfold == true) { MinRarity = 4; }
			let Redraw = BannerData['wyrmprints'][Math.floor(Math.random() * BannerData['wyrmprints'].length)];
			let RedrawRarity = GetInfo(Redraw, "_Rarity");
			while (RedrawRarity < MinRarity) {
				Redraw = BannerData['wyrmprints'][Math.floor(Math.random() * BannerData['wyrmprints'].length)];
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
	
	return { 'entity_type': 39, 'id': ID, 'rarity': GetInfo(ID, "_Rarity") }
}

module.exports = { GetInfo, GetUnitData, Create, CreateMax, RaiseCrest, ResetAugments, GetIDByName, Draw }