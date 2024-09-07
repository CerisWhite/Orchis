const fs = require('fs');
const WeaponUpgradeInfoMap = JSON.parse(fs.readFileSync('./Library/IDMaps/Master/WeaponUpgradeInfoMap.json'));
const WeaponLevelInfoMap = JSON.parse(fs.readFileSync('./Library/IDMaps/Master/WeaponLevelInfoMap.json'));
const WeaponPassiveInfoMap = JSON.parse(fs.readFileSync('./Library/IDMaps/Master/WeaponPassiveInfoMap.json'));

var WeaponInfoMap = {
  "30119901": {
    "id": 30119901,
    "name": "Battleworn Sword",
    "weapon_type": 1,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "30129901": {
    "id": 30129901,
    "name": "Soldier's Brand",
    "weapon_type": 1,
    "rarity": 2,
    "craft_cost": [],
    "upgrade_group": 900,
    "passive_group": 0,
    "reward_skin": []
  },
  "30139901": {
    "id": 30139901,
    "name": "Knight's Sword",
    "weapon_type": 1,
    "rarity": 3,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2500
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 1
      }
    ],
    "upgrade_group": 110,
    "passive_group": 0,
    "reward_skin": [
      30139903,
      30139902
    ]
  },
  "30149901": {
    "id": 30149901,
    "name": "Knights' Grace",
    "weapon_type": 1,
    "rarity": 4,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 4000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      }
    ],
    "upgrade_group": 210,
    "passive_group": 0,
    "reward_skin": [
      30149902,
      30149903
    ]
  },
  "30150101": {
    "id": 30150101,
    "name": "Levatein",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010011,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005011,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 411,
    "passive_group": 0,
    "reward_skin": [
      30130102,
      30140104
    ]
  },
  "30150102": {
    "id": 30150102,
    "name": "Inferno Apogee",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204015001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204015002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001012,
        "quantity": 8
      }
    ],
    "upgrade_group": 511,
    "passive_group": 10101,
    "reward_skin": []
  },
  "30150107": {
    "id": 30150107,
    "name": "Absolute Crimson",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002012,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008011,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010011,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 701,
    "passive_group": 0,
    "reward_skin": []
  },
  "30150111": {
    "id": 30150111,
    "name": "Chimeratech Commander",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204022001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204022002,
        "quantity": 2
      }
    ],
    "upgrade_group": 611,
    "passive_group": 0,
    "reward_skin": []
  },
  "30150202": {
    "id": 30150202,
    "name": "Eoantide",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010021,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005011,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 412,
    "passive_group": 0,
    "reward_skin": [
      30130201,
      30140201
    ]
  },
  "30150203": {
    "id": 30150203,
    "name": "Judge of Oceans",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 35
      },
      {
        "entity_type": 8,
        "entity_id": 204001002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001022,
        "quantity": 8
      }
    ],
    "upgrade_group": 512,
    "passive_group": 10102,
    "reward_skin": []
  },
  "30150208": {
    "id": 30150208,
    "name": "Absolute Aqua",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002022,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008021,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010021,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 702,
    "passive_group": 0,
    "reward_skin": []
  },
  "30150212": {
    "id": 30150212,
    "name": "Chimeratech Anomalocaris",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204031001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204031002,
        "quantity": 2
      }
    ],
    "upgrade_group": 612,
    "passive_group": 0,
    "reward_skin": []
  },
  "30150301": {
    "id": 30150301,
    "name": "Durandal",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010031,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005011,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 413,
    "passive_group": 0,
    "reward_skin": [
      30130302,
      30140301
    ]
  },
  "30150303": {
    "id": 30150303,
    "name": "Roaring Weald",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204009001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204009002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001032,
        "quantity": 8
      }
    ],
    "upgrade_group": 513,
    "passive_group": 10103,
    "reward_skin": []
  },
  "30150307": {
    "id": 30150307,
    "name": "Absolute Tempest",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002032,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008031,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010031,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 703,
    "passive_group": 0,
    "reward_skin": []
  },
  "30150310": {
    "id": 30150310,
    "name": "Chimeratech Cypress",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204028001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204028002,
        "quantity": 2
      }
    ],
    "upgrade_group": 613,
    "passive_group": 0,
    "reward_skin": []
  },
  "30150401": {
    "id": 30150401,
    "name": "Zex's End",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010041,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005011,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 414,
    "passive_group": 0,
    "reward_skin": [
      30130401,
      30140401
    ]
  },
  "30150408": {
    "id": 30150408,
    "name": "Death Aeon",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204006001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204019001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204019002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001042,
        "quantity": 8
      }
    ],
    "upgrade_group": 514,
    "passive_group": 10104,
    "reward_skin": []
  },
  "30150410": {
    "id": 30150410,
    "name": "Absolute Lightning",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002042,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008041,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010041,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 704,
    "passive_group": 0,
    "reward_skin": []
  },
  "30150414": {
    "id": 30150414,
    "name": "Chimeratech Sirius",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204032001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204032002,
        "quantity": 2
      }
    ],
    "upgrade_group": 614,
    "passive_group": 0,
    "reward_skin": []
  },
  "30150501": {
    "id": 30150501,
    "name": "Dáinsleif",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010051,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005011,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 415,
    "passive_group": 0,
    "reward_skin": [
      30130501,
      30140501
    ]
  },
  "30150502": {
    "id": 30150502,
    "name": "Abyssbringer",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204006001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204006002,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204006003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001052,
        "quantity": 8
      }
    ],
    "upgrade_group": 515,
    "passive_group": 10105,
    "reward_skin": []
  },
  "30150503": {
    "id": 30150503,
    "name": "Absolute Hex",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002052,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008051,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010051,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 705,
    "passive_group": 0,
    "reward_skin": []
  },
  "30150510": {
    "id": 30150510,
    "name": "Chimeratech Nocturne",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204024001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204024002,
        "quantity": 2
      }
    ],
    "upgrade_group": 615,
    "passive_group": 0,
    "reward_skin": []
  },
  "30159901": {
    "id": 30159901,
    "name": "Hero's Sword",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 25000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202001003,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202005011,
        "quantity": 1
      }
    ],
    "upgrade_group": 310,
    "passive_group": 0,
    "reward_skin": [
      30159902,
      30159903
    ]
  },
  "30159904": {
    "id": 30159904,
    "name": "Lucky Hanetsuki Paddle",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 1100,
    "passive_group": 0,
    "reward_skin": []
  },
  "30159905": {
    "id": 30159905,
    "name": "Mega Sword",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 1000,
    "passive_group": 0,
    "reward_skin": []
  },
  "30160101": {
    "id": 30160101,
    "name": "Nothung",
    "weapon_type": 1,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017031,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017032,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 801,
    "passive_group": 0,
    "reward_skin": [
      30160103
    ]
  },
  "30160104": {
    "id": 30160104,
    "name": "Primal Crimson",
    "weapon_type": 1,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023011,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023012,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1101,
    "passive_group": 0,
    "reward_skin": []
  },
  "30160201": {
    "id": 30160201,
    "name": "Ame no Murakumo",
    "weapon_type": 1,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017011,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017012,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 802,
    "passive_group": 0,
    "reward_skin": [
      30160203
    ]
  },
  "30160204": {
    "id": 30160204,
    "name": "Primal Aqua",
    "weapon_type": 1,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023021,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023022,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1102,
    "passive_group": 0,
    "reward_skin": []
  },
  "30160301": {
    "id": 30160301,
    "name": "Excalibur",
    "weapon_type": 1,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017021,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017022,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 803,
    "passive_group": 0,
    "reward_skin": [
      30160303
    ]
  },
  "30160304": {
    "id": 30160304,
    "name": "Primal Tempest",
    "weapon_type": 1,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023031,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023032,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1103,
    "passive_group": 0,
    "reward_skin": []
  },
  "30160401": {
    "id": 30160401,
    "name": "Caladbolg",
    "weapon_type": 1,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017051,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017052,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 804,
    "passive_group": 0,
    "reward_skin": [
      30160403
    ]
  },
  "30160404": {
    "id": 30160404,
    "name": "Primal Lightning",
    "weapon_type": 1,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023041,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023042,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1104,
    "passive_group": 0,
    "reward_skin": []
  },
  "30160501": {
    "id": 30160501,
    "name": "Yitian Jian",
    "weapon_type": 1,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017041,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017042,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 805,
    "passive_group": 0,
    "reward_skin": [
      30160503
    ]
  },
  "30160504": {
    "id": 30160504,
    "name": "Primal Hex",
    "weapon_type": 1,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023051,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023052,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1105,
    "passive_group": 0,
    "reward_skin": []
  },
  "30219901": {
    "id": 30219901,
    "name": "Battleworn Blade",
    "weapon_type": 2,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "30239901": {
    "id": 30239901,
    "name": "Subjugator",
    "weapon_type": 2,
    "rarity": 3,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2500
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 1
      }
    ],
    "upgrade_group": 110,
    "passive_group": 0,
    "reward_skin": [
      30239903,
      30239902
    ]
  },
  "30249901": {
    "id": 30249901,
    "name": "Guardian Seal",
    "weapon_type": 2,
    "rarity": 4,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 4000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      }
    ],
    "upgrade_group": 210,
    "passive_group": 0,
    "reward_skin": [
      30249902,
      30249903
    ]
  },
  "30250101": {
    "id": 30250101,
    "name": "Heaven's Acuity",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010011,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005021,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 421,
    "passive_group": 0,
    "reward_skin": [
      30230101,
      30240101
    ]
  },
  "30250102": {
    "id": 30250102,
    "name": "Skyrender",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204015001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204015002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001012,
        "quantity": 8
      }
    ],
    "upgrade_group": 511,
    "passive_group": 10201,
    "reward_skin": []
  },
  "30250104": {
    "id": 30250104,
    "name": "Blinding Conflagration",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002012,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008011,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010011,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 701,
    "passive_group": 0,
    "reward_skin": []
  },
  "30250108": {
    "id": 30250108,
    "name": "Chimeratech Lord",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204022001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204022002,
        "quantity": 2
      }
    ],
    "upgrade_group": 611,
    "passive_group": 0,
    "reward_skin": []
  },
  "30250201": {
    "id": 30250201,
    "name": "Maar Oasis",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010021,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005021,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 422,
    "passive_group": 0,
    "reward_skin": [
      30230201,
      30240202
    ]
  },
  "30250202": {
    "id": 30250202,
    "name": "Highwater Slicer",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 35
      },
      {
        "entity_type": 8,
        "entity_id": 204001002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001022,
        "quantity": 8
      }
    ],
    "upgrade_group": 512,
    "passive_group": 10202,
    "reward_skin": []
  },
  "30250204": {
    "id": 30250204,
    "name": "Ruinous Torrent",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002022,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008021,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010021,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 702,
    "passive_group": 0,
    "reward_skin": []
  },
  "30250209": {
    "id": 30250209,
    "name": "Chimeratech Hadranax",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204031001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204031002,
        "quantity": 2
      }
    ],
    "upgrade_group": 612,
    "passive_group": 0,
    "reward_skin": []
  },
  "30250301": {
    "id": 30250301,
    "name": "Anemone",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010031,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005021,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 423,
    "passive_group": 0,
    "reward_skin": [
      30230302,
      30240301
    ]
  },
  "30250303": {
    "id": 30250303,
    "name": "Stormsquall Crash",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204009001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204009002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001032,
        "quantity": 8
      }
    ],
    "upgrade_group": 513,
    "passive_group": 10203,
    "reward_skin": []
  },
  "30250304": {
    "id": 30250304,
    "name": "Endless Horizon",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002032,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008031,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010031,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 703,
    "passive_group": 0,
    "reward_skin": []
  },
  "30250307": {
    "id": 30250307,
    "name": "Chimeratech Benzoin",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204028001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204028002,
        "quantity": 2
      }
    ],
    "upgrade_group": 613,
    "passive_group": 0,
    "reward_skin": []
  },
  "30250401": {
    "id": 30250401,
    "name": "Heavenwing",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010041,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005021,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 424,
    "passive_group": 0,
    "reward_skin": [
      30230401,
      30240402
    ]
  },
  "30250404": {
    "id": 30250404,
    "name": "Brilliant Flash",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002042,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008041,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010041,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 704,
    "passive_group": 0,
    "reward_skin": []
  },
  "30250407": {
    "id": 30250407,
    "name": "Hollow Lightning",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204006001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204019001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204019002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001042,
        "quantity": 8
      }
    ],
    "upgrade_group": 514,
    "passive_group": 10204,
    "reward_skin": []
  },
  "30250410": {
    "id": 30250410,
    "name": "Chimeratech Canopus",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204032001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204032002,
        "quantity": 2
      }
    ],
    "upgrade_group": 614,
    "passive_group": 0,
    "reward_skin": []
  },
  "30250501": {
    "id": 30250501,
    "name": "Blackwing",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010051,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005021,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 425,
    "passive_group": 0,
    "reward_skin": [
      30230501,
      30240501
    ]
  },
  "30250502": {
    "id": 30250502,
    "name": "Nightsky Ripper",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204006001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204006002,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204006003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001052,
        "quantity": 8
      }
    ],
    "upgrade_group": 515,
    "passive_group": 10205,
    "reward_skin": []
  },
  "30250503": {
    "id": 30250503,
    "name": "True Abyss",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002052,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008051,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010051,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 705,
    "passive_group": 0,
    "reward_skin": []
  },
  "30250507": {
    "id": 30250507,
    "name": "Chimeratech Requiem",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204024001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204024002,
        "quantity": 2
      }
    ],
    "upgrade_group": 615,
    "passive_group": 0,
    "reward_skin": []
  },
  "30259901": {
    "id": 30259901,
    "name": "Dane's Favor",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 25000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202001003,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202005021,
        "quantity": 1
      }
    ],
    "upgrade_group": 320,
    "passive_group": 0,
    "reward_skin": [
      30259902,
      30259904,
      30259903
    ]
  },
  "30259905": {
    "id": 30259905,
    "name": "Mega Blade",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 1000,
    "passive_group": 0,
    "reward_skin": []
  },
  "30260101": {
    "id": 30260101,
    "name": "Tyrfing",
    "weapon_type": 2,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017031,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017032,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 801,
    "passive_group": 0,
    "reward_skin": [
      30260103
    ]
  },
  "30260104": {
    "id": 30260104,
    "name": "Raging Conflagration",
    "weapon_type": 2,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023011,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023012,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1101,
    "passive_group": 0,
    "reward_skin": []
  },
  "30260201": {
    "id": 30260201,
    "name": "Ame no Habakiri",
    "weapon_type": 2,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017011,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017012,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 802,
    "passive_group": 0,
    "reward_skin": [
      30260203
    ]
  },
  "30260204": {
    "id": 30260204,
    "name": "Calamitous Torrent",
    "weapon_type": 2,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023021,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023022,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1102,
    "passive_group": 0,
    "reward_skin": []
  },
  "30260301": {
    "id": 30260301,
    "name": "Arondight",
    "weapon_type": 2,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017021,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017022,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 803,
    "passive_group": 0,
    "reward_skin": [
      30260303
    ]
  },
  "30260304": {
    "id": 30260304,
    "name": "Noble Horizon",
    "weapon_type": 2,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023031,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023032,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1103,
    "passive_group": 0,
    "reward_skin": []
  },
  "30260401": {
    "id": 30260401,
    "name": "Fragarach",
    "weapon_type": 2,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017051,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017052,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 804,
    "passive_group": 0,
    "reward_skin": [
      30260403
    ]
  },
  "30260404": {
    "id": 30260404,
    "name": "Daunting Flash",
    "weapon_type": 2,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023041,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023042,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1104,
    "passive_group": 0,
    "reward_skin": []
  },
  "30260501": {
    "id": 30260501,
    "name": "Qixing Baodao",
    "weapon_type": 2,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017041,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017042,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 805,
    "passive_group": 0,
    "reward_skin": [
      30260503
    ]
  },
  "30260504": {
    "id": 30260504,
    "name": "Eternal Abyss",
    "weapon_type": 2,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023051,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023052,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1105,
    "passive_group": 0,
    "reward_skin": []
  },
  "30319901": {
    "id": 30319901,
    "name": "Battleworn Dagger",
    "weapon_type": 3,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "30339901": {
    "id": 30339901,
    "name": "Bejeweled Dagger",
    "weapon_type": 3,
    "rarity": 3,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2500
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 1
      }
    ],
    "upgrade_group": 130,
    "passive_group": 0,
    "reward_skin": [
      30339902,
      30339903
    ]
  },
  "30349901": {
    "id": 30349901,
    "name": "Hardbreaker",
    "weapon_type": 3,
    "rarity": 4,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 4000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      }
    ],
    "upgrade_group": 230,
    "passive_group": 0,
    "reward_skin": [
      30349903,
      30349902
    ]
  },
  "30350102": {
    "id": 30350102,
    "name": "Aeternal Flame",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010011,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005031,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 431,
    "passive_group": 0,
    "reward_skin": [
      30330101,
      30340101
    ]
  },
  "30350103": {
    "id": 30350103,
    "name": "Vermillion Pain",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204015001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204015002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001012,
        "quantity": 8
      }
    ],
    "upgrade_group": 531,
    "passive_group": 10301,
    "reward_skin": []
  },
  "30350105": {
    "id": 30350105,
    "name": "Flameruler's Maw",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002012,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008011,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010011,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 701,
    "passive_group": 0,
    "reward_skin": []
  },
  "30350108": {
    "id": 30350108,
    "name": "Chimeratech Elite",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204022001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204022002,
        "quantity": 2
      }
    ],
    "upgrade_group": 631,
    "passive_group": 0,
    "reward_skin": []
  },
  "30350201": {
    "id": 30350201,
    "name": "Lux Lamina",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010021,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005031,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 432,
    "passive_group": 0,
    "reward_skin": [
      30330201,
      30340201
    ]
  },
  "30350203": {
    "id": 30350203,
    "name": "Frigid Sting",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 35
      },
      {
        "entity_type": 8,
        "entity_id": 204001002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001022,
        "quantity": 8
      }
    ],
    "upgrade_group": 532,
    "passive_group": 10302,
    "reward_skin": []
  },
  "30350205": {
    "id": 30350205,
    "name": "Tideruler's Maw",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002022,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008021,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010021,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 702,
    "passive_group": 0,
    "reward_skin": []
  },
  "30350208": {
    "id": 30350208,
    "name": "Chimeratech Vetulicola",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204031001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204031002,
        "quantity": 2
      }
    ],
    "upgrade_group": 632,
    "passive_group": 0,
    "reward_skin": []
  },
  "30350301": {
    "id": 30350301,
    "name": "Karlsnautr",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010031,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005031,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 433,
    "passive_group": 0,
    "reward_skin": [
      30330301,
      30340301
    ]
  },
  "30350303": {
    "id": 30350303,
    "name": "The Gale",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204009001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204009002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001032,
        "quantity": 8
      }
    ],
    "upgrade_group": 533,
    "passive_group": 10303,
    "reward_skin": []
  },
  "30350305": {
    "id": 30350305,
    "name": "Windruler's Maw",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002032,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008031,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010031,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 703,
    "passive_group": 0,
    "reward_skin": []
  },
  "30350307": {
    "id": 30350307,
    "name": "Chimeratech Tea Tree",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204028001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204028002,
        "quantity": 2
      }
    ],
    "upgrade_group": 633,
    "passive_group": 0,
    "reward_skin": []
  },
  "30350401": {
    "id": 30350401,
    "name": "Thunderblade Sugaar",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010041,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005031,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 434,
    "passive_group": 0,
    "reward_skin": [
      30330401,
      30340401
    ]
  },
  "30350404": {
    "id": 30350404,
    "name": "Fulminator's Maw",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002042,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008041,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010041,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 704,
    "passive_group": 0,
    "reward_skin": []
  },
  "30350406": {
    "id": 30350406,
    "name": "Merciful Claw",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204006001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204019001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204019002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001042,
        "quantity": 8
      }
    ],
    "upgrade_group": 534,
    "passive_group": 10304,
    "reward_skin": []
  },
  "30350409": {
    "id": 30350409,
    "name": "Chimeratech Capella",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204032001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204032002,
        "quantity": 2
      }
    ],
    "upgrade_group": 634,
    "passive_group": 0,
    "reward_skin": []
  },
  "30350501": {
    "id": 30350501,
    "name": "Honor Edge",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010051,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005031,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 435,
    "passive_group": 0,
    "reward_skin": [
      30330501,
      30340502
    ]
  },
  "30350503": {
    "id": 30350503,
    "name": "Death Seeker",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204006001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204006002,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204006003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001052,
        "quantity": 8
      }
    ],
    "upgrade_group": 535,
    "passive_group": 10305,
    "reward_skin": []
  },
  "30350504": {
    "id": 30350504,
    "name": "Shaderuler's Maw",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002052,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008051,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010051,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 705,
    "passive_group": 0,
    "reward_skin": []
  },
  "30350508": {
    "id": 30350508,
    "name": "Chimeratech Rhapsody",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204024001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204024002,
        "quantity": 2
      }
    ],
    "upgrade_group": 635,
    "passive_group": 0,
    "reward_skin": []
  },
  "30359901": {
    "id": 30359901,
    "name": "Kris Naga",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 25000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202002003,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202005031,
        "quantity": 1
      }
    ],
    "upgrade_group": 330,
    "passive_group": 0,
    "reward_skin": [
      30359902,
      30359903
    ]
  },
  "30359904": {
    "id": 30359904,
    "name": "Mega Dagger",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 1000,
    "passive_group": 0,
    "reward_skin": []
  },
  "30360101": {
    "id": 30360101,
    "name": "Hrotti",
    "weapon_type": 3,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017031,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017032,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 801,
    "passive_group": 0,
    "reward_skin": [
      30360103
    ]
  },
  "30360104": {
    "id": 30360104,
    "name": "Flameruler's Fang",
    "weapon_type": 3,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023011,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023012,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1101,
    "passive_group": 0,
    "reward_skin": []
  },
  "30360201": {
    "id": 30360201,
    "name": "Futsu no Mitama",
    "weapon_type": 3,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017011,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017012,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 802,
    "passive_group": 0,
    "reward_skin": [
      30360203
    ]
  },
  "30360204": {
    "id": 30360204,
    "name": "Tideruler's Fang",
    "weapon_type": 3,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023021,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023022,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1102,
    "passive_group": 0,
    "reward_skin": []
  },
  "30360301": {
    "id": 30360301,
    "name": "Carnwennan",
    "weapon_type": 3,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017021,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017022,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 803,
    "passive_group": 0,
    "reward_skin": [
      30360303
    ]
  },
  "30360304": {
    "id": 30360304,
    "name": "Windruler's Fang",
    "weapon_type": 3,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023031,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023032,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1103,
    "passive_group": 0,
    "reward_skin": []
  },
  "30360401": {
    "id": 30360401,
    "name": "Claíomh Solais",
    "weapon_type": 3,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017051,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017052,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 804,
    "passive_group": 0,
    "reward_skin": [
      30360403
    ]
  },
  "30360404": {
    "id": 30360404,
    "name": "Fulminator's Fang",
    "weapon_type": 3,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023041,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023042,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1104,
    "passive_group": 0,
    "reward_skin": []
  },
  "30360501": {
    "id": 30360501,
    "name": "Qinghong Jian",
    "weapon_type": 3,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017041,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017042,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 805,
    "passive_group": 0,
    "reward_skin": [
      30360503
    ]
  },
  "30360504": {
    "id": 30360504,
    "name": "Shaderuler's Fang",
    "weapon_type": 3,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023051,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023052,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1105,
    "passive_group": 0,
    "reward_skin": []
  },
  "30419901": {
    "id": 30419901,
    "name": "Battleworn Axe",
    "weapon_type": 4,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "30439901": {
    "id": 30439901,
    "name": "Warrior's Axe",
    "weapon_type": 4,
    "rarity": 3,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2500
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 1
      }
    ],
    "upgrade_group": 110,
    "passive_group": 0,
    "reward_skin": [
      30439902,
      30439903
    ]
  },
  "30449901": {
    "id": 30449901,
    "name": "Plain Axe",
    "weapon_type": 4,
    "rarity": 4,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 4000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      }
    ],
    "upgrade_group": 210,
    "passive_group": 0,
    "reward_skin": [
      30449902,
      30449903
    ]
  },
  "30450101": {
    "id": 30450101,
    "name": "Axe of the Blazing King",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010011,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005041,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 441,
    "passive_group": 0,
    "reward_skin": [
      30430101,
      30440102
    ]
  },
  "30450102": {
    "id": 30450102,
    "name": "Heavenwrath Gaze",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204015001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204015002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001012,
        "quantity": 8
      }
    ],
    "upgrade_group": 511,
    "passive_group": 10401,
    "reward_skin": []
  },
  "30450104": {
    "id": 30450104,
    "name": "Royal Crimson Heat",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002012,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008011,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010011,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 701,
    "passive_group": 0,
    "reward_skin": []
  },
  "30450108": {
    "id": 30450108,
    "name": "Chimeratech Warlord",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204022001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204022002,
        "quantity": 2
      }
    ],
    "upgrade_group": 611,
    "passive_group": 0,
    "reward_skin": []
  },
  "30450201": {
    "id": 30450201,
    "name": "Grand Seadragon",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010021,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005041,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 442,
    "passive_group": 0,
    "reward_skin": [
      30430201,
      30440201
    ]
  },
  "30450203": {
    "id": 30450203,
    "name": "Permafrost Crash",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 35
      },
      {
        "entity_type": 8,
        "entity_id": 204001002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001022,
        "quantity": 8
      }
    ],
    "upgrade_group": 512,
    "passive_group": 10402,
    "reward_skin": []
  },
  "30450205": {
    "id": 30450205,
    "name": "Mercy's Azure Tide",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002022,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008021,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010021,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 702,
    "passive_group": 0,
    "reward_skin": []
  },
  "30450209": {
    "id": 30450209,
    "name": "Chimeratech Helmetia",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204031001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204031002,
        "quantity": 2
      }
    ],
    "upgrade_group": 612,
    "passive_group": 0,
    "reward_skin": []
  },
  "30450301": {
    "id": 30450301,
    "name": "Axe of the Southern Cross",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010031,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005041,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 443,
    "passive_group": 0,
    "reward_skin": [
      30430301,
      30440301
    ]
  },
  "30450303": {
    "id": 30450303,
    "name": "Jagged Bolt",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204009001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204009002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001032,
        "quantity": 8
      }
    ],
    "upgrade_group": 513,
    "passive_group": 10403,
    "reward_skin": []
  },
  "30450305": {
    "id": 30450305,
    "name": "Glorystorm's Guide",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002032,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008031,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010031,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 703,
    "passive_group": 0,
    "reward_skin": []
  },
  "30450307": {
    "id": 30450307,
    "name": "Chimeratech Palmarosa",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204028001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204028002,
        "quantity": 2
      }
    ],
    "upgrade_group": 613,
    "passive_group": 0,
    "reward_skin": []
  },
  "30450401": {
    "id": 30450401,
    "name": "Radiant Swath",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010041,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005041,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 444,
    "passive_group": 0,
    "reward_skin": [
      30430401,
      30440401
    ]
  },
  "30450404": {
    "id": 30450404,
    "name": "Mighty Thundercrash",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002042,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008041,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010041,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 704,
    "passive_group": 0,
    "reward_skin": []
  },
  "30450407": {
    "id": 30450407,
    "name": "Blitzfang",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204006001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204019001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204019002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001042,
        "quantity": 8
      }
    ],
    "upgrade_group": 514,
    "passive_group": 10404,
    "reward_skin": []
  },
  "30450410": {
    "id": 30450410,
    "name": "Chimeratech Rigel",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204032001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204032002,
        "quantity": 2
      }
    ],
    "upgrade_group": 614,
    "passive_group": 0,
    "reward_skin": []
  },
  "30450501": {
    "id": 30450501,
    "name": "Primordial Titan",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010051,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005041,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 445,
    "passive_group": 0,
    "reward_skin": [
      30430501,
      30440501
    ]
  },
  "30450503": {
    "id": 30450503,
    "name": "Genocide Cleaver",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204006001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204006002,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204006003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001052,
        "quantity": 8
      }
    ],
    "upgrade_group": 515,
    "passive_group": 10405,
    "reward_skin": []
  },
  "30450504": {
    "id": 30450504,
    "name": "Shadowy Darkbite Axe",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002052,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008051,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010051,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 705,
    "passive_group": 0,
    "reward_skin": []
  },
  "30450508": {
    "id": 30450508,
    "name": "Chimeratech Fugue",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202001001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204024001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204024002,
        "quantity": 2
      }
    ],
    "upgrade_group": 615,
    "passive_group": 0,
    "reward_skin": []
  },
  "30459901": {
    "id": 30459901,
    "name": "Victory Axe",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 25000
      },
      {
        "entity_type": 8,
        "entity_id": 202001002,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202001003,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202005041,
        "quantity": 1
      }
    ],
    "upgrade_group": 340,
    "passive_group": 0,
    "reward_skin": [
      30459903,
      30459902
    ]
  },
  "30459904": {
    "id": 30459904,
    "name": "Mega Axe",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 1000,
    "passive_group": 0,
    "reward_skin": []
  },
  "30460101": {
    "id": 30460101,
    "name": "Mjölnir",
    "weapon_type": 4,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017031,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017032,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 801,
    "passive_group": 0,
    "reward_skin": [
      30460103
    ]
  },
  "30460104": {
    "id": 30460104,
    "name": "Noble Crimson Heat",
    "weapon_type": 4,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023011,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023012,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1101,
    "passive_group": 0,
    "reward_skin": []
  },
  "30460201": {
    "id": 30460201,
    "name": "Ohohagari",
    "weapon_type": 4,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017011,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017012,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 802,
    "passive_group": 0,
    "reward_skin": [
      30460203
    ]
  },
  "30460204": {
    "id": 30460204,
    "name": "Mercy's Jeweled Tide",
    "weapon_type": 4,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023021,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023022,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1102,
    "passive_group": 0,
    "reward_skin": []
  },
  "30460301": {
    "id": 30460301,
    "name": "Marmyadose",
    "weapon_type": 4,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017021,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017022,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 803,
    "passive_group": 0,
    "reward_skin": [
      30460303
    ]
  },
  "30460304": {
    "id": 30460304,
    "name": "Tempest's Guide",
    "weapon_type": 4,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023031,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023032,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1103,
    "passive_group": 0,
    "reward_skin": []
  },
  "30460401": {
    "id": 30460401,
    "name": "Rog Mol",
    "weapon_type": 4,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017051,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017052,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 804,
    "passive_group": 0,
    "reward_skin": [
      30460403
    ]
  },
  "30460404": {
    "id": 30460404,
    "name": "Indomitable Thundercrash",
    "weapon_type": 4,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023041,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023042,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1104,
    "passive_group": 0,
    "reward_skin": []
  },
  "30460501": {
    "id": 30460501,
    "name": "Fangtian Huaji",
    "weapon_type": 4,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017041,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017042,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 805,
    "passive_group": 0,
    "reward_skin": [
      30460503
    ]
  },
  "30460504": {
    "id": 30460504,
    "name": "Nightfall's Darkbite Axe",
    "weapon_type": 4,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023051,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023052,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1105,
    "passive_group": 0,
    "reward_skin": []
  },
  "30519901": {
    "id": 30519901,
    "name": "Battleworn Lance",
    "weapon_type": 5,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "30539901": {
    "id": 30539901,
    "name": "Trident",
    "weapon_type": 5,
    "rarity": 3,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2500
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 1
      }
    ],
    "upgrade_group": 130,
    "passive_group": 0,
    "reward_skin": [
      30539903,
      30539902
    ]
  },
  "30549901": {
    "id": 30549901,
    "name": "Strong Halberd",
    "weapon_type": 5,
    "rarity": 4,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 4000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      }
    ],
    "upgrade_group": 230,
    "passive_group": 0,
    "reward_skin": [
      30549902,
      30549903
    ]
  },
  "30550101": {
    "id": 30550101,
    "name": "Calamity Trigger",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010011,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005051,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 451,
    "passive_group": 0,
    "reward_skin": [
      30530101,
      30540101
    ]
  },
  "30550102": {
    "id": 30550102,
    "name": "Flamedance Lance",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204015001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204015002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001012,
        "quantity": 8
      }
    ],
    "upgrade_group": 531,
    "passive_group": 10501,
    "reward_skin": []
  },
  "30550104": {
    "id": 30550104,
    "name": "Pureflame Lance",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002012,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008011,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010011,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 701,
    "passive_group": 0,
    "reward_skin": []
  },
  "30550108": {
    "id": 30550108,
    "name": "Chimeratech Lancemaster",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204022001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204022002,
        "quantity": 2
      }
    ],
    "upgrade_group": 631,
    "passive_group": 0,
    "reward_skin": []
  },
  "30550201": {
    "id": 30550201,
    "name": "Ocean Lord",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010021,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005051,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 452,
    "passive_group": 0,
    "reward_skin": [
      30530201,
      30540201
    ]
  },
  "30550203": {
    "id": 30550203,
    "name": "Strohm Mare",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 35
      },
      {
        "entity_type": 8,
        "entity_id": 204001002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001022,
        "quantity": 8
      }
    ],
    "upgrade_group": 532,
    "passive_group": 10502,
    "reward_skin": []
  },
  "30550205": {
    "id": 30550205,
    "name": "Limpid Rush",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002022,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008021,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010021,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 702,
    "passive_group": 0,
    "reward_skin": []
  },
  "30550209": {
    "id": 30550209,
    "name": "Chimeratech Takakkawia",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204031001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204031002,
        "quantity": 2
      }
    ],
    "upgrade_group": 632,
    "passive_group": 0,
    "reward_skin": []
  },
  "30550301": {
    "id": 30550301,
    "name": "Spear of the Northern Cross",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010031,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005051,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 453,
    "passive_group": 0,
    "reward_skin": [
      30530301,
      30540302
    ]
  },
  "30550303": {
    "id": 30550303,
    "name": "Windsovereign Trident",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204009001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204009002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001032,
        "quantity": 8
      }
    ],
    "upgrade_group": 533,
    "passive_group": 10503,
    "reward_skin": []
  },
  "30550305": {
    "id": 30550305,
    "name": "Guiding Gale",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002032,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008031,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010031,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 703,
    "passive_group": 0,
    "reward_skin": []
  },
  "30550307": {
    "id": 30550307,
    "name": "Chimeratech Caraway",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204028001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204028002,
        "quantity": 2
      }
    ],
    "upgrade_group": 633,
    "passive_group": 0,
    "reward_skin": []
  },
  "30550402": {
    "id": 30550402,
    "name": "Thunder King's Greatspear",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010041,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005051,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 454,
    "passive_group": 0,
    "reward_skin": [
      30530401,
      30540402
    ]
  },
  "30550405": {
    "id": 30550405,
    "name": "Brilliant Lightflash",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002042,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008041,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010041,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 704,
    "passive_group": 0,
    "reward_skin": []
  },
  "30550408": {
    "id": 30550408,
    "name": "Starpiercer",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204006001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204019001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204019002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001042,
        "quantity": 8
      }
    ],
    "upgrade_group": 534,
    "passive_group": 10504,
    "reward_skin": []
  },
  "30550412": {
    "id": 30550412,
    "name": "Chimeratech Arcturus",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204032001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204032002,
        "quantity": 2
      }
    ],
    "upgrade_group": 634,
    "passive_group": 0,
    "reward_skin": []
  },
  "30550501": {
    "id": 30550501,
    "name": "Mistilteinn",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010051,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005051,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 455,
    "passive_group": 0,
    "reward_skin": [
      30530501,
      30540501
    ]
  },
  "30550503": {
    "id": 30550503,
    "name": "Final Eclipse",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204006001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204006002,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204006003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001052,
        "quantity": 8
      }
    ],
    "upgrade_group": 535,
    "passive_group": 10505,
    "reward_skin": []
  },
  "30550504": {
    "id": 30550504,
    "name": "Ebon Scourge Lance",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002052,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008051,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010051,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 705,
    "passive_group": 0,
    "reward_skin": []
  },
  "30550508": {
    "id": 30550508,
    "name": "Chimeratech Elegy",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204024001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204024002,
        "quantity": 2
      }
    ],
    "upgrade_group": 635,
    "passive_group": 0,
    "reward_skin": []
  },
  "30559901": {
    "id": 30559901,
    "name": "Pactspear",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 25000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202002003,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202005051,
        "quantity": 1
      }
    ],
    "upgrade_group": 350,
    "passive_group": 0,
    "reward_skin": [
      30559902,
      30559903
    ]
  },
  "30559904": {
    "id": 30559904,
    "name": "Mega Lance",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 1000,
    "passive_group": 0,
    "reward_skin": []
  },
  "30560101": {
    "id": 30560101,
    "name": "Gungnir",
    "weapon_type": 5,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017031,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017032,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 801,
    "passive_group": 0,
    "reward_skin": [
      30560103
    ]
  },
  "30560104": {
    "id": 30560104,
    "name": "Omniflame Lance",
    "weapon_type": 5,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023011,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023012,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1101,
    "passive_group": 0,
    "reward_skin": []
  },
  "30560201": {
    "id": 30560201,
    "name": "Ame no Nuhoko",
    "weapon_type": 5,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017011,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017012,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 802,
    "passive_group": 0,
    "reward_skin": [
      30560203
    ]
  },
  "30560204": {
    "id": 30560204,
    "name": "Limpid Cascade",
    "weapon_type": 5,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023021,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023022,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1102,
    "passive_group": 0,
    "reward_skin": []
  },
  "30560301": {
    "id": 30560301,
    "name": "Rhongomyniad",
    "weapon_type": 5,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017021,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017022,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 803,
    "passive_group": 0,
    "reward_skin": [
      30560303
    ]
  },
  "30560304": {
    "id": 30560304,
    "name": "Gale's Aid",
    "weapon_type": 5,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023031,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023032,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1103,
    "passive_group": 0,
    "reward_skin": []
  },
  "30560401": {
    "id": 30560401,
    "name": "Areadbhar",
    "weapon_type": 5,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017051,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017052,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 804,
    "passive_group": 0,
    "reward_skin": [
      30560403
    ]
  },
  "30560404": {
    "id": 30560404,
    "name": "Radiant Lightflash",
    "weapon_type": 5,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023041,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023042,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1104,
    "passive_group": 0,
    "reward_skin": []
  },
  "30560501": {
    "id": 30560501,
    "name": "Qinglong Yanyuedao",
    "weapon_type": 5,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017041,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017042,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 805,
    "passive_group": 0,
    "reward_skin": [
      30560503
    ]
  },
  "30560504": {
    "id": 30560504,
    "name": "Ebon Plague Lance",
    "weapon_type": 5,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023051,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023052,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1105,
    "passive_group": 0,
    "reward_skin": []
  },
  "30619901": {
    "id": 30619901,
    "name": "Battleworn Bow",
    "weapon_type": 6,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "30639901": {
    "id": 30639901,
    "name": "Composite Bow",
    "weapon_type": 6,
    "rarity": 3,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2500
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 1
      }
    ],
    "upgrade_group": 130,
    "passive_group": 0,
    "reward_skin": [
      30639902,
      30639903
    ]
  },
  "30649901": {
    "id": 30649901,
    "name": "Executor",
    "weapon_type": 6,
    "rarity": 4,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 4000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      }
    ],
    "upgrade_group": 230,
    "passive_group": 0,
    "reward_skin": [
      30649902,
      30649903
    ]
  },
  "30650101": {
    "id": 30650101,
    "name": "Lupis Solis",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010011,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005061,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 461,
    "passive_group": 0,
    "reward_skin": [
      30630101,
      30640102
    ]
  },
  "30650102": {
    "id": 30650102,
    "name": "Vulcanrage",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204015001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204015002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001012,
        "quantity": 8
      }
    ],
    "upgrade_group": 531,
    "passive_group": 10601,
    "reward_skin": []
  },
  "30650104": {
    "id": 30650104,
    "name": "Valkyrie's Fire",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002012,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008011,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010011,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 701,
    "passive_group": 0,
    "reward_skin": []
  },
  "30650107": {
    "id": 30650107,
    "name": "Chimeratech Sniper",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204022001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204022002,
        "quantity": 2
      }
    ],
    "upgrade_group": 631,
    "passive_group": 0,
    "reward_skin": []
  },
  "30650201": {
    "id": 30650201,
    "name": "Peacock's Whorl",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010021,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005061,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 462,
    "passive_group": 0,
    "reward_skin": [
      30630201,
      30640201
    ]
  },
  "30650202": {
    "id": 30650202,
    "name": "Everfrost Bow",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 35
      },
      {
        "entity_type": 8,
        "entity_id": 204001002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001022,
        "quantity": 8
      }
    ],
    "upgrade_group": 532,
    "passive_group": 10602,
    "reward_skin": []
  },
  "30650204": {
    "id": 30650204,
    "name": "Azure Mercurius",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002022,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008021,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010021,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 702,
    "passive_group": 0,
    "reward_skin": []
  },
  "30650208": {
    "id": 30650208,
    "name": "Chimeratech Hallucigenia",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204031001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204031002,
        "quantity": 2
      }
    ],
    "upgrade_group": 632,
    "passive_group": 0,
    "reward_skin": []
  },
  "30650302": {
    "id": 30650302,
    "name": "Stellar Pegasus",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010031,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005061,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 463,
    "passive_group": 0,
    "reward_skin": [
      30630302,
      30640302
    ]
  },
  "30650304": {
    "id": 30650304,
    "name": "Firmament Auger",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204009001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204009002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001032,
        "quantity": 8
      }
    ],
    "upgrade_group": 533,
    "passive_group": 10603,
    "reward_skin": []
  },
  "30650305": {
    "id": 30650305,
    "name": "Jormungand's Fury",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002032,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008031,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010031,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 703,
    "passive_group": 0,
    "reward_skin": []
  },
  "30650308": {
    "id": 30650308,
    "name": "Chimeratech Ajwain",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204028001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204028002,
        "quantity": 2
      }
    ],
    "upgrade_group": 633,
    "passive_group": 0,
    "reward_skin": []
  },
  "30650402": {
    "id": 30650402,
    "name": "Thunderbow",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010041,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005061,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 464,
    "passive_group": 0,
    "reward_skin": [
      30630401,
      30640403
    ]
  },
  "30650405": {
    "id": 30650405,
    "name": "Jupiter's Sky",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002042,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008041,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010041,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 704,
    "passive_group": 0,
    "reward_skin": []
  },
  "30650407": {
    "id": 30650407,
    "name": "Astral Echo",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204006001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204019001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204019002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001042,
        "quantity": 8
      }
    ],
    "upgrade_group": 534,
    "passive_group": 10604,
    "reward_skin": []
  },
  "30650410": {
    "id": 30650410,
    "name": "Chimeratech Vega",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204032001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204032002,
        "quantity": 2
      }
    ],
    "upgrade_group": 634,
    "passive_group": 0,
    "reward_skin": []
  },
  "30650501": {
    "id": 30650501,
    "name": "Necro Arcus",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010051,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005061,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 465,
    "passive_group": 0,
    "reward_skin": [
      30630501,
      30640501
    ]
  },
  "30650502": {
    "id": 30650502,
    "name": "Black Dahlia Bow",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204006001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204006002,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204006003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001052,
        "quantity": 8
      }
    ],
    "upgrade_group": 535,
    "passive_group": 10605,
    "reward_skin": []
  },
  "30650503": {
    "id": 30650503,
    "name": "Hellish Prophecy",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002052,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008051,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010051,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 705,
    "passive_group": 0,
    "reward_skin": []
  },
  "30650507": {
    "id": 30650507,
    "name": "Chimeratech Concerto",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202002001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204024001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204024002,
        "quantity": 2
      }
    ],
    "upgrade_group": 635,
    "passive_group": 0,
    "reward_skin": []
  },
  "30659901": {
    "id": 30659901,
    "name": "Nitralica's Koto",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 25000
      },
      {
        "entity_type": 8,
        "entity_id": 202002002,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202002003,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202005061,
        "quantity": 1
      }
    ],
    "upgrade_group": 360,
    "passive_group": 0,
    "reward_skin": [
      30659904,
      30659902,
      30659903
    ]
  },
  "30659905": {
    "id": 30659905,
    "name": "Mega Bow",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 1000,
    "passive_group": 0,
    "reward_skin": []
  },
  "30660101": {
    "id": 30660101,
    "name": "Ýdalir",
    "weapon_type": 6,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017031,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017032,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 801,
    "passive_group": 0,
    "reward_skin": [
      30660103
    ]
  },
  "30660104": {
    "id": 30660104,
    "name": "Valkyrie's Hellfire",
    "weapon_type": 6,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023011,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023012,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1101,
    "passive_group": 0,
    "reward_skin": []
  },
  "30660201": {
    "id": 30660201,
    "name": "Ame no Hajiyumi",
    "weapon_type": 6,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017011,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017012,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 802,
    "passive_group": 0,
    "reward_skin": [
      30660203
    ]
  },
  "30660204": {
    "id": 30660204,
    "name": "Sapphire Mercurius",
    "weapon_type": 6,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023021,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023022,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1102,
    "passive_group": 0,
    "reward_skin": []
  },
  "30660301": {
    "id": 30660301,
    "name": "Failnaught",
    "weapon_type": 6,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017021,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017022,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 803,
    "passive_group": 0,
    "reward_skin": [
      30660303
    ]
  },
  "30660304": {
    "id": 30660304,
    "name": "Jormungand's Wrath",
    "weapon_type": 6,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023031,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023032,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1103,
    "passive_group": 0,
    "reward_skin": []
  },
  "30660401": {
    "id": 30660401,
    "name": "Tathlum",
    "weapon_type": 6,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017051,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017052,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 804,
    "passive_group": 0,
    "reward_skin": [
      30660403
    ]
  },
  "30660404": {
    "id": 30660404,
    "name": "Jupiter's Shimmer",
    "weapon_type": 6,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023041,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023042,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1104,
    "passive_group": 0,
    "reward_skin": []
  },
  "30660501": {
    "id": 30660501,
    "name": "Longshe Gong",
    "weapon_type": 6,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017041,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017042,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 805,
    "passive_group": 0,
    "reward_skin": [
      30660503
    ]
  },
  "30660504": {
    "id": 30660504,
    "name": "Nightmare Prophecy",
    "weapon_type": 6,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023051,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023052,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1105,
    "passive_group": 0,
    "reward_skin": []
  },
  "30719901": {
    "id": 30719901,
    "name": "Battleworn Wand",
    "weapon_type": 7,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "30739901": {
    "id": 30739901,
    "name": "Wizard's Rod",
    "weapon_type": 7,
    "rarity": 3,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2500
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 1
      }
    ],
    "upgrade_group": 170,
    "passive_group": 0,
    "reward_skin": [
      30739902,
      30739903
    ]
  },
  "30749901": {
    "id": 30749901,
    "name": "Latchkey",
    "weapon_type": 7,
    "rarity": 4,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 4000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      }
    ],
    "upgrade_group": 270,
    "passive_group": 0,
    "reward_skin": [
      30749902,
      30749903
    ]
  },
  "30750101": {
    "id": 30750101,
    "name": "Terranigmus",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010011,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005071,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 471,
    "passive_group": 0,
    "reward_skin": [
      30730101,
      30740101
    ]
  },
  "30750102": {
    "id": 30750102,
    "name": "Scepter of Infinite Fire",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204015001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204015002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001012,
        "quantity": 8
      }
    ],
    "upgrade_group": 571,
    "passive_group": 10701,
    "reward_skin": []
  },
  "30750104": {
    "id": 30750104,
    "name": "Infernoblaze",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002012,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008011,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010011,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 701,
    "passive_group": 0,
    "reward_skin": []
  },
  "30750107": {
    "id": 30750107,
    "name": "Chimeratech Archmage",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204022001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204022002,
        "quantity": 2
      }
    ],
    "upgrade_group": 671,
    "passive_group": 0,
    "reward_skin": []
  },
  "30750202": {
    "id": 30750202,
    "name": "Ocean Monarch",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010021,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005071,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 472,
    "passive_group": 0,
    "reward_skin": [
      30730201,
      30740201
    ]
  },
  "30750204": {
    "id": 30750204,
    "name": "Spirit Breaker",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 35
      },
      {
        "entity_type": 8,
        "entity_id": 204001002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001022,
        "quantity": 8
      }
    ],
    "upgrade_group": 572,
    "passive_group": 10702,
    "reward_skin": []
  },
  "30750206": {
    "id": 30750206,
    "name": "Aquatic Spiral",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002022,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008021,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010021,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 702,
    "passive_group": 0,
    "reward_skin": []
  },
  "30750208": {
    "id": 30750208,
    "name": "Chimeratech Hurdia",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204031001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204031002,
        "quantity": 2
      }
    ],
    "upgrade_group": 672,
    "passive_group": 0,
    "reward_skin": []
  },
  "30750301": {
    "id": 30750301,
    "name": "Phytalmios",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010031,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005071,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 473,
    "passive_group": 0,
    "reward_skin": [
      30730301,
      30740301
    ]
  },
  "30750303": {
    "id": 30750303,
    "name": "Typhoon's Rule",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204009001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204009002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001032,
        "quantity": 8
      }
    ],
    "upgrade_group": 573,
    "passive_group": 10703,
    "reward_skin": []
  },
  "30750305": {
    "id": 30750305,
    "name": "Grand Tempest",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002032,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008031,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010031,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 703,
    "passive_group": 0,
    "reward_skin": []
  },
  "30750307": {
    "id": 30750307,
    "name": "Chimeratech Frankin",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204028001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204028002,
        "quantity": 2
      }
    ],
    "upgrade_group": 673,
    "passive_group": 0,
    "reward_skin": []
  },
  "30750401": {
    "id": 30750401,
    "name": "Twilight Shimmer",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010041,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005071,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 474,
    "passive_group": 0,
    "reward_skin": [
      30730401,
      30740402
    ]
  },
  "30750404": {
    "id": 30750404,
    "name": "Primeval Thunder",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002042,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008041,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010041,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 704,
    "passive_group": 0,
    "reward_skin": []
  },
  "30750406": {
    "id": 30750406,
    "name": "Worldshaker",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204006001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204019001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204019002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001042,
        "quantity": 8
      }
    ],
    "upgrade_group": 574,
    "passive_group": 10704,
    "reward_skin": []
  },
  "30750409": {
    "id": 30750409,
    "name": "Chimeratech Betelgeuse",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204032001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204032002,
        "quantity": 2
      }
    ],
    "upgrade_group": 674,
    "passive_group": 0,
    "reward_skin": []
  },
  "30750501": {
    "id": 30750501,
    "name": "Underworld Despair",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010051,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005071,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 475,
    "passive_group": 0,
    "reward_skin": [
      30730501,
      30740501
    ]
  },
  "30750503": {
    "id": 30750503,
    "name": "Dirge of Desperation",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204006001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204006002,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204006003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001052,
        "quantity": 8
      }
    ],
    "upgrade_group": 575,
    "passive_group": 10705,
    "reward_skin": []
  },
  "30750504": {
    "id": 30750504,
    "name": "Darkbinder",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002052,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008051,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010051,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 705,
    "passive_group": 0,
    "reward_skin": []
  },
  "30750508": {
    "id": 30750508,
    "name": "Chimeratech Oratorio",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204024001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204024002,
        "quantity": 2
      }
    ],
    "upgrade_group": 675,
    "passive_group": 0,
    "reward_skin": []
  },
  "30759901": {
    "id": 30759901,
    "name": "Wand of the Torrent",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 25000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202003003,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202005071,
        "quantity": 1
      }
    ],
    "upgrade_group": 370,
    "passive_group": 0,
    "reward_skin": [
      30759903,
      30759902
    ]
  },
  "30759904": {
    "id": 30759904,
    "name": "Mega Wand",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 1000,
    "passive_group": 0,
    "reward_skin": []
  },
  "30760101": {
    "id": 30760101,
    "name": "Brísingr",
    "weapon_type": 7,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017031,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017032,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 801,
    "passive_group": 0,
    "reward_skin": [
      30760103
    ]
  },
  "30760104": {
    "id": 30760104,
    "name": "Hellblaze",
    "weapon_type": 7,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023011,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023012,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1101,
    "passive_group": 0,
    "reward_skin": []
  },
  "30760201": {
    "id": 30760201,
    "name": "Omizununo",
    "weapon_type": 7,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017011,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017012,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 802,
    "passive_group": 0,
    "reward_skin": [
      30760203
    ]
  },
  "30760204": {
    "id": 30760204,
    "name": "Aqueous Prison",
    "weapon_type": 7,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023021,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023022,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1102,
    "passive_group": 0,
    "reward_skin": []
  },
  "30760301": {
    "id": 30760301,
    "name": "Camelot",
    "weapon_type": 7,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017021,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017022,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 803,
    "passive_group": 0,
    "reward_skin": [
      30760303
    ]
  },
  "30760304": {
    "id": 30760304,
    "name": "Storm Chaser",
    "weapon_type": 7,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023031,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023032,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1103,
    "passive_group": 0,
    "reward_skin": []
  },
  "30760401": {
    "id": 30760401,
    "name": "Brionac",
    "weapon_type": 7,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017051,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017052,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 804,
    "passive_group": 0,
    "reward_skin": [
      30760403
    ]
  },
  "30760404": {
    "id": 30760404,
    "name": "Electron Burst",
    "weapon_type": 7,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023041,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023042,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1104,
    "passive_group": 0,
    "reward_skin": []
  },
  "30760501": {
    "id": 30760501,
    "name": "Jiu Ci",
    "weapon_type": 7,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017041,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017042,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 805,
    "passive_group": 0,
    "reward_skin": [
      30760503
    ]
  },
  "30760504": {
    "id": 30760504,
    "name": "Umbral Chaser",
    "weapon_type": 7,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023051,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023052,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1105,
    "passive_group": 0,
    "reward_skin": []
  },
  "30819901": {
    "id": 30819901,
    "name": "Battleworn Staff",
    "weapon_type": 8,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "30839901": {
    "id": 30839901,
    "name": "Staff of Grace",
    "weapon_type": 8,
    "rarity": 3,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2500
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 1
      }
    ],
    "upgrade_group": 170,
    "passive_group": 0,
    "reward_skin": [
      30839903,
      30839902
    ]
  },
  "30849901": {
    "id": 30849901,
    "name": "Staff of Life",
    "weapon_type": 8,
    "rarity": 4,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 4000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      }
    ],
    "upgrade_group": 270,
    "passive_group": 0,
    "reward_skin": [
      30849903,
      30849902
    ]
  },
  "30850101": {
    "id": 30850101,
    "name": "Staff of the Red Emperor",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010011,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005081,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 481,
    "passive_group": 0,
    "reward_skin": [
      30830101,
      30840101
    ]
  },
  "30850102": {
    "id": 30850102,
    "name": "Endless Demise",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204015001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204015002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001012,
        "quantity": 8
      }
    ],
    "upgrade_group": 571,
    "passive_group": 10801,
    "reward_skin": []
  },
  "30850104": {
    "id": 30850104,
    "name": "Blazegambol",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002012,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008011,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010011,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 701,
    "passive_group": 0,
    "reward_skin": []
  },
  "30850107": {
    "id": 30850107,
    "name": "Chimeratech Cardinal",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204022001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204022002,
        "quantity": 2
      }
    ],
    "upgrade_group": 671,
    "passive_group": 0,
    "reward_skin": []
  },
  "30850201": {
    "id": 30850201,
    "name": "Bracing Waters",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010021,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005081,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 482,
    "passive_group": 0,
    "reward_skin": [
      30830201,
      30840201
    ]
  },
  "30850202": {
    "id": 30850202,
    "name": "Endless Azure Core",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 35
      },
      {
        "entity_type": 8,
        "entity_id": 204001002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001022,
        "quantity": 8
      }
    ],
    "upgrade_group": 572,
    "passive_group": 10802,
    "reward_skin": []
  },
  "30850204": {
    "id": 30850204,
    "name": "Ocean's Embrace",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002022,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008021,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010021,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 702,
    "passive_group": 0,
    "reward_skin": []
  },
  "30850208": {
    "id": 30850208,
    "name": "Chimeratech Metaldetes",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204031001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204031002,
        "quantity": 2
      }
    ],
    "upgrade_group": 672,
    "passive_group": 0,
    "reward_skin": []
  },
  "30850301": {
    "id": 30850301,
    "name": "Ancient Mage's Windcane",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010031,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005081,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 483,
    "passive_group": 0,
    "reward_skin": [
      30830301,
      30840301
    ]
  },
  "30850303": {
    "id": 30850303,
    "name": "Skypainter Staff",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204001001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204009001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204009002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001032,
        "quantity": 8
      }
    ],
    "upgrade_group": 573,
    "passive_group": 10803,
    "reward_skin": []
  },
  "30850304": {
    "id": 30850304,
    "name": "Stormruler",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002032,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008031,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010031,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 703,
    "passive_group": 0,
    "reward_skin": []
  },
  "30850307": {
    "id": 30850307,
    "name": "Chimeratech Marjoram",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204028001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204028002,
        "quantity": 2
      }
    ],
    "upgrade_group": 673,
    "passive_group": 0,
    "reward_skin": []
  },
  "30850401": {
    "id": 30850401,
    "name": "Light of Judgment",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010041,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005081,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 484,
    "passive_group": 0,
    "reward_skin": [
      30830401,
      30840401
    ]
  },
  "30850404": {
    "id": 30850404,
    "name": "Heavensneer",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002042,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008041,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010041,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 704,
    "passive_group": 0,
    "reward_skin": []
  },
  "30850406": {
    "id": 30850406,
    "name": "Dominus of Ever",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204006001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204019001,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204019002,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001042,
        "quantity": 8
      }
    ],
    "upgrade_group": 574,
    "passive_group": 10804,
    "reward_skin": []
  },
  "30850409": {
    "id": 30850409,
    "name": "Chimeratech Procyon",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204032001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204032002,
        "quantity": 2
      }
    ],
    "upgrade_group": 674,
    "passive_group": 0,
    "reward_skin": []
  },
  "30850501": {
    "id": 30850501,
    "name": "Caduceus",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010051,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005081,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 485,
    "passive_group": 0,
    "reward_skin": [
      30830501,
      30840501
    ]
  },
  "30850502": {
    "id": 30850502,
    "name": "Aria of Lamentation",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 430
      },
      {
        "entity_type": 8,
        "entity_id": 204006001,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 204006002,
        "quantity": 7
      },
      {
        "entity_type": 8,
        "entity_id": 204006003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 104001052,
        "quantity": 8
      }
    ],
    "upgrade_group": 575,
    "passive_group": 10805,
    "reward_skin": []
  },
  "30850503": {
    "id": 30850503,
    "name": "Dark Hunger",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002052,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008051,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010051,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 705,
    "passive_group": 0,
    "reward_skin": []
  },
  "30850507": {
    "id": 30850507,
    "name": "Chimeratech Coda",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204024001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204024002,
        "quantity": 2
      }
    ],
    "upgrade_group": 675,
    "passive_group": 0,
    "reward_skin": []
  },
  "30859901": {
    "id": 30859901,
    "name": "Cane of Soul's Repose",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 25000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202003003,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202005081,
        "quantity": 1
      }
    ],
    "upgrade_group": 380,
    "passive_group": 0,
    "reward_skin": [
      30859902,
      30859903
    ]
  },
  "30859904": {
    "id": 30859904,
    "name": "Mega Staff",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 1000,
    "passive_group": 0,
    "reward_skin": []
  },
  "30860101": {
    "id": 30860101,
    "name": "Gjallarhorn",
    "weapon_type": 8,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017031,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017032,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 801,
    "passive_group": 0,
    "reward_skin": [
      30860103
    ]
  },
  "30860104": {
    "id": 30860104,
    "name": "Flamerollick",
    "weapon_type": 8,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023011,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023012,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1101,
    "passive_group": 0,
    "reward_skin": []
  },
  "30860201": {
    "id": 30860201,
    "name": "Kunado",
    "weapon_type": 8,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017011,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017012,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 802,
    "passive_group": 0,
    "reward_skin": [
      30860203
    ]
  },
  "30860204": {
    "id": 30860204,
    "name": "Ruler of the Jeweled Tide",
    "weapon_type": 8,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023021,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023022,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1102,
    "passive_group": 0,
    "reward_skin": []
  },
  "30860301": {
    "id": 30860301,
    "name": "Avalon",
    "weapon_type": 8,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017021,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017022,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 803,
    "passive_group": 0,
    "reward_skin": [
      30860303
    ]
  },
  "30860304": {
    "id": 30860304,
    "name": "Squallruler",
    "weapon_type": 8,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023031,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023032,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1103,
    "passive_group": 0,
    "reward_skin": []
  },
  "30860401": {
    "id": 30860401,
    "name": "Del Frith",
    "weapon_type": 8,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017051,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017052,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 804,
    "passive_group": 0,
    "reward_skin": [
      30860403
    ]
  },
  "30860404": {
    "id": 30860404,
    "name": "Cosmic Ruler",
    "weapon_type": 8,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023041,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023042,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1104,
    "passive_group": 0,
    "reward_skin": []
  },
  "30860501": {
    "id": 30860501,
    "name": "Li Zhang",
    "weapon_type": 8,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017041,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017042,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 805,
    "passive_group": 0,
    "reward_skin": [
      30860503
    ]
  },
  "30860504": {
    "id": 30860504,
    "name": "Consuming Darkness",
    "weapon_type": 8,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023051,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023052,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1105,
    "passive_group": 0,
    "reward_skin": []
  },
  "30919901": {
    "id": 30919901,
    "name": "Battleworn Manacaster",
    "weapon_type": 9,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "30949901": {
    "id": 30949901,
    "name": "Antique Manacaster",
    "weapon_type": 9,
    "rarity": 4,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 4000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      }
    ],
    "upgrade_group": 290,
    "passive_group": 0,
    "reward_skin": [
      30949902
    ]
  },
  "30950102": {
    "id": 30950102,
    "name": "Chanzelian Caster Mk. 65",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010011,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005091,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 491,
    "passive_group": 10901,
    "reward_skin": [
      30940402
    ]
  },
  "30950103": {
    "id": 30950103,
    "name": "Crimson Trigger",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002012,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008011,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010011,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 701,
    "passive_group": 0,
    "reward_skin": []
  },
  "30950110": {
    "id": 30950110,
    "name": "Chimeratech Gunner",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204022001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204022002,
        "quantity": 2
      }
    ],
    "upgrade_group": 671,
    "passive_group": 0,
    "reward_skin": []
  },
  "30950202": {
    "id": 30950202,
    "name": "Chanzelian Caster Mk. 72",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010021,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005091,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 492,
    "passive_group": 10902,
    "reward_skin": [
      30940202
    ]
  },
  "30950203": {
    "id": 30950203,
    "name": "Aqua Trigger",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002022,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008021,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010021,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 702,
    "passive_group": 0,
    "reward_skin": []
  },
  "30950210": {
    "id": 30950210,
    "name": "Chimeratech Marella",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204031001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204031002,
        "quantity": 2
      }
    ],
    "upgrade_group": 672,
    "passive_group": 0,
    "reward_skin": []
  },
  "30950302": {
    "id": 30950302,
    "name": "Chanzelian Caster Mk. 21",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010031,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005091,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 493,
    "passive_group": 10903,
    "reward_skin": [
      30940302
    ]
  },
  "30950303": {
    "id": 30950303,
    "name": "Tempest Trigger",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002032,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008031,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010031,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 703,
    "passive_group": 0,
    "reward_skin": []
  },
  "30950310": {
    "id": 30950310,
    "name": "Chimeratech Fennel",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204028001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204028002,
        "quantity": 2
      }
    ],
    "upgrade_group": 673,
    "passive_group": 0,
    "reward_skin": []
  },
  "30950402": {
    "id": 30950402,
    "name": "Chanzelian Caster Mk. 62",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010041,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005091,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 494,
    "passive_group": 10904,
    "reward_skin": [
      30940102
    ]
  },
  "30950403": {
    "id": 30950403,
    "name": "Thunder Trigger",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002042,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008041,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010041,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 704,
    "passive_group": 0,
    "reward_skin": []
  },
  "30950410": {
    "id": 30950410,
    "name": "Chimeratech Al Nasr",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204032001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204032002,
        "quantity": 2
      }
    ],
    "upgrade_group": 674,
    "passive_group": 0,
    "reward_skin": []
  },
  "30950502": {
    "id": 30950502,
    "name": "Chanzelian Caster Mk. 81",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 80000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201010051,
        "quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 155
      },
      {
        "entity_type": 8,
        "entity_id": 202005091,
        "quantity": 225
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 7
      }
    ],
    "upgrade_group": 495,
    "passive_group": 10905,
    "reward_skin": [
      30940502
    ]
  },
  "30950503": {
    "id": 30950503,
    "name": "Curse Trigger",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 1200000
      },
      {
        "entity_type": 8,
        "entity_id": 201002052,
        "quantity": 25
      },
      {
        "entity_type": 8,
        "entity_id": 202008051,
        "quantity": 18
      },
      {
        "entity_type": 8,
        "entity_id": 202010051,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202004005,
        "quantity": 1
      }
    ],
    "upgrade_group": 705,
    "passive_group": 0,
    "reward_skin": []
  },
  "30950510": {
    "id": 30950510,
    "name": "Chimeratech Cantata",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 400000
      },
      {
        "entity_type": 8,
        "entity_id": 202003001,
        "quantity": 5
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 204024001,
        "quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 204024002,
        "quantity": 2
      }
    ],
    "upgrade_group": 675,
    "passive_group": 0,
    "reward_skin": []
  },
  "30959901": {
    "id": 30959901,
    "name": "Chanzelian Caster",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 25000
      },
      {
        "entity_type": 8,
        "entity_id": 202003002,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202003003,
        "quantity": 3
      },
      {
        "entity_type": 8,
        "entity_id": 202004003,
        "quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202005091,
        "quantity": 1
      }
    ],
    "upgrade_group": 390,
    "passive_group": 0,
    "reward_skin": [
      30959902
    ]
  },
  "30960101": {
    "id": 30960101,
    "name": "Draupnir",
    "weapon_type": 9,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017031,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017032,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 801,
    "passive_group": 0,
    "reward_skin": [
      30960103
    ]
  },
  "30960104": {
    "id": 30960104,
    "name": "Big Bang Trigger",
    "weapon_type": 9,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023011,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023012,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1101,
    "passive_group": 0,
    "reward_skin": []
  },
  "30960201": {
    "id": 30960201,
    "name": "Ame no Torifune",
    "weapon_type": 9,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017011,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017012,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 802,
    "passive_group": 0,
    "reward_skin": [
      30960203
    ]
  },
  "30960204": {
    "id": 30960204,
    "name": "Aquamarine Trigger",
    "weapon_type": 9,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023021,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023022,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1102,
    "passive_group": 0,
    "reward_skin": []
  },
  "30960301": {
    "id": 30960301,
    "name": "Gallatin",
    "weapon_type": 9,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017021,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017022,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 803,
    "passive_group": 0,
    "reward_skin": [
      30960303
    ]
  },
  "30960304": {
    "id": 30960304,
    "name": "Cyclone Trigger",
    "weapon_type": 9,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023031,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023032,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1103,
    "passive_group": 0,
    "reward_skin": []
  },
  "30960401": {
    "id": 30960401,
    "name": "Gae Assail",
    "weapon_type": 9,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017051,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017052,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 804,
    "passive_group": 0,
    "reward_skin": [
      30960403
    ]
  },
  "30960404": {
    "id": 30960404,
    "name": "Divine Trigger",
    "weapon_type": 9,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023041,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023042,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1104,
    "passive_group": 0,
    "reward_skin": []
  },
  "30960501": {
    "id": 30960501,
    "name": "Wanli Qi Yunyan",
    "weapon_type": 9,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201017041,
        "quantity": 40
      },
      {
        "entity_type": 8,
        "entity_id": 201017042,
        "quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 805,
    "passive_group": 0,
    "reward_skin": [
      30960503
    ]
  },
  "30960504": {
    "id": 30960504,
    "name": "Dusk Trigger",
    "weapon_type": 9,
    "rarity": 6,
    "craft_cost": [
      {
        "entity_type": 4,
        "entity_id": 0,
        "quantity": 2000000
      },
      {
        "entity_type": 8,
        "entity_id": 201023051,
        "quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201023052,
        "quantity": 15
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "quantity": 1
      }
    ],
    "upgrade_group": 1105,
    "passive_group": 0,
    "reward_skin": []
  }/*,
  "39800001": {
    "id": 39800001,
    "name": "",
    "weapon_type": 1,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39800002": {
    "id": 39800002,
    "name": "",
    "weapon_type": 2,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39800003": {
    "id": 39800003,
    "name": "",
    "weapon_type": 3,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39800004": {
    "id": 39800004,
    "name": "",
    "weapon_type": 4,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39800005": {
    "id": 39800005,
    "name": "",
    "weapon_type": 5,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39800006": {
    "id": 39800006,
    "name": "",
    "weapon_type": 6,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39800007": {
    "id": 39800007,
    "name": "",
    "weapon_type": 7,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39800008": {
    "id": 39800008,
    "name": "",
    "weapon_type": 8,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39800009": {
    "id": 39800009,
    "name": "",
    "weapon_type": 9,
    "rarity": 5,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900001": {
    "id": 39900001,
    "name": "",
    "weapon_type": 8,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900002": {
    "id": 39900002,
    "name": "",
    "weapon_type": 4,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900003": {
    "id": 39900003,
    "name": "",
    "weapon_type": 2,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900004": {
    "id": 39900004,
    "name": "",
    "weapon_type": 4,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900005": {
    "id": 39900005,
    "name": "",
    "weapon_type": 2,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900006": {
    "id": 39900006,
    "name": "",
    "weapon_type": 7,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900007": {
    "id": 39900007,
    "name": "",
    "weapon_type": 1,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900019": {
    "id": 39900019,
    "name": "",
    "weapon_type": 5,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900020": {
    "id": 39900020,
    "name": "",
    "weapon_type": 2,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900021": {
    "id": 39900021,
    "name": "",
    "weapon_type": 1,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900022": {
    "id": 39900022,
    "name": "",
    "weapon_type": 2,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900023": {
    "id": 39900023,
    "name": "",
    "weapon_type": 6,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900024": {
    "id": 39900024,
    "name": "",
    "weapon_type": 6,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900025": {
    "id": 39900025,
    "name": "",
    "weapon_type": 1,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900026": {
    "id": 39900026,
    "name": "",
    "weapon_type": 5,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900027": {
    "id": 39900027,
    "name": "",
    "weapon_type": 6,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900028": {
    "id": 39900028,
    "name": "",
    "weapon_type": 1,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900029": {
    "id": 39900029,
    "name": "",
    "weapon_type": 1,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900030": {
    "id": 39900030,
    "name": "",
    "weapon_type": 2,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900031": {
    "id": 39900031,
    "name": "",
    "weapon_type": 1,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900032": {
    "id": 39900032,
    "name": "",
    "weapon_type": 2,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900033": {
    "id": 39900033,
    "name": "",
    "weapon_type": 3,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900034": {
    "id": 39900034,
    "name": "",
    "weapon_type": 4,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900035": {
    "id": 39900035,
    "name": "",
    "weapon_type": 5,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900036": {
    "id": 39900036,
    "name": "",
    "weapon_type": 6,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900037": {
    "id": 39900037,
    "name": "",
    "weapon_type": 7,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900038": {
    "id": 39900038,
    "name": "",
    "weapon_type": 8,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900039": {
    "id": 39900039,
    "name": "",
    "weapon_type": 6,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900040": {
    "id": 39900040,
    "name": "",
    "weapon_type": 7,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900041": {
    "id": 39900041,
    "name": "",
    "weapon_type": 7,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900042": {
    "id": 39900042,
    "name": "",
    "weapon_type": 1,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900043": {
    "id": 39900043,
    "name": "",
    "weapon_type": 1,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900044": {
    "id": 39900044,
    "name": "",
    "weapon_type": 3,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900045": {
    "id": 39900045,
    "name": "",
    "weapon_type": 3,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900046": {
    "id": 39900046,
    "name": "",
    "weapon_type": 5,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900047": {
    "id": 39900047,
    "name": "",
    "weapon_type": 4,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900048": {
    "id": 39900048,
    "name": "",
    "weapon_type": 3,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900049": {
    "id": 39900049,
    "name": "",
    "weapon_type": 5,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900050": {
    "id": 39900050,
    "name": "",
    "weapon_type": 3,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  },
  "39900051": {
    "id": 39900051,
    "name": "",
    "weapon_type": 6,
    "rarity": 1,
    "craft_cost": [],
    "upgrade_group": 0,
    "passive_group": 0,
    "reward_skin": []
  }*/
}
var WeaponSkinInfoMap = {
    "30119901": {
        "id": 30119901,
        "name": "Battleworn Sword (Skin)"
    },
    "30129901": {
        "id": 30129901,
        "name": "Soldier's Brand (Skin)"
    },
    "30130102": {
        "id": 30130102,
        "name": "Blazing Edge (Skin)"
    },
    "30130201": {
        "id": 30130201,
        "name": "Rainbreaker (Skin)"
    },
    "30130302": {
        "id": 30130302,
        "name": "Grassrunner (Skin)"
    },
    "30130401": {
        "id": 30130401,
        "name": "Featherblade (Skin)"
    },
    "30130501": {
        "id": 30130501,
        "name": "Blood Price (Skin)"
    },
    "30139901": {
        "id": 30139901,
        "name": "Knight's Sword (Skin)"
    },
    "30139902": {
        "id": 30139902,
        "name": "Ensorcelled Sword (Skin)"
    },
    "30139903": {
        "id": 30139903,
        "name": "Broadedge (Skin)"
    },
    "30140104": {
        "id": 30140104,
        "name": "Crimson Cry (Skin)"
    },
    "30140105": {
        "id": 30140105,
        "name": "Molten Ingot (Skin)"
    },
    "30140109": {
        "id": 30140109,
        "name": "Crimson Pyre (Skin)"
    },
    "30140201": {
        "id": 30140201,
        "name": "Mercurius (Skin)"
    },
    "30140202": {
        "id": 30140202,
        "name": "Fervent Frost (Skin)"
    },
    "30140203": {
        "id": 30140203,
        "name": "Blizzard Ingot (Skin)"
    },
    "30140301": {
        "id": 30140301,
        "name": "Wingblade (Skin)"
    },
    "30140302": {
        "id": 30140302,
        "name": "Tempest Ravager (Skin)"
    },
    "30140304": {
        "id": 30140304,
        "name": "Tornado Ingot (Skin)"
    },
    "30140401": {
        "id": 30140401,
        "name": "Astral Edge (Skin)"
    },
    "30140403": {
        "id": 30140403,
        "name": "Plasma Ingot (Skin)"
    },
    "30140404": {
        "id": 30140404,
        "name": "Abandoned Roar (Skin)"
    },
    "30140501": {
        "id": 30140501,
        "name": "Dark Dementia (Skin)"
    },
    "30140502": {
        "id": 30140502,
        "name": "Doomfang (Skin)"
    },
    "30140503": {
        "id": 30140503,
        "name": "Darkness Ingot (Skin)"
    },
    "30149901": {
        "id": 30149901,
        "name": "Knights' Grace (Skin)"
    },
    "30149902": {
        "id": 30149902,
        "name": "Blade of Glory (Skin)"
    },
    "30149903": {
        "id": 30149903,
        "name": "Gilda Sword (Skin)"
    },
    "30150101": {
        "id": 30150101,
        "name": "Levatein (Skin)"
    },
    "30150102": {
        "id": 30150102,
        "name": "Inferno Apogee (Skin)"
    },
    "30150103": {
        "id": 30150103,
        "name": "Blazing Judgment (Skin)"
    },
    "30150107": {
        "id": 30150107,
        "name": "Absolute Crimson (Skin)"
    },
    "30150109": {
        "id": 30150109,
        "name": "Flaming Savagetail (Skin)"
    },
    "30150110": {
        "id": 30150110,
        "name": "Sword of Surging Flame (Skin)"
    },
    "30150111": {
        "id": 30150111,
        "name": "Chimeratech Commander (Skin)"
    },
    "30150113": {
        "id": 30150113,
        "name": "Rathalos Firesword (Skin)"
    },
    "30150114": {
        "id": 30150114,
        "name": "Falchion (Skin)"
    },
    "30150115": {
        "id": 30150115,
        "name": "Sword of Raging Souls (Skin)"
    },
    "30150116": {
        "id": 30150116,
        "name": "Ascendant Edge (Skin)"
    },
    "30150119": {
        "id": 30150119,
        "name": "Zealous Armament (Skin)"
    },
    "30150202": {
        "id": 30150202,
        "name": "Eoantide (Skin)"
    },
    "30150203": {
        "id": 30150203,
        "name": "Judge of Oceans (Skin)"
    },
    "30150204": {
        "id": 30150204,
        "name": "Icy Absolution (Skin)"
    },
    "30150208": {
        "id": 30150208,
        "name": "Absolute Aqua (Skin)"
    },
    "30150210": {
        "id": 30150210,
        "name": "Raging Aquatail (Skin)"
    },
    "30150211": {
        "id": 30150211,
        "name": "Eternal Metempsychosis (Skin)"
    },
    "30150212": {
        "id": 30150212,
        "name": "Chimeratech Anomalocaris (Skin)"
    },
    "30150214": {
        "id": 30150214,
        "name": "Fearfrost Soulsword (Skin)"
    },
    "30150216": {
        "id": 30150216,
        "name": "Rhyse Sword (Skin)"
    },
    "30150219": {
        "id": 30150219,
        "name": "Wise Defender (Skin)"
    },
    "30150301": {
        "id": 30150301,
        "name": "Durandal (Skin)"
    },
    "30150302": {
        "id": 30150302,
        "name": "Hurricane Apogee (Skin)"
    },
    "30150303": {
        "id": 30150303,
        "name": "Roaring Weald (Skin)"
    },
    "30150307": {
        "id": 30150307,
        "name": "Absolute Tempest (Skin)"
    },
    "30150309": {
        "id": 30150309,
        "name": "Slaughtering Stormtail (Skin)"
    },
    "30150310": {
        "id": 30150310,
        "name": "Chimeratech Cypress (Skin)"
    },
    "30150312": {
        "id": 30150312,
        "name": "Cholergale (Skin)"
    },
    "30150313": {
        "id": 30150313,
        "name": "Twistwind Soulsword (Skin)"
    },
    "30150316": {
        "id": 30150316,
        "name": "Valor's Edge (Skin)"
    },
    "30150401": {
        "id": 30150401,
        "name": "Zex's End (Skin)"
    },
    "30150402": {
        "id": 30150402,
        "name": "Aureole Apogee (Skin)"
    },
    "30150403": {
        "id": 30150403,
        "name": "Fólkvangr (Skin)"
    },
    "30150404": {
        "id": 30150404,
        "name": "Glintbringer (Skin)"
    },
    "30150407": {
        "id": 30150407,
        "name": "Radiant Dominion (Skin)"
    },
    "30150408": {
        "id": 30150408,
        "name": "Death Aeon (Skin)"
    },
    "30150410": {
        "id": 30150410,
        "name": "Absolute Lightning (Skin)"
    },
    "30150412": {
        "id": 30150412,
        "name": "Radiant Lighttail (Skin)"
    },
    "30150413": {
        "id": 30150413,
        "name": "Heavenshaker Soulsword (Skin)"
    },
    "30150414": {
        "id": 30150414,
        "name": "Chimeratech Sirius (Skin)"
    },
    "30150416": {
        "id": 30150416,
        "name": "Dragalia (Skin)"
    },
    "30150501": {
        "id": 30150501,
        "name": "Dáinsleif (Skin)"
    },
    "30150502": {
        "id": 30150502,
        "name": "Abyssbringer (Skin)"
    },
    "30150503": {
        "id": 30150503,
        "name": "Absolute Hex (Skin)"
    },
    "30150508": {
        "id": 30150508,
        "name": "Prevailing Evil (Skin)"
    },
    "30150509": {
        "id": 30150509,
        "name": "Virulent Shadowtail (Skin)"
    },
    "30150510": {
        "id": 30150510,
        "name": "Chimeratech Nocturne (Skin)"
    },
    "30150512": {
        "id": 30150512,
        "name": "Stained Soulsword (Skin)"
    },
    "30159901": {
        "id": 30159901,
        "name": "Hero's Sword (Skin)"
    },
    "30159902": {
        "id": 30159902,
        "name": "Hauteclaire (Skin)"
    },
    "30159903": {
        "id": 30159903,
        "name": "Gram (Skin)"
    },
    "30159904": {
        "id": 30159904,
        "name": "Lucky Hanetsuki Paddle (Skin)"
    },
    "30159905": {
        "id": 30159905,
        "name": "Mega Sword (Skin)"
    },
    "30159906": {
        "id": 30159906,
        "name": "Triumphal Breamblade (Skin)"
    },
    "30159907": {
        "id": 30159907,
        "name": "Fatalis Sword (Skin)"
    },
    "30159917": {
        "id": 30159917,
        "name": "Princess Sword (Skin)"
    },
    "30159918": {
        "id": 30159918,
        "name": "Bandit Sword (Skin)"
    },
    "30159921": {
        "id": 30159921,
        "name": "Burning Shamshir (Skin)"
    },
    "30159922": {
        "id": 30159922,
        "name": "Vio Rhyse Alberia (Skin)"
    },
    "30159950": {
        "id": 30159950,
        "name": "Bondforged Edge (Skin)"
    },
    "30160101": {
        "id": 30160101,
        "name": "Nothung (Skin)"
    },
    "30160103": {
        "id": 30160103,
        "name": "Nothung (Skin)"
    },
    "30160104": {
        "id": 30160104,
        "name": "Primal Crimson (Skin)"
    },
    "30160201": {
        "id": 30160201,
        "name": "Ame no Murakumo (Skin)"
    },
    "30160203": {
        "id": 30160203,
        "name": "Ame no Murakumo (Skin)"
    },
    "30160204": {
        "id": 30160204,
        "name": "Primal Aqua (Skin)"
    },
    "30160301": {
        "id": 30160301,
        "name": "Excalibur (Skin)"
    },
    "30160303": {
        "id": 30160303,
        "name": "Excalibur (Skin)"
    },
    "30160304": {
        "id": 30160304,
        "name": "Primal Tempest (Skin)"
    },
    "30160401": {
        "id": 30160401,
        "name": "Caladbolg (Skin)"
    },
    "30160403": {
        "id": 30160403,
        "name": "Caladbolg (Skin)"
    },
    "30160404": {
        "id": 30160404,
        "name": "Primal Lightning (Skin)"
    },
    "30160501": {
        "id": 30160501,
        "name": "Yitian Jian (Skin)"
    },
    "30160503": {
        "id": 30160503,
        "name": "Yitian Jian (Skin)"
    },
    "30160504": {
        "id": 30160504,
        "name": "Primal Hex (Skin)"
    },
    "30219901": {
        "id": 30219901,
        "name": "Battleworn Blade (Skin)"
    },
    "30230101": {
        "id": 30230101,
        "name": "Valkaheim Blade (Skin)"
    },
    "30230201": {
        "id": 30230201,
        "name": "Alighting Butterfly (Skin)"
    },
    "30230302": {
        "id": 30230302,
        "name": "Dragon Commander (Skin)"
    },
    "30230401": {
        "id": 30230401,
        "name": "Chanzelian Blade (Skin)"
    },
    "30230501": {
        "id": 30230501,
        "name": "Sanguine Rain (Skin)"
    },
    "30239901": {
        "id": 30239901,
        "name": "Subjugator (Skin)"
    },
    "30239902": {
        "id": 30239902,
        "name": "High Shamshir (Skin)"
    },
    "30239903": {
        "id": 30239903,
        "name": "Fusion Blade (Skin)"
    },
    "30240101": {
        "id": 30240101,
        "name": "Flametongue (Skin)"
    },
    "30240102": {
        "id": 30240102,
        "name": "Blazing Steel (Skin)"
    },
    "30240106": {
        "id": 30240106,
        "name": "Balefire Votive (Skin)"
    },
    "30240107": {
        "id": 30240107,
        "name": "Starcutter (Skin)"
    },
    "30240202": {
        "id": 30240202,
        "name": "Sousui (Skin)"
    },
    "30240203": {
        "id": 30240203,
        "name": "Obsidian Waterfall (Skin)"
    },
    "30240206": {
        "id": 30240206,
        "name": "Spumecutter (Skin)"
    },
    "30240208": {
        "id": 30240208,
        "name": "Crystalline Quietude (Skin)"
    },
    "30240301": {
        "id": 30240301,
        "name": "Tempest Blade (Skin)"
    },
    "30240303": {
        "id": 30240303,
        "name": "Verdurewind Cutter (Skin)"
    },
    "30240304": {
        "id": 30240304,
        "name": "Skycutter (Skin)"
    },
    "30240305": {
        "id": 30240305,
        "name": "Ignorant Bite (Skin)"
    },
    "30240402": {
        "id": 30240402,
        "name": "Thunderfang (Skin)"
    },
    "30240404": {
        "id": 30240404,
        "name": "Obsidian Scintillation (Skin)"
    },
    "30240405": {
        "id": 30240405,
        "name": "Glorycutter (Skin)"
    },
    "30240411": {
        "id": 30240411,
        "name": "Faerielight Flash (Skin)"
    },
    "30240501": {
        "id": 30240501,
        "name": "Ghizlam's Darkblade (Skin)"
    },
    "30240502": {
        "id": 30240502,
        "name": "Unwelcome Meeting (Skin)"
    },
    "30240503": {
        "id": 30240503,
        "name": "Gloomcutter (Skin)"
    },
    "30240504": {
        "id": 30240504,
        "name": "Dreadthirst (Skin)"
    },
    "30249901": {
        "id": 30249901,
        "name": "Guardian Seal (Skin)"
    },
    "30249902": {
        "id": 30249902,
        "name": "Iron Blade (Skin)"
    },
    "30249903": {
        "id": 30249903,
        "name": "Masamura's Pride (Skin)"
    },
    "30250101": {
        "id": 30250101,
        "name": "Heaven's Acuity (Skin)"
    },
    "30250102": {
        "id": 30250102,
        "name": "Skyrender (Skin)"
    },
    "30250103": {
        "id": 30250103,
        "name": "Ogreslayer Judgment (Skin)"
    },
    "30250104": {
        "id": 30250104,
        "name": "Blinding Conflagration (Skin)"
    },
    "30250106": {
        "id": 30250106,
        "name": "Great Direblade Kagachi (Skin)"
    },
    "30250107": {
        "id": 30250107,
        "name": "Liquefaction Blade (Skin)"
    },
    "30250108": {
        "id": 30250108,
        "name": "Chimeratech Lord (Skin)"
    },
    "30250110": {
        "id": 30250110,
        "name": "Wyvern Blade &quot;Maple&quot; (Skin)"
    },
    "30250111": {
        "id": 30250111,
        "name": "Furyblister (Skin)"
    },
    "30250116": {
        "id": 30250116,
        "name": "Sohaya no Tsurugi (Skin)"
    },
    "30250201": {
        "id": 30250201,
        "name": "Maar Oasis (Skin)"
    },
    "30250202": {
        "id": 30250202,
        "name": "Highwater Slicer (Skin)"
    },
    "30250203": {
        "id": 30250203,
        "name": "Seaspout Blade (Skin)"
    },
    "30250204": {
        "id": 30250204,
        "name": "Ruinous Torrent (Skin)"
    },
    "30250206": {
        "id": 30250206,
        "name": "Dark Direblade Mizuha (Skin)"
    },
    "30250207": {
        "id": 30250207,
        "name": "Shadeflood Waveblade (Skin)"
    },
    "30250208": {
        "id": 30250208,
        "name": "Gush Blade (Skin)"
    },
    "30250209": {
        "id": 30250209,
        "name": "Chimeratech Hadranax (Skin)"
    },
    "30250216": {
        "id": 30250216,
        "name": "Azure Resolve (Skin)"
    },
    "30250301": {
        "id": 30250301,
        "name": "Anemone (Skin)"
    },
    "30250302": {
        "id": 30250302,
        "name": "Heavenrend (Skin)"
    },
    "30250303": {
        "id": 30250303,
        "name": "Stormsquall Crash (Skin)"
    },
    "30250304": {
        "id": 30250304,
        "name": "Endless Horizon (Skin)"
    },
    "30250306": {
        "id": 30250306,
        "name": "Swift Direblade Hayate (Skin)"
    },
    "30250307": {
        "id": 30250307,
        "name": "Chimeratech Benzoin (Skin)"
    },
    "30250309": {
        "id": 30250309,
        "name": "Gustnado Blade (Skin)"
    },
    "30250310": {
        "id": 30250310,
        "name": "Galeshade Blade (Skin)"
    },
    "30250316": {
        "id": 30250316,
        "name": "Final Resistance (Skin)"
    },
    "30250401": {
        "id": 30250401,
        "name": "Heavenwing (Skin)"
    },
    "30250402": {
        "id": 30250402,
        "name": "Primal Thunder (Skin)"
    },
    "30250403": {
        "id": 30250403,
        "name": "Brightsheen (Skin)"
    },
    "30250404": {
        "id": 30250404,
        "name": "Brilliant Flash (Skin)"
    },
    "30250406": {
        "id": 30250406,
        "name": "Radiant Blade (Skin)"
    },
    "30250407": {
        "id": 30250407,
        "name": "Hollow Lightning (Skin)"
    },
    "30250408": {
        "id": 30250408,
        "name": "Shining Direblade Nozuchi (Skin)"
    },
    "30250409": {
        "id": 30250409,
        "name": "Shadegleam Flashblade (Skin)"
    },
    "30250410": {
        "id": 30250410,
        "name": "Chimeratech Canopus (Skin)"
    },
    "30250416": {
        "id": 30250416,
        "name": "Harmonic Resolve (Skin)"
    },
    "30250501": {
        "id": 30250501,
        "name": "Blackwing (Skin)"
    },
    "30250502": {
        "id": 30250502,
        "name": "Nightsky Ripper (Skin)"
    },
    "30250503": {
        "id": 30250503,
        "name": "True Abyss (Skin)"
    },
    "30250505": {
        "id": 30250505,
        "name": "Hollow Nightmare (Skin)"
    },
    "30250506": {
        "id": 30250506,
        "name": "Grim Direblade Yomotsu (Skin)"
    },
    "30250507": {
        "id": 30250507,
        "name": "Chimeratech Requiem (Skin)"
    },
    "30250509": {
        "id": 30250509,
        "name": "Blade of Fell Visions (Skin)"
    },
    "30259901": {
        "id": 30259901,
        "name": "Dane's Favor (Skin)"
    },
    "30259902": {
        "id": 30259902,
        "name": "Crimson Shade (Skin)"
    },
    "30259903": {
        "id": 30259903,
        "name": "Souleater (Skin)"
    },
    "30259904": {
        "id": 30259904,
        "name": "Villagelight (Skin)"
    },
    "30259905": {
        "id": 30259905,
        "name": "Mega Blade (Skin)"
    },
    "30259906": {
        "id": 30259906,
        "name": "Evilsbane Kadomatsu (Skin)"
    },
    "30259907": {
        "id": 30259907,
        "name": "Fatalis Xiphos (Skin)"
    },
    "30259921": {
        "id": 30259921,
        "name": "Sword of Perseverance (Skin)"
    },
    "30259922": {
        "id": 30259922,
        "name": "Rain of Sorrow (Skin)"
    },
    "30260101": {
        "id": 30260101,
        "name": "Tyrfing (Skin)"
    },
    "30260103": {
        "id": 30260103,
        "name": "Tyrfing (Skin)"
    },
    "30260104": {
        "id": 30260104,
        "name": "Raging Conflagration (Skin)"
    },
    "30260201": {
        "id": 30260201,
        "name": "Ame no Habakiri (Skin)"
    },
    "30260203": {
        "id": 30260203,
        "name": "Ame no Habakiri (Skin)"
    },
    "30260204": {
        "id": 30260204,
        "name": "Calamitous Torrent (Skin)"
    },
    "30260301": {
        "id": 30260301,
        "name": "Arondight (Skin)"
    },
    "30260303": {
        "id": 30260303,
        "name": "Arondight (Skin)"
    },
    "30260304": {
        "id": 30260304,
        "name": "Noble Horizon (Skin)"
    },
    "30260401": {
        "id": 30260401,
        "name": "Fragarach (Skin)"
    },
    "30260403": {
        "id": 30260403,
        "name": "Fragarach (Skin)"
    },
    "30260404": {
        "id": 30260404,
        "name": "Daunting Flash (Skin)"
    },
    "30260501": {
        "id": 30260501,
        "name": "Qixing Baodao (Skin)"
    },
    "30260503": {
        "id": 30260503,
        "name": "Qixing Baodao (Skin)"
    },
    "30260504": {
        "id": 30260504,
        "name": "Eternal Abyss (Skin)"
    },
    "30319901": {
        "id": 30319901,
        "name": "Battleworn Dagger (Skin)"
    },
    "30330101": {
        "id": 30330101,
        "name": "Cruel Kukri (Skin)"
    },
    "30330201": {
        "id": 30330201,
        "name": "Water Dagger (Skin)"
    },
    "30330301": {
        "id": 30330301,
        "name": "Stormspawn (Skin)"
    },
    "30330401": {
        "id": 30330401,
        "name": "Conscience (Skin)"
    },
    "30330501": {
        "id": 30330501,
        "name": "Assassin's Knife (Skin)"
    },
    "30339901": {
        "id": 30339901,
        "name": "Bejeweled Dagger (Skin)"
    },
    "30339902": {
        "id": 30339902,
        "name": "Gear Knife (Skin)"
    },
    "30339903": {
        "id": 30339903,
        "name": "Lover's Ally (Skin)"
    },
    "30340101": {
        "id": 30340101,
        "name": "Scarlet Talon (Skin)"
    },
    "30340102": {
        "id": 30340102,
        "name": "Sizzling Enoki Dagger (Skin)"
    },
    "30340103": {
        "id": 30340103,
        "name": "Big Boy of Justice (Skin)"
    },
    "30340106": {
        "id": 30340106,
        "name": "Conflagrant Ruby Dagger (Skin)"
    },
    "30340201": {
        "id": 30340201,
        "name": "Ultramarine Knife (Skin)"
    },
    "30340202": {
        "id": 30340202,
        "name": "Chilly Chanterelle Dagger (Skin)"
    },
    "30340204": {
        "id": 30340204,
        "name": "Big Boy of Prudence (Skin)"
    },
    "30340206": {
        "id": 30340206,
        "name": "Aqueous Sapphire Dagger (Skin)"
    },
    "30340208": {
        "id": 30340208,
        "name": "Wishing Knife (Skin)"
    },
    "30340301": {
        "id": 30340301,
        "name": "Queensflight (Skin)"
    },
    "30340302": {
        "id": 30340302,
        "name": "Stormy Shiitake Dagger (Skin)"
    },
    "30340303": {
        "id": 30340303,
        "name": "Big Boy of Fortitude (Skin)"
    },
    "30340305": {
        "id": 30340305,
        "name": "Zephyric Emerald Dagger (Skin)"
    },
    "30340401": {
        "id": 30340401,
        "name": "Nightbreaker (Skin)"
    },
    "30340402": {
        "id": 30340402,
        "name": "Big Boy of Temperance (Skin)"
    },
    "30340404": {
        "id": 30340404,
        "name": "Luminous Morel Dagger (Skin)"
    },
    "30340405": {
        "id": 30340405,
        "name": "Lucent Opal Dagger (Skin)"
    },
    "30340502": {
        "id": 30340502,
        "name": "Dark Sacrifice (Skin)"
    },
    "30340504": {
        "id": 30340504,
        "name": "Tenebrous Jet Dagger (Skin)"
    },
    "30340505": {
        "id": 30340505,
        "name": "Big Boy of Requiem (Skin)"
    },
    "30340507": {
        "id": 30340507,
        "name": "Sinister Skullcap Dagger (Skin)"
    },
    "30349901": {
        "id": 30349901,
        "name": "Hardbreaker (Skin)"
    },
    "30349902": {
        "id": 30349902,
        "name": "Wyrmfang (Skin)"
    },
    "30349903": {
        "id": 30349903,
        "name": "The Dreamer's Greatsword (Skin)"
    },
    "30350102": {
        "id": 30350102,
        "name": "Aeternal Flame (Skin)"
    },
    "30350103": {
        "id": 30350103,
        "name": "Vermillion Pain (Skin)"
    },
    "30350104": {
        "id": 30350104,
        "name": "Searing Stinger (Skin)"
    },
    "30350105": {
        "id": 30350105,
        "name": "Flameruler's Maw (Skin)"
    },
    "30350107": {
        "id": 30350107,
        "name": "Blazesin (Skin)"
    },
    "30350108": {
        "id": 30350108,
        "name": "Chimeratech Elite (Skin)"
    },
    "30350110": {
        "id": 30350110,
        "name": "Blazing Falchion (Skin)"
    },
    "30350111": {
        "id": 30350111,
        "name": "Blazing Necrom (Skin)"
    },
    "30350112": {
        "id": 30350112,
        "name": "Lavarush Edge (Skin)"
    },
    "30350116": {
        "id": 30350116,
        "name": "Faerie's Wish (Skin)"
    },
    "30350201": {
        "id": 30350201,
        "name": "Lux Lamina (Skin)"
    },
    "30350202": {
        "id": 30350202,
        "name": "Gorelust (Skin)"
    },
    "30350203": {
        "id": 30350203,
        "name": "Frigid Sting (Skin)"
    },
    "30350204": {
        "id": 30350204,
        "name": "The Surge (Skin)"
    },
    "30350205": {
        "id": 30350205,
        "name": "Tideruler's Maw (Skin)"
    },
    "30350207": {
        "id": 30350207,
        "name": "Hydroflow Necrom (Skin)"
    },
    "30350208": {
        "id": 30350208,
        "name": "Chimeratech Vetulicola (Skin)"
    },
    "30350210": {
        "id": 30350210,
        "name": "Chillgasp (Skin)"
    },
    "30350216": {
        "id": 30350216,
        "name": "Silent Sting (Skin)"
    },
    "30350301": {
        "id": 30350301,
        "name": "Karlsnautr (Skin)"
    },
    "30350302": {
        "id": 30350302,
        "name": "Turbulent Agony (Skin)"
    },
    "30350303": {
        "id": 30350303,
        "name": "The Gale (Skin)"
    },
    "30350304": {
        "id": 30350304,
        "name": "Mutterfang (Skin)"
    },
    "30350305": {
        "id": 30350305,
        "name": "Windruler's Maw (Skin)"
    },
    "30350307": {
        "id": 30350307,
        "name": "Chimeratech Tea Tree (Skin)"
    },
    "30350309": {
        "id": 30350309,
        "name": "Stormgale Necrom (Skin)"
    },
    "30350310": {
        "id": 30350310,
        "name": "Stormbode (Skin)"
    },
    "30350401": {
        "id": 30350401,
        "name": "Thunderblade Sugaar (Skin)"
    },
    "30350403": {
        "id": 30350403,
        "name": "Salvation Seeker (Skin)"
    },
    "30350404": {
        "id": 30350404,
        "name": "Fulminator's Maw (Skin)"
    },
    "30350406": {
        "id": 30350406,
        "name": "Merciful Claw (Skin)"
    },
    "30350407": {
        "id": 30350407,
        "name": "Fatetaker (Skin)"
    },
    "30350408": {
        "id": 30350408,
        "name": "Luminospark Necrom (Skin)"
    },
    "30350409": {
        "id": 30350409,
        "name": "Chimeratech Capella (Skin)"
    },
    "30350411": {
        "id": 30350411,
        "name": "Whiteout (Skin)"
    },
    "30350501": {
        "id": 30350501,
        "name": "Honor Edge (Skin)"
    },
    "30350503": {
        "id": 30350503,
        "name": "Death Seeker (Skin)"
    },
    "30350504": {
        "id": 30350504,
        "name": "Shaderuler's Maw (Skin)"
    },
    "30350506": {
        "id": 30350506,
        "name": "Terrifying Claw (Skin)"
    },
    "30350507": {
        "id": 30350507,
        "name": "Soulstealer (Skin)"
    },
    "30350508": {
        "id": 30350508,
        "name": "Chimeratech Rhapsody (Skin)"
    },
    "30350510": {
        "id": 30350510,
        "name": "Damnation Necrom (Skin)"
    },
    "30359901": {
        "id": 30359901,
        "name": "Kris Naga (Skin)"
    },
    "30359902": {
        "id": 30359902,
        "name": "Treasure of the Iron Rose (Skin)"
    },
    "30359903": {
        "id": 30359903,
        "name": "Hedgehog (Skin)"
    },
    "30359904": {
        "id": 30359904,
        "name": "Mega Dagger (Skin)"
    },
    "30359905": {
        "id": 30359905,
        "name": "The Big Cheese (Skin)"
    },
    "30359906": {
        "id": 30359906,
        "name": "Black Dragon Blade (Skin)"
    },
    "30359918": {
        "id": 30359918,
        "name": "Silver Dagger (Skin)"
    },
    "30359921": {
        "id": 30359921,
        "name": "Dazzling Star (Skin)"
    },
    "30359922": {
        "id": 30359922,
        "name": "Capriccio (Skin)"
    },
    "30360101": {
        "id": 30360101,
        "name": "Hrotti (Skin)"
    },
    "30360103": {
        "id": 30360103,
        "name": "Hrotti (Skin)"
    },
    "30360104": {
        "id": 30360104,
        "name": "Flameruler's Fang (Skin)"
    },
    "30360201": {
        "id": 30360201,
        "name": "Futsu no Mitama (Skin)"
    },
    "30360203": {
        "id": 30360203,
        "name": "Futsu no Mitama (Skin)"
    },
    "30360204": {
        "id": 30360204,
        "name": "Tideruler's Fang (Skin)"
    },
    "30360301": {
        "id": 30360301,
        "name": "Carnwennan (Skin)"
    },
    "30360303": {
        "id": 30360303,
        "name": "Carnwennan (Skin)"
    },
    "30360304": {
        "id": 30360304,
        "name": "Windruler's Fang (Skin)"
    },
    "30360401": {
        "id": 30360401,
        "name": "Claíomh Solais (Skin)"
    },
    "30360403": {
        "id": 30360403,
        "name": "Claíomh Solais (Skin)"
    },
    "30360404": {
        "id": 30360404,
        "name": "Fulminator's Fang (Skin)"
    },
    "30360501": {
        "id": 30360501,
        "name": "Qinghong Jian (Skin)"
    },
    "30360503": {
        "id": 30360503,
        "name": "Qinghong Jian (Skin)"
    },
    "30360504": {
        "id": 30360504,
        "name": "Shaderuler's Fang (Skin)"
    },
    "30419901": {
        "id": 30419901,
        "name": "Battleworn Axe (Skin)"
    },
    "30430101": {
        "id": 30430101,
        "name": "Argent Battle-Axe (Skin)"
    },
    "30430201": {
        "id": 30430201,
        "name": "Axe of the Waves (Skin)"
    },
    "30430301": {
        "id": 30430301,
        "name": "Singing Cyclone (Skin)"
    },
    "30430401": {
        "id": 30430401,
        "name": "Flash Axe (Skin)"
    },
    "30430501": {
        "id": 30430501,
        "name": "Soulreaver (Skin)"
    },
    "30439901": {
        "id": 30439901,
        "name": "Warrior's Axe (Skin)"
    },
    "30439902": {
        "id": 30439902,
        "name": "Ennobled Axe (Skin)"
    },
    "30439903": {
        "id": 30439903,
        "name": "Juggernaut (Skin)"
    },
    "30440102": {
        "id": 30440102,
        "name": "Crimsonclaw (Skin)"
    },
    "30440105": {
        "id": 30440105,
        "name": "Inferno Arms (Skin)"
    },
    "30440107": {
        "id": 30440107,
        "name": "Immolation Relic (Skin)"
    },
    "30440201": {
        "id": 30440201,
        "name": "Aqua Labrys (Skin)"
    },
    "30440203": {
        "id": 30440203,
        "name": "Blizzard Relic (Skin)"
    },
    "30440207": {
        "id": 30440207,
        "name": "Frozen Arms (Skin)"
    },
    "30440301": {
        "id": 30440301,
        "name": "Winged Destruction (Skin)"
    },
    "30440302": {
        "id": 30440302,
        "name": "Tempest's Relic (Skin)"
    },
    "30440306": {
        "id": 30440306,
        "name": "Pulsing Arms (Skin)"
    },
    "30440401": {
        "id": 30440401,
        "name": "Shining Axe (Skin)"
    },
    "30440403": {
        "id": 30440403,
        "name": "Banished Relic (Skin)"
    },
    "30440404": {
        "id": 30440404,
        "name": "Crackling Arms (Skin)"
    },
    "30440501": {
        "id": 30440501,
        "name": "Traitor's Despair (Skin)"
    },
    "30440502": {
        "id": 30440502,
        "name": "Regretful Relic (Skin)"
    },
    "30440505": {
        "id": 30440505,
        "name": "Punishing Arms (Skin)"
    },
    "30449901": {
        "id": 30449901,
        "name": "Plain Axe (Skin)"
    },
    "30449902": {
        "id": 30449902,
        "name": "The Tyrant (Skin)"
    },
    "30449903": {
        "id": 30449903,
        "name": "Souvenir Axe (Skin)"
    },
    "30450101": {
        "id": 30450101,
        "name": "Axe of the Blazing King (Skin)"
    },
    "30450102": {
        "id": 30450102,
        "name": "Heavenwrath Gaze (Skin)"
    },
    "30450103": {
        "id": 30450103,
        "name": "Blaze Crash (Skin)"
    },
    "30450104": {
        "id": 30450104,
        "name": "Royal Crimson Heat (Skin)"
    },
    "30450106": {
        "id": 30450106,
        "name": "Atrocity Crux (Skin)"
    },
    "30450107": {
        "id": 30450107,
        "name": "Sun Flare Destroyer (Skin)"
    },
    "30450108": {
        "id": 30450108,
        "name": "Chimeratech Warlord (Skin)"
    },
    "30450110": {
        "id": 30450110,
        "name": "Rath Blaze Splitter (Skin)"
    },
    "30450111": {
        "id": 30450111,
        "name": "Hellfire Crash (Skin)"
    },
    "30450116": {
        "id": 30450116,
        "name": "Divine Force (Skin)"
    },
    "30450119": {
        "id": 30450119,
        "name": "Conviction Striker (Skin)"
    },
    "30450201": {
        "id": 30450201,
        "name": "Grand Seadragon (Skin)"
    },
    "30450202": {
        "id": 30450202,
        "name": "Maelstrom Crux (Skin)"
    },
    "30450203": {
        "id": 30450203,
        "name": "Permafrost Crash (Skin)"
    },
    "30450204": {
        "id": 30450204,
        "name": "Jagged Rainstorm (Skin)"
    },
    "30450205": {
        "id": 30450205,
        "name": "Mercy's Azure Tide (Skin)"
    },
    "30450207": {
        "id": 30450207,
        "name": "Crusher of the Depths (Skin)"
    },
    "30450208": {
        "id": 30450208,
        "name": "Icicle Destroyer (Skin)"
    },
    "30450209": {
        "id": 30450209,
        "name": "Chimeratech Helmetia (Skin)"
    },
    "30450216": {
        "id": 30450216,
        "name": "Rainbow Axe (Skin)"
    },
    "30450301": {
        "id": 30450301,
        "name": "Axe of the Southern Cross (Skin)"
    },
    "30450302": {
        "id": 30450302,
        "name": "Stormwrath Gaze (Skin)"
    },
    "30450303": {
        "id": 30450303,
        "name": "Jagged Bolt (Skin)"
    },
    "30450304": {
        "id": 30450304,
        "name": "Squall Crux (Skin)"
    },
    "30450305": {
        "id": 30450305,
        "name": "Glorystorm's Guide (Skin)"
    },
    "30450307": {
        "id": 30450307,
        "name": "Chimeratech Palmarosa (Skin)"
    },
    "30450309": {
        "id": 30450309,
        "name": "Cyclonic Destroyer (Skin)"
    },
    "30450310": {
        "id": 30450310,
        "name": "Stella Wind Crash (Skin)"
    },
    "30450316": {
        "id": 30450316,
        "name": "Victor's Harmony (Skin)"
    },
    "30450401": {
        "id": 30450401,
        "name": "Radiant Swath (Skin)"
    },
    "30450402": {
        "id": 30450402,
        "name": "Starwrath Gaze (Skin)"
    },
    "30450403": {
        "id": 30450403,
        "name": "Cleaver of Despair (Skin)"
    },
    "30450404": {
        "id": 30450404,
        "name": "Mighty Thundercrash (Skin)"
    },
    "30450406": {
        "id": 30450406,
        "name": "Plasmareaver (Skin)"
    },
    "30450407": {
        "id": 30450407,
        "name": "Blitzfang (Skin)"
    },
    "30450408": {
        "id": 30450408,
        "name": "Arrogance Crux (Skin)"
    },
    "30450409": {
        "id": 30450409,
        "name": "Crushdazzle (Skin)"
    },
    "30450410": {
        "id": 30450410,
        "name": "Chimeratech Rigel (Skin)"
    },
    "30450416": {
        "id": 30450416,
        "name": "Ol' Reliable (Skin)"
    },
    "30450501": {
        "id": 30450501,
        "name": "Primordial Titan (Skin)"
    },
    "30450503": {
        "id": 30450503,
        "name": "Genocide Cleaver (Skin)"
    },
    "30450504": {
        "id": 30450504,
        "name": "Shadowy Darkbite Axe (Skin)"
    },
    "30450506": {
        "id": 30450506,
        "name": "Shadowfang (Skin)"
    },
    "30450507": {
        "id": 30450507,
        "name": "Indignation Crux (Skin)"
    },
    "30450508": {
        "id": 30450508,
        "name": "Chimeratech Fugue (Skin)"
    },
    "30450510": {
        "id": 30450510,
        "name": "Perdition's Crusher (Skin)"
    },
    "30459901": {
        "id": 30459901,
        "name": "Victory Axe (Skin)"
    },
    "30459902": {
        "id": 30459902,
        "name": "Executioner Axe Strafe (Skin)"
    },
    "30459903": {
        "id": 30459903,
        "name": "Halfling's Broadaxe (Skin)"
    },
    "30459904": {
        "id": 30459904,
        "name": "Mega Axe (Skin)"
    },
    "30459905": {
        "id": 30459905,
        "name": "Black Dragon Axe (Skin)"
    },
    "30459921": {
        "id": 30459921,
        "name": "Inquisitor's Mercy (Skin)"
    },
    "30459922": {
        "id": 30459922,
        "name": "Nine-Toothed Rake (Skin)"
    },
    "30460101": {
        "id": 30460101,
        "name": "Mjölnir (Skin)"
    },
    "30460103": {
        "id": 30460103,
        "name": "Mjölnir (Skin)"
    },
    "30460104": {
        "id": 30460104,
        "name": "Noble Crimson Heat (Skin)"
    },
    "30460201": {
        "id": 30460201,
        "name": "Ohohagari (Skin)"
    },
    "30460203": {
        "id": 30460203,
        "name": "Ohohagari (Skin)"
    },
    "30460204": {
        "id": 30460204,
        "name": "Mercy's Jeweled Tide (Skin)"
    },
    "30460301": {
        "id": 30460301,
        "name": "Marmyadose (Skin)"
    },
    "30460303": {
        "id": 30460303,
        "name": "Marmyadose (Skin)"
    },
    "30460304": {
        "id": 30460304,
        "name": "Tempest's Guide (Skin)"
    },
    "30460401": {
        "id": 30460401,
        "name": "Rog Mol (Skin)"
    },
    "30460403": {
        "id": 30460403,
        "name": "Rog Mol (Skin)"
    },
    "30460404": {
        "id": 30460404,
        "name": "Indomitable Thundercrash (Skin)"
    },
    "30460501": {
        "id": 30460501,
        "name": "Fangtian Huaji (Skin)"
    },
    "30460503": {
        "id": 30460503,
        "name": "Fangtian Huaji (Skin)"
    },
    "30460504": {
        "id": 30460504,
        "name": "Nightfall's Darkbite Axe (Skin)"
    },
    "30519901": {
        "id": 30519901,
        "name": "Battleworn Lance (Skin)"
    },
    "30530101": {
        "id": 30530101,
        "name": "Unsung Hero's Lance (Skin)"
    },
    "30530201": {
        "id": 30530201,
        "name": "Azure Jewel (Skin)"
    },
    "30530301": {
        "id": 30530301,
        "name": "Gale Spear (Skin)"
    },
    "30530401": {
        "id": 30530401,
        "name": "Moonpiercer (Skin)"
    },
    "30530402": {
        "id": 30530402,
        "name": "Jack-o'-Lance (Skin)"
    },
    "30530501": {
        "id": 30530501,
        "name": "Lance of the Dark (Skin)"
    },
    "30539901": {
        "id": 30539901,
        "name": "Trident (Skin)"
    },
    "30539902": {
        "id": 30539902,
        "name": "Mailbreaker (Skin)"
    },
    "30539903": {
        "id": 30539903,
        "name": "Drill Lance (Skin)"
    },
    "30540101": {
        "id": 30540101,
        "name": "Flameserpent (Skin)"
    },
    "30540102": {
        "id": 30540102,
        "name": "Triggerspore Lance (Skin)"
    },
    "30540106": {
        "id": 30540106,
        "name": "Spiritflame Spear (Skin)"
    },
    "30540107": {
        "id": 30540107,
        "name": "Burning Fury Lance (Skin)"
    },
    "30540201": {
        "id": 30540201,
        "name": "Abyssal Prize (Skin)"
    },
    "30540202": {
        "id": 30540202,
        "name": "Shatterspore Lance (Skin)"
    },
    "30540204": {
        "id": 30540204,
        "name": "Callous Lance (Skin)"
    },
    "30540207": {
        "id": 30540207,
        "name": "Gelid Grace (Skin)"
    },
    "30540302": {
        "id": 30540302,
        "name": "Tempest Lance (Skin)"
    },
    "30540303": {
        "id": 30540303,
        "name": "Melancholy Lance (Skin)"
    },
    "30540304": {
        "id": 30540304,
        "name": "Tornadospore Lance (Skin)"
    },
    "30540306": {
        "id": 30540306,
        "name": "Immortal Wind (Skin)"
    },
    "30540402": {
        "id": 30540402,
        "name": "Thunderbolt (Skin)"
    },
    "30540403": {
        "id": 30540403,
        "name": "Lonesome Wish (Skin)"
    },
    "30540405": {
        "id": 30540405,
        "name": "Shinespore Lance (Skin)"
    },
    "30540411": {
        "id": 30540411,
        "name": "Highbright Grimspear (Skin)"
    },
    "30540501": {
        "id": 30540501,
        "name": "Hellish Lance (Skin)"
    },
    "30540502": {
        "id": 30540502,
        "name": "Lance of Nightmares (Skin)"
    },
    "30540504": {
        "id": 30540504,
        "name": "Spear of Tragedy (Skin)"
    },
    "30540506": {
        "id": 30540506,
        "name": "Sablespore Lance (Skin)"
    },
    "30549901": {
        "id": 30549901,
        "name": "Strong Halberd (Skin)"
    },
    "30549902": {
        "id": 30549902,
        "name": "Lance of the Innocent (Skin)"
    },
    "30549903": {
        "id": 30549903,
        "name": "Ironside Lance (Skin)"
    },
    "30550101": {
        "id": 30550101,
        "name": "Calamity Trigger (Skin)"
    },
    "30550102": {
        "id": 30550102,
        "name": "Flamedance Lance (Skin)"
    },
    "30550103": {
        "id": 30550103,
        "name": "Reiselfeld, the Solar Spray (Skin)"
    },
    "30550104": {
        "id": 30550104,
        "name": "Pureflame Lance (Skin)"
    },
    "30550106": {
        "id": 30550106,
        "name": "Ashen Beast (Skin)"
    },
    "30550107": {
        "id": 30550107,
        "name": "Combustion Flamelance (Skin)"
    },
    "30550108": {
        "id": 30550108,
        "name": "Chimeratech Lancemaster (Skin)"
    },
    "30550110": {
        "id": 30550110,
        "name": "Spear of Prominence (Skin)"
    },
    "30550111": {
        "id": 30550111,
        "name": "Underworld Sinner (Skin)"
    },
    "30550116": {
        "id": 30550116,
        "name": "Last Storm Lance (Skin)"
    },
    "30550201": {
        "id": 30550201,
        "name": "Ocean Lord (Skin)"
    },
    "30550202": {
        "id": 30550202,
        "name": "Vortex Beast (Skin)"
    },
    "30550203": {
        "id": 30550203,
        "name": "Strohm Mare (Skin)"
    },
    "30550204": {
        "id": 30550204,
        "name": "Icesovereign Trident (Skin)"
    },
    "30550205": {
        "id": 30550205,
        "name": "Limpid Rush (Skin)"
    },
    "30550207": {
        "id": 30550207,
        "name": "Lance of Frozen Depths (Skin)"
    },
    "30550208": {
        "id": 30550208,
        "name": "Raging Tidelance (Skin)"
    },
    "30550209": {
        "id": 30550209,
        "name": "Chimeratech Takakkawia (Skin)"
    },
    "30550216": {
        "id": 30550216,
        "name": "Howl of the Hungry Beast (Skin)"
    },
    "30550301": {
        "id": 30550301,
        "name": "Spear of the Northern Cross (Skin)"
    },
    "30550302": {
        "id": 30550302,
        "name": "Stormpiercer Lance (Skin)"
    },
    "30550303": {
        "id": 30550303,
        "name": "Windsovereign Trident (Skin)"
    },
    "30550304": {
        "id": 30550304,
        "name": "Flying Beast (Skin)"
    },
    "30550305": {
        "id": 30550305,
        "name": "Guiding Gale (Skin)"
    },
    "30550307": {
        "id": 30550307,
        "name": "Chimeratech Caraway (Skin)"
    },
    "30550309": {
        "id": 30550309,
        "name": "Supercell (Skin)"
    },
    "30550310": {
        "id": 30550310,
        "name": "Axiom Piercer (Skin)"
    },
    "30550316": {
        "id": 30550316,
        "name": "Passion Piercer (Skin)"
    },
    "30550402": {
        "id": 30550402,
        "name": "Thunder King's Greatspear (Skin)"
    },
    "30550404": {
        "id": 30550404,
        "name": "Twilight Lost (Skin)"
    },
    "30550405": {
        "id": 30550405,
        "name": "Brilliant Lightflash (Skin)"
    },
    "30550407": {
        "id": 30550407,
        "name": "Biting Brightlance (Skin)"
    },
    "30550408": {
        "id": 30550408,
        "name": "Starpiercer (Skin)"
    },
    "30550409": {
        "id": 30550409,
        "name": "Fulmination Beast (Skin)"
    },
    "30550410": {
        "id": 30550410,
        "name": "Lance of Bright Skies (Skin)"
    },
    "30550411": {
        "id": 30550411,
        "name": "Fensalir (Skin)"
    },
    "30550412": {
        "id": 30550412,
        "name": "Chimeratech Arcturus (Skin)"
    },
    "30550501": {
        "id": 30550501,
        "name": "Mistilteinn (Skin)"
    },
    "30550503": {
        "id": 30550503,
        "name": "Final Eclipse (Skin)"
    },
    "30550504": {
        "id": 30550504,
        "name": "Ebon Scourge Lance (Skin)"
    },
    "30550506": {
        "id": 30550506,
        "name": "Plaguepiercer (Skin)"
    },
    "30550507": {
        "id": 30550507,
        "name": "Horrifying Beast (Skin)"
    },
    "30550508": {
        "id": 30550508,
        "name": "Chimeratech Elegy (Skin)"
    },
    "30550510": {
        "id": 30550510,
        "name": "Rakshasan Gloomlance (Skin)"
    },
    "30559901": {
        "id": 30559901,
        "name": "Pactspear (Skin)"
    },
    "30559902": {
        "id": 30559902,
        "name": "Compass Needle (Skin)"
    },
    "30559903": {
        "id": 30559903,
        "name": "Gae Bolg (Skin)"
    },
    "30559904": {
        "id": 30559904,
        "name": "Mega Lance (Skin)"
    },
    "30559905": {
        "id": 30559905,
        "name": "Black Dragon Spear (Skin)"
    },
    "30559921": {
        "id": 30559921,
        "name": "Khakkhara Lance (Skin)"
    },
    "30559922": {
        "id": 30559922,
        "name": "Gemini (Skin)"
    },
    "30560101": {
        "id": 30560101,
        "name": "Gungnir (Skin)"
    },
    "30560103": {
        "id": 30560103,
        "name": "Gungnir (Skin)"
    },
    "30560104": {
        "id": 30560104,
        "name": "Omniflame Lance (Skin)"
    },
    "30560201": {
        "id": 30560201,
        "name": "Ame no Nuhoko (Skin)"
    },
    "30560203": {
        "id": 30560203,
        "name": "Ame no Nuhoko (Skin)"
    },
    "30560204": {
        "id": 30560204,
        "name": "Limpid Cascade (Skin)"
    },
    "30560301": {
        "id": 30560301,
        "name": "Rhongomyniad (Skin)"
    },
    "30560303": {
        "id": 30560303,
        "name": "Rhongomyniad (Skin)"
    },
    "30560304": {
        "id": 30560304,
        "name": "Gale's Aid (Skin)"
    },
    "30560401": {
        "id": 30560401,
        "name": "Areadbhar (Skin)"
    },
    "30560403": {
        "id": 30560403,
        "name": "Areadbhar (Skin)"
    },
    "30560404": {
        "id": 30560404,
        "name": "Radiant Lightflash (Skin)"
    },
    "30560501": {
        "id": 30560501,
        "name": "Qinglong Yanyuedao (Skin)"
    },
    "30560503": {
        "id": 30560503,
        "name": "Qinglong Yanyuedao (Skin)"
    },
    "30560504": {
        "id": 30560504,
        "name": "Ebon Plague Lance (Skin)"
    },
    "30619901": {
        "id": 30619901,
        "name": "Battleworn Bow (Skin)"
    },
    "30630101": {
        "id": 30630101,
        "name": "Flightfyre (Skin)"
    },
    "30630201": {
        "id": 30630201,
        "name": "Tidal Bow (Skin)"
    },
    "30630302": {
        "id": 30630302,
        "name": "Proof of the Wind (Skin)"
    },
    "30630401": {
        "id": 30630401,
        "name": "Galvanic Bow (Skin)"
    },
    "30630501": {
        "id": 30630501,
        "name": "Cimmerian Bow (Skin)"
    },
    "30639901": {
        "id": 30639901,
        "name": "Composite Bow (Skin)"
    },
    "30639902": {
        "id": 30639902,
        "name": "Machine Bow (Skin)"
    },
    "30639903": {
        "id": 30639903,
        "name": "Hunter's Bow (Skin)"
    },
    "30640102": {
        "id": 30640102,
        "name": "Armored Inferno (Skin)"
    },
    "30640103": {
        "id": 30640103,
        "name": "Blazefungus (Skin)"
    },
    "30640106": {
        "id": 30640106,
        "name": "Wispfire Bow (Skin)"
    },
    "30640108": {
        "id": 30640108,
        "name": "Scorchflame Bow (Skin)"
    },
    "30640201": {
        "id": 30640201,
        "name": "Frostslinger Bow (Skin)"
    },
    "30640202": {
        "id": 30640202,
        "name": "Freezefungus (Skin)"
    },
    "30640203": {
        "id": 30640203,
        "name": "Frostbillow (Skin)"
    },
    "30640206": {
        "id": 30640206,
        "name": "Wavefury Bow (Skin)"
    },
    "30640302": {
        "id": 30640302,
        "name": "Epidemic (Skin)"
    },
    "30640303": {
        "id": 30640303,
        "name": "Windpiercer (Skin)"
    },
    "30640304": {
        "id": 30640304,
        "name": "Stormfungus (Skin)"
    },
    "30640306": {
        "id": 30640306,
        "name": "Ill Wind (Skin)"
    },
    "30640403": {
        "id": 30640403,
        "name": "Holy Bow (Skin)"
    },
    "30640404": {
        "id": 30640404,
        "name": "Heaven's Bouquet (Skin)"
    },
    "30640406": {
        "id": 30640406,
        "name": "Glowfungus (Skin)"
    },
    "30640411": {
        "id": 30640411,
        "name": "Lightshear Bow (Skin)"
    },
    "30640501": {
        "id": 30640501,
        "name": "Macabre Malediction (Skin)"
    },
    "30640502": {
        "id": 30640502,
        "name": "Seductive Bow (Skin)"
    },
    "30640503": {
        "id": 30640503,
        "name": "Howlshadow (Skin)"
    },
    "30640505": {
        "id": 30640505,
        "name": "Duskfungus (Skin)"
    },
    "30649901": {
        "id": 30649901,
        "name": "Executor (Skin)"
    },
    "30649902": {
        "id": 30649902,
        "name": "Faerie Bow (Skin)"
    },
    "30649903": {
        "id": 30649903,
        "name": "Duskhawk (Skin)"
    },
    "30650101": {
        "id": 30650101,
        "name": "Lupis Solis (Skin)"
    },
    "30650102": {
        "id": 30650102,
        "name": "Vulcanrage (Skin)"
    },
    "30650103": {
        "id": 30650103,
        "name": "Hellfire Bow (Skin)"
    },
    "30650104": {
        "id": 30650104,
        "name": "Valkyrie's Fire (Skin)"
    },
    "30650106": {
        "id": 30650106,
        "name": "Detonation Dreadbow (Skin)"
    },
    "30650107": {
        "id": 30650107,
        "name": "Chimeratech Sniper (Skin)"
    },
    "30650109": {
        "id": 30650109,
        "name": "Dark Filament (Skin)"
    },
    "30650110": {
        "id": 30650110,
        "name": "Soul Corrupter (Skin)"
    },
    "30650111": {
        "id": 30650111,
        "name": "Strifeblazer (Skin)"
    },
    "30650116": {
        "id": 30650116,
        "name": "Eternal Bloom (Skin)"
    },
    "30650119": {
        "id": 30650119,
        "name": "Devotion Bow (Skin)"
    },
    "30650201": {
        "id": 30650201,
        "name": "Peacock's Whorl (Skin)"
    },
    "30650202": {
        "id": 30650202,
        "name": "Everfrost Bow (Skin)"
    },
    "30650203": {
        "id": 30650203,
        "name": "Peakbreaker Bow (Skin)"
    },
    "30650204": {
        "id": 30650204,
        "name": "Azure Mercurius (Skin)"
    },
    "30650206": {
        "id": 30650206,
        "name": "Streamgorger Bow (Skin)"
    },
    "30650207": {
        "id": 30650207,
        "name": "Despair Spiral (Skin)"
    },
    "30650208": {
        "id": 30650208,
        "name": "Chimeratech Hallucigenia (Skin)"
    },
    "30650210": {
        "id": 30650210,
        "name": "Vortex Tide (Skin)"
    },
    "30650216": {
        "id": 30650216,
        "name": "Crimson Piercer (Skin)"
    },
    "30650302": {
        "id": 30650302,
        "name": "Stellar Pegasus (Skin)"
    },
    "30650303": {
        "id": 30650303,
        "name": "Windhoze, the Dustblaster (Skin)"
    },
    "30650304": {
        "id": 30650304,
        "name": "Firmament Auger (Skin)"
    },
    "30650305": {
        "id": 30650305,
        "name": "Jormungand's Fury (Skin)"
    },
    "30650307": {
        "id": 30650307,
        "name": "Deathwind Caller (Skin)"
    },
    "30650308": {
        "id": 30650308,
        "name": "Chimeratech Ajwain (Skin)"
    },
    "30650310": {
        "id": 30650310,
        "name": "Windcut (Skin)"
    },
    "30650311": {
        "id": 30650311,
        "name": "Vortex Fury (Skin)"
    },
    "30650402": {
        "id": 30650402,
        "name": "Thunderbow (Skin)"
    },
    "30650404": {
        "id": 30650404,
        "name": "Tiger Lily Bow (Skin)"
    },
    "30650405": {
        "id": 30650405,
        "name": "Jupiter's Sky (Skin)"
    },
    "30650407": {
        "id": 30650407,
        "name": "Astral Echo (Skin)"
    },
    "30650408": {
        "id": 30650408,
        "name": "Heavenbreaker Bow (Skin)"
    },
    "30650409": {
        "id": 30650409,
        "name": "Soulshine Splitter (Skin)"
    },
    "30650410": {
        "id": 30650410,
        "name": "Chimeratech Vega (Skin)"
    },
    "30650412": {
        "id": 30650412,
        "name": "Lighttorrent Bow (Skin)"
    },
    "30650501": {
        "id": 30650501,
        "name": "Necro Arcus (Skin)"
    },
    "30650502": {
        "id": 30650502,
        "name": "Black Dahlia Bow (Skin)"
    },
    "30650503": {
        "id": 30650503,
        "name": "Hellish Prophecy (Skin)"
    },
    "30650505": {
        "id": 30650505,
        "name": "Astral Cruelty (Skin)"
    },
    "30650506": {
        "id": 30650506,
        "name": "Deathbinder Bow (Skin)"
    },
    "30650507": {
        "id": 30650507,
        "name": "Chimeratech Concerto (Skin)"
    },
    "30650509": {
        "id": 30650509,
        "name": "Dreadbringer Bow (Skin)"
    },
    "30659901": {
        "id": 30659901,
        "name": "Nitralica's Koto (Skin)"
    },
    "30659902": {
        "id": 30659902,
        "name": "Accelerator (Skin)"
    },
    "30659903": {
        "id": 30659903,
        "name": "Starchaser (Skin)"
    },
    "30659904": {
        "id": 30659904,
        "name": "Chimera's Guilt (Skin)"
    },
    "30659905": {
        "id": 30659905,
        "name": "Mega Bow (Skin)"
    },
    "30659906": {
        "id": 30659906,
        "name": "Black Dragon Bow (Skin)"
    },
    "30659921": {
        "id": 30659921,
        "name": "Raptor's Beak (Skin)"
    },
    "30659922": {
        "id": 30659922,
        "name": "Tempest (Skin)"
    },
    "30660101": {
        "id": 30660101,
        "name": "Ýdalir (Skin)"
    },
    "30660103": {
        "id": 30660103,
        "name": "Ýdalir (Skin)"
    },
    "30660104": {
        "id": 30660104,
        "name": "Valkyrie's Hellfire (Skin)"
    },
    "30660201": {
        "id": 30660201,
        "name": "Ame no Hajiyumi (Skin)"
    },
    "30660203": {
        "id": 30660203,
        "name": "Ame no Hajiyumi (Skin)"
    },
    "30660204": {
        "id": 30660204,
        "name": "Sapphire Mercurius (Skin)"
    },
    "30660301": {
        "id": 30660301,
        "name": "Failnaught (Skin)"
    },
    "30660303": {
        "id": 30660303,
        "name": "Failnaught (Skin)"
    },
    "30660304": {
        "id": 30660304,
        "name": "Jormungand's Wrath (Skin)"
    },
    "30660401": {
        "id": 30660401,
        "name": "Tathlum (Skin)"
    },
    "30660403": {
        "id": 30660403,
        "name": "Tathlum (Skin)"
    },
    "30660404": {
        "id": 30660404,
        "name": "Jupiter's Shimmer (Skin)"
    },
    "30660501": {
        "id": 30660501,
        "name": "Longshe Gong (Skin)"
    },
    "30660503": {
        "id": 30660503,
        "name": "Longshe Gong (Skin)"
    },
    "30660504": {
        "id": 30660504,
        "name": "Nightmare Prophecy (Skin)"
    },
    "30719901": {
        "id": 30719901,
        "name": "Battleworn Wand (Skin)"
    },
    "30730101": {
        "id": 30730101,
        "name": "Sunrise Scepter (Skin)"
    },
    "30730201": {
        "id": 30730201,
        "name": "Oceandweller (Skin)"
    },
    "30730301": {
        "id": 30730301,
        "name": "Menace of the Storm (Skin)"
    },
    "30730401": {
        "id": 30730401,
        "name": "Thunder Wand (Skin)"
    },
    "30730501": {
        "id": 30730501,
        "name": "Meggidoth Ruiner (Skin)"
    },
    "30739901": {
        "id": 30739901,
        "name": "Wizard's Rod (Skin)"
    },
    "30739902": {
        "id": 30739902,
        "name": "Sorcerer's Cudgel (Skin)"
    },
    "30739903": {
        "id": 30739903,
        "name": "Conchoidal Rod (Skin)"
    },
    "30740101": {
        "id": 30740101,
        "name": "Firefiend's Howl (Skin)"
    },
    "30740102": {
        "id": 30740102,
        "name": "The Second Wail (Skin)"
    },
    "30740103": {
        "id": 30740103,
        "name": "Volcano Cane (Skin)"
    },
    "30740105": {
        "id": 30740105,
        "name": "Brightshimmer Wand (Skin)"
    },
    "30740201": {
        "id": 30740201,
        "name": "Rod of Tears (Skin)"
    },
    "30740202": {
        "id": 30740202,
        "name": "The Second Scream (Skin)"
    },
    "30740205": {
        "id": 30740205,
        "name": "Frost Cane (Skin)"
    },
    "30740207": {
        "id": 30740207,
        "name": "Lonesome Echodrip (Skin)"
    },
    "30740208": {
        "id": 30740208,
        "name": "Ringing Wand (Skin)"
    },
    "30740301": {
        "id": 30740301,
        "name": "Tempest Wand (Skin)"
    },
    "30740302": {
        "id": 30740302,
        "name": "The Fury (Skin)"
    },
    "30740304": {
        "id": 30740304,
        "name": "Stormsurge Wand (Skin)"
    },
    "30740306": {
        "id": 30740306,
        "name": "Storm Cane (Skin)"
    },
    "30740402": {
        "id": 30740402,
        "name": "Conductor Rod (Skin)"
    },
    "30740404": {
        "id": 30740404,
        "name": "The Madness (Skin)"
    },
    "30740405": {
        "id": 30740405,
        "name": "Rainbow Cane (Wand) (Skin)"
    },
    "30740409": {
        "id": 30740409,
        "name": "Dazzling Ray of Hope (Skin)"
    },
    "30740501": {
        "id": 30740501,
        "name": "Accursed Vare (Skin)"
    },
    "30740503": {
        "id": 30740503,
        "name": "Darkheart (Skin)"
    },
    "30740504": {
        "id": 30740504,
        "name": "Abyssal Cane (Skin)"
    },
    "30740506": {
        "id": 30740506,
        "name": "The Lamentation (Skin)"
    },
    "30749901": {
        "id": 30749901,
        "name": "Latchkey (Skin)"
    },
    "30749902": {
        "id": 30749902,
        "name": "Rod of Alchemy (Skin)"
    },
    "30749903": {
        "id": 30749903,
        "name": "Moonlight Rod (Skin)"
    },
    "30750101": {
        "id": 30750101,
        "name": "Terranigmus (Skin)"
    },
    "30750102": {
        "id": 30750102,
        "name": "Scepter of Infinite Fire (Skin)"
    },
    "30750103": {
        "id": 30750103,
        "name": "Infernal Conduit (Skin)"
    },
    "30750104": {
        "id": 30750104,
        "name": "Infernoblaze (Skin)"
    },
    "30750106": {
        "id": 30750106,
        "name": "Hellwing (Skin)"
    },
    "30750107": {
        "id": 30750107,
        "name": "Chimeratech Archmage (Skin)"
    },
    "30750109": {
        "id": 30750109,
        "name": "Plage Rod (Skin)"
    },
    "30750110": {
        "id": 30750110,
        "name": "Revenant of Annihilation (Skin)"
    },
    "30750111": {
        "id": 30750111,
        "name": "Undying Flame (Skin)"
    },
    "30750116": {
        "id": 30750116,
        "name": "Memento Futurum (Skin)"
    },
    "30750202": {
        "id": 30750202,
        "name": "Ocean Monarch (Skin)"
    },
    "30750203": {
        "id": 30750203,
        "name": "Tsunamiwing (Skin)"
    },
    "30750204": {
        "id": 30750204,
        "name": "Spirit Breaker (Skin)"
    },
    "30750205": {
        "id": 30750205,
        "name": "Seasovereign's Rule (Skin)"
    },
    "30750206": {
        "id": 30750206,
        "name": "Aquatic Spiral (Skin)"
    },
    "30750208": {
        "id": 30750208,
        "name": "Chimeratech Hurdia (Skin)"
    },
    "30750210": {
        "id": 30750210,
        "name": "Revenant of Calamity (Skin)"
    },
    "30750211": {
        "id": 30750211,
        "name": "Cascading Cataract (Skin)"
    },
    "30750216": {
        "id": 30750216,
        "name": "Crystalian Protector (Skin)"
    },
    "30750301": {
        "id": 30750301,
        "name": "Phytalmios (Skin)"
    },
    "30750302": {
        "id": 30750302,
        "name": "Scepter of the Maelstrom (Skin)"
    },
    "30750303": {
        "id": 30750303,
        "name": "Typhoon's Rule (Skin)"
    },
    "30750304": {
        "id": 30750304,
        "name": "Tempestwing (Skin)"
    },
    "30750305": {
        "id": 30750305,
        "name": "Grand Tempest (Skin)"
    },
    "30750307": {
        "id": 30750307,
        "name": "Chimeratech Frankin (Skin)"
    },
    "30750309": {
        "id": 30750309,
        "name": "Revenant of Pollution (Skin)"
    },
    "30750310": {
        "id": 30750310,
        "name": "The Inevitable Squall (Skin)"
    },
    "30750316": {
        "id": 30750316,
        "name": "Bondforged Resistance (Skin)"
    },
    "30750401": {
        "id": 30750401,
        "name": "Twilight Shimmer (Skin)"
    },
    "30750403": {
        "id": 30750403,
        "name": "Sacred Requiem (Skin)"
    },
    "30750404": {
        "id": 30750404,
        "name": "Primeval Thunder (Skin)"
    },
    "30750406": {
        "id": 30750406,
        "name": "Worldshaker (Skin)"
    },
    "30750407": {
        "id": 30750407,
        "name": "Shinewing (Skin)"
    },
    "30750408": {
        "id": 30750408,
        "name": "Revenant of Sol (Skin)"
    },
    "30750409": {
        "id": 30750409,
        "name": "Chimeratech Betelgeuse (Skin)"
    },
    "30750411": {
        "id": 30750411,
        "name": "Ray of Perpetuity (Skin)"
    },
    "30750501": {
        "id": 30750501,
        "name": "Underworld Despair (Skin)"
    },
    "30750503": {
        "id": 30750503,
        "name": "Dirge of Desperation (Skin)"
    },
    "30750504": {
        "id": 30750504,
        "name": "Darkbinder (Skin)"
    },
    "30750506": {
        "id": 30750506,
        "name": "Fateshaker (Skin)"
    },
    "30750507": {
        "id": 30750507,
        "name": "Chaoswing (Skin)"
    },
    "30750508": {
        "id": 30750508,
        "name": "Chimeratech Oratorio (Skin)"
    },
    "30750510": {
        "id": 30750510,
        "name": "Revenant of Corruption (Skin)"
    },
    "30759901": {
        "id": 30759901,
        "name": "Wand of the Torrent (Skin)"
    },
    "30759902": {
        "id": 30759902,
        "name": "Welkin Wand (Skin)"
    },
    "30759903": {
        "id": 30759903,
        "name": "Chaotic Horizon (Skin)"
    },
    "30759904": {
        "id": 30759904,
        "name": "Mega Wand (Skin)"
    },
    "30759905": {
        "id": 30759905,
        "name": "Catspaw Rod (Skin)"
    },
    "30759906": {
        "id": 30759906,
        "name": "Fatalis Rhabdos (Skin)"
    },
    "30759921": {
        "id": 30759921,
        "name": "Grim Apparatus (Skin)"
    },
    "30759922": {
        "id": 30759922,
        "name": "Heavenly Light (Skin)"
    },
    "30760101": {
        "id": 30760101,
        "name": "Brísingr (Skin)"
    },
    "30760103": {
        "id": 30760103,
        "name": "Brísingr (Skin)"
    },
    "30760104": {
        "id": 30760104,
        "name": "Hellblaze (Skin)"
    },
    "30760201": {
        "id": 30760201,
        "name": "Omizununo (Skin)"
    },
    "30760203": {
        "id": 30760203,
        "name": "Omizununo (Skin)"
    },
    "30760204": {
        "id": 30760204,
        "name": "Aqueous Prison (Skin)"
    },
    "30760301": {
        "id": 30760301,
        "name": "Camelot (Skin)"
    },
    "30760303": {
        "id": 30760303,
        "name": "Camelot (Skin)"
    },
    "30760304": {
        "id": 30760304,
        "name": "Storm Chaser (Skin)"
    },
    "30760401": {
        "id": 30760401,
        "name": "Brionac (Skin)"
    },
    "30760403": {
        "id": 30760403,
        "name": "Brionac (Skin)"
    },
    "30760404": {
        "id": 30760404,
        "name": "Electron Burst (Skin)"
    },
    "30760501": {
        "id": 30760501,
        "name": "Jiu Ci (Skin)"
    },
    "30760503": {
        "id": 30760503,
        "name": "Jiu Ci (Skin)"
    },
    "30760504": {
        "id": 30760504,
        "name": "Umbral Chaser (Skin)"
    },
    "30819901": {
        "id": 30819901,
        "name": "Battleworn Staff (Skin)"
    },
    "30830101": {
        "id": 30830101,
        "name": "Staff of Punishing Flame (Skin)"
    },
    "30830201": {
        "id": 30830201,
        "name": "Scendecipher (Skin)"
    },
    "30830301": {
        "id": 30830301,
        "name": "Windreader (Skin)"
    },
    "30830401": {
        "id": 30830401,
        "name": "Astrolabe (Skin)"
    },
    "30830402": {
        "id": 30830402,
        "name": "Vampire's Lantern (Skin)"
    },
    "30830501": {
        "id": 30830501,
        "name": "Meggidoth Wisp (Skin)"
    },
    "30839901": {
        "id": 30839901,
        "name": "Staff of Grace (Skin)"
    },
    "30839902": {
        "id": 30839902,
        "name": "Long Ankh (Skin)"
    },
    "30839903": {
        "id": 30839903,
        "name": "Staff of the Horned Snake (Skin)"
    },
    "30840101": {
        "id": 30840101,
        "name": "Ark Voyager (Skin)"
    },
    "30840102": {
        "id": 30840102,
        "name": "Ashchant (Skin)"
    },
    "30840201": {
        "id": 30840201,
        "name": "Marine Staff (Skin)"
    },
    "30840203": {
        "id": 30840203,
        "name": "Seachant (Skin)"
    },
    "30840301": {
        "id": 30840301,
        "name": "Windeater Staff (Skin)"
    },
    "30840303": {
        "id": 30840303,
        "name": "Stormchant (Skin)"
    },
    "30840401": {
        "id": 30840401,
        "name": "Tonitrus (Skin)"
    },
    "30840403": {
        "id": 30840403,
        "name": "Luminchant (Skin)"
    },
    "30840501": {
        "id": 30840501,
        "name": "Sanity's Bane (Skin)"
    },
    "30840502": {
        "id": 30840502,
        "name": "Ebonchant (Skin)"
    },
    "30849901": {
        "id": 30849901,
        "name": "Staff of Life (Skin)"
    },
    "30849902": {
        "id": 30849902,
        "name": "Staff of Fortune (Skin)"
    },
    "30849903": {
        "id": 30849903,
        "name": "Beauty's Balm (Skin)"
    },
    "30850101": {
        "id": 30850101,
        "name": "Staff of the Red Emperor (Skin)"
    },
    "30850102": {
        "id": 30850102,
        "name": "Endless Demise (Skin)"
    },
    "30850103": {
        "id": 30850103,
        "name": "Igniflare Core (Skin)"
    },
    "30850104": {
        "id": 30850104,
        "name": "Blazegambol (Skin)"
    },
    "30850106": {
        "id": 30850106,
        "name": "Fangflame Staff (Skin)"
    },
    "30850107": {
        "id": 30850107,
        "name": "Chimeratech Cardinal (Skin)"
    },
    "30850109": {
        "id": 30850109,
        "name": "Wyvern Staff &quot;Elsewhere&quot; (Skin)"
    },
    "30850110": {
        "id": 30850110,
        "name": "Ruinous Eruption (Skin)"
    },
    "30850111": {
        "id": 30850111,
        "name": "Flamma Staff (Skin)"
    },
    "30850116": {
        "id": 30850116,
        "name": "Eternal Breeze (Skin)"
    },
    "30850201": {
        "id": 30850201,
        "name": "Bracing Waters (Skin)"
    },
    "30850202": {
        "id": 30850202,
        "name": "Endless Azure Core (Skin)"
    },
    "30850203": {
        "id": 30850203,
        "name": "Drenching Staff (Skin)"
    },
    "30850204": {
        "id": 30850204,
        "name": "Ocean's Embrace (Skin)"
    },
    "30850206": {
        "id": 30850206,
        "name": "Riptide Staff (Skin)"
    },
    "30850207": {
        "id": 30850207,
        "name": "Breath Snuffer (Skin)"
    },
    "30850208": {
        "id": 30850208,
        "name": "Chimeratech Metaldetes (Skin)"
    },
    "30850210": {
        "id": 30850210,
        "name": "Flumen Staff (Skin)"
    },
    "30850301": {
        "id": 30850301,
        "name": "Ancient Mage's Windcane (Skin)"
    },
    "30850302": {
        "id": 30850302,
        "name": "Rise and Fall (Skin)"
    },
    "30850303": {
        "id": 30850303,
        "name": "Skypainter Staff (Skin)"
    },
    "30850304": {
        "id": 30850304,
        "name": "Stormruler (Skin)"
    },
    "30850306": {
        "id": 30850306,
        "name": "Whirlwind Staff (Skin)"
    },
    "30850307": {
        "id": 30850307,
        "name": "Chimeratech Marjoram (Skin)"
    },
    "30850309": {
        "id": 30850309,
        "name": "Blastphantom (Skin)"
    },
    "30850310": {
        "id": 30850310,
        "name": "Staff of Ventus (Skin)"
    },
    "30850401": {
        "id": 30850401,
        "name": "Light of Judgment (Skin)"
    },
    "30850402": {
        "id": 30850402,
        "name": "Genesis Bringer (Skin)"
    },
    "30850403": {
        "id": 30850403,
        "name": "Aria of Valor (Skin)"
    },
    "30850404": {
        "id": 30850404,
        "name": "Heavensneer (Skin)"
    },
    "30850406": {
        "id": 30850406,
        "name": "Dominus of Ever (Skin)"
    },
    "30850407": {
        "id": 30850407,
        "name": "Beastblast Staff (Skin)"
    },
    "30850408": {
        "id": 30850408,
        "name": "Glintshine Grudge (Skin)"
    },
    "30850409": {
        "id": 30850409,
        "name": "Chimeratech Procyon (Skin)"
    },
    "30850411": {
        "id": 30850411,
        "name": "Everfulgor (Skin)"
    },
    "30850501": {
        "id": 30850501,
        "name": "Caduceus (Skin)"
    },
    "30850502": {
        "id": 30850502,
        "name": "Aria of Lamentation (Skin)"
    },
    "30850503": {
        "id": 30850503,
        "name": "Dark Hunger (Skin)"
    },
    "30850505": {
        "id": 30850505,
        "name": "Dominus of the Truedark (Skin)"
    },
    "30850506": {
        "id": 30850506,
        "name": "Malevolence Staff (Skin)"
    },
    "30850507": {
        "id": 30850507,
        "name": "Chimeratech Coda (Skin)"
    },
    "30850509": {
        "id": 30850509,
        "name": "Creeping Rancor (Skin)"
    },
    "30859901": {
        "id": 30859901,
        "name": "Cane of Soul's Repose (Skin)"
    },
    "30859902": {
        "id": 30859902,
        "name": "Rainbow Cane (Staff) (Skin)"
    },
    "30859903": {
        "id": 30859903,
        "name": "Otherworldly Bough (Skin)"
    },
    "30859904": {
        "id": 30859904,
        "name": "Mega Staff (Skin)"
    },
    "30859905": {
        "id": 30859905,
        "name": "Black Dragon Staff (Skin)"
    },
    "30859921": {
        "id": 30859921,
        "name": "Fate's Fulcrum (Skin)"
    },
    "30859922": {
        "id": 30859922,
        "name": "Drifting Future (Skin)"
    },
    "30859923": {
        "id": 30859923,
        "name": "Elegant Waltz (Skin)"
    },
    "30860101": {
        "id": 30860101,
        "name": "Gjallarhorn (Skin)"
    },
    "30860103": {
        "id": 30860103,
        "name": "Gjallarhorn (Skin)"
    },
    "30860104": {
        "id": 30860104,
        "name": "Flamerollick (Skin)"
    },
    "30860201": {
        "id": 30860201,
        "name": "Kunado (Skin)"
    },
    "30860203": {
        "id": 30860203,
        "name": "Kunado (Skin)"
    },
    "30860204": {
        "id": 30860204,
        "name": "Ruler of the Jeweled Tide (Skin)"
    },
    "30860301": {
        "id": 30860301,
        "name": "Avalon (Skin)"
    },
    "30860303": {
        "id": 30860303,
        "name": "Avalon (Skin)"
    },
    "30860304": {
        "id": 30860304,
        "name": "Squallruler (Skin)"
    },
    "30860401": {
        "id": 30860401,
        "name": "Del Frith (Skin)"
    },
    "30860403": {
        "id": 30860403,
        "name": "Del Frith (Skin)"
    },
    "30860404": {
        "id": 30860404,
        "name": "Cosmic Ruler (Skin)"
    },
    "30860501": {
        "id": 30860501,
        "name": "Li Zhang (Skin)"
    },
    "30860503": {
        "id": 30860503,
        "name": "Li Zhang (Skin)"
    },
    "30860504": {
        "id": 30860504,
        "name": "Consuming Darkness (Skin)"
    },
    "30919901": {
        "id": 30919901,
        "name": "Battleworn Manacaster (Skin)"
    },
    "30940102": {
        "id": 30940102,
        "name": "Antique Ray (Skin)"
    },
    "30940202": {
        "id": 30940202,
        "name": "Antique Flow (Skin)"
    },
    "30940302": {
        "id": 30940302,
        "name": "Antique Gale (Skin)"
    },
    "30940402": {
        "id": 30940402,
        "name": "Antique Blaze (Skin)"
    },
    "30940502": {
        "id": 30940502,
        "name": "Antique Darkness (Skin)"
    },
    "30949901": {
        "id": 30949901,
        "name": "Antique Manacaster (Skin)"
    },
    "30949902": {
        "id": 30949902,
        "name": "Antique Manacaster Mk. 2 (Skin)"
    },
    "30950102": {
        "id": 30950102,
        "name": "Chanzelian Caster Mk. 65 (Skin)"
    },
    "30950103": {
        "id": 30950103,
        "name": "Crimson Trigger (Skin)"
    },
    "30950110": {
        "id": 30950110,
        "name": "Chimeratech Gunner (Skin)"
    },
    "30950116": {
        "id": 30950116,
        "name": "Royal Dominator (Skin)"
    },
    "30950119": {
        "id": 30950119,
        "name": "Alliance Trigger (Skin)"
    },
    "30950202": {
        "id": 30950202,
        "name": "Chanzelian Caster Mk. 72 (Skin)"
    },
    "30950203": {
        "id": 30950203,
        "name": "Aqua Trigger (Skin)"
    },
    "30950210": {
        "id": 30950210,
        "name": "Chimeratech Marella (Skin)"
    },
    "30950219": {
        "id": 30950219,
        "name": "Worthless Shot (Skin)"
    },
    "30950302": {
        "id": 30950302,
        "name": "Chanzelian Caster Mk. 21 (Skin)"
    },
    "30950303": {
        "id": 30950303,
        "name": "Tempest Trigger (Skin)"
    },
    "30950310": {
        "id": 30950310,
        "name": "Chimeratech Fennel (Skin)"
    },
    "30950402": {
        "id": 30950402,
        "name": "Chanzelian Caster Mk. 62 (Skin)"
    },
    "30950403": {
        "id": 30950403,
        "name": "Thundertrigger (Skin)"
    },
    "30950410": {
        "id": 30950410,
        "name": "Chimeratech Al Nasr (Skin)"
    },
    "30950502": {
        "id": 30950502,
        "name": "Chanzelian Caster Mk. 81 (Skin)"
    },
    "30950503": {
        "id": 30950503,
        "name": "Curse Trigger (Skin)"
    },
    "30950510": {
        "id": 30950510,
        "name": "Chimeratech Cantata (Skin)"
    },
    "30959901": {
        "id": 30959901,
        "name": "Chanzelian Caster (Skin)"
    },
    "30959902": {
        "id": 30959902,
        "name": "Chanzelian Caster Mk. 73 (Skin)"
    },
    "30959918": {
        "id": 30959918,
        "name": "Replica Machine Gun (Skin)"
    },
    "30959921": {
        "id": 30959921,
        "name": "Magnum Opus (Skin)"
    },
    "30959922": {
        "id": 30959922,
        "name": "ExMM109 &quot;Orestes&quot; (Skin)"
    },
    "30960101": {
        "id": 30960101,
        "name": "Draupnir (Skin)"
    },
    "30960103": {
        "id": 30960103,
        "name": "Draupnir (Skin)"
    },
    "30960104": {
        "id": 30960104,
        "name": "Big Bang Trigger (Skin)"
    },
    "30960201": {
        "id": 30960201,
        "name": "Ame no Torifune (Skin)"
    },
    "30960203": {
        "id": 30960203,
        "name": "Ame no Torifune (Skin)"
    },
    "30960204": {
        "id": 30960204,
        "name": "Aquamarine Trigger (Skin)"
    },
    "30960301": {
        "id": 30960301,
        "name": "Gallatin (Skin)"
    },
    "30960303": {
        "id": 30960303,
        "name": "Gallatin (Skin)"
    },
    "30960304": {
        "id": 30960304,
        "name": "Cyclone Trigger (Skin)"
    },
    "30960401": {
        "id": 30960401,
        "name": "Gae Assail"
    },
    "30960403": {
        "id": 30960403,
        "name": "Gae Assail (Skin)"
    },
    "30960404": {
        "id": 30960404,
        "name": "Divine Trigger (Skin)"
    },
    "30960501": {
        "id": 30960501,
        "name": "Wanli Qi Yunyan (Skin)"
    },
    "30960503": {
        "id": 30960503,
        "name": "Wanli Qi Yunyan (Skin)"
    },
    "30960504": {
        "id": 30960504,
        "name": "Dusk Trigger (Skin)"
    },
    "39900001": {
        "id": 39900001,
		"name": ""
    },
	"39800001": {
		"id": 39800001,
		"name": ""
	},
	"39800001": {
		"id": 39800001,
		"name": ""
	},
	"39800002": {
		"id": 39800002,
		"name": ""
	},
	"39800003": {
		"id": 39800003,
		"name": ""
	},
	"39800004": {
		"id": 39800004,
		"name": ""
	},
	"39800005": {
		"id": 39800005,
		"name": ""
	},
	"39800006": {
		"id": 39800006,
		"name": ""
	},
	"39800007": {
		"id": 39800007,
		"name": ""
	},
	"39800008": {
		"id": 39800008,
		"name": ""
	},
	"39800009": {
		"id": 39800009,
		"name": ""
	},
	"39900002": {
		"id": 39900002,
		"name": ""
	},
	"39900003": {
		"id": 39900003,
		"name": ""
	},
	"39900004": {
		"id": 39900004,
		"name": ""
	},
	"39900005": {
		"id": 39900005,
		"name": ""
	},
	"39900006": {
		"id": 39900006,
		"name": ""
	},
	"39900007": {
		"id": 39900007,
		"name": ""
	},
	"39900019": {
		"id": 39900019,
		"name": ""
	},
	"39900020": {
		"id": 39900020,
		"name": ""
	},
	"39900021": {
		"id": 39900021,
		"name": ""
	},
	"39900022": {
		"id": 39900022,
		"name": ""
	},
	"39900023": {
		"id": 39900023,
		"name": ""
	},
	"39900024": {
		"id": 39900024,
		"name": ""
	},
	"39900025": {
		"id": 39900025,
		"name": ""
	},
	"39900026": {
		"id": 39900026,
		"name": ""
	},
	"39900027": {
		"id": 39900027,
		"name": ""
	},
	"39900028": {
		"id": 39900028,
		"name": ""
	},
	"39900029": {
		"id": 39900029,
		"name": ""
	},
	"39900030": {
		"id": 39900030,
		"name": ""
	},
	"39900031": {
		"id": 39900031,
		"name": ""
	},
	"39900032": {
		"id": 39900032,
		"name": ""
	},
	"39900033": {
		"id": 39900033,
		"name": ""
	},
	"39900034": {
		"id": 39900034,
		"name": ""
	},
	"39900035": {
		"id": 39900035,
		"name": ""
	},
	"39900036": {
		"id": 39900036,
		"name": ""
	},
	"39900037": {
		"id": 39900037,
		"name": ""
	},
	"39900038": {
		"id": 39900038,
		"name": ""
	},
	"39900039": {
		"id": 39900039,
		"name": ""
	},
	"39900040": {
		"id": 39900040,
		"name": ""
	},
	"39900041": {
		"id": 39900041,
		"name": ""
	},
	"39900042": {
		"id": 39900042,
		"name": ""
	},
	"39900043": {
		"id": 39900043,
		"name": ""
	},
	"39900044": {
		"id": 39900044,
		"name": ""
	},
	"39900045": {
		"id": 39900045,
		"name": ""
	},
	"39900046": {
		"id": 39900046,
		"name": ""
	},
	"39900047": {
		"id": 39900047,
		"name": ""
	},
	"39900048": {
		"id": 39900048,
		"name": ""
	},
	"39900049": {
		"id": 39900049,
		"name": ""
	},
	"39900050": {
		"id": 39900050,
		"name": ""
	},
	"39900051": {
		"id": 39900051,
		"name": ""
	}
}

function GetWeaponInfo(WeaponID, Attribute) {
	return WeaponInfoMap[String(WeaponID)][Attribute];
}

function GenerateWeaponSaveTemplate() {
	let FullWeaponTemplate = []
	let FullWeaponSkinTemplate = [];
	let i = 0; 
	while (i < Object.keys(WeaponInfoMap).length) {
		const WeaponID = Object.keys(WeaponInfoMap)[i];
		var Template = {
			"weapon_body_id":  WeaponInfoMap[WeaponID]['id'],
			"buildup_count": 0,
			"limit_break_count": 0,
			"limit_over_count": 0,
			"equipable_count": 1,
			"additional_crest_slot_type_1_count": 0,
			"additional_crest_slot_type_2_count": 0,
			"additional_crest_slot_type_3_count": 0,
			"additional_effect_count": 0,
			"unlock_weapon_passive_ability_no_list": [  0, 0, 0, 0, 0,
														0, 0, 0, 0, 0,
														0, 0, 0, 0, 0 ],
			"fort_passive_chara_weapon_buildup_count": 0,
			"is_new": 1,
			"gettime": Math.floor(Date.now() / 1000)
        }
		var SkinTemplate = {
			"weapon_skin_id": WeaponInfoMap[WeaponID]['id'],
			"is_new": 1,
			"gettime": Math.floor(Date.now() / 1000)
		};
		FullWeaponTemplate[i] = Template;
		FullWeaponSkinTemplate[i] = SkinTemplate;
		i++;
	}
	return [FullWeaponTemplate, FullWeaponSkinTemplate];
}

function GenerateWeaponMaxSaveTemplate() {
	let FullWeaponTemplate = []
	let FullWeaponSkinTemplate = [];
	let i = 0; 
	while (i < Object.keys(WeaponInfoMap).length) {
		const WeaponID = Object.keys(WeaponInfoMap)[i];
		var Template = {
			"weapon_body_id":  WeaponInfoMap[WeaponID]['id'],
			"buildup_count": 0,
			"limit_break_count": 0,
			"limit_over_count": 0,
			"equipable_count": 4,
			"additional_crest_slot_type_1_count": 0,
			"additional_crest_slot_type_2_count": 0,
			"additional_crest_slot_type_3_count": 0,
			"additional_effect_count": 0,
			"unlock_weapon_passive_ability_no_list": [  0, 0, 0, 0, 0,
														0, 0, 0, 0, 0,
														0, 0, 0, 0, 0 ],
			"fort_passive_chara_weapon_buildup_count": 1,
			"is_new": 1,
			"gettime": Math.floor(Date.now() / 1000)
        }
		FullWeaponTemplate[i] = Template;
		switch(WeaponInfoMap[WeaponID]['rarity']) {
			case 1:
				break;
			case 2:
				Template['buildup_count'] = 10;
				Template['limit_break_count'] = 4;
				break;
			case 3:
				Template['buildup_count'] = 20;
				Template['limit_break_count'] = 4;
				break;
			case 4:
				Template['buildup_count'] = 30;
				Template['limit_break_count'] = 4;
				break;
			case 5:
				Template['buildup_count'] = 70;
				Template['limit_break_count'] = 8;
				Template['additional_crest_slot_type_1_count'] = 1;
				Template['additional_effect_count'] = 2;
				break;
			case 6:
				Template['buildup_count'] = 90;
				Template['limit_break_count'] = 8;
				Template['limit_over_count'] = 2;
				Template['additional_crest_slot_type_1_count'] = 1;
				Template['additional_crest_slot_type_3_count'] = 2;
				Template['additional_effect_count'] = 2;
				break;
		}
		i++;
	}
	let y = 0;
	while (y < Object.keys(WeaponSkinInfoMap).length) {
		const WeaponSkinID = Object.keys(WeaponSkinInfoMap)[y];
		var SkinTemplate = {
			"weapon_skin_id": WeaponSkinInfoMap[WeaponSkinID]['id'],
			"is_new": 1,
			"gettime": Math.floor(Date.now() / 1000)
		}
		FullWeaponSkinTemplate[y] = SkinTemplate;
		y++;
	}
	return [FullWeaponTemplate, FullWeaponSkinTemplate];
}

function CreateWeaponFromGift(ID) {
	var Template = {
        "weapon_body_id": ID,
        "buildup_count": 0,
        "limit_break_count": 0,
        "limit_over_count": 0,
        "equipable_count": 1,
        "additional_crest_slot_type_1_count": 0,
        "additional_crest_slot_type_2_count": 0,
        "additional_crest_slot_type_3_count": 0,
        "additional_effect_count": 0,
        "unlock_weapon_passive_ability_no_list": [  0, 0, 0, 0, 0,
													0, 0, 0, 0, 0,
													0, 0, 0, 0, 0 ],
        "fort_passive_chara_weapon_buildup_count": 0,
        "is_new": 1,
        "gettime": Math.floor(Date.now() / 1000)
	}
	var Template2 = {
			"weapon_skin_id": ID,
			"is_new": 1,
			"gettime": Math.floor(Date.now() / 1000)
	}
	return [Template, Template2];
}

function WeaponCost(WeaponID, Buildup, UserIndexRecord) {
	let UpdateMaterialList = [];
	let WeaponSkinList = [];
	let Error = 0;
	for (const y in Buildup) {
		if (Buildup[y]['buildup_piece_type'] == 7) {
			const LevelUpData = WeaponLevelInfoMap[String(WeaponInfoMap[String(WeaponID)]['rarity'])][String(Buildup[y]['step'])];
			for (const v in LevelUpData['step_cost']) {
				switch(LevelUpData['step_cost'][v]['entity_type']) {
					case 4:
						UserIndexRecord['user_data']['coin'] -= LevelUpData['step_cost'][v]['quantity'];
						break;
					case 8:
						const MaterialIndex = UserIndexRecord['material_list'].findIndex(x => x.material_id == LevelUpData['step_cost'][v]['entity_id']);
						UserIndexRecord['material_list'][MaterialIndex]['quantity'] -= LevelUpData['step_cost'][v]['quantity'];
						const UpdateIndex = UpdateMaterialList.findIndex(x => x.material_id == LevelUpData['step_cost'][v]['entity_id']);
						if (UpdateIndex != -1) {
							UpdateMaterialList[UpdateIndex] = UserIndexRecord['material_list'][MaterialIndex];
						}
						else { UpdateMaterialList.push(UserIndexRecord['material_list'][MaterialIndex]); }
						break;
				}
			}
		}
		else if (Buildup[y]['buildup_piece_type'] == 8) {
			const UpgradeData = WeaponPassiveInfoMap[String(WeaponInfoMap[String(WeaponID)]['passive_group'])][String(Buildup[y]['buildup_piece_no'])];
			const UpgradeCost = UpgradeData['step_cost'];
			for (let q in UpgradeCost) {
				switch(UpgradeCost[q]['entity_type']) {
					case 4:
						UserIndexRecord['user_data']['coin'] -= UpgradeCost[q]['quantity'];
						break;
					case 8:
						const MaterialIndex = UserIndexRecord['material_list'].findIndex(x => x.material_id == UpgradeCost[q]['entity_id']);
						UserIndexRecord['material_list'][MaterialIndex]['quantity'] -= UpgradeCost[q]['quantity'];
						const UpdateIndex = UpdateMaterialList.findIndex(x => x.material_id == UpgradeCost[q]['entity_id']);
						if (UpdateIndex != -1) {
							UpdateMaterialList[UpdateIndex] = UserIndexRecord['material_list'][MaterialIndex];
						}
						else { UpdateMaterialList.push(UserIndexRecord['material_list'][MaterialIndex]); }
						break;
				}
			}
			if (UpgradeData['reward_skin_no_1'] != 0) {
				const SkinTemplate = {
					"weapon_skin_id": UpgradeData['reward_skin_no_1'],
					"is_new": 1,
					"gettime": Math.floor(Date.now() / 1000)
				}
				UserIndexRecord['weapon_skin_list'].push(SkinTemplate);
				WeaponSkinList.push(SkinTemplate);
			}
			if (UpgradeData['reward_skin_no_2'] != 0) {
				const SkinTemplate = {
					"weapon_skin_id": UpgradeData['reward_skin_no_2'],
					"is_new": 1,
					"gettime": Math.floor(Date.now() / 1000)
				}
				UserIndexRecord['weapon_skin_list'].push(SkinTemplate);
				WeaponSkinList.push(SkinTemplate);
			}
		}
		else {
			const UpgradeData = WeaponUpgradeInfoMap[String(WeaponInfoMap[String(WeaponID)]['upgrade_group'])][String(Buildup[y]['buildup_piece_type'])][String(Buildup[y]['step'])];
			if (UpgradeData == undefined) { return [ UserIndexRecord, [], [], 6103 ]; }
			const UpgradeCost = UpgradeData['step_cost'];
			const WeaponRarity = WeaponInfoMap[String(WeaponID)]['rarity'];
			if (Buildup[y]['is_use_dedicated_material'] == 1) {
				let UpgradeItem = 112002001;
				if (WeaponRarity == 6) { UpgradeItem = 112003001; }
				const UpgradeIndex = UserIndexRecord['material_list'].findIndex(x => x.material_id == UpgradeItem);
				UserIndexRecord['material_list'][UpgradeIndex]['quantity'] -= 1;
				
				const UpdateIndex = UpdateMaterialList.findIndex(x => x.material_id == UpgradeItem);
				if (UpdateIndex != -1) {
					UpdateMaterialList[UpdateIndex] = UserIndexRecord['material_list'][UpgradeIndex];
				}
				else { UpdateMaterialList.push(UserIndexRecord['material_list'][UpgradeIndex]); }
			}
			else {
				for (let i in UpgradeCost) {
					switch(UpgradeCost[i]['entity_type']) {
						case 4:
							UserIndexRecord['user_data']['coin'] -= UpgradeCost[i]['quantity'];
							break;
						case 8:
							const MaterialIndex = UserIndexRecord['material_list'].findIndex(x => x.material_id == UpgradeCost[i]['entity_id']);
							UserIndexRecord['material_list'][MaterialIndex]['quantity'] -= UpgradeCost[i]['quantity'];
							const UpdateIndex = UpdateMaterialList.findIndex(x => x.material_id == UpgradeCost[i]['entity_id']);
							if (UpdateIndex != -1) {
								UpdateMaterialList[UpdateIndex] = UserIndexRecord['material_list'][MaterialIndex];
							}
							else { UpdateMaterialList.push(UserIndexRecord['material_list'][MaterialIndex]); }
							break;
					}
				}
			}
			if (UpgradeData['reward_skin_no'] != 0) {
				const SkinTemplate = {
					"weapon_skin_id": WeaponInfoMap[String(WeaponID)]['reward_skin'][UpgradeData['reward_skin_no'] - 1],
					"is_new": 1,
					"gettime": Math.floor(Date.now() / 1000)
				}
				UserIndexRecord['weapon_skin_list'].push(SkinTemplate);
				WeaponSkinList.push(SkinTemplate);
			}
		}
	}
	return [UserIndexRecord, UpdateMaterialList, WeaponSkinList, Error]
}

function WeaponBuild(WeaponID, Buildup, PreviousWeaponData, UserPassiveList) {
	var Template = {
		"weapon_body_id": WeaponID,
        "buildup_count": PreviousWeaponData['buildup_count'],
        "limit_break_count": PreviousWeaponData['limit_break_count'],
        "limit_over_count": PreviousWeaponData['limit_over_count'],
        "equipable_count": PreviousWeaponData['equipable_count'],
        "additional_crest_slot_type_1_count": PreviousWeaponData['additional_crest_slot_type_1_count'],
        "additional_crest_slot_type_2_count": PreviousWeaponData['additional_crest_slot_type_2_count'],
        "additional_crest_slot_type_3_count": PreviousWeaponData['additional_crest_slot_type_3_count'],
        "additional_effect_count": PreviousWeaponData['additional_effect_count'],
        "unlock_weapon_passive_ability_no_list": PreviousWeaponData['unlock_weapon_passive_ability_no_list'],
        "fort_passive_chara_weapon_buildup_count": PreviousWeaponData['fort_passive_chara_weapon_buildup_count'],
        "is_new": 0,
        "gettime": PreviousWeaponData['gettime']
	}
	let IsUpdate = false;
	for (let i in Buildup) {
		switch(Buildup[i]['buildup_piece_type']) {
			case 1: // Unbind
				if (Buildup['step'] == 9) {
					Template['limit_over_count'] = 1; }
				else { Template['limit_break_count'] = Buildup[i]['step']; }
				break;
			case 2: // Refine
				Template['limit_over_count'] = Buildup[i]['step'];
				break;
			case 3: // Wyrmprint Slot
				Template['additional_crest_slot_type_1_count'] = Buildup[i]['step'];
				break;
			case 5: // Weapon Bonus
				Template['fort_passive_chara_weapon_buildup_count'] = Buildup[i]['step'];
				break;
			case 6: // Copies
				Template['equipable_count'] = Buildup[i]['step'];
				break;
			case 7: // Level Up
				Template['buildup_count'] = Buildup[i]['step'];
				break;
			case 8: // Void Passives
				Template['unlock_weapon_passive_ability_no_list'][Buildup[i]['buildup_piece_no'] - 1] = 1;
				let StepNumber = String(Buildup[i]['buildup_piece_no']);
				if (StepNumber.length == 1) { StepNumber = "0" + Buildup[i]['buildup_piece_no']; }
				const PassiveNumber = String(WeaponInfoMap[String(WeaponID)]['passive_group']) + StepNumber;
				UserPassiveList.push({"weapon_passive_ability_id": parseInt(PassiveNumber)});
				IsUpdate = true;
				break;
			case 9: // Wyrmprint Slot 2?
				Template['additional_crest_slot_type_3_count'] = Buildup[i]['step'];
				break;
		}
	}
	return [Template, UserPassiveList, IsUpdate];
}

function WeaponIDByName(WeaponName) {
	const List = Object.keys(WeaponInfoMap);
	for (const i in List) {
		if (WeaponInfoMap[List[i]]['name'] == WeaponName) {
			return parseInt(List[i]);
		}
	}
	return 0;
}

module.exports = { GetWeaponInfo, WeaponIDByName, GenerateWeaponSaveTemplate, GenerateWeaponMaxSaveTemplate, CreateWeaponFromGift, WeaponBuild, WeaponCost }