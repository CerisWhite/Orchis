function GenerateResetSaveData(UserName, ViewerID) {
	const ResetSaveData = {
		'user_data': {
			"viewer_id": ViewerID,
			"name": UserName,
			"level": 1,
			"exp": 0,
			"crystal": 400,
			"coin": 200000,
			"max_dragon_quantity": 120,
			"max_weapon_quantity": 0,
			"max_amulet_quantity": 0,
			"quest_skip_point": 0,
			"main_party_no": 1,
			"emblem_id": 40000001,
			"active_memory_event_id": 0,
			"mana_point": 500, 
			"dew_point": 500,
			"build_time_point": 0,
			"last_login_time": Math.floor(Date.now() / 1000),
			"stamina_single": 18,
			"last_stamina_single_update_time": 0,
			"stamina_single_surplus_second": 0, 
			"stamina_multi": 12,
			"last_stamina_multi_update_time": 0,
			"stamina_multi_surplus_second": 0,
			"tutorial_status": 0,
			"tutorial_flag_list": [],
			"prologue_end_time": 0,
			"is_optin": 0,
			"fort_open_time": 0, 
			"create_time": Math.floor(Date.now() / 1000)
		}
	}
	return ResetSaveData;
}

function GenerateDefaultSaveData(UserName, ViewerID) {
	var DefaultSaveData = {
		"quest_bonus": [],
        "special_shop_purchase": [
        ],
        "user_treasure_trade_list": [],
        "treasure_trade_all_list": [],
		"user_data": {
            "viewer_id": ViewerID,
            "name": UserName,
            "level": 1,
            "exp": 0,
            "crystal": 400,
            "coin": 2000001000,
            "max_dragon_quantity": 1000,
            "max_weapon_quantity": 0,
            "max_amulet_quantity": 0,
            "quest_skip_point": 0,
            "main_party_no": 1,
            "emblem_id": 40000001,
            "active_memory_event_id": 0,
            "mana_point": 500,
            "dew_point": 0,
            "build_time_point": 0,
            "last_login_time": 1661979293,
            "stamina_single": 18,
            "last_stamina_single_update_time": 1661897736,
            "stamina_single_surplus_second": 0,
            "stamina_multi": 12,
            "last_stamina_multi_update_time": 1661897736,
            "stamina_multi_surplus_second": 0,
            //"tutorial_status": 401,
            //"tutorial_flag_list": [],
			"tutorial_status": 401,
            'tutorial_flag_list': [
				1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008,
				1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016,
				1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024,
				1025, 1026, 1027, 1028, 1029, 1030
			],
			"prologue_end_time": Math.floor(Date.now() / 1000),
            "is_optin": 0,
            "fort_open_time": Math.floor(Date.now() / 1000),
            "create_time": Math.floor(Date.now() / 1000)
		},
        "party_power_data": {
            "max_party_power": 40000
        },
        "party_list": [],
		"chara_list": [
            {
                "chara_id": 10140101,
                "rarity": 4,
                "exp": 0,
                "level": 1,
                "additional_max_level": 0,
                "hp_plus_count": 0,
                "attack_plus_count": 0,
                "limit_break_count": 0,
                "is_new": 0,
                "gettime": Math.floor(Date.now() / 1000),
                "skill_1_level": 1,
                "skill_2_level": 0,
                "ability_1_level": 0,
                "ability_2_level": 0,
                "ability_3_level": 0,
                "burst_attack_level": 0,
                "combo_buildup_count": 0,
                "hp": 60,
                "attack": 40,
                "ex_ability_level": 1,
                "ex_ability_2_level": 1,
                "is_temporary": 0,
                "is_unlock_edit_skill": 1,
                "mana_circle_piece_id_list": [
                ],
                "list_view_flag": 1
            }
        ],
        "dragon_list": [],
        "dragon_gift_list": [],
        "dragon_reliability_list": [],
        "material_list": [
			{
				'material_id': 125001001, 
				'quantity': 1
			}
        ],
        "fort_bonus_list": {
			"param_bonus": [
        {
          "weapon_type": 1,
          "hp": 0,
          "attack": 0
        },
        {
          "weapon_type": 2,
          "hp": 0,
          "attack": 0
        },
        {
          "weapon_type": 3,
          "hp": 0,
          "attack": 0
        },
        {
          "weapon_type": 4,
          "hp": 0,
          "attack": 0
        },
        {
          "weapon_type": 5,
          "hp": 0,
          "attack": 0
        },
        {
          "weapon_type": 6,
          "hp": 0,
          "attack": 0
        },
        {
          "weapon_type": 7,
          "hp": 0,
          "attack": 0
        },
        {
          "weapon_type": 8,
          "hp": 0,
          "attack": 0
        },
        {
          "weapon_type": 9,
          "hp": 0,
          "attack": 0
        }
      ],
      "param_bonus_by_weapon": [
        {
          "weapon_type": 1,
          "hp": 0,
          "attack": 0
        },
        {
          "weapon_type": 2,
          "hp": 0,
          "attack": 0
        },
        {
          "weapon_type": 3,
          "hp": 0,
          "attack": 0
        },
        {
          "weapon_type": 4,
          "hp": 0,
          "attack": 0
        },
        {
          "weapon_type": 5,
          "hp": 0,
          "attack": 0
        },
        {
          "weapon_type": 6,
          "hp": 0,
          "attack": 0
        },
        {
          "weapon_type": 7,
          "hp": 0,
          "attack": 0
        },
        {
          "weapon_type": 8,
          "hp": 0,
          "attack": 0
        },
        {
          "weapon_type": 9,
          "hp": 0,
          "attack": 0
        }
      ],
      "element_bonus": [
        {
          "elemental_type": 1,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 2,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 3,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 4,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 5,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 99,
          "hp": 0,
          "attack": 0
        }
      ],
      "dragon_bonus": [
        {
          "elemental_type": 1,
          "dragon_bonus": 0,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 2,
          "dragon_bonus": 0,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 3,
          "dragon_bonus": 0,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 4,
          "dragon_bonus": 0,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 5,
          "dragon_bonus": 0,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 99,
          "dragon_bonus": 0,
          "hp": 0,
          "attack": 0
        }
      ],
      "chara_bonus_by_album": [
        {
          "elemental_type": 1,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 2,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 3,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 4,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 5,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 99,
          "hp": 0,
          "attack": 0
        }
      ],
      "dragon_bonus_by_album": [
        {
          "elemental_type": 1,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 2,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 3,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 4,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 5,
          "hp": 0,
          "attack": 0
        },
        {
          "elemental_type": 99,
          "hp": 0,
          "attack": 0
        }
      ],
      "all_bonus": {
        "hp": 0,
        "attack": 0
      },
      "dragon_time_bonus": {
	  }
	},
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
                "last_income_date": Math.floor(Date.now() / 1000),
                "last_income_time": 10000000
            },
			{
                "build_id": 600000,
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
                "last_income_date": Math.floor(Date.now() / 1000),
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
        "present_notice": {
            "present_count": 0,
            "present_limit_count": 0
        },
        "friend_notice": {
            "friend_new_count": 0,
            "apply_new_count": 0
        },
        "mission_notice": {
            "normal_mission_notice": {
                "is_update": 1,
                "receivable_reward_count": 3,
                "new_complete_mission_id_list": [
                ],
                "pickup_mission_count": 0,
                "all_mission_count": 222,
                "completed_mission_count": 3,
                "current_mission_id": 0
            },
            "daily_mission_notice": {
                "is_update": 1,
                "receivable_reward_count": 0,
                "new_complete_mission_id_list": [
                ],
                "pickup_mission_count": 1,
                "all_mission_count": 9,
                "completed_mission_count": 0,
                "current_mission_id": 0
            },
            "period_mission_notice": {
                "is_update": 1,
                "receivable_reward_count": 0,
                "new_complete_mission_id_list": [
                ],
                "pickup_mission_count": 0,
                "all_mission_count": 10,
                "completed_mission_count": 0,
                "current_mission_id": 0
            },
            "beginner_mission_notice": {
                "is_update": 1,
                "receivable_reward_count": 0,
                "new_complete_mission_id_list": [
                ],
                "pickup_mission_count": 0,
                "all_mission_count": 0,
                "completed_mission_count": 0,
                "current_mission_id": 0
            },
            "special_mission_notice": {
                "is_update": 1,
                "receivable_reward_count": 0,
                "new_complete_mission_id_list": [
                ],
                "pickup_mission_count": 0,
                "all_mission_count": 56,
                "completed_mission_count": 0,
                "current_mission_id": 0
            },
            "main_story_mission_notice": {
                "is_update": 1,
                "receivable_reward_count": 0,
                "new_complete_mission_id_list": [
                ],
                "pickup_mission_count": 0,
                "all_mission_count": 0,
                "completed_mission_count": 0,
                "current_mission_id": 0
            },
            "memory_event_mission_notice": {
                "is_update": 1,
                "receivable_reward_count": 0,
                "new_complete_mission_id_list": [
                ],
                "pickup_mission_count": 0,
                "all_mission_count": 0,
                "completed_mission_count": 0,
                "current_mission_id": 0
            },
            "drill_mission_notice": {
                "is_update": 1,
                "receivable_reward_count": 0,
                "new_complete_mission_id_list": [
                ],
                "pickup_mission_count": 0,
                "all_mission_count": 54,
                "completed_mission_count": 1,
                "current_mission_id": 100100
            },
            "album_mission_notice": {
                "is_update": 1,
                "receivable_reward_count": 0,
                "new_complete_mission_id_list": [
                ],
                "pickup_mission_count": 0,
                "all_mission_count": 22,
                "completed_mission_count": 0,
                "current_mission_id": 0
            }
        },
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
        "album_passive_notice": {
            "is_update_chara": 0,
            "is_update_dragon": 0
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
                "gettime": Math.floor(Date.now() / 1000)
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
                "gettime": Math.floor(Date.now() / 1000)
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
        "server_time": 0,
        "stamina_multi_user_max": 12,
        "stamina_multi_system_max": 99,
        "quest_bonus_stack_base_time": 1617775200,
        "spec_upgrade_time": 1548730800,
        "quest_skip_point_use_limit_max": 30,
        "quest_skip_point_system_max": 400,
        "multi_server": {
            "host": "",
            "app_id": "a4a64ca9-6190-45cf-815b-da292d9dc461"
        },
        "walker_data": {}
    }
	return DefaultSaveData;
}

const NewMaterialList = [
            {
                "material_id": 101001001,
                "quantity": 1
            },
            {
                "material_id": 101001003,
                "quantity": 10
            },
            {
                "material_id": 103001001,
                "quantity": 1
            },
            {
                "material_id": 103001003,
                "quantity": 55000
            },
            {
                "material_id": 125001001,
                "quantity": 1
            },
            {
                "material_id": 201002012,
                "quantity": 4300
            },
            {
                "material_id": 201002022,
                "quantity": 4300
            },
            {
                "material_id": 201002032,
                "quantity": 4300
            },
            {
                "material_id": 201002042,
                "quantity": 4300
            },
            {
                "material_id": 201002052,
                "quantity": 4300
            },
            {
                "material_id": 201017011,
                "quantity": 2100
            },
            {
                "material_id": 201017012,
                "quantity": 1700
            },
            {
                "material_id": 201017013,
                "quantity": 360
            },
            {
                "material_id": 201017014,
                "quantity": 150
            },
            {
                "material_id": 201017021,
                "quantity": 2100
            },
            {
                "material_id": 201017022,
                "quantity": 1700
            },
            {
                "material_id": 201017023,
                "quantity": 360
            },
            {
                "material_id": 201017024,
                "quantity": 150
            },
            {
                "material_id": 201017031,
                "quantity": 2100
            },
            {
                "material_id": 201017032,
                "quantity": 1700
            },
            {
                "material_id": 201017033,
                "quantity": 360
            },
            {
                "material_id": 201017034,
                "quantity": 150
            },
            {
                "material_id": 201017041,
                "quantity": 2100
            },
            {
                "material_id": 201017042,
                "quantity": 1700
            },
            {
                "material_id": 201017043,
                "quantity": 360
            },
            {
                "material_id": 201017044,
                "quantity": 150
            },
            {
                "material_id": 201017051,
                "quantity": 2100
            },
            {
                "material_id": 201017052,
                "quantity": 1700
            },
            {
                "material_id": 201017053,
                "quantity": 360
            },
            {
                "material_id": 201017054,
                "quantity": 150
            },
            {
                "material_id": 201023011,
                "quantity": 20
            },
            {
                "material_id": 201023012,
                "quantity": 15
            },
            {
                "material_id": 201023021,
                "quantity": 20
            },
            {
                "material_id": 201023022,
                "quantity": 15
            },
            {
                "material_id": 201023031,
                "quantity": 20
            },
            {
                "material_id": 201023032,
                "quantity": 15
            },
            {
                "material_id": 201023041,
                "quantity": 20
            },
            {
                "material_id": 201023042,
                "quantity": 15
            },
            {
                "material_id": 201023051,
                "quantity": 20
            },
            {
                "material_id": 201023052,
                "quantity": 15
            },
            {
                "material_id": 202001001,
                "quantity": 300
            },
            {
                "material_id": 202001002,
                "quantity": 5000
            },
            {
                "material_id": 202001003,
                "quantity": 3000
            },
            {
                "material_id": 202002001,
                "quantity": 300
            },
            {
                "material_id": 202002002,
                "quantity": 1500
            },
            {
                "material_id": 202002003,
                "quantity": 300
            },
            {
                "material_id": 202003001,
                "quantity": 300
            },
            {
                "material_id": 202003002,
                "quantity": 1500
            },
            {
                "material_id": 202003003,
                "quantity": 300
            },
            {
                "material_id": 202004003,
                "quantity": 500
            },
            {
                "material_id": 202004004,
                "quantity": 200
            },
            {
                "material_id": 202004005,
                "quantity": 2100
            },
            {
                "material_id": 202005011,
                "quantity": 200
            },
            {
                "material_id": 202005021,
                "quantity": 200
            },
            {
                "material_id": 202005031,
                "quantity": 200
            },
            {
                "material_id": 202005041,
                "quantity": 200
            },
            {
                "material_id": 202005051,
                "quantity": 200
            },
            {
                "material_id": 202005061,
                "quantity": 200
            },
            {
                "material_id": 202005071,
                "quantity": 200
            },
            {
                "material_id": 202005081,
                "quantity": 200
            },
            {
                "material_id": 202005091,
                "quantity": 200
            },
            {
                "material_id": 202008011,
                "quantity": 3200
            },
            {
                "material_id": 202008021,
                "quantity": 3200
            },
            {
                "material_id": 202008031,
                "quantity": 3200
            },
            {
                "material_id": 202008041,
                "quantity": 3200
            },
            {
                "material_id": 202008051,
                "quantity": 3200
            },
            {
                "material_id": 202009011,
                "quantity": 720
            },
            {
                "material_id": 202009021,
                "quantity": 720
            },
            {
                "material_id": 202009031,
                "quantity": 720
            },
            {
                "material_id": 202009041,
                "quantity": 720
            },
            {
                "material_id": 202009051,
                "quantity": 720
            },
            {
                "material_id": 202010011,
                "quantity": 780
            },
            {
                "material_id": 202010021,
                "quantity": 780
            },
            {
                "material_id": 202010031,
                "quantity": 780
            },
            {
                "material_id": 202010041,
                "quantity": 780
            },
            {
                "material_id": 202010051,
                "quantity": 780
            }
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

const TutorialFlagsList = [ 1001, 1002, 1003, 1004, 1005,
							1006, 1007, 1008, 1009, 1010,
							1011, 1012, 1013, 1014, 1015,
							1016, 1017, 1018, 1019, 1020,
							1021, 1022, 1023, 1024, 1025,
							1026, 1027, 1028, 1029, 1030 ]

const CampaignQuestList = [
  100000101,
  100010101,
  100010102,
  100010103,
  100010104,
  100010105,
  100010106,
  100010107,
  100010108,
  100010201,
  100010202,
  100010203,
  100010204,
  100010205,
  100010206,
  100010207,
  100010208,
  100010301,
  100010302,
  100010303,
  100010304,
  100010305,
  100010306,
  100010307,
  100010308,
  100020101,
  100020102,
  100020103,
  100020104,
  100020105,
  100020106,
  100020107,
  100020108,
  100020151,
  100020152,
  100020201,
  100020202,
  100020203,
  100020204,
  100020205,
  100020206,
  100020207,
  100020208,
  100020251,
  100020252,
  100020301,
  100020302,
  100020303,
  100020304,
  100020305,
  100020306,
  100020307,
  100020308,
  100020351,
  100020352,
  100030101,
  100030102,
  100030103,
  100030104,
  100030105,
  100030106,
  100030107,
  100030108,
  100030109,
  100030110,
  100030201,
  100030202,
  100030203,
  100030204,
  100030205,
  100030206,
  100030207,
  100030208,
  100030209,
  100030210,
  100030301,
  100030302,
  100030303,
  100030304,
  100030305,
  100030306,
  100030307,
  100030308,
  100030309,
  100030310,
  100040101,
  100040102,
  100040103,
  100040104,
  100040105,
  100040106,
  100040107,
  100040108,
  100040109,
  100040110,
  100040111,
  100040112,
  100040113,
  100040151,
  100040152,
  100040201,
  100040202,
  100040203,
  100040204,
  100040205,
  100040206,
  100040207,
  100040208,
  100040209,
  100040210,
  100040211,
  100040212,
  100040213,
  100040251,
  100040252,
  100040301,
  100040302,
  100040303,
  100040304,
  100040305,
  100040306,
  100040307,
  100040308,
  100040309,
  100040310,
  100040311,
  100040312,
  100040313,
  100040351,
  100040352,
  100050101,
  100050102,
  100050103,
  100050104,
  100050105,
  100050106,
  100050107,
  100050108,
  100050109,
  100050201,
  100050202,
  100050203,
  100050204,
  100050205,
  100050206,
  100050207,
  100050208,
  100050209,
  100050301,
  100050302,
  100050303,
  100050304,
  100050305,
  100050306,
  100050307,
  100050308,
  100050309,
  100060101,
  100060102,
  100060103,
  100060104,
  100060105,
  100060106,
  100060107,
  100060108,
  100060109,
  100060110,
  100060111,
  100060112,
  100060113,
  100060114,
  100060151,
  100060152,
  100060201,
  100060202,
  100060203,
  100060204,
  100060205,
  100060206,
  100060207,
  100060208,
  100060209,
  100060210,
  100060211,
  100060212,
  100060213,
  100060214,
  100060251,
  100060252,
  100060301,
  100060302,
  100060303,
  100060304,
  100060305,
  100060306,
  100060307,
  100060308,
  100060309,
  100060310,
  100060311,
  100060312,
  100060313,
  100060314,
  100060351,
  100060352,
  100070101,
  100070102,
  100070103,
  100070104,
  100070105,
  100070106,
  100070107,
  100070108,
  100070109,
  100070110,
  100070111,
  100070112,
  100070151,
  100070152,
  100070201,
  100070202,
  100070203,
  100070204,
  100070205,
  100070206,
  100070207,
  100070208,
  100070209,
  100070210,
  100070211,
  100070212,
  100070251,
  100070252,
  100070301,
  100070302,
  100070303,
  100070304,
  100070305,
  100070306,
  100070307,
  100070308,
  100070309,
  100070310,
  100070311,
  100070312,
  100070351,
  100070352,
  100080101,
  100080102,
  100080103,
  100080104,
  100080105,
  100080106,
  100080107,
  100080108,
  100080109,
  100080110,
  100080111,
  100080112,
  100080151,
  100080152,
  100080201,
  100080202,
  100080203,
  100080204,
  100080205,
  100080206,
  100080207,
  100080208,
  100080209,
  100080210,
  100080211,
  100080212,
  100080251,
  100080252,
  100080301,
  100080302,
  100080303,
  100080304,
  100080305,
  100080306,
  100080307,
  100080308,
  100080309,
  100080310,
  100080311,
  100080312,
  100080351,
  100080352,
  100090101,
  100090102,
  100090103,
  100090104,
  100090105,
  100090106,
  100090107,
  100090151,
  100090201,
  100090202,
  100090203,
  100090204,
  100090205,
  100090206,
  100090207,
  100090251,
  100090301,
  100090302,
  100090303,
  100090304,
  100090305,
  100090306,
  100090307,
  100090351,
  100100101,
  100100102,
  100100103,
  100100104,
  100100105,
  100100106,
  100100107,
  100100151,
  100100152,
  100100201,
  100100202,
  100100203,
  100100204,
  100100205,
  100100206,
  100100207,
  100100251,
  100100252,
  100100301,
  100100302,
  100100303,
  100100304,
  100100305,
  100100306,
  100100307,
  100100351,
  100100352
]

const CampaignStoryList = [
  1000001,
  1000002,
  1000003,
  1000004,
  1000005,
  1000006,
  1000100,
  1000101,
  1000102,
  1000103,
  1000104,
  1000105,
  1000106,
  1000107,
  1000108,
  1000109,
  1000110,
  1000111,
  1000201,
  1000202,
  1000203,
  1000204,
  1000205,
  1000206,
  1000207,
  1000208,
  1000209,
  1000210,
  1000301,
  1000302,
  1000303,
  1000304,
  1000305,
  1000306,
  1000307,
  1000308,
  1000309,
  1000310,
  1000311,
  1000401,
  1000402,
  1000403,
  1000404,
  1000405,
  1000406,
  1000407,
  1000408,
  1000409,
  1000410,
  1000411,
  1000412,
  1000501,
  1000502,
  1000503,
  1000504,
  1000505,
  1000506,
  1000507,
  1000508,
  1000509,
  1000601,
  1000602,
  1000603,
  1000604,
  1000605,
  1000606,
  1000607,
  1000608,
  1000609,
  1000701,
  1000702,
  1000703,
  1000704,
  1000705,
  1000706,
  1000707,
  1000708,
  1000709,
  1000801,
  1000802,
  1000803,
  1000804,
  1000805,
  1000806,
  1000807,
  1000808,
  1000901,
  1000902,
  1000903,
  1000904,
  1000905,
  1000906,
  1000907,
  1000908,
  1000909,
  1001001,
  1001002,
  1001003,
  1001004,
  1001005,
  1001006,
  1001007,
  1001008,
  1001009
]

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

const DefaultWyrmprints = [
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

const RedoableSummonData = {
    'data_headers': {
        'result_code': 1
    },
    'data': {
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
        'update_data_list': {
            'functional_maintenance_list': [
            ]
        }
    }
}

module.exports = { GenerateResetSaveData, GenerateDefaultSaveData, NewMaterialList, TutorialFlagsList, CampaignQuestList, CampaignStoryList, VoidPassives, DefaultWyrmprints, RedoableSummonData }