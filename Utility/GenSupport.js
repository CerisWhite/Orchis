const fs = require('fs');
const SupportData = JSON.parse(fs.readFileSync('./Library/Event/Support.json'));
const NewData = JSON.parse(fs.readFileSync('./NewSupport.json'));
const CharacterMap = require('./Library/IDMaps/CharacterMap.js');
const WeaponMap = require('./Library/IDMaps/WeaponMap.js');
const DragonMap = require('./Library/IDMaps/DragonMap.js');
const PrintMap = require('./Library/IDMaps/WyrmprintMap.js');

for (const x in NewData) {
	const CharacterID = CharacterMap.CharacterIDByName(NewData[x]['Character']);
	const WeaponID = WeaponMap.WeaponIDByName(NewData[x]['Weapon']);
	const DragonID = DragonMap.DragonIDByName(NewData[x]['Dragon']);
	const HasSpiral = DragonMap.GetDragonInfo(DragonID, "has_spiral");
	console.log(CharacterID, WeaponID, DragonID);
	let IndexBase = {
		"data_headers": {
			"result_code": 1
		},
		"data": {
			"user_data": {
			  "viewer_id": 14 + parseInt(x),
			  "name": NewData[x]['Character'],
			  "level": 120,
			  "exp": 10000000,
			  "crystal": 999990,
			  "coin": 9999999990,
			  "max_dragon_quantity": 225,
			  "max_weapon_quantity": 0,
			  "max_amulet_quantity": 0,
			  "quest_skip_point": 400,
			  "main_party_no": 1,
			  "emblem_id": CharacterID,
			  "active_memory_event_id": 0,
			  "mana_point": 99999990,
			  "dew_point": 99999990,
			  "build_time_point": 0,
			  "last_login_time": 1669767714,
			  "stamina_single": 358,
			  "last_stamina_single_update_time": 1661729076,
			  "stamina_single_surplus_second": 0,
			  "stamina_multi": 54,
			  "last_stamina_multi_update_time": 1669782331,
			  "stamina_multi_surplus_second": 0,
			  "tutorial_status": 60999,
			  "tutorial_flag_list": [
				1001,
				1002,
				1003,
				1004,
				1005,
				1006,
				1007,
				1008,
				1009,
				1010,
				1011,
				1012,
				1013,
				1014,
				1015,
				1016,
				1017,
				1018,
				1019,
				1020,
				1021,
				1022,
				1023,
				1024,
				1025,
				1026,
				1027,
				1028,
				1029,
				1030
			  ],
			  "prologue_end_time": 1595969801,
			  "is_optin": 1,
			  "fort_open_time": 1595973967,
			  "create_time": 1595965478
			},
			"party_power_data": {
			  "max_party_power": 51060
			},
			"chara_list": [ CharacterMap.RaiseOmnicite(CharacterID, {'gettime': 1669767714}) ],
			"dragon_list": [
				{
					"dragon_key_id": 1,
					"dragon_id": DragonID,
					"rarity": DragonMap.GetDragonInfo(DragonID, "rarity"),
					"level": 100,
					"hp_plus_count": 900,
					"attack_plus_count": 900,
					"exp": 625170,
					"is_lock": 0,
					"is_new": 1,
					"get_time": Math.floor(Date.now() / 1000),
					"skill_1_level": 2,
					"ability_1_level": HasSpiral ? 6 : 5,
					"ability_2_level": HasSpiral ? 6 : 5,
					"limit_break_count": HasSpiral ? 5 : 4
				}
			],
			"dragon_reliability_list": [
				{
				"dragon_id": DragonID,
				"gettime": 1595969602,
				"reliability_level": 30,
				"reliability_total_exp": 36300,
				"last_contact_time": 1621863703
			  }
			],
			"weapon_body_list": [
				{
					"weapon_body_id":  WeaponID,
					"buildup_count": 90,
					"limit_break_count": 8,
					"limit_over_count": 2,
					"equipable_count": 4,
					"additional_crest_slot_type_1_count": 1,
					"additional_crest_slot_type_2_count": 0,
					"additional_crest_slot_type_3_count": 2,
					"additional_effect_count": 2,
					"unlock_weapon_passive_ability_no_list": [  0, 0, 0, 0, 0,
																0, 0, 0, 0, 0,
																0, 0, 0, 0, 0 ],
					"fort_passive_chara_weapon_buildup_count": 1,
					"is_new": 1,
					"gettime": 1595969602
				}
			],
			"ability_crest_list": [
				{
					"ability_crest_id": PrintMap.WyrmprintIDByName(NewData[x]["5"][0]),
					"buildup_count": 50,
					"limit_break_count": 4,
					"equipable_count": 4,
					"hp_plus_count": 50,
					"attack_plus_count": 50,
					"is_new": 1,
					"is_favorite": 0,
					"gettime": 1595969602
				},
				{
					"ability_crest_id": PrintMap.WyrmprintIDByName(NewData[x]["5"][1]),
					"buildup_count": 50,
					"limit_break_count": 4,
					"equipable_count": 4,
					"hp_plus_count": 50,
					"attack_plus_count": 50,
					"is_new": 1,
					"is_favorite": 0,
					"gettime": 1595969602
				},
				{
					"ability_crest_id": PrintMap.WyrmprintIDByName(NewData[x]["5"][2]),
					"buildup_count": 50,
					"limit_break_count": 4,
					"equipable_count": 4,
					"hp_plus_count": 50,
					"attack_plus_count": 50,
					"is_new": 1,
					"is_favorite": 0,
					"gettime": 1595969602
				},
				{
					"ability_crest_id": PrintMap.WyrmprintIDByName(NewData[x]["4"][0]),
					"buildup_count": 30,
					"limit_break_count": 4,
					"equipable_count": 4,
					"hp_plus_count": 50,
					"attack_plus_count": 50,
					"is_new": 1,
					"is_favorite": 0,
					"gettime": 1595969602
				},
				{
					"ability_crest_id": PrintMap.WyrmprintIDByName(NewData[x]["4"][1]),
					"buildup_count": 30,
					"limit_break_count": 4,
					"equipable_count": 4,
					"hp_plus_count": 50,
					"attack_plus_count": 50,
					"is_new": 1,
					"is_favorite": 0,
					"gettime": 1595969602
				},
				{
					"ability_crest_id": PrintMap.WyrmprintIDByName(NewData[x]["9"][0]),
					"buildup_count": 30,
					"limit_break_count": 4,
					"equipable_count": 4,
					"hp_plus_count": 50,
					"attack_plus_count": 50,
					"is_new": 1,
					"is_favorite": 0,
					"gettime": 1595969602
				},
				{
					"ability_crest_id": PrintMap.WyrmprintIDByName(NewData[x]["9"][1]),
					"buildup_count": 30,
					"limit_break_count": 4,
					"equipable_count": 4,
					"hp_plus_count": 50,
					"attack_plus_count": 50,
					"is_new": 1,
					"is_favorite": 0,
					"gettime": 1595969602
				}
			]
		}
	}
	let SessionBase = {
	  "SupportCharacter": {
		"last_active_time": 1669767714,
		"chara_id": CharacterID,
		"equip_dragon_key_id": 1,
		"equip_weapon_body_id": WeaponID,
		"equip_crest_slot_type_1_crest_id_1": PrintMap.WyrmprintIDByName(NewData[x]["5"][0]),
		"equip_crest_slot_type_1_crest_id_2": PrintMap.WyrmprintIDByName(NewData[x]["5"][1]),
		"equip_crest_slot_type_1_crest_id_3": PrintMap.WyrmprintIDByName(NewData[x]["5"][2]),
		"equip_crest_slot_type_2_crest_id_1": PrintMap.WyrmprintIDByName(NewData[x]["4"][0]),
		"equip_crest_slot_type_2_crest_id_2": PrintMap.WyrmprintIDByName(NewData[x]["4"][1]),
		"equip_crest_slot_type_3_crest_id_1": PrintMap.WyrmprintIDByName(NewData[x]["9"][0]),
		"equip_crest_slot_type_3_crest_id_2": PrintMap.WyrmprintIDByName(NewData[x]["9"][1]),
		"equip_talisman_key_id": 0,
		"user_level_group": 0
	  },
	  "ViewerID": 14 + parseInt(x)
	}
	let SupportJSONBase = {
                "viewer_id": 14 + parseInt(x),
                "name": NewData[x]['Character'],
                "level": 120,
                "last_login_date": 1671227599,
                "emblem_id": CharacterID,
                "max_party_power": 70000,
                "support_chara": IndexBase['data']['chara_list'][0],
                "support_dragon": {
                    "dragon_key_id": 1
                },
                "support_weapon_body": {
                    "weapon_body_id": WeaponID
                },
                "support_talisman": {
                    "talisman_key_id": 0
                },
                "support_crest_slot_type_1_list": [
                    {
                        "ability_crest_id": PrintMap.WyrmprintIDByName(NewData[x]["5"][0])
                    },
                    {
                        "ability_crest_id": PrintMap.WyrmprintIDByName(NewData[x]["5"][1])
                    },
                    {
                        "ability_crest_id": PrintMap.WyrmprintIDByName(NewData[x]["5"][2])
                    }
                ],
                "support_crest_slot_type_2_list": [
                    {
                        "ability_crest_id": PrintMap.WyrmprintIDByName(NewData[x]["4"][0])
                    },
                    {
                        "ability_crest_id": PrintMap.WyrmprintIDByName(NewData[x]["4"][1])
                    }
                ],
                "support_crest_slot_type_3_list": [
                    {
                        "ability_crest_id": PrintMap.WyrmprintIDByName(NewData[x]["9"][0])
                    },
                    {
                        "ability_crest_id": PrintMap.WyrmprintIDByName(NewData[x]["9"][1])
                    }
                ],
                "guild": {
                    "guild_id": 0
                }
            }
			
	SupportData['data']['support_user_list'].push(SupportJSONBase);
	SupportData['data']['support_user_detail_list'].push({"viewer_id": 14 + parseInt(x), "gettable_mana_point": 25, "is_friend": 1});
	fs.writeFileSync('./index_' + String(14 + parseInt(x)) + '.json', JSON.stringify(IndexBase, null, 2));
	fs.writeFileSync('./session_' + String(14 + parseInt(x)) + '.json', JSON.stringify(SessionBase, null, 2));
}
fs.writeFileSync('./Support.json', JSON.stringify(SupportData, null, 2));