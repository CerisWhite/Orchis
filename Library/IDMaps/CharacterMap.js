// Character Info Map
var fs = require('fs');

var LevelMap = require('./LevelMap.js');
var EventMap = require('./EventMap.js');

const MC = JSON.parse(fs.readFileSync('Library/IDMaps/ManaCircle/MC.json'));
const MPE = JSON.parse(fs.readFileSync('Library/IDMaps/ManaCircle/ManaPieceElement.json'));
const MPM = JSON.parse(fs.readFileSync('Library/IDMaps/ManaCircle/ManaPieceMaterial.json'));
const MM = JSON.parse(fs.readFileSync('Library/IDMaps/ManaCircle/ManaMaterial.json'));
const DefaultMPE = {
	"_Id":0,
	"_ElementId":0,
	"_ManaPieceType":0,
	"_ManaMaterialId01":0,
	"_ManaMaterialId02":0,
	"_ManaMaterialId03":0,
	"_ManaMaterialQuantity01":0,
	"_ManaMaterialQuantity02":0,
	"_ManaMaterialQuantity03":0,
	"_ManaMaterialId11":0,
	"_ManaMaterialId12":0,
	"_ManaMaterialId13":0,
	"_ManaMaterialQuantity11":0,
	"_ManaMaterialQuantity12":0,
	"_ManaMaterialQuantity13":0,
	"_NeedDewPoint1":0,
	"_ManaMaterialId21":0,
	"_ManaMaterialId22":0,
	"_ManaMaterialId23":0,
	"_ManaMaterialQuantity21":0,
	"_ManaMaterialQuantity22":0,
	"_ManaMaterialQuantity23":0,
	"_NeedDewPoint2":0,
	"_ManaMaterialId31":0,
	"_ManaMaterialId32":0,
	"_ManaMaterialId33":0,
	"_ManaMaterialQuantity31":0,
	"_ManaMaterialQuantity32":0,
	"_ManaMaterialQuantity33":0,
	"_NeedDewPoint3":0,
	"_ManaMaterialId41":0,
	"_ManaMaterialId42":0,
	"_ManaMaterialId43":0,
	"_ManaMaterialQuantity41":0,
	"_ManaMaterialQuantity42":0,
	"_ManaMaterialQuantity43":0,
	"_NeedDewPoint4":0
}
const DefaultMPM = {
	"_Id":0,
	"_ElementId":0,
	"_ManaPieceType":0,
	"_Step": 0,
	"_MaterialId1":0,
	"_MaterialId2":0,
	"_MaterialId3":0,
	"_MaterialQuantity1":0,
	"_MaterialQuantity2":0,
	"_MaterialQuantity3":0,
	"_DewPoint": 0
}

const CharacterLimitBreak = JSON.parse(fs.readFileSync('Library/IDMaps/ManaCircle/LimitBreak.json'));

const CharacterInfoMap = {
  "10130102": {
    "name": "Marty",
    "chara_id": 10130102,
    "story_id": 110261011,
    "rarity": 3,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 2,
    "base_health": 46,
    "base_attack": 25,
    "lvl1_health": 57,
    "lvl1_attack": 31,
    "lvl2_health": 67,
    "lvl2_attack": 36,
    "max_health": 474,
    "max_attack": 259,
    "weapon_type": 1,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3011,
    "limit_break_id": 1030101,
    "base_id": 110261,
    "alt_id": 1,
    "coability": {
      "1": 101050001,
      "2": 101050003,
      "3": 101050005,
      "4": 101050007,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000135,
      "2": 400000135,
      "3": 400000136,
      "4": 400000136,
      "5": 400000137
    },
    "ability_1": {
      "1": 110010403,
      "2": 110010404,
      "3": 938,
      "4": 0
    },
    "ability_2": {
      "1": 110020603,
      "2": 110020604,
      "3": 676,
      "4": 0
    },
    "ability_3": {
      "1": 110020603,
      "2": 110020604,
      "3": 0,
      "4": 0
    }
  },
  "10130103": {
    "name": "Valentine's Orion",
    "chara_id": 10130103,
    "story_id": 110052031,
    "rarity": 3,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 2,
    "base_health": 45,
    "base_attack": 27,
    "lvl1_health": 56,
    "lvl1_attack": 34,
    "lvl2_health": 66,
    "lvl2_attack": 40,
    "max_health": 466,
    "max_attack": 282,
    "weapon_type": 1,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3011,
    "limit_break_id": 1030101,
    "base_id": 110052,
    "alt_id": 3,
    "coability": {
      "1": 101050001,
      "2": 101050003,
      "3": 101050005,
      "4": 101050007,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000035,
      "2": 400000035,
      "3": 400000036,
      "4": 400000036,
      "5": 400000037
    },
    "ability_1": {
      "1": 210000603,
      "2": 210000604,
      "3": 210000607,
      "4": 0
    },
    "ability_2": {
      "1": 110020703,
      "2": 110020704,
      "3": 679,
      "4": 0
    },
    "ability_3": {
      "1": 110020703,
      "2": 110021004,
      "3": 0,
      "4": 0
    }
  },
  "10130201": {
    "name": "Zardin",
    "chara_id": 10130201,
    "story_id": 110015011,
    "rarity": 3,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 25,
    "lvl1_health": 57,
    "lvl1_attack": 31,
    "lvl2_health": 67,
    "lvl2_attack": 36,
    "max_health": 475,
    "max_attack": 258,
    "weapon_type": 1,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3012,
    "limit_break_id": 1030102,
    "base_id": 110015,
    "alt_id": 1,
    "coability": {
      "1": 101050001,
      "2": 101050003,
      "3": 101050005,
      "4": 101050007,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000151,
      "2": 400000151,
      "3": 400000152,
      "4": 400000152,
      "5": 400000153
    },
    "ability_1": {
      "1": 210000303,
      "2": 210000304,
      "3": 210000307,
      "4": 0
    },
    "ability_2": {
      "1": 110020203,
      "2": 110020204,
      "3": 1098,
      "4": 0
    },
    "ability_3": {
      "1": 110020203,
      "2": 110020204,
      "3": 0,
      "4": 0
    }
  },
  "10130401": {
    "name": "Raemond",
    "chara_id": 10130401,
    "story_id": 110035011,
    "rarity": 3,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 42,
    "base_attack": 28,
    "lvl1_health": 52,
    "lvl1_attack": 34,
    "lvl2_health": 61,
    "lvl2_attack": 40,
    "max_health": 431,
    "max_attack": 285,
    "weapon_type": 1,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3014,
    "limit_break_id": 1030104,
    "base_id": 110035,
    "alt_id": 1,
    "coability": {
      "1": 101050001,
      "2": 101050003,
      "3": 101050005,
      "4": 101050007,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000460,
      "2": 400000460,
      "3": 400000461,
      "4": 400000461,
      "5": 400000462
    },
    "ability_1": {
      "1": 210001703,
      "2": 210001704,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020103,
      "2": 110020104,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020103,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10130501": {
    "name": "Rodrigo",
    "chara_id": 10130501,
    "story_id": 110046011,
    "rarity": 3,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 42,
    "base_attack": 28,
    "lvl1_health": 52,
    "lvl1_attack": 35,
    "lvl2_health": 60,
    "lvl2_attack": 40,
    "max_health": 427,
    "max_attack": 287,
    "weapon_type": 1,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3015,
    "limit_break_id": 1030105,
    "base_id": 110046,
    "alt_id": 1,
    "coability": {
      "1": 101050001,
      "2": 101050003,
      "3": 101050005,
      "4": 101050007,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000581,
      "2": 400000581,
      "3": 400000582,
      "4": 400000582,
      "5": 400000583
    },
    "ability_1": {
      "1": 210000103,
      "2": 210000104,
      "3": 719,
      "4": 0
    },
    "ability_2": {
      "1": 110020403,
      "2": 110020404,
      "3": 801,
      "4": 0
    },
    "ability_3": {
      "1": 110020403,
      "2": 110020404,
      "3": 0,
      "4": 0
    }
  },
  "10140101": {
    "name": "The Prince",
    "chara_id": 10140101,
    "story_id": "N/A",
    "rarity": 4,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 42,
    "base_attack": 28,
    "lvl1_health": 60,
    "lvl1_attack": 40,
    "lvl2_health": 68,
    "lvl2_attack": 46,
    "max_health": 429,
    "max_attack": 288,
    "weapon_type": 1,
    "mana_circle_name": "MC_0403",
    "mana_piece_id": 4031,
    "limit_break_id": 1040201,
    "base_id": 100001,
    "alt_id": 1,
    "coability": {
      "1": 101050003,
      "2": 101050004,
      "3": 101050005,
      "4": 101050007,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000717,
      "2": 400000717,
      "3": 400000718,
      "4": 400000718,
      "5": 400000719
    },
    "ability_1": {
      "1": 110140301,
      "2": 110140302,
      "3": 700,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 110150002,
      "2": 110150003,
      "3": 688,
      "4": 0
    }
  },
  "10140102": {
    "name": "Karl",
    "chara_id": 10140102,
    "story_id": 110008011,
    "rarity": 4,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 2,
    "base_health": 45,
    "base_attack": 27,
    "lvl1_health": 56,
    "lvl1_attack": 34,
    "lvl2_health": 65,
    "lvl2_attack": 39,
    "max_health": 461,
    "max_attack": 278,
    "weapon_type": 1,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4011,
    "limit_break_id": 1040101,
    "base_id": 110008,
    "alt_id": 1,
    "coability": {
      "1": 101050003,
      "2": 101050004,
      "3": 101050005,
      "4": 101050007,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000070,
      "2": 400000070,
      "3": 400000072,
      "4": 400000072,
      "5": 400000074
    },
    "ability_1": {
      "1": 210000804,
      "2": 210000805,
      "3": 686,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 681,
      "4": 0
    },
    "ability_3": {
      "1": 210000104,
      "2": 719,
      "3": 0,
      "4": 0
    }
  },
  "10140103": {
    "name": "Serena",
    "chara_id": 10140103,
    "story_id": 110054011,
    "rarity": 4,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 2,
    "base_health": 47,
    "base_attack": 26,
    "lvl1_health": 58,
    "lvl1_attack": 32,
    "lvl2_health": 68,
    "lvl2_attack": 37,
    "max_health": 484,
    "max_attack": 265,
    "weapon_type": 1,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4011,
    "limit_break_id": 1040101,
    "base_id": 110054,
    "alt_id": 1,
    "coability": {
      "1": 101050003,
      "2": 101050004,
      "3": 101050005,
      "4": 101050007,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000058,
      "2": 400000058,
      "3": 400000060,
      "4": 400000060,
      "5": 400000062
    },
    "ability_1": {
      "1": 243,
      "2": 244,
      "3": 1585,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 245,
      "2": 1586,
      "3": 0,
      "4": 0
    }
  },
  "10140201": {
    "name": "Halloween Odetta",
    "chara_id": 10140201,
    "story_id": 110301021,
    "rarity": 4,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 2,
    "base_health": 45,
    "base_attack": 27,
    "lvl1_health": 56,
    "lvl1_attack": 33,
    "lvl2_health": 65,
    "lvl2_attack": 39,
    "max_health": 463,
    "max_attack": 277,
    "weapon_type": 1,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4012,
    "limit_break_id": 1040102,
    "base_id": 110301,
    "alt_id": 2,
    "coability": {
      "1": 101050003,
      "2": 101050004,
      "3": 101050005,
      "4": 101050007,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000189,
      "2": 400000189,
      "3": 400000191,
      "4": 400000191,
      "5": 400000193
    },
    "ability_1": {
      "1": 357,
      "2": 311,
      "3": 312,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 110130004,
      "2": 759,
      "3": 0,
      "4": 0
    }
  },
  "10140301": {
    "name": "Ku Hai",
    "chara_id": 10140301,
    "story_id": 110315011,
    "rarity": 4,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 28,
    "lvl1_health": 53,
    "lvl1_attack": 35,
    "lvl2_health": 62,
    "lvl2_attack": 41,
    "max_health": 438,
    "max_attack": 292,
    "weapon_type": 1,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4013,
    "limit_break_id": 1040103,
    "base_id": 110315,
    "alt_id": 1,
    "coability": {
      "1": 101050003,
      "2": 101050004,
      "3": 101050005,
      "4": 101050007,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000297,
      "2": 400000297,
      "3": 400000299,
      "4": 400000299,
      "5": 400000301
    },
    "ability_1": {
      "1": 110390004,
      "2": 110390005,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210003201,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10140302": {
    "name": "Templar Hope",
    "chara_id": 10140302,
    "story_id": 110038021,
    "rarity": 4,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 26,
    "lvl1_health": 59,
    "lvl1_attack": 32,
    "lvl2_health": 68,
    "lvl2_attack": 37,
    "max_health": 485,
    "max_attack": 264,
    "weapon_type": 1,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4013,
    "limit_break_id": 1040103,
    "base_id": 110038,
    "alt_id": 2,
    "coability": {
      "1": 101050003,
      "2": 101050004,
      "3": 101050005,
      "4": 101050007,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000368,
      "2": 400000368,
      "3": 400000370,
      "4": 400000370,
      "5": 400000372
    },
    "ability_1": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 271,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10140401": {
    "name": "Odetta",
    "chara_id": 10140401,
    "story_id": 110301011,
    "rarity": 4,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 43,
    "base_attack": 28,
    "lvl1_health": 53,
    "lvl1_attack": 35,
    "lvl2_health": 62,
    "lvl2_attack": 41,
    "max_health": 440,
    "max_attack": 291,
    "weapon_type": 1,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4014,
    "limit_break_id": 1040104,
    "base_id": 110301,
    "alt_id": 1,
    "coability": {
      "1": 101050003,
      "2": 101050004,
      "3": 101050005,
      "4": 101050007,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000448,
      "2": 400000448,
      "3": 400000450,
      "4": 400000450,
      "5": 400000452
    },
    "ability_1": {
      "1": 210000104,
      "2": 210000105,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020104,
      "2": 110020106,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110130004,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10140501": {
    "name": "Berserker",
    "chara_id": 10140501,
    "story_id": 110050011,
    "rarity": 4,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 26,
    "lvl1_health": 58,
    "lvl1_attack": 32,
    "lvl2_health": 68,
    "lvl2_attack": 37,
    "max_health": 483,
    "max_attack": 265,
    "weapon_type": 1,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4015,
    "limit_break_id": 1040105,
    "base_id": 110050,
    "alt_id": 1,
    "coability": {
      "1": 101050003,
      "2": 101050004,
      "3": 101050005,
      "4": 101050007,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000628,
      "2": 400000628,
      "3": 400000630,
      "4": 400000630,
      "5": 400000632
    },
    "ability_1": {
      "1": 210001004,
      "2": 210001005,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210001304,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10140503": {
    "name": "Audric",
    "chara_id": 10140503,
    "story_id": 110334011,
    "rarity": 4,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 42,
    "base_attack": 28,
    "lvl1_health": 42,
    "lvl1_attack": 28,
    "lvl2_health": 60,
    "lvl2_attack": 40,
    "max_health": 427,
    "max_attack": 287,
    "weapon_type": 1,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4015,
    "limit_break_id": 1040105,
    "base_id": 110334,
    "alt_id": 1,
    "coability": {
      "1": 101050003,
      "2": 101050004,
      "3": 101050005,
      "4": 101050007,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000658,
      "2": 400000658,
      "3": 400000660,
      "4": 400000660,
      "5": 400000662
    },
    "ability_1": {
      "1": 100011,
      "2": 100011,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 443,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10150101": {
    "name": "Naveed",
    "chara_id": 10150101,
    "story_id": 110266011,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 452,
    "max_attack": 302,
    "weapon_type": 1,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 110266,
    "alt_id": 1,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000123,
      "2": 400000124,
      "3": 400000125,
      "4": 400000126,
      "5": 400000128
    },
    "ability_1": {
      "1": 210000805,
      "2": 210000806,
      "3": 686,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 681,
      "4": 0
    },
    "ability_3": {
      "1": 110120003,
      "2": 110120004,
      "3": 695,
      "4": 0
    }
  },
  "10150102": {
    "name": "Marth",
    "chara_id": 10150102,
    "story_id": 110291011,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 452,
    "max_attack": 302,
    "weapon_type": 1,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 110291,
    "alt_id": 1,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000070,
      "2": 400000071,
      "3": 400000072,
      "4": 400000073,
      "5": 400000075
    },
    "ability_1": {
      "1": 186,
      "2": 187,
      "3": 927,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 310000505,
      "2": 310000506,
      "3": 928,
      "4": 0
    }
  },
  "10150103": {
    "name": "Lea",
    "chara_id": 10150103,
    "story_id": 110259011,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 452,
    "max_attack": 302,
    "weapon_type": 1,
    "mana_circle_name": "MC_0510",
    "mana_piece_id": 5081,
    "limit_break_id": 1050201,
    "base_id": 110259,
    "alt_id": 1,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000118,
      "2": 400000119,
      "3": 400000120,
      "4": 400000121,
      "5": 400000710
    },
    "ability_1": {
      "1": 110070005,
      "2": 110070006,
      "3": 2163,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 116,
      "2": 411,
      "3": 2192,
      "4": 0
    }
  },
  "10150104": {
    "name": "Hunter Berserker",
    "chara_id": 10150104,
    "story_id": 110050021,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 452,
    "max_attack": 302,
    "weapon_type": 1,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5041,
    "limit_break_id": 1050101,
    "base_id": 110050,
    "alt_id": 2,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000025,
      "2": 400000026,
      "3": 400000027,
      "4": 400000028,
      "5": 400000706
    },
    "ability_1": {
      "1": 740,
      "2": 741,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 703,
      "2": 704,
      "3": 0,
      "4": 0
    }
  },
  "10150105": {
    "name": "Chrom",
    "chara_id": 10150105,
    "story_id": 110359011,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 452,
    "max_attack": 302,
    "weapon_type": 1,
    "mana_circle_name": "MC_0505",
    "mana_piece_id": 5051,
    "limit_break_id": 1050101,
    "base_id": 110359,
    "alt_id": 1,
    "coability": {
      "1": 101060005,
      "2": 101060006,
      "3": 101060007,
      "4": 101060008,
      "5": 101060010
    },
    "chain_ability": {
      "1": 400000052,
      "2": 400000053,
      "3": 400000054,
      "4": 400000055,
      "5": 400000057
    },
    "ability_1": {
      "1": 210000305,
      "2": 210000306,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 914,
      "2": 914,
      "3": 0,
      "4": 0
    }
  },
  "10150106": {
    "name": "Undercover Grace",
    "chara_id": 10150106,
    "story_id": 110059021,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 452,
    "max_attack": 302,
    "weapon_type": 1,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5021,
    "limit_break_id": 1050101,
    "base_id": 110059,
    "alt_id": 2,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000013,
      "2": 400000014,
      "3": 400000015,
      "4": 400000016,
      "5": 400000018
    },
    "ability_1": {
      "1": 2199,
      "2": 2205,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2211,
      "2": 2212,
      "3": 0,
      "4": 0
    }
  },
  "10150201": {
    "name": "Xander",
    "chara_id": 10150201,
    "story_id": 110022011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 453,
    "max_attack": 301,
    "weapon_type": 1,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 110022,
    "alt_id": 1,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000239,
      "2": 400000240,
      "3": 400000241,
      "4": 400000242,
      "5": 400000244
    },
    "ability_1": {
      "1": 210000705,
      "2": 210000706,
      "3": 1103,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 110070005,
      "2": 110070006,
      "3": 110070007,
      "4": 0
    }
  },
  "10150202": {
    "name": "Summer Celliera",
    "chara_id": 10150202,
    "story_id": 110255021,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 28,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 67,
    "lvl2_attack": 40,
    "max_health": 477,
    "max_attack": 286,
    "weapon_type": 1,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 110255,
    "alt_id": 2,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000212,
      "2": 400000213,
      "3": 400000214,
      "4": 400000215,
      "5": 400000217
    },
    "ability_1": {
      "1": 210000605,
      "2": 210000606,
      "3": 210000607,
      "4": 0
    },
    "ability_2": {
      "1": 110020204,
      "2": 110020206,
      "3": 803,
      "4": 0
    },
    "ability_3": {
      "1": 110130005,
      "2": 110130006,
      "3": 759,
      "4": 0
    }
  },
  "10150203": {
    "name": "Eugene",
    "chara_id": 10150203,
    "story_id": 110363011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 47,
    "base_attack": 28,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 67,
    "lvl2_attack": 40,
    "max_health": 477,
    "max_attack": 286,
    "weapon_type": 1,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 110363,
    "alt_id": 1,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000212,
      "2": 400000213,
      "3": 400000214,
      "4": 400000215,
      "5": 400000217
    },
    "ability_1": {
      "1": 1040,
      "2": 1041,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210000205,
      "2": 210000206,
      "3": 0,
      "4": 0
    }
  },
  "10150204": {
    "name": "Summer Ieyasu",
    "chara_id": 10150204,
    "story_id": 110313031,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 453,
    "max_attack": 301,
    "weapon_type": 1,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 110313,
    "alt_id": 3,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000189,
      "2": 400000190,
      "3": 400000191,
      "4": 400000192,
      "5": 400000194
    },
    "ability_1": {
      "1": 2051,
      "2": 2052,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110390005,
      "2": 110390006,
      "3": 0,
      "4": 0
    }
  },
  "10150301": {
    "name": "Gala Ranzal",
    "chara_id": 10150301,
    "story_id": 100003071,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 452,
    "max_attack": 301,
    "weapon_type": 1,
    "mana_circle_name": "MC_0509",
    "mana_piece_id": 5083,
    "limit_break_id": 1050113,
    "base_id": 100003,
    "alt_id": 7,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000356,
      "2": 400000357,
      "3": 400000358,
      "4": 400000359,
      "5": 400000361
    },
    "ability_1": {
      "1": 123,
      "2": 124,
      "3": 12460,
      "4": 0
    },
    "ability_2": {
      "1": 78,
      "2": 79,
      "3": 7960,
      "4": 0
    },
    "ability_3": {
      "1": 110060005,
      "2": 110060006,
      "3": 717,
      "4": 0
    }
  },
  "10150302": {
    "name": "Wedding Elisanne",
    "chara_id": 10150302,
    "story_id": 100002061,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 28,
    "lvl1_health": 58,
    "lvl1_attack": 35,
    "lvl2_health": 67,
    "lvl2_attack": 40,
    "max_health": 476,
    "max_attack": 287,
    "weapon_type": 1,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 100002,
    "alt_id": 6,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000368,
      "2": 400000369,
      "3": 400000370,
      "4": 400000371,
      "5": 400000373
    },
    "ability_1": {
      "1": 110010405,
      "2": 110010406,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210000605,
      "2": 210000606,
      "3": 0,
      "4": 0
    }
  },
  "10150303": {
    "name": "Gala Leif",
    "chara_id": 10150303,
    "story_id": 100018021,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 0,
    "base_health": 49,
    "base_attack": 26,
    "lvl1_health": 60,
    "lvl1_attack": 33,
    "lvl2_health": 70,
    "lvl2_attack": 38,
    "max_health": 500,
    "max_attack": 272,
    "weapon_type": 1,
    "mana_circle_name": "MC_0510",
    "mana_piece_id": 5083,
    "limit_break_id": 1050203,
    "base_id": 100018,
    "alt_id": 2,
    "coability": {
      "1": 106080004,
      "2": 106080005,
      "3": 106080006,
      "4": 106080007,
      "5": 106080008
    },
    "chain_ability": {
      "1": 400000344,
      "2": 400000345,
      "3": 400000346,
      "4": 400000347,
      "5": 400000349
    },
    "ability_1": {
      "1": 955,
      "2": 956,
      "3": 2414,
      "4": 0
    },
    "ability_2": {
      "1": 957,
      "2": 958,
      "3": 2415,
      "4": 0
    },
    "ability_3": {
      "1": 210000505,
      "2": 210000506,
      "3": 2419,
      "4": 0
    }
  },
  "10150304": {
    "name": "Mona",
    "chara_id": 10150304,
    "story_id": 110379011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 452,
    "max_attack": 301,
    "weapon_type": 1,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5043,
    "limit_break_id": 1050103,
    "base_id": 110379,
    "alt_id": 1,
    "coability": {
      "1": 157570001,
      "2": 157570002,
      "3": 157570003,
      "4": 157570004,
      "5": 157570005
    },
    "chain_ability": {
      "1": 400000875,
      "2": 400000876,
      "3": 400000877,
      "4": 400000878,
      "5": 400000879
    },
    "ability_1": {
      "1": 1671,
      "2": 1672,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110390005,
      "2": 110390006,
      "3": 0,
      "4": 0
    }
  },
  "10150305": {
    "name": "Nino",
    "chara_id": 10150305,
    "story_id": 110392011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 452,
    "max_attack": 301,
    "weapon_type": 1,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5023,
    "limit_break_id": 1050103,
    "base_id": 110392,
    "alt_id": 1,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000941,
      "2": 400000942,
      "3": 400000943,
      "4": 400000944,
      "5": 400000945
    },
    "ability_1": {
      "1": 1978,
      "2": 1980,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 310000505,
      "2": 310000506,
      "3": 0,
      "4": 0
    }
  },
  "10150306": {
    "name": "Bondforged Prince",
    "chara_id": 10150306,
    "story_id": 100001141,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 452,
    "max_attack": 301,
    "weapon_type": 1,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5023,
    "limit_break_id": 1050103,
    "base_id": 100001,
    "alt_id": 14,
    "coability": {
      "1": 136000004,
      "2": 136000005,
      "3": 136000006,
      "4": 136000007,
      "5": 136000008
    },
    "chain_ability": {
      "1": 400000913,
      "2": 400000914,
      "3": 400000915,
      "4": 400000916,
      "5": 400000917
    },
    "ability_1": {
      "1": 3200,
      "2": 3201,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 3300,
      "2": 3301,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 3400,
      "2": 3401,
      "3": 0,
      "4": 0
    }
  },
  "10150401": {
    "name": "Albert",
    "chara_id": 10150401,
    "story_id": 110274011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 454,
    "max_attack": 300,
    "weapon_type": 1,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110274,
    "alt_id": 1,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000524,
      "2": 400000525,
      "3": 400000526,
      "4": 400000527,
      "5": 400000529
    },
    "ability_1": {
      "1": 110070005,
      "2": 110070006,
      "3": 1177,
      "4": 0
    },
    "ability_2": {
      "1": 110020104,
      "2": 110020106,
      "3": 1179,
      "4": 0
    },
    "ability_3": {
      "1": 21,
      "2": 22,
      "3": 1180,
      "4": 0
    }
  },
  "10150402": {
    "name": "Alfonse",
    "chara_id": 10150402,
    "story_id": 110327011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 0,
    "base_health": 43,
    "base_attack": 28,
    "lvl1_health": 43,
    "lvl1_attack": 28,
    "lvl2_health": 62,
    "lvl2_attack": 41,
    "max_health": 441,
    "max_attack": 291,
    "weapon_type": 1,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110327,
    "alt_id": 1,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000448,
      "2": 400000449,
      "3": 400000450,
      "4": 400000451,
      "5": 400000453
    },
    "ability_1": {
      "1": 200,
      "2": 201,
      "3": 936,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 937,
      "4": 0
    },
    "ability_3": {
      "1": 110010405,
      "2": 110010406,
      "3": 938,
      "4": 0
    }
  },
  "10150403": {
    "name": "Gala Prince",
    "chara_id": 10150403,
    "story_id": 100001081,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 454,
    "max_attack": 300,
    "weapon_type": 1,
    "mana_circle_name": "MC_0509",
    "mana_piece_id": 5084,
    "limit_break_id": 1050114,
    "base_id": 100001,
    "alt_id": 8,
    "coability": {
      "1": 136000004,
      "2": 136000005,
      "3": 136000006,
      "4": 136000007,
      "5": 136000008
    },
    "chain_ability": {
      "1": 400000542,
      "2": 400000543,
      "3": 400000544,
      "4": 400000545,
      "5": 400000547
    },
    "ability_1": {
      "1": 430,
      "2": 431,
      "3": 43160,
      "4": 0
    },
    "ability_2": {
      "1": 432,
      "2": 433,
      "3": 43360,
      "4": 0
    },
    "ability_3": {
      "1": 428,
      "2": 429,
      "3": 42960,
      "4": 0
    }
  },
  "10150404": {
    "name": "Pecorine",
    "chara_id": 10150404,
    "story_id": 110371011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 454,
    "max_attack": 300,
    "weapon_type": 1,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110371,
    "alt_id": 1,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000448,
      "2": 400000449,
      "3": 400000450,
      "4": 400000451,
      "5": 400000453
    },
    "ability_1": {
      "1": 1518,
      "2": 1519,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1507,
      "2": 1508,
      "3": 0,
      "4": 0
    }
  },
  "10150405": {
    "name": "Civilian Leif",
    "chara_id": 10150405,
    "story_id": 100018071,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 454,
    "max_attack": 300,
    "weapon_type": 1,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5044,
    "limit_break_id": 1050104,
    "base_id": 100018,
    "alt_id": 7,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000885,
      "2": 400000886,
      "3": 400000887,
      "4": 400000888,
      "5": 400000890
    },
    "ability_1": {
      "1": 2213,
      "2": 2214,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020104,
      "2": 110020106,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 955,
      "2": 956,
      "3": 0,
      "4": 0
    }
  },
  "10150501": {
    "name": "Yaten",
    "chara_id": 10150501,
    "story_id": 110325011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 54,
    "lvl1_attack": 36,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 450,
    "max_attack": 303,
    "weapon_type": 1,
    "mana_circle_name": "MC_0510",
    "mana_piece_id": 5085,
    "limit_break_id": 1050205,
    "base_id": 110325,
    "alt_id": 1,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000581,
      "2": 400000582,
      "3": 400000583,
      "4": 400000584,
      "5": 400000586
    },
    "ability_1": {
      "1": 292,
      "2": 297,
      "3": 2263,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 682,
      "4": 0
    },
    "ability_3": {
      "1": 210002603,
      "2": 210002604,
      "3": 2268,
      "4": 0
    }
  },
  "10150502": {
    "name": "Gala Alex",
    "chara_id": 10150502,
    "story_id": 100005021,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 0,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 54,
    "lvl1_attack": 36,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 450,
    "max_attack": 303,
    "weapon_type": 1,
    "mana_circle_name": "MC_0510",
    "mana_piece_id": 5085,
    "limit_break_id": 1050115,
    "base_id": 100005,
    "alt_id": 2,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000605,
      "2": 400000606,
      "3": 400000607,
      "4": 400000608,
      "5": 400000610
    },
    "ability_1": {
      "1": 883,
      "2": 884,
      "3": 1968,
      "4": 0
    },
    "ability_2": {
      "1": 881,
      "2": 882,
      "3": 1961,
      "4": 0
    },
    "ability_3": {
      "1": 110160105,
      "2": 110160106,
      "3": 1965,
      "4": 0
    }
  },
  "10150503": {
    "name": "Alberius",
    "chara_id": 10150503,
    "story_id": 100031031,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 54,
    "lvl1_attack": 36,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 450,
    "max_attack": 303,
    "weapon_type": 1,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5015,
    "limit_break_id": 1050105,
    "base_id": 100031,
    "alt_id": 3,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000891,
      "2": 400000892,
      "3": 400000893,
      "4": 400000894,
      "5": 400000895
    },
    "ability_1": {
      "1": 1834,
      "2": 1835,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1837,
      "2": 1838,
      "3": 0,
      "4": 0
    }
  },
  "10150504": {
    "name": "Gala Nedrick",
    "chara_id": 10150504,
    "story_id": 100039031,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 54,
    "lvl1_attack": 36,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 450,
    "max_attack": 303,
    "weapon_type": 1,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5025,
    "limit_break_id": 1050105,
    "base_id": 100039,
    "alt_id": 3,
    "coability": {
      "1": 101050005,
      "2": 101050006,
      "3": 101050007,
      "4": 101050008,
      "5": 101050010
    },
    "chain_ability": {
      "1": 400000891,
      "2": 400000892,
      "3": 400000893,
      "4": 400000894,
      "5": 400000895
    },
    "ability_1": {
      "1": 2733,
      "2": 2735,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 2756,
      "2": 2757,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2752,
      "2": 2753,
      "3": 0,
      "4": 0
    }
  },
  "10230101": {
    "name": "Aoi",
    "chara_id": 10230101,
    "story_id": 110002011,
    "rarity": 3,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 41,
    "base_attack": 29,
    "lvl1_health": 51,
    "lvl1_attack": 36,
    "lvl2_health": 59,
    "lvl2_attack": 41,
    "max_health": 421,
    "max_attack": 295,
    "weapon_type": 2,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3011,
    "limit_break_id": 1030101,
    "base_id": 110002,
    "alt_id": 1,
    "coability": {
      "1": 101020001,
      "2": 101020003,
      "3": 101020005,
      "4": 101020007,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000052,
      "2": 400000052,
      "3": 400000053,
      "4": 400000053,
      "5": 400000054
    },
    "ability_1": {
      "1": 110350003,
      "2": 110350004,
      "3": 711,
      "4": 0
    },
    "ability_2": {
      "1": 110021003,
      "2": 110021004,
      "3": 679,
      "4": 0
    },
    "ability_3": {
      "1": 110021003,
      "2": 110021004,
      "3": 0,
      "4": 0
    }
  },
  "10230201": {
    "name": "Jurota",
    "chara_id": 10230201,
    "story_id": 110016011,
    "rarity": 3,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 41,
    "base_attack": 29,
    "lvl1_health": 51,
    "lvl1_attack": 35,
    "lvl2_health": 60,
    "lvl2_attack": 41,
    "max_health": 423,
    "max_attack": 294,
    "weapon_type": 2,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3012,
    "limit_break_id": 1030102,
    "base_id": 110016,
    "alt_id": 1,
    "coability": {
      "1": 101020001,
      "2": 101020003,
      "3": 101020005,
      "4": 101020007,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000195,
      "2": 400000195,
      "3": 400000196,
      "4": 400000196,
      "5": 100039
    },
    "ability_1": {
      "1": 110080003,
      "2": 100035,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 100038,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10230301": {
    "name": "Melody",
    "chara_id": 10230301,
    "story_id": 110027011,
    "rarity": 3,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 2,
    "base_health": 43,
    "base_attack": 27,
    "lvl1_health": 54,
    "lvl1_attack": 34,
    "lvl2_health": 62,
    "lvl2_attack": 39,
    "max_health": 443,
    "max_attack": 281,
    "weapon_type": 2,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3013,
    "limit_break_id": 1030103,
    "base_id": 110027,
    "alt_id": 1,
    "coability": {
      "1": 101020001,
      "2": 101020003,
      "3": 101020005,
      "4": 101020007,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000285,
      "2": 400000285,
      "3": 400000286,
      "4": 400000286,
      "5": 400000287
    },
    "ability_1": {
      "1": 210002103,
      "2": 210002104,
      "3": 210002107,
      "4": 0
    },
    "ability_2": {
      "1": 110020303,
      "2": 110020304,
      "3": 984,
      "4": 0
    },
    "ability_3": {
      "1": 110020303,
      "2": 110020304,
      "3": 0,
      "4": 0
    }
  },
  "10230401": {
    "name": "Halloween Edward",
    "chara_id": 10230401,
    "story_id": 110049021,
    "rarity": 3,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 41,
    "base_attack": 28,
    "lvl1_health": 51,
    "lvl1_attack": 35,
    "lvl2_health": 60,
    "lvl2_attack": 41,
    "max_health": 424,
    "max_attack": 293,
    "weapon_type": 2,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3014,
    "limit_break_id": 1030104,
    "base_id": 110049,
    "alt_id": 2,
    "coability": {
      "1": 101020001,
      "2": 101020003,
      "3": 101020005,
      "4": 101020007,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000428,
      "2": 400000428,
      "3": 400000429,
      "4": 400000429,
      "5": 400000430
    },
    "ability_1": {
      "1": 210000303,
      "2": 210000304,
      "3": 210000307,
      "4": 0
    },
    "ability_2": {
      "1": 110020703,
      "2": 110020704,
      "3": 684,
      "4": 0
    },
    "ability_3": {
      "1": 110020703,
      "2": 110020704,
      "3": 0,
      "4": 0
    }
  },
  "10230501": {
    "name": "Taro",
    "chara_id": 10230501,
    "story_id": 110044011,
    "rarity": 3,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 41,
    "base_attack": 29,
    "lvl1_health": 51,
    "lvl1_attack": 36,
    "lvl2_health": 59,
    "lvl2_attack": 42,
    "max_health": 420,
    "max_attack": 296,
    "weapon_type": 2,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3015,
    "limit_break_id": 1030105,
    "base_id": 110044,
    "alt_id": 1,
    "coability": {
      "1": 101020001,
      "2": 101020003,
      "3": 101020005,
      "4": 101020007,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000670,
      "2": 400000670,
      "3": 400000671,
      "4": 400000671,
      "5": 400000672
    },
    "ability_1": {
      "1": 210001703,
      "2": 210001704,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020403,
      "2": 110020404,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020403,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10240101": {
    "name": "Laxi",
    "chara_id": 10240101,
    "story_id": 100032011,
    "rarity": 4,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 41,
    "base_attack": 29,
    "lvl1_health": 51,
    "lvl1_attack": 36,
    "lvl2_health": 59,
    "lvl2_attack": 41,
    "max_health": 421,
    "max_attack": 295,
    "weapon_type": 2,
    "mana_circle_name": "MC_0402",
    "mana_piece_id": 4021,
    "limit_break_id": 1040201,
    "base_id": 100032,
    "alt_id": 1,
    "coability": {
      "1": 101020003,
      "2": 101020004,
      "3": 101020005,
      "4": 101020007,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000092,
      "2": 400000092,
      "3": 400000094,
      "4": 400000094,
      "5": 400000096
    },
    "ability_1": {
      "1": 622,
      "2": 623,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 624,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10240201": {
    "name": "Celliera",
    "chara_id": 10240201,
    "story_id": 110255011,
    "rarity": 4,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 0,
    "base_health": 41,
    "base_attack": 29,
    "lvl1_health": 41,
    "lvl1_attack": 29,
    "lvl2_health": 60,
    "lvl2_attack": 41,
    "max_health": 423,
    "max_attack": 294,
    "weapon_type": 2,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4012,
    "limit_break_id": 1040102,
    "base_id": 110255,
    "alt_id": 1,
    "coability": {
      "1": 101020003,
      "2": 101020004,
      "3": 101020005,
      "4": 101020007,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000273,
      "2": 400000273,
      "3": 400000275,
      "4": 400000275,
      "5": 400000277
    },
    "ability_1": {
      "1": 110050102,
      "2": 110050103,
      "3": 715,
      "4": 0
    },
    "ability_2": {
      "1": 110020203,
      "2": 110020204,
      "3": 803,
      "4": 0
    },
    "ability_3": {
      "1": 210000104,
      "2": 746,
      "3": 0,
      "4": 0
    }
  },
  "10240202": {
    "name": "Summer Ranzal",
    "chara_id": 10240202,
    "story_id": 100003021,
    "rarity": 4,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 46,
    "base_attack": 26,
    "lvl1_health": 58,
    "lvl1_attack": 33,
    "lvl2_health": 67,
    "lvl2_attack": 38,
    "max_health": 476,
    "max_attack": 271,
    "weapon_type": 2,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4012,
    "limit_break_id": 1040102,
    "base_id": 100003,
    "alt_id": 2,
    "coability": {
      "1": 101020003,
      "2": 101020004,
      "3": 101020005,
      "4": 101020007,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000178,
      "2": 400000178,
      "3": 400000180,
      "4": 400000180,
      "5": 400000182
    },
    "ability_1": {
      "1": 210001304,
      "2": 210001305,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 357,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10240301": {
    "name": "Musashi",
    "chara_id": 10240301,
    "story_id": 110030011,
    "rarity": 4,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 42,
    "base_attack": 29,
    "lvl1_health": 52,
    "lvl1_attack": 36,
    "lvl2_health": 61,
    "lvl2_attack": 42,
    "max_health": 431,
    "max_attack": 301,
    "weapon_type": 2,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4013,
    "limit_break_id": 1040103,
    "base_id": 110030,
    "alt_id": 1,
    "coability": {
      "1": 101020003,
      "2": 101020004,
      "3": 101020005,
      "4": 101020007,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000327,
      "2": 400000327,
      "3": 400000329,
      "4": 400000329,
      "5": 400000331
    },
    "ability_1": {
      "1": 210001304,
      "2": 210001305,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110350004,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10240302": {
    "name": "Addis",
    "chara_id": 10240302,
    "story_id": 110310011,
    "rarity": 4,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 42,
    "base_attack": 30,
    "lvl1_health": 53,
    "lvl1_attack": 37,
    "lvl2_health": 61,
    "lvl2_attack": 43,
    "max_health": 435,
    "max_attack": 305,
    "weapon_type": 2,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4013,
    "limit_break_id": 1040103,
    "base_id": 110310,
    "alt_id": 1,
    "coability": {
      "1": 101020003,
      "2": 101020004,
      "3": 101020005,
      "4": 101020007,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000392,
      "2": 400000392,
      "3": 400000394,
      "4": 400000394,
      "5": 400000396
    },
    "ability_1": {
      "1": 110400002,
      "2": 110400003,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110080004,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10240401": {
    "name": "Yachiyo",
    "chara_id": 10240401,
    "story_id": 110064011,
    "rarity": 4,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 42,
    "base_attack": 29,
    "lvl1_health": 52,
    "lvl1_attack": 36,
    "lvl2_health": 61,
    "lvl2_attack": 42,
    "max_health": 432,
    "max_attack": 300,
    "weapon_type": 2,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4014,
    "limit_break_id": 1040104,
    "base_id": 110064,
    "alt_id": 1,
    "coability": {
      "1": 101020003,
      "2": 101020004,
      "3": 101020005,
      "4": 101020007,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000512,
      "2": 400000512,
      "3": 400000514,
      "4": 400000514,
      "5": 400000516
    },
    "ability_1": {
      "1": 215,
      "2": 216,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110160404,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10240402": {
    "name": "Hanabusa",
    "chara_id": 10240402,
    "story_id": 110348011,
    "rarity": 4,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 43,
    "base_attack": 27,
    "lvl1_health": 43,
    "lvl1_attack": 27,
    "lvl2_health": 63,
    "lvl2_attack": 39,
    "max_health": 446,
    "max_attack": 280,
    "weapon_type": 2,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4014,
    "limit_break_id": 1040104,
    "base_id": 110348,
    "alt_id": 1,
    "coability": {
      "1": 101020003,
      "2": 101020004,
      "3": 101020005,
      "4": 101020007,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000501,
      "2": 400000501,
      "3": 400000503,
      "4": 400000503,
      "5": 400000505
    },
    "ability_1": {
      "1": 110050402,
      "2": 110050403,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020703,
      "2": 110020704,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 692,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10240502": {
    "name": "Durant",
    "chara_id": 10240502,
    "story_id": 110343011,
    "rarity": 4,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 42,
    "base_attack": 29,
    "lvl1_health": 52,
    "lvl1_attack": 36,
    "lvl2_health": 60,
    "lvl2_attack": 42,
    "max_health": 428,
    "max_attack": 302,
    "weapon_type": 2,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4015,
    "limit_break_id": 1040105,
    "base_id": 110343,
    "alt_id": 1,
    "coability": {
      "1": 118000004,
      "2": 118000005,
      "3": 118000006,
      "4": 118000007,
      "5": 118000008
    },
    "chain_ability": {
      "1": 400000566,
      "2": 400000566,
      "3": 400000568,
      "4": 400000568,
      "5": 100034
    },
    "ability_1": {
      "1": 210000304,
      "2": 100030,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 100033,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10240503": {
    "name": "Aldred",
    "chara_id": 10240503,
    "story_id": 110262011,
    "rarity": 4,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 41,
    "base_attack": 29,
    "lvl1_health": 41,
    "lvl1_attack": 29,
    "lvl2_health": 59,
    "lvl2_attack": 42,
    "max_health": 420,
    "max_attack": 296,
    "weapon_type": 2,
    "mana_circle_name": "MC_0404",
    "mana_piece_id": 4045,
    "limit_break_id": 1040105,
    "base_id": 110262,
    "alt_id": 1,
    "coability": {
      "1": 101020003,
      "2": 101020004,
      "3": 101020005,
      "4": 101020007,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000640,
      "2": 400000640,
      "3": 400000642,
      "4": 400000642,
      "5": 400000645
    },
    "ability_1": {
      "1": 863,
      "2": 864,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020503,
      "2": 110020506,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 819,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10250101": {
    "name": "Mikoto",
    "chara_id": 10250101,
    "story_id": 110010011,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 2,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 62,
    "lvl2_attack": 44,
    "max_health": 443,
    "max_attack": 311,
    "weapon_type": 2,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 110010,
    "alt_id": 1,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000141,
      "2": 400000142,
      "3": 400000143,
      "4": 400000144,
      "5": 400000146
    },
    "ability_1": {
      "1": 210001605,
      "2": 210001606,
      "3": 1396,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 110090005,
      "2": 110090006,
      "3": 110090018,
      "4": 0
    }
  },
  "10250102": {
    "name": "Rena",
    "chara_id": 10250102,
    "story_id": 110264011,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 48,
    "base_attack": 27,
    "lvl1_health": 59,
    "lvl1_attack": 34,
    "lvl2_health": 69,
    "lvl2_attack": 40,
    "max_health": 490,
    "max_attack": 282,
    "weapon_type": 2,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 110264,
    "alt_id": 1,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000052,
      "2": 400000053,
      "3": 400000054,
      "4": 400000055,
      "5": 400000057
    },
    "ability_1": {
      "1": 311,
      "2": 312,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210001103,
      "2": 210001104,
      "3": 0,
      "4": 0
    }
  },
  "10250103": {
    "name": "Nobunaga",
    "chara_id": 10250103,
    "story_id": 110346011,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 62,
    "lvl2_attack": 44,
    "max_health": 443,
    "max_attack": 311,
    "weapon_type": 2,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 110346,
    "alt_id": 1,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000082,
      "2": 400000083,
      "3": 400000084,
      "4": 400000085,
      "5": 400000708
    },
    "ability_1": {
      "1": 210000505,
      "2": 210000506,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 671,
      "2": 672,
      "3": 0,
      "4": 0
    }
  },
  "10250104": {
    "name": "Armored Yachiyo",
    "chara_id": 10250104,
    "story_id": 110064021,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 62,
    "lvl2_attack": 44,
    "max_health": 443,
    "max_attack": 311,
    "weapon_type": 2,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5041,
    "limit_break_id": 1050101,
    "base_id": 110064,
    "alt_id": 2,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000935,
      "2": 400000936,
      "3": 400000937,
      "4": 400000938,
      "5": 400000940
    },
    "ability_1": {
      "1": 1934,
      "2": 1939,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110070005,
      "2": 110070006,
      "3": 0,
      "4": 0
    }
  },
  "10250201": {
    "name": "Valerio",
    "chara_id": 10250201,
    "story_id": 110295011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 0,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 44,
    "max_health": 445,
    "max_attack": 310,
    "weapon_type": 2,
    "mana_circle_name": "MC_0510",
    "mana_piece_id": 5082,
    "limit_break_id": 1050202,
    "base_id": 110295,
    "alt_id": 1,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000256,
      "2": 400000256,
      "3": 400000256,
      "4": 400000256,
      "5": 400000256
    },
    "ability_1": {
      "1": 799,
      "2": 800,
      "3": 2779,
      "4": 0
    },
    "ability_2": {
      "1": 110020204,
      "2": 110020206,
      "3": 803,
      "4": 0
    },
    "ability_3": {
      "1": 770,
      "2": 771,
      "3": 2780,
      "4": 0
    }
  },
  "10250202": {
    "name": "Halloween Akasha",
    "chara_id": 10250202,
    "story_id": 110341031,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 44,
    "max_health": 445,
    "max_attack": 310,
    "weapon_type": 2,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 110341,
    "alt_id": 3,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000163,
      "2": 400000164,
      "3": 400000165,
      "4": 400000166,
      "5": 100008
    },
    "ability_1": {
      "1": 1251,
      "2": 1252,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1253,
      "2": 1254,
      "3": 0,
      "4": 0
    }
  },
  "10250203": {
    "name": "Gala Mascula",
    "chara_id": 10250203,
    "story_id": 100045011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 44,
    "max_health": 445,
    "max_attack": 310,
    "weapon_type": 2,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5022,
    "limit_break_id": 1050102,
    "base_id": 100045,
    "alt_id": 1,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000956,
      "2": 400000957,
      "3": 400000958,
      "4": 400000959,
      "5": 400000960
    },
    "ability_1": {
      "1": 1982,
      "2": 1985,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 1988,
      "2": 1989,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1071,
      "2": 1074,
      "3": 0,
      "4": 0
    }
  },
  "10250204": {
    "name": "Regina",
    "chara_id": 10250204,
    "story_id": 110395011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 44,
    "max_health": 445,
    "max_attack": 310,
    "weapon_type": 2,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5042,
    "limit_break_id": 1050102,
    "base_id": 110395,
    "alt_id": 1,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000163,
      "2": 400000164,
      "3": 400000165,
      "4": 400000166,
      "5": 400000168
    },
    "ability_1": {
      "1": 2242,
      "2": 2317,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2238,
      "2": 2239,
      "3": 0,
      "4": 0
    }
  },
  "10250301": {
    "name": "Victor",
    "chara_id": 10250301,
    "story_id": 110307011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 29,
    "lvl1_health": 57,
    "lvl1_attack": 36,
    "lvl2_health": 66,
    "lvl2_attack": 41,
    "max_health": 468,
    "max_attack": 295,
    "weapon_type": 2,
    "mana_circle_name": "MC_0510",
    "mana_piece_id": 5083,
    "limit_break_id": 1050203,
    "base_id": 110307,
    "alt_id": 1,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000362,
      "2": 400000363,
      "3": 400000364,
      "4": 400000365,
      "5": 400000367
    },
    "ability_1": {
      "1": 210000105,
      "2": 210000106,
      "3": 2518,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 838,
      "4": 0
    },
    "ability_3": {
      "1": 110130005,
      "2": 110130006,
      "3": 759,
      "4": 0
    }
  },
  "10250302": {
    "name": "Tobias",
    "chara_id": 10250302,
    "story_id": 110352011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 29,
    "lvl1_health": 57,
    "lvl1_attack": 36,
    "lvl2_health": 66,
    "lvl2_attack": 41,
    "max_health": 468,
    "max_attack": 295,
    "weapon_type": 2,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110352,
    "alt_id": 1,
    "coability": {
      "1": 118000004,
      "2": 118000005,
      "3": 118000006,
      "4": 118000007,
      "5": 118000008
    },
    "chain_ability": {
      "1": 400000285,
      "2": 400000286,
      "3": 400000287,
      "4": 400000288,
      "5": 400000290
    },
    "ability_1": {
      "1": 110130004,
      "2": 110130005,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110160105,
      "2": 110160106,
      "3": 0,
      "4": 0
    }
  },
  "10250303": {
    "name": "Forager Mitsuba",
    "chara_id": 10250303,
    "story_id": 110296021,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 29,
    "lvl1_health": 57,
    "lvl1_attack": 36,
    "lvl2_health": 66,
    "lvl2_attack": 41,
    "max_health": 468,
    "max_attack": 295,
    "weapon_type": 2,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110296,
    "alt_id": 2,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000392,
      "2": 400000393,
      "3": 400000394,
      "4": 400000395,
      "5": 400000397
    },
    "ability_1": {
      "1": 1353,
      "2": 1354,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1490,
      "2": 1491,
      "3": 0,
      "4": 0
    }
  },
  "10250304": {
    "name": "Yukata Lathna",
    "chara_id": 10250304,
    "story_id": 110349041,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 44,
    "max_health": 445,
    "max_attack": 311,
    "weapon_type": 2,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110349,
    "alt_id": 4,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000913,
      "2": 400000914,
      "3": 400000915,
      "4": 400000916,
      "5": 400000917
    },
    "ability_1": {
      "1": 2128,
      "2": 2129,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110060005,
      "2": 110060006,
      "3": 0,
      "4": 0
    }
  },
  "10250305": {
    "name": "Harle",
    "chara_id": 10250305,
    "story_id": 100019021,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 43,
    "base_attack": 27,
    "lvl1_health": 43,
    "lvl1_attack": 27,
    "lvl2_health": 62,
    "lvl2_attack": 39,
    "max_health": 443,
    "max_attack": 281,
    "weapon_type": 2,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 100019,
    "alt_id": 2,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000392,
      "2": 400000393,
      "3": 400000394,
      "4": 400000395,
      "5": 400000397
    },
    "ability_1": {
      "1": 110050603,
      "2": 110050604,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2328,
      "2": 2330,
      "3": 0,
      "4": 0
    }
  },
  "10250401": {
    "name": "Beautician Zardin",
    "chara_id": 10250401,
    "story_id": 110015021,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 446,
    "max_attack": 309,
    "weapon_type": 2,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110015,
    "alt_id": 2,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000747,
      "2": 400000748,
      "3": 400000749,
      "4": 400000750,
      "5": 400000752
    },
    "ability_1": {
      "1": 210002802,
      "2": 217,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020104,
      "2": 110020106,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210002005,
      "2": 210002006,
      "3": 0,
      "4": 0
    }
  },
  "10250402": {
    "name": "Gala Luca",
    "chara_id": 10250402,
    "story_id": 100006091,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 446,
    "max_attack": 309,
    "weapon_type": 2,
    "mana_circle_name": "MC_0509",
    "mana_piece_id": 5084,
    "limit_break_id": 1050204,
    "base_id": 100006,
    "alt_id": 9,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000484,
      "2": 400000485,
      "3": 400000486,
      "4": 400000487,
      "5": 400000489
    },
    "ability_1": {
      "1": 644,
      "2": 645,
      "3": 2045,
      "4": 0
    },
    "ability_2": {
      "1": 650,
      "2": 651,
      "3": 2047,
      "4": 0
    },
    "ability_3": {
      "1": 310000505,
      "2": 310000506,
      "3": 110090019,
      "4": 0
    }
  },
  "10250403": {
    "name": "Mordecai",
    "chara_id": 10250403,
    "story_id": 110369011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 46,
    "base_attack": 26,
    "lvl1_health": 46,
    "lvl1_attack": 26,
    "lvl2_health": 66,
    "lvl2_attack": 37,
    "max_health": 468,
    "max_attack": 265,
    "weapon_type": 2,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110369,
    "alt_id": 1,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000433,
      "2": 400000434,
      "3": 400000435,
      "4": 400000436,
      "5": 400000438
    },
    "ability_1": {
      "1": 1381,
      "2": 1386,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1391,
      "2": 1392,
      "3": 0,
      "4": 0
    }
  },
  "10250404": {
    "name": "Humanoid Jupiter",
    "chara_id": 10250404,
    "story_id": 110398011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 446,
    "max_attack": 309,
    "weapon_type": 2,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5024,
    "limit_break_id": 1050104,
    "base_id": 110398,
    "alt_id": 1,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000990,
      "2": 400000991,
      "3": 400000992,
      "4": 400000993,
      "5": 400000994
    },
    "ability_1": {
      "1": 2410,
      "2": 2412,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020104,
      "2": 110020106,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2404,
      "2": 2405,
      "3": 0,
      "4": 0
    }
  },
  "10250501": {
    "name": "Ieyasu",
    "chara_id": 10250501,
    "story_id": 110313011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 53,
    "lvl1_attack": 38,
    "lvl2_health": 62,
    "lvl2_attack": 44,
    "max_health": 442,
    "max_attack": 312,
    "weapon_type": 2,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5015,
    "limit_break_id": 1050105,
    "base_id": 110313,
    "alt_id": 1,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000658,
      "2": 400000659,
      "3": 400000660,
      "4": 400000661,
      "5": 400000663
    },
    "ability_1": {
      "1": 210001605,
      "2": 210001606,
      "3": 712,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 682,
      "4": 0
    },
    "ability_3": {
      "1": 110390005,
      "2": 110390006,
      "3": 720,
      "4": 0
    }
  },
  "10250502": {
    "name": "Natalie",
    "chara_id": 10250502,
    "story_id": 110326011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 53,
    "lvl1_attack": 38,
    "lvl2_health": 62,
    "lvl2_attack": 44,
    "max_health": 442,
    "max_attack": 312,
    "weapon_type": 2,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5015,
    "limit_break_id": 1050105,
    "base_id": 110326,
    "alt_id": 1,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000640,
      "2": 400000641,
      "3": 400000642,
      "4": 400000643,
      "5": 400000645
    },
    "ability_1": {
      "1": 288,
      "2": 289,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 290,
      "2": 291,
      "3": 0,
      "4": 0
    }
  },
  "10250503": {
    "name": "Linnea",
    "chara_id": 10250503,
    "story_id": 110271011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 53,
    "lvl1_attack": 38,
    "lvl2_health": 62,
    "lvl2_attack": 44,
    "max_health": 442,
    "max_attack": 312,
    "weapon_type": 2,
    "mana_circle_name": "MC_0506",
    "mana_piece_id": 5065,
    "limit_break_id": 1050105,
    "base_id": 110271,
    "alt_id": 1,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000566,
      "2": 400000567,
      "3": 400000568,
      "4": 400000569,
      "5": 400000571
    },
    "ability_1": {
      "1": 987,
      "2": 988,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110070005,
      "2": 110070006,
      "3": 0,
      "4": 0
    }
  },
  "10250504": {
    "name": "Gala Zethia",
    "chara_id": 10250504,
    "story_id": 100054011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 53,
    "lvl1_attack": 38,
    "lvl2_health": 62,
    "lvl2_attack": 44,
    "max_health": 442,
    "max_attack": 312,
    "weapon_type": 2,
    "mana_circle_name": "MC_0512",
    "mana_piece_id": 5125,
    "limit_break_id": 1050105,
    "base_id": 100054,
    "alt_id": 1,
    "coability": {
      "1": 101020005,
      "2": 101020006,
      "3": 101020007,
      "4": 101020008,
      "5": 101020010
    },
    "chain_ability": {
      "1": 400000973,
      "2": 400000974,
      "3": 400000975,
      "4": 400000976,
      "5": 400000978
    },
    "ability_1": {
      "1": 2246,
      "2": 2247,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 2258,
      "2": 2259,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2236,
      "2": 2237,
      "3": 0,
      "4": 0
    }
  },
  "10330101": {
    "name": "Renelle",
    "chara_id": 10330101,
    "story_id": 110005011,
    "rarity": 3,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 26,
    "lvl1_health": 55,
    "lvl1_attack": 32,
    "lvl2_health": 64,
    "lvl2_attack": 38,
    "max_health": 454,
    "max_attack": 270,
    "weapon_type": 3,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3011,
    "limit_break_id": 1030101,
    "base_id": 110005,
    "alt_id": 1,
    "coability": {
      "1": 103000001,
      "2": 103000003,
      "3": 103000005,
      "4": 103000007,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000735,
      "2": 400000735,
      "3": 400000736,
      "4": 400000736,
      "5": 400000737
    },
    "ability_1": {
      "1": 310000503,
      "2": 310000504,
      "3": 713,
      "4": 0
    },
    "ability_2": {
      "1": 110020703,
      "2": 110020704,
      "3": 676,
      "4": 0
    },
    "ability_3": {
      "1": 110020703,
      "2": 110020604,
      "3": 0,
      "4": 0
    }
  },
  "10330301": {
    "name": "Francesca",
    "chara_id": 10330301,
    "story_id": 110026011,
    "rarity": 3,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 26,
    "lvl1_health": 55,
    "lvl1_attack": 32,
    "lvl2_health": 64,
    "lvl2_attack": 38,
    "max_health": 455,
    "max_attack": 270,
    "weapon_type": 3,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3013,
    "limit_break_id": 1030103,
    "base_id": 110026,
    "alt_id": 1,
    "coability": {
      "1": 103000001,
      "2": 103000003,
      "3": 103000005,
      "4": 103000007,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000327,
      "2": 400000327,
      "3": 400000328,
      "4": 400000328,
      "5": 400000329
    },
    "ability_1": {
      "1": 110070003,
      "2": 110070004,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020903,
      "2": 110020904,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020903,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10330401": {
    "name": "Irfan",
    "chara_id": 10330401,
    "story_id": 110037011,
    "rarity": 3,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 26,
    "lvl1_health": 55,
    "lvl1_attack": 32,
    "lvl2_health": 64,
    "lvl2_attack": 38,
    "max_health": 456,
    "max_attack": 269,
    "weapon_type": 3,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3014,
    "limit_break_id": 1030104,
    "base_id": 110037,
    "alt_id": 1,
    "coability": {
      "1": 103000001,
      "2": 103000003,
      "3": 103000005,
      "4": 103000007,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000484,
      "2": 400000484,
      "3": 400000485,
      "4": 400000485,
      "5": 400000486
    },
    "ability_1": {
      "1": 210000603,
      "2": 210000604,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020703,
      "2": 110020704,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020703,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10330501": {
    "name": "Vice",
    "chara_id": 10330501,
    "story_id": 110048011,
    "rarity": 3,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 26,
    "lvl1_health": 55,
    "lvl1_attack": 33,
    "lvl2_health": 64,
    "lvl2_attack": 38,
    "max_health": 453,
    "max_attack": 271,
    "weapon_type": 3,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3015,
    "limit_break_id": 1030105,
    "base_id": 110048,
    "alt_id": 1,
    "coability": {
      "1": 103000001,
      "2": 103000003,
      "3": 103000005,
      "4": 103000007,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000611,
      "2": 400000611,
      "3": 400000612,
      "4": 400000612,
      "5": 400000613
    },
    "ability_1": {
      "1": 110080003,
      "2": 110080004,
      "3": 694,
      "4": 0
    },
    "ability_2": {
      "1": 110020503,
      "2": 110020504,
      "3": 906,
      "4": 0
    },
    "ability_3": {
      "1": 110020503,
      "2": 110020504,
      "3": 0,
      "4": 0
    }
  },
  "10330502": {
    "name": "Vida",
    "chara_id": 10330502,
    "story_id": 110067011,
    "rarity": 3,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 26,
    "lvl1_health": 55,
    "lvl1_attack": 33,
    "lvl2_health": 64,
    "lvl2_attack": 38,
    "max_health": 453,
    "max_attack": 271,
    "weapon_type": 3,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3015,
    "limit_break_id": 1030105,
    "base_id": 110067,
    "alt_id": 1,
    "coability": {
      "1": 103000001,
      "2": 103000003,
      "3": 103000005,
      "4": 103000007,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000611,
      "2": 400000611,
      "3": 400000612,
      "4": 400000612,
      "5": 400000613
    },
    "ability_1": {
      "1": 110070003,
      "2": 110070004,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020603,
      "2": 110020604,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020603,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10340101": {
    "name": "Melsa",
    "chara_id": 10340101,
    "story_id": 110270011,
    "rarity": 4,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 44,
    "base_attack": 26,
    "lvl1_health": 44,
    "lvl1_attack": 26,
    "lvl2_health": 64,
    "lvl2_attack": 38,
    "max_health": 454,
    "max_attack": 270,
    "weapon_type": 3,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4011,
    "limit_break_id": 1040101,
    "base_id": 110270,
    "alt_id": 1,
    "coability": {
      "1": 103000003,
      "2": 103000004,
      "3": 103000005,
      "4": 103000007,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000735,
      "2": 400000735,
      "3": 400000737,
      "4": 400000737,
      "5": 400000739
    },
    "ability_1": {
      "1": 110050202,
      "2": 110050203,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021003,
      "2": 110021004,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 310000504,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10340102": {
    "name": "Yuya",
    "chara_id": 10340102,
    "story_id": 110344011,
    "rarity": 4,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 2,
    "base_health": 45,
    "base_attack": 27,
    "lvl1_health": 56,
    "lvl1_attack": 33,
    "lvl2_health": 65,
    "lvl2_attack": 39,
    "max_health": 463,
    "max_attack": 276,
    "weapon_type": 3,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4011,
    "limit_break_id": 1040101,
    "base_id": 110344,
    "alt_id": 1,
    "coability": {
      "1": 103000003,
      "2": 103000004,
      "3": 103000005,
      "4": 103000007,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000001,
      "2": 400000001,
      "3": 400000003,
      "4": 400000003,
      "5": 400000005
    },
    "ability_1": {
      "1": 479,
      "2": 480,
      "3": 1587,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 313,
      "2": 758,
      "3": 0,
      "4": 0
    }
  },
  "10340201": {
    "name": "Luther",
    "chara_id": 10340201,
    "story_id": 110020011,
    "rarity": 4,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 27,
    "lvl1_health": 56,
    "lvl1_attack": 33,
    "lvl2_health": 66,
    "lvl2_attack": 39,
    "max_health": 466,
    "max_attack": 275,
    "weapon_type": 3,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4012,
    "limit_break_id": 1040102,
    "base_id": 110020,
    "alt_id": 1,
    "coability": {
      "1": 103000003,
      "2": 103000004,
      "3": 103000005,
      "4": 103000007,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000256,
      "2": 400000256,
      "3": 400000256,
      "4": 400000256,
      "5": 400000256
    },
    "ability_1": {
      "1": 310000504,
      "2": 310000505,
      "3": 713,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 210000704,
      "2": 1101,
      "3": 0,
      "4": 0
    }
  },
  "10340202": {
    "name": "Orsem",
    "chara_id": 10340202,
    "story_id": 110253011,
    "rarity": 4,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 28,
    "lvl1_health": 53,
    "lvl1_attack": 35,
    "lvl2_health": 62,
    "lvl2_attack": 40,
    "max_health": 442,
    "max_attack": 288,
    "weapon_type": 3,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4012,
    "limit_break_id": 1040102,
    "base_id": 110253,
    "alt_id": 1,
    "coability": {
      "1": 103000003,
      "2": 103000004,
      "3": 103000005,
      "4": 103000007,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000256,
      "2": 400000256,
      "3": 400000256,
      "4": 400000256,
      "5": 400000256
    },
    "ability_1": {
      "1": 310000504,
      "2": 310000505,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020204,
      "2": 110020206,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210001604,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10340203": {
    "name": "Renee",
    "chara_id": 10340203,
    "story_id": 110265011,
    "rarity": 4,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 27,
    "lvl1_health": 56,
    "lvl1_attack": 33,
    "lvl2_health": 66,
    "lvl2_attack": 39,
    "max_health": 466,
    "max_attack": 275,
    "weapon_type": 3,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4012,
    "limit_break_id": 1040102,
    "base_id": 110265,
    "alt_id": 1,
    "coability": {
      "1": 103000003,
      "2": 103000004,
      "3": 103000005,
      "4": 103000007,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000222,
      "2": 400000223,
      "3": 400000224,
      "4": 400000225,
      "5": 400000226
    },
    "ability_1": {
      "1": 313,
      "2": 314,
      "3": 758,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 271,
      "2": 375,
      "3": 0,
      "4": 0
    }
  },
  "10340301": {
    "name": "Su Fang",
    "chara_id": 10340301,
    "story_id": 110314011,
    "rarity": 4,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 0,
    "base_health": 42,
    "base_attack": 27,
    "lvl1_health": 42,
    "lvl1_attack": 27,
    "lvl2_health": 61,
    "lvl2_attack": 40,
    "max_health": 432,
    "max_attack": 284,
    "weapon_type": 3,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4013,
    "limit_break_id": 1040103,
    "base_id": 110314,
    "alt_id": 1,
    "coability": {
      "1": 103000003,
      "2": 103000004,
      "3": 103000005,
      "4": 103000007,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000327,
      "2": 400000327,
      "3": 400000329,
      "4": 400000329,
      "5": 400000331
    },
    "ability_1": {
      "1": 110050402,
      "2": 110050403,
      "3": 836,
      "4": 0
    },
    "ability_2": {
      "1": 110020903,
      "2": 110020904,
      "3": 838,
      "4": 0
    },
    "ability_3": {
      "1": 110060004,
      "2": 717,
      "3": 0,
      "4": 0
    }
  },
  "10340401": {
    "name": "Fritz",
    "chara_id": 10340401,
    "story_id": 110276011,
    "rarity": 4,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 27,
    "lvl1_health": 56,
    "lvl1_attack": 33,
    "lvl2_health": 66,
    "lvl2_attack": 39,
    "max_health": 467,
    "max_attack": 275,
    "weapon_type": 3,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4014,
    "limit_break_id": 1040104,
    "base_id": 110276,
    "alt_id": 1,
    "coability": {
      "1": 103000003,
      "2": 103000004,
      "3": 103000005,
      "4": 103000007,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000496,
      "2": 400000496,
      "3": 400000498,
      "4": 400000498,
      "5": 400000500
    },
    "ability_1": {
      "1": 210001004,
      "2": 210001005,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020104,
      "2": 110020106,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210000604,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10340402": {
    "name": "Fleur",
    "chara_id": 10340402,
    "story_id": 110319011,
    "rarity": 4,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 28,
    "lvl1_health": 54,
    "lvl1_attack": 35,
    "lvl2_health": 62,
    "lvl2_attack": 40,
    "max_health": 443,
    "max_attack": 287,
    "weapon_type": 3,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4014,
    "limit_break_id": 1040104,
    "base_id": 110319,
    "alt_id": 1,
    "coability": {
      "1": 103000003,
      "2": 103000004,
      "3": 103000005,
      "4": 103000007,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000512,
      "2": 400000512,
      "3": 400000514,
      "4": 400000514,
      "5": 100022
    },
    "ability_1": {
      "1": 84,
      "2": 100023,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110160404,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10340501": {
    "name": "Orion",
    "chara_id": 10340501,
    "story_id": 110052011,
    "rarity": 4,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 27,
    "lvl1_health": 56,
    "lvl1_attack": 33,
    "lvl2_health": 65,
    "lvl2_attack": 39,
    "max_health": 463,
    "max_attack": 276,
    "weapon_type": 3,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4015,
    "limit_break_id": 1040105,
    "base_id": 110052,
    "alt_id": 1,
    "coability": {
      "1": 103000003,
      "2": 103000004,
      "3": 103000005,
      "4": 103000007,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000753,
      "2": 400000753,
      "3": 400000755,
      "4": 400000755,
      "5": 400000757
    },
    "ability_1": {
      "1": 310000504,
      "2": 310000505,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110120002,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10340502": {
    "name": "Alex",
    "chara_id": 10340502,
    "story_id": 100005011,
    "rarity": 4,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 42,
    "base_attack": 28,
    "lvl1_health": 52,
    "lvl1_attack": 34,
    "lvl2_health": 61,
    "lvl2_attack": 40,
    "max_health": 431,
    "max_attack": 285,
    "weapon_type": 3,
    "mana_circle_name": "MC_0402",
    "mana_piece_id": 4025,
    "limit_break_id": 1040205,
    "base_id": 100005,
    "alt_id": 1,
    "coability": {
      "1": 103000003,
      "2": 103000004,
      "3": 103000005,
      "4": 103000007,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000611,
      "2": 400000611,
      "3": 400000613,
      "4": 400000613,
      "5": 400000615
    },
    "ability_1": {
      "1": 210000404,
      "2": 210000405,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110010404,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10350101": {
    "name": "Ezelith",
    "chara_id": 10350101,
    "story_id": 110011011,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 28,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 67,
    "lvl2_attack": 40,
    "max_health": 477,
    "max_attack": 285,
    "weapon_type": 3,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 110011,
    "alt_id": 1,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000082,
      "2": 400000083,
      "3": 400000084,
      "4": 400000085,
      "5": 400000708
    },
    "ability_1": {
      "1": 310000403,
      "2": 310000404,
      "3": 673,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 681,
      "4": 0
    },
    "ability_3": {
      "1": 110080005,
      "2": 110080006,
      "3": 694,
      "4": 0
    }
  },
  "10350102": {
    "name": "Gala Laxi",
    "chara_id": 10350102,
    "story_id": 100032041,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 454,
    "max_attack": 299,
    "weapon_type": 3,
    "mana_circle_name": "MC_0511",
    "mana_piece_id": 5091,
    "limit_break_id": 1050201,
    "base_id": 100032,
    "alt_id": 4,
    "coability": {
      "1": 106070004,
      "2": 106070005,
      "3": 106070006,
      "4": 106070007,
      "5": 106070008
    },
    "chain_ability": {
      "1": 400000735,
      "2": 400000736,
      "3": 400000737,
      "4": 400000738,
      "5": 400000740
    },
    "ability_1": {
      "1": 1063,
      "2": 1064,
      "3": 2030,
      "4": 0
    },
    "ability_2": {
      "1": 1077,
      "2": 1078,
      "3": 2037,
      "4": 0
    },
    "ability_3": {
      "1": 1071,
      "2": 1074,
      "3": 2041,
      "4": 0
    }
  },
  "10350103": {
    "name": "Summer Mitsuhide",
    "chara_id": 10350103,
    "story_id": 110345031,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 454,
    "max_attack": 299,
    "weapon_type": 3,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 110345,
    "alt_id": 3,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000735,
      "2": 400000736,
      "3": 400000737,
      "4": 400000738,
      "5": 400000740
    },
    "ability_1": {
      "1": 2061,
      "2": 2064,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2067,
      "2": 2068,
      "3": 0,
      "4": 0
    }
  },
  "10350104": {
    "name": "Sheila",
    "chara_id": 10350104,
    "story_id": 100044021,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 454,
    "max_attack": 299,
    "weapon_type": 3,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5021,
    "limit_break_id": 1050101,
    "base_id": 100044,
    "alt_id": 2,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400001062,
      "2": 400001063,
      "3": 400001064,
      "4": 400001065,
      "5": 400001066
    },
    "ability_1": {
      "1": 2619,
      "2": 2620,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 2730,
      "2": 2731,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2644,
      "2": 2645,
      "3": 0,
      "4": 0
    }
  },
  "10350201": {
    "name": "Dragonyule Cleo",
    "chara_id": 10350201,
    "story_id": 100004021,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 40,
    "max_health": 480,
    "max_attack": 284,
    "weapon_type": 3,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 100004,
    "alt_id": 2,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000263,
      "2": 400000264,
      "3": 400000265,
      "4": 400000266,
      "5": 400000711
    },
    "ability_1": {
      "1": 210000105,
      "2": 210000106,
      "3": 1621,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 310001501,
      "2": 310001502,
      "3": 310001504,
      "4": 0
    }
  },
  "10350202": {
    "name": "Mitsuba",
    "chara_id": 10350202,
    "story_id": 110296011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 40,
    "max_health": 480,
    "max_attack": 284,
    "weapon_type": 3,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 110296,
    "alt_id": 1,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000273,
      "2": 400000274,
      "3": 400000275,
      "4": 400000276,
      "5": 400000278
    },
    "ability_1": {
      "1": 210000505,
      "2": 210000506,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020204,
      "2": 110020206,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 770,
      "2": 771,
      "3": 0,
      "4": 0
    }
  },
  "10350203": {
    "name": "Tiki",
    "chara_id": 10350203,
    "story_id": 110360011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 455,
    "max_attack": 298,
    "weapon_type": 3,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5022,
    "limit_break_id": 1050102,
    "base_id": 110360,
    "alt_id": 1,
    "coability": {
      "1": 106070004,
      "2": 106070005,
      "3": 106070006,
      "4": 106070007,
      "5": 106070008
    },
    "chain_ability": {
      "1": 400000206,
      "2": 400000207,
      "3": 400000208,
      "4": 400000209,
      "5": 400000211
    },
    "ability_1": {
      "1": 897,
      "2": 898,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020204,
      "2": 110020206,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 855,
      "2": 856,
      "3": 0,
      "4": 0
    }
  },
  "10350204": {
    "name": "Humanoid Mercury",
    "chara_id": 10350204,
    "story_id": 110385011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 455,
    "max_attack": 298,
    "weapon_type": 3,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5022,
    "limit_break_id": 1050102,
    "base_id": 110385,
    "alt_id": 1,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000918,
      "2": 400000919,
      "3": 400000920,
      "4": 400000921,
      "5": 400000922
    },
    "ability_1": {
      "1": 1875,
      "2": 1876,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1878,
      "2": 1879,
      "3": 0,
      "4": 0
    }
  },
  "10350301": {
    "name": "Wedding Aoi",
    "chara_id": 10350301,
    "story_id": 110002021,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 28,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 40,
    "max_health": 480,
    "max_attack": 284,
    "weapon_type": 3,
    "mana_circle_name": "MC_0510",
    "mana_piece_id": 5083,
    "limit_break_id": 1050203,
    "base_id": 110002,
    "alt_id": 2,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000285,
      "2": 400000286,
      "3": 400000287,
      "4": 400000288,
      "5": 400000290
    },
    "ability_1": {
      "1": 247,
      "2": 248,
      "3": 2341,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 840,
      "4": 0
    },
    "ability_3": {
      "1": 116,
      "2": 155,
      "3": 2192,
      "4": 0
    }
  },
  "10350302": {
    "name": "Summer Norwin",
    "chara_id": 10350302,
    "story_id": 110066021,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 455,
    "max_attack": 298,
    "weapon_type": 3,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110066,
    "alt_id": 2,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000765,
      "2": 400000766,
      "3": 400000767,
      "4": 400000768,
      "5": 400000770
    },
    "ability_1": {
      "1": 1051,
      "2": 1056,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110160105,
      "2": 110160106,
      "3": 0,
      "4": 0
    }
  },
  "10350303": {
    "name": "Gala Notte",
    "chara_id": 10350303,
    "story_id": 100007071,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 455,
    "max_attack": 298,
    "weapon_type": 3,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5023,
    "limit_break_id": 1050103,
    "base_id": 100007,
    "alt_id": 7,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000896,
      "2": 400000897,
      "3": 400000898,
      "4": 400000899,
      "5": 400000900
    },
    "ability_1": {
      "1": 1824,
      "2": 1825,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 1880,
      "2": 1881,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210000505,
      "2": 210000506,
      "3": 0,
      "4": 0
    }
  },
  "10350304": {
    "name": "Dragonyule Nevin",
    "chara_id": 10350304,
    "story_id": 110365031,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 455,
    "max_attack": 298,
    "weapon_type": 3,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5043,
    "limit_break_id": 1050103,
    "base_id": 110365,
    "alt_id": 3,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000807,
      "2": 400000808,
      "3": 400000809,
      "4": 400000810,
      "5": 400000812
    },
    "ability_1": {
      "1": 2496,
      "2": 2497,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2483,
      "2": 2484,
      "3": 0,
      "4": 0
    }
  },
  "10350402": {
    "name": "Mitsuhide",
    "chara_id": 10350402,
    "story_id": 110345011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 456,
    "max_attack": 297,
    "weapon_type": 3,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110345,
    "alt_id": 1,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000496,
      "2": 400000497,
      "3": 400000498,
      "4": 400000499,
      "5": 400000714
    },
    "ability_1": {
      "1": 210000505,
      "2": 210000506,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110160405,
      "2": 110160406,
      "3": 0,
      "4": 0
    }
  },
  "10350403": {
    "name": "Wu Kong",
    "chara_id": 10350403,
    "story_id": 110324011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 42,
    "base_attack": 27,
    "lvl1_health": 42,
    "lvl1_attack": 27,
    "lvl2_health": 61,
    "lvl2_attack": 40,
    "max_health": 433,
    "max_attack": 283,
    "weapon_type": 3,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110324,
    "alt_id": 1,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000484,
      "2": 400000485,
      "3": 400000486,
      "4": 400000487,
      "5": 400000489
    },
    "ability_1": {
      "1": 100027,
      "2": 100027,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020104,
      "2": 110020106,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110160405,
      "2": 110160406,
      "3": 0,
      "4": 0
    }
  },
  "10350404": {
    "name": "Yukata Curran",
    "chara_id": 10350404,
    "story_id": 110281021,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 456,
    "max_attack": 297,
    "weapon_type": 3,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110281,
    "alt_id": 2,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000747,
      "2": 400000748,
      "3": 400000749,
      "4": 400000750,
      "5": 400000752
    },
    "ability_1": {
      "1": 1061,
      "2": 1062,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020104,
      "2": 110020106,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 292,
      "2": 297,
      "3": 0,
      "4": 0
    }
  },
  "10350405": {
    "name": "Farren",
    "chara_id": 10350405,
    "story_id": 110393011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 45,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 456,
    "max_attack": 297,
    "weapon_type": 3,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5024,
    "limit_break_id": 1050104,
    "base_id": 110393,
    "alt_id": 1,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000433,
      "2": 400000434,
      "3": 400000435,
      "4": 400000436,
      "5": 400000438
    },
    "ability_1": {
      "1": 2193,
      "2": 2194,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2197,
      "2": 2198,
      "3": 0,
      "4": 0
    }
  },
  "10350502": {
    "name": "Delphi",
    "chara_id": 10350502,
    "story_id": 110336011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 0,
    "base_health": 47,
    "base_attack": 28,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 67,
    "lvl2_attack": 40,
    "max_health": 477,
    "max_attack": 285,
    "weapon_type": 3,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5025,
    "limit_break_id": 1050105,
    "base_id": 110336,
    "alt_id": 1,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000623,
      "2": 400000624,
      "3": 400000625,
      "4": 400000626,
      "5": 400000627
    },
    "ability_1": {
      "1": 456,
      "2": 457,
      "3": 747,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 682,
      "4": 0
    },
    "ability_3": {
      "1": 460,
      "2": 461,
      "3": 792,
      "4": 0
    }
  },
  "10350503": {
    "name": "Bellina",
    "chara_id": 10350503,
    "story_id": 110306011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 453,
    "max_attack": 300,
    "weapon_type": 3,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5025,
    "limit_break_id": 1050105,
    "base_id": 110306,
    "alt_id": 1,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000640,
      "2": 400000641,
      "3": 400000642,
      "4": 400000643,
      "5": 400000645
    },
    "ability_1": {
      "1": 857,
      "2": 858,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 290,
      "2": 291,
      "3": 0,
      "4": 0
    }
  },
  "10350504": {
    "name": "Nevin",
    "chara_id": 10350504,
    "story_id": 110365011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 47,
    "base_attack": 28,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 67,
    "lvl2_attack": 40,
    "max_health": 477,
    "max_attack": 285,
    "weapon_type": 3,
    "mana_circle_name": "MC_0507",
    "mana_piece_id": 5045,
    "limit_break_id": 1050105,
    "base_id": 110365,
    "alt_id": 1,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000753,
      "2": 400000754,
      "3": 400000755,
      "4": 400000756,
      "5": 400000758
    },
    "ability_1": {
      "1": 1218,
      "2": 1219,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110390005,
      "2": 110390006,
      "3": 0,
      "4": 0
    }
  },
  "10350505": {
    "name": "Joker",
    "chara_id": 10350505,
    "story_id": 110377011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 453,
    "max_attack": 300,
    "weapon_type": 3,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5045,
    "limit_break_id": 1050105,
    "base_id": 110377,
    "alt_id": 1,
    "coability": {
      "1": 101100002,
      "2": 101100003,
      "3": 101100004,
      "4": 101100005,
      "5": 101100007
    },
    "chain_ability": {
      "1": 400000859,
      "2": 400000860,
      "3": 400000861,
      "4": 400000862,
      "5": 400000863
    },
    "ability_1": {
      "1": 1669,
      "2": 1670,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 310001501,
      "2": 310001502,
      "3": 0,
      "4": 0
    }
  },
  "10350506": {
    "name": "Summer Prince",
    "chara_id": 10350506,
    "story_id": 100001121,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 42,
    "base_attack": 28,
    "lvl1_health": 42,
    "lvl1_attack": 28,
    "lvl2_health": 61,
    "lvl2_attack": 40,
    "max_health": 431,
    "max_attack": 285,
    "weapon_type": 3,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5015,
    "limit_break_id": 1050105,
    "base_id": 100001,
    "alt_id": 12,
    "coability": {
      "1": 103000005,
      "2": 103000006,
      "3": 103000007,
      "4": 103000008,
      "5": 103000010
    },
    "chain_ability": {
      "1": 400000658,
      "2": 400000659,
      "3": 400000660,
      "4": 400000661,
      "5": 400000663
    },
    "ability_1": {
      "1": 110140302,
      "2": 110140303,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110150002,
      "2": 110150003,
      "3": 0,
      "4": 0
    }
  },
  "10430201": {
    "name": "Rex",
    "chara_id": 10430201,
    "story_id": 110012011,
    "rarity": 3,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 41,
    "base_attack": 28,
    "lvl1_health": 51,
    "lvl1_attack": 35,
    "lvl2_health": 60,
    "lvl2_attack": 41,
    "max_health": 424,
    "max_attack": 293,
    "weapon_type": 4,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3012,
    "limit_break_id": 1030102,
    "base_id": 110012,
    "alt_id": 1,
    "coability": {
      "1": 101030001,
      "2": 101030003,
      "3": 101030005,
      "4": 101030007,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000151,
      "2": 400000151,
      "3": 400000152,
      "4": 400000152,
      "5": 400000153
    },
    "ability_1": {
      "1": 110360003,
      "2": 110360004,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020203,
      "2": 110020204,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020203,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10430202": {
    "name": "Pietro",
    "chara_id": 10430202,
    "story_id": 110258011,
    "rarity": 3,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 26,
    "lvl1_health": 57,
    "lvl1_attack": 32,
    "lvl2_health": 66,
    "lvl2_attack": 37,
    "max_health": 468,
    "max_attack": 265,
    "weapon_type": 4,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3012,
    "limit_break_id": 1030102,
    "base_id": 110258,
    "alt_id": 1,
    "coability": {
      "1": 101030001,
      "2": 101030003,
      "3": 101030005,
      "4": 101030007,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000206,
      "2": 400000206,
      "3": 400000207,
      "4": 400000207,
      "5": 400000208
    },
    "ability_1": {
      "1": 110390003,
      "2": 110390004,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020503,
      "2": 110020504,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020503,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10430301": {
    "name": "Johanna",
    "chara_id": 10430301,
    "story_id": 110023011,
    "rarity": 3,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 26,
    "lvl1_health": 57,
    "lvl1_attack": 32,
    "lvl2_health": 66,
    "lvl2_attack": 37,
    "max_health": 468,
    "max_attack": 265,
    "weapon_type": 4,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3013,
    "limit_break_id": 1030103,
    "base_id": 110023,
    "alt_id": 1,
    "coability": {
      "1": 101030001,
      "2": 101030003,
      "3": 101030005,
      "4": 101030007,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000321,
      "2": 400000321,
      "3": 400000322,
      "4": 400000322,
      "5": 400000323
    },
    "ability_1": {
      "1": 210000803,
      "2": 210000804,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020303,
      "2": 110020304,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020103,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10430401": {
    "name": "Linus",
    "chara_id": 10430401,
    "story_id": 110033011,
    "rarity": 3,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 26,
    "lvl1_health": 57,
    "lvl1_attack": 32,
    "lvl2_health": 66,
    "lvl2_attack": 37,
    "max_health": 469,
    "max_attack": 264,
    "weapon_type": 4,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3014,
    "limit_break_id": 1030104,
    "base_id": 110033,
    "alt_id": 1,
    "coability": {
      "1": 101030001,
      "2": 101030003,
      "3": 101030005,
      "4": 101030007,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000448,
      "2": 400000448,
      "3": 400000449,
      "4": 400000449,
      "5": 400000450
    },
    "ability_1": {
      "1": 210000203,
      "2": 210000204,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020703,
      "2": 110020704,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020703,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10430501": {
    "name": "Erik",
    "chara_id": 10430501,
    "story_id": 110045011,
    "rarity": 3,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 41,
    "base_attack": 29,
    "lvl1_health": 51,
    "lvl1_attack": 35,
    "lvl2_health": 59,
    "lvl2_attack": 41,
    "max_health": 421,
    "max_attack": 294,
    "weapon_type": 4,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3015,
    "limit_break_id": 1030105,
    "base_id": 110045,
    "alt_id": 1,
    "coability": {
      "1": 101030001,
      "2": 101030003,
      "3": 101030005,
      "4": 101030007,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000605,
      "2": 400000605,
      "3": 400000606,
      "4": 400000606,
      "5": 400000607
    },
    "ability_1": {
      "1": 110070003,
      "2": 110070004,
      "3": 908,
      "4": 0
    },
    "ability_2": {
      "1": 110020503,
      "2": 110020504,
      "3": 906,
      "4": 0
    },
    "ability_3": {
      "1": 110020503,
      "2": 110020504,
      "3": 0,
      "4": 0
    }
  },
  "10440101": {
    "name": "Vanessa",
    "chara_id": 10440101,
    "story_id": 110007011,
    "rarity": 4,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 42,
    "base_attack": 29,
    "lvl1_health": 52,
    "lvl1_attack": 36,
    "lvl2_health": 61,
    "lvl2_attack": 42,
    "max_health": 431,
    "max_attack": 300,
    "weapon_type": 4,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4011,
    "limit_break_id": 1040101,
    "base_id": 110007,
    "alt_id": 1,
    "coability": {
      "1": 101030003,
      "2": 101030004,
      "3": 101030005,
      "4": 101030007,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000123,
      "2": 400000123,
      "3": 400000125,
      "4": 400000125,
      "5": 400000127
    },
    "ability_1": {
      "1": 110070004,
      "2": 110070005,
      "3": 1259,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 210001304,
      "2": 746,
      "3": 0,
      "4": 0
    }
  },
  "10440102": {
    "name": "Yue",
    "chara_id": 10440102,
    "story_id": 110056011,
    "rarity": 4,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 46,
    "base_attack": 26,
    "lvl1_health": 58,
    "lvl1_attack": 33,
    "lvl2_health": 67,
    "lvl2_attack": 38,
    "max_health": 476,
    "max_attack": 271,
    "weapon_type": 4,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4011,
    "limit_break_id": 1040101,
    "base_id": 110056,
    "alt_id": 1,
    "coability": {
      "1": 101030003,
      "2": 101030004,
      "3": 101030005,
      "4": 101030007,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000013,
      "2": 400000013,
      "3": 400000015,
      "4": 400000015,
      "5": 400000017
    },
    "ability_1": {
      "1": 210001704,
      "2": 210001705,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110100004,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10440201": {
    "name": "Karina",
    "chara_id": 10440201,
    "story_id": 110018011,
    "rarity": 4,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 26,
    "lvl1_health": 58,
    "lvl1_attack": 32,
    "lvl2_health": 67,
    "lvl2_attack": 38,
    "max_health": 478,
    "max_attack": 270,
    "weapon_type": 4,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4012,
    "limit_break_id": 1040102,
    "base_id": 110018,
    "alt_id": 1,
    "coability": {
      "1": 101030003,
      "2": 101030004,
      "3": 101030005,
      "4": 101030007,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000151,
      "2": 400000151,
      "3": 400000153,
      "4": 400000153,
      "5": 400000155
    },
    "ability_1": {
      "1": 210001102,
      "2": 210001103,
      "3": 821,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 110120002,
      "2": 721,
      "3": 0,
      "4": 0
    }
  },
  "10440301": {
    "name": "Ranzal",
    "chara_id": 10440301,
    "story_id": 100003011,
    "rarity": 4,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 26,
    "lvl1_health": 57,
    "lvl1_attack": 32,
    "lvl2_health": 66,
    "lvl2_attack": 37,
    "max_health": 468,
    "max_attack": 265,
    "weapon_type": 4,
    "mana_circle_name": "MC_0402",
    "mana_piece_id": 4023,
    "limit_break_id": 1040203,
    "base_id": 100003,
    "alt_id": 1,
    "coability": {
      "1": 101030003,
      "2": 101030004,
      "3": 101030005,
      "4": 101030007,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000720,
      "2": 400000720,
      "3": 400000721,
      "4": 400000721,
      "5": 400000722
    },
    "ability_1": {
      "1": 210000804,
      "2": 210000805,
      "3": 686,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 838,
      "4": 0
    },
    "ability_3": {
      "1": 210001704,
      "2": 972,
      "3": 0,
      "4": 0
    }
  },
  "10440401": {
    "name": "Summer Luca",
    "chara_id": 10440401,
    "story_id": 100006031,
    "rarity": 4,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 42,
    "base_attack": 29,
    "lvl1_health": 52,
    "lvl1_attack": 36,
    "lvl2_health": 61,
    "lvl2_attack": 42,
    "max_health": 433,
    "max_attack": 298,
    "weapon_type": 4,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4014,
    "limit_break_id": 1040104,
    "base_id": 100006,
    "alt_id": 3,
    "coability": {
      "1": 101030003,
      "2": 101030004,
      "3": 101030005,
      "4": 101030007,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000530,
      "2": 400000530,
      "3": 400000532,
      "4": 400000532,
      "5": 400000534
    },
    "ability_1": {
      "1": 210000104,
      "2": 210000105,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 382,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10440501": {
    "name": "Sazanka",
    "chara_id": 10440501,
    "story_id": 110311011,
    "rarity": 4,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 33,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 481,
    "max_attack": 275,
    "weapon_type": 4,
    "mana_circle_name": "MC_0406",
    "mana_piece_id": 4065,
    "limit_break_id": 1040305,
    "base_id": 110311,
    "alt_id": 1,
    "coability": {
      "1": 101030003,
      "2": 101030004,
      "3": 101030005,
      "4": 101030007,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000670,
      "2": 400000670,
      "3": 400000672,
      "4": 400000672,
      "5": 400000674
    },
    "ability_1": {
      "1": 110370004,
      "2": 110370005,
      "3": 2550,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 682,
      "4": 0
    },
    "ability_3": {
      "1": 110391004,
      "2": 2551,
      "3": 0,
      "4": 0
    }
  },
  "10450101": {
    "name": "Ramona",
    "chara_id": 10450101,
    "story_id": 110263011,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 44,
    "max_health": 445,
    "max_attack": 310,
    "weapon_type": 4,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 110263,
    "alt_id": 1,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000123,
      "2": 400000124,
      "3": 400000125,
      "4": 400000126,
      "5": 400000128
    },
    "ability_1": {
      "1": 309,
      "2": 310,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210000605,
      "2": 210000606,
      "3": 0,
      "4": 0
    }
  },
  "10450102": {
    "name": "Halloween Mym",
    "chara_id": 10450102,
    "story_id": 100010071,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 46,
    "base_attack": 29,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 66,
    "lvl2_attack": 41,
    "max_health": 468,
    "max_attack": 294,
    "weapon_type": 4,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5021,
    "limit_break_id": 1050101,
    "base_id": 100010,
    "alt_id": 7,
    "coability": {
      "1": 126000004,
      "2": 126000005,
      "3": 126000006,
      "4": 126000007,
      "5": 126000008
    },
    "chain_ability": {
      "1": 400000001,
      "2": 400000002,
      "3": 400000003,
      "4": 400000004,
      "5": 400000006
    },
    "ability_1": {
      "1": 452,
      "2": 453,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 454,
      "2": 455,
      "3": 0,
      "4": 0
    }
  },
  "10450103": {
    "name": "Child Ranzal",
    "chara_id": 10450103,
    "story_id": 100003101,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 44,
    "max_health": 445,
    "max_attack": 310,
    "weapon_type": 4,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 100003,
    "alt_id": 10,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000907,
      "2": 400000908,
      "3": 400000909,
      "4": 400000910,
      "5": 400000912
    },
    "ability_1": {
      "1": 1839,
      "2": 1840,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1861,
      "2": 1862,
      "3": 0,
      "4": 0
    }
  },
  "10450104": {
    "name": "Gala Gatov",
    "chara_id": 10450104,
    "story_id": 100042021,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 44,
    "max_health": 445,
    "max_attack": 310,
    "weapon_type": 4,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5041,
    "limit_break_id": 1050101,
    "base_id": 100042,
    "alt_id": 2,
    "coability": {
      "1": 101060005,
      "2": 101060006,
      "3": 101060007,
      "4": 101060008,
      "5": 101060010
    },
    "chain_ability": {
      "1": 400000995,
      "2": 400000996,
      "3": 400000997,
      "4": 400000998,
      "5": 400000999
    },
    "ability_1": {
      "1": 2429,
      "2": 2430,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 2435,
      "2": 2436,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2433,
      "2": 2434,
      "3": 0,
      "4": 0
    }
  },
  "10450201": {
    "name": "Summer Julietta",
    "chara_id": 10450201,
    "story_id": 110042021,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 446,
    "max_attack": 308,
    "weapon_type": 4,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 110042,
    "alt_id": 2,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000151,
      "2": 400000152,
      "3": 400000153,
      "4": 400000154,
      "5": 400000156
    },
    "ability_1": {
      "1": 358,
      "2": 359,
      "3": 1079,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 309,
      "2": 310,
      "3": 1080,
      "4": 0
    }
  },
  "10450202": {
    "name": "Gala Elisanne",
    "chara_id": 10450202,
    "story_id": 100002131,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 446,
    "max_attack": 308,
    "weapon_type": 4,
    "mana_circle_name": "MC_0509",
    "mana_piece_id": 5082,
    "limit_break_id": 1050112,
    "base_id": 100002,
    "alt_id": 13,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000263,
      "2": 400000264,
      "3": 400000265,
      "4": 400000266,
      "5": 400000711
    },
    "ability_1": {
      "1": 482,
      "2": 483,
      "3": 48360,
      "4": 0
    },
    "ability_2": {
      "1": 486,
      "2": 487,
      "3": 48760,
      "4": 0
    },
    "ability_3": {
      "1": 309,
      "2": 310,
      "3": 1080,
      "4": 0
    }
  },
  "10450203": {
    "name": "Lazry",
    "chara_id": 10450203,
    "story_id": 110355011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 0,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 446,
    "max_attack": 308,
    "weapon_type": 4,
    "mana_circle_name": "MC_0510",
    "mana_piece_id": 5082,
    "limit_break_id": 1050202,
    "base_id": 110355,
    "alt_id": 1,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000189,
      "2": 400000190,
      "3": 400000191,
      "4": 400000192,
      "5": 400000194
    },
    "ability_1": {
      "1": 855,
      "2": 856,
      "3": 2272,
      "4": 0
    },
    "ability_2": {
      "1": 110020204,
      "2": 110020206,
      "3": 803,
      "4": 0
    },
    "ability_3": {
      "1": 210002005,
      "2": 210002006,
      "3": 2273,
      "4": 0
    }
  },
  "10450204": {
    "name": "Finni",
    "chara_id": 10450204,
    "story_id": 110383011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 446,
    "max_attack": 308,
    "weapon_type": 4,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5022,
    "limit_break_id": 1050102,
    "base_id": 110383,
    "alt_id": 1,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000151,
      "2": 400000152,
      "3": 400000153,
      "4": 400000154,
      "5": 400000156
    },
    "ability_1": {
      "1": 1748,
      "2": 1749,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1819,
      "2": 1820,
      "3": 0,
      "4": 0
    }
  },
  "10450301": {
    "name": "Lin You",
    "chara_id": 10450301,
    "story_id": 110268011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 0,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 446,
    "max_attack": 309,
    "weapon_type": 4,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110268,
    "alt_id": 1,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000297,
      "2": 400000298,
      "3": 400000299,
      "4": 400000300,
      "5": 400000302
    },
    "ability_1": {
      "1": 210001605,
      "2": 210001606,
      "3": 848,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 838,
      "4": 0
    },
    "ability_3": {
      "1": 110010405,
      "2": 110010406,
      "3": 851,
      "4": 0
    }
  },
  "10450302": {
    "name": "Valentine's Melody",
    "chara_id": 10450302,
    "story_id": 110027021,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 46,
    "base_attack": 29,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 66,
    "lvl2_attack": 41,
    "max_health": 469,
    "max_attack": 294,
    "weapon_type": 4,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110027,
    "alt_id": 2,
    "coability": {
      "1": 126000004,
      "2": 126000005,
      "3": 126000006,
      "4": 126000007,
      "5": 126000008
    },
    "chain_ability": {
      "1": 400000392,
      "2": 400000393,
      "3": 400000394,
      "4": 400000395,
      "5": 400000397
    },
    "ability_1": {
      "1": 772,
      "2": 773,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110160105,
      "2": 110160106,
      "3": 0,
      "4": 0
    }
  },
  "10450303": {
    "name": "Summer Amane",
    "chara_id": 10450303,
    "story_id": 110041021,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 43,
    "base_attack": 27,
    "lvl1_health": 43,
    "lvl1_attack": 27,
    "lvl2_health": 63,
    "lvl2_attack": 39,
    "max_health": 446,
    "max_attack": 279,
    "weapon_type": 4,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110041,
    "alt_id": 2,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000251,
      "2": 400000251,
      "3": 400000251,
      "4": 400000251,
      "5": 400000251
    },
    "ability_1": {
      "1": 400000253,
      "2": 400000253,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 400000252,
      "2": 400000252,
      "3": 0,
      "4": 0
    }
  },
  "10450304": {
    "name": "Kimono Luca",
    "chara_id": 10450304,
    "story_id": 100006111,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 29,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 66,
    "lvl2_attack": 41,
    "max_health": 469,
    "max_attack": 294,
    "weapon_type": 4,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5043,
    "limit_break_id": 1050103,
    "base_id": 100006,
    "alt_id": 11,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000285,
      "2": 400000286,
      "3": 400000287,
      "4": 400000288,
      "5": 400000290
    },
    "ability_1": {
      "1": 1606,
      "2": 1607,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1604,
      "2": 1605,
      "3": 0,
      "4": 0
    }
  },
  "10450305": {
    "name": "Shingen",
    "chara_id": 10450305,
    "story_id": 110401011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 48,
    "base_attack": 27,
    "lvl1_health": 60,
    "lvl1_attack": 34,
    "lvl2_health": 69,
    "lvl2_attack": 39,
    "max_health": 492,
    "max_attack": 279,
    "weapon_type": 4,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5043,
    "limit_break_id": 1050103,
    "base_id": 110401,
    "alt_id": 1,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400001016,
      "2": 400001017,
      "3": 400001018,
      "4": 400001019,
      "5": 400001020
    },
    "ability_1": {
      "1": 2522,
      "2": 2523,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2561,
      "2": 2562,
      "3": 0,
      "4": 0
    }
  },
  "10450401": {
    "name": "Julietta",
    "chara_id": 10450401,
    "story_id": 110042011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 48,
    "base_attack": 27,
    "lvl1_health": 60,
    "lvl1_attack": 34,
    "lvl2_health": 70,
    "lvl2_attack": 39,
    "max_health": 494,
    "max_attack": 278,
    "weapon_type": 4,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110042,
    "alt_id": 1,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000433,
      "2": 400000434,
      "3": 400000435,
      "4": 400000436,
      "5": 400000438
    },
    "ability_1": {
      "1": 210000805,
      "2": 210000806,
      "3": 1176,
      "4": 0
    },
    "ability_2": {
      "1": 110020104,
      "2": 110020106,
      "3": 1179,
      "4": 0
    },
    "ability_3": {
      "1": 210001203,
      "2": 210001204,
      "3": 210001205,
      "4": 0
    }
  },
  "10450402": {
    "name": "Dragonyule Malora",
    "chara_id": 10450402,
    "story_id": 110036031,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 447,
    "max_attack": 308,
    "weapon_type": 4,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110036,
    "alt_id": 3,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000518,
      "2": 400000519,
      "3": 400000520,
      "4": 400000521,
      "5": 400000523
    },
    "ability_1": {
      "1": 110350005,
      "2": 110350006,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 620,
      "2": 621,
      "3": 0,
      "4": 0
    }
  },
  "10450403": {
    "name": "Zhu Bajie",
    "chara_id": 10450403,
    "story_id": 110322011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 447,
    "max_attack": 308,
    "weapon_type": 4,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5044,
    "limit_break_id": 1050104,
    "base_id": 110322,
    "alt_id": 1,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000484,
      "2": 400000485,
      "3": 400000486,
      "4": 400000487,
      "5": 400000489
    },
    "ability_1": {
      "1": 999,
      "2": 1000,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 441,
      "2": 442,
      "3": 0,
      "4": 0
    }
  },
  "10450404": {
    "name": "Sophie",
    "chara_id": 10450404,
    "story_id": 110380011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 41,
    "base_attack": 28,
    "lvl1_health": 41,
    "lvl1_attack": 28,
    "lvl2_health": 60,
    "lvl2_attack": 41,
    "max_health": 425,
    "max_attack": 292,
    "weapon_type": 4,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5044,
    "limit_break_id": 1050104,
    "base_id": 110380,
    "alt_id": 1,
    "coability": {
      "1": 157570409,
      "2": 157570410,
      "3": 157570411,
      "4": 157570412,
      "5": 157570413
    },
    "chain_ability": {
      "1": 400000864,
      "2": 400000865,
      "3": 400000866,
      "4": 400000867,
      "5": 400000868
    },
    "ability_1": {
      "1": 1667,
      "2": 1668,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210001605,
      "2": 210001606,
      "3": 0,
      "4": 0
    }
  },
  "10450405": {
    "name": "Gala Audric",
    "chara_id": 10450405,
    "story_id": 110334021,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 447,
    "max_attack": 308,
    "weapon_type": 4,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5024,
    "limit_break_id": 1050104,
    "base_id": 110334,
    "alt_id": 2,
    "coability": {
      "1": 126000004,
      "2": 126000005,
      "3": 126000006,
      "4": 126000007,
      "5": 126000008
    },
    "chain_ability": {
      "1": 400000501,
      "2": 400000502,
      "3": 400000503,
      "4": 400000504,
      "5": 400000506
    },
    "ability_1": {
      "1": 2149,
      "2": 2150,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 2152,
      "2": 2153,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110370005,
      "2": 110370006,
      "3": 0,
      "4": 0
    }
  },
  "10450406": {
    "name": "Valyx",
    "chara_id": 10450406,
    "story_id": 100016031,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 447,
    "max_attack": 308,
    "weapon_type": 4,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5024,
    "limit_break_id": 1050104,
    "base_id": 100016,
    "alt_id": 3,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400001042,
      "2": 400001043,
      "3": 400001044,
      "4": 400001045,
      "5": 400001046
    },
    "ability_1": {
      "1": 2659,
      "2": 2664,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 2670,
      "2": 2671,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2672,
      "2": 2673,
      "3": 0,
      "4": 0
    }
  },
  "10450501": {
    "name": "Curran",
    "chara_id": 10450501,
    "story_id": 110281011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 62,
    "lvl2_attack": 44,
    "max_health": 443,
    "max_attack": 311,
    "weapon_type": 4,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5015,
    "limit_break_id": 1050105,
    "base_id": 110281,
    "alt_id": 1,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000628,
      "2": 400000629,
      "3": 400000630,
      "4": 400000631,
      "5": 400000633
    },
    "ability_1": {
      "1": 110350005,
      "2": 110350006,
      "3": 711,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 682,
      "4": 0
    },
    "ability_3": {
      "1": 210001305,
      "2": 210001306,
      "3": 746,
      "4": 0
    }
  },
  "10450502": {
    "name": "Summer Patia",
    "chara_id": 10450502,
    "story_id": 110335021,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 62,
    "lvl2_attack": 44,
    "max_health": 443,
    "max_attack": 311,
    "weapon_type": 4,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5045,
    "limit_break_id": 1050105,
    "base_id": 110335,
    "alt_id": 2,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000628,
      "2": 400000629,
      "3": 400000630,
      "4": 400000631,
      "5": 400000633
    },
    "ability_1": {
      "1": 1088,
      "2": 1089,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1035,
      "2": 1036,
      "3": 0,
      "4": 0
    }
  },
  "10450503": {
    "name": "Dragonyule Victor",
    "chara_id": 10450503,
    "story_id": 110307021,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 62,
    "lvl2_attack": 44,
    "max_health": 443,
    "max_attack": 311,
    "weapon_type": 4,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5015,
    "limit_break_id": 1050105,
    "base_id": 110307,
    "alt_id": 2,
    "coability": {
      "1": 101030005,
      "2": 101030006,
      "3": 101030007,
      "4": 101030008,
      "5": 101030010
    },
    "chain_ability": {
      "1": 400000829,
      "2": 400000830,
      "3": 400000831,
      "4": 400000832,
      "5": 400000833
    },
    "ability_1": {
      "1": 1536,
      "2": 1537,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1538,
      "2": 1539,
      "3": 0,
      "4": 0
    }
  },
  "10530101": {
    "name": "Alain",
    "chara_id": 10530101,
    "story_id": 110001011,
    "rarity": 3,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 25,
    "lvl1_health": 57,
    "lvl1_attack": 31,
    "lvl2_health": 66,
    "lvl2_attack": 37,
    "max_health": 470,
    "max_attack": 262,
    "weapon_type": 5,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3011,
    "limit_break_id": 1030101,
    "base_id": 110001,
    "alt_id": 1,
    "coability": {
      "1": 101010001,
      "2": 101010003,
      "3": 101010005,
      "4": 101010007,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000013,
      "2": 400000013,
      "3": 400000014,
      "4": 400000014,
      "5": 400000015
    },
    "ability_1": {
      "1": 210001703,
      "2": 210001704,
      "3": 714,
      "4": 0
    },
    "ability_2": {
      "1": 110020603,
      "2": 110020604,
      "3": 676,
      "4": 0
    },
    "ability_3": {
      "1": 110020603,
      "2": 110020604,
      "3": 0,
      "4": 0
    }
  },
  "10530201": {
    "name": "Cibella",
    "chara_id": 10530201,
    "story_id": 110014011,
    "rarity": 3,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 25,
    "lvl1_health": 57,
    "lvl1_attack": 31,
    "lvl2_health": 67,
    "lvl2_attack": 37,
    "max_health": 473,
    "max_attack": 262,
    "weapon_type": 5,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3012,
    "limit_break_id": 1030102,
    "base_id": 110014,
    "alt_id": 1,
    "coability": {
      "1": 101010001,
      "2": 101010003,
      "3": 101010005,
      "4": 101010007,
      "5": 101010010
    },
    "chain_ability": {
      "1": 110130003,
      "2": 110130003,
      "3": 110130003,
      "4": 110130003,
      "5": 110130003
    },
    "ability_1": {
      "1": 210001201,
      "2": 210001201,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020606,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 310001504,
      "2": 310001504,
      "3": 0,
      "4": 0
    }
  },
  "10530202": {
    "name": "Jakob",
    "chara_id": 10530202,
    "story_id": 110058011,
    "rarity": 3,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 46,
    "base_attack": 25,
    "lvl1_health": 57,
    "lvl1_attack": 31,
    "lvl2_health": 67,
    "lvl2_attack": 37,
    "max_health": 473,
    "max_attack": 262,
    "weapon_type": 5,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3012,
    "limit_break_id": 1030102,
    "base_id": 110058,
    "alt_id": 1,
    "coability": {
      "1": 101010001,
      "2": 101010003,
      "3": 101010005,
      "4": 101010007,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000189,
      "2": 400000189,
      "3": 400000190,
      "4": 400000190,
      "5": 400000191
    },
    "ability_1": {
      "1": 110120001,
      "2": 110120002,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020203,
      "2": 110020204,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020203,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10530401": {
    "name": "Malka",
    "chara_id": 10530401,
    "story_id": 110034011,
    "rarity": 3,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 27,
    "lvl1_health": 54,
    "lvl1_attack": 33,
    "lvl2_health": 64,
    "lvl2_attack": 39,
    "max_health": 451,
    "max_attack": 275,
    "weapon_type": 5,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3014,
    "limit_break_id": 1030104,
    "base_id": 110034,
    "alt_id": 1,
    "coability": {
      "1": 101010001,
      "2": 101010003,
      "3": 101010005,
      "4": 101010007,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000501,
      "2": 400000501,
      "3": 400000502,
      "4": 400000502,
      "5": 400000503
    },
    "ability_1": {
      "1": 210001803,
      "2": 210001804,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020103,
      "2": 110020104,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020103,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10530501": {
    "name": "Zace",
    "chara_id": 10530501,
    "story_id": 110254011,
    "rarity": 3,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 41,
    "base_attack": 28,
    "lvl1_health": 51,
    "lvl1_attack": 35,
    "lvl2_health": 60,
    "lvl2_attack": 41,
    "max_health": 425,
    "max_attack": 291,
    "weapon_type": 5,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3015,
    "limit_break_id": 1030105,
    "base_id": 110254,
    "alt_id": 1,
    "coability": {
      "1": 101010001,
      "2": 101010003,
      "3": 101010005,
      "4": 101010007,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000605,
      "2": 400000605,
      "3": 400000606,
      "4": 400000606,
      "5": 400000607
    },
    "ability_1": {
      "1": 110060003,
      "2": 110060004,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020403,
      "2": 110020404,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020403,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10540102": {
    "name": "Xuan Zang",
    "chara_id": 10540102,
    "story_id": 110299011,
    "rarity": 4,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 44,
    "base_attack": 27,
    "lvl1_health": 44,
    "lvl1_attack": 27,
    "lvl2_health": 63,
    "lvl2_attack": 39,
    "max_health": 448,
    "max_attack": 276,
    "weapon_type": 5,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4011,
    "limit_break_id": 1040101,
    "base_id": 110299,
    "alt_id": 1,
    "coability": {
      "1": 101010003,
      "2": 101010004,
      "3": 101010005,
      "4": 101010007,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000123,
      "2": 400000123,
      "3": 400000125,
      "4": 400000125,
      "5": 400000127
    },
    "ability_1": {
      "1": 110050302,
      "2": 110050303,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210001606,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10540103": {
    "name": "Emma",
    "chara_id": 10540103,
    "story_id": 110260011,
    "rarity": 4,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 27,
    "lvl1_health": 55,
    "lvl1_attack": 34,
    "lvl2_health": 65,
    "lvl2_attack": 40,
    "max_health": 458,
    "max_attack": 282,
    "weapon_type": 5,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4011,
    "limit_break_id": 1040101,
    "base_id": 110260,
    "alt_id": 1,
    "coability": {
      "1": 101010003,
      "2": 101010004,
      "3": 101010005,
      "4": 101010007,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000013,
      "2": 400000013,
      "3": 400000015,
      "4": 400000015,
      "5": 400000017
    },
    "ability_1": {
      "1": 110130004,
      "2": 110130005,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 410,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10540201": {
    "name": "Elisanne",
    "chara_id": 10540201,
    "story_id": 100002011,
    "rarity": 4,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 27,
    "lvl1_health": 63,
    "lvl1_attack": 38,
    "lvl2_health": 72,
    "lvl2_attack": 44,
    "max_health": 451,
    "max_attack": 276,
    "weapon_type": 5,
    "mana_circle_name": "MC_0402",
    "mana_piece_id": 4022,
    "limit_break_id": 1040202,
    "base_id": 100002,
    "alt_id": 1,
    "coability": {
      "1": 101010003,
      "2": 101010004,
      "3": 101010005,
      "4": 101010007,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000720,
      "2": 400000720,
      "3": 400000721,
      "4": 400000721,
      "5": 400000722
    },
    "ability_1": {
      "1": 110130004,
      "2": 110130005,
      "3": 759,
      "4": 0
    },
    "ability_2": {
      "1": 110020203,
      "2": 110020204,
      "3": 803,
      "4": 0
    },
    "ability_3": {
      "1": 110020603,
      "2": 110020606,
      "3": 0,
      "4": 0
    }
  },
  "10540202": {
    "name": "Gauld",
    "chara_id": 10540202,
    "story_id": 110356011,
    "rarity": 4,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 29,
    "lvl1_health": 53,
    "lvl1_attack": 35,
    "lvl2_health": 61,
    "lvl2_attack": 41,
    "max_health": 436,
    "max_attack": 294,
    "weapon_type": 5,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4012,
    "limit_break_id": 1040102,
    "base_id": 110356,
    "alt_id": 1,
    "coability": {
      "1": 101010003,
      "2": 101010004,
      "3": 101010005,
      "4": 101010007,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000189,
      "2": 400000189,
      "3": 400000191,
      "4": 400000191,
      "5": 400000193
    },
    "ability_1": {
      "1": 210000104,
      "2": 210000105,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 880,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10540301": {
    "name": "Aeleen",
    "chara_id": 10540301,
    "story_id": 110029011,
    "rarity": 4,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 45,
    "base_attack": 27,
    "lvl1_health": 55,
    "lvl1_attack": 34,
    "lvl2_health": 65,
    "lvl2_attack": 39,
    "max_health": 459,
    "max_attack": 281,
    "weapon_type": 5,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4013,
    "limit_break_id": 1040103,
    "base_id": 110029,
    "alt_id": 1,
    "coability": {
      "1": 101010003,
      "2": 101010004,
      "3": 101010005,
      "4": 101010007,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000344,
      "2": 400000344,
      "3": 400000346,
      "4": 400000346,
      "5": 400000348
    },
    "ability_1": {
      "1": 110130004,
      "2": 110130005,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210000804,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10540302": {
    "name": "Pia",
    "chara_id": 10540302,
    "story_id": 110302011,
    "rarity": 4,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 47,
    "base_attack": 26,
    "lvl1_health": 58,
    "lvl1_attack": 32,
    "lvl2_health": 68,
    "lvl2_attack": 37,
    "max_health": 482,
    "max_attack": 266,
    "weapon_type": 5,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4013,
    "limit_break_id": 1040103,
    "base_id": 110302,
    "alt_id": 1,
    "coability": {
      "1": 101010003,
      "2": 101010004,
      "3": 101010005,
      "4": 101010007,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000344,
      "2": 400000344,
      "3": 400000346,
      "4": 400000346,
      "5": 400000348
    },
    "ability_1": {
      "1": 210000204,
      "2": 210000205,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210002701,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10540401": {
    "name": "Ryozen",
    "chara_id": 10540401,
    "story_id": 110039011,
    "rarity": 4,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 26,
    "lvl1_health": 58,
    "lvl1_attack": 32,
    "lvl2_health": 68,
    "lvl2_attack": 37,
    "max_health": 484,
    "max_attack": 265,
    "weapon_type": 5,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4014,
    "limit_break_id": 1040104,
    "base_id": 110039,
    "alt_id": 1,
    "coability": {
      "1": 101010003,
      "2": 101010004,
      "3": 101010005,
      "4": 101010007,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000448,
      "2": 400000448,
      "3": 400000450,
      "4": 400000450,
      "5": 400000452
    },
    "ability_1": {
      "1": 210001102,
      "2": 210001103,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110350004,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10540402": {
    "name": "Sha Wujing",
    "chara_id": 10540402,
    "story_id": 110323011,
    "rarity": 4,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 43,
    "base_attack": 28,
    "lvl1_health": 53,
    "lvl1_attack": 35,
    "lvl2_health": 62,
    "lvl2_attack": 41,
    "max_health": 438,
    "max_attack": 293,
    "weapon_type": 5,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4014,
    "limit_break_id": 1040104,
    "base_id": 110323,
    "alt_id": 1,
    "coability": {
      "1": 101010003,
      "2": 101010004,
      "3": 101010005,
      "4": 101010007,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000548,
      "2": 400000548,
      "3": 400000550,
      "4": 400000550,
      "5": 400000552
    },
    "ability_1": {
      "1": 971,
      "2": 981,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 980,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10540501": {
    "name": "Botan",
    "chara_id": 10540501,
    "story_id": 110312011,
    "rarity": 4,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 0,
    "base_health": 46,
    "base_attack": 25,
    "lvl1_health": 46,
    "lvl1_attack": 25,
    "lvl2_health": 66,
    "lvl2_attack": 37,
    "max_health": 470,
    "max_attack": 263,
    "weapon_type": 5,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4015,
    "limit_break_id": 1040105,
    "base_id": 110312,
    "alt_id": 1,
    "coability": {
      "1": 101010003,
      "2": 101010004,
      "3": 101010005,
      "4": 101010007,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000700,
      "2": 400000700,
      "3": 400000702,
      "4": 400000702,
      "5": 400000704
    },
    "ability_1": {
      "1": 110050102,
      "2": 110050103,
      "3": 715,
      "4": 0
    },
    "ability_2": {
      "1": 110020403,
      "2": 110020404,
      "3": 682,
      "4": 0
    },
    "ability_3": {
      "1": 110120002,
      "2": 721,
      "3": 0,
      "4": 0
    }
  },
  "10540502": {
    "name": "Patia",
    "chara_id": 10540502,
    "story_id": 110335011,
    "rarity": 4,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 26,
    "lvl1_health": 58,
    "lvl1_attack": 32,
    "lvl2_health": 68,
    "lvl2_attack": 38,
    "max_health": 480,
    "max_attack": 268,
    "weapon_type": 5,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4015,
    "limit_break_id": 1040105,
    "base_id": 110335,
    "alt_id": 1,
    "coability": {
      "1": 101010003,
      "2": 101010004,
      "3": 101010005,
      "4": 101010007,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000581,
      "2": 400000581,
      "3": 400000583,
      "4": 400000583,
      "5": 400000585
    },
    "ability_1": {
      "1": 110130004,
      "2": 110130005,
      "3": 759,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 682,
      "4": 0
    },
    "ability_3": {
      "1": 313,
      "2": 758,
      "3": 0,
      "4": 0
    }
  },
  "10550101": {
    "name": "Gala Mym",
    "chara_id": 10550101,
    "story_id": 100010041,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 448,
    "max_attack": 305,
    "weapon_type": 5,
    "mana_circle_name": "MC_0513",
    "mana_piece_id": 5091,
    "limit_break_id": 1050201,
    "base_id": 100010,
    "alt_id": 4,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000007,
      "2": 400000008,
      "3": 400000009,
      "4": 400000010,
      "5": 400000012
    },
    "ability_1": {
      "1": 237,
      "2": 238,
      "3": 2696,
      "4": 0
    },
    "ability_2": {
      "1": 233,
      "2": 234,
      "3": 2693,
      "4": 0
    },
    "ability_3": {
      "1": 110010805,
      "2": 110010806,
      "3": 756,
      "4": 0
    }
  },
  "10550102": {
    "name": "Nadine",
    "chara_id": 10550102,
    "story_id": 110357011,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 448,
    "max_attack": 305,
    "weapon_type": 5,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 110357,
    "alt_id": 1,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000035,
      "2": 400000036,
      "3": 400000037,
      "4": 400000038,
      "5": 400000040
    },
    "ability_1": {
      "1": 288,
      "2": 289,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210002603,
      "2": 210002604,
      "3": 0,
      "4": 0
    }
  },
  "10550103": {
    "name": "Kimono Elisanne",
    "chara_id": 10550103,
    "story_id": 100002151,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 46,
    "base_attack": 28,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 67,
    "lvl2_attack": 41,
    "max_health": 473,
    "max_attack": 291,
    "weapon_type": 5,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 100002,
    "alt_id": 15,
    "coability": {
      "1": 166000004,
      "2": 166000005,
      "3": 166000006,
      "4": 166000007,
      "5": 166000008
    },
    "chain_ability": {
      "1": 400000834,
      "2": 400000835,
      "3": 400000836,
      "4": 400000837,
      "5": 400000838
    },
    "ability_1": {
      "1": 1596,
      "2": 1600,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110120003,
      "2": 110120004,
      "3": 0,
      "4": 0
    }
  },
  "10550104": {
    "name": "Panther",
    "chara_id": 10550104,
    "story_id": 110378011,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 448,
    "max_attack": 305,
    "weapon_type": 5,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5041,
    "limit_break_id": 1050101,
    "base_id": 110378,
    "alt_id": 1,
    "coability": {
      "1": 103150001,
      "2": 103150002,
      "3": 103150003,
      "4": 103150004,
      "5": 103150005
    },
    "chain_ability": {
      "1": 400000813,
      "2": 400000814,
      "3": 400000815,
      "4": 400000816,
      "5": 400000817
    },
    "ability_1": {
      "1": 1665,
      "2": 1666,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1723,
      "2": 1724,
      "3": 0,
      "4": 0
    }
  },
  "10550201": {
    "name": "Xainfried",
    "chara_id": 10550201,
    "story_id": 110021011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 28,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 67,
    "lvl2_attack": 41,
    "max_health": 474,
    "max_attack": 290,
    "weapon_type": 5,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 110021,
    "alt_id": 1,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000212,
      "2": 400000213,
      "3": 400000214,
      "4": 400000215,
      "5": 400000217
    },
    "ability_1": {
      "1": 110140302,
      "2": 110140303,
      "3": 700,
      "4": 0
    },
    "ability_2": {
      "1": 110020204,
      "2": 110020206,
      "3": 803,
      "4": 0
    },
    "ability_3": {
      "1": 110010805,
      "2": 110010806,
      "3": 756,
      "4": 0
    }
  },
  "10550203": {
    "name": "Fjorm",
    "chara_id": 10550203,
    "story_id": 110328011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 450,
    "max_attack": 304,
    "weapon_type": 5,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 110328,
    "alt_id": 1,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000189,
      "2": 400000190,
      "3": 400000191,
      "4": 400000192,
      "5": 400000194
    },
    "ability_1": {
      "1": 188,
      "2": 189,
      "3": 929,
      "4": 0
    },
    "ability_2": {
      "1": 110020204,
      "2": 110020206,
      "3": 803,
      "4": 0
    },
    "ability_3": {
      "1": 110120003,
      "2": 110120004,
      "3": 721,
      "4": 0
    }
  },
  "10550204": {
    "name": "Catherine",
    "chara_id": 10550204,
    "story_id": 110364011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 450,
    "max_attack": 304,
    "weapon_type": 5,
    "mana_circle_name": "MC_0513",
    "mana_piece_id": 5092,
    "limit_break_id": 1050202,
    "base_id": 110364,
    "alt_id": 1,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000239,
      "2": 400000240,
      "3": 400000241,
      "4": 400000242,
      "5": 400000244
    },
    "ability_1": {
      "1": 1019,
      "2": 1020,
      "3": 2549,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 110060005,
      "2": 110060006,
      "3": 717,
      "4": 0
    }
  },
  "10550205": {
    "name": "Faeblessed Tobias",
    "chara_id": 10550205,
    "story_id": 110352031,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 450,
    "max_attack": 304,
    "weapon_type": 5,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 110352,
    "alt_id": 3,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000227,
      "2": 400000228,
      "3": 400000229,
      "4": 400000230,
      "5": 400000232
    },
    "ability_1": {
      "1": 310000505,
      "2": 310000506,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110350005,
      "2": 110350006,
      "3": 0,
      "4": 0
    }
  },
  "10550301": {
    "name": "Sylas",
    "chara_id": 10550301,
    "story_id": 110318011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 28,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 67,
    "lvl2_attack": 41,
    "max_health": 473,
    "max_attack": 290,
    "weapon_type": 5,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110318,
    "alt_id": 1,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000321,
      "2": 400000322,
      "3": 400000323,
      "4": 400000324,
      "5": 400000326
    },
    "ability_1": {
      "1": 210001203,
      "2": 210001204,
      "3": 210001205,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 840,
      "4": 0
    },
    "ability_3": {
      "1": 210000105,
      "2": 210000106,
      "3": 719,
      "4": 0
    }
  },
  "10550302": {
    "name": "Kirsty",
    "chara_id": 10550302,
    "story_id": 110353011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 449,
    "max_attack": 305,
    "weapon_type": 5,
    "mana_circle_name": "MC_0510",
    "mana_piece_id": 5083,
    "limit_break_id": 1050203,
    "base_id": 110353,
    "alt_id": 1,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000380,
      "2": 400000381,
      "3": 400000382,
      "4": 400000383,
      "5": 400000385
    },
    "ability_1": {
      "1": 640,
      "2": 641,
      "3": 2269,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 838,
      "4": 0
    },
    "ability_3": {
      "1": 110160105,
      "2": 110160106,
      "3": 2271,
      "4": 0
    }
  },
  "10550303": {
    "name": "Halloween Melsa",
    "chara_id": 10550303,
    "story_id": 110270021,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 46,
    "base_attack": 28,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 67,
    "lvl2_attack": 41,
    "max_health": 473,
    "max_attack": 290,
    "weapon_type": 5,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110270,
    "alt_id": 2,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000368,
      "2": 400000369,
      "3": 400000370,
      "4": 400000371,
      "5": 400000373
    },
    "ability_1": {
      "1": 1291,
      "2": 1292,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 772,
      "2": 773,
      "3": 0,
      "4": 0
    }
  },
  "10550304": {
    "name": "Grimnir",
    "chara_id": 10550304,
    "story_id": 110285011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 449,
    "max_attack": 305,
    "weapon_type": 5,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110285,
    "alt_id": 1,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000789,
      "2": 400000790,
      "3": 400000791,
      "4": 400000792,
      "5": 400000794
    },
    "ability_1": {
      "1": 1907,
      "2": 1914,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1921,
      "2": 1922,
      "3": 0,
      "4": 0
    }
  },
  "10550305": {
    "name": "Izumo",
    "chara_id": 10550305,
    "story_id": 110403011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 44,
    "base_attack": 27,
    "lvl1_health": 44,
    "lvl1_attack": 27,
    "lvl2_health": 63,
    "lvl2_attack": 39,
    "max_health": 449,
    "max_attack": 276,
    "weapon_type": 5,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5023,
    "limit_break_id": 1050103,
    "base_id": 110403,
    "alt_id": 1,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 514,
      "2": 514,
      "3": 514,
      "4": 514,
      "5": 514
    },
    "ability_1": {
      "1": 2511,
      "2": 2512,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 671,
      "2": 671,
      "3": 0,
      "4": 0
    }
  },
  "10550306": {
    "name": "Phares",
    "chara_id": 10550306,
    "story_id": 100014031,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 46,
    "base_attack": 28,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 67,
    "lvl2_attack": 41,
    "max_health": 473,
    "max_attack": 290,
    "weapon_type": 5,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5043,
    "limit_break_id": 1050103,
    "base_id": 100014,
    "alt_id": 3,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400001026,
      "2": 400001027,
      "3": 400001028,
      "4": 400001029,
      "5": 400001030
    },
    "ability_1": {
      "1": 2599,
      "2": 2600,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2607,
      "2": 2608,
      "3": 0,
      "4": 0
    }
  },
  "10550401": {
    "name": "Annelie",
    "chara_id": 10550401,
    "story_id": 110275011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 28,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 67,
    "lvl2_attack": 41,
    "max_health": 475,
    "max_attack": 289,
    "weapon_type": 5,
    "mana_circle_name": "MC_0510",
    "mana_piece_id": 5084,
    "limit_break_id": 1050204,
    "base_id": 110275,
    "alt_id": 1,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000530,
      "2": 400000531,
      "3": 400000532,
      "4": 400000533,
      "5": 400000535
    },
    "ability_1": {
      "1": 210002005,
      "2": 210002006,
      "3": 2508,
      "4": 0
    },
    "ability_2": {
      "1": 110020104,
      "2": 110020106,
      "3": 1179,
      "4": 0
    },
    "ability_3": {
      "1": 210002603,
      "2": 210002604,
      "3": 210002605,
      "4": 0
    }
  },
  "10550402": {
    "name": "Halloween Elisanne",
    "chara_id": 10550402,
    "story_id": 100002021,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 28,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 67,
    "lvl2_attack": 41,
    "max_health": 475,
    "max_attack": 289,
    "weapon_type": 5,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 100002,
    "alt_id": 2,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000460,
      "2": 400000461,
      "3": 400000462,
      "4": 400000463,
      "5": 400000465
    },
    "ability_1": {
      "1": 110060005,
      "2": 110060006,
      "3": 717,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 937,
      "4": 0
    },
    "ability_3": {
      "1": 110370005,
      "2": 110370006,
      "3": 110370007,
      "4": 0
    }
  },
  "10550403": {
    "name": "Hunter Vanessa",
    "chara_id": 10550403,
    "story_id": 110007021,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 37,
    "lvl2_health": 64,
    "lvl2_attack": 43,
    "max_health": 452,
    "max_attack": 304,
    "weapon_type": 5,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5044,
    "limit_break_id": 1050104,
    "base_id": 110007,
    "alt_id": 2,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000524,
      "2": 400000525,
      "3": 400000526,
      "4": 400000527,
      "5": 400000529
    },
    "ability_1": {
      "1": 742,
      "2": 743,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 703,
      "2": 704,
      "3": 0,
      "4": 0
    }
  },
  "10550404": {
    "name": "Sharena",
    "chara_id": 10550404,
    "story_id": 110358011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 49,
    "base_attack": 27,
    "lvl1_health": 60,
    "lvl1_attack": 33,
    "lvl2_health": 70,
    "lvl2_attack": 39,
    "max_health": 498,
    "max_attack": 275,
    "weapon_type": 5,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110358,
    "alt_id": 1,
    "coability": {
      "1": 120040004,
      "2": 120040005,
      "3": 120040006,
      "4": 120040007,
      "5": 120040008
    },
    "chain_ability": {
      "1": 400000518,
      "2": 400000519,
      "3": 400000520,
      "4": 400000521,
      "5": 400000523
    },
    "ability_1": {
      "1": 901,
      "2": 902,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110160405,
      "2": 110160406,
      "3": 0,
      "4": 0
    }
  },
  "10550405": {
    "name": "Ryszarda",
    "chara_id": 10550405,
    "story_id": 110381011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 49,
    "base_attack": 27,
    "lvl1_health": 60,
    "lvl1_attack": 33,
    "lvl2_health": 70,
    "lvl2_attack": 39,
    "max_health": 498,
    "max_attack": 275,
    "weapon_type": 5,
    "mana_circle_name": "MC_0507",
    "mana_piece_id": 5074,
    "limit_break_id": 1050104,
    "base_id": 110381,
    "alt_id": 1,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000880,
      "2": 400000881,
      "3": 400000882,
      "4": 400000883,
      "5": 400000884
    },
    "ability_1": {
      "1": 1726,
      "2": 1727,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1734,
      "2": 1735,
      "3": 0,
      "4": 0
    }
  },
  "10550501": {
    "name": "Forte",
    "chara_id": 10550501,
    "story_id": 110272011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 448,
    "max_attack": 306,
    "weapon_type": 5,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5015,
    "limit_break_id": 1050105,
    "base_id": 110272,
    "alt_id": 1,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000664,
      "2": 400000665,
      "3": 400000666,
      "4": 400000667,
      "5": 400000669
    },
    "ability_1": {
      "1": 923,
      "2": 924,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110160105,
      "2": 110160106,
      "3": 0,
      "4": 0
    }
  },
  "10550502": {
    "name": "Lathna",
    "chara_id": 10550502,
    "story_id": 110349011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 448,
    "max_attack": 306,
    "weapon_type": 5,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5025,
    "limit_break_id": 1050105,
    "base_id": 110349,
    "alt_id": 1,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000658,
      "2": 400000659,
      "3": 400000660,
      "4": 400000661,
      "5": 400000663
    },
    "ability_1": {
      "1": 475,
      "2": 476,
      "3": 751,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 682,
      "4": 0
    },
    "ability_3": {
      "1": 110010805,
      "2": 110010806,
      "3": 756,
      "4": 0
    }
  },
  "10550503": {
    "name": "Summer Leonidas",
    "chara_id": 10550503,
    "story_id": 100013061,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 448,
    "max_attack": 306,
    "weapon_type": 5,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5045,
    "limit_break_id": 1050105,
    "base_id": 100013,
    "alt_id": 6,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400000961,
      "2": 400000962,
      "3": 400000963,
      "4": 400000964,
      "5": 400000966
    },
    "ability_1": {
      "1": 2102,
      "2": 2104,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2106,
      "2": 2107,
      "3": 0,
      "4": 0
    }
  },
  "10550504": {
    "name": "Yukimura",
    "chara_id": 10550504,
    "story_id": 110402011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 448,
    "max_attack": 306,
    "weapon_type": 5,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5045,
    "limit_break_id": 1050105,
    "base_id": 110402,
    "alt_id": 1,
    "coability": {
      "1": 101010005,
      "2": 101010006,
      "3": 101010007,
      "4": 101010008,
      "5": 101010010
    },
    "chain_ability": {
      "1": 400001010,
      "2": 400001011,
      "3": 400001012,
      "4": 400001013,
      "5": 400001015
    },
    "ability_1": {
      "1": 2458,
      "2": 2459,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210000505,
      "2": 210000506,
      "3": 0,
      "4": 0
    }
  },
  "10630101": {
    "name": "Joe",
    "chara_id": 10630101,
    "story_id": 110003011,
    "rarity": 3,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 42,
    "base_attack": 27,
    "lvl1_health": 52,
    "lvl1_attack": 34,
    "lvl2_health": 61,
    "lvl2_attack": 39,
    "max_health": 433,
    "max_attack": 281,
    "weapon_type": 6,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3011,
    "limit_break_id": 1030101,
    "base_id": 110003,
    "alt_id": 1,
    "coability": {
      "1": 101040001,
      "2": 101040003,
      "3": 101040005,
      "4": 101040007,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000041,
      "2": 400000042,
      "3": 400000043,
      "4": 400000044,
      "5": 400000045
    },
    "ability_1": {
      "1": 310001003,
      "2": 310001004,
      "3": 716,
      "4": 0
    },
    "ability_2": {
      "1": 110020603,
      "2": 110020604,
      "3": 676,
      "4": 0
    },
    "ability_3": {
      "1": 110020603,
      "2": 110020604,
      "3": 0,
      "4": 0
    }
  },
  "10630201": {
    "name": "Waike",
    "chara_id": 10630201,
    "story_id": 110013011,
    "rarity": 3,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 26,
    "lvl1_health": 55,
    "lvl1_attack": 32,
    "lvl2_health": 65,
    "lvl2_attack": 37,
    "max_health": 459,
    "max_attack": 266,
    "weapon_type": 6,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3012,
    "limit_break_id": 1030102,
    "base_id": 110013,
    "alt_id": 1,
    "coability": {
      "1": 101040001,
      "2": 101040003,
      "3": 101040005,
      "4": 101040007,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000256,
      "2": 400000256,
      "3": 400000256,
      "4": 400000256,
      "5": 400000256
    },
    "ability_1": {
      "1": 310001103,
      "2": 310001104,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020203,
      "2": 110020204,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020203,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10630301": {
    "name": "Philia",
    "chara_id": 10630301,
    "story_id": 110028011,
    "rarity": 3,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 42,
    "base_attack": 27,
    "lvl1_health": 52,
    "lvl1_attack": 34,
    "lvl2_health": 61,
    "lvl2_attack": 39,
    "max_health": 434,
    "max_attack": 280,
    "weapon_type": 6,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3013,
    "limit_break_id": 1030103,
    "base_id": 110028,
    "alt_id": 1,
    "coability": {
      "1": 101040001,
      "2": 101040003,
      "3": 101040005,
      "4": 101040007,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000285,
      "2": 400000285,
      "3": 400000286,
      "4": 400000286,
      "5": 400000287
    },
    "ability_1": {
      "1": 210000303,
      "2": 210000304,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020403,
      "2": 110020404,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020403,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10630401": {
    "name": "Malora",
    "chara_id": 10630401,
    "story_id": 110036011,
    "rarity": 3,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 26,
    "lvl1_health": 55,
    "lvl1_attack": 32,
    "lvl2_health": 65,
    "lvl2_attack": 37,
    "max_health": 460,
    "max_attack": 266,
    "weapon_type": 6,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3014,
    "limit_break_id": 1030104,
    "base_id": 110036,
    "alt_id": 1,
    "coability": {
      "1": 101040001,
      "2": 101040003,
      "3": 101040005,
      "4": 101040007,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000507,
      "2": 400000508,
      "3": 400000509,
      "4": 400000510,
      "5": 400000511
    },
    "ability_1": {
      "1": 110080003,
      "2": 110080004,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020703,
      "2": 110020704,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020703,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10640101": {
    "name": "Valentine's Ezelith",
    "chara_id": 10640101,
    "story_id": 110011021,
    "rarity": 4,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 27,
    "lvl1_health": 57,
    "lvl1_attack": 33,
    "lvl2_health": 66,
    "lvl2_attack": 39,
    "max_health": 471,
    "max_attack": 276,
    "weapon_type": 6,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4011,
    "limit_break_id": 1040101,
    "base_id": 110011,
    "alt_id": 2,
    "coability": {
      "1": 101040003,
      "2": 101040004,
      "3": 101040005,
      "4": 101040007,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000052,
      "2": 400000052,
      "3": 400000054,
      "4": 400000054,
      "5": 400000056
    },
    "ability_1": {
      "1": 310001503,
      "2": 310001501,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110080004,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10640202": {
    "name": "Dragonyule Nefaria",
    "chara_id": 10640202,
    "story_id": 110053021,
    "rarity": 4,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 67,
    "lvl1_attack": 39,
    "lvl2_health": 103,
    "lvl2_attack": 60,
    "max_health": 307,
    "max_attack": 179,
    "weapon_type": 6,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4012,
    "limit_break_id": 1040102,
    "base_id": 110053,
    "alt_id": 2,
    "coability": {
      "1": 101040003,
      "2": 101040004,
      "3": 101040005,
      "4": 101040007,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000195,
      "2": 400000195,
      "3": 400000197,
      "4": 400000197,
      "5": 400000199
    },
    "ability_1": {
      "1": 110060004,
      "2": 110060005,
      "3": 717,
      "4": 0
    },
    "ability_2": {
      "1": 110020204,
      "2": 110020206,
      "3": 803,
      "4": 0
    },
    "ability_3": {
      "1": 310001401,
      "2": 1620,
      "3": 0,
      "4": 0
    }
  },
  "10640301": {
    "name": "Eleonora",
    "chara_id": 10640301,
    "story_id": 110031011,
    "rarity": 4,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 28,
    "lvl1_health": 54,
    "lvl1_attack": 34,
    "lvl2_health": 62,
    "lvl2_attack": 40,
    "max_health": 443,
    "max_attack": 286,
    "weapon_type": 6,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4013,
    "limit_break_id": 1040103,
    "base_id": 110031,
    "alt_id": 1,
    "coability": {
      "1": 101040003,
      "2": 101040004,
      "3": 101040005,
      "4": 101040007,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000339,
      "2": 400000340,
      "3": 400000341,
      "4": 400000342,
      "5": 400000343
    },
    "ability_1": {
      "1": 310000104,
      "2": 310000105,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110120002,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10640302": {
    "name": "Joachim",
    "chara_id": 10640302,
    "story_id": 110350011,
    "rarity": 4,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 28,
    "lvl1_health": 54,
    "lvl1_attack": 34,
    "lvl2_health": 62,
    "lvl2_attack": 40,
    "max_health": 443,
    "max_attack": 286,
    "weapon_type": 6,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4013,
    "limit_break_id": 1040103,
    "base_id": 110350,
    "alt_id": 1,
    "coability": {
      "1": 101040003,
      "2": 101040004,
      "3": 101040005,
      "4": 101040007,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000327,
      "2": 400000327,
      "3": 400000329,
      "4": 400000329,
      "5": 400000331
    },
    "ability_1": {
      "1": 210000104,
      "2": 210000105,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110160104,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10640401": {
    "name": "Luca",
    "chara_id": 10640401,
    "story_id": 100006011,
    "rarity": 4,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 26,
    "lvl1_health": 55,
    "lvl1_attack": 32,
    "lvl2_health": 65,
    "lvl2_attack": 37,
    "max_health": 460,
    "max_attack": 266,
    "weapon_type": 6,
    "mana_circle_name": "MC_0402",
    "mana_piece_id": 4024,
    "limit_break_id": 1040204,
    "base_id": 100006,
    "alt_id": 1,
    "coability": {
      "1": 101040003,
      "2": 101040004,
      "3": 101040005,
      "4": 101040007,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000732,
      "2": 400000732,
      "3": 400000733,
      "4": 400000733,
      "5": 400000734
    },
    "ability_1": {
      "1": 210000304,
      "2": 210000305,
      "3": 1258,
      "4": 0
    },
    "ability_2": {
      "1": 110020703,
      "2": 110020704,
      "3": 937,
      "4": 0
    },
    "ability_3": {
      "1": 110020103,
      "2": 110020106,
      "3": 0,
      "4": 0
    }
  },
  "10640402": {
    "name": "Rawn",
    "chara_id": 10640402,
    "story_id": 110040011,
    "rarity": 4,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 26,
    "lvl1_health": 57,
    "lvl1_attack": 33,
    "lvl2_health": 66,
    "lvl2_attack": 38,
    "max_health": 469,
    "max_attack": 271,
    "weapon_type": 6,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4014,
    "limit_break_id": 1040104,
    "base_id": 110040,
    "alt_id": 1,
    "coability": {
      "1": 101040003,
      "2": 101040004,
      "3": 101040005,
      "4": 101040007,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000484,
      "2": 400000484,
      "3": 400000486,
      "4": 400000486,
      "5": 400000488
    },
    "ability_1": {
      "1": 210000704,
      "2": 210000705,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020104,
      "2": 110020106,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110160604,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10640403": {
    "name": "Elias",
    "chara_id": 10640403,
    "story_id": 110303011,
    "rarity": 4,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 47,
    "base_attack": 24,
    "lvl1_health": 47,
    "lvl1_attack": 24,
    "lvl2_health": 68,
    "lvl2_attack": 35,
    "max_health": 483,
    "max_attack": 252,
    "weapon_type": 6,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4014,
    "limit_break_id": 1040104,
    "base_id": 110303,
    "alt_id": 1,
    "coability": {
      "1": 101040003,
      "2": 101040004,
      "3": 101040005,
      "4": 101040007,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000747,
      "2": 400000747,
      "3": 400000749,
      "4": 400000749,
      "5": 400000751
    },
    "ability_1": {
      "1": 110050602,
      "2": 110050603,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020703,
      "2": 110020704,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210001304,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10640501": {
    "name": "Norwin",
    "chara_id": 10640501,
    "story_id": 110066011,
    "rarity": 4,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 28,
    "lvl1_health": 53,
    "lvl1_attack": 35,
    "lvl2_health": 62,
    "lvl2_attack": 40,
    "max_health": 442,
    "max_attack": 287,
    "weapon_type": 6,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4015,
    "limit_break_id": 1040105,
    "base_id": 110066,
    "alt_id": 1,
    "coability": {
      "1": 101040003,
      "2": 101040004,
      "3": 101040005,
      "4": 101040007,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000753,
      "2": 400000753,
      "3": 400000755,
      "4": 400000755,
      "5": 400000757
    },
    "ability_1": {
      "1": 205,
      "2": 206,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110160504,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10650101": {
    "name": "Gala Sarisse",
    "chara_id": 10650101,
    "story_id": 100029021,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 49,
    "base_attack": 28,
    "lvl1_health": 61,
    "lvl1_attack": 35,
    "lvl2_health": 71,
    "lvl2_attack": 41,
    "max_health": 505,
    "max_attack": 290,
    "weapon_type": 6,
    "mana_circle_name": "MC_0510",
    "mana_piece_id": 5081,
    "limit_break_id": 1050201,
    "base_id": 100029,
    "alt_id": 2,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000087,
      "2": 400000088,
      "3": 400000089,
      "4": 400000090,
      "5": 400000709
    },
    "ability_1": {
      "1": 310001701,
      "2": 310001702,
      "3": 310001703,
      "4": 0
    },
    "ability_2": {
      "1": 310001601,
      "2": 310001602,
      "3": 310001603,
      "4": 0
    },
    "ability_3": {
      "1": 110130005,
      "2": 110130006,
      "3": 2646,
      "4": 0
    }
  },
  "10650102": {
    "name": "Chelsea",
    "chara_id": 10650102,
    "story_id": 110342011,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 456,
    "max_attack": 296,
    "weapon_type": 6,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 110342,
    "alt_id": 1,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000030,
      "2": 400000031,
      "3": 400000032,
      "4": 400000033,
      "5": 400000707
    },
    "ability_1": {
      "1": 290,
      "2": 291,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 477,
      "2": 478,
      "3": 0,
      "4": 0
    }
  },
  "10650103": {
    "name": "Summer Alex",
    "chara_id": 10650103,
    "story_id": 100005081,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 40,
    "max_health": 481,
    "max_attack": 282,
    "weapon_type": 6,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 100005,
    "alt_id": 8,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000082,
      "2": 400000083,
      "3": 400000084,
      "4": 400000085,
      "5": 400000708
    },
    "ability_1": {
      "1": 2055,
      "2": 2056,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2083,
      "2": 2084,
      "3": 0,
      "4": 0
    }
  },
  "10650201": {
    "name": "Laranoa",
    "chara_id": 10650201,
    "story_id": 110317011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 483,
    "max_attack": 280,
    "weapon_type": 6,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 110317,
    "alt_id": 1,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000256,
      "2": 400000256,
      "3": 400000256,
      "4": 400000256,
      "5": 400000256
    },
    "ability_1": {
      "1": 82,
      "2": 83,
      "3": 1447,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 110060005,
      "2": 110060006,
      "3": 717,
      "4": 0
    }
  },
  "10650202": {
    "name": "Hunter Sarisse",
    "chara_id": 10650202,
    "story_id": 100029031,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 35,
    "lvl2_health": 65,
    "lvl2_attack": 41,
    "max_health": 459,
    "max_attack": 294,
    "weapon_type": 6,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5042,
    "limit_break_id": 1050102,
    "base_id": 100029,
    "alt_id": 3,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000268,
      "2": 400000269,
      "3": 400000270,
      "4": 400000271,
      "5": 400000712
    },
    "ability_1": {
      "1": 744,
      "2": 745,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020204,
      "2": 110020206,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 709,
      "2": 710,
      "3": 0,
      "4": 0
    }
  },
  "10650203": {
    "name": "Pinon",
    "chara_id": 10650203,
    "story_id": 110366011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 35,
    "lvl2_health": 65,
    "lvl2_attack": 41,
    "max_health": 459,
    "max_attack": 294,
    "weapon_type": 6,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5042,
    "limit_break_id": 1050102,
    "base_id": 110366,
    "alt_id": 1,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000163,
      "2": 400000164,
      "3": 400000165,
      "4": 400000166,
      "5": 400000168
    },
    "ability_1": {
      "1": 1190,
      "2": 1191,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020204,
      "2": 110020206,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1224,
      "2": 1225,
      "3": 0,
      "4": 0
    }
  },
  "10650204": {
    "name": "Housekeeper Pia",
    "chara_id": 10650204,
    "story_id": 110302041,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 49,
    "base_attack": 26,
    "lvl1_health": 61,
    "lvl1_attack": 32,
    "lvl2_health": 71,
    "lvl2_attack": 37,
    "max_health": 507,
    "max_attack": 266,
    "weapon_type": 6,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 110302,
    "alt_id": 4,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400001057,
      "2": 400001058,
      "3": 400001059,
      "4": 400001060,
      "5": 400001061
    },
    "ability_1": {
      "1": 110010303,
      "2": 110010304,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2728,
      "2": 2729,
      "3": 0,
      "4": 0
    }
  },
  "10650301": {
    "name": "Louise",
    "chara_id": 10650301,
    "story_id": 110256011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 482,
    "max_attack": 281,
    "weapon_type": 6,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110256,
    "alt_id": 1,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000327,
      "2": 400000328,
      "3": 400000329,
      "4": 400000330,
      "5": 400000332
    },
    "ability_1": {
      "1": 110350005,
      "2": 110350006,
      "3": 711,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 838,
      "4": 0
    },
    "ability_3": {
      "1": 210000605,
      "2": 210000606,
      "3": 210000607,
      "4": 0
    }
  },
  "10650302": {
    "name": "Hawk",
    "chara_id": 10650302,
    "story_id": 110267011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 41,
    "max_health": 457,
    "max_attack": 295,
    "weapon_type": 6,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110267,
    "alt_id": 1,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000362,
      "2": 400000363,
      "3": 400000364,
      "4": 400000365,
      "5": 400000367
    },
    "ability_1": {
      "1": 310001205,
      "2": 310001206,
      "3": 852,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 840,
      "4": 0
    },
    "ability_3": {
      "1": 110160605,
      "2": 110160606,
      "3": 853,
      "4": 0
    }
  },
  "10650303": {
    "name": "Meene",
    "chara_id": 10650303,
    "story_id": 110368011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 482,
    "max_attack": 281,
    "weapon_type": 6,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5023,
    "limit_break_id": 1050103,
    "base_id": 110368,
    "alt_id": 1,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000789,
      "2": 400000790,
      "3": 400000791,
      "4": 400000792,
      "5": 400000794
    },
    "ability_1": {
      "1": 1203,
      "2": 1204,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 310000505,
      "2": 310000506,
      "3": 0,
      "4": 0
    }
  },
  "10650304": {
    "name": "Valentine's Chelsea",
    "chara_id": 10650304,
    "story_id": 110342031,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 41,
    "max_health": 457,
    "max_attack": 295,
    "weapon_type": 6,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5023,
    "limit_break_id": 1050103,
    "base_id": 110342,
    "alt_id": 3,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000869,
      "2": 400000870,
      "3": 400000871,
      "4": 400000872,
      "5": 400000873
    },
    "ability_1": {
      "1": 1629,
      "2": 1642,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 1709,
      "2": 1713,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1441,
      "2": 1442,
      "3": 0,
      "4": 0
    }
  },
  "10650305": {
    "name": "Humanoid Midgardsormr",
    "chara_id": 10650305,
    "story_id": 110387011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 42,
    "base_attack": 27,
    "lvl1_health": 42,
    "lvl1_attack": 27,
    "lvl2_health": 61,
    "lvl2_attack": 39,
    "max_health": 434,
    "max_attack": 280,
    "weapon_type": 6,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5023,
    "limit_break_id": 1050103,
    "base_id": 110387,
    "alt_id": 1,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000913,
      "2": 400000914,
      "3": 400000915,
      "4": 400000916,
      "5": 400000917
    },
    "ability_1": {
      "1": 1869,
      "2": 1870,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110220004,
      "2": 110220004,
      "3": 0,
      "4": 0
    }
  },
  "10650401": {
    "name": "Summer Cleo",
    "chara_id": 10650401,
    "story_id": 100004041,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 2,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 484,
    "max_attack": 280,
    "weapon_type": 6,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 100004,
    "alt_id": 4,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000484,
      "2": 400000485,
      "3": 400000486,
      "4": 400000487,
      "5": 400000489
    },
    "ability_1": {
      "1": 413,
      "2": 414,
      "3": 1173,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 937,
      "4": 0
    },
    "ability_3": {
      "1": 110160405,
      "2": 110160406,
      "3": 110160407,
      "4": 0
    }
  },
  "10650402": {
    "name": "Summer Mikoto",
    "chara_id": 10650402,
    "story_id": 110010021,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 35,
    "lvl2_health": 65,
    "lvl2_attack": 41,
    "max_health": 460,
    "max_attack": 294,
    "weapon_type": 6,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110010,
    "alt_id": 2,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000512,
      "2": 400000513,
      "3": 400000514,
      "4": 400000515,
      "5": 400000517
    },
    "ability_1": {
      "1": 1181,
      "2": 1182,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1033,
      "2": 1034,
      "3": 0,
      "4": 0
    }
  },
  "10650403": {
    "name": "Isaac",
    "chara_id": 10650403,
    "story_id": 110391011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 484,
    "max_attack": 280,
    "weapon_type": 6,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110391,
    "alt_id": 1,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000946,
      "2": 400000947,
      "3": 400000948,
      "4": 400000949,
      "5": 400000950
    },
    "ability_1": {
      "1": 2004,
      "2": 2005,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020104,
      "2": 110020106,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1971,
      "2": 1972,
      "3": 0,
      "4": 0
    }
  },
  "10650501": {
    "name": "Nefaria",
    "chara_id": 10650501,
    "story_id": 110053011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 40,
    "max_health": 480,
    "max_attack": 283,
    "weapon_type": 6,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5015,
    "limit_break_id": 1050105,
    "base_id": 110053,
    "alt_id": 1,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000611,
      "2": 400000612,
      "3": 400000613,
      "4": 400000614,
      "5": 400000616
    },
    "ability_1": {
      "1": 310000205,
      "2": 310000206,
      "3": 818,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 682,
      "4": 0
    },
    "ability_3": {
      "1": 110160505,
      "2": 110160506,
      "3": 819,
      "4": 0
    }
  },
  "10650502": {
    "name": "Valentine's Addis",
    "chara_id": 10650502,
    "story_id": 110310021,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 455,
    "max_attack": 297,
    "weapon_type": 6,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5015,
    "limit_break_id": 1050105,
    "base_id": 110310,
    "alt_id": 2,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000640,
      "2": 400000641,
      "3": 400000642,
      "4": 400000643,
      "5": 400000645
    },
    "ability_1": {
      "1": 110160105,
      "2": 110160106,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 290,
      "2": 291,
      "3": 0,
      "4": 0
    }
  },
  "10650503": {
    "name": "Chelle",
    "chara_id": 10650503,
    "story_id": 100015041,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 40,
    "max_health": 480,
    "max_attack": 283,
    "weapon_type": 6,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5025,
    "limit_break_id": 1050105,
    "base_id": 100015,
    "alt_id": 4,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000566,
      "2": 400000567,
      "3": 400000568,
      "4": 400000569,
      "5": 400000571
    },
    "ability_1": {
      "1": 1205,
      "2": 1206,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210002105,
      "2": 210002106,
      "3": 0,
      "4": 0
    }
  },
  "10650504": {
    "name": "Opera Karina",
    "chara_id": 10650504,
    "story_id": 110018021,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 40,
    "max_health": 480,
    "max_attack": 283,
    "weapon_type": 6,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5015,
    "limit_break_id": 1050105,
    "base_id": 110018,
    "alt_id": 2,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000795,
      "2": 400000796,
      "3": 400000797,
      "4": 400000798,
      "5": 400000799
    },
    "ability_1": {
      "1": 1445,
      "2": 1446,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1269,
      "2": 1270,
      "3": 0,
      "4": 0
    }
  },
  "10650505": {
    "name": "Halloween Sylas",
    "chara_id": 10650505,
    "story_id": 110318021,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 40,
    "max_health": 480,
    "max_attack": 283,
    "weapon_type": 6,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5045,
    "limit_break_id": 1050105,
    "base_id": 110318,
    "alt_id": 2,
    "coability": {
      "1": 101040005,
      "2": 101040006,
      "3": 101040007,
      "4": 101040008,
      "5": 101040010
    },
    "chain_ability": {
      "1": 400000576,
      "2": 400000577,
      "3": 400000578,
      "4": 400000579,
      "5": 400000716
    },
    "ability_1": {
      "1": 2384,
      "2": 2385,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2360,
      "2": 2363,
      "3": 0,
      "4": 0
    }
  },
  "10730101": {
    "name": "Xania",
    "chara_id": 10730101,
    "story_id": 110004011,
    "rarity": 3,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 41,
    "base_attack": 28,
    "lvl1_health": 51,
    "lvl1_attack": 35,
    "lvl2_health": 60,
    "lvl2_attack": 41,
    "max_health": 425,
    "max_attack": 291,
    "weapon_type": 7,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3011,
    "limit_break_id": 1030101,
    "base_id": 110004,
    "alt_id": 1,
    "coability": {
      "1": 102000001,
      "2": 102000003,
      "3": 102000005,
      "4": 102000007,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000052,
      "2": 400000052,
      "3": 400000053,
      "4": 400000053,
      "5": 400000054
    },
    "ability_1": {
      "1": 110060003,
      "2": 110060004,
      "3": 717,
      "4": 0
    },
    "ability_2": {
      "1": 110020603,
      "2": 110020604,
      "3": 676,
      "4": 0
    },
    "ability_3": {
      "1": 110020603,
      "2": 110020604,
      "3": 0,
      "4": 0
    }
  },
  "10730301": {
    "name": "Nicolas",
    "chara_id": 10730301,
    "story_id": 110025011,
    "rarity": 3,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 41,
    "base_attack": 28,
    "lvl1_health": 51,
    "lvl1_attack": 35,
    "lvl2_health": 60,
    "lvl2_attack": 41,
    "max_health": 426,
    "max_attack": 291,
    "weapon_type": 7,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3013,
    "limit_break_id": 1030103,
    "base_id": 110025,
    "alt_id": 1,
    "coability": {
      "1": 102000001,
      "2": 102000003,
      "3": 102000005,
      "4": 102000007,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000350,
      "2": 400000350,
      "3": 400000351,
      "4": 400000351,
      "5": 400000352
    },
    "ability_1": {
      "1": 210001101,
      "2": 210001102,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020303,
      "2": 110020304,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020303,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10730401": {
    "name": "Xiao Lei",
    "chara_id": 10730401,
    "story_id": 110316011,
    "rarity": 3,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 27,
    "lvl1_health": 54,
    "lvl1_attack": 33,
    "lvl2_health": 63,
    "lvl2_attack": 39,
    "max_health": 449,
    "max_attack": 276,
    "weapon_type": 7,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3014,
    "limit_break_id": 1030104,
    "base_id": 110316,
    "alt_id": 1,
    "coability": {
      "1": 102000001,
      "2": 102000003,
      "3": 102000005,
      "4": 102000007,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000484,
      "2": 400000484,
      "3": 400000485,
      "4": 400000485,
      "5": 100017
    },
    "ability_1": {
      "1": 110060003,
      "2": 100018,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020104,
      "2": 110020106,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 100021,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10730501": {
    "name": "Althemia",
    "chara_id": 10730501,
    "story_id": 110047011,
    "rarity": 3,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 27,
    "lvl1_health": 54,
    "lvl1_attack": 33,
    "lvl2_health": 63,
    "lvl2_attack": 39,
    "max_health": 446,
    "max_attack": 278,
    "weapon_type": 7,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3015,
    "limit_break_id": 1030105,
    "base_id": 110047,
    "alt_id": 1,
    "coability": {
      "1": 102000001,
      "2": 102000003,
      "3": 102000005,
      "4": 102000007,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000566,
      "2": 400000566,
      "3": 400000567,
      "4": 400000567,
      "5": 400000568
    },
    "ability_1": {
      "1": 210000403,
      "2": 210000404,
      "3": 814,
      "4": 0
    },
    "ability_2": {
      "1": 110020403,
      "2": 110020404,
      "3": 801,
      "4": 0
    },
    "ability_3": {
      "1": 110020403,
      "2": 110020404,
      "3": 0,
      "4": 0
    }
  },
  "10740101": {
    "name": "Sinoa",
    "chara_id": 10740101,
    "story_id": 110009011,
    "rarity": 4,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 27,
    "lvl1_health": 55,
    "lvl1_attack": 34,
    "lvl2_health": 64,
    "lvl2_attack": 40,
    "max_health": 456,
    "max_attack": 283,
    "weapon_type": 7,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4011,
    "limit_break_id": 1040101,
    "base_id": 110009,
    "alt_id": 1,
    "coability": {
      "1": 102000003,
      "2": 102000004,
      "3": 102000005,
      "4": 102000007,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000141,
      "2": 400000141,
      "3": 400000143,
      "4": 400000143,
      "5": 400000145
    },
    "ability_1": {
      "1": 210000304,
      "2": 210000305,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110130004,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10740201": {
    "name": "Dragonyule Xander",
    "chara_id": 10740201,
    "story_id": 110022021,
    "rarity": 4,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 29,
    "lvl1_health": 63,
    "lvl1_attack": 42,
    "lvl2_health": 96,
    "lvl2_attack": 65,
    "max_health": 285,
    "max_attack": 194,
    "weapon_type": 7,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4012,
    "limit_break_id": 1040102,
    "base_id": 110022,
    "alt_id": 2,
    "coability": {
      "1": 102000003,
      "2": 102000004,
      "3": 102000005,
      "4": 102000007,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000195,
      "2": 400000195,
      "3": 400000197,
      "4": 400000197,
      "5": 400000199
    },
    "ability_1": {
      "1": 210002801,
      "2": 210002802,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110010404,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10740202": {
    "name": "Summer Estelle",
    "chara_id": 10740202,
    "story_id": 110063021,
    "rarity": 4,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 45,
    "base_attack": 27,
    "lvl1_health": 55,
    "lvl1_attack": 34,
    "lvl2_health": 65,
    "lvl2_attack": 40,
    "max_health": 459,
    "max_attack": 282,
    "weapon_type": 7,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4012,
    "limit_break_id": 1040102,
    "base_id": 110063,
    "alt_id": 2,
    "coability": {
      "1": 102000003,
      "2": 102000004,
      "3": 102000005,
      "4": 102000007,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000222,
      "2": 400000223,
      "3": 400000224,
      "4": 400000225,
      "5": 400000226
    },
    "ability_1": {
      "1": 110050302,
      "2": 110050303,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020603,
      "2": 110020604,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110130004,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10740203": {
    "name": "Pipple",
    "chara_id": 10740203,
    "story_id": 110300011,
    "rarity": 4,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 27,
    "lvl1_health": 55,
    "lvl1_attack": 34,
    "lvl2_health": 65,
    "lvl2_attack": 40,
    "max_health": 459,
    "max_attack": 282,
    "weapon_type": 7,
    "mana_circle_name": "MC_0405",
    "mana_piece_id": 4052,
    "limit_break_id": 1040102,
    "base_id": 110300,
    "alt_id": 1,
    "coability": {
      "1": 102000003,
      "2": 102000004,
      "3": 102000005,
      "4": 102000007,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000206,
      "2": 400000206,
      "3": 400000208,
      "4": 400000208,
      "5": 400000210
    },
    "ability_1": {
      "1": 854,
      "2": 854,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020204,
      "2": 110020206,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 871,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10740301": {
    "name": "Noelle",
    "chara_id": 10740301,
    "story_id": 110340011,
    "rarity": 4,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 27,
    "lvl1_health": 55,
    "lvl1_attack": 34,
    "lvl2_health": 64,
    "lvl2_attack": 40,
    "max_health": 457,
    "max_attack": 283,
    "weapon_type": 7,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4013,
    "limit_break_id": 1040103,
    "base_id": 110340,
    "alt_id": 1,
    "coability": {
      "1": 102000003,
      "2": 102000004,
      "3": 102000005,
      "4": 102000007,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000350,
      "2": 400000350,
      "3": 400000352,
      "4": 400000352,
      "5": 400000354
    },
    "ability_1": {
      "1": 110130004,
      "2": 110130005,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 357,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10740302": {
    "name": "Dragonyule Xainfried",
    "chara_id": 10740302,
    "story_id": 110021031,
    "rarity": 4,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 27,
    "lvl1_health": 55,
    "lvl1_attack": 34,
    "lvl2_health": 64,
    "lvl2_attack": 40,
    "max_health": 457,
    "max_attack": 283,
    "weapon_type": 7,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4013,
    "limit_break_id": 1040103,
    "base_id": 110021,
    "alt_id": 3,
    "coability": {
      "1": 102000003,
      "2": 102000004,
      "3": 102000005,
      "4": 102000007,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000402,
      "2": 400000402,
      "3": 400000404,
      "4": 400000404,
      "5": 400000406
    },
    "ability_1": {
      "1": 410,
      "2": 309,
      "3": 1080,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 838,
      "4": 0
    },
    "ability_3": {
      "1": 110140301,
      "2": 700,
      "3": 0,
      "4": 0
    }
  },
  "10740401": {
    "name": "Amane",
    "chara_id": 10740401,
    "story_id": 110041011,
    "rarity": 4,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 29,
    "lvl1_health": 53,
    "lvl1_attack": 36,
    "lvl2_health": 61,
    "lvl2_attack": 41,
    "max_health": 436,
    "max_attack": 295,
    "weapon_type": 7,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4014,
    "limit_break_id": 1040104,
    "base_id": 110041,
    "alt_id": 1,
    "coability": {
      "1": 102000003,
      "2": 102000004,
      "3": 102000005,
      "4": 102000007,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000433,
      "2": 400000433,
      "3": 400000435,
      "4": 400000435,
      "5": 400000437
    },
    "ability_1": {
      "1": 110120002,
      "2": 110120003,
      "3": 721,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 937,
      "4": 0
    },
    "ability_3": {
      "1": 110080004,
      "2": 694,
      "3": 0,
      "4": 0
    }
  },
  "10740402": {
    "name": "Chitose",
    "chara_id": 10740402,
    "story_id": 110347011,
    "rarity": 4,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 26,
    "lvl1_health": 58,
    "lvl1_attack": 32,
    "lvl2_health": 68,
    "lvl2_attack": 37,
    "max_health": 482,
    "max_attack": 267,
    "weapon_type": 7,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4014,
    "limit_break_id": 1040104,
    "base_id": 110347,
    "alt_id": 1,
    "coability": {
      "1": 102000003,
      "2": 102000004,
      "3": 102000005,
      "4": 102000007,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000501,
      "2": 400000501,
      "3": 400000503,
      "4": 400000503,
      "5": 400000505
    },
    "ability_1": {
      "1": 690,
      "2": 691,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 639,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10740501": {
    "name": "Kleimann",
    "chara_id": 10740501,
    "story_id": 110051011,
    "rarity": 4,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 27,
    "lvl1_health": 55,
    "lvl1_attack": 34,
    "lvl2_health": 64,
    "lvl2_attack": 40,
    "max_health": 455,
    "max_attack": 284,
    "weapon_type": 7,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4015,
    "limit_break_id": 1040105,
    "base_id": 110051,
    "alt_id": 1,
    "coability": {
      "1": 102000003,
      "2": 102000004,
      "3": 102000005,
      "4": 102000007,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000640,
      "2": 400000640,
      "3": 400000642,
      "4": 400000642,
      "5": 400000645
    },
    "ability_1": {
      "1": 110070004,
      "2": 110070005,
      "3": 959,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 960,
      "4": 0
    },
    "ability_3": {
      "1": 110060004,
      "2": 717,
      "3": 0,
      "4": 0
    }
  },
  "10750101": {
    "name": "Student Maribelle",
    "chara_id": 10750101,
    "story_id": 110032021,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 447,
    "max_attack": 307,
    "weapon_type": 7,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 110032,
    "alt_id": 2,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000141,
      "2": 400000142,
      "3": 400000143,
      "4": 400000144,
      "5": 400000146
    },
    "ability_1": {
      "1": 210000405,
      "2": 210000406,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110080005,
      "2": 110080006,
      "3": 0,
      "4": 0
    }
  },
  "10750102": {
    "name": "Mega Man",
    "chara_id": 10750102,
    "story_id": "N/A",
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 40,
    "base_attack": 27,
    "lvl1_health": 40,
    "lvl1_attack": 27,
    "lvl2_health": 58,
    "lvl2_attack": 40,
    "max_health": 412,
    "max_attack": 283,
    "weapon_type": 7,
    "mana_circle_name": "MC_0503",
    "mana_piece_id": 5031,
    "limit_break_id": 1050101,
    "base_id": 110354,
    "alt_id": 1,
    "coability": {
      "1": 106000004,
      "2": 106000005,
      "3": 106000006,
      "4": 106000007,
      "5": 106000008
    },
    "chain_ability": {
      "1": 400000141,
      "2": 400000142,
      "3": 400000143,
      "4": 400000144,
      "5": 400000146
    },
    "ability_1": {
      "1": 572,
      "2": 573,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110370005,
      "2": 110370006,
      "3": 0,
      "4": 0
    }
  },
  "10750103": {
    "name": "Incognito Nefaria",
    "chara_id": 10750103,
    "story_id": 110053031,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 447,
    "max_attack": 307,
    "weapon_type": 7,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 110053,
    "alt_id": 3,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000141,
      "2": 400000142,
      "3": 400000143,
      "4": 400000144,
      "5": 400000146
    },
    "ability_1": {
      "1": 1300,
      "2": 1301,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110060005,
      "2": 110060006,
      "3": 0,
      "4": 0
    }
  },
  "10750104": {
    "name": "Seimei",
    "chara_id": 10750104,
    "story_id": 110375011,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 447,
    "max_attack": 307,
    "weapon_type": 7,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5041,
    "limit_break_id": 1050101,
    "base_id": 110375,
    "alt_id": 1,
    "coability": {
      "1": 106000004,
      "2": 106000005,
      "3": 106000006,
      "4": 106000007,
      "5": 106000008
    },
    "chain_ability": {
      "1": 400000844,
      "2": 400000845,
      "3": 400000846,
      "4": 400000847,
      "5": 400000848
    },
    "ability_1": {
      "1": 1540,
      "2": 1541,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1542,
      "2": 1543,
      "3": 0,
      "4": 0
    }
  },
  "10750105": {
    "name": "Yukata Cleo",
    "chara_id": 10750105,
    "story_id": 100004191,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 28,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 66,
    "lvl2_attack": 41,
    "max_health": 470,
    "max_attack": 292,
    "weapon_type": 7,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 100004,
    "alt_id": 19,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000141,
      "2": 400000142,
      "3": 400000143,
      "4": 400000144,
      "5": 400000146
    },
    "ability_1": {
      "1": 2085,
      "2": 2089,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2126,
      "2": 2127,
      "3": 0,
      "4": 0
    }
  },
  "10750201": {
    "name": "Lily",
    "chara_id": 10750201,
    "story_id": 110252011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 449,
    "max_attack": 306,
    "weapon_type": 7,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 110252,
    "alt_id": 1,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000163,
      "2": 400000164,
      "3": 400000165,
      "4": 400000166,
      "5": 400000168
    },
    "ability_1": {
      "1": 210000305,
      "2": 210000306,
      "3": 210000307,
      "4": 0
    },
    "ability_2": {
      "1": 110020204,
      "2": 110020206,
      "3": 803,
      "4": 0
    },
    "ability_3": {
      "1": 110120003,
      "2": 110120004,
      "3": 721,
      "4": 0
    }
  },
  "10750202": {
    "name": "Yurius",
    "chara_id": 10750202,
    "story_id": 110362011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 449,
    "max_attack": 306,
    "weapon_type": 7,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5022,
    "limit_break_id": 1050102,
    "base_id": 110362,
    "alt_id": 1,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000206,
      "2": 400000207,
      "3": 400000208,
      "4": 400000209,
      "5": 400000211
    },
    "ability_1": {
      "1": 951,
      "2": 952,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020204,
      "2": 110020206,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110120003,
      "2": 110120004,
      "3": 0,
      "4": 0
    }
  },
  "10750203": {
    "name": "Forager Cleo",
    "chara_id": 10750203,
    "story_id": 100004171,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 42,
    "base_attack": 28,
    "lvl1_health": 42,
    "lvl1_attack": 28,
    "lvl2_health": 60,
    "lvl2_attack": 41,
    "max_health": 426,
    "max_attack": 290,
    "weapon_type": 7,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 100004,
    "alt_id": 17,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000163,
      "2": 400000164,
      "3": 400000165,
      "4": 400000166,
      "5": 400000168
    },
    "ability_1": {
      "1": 1492,
      "2": 1493,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1533,
      "2": 1534,
      "3": 0,
      "4": 0
    }
  },
  "10750204": {
    "name": "Gala Emile",
    "chara_id": 10750204,
    "story_id": 100017031,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 46,
    "base_attack": 28,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 67,
    "lvl2_attack": 41,
    "max_health": 473,
    "max_attack": 291,
    "weapon_type": 7,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5022,
    "limit_break_id": 1050102,
    "base_id": 100017,
    "alt_id": 3,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400001037,
      "2": 400001038,
      "3": 400001039,
      "4": 400001040,
      "5": 400001041
    },
    "ability_1": {
      "1": 2617,
      "2": 2618,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 2668,
      "2": 2669,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2578,
      "2": 2579,
      "3": 0,
      "4": 0
    }
  },
  "10750205": {
    "name": "Origa",
    "chara_id": 10750205,
    "story_id": 100043021,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 449,
    "max_attack": 306,
    "weapon_type": 7,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5022,
    "limit_break_id": 1050102,
    "base_id": 100043,
    "alt_id": 2,
    "coability": {
      "1": 106070004,
      "2": 106070005,
      "3": 106070006,
      "4": 106070007,
      "5": 106070008
    },
    "chain_ability": {
      "1": 400000163,
      "2": 400000164,
      "3": 400000165,
      "4": 400000166,
      "5": 400000168
    },
    "ability_1": {
      "1": 3500,
      "2": 3501,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 3600,
      "2": 3601,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2238,
      "2": 2239,
      "3": 0,
      "4": 0
    }
  },
  "10750301": {
    "name": "Maribelle",
    "chara_id": 10750301,
    "story_id": 110032011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 448,
    "max_attack": 306,
    "weapon_type": 7,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110032,
    "alt_id": 1,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000392,
      "2": 400000393,
      "3": 400000394,
      "4": 400000395,
      "5": 400000397
    },
    "ability_1": {
      "1": 210000405,
      "2": 210000406,
      "3": 814,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 838,
      "4": 0
    },
    "ability_3": {
      "1": 110120003,
      "2": 110120004,
      "3": 721,
      "4": 0
    }
  },
  "10750302": {
    "name": "Summer Sinoa",
    "chara_id": 10750302,
    "story_id": 110009021,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 28,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 66,
    "lvl2_attack": 41,
    "max_health": 471,
    "max_attack": 291,
    "weapon_type": 7,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110009,
    "alt_id": 2,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000327,
      "2": 400000328,
      "3": 400000329,
      "4": 400000330,
      "5": 400000332
    },
    "ability_1": {
      "1": 1126,
      "2": 1129,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110060005,
      "2": 110060006,
      "3": 0,
      "4": 0
    }
  },
  "10750303": {
    "name": "Myriam",
    "chara_id": 10750303,
    "story_id": 110386011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 46,
    "base_attack": 28,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 66,
    "lvl2_attack": 41,
    "max_health": 471,
    "max_attack": 291,
    "weapon_type": 7,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110386,
    "alt_id": 1,
    "coability": {
      "1": 101060010,
      "2": 101060010,
      "3": 101060010,
      "4": 101060010,
      "5": 101060010
    },
    "chain_ability": {
      "1": 400000901,
      "2": 400000901,
      "3": 400000901,
      "4": 400000901,
      "5": 400000901
    },
    "ability_1": {
      "1": 1858,
      "2": 1858,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 1856,
      "2": 1856,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 100200505,
      "2": 100200505,
      "3": 0,
      "4": 0
    }
  },
  "10750304": {
    "name": "Basileus",
    "chara_id": 10750304,
    "story_id": 110397011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 448,
    "max_attack": 306,
    "weapon_type": 7,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5043,
    "limit_break_id": 1050103,
    "base_id": 110397,
    "alt_id": 1,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000285,
      "2": 400000286,
      "3": 400000287,
      "4": 400000288,
      "5": 400000290
    },
    "ability_1": {
      "1": 2222,
      "2": 2223,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2279,
      "2": 2281,
      "3": 0,
      "4": 0
    }
  },
  "10750401": {
    "name": "Lucretia",
    "chara_id": 10750401,
    "story_id": 110305011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 449,
    "max_attack": 305,
    "weapon_type": 7,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110305,
    "alt_id": 1,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000536,
      "2": 400000537,
      "3": 400000538,
      "4": 400000539,
      "5": 400000541
    },
    "ability_1": {
      "1": 210002603,
      "2": 210002604,
      "3": 210002605,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 937,
      "4": 0
    },
    "ability_3": {
      "1": 110080005,
      "2": 110080006,
      "3": 694,
      "4": 0
    }
  },
  "10750402": {
    "name": "Peony",
    "chara_id": 10750402,
    "story_id": 110361011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 46,
    "base_attack": 28,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 67,
    "lvl2_attack": 41,
    "max_health": 474,
    "max_attack": 290,
    "weapon_type": 7,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110361,
    "alt_id": 1,
    "coability": {
      "1": 157570404,
      "2": 157570405,
      "3": 157570406,
      "4": 157570407,
      "5": 157570408
    },
    "chain_ability": {
      "1": 400000501,
      "2": 400000502,
      "3": 400000503,
      "4": 400000504,
      "5": 400000506
    },
    "ability_1": {
      "1": 899,
      "2": 900,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110160405,
      "2": 110160406,
      "3": 0,
      "4": 0
    }
  },
  "10750403": {
    "name": "Radiant Xuan Zang",
    "chara_id": 10750403,
    "story_id": 110299021,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 46,
    "base_attack": 28,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 67,
    "lvl2_attack": 41,
    "max_health": 474,
    "max_attack": 290,
    "weapon_type": 7,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110299,
    "alt_id": 2,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000433,
      "2": 400000434,
      "3": 400000435,
      "4": 400000436,
      "5": 400000438
    },
    "ability_1": {
      "1": 961,
      "2": 962,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020104,
      "2": 110020106,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 955,
      "2": 956,
      "3": 0,
      "4": 0
    }
  },
  "10750404": {
    "name": "Summer Chelle",
    "chara_id": 10750404,
    "story_id": 100015081,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 449,
    "max_attack": 305,
    "weapon_type": 7,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5024,
    "limit_break_id": 1050104,
    "base_id": 100015,
    "alt_id": 8,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000967,
      "2": 400000968,
      "3": 400000969,
      "4": 400000970,
      "5": 400000972
    },
    "ability_1": {
      "1": 2110,
      "2": 2111,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2108,
      "2": 2109,
      "3": 0,
      "4": 0
    }
  },
  "10750405": {
    "name": "Bondforged Zethia",
    "chara_id": 10750405,
    "story_id": 100054021,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 449,
    "max_attack": 305,
    "weapon_type": 7,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 100054,
    "alt_id": 2,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000433,
      "2": 400000434,
      "3": 400000435,
      "4": 400000436,
      "5": 400000438
    },
    "ability_1": {
      "1": 2763,
      "2": 2764,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 2767,
      "2": 2768,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2769,
      "2": 2770,
      "3": 0,
      "4": 0
    }
  },
  "10750501": {
    "name": "Veronica",
    "chara_id": 10750501,
    "story_id": 110333011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 446,
    "max_attack": 307,
    "weapon_type": 7,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5015,
    "limit_break_id": 1050105,
    "base_id": 110333,
    "alt_id": 1,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000640,
      "2": 400000641,
      "3": 400000642,
      "4": 400000643,
      "5": 400000645
    },
    "ability_1": {
      "1": 190,
      "2": 191,
      "3": 934,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 682,
      "4": 0
    },
    "ability_3": {
      "1": 110120003,
      "2": 110120004,
      "3": 721,
      "4": 0
    }
  },
  "10750502": {
    "name": "Gala Cleo",
    "chara_id": 10750502,
    "story_id": 100004101,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 28,
    "lvl1_health": 57,
    "lvl1_attack": 35,
    "lvl2_health": 66,
    "lvl2_attack": 41,
    "max_health": 470,
    "max_attack": 292,
    "weapon_type": 7,
    "mana_circle_name": "MC_0510",
    "mana_piece_id": 5085,
    "limit_break_id": 1050205,
    "base_id": 100004,
    "alt_id": 10,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000566,
      "2": 400000567,
      "3": 400000568,
      "4": 400000569,
      "5": 400000571
    },
    "ability_1": {
      "1": 279,
      "2": 280,
      "3": 2161,
      "4": 0
    },
    "ability_2": {
      "1": 282,
      "2": 283,
      "3": 2160,
      "4": 0
    },
    "ability_3": {
      "1": 110120003,
      "2": 110120004,
      "3": 2162,
      "4": 0
    }
  },
  "10750503": {
    "name": "Cassandra",
    "chara_id": 10750503,
    "story_id": 110337011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 446,
    "max_attack": 307,
    "weapon_type": 7,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5015,
    "limit_break_id": 1050105,
    "base_id": 110337,
    "alt_id": 1,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000611,
      "2": 400000612,
      "3": 400000613,
      "4": 400000614,
      "5": 400000616
    },
    "ability_1": {
      "1": 110120003,
      "2": 110120004,
      "3": 721,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 682,
      "4": 0
    },
    "ability_3": {
      "1": 441,
      "2": 442,
      "3": 726,
      "4": 0
    }
  },
  "10750504": {
    "name": "Zena",
    "chara_id": 10750504,
    "story_id": 100009071,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 446,
    "max_attack": 307,
    "weapon_type": 7,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5015,
    "limit_break_id": 1050105,
    "base_id": 100009,
    "alt_id": 7,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000576,
      "2": 400000577,
      "3": 400000578,
      "4": 400000579,
      "5": 400000716
    },
    "ability_1": {
      "1": 1003,
      "2": 1004,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110120003,
      "2": 110120004,
      "3": 0,
      "4": 0
    }
  },
  "10750505": {
    "name": "Vania",
    "chara_id": 10750505,
    "story_id": 110388011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 43,
    "base_attack": 30,
    "lvl1_health": 54,
    "lvl1_attack": 37,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 446,
    "max_attack": 307,
    "weapon_type": 7,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5025,
    "limit_break_id": 1050105,
    "base_id": 110388,
    "alt_id": 1,
    "coability": {
      "1": 102000005,
      "2": 102000006,
      "3": 102000007,
      "4": 102000008,
      "5": 102000010
    },
    "chain_ability": {
      "1": 400000593,
      "2": 400000594,
      "3": 400000595,
      "4": 400000596,
      "5": 400000598
    },
    "ability_1": {
      "1": 1930,
      "2": 1932,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 84,
      "2": 85,
      "3": 0,
      "4": 0
    }
  },
  "10830101": {
    "name": "Aurien",
    "chara_id": 10830101,
    "story_id": 110006011,
    "rarity": 3,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 26,
    "lvl1_health": 55,
    "lvl1_attack": 32,
    "lvl2_health": 65,
    "lvl2_attack": 37,
    "max_health": 458,
    "max_attack": 266,
    "weapon_type": 8,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3011,
    "limit_break_id": 1030101,
    "base_id": 110006,
    "alt_id": 1,
    "coability": {
      "1": 104000001,
      "2": 104000003,
      "3": 104000005,
      "4": 104000007,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000046,
      "2": 400000046,
      "3": 400000047,
      "4": 400000047,
      "5": 400000048
    },
    "ability_1": {
      "1": 210002003,
      "2": 210002004,
      "3": 718,
      "4": 0
    },
    "ability_2": {
      "1": 110021003,
      "2": 110021004,
      "3": 679,
      "4": 0
    },
    "ability_3": {
      "1": 110021003,
      "2": 110021004,
      "3": 0,
      "4": 0
    }
  },
  "10830201": {
    "name": "Ricardt",
    "chara_id": 10830201,
    "story_id": 110017011,
    "rarity": 3,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 26,
    "lvl1_health": 56,
    "lvl1_attack": 32,
    "lvl2_health": 65,
    "lvl2_attack": 37,
    "max_health": 460,
    "max_attack": 265,
    "weapon_type": 8,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3012,
    "limit_break_id": 1030102,
    "base_id": 110017,
    "alt_id": 1,
    "coability": {
      "1": 104000001,
      "2": 104000003,
      "3": 104000005,
      "4": 104000007,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000178,
      "2": 400000178,
      "3": 400000179,
      "4": 400000179,
      "5": 400000180
    },
    "ability_1": {
      "1": 210001803,
      "2": 210001804,
      "3": 811,
      "4": 0
    },
    "ability_2": {
      "1": 110020603,
      "2": 110020604,
      "3": 676,
      "4": 0
    },
    "ability_3": {
      "1": 110020603,
      "2": 110020604,
      "3": 0,
      "4": 0
    }
  },
  "10830301": {
    "name": "Sophie",
    "chara_id": 10830301,
    "story_id": 110024011,
    "rarity": 3,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 26,
    "lvl1_health": 55,
    "lvl1_attack": 32,
    "lvl2_health": 65,
    "lvl2_attack": 37,
    "max_health": 459,
    "max_attack": 266,
    "weapon_type": 8,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3013,
    "limit_break_id": 1030103,
    "base_id": 110024,
    "alt_id": 1,
    "coability": {
      "1": 104000001,
      "2": 104000003,
      "3": 104000005,
      "4": 104000007,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000333,
      "2": 400000333,
      "3": 400000334,
      "4": 400000334,
      "5": 400000335
    },
    "ability_1": {
      "1": 110100003,
      "2": 110100004,
      "3": 110100007,
      "4": 0
    },
    "ability_2": {
      "1": 110020303,
      "2": 110020304,
      "3": 984,
      "4": 0
    },
    "ability_3": {
      "1": 110020303,
      "2": 110020304,
      "3": 0,
      "4": 0
    }
  },
  "10830401": {
    "name": "Hope",
    "chara_id": 10830401,
    "story_id": 110038011,
    "rarity": 3,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 45,
    "base_attack": 26,
    "lvl1_health": 56,
    "lvl1_attack": 32,
    "lvl2_health": 65,
    "lvl2_attack": 37,
    "max_health": 461,
    "max_attack": 265,
    "weapon_type": 8,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3014,
    "limit_break_id": 1030104,
    "base_id": 110038,
    "alt_id": 1,
    "coability": {
      "1": 104000001,
      "2": 104000003,
      "3": 104000005,
      "4": 104000007,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000472,
      "2": 400000472,
      "3": 400000473,
      "4": 400000473,
      "5": 400000474
    },
    "ability_1": {
      "1": 210001903,
      "2": 210001904,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020103,
      "2": 110020104,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020103,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10830402": {
    "name": "Estelle",
    "chara_id": 10830402,
    "story_id": 110063011,
    "rarity": 3,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 2,
    "base_health": 45,
    "base_attack": 26,
    "lvl1_health": 56,
    "lvl1_attack": 32,
    "lvl2_health": 65,
    "lvl2_attack": 37,
    "max_health": 461,
    "max_attack": 265,
    "weapon_type": 8,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3014,
    "limit_break_id": 1030104,
    "base_id": 110063,
    "alt_id": 1,
    "coability": {
      "1": 104000001,
      "2": 104000003,
      "3": 104000005,
      "4": 104000007,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000548,
      "2": 400000548,
      "3": 400000549,
      "4": 400000549,
      "5": 400000550
    },
    "ability_1": {
      "1": 110070003,
      "2": 110070004,
      "3": 1256,
      "4": 0
    },
    "ability_2": {
      "1": 110020703,
      "2": 110020704,
      "3": 684,
      "4": 0
    },
    "ability_3": {
      "1": 110021003,
      "2": 110020704,
      "3": 0,
      "4": 0
    }
  },
  "10830501": {
    "name": "Edward",
    "chara_id": 10830501,
    "story_id": 110049011,
    "rarity": 3,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 26,
    "lvl1_health": 55,
    "lvl1_attack": 32,
    "lvl2_health": 64,
    "lvl2_attack": 37,
    "max_health": 456,
    "max_attack": 266,
    "weapon_type": 8,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3015,
    "limit_break_id": 1030105,
    "base_id": 110049,
    "alt_id": 1,
    "coability": {
      "1": 104000001,
      "2": 104000003,
      "3": 104000005,
      "4": 104000007,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000581,
      "2": 400000581,
      "3": 400000582,
      "4": 400000582,
      "5": 400000583
    },
    "ability_1": {
      "1": 210001903,
      "2": 210001904,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020503,
      "2": 110020504,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020503,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10840101": {
    "name": "Verica",
    "chara_id": 10840101,
    "story_id": 110269011,
    "rarity": 4,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 26,
    "lvl1_health": 57,
    "lvl1_attack": 33,
    "lvl2_health": 66,
    "lvl2_attack": 38,
    "max_health": 468,
    "max_attack": 271,
    "weapon_type": 8,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4011,
    "limit_break_id": 1040101,
    "base_id": 110269,
    "alt_id": 1,
    "coability": {
      "1": 104000003,
      "2": 104000004,
      "3": 104000005,
      "4": 104000007,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000007,
      "2": 400000007,
      "3": 400000009,
      "4": 400000009,
      "5": 400000011
    },
    "ability_1": {
      "1": 210001904,
      "2": 210001905,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110100004,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10840102": {
    "name": "Halloween Lowen",
    "chara_id": 10840102,
    "story_id": 110257021,
    "rarity": 4,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 26,
    "lvl1_health": 57,
    "lvl1_attack": 33,
    "lvl2_health": 66,
    "lvl2_attack": 38,
    "max_health": 468,
    "max_attack": 271,
    "weapon_type": 8,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4011,
    "limit_break_id": 1040101,
    "base_id": 110257,
    "alt_id": 2,
    "coability": {
      "1": 104000003,
      "2": 104000004,
      "3": 104000005,
      "4": 104000007,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000123,
      "2": 400000123,
      "3": 400000125,
      "4": 400000125,
      "5": 400000127
    },
    "ability_1": {
      "1": 110120002,
      "2": 110120004,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 307,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10840201": {
    "name": "Thaniel",
    "chara_id": 10840201,
    "story_id": 110019011,
    "rarity": 4,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 26,
    "lvl1_health": 57,
    "lvl1_attack": 32,
    "lvl2_health": 66,
    "lvl2_attack": 38,
    "max_health": 469,
    "max_attack": 270,
    "weapon_type": 8,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4012,
    "limit_break_id": 1040102,
    "base_id": 110019,
    "alt_id": 1,
    "coability": {
      "1": 104000003,
      "2": 104000004,
      "3": 104000005,
      "4": 104000007,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000239,
      "2": 400000239,
      "3": 400000241,
      "4": 400000241,
      "5": 400000243
    },
    "ability_1": {
      "1": 110360004,
      "2": 110360005,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020204,
      "2": 110020206,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110100004,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10840202": {
    "name": "Nurse Aeleen",
    "chara_id": 10840202,
    "story_id": 110029021,
    "rarity": 4,
    "elemental_type": 2,
    "has_spiral": true,
    "shared_skill_number": 2,
    "base_health": 46,
    "base_attack": 26,
    "lvl1_health": 57,
    "lvl1_attack": 32,
    "lvl2_health": 66,
    "lvl2_attack": 38,
    "max_health": 469,
    "max_attack": 270,
    "weapon_type": 8,
    "mana_circle_name": "MC_0406",
    "mana_piece_id": 4062,
    "limit_break_id": 1040112,
    "base_id": 110029,
    "alt_id": 2,
    "coability": {
      "1": 104000003,
      "2": 104000004,
      "3": 104000005,
      "4": 104000007,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000206,
      "2": 400000206,
      "3": 400000208,
      "4": 400000208,
      "5": 400000210
    },
    "ability_1": {
      "1": 110120002,
      "2": 110120003,
      "3": 1958,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 246,
      "2": 1960,
      "3": 0,
      "4": 0
    }
  },
  "10840301": {
    "name": "Lowen",
    "chara_id": 10840301,
    "story_id": 110257011,
    "rarity": 4,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 26,
    "lvl1_health": 57,
    "lvl1_attack": 33,
    "lvl2_health": 66,
    "lvl2_attack": 38,
    "max_health": 469,
    "max_attack": 271,
    "weapon_type": 8,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4013,
    "limit_break_id": 1040103,
    "base_id": 110257,
    "alt_id": 1,
    "coability": {
      "1": 104000003,
      "2": 104000004,
      "3": 104000005,
      "4": 104000007,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000356,
      "2": 400000356,
      "3": 400000358,
      "4": 400000358,
      "5": 400000360
    },
    "ability_1": {
      "1": 110120002,
      "2": 110120003,
      "3": 1026,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 838,
      "4": 0
    },
    "ability_3": {
      "1": 110100004,
      "2": 110100007,
      "3": 0,
      "4": 0
    }
  },
  "10840302": {
    "name": "Wedding Xania",
    "chara_id": 10840302,
    "story_id": 110004021,
    "rarity": 4,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 26,
    "lvl1_health": 57,
    "lvl1_attack": 33,
    "lvl2_health": 66,
    "lvl2_attack": 38,
    "max_health": 469,
    "max_attack": 271,
    "weapon_type": 8,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4013,
    "limit_break_id": 1040103,
    "base_id": 110004,
    "alt_id": 2,
    "coability": {
      "1": 104000003,
      "2": 104000004,
      "3": 104000005,
      "4": 104000007,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000380,
      "2": 400000380,
      "3": 400000382,
      "4": 400000382,
      "5": 400000384
    },
    "ability_1": {
      "1": 210001904,
      "2": 210001905,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110120002,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10840401": {
    "name": "Halloween Althemia",
    "chara_id": 10840401,
    "story_id": 110047021,
    "rarity": 4,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 26,
    "lvl1_health": 57,
    "lvl1_attack": 32,
    "lvl2_health": 66,
    "lvl2_attack": 38,
    "max_health": 470,
    "max_attack": 270,
    "weapon_type": 8,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4014,
    "limit_break_id": 1040104,
    "base_id": 110047,
    "alt_id": 2,
    "coability": {
      "1": 104000003,
      "2": 104000004,
      "3": 104000005,
      "4": 104000007,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000524,
      "2": 400000524,
      "3": 400000526,
      "4": 400000526,
      "5": 400000528
    },
    "ability_1": {
      "1": 110120002,
      "2": 110120003,
      "3": 721,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 937,
      "4": 0
    },
    "ability_3": {
      "1": 210000304,
      "2": 210000307,
      "3": 0,
      "4": 0
    }
  },
  "10840402": {
    "name": "Vixel",
    "chara_id": 10840402,
    "story_id": 110304011,
    "rarity": 4,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 46,
    "base_attack": 26,
    "lvl1_health": 57,
    "lvl1_attack": 32,
    "lvl2_health": 66,
    "lvl2_attack": 38,
    "max_health": 470,
    "max_attack": 270,
    "weapon_type": 8,
    "mana_circle_name": "MC_0406",
    "mana_piece_id": 4064,
    "limit_break_id": 1040304,
    "base_id": 110304,
    "alt_id": 1,
    "coability": {
      "1": 104000003,
      "2": 104000004,
      "3": 104000005,
      "4": 104000007,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000530,
      "2": 400000530,
      "3": 400000532,
      "4": 400000532,
      "5": 400000534
    },
    "ability_1": {
      "1": 210001904,
      "2": 210001905,
      "3": 2154,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 2156,
      "4": 0
    },
    "ability_3": {
      "1": 110120002,
      "2": 721,
      "3": 0,
      "4": 0
    }
  },
  "10840403": {
    "name": "Felicia",
    "chara_id": 10840403,
    "story_id": 110277011,
    "rarity": 4,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 45,
    "base_attack": 26,
    "lvl1_health": 45,
    "lvl1_attack": 26,
    "lvl2_health": 65,
    "lvl2_attack": 37,
    "max_health": 461,
    "max_attack": 265,
    "weapon_type": 8,
    "mana_circle_name": "MC_0401",
    "mana_piece_id": 4014,
    "limit_break_id": 1040104,
    "base_id": 110277,
    "alt_id": 1,
    "coability": {
      "1": 104000003,
      "2": 104000004,
      "3": 104000005,
      "4": 104000007,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000501,
      "2": 400000501,
      "3": 400000503,
      "4": 400000503,
      "5": 400000505
    },
    "ability_1": {
      "1": 46,
      "2": 46,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 937,
      "2": 937,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110120004,
      "2": 110120004,
      "3": 0,
      "4": 0
    }
  },
  "10840501": {
    "name": "Cleo",
    "chara_id": 10840501,
    "story_id": 100004011,
    "rarity": 4,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 26,
    "lvl1_health": 55,
    "lvl1_attack": 32,
    "lvl2_health": 64,
    "lvl2_attack": 37,
    "max_health": 456,
    "max_attack": 266,
    "weapon_type": 8,
    "mana_circle_name": "MC_0402",
    "mana_piece_id": 4025,
    "limit_break_id": 1040205,
    "base_id": 100004,
    "alt_id": 1,
    "coability": {
      "1": 104000003,
      "2": 104000004,
      "3": 104000005,
      "4": 104000007,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000729,
      "2": 400000729,
      "3": 400000730,
      "4": 400000730,
      "5": 400000731
    },
    "ability_1": {
      "1": 110120002,
      "2": 110120003,
      "3": 815,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 682,
      "4": 0
    },
    "ability_3": {
      "1": 210000204,
      "2": 817,
      "3": 0,
      "4": 0
    }
  },
  "10850101": {
    "name": "Valentine's Hildegarde",
    "chara_id": 10850101,
    "story_id": 110043021,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 482,
    "max_attack": 280,
    "weapon_type": 8,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 110043,
    "alt_id": 2,
    "coability": {
      "1": 104000005,
      "2": 104000006,
      "3": 104000007,
      "4": 104000008,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000013,
      "2": 400000014,
      "3": 400000015,
      "4": 400000016,
      "5": 400000018
    },
    "ability_1": {
      "1": 9,
      "2": 10,
      "3": 1501,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 110120003,
      "2": 110120004,
      "3": 721,
      "4": 0
    }
  },
  "10850102": {
    "name": "Yukata Cassandra",
    "chara_id": 10850102,
    "story_id": 110337031,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 482,
    "max_attack": 280,
    "weapon_type": 8,
    "mana_circle_name": "MC_0509",
    "mana_piece_id": 5081,
    "limit_break_id": 1050111,
    "base_id": 110337,
    "alt_id": 3,
    "coability": {
      "1": 104000005,
      "2": 104000006,
      "3": 104000007,
      "4": 104000008,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000777,
      "2": 400000778,
      "3": 400000779,
      "4": 400000780,
      "5": 400000782
    },
    "ability_1": {
      "1": 210000306,
      "2": 210000307,
      "3": 1967,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 678,
      "4": 0
    },
    "ability_3": {
      "1": 1169,
      "2": 1170,
      "3": 1966,
      "4": 0
    }
  },
  "10850103": {
    "name": "Kuzunoha",
    "chara_id": 10850103,
    "story_id": 110374011,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 482,
    "max_attack": 280,
    "weapon_type": 8,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5011,
    "limit_break_id": 1050101,
    "base_id": 110374,
    "alt_id": 1,
    "coability": {
      "1": 104000005,
      "2": 104000006,
      "3": 104000007,
      "4": 104000008,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000839,
      "2": 400000840,
      "3": 400000841,
      "4": 400000842,
      "5": 400000843
    },
    "ability_1": {
      "1": 1616,
      "2": 1617,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210000306,
      "2": 210000307,
      "3": 0,
      "4": 0
    }
  },
  "10850104": {
    "name": "Ayaha & Otoha",
    "chara_id": 10850104,
    "story_id": 110399011,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 45,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 35,
    "lvl2_health": 65,
    "lvl2_attack": 41,
    "max_health": 458,
    "max_attack": 294,
    "weapon_type": 8,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5041,
    "limit_break_id": 1050101,
    "base_id": 110399,
    "alt_id": 1,
    "coability": {
      "1": 136000009,
      "2": 136000010,
      "3": 136000011,
      "4": 136000012,
      "5": 136000013
    },
    "chain_ability": {
      "1": 400000844,
      "2": 400000845,
      "3": 400000846,
      "4": 400000847,
      "5": 400000848
    },
    "ability_1": {
      "1": 2437,
      "2": 2438,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 2450,
      "2": 2451,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2439,
      "2": 2440,
      "3": 0,
      "4": 0
    }
  },
  "10850201": {
    "name": "Jiang Ziya",
    "chara_id": 10850201,
    "story_id": 110351011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 59,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 484,
    "max_attack": 279,
    "weapon_type": 8,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 110351,
    "alt_id": 1,
    "coability": {
      "1": 104000005,
      "2": 104000006,
      "3": 104000007,
      "4": 104000008,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000184,
      "2": 400000185,
      "3": 400000186,
      "4": 400000187,
      "5": 400000713
    },
    "ability_1": {
      "1": 110120003,
      "2": 110120004,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020204,
      "2": 110020206,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210002205,
      "2": 210002206,
      "3": 0,
      "4": 0
    }
  },
  "10850202": {
    "name": "Dragonyule Lily",
    "chara_id": 10850202,
    "story_id": 110252021,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 59,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 484,
    "max_attack": 279,
    "weapon_type": 8,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 110252,
    "alt_id": 2,
    "coability": {
      "1": 104000005,
      "2": 104000006,
      "3": 104000007,
      "4": 104000008,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000824,
      "2": 400000825,
      "3": 400000826,
      "4": 400000827,
      "5": 400000828
    },
    "ability_1": {
      "1": 1523,
      "2": 1524,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 1721,
      "2": 1722,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210000306,
      "2": 210000307,
      "3": 0,
      "4": 0
    }
  },
  "10850203": {
    "name": "Sandalphon",
    "chara_id": 10850203,
    "story_id": 110396011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 59,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 484,
    "max_attack": 279,
    "weapon_type": 8,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5042,
    "limit_break_id": 1050102,
    "base_id": 110396,
    "alt_id": 1,
    "coability": {
      "1": 104000005,
      "2": 104000006,
      "3": 104000007,
      "4": 104000008,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000979,
      "2": 400000980,
      "3": 400000981,
      "4": 400000982,
      "5": 400000983
    },
    "ability_1": {
      "1": 2287,
      "2": 2288,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2289,
      "2": 2290,
      "3": 0,
      "4": 0
    }
  },
  "10850301": {
    "name": "Akasha",
    "chara_id": 10850301,
    "story_id": 110341011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 483,
    "max_attack": 280,
    "weapon_type": 8,
    "mana_circle_name": "MC_0510",
    "mana_piece_id": 5083,
    "limit_break_id": 1050203,
    "base_id": 110341,
    "alt_id": 1,
    "coability": {
      "1": 104000005,
      "2": 104000006,
      "3": 104000007,
      "4": 104000008,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000309,
      "2": 400000310,
      "3": 400000311,
      "4": 400000312,
      "5": 400000314
    },
    "ability_1": {
      "1": 110120003,
      "2": 110120004,
      "3": 2080,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 838,
      "4": 0
    },
    "ability_3": {
      "1": 210002205,
      "2": 210002206,
      "3": 210002207,
      "4": 0
    }
  },
  "10850302": {
    "name": "Formal Noelle",
    "chara_id": 10850302,
    "story_id": 110340021,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 483,
    "max_attack": 280,
    "weapon_type": 8,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110340,
    "alt_id": 2,
    "coability": {
      "1": 104000005,
      "2": 104000006,
      "3": 104000007,
      "4": 104000008,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000321,
      "2": 400000322,
      "3": 400000323,
      "4": 400000324,
      "5": 400000326
    },
    "ability_1": {
      "1": 1443,
      "2": 1444,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110160105,
      "2": 110160106,
      "3": 0,
      "4": 0
    }
  },
  "10850303": {
    "name": "Nina",
    "chara_id": 10850303,
    "story_id": 100008041,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 483,
    "max_attack": 280,
    "weapon_type": 8,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5043,
    "limit_break_id": 1050103,
    "base_id": 100008,
    "alt_id": 4,
    "coability": {
      "1": 104000005,
      "2": 104000006,
      "3": 104000007,
      "4": 104000008,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400001047,
      "2": 400001048,
      "3": 400001049,
      "4": 400001050,
      "5": 400001051
    },
    "ability_1": {
      "1": 2628,
      "2": 2629,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2581,
      "2": 2583,
      "3": 0,
      "4": 0
    }
  },
  "10850401": {
    "name": "Hildegarde",
    "chara_id": 10850401,
    "story_id": 110043011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 59,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 485,
    "max_attack": 278,
    "weapon_type": 8,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 110043,
    "alt_id": 1,
    "coability": {
      "1": 104000005,
      "2": 104000006,
      "3": 104000007,
      "4": 104000008,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000448,
      "2": 400000449,
      "3": 400000450,
      "4": 400000451,
      "5": 400000453
    },
    "ability_1": {
      "1": 110120003,
      "2": 110120004,
      "3": 721,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 937,
      "4": 0
    },
    "ability_3": {
      "1": 210002205,
      "2": 210002206,
      "3": 1183,
      "4": 0
    }
  },
  "10850402": {
    "name": "Gala Zena",
    "chara_id": 10850402,
    "story_id": 100009081,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 45,
    "base_attack": 28,
    "lvl1_health": 56,
    "lvl1_attack": 35,
    "lvl2_health": 65,
    "lvl2_attack": 41,
    "max_health": 461,
    "max_attack": 292,
    "weapon_type": 8,
    "mana_circle_name": "MC_0514",
    "mana_piece_id": 5144,
    "limit_break_id": 1050204,
    "base_id": 100009,
    "alt_id": 8,
    "coability": {
      "1": 104000005,
      "2": 104000006,
      "3": 104000007,
      "4": 104000008,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000472,
      "2": 400000473,
      "3": 400000474,
      "4": 400000475,
      "5": 400000477
    },
    "ability_1": {
      "1": 1244,
      "2": 1245,
      "3": 2676,
      "4": 0
    },
    "ability_2": {
      "1": 432,
      "2": 433,
      "3": 43360,
      "4": 0
    },
    "ability_3": {
      "1": 1247,
      "2": 1248,
      "3": 2677,
      "4": 0
    }
  },
  "10850403": {
    "name": "Kimono Notte",
    "chara_id": 10850403,
    "story_id": 100007101,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 59,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 485,
    "max_attack": 278,
    "weapon_type": 8,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5044,
    "limit_break_id": 1050104,
    "base_id": 100007,
    "alt_id": 10,
    "coability": {
      "1": 104000005,
      "2": 104000006,
      "3": 104000007,
      "4": 104000008,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400001021,
      "2": 400001022,
      "3": 400001023,
      "4": 400001024,
      "5": 400001025
    },
    "ability_1": {
      "1": 2519,
      "2": 2520,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020104,
      "2": 110020106,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110120003,
      "2": 110120004,
      "3": 0,
      "4": 0
    }
  },
  "10850501": {
    "name": "Heinwald",
    "chara_id": 10850501,
    "story_id": 110280011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 482,
    "max_attack": 281,
    "weapon_type": 8,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5015,
    "limit_break_id": 1050105,
    "base_id": 110280,
    "alt_id": 1,
    "coability": {
      "1": 104000005,
      "2": 104000006,
      "3": 104000007,
      "4": 104000008,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000605,
      "2": 400000606,
      "3": 400000607,
      "4": 400000608,
      "5": 400000610
    },
    "ability_1": {
      "1": 210002005,
      "2": 210002006,
      "3": 718,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 682,
      "4": 0
    },
    "ability_3": {
      "1": 110120003,
      "2": 110120004,
      "3": 721,
      "4": 0
    }
  },
  "10850502": {
    "name": "Summer Verica",
    "chara_id": 10850502,
    "story_id": 110269021,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": true,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 482,
    "max_attack": 281,
    "weapon_type": 8,
    "mana_circle_name": "MC_0509",
    "mana_piece_id": 5085,
    "limit_break_id": 1050205,
    "base_id": 110269,
    "alt_id": 2,
    "coability": {
      "1": 104000005,
      "2": 104000006,
      "3": 104000007,
      "4": 104000008,
      "5": 104000010
    },
    "chain_ability": {
      "1": 400000581,
      "2": 400000582,
      "3": 400000583,
      "4": 400000584,
      "5": 400000586
    },
    "ability_1": {
      "1": 210001905,
      "2": 210001906,
      "3": 2007,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 960,
      "4": 0
    },
    "ability_3": {
      "1": 110100005,
      "2": 110100006,
      "3": 110100007,
      "4": 0
    }
  },
  "10850503": {
    "name": "Grace",
    "chara_id": 10850503,
    "story_id": 110059011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 58,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 482,
    "max_attack": 281,
    "weapon_type": 8,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5045,
    "limit_break_id": 1050105,
    "base_id": 110059,
    "alt_id": 1,
    "coability": {
      "1": 106000012,
      "2": 106000013,
      "3": 106000014,
      "4": 106000015,
      "5": 106000016
    },
    "chain_ability": {
      "1": 400000652,
      "2": 400000653,
      "3": 400000654,
      "4": 400000655,
      "5": 400000657
    },
    "ability_1": {
      "1": 866,
      "2": 867,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020504,
      "2": 110020506,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210001103,
      "2": 210001104,
      "3": 0,
      "4": 0
    }
  },
  "10930401": {
    "name": "Sharpshooter Joe",
    "chara_id": 10930401,
    "story_id": 110003021,
    "rarity": 3,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 42,
    "base_attack": 28,
    "lvl1_health": 52,
    "lvl1_attack": 34,
    "lvl2_health": 61,
    "lvl2_attack": 40,
    "max_health": 431,
    "max_attack": 285,
    "weapon_type": 9,
    "mana_circle_name": "MC_0301",
    "mana_piece_id": 3014,
    "limit_break_id": 1030104,
    "base_id": 110003,
    "alt_id": 2,
    "coability": {
      "1": 109000001,
      "2": 109000003,
      "3": 109000005,
      "4": 109000007,
      "5": 109000009
    },
    "chain_ability": {
      "1": 400000448,
      "2": 400000448,
      "3": 400000449,
      "4": 400000449,
      "5": 400000450
    },
    "ability_1": {
      "1": 1207,
      "2": 1208,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020103,
      "2": 110020104,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020103,
      "2": 0,
      "3": 0,
      "4": 0
    }
  },
  "10950101": {
    "name": "Gala Leonidas",
    "chara_id": 10950101,
    "story_id": 100013041,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 452,
    "max_attack": 302,
    "weapon_type": 9,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5021,
    "limit_break_id": 1050101,
    "base_id": 100013,
    "alt_id": 4,
    "coability": {
      "1": 109000005,
      "2": 109000006,
      "3": 109000007,
      "4": 109000008,
      "5": 109000009
    },
    "chain_ability": {
      "1": 400000819,
      "2": 400000820,
      "3": 400000821,
      "4": 400000822,
      "5": 400000823
    },
    "ability_1": {
      "1": 1460,
      "2": 1461,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 1463,
      "2": 1464,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1465,
      "2": 1466,
      "3": 0,
      "4": 0
    }
  },
  "10950102": {
    "name": "Faris",
    "chara_id": 10950102,
    "story_id": 110382011,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 452,
    "max_attack": 302,
    "weapon_type": 9,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5041,
    "limit_break_id": 1050101,
    "base_id": 110382,
    "alt_id": 1,
    "coability": {
      "1": 109000005,
      "2": 109000006,
      "3": 109000007,
      "4": 109000008,
      "5": 109000009
    },
    "chain_ability": {
      "1": 400000141,
      "2": 400000142,
      "3": 400000143,
      "4": 400000144,
      "5": 400000146
    },
    "ability_1": {
      "1": 1736,
      "2": 1737,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110021004,
      "2": 110021006,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1742,
      "2": 1743,
      "3": 0,
      "4": 0
    }
  },
  "10950103": {
    "name": "Dragonyule Ilia",
    "chara_id": 10950103,
    "story_id": 110367031,
    "rarity": 5,
    "elemental_type": 1,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 452,
    "max_attack": 302,
    "weapon_type": 9,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5021,
    "limit_break_id": 1050101,
    "base_id": 110367,
    "alt_id": 3,
    "coability": {
      "1": 109000005,
      "2": 109000006,
      "3": 109000007,
      "4": 109000008,
      "5": 109000009
    },
    "chain_ability": {
      "1": 400000735,
      "2": 400000736,
      "3": 400000737,
      "4": 400000738,
      "5": 400000740
    },
    "ability_1": {
      "1": 2476,
      "2": 2477,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2501,
      "2": 2502,
      "3": 0,
      "4": 0
    }
  },
  "10950201": {
    "name": "Lapis",
    "chara_id": 10950201,
    "story_id": 110370011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 453,
    "max_attack": 301,
    "weapon_type": 9,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 110370,
    "alt_id": 1,
    "coability": {
      "1": 109000005,
      "2": 109000006,
      "3": 109000007,
      "4": 109000008,
      "5": 109000009
    },
    "chain_ability": {
      "1": 400000256,
      "2": 400000256,
      "3": 400000256,
      "4": 400000256,
      "5": 400000256
    },
    "ability_1": {
      "1": 1432,
      "2": 1434,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1439,
      "2": 1440,
      "3": 0,
      "4": 0
    }
  },
  "10950202": {
    "name": "Yoshitsune",
    "chara_id": 10950202,
    "story_id": 110376011,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 453,
    "max_attack": 301,
    "weapon_type": 9,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5022,
    "limit_break_id": 1050102,
    "base_id": 110376,
    "alt_id": 1,
    "coability": {
      "1": 109000005,
      "2": 109000006,
      "3": 109000007,
      "4": 109000008,
      "5": 109000009
    },
    "chain_ability": {
      "1": 400000849,
      "2": 400000850,
      "3": 400000851,
      "4": 400000852,
      "5": 400000853
    },
    "ability_1": {
      "1": 1544,
      "2": 1545,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210000505,
      "2": 210000506,
      "3": 0,
      "4": 0
    }
  },
  "10950203": {
    "name": "Sharpshooter Sarisse",
    "chara_id": 10950203,
    "story_id": 100029041,
    "rarity": 5,
    "elemental_type": 2,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 453,
    "max_attack": 301,
    "weapon_type": 9,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5012,
    "limit_break_id": 1050102,
    "base_id": 100029,
    "alt_id": 4,
    "coability": {
      "1": 109000005,
      "2": 109000006,
      "3": 109000007,
      "4": 109000008,
      "5": 109000009
    },
    "chain_ability": {
      "1": 400000268,
      "2": 400000269,
      "3": 400000270,
      "4": 400000271,
      "5": 400000712
    },
    "ability_1": {
      "1": 955,
      "2": 956,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020604,
      "2": 110020606,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210001203,
      "2": 210001204,
      "3": 0,
      "4": 0
    }
  },
  "10950301": {
    "name": "Formal Joachim",
    "chara_id": 10950301,
    "story_id": 110350021,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 452,
    "max_attack": 301,
    "weapon_type": 9,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050103,
    "base_id": 110350,
    "alt_id": 2,
    "coability": {
      "1": 109000005,
      "2": 109000006,
      "3": 109000007,
      "4": 109000008,
      "5": 109000009
    },
    "chain_ability": {
      "1": 400000807,
      "2": 400000808,
      "3": 400000809,
      "4": 400000810,
      "5": 400000812
    },
    "ability_1": {
      "1": 1441,
      "2": 1442,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110160105,
      "2": 110160106,
      "3": 0,
      "4": 0
    }
  },
  "10950302": {
    "name": "Saiga",
    "chara_id": 10950302,
    "story_id": 110389011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 452,
    "max_attack": 301,
    "weapon_type": 9,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5023,
    "limit_break_id": 1050103,
    "base_id": 110389,
    "alt_id": 1,
    "coability": {
      "1": 109000005,
      "2": 109000006,
      "3": 109000007,
      "4": 109000008,
      "5": 109000009
    },
    "chain_ability": {
      "1": 400000285,
      "2": 400000286,
      "3": 400000287,
      "4": 400000288,
      "5": 400000290
    },
    "ability_1": {
      "1": 1944,
      "2": 1947,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020304,
      "2": 110020306,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 210000105,
      "2": 210000106,
      "3": 0,
      "4": 0
    }
  },
  "10950303": {
    "name": "Cecile",
    "chara_id": 10950303,
    "story_id": 110394011,
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 452,
    "max_attack": 301,
    "weapon_type": 9,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5043,
    "limit_break_id": 1050103,
    "base_id": 110394,
    "alt_id": 1,
    "coability": {
      "1": 109000005,
      "2": 109000006,
      "3": 109000007,
      "4": 109000008,
      "5": 109000009
    },
    "chain_ability": {
      "1": 400000807,
      "2": 400000808,
      "3": 400000809,
      "4": 400000810,
      "5": 400000812
    },
    "ability_1": {
      "1": 2184,
      "2": 2185,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020904,
      "2": 110020906,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2182,
      "2": 2183,
      "3": 0,
      "4": 0
    }
  },
  "10950401": {
    "name": "Ilia",
    "chara_id": 10950401,
    "story_id": 110367011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 454,
    "max_attack": 300,
    "weapon_type": 9,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5024,
    "limit_break_id": 1050104,
    "base_id": 110367,
    "alt_id": 1,
    "coability": {
      "1": 109000005,
      "2": 109000006,
      "3": 109000007,
      "4": 109000008,
      "5": 109000009
    },
    "chain_ability": {
      "1": 400000484,
      "2": 400000485,
      "3": 400000486,
      "4": 400000487,
      "5": 400000489
    },
    "ability_1": {
      "1": 1351,
      "2": 1352,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 1400,
      "2": 1401,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1340,
      "2": 1343,
      "3": 0,
      "4": 0
    }
  },
  "10950402": {
    "name": "Eirene",
    "chara_id": 10950402,
    "story_id": 110384011,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 49,
    "base_attack": 26,
    "lvl1_health": 61,
    "lvl1_attack": 33,
    "lvl2_health": 71,
    "lvl2_attack": 38,
    "max_health": 502,
    "max_attack": 271,
    "weapon_type": 9,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5024,
    "limit_break_id": 1050104,
    "base_id": 110384,
    "alt_id": 1,
    "coability": {
      "1": 109000005,
      "2": 109000006,
      "3": 109000007,
      "4": 109000008,
      "5": 109000009
    },
    "chain_ability": {
      "1": 400000885,
      "2": 400000886,
      "3": 400000887,
      "4": 400000888,
      "5": 400000890
    },
    "ability_1": {
      "1": 1746,
      "2": 1747,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020104,
      "2": 110020106,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1744,
      "2": 1745,
      "3": 0,
      "4": 0
    }
  },
  "10950403": {
    "name": "Halloween Laxi",
    "chara_id": 10950403,
    "story_id": 100032071,
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 55,
    "lvl1_attack": 36,
    "lvl2_health": 64,
    "lvl2_attack": 42,
    "max_health": 454,
    "max_attack": 300,
    "weapon_type": 9,
    "mana_circle_name": "MC_0504",
    "mana_piece_id": 5044,
    "limit_break_id": 1050104,
    "base_id": 100032,
    "alt_id": 7,
    "coability": {
      "1": 109000005,
      "2": 109000006,
      "3": 109000007,
      "4": 109000008,
      "5": 109000009
    },
    "chain_ability": {
      "1": 400000985,
      "2": 400000986,
      "3": 400000987,
      "4": 400000988,
      "5": 400000989
    },
    "ability_1": {
      "1": 2344,
      "2": 2345,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020704,
      "2": 110020706,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2352,
      "2": 2356,
      "3": 0,
      "4": 0
    }
  },
  "10950501": {
    "name": "Gala Chelle",
    "chara_id": 10950501,
    "story_id": 100015051,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 54,
    "lvl1_attack": 36,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 450,
    "max_attack": 303,
    "weapon_type": 9,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5025,
    "limit_break_id": 1050105,
    "base_id": 100015,
    "alt_id": 5,
    "coability": {
      "1": 109000005,
      "2": 109000006,
      "3": 109000007,
      "4": 109000008,
      "5": 109000009
    },
    "chain_ability": {
      "1": 400000854,
      "2": 400000855,
      "3": 400000856,
      "4": 400000857,
      "5": 400000858
    },
    "ability_1": {
      "1": 1609,
      "2": 1610,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 1611,
      "2": 1612,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 1613,
      "2": 1614,
      "3": 0,
      "4": 0
    }
  },
  "10950502": {
    "name": "Summer Mym",
    "chara_id": 10950502,
    "story_id": 100010101,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 0,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 54,
    "lvl1_attack": 36,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 450,
    "max_attack": 303,
    "weapon_type": 9,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5025,
    "limit_break_id": 1050105,
    "base_id": 100010,
    "alt_id": 10,
    "coability": {
      "1": 109000005,
      "2": 109000006,
      "3": 109000007,
      "4": 109000008,
      "5": 109000009
    },
    "chain_ability": {
      "1": 400000658,
      "2": 400000659,
      "3": 400000660,
      "4": 400000661,
      "5": 400000663
    },
    "ability_1": {
      "1": 2057,
      "2": 2059,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110120003,
      "2": 110120004,
      "3": 0,
      "4": 0
    }
  },
  "10950503": {
    "name": "Humanoid Zodiark",
    "chara_id": 10950503,
    "story_id": 110404011,
    "rarity": 5,
    "elemental_type": 5,
    "has_spiral": false,
    "shared_skill_number": 2,
    "base_health": 44,
    "base_attack": 29,
    "lvl1_health": 54,
    "lvl1_attack": 36,
    "lvl2_health": 63,
    "lvl2_attack": 43,
    "max_health": 450,
    "max_attack": 303,
    "weapon_type": 9,
    "mana_circle_name": "MC_0502",
    "mana_piece_id": 5025,
    "limit_break_id": 1050105,
    "base_id": 110404,
    "alt_id": 1,
    "coability": {
      "1": 109000005,
      "2": 109000006,
      "3": 109000007,
      "4": 109000008,
      "5": 109000009
    },
    "chain_ability": {
      "1": 400001052,
      "2": 400001053,
      "3": 400001054,
      "4": 400001055,
      "5": 400001056
    },
    "ability_1": {
      "1": 2681,
      "2": 2683,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 110020404,
      "2": 110020406,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 2685,
      "2": 2686,
      "3": 0,
      "4": 0
    }
  },
  "19900001": {
    "name": "Zethia",
    "chara_id": 19900001,
    "story_id": "N/A",
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 47,
    "base_attack": 27,
    "lvl1_health": 59,
    "lvl1_attack": 34,
    "lvl2_health": 68,
    "lvl2_attack": 39,
    "max_health": 485,
    "max_attack": 278,
    "weapon_type": 8,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 100009,
    "alt_id": 1,
    "coability": {
      "1": 106000012,
      "2": 106000013,
      "3": 106000014,
      "4": 106000015,
      "5": 106000016
    },
    "chain_ability": {
      "1": 400001021,
      "2": 400001022,
      "3": 400001023,
      "4": 400001024,
      "5": 400001025
    },
    "ability_1": {
      "1": 924,
      "2": 924,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 85,
      "2": 85,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 433,
      "2": 433,
      "3": 0,
      "4": 0
    }
  },
  "19900002": {
    "name": "Leif",
    "chara_id": 19900002,
    "story_id": "N/A",
    "rarity": 5,
    "elemental_type": 4,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 49,
    "base_attack": 26,
    "lvl1_health": 60,
    "lvl1_attack": 33,
    "lvl2_health": 70,
    "lvl2_attack": 38,
    "max_health": 500,
    "max_attack": 272,
    "weapon_type": 1,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5014,
    "limit_break_id": 1050104,
    "base_id": 100018,
    "alt_id": 1,
    "coability": {
      "1": 118000004,
      "2": 118000005,
      "3": 118000006,
      "4": 118000007,
      "5": 118000008
    },
    "chain_ability": {
      "1": 617,
      "2": 617,
      "3": 617,
      "4": 617,
      "5": 617
    },
    "ability_1": {
      "1": 2414,
      "2": 2414,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 989,
      "2": 989,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020706,
      "2": 110020706,
      "3": 0,
      "4": 0
    }
  },
  "19900005": {
    "name": "Leif",
    "chara_id": 19900005,
    "story_id": "N/A",
    "rarity": 5,
    "elemental_type": 3,
    "has_spiral": false,
    "shared_skill_number": 1,
    "base_health": 49,
    "base_attack": 26,
    "lvl1_health": 60,
    "lvl1_attack": 33,
    "lvl2_health": 70,
    "lvl2_attack": 38,
    "max_health": 500,
    "max_attack": 272,
    "weapon_type": 1,
    "mana_circle_name": "MC_0501",
    "mana_piece_id": 5013,
    "limit_break_id": 1050104,
    "base_id": 100018,
    "alt_id": 6,
    "coability": {
      "1": 118000004,
      "2": 118000005,
      "3": 118000006,
      "4": 118000007,
      "5": 118000008
    },
    "chain_ability": {
      "1": 320000918,
      "2": 320000918,
      "3": 320000918,
      "4": 320000918,
      "5": 320000918
    },
    "ability_1": {
      "1": 2414,
      "2": 2414,
      "3": 0,
      "4": 0
    },
    "ability_2": {
      "1": 989,
      "2": 989,
      "3": 0,
      "4": 0
    },
    "ability_3": {
      "1": 110020906,
      "2": 110020906,
      "3": 0,
      "4": 0
    }
  }
}

function GetCharacterInfo(CharacterID, Attribute) {
	if (CharacterInfoMap[String(CharacterID)] == undefined) { return 0; }
	return CharacterInfoMap[String(CharacterID)][Attribute];
}

function GenerateCharacterSaveTemplate() {
	let FullCharacterTemplate = []
	let i = 0; 
	while (i < Object.keys(CharacterInfoMap).length) {
		const CharacterID = Object.keys(CharacterInfoMap)[i];
		var CharacterTemplate = {
				"chara_id": CharacterInfoMap[CharacterID]['chara_id'],
				"rarity": CharacterInfoMap[CharacterID]['rarity'],
				"exp": 0,
				"level": 1,
				"additional_max_level": 0,
				"hp_plus_count": 0,
				"attack_plus_count": 0,
				"limit_break_count": 0,
				"is_new": 1,
				"gettime": Math.floor(Date.now() / 1000),
				"skill_1_level": 1,
				"skill_2_level": 0,
				"ability_1_level": 0,
				"ability_2_level": 0,
				"ability_3_level": 0,
				"burst_attack_level": 0,
				"combo_buildup_count": 0,
				"hp": CharacterInfoMap[CharacterID]['base_health'],
				"attack": CharacterInfoMap[CharacterID]['base_attack'],
				"ex_ability_level": 1,
				"ex_ability_2_level": 1,
				"is_temporary": 0,
				"is_unlock_edit_skill": 0,
				"mana_circle_piece_id_list": [
				],
				"list_view_flag": 1
		}
		FullCharacterTemplate[i] = CharacterTemplate;
		i++;
	}
	return FullCharacterTemplate;
}
function GenerateCharacterSaveTemplateCorrect() {
	let FullCharacterTemplate = []
	let i = 0; 
	while (i < Object.keys(CharacterInfoMap).length) {
		const CharacterID = Object.keys(CharacterInfoMap)[i];
		if (parseInt(CharacterID) <= 19900000) {
			var CharacterTemplate = {
					"chara_id": CharacterInfoMap[CharacterID]['chara_id'],
					"rarity": CharacterInfoMap[CharacterID]['rarity'],
					"exp": 0,
					"level": 1,
					"additional_max_level": 0,
					"hp_plus_count": 0,
					"attack_plus_count": 0,
					"limit_break_count": 0,
					"is_new": 1,
					"gettime": Math.floor(Date.now() / 1000),
					"skill_1_level": 1,
					"skill_2_level": 0,
					"ability_1_level": 1,
					"ability_2_level": 0,
					"ability_3_level": 0,
					"burst_attack_level": 0,
					"combo_buildup_count": 0,
					"hp": CharacterInfoMap[CharacterID]['base_health'],
					"attack": CharacterInfoMap[CharacterID]['base_attack'],
					"ex_ability_level": 1,
					"ex_ability_2_level": 1,
					"is_temporary": 0,
					"is_unlock_edit_skill": 0,
					"mana_circle_piece_id_list": [
					],
					"list_view_flag": 1
			}
			FullCharacterTemplate.push(CharacterTemplate);
		}
		i++;
	}
	return FullCharacterTemplate;
}
function GenerateCharacterMaxSaveTemplate() {
	let FullCharacterTemplate = []
	let i = 0; 
	while (i < Object.keys(CharacterInfoMap).length) {
		const CharacterID = Object.keys(CharacterInfoMap)[i];
		var CharacterTemplate = {
				"chara_id": CharacterInfoMap[CharacterID]['chara_id'],
				"rarity": 5,
				"exp": 1191950,
				"level": 80,
				"additional_max_level": 0,
				"hp_plus_count": 100,
				"attack_plus_count": 100,
				"limit_break_count": 4,
				"is_new": 1,
				"gettime": Math.floor(Date.now() / 1000),
				"skill_1_level": 3,
				"skill_2_level": 2,
				"ability_1_level": 2,
				"ability_2_level": 2,
				"ability_3_level": 2,
				"burst_attack_level": 2,
				"combo_buildup_count": 0,
				"hp": CharacterInfoMap[CharacterID]['max_health'] + 280,
				"attack": CharacterInfoMap[CharacterID]['max_attack'] + 260,
				"ex_ability_level": 5,
				"ex_ability_2_level": 5,
				"is_temporary": 0,
				"is_unlock_edit_skill": 1,
				"mana_circle_piece_id_list": [ 1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 
											   11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
											   21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
					  						   31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
					  						   41, 42, 43, 44, 45, 46, 47, 48, 49, 50 ],
				"list_view_flag": 1
		}
		if (CharacterInfoMap[CharacterID]['has_spiral'] == true) {
			CharacterTemplate['exp'] = 8866950;
			CharacterTemplate['level'] = 100;
			CharacterTemplate['additional_max_level'] = 20;
			CharacterTemplate['limit_break_count'] = 5;
			CharacterTemplate['skill_1_level'] = 4;
			CharacterTemplate['skill_2_level'] = 3;
			CharacterTemplate['ability_1_level'] = 3;
			CharacterTemplate['ability_2_level'] = 3;
			CharacterTemplate['ability_3_level'] = 3;
			CharacterTemplate['combo_buildup_count'] = 1;
			CharacterTemplate['hp'] = CharacterInfoMap[CharacterID]['max_health'] + 560;
			CharacterTemplate['attack'] = CharacterInfoMap[CharacterID]['max_attack'] + 520;
			CharacterTemplate['mana_circle_piece_id_list'] = [ 1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 
												   			   11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
												   			   21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
						  						   			   31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
					  							   			   41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
															   51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
															   61, 62, 63, 64, 65, 66, 67, 68, 69, 70 ]
			if (CharacterInfoMap[CharacterID]['rarity'] == 4 && CharacterID != "10140101" ) { CharacterTemplate['ability_3_level'] = 2; }
			if (CharacterInfoMap[CharacterID]['rarity'] == 3) { CharacterTemplate['ability_3_level'] = 2; }
		}
		else {
			if (CharacterInfoMap[CharacterID]['rarity'] == 4 && CharacterID != "10140101" ) { CharacterTemplate['ability_3_level'] = 1; }
			if (CharacterInfoMap[CharacterID]['rarity'] == 3) { CharacterTemplate['ability_3_level'] = 1; }
		}
		if (CharacterID == "10750102" || CharacterID == "19900001" || CharacterID == "19900002" || CharacterID == "19900005") {
			CharacterTemplate['skill_1_level'] = 1;
			CharacterTemplate['skill_2_level'] = 1; }
		FullCharacterTemplate.push(CharacterTemplate);
		i++;
	}
	return FullCharacterTemplate;
}
function GenerateCharacterHackedSaveTemplate() {
	let FullCharacterTemplate = []
	let i = 0; 
	while (i < Object.keys(CharacterInfoMap).length) {
		const CharacterID = Object.keys(CharacterInfoMap)[i];
		var CharacterTemplate = {
				"chara_id": CharacterInfoMap[CharacterID]['chara_id'],
				"rarity": 5,
				"exp": 1191950,
				"level": 80,
				"additional_max_level": 0,
				"hp_plus_count": 900,
				"attack_plus_count": 900,
				"limit_break_count": 4,
				"is_new": 1,
				"gettime": Math.floor(Date.now() / 1000),
				"skill_1_level": 3,
				"skill_2_level": 2,
				"ability_1_level": 2,
				"ability_2_level": 2,
				"ability_3_level": 2,
				"burst_attack_level": 2,
				"combo_buildup_count": 0,
				"hp": 9999,
				"attack": 9999,
				"ex_ability_level": 5,
				"ex_ability_2_level": 5,
				"is_temporary": 0,
				"is_unlock_edit_skill": 1,
				"mana_circle_piece_id_list": [ 1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 
											   11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
											   21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
					  						   31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
					  						   41, 42, 43, 44, 45, 46, 47, 48, 49, 50 ],
				"list_view_flag": 1
		}
		if (CharacterInfoMap[CharacterID]['has_spiral'] == true) {
			CharacterTemplate['exp'] = 8866950;
			CharacterTemplate['level'] = 100;
			CharacterTemplate['additional_max_level'] = 20;
			CharacterTemplate['limit_break_count'] = 5;
			CharacterTemplate['skill_1_level'] = 4;
			CharacterTemplate['skill_2_level'] = 3;
			CharacterTemplate['ability_1_level'] = 3;
			CharacterTemplate['ability_2_level'] = 3;
			CharacterTemplate['ability_3_level'] = 3;
			CharacterTemplate['combo_buildup_count'] = 1;
			CharacterTemplate['mana_circle_piece_id_list'] = [ 1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 
												   			   11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
												   			   21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
						  						   			   31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
					  							   			   41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
															   51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
															   61, 62, 63, 64, 65, 66, 67, 68, 69, 70 ]
			if (CharacterInfoMap[CharacterID]['rarity'] == 4 && CharacterID != "10140101" ) { CharacterTemplate['ability_3_level'] = 2; }
			if (CharacterInfoMap[CharacterID]['rarity'] == 3) { CharacterTemplate['ability_3_level'] = 2; }
		}
		else {
			if (CharacterInfoMap[CharacterID]['rarity'] == 4 && CharacterID != "10140101" ) { CharacterTemplate['ability_3_level'] = 1; }
			if (CharacterInfoMap[CharacterID]['rarity'] == 3) { CharacterTemplate['ability_3_level'] = 1; }
		}
		if (CharacterID == "10750102" || CharacterID == "19900001" || CharacterID == "19900002" || CharacterID == "19900005") {
			CharacterTemplate['skill_1_level'] = 1;
			CharacterTemplate['skill_2_level'] = 1; }
		FullCharacterTemplate.push(CharacterTemplate);
		i++;
	}
	return FullCharacterTemplate;
}
function GenerateCharacterStoryTemplate() {
	let FullCharacterTemplate = []
	let i = 0; 
	while (i < Object.keys(CharacterInfoMap).length) {
		const CharacterID = Object.keys(CharacterInfoMap)[i];
		if (CharacterInfoMap[CharacterID]['story_id'] != "N/A") {
			let y = 0; while (y < 5) {
				const CharacterStoryID = CharacterInfoMap[CharacterID]['story_id'] + y;
				var CharacterTemplate = {
					'unit_story_id': CharacterStoryID,
					'is_read': 1
				}
				FullCharacterTemplate.push(CharacterTemplate);
				y++;
			}
		}
		i++;
	}
	return FullCharacterTemplate;
}
function GenerateEntitySaveTemplateCorrect(NewEntityList) {
	let FullCharacterTemplate = []
	let i = 0;
	while (i < Object.keys(CharacterInfoMap).length) {
		const CharacterID = Object.keys(CharacterInfoMap)[i];
		if (parseInt(CharacterID) >= 19900000) {
			var Template = {
				'entity_type': 1,
				'entity_id': parseInt(CharacterID)
			}
			NewEntityList.push(Template);
		}
		i++;
	}
	return FullCharacterTemplate;
}

function GenerateUnitStory(ID) {
	let CharacterStoryData = [];
	if (CharacterInfoMap[String(ID)]['story_id'] != "N/A") {
		let y = 0; while (y < 5) {
			const CharacterStoryID = CharacterInfoMap[String(ID)]['story_id'] + y;
			var CharacterTemplate = {
				'unit_story_id': CharacterStoryID,
				'is_read': 0
			}
			CharacterStoryData[y] = CharacterTemplate;
			y++;
		}
	}
	return CharacterStoryData;
}

function CreateCharacterFromGift(ID, Level) {
	const CharacterTemplate = {
		"chara_id": ID,
		"rarity": CharacterInfoMap[String(ID)]['rarity'],
		"exp": 0,
		"level": Level,
		"additional_max_level": 0,
		"hp_plus_count": 0,
		"attack_plus_count": 0,
		"limit_break_count": 0,
		"is_new": 1,
		"gettime": Math.floor(Date.now() / 1000),
		"skill_1_level": 1,
		"skill_2_level": 0,
		"ability_1_level": 0,
		"ability_2_level": 0,
		"ability_3_level": 0,
		"burst_attack_level": 0,
		"combo_buildup_count": 0,
		"hp": CharacterInfoMap[String(ID)]['base_health'],
		"attack": CharacterInfoMap[String(ID)]['base_attack'],
		"ex_ability_level": 1,
		"ex_ability_2_level": 1,
		"is_temporary": 0,
		"is_unlock_edit_skill": 0,
		"mana_circle_piece_id_list": [],
		"list_view_flag": 1
	}
	return CharacterTemplate;
}

function CharacterIDByName(CharacterName) {
	const List = Object.keys(CharacterInfoMap);
	for (const i in List) {
		if (CharacterInfoMap[List[i]]['name'] == CharacterName) {
			return parseInt(List[i]);
		}
	}
	return 0;
}

const HPBoost = [1, 4, 6, 9, 13,
				 17, 21, 24, 26, 29,
				 32, 35, 38, 42, 50];
const ATKBoost = [2, 8, 12, 14, 16,
				  18, 20, 23, 28, 31,
				  34, 36, 39, 44];
const HPATKBoost = [51, 53, 54, 57, 58,
					61, 62, 64, 66, 68, 69 ];

function LevelUp(CharacterID, MaterialList, PreviousData, UnitStoryList) {
	var CharacterTemplate = {
		"chara_id": CharacterID,
		"rarity": PreviousData['rarity'],
		"exp": PreviousData['exp'],
		"level": PreviousData['level'],
		"additional_max_level": PreviousData['additional_max_level'],
		"hp_plus_count": PreviousData['hp_plus_count'],
		"attack_plus_count": PreviousData['attack_plus_count'],
		"limit_break_count": PreviousData['limit_break_count'],
		"is_new": 0,
		"gettime": PreviousData['gettime'],
		"skill_1_level": PreviousData['skill_1_level'],
		"skill_2_level": PreviousData['skill_2_level'],
		"ability_1_level": PreviousData['ability_1_level'],
		"ability_2_level": PreviousData['ability_2_level'],
		"ability_3_level": PreviousData['ability_3_level'],
		"burst_attack_level": PreviousData['burst_attack_level'],
		"combo_buildup_count": PreviousData['combo_buildup_count'],
		"hp": PreviousData['hp'],
		"attack": PreviousData['attack'],
		"ex_ability_level": PreviousData['ex_ability_level'],
		"ex_ability_2_level": PreviousData['ex_ability_2_level'],
		"is_temporary": 0,
		"is_unlock_edit_skill": PreviousData['is_unlock_edit_skill'],
		"mana_circle_piece_id_list": PreviousData['mana_circle_piece_id_list'],
		"list_view_flag": 1
	}
	for (let i in MaterialList) {
		let NewData = [];
		switch(MaterialList[i]['id']) {
			case 101001001: //150
				NewData = LevelMap.Character(CharacterTemplate['additional_max_level'], CharacterTemplate['exp'] + MaterialList[i]['quantity'] * 150, CharacterTemplate['level']);
				CharacterTemplate['level'] = NewData[0]; CharacterTemplate['exp'] = NewData[1];
				if (NewData[2] > 0) { CharacterTemplate['hp'] += (NewData[2] * 10); CharacterTemplate['attack'] += (NewData[2] * 7); }
				break;
			case 101001002: //1000
				NewData = LevelMap.Character(CharacterTemplate['additional_max_level'], CharacterTemplate['exp'] + MaterialList[i]['quantity'] * 1000, CharacterTemplate['level']);
				CharacterTemplate['level'] = NewData[0]; CharacterTemplate['exp'] = NewData[1];
				if (NewData[2] > 0) { CharacterTemplate['hp'] += (NewData[2] * 10); CharacterTemplate['attack'] += (NewData[2] * 7); }
				break;
			case 101001003: //3500
				NewData = LevelMap.Character(CharacterTemplate['additional_max_level'], CharacterTemplate['exp'] + MaterialList[i]['quantity'] * 3500, CharacterTemplate['level']);
				CharacterTemplate['level'] = NewData[0]; CharacterTemplate['exp'] = NewData[1];
				if (NewData[2] > 0) { CharacterTemplate['hp'] += (NewData[2] * 10); CharacterTemplate['attack'] += (NewData[2] * 7); }
				break;
			case 116001001: //hp
				CharacterTemplate['hp_plus_count'] += MaterialList[i]['quantity'];
				break;
			case 117001001: //atk
				CharacterTemplate['attack_plus_count'] += MaterialList[i]['quantity'];
				break;
		}
	}
	let AlbumBonus = 0.0;
	if (PreviousData['level'] < 80 && CharacterTemplate['level'] >= 80) { AlbumBonus += 0.1; }
	if (PreviousData['level'] < 100 && CharacterTemplate['level'] == 100) { AlbumBonus += 0.1; }
	return [CharacterTemplate, AlbumBonus];
}
function RaiseManaCircle(CharacterID, MCList, LimitBreakCount, PreviousData, UnitStoryList, IsConviction) {
	var CharacterTemplate = {
		"chara_id": CharacterID,
		"rarity": PreviousData['rarity'],
		"exp": PreviousData['exp'],
		"level": PreviousData['level'],
		"additional_max_level": PreviousData['additional_max_level'],
		"hp_plus_count": PreviousData['hp_plus_count'],
		"attack_plus_count": PreviousData['attack_plus_count'],
		"limit_break_count": PreviousData['limit_break_count'],
		"is_new": 0,
		"gettime": PreviousData['gettime'],
		"skill_1_level": PreviousData['skill_1_level'],
		"skill_2_level": PreviousData['skill_2_level'],
		"ability_1_level": PreviousData['ability_1_level'],
		"ability_2_level": PreviousData['ability_2_level'],
		"ability_3_level": PreviousData['ability_3_level'],
		"burst_attack_level": PreviousData['burst_attack_level'],
		"combo_buildup_count": PreviousData['combo_buildup_count'],
		"hp": PreviousData['hp'],
		"attack": PreviousData['attack'],
		"ex_ability_level": PreviousData['ex_ability_level'],
		"ex_ability_2_level": PreviousData['ex_ability_2_level'],
		"is_temporary": 0,
		"is_unlock_edit_skill": PreviousData['is_unlock_edit_skill'],
		"mana_circle_piece_id_list": PreviousData['mana_circle_piece_id_list'],
		"list_view_flag": 1
	}
	let StoryList = [];
	let CostList = [];
	for (let i in MCList) {
		if (!CharacterTemplate['mana_circle_piece_id_list'].includes(MCList[i])) {
			switch(MCList[i]) {
				case 3: CharacterTemplate['ability_1_level'] = 1; break;
				case 5: StoryList.push(GetNextStoryID(UnitStoryList, StoryList, CharacterID)); break;
				case 7: CharacterTemplate['burst_attack_level'] = 1; break;
				case 10: CharacterTemplate['ability_2_level'] = 1; break;
				case 11: CharacterTemplate['skill_2_level'] = 1; break;
				case 15: StoryList.push(GetNextStoryID(UnitStoryList, StoryList, CharacterID)); break;
				case 19: StoryList.push(GetNextStoryID(UnitStoryList, StoryList, CharacterID)); break;
				case 22: CharacterTemplate['ability_1_level'] = 2; break;
				case 27: StoryList.push(GetNextStoryID(UnitStoryList, StoryList, CharacterID)); break;
				case 30: CharacterTemplate['skill_1_level'] = 2; break;
				case 33: CharacterTemplate['burst_attack_level'] = 2; break;
				case 37: CharacterTemplate['ability_2_level'] = 2; break;
				case 40: CharacterTemplate['skill_2_level'] = 2; break;
				//case 43: CharacterTemplate['skill_1_level'] = 1; break;
				case 47: CharacterTemplate['skill_1_level'] = 3; break;
				case 45:
					CharacterTemplate['ex_ability_level'] += 1;
					CharacterTemplate['ex_ability_2_level'] += 1;
					break;
				case 46: 
					CharacterTemplate['ex_ability_level'] += 1;
					CharacterTemplate['ex_ability_2_level'] += 1;
					break;
				case 48:
					CharacterTemplate['ex_ability_level'] += 1;
					CharacterTemplate['ex_ability_2_level'] += 1;
					break;
				case 49:
					CharacterTemplate['ex_ability_level'] += 1;
					CharacterTemplate['ex_ability_2_level'] += 1;
					break;
				case 52: CharacterTemplate['ability_3_level'] = 3; break;
				case 55: CharacterTemplate['additional_max_level'] = 10; break;
				case 56: CharacterTemplate['skill_1_level'] = 4; break;
				case 59: CharacterTemplate['ability_1_level'] = 3; break;
				case 60: CharacterTemplate['additional_max_level'] = 15; break;
				case 63: CharacterTemplate['ability_2_level'] = 3; break;
				case 65: CharacterTemplate['additional_max_level'] = 20; break;
				case 67: CharacterTemplate['skill_2_level'] = 3; break;
				case 70: CharacterTemplate['combo_buildup_count'] = 1; break;
			}
			if (MCList[i] == 22) {
				if (GetCharacterInfo(CharacterID, "rarity") == 5) { CharacterTemplate['ability_3_level'] = 1; }
				else {CharacterTemplate['attack'] += 10; } }
			else if (MCList[i] == 41) {
				if (GetCharacterInfo(CharacterID, "rarity") == 5) { CharacterTemplate['ability_3_level'] = 2; }
				else { CharacterTemplate['ability_3_level'] = 1; } }
			else if (HPBoost.includes(MCList[i])) { CharacterTemplate['hp'] += 12; }
			else if (ATKBoost.includes(MCList[i])) { CharacterTemplate['attack'] += 10; }
			else if (HPATKBoost.includes(MCList[i])) { CharacterTemplate['hp'] += 6; CharacterTemplate['attack'] += 4; }
			CharacterTemplate['mana_circle_piece_id_list'].push(MCList[i]);
			
			const MCData = MC.find(attr => {
				return (attr._ManaCircleName == CharacterInfoMap[String(CharacterID)]['mana_circle_name']
						&& attr.MC_2 == MCList[i]);
			});
			let MPMData = "";
			if (String(MCData['_ManaPieceType']).slice(0, 3) == "101") { MPMData = DefaultMPM; }
			else {
				MPMData = MPM.find(attr => {
					return (attr._ManaPieceType == MCData['_ManaPieceType']
							&& attr._ElementId == CharacterInfoMap[String(CharacterID)]['mana_piece_id']
							&& attr._Step == MCData['_Step']);
				});
			}

			const ManaMaterialID_1 = MPMData["_MaterialId1"];
			const ManaMaterialID_2 = MPMData["_MaterialId2"];
			const ManaMaterialID_3 = MPMData["_MaterialId3"];
			const ManaMaterialQuantity_1 = MPMData["_MaterialQuantity1"];
			const ManaMaterialQuantity_2 = MPMData["_MaterialQuantity2"];
			const ManaMaterialQuantity_3 = MPMData["_MaterialQuantity3"];

			let CostTemp = [];
			if (IsConviction == 1) {
				let ConvictionID = EventMap.GetCharacterConvictionID(CharacterID);
				if (ConvictionID == undefined) { ConvictionID = 202003001; }
				CostTemp = [
					{
						'type': 8,
						'id': ConvictionID,
						'count': 1
					}
				]
			}
			else {
				CostTemp = [
					{
						'type': 14,
						'id': 0,
						'count': MPMData["_DewPoint"]
					},
					{
						'type': 18,
						'id': 0,
						'count': MCData['_NecessaryManaPoint']
					}
				];
				if (ManaMaterialID_1 != 0 && ManaMaterialID_1 != undefined) {
					CostTemp.push({'type':8,'id':ManaMaterialID_1,'count':ManaMaterialQuantity_1});
				}
				if (ManaMaterialID_2 != 0 && ManaMaterialID_2 != undefined) {
					CostTemp.push({'type':8,'id':ManaMaterialID_2,'count':ManaMaterialQuantity_2});
				}
				if (ManaMaterialID_3 != 0 && ManaMaterialID_3 != undefined) {
					CostTemp.push({'type':8,'id':ManaMaterialID_3,'count':ManaMaterialQuantity_3});
				}
			}
			for (let v in CostTemp) {
				switch(CostTemp[v]['type']) {
					case 8:
						const MatIndex = CostList.findIndex(x => x.id == CostTemp[v]['id']);
						if (MatIndex == -1) { CostList.push(CostTemp[v]); }
						else { CostList[MatIndex]['count'] += CostTemp[v]['count']; }
						break;
					case 14:
						const DewIndex = CostList.findIndex(x => x.type == 14);
						if (DewIndex == -1) { CostList.push(CostTemp[v]); }
						else { CostList[DewIndex]['count'] += CostTemp[v]['count']; }
						break;
					case 18:
						const ManaIndex = CostList.findIndex(x => x.type == 18);
						if (ManaIndex == -1) { CostList.push(CostTemp[v]); }
						else { CostList[ManaIndex]['count'] += CostTemp[v]['count']; }
						break;
				}
			}
		}
	}
	if (CharacterID == "10750102" || CharacterID == "19900001" || CharacterID == "19900002" || CharacterID == "19900005") {
			CharacterTemplate['skill_1_level'] = 1;
			CharacterTemplate['skill_2_level'] = 1; }
	let AlbumBonus = 0.0;
	// -- Fallback!! -- //
	/*
	if (CharacterTemplate['mana_circle_piece_id_list'].length == 50 && CharacterInfoMap[CharacterID]['has_spiral'] == false) {
		CharacterTemplate = RaiseOmnicite(CharacterID, PreviousData);
		AlbumBonus += 0.2;
	}
	else if (CharacterTemplate['mana_circle_piece_id_list'].length == 70 && CharacterInfoMap[CharacterID]['has_spiral'] == true) {
		CharacterTemplate = RaiseOmnicite(CharacterID, PreviousData);
		AlbumBonus += 0.4;
	}
	*/
	// -- Fallback!! -- //
	if (LimitBreakCount != 0) { CharacterTemplate['limit_break_count'] = LimitBreakCount; }
	for (let s in StoryList) {
		if (StoryList[s] != 0) {
			StoryList[s] = {
				'unit_story_id': StoryList[s],
				'is_read': 0
			}
		}
	}
	return [CharacterTemplate, AlbumBonus, CostList, StoryList];
}
function RaiseLimit(CharacterID, LimitBreakStep) {
	const LimitBreakData = CharacterLimitBreak.find(attr => attr._Id == CharacterInfoMap[String(CharacterID)]['limit_break_id']);
	let CostTable = [
		{ 'type': 8, 'id': LimitBreakData['_OrbData1Id' + LimitBreakStep], 'quantity': LimitBreakData['_OrbData1Num' + LimitBreakStep] },
		{ 'type': 8, 'id': LimitBreakData['_OrbData2Id' + LimitBreakStep], 'quantity': LimitBreakData['_OrbData2Num' + LimitBreakStep] },
		{ 'type': 8, 'id': LimitBreakData['_OrbData3Id' + LimitBreakStep], 'quantity': LimitBreakData['_OrbData3Num' + LimitBreakStep] },
		{ 'type': 8, 'id': LimitBreakData['_OrbData4Id' + LimitBreakStep], 'quantity': LimitBreakData['_OrbData4Num' + LimitBreakStep] },
		{ 'type': 8, 'id': LimitBreakData['_OrbData5Id' + LimitBreakStep], 'quantity': LimitBreakData['_OrbData5Num' + LimitBreakStep] },
	];
	return CostTable;
}
function RaiseOmnicite(CharacterID, PreviousData) {
	var CharacterTemplate = {
		"chara_id": CharacterInfoMap[String(CharacterID)]['chara_id'],
		"rarity": 5,
		"exp": 1191950,
		"level": 80,
		"additional_max_level": 0,
		"hp_plus_count": 100,
		"attack_plus_count": 100,
		"limit_break_count": 4,
		"is_new": 1,
		"gettime": PreviousData['gettime'],
		"skill_1_level": 3,
		"skill_2_level": 2,
		"ability_1_level": 2,
		"ability_2_level": 2,
		"ability_3_level": 2,
		"burst_attack_level": 2,
		"combo_buildup_count": 0,
		"hp": CharacterInfoMap[CharacterID]['max_health'] + 280,
		"attack": CharacterInfoMap[CharacterID]['max_attack'] + 260,
		"ex_ability_level": 5,
		"ex_ability_2_level": 5,
		"is_temporary": 0,
		"is_unlock_edit_skill": 1,
		"mana_circle_piece_id_list": [ 1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 
									   11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
									   21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
					  				   31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
					  				   41, 42, 43, 44, 45, 46, 47, 48, 49, 50 ],
		"list_view_flag": 1
	}
	if (CharacterInfoMap[CharacterID]['has_spiral'] == true) {
		CharacterTemplate['exp'] = 8866950;
		CharacterTemplate['level'] = 100;
		CharacterTemplate['additional_max_level'] = 20;
		CharacterTemplate['limit_break_count'] = 5;
		CharacterTemplate['skill_1_level'] = 4;
		CharacterTemplate['skill_2_level'] = 3;
		CharacterTemplate['ability_1_level'] = 3;
		CharacterTemplate['ability_2_level'] = 3;
		CharacterTemplate['ability_3_level'] = 3;
		CharacterTemplate['combo_buildup_count'] = 1;
		CharacterTemplate['hp'] = CharacterInfoMap[CharacterID]['max_health'] + 560;
		CharacterTemplate['attack'] = CharacterInfoMap[CharacterID]['max_attack'] + 520;
		CharacterTemplate['mana_circle_piece_id_list'] = [ 1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 
											   			   11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
											   			   21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
					  						   			   31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
					  						   			   41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
														   51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
														   61, 62, 63, 64, 65, 66, 67, 68, 69, 70 ]
		if (CharacterInfoMap[CharacterID]['rarity'] == 4 && CharacterID != "10140101" ) { CharacterTemplate['ability_3_level'] = 2; }
		if (CharacterInfoMap[CharacterID]['rarity'] == 3) { CharacterTemplate['ability_3_level'] = 2; }
	}
	else {
		if (CharacterInfoMap[CharacterID]['rarity'] == 4 && CharacterID != "10140101" ) { CharacterTemplate['ability_3_level'] = 1; }
		if (CharacterInfoMap[CharacterID]['rarity'] == 3) { CharacterTemplate['ability_3_level'] = 1; }
	}
	if (CharacterID == "10750102") { 
		CharacterTemplate['skill_1_level'] = 1;
		CharacterTemplate['skill_2_level'] = 1; }
	if (CharacterID == "10750102" || CharacterID == "19900001" || CharacterID == "19900002" || CharacterID == "19900005") {
			CharacterTemplate['skill_1_level'] = 1;
			CharacterTemplate['skill_2_level'] = 1; }
	return CharacterTemplate;
}
function UnlockSharedSkill(CharacterID, PreviousData) {
	var CharacterTemplate = {
		"chara_id": CharacterID,
		"rarity": PreviousData['rarity'],
		"exp": PreviousData['exp'],
		"level": PreviousData['level'],
		"additional_max_level": PreviousData['additional_max_level'],
		"hp_plus_count": PreviousData['hp_plus_count'],
		"attack_plus_count": PreviousData['attack_plus_count'],
		"limit_break_count": PreviousData['limit_break_count'],
		"is_new": 0,
		"gettime": PreviousData['gettime'],
		"skill_1_level": PreviousData['skill_1_level'],
		"skill_2_level": PreviousData['skill_2_level'],
		"ability_1_level": PreviousData['ability_1_level'],
		"ability_2_level": PreviousData['ability_2_level'],
		"ability_3_level": PreviousData['ability_3_level'],
		"burst_attack_level": PreviousData['burst_attack_level'],
		"combo_buildup_count": PreviousData['combo_buildup_count'],
		"hp": PreviousData['hp'],
		"attack": PreviousData['attack'],
		"ex_ability_level": PreviousData['ex_ability_level'],
		"ex_ability_2_level": PreviousData['ex_ability_2_level'],
		"is_temporary": 0,
		"is_unlock_edit_skill": 1,
		"mana_circle_piece_id_list": PreviousData['mana_circle_piece_id_list'],
		"list_view_flag": 1
	}
	return CharacterTemplate;
}

function FillMissingStories(CharacterID, UserIndexRecord) {
	let UpdateData = [];
	let y = 0; while (y < 5) {
		if (CharacterInfoMap[String(CharacterID)]['story_id'] != "N/A") {
			const StoryID = CharacterInfoMap[String(CharacterID)]['story_id'] + y + 1;
			if (UserIndexRecord['unit_story_list'].findIndex(x => x.unit_story_id == StoryID) == -1) {
				UpdateData.push({"unit_story_id": StoryID, "is_read": 0}); }
		}
		y++;
	}
	return UpdateData;
}
function GetNextStoryID(UnitStoryList, StoryList, CharacterID) {
	const UnitStoryID = GetCharacterInfo(CharacterID, "story_id");
	if (UnitStoryID == "N/A") { return 0; }

	const Story2ID = UnitStoryID + 1;
	const UnitStoryIndex2 = UnitStoryList.findIndex(x => x.unit_story_id == Story2ID);
	if (UnitStoryIndex2 == -1 && !StoryList.includes(Story2ID)) { return Story2ID; }
	const Story3ID = UnitStoryID + 2;
	const UnitStoryIndex3 = UnitStoryList.findIndex(x => x.unit_story_id == Story3ID);
	if (UnitStoryIndex3 == -1 && !StoryList.includes(Story3ID)) { return Story3ID; }
	const Story4ID = UnitStoryID + 3;
	const UnitStoryIndex4 = UnitStoryList.findIndex(x => x.unit_story_id == Story4ID);
	if (UnitStoryIndex4 == -1 && !StoryList.includes(Story4ID)) { return Story4ID; }
	const Story5ID = UnitStoryID + 4;
	const UnitStoryIndex5 = UnitStoryList.findIndex(x => x.unit_story_id == Story5ID);
	if (UnitStoryIndex5 == -1 && !StoryList.includes(Story5ID)) { return Story5ID; }
	return 0;
}
function KaleidoStats(CharacterID) {
	var CharacterTemplate = {
		'chara_id': CharacterID,
		'dmode_chara_level_group_id': 1,
		"skill_1_level": 3,
		"skill_2_level": 2,
		"ability_1_level": 2,
		"ability_2_level": 2,
		"ability_3_level": 2,
		"ex_ability_level": 5,
		"ex_ability_2_level": 5,
		"burst_attack_level": 2,
		"combo_buildup_count": 0
	}
	if (CharacterInfoMap[CharacterID]['has_spiral'] == true) {
		CharacterTemplate['exp'] = 8866950;
		CharacterTemplate['level'] = 100;
		CharacterTemplate['additional_max_level'] = 20;
		CharacterTemplate['limit_break_count'] = 5;
		CharacterTemplate['skill_1_level'] = 4;
		CharacterTemplate['skill_2_level'] = 3;
		CharacterTemplate['ability_1_level'] = 3;
		CharacterTemplate['ability_2_level'] = 3;
		CharacterTemplate['ability_3_level'] = 3;
		CharacterTemplate['combo_buildup_count'] = 1;
		CharacterTemplate['hp'] = CharacterInfoMap[CharacterID]['max_health'] + 560;
		CharacterTemplate['attack'] = CharacterInfoMap[CharacterID]['max_attack'] + 520;
		CharacterTemplate['mana_circle_piece_id_list'] = [ 1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 
											   			   11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
											   			   21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
					  						   			   31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
					  						   			   41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
														   51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
														   61, 62, 63, 64, 65, 66, 67, 68, 69, 70 ]
		if (CharacterInfoMap[CharacterID]['rarity'] == 4 && CharacterID != "10140101" ) { CharacterTemplate['ability_3_level'] = 2; }
		if (CharacterInfoMap[CharacterID]['rarity'] == 3) { CharacterTemplate['ability_3_level'] = 2; }
	}
	else {
		if (CharacterInfoMap[CharacterID]['rarity'] == 4 && CharacterID != "10140101" ) { CharacterTemplate['ability_3_level'] = 2; }
		if (CharacterInfoMap[CharacterID]['rarity'] == 3) { CharacterTemplate['ability_3_level'] = 1; }
	}
	if (CharacterID == "10750102") { 
		CharacterTemplate['skill_1_level'] = 1;
		CharacterTemplate['skill_2_level'] = 1; }
	if (CharacterID == "10750102" || CharacterID == "19900001" || CharacterID == "19900002" || CharacterID == "19900005") {
			CharacterTemplate['skill_1_level'] = 1;
			CharacterTemplate['skill_2_level'] = 1; }
	return CharacterTemplate;
}

const Blacklist = [ 10140101, 10150402, 10140503, 10240101, 10240201, 10240302,
					10240402, 10240503, 10250305, 10250403, 10340101, 10340301,
					10340502, 10350403, 10350506, 10440301, 10450303, 10450404,
					10540102, 10540201, 10540501, 10550305, 10550404, 10640401,
					10640403, 10650305, 10650503, 10740202, 10750102, 10750203,
					10750205, 10750504, 10840403, 10840501, 10850103,
						
					19900001, 19900002, 19900003, 19900004, 19900005, 19900006,
					19100017, 19100018, 19100019, 19100020, 19100021, 19100021,
					19100022, 19100023, 19100024, 19100067,
					10550101, 10750102 ]
function DrawCharacter() {
	let RandomNumber = Math.floor(Math.random() * Object.keys(CharacterInfoMap).length);
	let RandomCharacterID = Object.keys(CharacterInfoMap)[RandomNumber];
	var CharacterData = {
		'entity_type': 1,
		'id': parseInt(RandomCharacterID),
		'rarity': CharacterInfoMap[String(RandomCharacterID)]['rarity']
	}
	return CharacterData;
}
function DrawCharacterCorrect(SummonID, BoostRateList, IsTenfold, IsPlatinum) {
	let RandomNumber = 0;
	let AssignedCharacterID = 0;
	let RerollCount = 5;
	const SummonIndex = BoostRateList.findIndex(x => x.summon_id == SummonID);
	if (SummonIndex != -1 && BoostRateList[SummonIndex]['characters'] != undefined && BoostRateList[SummonIndex]['characters'][0] != undefined) {
		RandomNumber = Math.floor(Math.random() * BoostRateList[SummonIndex]['characters'].length);
		AssignedCharacterID = BoostRateList[SummonIndex]['characters'][RandomNumber];
		let BoostedDraw = Math.floor(Math.random() * BoostRateList[SummonIndex]['characters'].length);
		let BoostedDrawID = BoostRateList[SummonIndex]['characters'][BoostedDraw];
		if (BoostRateList[SummonIndex]['boost_rate'].includes(BoostedDrawID)) { AssignedCharacterID = BoostedDrawID; }
		if (BoostRateList[SummonIndex]['boost_rate'].includes(AssignedCharacterID)) { RerollCount = 2; }
		while (RerollCount > 0) {
			let Redraw = Math.floor(Math.random() * BoostRateList[SummonIndex]['characters'].length);
			let RedrawID = BoostRateList[SummonIndex]['characters'][Redraw];
			if (IsTenfold) {
				let MinRarity = 4; if (IsPlatinum) { MinRarity = 5; }
				while (CharacterInfoMap[String(RedrawID)]['rarity'] < MinRarity) {
					Redraw = Math.floor(Math.random() * BoostRateList[SummonIndex]['characters'].length);
					RedrawID = BoostRateList[SummonIndex]['characters'][Redraw];
				}
			}
			if (CharacterInfoMap[String(RedrawID)]['rarity'] < CharacterInfoMap[String(AssignedCharacterID)]['rarity']) { AssignedCharacterID = parseInt(RedrawID); }
			RerollCount--;
		}
	}
	else {
		RandomNumber = Math.floor(Math.random() * Object.keys(CharacterInfoMap).length);
		AssignedCharacterID = Object.keys(CharacterInfoMap)[RandomNumber];
		while (Blacklist.includes(parseInt(AssignedCharacterID))) {
			RandomNumber = Math.floor(Math.random() * Object.keys(CharacterInfoMap).length);
			AssignedCharacterID = Object.keys(CharacterInfoMap)[RandomNumber];
		}
		while (RerollCount > 0) {
			let Redraw = Math.floor(Math.random() * Object.keys(CharacterInfoMap).length);
			let RedrawID = Object.keys(CharacterInfoMap)[Redraw];
			while (Blacklist.includes(parseInt(RedrawID))) {
				Redraw = Math.floor(Math.random() * Object.keys(CharacterInfoMap).length);
				RedrawID = Object.keys(CharacterInfoMap)[Redraw];
			}
			if (CharacterInfoMap[String(RedrawID)]['rarity'] < CharacterInfoMap[String(AssignedCharacterID)]['rarity']) { AssignedCharacterID = parseInt(RedrawID); }
			RerollCount--;
		}
	}
	const CharacterData = {
		'entity_type': 1,
		'id': parseInt(AssignedCharacterID),
		'rarity': CharacterInfoMap[String(AssignedCharacterID)]['rarity']
	}
	return CharacterData;
}

module.exports = { CharacterInfoMap, GetCharacterInfo, LevelUp, RaiseManaCircle, RaiseLimit, RaiseOmnicite, KaleidoStats, UnlockSharedSkill, GenerateCharacterSaveTemplate, GenerateUnitStory, GenerateCharacterSaveTemplateCorrect, GenerateCharacterMaxSaveTemplate, GenerateCharacterHackedSaveTemplate, GenerateCharacterStoryTemplate, CreateCharacterFromGift, CharacterIDByName, FillMissingStories, DrawCharacter, DrawCharacterCorrect, GenerateEntitySaveTemplateCorrect }