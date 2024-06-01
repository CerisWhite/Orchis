// Event Map
const ItemMap = require('../IDMaps/ItemMap.js');

const EventInfoMap = {
  "20401": {
    "id": 20401,
    "event_type": 1,
    "event_name": "Loyalty's Requiem",
    "event_character": 10240201,
    "has_friend": true,
    "friend_join_story": 2040101,
    "event_trade_id": 0
  },
  "20402": {
    "id": 20402,
    "event_type": 1,
    "event_name": "Kindness and Captivity",
    "event_character": 10340101,
    "has_friend": true,
    "friend_join_story": 2040201,
    "event_trade_id": 0
  },
  "20403": {
    "id": 20403,
    "event_type": 1,
    "event_name": "Resplendent Refrain",
    "event_character": 10640403,
    "has_friend": true,
    "friend_join_story": 2040306,
    "event_trade_id": 0
  },
  "20404": {
    "id": 20404,
    "event_type": 1,
    "event_name": "Fortune from Afar",
    "event_character": 10540501,
    "has_friend": true,
    "friend_join_story": 2040401,
    "event_trade_id": 0
  },
  "20405": {
    "id": 20405,
    "event_type": 1,
    "event_name": "Skyborne Spectacle",
    "event_character": 10340301,
    "has_friend": true,
    "friend_join_story": 2040501,
    "event_trade_id": 0
  },
  "20406": {
    "id": 20406,
    "event_type": 1,
    "event_name": "A Waltz with Fate",
    "event_character": 10840403,
    "has_friend": true,
    "friend_join_story": 2040601,
    "event_trade_id": 0
  },
  "20407": {
    "id": 20407,
    "event_type": 1,
    "event_name": "Echoes of Antiquity",
    "event_character": 10540102,
    "has_friend": true,
    "friend_join_story": 2040701,
    "event_trade_id": 0
  },
  "20408": {
    "id": 20408,
    "event_type": 1,
    "event_name": "Scars of the Syndicate",
    "event_character": 10240503,
    "has_friend": true,
    "friend_join_story": 2040802,
    "event_trade_id": 0
  },
  "20409": {
    "id": 20409,
    "event_type": 1,
    "event_name": "Doomsday Getaway",
    "event_character": 10450303,
    "has_friend": true,
    "friend_join_story": 2040901,
    "event_trade_id": 0
  },
  "20410": {
    "id": 20410,
    "event_type": 1,
    "event_name": "Timeworn Torment",
    "event_character": 10350403,
    "has_friend": true,
    "friend_join_story": 2041001,
    "event_trade_id": 0
  },
  "20411": {
    "id": 20411,
    "event_type": 1,
    "event_name": "A Splash of Adventure",
    "event_character": 10740202,
    "has_friend": true,
    "friend_join_story": 2041101,
    "event_trade_id": 0
  },
  "20412": {
    "id": 20412,
    "event_type": 1,
    "event_name": "Resplendent Refrain",
    "event_character": 10640403,
    "has_friend": true,
    "friend_join_story": 2041206,
    "event_trade_id": 0
  },
  "20413": {
    "id": 20413,
    "event_type": 1,
    "event_name": "Fractured Futures",
    "event_character": 10140503,
    "has_friend": true,
    "friend_join_story": 2041304,
    "event_trade_id": 10201
  },
  "20414": {
    "id": 20414,
    "event_type": 1,
    "event_name": "Fortune from Afar",
    "event_character": 10540501,
    "has_friend": true,
    "friend_join_story": 2041401,
    "event_trade_id": 0
  },
  "20415": {
    "id": 20415,
    "event_type": 1,
    "event_name": "Skyborne Spectacle",
    "event_character": 10340301,
    "has_friend": true,
    "friend_join_story": 2041501,
    "event_trade_id": 0
  },
  "20416": {
    "id": 20416,
    "event_type": 1,
    "event_name": "Kindness and Captivity",
    "event_character": 10340101,
    "has_friend": true,
    "friend_join_story": 2041601,
    "event_trade_id": 0
  },
  "20417": {
    "id": 20417,
    "event_type": 1,
    "event_name": "A Clawful Caper",
    "event_character": 10240402,
    "has_friend": true,
    "friend_join_story": 2041702,
    "event_trade_id": 0
  },
  "20418": {
    "id": 20418,
    "event_type": 1,
    "event_name": "Fortune from Afar",
    "event_character": 10540501,
    "has_friend": true,
    "friend_join_story": 2041801,
    "event_trade_id": 0
  },
  "20419": {
    "id": 20419,
    "event_type": 1,
    "event_name": "Skyborne Spectacle",
    "event_character": 10340301,
    "has_friend": true,
    "friend_join_story": 2041901,
    "event_trade_id": 0
  },
  "20420": {
    "id": 20420,
    "event_type": 1,
    "event_name": "Loyalty's Requiem",
    "event_character": 10240201,
    "has_friend": true,
    "friend_join_story": 2042001,
    "event_trade_id": 0
  },
  "20421": {
    "id": 20421,
    "event_type": 1,
    "event_name": "A Splash of Adventure",
    "event_character": 10740202,
    "has_friend": true,
    "friend_join_story": 2042101,
    "event_trade_id": 0
  },
  "20422": {
    "id": 20422,
    "event_type": 1,
    "event_name": "Fractured Futures",
    "event_character": 10140503,
    "has_friend": true,
    "friend_join_story": 2042204,
    "event_trade_id": 0
  },
  "20423": {
    "id": 20423,
    "event_type": 1,
    "event_name": "Forgotten Truths",
    "event_character": 10250403,
    "has_friend": true,
    "friend_join_story": 2042302,
    "event_trade_id": 0
  },
  "20424": {
    "id": 20424,
    "event_type": 1,
    "event_name": "Princess Connect! Re: Dive: A Voracious Visitor",
    "event_character": 10750203,
    "has_friend": true,
    "friend_join_story": 2042401,
    "event_trade_id": 0
  },
  "20425": {
    "id": 20425,
    "event_type": 1,
    "event_name": "Cursed Connections",
    "event_character": 10850103,
    "has_friend": true,
    "friend_join_story": 2042501,
    "event_trade_id": 0
  },
  "20426": {
    "id": 20426,
    "event_type": 1,
    "event_name": "A Clawful Caper",
    "event_character": 10240402,
    "has_friend": true,
    "friend_join_story": 2042602,
    "event_trade_id": 0
  },
  "20427": {
    "id": 20427,
    "event_type": 1,
    "event_name": "Fractured Futures",
    "event_character": 10140503,
    "has_friend": true,
    "friend_join_story": 2042704,
    "event_trade_id": 0
  },
  "20428": {
    "id": 20428,
    "event_type": 1,
    "event_name": "Forgotten Truths",
    "event_character": 10250403,
    "has_friend": true,
    "friend_join_story": 2042802,
    "event_trade_id": 0
  },
  "20429": {
    "id": 20429,
    "event_type": 1,
    "event_name": "Caged Desire",
    "event_character": 10450404,
    "has_friend": true,
    "friend_join_story": 2042906,
    "event_trade_id": 10229,
    "conviction_id": 205001006
  },
  "20430": {
    "id": 20430,
    "event_type": 1,
    "event_name": "Scars of the Syndicate",
    "event_character": 10240503,
    "has_friend": true,
    "friend_join_story": 2043002,
    "event_trade_id": 0
  },
  "20431": {
    "id": 20431,
    "event_type": 1,
    "event_name": "Dawn of Dragalia",
    "event_character": 10650305,
    "has_friend": true,
    "friend_join_story": 2043107,
    "event_trade_id": 0
  },
  "20432": {
    "id": 20432,
    "event_type": 1,
    "event_name": "A Waltz with Fate",
    "event_character": 10840403,
    "has_friend": true,
    "friend_join_story": 2043201,
    "event_trade_id": 0
  },
  "20433": {
    "id": 20433,
    "event_type": 1,
    "event_name": "Rage of Chronos",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 0
  },
  "20434": {
    "id": 20434,
    "event_type": 1,
    "event_name": "Echoes of Antiquity",
    "event_character": 10540102,
    "has_friend": true,
    "friend_join_story": 2043401,
    "event_trade_id": 0
  },
  "20435": {
    "id": 20435,
    "event_type": 1,
    "event_name": "Stranded Scions",
    "event_character": 10350506,
    "has_friend": true,
    "friend_join_story": 2043501,
    "event_trade_id": 0
  },
  "20436": {
    "id": 20436,
    "event_type": 1,
    "event_name": "Timeworn Torment",
    "event_character": 10350403,
    "has_friend": true,
    "friend_join_story": 2043601,
    "event_trade_id": 0
  },
  "20437": {
    "id": 20437,
    "event_type": 1,
    "event_name": "Doomsday Getaway",
    "event_character": 10450303,
    "has_friend": true,
    "friend_join_story": 2043701,
    "event_trade_id": 0
  },
  "20438": {
    "id": 20438,
    "event_type": 1,
    "event_name": "Faith Forsaken (Part One)",
    "event_character": 10250305,
    "has_friend": true,
    "friend_join_story": 2043803,
    "event_trade_id": 0
  },
  "20439": {
    "id": 20439,
    "event_type": 1,
    "event_name": "Faith Forsaken (Part Two)",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 0
  },
  "20440": {
    "id": 20440,
    "event_type": 1,
    "event_name": "Advent of the Origin",
    "event_character": 10750205,
    "has_friend": true,
    "friend_join_story": 2044002,
    "event_trade_id": 0
  },
  "20441": {
    "id": 20441,
    "event_type": 1,
    "event_name": "Celestial Showdown",
    "event_character": 10550305,
    "has_friend": true,
    "friend_join_story": 2044107,
    "event_trade_id": 0
  },
  "20442": {
    "id": 20442,
    "event_type": 1,
    "event_name": "Cursed Connections",
    "event_character": 10850103,
    "has_friend": true,
    "friend_join_story": 2044201,
    "event_trade_id": 0
  },
  "20443": {
    "id": 20443,
    "event_type": 1,
    "event_name": "Faith Forsaken (Part One)",
    "event_character": 10250305,
    "has_friend": true,
    "friend_join_story": 2044303,
    "event_trade_id": 0
  },
  "20444": {
    "id": 20444,
    "event_type": 1,
    "event_name": "Faith Forsaken (Part Two)",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 0
  },
  "20445": {
    "id": 20445,
    "event_type": 1,
    "event_name": "Princess Connect! Re: Dive: A Voracious Visitor",
    "event_character": 10750203,
    "has_friend": true,
    "friend_join_story": 2044501,
    "event_trade_id": 0
  },
  "20446": {
    "id": 20446,
    "event_type": 1,
    "event_name": "A Waltz with Fate",
    "event_character": 10840403,
    "has_friend": true,
    "friend_join_story": 2044601,
    "event_trade_id": 0
  },
  "20447": {
    "id": 20447,
    "event_type": 1,
    "event_name": "Resplendent Refrain",
    "event_character": 10640403,
    "has_friend": true,
    "friend_join_story": 2044706,
    "event_trade_id": 0
  },
  "20448": {
    "id": 20448,
    "event_type": 1,
    "event_name": "Echoes of Antiquity",
    "event_character": 10540102,
    "has_friend": true,
    "friend_join_story": 2044801,
    "event_trade_id": 0,
	"dragon_id": 20050307
  },
  "20449": {
    "id": 20449,
    "event_type": 1,
    "event_name": "Timeworn Torment",
    "event_character": 10350403,
    "has_friend": true,
    "friend_join_story": 2044901,
    "event_trade_id": 0,
	"conviction_id": 205001001
  },
  "20450": {
    "id": 20450,
    "event_type": 1,
    "event_name": "Skyborne Spectacle",
    "event_character": 10340301,
    "has_friend": true,
    "friend_join_story": 2045001,
    "event_trade_id": 0
  },
  "20451": {
    "id": 20451,
    "event_type": 1,
    "event_name": "A Clawful Caper",
    "event_character": 10240402,
    "has_friend": true,
    "friend_join_story": 2045102,
    "event_trade_id": 0
  },
  "20452": {
    "id": 20452,
    "event_type": 1,
    "event_name": "Stranded Scions",
    "event_character": 10350506,
    "has_friend": true,
    "friend_join_story": 2045201,
    "event_trade_id": 0
  },
  "20453": {
    "id": 20453,
    "event_type": 1,
    "event_name": "A Splash of Adventure",
    "event_character": 10740202,
    "has_friend": true,
    "friend_join_story": 2045301,
    "event_trade_id": 0
  },
  "20454": {
    "id": 20454,
    "event_type": 1,
    "event_name": "Doomsday Getaway",
    "event_character": 10450303,
    "has_friend": true,
    "conviction_id": 205001002,
    "friend_join_story": 2045401,
    "event_trade_id": 0
  },
  "20455": {
    "id": 20455,
    "event_type": 1,
    "event_name": "Scars of the Syndicate",
    "event_character": 10240503,
    "has_friend": true,
    "conviction_id": 0,
    "friend_join_story": 2045502,
    "event_trade_id": 0
  },
  "20456": {
    "id": 20456,
    "event_type": 1,
    "event_name": "Fortune from Afar",
    "event_character": 10540501,
    "has_friend": true,
    "friend_join_story": 2045601,
    "event_trade_id": 0
  },
  "20457": {
    "id": 20457,
    "event_type": 1,
    "event_name": "Dawn of Dragalia",
    "event_character": 10650305,
    "has_friend": true,
    "conviction_id": 205001007,
    "friend_join_story": 2045707,
    "event_trade_id": 0
  },
  "20458": {
    "id": 20458,
    "event_type": 1,
    "event_name": "Loyalty's Requiem",
    "event_character": 10240201,
    "has_friend": true,
	"conviction_id": 0,
    "friend_join_story": 2045801,
    "event_trade_id": 0
  },
  "20459": {
    "id": 20459,
    "event_type": 1,
    "event_name": "Kindness and Captivity",
    "event_character": 10340101,
    "has_friend": true,
    "friend_join_story": 2045901,
    "event_trade_id": 0
  },
  "20460": {
    "id": 20460,
    "event_type": 1,
    "event_name": "Celestial Showdown",
    "event_character": 10550305,
    "has_friend": true,
    "conviction_id": 205001010,
    "friend_join_story": 2046007,
    "event_trade_id": 0
  },
  "20461": {
    "id": 20461,
    "event_type": 1,
    "event_name": "Rage of Chronos",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 0
  },
  "20462": {
    "id": 20462,
    "event_type": 1,
    "event_name": "Advent of the Origin",
    "event_character": 10750205,
    "has_friend": true,
    "friend_join_story": 2046203,
    "event_trade_id": 0
  },
  "20801": {
    "id": 20801,
    "event_type": 4,
    "event_name": "Trick or Treasure!",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2001
  },
  "20802": {
    "id": 20802,
    "event_type": 4,
    "event_name": "A Wish to the Winds",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2002
  },
  "20803": {
    "id": 20803,
    "event_type": 4,
    "event_name": "The Miracle of Dragonyule",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2003
  },
  "20804": {
    "id": 20804,
    "event_type": 4,
    "event_name": "Dream Big Under the Big Top",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2004
  },
  "20806": {
    "id": 20806,
    "event_type": 4,
    "event_name": "The Accursed Archives",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2005
  },
  "20807": {
    "id": 20807,
    "event_type": 4,
    "event_name": "The Hunt for Harmony",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2006
  },
  "20808": {
    "id": 20808,
    "event_type": 4,
    "event_name": "Flames of Reflection",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2008
  },
  "20809": {
    "id": 20809,
    "event_type": 4,
    "event_name": "A Wish to the Winds",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2007
  },
  "20810": {
    "id": 20810,
    "event_type": 4,
    "event_name": "A Crescendo of Courage",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2009
  },
  "20811": {
    "id": 20811,
    "event_type": 4,
    "event_name": "Trick or Treasure!",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2010
  },
  "20812": {
    "id": 20812,
    "event_type": 4,
    "event_name": "The Accursed Archives",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2011
  },
  "20813": {
    "id": 20813,
    "event_type": 4,
    "event_name": "The Miracle of Dragonyule",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2012
  },
  "20814": {
    "id": 20814,
    "event_type": 4,
    "event_name": "Flames of Reflection",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2013
  },
  "20815": {
    "id": 20815,
    "event_type": 4,
    "event_name": "A Dash of Disaster",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2015
  },
  "20816": {
    "id": 20816,
    "event_type": 4,
    "event_name": "Flames of Reflection",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2016,
    "event_facility": 102001,
    "build_event_items": [
      {
        "event_item_id": 2081601,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2081602,
        "event_item_type": 10002
      },
      {
        "event_item_id": 2081603,
        "event_item_type": 10003
      }
    ],
    "build_event_material": 203007001
  },
  "20817": {
    "id": 20817,
    "event_type": 4,
    "event_name": "The Miracle of Dragonyule",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2017,
    "event_facility": 101601,
    "build_event_items": [
      {
        "event_item_id": 2081701,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2081702,
        "event_item_type": 10002
      },
      {
        "event_item_id": 2081703,
        "event_item_type": 10003
      }
    ],
    "build_event_material": 203003001
  },
  "20818": {
    "id": 20818,
    "event_type": 4,
    "event_name": "A Wish to the Winds",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2018,
    "event_facility": 101101,
    "build_event_items": [
      {
        "event_item_id": 2081801,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2081802,
        "event_item_type": 10002
      },
      {
        "event_item_id": 2081803,
        "event_item_type": 10003
      }
    ],
    "build_event_material": 203002001
  },
  "20819": {
    "id": 20819,
    "event_type": 4,
    "event_name": "The Hunt for Harmony",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2019
  },
  "20820": {
    "id": 20820,
    "event_type": 4,
    "event_name": "Dream Big Under the Big Top",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2020,
    "event_facility": 100901,
    "build_event_items": [
      {
        "event_item_id": 2082001,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2082002,
        "event_item_type": 10002
      },
      {
        "event_item_id": 2082003,
        "event_item_type": 10003
      }
    ],
    "build_event_material": 203004001
  },
  "20821": {
    "id": 20821,
    "event_type": 4,
    "event_name": "Trick or Treasure!",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2021
  },
  "20822": {
    "id": 20822,
    "event_type": 4,
    "event_name": "The Hunt for Harmony",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2022,
    "event_facility": 101801,
    "build_event_items": [
      {
        "event_item_id": 2082201,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2082202,
        "event_item_type": 10002
      },
      {
        "event_item_id": 2082203,
        "event_item_type": 10003
      }
    ],
    "build_event_material": 203006001
  },
  "20823": {
    "id": 20823,
    "event_type": 4,
    "event_name": "Rhythmic Resolutions",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2023
  },
  "20824": {
    "id": 20824,
    "event_type": 4,
    "event_name": "A Crescendo of Courage",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2024
  },
  "20825": {
    "id": 20825,
    "event_type": 4,
    "event_name": "Agents of the Goddess",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2025
  },
  "20826": {
    "id": 20826,
    "event_type": 4,
    "event_name": "Trick or Treasure!",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2026,
    "event_facility": 101501,
    "build_event_items": [
      {
        "event_item_id": 2082601,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2082602,
        "event_item_type": 10002
      },
      {
        "event_item_id": 2082603,
        "event_item_type": 10003
      }
    ],
    "build_event_material": 203001001
  },
  "20827": {
    "id": 20827,
    "event_type": 4,
    "event_name": "The Accursed Archives",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2027
  },
  "20828": {
    "id": 20828,
    "event_type": 4,
    "event_name": "The Phantom's Ransom",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2028
  },
  "20829": {
    "id": 20829,
    "event_type": 4,
    "event_name": "A Crescendo of Courage",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2029,
    "event_facility": 101301,
    "build_event_items": [
      {
        "event_item_id": 2082901,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2082902,
        "event_item_type": 10002
      },
      {
        "event_item_id": 2082903,
        "event_item_type": 10003
      }
    ],
    "build_event_material": 203008001
  },
  "20830": {
    "id": 20830,
    "event_type": 4,
    "event_name": "A Dash of Disaster",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2030
  },
  "20831": {
    "id": 20831,
    "event_type": 4,
    "event_name": "The Accursed Archives",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2031,
    "event_facility": 101701,
    "build_event_items": [
      {
        "event_item_id": 2083101,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2083102,
        "event_item_type": 10002
      },
      {
        "event_item_id": 2083103,
        "event_item_type": 10003
      }
    ],
    "build_event_material": 203005001
  },
  "20833": {
    "id": 20833,
    "event_type": 4,
    "event_name": "Divine Deception",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2033
  },
  "20834": {
    "id": 20834,
    "event_type": 4,
    "event_name": "Toll of the Deep",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2034
  },
  "20835": {
    "id": 20835,
    "event_type": 4,
    "event_name": "Agents of the Goddess",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2035
  },
  "20836": {
    "id": 20836,
    "event_type": 4,
    "event_name": "Rhythmic Resolutions",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2036
  },
  "20837": {
    "id": 20837,
    "event_type": 4,
    "event_name": "The Clockwork Heart",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2037
  },
  "20838": {
    "id": 20838,
    "event_type": 4,
    "event_name": "Divine Deception",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2038
  },
  "20839": {
    "id": 20839,
    "event_type": 4,
    "event_name": "Agents of the Goddess",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2039,
    "event_facility": 102601,
    "build_event_items": [
      {
        "event_item_id": 2083901,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2083902,
        "event_item_type": 10002
      },
      {
        "event_item_id": 2083903,
        "event_item_type": 10003
      }
    ],
    "build_event_material": 203012001
  },
  "20840": {
    "id": 20840,
    "event_type": 4,
    "event_name": "The Phantom's Ransom",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2040
  },
  "20841": {
    "id": 20841,
    "event_type": 4,
    "event_name": "A Dash of Disaster",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2041,
    "event_facility": 102401,
    "build_event_items": [
      {
        "event_item_id": 2084101,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2084102,
        "event_item_type": 10002
      },
      {
        "event_item_id": 2084103,
        "event_item_type": 10003
      }
    ],
    "build_event_material": 203010001
  },
  "20842": {
    "id": 20842,
    "event_type": 4,
    "event_name": "Rhythmic Resolutions",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2042,
    "event_facility": 102501,
    "build_event_items": [
      {
        "event_item_id": 2084201,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2084202,
        "event_item_type": 10002
      },
      {
        "event_item_id": 2084203,
        "event_item_type": 10003
      }
    ],
    "build_event_material": 203011001
  },
  "20843": {
    "id": 20843,
    "event_type": 4,
    "event_name": "The Phantom's Ransom",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2043,
    "event_facility": 102701,
    "build_event_items": [
      {
        "event_item_id": 2084301,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2084302,
        "event_item_type": 10002
      },
      {
        "event_item_id": 2084303,
        "event_item_type": 10003
      }
    ],
    "build_event_material": 203013001
  },
  "20844": {
    "id": 20844,
    "event_type": 4,
    "event_name": "Divine Deception",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2044,
    "event_facility": 102801,
    "build_event_items": [
      {
        "event_item_id": 2084401,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2084402,
        "event_item_type": 10002
      },
      {
        "event_item_id": 2084403,
        "event_item_type": 10003
      }
    ],
    "build_event_material": 203014001
  },
  "20845": {
    "id": 20845,
    "event_type": 4,
    "event_name": "Toll of the Deep",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2045,
    "event_facility": 102901,
    "build_event_items": [
      {
        "event_item_id": 2084501,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2084502,
        "event_item_type": 10002
      },
      {
        "event_item_id": 2084503,
        "event_item_type": 10003
      }
    ],
    "build_event_material": 203015001
  },
  "20846": {
    "id": 20846,
    "event_type": 4,
    "event_name": "The Clockwork Heart",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 2046,
    "event_facility": 103001,
    "build_event_items": [
      {
        "event_item_id": 2084601,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2084602,
        "event_item_type": 10002
      },
      {
        "event_item_id": 2084603,
        "event_item_type": 10003
      }
    ],
    "build_event_material": 203016001
  },
  "21301": {
    "id": 21301,
    "event_type": 5,
    "event_name": "Valentine's Confections",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 3001
  },
  "21302": {
    "id": 21302,
    "event_type": 5,
    "event_name": "Valentine's Confections",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 3002
  },
  "21303": {
    "id": 21303,
    "event_type": 5,
    "event_name": "Stirring Shadows",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 3003
  },
  "21304": {
    "id": 21304,
    "event_type": 5,
    "event_name": "Valentine's Confections",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 3004
  },
  "21305": {
    "id": 21305,
    "event_type": 5,
    "event_name": "Stirring Shadows",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 3005
  },
  "21401": {
    "id": 21401,
    "event_type": 6,
    "event_name": "Fire Emblem: Lost Heroes",
    "event_character": 10150402,
    "has_friend": true,
    "friend_join_story": 2140103,
    "event_trade_id": 10101,
    "clb01_event_items": [
      {
        "event_item_id": 2140101,
        "event_item_type": 10101
      },
      {
        "event_item_id": 2140102,
        "event_item_type": 10102
      },
      {
        "event_item_id": 2140103,
        "event_item_type": 10201
      }
    ]
  },
  "21402": {
    "id": 21402,
    "event_type": 6,
    "event_name": "Fire Emblem: Lost Heroes",
    "event_character": 10150402,
    "has_friend": true,
    "friend_join_story": 2140203,
    "event_trade_id": 10102,
    "clb01_event_items": [
      {
        "event_item_id": 2140201,
        "event_item_type": 10101
      },
      {
        "event_item_id": 2140202,
        "event_item_type": 10102
      },
      {
        "event_item_id": 2140203,
        "event_item_type": 10201
      }
    ]
  },
  "21403": {
    "id": 21403,
    "event_type": 6,
    "event_name": "Fire Emblem: Kindred Ties",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10103,
    "clb01_event_items": [
      {
        "event_item_id": 2140301,
        "event_item_type": 10101
      },
      {
        "event_item_id": 2140302,
        "event_item_type": 10102
      },
      {
        "event_item_id": 2140303,
        "event_item_type": 10201
      }
    ]
  },
  "21404": {
    "id": 21404,
    "event_type": 6,
    "event_name": "Fire Emblem: Lost Heroes",
    "event_character": 10150402,
    "has_friend": true,
    "friend_join_story": 2140403,
    "event_trade_id": 10104,
    "clb01_event_items": [
      {
        "event_item_id": 2140101,
        "event_item_type": 10101
      },
      {
        "event_item_id": 2140102,
        "event_item_type": 10102
      },
      {
        "event_item_id": 2140103,
        "event_item_type": 10201
      }
    ]
  },
  "21405": {
    "id": 21405,
    "event_type": 6,
    "event_name": "Fire Emblem: Kindred Ties",
    "event_character": 10550404,
    "has_friend": true,
    "friend_join_story": 2140502,
    "event_trade_id": 10105,
    "clb01_event_items": [
      {
        "event_item_id": 2140501,
        "event_item_type": 10101
      },
      {
        "event_item_id": 2140502,
        "event_item_type": 10102
      },
      {
        "event_item_id": 2140503,
        "event_item_type": 10201
      }
    ]
  },
  "21801": {
    "id": 21801,
    "event_type": 7,
    "event_name": "Mega Man: Chaos Protocol",
    "event_character": 10750102,
    "has_friend": true,
    "friend_join_story": 2180101,
    "event_trade_id": 10301
  },
  "22001": {
    "id": 22001,
    "event_type": 8,
    "event_name": "Monster Hunter: Primal Crisis",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10501
  },
  "22201": {
    "id": 22201,
    "event_type": 10,
    "event_name": "Nadine and Linnea's United Front",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10601
  },
  "22202": {
    "id": 22202,
    "event_type": 10,
    "event_name": "Summertime Saviors",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10602
  },
  "22203": {
    "id": 22203,
    "event_type": 10,
    "event_name": "Twinkling Twilight",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10603
  },
  "22204": {
    "id": 22204,
    "event_type": 10,
    "event_name": "Sands of Revelation",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10604
  },
  "22205": {
    "id": 22205,
    "event_type": 10,
    "event_name": "Postmortem Panic",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10605
  },
  "22206": {
    "id": 22206,
    "event_type": 10,
    "event_name": "Northern Negotiators",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10606
  },
  "22207": {
    "id": 22207,
    "event_type": 10,
    "event_name": "The Great Dragonyule Offensive",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10607
  },
  "22208": {
    "id": 22208,
    "event_type": 10,
    "event_name": "Fortune's Fray",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10608
  },
  "22209": {
    "id": 22209,
    "event_type": 10,
    "event_name": "Romance Under Siege",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10609
  },
  "22210": {
    "id": 22210,
    "event_type": 10,
    "event_name": "Ageless Artifice",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10610
  },
  "22211": {
    "id": 22211,
    "event_type": 10,
    "event_name": "Elementary Escapades",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10611
  },
  "22212": {
    "id": 22212,
    "event_type": 10,
    "event_name": "Shadow of the Mukuroshu",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10612
  },
  "22213": {
    "id": 22213,
    "event_type": 10,
    "event_name": "Blessed Bloodline",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10613
  },
  "22214": {
    "id": 22214,
    "event_type": 10,
    "event_name": "The Fabled Fortune",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10614
  },
  "22215": {
    "id": 22215,
    "event_type": 10,
    "event_name": "Drifting Sorrows",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10615
  },
  "22216": {
    "id": 22216,
    "event_type": 10,
    "event_name": "Shackles of the Syndicate",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10616
  },
  "22217": {
    "id": 22217,
    "event_type": 10,
    "event_name": "A Dazzling Defense",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10617
  },
  "22218": {
    "id": 22218,
    "event_type": 10,
    "event_name": "The Great Dragonyule Offensive",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10618
  },
  "22219": {
    "id": 22219,
    "event_type": 10,
    "event_name": "Summertime Saviors",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10619
  },
  "22220": {
    "id": 22220,
    "event_type": 10,
    "event_name": "Twinkling Twilight",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10620
  },
  "22221": {
    "id": 22221,
    "event_type": 10,
    "event_name": "Fortune's Fray",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10621
  },
  "22222": {
    "id": 22222,
    "event_type": 10,
    "event_name": "Romance Under Siege",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10622
  },
  "22223": {
    "id": 22223,
    "event_type": 10,
    "event_name": "Shadow of the Mukuroshu",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10623
  },
  "22224": {
    "id": 22224,
    "event_type": 10,
    "event_name": "Elementary Escapades",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10624
  },
  "22225": {
    "id": 22225,
    "event_type": 10,
    "event_name": "Nadine and Linnea's United Front",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10625
  },
  "22226": {
    "id": 22226,
    "event_type": 10,
    "event_name": "Blessed Bloodline",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10626
  },
  "22227": {
    "id": 22227,
    "event_type": 10,
    "event_name": "A Dazzling Defense",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10627
  },
  "22228": {
    "id": 22228,
    "event_type": 10,
    "event_name": "Sands of Revelation",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10628
  },
  "22229": {
    "id": 22229,
    "event_type": 10,
    "event_name": "Northern Negotiators",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10629
  },
  "22230": {
    "id": 22230,
    "event_type": 10,
    "event_name": "Ageless Artifice",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10630
  },
  "22231": {
    "id": 22231,
    "event_type": 10,
    "event_name": "The Fabled Fortune",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10631
  },
  "22232": {
    "id": 22232,
    "event_type": 10,
    "event_name": "Drifting Sorrows",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10632
  },
  "22233": {
    "id": 22233,
    "event_type": 10,
    "event_name": "Shackles of the Syndicate",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10633
  },
  "22301": {
    "id": 22301,
    "event_type": 11,
    "event_name": "The Alberian Battle Royale",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10701
  },
  "22901": {
    "id": 22901,
    "event_type": 12,
    "event_name": "The Children of Yggdrasil",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10801,
    "earn_event_items": [
      {
        "event_item_id": 2290101,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2290102,
        "event_item_type": 10101
      },
      {
        "event_item_id": 2290103,
        "event_item_type": 10201
      },
      {
        "event_item_id": 2290104,
        "event_item_type": 10202
      }
    ]
  },
  "22902": {
    "id": 22902,
    "event_type": 12,
    "event_name": "Knights of Alberia",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10802,
    "earn_event_items": [
      {
        "event_item_id": 2290201,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2290202,
        "event_item_type": 10101
      },
      {
        "event_item_id": 2290203,
        "event_item_type": 10201
      },
      {
        "event_item_id": 2290204,
        "event_item_type": 10202
      }
    ]
  },
  "22903": {
    "id": 22903,
    "event_type": 12,
    "event_name": "One Starry Dragonyule",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10803,
    "earn_event_items": [
      {
        "event_item_id": 2290301,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2290302,
        "event_item_type": 10101
      },
      {
        "event_item_id": 2290303,
        "event_item_type": 10201
      },
      {
        "event_item_id": 2290304,
        "event_item_type": 10202
      }
    ]
  },
  "22904": {
    "id": 22904,
    "event_type": 12,
    "event_name": "The Blood That Binds",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10804,
    "earn_event_items": [
      {
        "event_item_id": 2290401,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2290402,
        "event_item_type": 10101
      },
      {
        "event_item_id": 2290403,
        "event_item_type": 10201
      },
      {
        "event_item_id": 2290404,
        "event_item_type": 10202
      }
    ]
  },
  "22905": {
    "id": 22905,
    "event_type": 12,
    "event_name": "Operation: At Your Service",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10805,
    "earn_event_items": [
      {
        "event_item_id": 2290501,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2290502,
        "event_item_type": 10101
      },
      {
        "event_item_id": 2290503,
        "event_item_type": 10201
      },
      {
        "event_item_id": 2290504,
        "event_item_type": 10202
      }
    ]
  },
  "22906": {
    "id": 22906,
    "event_type": 12,
    "event_name": "The Children of Yggdrasil",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10806,
    "earn_event_items": [
      {
        "event_item_id": 2290601,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2290602,
        "event_item_type": 10101
      },
      {
        "event_item_id": 2290603,
        "event_item_type": 10201
      },
      {
        "event_item_id": 2290604,
        "event_item_type": 10202
      }
    ]
  },
  "22907": {
    "id": 22907,
    "event_type": 12,
    "event_name": "Knights of Alberia",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 10807,
    "earn_event_items": [
      {
        "event_item_id": 2290701,
        "event_item_type": 10001
      },
      {
        "event_item_id": 2290702,
        "event_item_type": 10101
      },
      {
        "event_item_id": 2290703,
        "event_item_type": 10201
      },
      {
        "event_item_id": 2290704,
        "event_item_type": 10202
      }
    ]
  },
  "31001": {
    "id": 31001,
    "event_type": 9,
    "event_name": "A Sweeping Retrospective",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 0
  },
  "31002": {
    "id": 31002,
    "event_type": 9,
    "event_name": "Wagabond Pupper",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 0
  },
  "31003": {
    "id": 31003,
    "event_type": 9,
    "event_name": "Ascent to Eminence",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 0
  },
  "31004": {
    "id": 31004,
    "event_type": 9,
    "event_name": "A Sweeping Retrospective",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 0
  },
  "31005": {
    "id": 31005,
    "event_type": 9,
    "event_name": "Ascent to Eminence",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 0
  },
  "31006": {
    "id": 31006,
    "event_type": 9,
    "event_name": "Ascent to Eminence",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 0
  },
  "31007": {
    "id": 31007,
    "event_type": 9,
    "event_name": "A Sweeping Retrospective",
    "event_character": 0,
    "has_friend": false,
    "friend_join_story": 0,
    "event_trade_id": 0
  },
  "39001": {
    "id": 39001,
    "event_type": 1,
    "event_name": "Doomsday Getaway",
    "event_character": 10450303,
    "has_friend": true,
    "conviction_id": 205001002,
    "friend_join_story": 3900101,
    "event_trade_id": 0
  }
}

const EventFriendList = {
  "10140503": {
    "event_id": 20427,
    "friend_id": 10140503,
	"is_compendium": true
  },
  "10150402": {
    "event_id": 21404,
    "friend_id": 10150402
  },
  "10240201": {
    "event_id": 20458,
    "friend_id": 10240201
  },
  "10240402": {
    "event_id": 20451,
    "friend_id": 10240402
  },
  "10240503": {
    "event_id": 20455,
    "friend_id": 10240503
  },
  "10250305": {
    "event_id": 20443,
    "friend_id": 10250305,
	"is_compendium": true
  },
  "10250403": {
    "event_id": 20428,
    "friend_id": 10250403,
	"is_compendium": true
  },
  "10340101": {
    "event_id": 20459,
    "friend_id": 10340101
  },
  "10340301": {
    "event_id": 20450,
    "friend_id": 10340301
  },
  "10350403": {
    "event_id": 20449,
    "friend_id": 10350403
  },
  "10350506": {
    "event_id": 20452,
    "friend_id": 10350506
  },
  "10450303": {
    "event_id": 39001,
    "friend_id": 10450303
  },
  "10450404": {
    "event_id": 20429,
    "friend_id": 10450404
  },
  "10540102": {
    "event_id": 20448,
    "friend_id": 10540102
  },
  "10540501": {
    "event_id": 20456,
    "friend_id": 10540501
  },
  "10550305": {
    "event_id": 20460,
    "friend_id": 10550305
  },
  "10550404": {
    "event_id": 21405,
    "friend_id": 10550404
  },
  "10640403": {
    "event_id": 20447,
    "friend_id": 10640403
  },
  "10650305": {
    "event_id": 20457,
    "friend_id": 10650305
  },
  "10740202": {
    "event_id": 20453,
    "friend_id": 10740202
  },
  "10750102": {
    "event_id": 21801,
    "friend_id": 10750102
  },
  "10750203": {
    "event_id": 20445,
    "friend_id": 10750203
  },
  "10750205": {
    "event_id": 20462,
    "friend_id": 10750205,
	"is_compendium": true
  },
  "10840403": {
    "event_id": 20446,
    "friend_id": 10840403
  },
  "10850103": {
    "event_id": 20442,
    "friend_id": 10850103
  }
}

const EventTradeMap = {
  "2001": {
    "event_id": 20801
  },
  "2002": {
    "event_id": 20802
  },
  "2003": {
    "event_id": 20803
  },
  "2004": {
    "event_id": 20804
  },
  "2005": {
    "event_id": 20806
  },
  "2006": {
    "event_id": 20807
  },
  "2007": {
    "event_id": 20809
  },
  "2008": {
    "event_id": 20808
  },
  "2009": {
    "event_id": 20810
  },
  "2010": {
    "event_id": 20811
  },
  "2011": {
    "event_id": 20812
  },
  "2012": {
    "event_id": 20813
  },
  "2013": {
    "event_id": 20814
  },
  "2015": {
    "event_id": 20815
  },
  "2016": {
    "event_id": 20816
  },
  "2017": {
    "event_id": 20817
  },
  "2018": {
    "event_id": 20818
  },
  "2019": {
    "event_id": 20819
  },
  "2020": {
    "event_id": 20820
  },
  "2021": {
    "event_id": 20821
  },
  "2022": {
    "event_id": 20822
  },
  "2023": {
    "event_id": 20823
  },
  "2024": {
    "event_id": 20824
  },
  "2025": {
    "event_id": 20825
  },
  "2026": {
    "event_id": 20826
  },
  "2027": {
    "event_id": 20827
  },
  "2028": {
    "event_id": 20828
  },
  "2029": {
    "event_id": 20829
  },
  "2030": {
    "event_id": 20830
  },
  "2031": {
    "event_id": 20831
  },
  "2033": {
    "event_id": 20833
  },
  "2034": {
    "event_id": 20834
  },
  "2035": {
    "event_id": 20835
  },
  "2036": {
    "event_id": 20836
  },
  "2037": {
    "event_id": 20837
  },
  "2038": {
    "event_id": 20838
  },
  "2039": {
    "event_id": 20839
  },
  "2040": {
    "event_id": 20840
  },
  "2041": {
    "event_id": 20841
  },
  "2042": {
    "event_id": 20842
  },
  "2043": {
    "event_id": 20843
  },
  "2044": {
    "event_id": 20844
  },
  "2045": {
    "event_id": 20845
  },
  "2046": {
    "event_id": 20846
  },
  "3001": {
    "event_id": 21301
  },
  "3002": {
    "event_id": 21302
  },
  "3003": {
    "event_id": 21303
  },
  "3004": {
    "event_id": 21304
  },
  "3005": {
    "event_id": 21305
  },
  "10101": {
    "event_id": 21401
  },
  "10102": {
    "event_id": 21402
  },
  "10103": {
    "event_id": 21403
  },
  "10104": {
    "event_id": 21404
  },
  "10105": {
    "event_id": 21405
  },
  "10201": {
    "event_id": 20413
  },
  "10229": {
    "event_id": 20429
  },
  "10301": {
    "event_id": 21801
  },
  "10501": {
    "event_id": 22001
  },
  "10601": {
    "event_id": 22201
  },
  "10602": {
    "event_id": 22202
  },
  "10603": {
    "event_id": 22203
  },
  "10604": {
    "event_id": 22204
  },
  "10605": {
    "event_id": 22205
  },
  "10606": {
    "event_id": 22206
  },
  "10607": {
    "event_id": 22207
  },
  "10608": {
    "event_id": 22208
  },
  "10609": {
    "event_id": 22209
  },
  "10610": {
    "event_id": 22210
  },
  "10611": {
    "event_id": 22211
  },
  "10612": {
    "event_id": 22212
  },
  "10613": {
    "event_id": 22213
  },
  "10614": {
    "event_id": 22214
  },
  "10615": {
    "event_id": 22215
  },
  "10616": {
    "event_id": 22216
  },
  "10617": {
    "event_id": 22217
  },
  "10618": {
    "event_id": 22218
  },
  "10619": {
    "event_id": 22219
  },
  "10620": {
    "event_id": 22220
  },
  "10621": {
    "event_id": 22221
  },
  "10622": {
    "event_id": 22222
  },
  "10623": {
    "event_id": 22223
  },
  "10624": {
    "event_id": 22224
  },
  "10625": {
    "event_id": 22225
  },
  "10626": {
    "event_id": 22226
  },
  "10627": {
    "event_id": 22227
  },
  "10628": {
    "event_id": 22228
  },
  "10629": {
    "event_id": 22229
  },
  "10630": {
    "event_id": 22230
  },
  "10631": {
    "event_id": 22231
  },
  "10632": {
    "event_id": 22232
  },
  "10633": {
    "event_id": 22233
  },
  "10701": {
    "event_id": 22301
  },
  "10801": {
    "event_id": 22901
  },
  "10802": {
    "event_id": 22902
  },
  "10803": {
    "event_id": 22903
  },
  "10804": {
    "event_id": 22904
  },
  "10805": {
    "event_id": 22905
  },
  "10806": {
    "event_id": 22906
  },
  "10807": {
    "event_id": 22907
  }
}

const EventTypesByName = [
	{ 'id': 1, 'name': "Raid" },
	{ 'id': 4, 'name': "Build" },
	{ 'id': 5, 'name': "Story" },
	{ 'id': 6, 'name': "CLB01" },
	{ 'id': 7, 'name': "MegaMan" },
	{ 'id': 8, 'name': "MonsterHunter" },
	{ 'id': 9, 'name': "Special" },
	{ 'id': 10, 'name': "Combat" },
	{ 'id': 11, 'name': "ABR" },
	{ 'id': 12, 'name': "Earn" }
]

const RaidRewardMap = {
  "20401": {
    "1001": {
      "type": 20,
      "id": 2040101,
      "quantity": 20
    },
    "1002": {
      "type": 20,
      "id": 2040105,
      "quantity": 15
    },
    "1003": {
      "type": 12,
      "id": 40040021,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 103001001,
      "quantity": 5
    },
    "1005": {
      "type": 8,
      "id": 101001001,
      "quantity": 10
    },
    "1006": {
      "type": 8,
      "id": 102001001,
      "quantity": 5
    },
    "1007": {
      "type": 8,
      "id": 113001001,
      "quantity": 5
    },
    "1008": {
      "type": 14,
      "id": 0,
      "quantity": 100
    },
    "1009": {
      "type": 4,
      "id": 0,
      "quantity": 10000
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 1000
    },
    "1011": {
      "type": 20,
      "id": 2040101,
      "quantity": 20
    },
    "1012": {
      "type": 8,
      "id": 103001001,
      "quantity": 5
    },
    "1013": {
      "type": 8,
      "id": 101001001,
      "quantity": 10
    },
    "1014": {
      "type": 8,
      "id": 102001001,
      "quantity": 5
    },
    "1015": {
      "type": 8,
      "id": 113001001,
      "quantity": 5
    },
    "1016": {
      "type": 14,
      "id": 0,
      "quantity": 100
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 1000
    },
    "1018": {
      "type": 20,
      "id": 2040105,
      "quantity": 15
    },
    "1019": {
      "type": 12,
      "id": 40040021,
      "quantity": 1
    },
    "1020": {
      "type": 20,
      "id": 2040101,
      "quantity": 40
    },
    "1021": {
      "type": 2,
      "id": 100602,
      "quantity": 1
    },
    "1022": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "1023": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "1024": {
      "type": 8,
      "id": 103001002,
      "quantity": 5
    },
    "1025": {
      "type": 8,
      "id": 101001002,
      "quantity": 10
    },
    "1026": {
      "type": 8,
      "id": 102001002,
      "quantity": 5
    },
    "1027": {
      "type": 8,
      "id": 113001002,
      "quantity": 5
    },
    "1028": {
      "type": 20,
      "id": 2040105,
      "quantity": 20
    },
    "1029": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1030": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1032": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "1033": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1034": {
      "type": 18,
      "id": 0,
      "quantity": 3000
    },
    "1035": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1036": {
      "type": 20,
      "id": 2040101,
      "quantity": 100
    },
    "1037": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2001": {
      "type": 20,
      "id": 2040101,
      "quantity": 30
    },
    "2002": {
      "type": 20,
      "id": 2040105,
      "quantity": 15
    },
    "2003": {
      "type": 12,
      "id": 40040021,
      "quantity": 1
    },
    "2004": {
      "type": 8,
      "id": 102001001,
      "quantity": 5
    },
    "2005": {
      "type": 4,
      "id": 0,
      "quantity": 5000
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 1000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 100
    },
    "2008": {
      "type": 8,
      "id": 103001002,
      "quantity": 5
    },
    "2009": {
      "type": 8,
      "id": 101001002,
      "quantity": 10
    },
    "2010": {
      "type": 8,
      "id": 102001002,
      "quantity": 5
    },
    "2011": {
      "type": 8,
      "id": 113001002,
      "quantity": 5
    },
    "2012": {
      "type": 2,
      "id": 100602,
      "quantity": 1
    },
    "2013": {
      "type": 14,
      "id": 0,
      "quantity": 100
    },
    "2014": {
      "type": 2,
      "id": 100702,
      "quantity": 1
    },
    "2015": {
      "type": 4,
      "id": 0,
      "quantity": 10000
    },
    "2016": {
      "type": 20,
      "id": 2040105,
      "quantity": 20
    },
    "2017": {
      "type": 18,
      "id": 0,
      "quantity": 2000
    },
    "2018": {
      "type": 14,
      "id": 0,
      "quantity": 100
    },
    "2019": {
      "type": 8,
      "id": 103001002,
      "quantity": 10
    },
    "2020": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2021": {
      "type": 8,
      "id": 101001002,
      "quantity": 20
    },
    "2022": {
      "type": 12,
      "id": 40040021,
      "quantity": 1
    },
    "2023": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2024": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2025": {
      "type": 8,
      "id": 113001002,
      "quantity": 10
    },
    "2026": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "2027": {
      "type": 8,
      "id": 113001003,
      "quantity": 1
    },
    "2028": {
      "type": 8,
      "id": 102001002,
      "quantity": 4
    },
    "2029": {
      "type": 7,
      "id": 20050103,
      "quantity": 1
    },
    "2030": {
      "type": 4,
      "id": 0,
      "quantity": 15000
    },
    "2031": {
      "type": 20,
      "id": 2040101,
      "quantity": 100
    },
    "2032": {
      "type": 14,
      "id": 0,
      "quantity": 300
    },
    "2033": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2034": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2035": {
      "type": 12,
      "id": 40040021,
      "quantity": 1
    },
    "2036": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2037": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "2038": {
      "type": 14,
      "id": 0,
      "quantity": 300
    },
    "2039": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2040": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2041": {
      "type": 20,
      "id": 2040105,
      "quantity": 30
    },
    "2042": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2043": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "2044": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "3001": {
      "type": 20,
      "id": 2040101,
      "quantity": 50
    },
    "3002": {
      "type": 20,
      "id": 2040105,
      "quantity": 20
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 14,
      "id": 0,
      "quantity": 300
    },
    "3006": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "3007": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3008": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "3009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3010": {
      "type": 14,
      "id": 0,
      "quantity": 300
    },
    "3011": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3012": {
      "type": 2,
      "id": 100603,
      "quantity": 1
    },
    "3013": {
      "type": 20,
      "id": 2040105,
      "quantity": 20
    },
    "3014": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3015": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3016": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3017": {
      "type": 20,
      "id": 2040101,
      "quantity": 100
    },
    "3018": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3019": {
      "type": 14,
      "id": 0,
      "quantity": 300
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3021": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "3022": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3023": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3024": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3025": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3027": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3028": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3029": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3030": {
      "type": 20,
      "id": 2040105,
      "quantity": 20
    },
    "3031": {
      "type": 20,
      "id": 2040101,
      "quantity": 150
    },
    "3032": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3033": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3034": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3035": {
      "type": 14,
      "id": 0,
      "quantity": 300
    },
    "3036": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3037": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3038": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3039": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3040": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3041": {
      "type": 20,
      "id": 2040105,
      "quantity": 30
    },
    "3042": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3043": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "3044": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    }
  },
  "20402": {
    "1001": {
      "type": 20,
      "id": 2040201,
      "quantity": 20
    },
    "1002": {
      "type": 20,
      "id": 2040205,
      "quantity": 10
    },
    "1003": {
      "type": 12,
      "id": 40040032,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 103001002,
      "quantity": 10
    },
    "1005": {
      "type": 8,
      "id": 101001001,
      "quantity": 10
    },
    "1006": {
      "type": 8,
      "id": 102001001,
      "quantity": 5
    },
    "1007": {
      "type": 8,
      "id": 113001001,
      "quantity": 5
    },
    "1008": {
      "type": 14,
      "id": 0,
      "quantity": 100
    },
    "1009": {
      "type": 4,
      "id": 0,
      "quantity": 10000
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 2000
    },
    "1011": {
      "type": 20,
      "id": 2040201,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 100
    },
    "1013": {
      "type": 8,
      "id": 102001001,
      "quantity": 10
    },
    "1014": {
      "type": 18,
      "id": 0,
      "quantity": 2000
    },
    "1015": {
      "type": 12,
      "id": 40040032,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2040201,
      "quantity": 40
    },
    "1017": {
      "type": 2,
      "id": 100602,
      "quantity": 1
    },
    "1018": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 100
    },
    "1020": {
      "type": 8,
      "id": 103001002,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001002,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 102001002,
      "quantity": 5
    },
    "1023": {
      "type": 4,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 113001002,
      "quantity": 5
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 103001003,
      "quantity": 2
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 100
    },
    "1028": {
      "type": 8,
      "id": 113001003,
      "quantity": 2
    },
    "1029": {
      "type": 18,
      "id": 0,
      "quantity": 2000
    },
    "1030": {
      "type": 20,
      "id": 2040201,
      "quantity": 60
    },
    "1031": {
      "type": 4,
      "id": 0,
      "quantity": 20000
    },
    "1032": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1033": {
      "type": 20,
      "id": 2040201,
      "quantity": 80
    },
    "1034": {
      "type": 8,
      "id": 113001003,
      "quantity": 3
    },
    "1035": {
      "type": 8,
      "id": 102001002,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 103001003,
      "quantity": 2
    },
    "1037": {
      "type": 4,
      "id": 0,
      "quantity": 20000
    },
    "1038": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1039": {
      "type": 18,
      "id": 0,
      "quantity": 2000
    },
    "1040": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "1041": {
      "type": 8,
      "id": 103001003,
      "quantity": 2
    },
    "1042": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "1043": {
      "type": 18,
      "id": 0,
      "quantity": 2000
    },
    "1044": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1045": {
      "type": 20,
      "id": 2040201,
      "quantity": 100
    },
    "1046": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1047": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 103001003,
      "quantity": 4
    },
    "1049": {
      "type": 18,
      "id": 0,
      "quantity": 4000
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 20000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2001": {
      "type": 20,
      "id": 2040201,
      "quantity": 30
    },
    "2002": {
      "type": 8,
      "id": 101001002,
      "quantity": 10
    },
    "2003": {
      "type": 12,
      "id": 40040032,
      "quantity": 1
    },
    "2004": {
      "type": 8,
      "id": 102001001,
      "quantity": 5
    },
    "2005": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 3000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 100
    },
    "2008": {
      "type": 8,
      "id": 103001002,
      "quantity": 10
    },
    "2009": {
      "type": 8,
      "id": 101001002,
      "quantity": 10
    },
    "2010": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2011": {
      "type": 8,
      "id": 113001002,
      "quantity": 5
    },
    "2012": {
      "type": 2,
      "id": 100602,
      "quantity": 1
    },
    "2013": {
      "type": 14,
      "id": 0,
      "quantity": 100
    },
    "2014": {
      "type": 8,
      "id": 101001002,
      "quantity": 20
    },
    "2015": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2016": {
      "type": 20,
      "id": 2040201,
      "quantity": 50
    },
    "2017": {
      "type": 18,
      "id": 0,
      "quantity": 3000
    },
    "2018": {
      "type": 14,
      "id": 0,
      "quantity": 100
    },
    "2019": {
      "type": 8,
      "id": 103001002,
      "quantity": 10
    },
    "2020": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2022": {
      "type": 12,
      "id": 40040032,
      "quantity": 1
    },
    "2023": {
      "type": 8,
      "id": 113001002,
      "quantity": 10
    },
    "2024": {
      "type": 20,
      "id": 2040201,
      "quantity": 60
    },
    "2025": {
      "type": 8,
      "id": 102001003,
      "quantity": 3
    },
    "2026": {
      "type": 7,
      "id": 20050303,
      "quantity": 1
    },
    "2027": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040032,
      "quantity": 1
    },
    "2031": {
      "type": 8,
      "id": 113001003,
      "quantity": 3
    },
    "2032": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2033": {
      "type": 8,
      "id": 102001003,
      "quantity": 3
    },
    "2034": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 3000
    },
    "2037": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2040201,
      "quantity": 80
    },
    "2040": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 18,
      "id": 0,
      "quantity": 6000
    },
    "2043": {
      "type": 20,
      "id": 2040201,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2046": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2047": {
      "type": 20,
      "id": 2040201,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3001": {
      "type": 20,
      "id": 2040201,
      "quantity": 50
    },
    "3002": {
      "type": 20,
      "id": 2040205,
      "quantity": 10
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 14,
      "id": 0,
      "quantity": 300
    },
    "3006": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "3007": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3008": {
      "type": 8,
      "id": 113001003,
      "quantity": 3
    },
    "3009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3010": {
      "type": 14,
      "id": 0,
      "quantity": 300
    },
    "3011": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3012": {
      "type": 2,
      "id": 100603,
      "quantity": 1
    },
    "3013": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3014": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3015": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3016": {
      "type": 20,
      "id": 2040201,
      "quantity": 100
    },
    "3017": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3018": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3019": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3020": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3021": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3022": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "3023": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3025": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3026": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3027": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3028": {
      "type": 20,
      "id": 2040201,
      "quantity": 100
    },
    "3029": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3030": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3032": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3033": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3034": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3036": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3037": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "3038": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3039": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3040": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3041": {
      "type": 20,
      "id": 2040201,
      "quantity": 100
    },
    "3042": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3043": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3044": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3045": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3046": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3047": {
      "type": 14,
      "id": 0,
      "quantity": 300
    },
    "3048": {
      "type": 20,
      "id": 2040201,
      "quantity": 100
    },
    "3049": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3050": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3051": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3054": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3055": {
      "type": 14,
      "id": 0,
      "quantity": 300
    },
    "3056": {
      "type": 20,
      "id": 2040201,
      "quantity": 100
    },
    "3057": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3058": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "3059": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3060": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    }
  },
  "20403": {
    "1001": {
      "type": 20,
      "id": 2040301,
      "quantity": 20
    },
    "1002": {
      "type": 2,
      "id": 100601,
      "quantity": 1
    },
    "1003": {
      "type": 12,
      "id": 40040035,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 103001002,
      "quantity": 10
    },
    "1005": {
      "type": 8,
      "id": 101001001,
      "quantity": 10
    },
    "1006": {
      "type": 8,
      "id": 102001001,
      "quantity": 5
    },
    "1007": {
      "type": 8,
      "id": 113001001,
      "quantity": 5
    },
    "1008": {
      "type": 14,
      "id": 0,
      "quantity": 100
    },
    "1009": {
      "type": 4,
      "id": 0,
      "quantity": 10000
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 2000
    },
    "1011": {
      "type": 20,
      "id": 2040301,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "1013": {
      "type": 8,
      "id": 102001001,
      "quantity": 10
    },
    "1014": {
      "type": 18,
      "id": 0,
      "quantity": 2000
    },
    "1015": {
      "type": 12,
      "id": 40040035,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2040301,
      "quantity": 40
    },
    "1017": {
      "type": 2,
      "id": 100602,
      "quantity": 1
    },
    "1018": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "1020": {
      "type": 8,
      "id": 103001002,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001002,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 102001002,
      "quantity": 5
    },
    "1023": {
      "type": 4,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 113001002,
      "quantity": 5
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 103001003,
      "quantity": 2
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 300
    },
    "1028": {
      "type": 8,
      "id": 113001003,
      "quantity": 2
    },
    "1029": {
      "type": 18,
      "id": 0,
      "quantity": 2000
    },
    "1030": {
      "type": 20,
      "id": 2040301,
      "quantity": 60
    },
    "1031": {
      "type": 4,
      "id": 0,
      "quantity": 20000
    },
    "1032": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1033": {
      "type": 20,
      "id": 2040301,
      "quantity": 80
    },
    "1034": {
      "type": 8,
      "id": 113001003,
      "quantity": 3
    },
    "1035": {
      "type": 8,
      "id": 102001002,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 103001003,
      "quantity": 2
    },
    "1037": {
      "type": 4,
      "id": 0,
      "quantity": 20000
    },
    "1038": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1039": {
      "type": 18,
      "id": 0,
      "quantity": 2000
    },
    "1040": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "1041": {
      "type": 8,
      "id": 103001003,
      "quantity": 2
    },
    "1042": {
      "type": 14,
      "id": 0,
      "quantity": 500
    },
    "1043": {
      "type": 18,
      "id": 0,
      "quantity": 2000
    },
    "1044": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1045": {
      "type": 20,
      "id": 2040301,
      "quantity": 100
    },
    "1046": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1047": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 103001003,
      "quantity": 4
    },
    "1049": {
      "type": 18,
      "id": 0,
      "quantity": 4000
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 20000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2001": {
      "type": 20,
      "id": 2040301,
      "quantity": 30
    },
    "2002": {
      "type": 8,
      "id": 101001002,
      "quantity": 10
    },
    "2003": {
      "type": 8,
      "id": 102001001,
      "quantity": 5
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040035,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 3000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 100
    },
    "2008": {
      "type": 8,
      "id": 103001002,
      "quantity": 10
    },
    "2009": {
      "type": 8,
      "id": 101001002,
      "quantity": 10
    },
    "2010": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2011": {
      "type": 8,
      "id": 113001002,
      "quantity": 5
    },
    "2012": {
      "type": 2,
      "id": 100602,
      "quantity": 1
    },
    "2013": {
      "type": 7,
      "id": 20050505,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "2015": {
      "type": 8,
      "id": 101001002,
      "quantity": 20
    },
    "2016": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2017": {
      "type": 20,
      "id": 2040301,
      "quantity": 50
    },
    "2018": {
      "type": 18,
      "id": 0,
      "quantity": 3000
    },
    "2019": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "2020": {
      "type": 8,
      "id": 103001002,
      "quantity": 10
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040035,
      "quantity": 1
    },
    "2024": {
      "type": 8,
      "id": 113001002,
      "quantity": 10
    },
    "2025": {
      "type": 20,
      "id": 2040301,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 3
    },
    "2027": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 300
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040035,
      "quantity": 1
    },
    "2031": {
      "type": 8,
      "id": 113001003,
      "quantity": 3
    },
    "2032": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2033": {
      "type": 8,
      "id": 102001003,
      "quantity": 3
    },
    "2034": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 500
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 3000
    },
    "2037": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2040301,
      "quantity": 80
    },
    "2040": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 18,
      "id": 0,
      "quantity": 6000
    },
    "2043": {
      "type": 20,
      "id": 2040301,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2046": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2047": {
      "type": 20,
      "id": 2040301,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3001": {
      "type": 20,
      "id": 2040301,
      "quantity": 50
    },
    "3002": {
      "type": 2,
      "id": 100602,
      "quantity": 1
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 14,
      "id": 0,
      "quantity": 300
    },
    "3006": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "3007": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3008": {
      "type": 8,
      "id": 113001003,
      "quantity": 3
    },
    "3009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3010": {
      "type": 14,
      "id": 0,
      "quantity": 500
    },
    "3011": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3012": {
      "type": 2,
      "id": 100603,
      "quantity": 1
    },
    "3013": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3014": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3015": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3016": {
      "type": 20,
      "id": 2040301,
      "quantity": 100
    },
    "3017": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3018": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3019": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3020": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3021": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3022": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "3023": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3025": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3026": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3027": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3028": {
      "type": 20,
      "id": 2040301,
      "quantity": 100
    },
    "3029": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3030": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3032": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3033": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3034": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3036": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3037": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "3038": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3039": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3040": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3041": {
      "type": 20,
      "id": 2040301,
      "quantity": 100
    },
    "3042": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3043": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3044": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3045": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3046": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3047": {
      "type": 14,
      "id": 0,
      "quantity": 700
    },
    "3048": {
      "type": 20,
      "id": 2040301,
      "quantity": 100
    },
    "3049": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3050": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3051": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3054": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3055": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "3056": {
      "type": 20,
      "id": 2040301,
      "quantity": 100
    },
    "3057": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3058": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "3059": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3060": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3062": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3063": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3064": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3065": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    }
  },
  "20404": {
    "1001": {
      "type": 20,
      "id": 2040401,
      "quantity": 20
    },
    "1002": {
      "type": 2,
      "id": 100601,
      "quantity": 1
    },
    "1003": {
      "type": 12,
      "id": 40040038,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 103001002,
      "quantity": 10
    },
    "1005": {
      "type": 8,
      "id": 101001001,
      "quantity": 10
    },
    "1006": {
      "type": 8,
      "id": 102001001,
      "quantity": 5
    },
    "1007": {
      "type": 8,
      "id": 113001001,
      "quantity": 5
    },
    "1008": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "1009": {
      "type": 4,
      "id": 0,
      "quantity": 10000
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 2000
    },
    "1011": {
      "type": 20,
      "id": 2040401,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 102001001,
      "quantity": 10
    },
    "1014": {
      "type": 18,
      "id": 0,
      "quantity": 2000
    },
    "1015": {
      "type": 12,
      "id": 40040038,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2040401,
      "quantity": 40
    },
    "1017": {
      "type": 2,
      "id": 100602,
      "quantity": 1
    },
    "1018": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 103001002,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001002,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 102001002,
      "quantity": 5
    },
    "1023": {
      "type": 4,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 113001002,
      "quantity": 5
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 103001003,
      "quantity": 2
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 8,
      "id": 113001003,
      "quantity": 2
    },
    "1029": {
      "type": 18,
      "id": 0,
      "quantity": 2000
    },
    "1030": {
      "type": 20,
      "id": 2040401,
      "quantity": 60
    },
    "1031": {
      "type": 4,
      "id": 0,
      "quantity": 20000
    },
    "1032": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1033": {
      "type": 20,
      "id": 2040401,
      "quantity": 80
    },
    "1034": {
      "type": 8,
      "id": 113001003,
      "quantity": 3
    },
    "1035": {
      "type": 8,
      "id": 102001002,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 103001003,
      "quantity": 2
    },
    "1037": {
      "type": 4,
      "id": 0,
      "quantity": 20000
    },
    "1038": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1039": {
      "type": 18,
      "id": 0,
      "quantity": 2000
    },
    "1040": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "1041": {
      "type": 8,
      "id": 103001003,
      "quantity": 2
    },
    "1042": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1043": {
      "type": 18,
      "id": 0,
      "quantity": 2000
    },
    "1044": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1045": {
      "type": 20,
      "id": 2040401,
      "quantity": 100
    },
    "1046": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1047": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 103001003,
      "quantity": 4
    },
    "1049": {
      "type": 18,
      "id": 0,
      "quantity": 4000
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 20000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2001": {
      "type": 20,
      "id": 2040401,
      "quantity": 30
    },
    "2002": {
      "type": 8,
      "id": 101001002,
      "quantity": 10
    },
    "2003": {
      "type": 8,
      "id": 102001001,
      "quantity": 5
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040038,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 3000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "2008": {
      "type": 8,
      "id": 103001002,
      "quantity": 10
    },
    "2009": {
      "type": 8,
      "id": 101001002,
      "quantity": 10
    },
    "2010": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2011": {
      "type": 8,
      "id": 113001002,
      "quantity": 5
    },
    "2012": {
      "type": 2,
      "id": 100602,
      "quantity": 1
    },
    "2013": {
      "type": 7,
      "id": 20050406,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2015": {
      "type": 8,
      "id": 101001002,
      "quantity": 20
    },
    "2016": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2017": {
      "type": 20,
      "id": 2040401,
      "quantity": 50
    },
    "2018": {
      "type": 18,
      "id": 0,
      "quantity": 3000
    },
    "2019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2020": {
      "type": 8,
      "id": 103001002,
      "quantity": 10
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040038,
      "quantity": 1
    },
    "2024": {
      "type": 8,
      "id": 113001002,
      "quantity": 10
    },
    "2025": {
      "type": 20,
      "id": 2040401,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 3
    },
    "2027": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040038,
      "quantity": 1
    },
    "2031": {
      "type": 8,
      "id": 113001003,
      "quantity": 3
    },
    "2032": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2033": {
      "type": 8,
      "id": 102001003,
      "quantity": 3
    },
    "2034": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 3000
    },
    "2037": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2040401,
      "quantity": 80
    },
    "2040": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 18,
      "id": 0,
      "quantity": 6000
    },
    "2043": {
      "type": 20,
      "id": 2040401,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2046": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2047": {
      "type": 20,
      "id": 2040401,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3001": {
      "type": 20,
      "id": 2040401,
      "quantity": 50
    },
    "3002": {
      "type": 2,
      "id": 100602,
      "quantity": 1
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "3006": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "3007": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3008": {
      "type": 8,
      "id": 113001003,
      "quantity": 3
    },
    "3009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3010": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "3011": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3012": {
      "type": 2,
      "id": 100603,
      "quantity": 1
    },
    "3013": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3014": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3015": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3016": {
      "type": 20,
      "id": 2040401,
      "quantity": 100
    },
    "3017": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3018": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3019": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3020": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3021": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3022": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "3023": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3025": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3026": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3027": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3028": {
      "type": 20,
      "id": 2040401,
      "quantity": 100
    },
    "3029": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3030": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3032": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3033": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3034": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3036": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3037": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "3038": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3039": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3040": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3041": {
      "type": 20,
      "id": 2040401,
      "quantity": 100
    },
    "3042": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3043": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3044": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3045": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3046": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3047": {
      "type": 14,
      "id": 0,
      "quantity": 1400
    },
    "3048": {
      "type": 20,
      "id": 2040401,
      "quantity": 100
    },
    "3049": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3050": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3051": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3054": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3055": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3056": {
      "type": 20,
      "id": 2040401,
      "quantity": 100
    },
    "3057": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3058": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "3059": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3060": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3062": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3063": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3064": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3065": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    }
  },
  "20405": {
    "1001": {
      "type": 20,
      "id": 2040501,
      "quantity": 20
    },
    "1002": {
      "type": 2,
      "id": 100601,
      "quantity": 1
    },
    "1003": {
      "type": 12,
      "id": 40040041,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001031,
      "quantity": 30
    },
    "1005": {
      "type": 8,
      "id": 101001002,
      "quantity": 10
    },
    "1006": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "1007": {
      "type": 20,
      "id": 2040505,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2040501,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2040505,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040041,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2040501,
      "quantity": 40
    },
    "1017": {
      "type": 2,
      "id": 100602,
      "quantity": 1
    },
    "1018": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 103001002,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1022": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1023": {
      "type": 4,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 113001002,
      "quantity": 5
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 103001003,
      "quantity": 2
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 8,
      "id": 113001003,
      "quantity": 2
    },
    "1029": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1030": {
      "type": 20,
      "id": 2040501,
      "quantity": 60
    },
    "1031": {
      "type": 4,
      "id": 0,
      "quantity": 20000
    },
    "1032": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1033": {
      "type": 20,
      "id": 2040501,
      "quantity": 80
    },
    "1034": {
      "type": 8,
      "id": 113001003,
      "quantity": 3
    },
    "1035": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 103001003,
      "quantity": 2
    },
    "1037": {
      "type": 4,
      "id": 0,
      "quantity": 20000
    },
    "1038": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1039": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1040": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 103001003,
      "quantity": 2
    },
    "1042": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1043": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1044": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1045": {
      "type": 20,
      "id": 2040501,
      "quantity": 100
    },
    "1046": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1047": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 103001003,
      "quantity": 4
    },
    "1049": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 20000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2001": {
      "type": 20,
      "id": 2040501,
      "quantity": 30
    },
    "2002": {
      "type": 8,
      "id": 101001002,
      "quantity": 10
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040041,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "2008": {
      "type": 8,
      "id": 103001002,
      "quantity": 10
    },
    "2009": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "2010": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2011": {
      "type": 8,
      "id": 113001002,
      "quantity": 5
    },
    "2012": {
      "type": 2,
      "id": 100602,
      "quantity": 1
    },
    "2013": {
      "type": 7,
      "id": 20050206,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2017": {
      "type": 20,
      "id": 2040501,
      "quantity": 50
    },
    "2018": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2020": {
      "type": 8,
      "id": 103001002,
      "quantity": 10
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040041,
      "quantity": 1
    },
    "2024": {
      "type": 8,
      "id": 113001002,
      "quantity": 10
    },
    "2025": {
      "type": 20,
      "id": 2040501,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040041,
      "quantity": 1
    },
    "2031": {
      "type": 8,
      "id": 113001003,
      "quantity": 3
    },
    "2032": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2033": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2034": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2037": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2040501,
      "quantity": 80
    },
    "2040": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 18,
      "id": 0,
      "quantity": 6000
    },
    "2043": {
      "type": 20,
      "id": 2040501,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2046": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2047": {
      "type": 20,
      "id": 2040501,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3001": {
      "type": 20,
      "id": 2040501,
      "quantity": 50
    },
    "3002": {
      "type": 2,
      "id": 100602,
      "quantity": 1
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "3006": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "3007": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3008": {
      "type": 8,
      "id": 113001003,
      "quantity": 3
    },
    "3009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3010": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "3011": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3012": {
      "type": 2,
      "id": 100603,
      "quantity": 1
    },
    "3013": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3014": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3015": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3016": {
      "type": 20,
      "id": 2040501,
      "quantity": 100
    },
    "3017": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3018": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3019": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3020": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3021": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3022": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "3023": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3025": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3026": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3027": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3028": {
      "type": 20,
      "id": 2040501,
      "quantity": 100
    },
    "3029": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3030": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3032": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3033": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3034": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3036": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3037": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "3038": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "3039": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3040": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3041": {
      "type": 20,
      "id": 2040501,
      "quantity": 100
    },
    "3042": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3043": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3044": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3045": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3046": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "3047": {
      "type": 14,
      "id": 0,
      "quantity": 1400
    },
    "3048": {
      "type": 20,
      "id": 2040501,
      "quantity": 100
    },
    "3049": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3050": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3051": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3054": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3055": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3056": {
      "type": 20,
      "id": 2040501,
      "quantity": 100
    },
    "3057": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3058": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "3059": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3060": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "3062": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3063": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3064": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3065": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    }
  },
  "20406": {
    "1001": {
      "type": 20,
      "id": 2040601,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 12,
      "id": 40040044,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1006": {
      "type": 8,
      "id": 104002041,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2040605,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2040601,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002041,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2040605,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040044,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2040601,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001043,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002042,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1033": {
      "type": 8,
      "id": 104002042,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1035": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001043,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1039": {
      "type": 8,
      "id": 104002042,
      "quantity": 2
    },
    "1040": {
      "type": 8,
      "id": 104001041,
      "quantity": 30
    },
    "1041": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1042": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1043": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1044": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1045": {
      "type": 20,
      "id": 2040601,
      "quantity": 100
    },
    "1046": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1047": {
      "type": 8,
      "id": 104002042,
      "quantity": 3
    },
    "1048": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1049": {
      "type": 8,
      "id": 104001043,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2001": {
      "type": 20,
      "id": 2040601,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040044,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 3,
      "id": 30830401,
      "quantity": 1
    },
    "2012": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050504,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001041,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2040601,
      "quantity": 50
    },
    "2018": {
      "type": 3,
      "id": 30830401,
      "quantity": 1
    },
    "2019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2020": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040044,
      "quantity": 1
    },
    "2024": {
      "type": 3,
      "id": 30830401,
      "quantity": 1
    },
    "2025": {
      "type": 20,
      "id": 2040601,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040044,
      "quantity": 1
    },
    "2031": {
      "type": 3,
      "id": 30830401,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001043,
      "quantity": 2
    },
    "2033": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2034": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2037": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2040601,
      "quantity": 80
    },
    "2040": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002042,
      "quantity": 5
    },
    "2043": {
      "type": 20,
      "id": 2040601,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2046": {
      "type": 3,
      "id": 30830401,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2040601,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 8,
      "id": 104001043,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3001": {
      "type": 20,
      "id": 2040601,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "3006": {
      "type": 8,
      "id": 201010041,
      "quantity": 10
    },
    "3007": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3008": {
      "type": 8,
      "id": 202005081,
      "quantity": 10
    },
    "3009": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "3010": {
      "type": 8,
      "id": 202005011,
      "quantity": 10
    },
    "3011": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3012": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3013": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3014": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3015": {
      "type": 8,
      "id": 202005051,
      "quantity": 10
    },
    "3016": {
      "type": 20,
      "id": 2040601,
      "quantity": 100
    },
    "3017": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3018": {
      "type": 8,
      "id": 201010041,
      "quantity": 10
    },
    "3019": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3020": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3021": {
      "type": 8,
      "id": 202005081,
      "quantity": 10
    },
    "3022": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202005011,
      "quantity": 10
    },
    "3025": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3026": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3027": {
      "type": 8,
      "id": 202005051,
      "quantity": 10
    },
    "3028": {
      "type": 20,
      "id": 2040601,
      "quantity": 120
    },
    "3029": {
      "type": 8,
      "id": 201010041,
      "quantity": 15
    },
    "3030": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3031": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3032": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3033": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3034": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "3035": {
      "type": 8,
      "id": 202005081,
      "quantity": 15
    },
    "3036": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3037": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3038": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3039": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3040": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3041": {
      "type": 20,
      "id": 2040601,
      "quantity": 120
    },
    "3042": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3043": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3044": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3045": {
      "type": 8,
      "id": 201010042,
      "quantity": 10
    },
    "3046": {
      "type": 14,
      "id": 0,
      "quantity": 1400
    },
    "3047": {
      "type": 8,
      "id": 201010041,
      "quantity": 15
    },
    "3048": {
      "type": 20,
      "id": 2040601,
      "quantity": 140
    },
    "3049": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3050": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3051": {
      "type": 8,
      "id": 202005081,
      "quantity": 15
    },
    "3052": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3054": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3055": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3056": {
      "type": 20,
      "id": 2040601,
      "quantity": 140
    },
    "3057": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3058": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3059": {
      "type": 8,
      "id": 201010042,
      "quantity": 10
    },
    "3060": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "3062": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3063": {
      "type": 8,
      "id": 102001003,
      "quantity": 15
    },
    "3064": {
      "type": 8,
      "id": 202005011,
      "quantity": 20
    },
    "3065": {
      "type": 8,
      "id": 201010041,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3067": {
      "type": 8,
      "id": 202005081,
      "quantity": 20
    },
    "3068": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 202005051,
      "quantity": 20
    },
    "3070": {
      "type": 8,
      "id": 103001003,
      "quantity": 25
    },
    "3071": {
      "type": 8,
      "id": 102001003,
      "quantity": 25
    },
    "3072": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3073": {
      "type": 8,
      "id": 201010042,
      "quantity": 20
    }
  },
  "20407": {
    "1001": {
      "type": 20,
      "id": 2040701,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 12,
      "id": 40040050,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001011,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1006": {
      "type": 8,
      "id": 104002011,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2040705,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001012,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2040701,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002011,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2040705,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040050,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2040701,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001011,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002011,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001013,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002012,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001011,
      "quantity": 20
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001012,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002011,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1033": {
      "type": 8,
      "id": 104002012,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001011,
      "quantity": 20
    },
    "1035": {
      "type": 8,
      "id": 104002011,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001013,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001012,
      "quantity": 5
    },
    "1039": {
      "type": 8,
      "id": 104002012,
      "quantity": 2
    },
    "1040": {
      "type": 8,
      "id": 104001011,
      "quantity": 30
    },
    "1041": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1042": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1043": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1044": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1045": {
      "type": 20,
      "id": 2040701,
      "quantity": 100
    },
    "1046": {
      "type": 8,
      "id": 104001012,
      "quantity": 5
    },
    "1047": {
      "type": 8,
      "id": 104002012,
      "quantity": 3
    },
    "1048": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1049": {
      "type": 8,
      "id": 104001013,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2001": {
      "type": 20,
      "id": 2040701,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040050,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 3,
      "id": 30530101,
      "quantity": 1
    },
    "2012": {
      "type": 8,
      "id": 104002011,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050307,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001011,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2040701,
      "quantity": 50
    },
    "2018": {
      "type": 3,
      "id": 30530101,
      "quantity": 1
    },
    "2019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2020": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040050,
      "quantity": 1
    },
    "2024": {
      "type": 3,
      "id": 30530101,
      "quantity": 1
    },
    "2025": {
      "type": 20,
      "id": 2040701,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040050,
      "quantity": 1
    },
    "2031": {
      "type": 3,
      "id": 30530101,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001013,
      "quantity": 2
    },
    "2033": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2034": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2037": {
      "type": 8,
      "id": 104001012,
      "quantity": 10
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2040701,
      "quantity": 80
    },
    "2040": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002012,
      "quantity": 5
    },
    "2043": {
      "type": 20,
      "id": 2040701,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2046": {
      "type": 3,
      "id": 30530101,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2040701,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 8,
      "id": 104001013,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3001": {
      "type": 20,
      "id": 2040701,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "3006": {
      "type": 8,
      "id": 201010011,
      "quantity": 10
    },
    "3007": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3008": {
      "type": 8,
      "id": 202005081,
      "quantity": 10
    },
    "3009": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "3010": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3011": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3012": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3013": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3014": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3015": {
      "type": 8,
      "id": 202005051,
      "quantity": 10
    },
    "3016": {
      "type": 20,
      "id": 2040701,
      "quantity": 100
    },
    "3017": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3018": {
      "type": 8,
      "id": 201010011,
      "quantity": 10
    },
    "3019": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3020": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3021": {
      "type": 8,
      "id": 202005081,
      "quantity": 10
    },
    "3022": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3025": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3026": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3027": {
      "type": 8,
      "id": 202005051,
      "quantity": 10
    },
    "3028": {
      "type": 20,
      "id": 2040701,
      "quantity": 120
    },
    "3029": {
      "type": 8,
      "id": 201010011,
      "quantity": 15
    },
    "3030": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3031": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3032": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3033": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3034": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "3035": {
      "type": 8,
      "id": 202005081,
      "quantity": 15
    },
    "3036": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3037": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3038": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3039": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3040": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3041": {
      "type": 20,
      "id": 2040701,
      "quantity": 120
    },
    "3042": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3043": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3044": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3045": {
      "type": 8,
      "id": 201010012,
      "quantity": 10
    },
    "3046": {
      "type": 14,
      "id": 0,
      "quantity": 1400
    },
    "3047": {
      "type": 8,
      "id": 201010011,
      "quantity": 15
    },
    "3048": {
      "type": 20,
      "id": 2040701,
      "quantity": 140
    },
    "3049": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3050": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3051": {
      "type": 8,
      "id": 202005081,
      "quantity": 15
    },
    "3052": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3054": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3055": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3056": {
      "type": 20,
      "id": 2040701,
      "quantity": 140
    },
    "3057": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3058": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3059": {
      "type": 8,
      "id": 201010012,
      "quantity": 10
    },
    "3060": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "3062": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3063": {
      "type": 8,
      "id": 102001003,
      "quantity": 15
    },
    "3064": {
      "type": 8,
      "id": 202005071,
      "quantity": 20
    },
    "3065": {
      "type": 8,
      "id": 201010011,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3067": {
      "type": 8,
      "id": 202005081,
      "quantity": 20
    },
    "3068": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 202005051,
      "quantity": 20
    },
    "3070": {
      "type": 8,
      "id": 103001003,
      "quantity": 25
    },
    "3071": {
      "type": 8,
      "id": 102001003,
      "quantity": 25
    },
    "3072": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3073": {
      "type": 8,
      "id": 201010012,
      "quantity": 20
    }
  },
  "20408": {
    "1001": {
      "type": 20,
      "id": 2040801,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 12,
      "id": 40040074,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1006": {
      "type": 8,
      "id": 104002051,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2040805,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2040801,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002051,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2040805,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040074,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2040801,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001053,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002052,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001051,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1033": {
      "type": 8,
      "id": 104002052,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001051,
      "quantity": 30
    },
    "1035": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001053,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1039": {
      "type": 20,
      "id": 2040807,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002052,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 104001051,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2040801,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002052,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001053,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2040801,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040074,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 3,
      "id": 30240501,
      "quantity": 1
    },
    "2012": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050517,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001051,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2040801,
      "quantity": 50
    },
    "2018": {
      "type": 3,
      "id": 30240501,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040074,
      "quantity": 1
    },
    "2024": {
      "type": 3,
      "id": 30240501,
      "quantity": 1
    },
    "2025": {
      "type": 20,
      "id": 2040801,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040074,
      "quantity": 1
    },
    "2031": {
      "type": 3,
      "id": 30240501,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001053,
      "quantity": 2
    },
    "2033": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001052,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2040807,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2040801,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002052,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2040801,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 3,
      "id": 30240501,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2040801,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 8,
      "id": 104001053,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2040801,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010051,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3009": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005081,
      "quantity": 10
    },
    "3014": {
      "type": 20,
      "id": 2040801,
      "quantity": 150
    },
    "3015": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3016": {
      "type": 8,
      "id": 201010051,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 103001003,
      "quantity": 15
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005081,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2040801,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010051,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3031": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "3034": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005081,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010052,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010051,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2040801,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3052": {
      "type": 8,
      "id": 103001003,
      "quantity": 25
    },
    "3053": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3057": {
      "type": 8,
      "id": 202005081,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010052,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3060": {
      "type": 20,
      "id": 2040807,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005031,
      "quantity": 20
    },
    "3062": {
      "type": 8,
      "id": 201010051,
      "quantity": 40
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005021,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005081,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010052,
      "quantity": 40
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20409": {
    "1001": {
      "type": 20,
      "id": 2040901,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 12,
      "id": 40040081,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001031,
      "quantity": 30
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1006": {
      "type": 8,
      "id": 104002031,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2040905,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001032,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2040901,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002031,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2040905,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040081,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2040901,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002031,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 15
    },
    "1022": {
      "type": 8,
      "id": 104001033,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002032,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001031,
      "quantity": 40
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001032,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002031,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1033": {
      "type": 8,
      "id": 104002032,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001031,
      "quantity": 70
    },
    "1035": {
      "type": 8,
      "id": 104002031,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001033,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001032,
      "quantity": 5
    },
    "1039": {
      "type": 20,
      "id": 2040907,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002032,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2040901,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001032,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002032,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001033,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2040901,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040081,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 3,
      "id": 30440301,
      "quantity": 1
    },
    "2012": {
      "type": 8,
      "id": 104002031,
      "quantity": 5
    },
    "2013": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001031,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2040901,
      "quantity": 50
    },
    "2018": {
      "type": 3,
      "id": 30440301,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040081,
      "quantity": 1
    },
    "2024": {
      "type": 3,
      "id": 30440301,
      "quantity": 1
    },
    "2025": {
      "type": 20,
      "id": 2040901,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040081,
      "quantity": 1
    },
    "2031": {
      "type": 3,
      "id": 30440301,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001033,
      "quantity": 2
    },
    "2033": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001032,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2040907,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2040901,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001002,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002032,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2040901,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 3,
      "id": 30440301,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2040901,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 8,
      "id": 104001033,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2040901,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010031,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005041,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3009": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3014": {
      "type": 20,
      "id": 2040901,
      "quantity": 150
    },
    "3015": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3016": {
      "type": 8,
      "id": 201010031,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005041,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 103001003,
      "quantity": 15
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2040901,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010031,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "3031": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3034": {
      "type": 8,
      "id": 202005041,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010032,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010031,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2040901,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005041,
      "quantity": 15
    },
    "3052": {
      "type": 8,
      "id": 103001003,
      "quantity": 25
    },
    "3053": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 120000
    },
    "3057": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010032,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3060": {
      "type": 20,
      "id": 2040907,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005031,
      "quantity": 20
    },
    "3062": {
      "type": 8,
      "id": 201010031,
      "quantity": 40
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005041,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005071,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010032,
      "quantity": 40
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20410": {
    "1001": {
      "type": 20,
      "id": 2041001,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 12,
      "id": 40040076,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001041,
      "quantity": 30
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1006": {
      "type": 8,
      "id": 104002041,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2041005,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2041001,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002041,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2041005,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040076,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2041001,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 15
    },
    "1022": {
      "type": 8,
      "id": 104001043,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002042,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001041,
      "quantity": 40
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1033": {
      "type": 8,
      "id": 104002042,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001041,
      "quantity": 70
    },
    "1035": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001043,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1039": {
      "type": 20,
      "id": 2041007,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002042,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2041001,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002042,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001043,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2041001,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040076,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 3,
      "id": 30340401,
      "quantity": 1
    },
    "2012": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "2013": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001041,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2041001,
      "quantity": 50
    },
    "2018": {
      "type": 3,
      "id": 30340401,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040076,
      "quantity": 1
    },
    "2024": {
      "type": 3,
      "id": 30340401,
      "quantity": 1
    },
    "2025": {
      "type": 20,
      "id": 2041001,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040076,
      "quantity": 1
    },
    "2031": {
      "type": 3,
      "id": 30340401,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001043,
      "quantity": 2
    },
    "2033": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001042,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2041007,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2041001,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001001,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002042,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2041001,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 3,
      "id": 30340401,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2041001,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 8,
      "id": 104001043,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2041001,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010041,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005041,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005011,
      "quantity": 10
    },
    "3009": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3014": {
      "type": 20,
      "id": 2041001,
      "quantity": 150
    },
    "3015": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3016": {
      "type": 8,
      "id": 201010041,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005041,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005011,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 103001003,
      "quantity": 15
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2041001,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010041,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "3031": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3034": {
      "type": 8,
      "id": 202005041,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010042,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010041,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2041001,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005041,
      "quantity": 15
    },
    "3052": {
      "type": 8,
      "id": 103001003,
      "quantity": 25
    },
    "3053": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 120000
    },
    "3057": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010042,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3060": {
      "type": 20,
      "id": 2041007,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005011,
      "quantity": 20
    },
    "3062": {
      "type": 8,
      "id": 201010041,
      "quantity": 40
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005041,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005071,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010042,
      "quantity": 40
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20411": {
    "1001": {
      "type": 20,
      "id": 2041101,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 12,
      "id": 40040055,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001021,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1006": {
      "type": 8,
      "id": 104002021,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2041105,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001022,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2041101,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002021,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2041105,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040055,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2041101,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001021,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002021,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001023,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002022,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001021,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001022,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002021,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1033": {
      "type": 8,
      "id": 104002022,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001021,
      "quantity": 30
    },
    "1035": {
      "type": 8,
      "id": 104002021,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001023,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001022,
      "quantity": 5
    },
    "1039": {
      "type": 8,
      "id": 104002022,
      "quantity": 2
    },
    "1040": {
      "type": 8,
      "id": 104001021,
      "quantity": 40
    },
    "1041": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1042": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1043": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1044": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1045": {
      "type": 20,
      "id": 2041101,
      "quantity": 100
    },
    "1046": {
      "type": 8,
      "id": 104001022,
      "quantity": 5
    },
    "1047": {
      "type": 8,
      "id": 104002022,
      "quantity": 3
    },
    "1048": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1049": {
      "type": 8,
      "id": 104001023,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2001": {
      "type": 20,
      "id": 2041101,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040055,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 3,
      "id": 30730201,
      "quantity": 1
    },
    "2012": {
      "type": 8,
      "id": 104002021,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050105,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001021,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2041101,
      "quantity": 50
    },
    "2018": {
      "type": 3,
      "id": 30730201,
      "quantity": 1
    },
    "2019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2020": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040055,
      "quantity": 1
    },
    "2024": {
      "type": 3,
      "id": 30730201,
      "quantity": 1
    },
    "2025": {
      "type": 20,
      "id": 2041101,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040055,
      "quantity": 1
    },
    "2031": {
      "type": 3,
      "id": 30730201,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001023,
      "quantity": 2
    },
    "2033": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2034": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2037": {
      "type": 8,
      "id": 104001022,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2041101,
      "quantity": 80
    },
    "2040": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002022,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2041101,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2046": {
      "type": 3,
      "id": 30730201,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2041101,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 8,
      "id": 104001023,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3001": {
      "type": 20,
      "id": 2041101,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "3006": {
      "type": 8,
      "id": 201010021,
      "quantity": 10
    },
    "3007": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3008": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3009": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "3010": {
      "type": 8,
      "id": 202005041,
      "quantity": 10
    },
    "3011": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3012": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3013": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3014": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3015": {
      "type": 8,
      "id": 202005011,
      "quantity": 10
    },
    "3016": {
      "type": 20,
      "id": 2041101,
      "quantity": 100
    },
    "3017": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3018": {
      "type": 8,
      "id": 201010021,
      "quantity": 10
    },
    "3019": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3020": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3021": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3022": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202005041,
      "quantity": 10
    },
    "3025": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3026": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3027": {
      "type": 8,
      "id": 202005011,
      "quantity": 10
    },
    "3028": {
      "type": 20,
      "id": 2041101,
      "quantity": 120
    },
    "3029": {
      "type": 8,
      "id": 201010021,
      "quantity": 15
    },
    "3030": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3031": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3032": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3033": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3034": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "3035": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3036": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3037": {
      "type": 8,
      "id": 202005041,
      "quantity": 15
    },
    "3038": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3039": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3040": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3041": {
      "type": 20,
      "id": 2041101,
      "quantity": 120
    },
    "3042": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3043": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3044": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3045": {
      "type": 8,
      "id": 201010022,
      "quantity": 10
    },
    "3046": {
      "type": 14,
      "id": 0,
      "quantity": 1400
    },
    "3047": {
      "type": 8,
      "id": 201010021,
      "quantity": 15
    },
    "3048": {
      "type": 20,
      "id": 2041101,
      "quantity": 140
    },
    "3049": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3050": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3051": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3052": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005041,
      "quantity": 15
    },
    "3054": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3055": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3056": {
      "type": 20,
      "id": 2041101,
      "quantity": 140
    },
    "3057": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3058": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3059": {
      "type": 8,
      "id": 201010022,
      "quantity": 10
    },
    "3060": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "3062": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3063": {
      "type": 8,
      "id": 102001003,
      "quantity": 15
    },
    "3064": {
      "type": 8,
      "id": 202005041,
      "quantity": 20
    },
    "3065": {
      "type": 8,
      "id": 201010021,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3067": {
      "type": 8,
      "id": 202005071,
      "quantity": 20
    },
    "3068": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 202005011,
      "quantity": 20
    },
    "3070": {
      "type": 8,
      "id": 103001003,
      "quantity": 25
    },
    "3071": {
      "type": 8,
      "id": 102001003,
      "quantity": 25
    },
    "3072": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3073": {
      "type": 8,
      "id": 201010022,
      "quantity": 20
    }
  },
  "20412": {
    "1001": {
      "type": 20,
      "id": 2041201,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 12,
      "id": 40040035,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1006": {
      "type": 8,
      "id": 104002041,
      "quantity": 2
    },
    "1007": {
      "type": 8,
      "id": 201008001,
      "quantity": 1
    },
    "1008": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1009": {
      "type": 12,
      "id": 40040002,
      "quantity": 1
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1011": {
      "type": 20,
      "id": 2041201,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002041,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2041205,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040035,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2041201,
      "quantity": 40
    },
    "1017": {
      "type": 12,
      "id": 40040014,
      "quantity": 1
    },
    "1018": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 15
    },
    "1022": {
      "type": 8,
      "id": 104001043,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002042,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 12,
      "id": 40040034,
      "quantity": 1
    },
    "1029": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1033": {
      "type": 8,
      "id": 104002042,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1035": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001043,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1039": {
      "type": 8,
      "id": 104002042,
      "quantity": 2
    },
    "1040": {
      "type": 8,
      "id": 104001041,
      "quantity": 30
    },
    "1041": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1042": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1043": {
      "type": 18,
      "id": 0,
      "quantity": 15000
    },
    "1044": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1045": {
      "type": 20,
      "id": 2041201,
      "quantity": 100
    },
    "1046": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1047": {
      "type": 8,
      "id": 104002042,
      "quantity": 3
    },
    "1048": {
      "type": 18,
      "id": 0,
      "quantity": 15000
    },
    "1049": {
      "type": 8,
      "id": 104001043,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2001": {
      "type": 20,
      "id": 2041201,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040035,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 8,
      "id": 201008001,
      "quantity": 1
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 3,
      "id": 30630401,
      "quantity": 1
    },
    "2012": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050505,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001041,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2041201,
      "quantity": 50
    },
    "2018": {
      "type": 3,
      "id": 30630401,
      "quantity": 1
    },
    "2019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2020": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040035,
      "quantity": 1
    },
    "2024": {
      "type": 3,
      "id": 30630401,
      "quantity": 1
    },
    "2025": {
      "type": 20,
      "id": 2041201,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040035,
      "quantity": 1
    },
    "2031": {
      "type": 3,
      "id": 30630401,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001043,
      "quantity": 2
    },
    "2033": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2034": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2037": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2041201,
      "quantity": 80
    },
    "2040": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002042,
      "quantity": 5
    },
    "2043": {
      "type": 20,
      "id": 2041201,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2046": {
      "type": 3,
      "id": 30630401,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2041201,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 8,
      "id": 104001043,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3001": {
      "type": 20,
      "id": 2041201,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "3006": {
      "type": 8,
      "id": 201010041,
      "quantity": 10
    },
    "3007": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3008": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3009": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "3010": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3011": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3012": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3013": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3014": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3015": {
      "type": 8,
      "id": 202005061,
      "quantity": 10
    },
    "3016": {
      "type": 20,
      "id": 2041201,
      "quantity": 100
    },
    "3017": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3018": {
      "type": 8,
      "id": 201010041,
      "quantity": 10
    },
    "3019": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3020": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3021": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3022": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3025": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3026": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3027": {
      "type": 8,
      "id": 202005061,
      "quantity": 10
    },
    "3028": {
      "type": 20,
      "id": 2041201,
      "quantity": 120
    },
    "3029": {
      "type": 8,
      "id": 201010041,
      "quantity": 15
    },
    "3030": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3031": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3032": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3033": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3034": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "3035": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3036": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3037": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3038": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3039": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3040": {
      "type": 8,
      "id": 202005061,
      "quantity": 15
    },
    "3041": {
      "type": 20,
      "id": 2041201,
      "quantity": 120
    },
    "3042": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3043": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3044": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3045": {
      "type": 8,
      "id": 201010042,
      "quantity": 10
    },
    "3046": {
      "type": 14,
      "id": 0,
      "quantity": 1400
    },
    "3047": {
      "type": 8,
      "id": 201010041,
      "quantity": 15
    },
    "3048": {
      "type": 20,
      "id": 2041201,
      "quantity": 140
    },
    "3049": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3050": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3051": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3052": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3054": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3055": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3056": {
      "type": 20,
      "id": 2041201,
      "quantity": 140
    },
    "3057": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3058": {
      "type": 8,
      "id": 202005061,
      "quantity": 15
    },
    "3059": {
      "type": 8,
      "id": 201010042,
      "quantity": 10
    },
    "3060": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "3062": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3063": {
      "type": 8,
      "id": 102001003,
      "quantity": 15
    },
    "3064": {
      "type": 8,
      "id": 202005021,
      "quantity": 20
    },
    "3065": {
      "type": 8,
      "id": 201010041,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3067": {
      "type": 8,
      "id": 202005071,
      "quantity": 20
    },
    "3068": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 202005061,
      "quantity": 20
    },
    "3070": {
      "type": 8,
      "id": 103001003,
      "quantity": 25
    },
    "3071": {
      "type": 8,
      "id": 102001003,
      "quantity": 25
    },
    "3072": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3073": {
      "type": 8,
      "id": 201010042,
      "quantity": 20
    }
  },
  "20413": {
    "1001": {
      "type": 20,
      "id": 2041301,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 12,
      "id": 40040061,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1006": {
      "type": 8,
      "id": 104002051,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2041305,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2041301,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002051,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2041305,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040061,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2041301,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001053,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002052,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001051,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1033": {
      "type": 8,
      "id": 104002052,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001051,
      "quantity": 30
    },
    "1035": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001053,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1039": {
      "type": 20,
      "id": 2041307,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002052,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 104001051,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2041301,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002052,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001053,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2041301,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040061,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 3,
      "id": 30130501,
      "quantity": 1
    },
    "2012": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050511,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001051,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2041301,
      "quantity": 50
    },
    "2018": {
      "type": 3,
      "id": 30130501,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040061,
      "quantity": 1
    },
    "2024": {
      "type": 3,
      "id": 30130501,
      "quantity": 1
    },
    "2025": {
      "type": 20,
      "id": 2041301,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040061,
      "quantity": 1
    },
    "2031": {
      "type": 3,
      "id": 30130501,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001053,
      "quantity": 2
    },
    "2033": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001052,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2041307,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2041301,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002052,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2041301,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 3,
      "id": 30130501,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2041301,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 8,
      "id": 104001053,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2041301,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010051,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005051,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3009": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3014": {
      "type": 20,
      "id": 2041301,
      "quantity": 100
    },
    "3015": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3016": {
      "type": 8,
      "id": 201010051,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005051,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 103001003,
      "quantity": 15
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2041301,
      "quantity": 120
    },
    "3028": {
      "type": 8,
      "id": 201010051,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3031": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "3034": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3040": {
      "type": 20,
      "id": 2041301,
      "quantity": 120
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010052,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010051,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2041301,
      "quantity": 140
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3052": {
      "type": 8,
      "id": 103001003,
      "quantity": 25
    },
    "3053": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 20,
      "id": 2041301,
      "quantity": 140
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3057": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010052,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3060": {
      "type": 20,
      "id": 2041307,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005031,
      "quantity": 20
    },
    "3062": {
      "type": 8,
      "id": 201010051,
      "quantity": 40
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005051,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005071,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010052,
      "quantity": 40
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20414": {
    "1001": {
      "type": 20,
      "id": 2041401,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 12,
      "id": 40040038,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 201008001,
      "quantity": 1
    },
    "1006": {
      "type": 8,
      "id": 104002051,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2041405,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2041401,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002051,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2041405,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040038,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2041401,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 15
    },
    "1022": {
      "type": 8,
      "id": 104001053,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002052,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1033": {
      "type": 8,
      "id": 104002052,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1035": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001053,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1039": {
      "type": 8,
      "id": 104002052,
      "quantity": 2
    },
    "1040": {
      "type": 8,
      "id": 104001051,
      "quantity": 30
    },
    "1041": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1042": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1043": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1044": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1045": {
      "type": 20,
      "id": 2041401,
      "quantity": 100
    },
    "1046": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1047": {
      "type": 8,
      "id": 104002052,
      "quantity": 3
    },
    "1048": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1049": {
      "type": 8,
      "id": 104001053,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2001": {
      "type": 20,
      "id": 2041401,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040038,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 3,
      "id": 30530501,
      "quantity": 1
    },
    "2012": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050406,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001051,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2041401,
      "quantity": 50
    },
    "2018": {
      "type": 3,
      "id": 30530501,
      "quantity": 1
    },
    "2019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2020": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040038,
      "quantity": 1
    },
    "2024": {
      "type": 3,
      "id": 30530501,
      "quantity": 1
    },
    "2025": {
      "type": 20,
      "id": 2041401,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040038,
      "quantity": 1
    },
    "2031": {
      "type": 3,
      "id": 30530501,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001053,
      "quantity": 2
    },
    "2033": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2034": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2037": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2041401,
      "quantity": 80
    },
    "2040": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002052,
      "quantity": 5
    },
    "2043": {
      "type": 20,
      "id": 2041401,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2046": {
      "type": 3,
      "id": 30530501,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2041401,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 8,
      "id": 104001053,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3001": {
      "type": 20,
      "id": 2041401,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "3006": {
      "type": 8,
      "id": 201010051,
      "quantity": 10
    },
    "3007": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3008": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3009": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "3010": {
      "type": 8,
      "id": 202005011,
      "quantity": 10
    },
    "3011": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3012": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3013": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3014": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3015": {
      "type": 8,
      "id": 202005051,
      "quantity": 10
    },
    "3016": {
      "type": 20,
      "id": 2041401,
      "quantity": 100
    },
    "3017": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3018": {
      "type": 8,
      "id": 201010051,
      "quantity": 10
    },
    "3019": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3020": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3021": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3022": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202005011,
      "quantity": 10
    },
    "3025": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3026": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3027": {
      "type": 8,
      "id": 202005051,
      "quantity": 10
    },
    "3028": {
      "type": 20,
      "id": 2041401,
      "quantity": 120
    },
    "3029": {
      "type": 8,
      "id": 201010051,
      "quantity": 15
    },
    "3030": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3031": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3032": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3033": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3034": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "3035": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3036": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3037": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3038": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3039": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3040": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3041": {
      "type": 20,
      "id": 2041401,
      "quantity": 120
    },
    "3042": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3043": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3044": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3045": {
      "type": 8,
      "id": 201010052,
      "quantity": 10
    },
    "3046": {
      "type": 14,
      "id": 0,
      "quantity": 1400
    },
    "3047": {
      "type": 8,
      "id": 201010051,
      "quantity": 15
    },
    "3048": {
      "type": 20,
      "id": 2041401,
      "quantity": 140
    },
    "3049": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3050": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3051": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3052": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3054": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3055": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3056": {
      "type": 20,
      "id": 2041401,
      "quantity": 140
    },
    "3057": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3058": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3059": {
      "type": 8,
      "id": 201010052,
      "quantity": 10
    },
    "3060": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "3062": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3063": {
      "type": 8,
      "id": 102001003,
      "quantity": 15
    },
    "3064": {
      "type": 8,
      "id": 202005011,
      "quantity": 20
    },
    "3065": {
      "type": 8,
      "id": 201010051,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3067": {
      "type": 8,
      "id": 202005021,
      "quantity": 20
    },
    "3068": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 202005051,
      "quantity": 20
    },
    "3070": {
      "type": 8,
      "id": 103001003,
      "quantity": 25
    },
    "3071": {
      "type": 8,
      "id": 102001003,
      "quantity": 25
    },
    "3072": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3073": {
      "type": 8,
      "id": 201010052,
      "quantity": 20
    }
  },
  "20415": {
    "1001": {
      "type": 20,
      "id": 2041501,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 12,
      "id": 40040041,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001031,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 201008001,
      "quantity": 1
    },
    "1006": {
      "type": 8,
      "id": 104002031,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2041505,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001032,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 201008001,
      "quantity": 1
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2041501,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002031,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2041505,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040041,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2041501,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001031,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002031,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 15
    },
    "1022": {
      "type": 8,
      "id": 104001033,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002032,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001031,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001032,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002031,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1033": {
      "type": 8,
      "id": 104002032,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001031,
      "quantity": 30
    },
    "1035": {
      "type": 8,
      "id": 104002031,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001033,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001032,
      "quantity": 5
    },
    "1039": {
      "type": 8,
      "id": 104002032,
      "quantity": 2
    },
    "1040": {
      "type": 8,
      "id": 104001031,
      "quantity": 40
    },
    "1041": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1042": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1043": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1044": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1045": {
      "type": 20,
      "id": 2041501,
      "quantity": 100
    },
    "1046": {
      "type": 8,
      "id": 104001032,
      "quantity": 5
    },
    "1047": {
      "type": 8,
      "id": 104002032,
      "quantity": 3
    },
    "1048": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1049": {
      "type": 8,
      "id": 104001033,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2001": {
      "type": 20,
      "id": 2041501,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040041,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 200
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 3,
      "id": 30330301,
      "quantity": 1
    },
    "2012": {
      "type": 8,
      "id": 104002031,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050206,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001031,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2041501,
      "quantity": 50
    },
    "2018": {
      "type": 3,
      "id": 30330301,
      "quantity": 1
    },
    "2019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2020": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040041,
      "quantity": 1
    },
    "2024": {
      "type": 3,
      "id": 30330301,
      "quantity": 1
    },
    "2025": {
      "type": 20,
      "id": 2041501,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040041,
      "quantity": 1
    },
    "2031": {
      "type": 3,
      "id": 30330301,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001033,
      "quantity": 2
    },
    "2033": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2034": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2037": {
      "type": 8,
      "id": 104001032,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2041501,
      "quantity": 80
    },
    "2040": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 15
    },
    "2042": {
      "type": 8,
      "id": 104002032,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2041501,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 15
    },
    "2046": {
      "type": 3,
      "id": 30330301,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2041501,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 8,
      "id": 104001033,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3001": {
      "type": 20,
      "id": 2041501,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "3006": {
      "type": 8,
      "id": 201010031,
      "quantity": 10
    },
    "3007": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3008": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3009": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "3010": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3011": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3012": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "3013": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3014": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3015": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3016": {
      "type": 20,
      "id": 2041501,
      "quantity": 100
    },
    "3017": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3018": {
      "type": 8,
      "id": 201010031,
      "quantity": 10
    },
    "3019": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3020": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3021": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3022": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3025": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3026": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3027": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3028": {
      "type": 20,
      "id": 2041501,
      "quantity": 120
    },
    "3029": {
      "type": 8,
      "id": 201010031,
      "quantity": 15
    },
    "3030": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3031": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3032": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3033": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3034": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "3035": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3036": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3037": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3038": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3039": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3040": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3041": {
      "type": 20,
      "id": 2041501,
      "quantity": 120
    },
    "3042": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3043": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3044": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3045": {
      "type": 8,
      "id": 201010032,
      "quantity": 10
    },
    "3046": {
      "type": 14,
      "id": 0,
      "quantity": 1400
    },
    "3047": {
      "type": 8,
      "id": 201010031,
      "quantity": 15
    },
    "3048": {
      "type": 20,
      "id": 2041501,
      "quantity": 140
    },
    "3049": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3050": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3051": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3052": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3054": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "3055": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3056": {
      "type": 20,
      "id": 2041501,
      "quantity": 140
    },
    "3057": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3058": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3059": {
      "type": 8,
      "id": 201010032,
      "quantity": 10
    },
    "3060": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "3062": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3063": {
      "type": 8,
      "id": 102001003,
      "quantity": 15
    },
    "3064": {
      "type": 8,
      "id": 202005021,
      "quantity": 20
    },
    "3065": {
      "type": 8,
      "id": 201010031,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3067": {
      "type": 8,
      "id": 202005031,
      "quantity": 20
    },
    "3068": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 202005071,
      "quantity": 20
    },
    "3070": {
      "type": 8,
      "id": 103001003,
      "quantity": 25
    },
    "3071": {
      "type": 8,
      "id": 102001003,
      "quantity": 25
    },
    "3072": {
      "type": 8,
      "id": 113001003,
      "quantity": 25
    },
    "3073": {
      "type": 8,
      "id": 201010032,
      "quantity": 20
    }
  },
  "20416": {
    "1001": {
      "type": 20,
      "id": 2041601,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 12,
      "id": 40040032,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001011,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 201008001,
      "quantity": 1
    },
    "1006": {
      "type": 8,
      "id": 104002011,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2041605,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001012,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2041601,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002011,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2041605,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040032,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2041601,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001011,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002011,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001013,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002012,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001011,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001012,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002011,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1033": {
      "type": 8,
      "id": 104002012,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001011,
      "quantity": 30
    },
    "1035": {
      "type": 8,
      "id": 104002011,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001013,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001012,
      "quantity": 5
    },
    "1039": {
      "type": 20,
      "id": 2041607,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002012,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 104001011,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2041601,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001012,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002012,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001013,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2041601,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040032,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 3,
      "id": 30330101,
      "quantity": 1
    },
    "2012": {
      "type": 8,
      "id": 104002011,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050303,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001011,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2041601,
      "quantity": 50
    },
    "2018": {
      "type": 3,
      "id": 30330101,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040032,
      "quantity": 1
    },
    "2024": {
      "type": 3,
      "id": 30330101,
      "quantity": 1
    },
    "2025": {
      "type": 20,
      "id": 2041601,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040032,
      "quantity": 1
    },
    "2031": {
      "type": 3,
      "id": 30330101,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001013,
      "quantity": 2
    },
    "2033": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001012,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2041607,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2041601,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002012,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2041601,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 3,
      "id": 30330101,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2041601,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 8,
      "id": 104001013,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2041601,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010011,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005061,
      "quantity": 10
    },
    "3009": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3014": {
      "type": 20,
      "id": 2041601,
      "quantity": 100
    },
    "3015": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3016": {
      "type": 8,
      "id": 201010011,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005061,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 103001003,
      "quantity": 15
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2041601,
      "quantity": 120
    },
    "3028": {
      "type": 8,
      "id": 201010011,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3031": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "3034": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005061,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3040": {
      "type": 20,
      "id": 2041601,
      "quantity": 120
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010012,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010011,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2041601,
      "quantity": 140
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3052": {
      "type": 8,
      "id": 103001003,
      "quantity": 25
    },
    "3053": {
      "type": 8,
      "id": 202005061,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 20,
      "id": 2041601,
      "quantity": 140
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3057": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010012,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3060": {
      "type": 20,
      "id": 2041607,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005061,
      "quantity": 20
    },
    "3062": {
      "type": 8,
      "id": 201010011,
      "quantity": 40
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005031,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005021,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010012,
      "quantity": 40
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20417": {
    "1001": {
      "type": 3,
      "id": 30159906,
      "quantity": 1
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 12,
      "id": 40040067,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 201008001,
      "quantity": 1
    },
    "1006": {
      "type": 8,
      "id": 104002041,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2041705,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1009": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2041701,
      "quantity": 40
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002041,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2041705,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040067,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2041701,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1022": {
      "type": 8,
      "id": 104001043,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002042,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001041,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1033": {
      "type": 8,
      "id": 104002042,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001041,
      "quantity": 30
    },
    "1035": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001043,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1039": {
      "type": 20,
      "id": 2041707,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002042,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 104001041,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2041701,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002042,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001043,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 3,
      "id": 30259906,
      "quantity": 1
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040067,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 3,
      "id": 30759905,
      "quantity": 1
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 3,
      "id": 30230401,
      "quantity": 1
    },
    "2012": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050512,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2016": {
      "type": 8,
      "id": 104001041,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2041701,
      "quantity": 50
    },
    "2018": {
      "type": 3,
      "id": 30230401,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040067,
      "quantity": 1
    },
    "2024": {
      "type": 3,
      "id": 30230401,
      "quantity": 1
    },
    "2025": {
      "type": 20,
      "id": 2041701,
      "quantity": 80
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2030": {
      "type": 12,
      "id": 40040067,
      "quantity": 1
    },
    "2031": {
      "type": 3,
      "id": 30230401,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001043,
      "quantity": 2
    },
    "2033": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001042,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2041707,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2041701,
      "quantity": 90
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002042,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2041701,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 3,
      "id": 30230401,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2041701,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 8,
      "id": 104001043,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2041701,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010041,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3009": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 3,
      "id": 30359905,
      "quantity": 1
    },
    "3012": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3013": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3014": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3015": {
      "type": 20,
      "id": 2041701,
      "quantity": 150
    },
    "3016": {
      "type": 8,
      "id": 201010041,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 70000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 103001003,
      "quantity": 15
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2041701,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010041,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3030": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3031": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3034": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 103001003,
      "quantity": 25
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010042,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010041,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2041701,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3052": {
      "type": 8,
      "id": 101001003,
      "quantity": 40
    },
    "3053": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3056": {
      "type": 3,
      "id": 30350401,
      "quantity": 1
    },
    "3057": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010042,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3060": {
      "type": 20,
      "id": 2041707,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005031,
      "quantity": 20
    },
    "3062": {
      "type": 8,
      "id": 201010041,
      "quantity": 40
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005071,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005021,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010042,
      "quantity": 40
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20418": {
    "1001": {
      "type": 20,
      "id": 2041801,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 12,
      "id": 40040038,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1006": {
      "type": 8,
      "id": 104002051,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2041805,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2041801,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002051,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2041805,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040038,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2041801,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001053,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002052,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001051,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1033": {
      "type": 8,
      "id": 104002052,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001051,
      "quantity": 30
    },
    "1035": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001053,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1039": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1040": {
      "type": 8,
      "id": 104002052,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 104001051,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2041801,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002052,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001053,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2001": {
      "type": 20,
      "id": 2041801,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040038,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 3,
      "id": 30530501,
      "quantity": 1
    },
    "2012": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050406,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001051,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2041801,
      "quantity": 50
    },
    "2018": {
      "type": 3,
      "id": 30530501,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040038,
      "quantity": 1
    },
    "2024": {
      "type": 3,
      "id": 30530501,
      "quantity": 1
    },
    "2025": {
      "type": 20,
      "id": 2041801,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040038,
      "quantity": 1
    },
    "2031": {
      "type": 3,
      "id": 30530501,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001053,
      "quantity": 2
    },
    "2033": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001052,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2040": {
      "type": 20,
      "id": 2041801,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002052,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2041801,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 3,
      "id": 30530501,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2041801,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 8,
      "id": 104001053,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3001": {
      "type": 20,
      "id": 2041801,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010051,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005051,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005011,
      "quantity": 10
    },
    "3009": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3014": {
      "type": 20,
      "id": 2041801,
      "quantity": 150
    },
    "3015": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3016": {
      "type": 8,
      "id": 201010051,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005051,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005011,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 103001003,
      "quantity": 15
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2041801,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010051,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3031": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "3034": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010052,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010051,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2041801,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3052": {
      "type": 8,
      "id": 103001003,
      "quantity": 25
    },
    "3053": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3057": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010052,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3060": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    }
  },
  "20419": {
    "1001": {
      "type": 20,
      "id": 2041901,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 12,
      "id": 40040041,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001031,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1006": {
      "type": 8,
      "id": 104002031,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2041905,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001032,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2041901,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002031,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2041905,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040041,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2041901,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001031,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002031,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001033,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002032,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001031,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001032,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002031,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1033": {
      "type": 8,
      "id": 104002032,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001031,
      "quantity": 30
    },
    "1035": {
      "type": 8,
      "id": 104002031,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001033,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001032,
      "quantity": 5
    },
    "1039": {
      "type": 20,
      "id": 2041907,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002032,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 104001031,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2041901,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001032,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002032,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001033,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2041901,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040041,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 3,
      "id": 30340301,
      "quantity": 1
    },
    "2012": {
      "type": 8,
      "id": 104002031,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050206,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001031,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2041901,
      "quantity": 50
    },
    "2018": {
      "type": 3,
      "id": 30340301,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040041,
      "quantity": 1
    },
    "2024": {
      "type": 3,
      "id": 30340301,
      "quantity": 1
    },
    "2025": {
      "type": 20,
      "id": 2041901,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040041,
      "quantity": 1
    },
    "2031": {
      "type": 3,
      "id": 30340301,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001033,
      "quantity": 2
    },
    "2033": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001032,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2041907,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2041901,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002032,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2041901,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 3,
      "id": 30340301,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2041901,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 8,
      "id": 104001033,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2041901,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010031,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005041,
      "quantity": 10
    },
    "3009": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005061,
      "quantity": 10
    },
    "3014": {
      "type": 20,
      "id": 2041901,
      "quantity": 150
    },
    "3015": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3016": {
      "type": 8,
      "id": 201010031,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005041,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 103001003,
      "quantity": 15
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005061,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2041901,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010031,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3031": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "3034": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005041,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005061,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010032,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010031,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2041901,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3052": {
      "type": 8,
      "id": 103001003,
      "quantity": 25
    },
    "3053": {
      "type": 8,
      "id": 202005041,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3057": {
      "type": 8,
      "id": 202005061,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010032,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3060": {
      "type": 20,
      "id": 2041907,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005041,
      "quantity": 20
    },
    "3062": {
      "type": 8,
      "id": 201010031,
      "quantity": 40
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005031,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005061,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010032,
      "quantity": 40
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20420": {
    "1001": {
      "type": 20,
      "id": 2042001,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 12,
      "id": 40040021,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001021,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1006": {
      "type": 8,
      "id": 104002021,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2042005,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001022,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2042001,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002021,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2042005,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040021,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2042001,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001021,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002021,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001023,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002022,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001021,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001022,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002021,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1033": {
      "type": 8,
      "id": 104002022,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001021,
      "quantity": 30
    },
    "1035": {
      "type": 8,
      "id": 104002021,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001023,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001022,
      "quantity": 5
    },
    "1039": {
      "type": 20,
      "id": 2042007,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002022,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 104001021,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2042001,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001022,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002022,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001023,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2042001,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040021,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 3,
      "id": 30240202,
      "quantity": 1
    },
    "2012": {
      "type": 8,
      "id": 104002021,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050103,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001021,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2042001,
      "quantity": 50
    },
    "2018": {
      "type": 3,
      "id": 30240202,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040021,
      "quantity": 1
    },
    "2024": {
      "type": 3,
      "id": 30240202,
      "quantity": 1
    },
    "2025": {
      "type": 20,
      "id": 2042001,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040021,
      "quantity": 1
    },
    "2031": {
      "type": 3,
      "id": 30240202,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001023,
      "quantity": 2
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001022,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2042007,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2042001,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002022,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2042001,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 3,
      "id": 30240202,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2042001,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001023,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2042001,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010021,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3009": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005051,
      "quantity": 10
    },
    "3014": {
      "type": 20,
      "id": 2042001,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010021,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 103001003,
      "quantity": 15
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005051,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2042001,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010021,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "3034": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010022,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010021,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2042001,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3057": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010022,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3060": {
      "type": 20,
      "id": 2042007,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005071,
      "quantity": 20
    },
    "3062": {
      "type": 8,
      "id": 201010021,
      "quantity": 40
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005021,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005051,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010022,
      "quantity": 40
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20421": {
    "1001": {
      "type": 20,
      "id": 2042101,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 12,
      "id": 40040055,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001021,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1006": {
      "type": 8,
      "id": 104002021,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2042105,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001022,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2042101,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002021,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2042105,
      "quantity": 10
    },
    "1015": {
      "type": 12,
      "id": 40040055,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2042101,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001021,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002021,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001023,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002022,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001021,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001022,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002021,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1033": {
      "type": 8,
      "id": 104002022,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001021,
      "quantity": 30
    },
    "1035": {
      "type": 8,
      "id": 104002021,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001023,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001022,
      "quantity": 5
    },
    "1039": {
      "type": 20,
      "id": 2042107,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002022,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 104001021,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2042101,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001022,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002022,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001023,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2042101,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040055,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 3,
      "id": 30740201,
      "quantity": 1
    },
    "2012": {
      "type": 8,
      "id": 104002021,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050105,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001021,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2042101,
      "quantity": 50
    },
    "2018": {
      "type": 3,
      "id": 30740201,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 12,
      "id": 40040055,
      "quantity": 1
    },
    "2024": {
      "type": 3,
      "id": 30740201,
      "quantity": 1
    },
    "2025": {
      "type": 20,
      "id": 2042101,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 12,
      "id": 40040055,
      "quantity": 1
    },
    "2031": {
      "type": 3,
      "id": 30740201,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001023,
      "quantity": 2
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001022,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2042107,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2042101,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002022,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2042101,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 3,
      "id": 30740201,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2042101,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001023,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2042101,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010021,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005041,
      "quantity": 10
    },
    "3009": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005011,
      "quantity": 10
    },
    "3014": {
      "type": 20,
      "id": 2042101,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010021,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005041,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 103001003,
      "quantity": 15
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005011,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2042101,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010021,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "3034": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005041,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010022,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010021,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2042101,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005041,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3057": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010022,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3060": {
      "type": 20,
      "id": 2042107,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005041,
      "quantity": 20
    },
    "3062": {
      "type": 8,
      "id": 201010021,
      "quantity": 40
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005071,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005011,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010022,
      "quantity": 40
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20422": {
    "1001": {
      "type": 20,
      "id": 2042201,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1006": {
      "type": 8,
      "id": 104002051,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2042205,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2042201,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002051,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2042205,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2042201,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001053,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002052,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001051,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002052,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001051,
      "quantity": 30
    },
    "1035": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001053,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1039": {
      "type": 20,
      "id": 2042207,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002052,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 104001051,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2042201,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002052,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001053,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2042201,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2012": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050511,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001051,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2042201,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2042201,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001053,
      "quantity": 2
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001052,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2042207,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2042201,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002052,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2042201,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2042201,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001053,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2042201,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010051,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005011,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005051,
      "quantity": 10
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3014": {
      "type": 20,
      "id": 2042201,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010051,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005011,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005051,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2042201,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010051,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "3034": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010052,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010051,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2042201,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3057": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010052,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3060": {
      "type": 20,
      "id": 2042207,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005051,
      "quantity": 20
    },
    "3062": {
      "type": 8,
      "id": 201010051,
      "quantity": 40
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005011,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005021,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010052,
      "quantity": 40
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20423": {
    "1001": {
      "type": 20,
      "id": 2042301,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001041,
      "quantity": 30
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1006": {
      "type": 8,
      "id": 104002041,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2042305,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 205001003,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2042301,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002041,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2042305,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2042301,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001003,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 15
    },
    "1022": {
      "type": 8,
      "id": 104001043,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002042,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1026": {
      "type": 8,
      "id": 104001041,
      "quantity": 40
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002042,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001041,
      "quantity": 70
    },
    "1035": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001043,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1038": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1039": {
      "type": 20,
      "id": 2042307,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002042,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 205001003,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2042301,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002042,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001043,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2042301,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2012": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "2013": {
      "type": 8,
      "id": 205001003,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001041,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2042301,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001003,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2042301,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001043,
      "quantity": 2
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001042,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2042307,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2042301,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001003,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002042,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2042301,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 15
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2042301,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001043,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2042301,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010041,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005091,
      "quantity": 10
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005061,
      "quantity": 10
    },
    "3014": {
      "type": 20,
      "id": 2042301,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010041,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005091,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005061,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2042301,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010041,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 205001003,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3034": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005091,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005061,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010042,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010041,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2042301,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001003,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005091,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 120000
    },
    "3057": {
      "type": 8,
      "id": 202005061,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010042,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3060": {
      "type": 20,
      "id": 2042307,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005091,
      "quantity": 20
    },
    "3062": {
      "type": 8,
      "id": 201010041,
      "quantity": 40
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005021,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005061,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010042,
      "quantity": 40
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20424": {
    "1001": {
      "type": 20,
      "id": 2042401,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1006": {
      "type": 8,
      "id": 104002041,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2042405,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 205001004,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2042401,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002041,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2042405,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2042401,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001004,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001043,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002042,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001041,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002042,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001041,
      "quantity": 30
    },
    "1035": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001043,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1039": {
      "type": 20,
      "id": 2042407,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002042,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 205001004,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2042401,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002042,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001043,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 500000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2042401,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 200000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2012": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "2013": {
      "type": 8,
      "id": 205001004,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001041,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2042401,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001004,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2042401,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001043,
      "quantity": 2
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001042,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2042407,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2042401,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001004,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002042,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2042401,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2042401,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001043,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2042401,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010041,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005091,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005011,
      "quantity": 10
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3014": {
      "type": 20,
      "id": 2042401,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010041,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005091,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005011,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2042401,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010041,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 205001004,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3034": {
      "type": 8,
      "id": 202005091,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010042,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010041,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2042401,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001004,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005091,
      "quantity": 15
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010042,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2042407,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005011,
      "quantity": 20
    },
    "3062": {
      "type": 8,
      "id": 201010041,
      "quantity": 40
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005091,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005021,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010042,
      "quantity": 40
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20425": {
    "1001": {
      "type": 20,
      "id": 2042501,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001011,
      "quantity": 30
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1006": {
      "type": 8,
      "id": 104002011,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2042505,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001012,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 205001005,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2042501,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002011,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2042505,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2042501,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001005,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002011,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 15
    },
    "1022": {
      "type": 8,
      "id": 104001013,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002012,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001011,
      "quantity": 40
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001012,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002011,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002012,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001011,
      "quantity": 70
    },
    "1035": {
      "type": 8,
      "id": 104002011,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001013,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1038": {
      "type": 8,
      "id": 104001012,
      "quantity": 5
    },
    "1039": {
      "type": 20,
      "id": 2042507,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002012,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 205001005,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2042501,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001012,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002012,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001013,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 500000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2042501,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 200000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2012": {
      "type": 8,
      "id": 104002011,
      "quantity": 5
    },
    "2013": {
      "type": 8,
      "id": 205001005,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001011,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2042501,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001005,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2042501,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001013,
      "quantity": 2
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001012,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2042507,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2042501,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001005,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002012,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2042501,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 15
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2042501,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001013,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2042501,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010011,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005081,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3014": {
      "type": 20,
      "id": 2042501,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010011,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005081,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2042501,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010011,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 205001005,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3034": {
      "type": 8,
      "id": 202005081,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010012,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010011,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2042501,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001005,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005081,
      "quantity": 15
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1200000
    },
    "3057": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010012,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2042507,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005071,
      "quantity": 20
    },
    "3062": {
      "type": 8,
      "id": 201010011,
      "quantity": 40
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005081,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005021,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010012,
      "quantity": 40
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20426": {
    "1001": {
      "type": 20,
      "id": 2042601,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1006": {
      "type": 8,
      "id": 104002041,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2042605,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2042601,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002041,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2042605,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2042601,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001043,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002042,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001041,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002042,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001041,
      "quantity": 30
    },
    "1035": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001043,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1039": {
      "type": 20,
      "id": 2042607,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002042,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 104001041,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2042601,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002042,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001043,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 500000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2042601,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 200000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2012": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050512,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001041,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2042601,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2042601,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001043,
      "quantity": 2
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001042,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2042607,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2042601,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002042,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2042601,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2042601,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001043,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2042601,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010041,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3014": {
      "type": 20,
      "id": 2042601,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010041,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005071,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2042601,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010041,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3034": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010042,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010041,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2042601,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010042,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2042607,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005031,
      "quantity": 20
    },
    "3062": {
      "type": 8,
      "id": 201010041,
      "quantity": 40
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005071,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005021,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010042,
      "quantity": 40
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20429": {
    "1001": {
      "type": 20,
      "id": 2042901,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001051,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1007": {
      "type": 20,
      "id": 2042905,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001052,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 205001006,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1011": {
      "type": 20,
      "id": 2042901,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2042905,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2042901,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001006,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1022": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002052,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001051,
      "quantity": 100
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002052,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001051,
      "quantity": 50
    },
    "1035": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001053,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2042907,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002052,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 205001006,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2042901,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002052,
      "quantity": 5
    },
    "1049": {
      "type": 8,
      "id": 104001053,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 500000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2042901,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 200000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2012": {
      "type": 8,
      "id": 104002051,
      "quantity": 20
    },
    "2013": {
      "type": 8,
      "id": 205001006,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001051,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2042901,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001006,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2042901,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002051,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001052,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2042907,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2042901,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001006,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002052,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2042901,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2042901,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3001": {
      "type": 20,
      "id": 2042901,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010041,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005041,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005011,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2042901,
      "quantity": 100
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2042901,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 205001006,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3034": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2042901,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001006,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2042907,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20430": {
    "1001": {
      "type": 20,
      "id": 2043001,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1006": {
      "type": 8,
      "id": 104002051,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2043005,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2043001,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002051,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2043005,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2043001,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001053,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002052,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001051,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002052,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001051,
      "quantity": 30
    },
    "1035": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001053,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1039": {
      "type": 20,
      "id": 2043007,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002052,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 104001051,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2043001,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001052,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002052,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001053,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 500000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2043001,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 200000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2012": {
      "type": 8,
      "id": 104002051,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050517,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001051,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2043001,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2043001,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001053,
      "quantity": 2
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001052,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2043007,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2043001,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002052,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2043001,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2043001,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001053,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2043001,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010051,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005091,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3014": {
      "type": 20,
      "id": 2043001,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010051,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005091,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005021,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005031,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2043001,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010051,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3034": {
      "type": 8,
      "id": 202005091,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010052,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010051,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2043001,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005091,
      "quantity": 15
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010052,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2043007,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005021,
      "quantity": 20
    },
    "3062": {
      "type": 8,
      "id": 201010051,
      "quantity": 40
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005091,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005031,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010052,
      "quantity": 40
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20431": {
    "1001": {
      "type": 20,
      "id": 2043101,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001031,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1007": {
      "type": 20,
      "id": 2043105,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001032,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 205001007,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1011": {
      "type": 20,
      "id": 2043101,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2043105,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2043101,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001007,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1022": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002032,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001031,
      "quantity": 100
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002032,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001031,
      "quantity": 50
    },
    "1035": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001033,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2043107,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002032,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 205001007,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2043101,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002032,
      "quantity": 5
    },
    "1049": {
      "type": 8,
      "id": 104001033,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 500000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2043101,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 200000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2012": {
      "type": 8,
      "id": 104002031,
      "quantity": 20
    },
    "2013": {
      "type": 8,
      "id": 205001007,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001031,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2043101,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001007,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2043101,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002031,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001032,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2043107,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2043101,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001007,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002032,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2043101,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2043101,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3001": {
      "type": 20,
      "id": 2043101,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010031,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005061,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2043101,
      "quantity": 100
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005061,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2043101,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 205001007,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3034": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2043101,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001007,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2043107,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20432": {
    "1001": {
      "type": 20,
      "id": 2043201,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 5
    },
    "1006": {
      "type": 8,
      "id": 104002041,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2043205,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2043201,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002041,
      "quantity": 4
    },
    "1014": {
      "type": 20,
      "id": 2043205,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2043201,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001043,
      "quantity": 1
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002042,
      "quantity": 1
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001041,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1030": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002042,
      "quantity": 2
    },
    "1034": {
      "type": 8,
      "id": 104001041,
      "quantity": 30
    },
    "1035": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "1036": {
      "type": 8,
      "id": 104001043,
      "quantity": 1
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1039": {
      "type": 20,
      "id": 2043207,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002042,
      "quantity": 2
    },
    "1041": {
      "type": 8,
      "id": 104001041,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2043201,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001042,
      "quantity": 5
    },
    "1048": {
      "type": 8,
      "id": 104002042,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001043,
      "quantity": 2
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 500000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2043201,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 200000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2012": {
      "type": 8,
      "id": 104002041,
      "quantity": 5
    },
    "2013": {
      "type": 7,
      "id": 20050504,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001041,
      "quantity": 30
    },
    "2017": {
      "type": 20,
      "id": 2043201,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2043201,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001043,
      "quantity": 2
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001042,
      "quantity": 12
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2043207,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2043201,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002042,
      "quantity": 7
    },
    "2043": {
      "type": 20,
      "id": 2043201,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2043201,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001043,
      "quantity": 3
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2043201,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010041,
      "quantity": 20
    },
    "3006": {
      "type": 8,
      "id": 202005051,
      "quantity": 10
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005081,
      "quantity": 10
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005061,
      "quantity": 10
    },
    "3014": {
      "type": 20,
      "id": 2043201,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010041,
      "quantity": 20
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005051,
      "quantity": 10
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005081,
      "quantity": 10
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005061,
      "quantity": 10
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2043201,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010041,
      "quantity": 30
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3034": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005081,
      "quantity": 15
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005061,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010042,
      "quantity": 20
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010041,
      "quantity": 30
    },
    "3047": {
      "type": 20,
      "id": 2043201,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005081,
      "quantity": 15
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005061,
      "quantity": 15
    },
    "3058": {
      "type": 8,
      "id": 201010042,
      "quantity": 20
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2043207,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005081,
      "quantity": 20
    },
    "3062": {
      "type": 8,
      "id": 201010041,
      "quantity": 40
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005051,
      "quantity": 20
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005061,
      "quantity": 20
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010042,
      "quantity": 40
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20433": {
    "1001": {
      "type": 20,
      "id": 2043301,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001051,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002051,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2043305,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001052,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2043301,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2043305,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2043301,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002052,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001051,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002052,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001051,
      "quantity": 50
    },
    "1035": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001053,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2043307,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002052,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 104001051,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2043301,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002052,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001053,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 500000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2043301,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 200000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2012": {
      "type": 8,
      "id": 104002051,
      "quantity": 20
    },
    "2013": {
      "type": 8,
      "id": 103001003,
      "quantity": 6
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001051,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2043301,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2043301,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002051,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001052,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2043307,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2043301,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002052,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2043301,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2043301,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2043301,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010051,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005011,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2043301,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2043301,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3034": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2043301,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2043307,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3073": {
      "type": 19,
      "id": 10001,
      "quantity": 1
    }
  },
  "20434": {
    "1001": {
      "type": 20,
      "id": 2043401,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001011,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002011,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2043405,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001012,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2043401,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2043405,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2043401,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001011,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001013,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002012,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001011,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001012,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002012,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001011,
      "quantity": 50
    },
    "1035": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001013,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001012,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2043407,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002012,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 104001011,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2043401,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001012,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002012,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001013,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 500000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2043401,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 200000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2012": {
      "type": 8,
      "id": 104002011,
      "quantity": 20
    },
    "2013": {
      "type": 7,
      "id": 20050307,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001011,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2043401,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2043401,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002011,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001013,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001012,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2043407,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2043401,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002012,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2043401,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2043401,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001013,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2043401,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010011,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2043401,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010011,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2043401,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010011,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3034": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010012,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010011,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2043401,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010012,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2043407,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010011,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010012,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20435": {
    "1001": {
      "type": 20,
      "id": 2043501,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001051,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002051,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2043505,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001052,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 205001008,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2043501,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2043505,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2043501,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001008,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002052,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001051,
      "quantity": 50
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002052,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001051,
      "quantity": 100
    },
    "1035": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001053,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2043507,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002052,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 205001008,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2043501,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002052,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001053,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2043501,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002051,
      "quantity": 20
    },
    "2013": {
      "type": 8,
      "id": 205001008,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001051,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2043501,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001008,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2043501,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002051,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001052,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2043507,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2043501,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001008,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002052,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2043501,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2043501,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2043501,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010051,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2043501,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2043501,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 205001008,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2043501,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001008,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2043507,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20436": {
    "1001": {
      "type": 20,
      "id": 2043601,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001041,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002041,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2043605,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001042,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2043601,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2043605,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2043601,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002042,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001041,
      "quantity": 50
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002042,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001041,
      "quantity": 100
    },
    "1035": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001043,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2043607,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002042,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2043601,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002042,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001043,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2043601,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002041,
      "quantity": 20
    },
    "2013": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001041,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2043601,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2043601,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002041,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001042,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2043607,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2043601,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001001,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002042,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2043601,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2043601,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2043601,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010041,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005011,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005091,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2043601,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005091,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2043601,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005091,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2043601,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005091,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2043607,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005091,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20437": {
    "1001": {
      "type": 20,
      "id": 2043701,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001031,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002031,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2043705,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001032,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2043701,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2043705,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2043701,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002032,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001031,
      "quantity": 50
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002032,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001031,
      "quantity": 100
    },
    "1035": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001033,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2043707,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002032,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2043701,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002032,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001033,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2043701,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002031,
      "quantity": 20
    },
    "2013": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001031,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2043701,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2043701,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002031,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001032,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2043707,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2043701,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001002,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002032,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2043701,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2043701,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2043701,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010031,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005041,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2043701,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005041,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2043701,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2043701,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2043707,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20438": {
    "1001": {
      "type": 20,
      "id": 2043801,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001031,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002031,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2043805,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001032,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 205001009,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2043801,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2043805,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2043801,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001009,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "1023": {
      "type": 8,
      "id": 205001009,
      "quantity": 3
    },
    "1024": {
      "type": 8,
      "id": 104002032,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001031,
      "quantity": 50
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002032,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001031,
      "quantity": 100
    },
    "1035": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001033,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2043807,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002032,
      "quantity": 5
    },
    "1041": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1042": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2043801,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002032,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001033,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 3000000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2043801,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 1500000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 2000000
    },
    "2012": {
      "type": 8,
      "id": 104002031,
      "quantity": 20
    },
    "2013": {
      "type": 8,
      "id": 205001009,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001031,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2043801,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001009,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2043801,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002031,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 205001009,
      "quantity": 2
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001032,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2043807,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2043801,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002032,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2043801,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2043801,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2043801,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010031,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005081,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005021,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2043801,
      "quantity": 150
    },
    "3015": {
      "type": 8,
      "id": 205001009,
      "quantity": 3
    },
    "3016": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 3000000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005081,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2043801,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 205001009,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 4000000
    },
    "3034": {
      "type": 8,
      "id": 202005081,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2043801,
      "quantity": 250
    },
    "3048": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005081,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 5000000
    },
    "3057": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2043807,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005081,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20439": {
    "1001": {
      "type": 20,
      "id": 2043901,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001021,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002021,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2043905,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001022,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2043901,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2043905,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2043901,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001021,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001023,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002022,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001021,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001022,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002022,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001021,
      "quantity": 50
    },
    "1035": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001023,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001022,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2043907,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002022,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 104001021,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2043901,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001022,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002022,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001023,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 3000000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2043901,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 1500000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 2000000
    },
    "2012": {
      "type": 8,
      "id": 104002021,
      "quantity": 20
    },
    "2013": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001021,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2043901,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2043901,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002021,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001023,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 10
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001022,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2043907,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2043901,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002022,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2043901,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2043901,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001023,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3001": {
      "type": 20,
      "id": 2043901,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010021,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005081,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005021,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2043901,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010021,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 2000000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005081,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2043901,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010021,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 3000000
    },
    "3034": {
      "type": 8,
      "id": 202005081,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010022,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010021,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2043901,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 3000000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005081,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 4000000
    },
    "3057": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010022,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2043907,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010021,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005081,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010022,
      "quantity": 50
    },
    "3073": {
      "type": 19,
      "id": 10002,
      "quantity": 1
    }
  },
  "20440": {
    "1001": {
      "type": 20,
      "id": 2044001,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001021,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002021,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2044005,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001022,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 205001011,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2044001,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2044005,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2044001,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001011,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001023,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002022,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001021,
      "quantity": 50
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001022,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002022,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001021,
      "quantity": 100
    },
    "1035": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001023,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001022,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2044007,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002022,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 205001011,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2044001,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001022,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002022,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001023,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2044001,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002021,
      "quantity": 20
    },
    "2013": {
      "type": 8,
      "id": 205001011,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001021,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2044001,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001011,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2044001,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002021,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001023,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001022,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2044007,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2044001,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001011,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002022,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2044001,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2044001,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001023,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2044001,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010021,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005011,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2044001,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010021,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2044001,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010021,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 205001011,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3044": {
      "type": 8,
      "id": 201010022,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010021,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2044001,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001011,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010022,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 125001001,
      "quantity": 1
    },
    "3060": {
      "type": 20,
      "id": 2044007,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010021,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010022,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20441": {
    "1001": {
      "type": 20,
      "id": 2044101,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001031,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002031,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2044105,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001032,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 205001010,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2044101,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2044105,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2044101,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001010,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002032,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001031,
      "quantity": 50
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002032,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001031,
      "quantity": 100
    },
    "1035": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001033,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2044107,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002032,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 205001010,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2044101,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002032,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001033,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 3000000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2044101,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 1500000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 2000000
    },
    "2012": {
      "type": 8,
      "id": 104002031,
      "quantity": 20
    },
    "2013": {
      "type": 8,
      "id": 205001010,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001031,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2044101,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001010,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2044101,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002031,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001032,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2044107,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2044101,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001010,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002032,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2044101,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2044101,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2044101,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010031,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005041,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2044101,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 3000000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2044101,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 205001010,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 4000000
    },
    "3034": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2044101,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001010,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 5000000
    },
    "3057": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2044107,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20442": {
    "1001": {
      "type": 20,
      "id": 2044201,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001011,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002011,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2044205,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001012,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 205001005,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2044201,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2044205,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2044201,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001005,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001013,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002012,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001011,
      "quantity": 50
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001012,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002012,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001011,
      "quantity": 100
    },
    "1035": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001013,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001012,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2044207,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002012,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 205001005,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2044201,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001012,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002012,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001013,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2044201,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002011,
      "quantity": 20
    },
    "2013": {
      "type": 8,
      "id": 205001005,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001011,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2044201,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001005,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2044201,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002011,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001013,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001012,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2044207,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2044201,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001005,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002012,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2044201,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2044201,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001013,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2044201,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010011,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005081,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005021,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2044201,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010011,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005081,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2044201,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010011,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 205001005,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005081,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010012,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010011,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2044201,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001005,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005081,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010012,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2044207,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010011,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005081,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010012,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20445": {
    "1001": {
      "type": 20,
      "id": 2044501,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001041,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002041,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2044505,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001042,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 205001004,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2044501,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2044505,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2044501,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001004,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002042,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001041,
      "quantity": 50
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002042,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001041,
      "quantity": 100
    },
    "1035": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001043,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2044507,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002042,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 205001004,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2044501,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002042,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001043,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 500000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2044501,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 200000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2012": {
      "type": 8,
      "id": 104002041,
      "quantity": 20
    },
    "2013": {
      "type": 8,
      "id": 205001004,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001041,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2044501,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001004,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2044501,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002041,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001042,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2044507,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2044501,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001004,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002042,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2044501,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2044501,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2044501,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010041,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005091,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005011,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005021,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2044501,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 3000000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005091,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2044501,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 205001004,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 4000000
    },
    "3034": {
      "type": 8,
      "id": 202005091,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2044501,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001004,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005091,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 5000000
    },
    "3057": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2044507,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005091,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20446": {
    "1001": {
      "type": 20,
      "id": 2044601,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001041,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002041,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2044605,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001042,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2044601,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2044605,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2044601,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002042,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001041,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002042,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001041,
      "quantity": 50
    },
    "1035": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001043,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2044607,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002042,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 104001041,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2044601,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002042,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001043,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2044601,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002041,
      "quantity": 20
    },
    "2013": {
      "type": 7,
      "id": 20050504,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001041,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2044601,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2044601,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002041,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001042,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2044607,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2044601,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002042,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2044601,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2044601,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2044601,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010041,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005081,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005061,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2044601,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005081,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2044601,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005081,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005061,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2044601,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005081,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2044607,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005081,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20447": {
    "1001": {
      "type": 20,
      "id": 2044701,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001041,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002041,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2044705,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001042,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2044701,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2044705,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2044701,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002042,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001041,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002042,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001041,
      "quantity": 50
    },
    "1035": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001043,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1039": {
      "type": 8,
      "id": 104001001,
      "quantity": 5
    },
    "1040": {
      "type": 8,
      "id": 104002042,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 104001041,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2044701,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002042,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001043,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2044701,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002041,
      "quantity": 20
    },
    "2013": {
      "type": 7,
      "id": 20050505,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001041,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2044701,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2044701,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002041,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001042,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 8,
      "id": 104001001,
      "quantity": 5
    },
    "2040": {
      "type": 20,
      "id": 2044701,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002042,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2044701,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2044701,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2044701,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010041,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005081,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005011,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2044701,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005081,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2044701,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005081,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2044701,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005081,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 8,
      "id": 104001001,
      "quantity": 10
    },
    "3061": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005081,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20448": {
    "1001": {
      "type": 20,
      "id": 2044801,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001011,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002011,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2044805,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001012,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2044801,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2044805,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2044801,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001011,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001013,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002012,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001011,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001012,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002012,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001011,
      "quantity": 50
    },
    "1035": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001013,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001012,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2044807,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002012,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 104001011,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2044801,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001012,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002012,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001013,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2044801,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002011,
      "quantity": 20
    },
    "2013": {
      "type": 7,
      "id": 20050307,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001011,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2044801,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2044801,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002011,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001013,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001012,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2044807,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2044801,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002012,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2044801,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2044801,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001013,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2044801,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010011,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2044801,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010011,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2044801,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010011,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010012,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010011,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2044801,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010012,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2044807,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010011,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010012,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20449": {
    "1001": {
      "type": 20,
      "id": 2044901,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001041,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002041,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2044905,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001042,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2044901,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2044905,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2044901,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002042,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001041,
      "quantity": 50
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002042,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001041,
      "quantity": 100
    },
    "1035": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001043,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2044907,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002042,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2044901,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002042,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001043,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2044901,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002041,
      "quantity": 20
    },
    "2013": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001041,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2044901,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2044901,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002041,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001042,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2044907,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2044901,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001001,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002042,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2044901,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2044901,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2044901,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010041,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005011,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005091,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2044901,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005091,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2044901,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005091,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2044901,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001001,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005091,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2044907,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005091,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20450": {
    "1001": {
      "type": 20,
      "id": 2045001,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001031,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002031,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2045005,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001032,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2045001,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2045005,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2045001,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001031,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002032,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001031,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002032,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001031,
      "quantity": 50
    },
    "1035": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001033,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2045007,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002032,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 104001031,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2045001,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002032,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001033,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2045001,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002031,
      "quantity": 20
    },
    "2013": {
      "type": 7,
      "id": 20050206,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001031,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2045001,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2045001,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002031,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001032,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2045007,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2045001,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002032,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2045001,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2045001,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2045001,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010031,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005041,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005061,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2045001,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2045001,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005061,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2045001,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2045007,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20451": {
    "1001": {
      "type": 20,
      "id": 2045101,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001041,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002041,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2045105,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001042,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2045101,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2045105,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2045101,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001041,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002042,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001041,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002042,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001041,
      "quantity": 50
    },
    "1035": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001043,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2045107,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002042,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 104001041,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002041,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2045101,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001042,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002042,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001043,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2045101,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002041,
      "quantity": 20
    },
    "2013": {
      "type": 7,
      "id": 20050512,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001041,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2045101,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2045101,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002041,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001042,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2045107,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2045101,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002042,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2045101,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2045101,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2045101,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010041,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005021,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2045101,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2045101,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2045101,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2045107,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010041,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20452": {
    "1001": {
      "type": 20,
      "id": 2045201,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001051,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002051,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2045205,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001052,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 205001008,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2045201,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2045205,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2045201,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001008,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002052,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001051,
      "quantity": 50
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002052,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001051,
      "quantity": 100
    },
    "1035": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001053,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2045207,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002052,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 205001008,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2045201,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002052,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001053,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2045201,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002051,
      "quantity": 20
    },
    "2013": {
      "type": 8,
      "id": 205001008,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001051,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2045201,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001008,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2045201,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002051,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001052,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2045207,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2045201,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001008,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002052,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2045201,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2045201,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2045201,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010051,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2045201,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2045201,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 205001008,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2045201,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001008,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2045207,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20453": {
    "1001": {
      "type": 20,
      "id": 2045301,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001021,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002021,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2045305,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001022,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2045301,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2045305,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2045301,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001021,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001023,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002022,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001021,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001022,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002022,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001021,
      "quantity": 50
    },
    "1035": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001023,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001022,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2045307,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002022,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 104001021,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2045301,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001022,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002022,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001023,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2045301,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002021,
      "quantity": 20
    },
    "2013": {
      "type": 7,
      "id": 20050105,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001021,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2045301,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2045301,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002021,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001023,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001022,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2045307,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2045301,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002022,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2045301,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2045301,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001023,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2045301,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010021,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005041,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005011,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2045301,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010021,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2045301,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010021,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005011,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010022,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010021,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2045301,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010022,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2045307,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010021,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010022,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20454": {
    "1001": {
      "type": 20,
      "id": 2045401,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001031,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002031,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2045405,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001032,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2045401,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2045405,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2045401,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002032,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001031,
      "quantity": 50
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002032,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001031,
      "quantity": 100
    },
    "1035": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001033,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2045407,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002032,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2045401,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002032,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001033,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2045401,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002031,
      "quantity": 20
    },
    "2013": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001031,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2045401,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2045401,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002031,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001032,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2045407,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2045401,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001002,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002032,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2045401,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2045401,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2045401,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010031,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005041,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2045401,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005041,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2045401,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2045401,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001002,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2045407,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20455": {
    "1001": {
      "type": 20,
      "id": 2045501,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001051,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002051,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2045505,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001052,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2045501,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2045505,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2045501,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002052,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001051,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002052,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001051,
      "quantity": 50
    },
    "1035": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001053,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2045507,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002052,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 104001051,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2045501,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002052,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001053,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2045501,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002051,
      "quantity": 20
    },
    "2013": {
      "type": 7,
      "id": 20050517,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001051,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2045501,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2045501,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002051,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001052,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2045507,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2045501,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002052,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2045501,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2045501,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2045501,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010051,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005091,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005021,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2045501,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005091,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2045501,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005091,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2045501,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005091,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2045507,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005091,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20456": {
    "1001": {
      "type": 20,
      "id": 2045601,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001051,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002051,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2045605,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001052,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2045601,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2045605,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2045601,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002052,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001051,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002052,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001051,
      "quantity": 50
    },
    "1035": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001053,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1039": {
      "type": 8,
      "id": 104001001,
      "quantity": 5
    },
    "1040": {
      "type": 8,
      "id": 104002052,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 104001051,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2045601,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002052,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001053,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2045601,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002051,
      "quantity": 20
    },
    "2013": {
      "type": 7,
      "id": 20050406,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001051,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2045601,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2045601,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002051,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001052,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 8,
      "id": 104001001,
      "quantity": 5
    },
    "2040": {
      "type": 20,
      "id": 2045601,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002052,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2045601,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2045601,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2045601,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010051,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005011,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2045601,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2045601,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005031,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2045601,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 8,
      "id": 104001001,
      "quantity": 10
    },
    "3061": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20457": {
    "1001": {
      "type": 20,
      "id": 2045701,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001031,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002031,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2045705,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001032,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 205001007,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2045701,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2045705,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2045701,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001007,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002032,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001031,
      "quantity": 50
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002032,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001031,
      "quantity": 100
    },
    "1035": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001033,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2045707,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002032,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 205001007,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2045701,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002032,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001033,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2045701,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002031,
      "quantity": 20
    },
    "2013": {
      "type": 8,
      "id": 205001007,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001031,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2045701,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001007,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2045701,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002031,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001032,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2045707,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2045701,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001007,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002032,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2045701,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2045701,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2045701,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010031,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005061,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2045701,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005061,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2045701,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 205001007,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2045701,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001007,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2045707,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20458": {
    "1001": {
      "type": 20,
      "id": 2045801,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001021,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002021,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2045805,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001022,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2045801,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2045805,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2045801,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001021,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001023,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002022,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001021,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001022,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002022,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001021,
      "quantity": 50
    },
    "1035": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001023,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001022,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2045807,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002022,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 104001021,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002021,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2045801,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001022,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002022,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001023,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2045801,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002021,
      "quantity": 20
    },
    "2013": {
      "type": 7,
      "id": 20050103,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001021,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2045801,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2045801,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002021,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001023,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001022,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2045807,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2045801,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002022,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2045801,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2045801,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001023,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2045801,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010021,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005021,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2045801,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010021,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005021,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2045801,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010021,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010022,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010021,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2045801,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010022,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2045807,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010021,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010022,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20459": {
    "1001": {
      "type": 20,
      "id": 2045901,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001011,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002011,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2045905,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001012,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2045901,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2045905,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2045901,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001011,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001013,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002012,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001011,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001012,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002012,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001011,
      "quantity": 50
    },
    "1035": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001013,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001012,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2045907,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002012,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 104001011,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002011,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2045901,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001012,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002012,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001013,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2045901,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002011,
      "quantity": 20
    },
    "2013": {
      "type": 7,
      "id": 20050303,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001011,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2045901,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2045901,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002011,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001013,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001012,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2045907,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2045901,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002012,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2045901,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2045901,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001013,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2045901,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010011,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005061,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005021,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2045901,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010011,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005031,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2045901,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010011,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005021,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010012,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010011,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2045901,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010012,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2045907,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010011,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005031,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005021,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010012,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20460": {
    "1001": {
      "type": 20,
      "id": 2046001,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001031,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002031,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2046005,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001032,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 205001010,
      "quantity": 3
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2046001,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2046005,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2046001,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 205001010,
      "quantity": 3
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002032,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001031,
      "quantity": 50
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002032,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001031,
      "quantity": 100
    },
    "1035": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001033,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2046007,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002032,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 205001010,
      "quantity": 3
    },
    "1042": {
      "type": 8,
      "id": 104002031,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2046001,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001032,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002032,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001033,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2046001,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002031,
      "quantity": 20
    },
    "2013": {
      "type": 8,
      "id": 205001010,
      "quantity": 3
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001031,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2046001,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 205001010,
      "quantity": 3
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2046001,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2027": {
      "type": 8,
      "id": 104002031,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001032,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2046007,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2046001,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 205001010,
      "quantity": 2
    },
    "2042": {
      "type": 8,
      "id": 104002032,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2046001,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2046001,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2046001,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010031,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005041,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2046001,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2046001,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 205001010,
      "quantity": 3
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005051,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2046001,
      "quantity": 250
    },
    "3048": {
      "type": 8,
      "id": 205001010,
      "quantity": 3
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2046007,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005041,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010031,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "20461": {
    "1001": {
      "type": 20,
      "id": 2046101,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1003": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001051,
      "quantity": 100
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1006": {
      "type": 8,
      "id": 104002051,
      "quantity": 2
    },
    "1007": {
      "type": 20,
      "id": 2046105,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001052,
      "quantity": 20
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1011": {
      "type": 20,
      "id": 2046101,
      "quantity": 20
    },
    "1012": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1013": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1014": {
      "type": 20,
      "id": 2046105,
      "quantity": 10
    },
    "1015": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1016": {
      "type": 20,
      "id": 2046101,
      "quantity": 40
    },
    "1017": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1018": {
      "type": 8,
      "id": 104001051,
      "quantity": 20
    },
    "1019": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "1020": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1022": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "1023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1024": {
      "type": 8,
      "id": 104002052,
      "quantity": 10
    },
    "1025": {
      "type": 17,
      "id": 10101,
      "quantity": 2
    },
    "1026": {
      "type": 8,
      "id": 104001051,
      "quantity": 25
    },
    "1027": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1030": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1031": {
      "type": 8,
      "id": 104001001,
      "quantity": 1
    },
    "1032": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "1033": {
      "type": 8,
      "id": 104002052,
      "quantity": 10
    },
    "1034": {
      "type": 8,
      "id": 104001051,
      "quantity": 50
    },
    "1035": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1036": {
      "type": 8,
      "id": 104001053,
      "quantity": 5
    },
    "1037": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1038": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1039": {
      "type": 20,
      "id": 2046107,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104002052,
      "quantity": 5
    },
    "1041": {
      "type": 8,
      "id": 104001051,
      "quantity": 40
    },
    "1042": {
      "type": 8,
      "id": 104002051,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1045": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1046": {
      "type": 20,
      "id": 2046101,
      "quantity": 100
    },
    "1047": {
      "type": 8,
      "id": 104001052,
      "quantity": 10
    },
    "1048": {
      "type": 8,
      "id": 104002052,
      "quantity": 3
    },
    "1049": {
      "type": 8,
      "id": 104001053,
      "quantity": 5
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 20,
      "id": 2046101,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 300000
    },
    "2005": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2006": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2007": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2008": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2009": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2010": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2011": {
      "type": 4,
      "id": 0,
      "quantity": 400000
    },
    "2012": {
      "type": 8,
      "id": 104002051,
      "quantity": 20
    },
    "2013": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 8,
      "id": 104001051,
      "quantity": 50
    },
    "2017": {
      "type": 20,
      "id": 2046101,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2019": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2020": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2021": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2022": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2023": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "2024": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "2025": {
      "type": 20,
      "id": 2046101,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002051,
      "quantity": 20
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 103001003,
      "quantity": 8
    },
    "2031": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "2033": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2037": {
      "type": 8,
      "id": 104001052,
      "quantity": 20
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 20,
      "id": 2046107,
      "quantity": 1
    },
    "2040": {
      "type": 20,
      "id": 2046101,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 8,
      "id": 104002052,
      "quantity": 20
    },
    "2043": {
      "type": 20,
      "id": 2046101,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 10
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "2047": {
      "type": 20,
      "id": 2046101,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "2050": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "3001": {
      "type": 20,
      "id": 2046101,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 8,
      "id": 201010051,
      "quantity": 100
    },
    "3006": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3007": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3008": {
      "type": 8,
      "id": 202005011,
      "quantity": 100
    },
    "3009": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3010": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3011": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3012": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3013": {
      "type": 8,
      "id": 202005071,
      "quantity": 100
    },
    "3014": {
      "type": 20,
      "id": 2046101,
      "quantity": 150
    },
    "3015": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3016": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3017": {
      "type": 4,
      "id": 0,
      "quantity": 600000
    },
    "3018": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005051,
      "quantity": 100
    },
    "3020": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3021": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3023": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3024": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3025": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3026": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3027": {
      "type": 20,
      "id": 2046101,
      "quantity": 200
    },
    "3028": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3029": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3030": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3031": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3032": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3033": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3034": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3035": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3036": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3037": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3038": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3039": {
      "type": 8,
      "id": 202005071,
      "quantity": 15
    },
    "3040": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "3041": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3045": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3046": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3047": {
      "type": 20,
      "id": 2046101,
      "quantity": 250
    },
    "3048": {
      "type": 4,
      "id": 0,
      "quantity": 800000
    },
    "3049": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3052": {
      "type": 33,
      "id": 10001,
      "quantity": 10
    },
    "3053": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3054": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3055": {
      "type": 8,
      "id": 201007001,
      "quantity": 1
    },
    "3056": {
      "type": 4,
      "id": 0,
      "quantity": 1000000
    },
    "3057": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3058": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 2
    },
    "3060": {
      "type": 20,
      "id": 2046107,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 201010051,
      "quantity": 50
    },
    "3063": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3065": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3068": {
      "type": 8,
      "id": 202005071,
      "quantity": 50
    },
    "3069": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3070": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3071": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3072": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    }
  },
  "22001": {
    "1001": {
      "type": 32,
      "id": 2200111,
      "quantity": 20
    },
    "1002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1003": {
      "type": 12,
      "id": 40040069,
      "quantity": 1
    },
    "1004": {
      "type": 8,
      "id": 104001011,
      "quantity": 150
    },
    "1005": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1006": {
      "type": 8,
      "id": 104001021,
      "quantity": 150
    },
    "1007": {
      "type": 32,
      "id": 2200131,
      "quantity": 10
    },
    "1008": {
      "type": 8,
      "id": 104001031,
      "quantity": 150
    },
    "1009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "1010": {
      "type": 8,
      "id": 104001051,
      "quantity": 150
    },
    "1011": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "1012": {
      "type": 8,
      "id": 104001041,
      "quantity": 150
    },
    "1013": {
      "type": 32,
      "id": 2200111,
      "quantity": 20
    },
    "1014": {
      "type": 32,
      "id": 2200151,
      "quantity": 20
    },
    "1015": {
      "type": 32,
      "id": 2200131,
      "quantity": 10
    },
    "1016": {
      "type": 8,
      "id": 104001012,
      "quantity": 30
    },
    "1017": {
      "type": 12,
      "id": 40040069,
      "quantity": 1
    },
    "1018": {
      "type": 8,
      "id": 104001022,
      "quantity": 30
    },
    "1019": {
      "type": 32,
      "id": 2200111,
      "quantity": 40
    },
    "1020": {
      "type": 8,
      "id": 104001032,
      "quantity": 30
    },
    "1021": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1022": {
      "type": 8,
      "id": 104001052,
      "quantity": 30
    },
    "1023": {
      "type": 32,
      "id": 2200151,
      "quantity": 30
    },
    "1024": {
      "type": 8,
      "id": 104001042,
      "quantity": 30
    },
    "1025": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "1026": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1027": {
      "type": 8,
      "id": 104002011,
      "quantity": 50
    },
    "1028": {
      "type": 18,
      "id": 0,
      "quantity": 10000
    },
    "1029": {
      "type": 8,
      "id": 104002021,
      "quantity": 50
    },
    "1030": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "1031": {
      "type": 8,
      "id": 104002031,
      "quantity": 50
    },
    "1032": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "1033": {
      "type": 8,
      "id": 104002051,
      "quantity": 50
    },
    "1034": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1035": {
      "type": 8,
      "id": 104002041,
      "quantity": 50
    },
    "1036": {
      "type": 8,
      "id": 104001001,
      "quantity": 2
    },
    "1037": {
      "type": 32,
      "id": 2200151,
      "quantity": 50
    },
    "1038": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1039": {
      "type": 32,
      "id": 2200141,
      "quantity": 1
    },
    "1040": {
      "type": 8,
      "id": 104001013,
      "quantity": 10
    },
    "1041": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "1042": {
      "type": 8,
      "id": 104001023,
      "quantity": 10
    },
    "1043": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "1044": {
      "type": 8,
      "id": 104001033,
      "quantity": 10
    },
    "1045": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "1046": {
      "type": 8,
      "id": 104001053,
      "quantity": 10
    },
    "1047": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "1048": {
      "type": 8,
      "id": 104001043,
      "quantity": 10
    },
    "1049": {
      "type": 32,
      "id": 2200111,
      "quantity": 100
    },
    "1050": {
      "type": 4,
      "id": 0,
      "quantity": 50000
    },
    "1051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "1052": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1053": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1054": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1055": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1056": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1057": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1058": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1059": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "1060": {
      "type": 8,
      "id": 113001003,
      "quantity": 5
    },
    "1061": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2001": {
      "type": 32,
      "id": 2200111,
      "quantity": 30
    },
    "2002": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2003": {
      "type": 8,
      "id": 102001002,
      "quantity": 10
    },
    "2004": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "2005": {
      "type": 12,
      "id": 40040069,
      "quantity": 1
    },
    "2006": {
      "type": 32,
      "id": 2200151,
      "quantity": 20
    },
    "2007": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2008": {
      "type": 14,
      "id": 0,
      "quantity": 400
    },
    "2009": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2010": {
      "type": 18,
      "id": 0,
      "quantity": 5000
    },
    "2011": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2012": {
      "type": 32,
      "id": 2200151,
      "quantity": 30
    },
    "2013": {
      "type": 7,
      "id": 20050111,
      "quantity": 1
    },
    "2014": {
      "type": 14,
      "id": 0,
      "quantity": 600
    },
    "2015": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2016": {
      "type": 32,
      "id": 2200151,
      "quantity": 50
    },
    "2017": {
      "type": 32,
      "id": 2200111,
      "quantity": 50
    },
    "2018": {
      "type": 8,
      "id": 116001001,
      "quantity": 5
    },
    "2019": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2020": {
      "type": 17,
      "id": 10101,
      "quantity": 1
    },
    "2021": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2022": {
      "type": 12,
      "id": 40040069,
      "quantity": 1
    },
    "2023": {
      "type": 32,
      "id": 2200151,
      "quantity": 100
    },
    "2024": {
      "type": 8,
      "id": 104002012,
      "quantity": 15
    },
    "2025": {
      "type": 32,
      "id": 2200111,
      "quantity": 60
    },
    "2026": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "2027": {
      "type": 8,
      "id": 104002022,
      "quantity": 15
    },
    "2028": {
      "type": 14,
      "id": 0,
      "quantity": 800
    },
    "2029": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2030": {
      "type": 8,
      "id": 104002032,
      "quantity": 15
    },
    "2031": {
      "type": 12,
      "id": 40040069,
      "quantity": 1
    },
    "2032": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2033": {
      "type": 8,
      "id": 104002052,
      "quantity": 15
    },
    "2034": {
      "type": 8,
      "id": 117001001,
      "quantity": 5
    },
    "2035": {
      "type": 14,
      "id": 0,
      "quantity": 1000
    },
    "2036": {
      "type": 8,
      "id": 104002042,
      "quantity": 15
    },
    "2037": {
      "type": 18,
      "id": 0,
      "quantity": 20000
    },
    "2038": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "2039": {
      "type": 32,
      "id": 2200141,
      "quantity": 1
    },
    "2040": {
      "type": 32,
      "id": 2200111,
      "quantity": 80
    },
    "2041": {
      "type": 8,
      "id": 101001003,
      "quantity": 10
    },
    "2042": {
      "type": 32,
      "id": 2200151,
      "quantity": 200
    },
    "2043": {
      "type": 32,
      "id": 2200111,
      "quantity": 100
    },
    "2044": {
      "type": 8,
      "id": 103001003,
      "quantity": 3
    },
    "2045": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "2046": {
      "type": 8,
      "id": 116001001,
      "quantity": 10
    },
    "2047": {
      "type": 32,
      "id": 2200111,
      "quantity": 100
    },
    "2048": {
      "type": 14,
      "id": 0,
      "quantity": 1600
    },
    "2049": {
      "type": 8,
      "id": 103001003,
      "quantity": 5
    },
    "2050": {
      "type": 8,
      "id": 117001001,
      "quantity": 10
    },
    "2051": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "2052": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2053": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2054": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2055": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2056": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "2057": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2058": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2059": {
      "type": 8,
      "id": 113001003,
      "quantity": 10
    },
    "2060": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "2061": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3001": {
      "type": 32,
      "id": 2200111,
      "quantity": 100
    },
    "3002": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3003": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3004": {
      "type": 8,
      "id": 102001003,
      "quantity": 5
    },
    "3005": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3006": {
      "type": 32,
      "id": 2200151,
      "quantity": 40
    },
    "3007": {
      "type": 4,
      "id": 0,
      "quantity": 30000
    },
    "3008": {
      "type": 2,
      "id": 100701,
      "quantity": 3
    },
    "3009": {
      "type": 8,
      "id": 122001001,
      "quantity": 15
    },
    "3010": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3011": {
      "type": 32,
      "id": 2200111,
      "quantity": 150
    },
    "3012": {
      "type": 8,
      "id": 101001003,
      "quantity": 20
    },
    "3013": {
      "type": 32,
      "id": 2200151,
      "quantity": 60
    },
    "3014": {
      "type": 4,
      "id": 0,
      "quantity": 40000
    },
    "3015": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3016": {
      "type": 8,
      "id": 202005061,
      "quantity": 20
    },
    "3017": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3018": {
      "type": 8,
      "id": 104003002,
      "quantity": 1
    },
    "3019": {
      "type": 8,
      "id": 202005011,
      "quantity": 20
    },
    "3020": {
      "type": 8,
      "id": 103001003,
      "quantity": 15
    },
    "3021": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3022": {
      "type": 8,
      "id": 202005051,
      "quantity": 20
    },
    "3023": {
      "type": 8,
      "id": 123001001,
      "quantity": 15
    },
    "3024": {
      "type": 32,
      "id": 2200111,
      "quantity": 200
    },
    "3025": {
      "type": 8,
      "id": 101001003,
      "quantity": 25
    },
    "3026": {
      "type": 32,
      "id": 2200151,
      "quantity": 100
    },
    "3027": {
      "type": 8,
      "id": 102001003,
      "quantity": 10
    },
    "3028": {
      "type": 17,
      "id": 10101,
      "quantity": 3
    },
    "3029": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3030": {
      "type": 4,
      "id": 0,
      "quantity": 60000
    },
    "3031": {
      "type": 2,
      "id": 100603,
      "quantity": 5
    },
    "3032": {
      "type": 8,
      "id": 101001003,
      "quantity": 30
    },
    "3033": {
      "type": 32,
      "id": 2200151,
      "quantity": 200
    },
    "3034": {
      "type": 8,
      "id": 116001001,
      "quantity": 15
    },
    "3035": {
      "type": 8,
      "id": 201010042,
      "quantity": 15
    },
    "3036": {
      "type": 8,
      "id": 201011001,
      "quantity": 1
    },
    "3037": {
      "type": 8,
      "id": 201010011,
      "quantity": 100
    },
    "3038": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3039": {
      "type": 8,
      "id": 104001001,
      "quantity": 3
    },
    "3040": {
      "type": 4,
      "id": 0,
      "quantity": 80000
    },
    "3041": {
      "type": 8,
      "id": 201010021,
      "quantity": 100
    },
    "3042": {
      "type": 8,
      "id": 102001003,
      "quantity": 20
    },
    "3043": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3044": {
      "type": 14,
      "id": 0,
      "quantity": 1500
    },
    "3045": {
      "type": 8,
      "id": 201010031,
      "quantity": 100
    },
    "3046": {
      "type": 32,
      "id": 2200111,
      "quantity": 250
    },
    "3047": {
      "type": 18,
      "id": 0,
      "quantity": 30000
    },
    "3048": {
      "type": 8,
      "id": 104003001,
      "quantity": 1
    },
    "3049": {
      "type": 8,
      "id": 201010051,
      "quantity": 100
    },
    "3050": {
      "type": 8,
      "id": 117001001,
      "quantity": 15
    },
    "3051": {
      "type": 8,
      "id": 202005061,
      "quantity": 50
    },
    "3052": {
      "type": 8,
      "id": 103001003,
      "quantity": 25
    },
    "3053": {
      "type": 8,
      "id": 201010041,
      "quantity": 100
    },
    "3054": {
      "type": 8,
      "id": 202005011,
      "quantity": 50
    },
    "3055": {
      "type": 14,
      "id": 0,
      "quantity": 2000
    },
    "3056": {
      "type": 8,
      "id": 104001001,
      "quantity": 4
    },
    "3057": {
      "type": 4,
      "id": 0,
      "quantity": 100000
    },
    "3058": {
      "type": 8,
      "id": 202005051,
      "quantity": 50
    },
    "3059": {
      "type": 8,
      "id": 202004004,
      "quantity": 1
    },
    "3060": {
      "type": 32,
      "id": 2200141,
      "quantity": 1
    },
    "3061": {
      "type": 8,
      "id": 201010012,
      "quantity": 50
    },
    "3062": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3063": {
      "type": 8,
      "id": 201010022,
      "quantity": 50
    },
    "3064": {
      "type": 8,
      "id": 122001001,
      "quantity": 25
    },
    "3065": {
      "type": 8,
      "id": 201010032,
      "quantity": 50
    },
    "3066": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3067": {
      "type": 8,
      "id": 201010052,
      "quantity": 50
    },
    "3068": {
      "type": 8,
      "id": 123001001,
      "quantity": 25
    },
    "3069": {
      "type": 8,
      "id": 201010042,
      "quantity": 50
    },
    "3070": {
      "type": 8,
      "id": 102001003,
      "quantity": 30
    },
    "3071": {
      "type": 8,
      "id": 116001001,
      "quantity": 25
    },
    "3072": {
      "type": 8,
      "id": 113001003,
      "quantity": 30
    },
    "3073": {
      "type": 8,
      "id": 117001001,
      "quantity": 25
    }
  }
}

const CombatLocationReward = {
  "22201": {
    "2": [
      {
        "entity_type": 34,
        "entity_id": 2220101,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 20
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 10000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 20
      }
    ],
    "3": [
      {
        "entity_type": 34,
        "entity_id": 2220101,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 50
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 20000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 1
      }
    ],
    "4": [
      {
        "entity_type": 34,
        "entity_id": 2220101,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 100
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 50000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 2
      }
    ],
    "5": [
      {
        "entity_type": 34,
        "entity_id": 2220101,
        "entity_quantity": 300
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 300
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 100000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 3
      }
    ]
  },
  "22202": {
    "2": [
      {
        "entity_type": 34,
        "entity_id": 2220201,
        "entity_quantity": 50
      },
      {
        "entity_type": 34,
        "entity_id": 2220203,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 20
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 10000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 20
      }
    ],
    "3": [
      {
        "entity_type": 34,
        "entity_id": 2220201,
        "entity_quantity": 100
      },
      {
        "entity_type": 34,
        "entity_id": 2220203,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 50
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 20000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 1
      }
    ],
    "4": [
      {
        "entity_type": 34,
        "entity_id": 2220201,
        "entity_quantity": 200
      },
      {
        "entity_type": 34,
        "entity_id": 2220203,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 100
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 50000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 2
      }
    ],
    "5": [
      {
        "entity_type": 34,
        "entity_id": 2220201,
        "entity_quantity": 300
      },
      {
        "entity_type": 34,
        "entity_id": 2220203,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 300
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 100000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 3
      }
    ]
  },
  "22203": {
    "2": [
      {
        "entity_type": 34,
        "entity_id": 2220301,
        "entity_quantity": 50
      },
      {
        "entity_type": 34,
        "entity_id": 2220303,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 20
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 10000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 20
      }
    ],
    "3": [
      {
        "entity_type": 34,
        "entity_id": 2220301,
        "entity_quantity": 100
      },
      {
        "entity_type": 34,
        "entity_id": 2220303,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 50
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 20000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 1
      }
    ],
    "4": [
      {
        "entity_type": 34,
        "entity_id": 2220301,
        "entity_quantity": 200
      },
      {
        "entity_type": 34,
        "entity_id": 2220303,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 100
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 50000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 2
      }
    ],
    "5": [
      {
        "entity_type": 34,
        "entity_id": 2220301,
        "entity_quantity": 300
      },
      {
        "entity_type": 34,
        "entity_id": 2220303,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 300
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 100000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 3
      }
    ]
  },
  "22204": {
    "2": [
      {
        "entity_type": 34,
        "entity_id": 2220401,
        "entity_quantity": 50
      },
      {
        "entity_type": 34,
        "entity_id": 2220403,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 20
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 10000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 20
      }
    ],
    "3": [
      {
        "entity_type": 34,
        "entity_id": 2220401,
        "entity_quantity": 100
      },
      {
        "entity_type": 34,
        "entity_id": 2220403,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 50
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 20000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 1
      }
    ],
    "4": [
      {
        "entity_type": 34,
        "entity_id": 2220401,
        "entity_quantity": 200
      },
      {
        "entity_type": 34,
        "entity_id": 2220403,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 100
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 50000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 2
      }
    ],
    "5": [
      {
        "entity_type": 34,
        "entity_id": 2220401,
        "entity_quantity": 300
      },
      {
        "entity_type": 34,
        "entity_id": 2220403,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 300
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 100000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 3
      }
    ]
  },
  "22205": {
    "2": [
      {
        "entity_type": 34,
        "entity_id": 2220501,
        "entity_quantity": 150
      },
      {
        "entity_type": 34,
        "entity_id": 2220503,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 20
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 10000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 20
      }
    ],
    "3": [
      {
        "entity_type": 34,
        "entity_id": 2220501,
        "entity_quantity": 300
      },
      {
        "entity_type": 34,
        "entity_id": 2220503,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 50
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 20000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 1
      }
    ],
    "4": [
      {
        "entity_type": 34,
        "entity_id": 2220501,
        "entity_quantity": 600
      },
      {
        "entity_type": 34,
        "entity_id": 2220503,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 100
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 50000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 2
      }
    ],
    "5": [
      {
        "entity_type": 34,
        "entity_id": 2220501,
        "entity_quantity": 800
      },
      {
        "entity_type": 34,
        "entity_id": 2220503,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 300
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 100000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 3
      }
    ]
  },
  "22206": {
    "2": [
      {
        "entity_type": 34,
        "entity_id": 2220601,
        "entity_quantity": 150
      },
      {
        "entity_type": 34,
        "entity_id": 2220603,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 20
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 10000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 20
      }
    ],
    "3": [
      {
        "entity_type": 34,
        "entity_id": 2220601,
        "entity_quantity": 300
      },
      {
        "entity_type": 34,
        "entity_id": 2220603,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 50
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 20000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 1
      }
    ],
    "4": [
      {
        "entity_type": 34,
        "entity_id": 2220601,
        "entity_quantity": 600
      },
      {
        "entity_type": 34,
        "entity_id": 2220603,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 100
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 50000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 2
      }
    ],
    "5": [
      {
        "entity_type": 34,
        "entity_id": 2220601,
        "entity_quantity": 800
      },
      {
        "entity_type": 34,
        "entity_id": 2220603,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 300
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 100000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 3
      }
    ]
  },
  "22207": {
    "2": [
      {
        "entity_type": 34,
        "entity_id": 2220701,
        "entity_quantity": 150
      },
      {
        "entity_type": 34,
        "entity_id": 2220703,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 20
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 10000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 20
      }
    ],
    "3": [
      {
        "entity_type": 34,
        "entity_id": 2220701,
        "entity_quantity": 300
      },
      {
        "entity_type": 34,
        "entity_id": 2220703,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 50
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 20000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 1
      }
    ],
    "4": [
      {
        "entity_type": 34,
        "entity_id": 2220701,
        "entity_quantity": 600
      },
      {
        "entity_type": 34,
        "entity_id": 2220703,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 100
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 50000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 2
      }
    ],
    "5": [
      {
        "entity_type": 34,
        "entity_id": 2220701,
        "entity_quantity": 800
      },
      {
        "entity_type": 34,
        "entity_id": 2220703,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 300
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 100000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 3
      }
    ]
  },
  "22208": {
    "2": [
      {
        "entity_type": 34,
        "entity_id": 2220801,
        "entity_quantity": 150
      },
      {
        "entity_type": 34,
        "entity_id": 2220803,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 20
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 10000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 20
      }
    ],
    "3": [
      {
        "entity_type": 34,
        "entity_id": 2220801,
        "entity_quantity": 300
      },
      {
        "entity_type": 34,
        "entity_id": 2220803,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 50
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 20000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 1
      }
    ],
    "4": [
      {
        "entity_type": 34,
        "entity_id": 2220801,
        "entity_quantity": 600
      },
      {
        "entity_type": 34,
        "entity_id": 2220803,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 100
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 50000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 2
      }
    ],
    "5": [
      {
        "entity_type": 34,
        "entity_id": 2220801,
        "entity_quantity": 800
      },
      {
        "entity_type": 34,
        "entity_id": 2220803,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 300
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 100000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 3
      }
    ]
  },
  "22209": {
    "2": [
      {
        "entity_type": 34,
        "entity_id": 2220901,
        "entity_quantity": 150
      },
      {
        "entity_type": 34,
        "entity_id": 2220903,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 20
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 10000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 20
      }
    ],
    "3": [
      {
        "entity_type": 34,
        "entity_id": 2220901,
        "entity_quantity": 300
      },
      {
        "entity_type": 34,
        "entity_id": 2220903,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 50
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 20000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 1
      }
    ],
    "4": [
      {
        "entity_type": 34,
        "entity_id": 2220901,
        "entity_quantity": 600
      },
      {
        "entity_type": 34,
        "entity_id": 2220903,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 100
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 50000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 2
      }
    ],
    "5": [
      {
        "entity_type": 34,
        "entity_id": 2220901,
        "entity_quantity": 800
      },
      {
        "entity_type": 34,
        "entity_id": 2220903,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 300
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 100000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 3
      }
    ]
  },
  "22210": {
    "2": [
      {
        "entity_type": 34,
        "entity_id": 2221001,
        "entity_quantity": 150
      },
      {
        "entity_type": 34,
        "entity_id": 2221003,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 20
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 10000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 20
      }
    ],
    "3": [
      {
        "entity_type": 34,
        "entity_id": 2221001,
        "entity_quantity": 300
      },
      {
        "entity_type": 34,
        "entity_id": 2221003,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 50
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 20000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 1
      }
    ],
    "4": [
      {
        "entity_type": 34,
        "entity_id": 2221001,
        "entity_quantity": 600
      },
      {
        "entity_type": 34,
        "entity_id": 2221003,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 100
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 50000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 2
      }
    ],
    "5": [
      {
        "entity_type": 34,
        "entity_id": 2221001,
        "entity_quantity": 800
      },
      {
        "entity_type": 34,
        "entity_id": 2221003,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 300
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 100000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 3
      }
    ]
  },
  "22211": {
    "2": [
      {
        "entity_type": 34,
        "entity_id": 2221101,
        "entity_quantity": 150
      },
      {
        "entity_type": 34,
        "entity_id": 2221103,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 20
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 10000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 20
      }
    ],
    "3": [
      {
        "entity_type": 34,
        "entity_id": 2221101,
        "entity_quantity": 300
      },
      {
        "entity_type": 34,
        "entity_id": 2221103,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 50
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 20000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 1
      }
    ],
    "4": [
      {
        "entity_type": 34,
        "entity_id": 2221101,
        "entity_quantity": 600
      },
      {
        "entity_type": 34,
        "entity_id": 2221103,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 100
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 50000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 2
      }
    ],
    "5": [
      {
        "entity_type": 34,
        "entity_id": 2221101,
        "entity_quantity": 800
      },
      {
        "entity_type": 34,
        "entity_id": 2221103,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 300
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 100000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 3
      }
    ]
  },
  "22212": {
    "2": [
      {
        "entity_type": 34,
        "entity_id": 2221201,
        "entity_quantity": 150
      },
      {
        "entity_type": 34,
        "entity_id": 2221203,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 20
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 10000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 20
      }
    ],
    "3": [
      {
        "entity_type": 34,
        "entity_id": 2221201,
        "entity_quantity": 300
      },
      {
        "entity_type": 34,
        "entity_id": 2221203,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 50
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 20000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 1
      }
    ],
    "4": [
      {
        "entity_type": 34,
        "entity_id": 2221201,
        "entity_quantity": 600
      },
      {
        "entity_type": 34,
        "entity_id": 2221203,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 100
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 50000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 2
      }
    ],
    "5": [
      {
        "entity_type": 34,
        "entity_id": 2221201,
        "entity_quantity": 800
      },
      {
        "entity_type": 34,
        "entity_id": 2221203,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 300
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 100000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 3
      }
    ]
  },
  "22213": {
    "2": [
      {
        "entity_type": 34,
        "entity_id": 2221301,
        "entity_quantity": 150
      },
      {
        "entity_type": 34,
        "entity_id": 2221303,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 20
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 10000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 10
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 20
      }
    ],
    "3": [
      {
        "entity_type": 34,
        "entity_id": 2221301,
        "entity_quantity": 300
      },
      {
        "entity_type": 34,
        "entity_id": 2221303,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 50
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 20000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 20
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 30
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 1
      }
    ],
    "4": [
      {
        "entity_type": 34,
        "entity_id": 2221301,
        "entity_quantity": 600
      },
      {
        "entity_type": 34,
        "entity_id": 2221303,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 200
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 100
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 50000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 2
      }
    ],
    "5": [
      {
        "entity_type": 34,
        "entity_id": 2221301,
        "entity_quantity": 800
      },
      {
        "entity_type": 34,
        "entity_id": 2221303,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 2
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 1000
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 500
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 300
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 100000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201005001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 111001001,
        "entity_quantity": 3
      }
    ]
  },
  "22214": {
    "2": [
      {
        "entity_type": 34,
        "entity_id": 2221401,
        "entity_quantity": 150
      },
      {
        "entity_type": 34,
        "entity_id": 2221403,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 202004004,
        "entity_quantity": 1
      },
      {
        "entity_type": 8,
        "entity_id": 201009001,
        "entity_quantity": 100
      },
      {
        "entity_type": 8,
        "entity_id": 201009002,
        "entity_quantity": 50
      },
      {
        "entity_type": 8,
        "entity_id": 201009003,
        "entity_quantity": 20
      },
      {
        "entity_type": 4,
        "entity_id": 0,
        "entity_quantity": 10000
      },
      {
        "entity_type": 8,
        "entity_id": 102001003,
        "entity_quantity": 10
    ]