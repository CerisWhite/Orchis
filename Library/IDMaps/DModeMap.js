// Kaleidoscape Map
const fs = require('fs');

const CharacterMap = require('../IDMaps/CharacterMap.js');

const DModeWeaponMap = JSON.parse(fs.readFileSync('./Library/IDMaps/Master/DModeWeaponMap.json'));
const DModeCrestMap = JSON.parse(fs.readFileSync('./Library/IDMaps/Master/DModeCrestMap.json'));
const DModeParamMap = JSON.parse(fs.readFileSync('./Library/IDMaps/Master/DModeParamMap.json'));
const DModeSkillMap = JSON.parse(fs.readFileSync('./Library/IDMaps/Master/DModeSkillMap.json'));
const DModeAbilityMap = JSON.parse(fs.readFileSync('./Library/IDMaps/Master/DModeAbilityMap.json'));
const DModeServitorPassive = JSON.parse(fs.readFileSync('./Library/IDMaps/Master/DModeServitorPassive.json'));

const QuestEnemyList = JSON.parse(fs.readFileSync('./Library/Event/QuestEnemyList.json'));

const DModeInfoMap = [
  {
    "floor_number": 0,
    "enemy_level": 1,
    "boss_level": 1,
    "draw": [
      1
    ]
  },
  {
    "floor_number": 1,
    "enemy_level": 1,
    "boss_level": 3,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 2,
    "enemy_level": 1,
    "boss_level": 3,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 3,
    "enemy_level": 1,
    "boss_level": 3,
    "draw": [
      5
    ]
  },
  {
    "floor_number": 4,
    "enemy_level": 2,
    "boss_level": 4,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 5,
    "enemy_level": 2,
    "boss_level": 4,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 6,
    "enemy_level": 2,
    "boss_level": 4,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 7,
    "enemy_level": 3,
    "boss_level": 5,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 8,
    "enemy_level": 3,
    "boss_level": 5,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 9,
    "enemy_level": 3,
    "boss_level": 5,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 10,
    "enemy_level": 5,
    "boss_level": 7,
    "draw": [
      5
    ]
  },
  {
    "floor_number": 11,
    "enemy_level": 16,
    "boss_level": 18,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 12,
    "enemy_level": 17,
    "boss_level": 19,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 13,
    "enemy_level": 18,
    "boss_level": 20,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 14,
    "enemy_level": 19,
    "boss_level": 21,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 15,
    "enemy_level": 20,
    "boss_level": 22,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 16,
    "enemy_level": 21,
    "boss_level": 23,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 17,
    "enemy_level": 22,
    "boss_level": 24,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 18,
    "enemy_level": 23,
    "boss_level": 25,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 19,
    "enemy_level": 24,
    "boss_level": 26,
    "draw": [
      1,
      2,
      14,
      7,
      5
    ]
  },
  {
    "floor_number": 20,
    "enemy_level": 25,
    "boss_level": 27,
    "draw": [
      9
    ]
  },
  {
    "floor_number": 21,
    "enemy_level": 30,
    "boss_level": 33,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 22,
    "enemy_level": 31,
    "boss_level": 34,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 23,
    "enemy_level": 32,
    "boss_level": 35,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 24,
    "enemy_level": 33,
    "boss_level": 36,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 25,
    "enemy_level": 34,
    "boss_level": 37,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 26,
    "enemy_level": 35,
    "boss_level": 38,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 27,
    "enemy_level": 39,
    "boss_level": 42,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 28,
    "enemy_level": 40,
    "boss_level": 43,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 29,
    "enemy_level": 41,
    "boss_level": 44,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 30,
    "enemy_level": 42,
    "boss_level": 45,
    "draw": [
      9
    ]
  },
  {
    "floor_number": 31,
    "enemy_level": 45,
    "boss_level": 48,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 32,
    "enemy_level": 46,
    "boss_level": 49,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 33,
    "enemy_level": 47,
    "boss_level": 50,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 34,
    "enemy_level": 48,
    "boss_level": 51,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 35,
    "enemy_level": 49,
    "boss_level": 52,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 36,
    "enemy_level": 53,
    "boss_level": 56,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 37,
    "enemy_level": 54,
    "boss_level": 57,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 38,
    "enemy_level": 55,
    "boss_level": 58,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 39,
    "enemy_level": 56,
    "boss_level": 59,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 40,
    "enemy_level": 57,
    "boss_level": 60,
    "draw": [
      13
    ]
  },
  {
    "floor_number": 41,
    "enemy_level": 60,
    "boss_level": 64,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 42,
    "enemy_level": 62,
    "boss_level": 66,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 43,
    "enemy_level": 64,
    "boss_level": 68,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 44,
    "enemy_level": 66,
    "boss_level": 70,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 45,
    "enemy_level": 67,
    "boss_level": 71,
    "draw": [
      8
    ]
  },
  {
    "floor_number": 46,
    "enemy_level": 68,
    "boss_level": 72,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 47,
    "enemy_level": 69,
    "boss_level": 73,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 48,
    "enemy_level": 70,
    "boss_level": 74,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 49,
    "enemy_level": 71,
    "boss_level": 75,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 50,
    "enemy_level": 72,
    "boss_level": 76,
    "draw": [
      6
    ]
  },
  {
    "floor_number": 51,
    "enemy_level": 76,
    "boss_level": 80,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 52,
    "enemy_level": 78,
    "boss_level": 82,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 53,
    "enemy_level": 80,
    "boss_level": 84,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 54,
    "enemy_level": 82,
    "boss_level": 86,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 55,
    "enemy_level": 84,
    "boss_level": 93,
    "draw": [
      15
    ]
  },
  {
    "floor_number": 56,
    "enemy_level": 87,
    "boss_level": 91,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 57,
    "enemy_level": 89,
    "boss_level": 93,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 58,
    "enemy_level": 91,
    "boss_level": 95,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 59,
    "enemy_level": 93,
    "boss_level": 97,
    "draw": [
      2,
      3,
      14,
      7,
      9
    ]
  },
  {
    "floor_number": 60,
    "enemy_level": 95,
    "boss_level": 100,
    "draw": [
      16
    ]
  }
]
const DModeAreaMap = {
  "1": [
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122,
    123,
    124,
    125,
    126,
    127,
    128,
    129,
    130,
    131,
    132,
    133,
    134,
    135,
    136,
    137,
    138,
    139,
    140
  ],
  "2": [
    201,
    202,
    203,
    204,
    205,
    206,
    207,
    208,
    209,
    210,
    211,
    212,
    213,
    214,
    215,
    216,
    217,
    218,
    219,
    220,
    221,
    222,
    223,
    224,
    225,
    226,
    227,
    228,
    229,
    230,
    231,
    232,
    233,
    234,
    235,
    236,
    237,
    238,
    239,
    240
  ],
  "3": [
    301,
    302,
    303,
    304,
    305,
    306,
    307,
    308,
    309,
    310,
    311,
    312,
    313,
    314,
    315,
    316,
    317,
    318,
    319,
    320,
    321,
    322,
    323,
    324,
    325,
    326,
    327,
    328,
    329,
    330,
    331,
    332,
    333,
    334,
    335,
    336,
    337,
    338,
    339,
    340
  ],
  "4": [
    401
  ],
  "5": [
    501,
    502,
    503,
    504,
    505,
    506,
    507,
    508,
    509,
    510,
    511,
    512,
    513,
    514,
    515
  ],
  "6": [
    601,
    602,
    603,
    604
  ],
  "7": [
    701,
    702
  ],
  "8": [
    801,
    802,
    803,
    804
  ],
  "9": [
    901,
    902,
    903,
    904,
    905,
    906,
    907,
    908,
    909,
    910,
    911
  ],
  "13": [
    1301,
    1302,
    1303,
    1304,
    1305
  ],
  "14": [
    1401,
    1402,
    1403,
    1404,
    1405,
    1406,
    1407,
    1408,
    1409,
    1410,
    1411,
    1412,
    1413,
    1414,
    1415,
    1416,
    1417,
    1418,
    1419,
    1420
  ],
  "15": [
    1501,
    1502,
    1503,
    1505
  ],
  "16": [
    1601
  ]
}
const DModeSceneMap = {
  "1": {
    "101": {
      "scene_path": "Main/01/MAIN_01_0101_01",
      "area_name": "DMODE_01_0101_01"
    },
    "102": {
      "scene_path": "Main/01/MAIN_01_0102_01",
      "area_name": "DMODE_01_0102_01"
    },
    "103": {
      "scene_path": "Main/01/MAIN_01_0105_01",
      "area_name": "DMODE_01_0105_01"
    },
    "104": {
      "scene_path": "Main/01/MAIN_01_0106_01",
      "area_name": "DMODE_01_0106_01"
    },
    "105": {
      "scene_path": "Main/02/MAIN_02_9901_01",
      "area_name": "DMODE_02_9901_01"
    },
    "106": {
      "scene_path": "Main/02/MAIN_02_0106_01",
      "area_name": "DMODE_02_0106_01"
    },
    "107": {
      "scene_path": "Main/02/MAIN_02_8806_01",
      "area_name": "DMODE_02_8806_01"
    },
    "108": {
      "scene_path": "Main/02/MAIN_02_9902_01",
      "area_name": "DMODE_02_9902_01"
    },
    "109": {
      "scene_path": "Main/02/MAIN_02_0101_01",
      "area_name": "DMODE_02_0101_01"
    },
    "110": {
      "scene_path": "Main/02/MAIN_02_0102_01",
      "area_name": "DMODE_02_0102_01"
    },
    "111": {
      "scene_path": "Main/03/MAIN_03_0105_02",
      "area_name": "DMODE_03_0105_01"
    },
    "112": {
      "scene_path": "Main/03/MAIN_03_0108_01",
      "area_name": "DMODE_03_0108_01"
    },
    "113": {
      "scene_path": "Main/03/MAIN_03_0104_01",
      "area_name": "DMODE_03_0104_01"
    },
    "114": {
      "scene_path": "Main/03/MAIN_03_7706_01",
      "area_name": "DMODE_03_7706_01"
    },
    "115": {
      "scene_path": "Main/03/MAIN_03_7708_01",
      "area_name": "DMODE_03_7708_01"
    },
    "116": {
      "scene_path": "Main/04/MAIN_04_0104_01",
      "area_name": "DMODE_04_0104_01"
    },
    "117": {
      "scene_path": "Main/04/MAIN_04_0103_01",
      "area_name": "DMODE_04_0103_01"
    },
    "118": {
      "scene_path": "Main/05/MAIN_05_0106_02",
      "area_name": "DMODE_05_0106_01"
    },
    "119": {
      "scene_path": "Main/05/MAIN_05_7703_01",
      "area_name": "DMODE_05_7703_01"
    },
    "120": {
      "scene_path": "Main/05/MAIN_05_0105_01",
      "area_name": "DMODE_05_0105_01"
    },
    "121": {
      "scene_path": "Main/06/MAIN_06_9901_01",
      "area_name": "DMODE_06_9901_01"
    },
    "122": {
      "scene_path": "Main/08/MAIN_08_0111_01",
      "area_name": "DMODE_08_0111_01"
    },
    "123": {
      "scene_path": "Main/09/MAIN_09_0107_01",
      "area_name": "DMODE_09_0107_01"
    },
    "124": {
      "scene_path": "Main/11/MAIN_11_0108_01",
      "area_name": "DMODE_11_0108_01"
    },
    "125": {
      "scene_path": "Main/12/MAIN_12_0107_01",
      "area_name": "DMODE_12_0107_01"
    },
    "126": {
      "scene_path": "Main/12/MAIN_12_0108_01",
      "area_name": "DMODE_12_0108_01"
    },
    "127": {
      "scene_path": "Main/14/MAIN_14_0101_01",
      "area_name": "DMODE_14_0101_01"
    },
    "128": {
      "scene_path": "Main/14/MAIN_14_0110_11",
      "area_name": "DMODE_14_0110_11"
    },
    "129": {
      "scene_path": "Main/14/MAIN_14_0104_11",
      "area_name": "DMODE_14_0104_11"
    },
    "130": {
      "scene_path": "Main/14/MAIN_14_0105_11",
      "area_name": "DMODE_14_0105_11"
    },
    "131": {
      "scene_path": "Main/14/MAIN_14_0108_01",
      "area_name": "DMODE_14_0108_01"
    },
    "132": {
      "scene_path": "Main/17/MAIN_17_0102_01",
      "area_name": "DMODE_17_0102_01"
    },
    "133": {
      "scene_path": "Main/17/MAIN_17_0103_01",
      "area_name": "DMODE_17_0103_01"
    },
    "134": {
      "scene_path": "Main/17/MAIN_17_0104_01",
      "area_name": "DMODE_17_0104_01"
    },
    "135": {
      "scene_path": "Main/17/MAIN_17_0105_01",
      "area_name": "DMODE_17_0105_01"
    },
    "136": {
      "scene_path": "Main/18/MAIN_18_0101_01",
      "area_name": "DMODE_18_0101_01"
    },
    "137": {
      "scene_path": "Main/18/MAIN_18_0102_01",
      "area_name": "DMODE_18_0102_01"
    },
    "138": {
      "scene_path": "Main/18/MAIN_18_0106_01",
      "area_name": "DMODE_18_0106_01"
    },
    "139": {
      "scene_path": "Main/19/MAIN_19_0104_01",
      "area_name": "DMODE_19_0104_01"
    },
    "140": {
      "scene_path": "Main/19/MAIN_19_0105_01",
      "area_name": "DMODE_19_0105_01"
    }
  },
  "2": {
    "201": {
      "scene_path": "Main/01/MAIN_01_0101_01",
      "area_name": "DMODE_01_0101_02"
    },
    "202": {
      "scene_path": "Main/01/MAIN_01_0102_01",
      "area_name": "DMODE_01_0102_02"
    },
    "203": {
      "scene_path": "Main/01/MAIN_01_0105_01",
      "area_name": "DMODE_01_0105_02"
    },
    "204": {
      "scene_path": "Main/01/MAIN_01_0106_01",
      "area_name": "DMODE_01_0106_02"
    },
    "205": {
      "scene_path": "Main/02/MAIN_02_9901_01",
      "area_name": "DMODE_02_9901_02"
    },
    "206": {
      "scene_path": "Main/02/MAIN_02_0106_01",
      "area_name": "DMODE_02_0106_02"
    },
    "207": {
      "scene_path": "Main/02/MAIN_02_8806_01",
      "area_name": "DMODE_02_8806_02"
    },
    "208": {
      "scene_path": "Main/02/MAIN_02_9902_01",
      "area_name": "DMODE_02_9902_02"
    },
    "209": {
      "scene_path": "Main/02/MAIN_02_0101_01",
      "area_name": "DMODE_02_0101_02"
    },
    "210": {
      "scene_path": "Main/02/MAIN_02_0102_01",
      "area_name": "DMODE_02_0102_02"
    },
    "211": {
      "scene_path": "Main/03/MAIN_03_0105_02",
      "area_name": "DMODE_03_0105_02"
    },
    "212": {
      "scene_path": "Main/03/MAIN_03_0108_01",
      "area_name": "DMODE_03_0108_02"
    },
    "213": {
      "scene_path": "Main/03/MAIN_03_0104_01",
      "area_name": "DMODE_03_0104_02"
    },
    "214": {
      "scene_path": "Main/03/MAIN_03_7706_01",
      "area_name": "DMODE_03_7706_02"
    },
    "215": {
      "scene_path": "Main/03/MAIN_03_7708_01",
      "area_name": "DMODE_03_7708_02"
    },
    "216": {
      "scene_path": "Main/04/MAIN_04_0104_01",
      "area_name": "DMODE_04_0104_02"
    },
    "217": {
      "scene_path": "Main/04/MAIN_04_0103_01",
      "area_name": "DMODE_04_0103_02"
    },
    "218": {
      "scene_path": "Main/05/MAIN_05_0106_02",
      "area_name": "DMODE_05_0106_02"
    },
    "219": {
      "scene_path": "Main/05/MAIN_05_7703_01",
      "area_name": "DMODE_05_7703_02"
    },
    "220": {
      "scene_path": "Main/05/MAIN_05_0105_01",
      "area_name": "DMODE_05_0105_02"
    },
    "221": {
      "scene_path": "Main/06/MAIN_06_9901_01",
      "area_name": "DMODE_06_9901_02"
    },
    "222": {
      "scene_path": "Main/08/MAIN_08_0111_01",
      "area_name": "DMODE_08_0111_02"
    },
    "223": {
      "scene_path": "Main/09/MAIN_09_0107_01",
      "area_name": "DMODE_09_0107_02"
    },
    "224": {
      "scene_path": "Main/11/MAIN_11_0108_01",
      "area_name": "DMODE_11_0108_02"
    },
    "225": {
      "scene_path": "Main/12/MAIN_12_0107_01",
      "area_name": "DMODE_12_0107_02"
    },
    "226": {
      "scene_path": "Main/12/MAIN_12_0108_01",
      "area_name": "DMODE_12_0108_02"
    },
    "227": {
      "scene_path": "Main/14/MAIN_14_0101_01",
      "area_name": "DMODE_14_0101_02"
    },
    "228": {
      "scene_path": "Main/14/MAIN_14_0110_11",
      "area_name": "DMODE_14_0110_12"
    },
    "229": {
      "scene_path": "Main/14/MAIN_14_0104_11",
      "area_name": "DMODE_14_0104_12"
    },
    "230": {
      "scene_path": "Main/14/MAIN_14_0105_11",
      "area_name": "DMODE_14_0105_12"
    },
    "231": {
      "scene_path": "Main/14/MAIN_14_0108_01",
      "area_name": "DMODE_14_0108_02"
    },
    "232": {
      "scene_path": "Main/17/MAIN_17_0102_01",
      "area_name": "DMODE_17_0102_02"
    },
    "233": {
      "scene_path": "Main/17/MAIN_17_0103_01",
      "area_name": "DMODE_17_0103_02"
    },
    "234": {
      "scene_path": "Main/17/MAIN_17_0104_01",
      "area_name": "DMODE_17_0104_02"
    },
    "235": {
      "scene_path": "Main/17/MAIN_17_0105_01",
      "area_name": "DMODE_17_0105_02"
    },
    "236": {
      "scene_path": "Main/18/MAIN_18_0101_01",
      "area_name": "DMODE_18_0101_02"
    },
    "237": {
      "scene_path": "Main/18/MAIN_18_0102_01",
      "area_name": "DMODE_18_0102_02"
    },
    "238": {
      "scene_path": "Main/18/MAIN_18_0106_01",
      "area_name": "DMODE_18_0106_02"
    },
    "239": {
      "scene_path": "Main/19/MAIN_19_0104_01",
      "area_name": "DMODE_19_0104_02"
    },
    "240": {
      "scene_path": "Main/19/MAIN_19_0105_01",
      "area_name": "DMODE_19_0105_02"
    }
  },
  "3": {
    "301": {
      "scene_path": "Main/01/MAIN_01_0101_01",
      "area_name": "DMODE_01_0101_03"
    },
    "302": {
      "scene_path": "Main/01/MAIN_01_0102_01",
      "area_name": "DMODE_01_0102_03"
    },
    "303": {
      "scene_path": "Main/01/MAIN_01_0105_01",
      "area_name": "DMODE_01_0105_03"
    },
    "304": {
      "scene_path": "Main/01/MAIN_01_0106_01",
      "area_name": "DMODE_01_0106_03"
    },
    "305": {
      "scene_path": "Main/02/MAIN_02_9901_01",
      "area_name": "DMODE_02_9901_03"
    },
    "306": {
      "scene_path": "Main/02/MAIN_02_0106_01",
      "area_name": "DMODE_02_0106_03"
    },
    "307": {
      "scene_path": "Main/02/MAIN_02_8806_01",
      "area_name": "DMODE_02_8806_03"
    },
    "308": {
      "scene_path": "Main/02/MAIN_02_9902_01",
      "area_name": "DMODE_02_9902_03"
    },
    "309": {
      "scene_path": "Main/02/MAIN_02_0101_01",
      "area_name": "DMODE_02_0101_03"
    },
    "310": {
      "scene_path": "Main/02/MAIN_02_0102_01",
      "area_name": "DMODE_02_0102_03"
    },
    "311": {
      "scene_path": "Main/03/MAIN_03_0105_02",
      "area_name": "DMODE_03_0105_03"
    },
    "312": {
      "scene_path": "Main/03/MAIN_03_0108_01",
      "area_name": "DMODE_03_0108_03"
    },
    "313": {
      "scene_path": "Main/03/MAIN_03_0104_01",
      "area_name": "DMODE_03_0104_03"
    },
    "314": {
      "scene_path": "Main/03/MAIN_03_7706_01",
      "area_name": "DMODE_03_7706_03"
    },
    "315": {
      "scene_path": "Main/03/MAIN_03_7708_01",
      "area_name": "DMODE_03_7708_03"
    },
    "316": {
      "scene_path": "Main/04/MAIN_04_0104_01",
      "area_name": "DMODE_04_0104_03"
    },
    "317": {
      "scene_path": "Main/04/MAIN_04_0103_01",
      "area_name": "DMODE_04_0103_03"
    },
    "318": {
      "scene_path": "Main/05/MAIN_05_0106_02",
      "area_name": "DMODE_05_0106_03"
    },
    "319": {
      "scene_path": "Main/05/MAIN_05_7703_01",
      "area_name": "DMODE_05_7703_03"
    },
    "320": {
      "scene_path": "Main/05/MAIN_05_0105_01",
      "area_name": "DMODE_05_0105_03"
    },
    "321": {
      "scene_path": "Main/06/MAIN_06_9901_01",
      "area_name": "DMODE_06_9901_03"
    },
    "322": {
      "scene_path": "Main/08/MAIN_08_0111_01",
      "area_name": "DMODE_08_0111_03"
    },
    "323": {
      "scene_path": "Main/09/MAIN_09_0107_01",
      "area_name": "DMODE_09_0107_03"
    },
    "324": {
      "scene_path": "Main/11/MAIN_11_0108_01",
      "area_name": "DMODE_11_0108_03"
    },
    "325": {
      "scene_path": "Main/12/MAIN_12_0107_01",
      "area_name": "DMODE_12_0107_03"
    },
    "326": {
      "scene_path": "Main/12/MAIN_12_0108_01",
      "area_name": "DMODE_12_0108_03"
    },
    "327": {
      "scene_path": "Main/14/MAIN_14_0101_01",
      "area_name": "DMODE_14_0101_03"
    },
    "328": {
      "scene_path": "Main/14/MAIN_14_0110_11",
      "area_name": "DMODE_14_0110_13"
    },
    "329": {
      "scene_path": "Main/14/MAIN_14_0104_11",
      "area_name": "DMODE_14_0104_13"
    },
    "330": {
      "scene_path": "Main/14/MAIN_14_0105_11",
      "area_name": "DMODE_14_0105_13"
    },
    "331": {
      "scene_path": "Main/14/MAIN_14_0108_01",
      "area_name": "DMODE_14_0108_03"
    },
    "332": {
      "scene_path": "Main/17/MAIN_17_0102_01",
      "area_name": "DMODE_17_0102_03"
    },
    "333": {
      "scene_path": "Main/17/MAIN_17_0103_01",
      "area_name": "DMODE_17_0103_03"
    },
    "334": {
      "scene_path": "Main/17/MAIN_17_0104_01",
      "area_name": "DMODE_17_0104_03"
    },
    "335": {
      "scene_path": "Main/17/MAIN_17_0105_01",
      "area_name": "DMODE_17_0105_03"
    },
    "336": {
      "scene_path": "Main/18/MAIN_18_0101_01",
      "area_name": "DMODE_18_0101_03"
    },
    "337": {
      "scene_path": "Main/18/MAIN_18_0102_01",
      "area_name": "DMODE_18_0102_03"
    },
    "338": {
      "scene_path": "Main/18/MAIN_18_0106_01",
      "area_name": "DMODE_18_0106_03"
    },
    "339": {
      "scene_path": "Main/19/MAIN_19_0104_01",
      "area_name": "DMODE_19_0104_03"
    },
    "340": {
      "scene_path": "Main/19/MAIN_19_0105_01",
      "area_name": "DMODE_19_0105_03"
    }
  },
  "4": {
    "401": {
      "scene_path": "Main/04/MAIN_04_0104_01",
      "area_name": "MAIN_04_0104_01"
    }
  },
  "5": {
    "501": {
      "scene_path": "Boss/BG002_5001_00/BG002_5001_00_00",
      "area_name": "DBG002_01_5001_01"
    },
    "502": {
      "scene_path": "Main/01/MAIN_01_0103_02",
      "area_name": "DMODE_01_0103_01"
    },
    "503": {
      "scene_path": "Boss/BG012_5001_00/BG012_5001_00_00",
      "area_name": "DBG012_01_5001_01"
    },
    "504": {
      "scene_path": "Boss/BG006_5001_00/BG006_5001_00_00",
      "area_name": "DBG006_01_5001_01"
    },
    "505": {
      "scene_path": "Boss/BG016_5001_00/BG016_5001_00_00",
      "area_name": "DBG016_01_5001_01"
    },
    "506": {
      "scene_path": "Boss/BG004_5001_00/BG004_5001_00_00",
      "area_name": "DBG004_01_5001_01"
    },
    "507": {
      "scene_path": "Main/04/MAIN_04_0105_02",
      "area_name": "DMODE_04_0105_01"
    },
    "508": {
      "scene_path": "Main/04/MAIN_04_8806_02",
      "area_name": "DMODE_04_8806_01"
    },
    "509": {
      "scene_path": "Boss/BG005_5001_00/BG005_5001_00_00",
      "area_name": "DBG005_01_5001_01"
    },
    "510": {
      "scene_path": "Boss/BG031_5001_00/BG031_5001_00_00",
      "area_name": "DBG031_01_5001_01"
    },
    "511": {
      "scene_path": "Boss/BG036_5001_00/BG036_5001_00_00",
      "area_name": "DBG036_01_5001_01"
    },
    "512": {
      "scene_path": "Boss/BG031_5002_00/BG031_5002_00_00",
      "area_name": "DBG031_01_5002_01"
    },
    "513": {
      "scene_path": "Boss/BG022_5001_00/BG022_5001_00_00",
      "area_name": "DBG022_01_5001_01"
    },
    "514": {
      "scene_path": "Boss/BG044_5001_00/BG044_5001_00_00",
      "area_name": "DBG044_01_5001_01"
    },
    "515": {
      "scene_path": "Boss/BG037_5001_00/BG037_5001_00_01",
      "area_name": "DBG037_01_5001_02"
    }
  },
  "6": {
    "601": {
      "scene_path": "Boss/BG035_5002_00/BG035_5002_00_00",
      "area_name": "DBG035_01_5002_10"
    },
    "602": {
      "scene_path": "Boss/BG035_5002_00/BG035_5002_00_01",
      "area_name": "DBG035_01_5002_11"
    },
    "603": {
      "scene_path": "Boss/BG035_5002_00/BG035_5002_00_02",
      "area_name": "DBG035_01_5002_12"
    },
    "604": {
      "scene_path": "Boss/BG035_5002_00/BG035_5002_00_03",
      "area_name": "DBG035_01_5002_13"
    }
  },
  "7": {
    "701": {
      "scene_path": "Event/Random_01/RAND_01_0101_02",
      "area_name": "DMODE_99_0101_02"
    },
    "702": {
      "scene_path": "Event/Random_01/RAND_01_0101_02",
      "area_name": "DMODE_99_0101_03"
    }
  },
  "8": {
    "801": {
      "scene_path": "Boss/BG035_5002_00/BG035_5002_00_00",
      "area_name": "DBG035_01_5002_00"
    },
    "802": {
      "scene_path": "Boss/BG035_5002_00/BG035_5002_00_01",
      "area_name": "DBG035_01_5002_01"
    },
    "803": {
      "scene_path": "Boss/BG035_5002_00/BG035_5002_00_02",
      "area_name": "DBG035_01_5002_02"
    },
    "804": {
      "scene_path": "Boss/BG035_5002_00/BG035_5002_00_03",
      "area_name": "DBG035_01_5002_03"
    }
  },
  "9": {
    "901": {
      "scene_path": "Boss/BG018_5001_00/BG018_5001_00_03",
      "area_name": "DBG018_01_5001_01"
    },
    "902": {
      "scene_path": "Boss/BG039_5002_00/BG039_5002_00_00",
      "area_name": "DBG039_01_5001_01"
    },
    "903": {
      "scene_path": "Boss/BG004_5002_00/BG004_5002_00_00",
      "area_name": "DBG004_01_5002_01"
    },
    "904": {
      "scene_path": "Boss/BG006_5001_00/BG006_5001_00_00",
      "area_name": "DBG006_01_5001_02"
    },
    "905": {
      "scene_path": "Boss/BG019_5001_00/BG019_5001_00_00",
      "area_name": "DBG019_01_5001_01"
    },
    "906": {
      "scene_path": "Event/Raid_04/RAID_04_0106_02",
      "area_name": "DRAID_04_0106_01"
    },
    "907": {
      "scene_path": "Boss/BG001_5001_00/BG001_5001_00_00",
      "area_name": "DBG001_01_5001_01"
    },
    "908": {
      "scene_path": "Boss/BG001_5002_00/BG001_5002_00_02",
      "area_name": "DBG001_01_5002_01"
    },
    "909": {
      "scene_path": "Boss/BG036_5002_00/BG036_5002_00_00",
      "area_name": "DBG036_01_5002_01"
    },
    "910": {
      "scene_path": "Boss/BG031_5001_00/BG031_5001_00_00",
      "area_name": "DBG031_01_5001_02"
    },
    "911": {
      "scene_path": "Boss/BG012_5001_00/BG012_5001_00_00",
      "area_name": "DBG012_01_5001_02"
    }
  },
  "13": {
    "1301": {
      "scene_path": "Boss/BG001_5002_00/BG001_5002_00_00",
      "area_name": "DBG001_01_5002_11"
    },
    "1302": {
      "scene_path": "Boss/BG006_5002_00/BG006_5002_00_00",
      "area_name": "DBG006_01_5002_11"
    },
    "1303": {
      "scene_path": "Boss/BG016_5002_00/BG016_5002_00_00",
      "area_name": "DBG016_01_5002_11"
    },
    "1304": {
      "scene_path": "Boss/BG004_5002_00/BG004_5002_00_00",
      "area_name": "DBG004_01_5002_11"
    },
    "1305": {
      "scene_path": "Boss/BG005_5002_00/BG005_5002_00_00",
      "area_name": "DBG005_01_5002_11"
    }
  },
  "14": {
    "1401": {
      "scene_path": "Boss/BG005_5001_00/BG005_5001_00_00",
      "area_name": "DBG005_01_5001_02"
    },
    "1402": {
      "scene_path": "Boss/BG005_5001_00/BG005_5001_00_00",
      "area_name": "DBG005_01_5001_03"
    },
    "1403": {
      "scene_path": "Main/04/MAIN_04_0105_02",
      "area_name": "DMODE_04_0105_02"
    },
    "1404": {
      "scene_path": "Main/04/MAIN_04_0105_02",
      "area_name": "DMODE_04_0105_03"
    },
    "1405": {
      "scene_path": "Boss/BG004_5001_00/BG004_5001_00_00",
      "area_name": "DBG004_01_5001_02"
    },
    "1406": {
      "scene_path": "Boss/BG004_5001_00/BG004_5001_00_00",
      "area_name": "DBG004_01_5001_03"
    },
    "1407": {
      "scene_path": "Boss/BG012_5001_00/BG012_5001_00_00",
      "area_name": "DBG012_01_5001_03"
    },
    "1408": {
      "scene_path": "Boss/BG012_5001_00/BG012_5001_00_00",
      "area_name": "DBG012_01_5001_04"
    },
    "1409": {
      "scene_path": "Boss/BG031_5001_00/BG031_5001_00_00",
      "area_name": "DBG031_01_5001_03"
    },
    "1410": {
      "scene_path": "Boss/BG031_5001_00/BG031_5001_00_00",
      "area_name": "DBG031_01_5001_04"
    },
    "1411": {
      "scene_path": "Boss/BG036_5001_00/BG036_5001_00_00",
      "area_name": "DBG036_01_5001_02"
    },
    "1412": {
      "scene_path": "Boss/BG036_5001_00/BG036_5001_00_00",
      "area_name": "DBG036_01_5001_03"
    },
    "1413": {
      "scene_path": "Boss/BG022_5001_00/BG022_5001_00_00",
      "area_name": "DBG022_01_5001_02"
    },
    "1414": {
      "scene_path": "Boss/BG022_5001_00/BG022_5001_00_00",
      "area_name": "DBG022_01_5001_03"
    },
    "1415": {
      "scene_path": "Boss/BG022_5001_00/BG022_5001_00_00",
      "area_name": "DBG022_01_5001_04"
    },
    "1416": {
      "scene_path": "Boss/BG022_5001_00/BG022_5001_00_00",
      "area_name": "DBG022_01_5001_05"
    },
    "1417": {
      "scene_path": "Boss/BG044_5001_00/BG044_5001_00_00",
      "area_name": "DBG044_01_5001_02"
    },
    "1418": {
      "scene_path": "Boss/BG044_5001_00/BG044_5001_00_00",
      "area_name": "DBG044_01_5001_03"
    },
    "1419": {
      "scene_path": "Boss/BG037_5001_00/BG037_5001_00_01",
      "area_name": "DBG037_01_5001_03"
    },
    "1420": {
      "scene_path": "Boss/BG037_5001_00/BG037_5001_00_01",
      "area_name": "DBG037_01_5001_04"
    }
  },
  "15": {
    "1501": {
      "scene_path": "Boss/BG044_5002_00/BG044_5002_00_00",
      "area_name": "DBG044_01_5002_01"
    },
    "1502": {
      "scene_path": "Boss/BG044_5002_00/BG044_5002_00_00",
      "area_name": "DBG044_01_5002_02"
    },
    "1503": {
      "scene_path": "Boss/BG044_5002_00/BG044_5002_00_00",
      "area_name": "DBG044_01_5002_03"
    },
    "1505": {
      "scene_path": "Boss/BG044_5002_00/BG044_5002_00_00",
      "area_name": "DBG044_01_5002_05"
    }
  },
  "16": {
    "1601": {
      "scene_path": "Boss/BG039_5002_00/BG039_5002_00_00",
      "area_name": "DBG039_01_5001_02"
    }
  }
}

const DModeSharedSkill = [102502034, 108505021, 108503022, 103505055, 105502042,
						  107503011, 102502042, 103503033, 101502021, 107502011,
						  109503035];
const DModeDragonList = [20030101, 20030201, 20030301, 20030401, 20030501,
						 20040101, 20040102, 20040201, 20040301, 20040401, 20040501, 
						 20050110, 20050113, 20050114, 20050209, 20050210, 20050212, 20050311, 20050312, 20050315, 20050412, 20050504, 20050406, 20050411, 20050508, 20050512];
const TalismanIDMap = [
  {
    "character_id": 10130102,
    "talisman_id": 50130102
  },
  {
    "character_id": 10130103,
    "talisman_id": 50130103
  },
  {
    "character_id": 10130201,
    "talisman_id": 50130201
  },
  {
    "character_id": 10130401,
    "talisman_id": 50130401
  },
  {
    "character_id": 10130501,
    "talisman_id": 50130501
  },
  {
    "character_id": 10140101,
    "talisman_id": 50140101
  },
  {
    "character_id": 10140102,
    "talisman_id": 50140102
  },
  {
    "character_id": 10140103,
    "talisman_id": 50140103
  },
  {
    "character_id": 10140201,
    "talisman_id": 50140201
  },
  {
    "character_id": 10140301,
    "talisman_id": 50140301
  },
  {
    "character_id": 10140302,
    "talisman_id": 50140302
  },
  {
    "character_id": 10140401,
    "talisman_id": 50140401
  },
  {
    "character_id": 10140501,
    "talisman_id": 50140501
  },
  {
    "character_id": 10140503,
    "talisman_id": 50140503
  },
  {
    "character_id": 10150101,
    "talisman_id": 50150101
  },
  {
    "character_id": 10150102,
    "talisman_id": 50150102
  },
  {
    "character_id": 10150103,
    "talisman_id": 50150103
  },
  {
    "character_id": 10150104,
    "talisman_id": 50150104
  },
  {
    "character_id": 10150105,
    "talisman_id": 50150105
  },
  {
    "character_id": 10150106,
    "talisman_id": 50150106
  },
  {
    "character_id": 10150201,
    "talisman_id": 50150201
  },
  {
    "character_id": 10150202,
    "talisman_id": 50150202
  },
  {
    "character_id": 10150203,
    "talisman_id": 50150203
  },
  {
    "character_id": 10150204,
    "talisman_id": 50150204
  },
  {
    "character_id": 10150301,
    "talisman_id": 50150301
  },
  {
    "character_id": 10150302,
    "talisman_id": 50150302
  },
  {
    "character_id": 10150303,
    "talisman_id": 50150303
  },
  {
    "character_id": 10150304,
    "talisman_id": 50150304
  },
  {
    "character_id": 10150305,
    "talisman_id": 50150305
  },
  {
    "character_id": 10150306,
    "talisman_id": 50150306
  },
  {
    "character_id": 10150401,
    "talisman_id": 50150401
  },
  {
    "character_id": 10150402,
    "talisman_id": 50150402
  },
  {
    "character_id": 10150403,
    "talisman_id": 50150403
  },
  {
    "character_id": 10150404,
    "talisman_id": 50150404
  },
  {
    "character_id": 10150405,
    "talisman_id": 50150405
  },
  {
    "character_id": 10150501,
    "talisman_id": 50150501
  },
  {
    "character_id": 10150502,
    "talisman_id": 50150502
  },
  {
    "character_id": 10150503,
    "talisman_id": 50150503
  },
  {
    "character_id": 10150504,
    "talisman_id": 50150504
  },
  {
    "character_id": 10230101,
    "talisman_id": 50230101
  },
  {
    "character_id": 10230201,
    "talisman_id": 50230201
  },
  {
    "character_id": 10230301,
    "talisman_id": 50230301
  },
  {
    "character_id": 10230401,
    "talisman_id": 50230401
  },
  {
    "character_id": 10230501,
    "talisman_id": 50230501
  },
  {
    "character_id": 10240101,
    "talisman_id": 50240101
  },
  {
    "character_id": 10240201,
    "talisman_id": 50240201
  },
  {
    "character_id": 10240202,
    "talisman_id": 50240202
  },
  {
    "character_id": 10240301,
    "talisman_id": 50240301
  },
  {
    "character_id": 10240302,
    "talisman_id": 50240302
  },
  {
    "character_id": 10240401,
    "talisman_id": 50240401
  },
  {
    "character_id": 10240402,
    "talisman_id": 50240402
  },
  {
    "character_id": 10240502,
    "talisman_id": 50240502
  },
  {
    "character_id": 10240503,
    "talisman_id": 50240503
  },
  {
    "character_id": 10250101,
    "talisman_id": 50250101
  },
  {
    "character_id": 10250102,
    "talisman_id": 50250102
  },
  {
    "character_id": 10250103,
    "talisman_id": 50250103
  },
  {
    "character_id": 10250104,
    "talisman_id": 50250104
  },
  {
    "character_id": 10250201,
    "talisman_id": 50250201
  },
  {
    "character_id": 10250202,
    "talisman_id": 50250202
  },
  {
    "character_id": 10250203,
    "talisman_id": 50250203
  },
  {
    "character_id": 10250204,
    "talisman_id": 50250204
  },
  {
    "character_id": 10250301,
    "talisman_id": 50250301
  },
  {
    "character_id": 10250302,
    "talisman_id": 50250302
  },
  {
    "character_id": 10250303,
    "talisman_id": 50250303
  },
  {
    "character_id": 10250304,
    "talisman_id": 50250304
  },
  {
    "character_id": 10250305,
    "talisman_id": 50250305
  },
  {
    "character_id": 10250401,
    "talisman_id": 50250401
  },
  {
    "character_id": 10250402,
    "talisman_id": 50250402
  },
  {
    "character_id": 10250403,
    "talisman_id": 50250403
  },
  {
    "character_id": 10250404,
    "talisman_id": 50250404
  },
  {
    "character_id": 10250501,
    "talisman_id": 50250501
  },
  {
    "character_id": 10250502,
    "talisman_id": 50250502
  },
  {
    "character_id": 10250503,
    "talisman_id": 50250503
  },
  {
    "character_id": 10250504,
    "talisman_id": 50250504
  },
  {
    "character_id": 10330101,
    "talisman_id": 50330101
  },
  {
    "character_id": 10330301,
    "talisman_id": 50330301
  },
  {
    "character_id": 10330401,
    "talisman_id": 50330401
  },
  {
    "character_id": 10330501,
    "talisman_id": 50330501
  },
  {
    "character_id": 10330502,
    "talisman_id": 50330502
  },
  {
    "character_id": 10340101,
    "talisman_id": 50340101
  },
  {
    "character_id": 10340102,
    "talisman_id": 50340102
  },
  {
    "character_id": 10340201,
    "talisman_id": 50340201
  },
  {
    "character_id": 10340202,
    "talisman_id": 50340202
  },
  {
    "character_id": 10340203,
    "talisman_id": 50340203
  },
  {
    "character_id": 10340301,
    "talisman_id": 50340301
  },
  {
    "character_id": 10340401,
    "talisman_id": 50340401
  },
  {
    "character_id": 10340402,
    "talisman_id": 50340402
  },
  {
    "character_id": 10340501,
    "talisman_id": 50340501
  },
  {
    "character_id": 10340502,
    "talisman_id": 50340502
  },
  {
    "character_id": 10350101,
    "talisman_id": 50350101
  },
  {
    "character_id": 10350102,
    "talisman_id": 50350102
  },
  {
    "character_id": 10350103,
    "talisman_id": 50350103
  },
  {
    "character_id": 10350104,
    "talisman_id": 50350104
  },
  {
    "character_id": 10350201,
    "talisman_id": 50350201
  },
  {
    "character_id": 10350202,
    "talisman_id": 50350202
  },
  {
    "character_id": 10350203,
    "talisman_id": 50350203
  },
  {
    "character_id": 10350204,
    "talisman_id": 50350204
  },
  {
    "character_id": 10350301,
    "talisman_id": 50350301
  },
  {
    "character_id": 10350302,
    "talisman_id": 50350302
  },
  {
    "character_id": 10350303,
    "talisman_id": 50350303
  },
  {
    "character_id": 10350304,
    "talisman_id": 50350304
  },
  {
    "character_id": 10350402,
    "talisman_id": 50350402
  },
  {
    "character_id": 10350403,
    "talisman_id": 50350403
  },
  {
    "character_id": 10350404,
    "talisman_id": 50350404
  },
  {
    "character_id": 10350405,
    "talisman_id": 50350405
  },
  {
    "character_id": 10350502,
    "talisman_id": 50350502
  },
  {
    "character_id": 10350503,
    "talisman_id": 50350503
  },
  {
    "character_id": 10350504,
    "talisman_id": 50350504
  },
  {
    "character_id": 10350505,
    "talisman_id": 50350505
  },
  {
    "character_id": 10350506,
    "talisman_id": 50350506
  },
  {
    "character_id": 10430201,
    "talisman_id": 50430201
  },
  {
    "character_id": 10430202,
    "talisman_id": 50430202
  },
  {
    "character_id": 10430301,
    "talisman_id": 50430301
  },
  {
    "character_id": 10430401,
    "talisman_id": 50430401
  },
  {
    "character_id": 10430501,
    "talisman_id": 50430501
  },
  {
    "character_id": 10440101,
    "talisman_id": 50440101
  },
  {
    "character_id": 10440102,
    "talisman_id": 50440102
  },
  {
    "character_id": 10440201,
    "talisman_id": 50440201
  },
  {
    "character_id": 10440301,
    "talisman_id": 50440301
  },
  {
    "character_id": 10440401,
    "talisman_id": 50440401
  },
  {
    "character_id": 10440501,
    "talisman_id": 50440501
  },
  {
    "character_id": 10450101,
    "talisman_id": 50450101
  },
  {
    "character_id": 10450102,
    "talisman_id": 50450102
  },
  {
    "character_id": 10450103,
    "talisman_id": 50450103
  },
  {
    "character_id": 10450104,
    "talisman_id": 50450104
  },
  {
    "character_id": 10450201,
    "talisman_id": 50450201
  },
  {
    "character_id": 10450202,
    "talisman_id": 50450202
  },
  {
    "character_id": 10450203,
    "talisman_id": 50450203
  },
  {
    "character_id": 10450204,
    "talisman_id": 50450204
  },
  {
    "character_id": 10450301,
    "talisman_id": 50450301
  },
  {
    "character_id": 10450302,
    "talisman_id": 50450302
  },
  {
    "character_id": 10450303,
    "talisman_id": 50450303
  },
  {
    "character_id": 10450304,
    "talisman_id": 50450304
  },
  {
    "character_id": 10450305,
    "talisman_id": 50450305
  },
  {
    "character_id": 10450401,
    "talisman_id": 50450401
  },
  {
    "character_id": 10450402,
    "talisman_id": 50450402
  },
  {
    "character_id": 10450403,
    "talisman_id": 50450403
  },
  {
    "character_id": 10450404,
    "talisman_id": 50450404
  },
  {
    "character_id": 10450405,
    "talisman_id": 50450405
  },
  {
    "character_id": 10450406,
    "talisman_id": 50450406
  },
  {
    "character_id": 10450501,
    "talisman_id": 50450501
  },
  {
    "character_id": 10450502,
    "talisman_id": 50450502
  },
  {
    "character_id": 10450503,
    "talisman_id": 50450503
  },
  {
    "character_id": 10530101,
    "talisman_id": 50530101
  },
  {
    "character_id": 10530201,
    "talisman_id": 50530201
  },
  {
    "character_id": 10530202,
    "talisman_id": 50530202
  },
  {
    "character_id": 10530401,
    "talisman_id": 50530401
  },
  {
    "character_id": 10530501,
    "talisman_id": 50530501
  },
  {
    "character_id": 10540102,
    "talisman_id": 50540102
  },
  {
    "character_id": 10540103,
    "talisman_id": 50540103
  },
  {
    "character_id": 10540201,
    "talisman_id": 50540201
  },
  {
    "character_id": 10540202,
    "talisman_id": 50540202
  },
  {
    "character_id": 10540301,
    "talisman_id": 50540301
  },
  {
    "character_id": 10540302,
    "talisman_id": 50540302
  },
  {
    "character_id": 10540401,
    "talisman_id": 50540401
  },
  {
    "character_id": 10540402,
    "talisman_id": 50540402
  },
  {
    "character_id": 10540501,
    "talisman_id": 50540501
  },
  {
    "character_id": 10540502,
    "talisman_id": 50540502
  },
  {
    "character_id": 10550101,
    "talisman_id": 50550101
  },
  {
    "character_id": 10550102,
    "talisman_id": 50550102
  },
  {
    "character_id": 10550103,
    "talisman_id": 50550103
  },
  {
    "character_id": 10550104,
    "talisman_id": 50550104
  },
  {
    "character_id": 10550201,
    "talisman_id": 50550201
  },
  {
    "character_id": 10550203,
    "talisman_id": 50550203
  },
  {
    "character_id": 10550204,
    "talisman_id": 50550204
  },
  {
    "character_id": 10550205,
    "talisman_id": 50550205
  },
  {
    "character_id": 10550301,
    "talisman_id": 50550301
  },
  {
    "character_id": 10550302,
    "talisman_id": 50550302
  },
  {
    "character_id": 10550303,
    "talisman_id": 50550303
  },
  {
    "character_id": 10550304,
    "talisman_id": 50550304
  },
  {
    "character_id": 10550305,
    "talisman_id": 50550305
  },
  {
    "character_id": 10550306,
    "talisman_id": 50550306
  },
  {
    "character_id": 10550401,
    "talisman_id": 50550401
  },
  {
    "character_id": 10550402,
    "talisman_id": 50550402
  },
  {
    "character_id": 10550403,
    "talisman_id": 50550403
  },
  {
    "character_id": 10550404,
    "talisman_id": 50550404
  },
  {
    "character_id": 10550405,
    "talisman_id": 50550405
  },
  {
    "character_id": 10550501,
    "talisman_id": 50550501
  },
  {
    "character_id": 10550502,
    "talisman_id": 50550502
  },
  {
    "character_id": 10550503,
    "talisman_id": 50550503
  },
  {
    "character_id": 10550504,
    "talisman_id": 50550504
  },
  {
    "character_id": 10630101,
    "talisman_id": 50630101
  },
  {
    "character_id": 10630201,
    "talisman_id": 50630201
  },
  {
    "character_id": 10630301,
    "talisman_id": 50630301
  },
  {
    "character_id": 10630401,
    "talisman_id": 50630401
  },
  {
    "character_id": 10640101,
    "talisman_id": 50640101
  },
  {
    "character_id": 10640202,
    "talisman_id": 50640202
  },
  {
    "character_id": 10640301,
    "talisman_id": 50640301
  },
  {
    "character_id": 10640302,
    "talisman_id": 50640302
  },
  {
    "character_id": 10640401,
    "talisman_id": 50640401
  },
  {
    "character_id": 10640402,
    "talisman_id": 50640402
  },
  {
    "character_id": 10640403,
    "talisman_id": 50640403
  },
  {
    "character_id": 10640501,
    "talisman_id": 50640501
  },
  {
    "character_id": 10650101,
    "talisman_id": 50650101
  },
  {
    "character_id": 10650102,
    "talisman_id": 50650102
  },
  {
    "character_id": 10650103,
    "talisman_id": 50650103
  },
  {
    "character_id": 10650201,
    "talisman_id": 50650201
  },
  {
    "character_id": 10650202,
    "talisman_id": 50650202
  },
  {
    "character_id": 10650203,
    "talisman_id": 50650203
  },
  {
    "character_id": 10650204,
    "talisman_id": 50650204
  },
  {
    "character_id": 10650301,
    "talisman_id": 50650301
  },
  {
    "character_id": 10650302,
    "talisman_id": 50650302
  },
  {
    "character_id": 10650303,
    "talisman_id": 50650303
  },
  {
    "character_id": 10650304,
    "talisman_id": 50650304
  },
  {
    "character_id": 10650305,
    "talisman_id": 50650305
  },
  {
    "character_id": 10650401,
    "talisman_id": 50650401
  },
  {
    "character_id": 10650402,
    "talisman_id": 50650402
  },
  {
    "character_id": 10650403,
    "talisman_id": 50650403
  },
  {
    "character_id": 10650501,
    "talisman_id": 50650501
  },
  {
    "character_id": 10650502,
    "talisman_id": 50650502
  },
  {
    "character_id": 10650503,
    "talisman_id": 50650503
  },
  {
    "character_id": 10650504,
    "talisman_id": 50650504
  },
  {
    "character_id": 10650505,
    "talisman_id": 50650505
  },
  {
    "character_id": 10730101,
    "talisman_id": 50730101
  },
  {
    "character_id": 10730301,
    "talisman_id": 50730301
  },
  {
    "character_id": 10730401,
    "talisman_id": 50730401
  },
  {
    "character_id": 10730501,
    "talisman_id": 50730501
  },
  {
    "character_id": 10740101,
    "talisman_id": 50740101
  },
  {
    "character_id": 10740201,
    "talisman_id": 50740201
  },
  {
    "character_id": 10740202,
    "talisman_id": 50740202
  },
  {
    "character_id": 10740203,
    "talisman_id": 50740203
  },
  {
    "character_id": 10740301,
    "talisman_id": 50740301
  },
  {
    "character_id": 10740302,
    "talisman_id": 50740302
  },
  {
    "character_id": 10740401,
    "talisman_id": 50740401
  },
  {
    "character_id": 10740402,
    "talisman_id": 50740402
  },
  {
    "character_id": 10740501,
    "talisman_id": 50740501
  },
  {
    "character_id": 10750101,
    "talisman_id": 50750101
  },
  {
    "character_id": 10750102,
    "talisman_id": 50750102
  },
  {
    "character_id": 10750103,
    "talisman_id": 50750103
  },
  {
    "character_id": 10750104,
    "talisman_id": 50750104
  },
  {
    "character_id": 10750105,
    "talisman_id": 50750105
  },
  {
    "character_id": 10750201,
    "talisman_id": 50750201
  },
  {
    "character_id": 10750202,
    "talisman_id": 50750202
  },
  {
    "character_id": 10750203,
    "talisman_id": 50750203
  },
  {
    "character_id": 10750204,
    "talisman_id": 50750204
  },
  {
    "character_id": 10750205,
    "talisman_id": 50750205
  },
  {
    "character_id": 10750301,
    "talisman_id": 50750301
  },
  {
    "character_id": 10750302,
    "talisman_id": 50750302
  },
  {
    "character_id": 10750303,
    "talisman_id": 50750303
  },
  {
    "character_id": 10750304,
    "talisman_id": 50750304
  },
  {
    "character_id": 10750401,
    "talisman_id": 50750401
  },
  {
    "character_id": 10750402,
    "talisman_id": 50750402
  },
  {
    "character_id": 10750403,
    "talisman_id": 50750403
  },
  {
    "character_id": 10750404,
    "talisman_id": 50750404
  },
  {
    "character_id": 10750405,
    "talisman_id": 50750405
  },
  {
    "character_id": 10750501,
    "talisman_id": 50750501
  },
  {
    "character_id": 10750502,
    "talisman_id": 50750502
  },
  {
    "character_id": 10750503,
    "talisman_id": 50750503
  },
  {
    "character_id": 10750504,
    "talisman_id": 50750504
  },
  {
    "character_id": 10750505,
    "talisman_id": 50750505
  },
  {
    "character_id": 10830101,
    "talisman_id": 50830101
  },
  {
    "character_id": 10830201,
    "talisman_id": 50830201
  },
  {
    "character_id": 10830301,
    "talisman_id": 50830301
  },
  {
    "character_id": 10830401,
    "talisman_id": 50830401
  },
  {
    "character_id": 10830402,
    "talisman_id": 50830402
  },
  {
    "character_id": 10830501,
    "talisman_id": 50830501
  },
  {
    "character_id": 10840101,
    "talisman_id": 50840101
  },
  {
    "character_id": 10840102,
    "talisman_id": 50840102
  },
  {
    "character_id": 10840201,
    "talisman_id": 50840201
  },
  {
    "character_id": 10840202,
    "talisman_id": 50840202
  },
  {
    "character_id": 10840301,
    "talisman_id": 50840301
  },
  {
    "character_id": 10840302,
    "talisman_id": 50840302
  },
  {
    "character_id": 10840401,
    "talisman_id": 50840401
  },
  {
    "character_id": 10840402,
    "talisman_id": 50840402
  },
  {
    "character_id": 10840403,
    "talisman_id": 50840403
  },
  {
    "character_id": 10840501,
    "talisman_id": 50840501
  },
  {
    "character_id": 10850101,
    "talisman_id": 50850101
  },
  {
    "character_id": 10850102,
    "talisman_id": 50850102
  },
  {
    "character_id": 10850103,
    "talisman_id": 50850103
  },
  {
    "character_id": 10850104,
    "talisman_id": 50850104
  },
  {
    "character_id": 10850201,
    "talisman_id": 50850201
  },
  {
    "character_id": 10850202,
    "talisman_id": 50850202
  },
  {
    "character_id": 10850203,
    "talisman_id": 50850203
  },
  {
    "character_id": 10850301,
    "talisman_id": 50850301
  },
  {
    "character_id": 10850302,
    "talisman_id": 50850302
  },
  {
    "character_id": 10850303,
    "talisman_id": 50850303
  },
  {
    "character_id": 10850401,
    "talisman_id": 50850401
  },
  {
    "character_id": 10850402,
    "talisman_id": 50850402
  },
  {
    "character_id": 10850403,
    "talisman_id": 50850403
  },
  {
    "character_id": 10850501,
    "talisman_id": 50850501
  },
  {
    "character_id": 10850502,
    "talisman_id": 50850502
  },
  {
    "character_id": 10850503,
    "talisman_id": 50850503
  },
  {
    "character_id": 10930401,
    "talisman_id": 50930401
  },
  {
    "character_id": 10950101,
    "talisman_id": 50950101
  },
  {
    "character_id": 10950102,
    "talisman_id": 50950102
  },
  {
    "character_id": 10950103,
    "talisman_id": 50950103
  },
  {
    "character_id": 10950201,
    "talisman_id": 50950201
  },
  {
    "character_id": 10950202,
    "talisman_id": 50950202
  },
  {
    "character_id": 10950203,
    "talisman_id": 50950203
  },
  {
    "character_id": 10950301,
    "talisman_id": 50950301
  },
  {
    "character_id": 10950302,
    "talisman_id": 50950302
  },
  {
    "character_id": 10950303,
    "talisman_id": 50950303
  },
  {
    "character_id": 10950401,
    "talisman_id": 50950401
  },
  {
    "character_id": 10950402,
    "talisman_id": 50950402
  },
  {
    "character_id": 10950403,
    "talisman_id": 50950403
  },
  {
    "character_id": 10950501,
    "talisman_id": 50950501
  },
  {
    "character_id": 10950502,
    "talisman_id": 50950502
  },
  {
    "character_id": 10950503,
    "talisman_id": 50950503
  }
]

const BossFloor = [3, 10, 20, 30, 40, 45, 50, 55, 60];
function GenerateKaleidoData(UserSessionRecord, PlayRecord) {
	let ViewEquip = 0;
	let Floor = 0;
	let ThemeID = 0;
	let AreaID = 0;
	if (UserSessionRecord['Kaleidoscape']['IsStart'] == true) {
		UserSessionRecord['Kaleidoscape']['IsStart'] = false;
		if (UserSessionRecord['Kaleidoscape']['FloorNumber'] >= 50) {
			UserSessionRecord['Kaleidoscape']['UnitInfo']['level'] = 100;
			UserSessionRecord['Kaleidoscape']['UnitInfo']['exp'] = 100000;
		}
		else if (UserSessionRecord['Kaleidoscape']['FloorNumber'] >= 40) {
			UserSessionRecord['Kaleidoscape']['UnitInfo']['level'] = 80;
			UserSessionRecord['Kaleidoscape']['UnitInfo']['exp'] = 80000;
		}
		else if (UserSessionRecord['Kaleidoscape']['FloorNumber'] >= 30) {
			UserSessionRecord['Kaleidoscape']['UnitInfo']['level'] = 60;
			UserSessionRecord['Kaleidoscape']['UnitInfo']['exp'] = 60000;
		}
		else if (UserSessionRecord['Kaleidoscape']['FloorNumber'] >= 20) {
			UserSessionRecord['Kaleidoscape']['UnitInfo']['level'] = 30;
			UserSessionRecord['Kaleidoscape']['UnitInfo']['exp'] = 30000;
		}
		else if (UserSessionRecord['Kaleidoscape']['FloorNumber'] >= 10) {
			UserSessionRecord['Kaleidoscape']['UnitInfo']['level'] = 15;
			UserSessionRecord['Kaleidoscape']['UnitInfo']['exp'] = 15000;
		}
		Floor = UserSessionRecord['Kaleidoscape']['FloorNumber'];
		if (DModeInfoMap[Floor]['draw'].length == 1) {
			ThemeID = DModeInfoMap[Floor]['draw'][0];
		}
		else {
			const DrawNo = Math.floor(Math.random() * DModeInfoMap[Floor]['draw'].length);
			ThemeID = DModeInfoMap[Floor]['draw'][DrawNo];
		}
		
		if (Floor == 45 || Floor == 50) {
			AreaID = DModeAreaMap[String(ThemeID)][UserSessionRecord['Kaleidoscape']['Agito']];
		}
		else {
			const AreaDraw = Math.floor(Math.random() * DModeAreaMap[String(ThemeID)].length);
			AreaID = DModeAreaMap[String(ThemeID)][AreaDraw];
		}
		
		if (Floor > 1) {
			ViewEquip = 1;
			let WeaponMinimum = 1;
			let GenDragonCount = 0;
			let GenPrintsCount = 0;
			let UsedDragonList = [];
			let r = 0; let t = 0; let p = 0;
			if (Floor >= 40) {
				WeaponMinimum = 4;
				GenDragonCount = 4;
				GenPrintsCount = 3;
			}
			else if (Floor >= 30) {
				WeaponMinimum = 3;
				GenDragonCount = 3;
				GenPrintsCount = 2;
			}
			else if (Floor >= 20) {
				WeaponMinimum = 2;
				GenDragonCount = 2;
				GenPrintsCount = 1;
			}
			else if (Floor >= 10) {
				WeaponMinimum = 1;
				GenDragonCount = 1;
				GenPrintsCount = 1;
			}
			while (r < GenDragonCount) {
				let DragonDraw = Math.floor(Math.random() * DModeDragonList.length);
				let DragonID = DModeDragonList[DragonDraw];
				while (UsedDragonList.includes(DragonID)) {
					DragonDraw = Math.floor(Math.random() * DModeDragonList.length);
					DragonID = DModeDragonList[DragonDraw];
				}
				UsedDragonList.push(DragonID);
				UserSessionRecord['Kaleidoscape']['UnitInfo']['dmode_hold_dragon_list'].push({
					'dragon_id': DragonID,
					'use_count': 2
				});
				r++;
			}
			UserSessionRecord['Kaleidoscape']['ItemTracker'] += 1;
			const WeaponType = CharacterMap.GetCharacterInfo(UserSessionRecord['Kaleidoscape']['DungeonInfo']['chara_id'], "weapon_type");
			const WeaponIDList = Object.keys(DModeWeaponMap[String(WeaponType)]);
			const WeaponDraw = Math.floor(Math.random() * (WeaponIDList.length - WeaponMinimum)) + WeaponMinimum;
			const WeaponData = DModeWeaponMap[String(WeaponType)][WeaponIDList[WeaponDraw]];
			const WeaponParamList = DModeParamMap[String(WeaponData['param_group'])];
			const WeaponParamDraw = Math.floor(Math.random() * WeaponParamList.length);
			const WeaponParam = DModeParamMap[String(WeaponData['param_group'])][WeaponParamDraw]['id'];
			let WeaponAbility = 0;
			let WeaponSkill = 0;
			if (Math.round(Math.random()) == 1) {
				const WeaponAbilityList = DModeAbilityMap[String(WeaponData['ability_group'])];
				const WeaponAbilityDraw = Math.floor(Math.random() * WeaponAbilityList.length);
				if (DModeAbilityMap[String(WeaponData['ability_group'])][WeaponAbilityDraw]['ability_id'] == 0) { WeaponAbility = 0; }
				else { WeaponAbility = DModeAbilityMap[String(WeaponData['ability_group'])][WeaponAbilityDraw]['id']; }
			}
			if (Math.round(Math.random() * 10) >= 6) {
				const WeaponSkillList = DModeSkillMap[String(WeaponData['skill_group'])];
				const WeaponSkillDraw = Math.floor(Math.random() * (WeaponSkillList.length - 1) + 1);
				if (DModeSkillMap[String(WeaponData['skill_group'])][WeaponSkillDraw]['ability_id'] == 0) { WeaponSkill = 0; }
				else { WeaponSkill = DModeSkillMap[String(WeaponData['skill_group'])][WeaponSkillDraw]['id']; }
			}
			const WeaponTemplate = {
				"item_no": UserSessionRecord['Kaleidoscape']['ItemTracker'],
				"item_id": parseInt(WeaponIDList[WeaponDraw]),
				"item_state": 12,
				"option": {
					"strength_param_id": WeaponParam,
					"strength_ability_id": WeaponAbility,
					"strength_skill_id": WeaponSkill,
					"abnormal_status_invalid_count": 0
				}
			}
			UserSessionRecord['Kaleidoscape']['ItemList'].push(WeaponTemplate);
			
			while (p < GenPrintsCount) {
				UserSessionRecord['Kaleidoscape']['ItemTracker'] += 1;
				const CrestDraw = Math.floor(Math.random() * DModeCrestMap.length);
				const CrestData = DModeCrestMap[CrestDraw];
				const CrestParamList = DModeParamMap[String(CrestData['param_group'])];
				const CrestParamDraw = Math.floor(Math.random() * CrestParamList.length);
				const CrestParam = DModeParamMap[String(CrestData['param_group'])][CrestParamDraw]['id'];
				let CrestAbility = 0;
				if (Math.round(Math.random()) == 1) {
					const CrestAbilityList = DModeAbilityMap[String(CrestData['ability_group'])];
					const CrestAbilityDraw = Math.floor(Math.random() * CrestAbilityList.length);
					if (DModeAbilityMap[String(CrestData['ability_group'])][CrestAbilityDraw]['ability_id'] == 0) { CrestAbility = 0; }
					else { CrestAbility = DModeAbilityMap[String(CrestData['ability_group'])][CrestAbilityDraw]['id']; }
				}
				const PrintTemplate = {
					"item_no": UserSessionRecord['Kaleidoscape']['ItemTracker'],
					"item_id": parseInt(CrestData['id']),
					"item_state": 13,
					"option": {
						"strength_param_id": CrestParam,
						"strength_ability_id": CrestAbility,
						"strength_skill_id": 0,
						"abnormal_status_invalid_count": 0
					}
				}
				UserSessionRecord['Kaleidoscape']['ItemList'].push(PrintTemplate);
				UserSessionRecord['Kaleidoscape']['UnitInfo']['equip_crest_item_no_sort_list'][p] = UserSessionRecord['Kaleidoscape']['ItemTracker'];
				p++;
			}
		}
		
	}
	else if (UserSessionRecord['Kaleidoscape']['IsRestart'] == true) {
		UserSessionRecord['Kaleidoscape']['IsRestart'] = false;
		Floor = UserSessionRecord['Kaleidoscape']['FloorNumber'];
		ThemeID = UserSessionRecord['Kaleidoscape']['FloorData']['ThemeID'];
		AreaID = UserSessionRecord['Kaleidoscape']['FloorData']['AreaID'];
		if (UserSessionRecord['Kaleidoscape']['FloorNumber'] >= 50) {
			UserSessionRecord['Kaleidoscape']['UnitInfo']['level'] = 100;
			UserSessionRecord['Kaleidoscape']['UnitInfo']['exp'] = 100000;
		}
		else if (UserSessionRecord['Kaleidoscape']['FloorNumber'] >= 40) {
			UserSessionRecord['Kaleidoscape']['UnitInfo']['level'] = 80;
			UserSessionRecord['Kaleidoscape']['UnitInfo']['exp'] = 80000;
		}
		else if (UserSessionRecord['Kaleidoscape']['FloorNumber'] >= 30) {
			UserSessionRecord['Kaleidoscape']['UnitInfo']['level'] = 60;
			UserSessionRecord['Kaleidoscape']['UnitInfo']['exp'] = 60000;
		}
		else if (UserSessionRecord['Kaleidoscape']['FloorNumber'] >= 20) {
			UserSessionRecord['Kaleidoscape']['UnitInfo']['level'] = 30;
			UserSessionRecord['Kaleidoscape']['UnitInfo']['exp'] = 30000;
		}
		else if (UserSessionRecord['Kaleidoscape']['FloorNumber'] >= 10) {
			UserSessionRecord['Kaleidoscape']['UnitInfo']['level'] = 15;
			UserSessionRecord['Kaleidoscape']['UnitInfo']['exp'] = 15000;
		}
	}
	else if (UserSessionRecord['Kaleidoscape']['DungeonInfo']['is_play_end'] == 1) {
		UserSessionRecord['Kaleidoscape']['Complete'] = true;
		const JSONDict = {
			'unique_key': UserSessionRecord['Kaleidoscape']['UniqueKey'],
			'floor_key': UserSessionRecord['Kaleidoscape']['FloorKey'],
			'is_play_end': 1,
			'is_view_area_start_equipment': 0,
			'dmode_area_info': {
				'floor_num': 60,
				'quest_time': 0,
				'dmode_score': 0,
				'current_area_theme_id': UserSessionRecord['Kaleidoscape']['FloorData']['ThemeID'],
				'current_area_id': UserSessionRecord['Kaleidoscape']['FloorData']['AreaID']
			},
			'dmode_unit_info': UserSessionRecord['Kaleidoscape']['UnitInfo'],
			'dmode_dungeon_odds': {}
		}
		return [JSONDict, UserSessionRecord];
	}
	else {
		UserSessionRecord['Kaleidoscape']['FloorNumber'] += 1;
		if (UserSessionRecord['Kaleidoscape']['FloorNumber'] > 60) { UserSessionRecord['Kaleidoscape']['FloorNumber'] = 60; }
		Floor = UserSessionRecord['Kaleidoscape']['FloorNumber'];
		if (DModeInfoMap[Floor]['draw'].length == 1) {
			ThemeID = DModeInfoMap[Floor]['draw'][0];
		}
		else {
			let DrawNo = Math.floor(Math.random() * DModeInfoMap[Floor]['draw'].length);
			ThemeID = DModeInfoMap[Floor]['draw'][DrawNo];
			if (ThemeID == 5 || ThemeID == 7) {
				DrawNo = Math.floor(Math.random() * DModeInfoMap[Floor]['draw'].length);
				ThemeID = DModeInfoMap[Floor]['draw'][DrawNo];
			}
		}
		
		if (Floor == 45 || Floor == 50) {
			AreaID = DModeAreaMap[String(ThemeID)][UserSessionRecord['Kaleidoscape']['Agito']];
		}
		else {
			let AreaDraw = Math.floor(Math.random() * DModeAreaMap[String(ThemeID)].length);
			AreaID = DModeAreaMap[String(ThemeID)][AreaDraw];
		}
		UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_1'] += 20;
		UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_2'] += 4;
	}
	UserSessionRecord['Kaleidoscape']['FloorData'] = {
		'ThemeID': ThemeID,
		'AreaID': AreaID
	}

	let IsEnd = 0;
	if (Floor >= 60) {
		IsEnd = 1;
		UserSessionRecord['Kaleidoscape']['DungeonInfo']['is_play_end'] = 1;
	}
	
	if (PlayRecord != undefined) {
		UserSessionRecord['Kaleidoscape']['UnitInfo']['equip_crest_item_no_sort_list'] = PlayRecord['equip_crest_item_no_sort_list'];
		UserSessionRecord['Kaleidoscape']['UnitInfo']['bag_item_no_sort_list'] = PlayRecord['bag_item_no_sort_list'];
		UserSessionRecord['Kaleidoscape']['UnitInfo']['skill_bag_item_no_sort_list'] = PlayRecord['skill_bag_item_no_sort_list'];
		for (let d in PlayRecord['dmode_dragon_use_list']) {
			const Index = UserSessionRecord['Kaleidoscape']['UnitInfo']['dmode_hold_dragon_list'].findIndex(x => x.dragon_id == PlayRecord['dmode_dragon_use_list'][d]['dragon_id']);
			UserSessionRecord['Kaleidoscape']['UnitInfo']['dmode_hold_dragon_list']['count'] += PlayRecord['dmode_dragon_use_list'][d]['use_count'];
		}
		for (let s in PlayRecord['dmode_dungeon_item_state_list']) {
			const ItemIndex = UserSessionRecord['Kaleidoscape']['ItemList'].findIndex(x => x.item_no == PlayRecord['dmode_dungeon_item_state_list'][s]['item_no']);
			if (ItemIndex == -1) { continue; }
			const ItemState = PlayRecord['dmode_dungeon_item_state_list'][s]['state'];
			if (ItemState == 0 || ItemState == 1) {
				UserSessionRecord['Kaleidoscape']['ItemList'].splice(ItemIndex, 1);
			}
			else if (ItemState == 2 || ItemState == 3) {
				let ItemRarity = 1;
				if (UserSessionRecord['Kaleidoscape']['ItemList'][ItemIndex]['item_id'] > 40000000) {
					const ParamID = UserSessionRecord['Kaleidoscape']['ItemList'][ItemIndex]['strength_param_id']
					ItemRarity = parseInt(String(ParamID).slice(3, 1));
				}
				else {
					const ItemID = UserSessionRecord['Kaleidoscape']['ItemList'][ItemIndex]['item_id'];
					ItemRarity = parseInt(String(ItemID).slice(3, 1));
				}
				switch(ItemRarity) {
					case 1:
						UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_1'] += 1;
						break;
					case 2:
						UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_1'] += 1;
						break;
					case 3:
						UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_1'] += 2;
						break;
					case 4:
						UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_1'] += 4;
						break;
					case 5:
						UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_1'] += 8;
						break;
					case 6:
						UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_1'] += 16;
						break;
					default:
						UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_1'] += 1;
						break;
				}
				UserSessionRecord['Kaleidoscape']['ItemList'].splice(ItemIndex, 1);
			}
			else {
				UserSessionRecord['Kaleidoscape']['ItemList'][ItemIndex]['item_state'] = ItemState;
			}
		}
		if (PlayRecord['select_dragon_no'] != 0) {
			UserSessionRecord['Kaleidoscape']['UnitInfo']['dmode_hold_dragon_list'].push({
				'dragon_id': UserSessionRecord['Kaleidoscape']['DragonList'][PlayRecord['select_dragon_no'] - 1]['dragon_id'],
				'count': 0
			});
			UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_1'] -= UserSessionRecord['Kaleidoscape']['DragonList'][PlayRecord['select_dragon_no'] - 1]['pay_dmode_point_1'];
			UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_2'] -= UserSessionRecord['Kaleidoscape']['DragonList'][PlayRecord['select_dragon_no'] - 1]['pay_dmode_point_2'];
			if (UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_1'] < 0) { UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_1'] = 0; }
			if (UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_2'] < 0) { UserSessionRecord['Kaleidoscape']['UnitInfo']['take_dmode_point_2'] = 0; }
			UserSessionRecord['Kaleidoscape']['DragonList'] = [];
		}
	}
	
	const ScenePath = DModeSceneMap[String(ThemeID)][String(AreaID)]['scene_path'];
	const AreaName = DModeSceneMap[String(ThemeID)][String(AreaID)]['area_name'];
	let EnemyList = QuestEnemyList[ScenePath][AreaName]["1"];
	if (Floor == 45 || Floor == 50) {
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
	
	let EnemyCount = EnemyList.length;
	let ChestCount = 3;
	
	let DropMap = {
		'dmode_odds_info': {
			'dmode_drop_obj': [],
			'dmode_enemy': [],
		},
		'dmode_dungeon_item_list': UserSessionRecord['Kaleidoscape']['ItemList'],
		'dmode_select_dragon_list': []
	}
	let EnemyLevel = Math.floor(DModeInfoMap[Floor]['enemy_level'] + (UserSessionRecord['Kaleidoscape']['UnitInfo']['level'] / 12));
	if (BossFloor.includes(Floor)) {EnemyLevel = Math.floor(DModeInfoMap[Floor]['boss_level'])}
	if (ThemeID == 14 && AreaID == 1407) { EnemyLevel -= 10; if (EnemyLevel < 1) { EnemyLevel = 1; } } // FUCK. THE. HEALERS.
	for (let e in EnemyList) {
		let EnmBase = {
			'enemy_idx': parseInt(e),
			'is_pop': 1,
			'level': EnemyLevel,
			'param_id': EnemyList[e],
			'dmode_drop_list': []
		}
		if (Math.round(Math.random() * 15) >= 12 || BossFloor.includes(Floor)) {
			let DropCount = Math.floor(Math.random() * 3 + 1);
			if (BossFloor.includes(Floor) || ThemeID == 7) { DropCount = Math.floor(Math.random() * 6 + 2); }
			let u = 0; while (u < DropCount) {
				UserSessionRecord['Kaleidoscape']['ItemTracker'] += 1;
				const DropDraw = Math.floor(Math.random() * 100);
				let DropType = 0;
				if (DropDraw >= 80) { DropType = 0; }
				else if (DropDraw >= 60) { DropType = 2; }
				else { DropType = 1; }
				let ItemTemplate = {};
				let DropTemplate = {};
				switch(DropType) {
					case 0: //Weapon
						const WeaponType = CharacterMap.GetCharacterInfo(UserSessionRecord['Kaleidoscape']['DungeonInfo']['chara_id'], "weapon_type");
						let WeaponMinimum = 1;
						const WeaponIDList = Object.keys(DModeWeaponMap[String(WeaponType)]);
						const WeaponDraw = Math.floor(Math.random() * (WeaponIDList.length - WeaponMinimum)) + WeaponMinimum;
						const WeaponData = DModeWeaponMap[String(WeaponType)][WeaponIDList[WeaponDraw]];
						const WeaponParamList = DModeParamMap[String(WeaponData['param_group'])];
						const WeaponParamDraw = Math.floor(Math.random() * WeaponParamList.length);
						const WeaponParam = DModeParamMap[String(WeaponData['param_group'])][WeaponParamDraw]['id'];
						let WeaponAbility = 0;
						let WeaponSkill = 0;
						if (Math.round(Math.random()) == 1) {
							const WeaponAbilityList = DModeAbilityMap[String(WeaponData['ability_group'])];
							const WeaponAbilityDraw = Math.floor(Math.random() * WeaponAbilityList.length);
							if (DModeAbilityMap[String(WeaponData['ability_group'])][WeaponAbilityDraw]['ability_id'] == 0) { WeaponAbility = 0; }
							else { WeaponAbility = DModeAbilityMap[String(WeaponData['ability_group'])][WeaponAbilityDraw]['id']; }
						}
						if (Math.round(Math.random() * 10) >= 6) {
							const WeaponSkillList = DModeSkillMap[String(WeaponData['skill_group'])];
							const WeaponSkillDraw = Math.floor(Math.random() * (WeaponSkillList.length - 1) + 1);
							if (DModeSkillMap[String(WeaponData['skill_group'])][WeaponSkillDraw]['ability_id'] == 0) { WeaponSkill = 0; }
							else { WeaponSkill = DModeSkillMap[String(WeaponData['skill_group'])][WeaponSkillDraw]['id']; }
						}
						ItemTemplate = {
							"item_no": UserSessionRecord['Kaleidoscape']['ItemTracker'],
							"item_id": parseInt(WeaponIDList[WeaponDraw]),
							"item_state": 0,
							"option": {
								"strength_param_id": WeaponParam,
								"strength_ability_id": WeaponAbility,
								"strength_skill_id": WeaponSkill,
								"abnormal_status_invalid_count": 0
							}
						}
						DropTemplate = {
							'type': 43,
							'id': UserSessionRecord['Kaleidoscape']['ItemTracker'],
							'quantity': 1
						}
						break;
					case 1: //Skill
						const SkillDraw = Math.floor(Math.random() * DModeSharedSkill.length);
						ItemTemplate = {
							"item_no": UserSessionRecord['Kaleidoscape']['ItemTracker'],
							"item_id": parseInt(DModeSharedSkill[SkillDraw]),
							"item_state": 0,
							'option': []
						}
						DropTemplate = {
							'type': 43,
							'id': UserSessionRecord['Kaleidoscape']['ItemTracker'],
							'quantity': 1
						}
						break;
					case 2: //Wyrmprint
						const CrestDraw = Math.floor(Math.random() * DModeCrestMap.length);
						const CrestData = DModeCrestMap[CrestDraw];
						const CrestParamList = DModeParamMap[String(CrestData['param_group'])];
						const CrestParamDraw = Math.floor(Math.random() * CrestParamList.length);
						const CrestParam = DModeParamMap[String(CrestData['param_group'])][CrestParamDraw]['id'];
						let CrestAbility = 0;
						if (Math.round(Math.random()) == 1) {
							const CrestAbilityList = DModeAbilityMap[String(CrestData['ability_group'])];
							const CrestAbilityDraw = Math.floor(Math.random() * CrestAbilityList.length);
							if (DModeAbilityMap[String(CrestData['ability_group'])][CrestAbilityDraw]['ability_id'] == 0) { CrestAbility = 0; }
							else { CrestAbility = DModeAbilityMap[String(CrestData['ability_group'])][CrestAbilityDraw]['id']; }
						}
						ItemTemplate = {
							"item_no": UserSessionRecord['Kaleidoscape']['ItemTracker'],
							"item_id": parseInt(CrestData['id']),
							"item_state": 0,
							"option": {
								"strength_param_id": CrestParam,
								"strength_ability_id": CrestAbility,
								"strength_skill_id": 0,
								"abnormal_status_invalid_count": 0
							}
						}
						DropTemplate = {
							'type': 43,
							'id': UserSessionRecord['Kaleidoscape']['ItemTracker'],
							'quantity': 1
						}
						break;
				}
				UserSessionRecord['Kaleidoscape']['ItemList'].push(ItemTemplate);
				EnmBase['dmode_drop_list'].push(DropTemplate);
				u++;
			}
		}
		DropMap['dmode_odds_info']['dmode_enemy'].push(EnmBase);
	}
	
	if (ThemeID == 7) { ChestCount = 6; }
	let c = 0; while (c < ChestCount) {
		let ObjBase = {
			'dmode_drop_list': [],
			'obj_id': c,
			'obj_type': 1
		}
		if ((Math.round(Math.random() * 15) >= 12 && !BossFloor.includes(Floor)) || ThemeID == 7) {
			const DropCount = Math.round(Math.random() * 3);
			let u = 0; while (u < DropCount) {
				UserSessionRecord['Kaleidoscape']['ItemTracker'] += 1;
				const DropDraw = Math.floor(Math.random() * 100);
				let DropType = 0;
				if (DropDraw >= 80) { DropType = 0; }
				else if (DropDraw >= 60) { DropType = 2; }
				else { DropType = 1; }
				let ItemTemplate = {};
				let DropTemplate = {};
				switch (DropType) {
					case 0: //Weapon
						const WeaponType = CharacterMap.GetCharacterInfo(UserSessionRecord['Kaleidoscape']['DungeonInfo']['chara_id'], "weapon_type");
						let WeaponMinimum = 1;
						if (Floor >= 40) { WeaponMinimum = 6; }
						const WeaponIDList = Object.keys(DModeWeaponMap[String(WeaponType)]);
						const WeaponDraw = Math.floor(Math.random() * (WeaponIDList.length - WeaponMinimum)) + WeaponMinimum;
						const WeaponData = DModeWeaponMap[String(WeaponType)][WeaponIDList[WeaponDraw]];
						const WeaponParamList = DModeParamMap[String(WeaponData['param_group'])];
						const WeaponParamDraw = Math.floor(Math.random() * WeaponParamList.length);
						const WeaponParam = DModeParamMap[String(WeaponData['param_group'])][WeaponParamDraw]['id'];
						let WeaponAbility = 0;
						let WeaponSkill = 0;
						if (Math.round(Math.random()) == 1) {
							const WeaponAbilityList = DModeAbilityMap[String(WeaponData['ability_group'])];
							const WeaponAbilityDraw = Math.floor(Math.random() * WeaponAbilityList.length);
							if (DModeAbilityMap[String(WeaponData['ability_group'])][WeaponAbilityDraw]['ability_id'] == 0) { WeaponAbility = 0; }
							else { WeaponAbility = DModeAbilityMap[String(WeaponData['ability_group'])][WeaponAbilityDraw]['id']; }
						}
						if (Math.round(Math.random() * 10) >= 6) {
							const WeaponSkillList = DModeSkillMap[String(WeaponData['skill_group'])];
							const WeaponSkillDraw = Math.floor(Math.random() * (WeaponSkillList.length - 1) + 1);
							if (DModeSkillMap[String(WeaponData['skill_group'])][WeaponSkillDraw]['ability_id'] == 0) { WeaponSkill = 0; }
							else { WeaponSkill = DModeSkillMap[String(WeaponData['skill_group'])][WeaponSkillDraw]['id']; }
						}
						ItemTemplate = {
							"item_no": UserSessionRecord['Kaleidoscape']['ItemTracker'],
							"item_id": parseInt(WeaponIDList[WeaponDraw]),
							"item_state": 0,
							"option": {
								"strength_param_id": WeaponParam,
								"strength_ability_id": WeaponAbility,
								"strength_skill_id": WeaponSkill,
								"abnormal_status_invalid_count": 0
							}
						}
						DropTemplate = {
							'type': 43,
							'id': UserSessionRecord['Kaleidoscape']['ItemTracker'],
							'quantity': 1
						}
						break;
					case 1: //Skill
						const SkillDraw = Math.floor(Math.random() * DModeSharedSkill.length);
						ItemTemplate = {
							"item_no": UserSessionRecord['Kaleidoscape']['ItemTracker'],
							"item_id": parseInt(DModeSharedSkill[SkillDraw]),
							"item_state": 0,
							'option': []
						}
						DropTemplate = {
							'type': 43,
							'id': UserSessionRecord['Kaleidoscape']['ItemTracker'],
							'quantity': 1
						}
						break;
					case 2: //Wyrmprint
						const CrestDraw = Math.floor(Math.random() * DModeCrestMap.length);
						const CrestData = DModeCrestMap[CrestDraw];
						const CrestParamList = DModeParamMap[String(CrestData['param_group'])];
						const CrestParamDraw = Math.floor(Math.random() * CrestParamList.length);
						const CrestParam = DModeParamMap[String(CrestData['param_group'])][CrestParamDraw]['id'];
						let CrestAbility = 0;
						if (Math.round(Math.random()) == 1) {
							const CrestAbilityList = DModeAbilityMap[String(CrestData['ability_group'])];
							const CrestAbilityDraw = Math.floor(Math.random() * CrestAbilityList.length);
							if (DModeAbilityMap[String(CrestData['ability_group'])][CrestAbilityDraw]['ability_id'] == 0) { CrestAbility = 0; }
							else { CrestAbility = DModeAbilityMap[String(CrestData['ability_group'])][CrestAbilityDraw]['id']; }
						}
						ItemTemplate = {
							"item_no": UserSessionRecord['Kaleidoscape']['ItemTracker'],
							"item_id": parseInt(CrestData['id']),
							"item_state": 0,
							"option": {
								"strength_param_id": CrestParam,
								"strength_ability_id": CrestAbility,
								"strength_skill_id": 0,
								"abnormal_status_invalid_count": 0
							}
						}
						DropTemplate = {
							'type': 43,
							'id': UserSessionRecord['Kaleidoscape']['ItemTracker'],
							'quantity': 1
						}
						break;
				}
				UserSessionRecord['Kaleidoscape']['ItemList'].push(ItemTemplate);
				ObjBase['dmode_drop_list'].push(DropTemplate);
				u++;
			}
		}
		DropMap['dmode_odds_info']['dmode_drop_obj'].push(ObjBase);
		c++;
	}
	let h = 0; while (h < 3) {
		const ObjID = DropMap['dmode_odds_info']['dmode_drop_obj'][DropMap['dmode_odds_info']['dmode_drop_obj'].length - 1]['obj_id'] + 1
		const ItemType = [1001, 2001, 3001, 4001, 4002, 4003];
		const ItemDraw = Math.floor(Math.random() * ItemType.length);
		let ItemObjBase = {
			'dmode_drop_list': [{
				'type': 13,
				'id': ItemType[ItemDraw],
				'quantity': 1
			}],
			'obj_id': ObjID,
			'obj_type': 2
		}
		DropMap['dmode_odds_info']['dmode_drop_obj'].push(ItemObjBase);
		h++;
	}
	
	if (ThemeID == 5 || ThemeID == 9 ||
		Floor == 3 || Floor == 10 || Floor == 20 || Floor == 30 ||
		Floor == 40 || Floor == 45 || Floor == 50 || Floor == 55) {
			let UsedDragonList = [];
			for (let exist in UserSessionRecord['Kaleidoscape']['UnitInfo']['dmode_hold_dragon_list']) {
				UsedDragonList.push(UserSessionRecord['Kaleidoscape']['UnitInfo']['dmode_hold_dragon_list'][exist]['dragon_id']);
			}
			let GenDragonCount = Math.floor(Math.random() * 3 + 2);
			if (GenDragonCount > (DModeDragonList.length - UsedDragonList.length)) { GenDragonCount = DModeDragonList.length - UsedDragonList.length; }
			let d = 0; while (d < GenDragonCount) {
				let IsRare = 0;
				let CostDusk = 0;
				let CostDawn = 0;
				let DragonDraw = Math.floor(Math.random() * DModeDragonList.length);
				let DragonID = DModeDragonList[DragonDraw];
				while (UsedDragonList.includes(DragonID)) {
					DragonDraw = Math.floor(Math.random() * DModeDragonList.length);
					DragonID = DModeDragonList[DragonDraw];
				}
				UsedDragonList.push(DragonID);
				if (DragonID > 20050000 && Math.round(Math.random() * 10) >= 8) {
					IsRare = 1; //CostDusk = Floor * 10;
				}
				
				const DragonTemplate = {
					'select_dragon_no': DropMap['dmode_select_dragon_list'].length + 1,
					'dragon_id': DragonID,
					'is_rare': IsRare,
					'pay_dmode_point_1': CostDusk,
					'pay_dmode_point_2': CostDawn
				}
				UserSessionRecord['Kaleidoscape']['DragonList'].push(DragonTemplate);
				DropMap['dmode_select_dragon_list'].push(DragonTemplate);
				d++;
			}
		}
	
	
	const JSONDict = {
		'unique_key': UserSessionRecord['Kaleidoscape']['UniqueKey'],
		'floor_key': UserSessionRecord['Kaleidoscape']['FloorKey'],
		'is_play_end': IsEnd,
		'is_view_area_start_equipment': ViewEquip,
		'dmode_area_info': {
			'floor_num': Floor,
			'quest_time': 0,
			'dmode_score': 0,
			'current_area_theme_id': ThemeID,
			'current_area_id': AreaID
		},
		'dmode_unit_info': UserSessionRecord['Kaleidoscape']['UnitInfo'],
		'dmode_dungeon_odds': DropMap
	}
	return [JSONDict, UserSessionRecord]; 
}

function GenerateDragons(Floor) { return []; }

function ExpeditionDuskAmber(Floor) {
	let Amount = 0;
	switch(Floor) {
		case 10: Amount = 400; break;
		case 15: Amount = 800; break;
		case 20: Amount = 1200; break;
		case 25: Amount = 1600; break;
		case 30: Amount = 2000; break;
	}
	return Amount;
}

function ExpeditionDawnAmber(Floor) {
	let Amount = 0;
	switch(Floor) {
		case 10: Amount = 25; break;
		case 15: Amount = 50; break;
		case 20: Amount = 75; break;
		case 25: Amount = 100; break;
		case 30: Amount = 125; break;
	}
	return Amount;
}

const AbilityList = ["Strength", "Skill Damage", "Critical Rate", "Skill Haste", "Force Strike", "Skill Prep",
					 "HP", "Defense", "Critical Damage", "Dragon Damage", "Recovery Potency", "Dragon Haste", "Dragon Time"];
const HitterList = [340000131, 340000132, 340000133, 340000134];
const ElementalList = {
	"4": {
		"1": [19 ],
		"2": [],
		"3": [],
		"4": [],
		"5": []
	},
	"5": {
		"1": [19 ],
		"2": [],
		"3": [],
		"4": [],
		"5": []
	},
	"6": {
		"1": [20 ],
		"2": [],
		"3": [],
		"4": [],
		"5": []
	}
}
const SpecialList = [1604, 110120004, 100000401, 100001301, 100001401, 100001501, 100001601, 100001701];
const SPForbidList = [340000051, 340000052, 340000053, 340000054, 340000055, 340000056, 340000057, 340000058, 340000059, 340000060];

function CreateTalismans(Floor, UserSessionRecord, UserIndexRecord) {
	let GenerateCount = 1;
	let GenerateComplexity = 1;
	if (Floor >= 60) { GenerateCount = Math.floor((Math.random() * 3) + 5); GenerateComplexity = 6; }
	else if (Floor >= 50) { GenerateCount = Math.floor((Math.random() * 2) + 5); GenerateComplexity = 5; }
	else if (Floor >= 40) { GenerateCount = Math.floor((Math.random() * 3) + 3); GenerateComplexity = 4; }
	else if (Floor >= 30) { GenerateCount = Math.floor((Math.random() * 3) + 2); GenerateComplexity = 3; }
	else if (Floor >= 20) { GenerateCount = Math.floor((Math.random() * 2) + 2); GenerateComplexity = 2; }
	else { GenerateCount = Math.floor((Math.random() * 3)); GenerateComplexity = 1; }
	const CharacterID = UserSessionRecord['Kaleidoscape']['DungeonInfo']['chara_id'];
		
	let RewardTalismanList = [];
	let TalismanList = [];
	let i = 0; while (i < GenerateCount) {
		if ((UserIndexRecord['talisman_list'].length + i) > 1000) { i++; continue; }
		let AbilityCount = 0;
		if (Floor >= 60) { AbilityCount = Math.floor(Math.random() * 2) + 2; }
		else if (Floor >= 50) { AbilityCount = Math.floor(Math.random() * 3) + 1; }
		else if (Floor >= 40) { AbilityCount = Math.floor(Math.random() * 3) + 1; }
		else if (Floor >= 20) { AbilityCount = Math.floor(Math.random() * 3); }
		else { AbilityCount = Math.floor(Math.random() * 2); }
		let TalismanAbilityList = [];
		let UsedHitter = false;
		let UsedSpecial = false;
		let UsedAbility = [];
		let AdditionalHP = 0;
		let AdditionalATK = 0;
		let u = 0; while (u < AbilityCount) {
			let AbilityRandom = Math.floor(Math.random() * AbilityList.length);
			let AbilityID = 340000000 + (AbilityRandom * 10) + 1;
			while (UsedAbility.includes(AbilityID)) {
				AbilityRandom = Math.floor(Math.random() * AbilityList.length);
				AbilityID = 340000000 + (AbilityRandom * 10) + 1;
			}
			while (UsedAbility.includes(110120004) && AbilityID == 340000051) {
				AbilityRandom = Math.floor(Math.random() * AbilityList.length);
				AbilityID = 340000000 + (AbilityRandom * 10) + 1;
			}
			let AbilityLevel = 1;
			switch(GenerateComplexity) {
				case 1:
					AbilityLevel = Math.floor((Math.random() * 2) + 1);
					break;
				case 2:
					AbilityLevel = Math.floor((Math.random() * 4) + 1);
					break;
				case 3:
					AbilityLevel = Math.floor((Math.random() * 4) + 2);
					break;
				case 4:
					AbilityLevel = Math.floor((Math.random() * 2) + 4);
					break;
				case 5:
					AbilityLevel = Math.floor((Math.random() * 2) + 8);
					break;
				case 6:
					AbilityLevel = 9;
					break;
			}
			
			if (GenerateComplexity >= 6 && UsedSpecial == false && Math.round(Math.random() * 100) >= 75) {
				AbilityID = SpecialList[Math.floor(Math.random() * SpecialList.length)]; AbilityLevel = 0;
				while (UsedAbility.includes(340000051) && AbilityID == 110120004) {
					AbilityID = SpecialList[Math.floor(Math.random() * SpecialList.length)]; AbilityLevel = 0;
				}
				UsedSpecial = true;
			}
			else if (GenerateComplexity >= 5 && UsedHitter == false && Math.round(Math.random() * 100) >= 75) {
				AbilityID = 340000130; AbilityLevel = Math.floor(Math.random() * 4) + 1;
				UsedHitter = true;
			}
			
			TalismanAbilityList.push(AbilityID + AbilityLevel);
			UsedAbility.push(AbilityID);
			u++;
		}
		if (TalismanAbilityList.length == 0) { TalismanAbilityList[0] = 0; TalismanAbilityList[1] = 0; TalismanAbilityList[2] = 0; AdditionalHP = 150; AdditionalATK = 100; }
		else if (TalismanAbilityList.length == 1) { TalismanAbilityList[1] = 0; TalismanAbilityList[2] = 0; AdditionalHP = 100; AdditionalATK = 50; }
		else if (TalismanAbilityList.length == 2) { TalismanAbilityList[2] = 0; AdditionalHP = 50; AdditionalATK = 25; }
		
		let TalismanData = TalismanIDMap.find(x => x.character_id == CharacterID);
		if (TalismanData == undefined) { TalismanData = { "character_id": 10140101, "talisman_id": 50140101 }; }
		let TalismanKeyID = 1; 
		if (UserIndexRecord['talisman_list'][0] != undefined) { 
			TalismanKeyID = UserIndexRecord['talisman_list'][UserIndexRecord['talisman_list'].length - 1]['talisman_key_id'] + 1;
		}
		const CurrentTalisman = {
			"talisman_key_id": TalismanKeyID,
			"talisman_id": TalismanData['talisman_id'],
			"is_lock": 0,
			"is_new": 1,
			"talisman_ability_id_1": TalismanAbilityList[0],
			"talisman_ability_id_2": TalismanAbilityList[1],
			"talisman_ability_id_3": TalismanAbilityList[2],
			"additional_hp": AdditionalHP,
			"additional_attack": AdditionalATK,
			"gettime": Math.floor(Date.now() / 1000)
		}
		TalismanList.push(CurrentTalisman);
		const RewardTalisman = {
			"talisman_id": TalismanData['talisman_id'],
			"talisman_ability_id_1": TalismanAbilityList[0],
			"talisman_ability_id_2": TalismanAbilityList[1],
			"talisman_ability_id_3": TalismanAbilityList[2],
			"additional_hp": AdditionalHP,
			"additional_attack": AdditionalATK
		}
		RewardTalismanList.push(RewardTalisman);
		UserIndexRecord['talisman_list'].push(CurrentTalisman);
		i++;
	}
	
	return [TalismanList, RewardTalismanList, UserSessionRecord, UserIndexRecord];
}

function CreateExpeditionTalismans(UserSessionRecord, UserIndexRecord) {
	const Floor = UserSessionRecord['Kaleidoscape']['Expedition']['target_floor_num'];
	let CharacterCount = 0;
	if (UserSessionRecord['Kaleidoscape']['Expedition']['chara_id_1'] != 0) { CharacterCount += 1; }
	if (UserSessionRecord['Kaleidoscape']['Expedition']['chara_id_2'] != 0) { CharacterCount += 1; }
	if (UserSessionRecord['Kaleidoscape']['Expedition']['chara_id_3'] != 0) { CharacterCount += 1; }
	if (UserSessionRecord['Kaleidoscape']['Expedition']['chara_id_4'] != 0) { CharacterCount += 1; }
	let GenerateCount = 0;
	let GenerateComplexity = 0;
	let UseElemental = 0;
	switch(Floor) {
		case 10:
			GenerateCount = Math.floor(Math.random());
			GenerateComplexity = 1;
			UseElemental = 0;
			break;
		case 15:
			GenerateCount = Math.floor((Math.random() * 3) + 1);
			GenerateComplexity = 2;
			UseElemental = 0;
			break;
		case 20:
			GenerateCount = Math.floor((Math.random() * 3) + 1);
			GenerateComplexity = 3;
			UseElemental = 0;
			break;
		case 25:
			GenerateCount = Math.floor((Math.random() * 4) + 1);
			GenerateComplexity = 4;
			UseElemental = 0;
			break;
		case 30:
			GenerateCount = Math.floor((Math.random() * 5) + 1);
			GenerateComplexity = 4;
			UseElemental = 1;
			break;
	}
	let RewardTalismanList = [];
	let TalismanList = [];
	let i = 0; while (i < GenerateCount) {
		if ((UserIndexRecord['talisman_list'].length + i) > 1000) { i++; continue; }
		const CharacterSlot = Math.floor((Math.random() * CharacterCount) + 1);
		const CharacterEntry = "chara_id_" + CharacterSlot;
		const CharacterID = UserSessionRecord['Kaleidoscape']['Expedition'][CharacterEntry];
		const CharacterElement = CharacterMap.GetCharacterInfo(CharacterID, "elemental_type");
		const AbilityCount = Math.floor(Math.random() * 4);
		let TalismanAbilityList = [];
		let UsedAbility = [];
		let AdditionalHP = 0;
		let AdditionalATK = 0;
		let u = 0; while (u < AbilityCount) {
			let AbilityRandom = Math.floor(Math.random() * AbilityList.length);
			let AbilityID = 340000000 + (AbilityRandom * 10) + 1;
			while (UsedAbility.includes(AbilityID)) {
				AbilityRandom = Math.floor(Math.random() * AbilityList.length);
				AbilityID = 340000000 + (AbilityRandom * 10) + 1
			}
			let AbilityLevel = 1;
			switch(GenerateComplexity) {
				case 1:
					AbilityLevel = Math.floor(Math.random() * 2 + 1);
					break;
				case 2:
					AbilityLevel = Math.floor(Math.random() * 4 + 1);
					break;
				case 3:
					AbilityLevel = Math.floor(Math.random() * 4 + 3);
					break;
				case 4:
					AbilityLevel = Math.floor(Math.random() * 2 + 5);
					break;
			}
			TalismanAbilityList.push(AbilityID + AbilityLevel);
			UsedAbility.push(AbilityID);
			u++;
		}
		if (TalismanAbilityList.length == 0) { TalismanAbilityList[0] = 0; TalismanAbilityList[1] = 0; TalismanAbilityList[2] = 0; AdditionalHP = 150; AdditionalATK = 100; }
		else if (TalismanAbilityList.length == 1) { TalismanAbilityList[1] = 0; TalismanAbilityList[2] = 0; AdditionalHP = 100; AdditionalATK = 50; }
		else if (TalismanAbilityList.length == 2) { TalismanAbilityList[2] = 0; AdditionalHP = 50; AdditionalATK = 25; }
			
		const TalismanData = TalismanIDMap.find(x => x.character_id == CharacterID);
		let TalismanKeyID = 1;
		if (UserIndexRecord['talisman_list'].length != 0) {
			TalismanKeyID = UserIndexRecord['talisman_list'][UserIndexRecord['talisman_list'].length - 1]['talisman_key_id'] + 1;
		}
		const CurrentTalisman = {
			"talisman_key_id": TalismanKeyID,
			"talisman_id": TalismanData['talisman_id'],
			"is_lock": 0,
			"is_new": 1,
			"talisman_ability_id_1": TalismanAbilityList[0],
			"talisman_ability_id_2": TalismanAbilityList[1],
			"talisman_ability_id_3": TalismanAbilityList[2],
			"additional_hp": AdditionalHP,
			"additional_attack": AdditionalATK,
			"gettime": Math.floor(Date.now() / 1000)
		}
		TalismanList.push(CurrentTalisman);
		const RewardTalisman = {
			"talisman_id": TalismanData['talisman_id'],
			"talisman_ability_id_1": TalismanAbilityList[0],
			"talisman_ability_id_2": TalismanAbilityList[1],
			"talisman_ability_id_3": TalismanAbilityList[2],
			"additional_hp": AdditionalHP,
			"additional_attack": AdditionalATK
		}
		RewardTalismanList.push(RewardTalisman);
		UserIndexRecord['talisman_list'].push(CurrentTalisman);
		i++;
	}
	return [RewardTalismanList, TalismanList, UserSessionRecord, UserIndexRecord];
}

function GetAmber(Floor) {
	let Dusk = 0; let Dawn = 0;
	if (Floor == 60) { Dusk = Math.floor((Math.random() * 1000) + 6000); Dawn = Math.floor((Math.random() * 300) + 600); }
	else if (Floor >= 50) { Dusk = Math.floor((Math.random() * 750) + 5000); Dawn = Math.floor((Math.random() * 50) + 500); }
	else if (Floor >= 40) { Dusk = Math.floor((Math.random() * 500) + 4000); Dawn = Math.floor((Math.random() * 20) + 300); }
	else if (Floor >= 30) { Dusk = Math.floor((Math.random() * 500) + 3000); Dawn = Math.floor((Math.random() * 10) + 150); }
	else if (Floor >= 20) { Dusk = Math.floor((Math.random() * 250) + 2000); Dawn = Math.floor((Math.random() * 5) + 100); }
	else if (Floor >= 10) { Dusk = Math.floor((Math.random() * 100) + 1000); Dawn = Math.floor((Math.random() * 2) + 30); }
	else { Dusk = Math.floor((Math.random() * 100) + 10); Dawn = Math.floor((Math.random() * 10) + 5); }
	
	return [Dusk, Dawn];
}

function BuildPassive(RequestBuild, UserSessionRecord) {
	for (let x in RequestBuild) {
		const PassiveID = RequestBuild[x]['passive_no'];
		const RequestLevel = RequestBuild[x]['passive_level'];
		const PassiveIndex = UserSessionRecord['Kaleidoscape']['Passive'].findIndex(x => x.passive_no == PassiveID);
		if (RequestLevel > 20) { UserSessionRecord['Kaleidoscape']['Passive'][PassiveIndex]['passive_level'] = 20; }
		else { UserSessionRecord['Kaleidoscape']['Passive'][PassiveIndex]['passive_level'] = RequestLevel; }
		const AmberCost = DModeServitorPassive[String(PassiveID)][String(RequestLevel)];
		UserSessionRecord['Kaleidoscape']['DmodeInfo']['dmode_point_1'] -= AmberCost['dusk'];
		UserSessionRecord['Kaleidoscape']['DmodeInfo']['dmode_point_2'] -= AmberCost['dawn'];
	}
	return UserSessionRecord;
}

module.exports = { GenerateKaleidoData, GenerateDragons, ExpeditionDuskAmber, ExpeditionDawnAmber, CreateExpeditionTalismans, CreateTalismans, GetAmber, BuildPassive }