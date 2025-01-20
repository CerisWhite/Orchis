const fs = require('fs');
const EventData = JSON.parse(fs.readFileSync('../../Master/EventData.json'));
const QuestData = JSON.parse(fs.readFileSync('../../Master/QuestData.json'));
const BoxSummonData = JSON.parse(fs.readFileSync('../../Master/BoxSummonData.json'));
const BoxIDs = Object.keys(BoxSummonData);
let BoxList = {};
for (const x in BoxIDs) {
	BoxData = BoxSummonData[BoxIDs[x]];
	BoxList[String(BoxData['_EventId'])] = {};
	
	const Element = QuestData[String(BoxData['_EventId']) + "0401"]['_Elemental']
	let Advantage = 1;
	if (Element == 1) { Advantage = 2; }
	else if (Element == 2) { Advantage = 3; }
	else if (Element == 3) { Advantage = 1; }
	else if (Element == 4) { Advantage = 5; }
	else if (Element == 5) { Advantage = 4; }
	const Orb1 = parseInt("1040010" + String(Advantage) + "1");
	const Orb2 = parseInt("1040010" + String(Advantage) + "2");
	const Orb3 = parseInt("1040010" + String(Advantage) + "3");
	const Scale1 = parseInt("1040020" + String(Advantage) + "1");
	const Scale2 = parseInt("1040020" + String(Advantage) + "2");
	const Badge1 = parseInt("2010100" + String(Advantage) + "1");
	const Badge2 = parseInt("2010100" + String(Advantage) + "2");
	let i = 0; while (i < 5) {
		let AddList = [
			{'type': 23, 'id': 0, 'quantity': 25, 'limit': 1},
			{'type': 18, 'id': 0, 'quantity': 5000, 'limit': 5},
			{'type': 18, 'id': 0, 'quantity': 200, 'limit': 50 + (10 * i)},
			{'type': 4, 'id': 0, 'quantity': 10000, 'limit': 50 + (10 * i)},
			{'type': 8, 'id': Orb1, 'quantity': 1, 'limit': 20 + (10 * i)},
			{'type': 8, 'id': Orb2, 'quantity': 1, 'limit': 5 + (5 * i)},
			{'type': 8, 'id': Orb3, 'quantity': 1, 'limit': 2 + (2 * i)},
			{'type': 8, 'id': 104001001, 'quantity': 1, 'limit': 1 + (1 * i)},
			{'type': 8, 'id': Scale1, 'quantity': 1, 'limit': 5 + (5 * i)},
			{'type': 8, 'id': Scale2, 'quantity': 1, 'limit': 1 + (1 * i)},
			{'type': 8, 'id': Badge1, 'quantity': 1, 'limit': 20 + (10 * i)},
			{'type': 8, 'id': Badge2, 'quantity': 1, 'limit': 5 + (10 * i)},
			{'type': 8, 'id': 101001001, 'quantity': 1, 'limit': 15 + (10 * i)},
			{'type': 8, 'id': 101001002, 'quantity': 1, 'limit': 10 + (5 * i)},
			{'type': 8, 'id': 101001003, 'quantity': 1, 'limit': 13},
			{'type': 8, 'id': 102001001, 'quantity': 1, 'limit': 15 + (10 * i)},
			{'type': 8, 'id': 102001002, 'quantity': 1, 'limit': 10 + (5 * i)},
			{'type': 8, 'id': 102001003, 'quantity': 1, 'limit': 13},
			{'type': 8, 'id': 202001001, 'quantity': 1, 'limit': 50 + (10 * i)},
			{'type': 8, 'id': 202002001, 'quantity': 1, 'limit': 50 + (10 * i)},
			{'type': 8, 'id': 202003001, 'quantity': 1, 'limit': 50 + (10 * i)},
			{'type': 8, 'id': 202004001, 'quantity': 1, 'limit': 50 + (10 * i)},
			{'type': 8, 'id': 204005001, 'quantity': 1, 'limit': 50 + (10 * i)},
			{'type': 8, 'id': 204005002, 'quantity': 1, 'limit': 10 + (10 * i)},
			{'type': 8, 'id': 204014001, 'quantity': 1, 'limit': 10 + (10 * i)},
			{'type': 8, 'id': 204021001, 'quantity': 1, 'limit': 10 + (10 * i)},
			{'type': 8, 'id': 204023001, 'quantity': 1, 'limit': 10 + (10 * i)}
		]
		if (i < 4) {
			const SpecialType = BoxData['_ResetEntityType'];
			const SpecialID = BoxData['_ResetEntityId'];
			if (SpecialType == 8) {
				AddList.unshift({ 'type': 8, 'id': SpecialID, 'quantity': 5, 'limit': 1, 'target': true });
			}
			else {
				AddList.unshift({ 'type': SpecialType, 'id': SpecialID, 'quantity': 1, 'limit': 1, 'target': true });
			}
		}
		
		BoxList[String(BoxData['_EventId'])][String(i + 1)] = [];
		for (const z in AddList) {
			BoxList[String(BoxData['_EventId'])][String(i + 1)].push({
				'ID': parseInt(z) + 1,
				'Item': {
					'type': AddList[z]['type'],
					'id': AddList[z]['id'],
					'quantity': AddList[z]['quantity']
				},
				'Limit': AddList[z]['limit'],
				'Target': AddList[z]['target'] == true ? true : false
			});
		}
		i++;
	}
}
fs.writeFileSync('./BlazonData.json', JSON.stringify(BoxList, null, 2));