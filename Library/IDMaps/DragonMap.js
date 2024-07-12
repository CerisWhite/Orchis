// Dragon Map
var LevelMap = require('./LevelMap.js');

const DragonInfoMap = {
  "20030101": {
    "id": 20030101,
    "name": "Homura",
    "story_id": 210021011,
    "favorite": 5,
    "bond_type": 1,
    "element": 1,
    "rarity": 3,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 300,
    "sellwater": 150,
    "base_hp": 18,
    "base_atk": 6,
    "max_hp": 184,
    "max_atk": 63,
    "base_id": 210021,
    "alt_id": 1,
    "ability_1": {
      "1": 330000001,
      "2": 330000002,
      "3": 330000003,
      "4": 330000004,
      "5": 330000006,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20030102": {
    "id": 20030102,
    "name": "Cinder Drake",
    "story_id": 210022011,
    "favorite": 2,
    "bond_type": 1,
    "element": 1,
    "rarity": 3,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 300,
    "sellwater": 150,
    "base_hp": 19,
    "base_atk": 5,
    "max_hp": 190,
    "max_atk": 57,
    "base_id": 210022,
    "alt_id": 1,
    "ability_1": {
      "1": 330000035,
      "2": 330000036,
      "3": 330000037,
      "4": 330000038,
      "5": 330000039,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20030103": {
    "id": 20030103,
    "name": "Kindling Imp",
    "story_id": 210023011,
    "favorite": 3,
    "bond_type": 1,
    "element": 1,
    "rarity": 3,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 300,
    "sellwater": 150,
    "base_hp": 18,
    "base_atk": 6,
    "max_hp": 187,
    "max_atk": 60,
    "base_id": 210023,
    "alt_id": 1,
    "ability_1": {
      "1": 330000061,
      "2": 330000062,
      "3": 330000063,
      "4": 330000064,
      "5": 330000066,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20030201": {
    "id": 20030201,
    "name": "Fubuki",
    "story_id": 210059011,
    "favorite": 4,
    "bond_type": 1,
    "element": 2,
    "rarity": 3,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 300,
    "sellwater": 150,
    "base_hp": 18,
    "base_atk": 6,
    "max_hp": 185,
    "max_atk": 63,
    "base_id": 210059,
    "alt_id": 1,
    "ability_1": {
      "1": 330000259,
      "2": 330000260,
      "3": 330000261,
      "4": 330000262,
      "5": 330000264,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20030202": {
    "id": 20030202,
    "name": "Snow Drake",
    "story_id": 210063011,
    "favorite": 3,
    "bond_type": 1,
    "element": 2,
    "rarity": 3,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 300,
    "sellwater": 150,
    "base_hp": 19,
    "base_atk": 5,
    "max_hp": 191,
    "max_atk": 57,
    "base_id": 210063,
    "alt_id": 1,
    "ability_1": {
      "1": 330000281,
      "2": 330000282,
      "3": 330000283,
      "4": 330000284,
      "5": 330000285,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20030203": {
    "id": 20030203,
    "name": "Wellspring Imp",
    "story_id": 210067011,
    "favorite": 1,
    "bond_type": 1,
    "element": 2,
    "rarity": 3,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 300,
    "sellwater": 150,
    "base_hp": 18,
    "base_atk": 6,
    "max_hp": 187,
    "max_atk": 60,
    "base_id": 210067,
    "alt_id": 1,
    "ability_1": {
      "1": 330000300,
      "2": 330000301,
      "3": 330000302,
      "4": 330000303,
      "5": 330000304,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20030301": {
    "id": 20030301,
    "name": "Tsumuji",
    "story_id": 210060011,
    "favorite": 3,
    "bond_type": 1,
    "element": 3,
    "rarity": 3,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 300,
    "sellwater": 150,
    "base_hp": 18,
    "base_atk": 6,
    "max_hp": 184,
    "max_atk": 63,
    "base_id": 210060,
    "alt_id": 1,
    "ability_1": {
      "1": 330000326,
      "2": 330000327,
      "3": 330000328,
      "4": 330000329,
      "5": 330000331,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20030302": {
    "id": 20030302,
    "name": "Gust Drake",
    "story_id": 210064011,
    "favorite": 1,
    "bond_type": 1,
    "element": 3,
    "rarity": 3,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 300,
    "sellwater": 150,
    "base_hp": 19,
    "base_atk": 5,
    "max_hp": 191,
    "max_atk": 57,
    "base_id": 210064,
    "alt_id": 1,
    "ability_1": {
      "1": 330000350,
      "2": 330000351,
      "3": 330000352,
      "4": 330000353,
      "5": 330000354,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20030303": {
    "id": 20030303,
    "name": "Zephyr Imp",
    "story_id": 210068011,
    "favorite": 2,
    "bond_type": 1,
    "element": 3,
    "rarity": 3,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 300,
    "sellwater": 150,
    "base_hp": 18,
    "base_atk": 6,
    "max_hp": 187,
    "max_atk": 60,
    "base_id": 210068,
    "alt_id": 1,
    "ability_1": {
      "1": 330000370,
      "2": 330000371,
      "3": 330000372,
      "4": 330000373,
      "5": 330000375,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20030401": {
    "id": 20030401,
    "name": "Hinata",
    "story_id": 210061011,
    "favorite": 1,
    "bond_type": 1,
    "element": 4,
    "rarity": 3,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 300,
    "sellwater": 150,
    "base_hp": 18,
    "base_atk": 6,
    "max_hp": 185,
    "max_atk": 62,
    "base_id": 210061,
    "alt_id": 1,
    "ability_1": {
      "1": 330000394,
      "2": 330000395,
      "3": 330000396,
      "4": 330000397,
      "5": 330000398,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20030402": {
    "id": 20030402,
    "name": "Moon Drake",
    "story_id": 210065011,
    "favorite": 5,
    "bond_type": 1,
    "element": 4,
    "rarity": 3,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 300,
    "sellwater": 150,
    "base_hp": 19,
    "base_atk": 5,
    "max_hp": 192,
    "max_atk": 56,
    "base_id": 210065,
    "alt_id": 1,
    "ability_1": {
      "1": 330000417,
      "2": 330000418,
      "3": 330000419,
      "4": 330000420,
      "5": 330000421,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20030403": {
    "id": 20030403,
    "name": "Astral Imp",
    "story_id": 210069011,
    "favorite": 4,
    "bond_type": 1,
    "element": 4,
    "rarity": 3,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 300,
    "sellwater": 150,
    "base_hp": 18,
    "base_atk": 5,
    "max_hp": 188,
    "max_atk": 59,
    "base_id": 210069,
    "alt_id": 1,
    "ability_1": {
      "1": 330000435,
      "2": 330000436,
      "3": 330000437,
      "4": 330000438,
      "5": 330000440,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20030501": {
    "id": 20030501,
    "name": "Hikage",
    "story_id": 210062011,
    "favorite": 2,
    "bond_type": 1,
    "element": 5,
    "rarity": 3,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 300,
    "sellwater": 150,
    "base_hp": 18,
    "base_atk": 6,
    "max_hp": 183,
    "max_atk": 64,
    "base_id": 210062,
    "alt_id": 1,
    "ability_1": {
      "1": 330000455,
      "2": 330000456,
      "3": 330000457,
      "4": 330000458,
      "5": 330000460,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20030502": {
    "id": 20030502,
    "name": "Gloom Drake",
    "story_id": 210066011,
    "favorite": 4,
    "bond_type": 1,
    "element": 5,
    "rarity": 3,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 300,
    "sellwater": 150,
    "base_hp": 19,
    "base_atk": 5,
    "max_hp": 190,
    "max_atk": 58,
    "base_id": 210066,
    "alt_id": 1,
    "ability_1": {
      "1": 330000484,
      "2": 330000485,
      "3": 330000486,
      "4": 330000487,
      "5": 330000488,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20030503": {
    "id": 20030503,
    "name": "Pallid Imp",
    "story_id": 210070011,
    "favorite": 5,
    "bond_type": 1,
    "element": 5,
    "rarity": 3,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 300,
    "sellwater": 150,
    "base_hp": 18,
    "base_atk": 6,
    "max_hp": 186,
    "max_atk": 61,
    "base_id": 210070,
    "alt_id": 1,
    "ability_1": {
      "1": 330000503,
      "2": 330000504,
      "3": 330000505,
      "4": 330000506,
      "5": 330000508,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040101": {
    "id": 20040101,
    "name": "Brunhilda",
    "story_id": 210002011,
    "favorite": 3,
    "bond_type": 1,
    "element": 1,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 100,
    "base_hp": 20,
    "base_atk": 7,
    "max_hp": 203,
    "max_atk": 70,
    "base_id": 210002,
    "alt_id": 1,
    "ability_1": {
      "1": 330000006,
      "2": 330000007,
      "3": 330000008,
      "4": 330000009,
      "5": 330000010,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040102": {
    "id": 20040102,
    "name": "Phoenix",
    "story_id": 210006011,
    "favorite": 4,
    "bond_type": 1,
    "element": 1,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 2200,
    "base_hp": 29,
    "base_atk": 9,
    "max_hp": 299,
    "max_atk": 97,
    "base_id": 210006,
    "alt_id": 1,
    "ability_1": {
      "1": 330000048,
      "2": 330000050,
      "3": 330000053,
      "4": 330000055,
      "5": 330000057,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040103": {
    "id": 20040103,
    "name": "Ifrit",
    "story_id": 210007011,
    "favorite": 5,
    "bond_type": 1,
    "element": 1,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 2200,
    "base_hp": 29,
    "base_atk": 10,
    "max_hp": 295,
    "max_atk": 101,
    "base_id": 210007,
    "alt_id": 1,
    "ability_1": {
      "1": 330000014,
      "2": 330000016,
      "3": 330000019,
      "4": 330000022,
      "5": 330000028,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040201": {
    "id": 20040201,
    "name": "Mercury",
    "story_id": 210003011,
    "favorite": 5,
    "bond_type": 1,
    "element": 2,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 100,
    "base_hp": 21,
    "base_atk": 6,
    "max_hp": 211,
    "max_atk": 62,
    "base_id": 210003,
    "alt_id": 1,
    "ability_1": {
      "1": 330000285,
      "2": 330000286,
      "3": 330000287,
      "4": 330000288,
      "5": 330000289,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040202": {
    "id": 20040202,
    "name": "Poliʻahu",
    "story_id": 210008011,
    "favorite": 2,
    "bond_type": 1,
    "element": 2,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 2200,
    "base_hp": 30,
    "base_atk": 9,
    "max_hp": 301,
    "max_atk": 95,
    "base_id": 210008,
    "alt_id": 1,
    "ability_1": {
      "1": 330000305,
      "2": 330000306,
      "3": 330000307,
      "4": 330000308,
      "5": 330000309,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040203": {
    "id": 20040203,
    "name": "Vodyanoy",
    "story_id": 210058011,
    "favorite": 1,
    "bond_type": 1,
    "element": 2,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 2200,
    "base_hp": 29,
    "base_atk": 10,
    "max_hp": 296,
    "max_atk": 100,
    "base_id": 210058,
    "alt_id": 1,
    "ability_1": {
      "1": 330000267,
      "2": 330000268,
      "3": 330000270,
      "4": 330000272,
      "5": 330000277,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040301": {
    "id": 20040301,
    "name": "Midgardsormr",
    "story_id": 210001011,
    "favorite": 4,
    "bond_type": 1,
    "element": 3,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 100,
    "base_hp": 20,
    "base_atk": 6,
    "max_hp": 206,
    "max_atk": 66,
    "base_id": 210001,
    "alt_id": 1,
    "ability_1": {
      "1": 330000373,
      "2": 330000374,
      "3": 330000375,
      "4": 330000376,
      "5": 330000377,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040302": {
    "id": 20040302,
    "name": "Roc",
    "story_id": 210050011,
    "favorite": 5,
    "bond_type": 1,
    "element": 3,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 2200,
    "base_hp": 29,
    "base_atk": 10,
    "max_hp": 296,
    "max_atk": 101,
    "base_id": 210050,
    "alt_id": 1,
    "ability_1": {
      "1": 330000335,
      "2": 330000336,
      "3": 330000338,
      "4": 330000341,
      "5": 330000346,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040303": {
    "id": 20040303,
    "name": "Stribog",
    "story_id": 210011011,
    "favorite": 4,
    "bond_type": 1,
    "element": 3,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 2200,
    "base_hp": 30,
    "base_atk": 9,
    "max_hp": 306,
    "max_atk": 91,
    "base_id": 210011,
    "alt_id": 1,
    "ability_1": {
      "1": 330000360,
      "2": 330000361,
      "3": 330000363,
      "4": 330000364,
      "5": 330000366,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040401": {
    "id": 20040401,
    "name": "Jupiter",
    "story_id": 210004011,
    "favorite": 2,
    "bond_type": 1,
    "element": 4,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 100,
    "base_hp": 20,
    "base_atk": 6,
    "max_hp": 207,
    "max_atk": 65,
    "base_id": 210004,
    "alt_id": 1,
    "ability_1": {
      "1": 330000438,
      "2": 330000439,
      "3": 330000440,
      "4": 330000441,
      "5": 330000442,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040402": {
    "id": 20040402,
    "name": "Unicorn",
    "story_id": 210012011,
    "favorite": 3,
    "bond_type": 1,
    "element": 4,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 2200,
    "base_hp": 30,
    "base_atk": 9,
    "max_hp": 301,
    "max_atk": 95,
    "base_id": 210012,
    "alt_id": 1,
    "ability_1": {
      "1": 330000426,
      "2": 330000427,
      "3": 330000428,
      "4": 330000429,
      "5": 330000431,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040403": {
    "id": 20040403,
    "name": "Lindworm",
    "story_id": 210013011,
    "favorite": 2,
    "bond_type": 1,
    "element": 4,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 2200,
    "base_hp": 29,
    "base_atk": 10,
    "max_hp": 297,
    "max_atk": 100,
    "base_id": 210013,
    "alt_id": 1,
    "ability_1": {
      "1": 330000399,
      "2": 330000401,
      "3": 330000404,
      "4": 330000407,
      "5": 330000410,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040405": {
    "id": 20040405,
    "name": "Halloween Silke",
    "story_id": 210075011,
    "favorite": 3,
    "bond_type": 1,
    "element": 4,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 2200,
    "base_hp": 30,
    "base_atk": 9,
    "max_hp": 301,
    "max_atk": 95,
    "base_id": 210075,
    "alt_id": 1,
    "ability_1": {
      "1": 330000442,
      "2": 330000443,
      "3": 330000444,
      "4": 330000445,
      "5": 330000446,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040501": {
    "id": 20040501,
    "name": "Zodiark",
    "story_id": 210005011,
    "favorite": 1,
    "bond_type": 1,
    "element": 5,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 100,
    "base_hp": 20,
    "base_atk": 7,
    "max_hp": 202,
    "max_atk": 70,
    "base_id": 210005,
    "alt_id": 1,
    "ability_1": {
      "1": 330000460,
      "2": 330000461,
      "3": 330000462,
      "4": 330000463,
      "5": 330000464,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040502": {
    "id": 20040502,
    "name": "Juggernaut",
    "story_id": 210014011,
    "favorite": 1,
    "bond_type": 1,
    "element": 5,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 2200,
    "base_hp": 29,
    "base_atk": 10,
    "max_hp": 294,
    "max_atk": 102,
    "base_id": 210014,
    "alt_id": 1,
    "ability_1": {
      "1": 330000466,
      "2": 330000468,
      "3": 330000471,
      "4": 330000474,
      "5": 330000477,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040503": {
    "id": 20040503,
    "name": "Silke",
    "story_id": 210015011,
    "favorite": 3,
    "bond_type": 1,
    "element": 5,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 2200,
    "base_hp": 29,
    "base_atk": 9,
    "max_hp": 299,
    "max_atk": 97,
    "base_id": 210015,
    "alt_id": 1,
    "ability_1": {
      "1": 330000510,
      "2": 330000511,
      "3": 330000512,
      "4": 330000513,
      "5": 330000514,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040504": {
    "id": 20040504,
    "name": "Bronze Fafnir",
    "story_id": 210089011,
    "favorite": 1,
    "bond_type": 1,
    "element": 5,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 100,
    "base_hp": 20,
    "base_atk": 6,
    "max_hp": 209,
    "max_atk": 63,
    "base_id": 210089,
    "alt_id": 1,
    "ability_1": {
      "1": 330000079,
      "2": 330000080,
      "3": 330000081,
      "4": 330000082,
      "5": 330000083,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20040505": {
    "id": 20040505,
    "name": "Silver Fafnir",
    "story_id": 210090011,
    "favorite": 2,
    "bond_type": 1,
    "element": 5,
    "rarity": 4,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 2000,
    "sellwater": 100,
    "base_hp": 20,
    "base_atk": 6,
    "max_hp": 209,
    "max_atk": 63,
    "base_id": 210090,
    "alt_id": 1,
    "ability_1": {
      "1": 330000084,
      "2": 330000085,
      "3": 330000086,
      "4": 330000087,
      "5": 330000088,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050101": {
    "id": 20050101,
    "name": "Agni",
    "story_id": 210016011,
    "favorite": 1,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206001001,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 127,
    "base_id": 210016,
    "alt_id": 1,
    "ability_1": {
      "1": 330000023,
      "2": 330000028,
      "3": 330000031,
      "4": 330000033,
      "5": 330000034,
      "6": 1618
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 2216
    }
  },
  "20050102": {
    "id": 20050102,
    "name": "High Brunhilda",
    "story_id": 210039011,
    "favorite": 3,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 201002012,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 35,
    "base_atk": 12,
    "max_hp": 350,
    "max_atk": 120,
    "base_id": 210039,
    "alt_id": 1,
    "ability_1": {
      "1": 330000072,
      "2": 330000073,
      "3": 330000075,
      "4": 330000076,
      "5": 330000077,
      "6": 2220
    },
    "ability_2": {
      "1": 330000170,
      "2": 330000170,
      "3": 330000170,
      "4": 330000170,
      "5": 330000171,
      "6": 2300
    }
  },
  "20050103": {
    "id": 20050103,
    "name": "Pele",
    "story_id": 210057011,
    "favorite": 1,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 7,
    "max_hp": 221,
    "max_atk": 76,
    "base_id": 210057,
    "alt_id": 1,
    "ability_1": {
      "1": 330000010,
      "2": 330000012,
      "3": 330000014,
      "4": 330000018,
      "5": 330000023,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050104": {
    "id": 20050104,
    "name": "Cerberus",
    "story_id": 210024011,
    "favorite": 3,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206001003,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 127,
    "base_id": 210024,
    "alt_id": 1,
    "ability_1": {
      "1": 330000023,
      "2": 330000028,
      "3": 330000031,
      "4": 330000033,
      "5": 330000034,
      "6": 1618
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 2216
    }
  },
  "20050105": {
    "id": 20050105,
    "name": "Erasmus",
    "story_id": 210055011,
    "favorite": 2,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 7,
    "max_hp": 221,
    "max_atk": 76,
    "base_id": 210055,
    "alt_id": 1,
    "ability_1": {
      "1": 330000010,
      "2": 330000012,
      "3": 330000014,
      "4": 330000018,
      "5": 330000023,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050106": {
    "id": 20050106,
    "name": "Prometheus",
    "story_id": 210052011,
    "favorite": 5,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206001002,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 374,
    "max_atk": 121,
    "base_id": 210052,
    "alt_id": 1,
    "ability_1": {
      "1": 330000089,
      "2": 330000090,
      "3": 330000091,
      "4": 330000092,
      "5": 330000093,
      "6": 330000567
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 2216
    }
  },
  "20050107": {
    "id": 20050107,
    "name": "Konohana Sakuya",
    "story_id": 210082011,
    "favorite": 3,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206001004,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 374,
    "max_atk": 121,
    "base_id": 210082,
    "alt_id": 1,
    "ability_1": {
      "1": 330000001,
      "2": 330000003,
      "3": 330000005,
      "4": 330000007,
      "5": 330000010,
      "6": 330000072
    },
    "ability_2": {
      "1": 330000172,
      "2": 330000172,
      "3": 330000172,
      "4": 330000172,
      "5": 330000173,
      "6": 330000569
    }
  },
  "20050108": {
    "id": 20050108,
    "name": "Arctos",
    "story_id": 210030011,
    "favorite": 1,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206001005,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 374,
    "max_atk": 121,
    "base_id": 210030,
    "alt_id": 1,
    "ability_1": {
      "1": 330000099,
      "2": 330000100,
      "3": 330000101,
      "4": 330000102,
      "5": 330000103,
      "6": 330000555
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 330000557
    }
  },
  "20050109": {
    "id": 20050109,
    "name": "Apollo",
    "story_id": 210103011,
    "favorite": 4,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206001006,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 127,
    "base_id": 210103,
    "alt_id": 1,
    "ability_1": {
      "1": 330000018,
      "2": 330000021,
      "3": 330000024,
      "4": 330000028,
      "5": 330000031,
      "6": 330000560
    },
    "ability_2": {
      "1": 330000174,
      "2": 330000174,
      "3": 330000174,
      "4": 330000174,
      "5": 330000175,
      "6": 330000175
    }
  },
  "20050110": {
    "id": 20050110,
    "name": "Kagutsuchi",
    "story_id": 210107011,
    "favorite": 1,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206001007,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 127,
    "base_id": 210107,
    "alt_id": 1,
    "ability_1": {
      "1": 330000018,
      "2": 330000020,
      "3": 330000022,
      "4": 330000025,
      "5": 330000028,
      "6": 330000562
    },
    "ability_2": {
      "1": 330000216,
      "2": 330000216,
      "3": 330000216,
      "4": 330000216,
      "5": 330000217,
      "6": 330000217
    }
  },
  "20050111": {
    "id": 20050111,
    "name": "Rathalos",
    "story_id": 210121011,
    "favorite": 1,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 7,
    "max_hp": 221,
    "max_atk": 76,
    "base_id": 210121,
    "alt_id": 1,
    "ability_1": {
      "1": 330000072,
      "2": 330000073,
      "3": 330000075,
      "4": 330000076,
      "5": 330000077,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050112": {
    "id": 20050112,
    "name": "Dreadking Rathalos",
    "story_id": 210122011,
    "favorite": 1,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 127,
    "base_id": 210122,
    "alt_id": 1,
    "ability_1": {
      "1": 330000104,
      "2": 330000105,
      "3": 330000106,
      "4": 330000107,
      "5": 330000108,
      "6": 0
    },
    "ability_2": {
      "1": 330000109,
      "2": 330000109,
      "3": 330000109,
      "4": 330000109,
      "5": 330000110,
      "6": 0
    }
  },
  "20050113": {
    "id": 20050113,
    "name": "Gala Mars",
    "story_id": 200009011,
    "favorite": 5,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 127,
    "base_id": 200009,
    "alt_id": 1,
    "ability_1": {
      "1": 330000111,
      "2": 330000112,
      "3": 330000113,
      "4": 330000114,
      "5": 330000115,
      "6": 0
    },
    "ability_2": {
      "1": 330000116,
      "2": 330000116,
      "3": 330000116,
      "4": 330000116,
      "5": 330000117,
      "6": 0
    }
  },
  "20050114": {
    "id": 20050114,
    "name": "Horus",
    "story_id": 210124011,
    "favorite": 2,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 206001008,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 127,
    "base_id": 210124,
    "alt_id": 1,
    "ability_1": {
      "1": 1233,
      "2": 1234,
      "3": 1235,
      "4": 1236,
      "5": 1237,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050115": {
    "id": 20050115,
    "name": "Mini Hildy",
    "story_id": 210133011,
    "favorite": 3,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 7,
    "max_hp": 221,
    "max_atk": 76,
    "base_id": 210133,
    "alt_id": 1,
    "ability_1": {
      "1": 330000526,
      "2": 330000527,
      "3": 330000528,
      "4": 330000529,
      "5": 330000078,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050116": {
    "id": 20050116,
    "name": "Gozu Tenno",
    "story_id": 210136011,
    "favorite": 1,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 127,
    "base_id": 210136,
    "alt_id": 1,
    "ability_1": {
      "1": 330000031,
      "2": 330000033,
      "3": 330000034,
      "4": 1618,
      "5": 1619,
      "6": 0
    },
    "ability_2": {
      "1": 1548,
      "2": 1548,
      "3": 1548,
      "4": 1548,
      "5": 1549,
      "6": 0
    }
  },
  "20050117": {
    "id": 20050117,
    "name": "Gala Reborn Agni",
    "story_id": 210147011,
    "favorite": 1,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 127,
    "base_id": 210147,
    "alt_id": 1,
    "ability_1": {
      "1": 330000031,
      "2": 330000033,
      "3": 330000034,
      "4": 1618,
      "5": 1619,
      "6": 0
    },
    "ability_2": {
      "1": 1926,
      "2": 1926,
      "3": 1926,
      "4": 1926,
      "5": 1927,
      "6": 0
    }
  },
  "20050118": {
    "id": 20050118,
    "name": "Uriel",
    "story_id": 210163011,
    "favorite": 4,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 127,
    "base_id": 210163,
    "alt_id": 1,
    "ability_1": {
      "1": 330000023,
      "2": 330000028,
      "3": 330000031,
      "4": 330000033,
      "5": 330000034,
      "6": 0
    },
    "ability_2": {
      "1": 2398,
      "2": 2398,
      "3": 2398,
      "4": 2398,
      "5": 2400,
      "6": 0
    }
  },
  "20050119": {
    "id": 20050119,
    "name": "Primal Brunhilda",
    "story_id": 210177011,
    "favorite": 3,
    "bond_type": 2,
    "element": 1,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 127,
    "base_id": 210177,
    "alt_id": 1,
    "ability_1": {
      "1": 2741,
      "2": 2742,
      "3": 2743,
      "4": 2744,
      "5": 2745,
      "6": 0
    },
    "ability_2": {
      "1": 3700,
      "2": 3700,
      "3": 3700,
      "4": 3700,
      "5": 3701,
      "6": 0
    }
  },
  "20050201": {
    "id": 20050201,
    "name": "Poseidon",
    "story_id": 210025011,
    "favorite": 2,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206002002,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 11,
    "max_hp": 376,
    "max_atk": 119,
    "base_id": 210025,
    "alt_id": 1,
    "ability_1": {
      "1": 330000309,
      "2": 330000311,
      "3": 330000312,
      "4": 330000313,
      "5": 330000314,
      "6": 2220
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 2217
    }
  },
  "20050202": {
    "id": 20050202,
    "name": "High Mercury",
    "story_id": 210040011,
    "favorite": 5,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 201002022,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 35,
    "base_atk": 11,
    "max_hp": 357,
    "max_atk": 113,
    "base_id": 210040,
    "alt_id": 1,
    "ability_1": {
      "1": 330000309,
      "2": 330000311,
      "3": 330000312,
      "4": 330000313,
      "5": 330000314,
      "6": 2220
    },
    "ability_2": {
      "1": 330000170,
      "2": 330000170,
      "3": 330000170,
      "4": 330000170,
      "5": 330000171,
      "6": 2300
    }
  },
  "20050203": {
    "id": 20050203,
    "name": "Leviathan",
    "story_id": 210017011,
    "favorite": 5,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206002001,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 370,
    "max_atk": 125,
    "base_id": 210017,
    "alt_id": 1,
    "ability_1": {
      "1": 330000273,
      "2": 330000277,
      "3": 330000278,
      "4": 330000279,
      "5": 330000280,
      "6": 1513
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 2216
    }
  },
  "20050204": {
    "id": 20050204,
    "name": "Siren",
    "story_id": 210054011,
    "favorite": 3,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206002003,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 370,
    "max_atk": 125,
    "base_id": 210054,
    "alt_id": 1,
    "ability_1": {
      "1": 330000259,
      "2": 330000261,
      "3": 330000263,
      "4": 330000265,
      "5": 330000266,
      "6": 330000309
    },
    "ability_2": {
      "1": 330000320,
      "2": 330000320,
      "3": 330000320,
      "4": 330000320,
      "5": 330000321,
      "6": 330000569
    }
  },
  "20050205": {
    "id": 20050205,
    "name": "Dragonyule Jeanne",
    "story_id": 210076011,
    "favorite": 3,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 370,
    "max_atk": 125,
    "base_id": 210076,
    "alt_id": 1,
    "ability_1": {
      "1": 330000118,
      "2": 330000119,
      "3": 330000120,
      "4": 330000121,
      "5": 330000122,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050206": {
    "id": 20050206,
    "name": "Peng Lai",
    "story_id": 210079011,
    "favorite": 5,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 7,
    "max_hp": 222,
    "max_atk": 75,
    "base_id": 210079,
    "alt_id": 1,
    "ability_1": {
      "1": 330000289,
      "2": 330000292,
      "3": 330000294,
      "4": 330000297,
      "5": 330000299,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050207": {
    "id": 20050207,
    "name": "Simurgh",
    "story_id": 210081011,
    "favorite": 3,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206002004,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 38,
    "base_atk": 11,
    "max_hp": 383,
    "max_atk": 113,
    "base_id": 210081,
    "alt_id": 1,
    "ability_1": {
      "1": 330000294,
      "2": 330000295,
      "3": 330000296,
      "4": 330000298,
      "5": 330000299,
      "6": 330000563
    },
    "ability_2": {
      "1": 330000322,
      "2": 330000322,
      "3": 330000322,
      "4": 330000322,
      "5": 330000323,
      "6": 330000565
    }
  },
  "20050208": {
    "id": 20050208,
    "name": "Halloween Maritimus",
    "story_id": 210097011,
    "favorite": 3,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 11,
    "max_hp": 376,
    "max_atk": 119,
    "base_id": 210097,
    "alt_id": 1,
    "ability_1": {
      "1": 330000289,
      "2": 330000290,
      "3": 330000291,
      "4": 330000293,
      "5": 330000294,
      "6": 0
    },
    "ability_2": {
      "1": 330000324,
      "2": 330000324,
      "3": 330000324,
      "4": 330000324,
      "5": 330000325,
      "6": 0
    }
  },
  "20050209": {
    "id": 20050209,
    "name": "Kamuy",
    "story_id": 210109011,
    "favorite": 1,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206002005,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 370,
    "max_atk": 125,
    "base_id": 210109,
    "alt_id": 1,
    "ability_1": {
      "1": 330000269,
      "2": 330000271,
      "3": 330000272,
      "4": 330000275,
      "5": 330000277,
      "6": 330000562
    },
    "ability_2": {
      "1": 330000218,
      "2": 330000218,
      "3": 330000218,
      "4": 330000218,
      "5": 330000219,
      "6": 330000219
    }
  },
  "20050210": {
    "id": 20050210,
    "name": "Nimis",
    "story_id": 210053011,
    "favorite": 1,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206002006,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 370,
    "max_atk": 125,
    "base_id": 210053,
    "alt_id": 1,
    "ability_1": {
      "1": 330000315,
      "2": 330000316,
      "3": 330000317,
      "4": 330000318,
      "5": 330000319,
      "6": 330000555
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 330000557
    }
  },
  "20050211": {
    "id": 20050211,
    "name": "Gaibhne & Creidhne",
    "story_id": 210120011,
    "favorite": 3,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 206002007,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 370,
    "max_atk": 125,
    "base_id": 210120,
    "alt_id": 1,
    "ability_1": {
      "1": 330000273,
      "2": 330000274,
      "3": 330000275,
      "4": 330000276,
      "5": 330000277,
      "6": 0
    },
    "ability_2": {
      "1": 330000186,
      "2": 330000186,
      "3": 330000186,
      "4": 330000186,
      "5": 330000187,
      "6": 0
    }
  },
  "20050212": {
    "id": 20050212,
    "name": "Styx",
    "story_id": 210130011,
    "favorite": 4,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206002008,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 370,
    "max_atk": 125,
    "base_id": 210130,
    "alt_id": 1,
    "ability_1": {
      "1": 330000199,
      "2": 330000200,
      "3": 330000201,
      "4": 330000202,
      "5": 330000203,
      "6": 330000568
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 2216
    }
  },
  "20050213": {
    "id": 20050213,
    "name": "Gala Reborn Poseidon",
    "story_id": 210134011,
    "favorite": 2,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 370,
    "max_atk": 125,
    "base_id": 210134,
    "alt_id": 1,
    "ability_1": {
      "1": 330000278,
      "2": 330000279,
      "3": 330000280,
      "4": 1513,
      "5": 1514,
      "6": 0
    },
    "ability_2": {
      "1": 1449,
      "2": 1449,
      "3": 1449,
      "4": 1449,
      "5": 1450,
      "6": 0
    }
  },
  "20050214": {
    "id": 20050214,
    "name": "Gabriel",
    "story_id": 210145011,
    "favorite": 3,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 370,
    "max_atk": 125,
    "base_id": 210145,
    "alt_id": 1,
    "ability_1": {
      "1": 330000273,
      "2": 330000277,
      "3": 330000278,
      "4": 330000279,
      "5": 330000280,
      "6": 0
    },
    "ability_2": {
      "1": 1832,
      "2": 1832,
      "3": 1832,
      "4": 1832,
      "5": 1833,
      "6": 0
    }
  },
  "20050215": {
    "id": 20050215,
    "name": "Mini Mercs",
    "story_id": 210146011,
    "favorite": 5,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 7,
    "max_hp": 222,
    "max_atk": 75,
    "base_id": 210146,
    "alt_id": 1,
    "ability_1": {
      "1": 330000526,
      "2": 330000527,
      "3": 330000528,
      "4": 330000529,
      "5": 330000078,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050216": {
    "id": 20050216,
    "name": "Summer Marishiten",
    "story_id": 210156011,
    "favorite": 5,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 370,
    "max_atk": 125,
    "base_id": 210156,
    "alt_id": 1,
    "ability_1": {
      "1": 330000278,
      "2": 330000279,
      "3": 330000280,
      "4": 1513,
      "5": 1514,
      "6": 0
    },
    "ability_2": {
      "1": 2071,
      "2": 2071,
      "3": 2071,
      "4": 2071,
      "5": 2072,
      "6": 0
    }
  },
  "20050217": {
    "id": 20050217,
    "name": "Gala Beast Ciella",
    "story_id": 210167011,
    "favorite": 2,
    "bond_type": 2,
    "element": 2,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 370,
    "max_atk": 125,
    "base_id": 210167,
    "alt_id": 1,
    "ability_1": {
      "1": 2563,
      "2": 2564,
      "3": 2565,
      "4": 2566,
      "5": 2567,
      "6": 0
    },
    "ability_2": {
      "1": 2568,
      "2": 2568,
      "3": 2568,
      "4": 2568,
      "5": 2569,
      "6": 0
    }
  },
  "20050301": {
    "id": 20050301,
    "name": "Zephyr",
    "story_id": 210018011,
    "favorite": 5,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206003001,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 126,
    "base_id": 210018,
    "alt_id": 1,
    "ability_1": {
      "1": 330000342,
      "2": 330000346,
      "3": 330000347,
      "4": 330000348,
      "5": 330000349,
      "6": 1590
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 2216
    }
  },
  "20050302": {
    "id": 20050302,
    "name": "High Midgardsormr",
    "story_id": 210038011,
    "favorite": 4,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 201002032,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 35,
    "base_atk": 11,
    "max_hp": 356,
    "max_atk": 114,
    "base_id": 210038,
    "alt_id": 1,
    "ability_1": {
      "1": 330000378,
      "2": 330000379,
      "3": 330000380,
      "4": 330000381,
      "5": 330000382,
      "6": 2220
    },
    "ability_2": {
      "1": 330000170,
      "2": 330000170,
      "3": 330000170,
      "4": 330000170,
      "5": 330000171,
      "6": 2300
    }
  },
  "20050303": {
    "id": 20050303,
    "name": "Sylvia",
    "story_id": 210010011,
    "favorite": 2,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 7,
    "max_hp": 225,
    "max_atk": 72,
    "base_id": 210010,
    "alt_id": 1,
    "ability_1": {
      "1": 330000355,
      "2": 330000358,
      "3": 330000360,
      "4": 330000362,
      "5": 330000365,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050304": {
    "id": 20050304,
    "name": "Garuda",
    "story_id": 210036011,
    "favorite": 4,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206003002,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 38,
    "base_atk": 11,
    "max_hp": 383,
    "max_atk": 114,
    "base_id": 210036,
    "alt_id": 1,
    "ability_1": {
      "1": 330000365,
      "2": 330000366,
      "3": 330000367,
      "4": 330000368,
      "5": 330000369,
      "6": 2301
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 2219
    }
  },
  "20050305": {
    "id": 20050305,
    "name": "Long Long",
    "story_id": 210080011,
    "favorite": 4,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206003003,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 126,
    "base_id": 210080,
    "alt_id": 1,
    "ability_1": {
      "1": 330000383,
      "2": 330000384,
      "3": 330000385,
      "4": 330000386,
      "5": 330000387,
      "6": 330000555
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 330000557
    }
  },
  "20050306": {
    "id": 20050306,
    "name": "Pazuzu",
    "story_id": 210026011,
    "favorite": 5,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206003004,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 126,
    "base_id": 210026,
    "alt_id": 1,
    "ability_1": {
      "1": 330000337,
      "2": 330000340,
      "3": 330000343,
      "4": 330000346,
      "5": 330000347,
      "6": 330000560
    },
    "ability_2": {
      "1": 330000188,
      "2": 330000188,
      "3": 330000188,
      "4": 330000188,
      "5": 330000189,
      "6": 330000189
    }
  },
  "20050307": {
    "id": 20050307,
    "name": "Yulong",
    "story_id": 210074011,
    "favorite": 4,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 7,
    "max_hp": 225,
    "max_atk": 72,
    "base_id": 210074,
    "alt_id": 1,
    "ability_1": {
      "1": 330000333,
      "2": 330000334,
      "3": 330000335,
      "4": 330000337,
      "5": 330000342,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050308": {
    "id": 20050308,
    "name": "Freyja",
    "story_id": 210084011,
    "favorite": 5,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206003005,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 375,
    "max_atk": 120,
    "base_id": 210084,
    "alt_id": 1,
    "ability_1": {
      "1": 330000355,
      "2": 330000356,
      "3": 330000357,
      "4": 330000359,
      "5": 330000360,
      "6": 330000564
    },
    "ability_2": {
      "1": 330000389,
      "2": 330000389,
      "3": 330000389,
      "4": 330000389,
      "5": 330000391,
      "6": 330000566
    }
  },
  "20050309": {
    "id": 20050309,
    "name": "Vayu",
    "story_id": 210098011,
    "favorite": 1,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206003006,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 126,
    "base_id": 210098,
    "alt_id": 1,
    "ability_1": {
      "1": 330000326,
      "2": 330000328,
      "3": 330000330,
      "4": 330000332,
      "5": 330000333,
      "6": 330000378
    },
    "ability_2": {
      "1": 330000392,
      "2": 330000392,
      "3": 330000392,
      "4": 330000392,
      "5": 330000393,
      "6": 330000569
    }
  },
  "20050310": {
    "id": 20050310,
    "name": "Mini Mids",
    "story_id": 210111011,
    "favorite": 4,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 7,
    "max_hp": 225,
    "max_atk": 72,
    "base_id": 210111,
    "alt_id": 1,
    "ability_1": {
      "1": 330000526,
      "2": 330000527,
      "3": 330000528,
      "4": 330000529,
      "5": 330000078,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050311": {
    "id": 20050311,
    "name": "Hastur",
    "story_id": 210105011,
    "favorite": 2,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206003007,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 126,
    "base_id": 210105,
    "alt_id": 1,
    "ability_1": {
      "1": 330000337,
      "2": 330000339,
      "3": 330000341,
      "4": 330000344,
      "5": 330000346,
      "6": 330000562
    },
    "ability_2": {
      "1": 330000176,
      "2": 330000176,
      "3": 330000176,
      "4": 330000176,
      "5": 330000177,
      "6": 330000177
    }
  },
  "20050312": {
    "id": 20050312,
    "name": "AC-011 Garland",
    "story_id": 210117011,
    "favorite": 2,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206003008,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 126,
    "base_id": 210117,
    "alt_id": 1,
    "ability_1": {
      "1": 330000337,
      "2": 330000340,
      "3": 330000343,
      "4": 330000346,
      "5": 330000347,
      "6": 330000560
    },
    "ability_2": {
      "1": 330000192,
      "2": 330000192,
      "3": 330000192,
      "4": 330000192,
      "5": 330000193,
      "6": 330000573
    }
  },
  "20050313": {
    "id": 20050313,
    "name": "Ariel",
    "story_id": 210116011,
    "favorite": 2,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 126,
    "base_id": 210116,
    "alt_id": 1,
    "ability_1": {
      "1": 330000342,
      "2": 330000344,
      "3": 330000345,
      "4": 330000346,
      "5": 330000347,
      "6": 0
    },
    "ability_2": {
      "1": 330000388,
      "2": 330000388,
      "3": 330000388,
      "4": 330000388,
      "5": 330000390,
      "6": 0
    }
  },
  "20050314": {
    "id": 20050314,
    "name": "Summer Konohana Sakuya",
    "story_id": 210125011,
    "favorite": 3,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 126,
    "base_id": 210125,
    "alt_id": 1,
    "ability_1": {
      "1": 1142,
      "2": 330000220,
      "3": 330000232,
      "4": 330000244,
      "5": 1154,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050315": {
    "id": 20050315,
    "name": "Midgardsormr Zero",
    "story_id": 210131011,
    "favorite": 4,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 126,
    "base_id": 210131,
    "alt_id": 1,
    "ability_1": {
      "1": 330000378,
      "2": 330000379,
      "3": 330000380,
      "4": 330000381,
      "5": 330000382,
      "6": 0
    },
    "ability_2": {
      "1": 1174,
      "2": 1175,
      "3": 1199,
      "4": 1200,
      "5": 1201,
      "6": 0
    }
  },
  "20050316": {
    "id": 20050316,
    "name": "Gala Reborn Zephyr",
    "story_id": 210143011,
    "favorite": 5,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 126,
    "base_id": 210143,
    "alt_id": 1,
    "ability_1": {
      "1": 330000347,
      "2": 330000348,
      "3": 330000349,
      "4": 1590,
      "5": 1591,
      "6": 0
    },
    "ability_2": {
      "1": 1592,
      "2": 1592,
      "3": 1592,
      "4": 1592,
      "5": 1593,
      "6": 0
    }
  },
  "20050317": {
    "id": 20050317,
    "name": "Menoetius",
    "story_id": 210137011,
    "favorite": 4,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 126,
    "base_id": 210137,
    "alt_id": 1,
    "ability_1": {
      "1": 330000540,
      "2": 330000541,
      "3": 330000542,
      "4": 330000543,
      "5": 330000544,
      "6": 0
    },
    "ability_2": {
      "1": 1623,
      "2": 1623,
      "3": 1623,
      "4": 1623,
      "5": 1624,
      "6": 0
    }
  },
  "20050318": {
    "id": 20050318,
    "name": "Rose Queen",
    "story_id": 210152011,
    "favorite": 3,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 126,
    "base_id": 210152,
    "alt_id": 1,
    "ability_1": {
      "1": 330000347,
      "2": 330000348,
      "3": 330000349,
      "4": 1590,
      "5": 1591,
      "6": 0
    },
    "ability_2": {
      "1": 1956,
      "2": 1956,
      "3": 1956,
      "4": 1956,
      "5": 1957,
      "6": 0
    }
  },
  "20050319": {
    "id": 20050319,
    "name": "Gala Beast Volk",
    "story_id": 210161011,
    "favorite": 1,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 126,
    "base_id": 210161,
    "alt_id": 1,
    "ability_1": {
      "1": 2168,
      "2": 2169,
      "3": 2170,
      "4": 2171,
      "5": 2172,
      "6": 0
    },
    "ability_2": {
      "1": 2174,
      "2": 2174,
      "3": 2174,
      "4": 2174,
      "5": 2175,
      "6": 0
    }
  },
  "20050320": {
    "id": 20050320,
    "name": "Fudo Myo-o",
    "story_id": 210169011,
    "favorite": 2,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 126,
    "base_id": 210169,
    "alt_id": 1,
    "ability_1": {
      "1": 330000347,
      "2": 330000348,
      "3": 330000349,
      "4": 1590,
      "5": 1591,
      "6": 0
    },
    "ability_2": {
      "1": 2530,
      "2": 2530,
      "3": 2530,
      "4": 2530,
      "5": 2531,
      "6": 0
    }
  },
  "20050321": {
    "id": 20050321,
    "name": "Michael",
    "story_id": 210168011,
    "favorite": 2,
    "bond_type": 2,
    "element": 3,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 369,
    "max_atk": 126,
    "base_id": 210168,
    "alt_id": 1,
    "ability_1": {
      "1": 330000342,
      "2": 330000346,
      "3": 330000347,
      "4": 330000348,
      "5": 330000349,
      "6": 0
    },
    "ability_2": {
      "1": 2586,
      "2": 2586,
      "3": 2586,
      "4": 2586,
      "5": 2587,
      "6": 0
    }
  },
  "20050401": {
    "id": 20050401,
    "name": "Jeanne d'Arc",
    "story_id": 210020011,
    "favorite": 3,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206004002,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 38,
    "base_atk": 11,
    "max_hp": 384,
    "max_atk": 113,
    "base_id": 210020,
    "alt_id": 1,
    "ability_1": {
      "1": 330000430,
      "2": 330000431,
      "3": 330000432,
      "4": 330000433,
      "5": 330000434,
      "6": 2301
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 2219
    }
  },
  "20050402": {
    "id": 20050402,
    "name": "High Jupiter",
    "story_id": 210041011,
    "favorite": 2,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 201002042,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 35,
    "base_atk": 11,
    "max_hp": 352,
    "max_atk": 118,
    "base_id": 210041,
    "alt_id": 1,
    "ability_1": {
      "1": 330000446,
      "2": 330000447,
      "3": 330000448,
      "4": 330000449,
      "5": 330000450,
      "6": 2220
    },
    "ability_2": {
      "1": 330000170,
      "2": 330000170,
      "3": 330000170,
      "4": 330000170,
      "5": 330000171,
      "6": 2300
    }
  },
  "20050403": {
    "id": 20050403,
    "name": "Corsaint Phoenix",
    "story_id": 210056011,
    "favorite": 2,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206004007,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 371,
    "max_atk": 124,
    "base_id": 210056,
    "alt_id": 1,
    "ability_1": {
      "1": 330000403,
      "2": 330000406,
      "3": 330000409,
      "4": 330000410,
      "5": 330000413,
      "6": 330000560
    },
    "ability_2": {
      "1": 330000190,
      "2": 330000190,
      "3": 330000190,
      "4": 330000190,
      "5": 330000191,
      "6": 330000191
    }
  },
  "20050404": {
    "id": 20050404,
    "name": "Gilgamesh",
    "story_id": 210048011,
    "favorite": 5,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206004003,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 371,
    "max_atk": 124,
    "base_id": 210048,
    "alt_id": 1,
    "ability_1": {
      "1": 330000094,
      "2": 330000095,
      "3": 330000096,
      "4": 330000097,
      "5": 330000098,
      "6": 330000561
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 2216
    }
  },
  "20050405": {
    "id": 20050405,
    "name": "Cupid",
    "story_id": 210049011,
    "favorite": 3,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206004001,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 11,
    "max_hp": 377,
    "max_atk": 119,
    "base_id": 210049,
    "alt_id": 1,
    "ability_1": {
      "1": 330000408,
      "2": 330000410,
      "3": 330000413,
      "4": 330000415,
      "5": 330000416,
      "6": 1760
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 2216
    }
  },
  "20050406": {
    "id": 20050406,
    "name": "Shishimai",
    "story_id": 210078011,
    "favorite": 2,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 7,
    "max_hp": 223,
    "max_atk": 75,
    "base_id": 210078,
    "alt_id": 1,
    "ability_1": {
      "1": 330000128,
      "2": 330000129,
      "3": 330000130,
      "4": 330000131,
      "5": 330000132,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050407": {
    "id": 20050407,
    "name": "Liger",
    "story_id": 210043011,
    "favorite": 1,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206004004,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 11,
    "max_hp": 377,
    "max_atk": 119,
    "base_id": 210043,
    "alt_id": 1,
    "ability_1": {
      "1": 330000446,
      "2": 330000447,
      "3": 330000448,
      "4": 330000449,
      "5": 100015,
      "6": 100015
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 320000923,
      "6": 320000923
    }
  },
  "20050408": {
    "id": 20050408,
    "name": "Takemikazuchi",
    "story_id": 210051011,
    "favorite": 4,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206004005,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 371,
    "max_atk": 124,
    "base_id": 210051,
    "alt_id": 1,
    "ability_1": {
      "1": 330000399,
      "2": 330000400,
      "3": 330000402,
      "4": 330000405,
      "5": 330000408,
      "6": 330000562
    },
    "ability_2": {
      "1": 330000451,
      "2": 330000451,
      "3": 330000451,
      "4": 330000451,
      "5": 330000452,
      "6": 330000571
    }
  },
  "20050409": {
    "id": 20050409,
    "name": "Pop-Star Siren",
    "story_id": 210094011,
    "favorite": 3,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 206004006,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 371,
    "max_atk": 124,
    "base_id": 210094,
    "alt_id": 1,
    "ability_1": {
      "1": 330000399,
      "2": 330000400,
      "3": 330000402,
      "4": 330000405,
      "5": 330000408,
      "6": 0
    },
    "ability_2": {
      "1": 330000194,
      "2": 330000194,
      "3": 330000194,
      "4": 330000194,
      "5": 330000194,
      "6": 0
    }
  },
  "20050410": {
    "id": 20050410,
    "name": "Daikokuten",
    "story_id": 210110011,
    "favorite": 2,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 371,
    "max_atk": 124,
    "base_id": 210110,
    "alt_id": 1,
    "ability_1": {
      "1": 330000410,
      "2": 330000411,
      "3": 330000412,
      "4": 330000414,
      "5": 330000415,
      "6": 0
    },
    "ability_2": {
      "1": 330000195,
      "2": 330000195,
      "3": 330000195,
      "4": 330000195,
      "5": 330000196,
      "6": 0
    }
  },
  "20050411": {
    "id": 20050411,
    "name": "Tie Shan Gongzhu",
    "story_id": 210085011,
    "favorite": 2,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206004008,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 371,
    "max_atk": 124,
    "base_id": 210085,
    "alt_id": 1,
    "ability_1": {
      "1": 330000422,
      "2": 330000423,
      "3": 330000424,
      "4": 330000425,
      "5": 330000426,
      "6": 330000564
    },
    "ability_2": {
      "1": 330000453,
      "2": 330000453,
      "3": 330000453,
      "4": 330000453,
      "5": 330000454,
      "6": 330000566
    }
  },
  "20050412": {
    "id": 20050412,
    "name": "Gala Thor",
    "story_id": 200018011,
    "favorite": 5,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 371,
    "max_atk": 124,
    "base_id": 200018,
    "alt_id": 1,
    "ability_1": {
      "1": 1226,
      "2": 1228,
      "3": 1294,
      "4": 1296,
      "5": 1298,
      "6": 0
    },
    "ability_2": {
      "1": 1230,
      "2": 1230,
      "3": 1230,
      "4": 1230,
      "5": 1231,
      "6": 0
    }
  },
  "20050413": {
    "id": 20050413,
    "name": "Lumière Pandora",
    "story_id": 210142011,
    "favorite": 3,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 371,
    "max_atk": 124,
    "base_id": 210142,
    "alt_id": 1,
    "ability_1": {
      "1": 1525,
      "2": 1526,
      "3": 1527,
      "4": 1528,
      "5": 1529,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050414": {
    "id": 20050414,
    "name": "Gala Reborn Jeanne",
    "story_id": 210144011,
    "favorite": 3,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 371,
    "max_atk": 124,
    "base_id": 210144,
    "alt_id": 1,
    "ability_1": {
      "1": 330000413,
      "2": 330000415,
      "3": 330000416,
      "4": 1760,
      "5": 1761,
      "6": 0
    },
    "ability_2": {
      "1": 1762,
      "2": 1762,
      "3": 1762,
      "4": 1762,
      "5": 1763,
      "6": 0
    }
  },
  "20050415": {
    "id": 20050415,
    "name": "Raphael",
    "story_id": 210154011,
    "favorite": 2,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 371,
    "max_atk": 124,
    "base_id": 210154,
    "alt_id": 1,
    "ability_1": {
      "1": 330000408,
      "2": 330000410,
      "3": 330000413,
      "4": 330000415,
      "5": 330000416,
      "6": 0
    },
    "ability_2": {
      "1": 1973,
      "2": 1973,
      "3": 1973,
      "4": 1973,
      "5": 1974,
      "6": 0
    }
  },
  "20050416": {
    "id": 20050416,
    "name": "Summer Cat Sìth",
    "story_id": 210158011,
    "favorite": 4,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 371,
    "max_atk": 124,
    "base_id": 210158,
    "alt_id": 1,
    "ability_1": {
      "1": 330000403,
      "2": 330000406,
      "3": 330000409,
      "4": 330000410,
      "5": 330000413,
      "6": 0
    },
    "ability_2": {
      "1": 2139,
      "2": 2139,
      "3": 2139,
      "4": 2139,
      "5": 2140,
      "6": 0
    }
  },
  "20050417": {
    "id": 20050417,
    "name": "Mini Jupi",
    "story_id": 210166011,
    "favorite": 2,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 7,
    "max_hp": 223,
    "max_atk": 75,
    "base_id": 210166,
    "alt_id": 1,
    "ability_1": {
      "1": 330000526,
      "2": 330000527,
      "3": 330000528,
      "4": 330000529,
      "5": 330000078,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050418": {
    "id": 20050418,
    "name": "Gala Chronos Nyx",
    "story_id": 210164011,
    "favorite": 5,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 371,
    "max_atk": 124,
    "base_id": 210164,
    "alt_id": 1,
    "ability_1": {
      "1": 2424,
      "2": 2425,
      "3": 2426,
      "4": 2427,
      "5": 2428,
      "6": 0
    },
    "ability_2": {
      "1": 2377,
      "2": 2377,
      "3": 2377,
      "4": 2377,
      "5": 2379,
      "6": 0
    }
  },
  "20050419": {
    "id": 20050419,
    "name": "Gala Elysium",
    "story_id": 210173011,
    "favorite": 5,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 371,
    "max_atk": 124,
    "base_id": 210173,
    "alt_id": 1,
    "ability_1": {
      "1": 3000,
      "2": 3001,
      "3": 3002,
      "4": 3003,
      "5": 3004,
      "6": 0
    },
    "ability_2": {
      "1": 3100,
      "2": 3100,
      "3": 3100,
      "4": 3100,
      "5": 3101,
      "6": 0
    }
  },
  "20050501": {
    "id": 20050501,
    "name": "Nidhogg",
    "story_id": 210019011,
    "favorite": 4,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206005002,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 374,
    "max_atk": 121,
    "base_id": 210019,
    "alt_id": 1,
    "ability_1": {
      "1": 330000514,
      "2": 330000515,
      "3": 330000517,
      "4": 330000518,
      "5": 330000519,
      "6": 2220
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 2217
    }
  },
  "20050502": {
    "id": 20050502,
    "name": "High Zodiark",
    "story_id": 210042011,
    "favorite": 1,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 201002052,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 35,
    "base_atk": 12,
    "max_hp": 350,
    "max_atk": 120,
    "base_id": 210042,
    "alt_id": 1,
    "ability_1": {
      "1": 330000514,
      "2": 330000515,
      "3": 330000517,
      "4": 330000518,
      "5": 330000519,
      "6": 2220
    },
    "ability_2": {
      "1": 330000170,
      "2": 330000170,
      "3": 330000170,
      "4": 330000170,
      "5": 330000171,
      "6": 2300
    }
  },
  "20050504": {
    "id": 20050504,
    "name": "Phantom",
    "story_id": 210045011,
    "favorite": 3,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 7,
    "max_hp": 224,
    "max_atk": 73,
    "base_id": 210045,
    "alt_id": 1,
    "ability_1": {
      "1": 330000464,
      "2": 330000465,
      "3": 330000466,
      "4": 330000470,
      "5": 330000475,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050505": {
    "id": 20050505,
    "name": "Maritimus",
    "story_id": 210072011,
    "favorite": 2,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 7,
    "max_hp": 224,
    "max_atk": 73,
    "base_id": 210072,
    "alt_id": 1,
    "ability_1": {
      "1": 330000508,
      "2": 330000509,
      "3": 330000511,
      "4": 330000514,
      "5": 330000516,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050506": {
    "id": 20050506,
    "name": "Marishiten",
    "story_id": 210077011,
    "favorite": 5,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 374,
    "max_atk": 121,
    "base_id": 210077,
    "alt_id": 1,
    "ability_1": {
      "1": 330000475,
      "2": 330000477,
      "3": 330000480,
      "4": 330000482,
      "5": 330000483,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050507": {
    "id": 20050507,
    "name": "Gold Fafnir",
    "story_id": 210091011,
    "favorite": 5,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 6,
    "max_hp": 229,
    "max_atk": 69,
    "base_id": 210091,
    "alt_id": 1,
    "ability_1": {
      "1": 330000133,
      "2": 330000134,
      "3": 330000135,
      "4": 330000136,
      "5": 330000137,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050508": {
    "id": 20050508,
    "name": "Nyarlathotep",
    "story_id": 210046011,
    "favorite": 4,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206005003,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 368,
    "max_atk": 128,
    "base_id": 210046,
    "alt_id": 1,
    "ability_1": {
      "1": 330000138,
      "2": 330000139,
      "3": 330000140,
      "4": 330000141,
      "5": 330000142,
      "6": 330000556
    },
    "ability_2": {
      "1": 330000143,
      "2": 330000143,
      "3": 330000143,
      "4": 330000143,
      "5": 330000144,
      "6": 330000144
    }
  },
  "20050509": {
    "id": 20050509,
    "name": "Shinobi",
    "story_id": 210087011,
    "favorite": 5,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206005004,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 368,
    "max_atk": 128,
    "base_id": 210087,
    "alt_id": 1,
    "ability_1": {
      "1": 330000455,
      "2": 330000457,
      "3": 330000459,
      "4": 330000461,
      "5": 330000464,
      "6": 330000514
    },
    "ability_2": {
      "1": 330000520,
      "2": 330000520,
      "3": 330000520,
      "4": 330000520,
      "5": 330000521,
      "6": 330000569
    }
  },
  "20050510": {
    "id": 20050510,
    "name": "Chthonius",
    "story_id": 200010011,
    "favorite": 4,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206005001,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 368,
    "max_atk": 128,
    "base_id": 200010,
    "alt_id": 1,
    "ability_1": {
      "1": 330000145,
      "2": 330000146,
      "3": 330000147,
      "4": 330000148,
      "5": 330000149,
      "6": 330009149
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 2216
    }
  },
  "20050511": {
    "id": 20050511,
    "name": "Parallel Zodiark",
    "story_id": 210095011,
    "favorite": 1,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 7,
    "max_hp": 221,
    "max_atk": 77,
    "base_id": 210095,
    "alt_id": 1,
    "ability_1": {
      "1": 330000123,
      "2": 330000124,
      "3": 330000125,
      "4": 330000126,
      "5": 330000127,
      "6": 0
    },
    "ability_2": {
      "1": 330000455,
      "2": 330000455,
      "3": 330000455,
      "4": 330000455,
      "5": 330000465,
      "6": 0
    }
  },
  "20050512": {
    "id": 20050512,
    "name": "Ebisu",
    "story_id": 210114011,
    "favorite": 1,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 7,
    "max_hp": 221,
    "max_atk": 77,
    "base_id": 210114,
    "alt_id": 1,
    "ability_1": {
      "1": 330000493,
      "2": 330000494,
      "3": 330000495,
      "4": 330000496,
      "5": 330000498,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050513": {
    "id": 20050513,
    "name": "Fatalis",
    "story_id": 210123011,
    "favorite": 5,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 368,
    "max_atk": 128,
    "base_id": 210123,
    "alt_id": 1,
    "ability_1": {
      "1": 330000155,
      "2": 330000156,
      "3": 330000157,
      "4": 330000158,
      "5": 330000159,
      "6": 0
    },
    "ability_2": {
      "1": 330000465,
      "2": 330000465,
      "3": 330000465,
      "4": 330000465,
      "5": 330000466,
      "6": 0
    }
  },
  "20050514": {
    "id": 20050514,
    "name": "Epimetheus",
    "story_id": 210112011,
    "favorite": 3,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206005005,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 368,
    "max_atk": 128,
    "base_id": 210112,
    "alt_id": 1,
    "ability_1": {
      "1": 330000470,
      "2": 330000473,
      "3": 330000476,
      "4": 330000477,
      "5": 330000480,
      "6": 330000560
    },
    "ability_2": {
      "1": 330000522,
      "2": 330000522,
      "3": 330000522,
      "4": 330000522,
      "5": 330000523,
      "6": 330000523
    }
  },
  "20050515": {
    "id": 20050515,
    "name": "Mini Zodi",
    "story_id": 210127011,
    "favorite": 1,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 22,
    "base_atk": 7,
    "max_hp": 221,
    "max_atk": 77,
    "base_id": 210127,
    "alt_id": 1,
    "ability_1": {
      "1": 330000526,
      "2": 330000527,
      "3": 330000528,
      "4": 330000529,
      "5": 330000078,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050516": {
    "id": 20050516,
    "name": "Andromeda",
    "story_id": 210115011,
    "favorite": 4,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206005006,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 368,
    "max_atk": 128,
    "base_id": 210115,
    "alt_id": 1,
    "ability_1": {
      "1": 330000466,
      "2": 330000467,
      "3": 330000469,
      "4": 330000471,
      "5": 330000475,
      "6": 330000558
    },
    "ability_2": {
      "1": 330000197,
      "2": 330000197,
      "3": 330000197,
      "4": 330000197,
      "5": 330000198,
      "6": 330000198
    }
  },
  "20050517": {
    "id": 20050517,
    "name": "Barbatos",
    "story_id": 210083011,
    "favorite": 1,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 300,
    "base_hp": 33,
    "base_atk": 11,
    "max_hp": 331,
    "max_atk": 115,
    "base_id": 210083,
    "alt_id": 1,
    "ability_1": {
      "1": 330000165,
      "2": 330000166,
      "3": 330000167,
      "4": 330000168,
      "5": 330000169,
      "6": 0
    },
    "ability_2": {
      "1": 330000464,
      "2": 330000464,
      "3": 330000464,
      "4": 330000464,
      "5": 330000464,
      "6": 0
    }
  },
  "20050518": {
    "id": 20050518,
    "name": "Azazel",
    "story_id": 210126011,
    "favorite": 2,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206005007,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 368,
    "max_atk": 128,
    "base_id": 210126,
    "alt_id": 1,
    "ability_1": {
      "1": 330000489,
      "2": 330000490,
      "3": 330000491,
      "4": 330000492,
      "5": 330000493,
      "6": 330000564
    },
    "ability_2": {
      "1": 330000524,
      "2": 330000524,
      "3": 330000524,
      "4": 330000524,
      "5": 330000525,
      "6": 330000566
    }
  },
  "20050519": {
    "id": 20050519,
    "name": "Gala Cat Sìth",
    "story_id": 200017011,
    "favorite": 4,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 368,
    "max_atk": 128,
    "base_id": 200017,
    "alt_id": 1,
    "ability_1": {
      "1": 330000204,
      "2": 330000205,
      "3": 330000206,
      "4": 330000207,
      "5": 330000208,
      "6": 0
    },
    "ability_2": {
      "1": 330000214,
      "2": 330000215,
      "3": 330000256,
      "4": 330000257,
      "5": 330000258,
      "6": 0
    }
  },
  "20050520": {
    "id": 20050520,
    "name": "Ramiel",
    "story_id": 210132011,
    "favorite": 4,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": true,
    "limit_break_material": 206005008,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 368,
    "max_atk": 128,
    "base_id": 210132,
    "alt_id": 1,
    "ability_1": {
      "1": 1167,
      "2": 1168,
      "3": 1195,
      "4": 1196,
      "5": 1197,
      "6": 330000572
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 330000493
    }
  },
  "20050521": {
    "id": 20050521,
    "name": "Giovanni",
    "story_id": 210135011,
    "favorite": 3,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 368,
    "max_atk": 128,
    "base_id": 210135,
    "alt_id": 1,
    "ability_1": {
      "1": 1454,
      "2": 1455,
      "3": 1456,
      "4": 1457,
      "5": 1458,
      "6": 0
    },
    "ability_2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    }
  },
  "20050522": {
    "id": 20050522,
    "name": "Arsène",
    "story_id": 210138011,
    "favorite": 5,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 368,
    "max_atk": 128,
    "base_id": 210138,
    "alt_id": 1,
    "ability_1": {
      "1": 330000530,
      "2": 330000531,
      "3": 330000532,
      "4": 330000533,
      "5": 330000534,
      "6": 0
    },
    "ability_2": {
      "1": 330000535,
      "2": 330000536,
      "3": 330000537,
      "4": 330000538,
      "5": 330000539,
      "6": 0
    }
  },
  "20050523": {
    "id": 20050523,
    "name": "High Chthonius",
    "story_id": 210148011,
    "favorite": 4,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 368,
    "max_atk": 128,
    "base_id": 210148,
    "alt_id": 1,
    "ability_1": {
      "1": 330000545,
      "2": 330000546,
      "3": 330000547,
      "4": 330000548,
      "5": 330000549,
      "6": 0
    },
    "ability_2": {
      "1": 1841,
      "2": 1841,
      "3": 1841,
      "4": 1841,
      "5": 1843,
      "6": 0
    }
  },
  "20050524": {
    "id": 20050524,
    "name": "Gala Reborn Nidhogg",
    "story_id": 210155011,
    "favorite": 4,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 368,
    "max_atk": 128,
    "base_id": 210155,
    "alt_id": 1,
    "ability_1": {
      "1": 330000480,
      "2": 330000482,
      "3": 330000483,
      "4": 2024,
      "5": 2025,
      "6": 0
    },
    "ability_2": {
      "1": 2026,
      "2": 2026,
      "3": 2026,
      "4": 2026,
      "5": 2027,
      "6": 0
    }
  },
  "20050525": {
    "id": 20050525,
    "name": "Gala Bahamut",
    "story_id": 210162011,
    "favorite": 5,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 368,
    "max_atk": 128,
    "base_id": 210162,
    "alt_id": 1,
    "ability_1": {
      "1": 2249,
      "2": 2250,
      "3": 2251,
      "4": 2252,
      "5": 2253,
      "6": 0
    },
    "ability_2": {
      "1": 2254,
      "2": 2254,
      "3": 2254,
      "4": 2254,
      "5": 2256,
      "6": 0
    }
  },
  "29990001": {
    "id": 29990001,
    "name": "Fallen Angel Raphael",
    "story_id": "N/A",
    "favorite": 2,
    "bond_type": 2,
    "element": 4,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 37,
    "base_atk": 12,
    "max_hp": 371,
    "max_atk": 124,
    "base_id": 210154,
    "alt_id": 3,
    "ability_1": {
      "1": 100001,
      "2": 100001,
      "3": 100001,
      "4": 100001,
      "5": 100001,
      "6": 0
    },
    "ability_2": {
      "1": 100004,
      "2": 100004,
      "3": 100004,
      "4": 100004,
      "5": 100004,
      "6": 0
    }
  },
  "29990002": {
    "id": 29990002,
    "name": "Fallen Angel Ramiel",
    "story_id": "N/A",
    "favorite": 4,
    "bond_type": 2,
    "element": 5,
    "rarity": 5,
    "has_spiral": false,
    "limit_break_material": 0,
    "sellcoin": 5000,
    "sellwater": 8500,
    "base_hp": 36,
    "base_atk": 12,
    "max_hp": 368,
    "max_atk": 128,
    "base_id": 210132,
    "alt_id": 3,
    "ability_1": {
      "1": 100001,
      "2": 100001,
      "3": 100001,
      "4": 100001,
      "5": 100001,
      "6": 0
    },
    "ability_2": {
      "1": 100005,
      "2": 100005,
      "3": 100005,
      "4": 100005,
      "5": 100005,
      "6": 0
    }
  }
}
const DragonGiftMap = [
	{ 'id': 10001, 'favorite_type': 0, 'reliability': 100, 'favorite_reliability': 100 },
	{ 'id': 10002, 'favorite_type': 0, 'reliability': 300, 'favorite_reliability': 300 },
	{ 'id': 10003, 'favorite_type': 0, 'reliability': 600, 'favorite_reliability': 600 },
	{ 'id': 10004, 'favorite_type': 0, 'reliability': 1000, 'favorite_reliability': 1000 },
	{ 'id': 20001, 'favorite_type': 1, 'reliability': 1200, 'favorite_reliability': 1800 },
	{ 'id': 20002, 'favorite_type': 2, 'reliability': 1200, 'favorite_reliability': 1800 },
	{ 'id': 20003, 'favorite_type': 3, 'reliability': 1200, 'favorite_reliability': 1800 },
	{ 'id': 20004, 'favorite_type': 4, 'reliability': 1200, 'favorite_reliability': 1800 },
	{ 'id': 20005, 'favorite_type': 5, 'reliability': 1200, 'favorite_reliability': 1800 },
	{ 'id': 20006, 'favorite_type': 0, 'reliability': 2000, 'favorite_reliability': 2000 },
	{ 'id': 30001, 'favorite_type': 0, 'reliability': 1000, 'favorite_reliability': 1000 },
	{ 'id': 30002, 'favorite_type': 0, 'reliability': 1000, 'favorite_reliability': 1000 },
	{ 'id': 30003, 'favorite_type': 0, 'reliability': 1000, 'favorite_reliability': 1000 },
	{ 'id': 40001, 'favorite_type': 0, 'reliability': 200, 'favorite_reliability': 200 },
]
const DragonRewardsList = {
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
const DragonRewardsEXList = [
	{'id': 201019011, 'min': 1, 'max': 2},
	{'id': 201019021, 'min': 1, 'max': 2},
	{'id': 201019031, 'min': 1, 'max': 2},
	{'id': 201019041, 'min': 1, 'max': 2},
	{'id': 201019051, 'min': 1, 'max': 2},
	{'id': 201011001, 'min': 1, 'max': 1},
	{'id': 201012001, 'min': 1, 'max': 1}
];
const DragonRewardsFruitList = {
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

function GetDragonInfo(DragonID, Attribute) {
	if (DragonInfoMap[String(DragonID)] == undefined) {
		return {
			"id": 0,
			"story_id": "N/A",
			"favorite": 1,
			"bond_type": 1,
			"element": 99,
			"rarity": 5,
			"has_spiral": false,
			"sellcoin": 5000,
			"sellwater": 300,
			"base_hp": 37,
			"base_atk": 12,
			"max_hp": 371,
			"max_atk": 124
		}[Attribute];
	}
	return DragonInfoMap[String(DragonID)][Attribute];
}

function GenerateDragonSaveTemplate(LastAssignedDragonID) {
	let FullDragonTemplate = []
	let i = 0; 
	while (i < Object.keys(DragonInfoMap).length) {
		const DragonID = Object.keys(DragonInfoMap)[i];
		var DragonTemplate = {
                "dragon_key_id": LastAssignedDragonID + 1,
                "dragon_id": DragonInfoMap[DragonID]['id'],
				"rarity": DragonInfoMap[DragonID]['rarity'],
                "level": 1,
                "hp_plus_count": 0,
                "attack_plus_count": 0,
                "exp": 0,
                "is_lock": 0,
                "is_new": 1,
                "get_time": Math.floor(Date.now() / 1000),
                "skill_1_level": 1,
                "ability_1_level": 1,
                "ability_2_level": 0,
                "limit_break_count": 0
        }
		LastAssignedDragonID = LastAssignedDragonID + 1;
		FullDragonTemplate.push(DragonTemplate);
		i++;
	}
	return [FullDragonTemplate];
}
function GenerateDragonSaveTemplateCorrect(LastAssignedDragonID) {
	let FullDragonTemplate = []
	let i = 0; 
	while (i < Object.keys(DragonInfoMap).length) {
		const DragonID = Object.keys(DragonInfoMap)[i];
		if (parseInt(DragonID) <= 29900000) {
			var DragonTemplate = {
					"dragon_key_id": LastAssignedDragonID + 1,
					"dragon_id": DragonInfoMap[DragonID]['id'],
					"rarity": DragonInfoMap[DragonID]['rarity'],
					"level": 1,
					"hp_plus_count": 0,
					"attack_plus_count": 0,
					"exp": 0,
					"is_lock": 0,
					"is_new": 1,
					"get_time": Math.floor(Date.now() / 1000),
					"skill_1_level": 1,
					"ability_1_level": 1,
					"ability_2_level": 0,
					"limit_break_count": 0
			}
			LastAssignedDragonID = LastAssignedDragonID + 1;
			FullDragonTemplate.push(DragonTemplate);
		}
		i++;
	}
	return [FullDragonTemplate];
}
function GenerateDragonReliabilityTemplate() {
	let FullDragonTemplate = []
	let i = 0;
	while (i < Object.keys(DragonInfoMap).length) {
		const DragonID = Object.keys(DragonInfoMap)[i];
		var Template = {
			'dragon_id': DragonInfoMap[DragonID]['id'],
            'get_time': Math.floor(Date.now() / 1000),
            'reliability_level': 1,
            'reliability_total_exp': 0,
            'last_contact_time': 0
		}
		FullDragonTemplate.push(Template);
		i++;
	}
	return FullDragonTemplate;
}
function GenerateDragonReliabilityTemplateCorrect() {
	let FullDragonTemplate = []
	let i = 0;
	while (i < Object.keys(DragonInfoMap).length) {
		const DragonID = Object.keys(DragonInfoMap)[i];
		if (parseInt(DragonID) <= 29900000) {
			var Template = {
				'dragon_id': DragonInfoMap[DragonID]['id'],
				'get_time': Math.floor(Date.now() / 1000),
				'reliability_level': 1,
				'reliability_total_exp': 0,
				'last_contact_time': 0
			}
			FullDragonTemplate.push(Template);
		}
		i++;
	}
	return FullDragonTemplate;
}
function GenerateEntitySaveTemplate(NewEntityList) {
	let FullDragonTemplate = []
	let i = 0;
	while (i < Object.keys(DragonInfoMap).length) {
		const DragonID = Object.keys(DragonInfoMap)[i];
		var Template = {
			'entity_type': 1,
			'entity_id': parseInt(DragonID)
		}
		NewEntityList.push(Template);
		i++;
	}
	return FullDragonTemplate;
}
function GenerateEntitySaveTemplateCorrect(NewEntityList) {
	let FullDragonTemplate = []
	let i = 0;
	while (i < Object.keys(DragonInfoMap).length) {
		const DragonID = Object.keys(DragonInfoMap)[i];
		if (parseInt(DragonID) <= 29900000) {
			var Template = {
				'entity_type': 1,
				'entity_id': parseInt(DragonID)
			}
			NewEntityList.push(Template);
		}
		i++;
	}
	return FullDragonTemplate;
}
function GenerateDragonMaxSaveTemplate(LastAssignedDragonID) {
	let FullDragonTemplate = []
	let i = 0;
	let DragonCount = 0;
	while (i < Object.keys(DragonInfoMap).length) {
		const DragonID = Object.keys(DragonInfoMap)[i];
		var DragonTemplate = {
                "dragon_key_id": LastAssignedDragonID + 1,
                "dragon_id": DragonInfoMap[DragonID]['id'],
				"rarity": DragonInfoMap[DragonID]['rarity'],
                "level": 100,
                "hp_plus_count": 50,
                "attack_plus_count": 50,
                "exp": 625170,
                "is_lock": 0,
                "is_new": 1,
                "get_time": Math.floor(Date.now() / 1000),
                "skill_1_level": 2,
                "ability_1_level": 5,
                "ability_2_level": 5,
                "limit_break_count": 4
        }
		var DragonTemplate2 = {
                "dragon_key_id": LastAssignedDragonID + 2,
                "dragon_id": DragonInfoMap[DragonID]['id'],
				"rarity": DragonInfoMap[DragonID]['rarity'],
                "level": 100,
                "hp_plus_count": 50,
                "attack_plus_count": 50,
                "exp": 625170,
                "is_lock": 0,
                "is_new": 1,
                "get_time": Math.floor(Date.now() / 1000) + 1,
                "skill_1_level": 2,
                "ability_1_level": 5,
                "ability_2_level": 5,
                "limit_break_count": 4
        }
		if (DragonInfoMap[DragonID]['has_spiral'] == true) {
			DragonTemplate['level'] = 120;
			DragonTemplate2['level'] = 120;
			DragonTemplate['ability_1_level'] = 6;
			DragonTemplate2['ability_1_level'] = 6;
        	DragonTemplate['ability_2_level'] = 6;
			DragonTemplate2['ability_2_level'] = 6;
        	DragonTemplate['limit_break_count'] = 5;
			DragonTemplate2['limit_break_count'] = 5;
		}
		FullDragonTemplate.push(DragonTemplate);
		FullDragonTemplate.push(DragonTemplate2);
		DragonCount += 2;
		LastAssignedDragonID = LastAssignedDragonID + 2;
		i++;
	}
	return [FullDragonTemplate];
}
function GenerateDragonMaxReliabilityTemplate() {
	let FullDragonTemplate = []
	let i = 0;
	while (i < Object.keys(DragonInfoMap).length) {
		const DragonID = Object.keys(DragonInfoMap)[i];
		var Template = {
			'dragon_id': DragonInfoMap[DragonID]['id'],
            'get_time': Math.floor(Date.now() / 1000),
            'reliability_level': 30,
            'reliability_total_exp': 36300,
            'last_contact_time': Math.floor(Date.now() / 1000)
		}
		FullDragonTemplate.push(Template);
		i++;
	}
	return FullDragonTemplate;
}
function GenerateDragonMaxStoryTemplate(UnitStoryList) {
	for (let x in Object.keys(DragonInfoMap)) {
		if (DragonInfoMap[Object.keys(DragonInfoMap)[x]]['story_id'] != "N/A") {
			const Template1 = {
				"unit_story_id": DragonInfoMap[Object.keys(DragonInfoMap)[x]]['story_id'],
				"is_read": 1
			}
			const Template2 = {
				"unit_story_id": DragonInfoMap[Object.keys(DragonInfoMap)[x]]['story_id'] + 1,
				"is_read": 1
			}
			UnitStoryList.push(Template1);
			UnitStoryList.push(Template2);
		}
	}
	return UnitStoryList;
}

function GenerateDragonReliability(ID) {
	var Template = {
		'dragon_id': DragonInfoMap[String(ID)]['id'],
        'get_time': Math.floor(Date.now() / 1000),
        'reliability_level': 1,
        'reliability_total_exp': 0,
        'last_contact_time': 0
	}
	return Template;
}

function CreateDragonFromGift(KeyID, ID, Level) {
	const DragonTemplate = {
		"dragon_key_id": KeyID,
        "dragon_id": ID,
		"rarity": DragonInfoMap[String(ID)]['rarity'],
        "level": Level,
        "hp_plus_count": 0,
        "attack_plus_count": 0,
        "exp": 0,
        "is_lock": 0,
        "is_new": 1,
        "get_time": Math.floor(Date.now() / 1000),
        "skill_1_level": 1,
        "ability_1_level": 1,
        "ability_2_level": 1,
        "limit_break_count": 0
	}
	return DragonTemplate;
}
function GenerateDragonHackedSaveTemplate(LastAssignedDragonID) {
	let FullDragonTemplate = []
	let i = 0;
	let DragonCount = 0;
	while (i < Object.keys(DragonInfoMap).length) {
		const DragonID = Object.keys(DragonInfoMap)[i];
		var DragonTemplate = {
                "dragon_key_id": LastAssignedDragonID + 1,
                "dragon_id": DragonInfoMap[DragonID]['id'],
				"rarity": DragonInfoMap[DragonID]['rarity'],
                "level": 100,
                "hp_plus_count": 900,
                "attack_plus_count": 900,
                "exp": 625170,
                "is_lock": 0,
                "is_new": 1,
                "get_time": Math.floor(Date.now() / 1000),
                "skill_1_level": 2,
                "ability_1_level": 5,
                "ability_2_level": 5,
                "limit_break_count": 4
        }
		var DragonTemplate2 = {
                "dragon_key_id": LastAssignedDragonID + 2,
                "dragon_id": DragonInfoMap[DragonID]['id'],
				"rarity": DragonInfoMap[DragonID]['rarity'],
                "level": 100,
                "hp_plus_count": 900,
                "attack_plus_count": 900,
                "exp": 625170,
                "is_lock": 0,
                "is_new": 1,
                "get_time": Math.floor(Date.now() / 1000) + 1,
                "skill_1_level": 2,
                "ability_1_level": 5,
                "ability_2_level": 5,
                "limit_break_count": 4
        }
		if (DragonInfoMap[DragonID]['has_spiral'] == true) {
			DragonTemplate['level'] = 120;
			DragonTemplate2['level'] = 120;
			DragonTemplate['ability_1_level'] = 6;
			DragonTemplate2['ability_1_level'] = 6;
        	DragonTemplate['ability_2_level'] = 6;
			DragonTemplate2['ability_2_level'] = 6;
        	DragonTemplate['limit_break_count'] = 5;
			DragonTemplate2['limit_break_count'] = 5;
		}
		FullDragonTemplate.push(DragonTemplate);
		FullDragonTemplate.push(DragonTemplate2);
		DragonCount += 2;
		LastAssignedDragonID = LastAssignedDragonID + 2;
		i++;
	}
	return [FullDragonTemplate];
}

function LimitBreakDragon(UserIndexRecord, KeyID, PreviousData, GrowList, AlbumBonus) {
	let DeleteList = [];
	let MaterialList = [];
	let AlbumList = [];
	const Rarity = GetDragonInfo(PreviousData['dragon_id'], "rarity");
	const Element = GetDragonInfo(PreviousData['dragon_id'], "element");
	var DragonTemplate = {
		"dragon_key_id": KeyID,
        "dragon_id": PreviousData['dragon_id'],
        "level": PreviousData['level'],
        "hp_plus_count": PreviousData['hp_plus_count'],
        "attack_plus_count": PreviousData['attack_plus_count'],
        "exp": PreviousData['exp'],
        "is_lock": PreviousData['is_lock'],
        "is_new": 0,
        "get_time": PreviousData['get_time'],
        "skill_1_level": PreviousData['skill_1_level'],
        "ability_1_level": PreviousData['ability_1_level'],
        "ability_2_level": PreviousData['ability_2_level'],
        "limit_break_count": PreviousData['limit_break_count']
	}
	for (let i in GrowList) {
		switch(GrowList[i]['limit_break_item_type']) {
			case 1:
				const DragonIndex = UserIndexRecord['dragon_list'].findIndex(x => x.dragon_key_id === GrowList[i]['target_id']);
				UserIndexRecord['dragon_list'].splice(DragonIndex, 1);
				DeleteList.push({ 'dragon_key_id': GrowList[i]['target_id'] });
				break;
			case 2:
				// const ItemIndex = UserIndexRecord['material_list'].findIndex(x => x.material_id === GrowList[i]['target_id']);
				// UserIndexRecord['material_list'][ItemIndex]['quantity'] -= 1;
				// MaterialList.push({ 'material_id': GrowList[i]['target_id'], 'quantity': UserIndexRecord['material_list'][ItemIndex]['quantity'] });
				break;
			case 3:
				// uses essense... Is that a material?
				break;
			case 4:
				// uses essense... Is that a material? specifically for 5th unbind
				break;
		}
		DragonTemplate['limit_break_count'] = GrowList[i]['limit_break_count'];
		DragonTemplate['ability_1_level'] = GrowList[i]['limit_break_count'] + 1;
		DragonTemplate['ability_2_level'] = GrowList[i]['limit_break_count'] + 1;
		if (DragonTemplate['limit_break_count'] >= 4) { DragonTemplate['skill_1_level'] = 2; }
	}
	var AlbumTemplate = {
		"dragon_id": PreviousData['dragon_id'],
        "max_level": DragonTemplate['level'],
		"max_limit_break_count": DragonTemplate['limit_break_count']
	}
	const AlbumBonusIndex = AlbumBonus.findIndex(x => x.elemental_type == Element);
	const AlbumIndex = UserIndexRecord['album_dragon_list'].findIndex(x => x.dragon_id == PreviousData['dragon_id']);
	if (AlbumIndex == -1) {
		AlbumList.push(AlbumTemplate);
		UserIndexRecord['album_dragon_list'].push(AlbumTemplate);
		if (DragonTemplate['limit_break_count'] >= 4) { AlbumBonus[AlbumBonusIndex]['hp'] += 0.1; AlbumBonus[AlbumBonusIndex]['attack'] += 0.1; }
		if (DragonTemplate['limit_break_count'] == 5) { AlbumBonus[AlbumBonusIndex]['hp'] += 0.1; AlbumBonus[AlbumBonusIndex]['attack'] += 0.1; }
	}
	else {
		if (UserIndexRecord['album_dragon_list'][AlbumIndex]['max_level'] < DragonTemplate['level']) {
			UserIndexRecord['album_dragon_list'][AlbumIndex]['max_level'] = DragonTemplate['level'] }
		if (UserIndexRecord['album_dragon_list'][AlbumIndex]['max_limit_break_count'] < DragonTemplate['limit_break_count']) {
			if (DragonTemplate['limit_break_count'] >= 4) { AlbumBonus[AlbumBonusIndex]['hp'] += 0.1; AlbumBonus[AlbumBonusIndex]['attack'] += 0.1; }
			if (DragonTemplate['limit_break_count'] == 5) { AlbumBonus[AlbumBonusIndex]['hp'] += 0.1; AlbumBonus[AlbumBonusIndex]['attack'] += 0.1; }
			UserIndexRecord['album_dragon_list'][AlbumIndex]['max_limit_break_count'] = DragonTemplate['limit_break_count'] }
	}
	return [DragonTemplate, DeleteList, MaterialList, UserIndexRecord, AlbumList, AlbumBonus];
}

function BuildDragon(KeyID, Buildup, PreviousData, UserIndexRecord, AlbumBonus) {
	const Rarity = GetDragonInfo(PreviousData['dragon_id'], "rarity");
	let MaterialList = [];
	let DeleteList = [];
	let AlbumList = [];
	var DragonTemplate = {
		"dragon_key_id": KeyID,
        "dragon_id": PreviousData['dragon_id'],
        "level": PreviousData['level'],
        "hp_plus_count": PreviousData['hp_plus_count'],
        "attack_plus_count": PreviousData['attack_plus_count'],
        "exp": PreviousData['exp'],
        "is_lock": PreviousData['is_lock'],
        "is_new": 0,
        "get_time": PreviousData['get_time'],
        "skill_1_level": PreviousData['skill_1_level'],
        "ability_1_level": PreviousData['ability_1_level'],
        "ability_2_level": PreviousData['ability_2_level'],
        "limit_break_count": PreviousData['limit_break_count']
	}
	for (let i in Buildup) {
		let NewData = [];
		let MaterialIndex = 0;
		switch(Buildup[i]['id']) {
			case 102001001: //150
				NewData = LevelMap.Dragon(Rarity, DragonTemplate['limit_break_count'], DragonTemplate['exp'] + Buildup[i]['quantity'] * 150);
				DragonTemplate['level'] = NewData[0], DragonTemplate['exp'] = NewData[1];
				MaterialIndex = UserIndexRecord['material_list'].findIndex(x => x.material_id == Buildup[i]['id']);
				if (MaterialIndex != -1) {
					UserIndexRecord['material_list'][MaterialIndex]['quantity'] -= Buildup[i]['quantity'];
					MaterialList.push(UserIndexRecord['material_list'][MaterialIndex]);
				}
				break;
			case 102001002: //1000
				NewData = LevelMap.Dragon(Rarity, DragonTemplate['limit_break_count'], DragonTemplate['exp'] + Buildup[i]['quantity'] * 1000);
				DragonTemplate['level'] = NewData[0], DragonTemplate['exp'] = NewData[1];
				MaterialIndex = UserIndexRecord['material_list'].findIndex(x => x.material_id == Buildup[i]['id']);
				if (MaterialIndex != -1) {
					UserIndexRecord['material_list'][MaterialIndex]['quantity'] -= Buildup[i]['quantity'];
					MaterialList.push(UserIndexRecord['material_list'][MaterialIndex]);
				}
				break;
			case 102001003: //3500
				NewData = LevelMap.Dragon(Rarity, DragonTemplate['limit_break_count'], DragonTemplate['exp'] + Buildup[i]['quantity'] * 3500);
				DragonTemplate['level'] = NewData[0], DragonTemplate['exp'] = NewData[1];
				MaterialIndex = UserIndexRecord['material_list'].findIndex(x => x.material_id == Buildup[i]['id']);
				if (MaterialIndex != -1) {
					UserIndexRecord['material_list'][MaterialIndex]['quantity'] -= Buildup[i]['quantity'];
					MaterialList.push(UserIndexRecord['material_list'][MaterialIndex]);
				}
				break;
			case 118001001: //hp
				DragonTemplate['hp_plus_count'] += Buildup[i]['quantity'];
				MaterialIndex = UserIndexRecord['material_list'].findIndex(x => x.material_id == Buildup[i]['id']);
				if (MaterialIndex != -1) {
					UserIndexRecord['material_list'][MaterialIndex]['quantity'] -= Buildup[i]['quantity'];
					MaterialList.push(UserIndexRecord['material_list'][MaterialIndex]);
				}
				break;
			case 119001001: //atk
				DragonTemplate['attack_plus_count'] += Buildup[i]['quantity'];
				MaterialIndex = UserIndexRecord['material_list'].findIndex(x => x.material_id == Buildup[i]['id']);
				if (MaterialIndex != -1) {
					UserIndexRecord['material_list'][MaterialIndex]['quantity'] -= Buildup[i]['quantity'];
					MaterialList.push(UserIndexRecord['material_list'][MaterialIndex]);
				}
				break;
			default:
				const DragonIndex = UserIndexRecord['dragon_list'].findIndex(x => x.dragon_key_id === Buildup[i]['id']);
				const FuseRarity = GetDragonInfo(UserIndexRecord['dragon_list'][DragonIndex]['dragon_id'], 'rarity');
				switch(FuseRarity) {
					case 3:
						NewData = LevelMap.Dragon(Rarity, DragonTemplate['limit_break_count'], DragonTemplate['exp'] + Buildup[i]['quantity'] * 500);
						DragonTemplate['level'] = NewData[0], DragonTemplate['exp'] = NewData[1];
						break;
					case 4:
						NewData = LevelMap.Dragon(Rarity, DragonTemplate['limit_break_count'], DragonTemplate['exp'] + Buildup[i]['quantity'] * 1000);
						DragonTemplate['level'] = NewData[0], DragonTemplate['exp'] = NewData[1];
						break;
					case 5:
						NewData = LevelMap.Dragon(Rarity, DragonTemplate['limit_break_count'], DragonTemplate['exp'] + Buildup[i]['quantity'] * 1500);
						DragonTemplate['level'] = NewData[0], DragonTemplate['exp'] = NewData[1];
						break;
				}
				UserIndexRecord['dragon_list'].splice(DragonIndex, 1);
				DeleteList.push({ 'dragon_key_id': Buildup[i]['id'] });
				break;
		}
	}
	var AlbumTemplate = {
		"dragon_id": PreviousData['dragon_id'],
        "max_level": DragonTemplate['level'],
		"max_limit_break_count": DragonTemplate['limit_break_count']
	}
	const Element = GetDragonInfo(PreviousData['dragon_id'], "element");
	const AlbumBonusIndex = AlbumBonus.findIndex(x => x.elemental_type == Element);
	const AlbumIndex = UserIndexRecord['album_dragon_list'].findIndex(x => x.dragon_id == PreviousData['dragon_id']);
	if (AlbumIndex == -1) {
		AlbumList.push(AlbumTemplate);
		UserIndexRecord['album_dragon_list'].push(AlbumTemplate);
		if (DragonTemplate['level'] >= 100) { AlbumBonus[AlbumBonusIndex]['hp'] += 0.1; AlbumBonus[AlbumBonusIndex]['attack'] += 0.1; }
		if (DragonTemplate['level'] == 120) { AlbumBonus[AlbumBonusIndex]['hp'] += 0.1; AlbumBonus[AlbumBonusIndex]['attack'] += 0.1; }
	}
	else {
		if (UserIndexRecord['album_dragon_list'][AlbumIndex]['max_level'] < DragonTemplate['level']) {
			if (DragonTemplate['level'] >= 100) { AlbumBonus[AlbumBonusIndex]['hp'] += 0.1; AlbumBonus[AlbumBonusIndex]['attack'] += 0.1; }
			if (DragonTemplate['level'] == 120) { AlbumBonus[AlbumBonusIndex]['hp'] += 0.1; AlbumBonus[AlbumBonusIndex]['attack'] += 0.1; }
			UserIndexRecord['album_dragon_list'][AlbumIndex]['max_level'] = DragonTemplate['level']
		}
	}
	const NewIndex = UserIndexRecord['dragon_list'].findIndex(x => x.dragon_key_id == KeyID);
	UserIndexRecord['dragon_list'][NewIndex] = DragonTemplate;
	return [DragonTemplate, DeleteList, UserIndexRecord, MaterialList, AlbumList, AlbumBonus];
}

function DragonRewards(DragonElement, DragonRarity, EssenceID) {
	const List = DragonRewardsList[String(DragonElement)][String(DragonRarity)];
	let Table = [];
	let Random = Math.floor(Math.random() * 3) + 1;
	if (Math.floor(Math.random() * 3) > 2) {
		const Roll = Math.floor(Math.random() * DragonRewardsEXList.length);
		Table.push({
			'entity_type': 8,
			'entity_id': DragonRewardsEXList[Roll]['id'],
			'entity_quantity': Math.floor(Math.random() * DragonRewardsEXList[Roll]['max']) + DragonRewardsEXList[Roll]['min']
		});
	}
	while (Random > 0) {
		const RewardEntry = List[Math.floor(Math.random() * List.length)];
		const InTable = Table.findIndex(r => r.entity_id == RewardEntry['id']);
		const RewardCount = Math.floor(Math.random() * RewardEntry['max']) + RewardEntry['min'];
		if (InTable == -1) {
			Table.push({
				'entity_type': 8,
				'entity_id': RewardEntry['id'],
				'entity_quantity': RewardCount
			});
		}
		else {
			Table[InTable]['entity_quantity'] += RewardCount;
		}
		Random--;
	}
	const FruitList = DragonRewardsFruitList[String(DragonRarity)];
	const FruitEntry = FruitList[Math.floor(Math.random() * FruitList.length)];
	Table.push({
		'entity_type': 8,
		'entity_id': FruitEntry['id'],
		'entity_quantity': Math.floor(Math.random() * FruitEntry['max']) + FruitEntry['min']
	});
	if (EssenceID != 0 && EssenceID != undefined) {
		Table.push({
			'entity_type': 8,
			'entity_id': EssenceID,
			'entity_quantity': 1
		});
	}
	return Table;
}

function DragonGift(DragonID, GiftID, CurrentBond) {
	let AddReliability = 0;
	let IsFavorite = 0;
	let RewardBondList = [];
	let AddStory = [];
	const GiftAddIndex = DragonGiftMap.findIndex(x => x.id == GiftID);
	const DragonFavorite = GetDragonInfo(DragonID, "favorite");
	const BondType = GetDragonInfo(DragonID, "bond_type");
	if (DragonGiftMap[GiftAddIndex]['favorite_type'] == DragonFavorite) {
		AddReliability = DragonGiftMap[GiftAddIndex]['favorite_reliability'];
		IsFavorite = 1;
	}
	else { AddReliability = DragonGiftMap[GiftAddIndex]['reliability']; }
	const NewBondData = LevelMap.DragonBond(BondType, CurrentBond['reliability_total_exp'] + AddReliability);
	if ((CurrentBond['reliability_level'] < 5) && (NewBondData[0] >= 5)) {
		AddStory.push({ "unit_story_id": GetDragonInfo(DragonID, "story_id"), "is_read": 0 });
		RewardBondList.push({
			"levelup_entity_list": [
				{
					"entity_type": 0,
					"entity_id": 0,
					"entity_quantity": 0,
					"is_over": 0
				}
			],
			"level": 5,
			"is_release_story": 1
		});
	}
	if ((CurrentBond['reliability_level'] < 10) && (NewBondData[0] >= 10)) {
		AddStory.push({ "unit_story_id": GetDragonInfo(DragonID, "story_id") + 1, "is_read": 0 });
		RewardBondList.push({
			"levelup_entity_list": [
				{
					"entity_type": 0,
					"entity_id": 0,
					"entity_quantity": 0,
					"is_over": 0
				}
			],
			"level": 10,
			"is_release_story": 1
		});
	}
	
	const ReturnGift = DragonRewards(GetDragonInfo(DragonID, "element"), GetDragonInfo(DragonID, "rarity"), GetDragonInfo(DragonID, "limit_break_material"));
	return [IsFavorite, NewBondData, RewardBondList, AddStory, ReturnGift];
}

function DragonIDByName(DragonName) {
	const List = Object.keys(DragonInfoMap);
	for (const i in List) {
		if (DragonInfoMap[List[i]]['name'] == DragonName) {
			return parseInt(List[i]);
		}
	}
	return 0;
}

function GetRarityMap(Rarity) {
	let i = 0;
	let RarityMap = [];
	while (i < Object.keys(DragonInfoMap).length) {
		const DragonID = Object.keys(DragonInfoMap)[i];
		if (DragonInfoMap[DragonID]['rarity'] == Rarity) {
			RarityMap.push(DragonID);
			i++;
		}
		else { i++; }
	}
	return RarityMap;
}

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
					29990001, 29990002 ]
function DrawDragon() {
	let RandomNumber = Math.floor(Math.random() * Object.keys(DragonInfoMap).length);
	let RandomDragonID = Object.keys(DragonInfoMap)[RandomNumber];
	var DragonData = {
		'entity_type': 7,
		'id': parseInt(RandomDragonID),
		'rarity': DragonInfoMap[String(RandomDragonID)]['rarity']
	}
	return DragonData;
}
function DrawDragonCorrect(SummonID, BoostRateList, IsTenfold, IsPlatinum) {
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
						29990001, 29990002 ]
	let RandomNumber = 0;
	let AssignedDragonID = 0;
	let RerollCount = 5;
	const SummonIndex = BoostRateList.findIndex(x => x.summon_id == SummonID);
	if (SummonIndex != -1 && BoostRateList[SummonIndex]['dragons'] != undefined && BoostRateList[SummonIndex]['dragons'][0] != undefined) {
		RandomNumber = Math.floor(Math.random() * BoostRateList[SummonIndex]['dragons'].length);
		AssignedDragonID = BoostRateList[SummonIndex]['dragons'][RandomNumber];
		let BoostedDraw = Math.floor(Math.random() * BoostRateList[SummonIndex]['dragons'].length);
		let BoostedDrawID = BoostRateList[SummonIndex]['dragons'][BoostedDraw];
		if (BoostRateList[SummonIndex]['boost_rate'].includes(BoostedDrawID)) { AssignedDragonID = BoostedDrawID; }
		if (BoostRateList[SummonIndex]['boost_rate'].includes(AssignedDragonID)) { RerollCount = 2; }
		while (RerollCount > 0) {
			let Redraw = Math.floor(Math.random() * BoostRateList[SummonIndex]['dragons'].length);
			let RedrawID = BoostRateList[SummonIndex]['dragons'][Redraw];
			if (IsTenfold) {
				let MinRarity = 4; if (IsPlatinum) { MinRarity = 5; }
				while (DragonInfoMap[String(RedrawID)]['rarity'] < MinRarity) {
					Redraw = Math.floor(Math.random() * BoostRateList[SummonIndex]['dragons'].length);
					RedrawID = BoostRateList[SummonIndex]['dragons'][Redraw];
				}
			}
			if (DragonInfoMap[String(RedrawID)]['rarity'] < DragonInfoMap[String(AssignedDragonID)]['rarity']) { AssignedDragonID = parseInt(RedrawID); }
			RerollCount--;
		}
	}
	else {
		RandomNumber = Math.floor(Math.random() * Object.keys(DragonInfoMap).length);
		AssignedDragonID = Object.keys(DragonInfoMap)[RandomNumber];
		while (Blacklist.includes(parseInt(AssignedDragonID))) {
			RandomNumber = Math.floor(Math.random() * Object.keys(DragonInfoMap).length);
			AssignedDragonID = Object.keys(DragonInfoMap)[RandomNumber];
		}
		while (RerollCount > 0) {
			let Redraw = Math.floor(Math.random() * Object.keys(DragonInfoMap).length);
			let RedrawID = Object.keys(DragonInfoMap)[Redraw];
			while (Blacklist.includes(parseInt(RedrawID))) {
				Redraw = Math.floor(Math.random() * Object.keys(DragonInfoMap).length);
				RedrawID = Object.keys(DragonInfoMap)[Redraw];
			}
			if (DragonInfoMap[String(RedrawID)]['rarity'] < DragonInfoMap[String(AssignedDragonID)]['rarity']) { AssignedDragonID = parseInt(RedrawID); }
			RerollCount--;
		}
	}
	
	const DragonData = {
		'entity_type': 7,
		'id': parseInt(AssignedDragonID),
		'rarity': DragonInfoMap[String(AssignedDragonID)]['rarity']
	}
	return DragonData;
}

module.exports = { DragonInfoMap, DragonGiftMap, GetDragonInfo, GenerateDragonSaveTemplate, GenerateDragonReliability, GenerateDragonSaveTemplateCorrect, GenerateDragonHackedSaveTemplate, GenerateDragonReliabilityTemplate, GenerateDragonReliabilityTemplateCorrect, GenerateEntitySaveTemplateCorrect, GenerateDragonMaxStoryTemplate, GenerateDragonMaxSaveTemplate, GenerateDragonMaxReliabilityTemplate, CreateDragonFromGift, DragonGift, DragonIDByName, GetRarityMap, DrawDragon, DrawDragonCorrect, BuildDragon, LimitBreakDragon }