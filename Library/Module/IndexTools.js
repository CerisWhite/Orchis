function ErasePartyList() {
	let NewPartyList = [];
	while (NewPartyList.length < 54) {
		let SettingList = [];
		while (SettingList.length < 4) {
			SettingList.push({
				'unit_no': SettingList.length + 1,
				'chara_id': 0,
				'equip_dragon_key_id': 0,
				'equip_weapon_body_id': 0,
				'equip_weapon_skin_id': 0,
				'equip_crest_slot_type_1_crest_id_1': 0,
				'equip_crest_slot_type_1_crest_id_2': 0,
				'equip_crest_slot_type_1_crest_id_3': 0,
				'equip_crest_slot_type_2_crest_id_1': 0,
				'equip_crest_slot_type_2_crest_id_2': 0,
				'equip_crest_slot_type_3_crest_id_1': 0,
				'equip_crest_slot_type_3_crest_id_2': 0,
				'equip_talisman_key_id': 0,
				'edit_skill_1_chara_id': 0,
				'edit_skill_2_chara_id': 0
			});
		}
		SettingList[0]['chara_id'] = 10140101;
		NewPartyList.push({
			'party_no': NewPartyList.length + 1,
			'party_name': "",
			'party_setting_list': SettingList
		});
	}
	return NewPartyList;
}

function DefaultSaveData() {
	const DefaultSaveData = {
		"chara_list": [],
        "dragon_list": [],
        "dragon_gift_list": [],
        "dragon_reliability_list": [],
        "material_list": [],
        "fort_plant_list": [
            {
                "plant_id": 100201,
                "is_new": 1
            },
            {
                "plant_id": 100401,
                "is_new": 1
            },
            {
                "plant_id": 100402,
                "is_new": 1
            },
            {
                "plant_id": 100403,
                "is_new": 1
            },
            {
                "plant_id": 100404,
                "is_new": 1
            },
            {
                "plant_id": 100405,
                "is_new": 1
            },
            {
                "plant_id": 100701,
                "is_new": 1
            },
            {
                "plant_id": 100702,
                "is_new": 1
            },
            {
                "plant_id": 100703,
                "is_new": 1
            },
            {
                "plant_id": 100704,
                "is_new": 1
            },
            {
                "plant_id": 100705,
                "is_new": 1
            }
        ],
        "build_list": [
            {
                "build_id": 599999,
                "fort_plant_detail_id": 10010101,
                "position_x": 16,
                "position_z": 17,
                "build_status": 0,
                "build_start_date": 0,
                "build_end_date": 0,
                "level": 1,
                "plant_id": 100101,
                "is_new": 0,
                "remain_time": 0,
                "last_income_date": global.ServerTime,
                "last_income_time": 10000000
            },
			{
                "build_id": 600000,
                "fort_plant_detail_id": 10140101,
                "position_x": 21,
                "position_z": 3,
                "build_status": 0,
                "build_start_date": 0,
                "build_end_date": 0,
                "level": 1,
                "plant_id": 101401,
                "is_new": 0,
                "remain_time": 0,
                "last_income_date": -1
            },
			{
                "build_id": 600001,
                "fort_plant_detail_id": 10030101,
                "position_x": -1,
                "position_z": -1,
                "build_status": 0,
                "build_start_date": 0,
                "build_end_date": 0,
                "level": 1,
                "plant_id": 100301,
                "is_new": 0,
                "remain_time": 0,
                "last_income_date": global.ServerTime,
                "last_income_time": 10000000
            }
        ],
        "equip_stamp_list": [
            {
                "slot": 1,
                "stamp_id": 10001
            },
            {
                "slot": 2,
                "stamp_id": 10002
            },
            {
                "slot": 3,
                "stamp_id": 10003
            },
            {
                "slot": 4,
                "stamp_id": 10004
            },
            {
                "slot": 5,
                "stamp_id": 10005
            },
            {
                "slot": 6,
                "stamp_id": 10006
            },
            {
                "slot": 7,
                "stamp_id": 10007
            },
            {
                "slot": 8,
                "stamp_id": 10008
            },
            {
                "slot": 9,
                "stamp_id": 10009
            },
            {
                "slot": 10,
                "stamp_id": 10010
            },
            {
                "slot": 11,
                "stamp_id": 10011
            },
            {
                "slot": 12,
                "stamp_id": 10012
            },
            {
                "slot": 13,
                "stamp_id": 10013
            },
            {
                "slot": 14,
                "stamp_id": 10014
            },
            {
                "slot": 15,
                "stamp_id": 10015
            },
            {
                "slot": 16,
                "stamp_id": 10016
            },
            {
                "slot": 17,
                "stamp_id": 10017
            },
            {
                "slot": 18,
                "stamp_id": 10018
            },
            {
                "slot": 19,
                "stamp_id": 10019
            },
            {
                "slot": 20,
                "stamp_id": 10020
            },
            {
                "slot": 21,
                "stamp_id": 10021
            },
            {
                "slot": 22,
                "stamp_id": 10022
            },
            {
                "slot": 23,
                "stamp_id": 10023
            },
            {
                "slot": 24,
                "stamp_id": 10024
            },
            {
                "slot": 25,
                "stamp_id": 10025
            },
            {
                "slot": 26,
                "stamp_id": 10026
            },
            {
                "slot": 27,
                "stamp_id": 10027
            },
            {
                "slot": 28,
                "stamp_id": 10028
            },
            {
                "slot": 29,
                "stamp_id": 10029
            },
            {
                "slot": 30,
                "stamp_id": 10030
            },
            {
                "slot": 31,
                "stamp_id": 10031
            },
            {
                "slot": 32,
                "stamp_id": 10201
            }
        ],
        "unit_story_list": [
        ],
        "castle_story_list": [
        ],
        "quest_list": [
        ],
        "quest_event_list": [
        ],
        "quest_story_list": [
            {
                "quest_story_id": 1000100,
                "state": 1
            }
        ],
        "quest_treasure_list": [
        ],
        "quest_carry_list": [
        ],
        "quest_entry_condition_list": [
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
		],
        "summon_ticket_list": [
            {
                "key_id": 2,
                "summon_ticket_id": 10102,
                "quantity": 1,
                "use_limit_time": 0
            }
        ],
        "summon_point_list": [
        ],
        "current_main_story_mission": {
		  "main_story_mission_group_id": 11,
		  "main_story_mission_state_list": [
			{
			  "main_story_mission_id": 10110101,
			  "state": 2
			},
			{
			  "main_story_mission_id": 10110201,
			  "state": 2
			},
			{
			  "main_story_mission_id": 10110301,
			  "state": 2
			},
			{
			  "main_story_mission_id": 10110401,
			  "state": 2
			},
			{
			  "main_story_mission_id": 10110501,
			  "state": 2
			}
		  ]
		},
        "quest_wall_list": [
            {
                "quest_group_id": 21601,
                "wall_id": 216010001,
                "wall_level": 0,
                "is_start_next_level": 1
            },
            {
                "quest_group_id": 21601,
                "wall_id": 216010002,
                "wall_level": 0,
                "is_start_next_level": 1
            },
            {
                "quest_group_id": 21601,
                "wall_id": 216010003,
                "wall_level": 0,
                "is_start_next_level": 1
            },
            {
                "quest_group_id": 21601,
                "wall_id": 216010004,
                "wall_level": 0,
                "is_start_next_level": 1
            },
            {
                "quest_group_id": 21601,
                "wall_id": 216010005,
                "wall_level": 0,
                "is_start_next_level": 1
            }
        ],
        "astral_item_list": [
        ],
        "user_guild_data": {
			"guild_id": 0
        },
        "guild_data": {
			"guild_id": 0
        },
        "lottery_ticket_list": [
        ],
        "gather_item_list": [
        ],
        "weapon_skin_list": [
            {
                "weapon_skin_id": 30129901,
                "is_new": 0,
                "gettime": global.ServerTime
            }
        ],
        "weapon_body_list": [
            {
                "weapon_body_id": 30129901,
                "buildup_count": 0,
                "limit_break_count": 0,
                "limit_over_count": 0,
                "equipable_count": 1,
                "additional_crest_slot_type_1_count": 0,
                "additional_crest_slot_type_2_count": 0,
                "additional_crest_slot_type_3_count": 0,
                "additional_effect_count": 0,
                "unlock_weapon_passive_ability_no_list": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "fort_passive_chara_weapon_buildup_count": 0,
                "is_new": 0,
                "gettime": global.ServerTime
            }
        ],
        "weapon_passive_ability_list": [
        ],
        "ability_crest_list": [
        ],
        "exchange_ticket_list": [
        ],
        "album_dragon_list": [
        ],
        "talisman_list": [
        ],
        "user_summon_list": [
        ],
        "stamina_multi_user_max": 12,
        "stamina_multi_system_max": 99,
        "quest_bonus_stack_base_time": 0,
        "spec_upgrade_time": 0,
        "quest_skip_point_use_limit_max": 30,
        "quest_skip_point_system_max": 400,
        "walker_data": {},
		"quest_bonus": [],
		"special_shop_purchase": [],
		"user_treasure_trade_list": [],
		"treasure_trade_all_list": [],
		"party_power_data": {
            "max_party_power": 40000
        },
        "party_list": ErasePartyList(),
		"present_notice": {
            "present_count": 0,
            "present_limit_count": 0
        },
        "friend_notice": {
            "friend_new_count": 0,
            "apply_new_count": 0
        },
        "guild_notice": {
            "is_update_guild_apply_reply": 0,
            "guild_apply_count": 0,
            "is_update_guild_board": 0,
            "is_update_guild": 0,
            "is_update_guild_invite": 0
        },
        "shop_notice": {
            "is_shop_notification": 0
        },
        
    }
	return DefaultSaveData;
}

function CleanIndex(UserIndexRecord) {
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
	UserIndexRecord['multi_server'] = { 'host': "", 'app_id': "" }
	return UserIndexRecord;
}

function ClearInvalidKeyIDs(UserIndexRecord) {
	for (const x in UserIndexRecord['party_list']) {
		for (const y in UserIndexRecord['party_list'][x]['party_setting_list']) {
			const WeaponID = UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_weapon_body_id'];
			const DragonID = UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_dragon_key_id'];
			const TalismanID = UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_talisman_key_id'];
			const WeaponSkinID = UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_weapon_skin_id'];
			const Crest1ID = [
				UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_crest_slot_type_1_crest_id_1'],
				UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_crest_slot_type_1_crest_id_2'],
				UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_crest_slot_type_1_crest_id_3']
			];
			const Crest2ID = [
				UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_crest_slot_type_2_crest_id_1'],
				UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_crest_slot_type_2_crest_id_2']
			];
			const Crest3ID = [
				UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_crest_slot_type_3_crest_id_1'],
				UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_crest_slot_type_3_crest_id_2']
			];
			
			if (UserIndexRecord['weapon_body_list'].findIndex(z => z.weapon_body_id == WeaponID) == -1) {
				UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_weapon_body_id'] = 0;
			}
			if (UserIndexRecord['weapon_skin_list'].findIndex(z => z.weapon_skin_id == WeaponID) == -1) {
				UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_weapon_skin_id'] = 0;
			}
			if (UserIndexRecord['dragon_list'].findIndex(z => z.dragon_key_id == DragonID) == -1) {
				UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_dragon_key_id'] = 0;
			}
			if (UserIndexRecord['talisman_list'].findIndex(z => z.talisman_key_id == TalismanID) == -1) {
				UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_talisman_key_id'] = 0;
			}
			let c = 0; while (c < 3) {
				if (c != 2) {
					const Crest2 = Crest2ID[c];
					if (UserIndexRecord['ability_crest_list'].findIndex(z => z.ability_crest_id == Crest2) == -1) {
						UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_crest_slot_type_2_crest_id_' + String(c)] = 0;
					}
					const Crest3 = Crest3ID[c];
					if (UserIndexRecord['ability_crest_list'].findIndex(z => z.ability_crest_id == Crest3) == -1) {
						UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_crest_slot_type_3_crest_id_' + String(c)] = 0;
					}
				}
				const Crest1 = Crest1ID[c];
				if (UserIndexRecord['ability_crest_list'].findIndex(z => z.ability_crest_id == Crest1) == -1) {
					UserIndexRecord['party_list'][x]['party_setting_list'][y]['equip_crest_slot_type_1_crest_id_' + String(c)] = 0;
				}
				c++;
			}
		}
	}
	
	return UserIndexRecord;
}

async function OrchisImport(UserIndexRecord, ViewerID, PersistRecord) {
	const IndexExists = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "dragon_reliability_list");
	if (IndexExists == false) {
		const Base = DefaultSaveData();
		Base['party_list'] = ErasePartyList();
		await global.Module.Fluoresce.Write("OrchisIndex", ViewerID, Base);
	}
	
	let Source = {}
	if (UserIndexRecord['data'] != undefined) { Source = UserIndexRecord['data']; }
	else { Source = UserIndexRecord; }
	
	const PartyList = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "party_list");
	for (const x in PartyList) {
		for (const z in PartyList[x]['party_setting_list']) {
			PartyList[x]['party_setting_list'][z]['equip_dragon_key_id'] = 0;
			PartyList[x]['party_setting_list'][z]['equip_amulet_key_id'] = 0;
			PartyList[x]['party_setting_list'][z]['equip_amulet_2_key_id'] = 0;
			PartyList[x]['party_setting_list'][z]['equip_weapon_key_id'] = 0;
			PartyList[x]['party_setting_list'][z]['equip_talisman_key_id'] = 0;
		}
	}
	await global.Module.Fluoresce.Write("OrchisIndex", ViewerID, PartyList, "party_list");
	const ImportList = Object.keys(Source);
	for (const x in ImportList) {
		if (ImportList[x] == undefined) { continue; }
		switch(ImportList[x]) {
			case "chara_list":
				await global.Module.Fluoresce.Write("OrchisIndex", ViewerID, Source['chara_list'], "chara_list");
			break;
			case "dragon_list":
				PersistRecord['Key']['Dragon'] = 30000;
				const Bond = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "dragon_reliability_list");
				for (const z in Source['dragon_list']) {
					const BondIndex = Bond.findIndex(y => y.dragon_id == Source['dragon_list'][z]['dragon_id']);
					if (BondIndex == -1) {
						let BondLevel = 1;
						let BondXP = 0;
						
						if (
							global.Master.DragonData[String(Source['dragon_list'][z]['dragon_id'])] != undefined &&
							global.Master.DragonData[String(Source['dragon_list'][z]['dragon_id'])]['_DefaultReliabilityLevel'] != 0
						) {
							BondLevel = global.Master.DragonData[String(Source['dragon_list'][z]['dragon_id'])]['_DefaultReliabilityLevel'];
							const DragonRarity = global.Module.Dragon.GetInfo(Source['dragon_list'][z]['dragon_id'], "_Rarity");
							BondXP = DragonRarity == 5 ? global.Master.DragonReliabilityLevel[String(BondLevel)]['_TotalReliability'] : global.Master.DragonReliabilityLevel[String(2000 + BondLevel)]['_TotalReliability'];
						}
						Bond.push({
							'dragon_id': Source['dragon_list'][z]['dragon_id'],
							'get_time': global.ServerTime,
							'reliability_level': BondLevel,
							'reliability_total_exp': BondXP,
							'last_contact_time': 0
						});
					}
					PersistRecord['Key']['Dragon'] += 1;
					Source['dragon_list'][z]['dragon_key_id'] = PersistRecord['Key']['Dragon'];
				}
				await global.Module.Fluoresce.Write("OrchisIndex", ViewerID, Source['dragon_list'], "dragon_list");
				await global.Module.Fluoresce.Write("OrchisIndex", ViewerID, Bond, "dragon_reliability_list");
			break;
			case "material_list":
				await global.Module.Fluoresce.Write("OrchisIndex", ViewerID, Source['material_list'], "material_list");
			break;
			case "amulet_list":
				PersistRecord['Key']['Amulet'] = 20000;
				for (const z in Source['amulet_list']) {
					PersistRecord['Key']['Amulet'] += 1;
					Source['amulet_list'][z]['amulet_key_id'] = PersistRecord['Key']['Amulet'];
				}
				await global.Module.Fluoresce.Write("OrchisIndex", ViewerID, Source['amulet_list'], "amulet_list");
			break;
			case "ability_crest_list":
				await global.Module.Fluoresce.Write("OrchisIndex", ViewerID, Source['ability_crest_list'], "ability_crest_list");
			break;
			case "talisman_list":
				PersistRecord['Key']['Talisman'] = 50000;
				for (const z in Source['talisman_list']) {
					PersistRecord['Key']['Talisman'] += 1;
					Source['talisman_list'][z]['talisman_key_id'] = PersistRecord['Key']['Talisman'];
				}
				await global.Module.Fluoresce.Write("OrchisIndex", ViewerID, Source['talisman_list'], "talisman_list");
			break;
			case "summon_ticket_list":
				await global.Module.Fluoresce.Write("OrchisIndex", ViewerID, Source['summon_ticket_list'], "summon_ticket_list");
			break;
			case "dragon_gift_list":
				await global.Module.Fluoresce.Write("OrchisIndex", ViewerID, Source['dragon_gift_list'], "dragon_gift_list");
			break;
			
			case "quest_list":
				await global.Module.Fluoresce.Write("OrchisIndex", ViewerID, Source['quest_list'], "quest_list");
			break;
			case "quest_wall_list":
				await global.Module.Fluoresce.Write("OrchisIndex", ViewerID, Source['quest_wall_list'], "quest_wall_list");
			break;
			
			case "weapon_skin_list":
				await global.Module.Fluoresce.Write("OrchisIndex", ViewerID, Source['weapon_skin_list'], "weapon_skin_list");
			break;
			
			case "user_data":
				if (!global.Module.Filter.Validate(Source['user_data']['name'])) {
					if (Source['user_data']['name'].length > 12) {
						Source['user_data']['name'] = Source['user_data']['name'].slice(0, 12);
					}
					PersistRecord['User']['name'] = Source['user_data']['name'];
				}
				PersistRecord['User']['crystal'] = global.Module.Util.SaneValueDouble(Source['user_data']['crystal']);
				PersistRecord['User']['coin'] = global.Module.Util.SaneValueDouble(Source['user_data']['coin']);
				PersistRecord['User']['quest_skip_point'] = global.Module.Util.SaneValue(Source['user_data']['quest_skip_point']);
				PersistRecord['User']['mana_point'] = global.Module.Util.SaneValue(Source['user_data']['mana_point']);
				PersistRecord['User']['dew_point'] = global.Module.Util.SaneValue(Source['user_data']['dew_point']);
				PersistRecord['User']['build_time_point'] = global.Module.Util.SaneValue(Source['user_data']['build_time_point']);
			break;
		}
	}
	
	if (Source['extend'] != undefined) {
		const ExtendedList = Object.keys(Source['extend']);
		for (const x in ExtendedList) {
			switch(ExtendedList[x]) {
				case "dmode":
					if (PersistRecord['DMode']['Info']['dmode_point_1'] == undefined) { continue; }
					if (Source['extend']['dmode']['dusk_amber'] != undefined) {
						PersistRecord['DMode']['Info']['dmode_point_1'] = global.Module.Util.SaneValue(Source['extend']['dmode']['dusk_amber']);
					}
					if (Source['extend']['dmode']['dawn_amber'] != undefined) {
						PersistRecord['DMode']['Info']['dmode_point_2'] = global.Module.Util.SaneValue(Source['extend']['dmode']['dawn_amber']);
					}
				break;
				case "diamantium":
					PersistRecord['Diamantium'] = global.Module.Util.SaneValue(Source['extend']['diamantium']);
				break;
				case "stamina_items":
					PersistRecord['Item'] = Source['extend']['stamina_items'];
				break;
			}
		}
	}
	
	PersistRecord['User']['tutorial_status'] = 60999;
	PersistRecord['User']['tutorial_flag_list'] = Flags;
	PersistRecord['SaveUpdatedAt'] = Math.floor(Date.now() / 1000);
	return;
}

const DefaultPrintSet = [
            {
                "ability_crest_set_no": 1,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 2,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 3,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 4,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 5,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 6,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 7,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 8,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 9,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 10,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 11,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 12,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 13,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 14,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 15,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 16,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 17,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 18,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 19,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 20,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 21,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 22,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 23,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 24,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 25,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 26,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 27,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 28,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 29,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 30,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 31,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 32,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 33,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 34,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 35,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 36,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 37,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 38,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 39,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 40,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 41,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 42,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 43,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 44,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 45,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 46,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 47,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 48,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 49,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 50,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 51,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 52,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 53,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            },
            {
                "ability_crest_set_no": 54,
                "ability_crest_set_name": "",
                "crest_slot_type_1_crest_id_1": 0,
                "crest_slot_type_1_crest_id_2": 0,
                "crest_slot_type_1_crest_id_3": 0,
                "crest_slot_type_2_crest_id_1": 0,
                "crest_slot_type_2_crest_id_2": 0,
                "crest_slot_type_3_crest_id_1": 0,
                "crest_slot_type_3_crest_id_2": 0,
                "talisman_key_id": 0
            }
        ]

function DefaultEquipment() {
	const Set = [];
	while (Set.length < 3) {
		Set.push({
			'unit_set_no': Set.length + 1,
			'unit_set_name': "Set " + String(Set.length + 1),
			'dragon_key_id': 0,
			'weapon_body_id': 0,
			'crest_slot_type_1_crest_id_1': 0,
			'crest_slot_type_1_crest_id_2': 0,
			'crest_slot_type_1_crest_id_3': 0,
			'crest_slot_type_2_crest_id_1': 0,
			'crest_slot_type_2_crest_id_2': 0,
			'crest_slot_type_3_crest_id_1': 0,
			'crest_slot_type_3_crest_id_2': 0,
			'talisman_key_id': 0
		});
	}
	return Set;
}

const Redoable = {
    'redoable_summon_odds_rate_list': {
            'normal': {
                'rarity_list': [
                    {
                        'rarity': 5,
                        'total_rate': '6.00%'
                    },
                    {
                        'rarity': 4,
                        'total_rate': '16.00%'
                    },
                    {
                        'rarity': 3,
                        'total_rate': '78.00%'
                    }
                ],
                'rarity_group_list': [
                    {
                        'pickup': false,
                        'rarity': 5,
                        'total_rate': '6.00%',
                        'chara_rate': '3.00%',
                        'dragon_rate': '3.00%'
                    },
                    {
                        'pickup': false,
                        'rarity': 4,
                        'total_rate': '16.00%',
                        'chara_rate': '8.55%',
                        'dragon_rate': '7.45%'
                    },
                    {
                        'pickup': false,
                        'rarity': 3,
                        'total_rate': '78.00%',
                        'chara_rate': '47.00%',
                        'dragon_rate': '31.00%'
                    }
                ],
                'unit': {
                    'chara_odds_list': [
                        {
                            'pickup': false,
                            'rarity': 5,
                            'unit_list': [
                                {
                                    'id': 10150101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150103,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150106,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150201,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150202,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150203,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150302,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150303,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150305,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150306,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150401,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150403,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150404,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150405,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150501,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150502,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150503,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150504,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250102,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250104,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250201,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250203,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250204,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250302,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250303,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250304,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250401,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250402,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250404,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250502,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250503,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250504,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350102,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350104,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350202,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350204,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350302,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350303,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350404,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350405,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350502,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350503,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350504,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450103,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450104,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450201,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450202,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450203,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450204,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450304,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450401,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450403,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450405,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450406,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450501,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450502,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550102,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550103,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550201,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550204,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550205,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550302,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550304,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550306,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550401,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550405,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550501,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550502,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550503,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650102,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650103,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650201,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650203,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650204,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650302,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650303,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650401,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650402,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650403,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650501,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650504,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750103,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750105,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750201,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750202,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750204,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750302,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750303,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750304,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750401,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750403,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750404,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750405,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750502,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750503,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750505,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850102,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850104,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850201,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850203,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850302,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850303,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850401,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850402,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850403,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850501,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850502,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850503,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950102,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950201,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950203,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950302,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950303,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950401,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950402,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950501,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950502,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950503,
                                    'rate': '0.022%'
                                }
                            ]
                        },
                        {
                            'pickup': false,
                            'rarity': 4,
                            'unit_list': [
                                {
                                    'id': 10140102,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10140103,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10140301,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10140302,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10140401,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10140501,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10240202,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10240301,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10240401,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10240502,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10340102,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10340201,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10340202,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10340203,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10340401,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10340402,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10340501,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10440101,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10440102,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10440201,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10440401,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10540103,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10540202,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10540301,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10540302,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10540401,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10540402,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10540502,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10640101,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10640301,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10640302,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10640402,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10640501,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10740101,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10740203,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10740301,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10740401,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10740501,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10840101,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10840201,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10840202,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10840301,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10840302,
                                    'rate': '0.194%'
                                },
                                {
                                    'id': 10840402,
                                    'rate': '0.194%'
                                }
                            ]
                        },
                        {
                            'pickup': false,
                            'rarity': 3,
                            'unit_list': [
                                {
                                    'id': 10130102,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10130103,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10130401,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10130501,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10230501,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10330101,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10330501,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10430201,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10430202,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10430301,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10530101,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10530201,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10530202,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10630301,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10630401,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10730101,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10730401,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10830402,
                                    'rate': '2.473%'
                                },
                                {
                                    'id': 10830501,
                                    'rate': '2.473%'
                                }
                            ]
                        }
                    ],
                    'dragon_odds_list': [
                        {
                            'pickup': false,
                            'rarity': 5,
                            'unit_list': [
                                {
                                    'id': 20050101,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050104,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050106,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050107,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050108,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050109,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050110,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050113,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050114,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050117,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050118,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050119,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050201,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050203,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050204,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050207,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050209,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050210,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050211,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050212,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050213,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050214,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050217,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050301,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050304,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050305,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050306,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050308,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050309,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050311,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050312,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050313,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050314,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050315,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050316,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050317,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050318,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050319,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050321,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050401,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050403,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050404,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050405,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050407,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050408,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050409,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050411,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050412,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050413,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050414,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050415,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050416,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050418,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050419,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050501,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050508,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050509,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050510,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050514,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050516,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050518,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050519,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050520,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050521,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050523,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050524,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050525,
                                    'rate': '0.044%'
                                }
                            ]
                        },
                        {
                            'pickup': false,
                            'rarity': 4,
                            'unit_list': [
                                {
                                    'id': 20040102,
                                    'rate': '0.745%'
                                },
                                {
                                    'id': 20040103,
                                    'rate': '0.745%'
                                },
                                {
                                    'id': 20040202,
                                    'rate': '0.745%'
                                },
                                {
                                    'id': 20040203,
                                    'rate': '0.745%'
                                },
                                {
                                    'id': 20040302,
                                    'rate': '0.745%'
                                },
                                {
                                    'id': 20040303,
                                    'rate': '0.745%'
                                },
                                {
                                    'id': 20040402,
                                    'rate': '0.745%'
                                },
                                {
                                    'id': 20040403,
                                    'rate': '0.745%'
                                },
                                {
                                    'id': 20040502,
                                    'rate': '0.745%'
                                },
                                {
                                    'id': 20040503,
                                    'rate': '0.745%'
                                }
                            ]
                        },
                        {
                            'pickup': false,
                            'rarity': 3,
                            'unit_list': [
                                {
                                    'id': 20030101,
                                    'rate': '2.066%'
                                },
                                {
                                    'id': 20030102,
                                    'rate': '2.066%'
                                },
                                {
                                    'id': 20030103,
                                    'rate': '2.066%'
                                },
                                {
                                    'id': 20030201,
                                    'rate': '2.066%'
                                },
                                {
                                    'id': 20030202,
                                    'rate': '2.066%'
                                },
                                {
                                    'id': 20030203,
                                    'rate': '2.066%'
                                },
                                {
                                    'id': 20030301,
                                    'rate': '2.066%'
                                },
                                {
                                    'id': 20030302,
                                    'rate': '2.066%'
                                },
                                {
                                    'id': 20030303,
                                    'rate': '2.066%'
                                },
                                {
                                    'id': 20030401,
                                    'rate': '2.066%'
                                },
                                {
                                    'id': 20030402,
                                    'rate': '2.066%'
                                },
                                {
                                    'id': 20030403,
                                    'rate': '2.066%'
                                },
                                {
                                    'id': 20030501,
                                    'rate': '2.066%'
                                },
                                {
                                    'id': 20030502,
                                    'rate': '2.066%'
                                },
                                {
                                    'id': 20030503,
                                    'rate': '2.066%'
                                }
                            ]
                        }
                    ]
                }
            },
            'guarantee': {
                'rarity_list': [
                    {
                        'rarity': 5,
                        'total_rate': '6.00%'
                    },
                    {
                        'rarity': 4,
                        'total_rate': '94.00%'
                    }
                ],
                'rarity_group_list': [
                    {
                        'pickup': false,
                        'rarity': 5,
                        'total_rate': '6.00%',
                        'chara_rate': '3.00%',
                        'dragon_rate': '3.00%'
                    },
                    {
                        'pickup': false,
                        'rarity': 4,
                        'total_rate': '94.00%',
                        'chara_rate': '50.23%',
                        'dragon_rate': '43.76%'
                    }
                ],
                'unit': {
                    'chara_odds_list': [
                        {
                            'pickup': false,
                            'rarity': 5,
                            'unit_list': [
                                {
                                    'id': 10150101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150103,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150106,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150201,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150202,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150203,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150302,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150303,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150305,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150306,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150401,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150403,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150404,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150405,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150501,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150502,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150503,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10150504,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250102,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250104,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250201,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250203,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250204,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250302,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250303,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250304,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250401,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250402,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250404,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250502,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250503,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10250504,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350102,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350104,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350202,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350204,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350302,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350303,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350404,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350405,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350502,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350503,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10350504,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450103,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450104,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450201,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450202,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450203,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450204,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450304,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450401,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450403,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450405,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450406,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450501,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10450502,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550102,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550103,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550201,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550204,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550205,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550302,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550304,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550306,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550401,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550405,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550501,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550502,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10550503,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650102,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650103,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650201,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650203,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650204,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650302,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650303,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650401,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650402,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650403,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650501,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10650504,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750103,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750105,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750201,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750202,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750204,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750302,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750303,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750304,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750401,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750403,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750404,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750405,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750502,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750503,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10750505,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850102,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850104,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850201,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850203,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850302,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850303,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850401,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850402,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850403,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850501,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850502,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10850503,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950101,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950102,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950201,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950203,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950301,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950302,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950303,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950401,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950402,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950501,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950502,
                                    'rate': '0.022%'
                                },
                                {
                                    'id': 10950503,
                                    'rate': '0.022%'
                                }
                            ]
                        },
                        {
                            'pickup': false,
                            'rarity': 4,
                            'unit_list': [
                                {
                                    'id': 10140102,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10140103,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10140301,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10140302,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10140401,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10140501,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10240202,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10240301,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10240401,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10240502,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10340102,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10340201,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10340202,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10340203,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10340401,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10340402,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10340501,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10440101,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10440102,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10440201,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10440401,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10540103,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10540202,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10540301,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10540302,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10540401,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10540402,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10540502,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10640101,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10640301,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10640302,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10640402,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10640501,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10740101,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10740203,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10740301,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10740401,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10740501,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10840101,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10840201,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10840202,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10840301,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10840302,
                                    'rate': '1.141%'
                                },
                                {
                                    'id': 10840402,
                                    'rate': '1.141%'
                                }
                            ]
                        }
                    ],
                    'dragon_odds_list': [
                        {
                            'pickup': false,
                            'rarity': 5,
                            'unit_list': [
                                {
                                    'id': 20050101,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050104,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050106,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050107,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050108,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050109,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050110,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050113,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050114,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050117,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050118,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050119,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050201,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050203,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050204,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050207,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050209,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050210,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050211,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050212,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050213,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050214,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050217,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050301,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050304,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050305,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050306,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050308,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050309,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050311,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050312,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050313,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050314,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050315,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050316,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050317,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050318,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050319,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050321,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050401,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050403,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050404,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050405,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050407,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050408,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050409,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050411,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050412,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050413,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050414,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050415,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050416,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050418,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050419,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050501,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050508,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050509,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050510,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050514,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050516,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050518,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050519,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050520,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050521,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050523,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050524,
                                    'rate': '0.044%'
                                },
                                {
                                    'id': 20050525,
                                    'rate': '0.044%'
                                }
                            ]
                        },
                        {
                            'pickup': false,
                            'rarity': 4,
                            'unit_list': [
                                {
                                    'id': 20040102,
                                    'rate': '4.376%'
                                },
                                {
                                    'id': 20040103,
                                    'rate': '4.376%'
                                },
                                {
                                    'id': 20040202,
                                    'rate': '4.376%'
                                },
                                {
                                    'id': 20040203,
                                    'rate': '4.376%'
                                },
                                {
                                    'id': 20040302,
                                    'rate': '4.376%'
                                },
                                {
                                    'id': 20040303,
                                    'rate': '4.376%'
                                },
                                {
                                    'id': 20040402,
                                    'rate': '4.376%'
                                },
                                {
                                    'id': 20040403,
                                    'rate': '4.376%'
                                },
                                {
                                    'id': 20040502,
                                    'rate': '4.376%'
                                },
                                {
                                    'id': 20040503,
                                    'rate': '4.376%'
                                }
                            ]
                        }
                    ]
                }
            }
        },

}

const Flags = [ 1001, 1002, 1003, 1004, 1005,
							1006, 1007, 1008, 1009, 1010,
							1011, 1012, 1013, 1014, 1015,
							1016, 1017, 1018, 1019, 1020,
							1021, 1022, 1023, 1024, 1025,
							1026, 1027, 1028, 1029, 1030 ]

const VoidPassives = [
	{ "weapon_passive_ability_id": 1010101 },
	{ "weapon_passive_ability_id": 1010102 },
	{ "weapon_passive_ability_id": 1010103 },
	{ "weapon_passive_ability_id": 1010104 },
	{ "weapon_passive_ability_id": 1010105 },
	{ "weapon_passive_ability_id": 1010106 },
	{ "weapon_passive_ability_id": 1010107 },
	{ "weapon_passive_ability_id": 1010108 },
	{ "weapon_passive_ability_id": 1010109 },
	{ "weapon_passive_ability_id": 1010201 },
	{ "weapon_passive_ability_id": 1010202 },
	{ "weapon_passive_ability_id": 1010203 },
	{ "weapon_passive_ability_id": 1010204 },
	{ "weapon_passive_ability_id": 1010205 },
	{ "weapon_passive_ability_id": 1010206 },
	{ "weapon_passive_ability_id": 1010207 },
	{ "weapon_passive_ability_id": 1010208 },
	{ "weapon_passive_ability_id": 1010209 },
	{ "weapon_passive_ability_id": 1010210 },
	{ "weapon_passive_ability_id": 1010211 },
	{ "weapon_passive_ability_id": 1010301 },
	{ "weapon_passive_ability_id": 1010302 },
	{ "weapon_passive_ability_id": 1010303 },
	{ "weapon_passive_ability_id": 1010304 },
	{ "weapon_passive_ability_id": 1010305 },
	{ "weapon_passive_ability_id": 1010306 },
	{ "weapon_passive_ability_id": 1010307 },
	{ "weapon_passive_ability_id": 1010308 },
	{ "weapon_passive_ability_id": 1010309 },
	{ "weapon_passive_ability_id": 1010310 },
	{ "weapon_passive_ability_id": 1010401 },
	{ "weapon_passive_ability_id": 1010402 },
	{ "weapon_passive_ability_id": 1010403 },
	{ "weapon_passive_ability_id": 1010404 },
	{ "weapon_passive_ability_id": 1010405 },
	{ "weapon_passive_ability_id": 1010406 },
	{ "weapon_passive_ability_id": 1010407 },
	{ "weapon_passive_ability_id": 1010408 },
	{ "weapon_passive_ability_id": 1010409 },
	{ "weapon_passive_ability_id": 1010501 },
	{ "weapon_passive_ability_id": 1010502 },
	{ "weapon_passive_ability_id": 1010503 },
	{ "weapon_passive_ability_id": 1010504 },
	{ "weapon_passive_ability_id": 1010505 },
	{ "weapon_passive_ability_id": 1010506 },
	{ "weapon_passive_ability_id": 1010507 },
	{ "weapon_passive_ability_id": 1010508 },

	{ "weapon_passive_ability_id": 1020101 },
	{ "weapon_passive_ability_id": 1020102 },
	{ "weapon_passive_ability_id": 1020103 },
	{ "weapon_passive_ability_id": 1020104 },
	{ "weapon_passive_ability_id": 1020105 },
	{ "weapon_passive_ability_id": 1020106 },
	{ "weapon_passive_ability_id": 1020107 },
	{ "weapon_passive_ability_id": 1020108 },
	{ "weapon_passive_ability_id": 1020109 },
	{ "weapon_passive_ability_id": 1020201 },
	{ "weapon_passive_ability_id": 1020202 },
	{ "weapon_passive_ability_id": 1020203 },
	{ "weapon_passive_ability_id": 1020204 },
	{ "weapon_passive_ability_id": 1020205 },
	{ "weapon_passive_ability_id": 1020206 },
	{ "weapon_passive_ability_id": 1020207 },
	{ "weapon_passive_ability_id": 1020208 },
	{ "weapon_passive_ability_id": 1020209 },
	{ "weapon_passive_ability_id": 1020210 },
	{ "weapon_passive_ability_id": 1020211 },
	{ "weapon_passive_ability_id": 1020301 },
	{ "weapon_passive_ability_id": 1020302 },
	{ "weapon_passive_ability_id": 1020303 },
	{ "weapon_passive_ability_id": 1020304 },
	{ "weapon_passive_ability_id": 1020305 },
	{ "weapon_passive_ability_id": 1020306 },
	{ "weapon_passive_ability_id": 1020307 },
	{ "weapon_passive_ability_id": 1020308 },
	{ "weapon_passive_ability_id": 1020309 },
	{ "weapon_passive_ability_id": 1020310 },
	{ "weapon_passive_ability_id": 1020401 },
	{ "weapon_passive_ability_id": 1020402 },
	{ "weapon_passive_ability_id": 1020403 },
	{ "weapon_passive_ability_id": 1020404 },
	{ "weapon_passive_ability_id": 1020405 },
	{ "weapon_passive_ability_id": 1020406 },
	{ "weapon_passive_ability_id": 1020407 },
	{ "weapon_passive_ability_id": 1020408 },
	{ "weapon_passive_ability_id": 1020409 },
	{ "weapon_passive_ability_id": 1020501 },
	{ "weapon_passive_ability_id": 1020502 },
	{ "weapon_passive_ability_id": 1020503 },
	{ "weapon_passive_ability_id": 1020504 },
	{ "weapon_passive_ability_id": 1020505 },
	{ "weapon_passive_ability_id": 1020506 },
	{ "weapon_passive_ability_id": 1020507 },
	{ "weapon_passive_ability_id": 1020508 },

	{ "weapon_passive_ability_id": 1030101 },
	{ "weapon_passive_ability_id": 1030102 },
	{ "weapon_passive_ability_id": 1030103 },
	{ "weapon_passive_ability_id": 1030104 },
	{ "weapon_passive_ability_id": 1030105 },
	{ "weapon_passive_ability_id": 1030106 },
	{ "weapon_passive_ability_id": 1030107 },
	{ "weapon_passive_ability_id": 1030108 },
	{ "weapon_passive_ability_id": 1030109 },
	{ "weapon_passive_ability_id": 1030201 },
	{ "weapon_passive_ability_id": 1030202 },
	{ "weapon_passive_ability_id": 1030203 },
	{ "weapon_passive_ability_id": 1030204 },
	{ "weapon_passive_ability_id": 1030205 },
	{ "weapon_passive_ability_id": 1030206 },
	{ "weapon_passive_ability_id": 1030207 },
	{ "weapon_passive_ability_id": 1030208 },
	{ "weapon_passive_ability_id": 1030209 },
	{ "weapon_passive_ability_id": 1030210 },
	{ "weapon_passive_ability_id": 1030211 },
	{ "weapon_passive_ability_id": 1030301 },
	{ "weapon_passive_ability_id": 1030302 },
	{ "weapon_passive_ability_id": 1030303 },
	{ "weapon_passive_ability_id": 1030304 },
	{ "weapon_passive_ability_id": 1030305 },
	{ "weapon_passive_ability_id": 1030306 },
	{ "weapon_passive_ability_id": 1030307 },
	{ "weapon_passive_ability_id": 1030308 },
	{ "weapon_passive_ability_id": 1030309 },
	{ "weapon_passive_ability_id": 1030310 },
	{ "weapon_passive_ability_id": 1030401 },
	{ "weapon_passive_ability_id": 1030402 },
	{ "weapon_passive_ability_id": 1030403 },
	{ "weapon_passive_ability_id": 1030404 },
	{ "weapon_passive_ability_id": 1030405 },
	{ "weapon_passive_ability_id": 1030406 },
	{ "weapon_passive_ability_id": 1030407 },
	{ "weapon_passive_ability_id": 1030408 },
	{ "weapon_passive_ability_id": 1030409 },
	{ "weapon_passive_ability_id": 1030501 },
	{ "weapon_passive_ability_id": 1030502 },
	{ "weapon_passive_ability_id": 1030503 },
	{ "weapon_passive_ability_id": 1030504 },
	{ "weapon_passive_ability_id": 1030505 },
	{ "weapon_passive_ability_id": 1030506 },
	{ "weapon_passive_ability_id": 1030507 },
	{ "weapon_passive_ability_id": 1030508 },

	{ "weapon_passive_ability_id": 1040101 },
	{ "weapon_passive_ability_id": 1040102 },
	{ "weapon_passive_ability_id": 1040103 },
	{ "weapon_passive_ability_id": 1040104 },
	{ "weapon_passive_ability_id": 1040105 },
	{ "weapon_passive_ability_id": 1040106 },
	{ "weapon_passive_ability_id": 1040107 },
	{ "weapon_passive_ability_id": 1040108 },
	{ "weapon_passive_ability_id": 1040109 },
	{ "weapon_passive_ability_id": 1040201 },
	{ "weapon_passive_ability_id": 1040202 },
	{ "weapon_passive_ability_id": 1040203 },
	{ "weapon_passive_ability_id": 1040204 },
	{ "weapon_passive_ability_id": 1040205 },
	{ "weapon_passive_ability_id": 1040206 },
	{ "weapon_passive_ability_id": 1040207 },
	{ "weapon_passive_ability_id": 1040208 },
	{ "weapon_passive_ability_id": 1040209 },
	{ "weapon_passive_ability_id": 1040210 },
	{ "weapon_passive_ability_id": 1040211 },
	{ "weapon_passive_ability_id": 1040301 },
	{ "weapon_passive_ability_id": 1040302 },
	{ "weapon_passive_ability_id": 1040303 },
	{ "weapon_passive_ability_id": 1040304 },
	{ "weapon_passive_ability_id": 1040305 },
	{ "weapon_passive_ability_id": 1040306 },
	{ "weapon_passive_ability_id": 1040307 },
	{ "weapon_passive_ability_id": 1040308 },
	{ "weapon_passive_ability_id": 1040309 },
	{ "weapon_passive_ability_id": 1040310 },
	{ "weapon_passive_ability_id": 1040401 },
	{ "weapon_passive_ability_id": 1040402 },
	{ "weapon_passive_ability_id": 1040403 },
	{ "weapon_passive_ability_id": 1040404 },
	{ "weapon_passive_ability_id": 1040405 },
	{ "weapon_passive_ability_id": 1040406 },
	{ "weapon_passive_ability_id": 1040407 },
	{ "weapon_passive_ability_id": 1040408 },
	{ "weapon_passive_ability_id": 1040409 },
	{ "weapon_passive_ability_id": 1040501 },
	{ "weapon_passive_ability_id": 1040502 },
	{ "weapon_passive_ability_id": 1040503 },
	{ "weapon_passive_ability_id": 1040504 },
	{ "weapon_passive_ability_id": 1040505 },
	{ "weapon_passive_ability_id": 1040506 },
	{ "weapon_passive_ability_id": 1040507 },
	{ "weapon_passive_ability_id": 1040508 },

	{ "weapon_passive_ability_id": 1050101 },
	{ "weapon_passive_ability_id": 1050102 },
	{ "weapon_passive_ability_id": 1050103 },
	{ "weapon_passive_ability_id": 1050104 },
	{ "weapon_passive_ability_id": 1050105 },
	{ "weapon_passive_ability_id": 1050106 },
	{ "weapon_passive_ability_id": 1050107 },
	{ "weapon_passive_ability_id": 1050108 },
	{ "weapon_passive_ability_id": 1050109 },
	{ "weapon_passive_ability_id": 1050201 },
	{ "weapon_passive_ability_id": 1050202 },
	{ "weapon_passive_ability_id": 1050203 },
	{ "weapon_passive_ability_id": 1050204 },
	{ "weapon_passive_ability_id": 1050205 },
	{ "weapon_passive_ability_id": 1050206 },
	{ "weapon_passive_ability_id": 1050207 },
	{ "weapon_passive_ability_id": 1050208 },
	{ "weapon_passive_ability_id": 1050209 },
	{ "weapon_passive_ability_id": 1050210 },
	{ "weapon_passive_ability_id": 1050211 },
	{ "weapon_passive_ability_id": 1050301 },
	{ "weapon_passive_ability_id": 1050302 },
	{ "weapon_passive_ability_id": 1050303 },
	{ "weapon_passive_ability_id": 1050304 },
	{ "weapon_passive_ability_id": 1050305 },
	{ "weapon_passive_ability_id": 1050306 },
	{ "weapon_passive_ability_id": 1050307 },
	{ "weapon_passive_ability_id": 1050308 },
	{ "weapon_passive_ability_id": 1050309 },
	{ "weapon_passive_ability_id": 1050310 },
	{ "weapon_passive_ability_id": 1050401 },
	{ "weapon_passive_ability_id": 1050402 },
	{ "weapon_passive_ability_id": 1050403 },
	{ "weapon_passive_ability_id": 1050404 },
	{ "weapon_passive_ability_id": 1050405 },
	{ "weapon_passive_ability_id": 1050406 },
	{ "weapon_passive_ability_id": 1050407 },
	{ "weapon_passive_ability_id": 1050408 },
	{ "weapon_passive_ability_id": 1050409 },
	{ "weapon_passive_ability_id": 1050501 },
	{ "weapon_passive_ability_id": 1050502 },
	{ "weapon_passive_ability_id": 1050503 },
	{ "weapon_passive_ability_id": 1050504 },
	{ "weapon_passive_ability_id": 1050505 },
	{ "weapon_passive_ability_id": 1050506 },
	{ "weapon_passive_ability_id": 1050507 },
	{ "weapon_passive_ability_id": 1050508 },

	{ "weapon_passive_ability_id": 1060101 },
	{ "weapon_passive_ability_id": 1060102 },
	{ "weapon_passive_ability_id": 1060103 },
	{ "weapon_passive_ability_id": 1060104 },
	{ "weapon_passive_ability_id": 1060105 },
	{ "weapon_passive_ability_id": 1060106 },
	{ "weapon_passive_ability_id": 1060107 },
	{ "weapon_passive_ability_id": 1060108 },
	{ "weapon_passive_ability_id": 1060109 },
	{ "weapon_passive_ability_id": 1060201 },
	{ "weapon_passive_ability_id": 1060202 },
	{ "weapon_passive_ability_id": 1060203 },
	{ "weapon_passive_ability_id": 1060204 },
	{ "weapon_passive_ability_id": 1060205 },
	{ "weapon_passive_ability_id": 1060206 },
	{ "weapon_passive_ability_id": 1060207 },
	{ "weapon_passive_ability_id": 1060208 },
	{ "weapon_passive_ability_id": 1060209 },
	{ "weapon_passive_ability_id": 1060210 },
	{ "weapon_passive_ability_id": 1060211 },
	{ "weapon_passive_ability_id": 1060301 },
	{ "weapon_passive_ability_id": 1060302 },
	{ "weapon_passive_ability_id": 1060303 },
	{ "weapon_passive_ability_id": 1060304 },
	{ "weapon_passive_ability_id": 1060305 },
	{ "weapon_passive_ability_id": 1060306 },
	{ "weapon_passive_ability_id": 1060307 },
	{ "weapon_passive_ability_id": 1060308 },
	{ "weapon_passive_ability_id": 1060309 },
	{ "weapon_passive_ability_id": 1060310 },
	{ "weapon_passive_ability_id": 1060401 },
	{ "weapon_passive_ability_id": 1060402 },
	{ "weapon_passive_ability_id": 1060403 },
	{ "weapon_passive_ability_id": 1060404 },
	{ "weapon_passive_ability_id": 1060405 },
	{ "weapon_passive_ability_id": 1060406 },
	{ "weapon_passive_ability_id": 1060407 },
	{ "weapon_passive_ability_id": 1060408 },
	{ "weapon_passive_ability_id": 1060409 },
	{ "weapon_passive_ability_id": 1060501 },
	{ "weapon_passive_ability_id": 1060502 },
	{ "weapon_passive_ability_id": 1060503 },
	{ "weapon_passive_ability_id": 1060504 },
	{ "weapon_passive_ability_id": 1060505 },
	{ "weapon_passive_ability_id": 1060506 },
	{ "weapon_passive_ability_id": 1060507 },
	{ "weapon_passive_ability_id": 1060508 },

	{ "weapon_passive_ability_id": 1070101 },
	{ "weapon_passive_ability_id": 1070102 },
	{ "weapon_passive_ability_id": 1070103 },
	{ "weapon_passive_ability_id": 1070104 },
	{ "weapon_passive_ability_id": 1070105 },
	{ "weapon_passive_ability_id": 1070106 },
	{ "weapon_passive_ability_id": 1070107 },
	{ "weapon_passive_ability_id": 1070108 },
	{ "weapon_passive_ability_id": 1070109 },
	{ "weapon_passive_ability_id": 1070201 },
	{ "weapon_passive_ability_id": 1070202 },
	{ "weapon_passive_ability_id": 1070203 },
	{ "weapon_passive_ability_id": 1070204 },
	{ "weapon_passive_ability_id": 1070205 },
	{ "weapon_passive_ability_id": 1070206 },
	{ "weapon_passive_ability_id": 1070207 },
	{ "weapon_passive_ability_id": 1070208 },
	{ "weapon_passive_ability_id": 1070209 },
	{ "weapon_passive_ability_id": 1070210 },
	{ "weapon_passive_ability_id": 1070211 },
	{ "weapon_passive_ability_id": 1070301 },
	{ "weapon_passive_ability_id": 1070302 },
	{ "weapon_passive_ability_id": 1070303 },
	{ "weapon_passive_ability_id": 1070304 },
	{ "weapon_passive_ability_id": 1070305 },
	{ "weapon_passive_ability_id": 1070306 },
	{ "weapon_passive_ability_id": 1070307 },
	{ "weapon_passive_ability_id": 1070308 },
	{ "weapon_passive_ability_id": 1070309 },
	{ "weapon_passive_ability_id": 1070310 },
	{ "weapon_passive_ability_id": 1070401 },
	{ "weapon_passive_ability_id": 1070402 },
	{ "weapon_passive_ability_id": 1070403 },
	{ "weapon_passive_ability_id": 1070404 },
	{ "weapon_passive_ability_id": 1070405 },
	{ "weapon_passive_ability_id": 1070406 },
	{ "weapon_passive_ability_id": 1070407 },
	{ "weapon_passive_ability_id": 1070408 },
	{ "weapon_passive_ability_id": 1070409 },
	{ "weapon_passive_ability_id": 1070501 },
	{ "weapon_passive_ability_id": 1070502 },
	{ "weapon_passive_ability_id": 1070503 },
	{ "weapon_passive_ability_id": 1070504 },
	{ "weapon_passive_ability_id": 1070505 },
	{ "weapon_passive_ability_id": 1070506 },
	{ "weapon_passive_ability_id": 1070507 },
	{ "weapon_passive_ability_id": 1070508 },

	{ "weapon_passive_ability_id": 1080101 },
	{ "weapon_passive_ability_id": 1080102 },
	{ "weapon_passive_ability_id": 1080103 },
	{ "weapon_passive_ability_id": 1080104 },
	{ "weapon_passive_ability_id": 1080105 },
	{ "weapon_passive_ability_id": 1080106 },
	{ "weapon_passive_ability_id": 1080107 },
	{ "weapon_passive_ability_id": 1080108 },
	{ "weapon_passive_ability_id": 1080109 },
	{ "weapon_passive_ability_id": 1080201 },
	{ "weapon_passive_ability_id": 1080202 },
	{ "weapon_passive_ability_id": 1080203 },
	{ "weapon_passive_ability_id": 1080204 },
	{ "weapon_passive_ability_id": 1080205 },
	{ "weapon_passive_ability_id": 1080206 },
	{ "weapon_passive_ability_id": 1080207 },
	{ "weapon_passive_ability_id": 1080208 },
	{ "weapon_passive_ability_id": 1080209 },
	{ "weapon_passive_ability_id": 1080210 },
	{ "weapon_passive_ability_id": 1080211 },
	{ "weapon_passive_ability_id": 1080301 },
	{ "weapon_passive_ability_id": 1080302 },
	{ "weapon_passive_ability_id": 1080303 },
	{ "weapon_passive_ability_id": 1080304 },
	{ "weapon_passive_ability_id": 1080305 },
	{ "weapon_passive_ability_id": 1080306 },
	{ "weapon_passive_ability_id": 1080307 },
	{ "weapon_passive_ability_id": 1080308 },
	{ "weapon_passive_ability_id": 1080309 },
	{ "weapon_passive_ability_id": 1080310 },
	{ "weapon_passive_ability_id": 1080401 },
	{ "weapon_passive_ability_id": 1080402 },
	{ "weapon_passive_ability_id": 1080403 },
	{ "weapon_passive_ability_id": 1080404 },
	{ "weapon_passive_ability_id": 1080405 },
	{ "weapon_passive_ability_id": 1080406 },
	{ "weapon_passive_ability_id": 1080407 },
	{ "weapon_passive_ability_id": 1080408 },
	{ "weapon_passive_ability_id": 1080409 },
	{ "weapon_passive_ability_id": 1080501 },
	{ "weapon_passive_ability_id": 1080502 },
	{ "weapon_passive_ability_id": 1080503 },
	{ "weapon_passive_ability_id": 1080504 },
	{ "weapon_passive_ability_id": 1080505 },
	{ "weapon_passive_ability_id": 1080506 },
	{ "weapon_passive_ability_id": 1080507 },
	{ "weapon_passive_ability_id": 1080508 },

	{ "weapon_passive_ability_id": 1090101 },
	{ "weapon_passive_ability_id": 1090102 },
	{ "weapon_passive_ability_id": 1090103 },
	{ "weapon_passive_ability_id": 1090104 },
	{ "weapon_passive_ability_id": 1090105 },
	{ "weapon_passive_ability_id": 1090106 },
	{ "weapon_passive_ability_id": 1090107 },
	{ "weapon_passive_ability_id": 1090108 },
	{ "weapon_passive_ability_id": 1090109 },
	{ "weapon_passive_ability_id": 1090201 },
	{ "weapon_passive_ability_id": 1090202 },
	{ "weapon_passive_ability_id": 1090203 },
	{ "weapon_passive_ability_id": 1090204 },
	{ "weapon_passive_ability_id": 1090205 },
	{ "weapon_passive_ability_id": 1090206 },
	{ "weapon_passive_ability_id": 1090207 },
	{ "weapon_passive_ability_id": 1090208 },
	{ "weapon_passive_ability_id": 1090209 },
	{ "weapon_passive_ability_id": 1090210 },
	{ "weapon_passive_ability_id": 1090211 },
	{ "weapon_passive_ability_id": 1090301 },
	{ "weapon_passive_ability_id": 1090302 },
	{ "weapon_passive_ability_id": 1090303 },
	{ "weapon_passive_ability_id": 1090304 },
	{ "weapon_passive_ability_id": 1090305 },
	{ "weapon_passive_ability_id": 1090306 },
	{ "weapon_passive_ability_id": 1090307 },
	{ "weapon_passive_ability_id": 1090308 },
	{ "weapon_passive_ability_id": 1090309 },
	{ "weapon_passive_ability_id": 1090310 },
	{ "weapon_passive_ability_id": 1090401 },
	{ "weapon_passive_ability_id": 1090402 },
	{ "weapon_passive_ability_id": 1090403 },
	{ "weapon_passive_ability_id": 1090404 },
	{ "weapon_passive_ability_id": 1090405 },
	{ "weapon_passive_ability_id": 1090406 },
	{ "weapon_passive_ability_id": 1090407 },
	{ "weapon_passive_ability_id": 1090408 },
	{ "weapon_passive_ability_id": 1090409 },
	{ "weapon_passive_ability_id": 1090501 },
	{ "weapon_passive_ability_id": 1090502 },
	{ "weapon_passive_ability_id": 1090503 },
	{ "weapon_passive_ability_id": 1090504 },
	{ "weapon_passive_ability_id": 1090505 },
	{ "weapon_passive_ability_id": 1090506 },
	{ "weapon_passive_ability_id": 1090507 },
	{ "weapon_passive_ability_id": 1090508 }
]

const MinimalFortData = [
    {
        "build_id": 558178,
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
    }
]

const StickerList = [
	{ "stamp_id": 10001, "is_new": 0 }, { "stamp_id": 10002, "is_new": 0 }, { "stamp_id": 10003, "is_new": 0 }, { "stamp_id": 10004, "is_new": 0 },
	{ "stamp_id": 10005, "is_new": 0 }, { "stamp_id": 10006, "is_new": 0 }, { "stamp_id": 10007, "is_new": 0 }, { "stamp_id": 10008, "is_new": 0 },
	{ "stamp_id": 10009, "is_new": 0 }, { "stamp_id": 10010, "is_new": 0 }, { "stamp_id": 10011, "is_new": 0 }, { "stamp_id": 10012, "is_new": 0 },
	{ "stamp_id": 10013, "is_new": 0 }, { "stamp_id": 10014, "is_new": 0 }, { "stamp_id": 10015, "is_new": 0 }, { "stamp_id": 10016, "is_new": 0 },
	{ "stamp_id": 10017, "is_new": 0 }, { "stamp_id": 10018, "is_new": 0 }, { "stamp_id": 10020, "is_new": 0 }, { "stamp_id": 10021, "is_new": 0 },
	{ "stamp_id": 10022, "is_new": 0 }, { "stamp_id": 10023, "is_new": 0 }, { "stamp_id": 10024, "is_new": 0 }, { "stamp_id": 10025, "is_new": 0 },
	{ "stamp_id": 10026, "is_new": 0 }, { "stamp_id": 10027, "is_new": 0 }, { "stamp_id": 10028, "is_new": 0 }, { "stamp_id": 10029, "is_new": 0 },
	{ "stamp_id": 10030, "is_new": 0 }, { "stamp_id": 10031, "is_new": 0 }, { "stamp_id": 10101, "is_new": 0 }, { "stamp_id": 10102, "is_new": 0 },
	{ "stamp_id": 10103, "is_new": 0 }, { "stamp_id": 10104, "is_new": 0 }, { "stamp_id": 10105, "is_new": 0 }, { "stamp_id": 10201, "is_new": 0 },
	{ "stamp_id": 10202, "is_new": 0 }, { "stamp_id": 10203, "is_new": 0 }, { "stamp_id": 10301, "is_new": 0 }, { "stamp_id": 10302, "is_new": 0 },
	{ "stamp_id": 10303, "is_new": 0 }, { "stamp_id": 10401, "is_new": 0 }, { "stamp_id": 10501, "is_new": 0 }, { "stamp_id": 10502, "is_new": 0 },
	{ "stamp_id": 10503, "is_new": 0 }, { "stamp_id": 10601, "is_new": 0 }, { "stamp_id": 10602, "is_new": 0 }, { "stamp_id": 10603, "is_new": 0 },
	{ "stamp_id": 10604, "is_new": 0 }, { "stamp_id": 10701, "is_new": 0 }, { "stamp_id": 10702, "is_new": 0 }, { "stamp_id": 10703, "is_new": 0 },
	{ "stamp_id": 10801, "is_new": 0 }, { "stamp_id": 10802, "is_new": 0 }, { "stamp_id": 10901, "is_new": 0 }, { "stamp_id": 10902, "is_new": 0 },
	{ "stamp_id": 11001, "is_new": 0 }, { "stamp_id": 11002, "is_new": 0 }, { "stamp_id": 11003, "is_new": 0 }, { "stamp_id": 11004, "is_new": 0 },
	{ "stamp_id": 11101, "is_new": 0 }, { "stamp_id": 11102, "is_new": 0 }, { "stamp_id": 11103, "is_new": 0 }, { "stamp_id": 11104, "is_new": 0 },
	{ "stamp_id": 11105, "is_new": 0 }, { "stamp_id": 11106, "is_new": 0 }, { "stamp_id": 11107, "is_new": 0 }, { "stamp_id": 11108, "is_new": 0 },
	{ "stamp_id": 11201, "is_new": 0 }, { "stamp_id": 11202, "is_new": 0 }, { "stamp_id": 11301, "is_new": 0 }, { "stamp_id": 11302, "is_new": 0 },
	{ "stamp_id": 11303, "is_new": 0 }, { "stamp_id": 11304, "is_new": 0 }, { "stamp_id": 11305, "is_new": 0 }, { "stamp_id": 11306, "is_new": 0 },
	{ "stamp_id": 11401, "is_new": 0 }, { "stamp_id": 11501, "is_new": 0 }, { "stamp_id": 11502, "is_new": 0 }, { "stamp_id": 11503, "is_new": 0 },
	{ "stamp_id": 11601, "is_new": 0 }, { "stamp_id": 11602, "is_new": 0 }, { "stamp_id": 11603, "is_new": 0 }, { "stamp_id": 11604, "is_new": 0 },
	{ "stamp_id": 11605, "is_new": 0 }, { "stamp_id": 11701, "is_new": 0 }, { "stamp_id": 11702, "is_new": 0 }, { "stamp_id": 11801, "is_new": 0 },
	{ "stamp_id": 11901, "is_new": 0 }, { "stamp_id": 11902, "is_new": 0 }, { "stamp_id": 12001, "is_new": 0 }, { "stamp_id": 12002, "is_new": 0 },
	{ "stamp_id": 12101, "is_new": 0 }, { "stamp_id": 12102, "is_new": 0 }, { "stamp_id": 12201, "is_new": 0 }, { "stamp_id": 12202, "is_new": 0 },
	{ "stamp_id": 12301, "is_new": 0 }, { "stamp_id": 12302, "is_new": 0 }, { "stamp_id": 12401, "is_new": 0 }, { "stamp_id": 12402, "is_new": 0 },
	{ "stamp_id": 12403, "is_new": 0 }, { "stamp_id": 12404, "is_new": 0 }, { "stamp_id": 12405, "is_new": 0 }, { "stamp_id": 12501, "is_new": 0 },
	{ "stamp_id": 12502, "is_new": 0 }, { "stamp_id": 12601, "is_new": 0 }, { "stamp_id": 12602, "is_new": 0 }, { "stamp_id": 12603, "is_new": 0 },
	{ "stamp_id": 12701, "is_new": 0 }, { "stamp_id": 12702, "is_new": 0 }, { "stamp_id": 12801, "is_new": 0 }, { "stamp_id": 12802, "is_new": 0 },
	{ "stamp_id": 12901, "is_new": 0 }, { "stamp_id": 12902, "is_new": 0 }, { "stamp_id": 12903, "is_new": 0 }, { "stamp_id": 12904, "is_new": 0 },
	{ "stamp_id": 13001, "is_new": 0 }, { "stamp_id": 13101, "is_new": 0 }, { "stamp_id": 13102, "is_new": 0 }, { "stamp_id": 13103, "is_new": 0 },
	{ "stamp_id": 13201, "is_new": 0 }, { "stamp_id": 13202, "is_new": 0 }
]

module.exports = { ErasePartyList, DefaultSaveData, CleanIndex, OrchisImport,
				   ClearInvalidKeyIDs, DefaultPrintSet,
				   DefaultEquipment, Redoable, Flags,
				   VoidPassives,
				   MinimalFortData, StickerList }