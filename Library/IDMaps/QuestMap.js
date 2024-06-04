// Quest Map
var fs = require('fs');
const CharacterMap = require('./CharacterMap.js');
const DragonMap = require('./DragonMap.js');
const WyrmprintMap = require('./WyrmprintMap.js');
const EventMap = require('./EventMap.js');

const Rotations = JSON.parse(fs.readFileSync('./Library/Event/QuestMainRotationBonusDrops.json'));
const QuestEnemyList = JSON.parse(fs.readFileSync('./Library/Event/QuestEnemyList.json'));

const ScoreList = JSON.parse(fs.readFileSync('./Library/IDMaps/EnemyMap/QuestScoringEnemy.json'));
const EnemyParam = JSON.parse(fs.readFileSync('./Library/IDMaps/EnemyMap/EnemyParam.json'));
const EnemyData = JSON.parse(fs.readFileSync('./Library/IDMaps/EnemyMap/EnemyData.json'));

function GetQuestInfo(QuestID, Attribute) {
	try {
		var QuestInfoMap = JSON.parse(fs.readFileSync('./Library/IDMaps/Quest/' + String(QuestID) + ".json"));
		return QuestInfoMap[Attribute];
	}
	catch {
		console.log("Faulty Quest ID " + QuestID);
	}
}

async function IsQuestTypeMatchMulti(TabType, QuestID) {
	//const QuestData = JSON.parse(await QuestZip.entryData(String(QuestID) + ".json"));
	const QuestBase = String(QuestID).slice(0, 3);
	if (TabType == 2) {
		if (QuestBase == 204) { // raid
			const QuestSuffix = String(QuestID).slice(-3);
			if (QuestSuffix == 301 || QuestSuffix == 302 || QuestSuffix == 401 || QuestSuffix == 501 || QuestSuffix == 602 || QuestSuffix == 604 || QuestSuffix == 606) { return true; }
		}
		else if (QuestBase == 217) { return true; } // Astral Raid
		else if (QuestBase == 220) { // MH Primal Crisis
			return true;
		}
		else if (QuestBase == 226) { return true; } // Morsayati Reckoning
		else if (QuestBase == 320) { // Trials of the Mighty, Raid
			const EventNo = String(QuestID).slice(3, 5);
			if (EventNo == 12 || EventNo == 13 || EventNo == 15 || EventNo == 16 || EventNo == 19 ||
			EventNo == 20 || EventNo == 21 || EventNo == 22 || EventNo == 23 || EventNo == 24) {
				return true;
			}
		}
	}
	else if (TabType == 3) {
		if (QuestBase == 204) { // raid event, non-raid
			const QuestSuffix = String(QuestID).slice(-3);
			if (QuestSuffix != 301 && QuestSuffix != 302 && QuestSuffix != 401 && QuestSuffix != 501 && QuestSuffix != 602 && QuestSuffix != 604 && QuestSuffix != 606) { return true; }
		}
		else if (QuestBase == 208) { return true; } // Facility event
		else if (QuestBase == 214) { return true; } // FEH
		else if (QuestBase == 218) { return true; } // Mega Man
		else if (QuestBase == 220) { // MH Primal Crisis
			return true;
		}
		else if (QuestBase == 222) { return true; } // defensive ("combat") event
		else if (QuestBase == 227) { return true; } // time attack
		else if (QuestBase == 229) { return true; } // Invasion ("earn") event
		else if (QuestBase == 310) { return true; } // Special events (walkies/ascent to imminence)
		else if (QuestBase == 320) { // Trials of the Mighty, non-raid
			const EventNo = String(QuestID).slice(3, 5);
			if (EventNo != 12 && EventNo != 13 && EventNo != 15 && EventNo != 16 && EventNo != 19 &&
			EventNo != 20 && EventNo != 21 && EventNo != 22 && EventNo != 23 && EventNo != 24) {
				return true;
			}
		} 
	}
	else if (TabType == 1) {
		// 100 = story
		// 219 = agito
		// 225 = agito legend
		// 228 = sinister dominion
		// 232 = sinister dominion legend
		// 233 = primal dragon
		// 300 = void battles
		// 
		const EventBase = [ 204, 208, 214, 217, 218, 220, 222, 227, 229, 310, 320 ]
		if (!EventBase.includes(QuestBase)) { return true; }
	}
	return false;
}

const IntervalTypes = [
	{'id': 0,'match': []}, //None
	{'id': 1,'match': [0,1,2,3,4,5,6]}, //Daily
	{'id': 2,'match': [0,6]}, //Weekend
	{'id': 3,'match': [0]}, //Sunday
	{'id': 4,'match': [1]}, //Monday
	{'id': 5,'match': [2]}, //Tuesday
	{'id': 6,'match': [3]}, //Wednesday
	{'id': 7,'match': [4]}, //Thursday
	{'id': 8,'match': [5]}, //Friday
	{'id': 9,'match': [6]}, //Saturday
	{'id': 10,'match': [0,1]}, //Sunday/Monday
	{'id': 11,'match': [1,2]}, //Monday/Tuesday
	{'id': 12,'match': [1,3]}, //Monday/Wednesday
	{'id': 13,'match': [1,4]}, //Monday/Thursday
	{'id': 14,'match': [1,5]}, //Monday/Friday
	{'id': 15,'match': [1,6]}, //Monday/Saturday
	{'id': 17,'match': [0,1,6]}, //Sunday/Monday/Saturday
	{'id': 18,'match': [0,2,6]}, //Sunday/Tuesday/Saturday
	{'id': 19,'match': [0,3,6]}, //Sunday/Wednesday/Saturday
	{'id': 20,'match': [0,4,6]}, //Sunday/Thursday/Saturday
	{'id': 21,'match': [0,5,6]}, //Sunday/Friday/Saturday
	{'id': 22,'match': [0,6]}, //Sunday/Saturday
	{'id': 23,'match': []}, //Event
	{'id': 24,'match': [0,1,4,6]}, //Sunday/Monday/Thursday/Saturday
	{'id': 25,'match': [0,2,5,6]}, //Sunday/Tuesday/Friday/Saturday
	{'id': 26,'match': [0,1,3,6]}, //Sunday/Monday/Wednesday/Saturday
	{'id': 27,'match': [0,3,5,6]}, //Sunday/Wednesday/Friday/Saturday
	{'id': 28,'match': [0,2,4,6]}, //Sunday/Tuesday/Thursday/Saturday
	{'id': 29,'match': [0,6]}, //Sunday/Saturday
]
function GetMultiplier(QuestID) {
	let Value = 1;
	const RotationIndex = Rotations.findIndex(x => x.group_id == QuestID);
	if (RotationIndex != -1) {
		const RotationsData = Rotations[RotationIndex];
		const IntervalIndex = IntervalTypes.findIndex(x => x.id == RotationsData['interval']);
		if (IntervalTypes[IntervalIndex]['match'].includes(new Date().getDay())) {
			Value = RotationsData['drop_multiplier'] + 1;
		}
	}
	return Value;
}

const FactorAbilities = [ // 1 = PlayerXP, 2 = CharacterXP, 3 = Coin, 4 = Mana, 5 = Event Point, 6 = Event Material, 7 = CLB01 Event Point
	{ 'id': 16, 'type': 1, 'value': 0.10 }, { 'id': 580, 'type': 1, 'value': 0.10 }, { 'id': 688, 'type': 1, 'value': 0.15 },
	{ 'id': 110150002, 'type': 1, 'value': 0.10 }, { 'id': 110150003, 'type': 1, 'value': 0.15 }, { 'id': 110150005, 'type': 1, 'value': 0.10 },
	
	{ 'id': 40, 'type': 2, 'value': 1.00 }, { 'id': 48, 'type': 2, 'value': 1.50 }, { 'id': 330000079, 'type': 2, 'value': 1.00 },
	{ 'id': 330000080, 'type': 2, 'value': 1.10 }, { 'id': 330000081, 'type': 2, 'value': 1.20 }, { 'id': 330000082, 'type': 2, 'value': 1.30 },
	{ 'id': 330000083, 'type': 2, 'value': 1.50 },
	
	{ 'id': 125, 'type': 3, 'value': 0.25 }, { 'id': 126, 'type': 3, 'value': 0.50 }, { 'id': 1478, 'type': 3, 'value': 0.8 },
	{ 'id': 1479, 'type': 3, 'value': 0.10 }, { 'id': 1480, 'type': 3, 'value': 0.12 }, { 'id': 330000133, 'type': 3, 'value': 0.25 },
	{ 'id': 330000134, 'type': 3, 'value': 0.30 }, { 'id': 330000135, 'type': 3, 'value': 0.35 }, { 'id': 330000136, 'type': 3, 'value': 0.40 },
	{ 'id': 330000137, 'type': 3, 'value': 0.50 },
	
	{ 'id': 110240101, 'type': 4, 'value': 0.25 }, { 'id': 110240102, 'type': 4, 'value': 0.50 }, { 'id': 330000084, 'type': 4, 'value': 0.25 },
	{ 'id': 330000085, 'type': 4, 'value': 0.30 }, { 'id': 330000086, 'type': 4, 'value': 0.35 }, { 'id': 330000087, 'type': 4, 'value': 0.40 },
	{ 'id': 330000088, 'type': 4, 'value': 0.50 },
	
	{ 'id': 31, 'type': 5, 'value': 0.25, 'event': 20827 }, { 'id': 32, 'type': 5, 'value': 0.5, 'event': 20831 }, { 'id': 33, 'type': 5, 'value': 1, 'event': 20831 },
	{ 'id': 34, 'type': 5, 'value': 1.5, 'event': 20831 }, { 'id': 35, 'type': 6, 'value': 0.25, 'event': 20827 }, { 'id': 36, 'type': 6, 'value': 0.5, 'event': 20831 },
	{ 'id': 37, 'type': 6, 'value': 0.75, 'event': 20831 }, { 'id': 127, 'type': 5, 'value': 0.25, 'event': 20822 }, { 'id': 128, 'type': 5, 'value': 0.5, 'event': 20822 },
	{ 'id': 129, 'type': 5, 'value': 1, 'event': 20822 }, { 'id': 130, 'type': 5, 'value': 1.5, 'event': 20822 }, { 'id': 131, 'type': 6, 'value': 0.25, 'event': 20822 },
	{ 'id': 132, 'type': 6, 'value': 0.5, 'event': 20822 }, { 'id': 133, 'type': 6, 'value': 0.75, 'event': 20822 }, { 'id': 158, 'type': 7, 'value': 0.1, 'event': 21404 },
	{ 'id': 159, 'type': 7, 'value': 0.15, 'event': 21404 }, { 'id': 160, 'type': 7, 'value': 0.2, 'event': 21404 }, { 'id': 161, 'type': 7, 'value': 0.3, 'event': 21404 },
	{ 'id': 162, 'type': 7, 'value': 0.4, 'event': 21404 }, { 'id': 163, 'type': 7, 'value': 0.45, 'event': 21404 }, { 'id': 164, 'type': 7, 'value': 0.6, 'event': 21404 },
	{ 'id': 320, 'type': 5, 'value': 0.25, 'event': 20816 }, { 'id': 321, 'type': 5, 'value': 0.35, 'event': 20816 }, { 'id': 322, 'type': 5, 'value': 0.5, 'event': 20816 },
	{ 'id': 323, 'type': 5, 'value': 0.75, 'event': 20816 }, { 'id': 324, 'type': 5, 'value': 1, 'event': 20816 }, { 'id': 325, 'type': 5, 'value': 1.25, 'event': 20816 },
	{ 'id': 326, 'type': 5, 'value': 1.5, 'event': 20816 }, { 'id': 327, 'type': 6, 'value': 0.25, 'event': 20816 }, { 'id': 328, 'type': 6, 'value': 0.35, 'event': 20816 },
	{ 'id': 329, 'type': 6, 'value': 0.5, 'event': 20816 }, { 'id': 330, 'type': 6, 'value': 0.6, 'event': 20816 }, { 'id': 331, 'type': 6, 'value': 0.75, 'event': 20816 },
	{ 'id': 332, 'type': 5, 'value': 1.25, 'event': 20818 }, { 'id': 333, 'type': 5, 'value': 0.35, 'event': 20818 }, { 'id': 334, 'type': 6, 'value': 0.6, 'event': 20818 },
	{ 'id': 335, 'type': 6, 'value': 0.35, 'event': 20818 }, { 'id': 363, 'type': 5, 'value': 0.25, 'event': 20829 }, { 'id': 364, 'type': 5, 'value': 0.35, 'event': 20829 },
	{ 'id': 365, 'type': 5, 'value': 0.5, 'event': 20829 }, { 'id': 366, 'type': 5, 'value': 0.75, 'event': 20829 }, { 'id': 367, 'type': 5, 'value': 1, 'event': 20829 },
	{ 'id': 368, 'type': 5, 'value': 1.25, 'event': 20829 }, { 'id': 369, 'type': 5, 'value': 1.5, 'event': 20829 }, { 'id': 370, 'type': 6, 'value': 0.25, 'event': 20829 },
	{ 'id': 371, 'type': 6, 'value': 0.35, 'event': 20829 }, { 'id': 372, 'type': 6, 'value': 0.5, 'event': 20829 }, { 'id': 373, 'type': 6, 'value': 0.6, 'event': 20829 },
	{ 'id': 374, 'type': 6, 'value': 0.75, 'event': 20829 }, { 'id': 558, 'type': 6, 'value': 0.35, 'event': 20826 }, { 'id': 559, 'type': 5, 'value': 0.35, 'event': 20826 },
	{ 'id': 560, 'type': 5, 'value': 0.75, 'event': 20826 }, { 'id': 581, 'type': 6, 'value': 0.35, 'event': 20812 }, { 'id': 582, 'type': 5, 'value': 0.35, 'event': 20812 },
	{ 'id': 583, 'type': 5, 'value': 1.25, 'event': 20831 }, { 'id': 586, 'type': 6, 'value': 0.6, 'event': 20831 }, { 'id': 588, 'type': 5, 'value': 1.25, 'event': 20817 },
	{ 'id': 589, 'type': 6, 'value': 0.35, 'event': 20817 }, { 'id': 590, 'type': 6, 'value': 0.6, 'event': 20817 }, { 'id': 591, 'type': 5, 'value': 0.75, 'event': 20831 },
	{ 'id': 675, 'type': 5, 'value': 0.35, 'event': 20817 }, { 'id': 774, 'type': 5, 'value': 0.25, 'event': 20815 }, { 'id': 775, 'type': 5, 'value': 0.35, 'event': 20815 },
	{ 'id': 776, 'type': 5, 'value': 0.5, 'event': 20841 }, { 'id': 777, 'type': 5, 'value': 0.75, 'event': 20841 }, { 'id': 778, 'type': 5, 'value': 1, 'event': 20841 },
	{ 'id': 779, 'type': 5, 'value': 1.25, 'event': 20841 }, { 'id': 780, 'type': 5, 'value': 1.5, 'event': 20841 }, { 'id': 781, 'type': 6, 'value': 0.25, 'event': 20815 },
	{ 'id': 782, 'type': 6, 'value': 0.35, 'event': 20815 }, { 'id': 783, 'type': 6, 'value': 0.5, 'event': 20841 }, { 'id': 920, 'type': 7, 'value': 0.3, 'event': 21405 },
	{ 'id': 921, 'type': 7, 'value': 0.45, 'event': 21405 }, { 'id': 922, 'type': 7, 'value': 0.6, 'event': 21405 }, { 'id': 941, 'type': 5, 'value': 1.25, 'event': 20822 },
	{ 'id': 942, 'type': 5, 'value': 0.75, 'event': 20822 }, { 'id': 943, 'type': 5, 'value': 0.35, 'event': 20822 }, { 'id': 944, 'type': 6, 'value': 0.6, 'event': 20822 },
	{ 'id': 945, 'type': 6, 'value': 0.35, 'event': 20822 }, { 'id': 1015, 'type': 6, 'value': 0.35, 'event': 20820 }, { 'id': 1016, 'type': 6, 'value': 0.6, 'event': 20820 },
	{ 'id': 1017, 'type': 5, 'value': 0.35, 'event': 20820 }, { 'id': 1018, 'type': 5, 'value': 1.25, 'event': 20820 }, { 'id': 1081, 'type': 5, 'value': 0.25, 'event': 20836 },
	{ 'id': 1082, 'type': 5, 'value': 0.35, 'event': 20836 }, { 'id': 1083, 'type': 5, 'value': 0.5, 'event': 20842 }, { 'id': 1084, 'type': 5, 'value': 0.75, 'event': 20842 },
	{ 'id': 1085, 'type': 5, 'value': 1, 'event': 20842 }, { 'id': 1086, 'type': 5, 'value': 1.25, 'event': 20842 }, { 'id': 1087, 'type': 5, 'value': 1.5, 'event': 20842 },
	{ 'id': 1105, 'type': 6, 'value': 0.25, 'event': 20842 }, { 'id': 1106, 'type': 6, 'value': 0.35, 'event': 20842 }, { 'id': 1107, 'type': 6, 'value': 0.5, 'event': 20842 },
	{ 'id': 1261, 'type': 5, 'value': 0.25, 'event': 20839 }, { 'id': 1262, 'type': 5, 'value': 0.35, 'event': 20839 }, { 'id': 1263, 'type': 5, 'value': 0.5, 'event': 20839 },
	{ 'id': 1264, 'type': 5, 'value': 0.75, 'event': 20839 }, { 'id': 1265, 'type': 5, 'value': 1, 'event': 20839 }, { 'id': 1266, 'type': 5, 'value': 1.25, 'event': 20839 },
	{ 'id': 1267, 'type': 5, 'value': 1.5, 'event': 20839 }, { 'id': 1286, 'type': 6, 'value': 0.25, 'event': 20839 }, { 'id': 1287, 'type': 6, 'value': 0.35, 'event': 20839 },
	{ 'id': 1288, 'type': 6, 'value': 0.5, 'event': 20839 }, { 'id': 1289, 'type': 6, 'value': 0.6, 'event': 20839 }, { 'id': 1290, 'type': 6, 'value': 0.75, 'event': 20839 },
	{ 'id': 1374, 'type': 6, 'value': 0.6, 'event': 20841 }, { 'id': 1375, 'type': 6, 'value': 0.75, 'event': 20841 }, { 'id': 1467, 'type': 5, 'value': 0.5, 'event': 20843 },
	{ 'id': 1468, 'type': 5, 'value': 0.75, 'event': 20843 }, { 'id': 1469, 'type': 5, 'value': 1, 'event': 20843 }, { 'id': 1470, 'type': 5, 'value': 1.25, 'event': 20843 },
	{ 'id': 1471, 'type': 5, 'value': 1.5, 'event': 20843 }, { 'id': 1472, 'type': 6, 'value': 0.25, 'event': 20843 }, { 'id': 1473, 'type': 6, 'value': 0.35, 'event': 20843 },
	{ 'id': 1474, 'type': 6, 'value': 0.5, 'event': 20843 }, { 'id': 1811, 'type': 5, 'value': 1, 'event': 20844 }, { 'id': 1812, 'type': 5, 'value': 1.25, 'event': 20844 },
	{ 'id': 1813, 'type': 5, 'value': 1.5, 'event': 20844 }, { 'id': 1814, 'type': 6, 'value': 0.25, 'event': 20844 }, { 'id': 1815, 'type': 6, 'value': 0.35, 'event': 20844 },
	{ 'id': 1816, 'type': 6, 'value': 0.5, 'event': 20844 }, { 'id': 2133, 'type': 5, 'value': 1, 'event': 20845 }, { 'id': 2134, 'type': 5, 'value': 1.25, 'event': 20845 },
	{ 'id': 2135, 'type': 5, 'value': 1.5, 'event': 20845 }, { 'id': 2136, 'type': 6, 'value': 0.25, 'event': 20845 }, { 'id': 2137, 'type': 6, 'value': 0.35, 'event': 20845 },
	{ 'id': 2138, 'type': 6, 'value': 0.5, 'event': 20845 }, { 'id': 2462, 'type': 6, 'value': 0.25, 'event': 20846 }, { 'id': 2463, 'type': 6, 'value': 0.35, 'event': 20846 },
	{ 'id': 2464, 'type': 6, 'value': 0.5, 'event': 20846 }, { 'id': 2465, 'type': 5, 'value': 1, 'event': 20846 }, { 'id': 2466, 'type': 5, 'value': 1.25, 'event': 20846 },
	{ 'id': 2467, 'type': 5, 'value': 1.5, 'event': 20846 }, { 'id': 110190001, 'type': 5, 'value': 0.25, 'event': 20826 },
	{ 'id': 110190002, 'type': 5, 'value': 0.5, 'event': 20826 }, { 'id': 110190003, 'type': 5, 'value': 1, 'event': 20826 },
	{ 'id': 110190004, 'type': 5, 'value': 0.25, 'event': 20818 }, { 'id': 110190005, 'type': 5, 'value': 0.5, 'event': 20818 },
	{ 'id': 110190006, 'type': 5, 'value': 1, 'event': 20818 }, { 'id': 110190007, 'type': 5, 'value': 1.5, 'event': 20818 },
	{ 'id': 110190008, 'type': 5, 'value': 0.25, 'event': 20817 }, { 'id': 110190009, 'type': 5, 'value': 0.5, 'event': 20817 },
	{ 'id': 110190010, 'type': 5, 'value': 1, 'event': 20817 }, { 'id': 110190011, 'type': 5, 'value': 1.5, 'event': 20817 },
	{ 'id': 110190012, 'type': 5, 'value': 0.25, 'event': 20820 }, { 'id': 110190013, 'type': 5, 'value': 0.5, 'event': 20820 },
	{ 'id': 110190014, 'type': 5, 'value': 1, 'event': 20820 }, { 'id': 110190015, 'type': 5, 'value': 1.5, 'event': 20820 },
	{ 'id': 110200001, 'type': 6, 'value': 0.25, 'event': 20826 }, { 'id': 110200002, 'type': 6, 'value': 0.5, 'event': 20826 },
	{ 'id': 110200003, 'type': 6, 'value': 0.25, 'event': 20818 }, { 'id': 110200004, 'type': 6, 'value': 0.5, 'event': 20818 },
	{ 'id': 110200005, 'type': 6, 'value': 0.75, 'event': 20818 }, { 'id': 110200006, 'type': 6, 'value': 0.25, 'event': 20817 },
	{ 'id': 110200007, 'type': 6, 'value': 0.5, 'event': 20817 }, { 'id': 110200008, 'type': 6, 'value': 0.75, 'event': 20817 },
	{ 'id': 110200009, 'type': 6, 'value': 0.25, 'event': 20820 }, { 'id': 110200010, 'type': 6, 'value': 0.5, 'event': 20820 },
	{ 'id': 110200011, 'type': 6, 'value': 0.75, 'event': 20820 }
]

function GetQuestDrops(QuestID, EventList, PartyData) {
	let CoinCount = 0;
	let ManaCount = 0;
	let WyrmiteCount = 10;
	let DropTable = [];
	let CoinBonusCount = 0;
	let EventPoint = 0;
	let BoostEventPoint = 0;
	let PlayerXPFactor = 0.0;
	let CharacterXPFactor = 0.0;
	let CoinUpFactor = 0.0;
	let ManaUpFactor = 0.0;
	let EventPointFactor = 0.0;
	let EventMaterialFactor = 0.0;
	const QuestInfoMap = JSON.parse(fs.readFileSync('./Library/IDMaps/Quest/' + String(QuestID) + ".json"));
	
	const RightNow = Math.floor(Date.now() / 1000);
	const DropMultiplier = GetMultiplier(QuestID);
	const Factor = parseFloat((DropMultiplier - 1).toFixed(1));
	
	const QuestBase = parseInt(String(QuestID).slice(0, 3));
	const EventID = parseInt(String(QuestID).slice(0, 5));
	for (const p in PartyData) {
		let UnitAbilityList = [];
		const CurrentCharacter = PartyData[p]['chara_data']['chara_id'];
		const CurrentDragon = PartyData[p]['dragon_data']['dragon_id'];
		const PrintList1 = PartyData[p]['crest_slot_type_1_crest_list'];
		const PrintList2 = PartyData[p]['crest_slot_type_2_crest_list'];
		
		if (CurrentCharacter == undefined || CurrentCharacter == 0) { continue; }
		
		UnitAbilityList.push(CharacterMap.GetCharacterInfo(CurrentCharacter, "ability_1")[String(PartyData[p]['chara_data']['ability_1_level'])]);
		UnitAbilityList.push(CharacterMap.GetCharacterInfo(CurrentCharacter, "ability_2")[String(PartyData[p]['chara_data']['ability_2_level'])]);
		UnitAbilityList.push(CharacterMap.GetCharacterInfo(CurrentCharacter, "ability_3")[String(PartyData[p]['chara_data']['ability_3_level'])]);
		if (CurrentDragon != undefined) {
			UnitAbilityList.push(DragonMap.GetDragonInfo(CurrentDragon, "ability_1")[String(PartyData[p]['dragon_data']['ability_1_level'])]);
			UnitAbilityList.push(DragonMap.GetDragonInfo(CurrentDragon, "ability_2")[String(PartyData[p]['dragon_data']['ability_2_level'])]);
		}
		
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList1[0]['ability_crest_id'], "ability_1")[String(PrintList1[0]['ability_1_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList1[1]['ability_crest_id'], "ability_1")[String(PrintList1[1]['ability_1_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList1[2]['ability_crest_id'], "ability_1")[String(PrintList1[2]['ability_1_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList2[0]['ability_crest_id'], "ability_1")[String(PrintList2[0]['ability_1_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList2[1]['ability_crest_id'], "ability_1")[String(PrintList2[1]['ability_1_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList1[0]['ability_crest_id'], "ability_2")[String(PrintList1[0]['ability_2_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList1[1]['ability_crest_id'], "ability_2")[String(PrintList1[1]['ability_2_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList1[2]['ability_crest_id'], "ability_2")[String(PrintList1[2]['ability_2_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList2[0]['ability_crest_id'], "ability_2")[String(PrintList2[0]['ability_2_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList2[1]['ability_crest_id'], "ability_2")[String(PrintList2[1]['ability_2_level'])]);
		
		for (const a in UnitAbilityList) {
			const FactorData = FactorAbilities.find(x => x.id == UnitAbilityList[a]);
			if (FactorData != undefined) {
				switch(FactorData['type']) {
					case 1: PlayerXPFactor = PlayerXPFactor + FactorData['value']; break;
					case 2: CharacterXPFactor = CharacterXPFactor + FactorData['value']; break;
					case 3: CoinUpFactor = CoinUpFactor + FactorData['value']; break;
					case 4: ManaUpFactor = ManaUpFactor + FactorData['value']; break;
					case 5:
						if (FactorData['event'] == EventID) { EventPointFactor = EventPointFactor + FactorData['value']; }
						break;
					case 6:
						if (FactorData['event'] == EventID) { EventMaterialFactor = EventMaterialFactor + FactorData['value']; }
						break;
					case 7:
						if (FactorData['event'] == EventID) { EventPointFactor = EventPointFactor + FactorData['value']; }
						break;
				}
			}
		}
	}
		
	if (QuestID >= 210010101 && QuestID <= 210051104) { CoinBonusCount += 150000; }
	if (QuestID >= 219010101 && QuestID <= 219051103) { CoinBonusCount += 150000; }
	if (QuestID >= 228010101 && QuestID <= 228051103) { CoinBonusCount += 150000; }
	if (QuestID >= 232010101 && QuestID <= 233051103) { CoinBonusCount += 150000; }
	CoinBonusCount += Math.floor(CoinBonusCount * CoinUpFactor);
	
	if (QuestInfoMap['ChestDropInfo'] != undefined) {
	for (let i in QuestInfoMap['ChestDropInfo']) {
		const DropData = QuestInfoMap['ChestDropInfo'][i];
		if (DropData['type'] == 4) { CoinCount += DropData['max']; }
		else if (DropData['type'] == 8 || DropData['type'] == 12 || DropData['type'] == 15 || DropData['type'] == 17 ||
				DropData['type'] == 20 || DropData['type'] == 22 || DropData['type'] == 25 || DropData['type'] == 34 || DropData['type'] == 39) {
			let Roll = Math.floor(Math.random() * 100) + 1;
			if (DropData['extra'] == true) {
				if (Roll >= 95) {
					const Difference = DropData['max'] - DropData['min'];
					const Amount = Math.floor(Math.random() * Difference + DropData['min']) * DropMultiplier;
					const ExistID = DropTable.findIndex(x => x.id == DropData['id']);
					if (ExistID != -1) { DropTable[ExistID]['quantity'] += Amount; }
					else { DropTable.push({'type': DropData['type'], 'id': DropData['id'], 'quantity': Amount, 'place': 0, 'factor': Factor}); } }
			}
			else if (DropData['special'] == true) {
				if (Roll >= 75) {
					const Difference = DropData['max'] - DropData['min'];
					const Amount = Math.floor(Math.random() * Difference + DropData['min']) * DropMultiplier;
					const ExistID = DropTable.findIndex(x => x.id == DropData['id']);
					if (ExistID != -1) { DropTable[ExistID]['quantity'] += Amount; }
					else { DropTable.push({'type': DropData['type'], 'id': DropData['id'], 'quantity': Amount, 'place': 0, 'factor': Factor}); } }
			}
			else if (DropData['promise'] == true || Roll >= 30) {
				const Difference = DropData['max'] - DropData['min'];
				const Amount = Math.floor(Math.random() * Difference + DropData['min']) * DropMultiplier;
				const ExistID = DropTable.findIndex(x => x.id == DropData['id']);
				if (ExistID != -1) { DropTable[ExistID]['quantity'] += Amount; }
				else { DropTable.push({'type': DropData['type'], 'id': DropData['id'], 'quantity': Amount, 'place': 0, 'factor': Factor}); }
			}
		}
		else if (DropData['type'] == 18) { ManaCount += DropData['max']; }
		//case 1: case 5: case 6: case 7: 
		//case 13: WyrmiteCount += DropData['max']; break;
		//case 15: break;
	}}
	
	if (QuestInfoMap['EnemyDropInfo'] != undefined) {
	for (let y in QuestInfoMap['EnemyDropInfo']) {
		const DropData = QuestInfoMap['EnemyDropInfo'][y];
		if (DropData['type'] == 4) { CoinCount += DropData['max']; }
		else if (DropData['type'] == 8 || DropData['type'] == 12 || DropData['type'] == 15 || DropData['type'] == 17 ||
				DropData['type'] == 20 || DropData['type'] == 22 || DropData['type'] == 25 || DropData['type'] == 34 || DropData['type'] == 39) {
			let Roll = Math.floor(Math.random() * 100) + 1;
			if (DropData['extra'] == true) {
				if (Roll >= 95) {
					const Difference = DropData['max'] - DropData['min'];
					const Amount = Math.floor(Math.random() * Difference + DropData['min']) * DropMultiplier;
					const ExistID = DropTable.findIndex(x => x.id == DropData['id']);
					if (ExistID != -1) { DropTable[ExistID]['quantity'] += Amount; }
					else { DropTable.push({'type': DropData['type'], 'id': DropData['id'], 'quantity': Amount, 'place': 0, 'factor': Factor}); } }
			}
			else if (DropData['special'] == true) {
				if (Roll >= 75) {
					const Difference = DropData['max'] - DropData['min'];
					const Amount = Math.floor(Math.random() * Difference + DropData['min']) * DropMultiplier;
					const ExistID = DropTable.findIndex(x => x.id == DropData['id']);
					if (ExistID != -1) { DropTable[ExistID]['quantity'] += Amount; }
					else { DropTable.push({'type': DropData['type'], 'id': DropData['id'], 'quantity': Amount, 'place': 0, 'factor': Factor}); } }
			}
			else if (DropData['promise'] == true || Roll >= 30) {
				const Difference = DropData['max'] - DropData['min'];
				const Amount = Math.floor(Math.random() * Difference + DropData['min']) * DropMultiplier;
				const ExistID = DropTable.findIndex(x => x.id == DropData['id']);
				if (ExistID != -1) { DropTable[ExistID]['quantity'] += Amount; }
				else { DropTable.push({'type': DropData['type'], 'id': DropData['id'], 'quantity': Amount, 'place': 0, 'factor': Factor}); }
			}
		}
		else if (DropData['type'] == 18) { ManaCount += DropData['max']; }
		// case 1: case 5: case 6: case 7: 
		//case 13: WyrmiteCount += DropData['max']; break;
		//case 15: break;
	}}
	
	//DropTable.push({ "type": 23, "id": 0, "quantity": WyrmiteCount, "place": 0, "factor": 0	});
	if (QuestBase == 208) {
		const EventMaterialIndex = DropTable.findIndex(x => x.id == EventMap.EventInfoMap[EventID]["build_event_material"]);
		const EventPointIndex = DropTable.findIndex(x => x.id == EventMap.EventInfoMap[EventID]["build_event_items"][0]["event_item_id"]);
		if (EventMaterialIndex != -1) {
			DropTable[EventMaterialIndex]['quantity'] += Math.floor(DropTable[EventMaterialIndex]['quantity'] * EventMaterialFactor);
		}
		if (EventPointIndex != -1) {
			EventPoint = DropTable[EventPointIndex]['quantity'];
			if (EventPointFactor != 0.0) {
				BoostEventPoint = Math.floor(DropTable[EventPointIndex]['quantity'] * EventPointFactor);
			}
			DropTable.splice(EventPointIndex, 1);
		}
	}
	else if (QuestBase == 214) {
		const EventPointIndex = DropTable.findIndex(x => x.id == EventMap.EventInfoMap[EventID]["clb01_event_items"][2]["event_item_id"]);
		if (EventPointIndex != -1) {
			EventPoint = DropTable[EventPointIndex]['quantity'];
			if (EventPointFactor != 0.0) {
				BoostEventPoint = Math.floor(DropTable[EventPointIndex]['quantity'] * EventPointFactor);
			}
			DropTable.splice(EventPointIndex, 1);
		}
	}
	else if (QuestBase == 222) {
		const EventPointIndex = DropTable.findIndex(x => x.id == String(EventID) + "02");
		if (EventPointIndex != -1) {
			EventPoint = DropTable[EventPointIndex]['quantity'];
			DropTable.splice(EventPointIndex, 1);
		}
	}
	
	CoinCount += Math.floor(CoinCount * CoinUpFactor);
	ManaCount += Math.floor(ManaCount * ManaUpFactor);
	
	let AstralRaid = false;
	for (let a in EventList['astralraid']) { if (EventList['astralraid'][a]['start'] < RightNow && EventList['astralraid'][a]['end'] > RightNow) {AstralRaid = true;} }
	if (AstralRaid == false) {const Amount = Math.floor(Math.random() * 3 + 3); DropTable.push({'type':26,'id':10101,'quantity':Amount,'place':0,'factor':0})}
	return [DropTable, CoinCount, ManaCount,
			WyrmiteCount, CoinBonusCount, EventPoint, BoostEventPoint, PlayerXPFactor, CharacterXPFactor];
}
function GetQuestDropsSkip(QuestID, PlayCount, EventList, PartyData) {
	let CoinCount = 0;
	let ManaCount = 0;
	let WyrmiteCount = 10 * PlayCount;
	let DropTable = [];
	let CoinBonusCount = 0;
	let EventPoint = 0;
	let BoostEventPoint = 0;
	let PlayerXPFactor = 0.0;
	let CharacterXPFactor = 0.0;
	let CoinUpFactor = 0.0;
	let ManaUpFactor = 0.0;
	let EventPointFactor = 0.0;
	let EventMaterialFactor = 0.0;
	const QuestInfoMap = JSON.parse(fs.readFileSync('./Library/IDMaps/Quest/' + String(QuestID) + ".json"));
	
	const QuestBase = parseInt(String(QuestID).slice(0, 3));
	const EventID = parseInt(String(QuestID).slice(0, 5));
	for (const p in PartyData) {
		let UnitAbilityList = [];
		const CurrentCharacter = PartyData[p]['chara_data']['chara_id'];
		const CurrentDragon = PartyData[p]['dragon_data']['dragon_id'];
		const PrintList1 = PartyData[p]['crest_slot_type_1_crest_list'];
		const PrintList2 = PartyData[p]['crest_slot_type_2_crest_list'];
		
		if (CurrentCharacter == undefined || CurrentCharacter == 0) { continue; }
		
		UnitAbilityList.push(CharacterMap.GetCharacterInfo(CurrentCharacter, "ability_1")[String(PartyData[p]['chara_data']['ability_1_level'])]);
		UnitAbilityList.push(CharacterMap.GetCharacterInfo(CurrentCharacter, "ability_2")[String(PartyData[p]['chara_data']['ability_2_level'])]);
		UnitAbilityList.push(CharacterMap.GetCharacterInfo(CurrentCharacter, "ability_3")[String(PartyData[p]['chara_data']['ability_3_level'])]);
		if (CurrentDragon != undefined && CurrentDragon != 0) {
			UnitAbilityList.push(DragonMap.GetDragonInfo(CurrentDragon, "ability_1")[String(PartyData[p]['dragon_data']['ability_1_level'])]);
			UnitAbilityList.push(DragonMap.GetDragonInfo(CurrentDragon, "ability_2")[String(PartyData[p]['dragon_data']['ability_2_level'])]);
		}
		
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList1[0]['ability_crest_id'], "ability_1")[String(PrintList1[0]['ability_1_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList1[1]['ability_crest_id'], "ability_1")[String(PrintList1[1]['ability_1_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList1[2]['ability_crest_id'], "ability_1")[String(PrintList1[2]['ability_1_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList2[0]['ability_crest_id'], "ability_1")[String(PrintList2[0]['ability_1_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList2[1]['ability_crest_id'], "ability_1")[String(PrintList2[1]['ability_1_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList1[0]['ability_crest_id'], "ability_2")[String(PrintList1[0]['ability_2_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList1[1]['ability_crest_id'], "ability_2")[String(PrintList1[1]['ability_2_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList1[2]['ability_crest_id'], "ability_2")[String(PrintList1[2]['ability_2_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList2[0]['ability_crest_id'], "ability_2")[String(PrintList2[0]['ability_2_level'])]);
		UnitAbilityList.push(WyrmprintMap.GetWyrmprintInfo(PrintList2[1]['ability_crest_id'], "ability_2")[String(PrintList2[1]['ability_2_level'])]);
		
		for (const a in UnitAbilityList) {
			const FactorData = FactorAbilities.find(x => x.id == UnitAbilityList[a]);
			if (FactorData != undefined) {
				switch(FactorData['type']) {
					case 1: PlayerXPFactor = PlayerXPFactor + FactorData['value']; break;
					case 2: CharacterXPFactor = CharacterXPFactor + FactorData['value']; break;
					case 3: CoinUpFactor = CoinUpFactor + FactorData['value']; break;
					case 4: ManaUpFactor = ManaUpFactor + FactorData['value']; break;
					case 5:
						if (FactorData['event'] == EventID) { EventPointFactor = EventPointFactor + FactorData['value']; }
						break;
					case 6:
						if (FactorData['event'] == EventID) { EventMaterialFactor = EventMaterialFactor + FactorData['value']; }
						break;
					case 7:
						if (FactorData['event'] == EventID) { EventPointFactor = EventPointFactor + FactorData['value']; }
						break;
				}
			}
		}
	}
		
	if (QuestID >= 210010101 && QuestID <= 210051104) { CoinBonusCount += 250000; }
	if (QuestID >= 219010101 && QuestID <= 219051103) { CoinBonusCount += 250000; }
	if (QuestID >= 228010101 && QuestID <= 228051103) { CoinBonusCount += 250000; }
	if (QuestID >= 232010101 && QuestID <= 233051103) { CoinBonusCount += 250000; }
	CoinBonusCount += Math.floor(CoinBonusCount * CoinUpFactor);
	
	const RightNow = Math.floor(Date.now() / 1000);
	const DropMultiplier = GetMultiplier(QuestID);
	const Factor = parseFloat((DropMultiplier - 1).toFixed(1));
	
	let w = 0; while (w < PlayCount) {
		if (QuestInfoMap['ChestDropInfo'] != undefined) {
		for (let i in QuestInfoMap['ChestDropInfo']) {
			const DropData = QuestInfoMap['ChestDropInfo'][i];
			if (DropData['type'] == 4) { CoinCount += DropData['max']; }
			else if (DropData['type'] == 8 || DropData['type'] == 12 || DropData['type'] == 15 || DropData['type'] == 17 ||
				DropData['type'] == 20 || DropData['type'] == 22 || DropData['type'] == 25 || DropData['type'] == 34 || DropData['type'] == 39) {
				let Roll = Math.floor(Math.random() * 100) + 1;
				if (DropData['extra'] == true) {
					if (Roll >= 95) {
						const Difference = DropData['max'] - DropData['min'];
						const Amount = Math.floor(Math.random() * Difference + DropData['min']) * DropMultiplier;
						const ExistID = DropTable.findIndex(x => x.id == DropData['id']);
						if (ExistID != -1) { DropTable[ExistID]['quantity'] += Amount; }
						else { DropTable.push({'type': DropData['type'], 'id': DropData['id'], 'quantity': Amount, 'place': 0, 'factor': Factor}); } }
				}
				else if (DropData['special'] == true) {
					if (Roll >= 75) {
						const Difference = DropData['max'] - DropData['min'];
						const Amount = Math.floor(Math.random() * Difference + DropData['min']) * DropMultiplier;
						const ExistID = DropTable.findIndex(x => x.id == DropData['id']);
						if (ExistID != -1) { DropTable[ExistID]['quantity'] += Amount; }
						else { DropTable.push({'type': DropData['type'], 'id': DropData['id'], 'quantity': Amount, 'place': 0, 'factor': Factor}); } }
				}
				else if (DropData['promise'] == true || Roll >= 30) {
					const Difference = DropData['max'] - DropData['min'];
					const Amount = Math.floor(Math.random() * Difference + DropData['min']) * DropMultiplier;
					const ExistID = DropTable.findIndex(x => x.id == DropData['id']);
					if (ExistID != -1) { DropTable[ExistID]['quantity'] += Amount; }
					else { DropTable.push({'type': DropData['type'], 'id': DropData['id'], 'quantity': Amount, 'place': 0, 'factor': Factor}); }
				}
			}
			else if (DropData['type'] == 18) { ManaCount += DropData['max']; }
		}}
		if (QuestInfoMap['EnemyDropInfo'] != undefined) {
		for (let y in QuestInfoMap['EnemyDropInfo']) {
			const DropData = QuestInfoMap['EnemyDropInfo'][y];
			if (DropData['type'] == 4) { CoinCount += DropData['max']; }
			else if (DropData['type'] == 8 || DropData['type'] == 12 || DropData['type'] == 15 || DropData['type'] == 17 ||
				DropData['type'] == 20 || DropData['type'] == 22 || DropData['type'] == 25 || DropData['type'] == 34 || DropData['type'] == 39) {
				let Roll = Math.floor(Math.random() * 100) + 1;
				if (DropData['extra'] == true) {
					if (Roll >= 95) {
						const Difference = DropData['max'] - DropData['min'];
						const Amount = Math.floor(Math.random() * Difference + DropData['min']) * DropMultiplier;
						const ExistID = DropTable.findIndex(x => x.id == DropData['id']);
						if (ExistID != -1) { DropTable[ExistID]['quantity'] += Amount; }
						else { DropTable.push({'type': DropData['type'], 'id': DropData['id'], 'quantity': Amount, 'place': 0, 'factor': Factor}); } }
				}
				else if (DropData['special'] == true) {
					if (Roll >= 75) {
						const Difference = DropData['max'] - DropData['min'];
						const Amount = Math.floor(Math.random() * Difference + DropData['min']) * DropMultiplier;
						const ExistID = DropTable.findIndex(x => x.id == DropData['id']);
						if (ExistID != -1) { DropTable[ExistID]['quantity'] += Amount; }
						else { DropTable.push({'type': DropData['type'], 'id': DropData['id'], 'quantity': Amount, 'place': 0, 'factor': Factor}); } }
				}
				else if (DropData['promise'] == true || Roll >= 30) {
					const Difference = DropData['max'] - DropData['min'];
					const Amount = Math.floor(Math.random() * Difference + DropData['min']) * DropMultiplier;
					const ExistID = DropTable.findIndex(x => x.id == DropData['id']);
					if (ExistID != -1) { DropTable[ExistID]['quantity'] += Amount; }
					else { DropTable.push({'type': DropData['type'], 'id': DropData['id'], 'quantity': Amount, 'place': 0, 'factor': Factor}); }
				}
			}
			else if (DropData['type'] == 18) { ManaCount += DropData['max']; }
		}}
		w++;
	}
	let z = 0; while(z < DropTable.length) { if (DropTable[z]['quantity'] > 999000) { DropTable[z]['quantity'] = 999000; } z++; }
	DropTable.push({ "type": 23, "id": 0, "quantity": WyrmiteCount, "place": 0, "factor": 0	});
	
	if (QuestBase == 208) {
		const EventMaterialIndex = DropTable.findIndex(x => x.id == EventMap.EventInfoMap[EventID]["build_event_material"]);
		const EventPointIndex = DropTable.findIndex(x => x.id == EventMap.EventInfoMap[EventID]["build_event_items"][0]["event_item_id"]);
		if (EventMaterialIndex != -1) {
			DropTable[EventMaterialIndex]['quantity'] += Math.floor(DropTable[EventMaterialIndex]['quantity'] * EventMaterialFactor);
		}
		if (EventPointIndex != -1) {
			EventPoint = DropTable[EventPointIndex]['quantity'];
			if (EventPointFactor != 0.0) {
				BoostEventPoint = Math.floor(DropTable[EventPointIndex]['quantity'] * EventPointFactor);
			}
			DropTable.splice(EventPointIndex, 1);
		}
	}
	else if (QuestBase == 214) {
		const EventPointIndex = DropTable.findIndex(x => x.id == EventMap.EventInfoMap[EventID]["clb01_event_items"][2]["event_item_id"]);
		if (EventPointIndex != -1) {
			EventPoint = DropTable[EventPointIndex]['quantity'];
			if (EventPointFactor != 0.0) {
				BoostEventPoint = Math.floor(DropTable[EventPointIndex]['quantity'] * EventPointFactor);
			}
			DropTable.splice(EventPointIndex, 1);
		}
	}
	else if (QuestBase == 222) {
		const EventPointIndex = DropTable.findIndex(x => x.id == String(EventID) + "02");
		if (EventPointIndex != -1) {
			EventPoint = DropTable[EventPointIndex]['quantity'];
			DropTable.splice(EventPointIndex, 1);
		}
	}
	
	CoinCount += Math.floor(CoinCount * CoinUpFactor);
	ManaCount += Math.floor(ManaCount * ManaUpFactor);
	
	let AstralRaid = false;
	for (let a in EventList['astralraid']) { if (EventList['astralraid'][a]['start'] < RightNow && EventList['astralraid'][a]['end'] > RightNow) {AstralRaid = true;} }
	if (AstralRaid == false) {const Amount = Math.floor(Math.random() * 3 + 3); DropTable.push({'type':26,'id':10101,'quantity':Amount,'place':0,'factor':0})}
	return [DropTable, CoinCount, ManaCount,
			WyrmiteCount, CoinBonusCount, EventPoint, BoostEventPoint, PlayerXPFactor, CharacterXPFactor];
}

function GenerateOddsList(QuestID, UserSessionRecord, Step) {
	var QuestInfoMap = JSON.parse(fs.readFileSync('./Library/IDMaps/Quest/' + String(QuestID) + ".json"));
	const VariationID = String(QuestInfoMap['variation']);
	let EnemyList = [];
	if (QuestEnemyList[QuestInfoMap['area_info'][Step]['scene_path']] == undefined) { EnemyList = []; }
	else { EnemyList = QuestEnemyList[QuestInfoMap['area_info'][Step]['scene_path']][QuestInfoMap['area_info'][Step]['area_name']][VariationID]; }
	if (QuestID == 204270302) { for (let x in EnemyList) { EnemyList[x]['is_rare'] = 1; } }
	
	let AreaOddsTemplate = {
		'area_index': Step,
		'reaction_obj_count': 0,
		'drop_obj': [],
		'enemy': EnemyList,
		'grade': []
	}
	if (EnemyList.length == 0) { AreaOddsTemplate['enemy'] = []; }
	else if (QuestInfoMap['area_info'].length == 1) {
		if (String(QuestID).slice(0,3) == "204") {
			for (let x in EnemyList) {
				let Divider = 2; if (x > 0) {Divider = (EnemyList.length - 1) * 2;}
				if (EnemyList.length == 1) { Divider = 1; }
				for (let y in UserSessionRecord['DungeonRecord']['DropTable'][0]) {
					const DividedDrop = {
						"type": UserSessionRecord['DungeonRecord']['DropTable'][0][y]['type'],
						"id": UserSessionRecord['DungeonRecord']['DropTable'][0][y]['id'],
						"quantity": Math.round(UserSessionRecord['DungeonRecord']['DropTable'][0][y]['quantity'] / Divider),
						"place": UserSessionRecord['DungeonRecord']['DropTable'][0][y]['place'],
						"factor": UserSessionRecord['DungeonRecord']['DropTable'][0][y]['factor']
					}
					AreaOddsTemplate['enemy'][x]['enemy_drop_list'][0]['drop_list'].push(DividedDrop);
				}
				AreaOddsTemplate['enemy'][x]['enemy_drop_list'][0]['coin'] = Math.round(UserSessionRecord['DungeonRecord']['DropTable'][1] / Divider);
				AreaOddsTemplate['enemy'][x]['enemy_drop_list'][0]['mana'] = Math.round(UserSessionRecord['DungeonRecord']['DropTable'][2] / Divider);
			}
		}
		else {
			AreaOddsTemplate['enemy'][0]['enemy_drop_list'][0]['drop_list'] = UserSessionRecord['DungeonRecord']['DropTable'][0];
			AreaOddsTemplate['enemy'][0]['enemy_drop_list'][0]['coin'] = UserSessionRecord['DungeonRecord']['DropTable'][1];
			AreaOddsTemplate['enemy'][0]['enemy_drop_list'][0]['mana'] = UserSessionRecord['DungeonRecord']['DropTable'][2];
		}
	}
	else {
		for (let x in EnemyList) {
			let Divider = EnemyList.length * QuestInfoMap['area_info'].length;
			for (let y in UserSessionRecord['DungeonRecord']['DropTable'][0]) {
				const DividedDrop = {
					"type": UserSessionRecord['DungeonRecord']['DropTable'][0][y]['type'],
					"id": UserSessionRecord['DungeonRecord']['DropTable'][0][y]['id'],
					"quantity": Math.round(UserSessionRecord['DungeonRecord']['DropTable'][0][y]['quantity'] / Divider),
					"place": UserSessionRecord['DungeonRecord']['DropTable'][0][y]['place'],
					"factor": UserSessionRecord['DungeonRecord']['DropTable'][0][y]['factor']
				}
				AreaOddsTemplate['enemy'][x]['enemy_drop_list'][0]['drop_list'].push(DividedDrop);
			}
			AreaOddsTemplate['enemy'][x]['enemy_drop_list'][0]['coin'] = Math.round(UserSessionRecord['DungeonRecord']['DropTable'][1] / Divider);
			AreaOddsTemplate['enemy'][x]['enemy_drop_list'][0]['mana'] = Math.round(UserSessionRecord['DungeonRecord']['DropTable'][2] / Divider);
		}
	}
	return AreaOddsTemplate;
}

function FormatWallDrops(RewardList) {
	let i = 0;
	let y = 0;
	let DropTable = [];
	
	while (i < RewardList['drop_obj'].length) {
		if (RewardList['drop_obj'][i]['drop_list'][0] != undefined) {
			const DropData = RewardList['drop_obj'][i]['drop_list'][0];
			switch(DropData['entity_type']) {
				// case 1: case 5: case 6: case 7: 
				case 8: 
					if (DropTable[DropTable.findIndex(x => x.id == DropData['entity_id'])] != undefined) { DropTable[DropTable.findIndex(x => x.id == DropData['entity_id'])]['entity_quantity'] += DropData['entity_quantity']; }
					else { DropTable.push(DropData); } break;
				case 15: 
					if (DropTable[DropTable.findIndex(x => x.id == DropData['entity_id'])] != undefined) { DropTable[DropTable.findIndex(x => x.id == DropData['entity_id'])]['entity_quantity'] += DropData['entity_quantity']; }
					else { DropTable.push(DropData); } break;
			}
		}
		i++;
	}
	while (y < RewardList['enemy'].length) {
		let v = 0;
		if (RewardList['enemy'][y]['enemy_drop_list'][0] != undefined) {
			if (RewardList['enemy'][y]['enemy_drop_list'][0]['drop_list'][0] != undefined) { 
				while (v < RewardList['enemy'][y]['enemy_drop_list'][0]['drop_list'].length) {
					const DropData = RewardList['enemy'][y]['enemy_drop_list'][0]['drop_list'][v];
					switch(DropData['entity_type']) {
						// case 1: case 5: case 6: case 7: 
						case 8: 
							if (DropTable[DropTable.findIndex(x => x.id == DropData['entity_id'])] != undefined) { DropTable[DropTable.findIndex(x => x.id == DropData['entity_id'])]['entity_quantity'] += DropData['entity_quantity']; }
							else { DropTable.push(DropData); } break;
						case 15:
							if (DropTable[DropTable.findIndex(x => x.id == DropData['entity_id'])] != undefined) { DropTable[DropTable.findIndex(x => x.id == DropData['entity_id'])]['entity_quantity'] += DropData['entity_quantity']; }
							else { DropTable.push(DropData); } break;
					}
					v++;
				}
			}
		}
		y++;
	}
	return DropTable;
}

function CheckMissionClear(PlayData, QuestID) {
	
}

function HasRewardCharacter(StoryID) {
	const HasRewardList = [ 1000103, 1000106, 1000111, 1000202,
							1000808, 1001108, 1001410, 1001610,
							
							1000311 ];
	if (HasRewardList.includes(StoryID)) { return true; }
	return false;
}

function RewardCharacter(StoryID) {
	let EntityList = {};
	switch(StoryID) {
		case 1000103:
			EntityList = {'entity_type': 1, 'entity_id': 10540201};
			break;
		case 1000106:
			EntityList = {'entity_type': 1, 'entity_id': 10440301};
			break;
		case 1000111:
			EntityList = {'entity_type': 1, 'entity_id': 10840501};
			break;
		case 1000202:
			EntityList = {'entity_type': 1, 'entity_id': 10640401};
			break;
		case 1000808:
			EntityList = {'entity_type': 1, 'entity_id': 10340502};
			break;
		case 1001108:
			EntityList = {'entity_type': 1, 'entity_id': 10240101};
			break;
		case 1001410:
			EntityList = {'entity_type': 1, 'entity_id': 10750504};
			break;
		case 1001610:
			EntityList = {'entity_type': 1, 'entity_id': 10650503};
			break;
		case 1000311:
			EntityList = {'entity_type': 1, 'entity_id': 10550101};
			break;
	}
	return EntityList;
}

function HasRewardDragon(StoryID) {
	const HasRewardList = [ 1000109, 1000210, 1000311, 1000412, 1000509 ]
	if (HasRewardList.includes(StoryID)) { return true; }
	return false;
}

function RewardDragon(StoryID) {
	let EntityList = {};
	switch(StoryID) {
		case 1000109:
			EntityList = {'entity_type': 7, 'entity_id': 20040301};
			break;
		case 1000210:
			EntityList = {'entity_type': 7, 'entity_id': 20040201};
			break;
		case 1000311:
			EntityList = {'entity_type': 7, 'entity_id': 20040101};
			break;
		case 1000412:
			EntityList = {'entity_type': 7, 'entity_id': 20040401};
			break;
		case 1000509:
			EntityList = {'entity_type': 7, 'entity_id': 20040501};
			break;
	}
	return EntityList;
}

function HasRewardFacility(StoryID) {
	const HasRewardList = [ 1000607, 1000709, 1000808, 1000909, 1001009 ];
	if (HasRewardList.includes(StoryID)) { return true; }
	return false;
}

function RewardFacility(StoryID) {
	let EntityList = [];
	switch(StoryID) {
		case 1000607:
			EntityList = [ 100501, 100502, 100503, 100504, 100505,
						   100506, 100507, 100508, 100509, 100501,
						   100502, 100503, 100504, 100505, 100506,
						   100507, 100508, 100509, 100603 ];
			break;
		case 1000709:
			EntityList = [ 100602 ];
			break;
		case 1000808:
			EntityList = [ 100601 ];
			break;
		case 1000909:
			EntityList = [ 100604 ];
			break;
		case 1001009:
			EntityList = [ 100605 ];
			break;
	}
	return EntityList;
}

function RewardChest(TreasureID) {
	let RewardTable = [];
	switch(TreasureID) {
		case 102101:
			RewardTable = [
				{ 'entity_type': 18, 'entity_id': 0, 'entity_quantity': 2000}
			]
			break;
		case 102102:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2}
			]
			break;
		case 102201:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2}
			]
			break;
		case 102202:
			RewardTable = [
				{ 'entity_type': 4, 'entity_id': 0, 'entity_quantity': 20000}
			]
			break;
		case 102301:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2}
			]
			break;
		case 102302:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 201011001, 'entity_quantity': 1}
			]
			break;
		case 104101:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 101001003, 'entity_quantity': 10},
			]
			break;
		case 104102:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 113001003, 'entity_quantity': 10}
			]
			break;
		case 104201:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2}
			]
			break;
		case 104202:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2}
			]
			break;
		case 104301:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 116001001, 'entity_quantity': 10}
			]
			break;
		case 104302:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 117001001, 'entity_quantity': 10}
			]
			break;
		case 106101:
			RewardTable = [
				{ 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300}
			]
			break;
		case 106201:
			RewardTable = [
				{ 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300}
			]
			break;
		case 106301:
			RewardTable = [
				{ 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300}
			]
			break;
		case 107101:
			RewardTable = [
				{ 'entity_type': 4, 'entity_id': 0, 'entity_quantity': 100000}
			]
			break;
		case 107102:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2}
			]
			break;
		case 107201:
			RewardTable = [
				{ 'entity_type': 4, 'entity_id': 0, 'entity_quantity': 150000}
			]
			break;
		case 107202:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2}
			]
			break;
		case 107301:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 116001001, 'entity_quantity': 10}
			]
			break;
		case 107302:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 117001001, 'entity_quantity': 10}
			]
			break;
		case 108101:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2}
			]
			break;
		case 108102:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2}
			]
			break;
		case 108201:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2}
			]
			break;
		case 108202:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2}
			]
			break;
		case 108301:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2}
			]
			break;
		case 108302:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2}
			]
			break;
		case 109101:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2}
			]
			break;
		case 109201:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2}
			]
			break;
		case 109301:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2}
			]
			break;
		case 110101:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 117001001, 'entity_quantity': 10}
			]
			break;
		case 110201:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 116001001, 'entity_quantity': 10}
			]
			break;
		case 110301:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 117001001, 'entity_quantity': 10}
			]
			break;
		case 111101:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 122001001, 'entity_quantity': 10}
			]
			break;
		case 111201:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 123001001, 'entity_quantity': 10}
			]
			break;
		case 111301:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 122001001, 'entity_quantity': 10}
			]
			break;
		case 112101:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 116001001, 'entity_quantity': 10}
			]
			break;
		case 112201:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 117001001, 'entity_quantity': 10}
			]
			break;
		case 112301:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 116001001, 'entity_quantity': 10}
			]
			break;
		case 113101:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 123001001, 'entity_quantity': 10}
			]
			break;
		case 113201:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 122001001, 'entity_quantity': 10}
			]
			break;
		case 113301:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 123001001, 'entity_quantity': 10}
			]
			break;
		case 114101:
			RewardTable = [
				{ 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300}
			]
			break;
		case 114201:
			RewardTable = [
				{ 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300}
			]
			break;
		case 114301:
			RewardTable = [
				{ 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300}
			]
			break;
		case 115101:
			RewardTable = [
				{ 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300}
			]
			break;
		case 115201:
			RewardTable = [
				{ 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300}
			]
			break;
		case 115301:
			RewardTable = [
				{ 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300}
			]
			break;
		case 116101:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 201011001, 'entity_quantity': 5}
			]
			break;
		case 116201:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 201011001, 'entity_quantity': 5}
			]
			break;
		case 116301:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 201011001, 'entity_quantity': 10}
			]
			break;
		case 117101:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 5}
			]
			break;
		case 117201:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 5}
			]
			break;
		case 117301:
			RewardTable = [
				{ 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 10}
			]
			break;
		case 118101:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 201019041, 'entity_quantity': 5}
			]
			break;
		case 118201:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 113001003, 'entity_quantity': 200}
			]
			break;
		case 118301:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 103001003, 'entity_quantity': 200}
			]
			break;
		case 119101:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 202004005, 'entity_quantity': 50}
			]
			break;
		case 119201:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 202004005, 'entity_quantity': 50}
			]
			break;
		case 119301:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 202004005, 'entity_quantity': 50}
			]
			break;
		case 120101:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 116001001, 'entity_quantity': 10}
			]
			break;
		case 120201:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 118001001, 'entity_quantity': 10}
			]
			break;
		case 120301:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 122001001, 'entity_quantity': 10}
			]
			break;
		case 121101:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 117001001, 'entity_quantity': 10}
			]
			break;
		case 121201:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 119001001, 'entity_quantity': 10}
			]
			break;
		case 121301:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 123001001, 'entity_quantity': 10}
			]
			break;
		case 122101:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 111002001, 'entity_quantity': 1}
			]
			break;
		case 122201:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 111002001, 'entity_quantity': 1}
			]
			break;
		case 122301:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 111002001, 'entity_quantity': 1}
			]
			break;
		case 123101:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 104003002, 'entity_quantity': 1}
			]
			break;
		case 123201:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 104003002, 'entity_quantity': 1}
			]
			break;
		case 123301:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 104003002, 'entity_quantity': 1}
			]
			break;
		case 124101:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 104001001, 'entity_quantity': 50}
				
			]
			break;
		case 124201:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 104001001, 'entity_quantity': 50}
			]
			break;
		case 124301:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 104001001, 'entity_quantity': 50}
			]
			break;
		case 125101:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 201014004, 'entity_quantity': 100}
			]
			break;
		case 125201:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 201014002, 'entity_quantity': 10}
			]
			break;
		case 125301:
			RewardTable = [
				{ 'entity_type': 8, 'entity_id': 201014002, 'entity_quantity': 10}
			]
			break;
		case 126101:
			RewardTable = [
				{ 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 2000}
			]
			break;
		case 126201:
			RewardTable = [
				{ 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 3000}
			]
			break;
		case 126301:
			RewardTable = [
				{ 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 4000}
			]
			break;
	}
	return RewardTable;
}

function RewardEssence(QuestID) {
	
}

function GetFirstReward(QuestID) {
	const QuestInfoMap = JSON.parse(fs.readFileSync('./Library/IDMaps/Quest/' + String(QuestID) + ".json"));
	return QuestInfoMap['first_clear'];
}

function GetEXP(QuestID) {
	const QuestData = JSON.parse(fs.readFileSync('./Library/IDMaps/Quest/' + String(QuestID) + ".json"));
	const StaminaCost = QuestData['pay_stamina_single'];
	const MultiCost = QuestData['pay_stamina_multi'];
	let PlayerEXP = 0;
	if (StaminaCost != 0) {
		PlayerEXP = StaminaCost * 10;
	}
	else if (StaminaCost == 0 && MultiCost != 0) {
		PlayerEXP = MultiCost * 20;
	}
	else {
		PlayerEXP = 100;
	}
	return PlayerEXP;
}

function GetEarnPoint(QuestID, PlayData) {
	var QuestInfoMap = JSON.parse(fs.readFileSync('./Library/IDMaps/Quest/' + String(QuestID) + ".json"));
	const VariationID = String(QuestInfoMap['variation']);
	const EnemyList = QuestEnemyList[QuestInfoMap['area_info'][0]['scene_path']][QuestInfoMap['area_info'][0]['area_name']][VariationID];
	
	let ScoringList = [];
	let ScoreTotal = 0;
	for (let x in PlayData['treasure_record'][0]['enemy_smash']) {
		const EnemyID = EnemyList[x]['param_id'];
		const SmashCount = PlayData['treasure_record'][0]['enemy_smash'][x]['count'];
		const EnemyParamData = EnemyParam.find(x => x._Id == EnemyID);
		const EnemyDataData = EnemyData.find(x => x._Id == EnemyParamData['_DataId']);
		const EnemyScoreGroup = ScoreList.find(x => x._EnemyListId == EnemyDataData['_BookId']);
		let TotalPoints = EnemyScoreGroup['_Point'] * SmashCount;
		if (SmashCount == 0 || SmashCount == undefined) { TotalPoints = 0; }
		ScoreTotal = ScoreTotal + TotalPoints;
		const ScoreListExists = ScoringList.findIndex(x => x.scoring_enemy_id == EnemyScoreGroup['_Id']);
		if (ScoreListExists == -1) {
			ScoringList.push({
				'scoring_enemy_id': EnemyScoreGroup['_Id'],
				'smash_count': SmashCount,
				'point': TotalPoints
			});
		}
		else {
			if (SmashCount != 0) {
				ScoringList[ScoreListExists]['smash_count'] += SmashCount;
				ScoringList[ScoreListExists]['point'] += TotalPoints;
			}
		}
	}
	return [ScoreTotal, ScoringList];
}

/*
function QuestIDByName(QuestName) {
	let i = 0;
	var QuestInfoMap = JSON.parse(fs.fileReadSync('./Quest/' + String(QuestID) + ".json"));
	while (i < Object.keys(QuestInfoMap).length) {
		const QuestID = Object.keys(QuestInfoMap)[i];
		if (QuestInfoMap[QuestID]['name'] == QuestName) {
			return parseInt(Object.keys(QuestInfoMap)[i]);
		}
		else {
			i++;
		}
	}
	return 1;
}
*/

module.exports = { GetQuestInfo, IsQuestTypeMatchMulti, GetQuestDrops, GetQuestDropsSkip, FormatWallDrops, RewardChest, CheckMissionClear, HasRewardCharacter, RewardCharacter, HasRewardDragon, RewardDragon, HasRewardFacility, RewardFacility, GetFirstReward, GetEarnPoint, GenerateOddsList, GetEXP }