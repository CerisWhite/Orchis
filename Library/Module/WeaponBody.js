const fluoresce = require('fluoresce');

function GetInfo(ID, Attribute) {
	return global.Master.WeaponBody[String(ID)][Attribute];
}
async function GetUnitData(ViewerID, ID) {
	const Data = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "weapon_body_list", { 'weapon_body_id': ID });
	return Data;
}

function Create(ID, Level, LimitBreak) {
	return {
        'weapon_body_id': ID,
        'buildup_count': Level != undefined ? Level : 0,
        'limit_break_count': LimitBreak != undefined ? LimitBreak : 0,
        'limit_over_count': 0,
        'equipable_count': 1,
        'additional_crest_slot_type_1_count': 0,
        'additional_crest_slot_type_2_count': 0,
        'additional_crest_slot_type_3_count': 0,
        'additional_effect_count': 0,
        'unlock_weapon_passive_ability_no_list': [  0, 0, 0, 0, 0,
													0, 0, 0, 0, 0,
													0, 0, 0, 0, 0 ],
        'fort_passive_chara_weapon_buildup_count': 0,
        'is_new': 1,
        'gettime': global.ServerTime
	}
}

function CreateMax(ID) {
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
        'gettime': global.ServerTime
	}
}

const BuildupIDs = Object.keys(global.Master.WeaponBodyBuildupGroup);
const PassiveUnlockIDs = Object.keys(global.Master.WeaponPassiveAbility);
const LevelIDs = Object.keys(global.Master.WeaponBodyBuildupLevel);
async function Buildup(res, ID, GrowList) {
	const WeaponBodyIndex = await GetUnitData(res.mid.ViewerID, ID);
	const UserPassive = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "weapon_passive_ability_list");
	
	for (const x in GrowList) {
		let PassiveData = {};
		switch(GrowList[x]['buildup_piece_type']) {
			case 1:
				//if (GrowList[x]['step'] == 9) { WeaponBodyIndex['limit_over_count'] = 1; }
				//else { WeaponBodyIndex['limit_break_count'] = GrowList[x]['step']; }
				WeaponBodyIndex['limit_break_count'] = GrowList[x]['step'];
			break;
			case 2:
				WeaponBodyIndex['limit_over_count'] = GrowList[x]['step'];
			break;
			case 3:
				WeaponBodyIndex['additional_crest_slot_type_1_count'] = GrowList[x]['step'];
			break;
			//case 4:
			//	WeaponBodyIndex['fort_passive_chara_weapon_buildup_count'] = GrowList[x]['step'];
			//break;
			case 5:
				WeaponBodyIndex['fort_passive_chara_weapon_buildup_count'] = GrowList[x]['step'];
			break;
			case 6:
				WeaponBodyIndex['equipable_count'] = GrowList[x]['step'];
			break;
			case 7:
				WeaponBodyIndex['buildup_count'] = GrowList[x]['step'];
			break;
			case 8:
				WeaponBodyIndex['unlock_weapon_passive_ability_no_list'][GrowList[x]['buildup_piece_no'] - 1] = 1;
				const WeaponPassiveID = GetInfo(ID, "_WeaponPassiveAbilityGroupId");
				for (const z in PassiveUnlockIDs) {
					if (
						global.Master.WeaponPassiveAbility[PassiveUnlockIDs[z]]['_WeaponPassiveAbilityGroupId'] == WeaponPassiveID &&
						global.Master.WeaponPassiveAbility[PassiveUnlockIDs[z]]['_WeaponPassiveAbilityNo'] == GrowList[x]['buildup_piece_no']
					) {
						PassiveData = global.Master.WeaponPassiveAbility[PassiveUnlockIDs[z]];
						if (UserPassive.findIndex(y => y.weapon_passive_ability_id == PassiveData['_Id']) == -1) {
							UserPassive.push({'weapon_passive_ability_id': PassiveData['_Id']});
						}
						break;
					}
				}
			break;
			case 9:
				WeaponBodyIndex['additional_crest_slot_type_3_count'] = GrowList[x]['step'];
			break;
		}
		if (GrowList[x]['buildup_piece_type'] == 8) {
			res.mid.ItemList.push({ 'type': 37, 'id': PassiveData['_RewardWeaponSkinId1'], 'quantity': 1 });
			res.mid.ItemList.push({ 'type': 37, 'id': PassiveData['_RewardWeaponSkinId2'], 'quantity': 1 });
			res.mid.ItemList.push({ 'type': 4, 'id': 0, 'quantity': PassiveData['_UnlockCoin'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': PassiveData['_UnlockMaterialId1'], 'quantity': PassiveData['_UnlockMaterialQuantity1'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': PassiveData['_UnlockMaterialId2'], 'quantity': PassiveData['_UnlockMaterialQuantity2'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': PassiveData['_UnlockMaterialId3'], 'quantity': PassiveData['_UnlockMaterialQuantity3'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': PassiveData['_UnlockMaterialId4'], 'quantity': PassiveData['_UnlockMaterialQuantity4'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': PassiveData['_UnlockMaterialId5'], 'quantity': PassiveData['_UnlockMaterialQuantity5'] * -1 });
		}
		else if (GrowList[x]['buildup_piece_type'] == 7) {
			const Rarity = GetInfo(ID, "_Rarity");
			let LevelData = {};
			for (const z in LevelIDs) {
				if (
					global.Master.WeaponBodyBuildupLevel[LevelIDs[z]]['_RarityGroup'] == Rarity &&
					global.Master.WeaponBodyBuildupLevel[LevelIDs[z]]['_Level'] == GrowList[x]['step']
				) {
					LevelData = global.Master.WeaponBodyBuildupLevel[LevelIDs[z]];
					break;
				}
			}
			res.mid.ItemList.push({ 'type': 8, 'id': LevelData['_BuildupMaterialId1'], 'quantity': LevelData['_BuildupMaterialQuantity1'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': LevelData['_BuildupMaterialId2'], 'quantity': LevelData['_BuildupMaterialQuantity2'] * -1 });
			res.mid.ItemList.push({ 'type': 8, 'id': LevelData['_BuildupMaterialId3'], 'quantity': LevelData['_BuildupMaterialQuantity3'] * -1 });
		}
		else {
			const BuildupID = String(GetInfo(ID, "_WeaponBodyBuildupGroupId"));
			let Buildup = {};
			for (const z in BuildupIDs) {
				if (
					global.Master.WeaponBodyBuildupGroup[BuildupIDs[z]]['_WeaponBodyBuildupGroupId'] == BuildupID &&
					global.Master.WeaponBodyBuildupGroup[BuildupIDs[z]]['_BuildupPieceType'] == GrowList[x]['buildup_piece_type'] &&
					global.Master.WeaponBodyBuildupGroup[BuildupIDs[z]]['_Step'] == GrowList[x]['step']
				) {
					Buildup = global.Master.WeaponBodyBuildupGroup[BuildupIDs[z]];
					break;
				}
			}
			if (Buildup['_RewardWeaponSkinNo'] != 0) {
				res.mid.ItemList.push({ 'type': 37, 'id': GetInfo(ID, "_RewardWeaponSkinId" + String(Buildup['_RewardWeaponSkinNo'])), 'quantity': 1 });
			}
			if (GrowList[x]['is_use_dedicated_material'] == 1) {
				res.mid.ItemList.push({'type': 8, 'id': 112003001, 'quantity': -1});
			}
			else {
				res.mid.ItemList.push({ 'type': 4, 'id': 0, 'quantity': Buildup['_BuildupCoin'] * -1 });
				let i = 0; while (i < 10) {
					res.mid.ItemList.push({
						'type': 8,
						'id': Buildup['_BuildupMaterialId' + String(i + 1)],
						'quantity': Buildup['_BuildupMaterialQuantity' + String(i + 1)] * -1
					});
					i++;
				}
			}
		}
	}
	
	res.mid.Data = {
		'update_data_list': {
			'user_data': res.mid.Persist['User'],
			'weapon_body_list': [ WeaponBodyIndex ],
			'weapon_passive_ability_list': UserPassive
		}
	}
	return;
}

let UnitList = {
	"6": [],
	"5": [],
	"4": [],
	"3": []
};
Object.values(global.Master.WeaponBody).forEach((Unit) => {
	if (
		Unit['_IsPlayable'] == 1 &&
		Unit['_Rarity'] > 2
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
		ID = UnitList[Math.floor(Math.random() * UnitList[String(FinalRoll)].length)];
	}
	
	return { 'entity_type': 38, 'id': ID, 'rarity': GetInfo(ID, "_Rarity") }
}

module.exports = { GetInfo, GetUnitData, Create, CreateMax, Buildup, Draw }