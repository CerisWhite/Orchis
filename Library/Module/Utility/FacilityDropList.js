const fs = require('fs');
const QuestData = JSON.parse(fs.readFileSync('../../Master/QuestData.json'));
const EventData = JSON.parse(fs.readFileSync('../../Master/EventData.json'));
let DropList = JSON.parse(fs.readFileSync('../../Event/QuestDropList.json'));
const List = Object.keys(DropList);
let EventTrack = 0;
let MDropTrack = 0;
const AdvantageElementList = [ "03", "01", "02", "05", "04" ];
for (const x in List) {
	if (List[x].slice(0,3) != "208") { continue; }
	const QuestDetails = QuestData[List[x]];
	const EventID = parseInt(List[x].slice(0, 5));
	const EventMaterial = EventData[String(EventID)]['_ViewEntityId1'];
		
	if (EventTrack != EventID) { MDropTrack += 1; }
	if (MDropTrack > 4) { MDropTrack = 1; }
	const MDrop = "20200" + MDropTrack + "00";
	
	const Category = parseInt(List[x].slice(6, 7));
	const Variant = parseInt(List[x].slice(8, 9));
	const UID = List[x].slice(5, 9);
	
	const AdvantageElement = AdvantageElementList[QuestDetails['_Elemental'] - 1];
	let OrbBase = "104001" + AdvantageElement;
	if (QuestDetails['_Elemental'] == 99) {
		OrbBase = "20100900";
	}
	let DropTemplate = []
	switch(UID) {
		case "0101":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 10, "max": 10, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "1"), "min": 2, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 2, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 100, "max": 100, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 100, "max": 100, "promise": true, "special": false }
			]
			break;
		case "0102":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 20, "max": 20, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "1"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 100, "max": 100, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 100, "max": 100, "promise": true, "special": false }
			]
			break;
		case "0103":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 50, "max": 50, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "1"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 100, "max": 100, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 100, "max": 100, "promise": true, "special": false }
			]
			break;
		case "0104":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 50, "max": 50, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "1"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 100, "max": 100, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 100, "max": 100, "promise": true, "special": false }
			]
			break;
		case "0105":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 50, "max": 50, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "1"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 100, "max": 100, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 100, "max": 100, "promise": true, "special": false }
			]
			break;
		case "0106":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 50, "max": 50, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "1"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 100, "max": 100, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 100, "max": 100, "promise": true, "special": false }
			]
			break;
		case "0107":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 50, "max": 50, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "1"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 100, "max": 100, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 100, "max": 100, "promise": true, "special": false }
			]
			break;
		case "0201":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 80, "max": 80, "promise": true, "special": false },
				{ "type": 8, "id": EventMaterial, "min": 5, "max": 7, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "1"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 100, "max": 100, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 100, "max": 100, "promise": true, "special": false }
			]
			break;
		case "0202": 
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 200, "max": 200, "promise": true, "special": false },
				{ "type": 8, "id": EventMaterial, "min": 10, "max": 20, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "2"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 7, "max": 10, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 100, "max": 100, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 100, "max": 100, "promise": true, "special": false }
			]
			break;
		case "0203": 
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 500, "max": 500, "promise": true, "special": false },
				{ "type": 8, "id": EventMaterial, "min": 10, "max": 20, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "2"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 7, "max": 10, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 100, "max": 100, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 100, "max": 100, "promise": true, "special": false }
			]
			break;
		case "0301":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 80, "max": 80, "promise": true, "special": false },
				{ "type": 8, "id": EventMaterial, "min": 5, "max": 7, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "1"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 100, "max": 100, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 100, "max": 100, "promise": true, "special": false }
			]
			break;
		case "0302":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 200, "max": 200, "promise": true, "special": false },
				{ "type": 8, "id": EventMaterial, "min": 10, "max": 20, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "2"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 7, "max": 10, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 100, "max": 100, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 100, "max": 100, "promise": true, "special": false }
			]
			break;
		case "0303":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 500, "max": 500, "promise": true, "special": false },
				{ "type": 8, "id": EventMaterial, "min": 20, "max": 30, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "2"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 10, "max": 15, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "2"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 200, "max": 200, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 200, "max": 200, "promise": true, "special": false }
			]
			break;
		case "0304":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 700, "max": 700, "promise": true, "special": false },
				{ "type": 8, "id": EventMaterial, "min": 20, "max": 30, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "2"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 10, "max": 15, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "2"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 200, "max": 200, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 200, "max": 200, "promise": true, "special": false }
			]
			break;
		case "0305":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 1000, "max": 1000, "promise": true, "special": false },
				{ "type": 8, "id": EventMaterial, "min": 20, "max": 30, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "2"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 10, "max": 15, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "2"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 200, "max": 200, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 200, "max": 200, "promise": true, "special": false }
			]
			break;
		case "0401":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 3000, "max": 3000, "promise": true, "special": false },
				{ "type": 22, "id": parseInt(EventID + "02"), "min": 150, "max": 150, "promise": true, "special": false },
				{ "type": 22, "id": parseInt(EventID + "03"), "min": 60, "max": 60, "promise": true, "special": false },
				{ "type": 8, "id": EventMaterial, "min": 250, "max": 250, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "1"), "min": 25, "max": 25, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "2"), "min": 15, "max": 15, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 25, "max": 25, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "2"), "min": 15, "max": 15, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 3000, "max": 3000, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 3000, "max": 3000, "promise": true, "special": false }
			]
			break;
		case "0402":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 1000, "max": 1000, "promise": true, "special": false },
				{ "type": 22, "id": parseInt(EventID + "02"), "min": 300, "max": 300, "promise": true, "special": false },
				{ "type": 22, "id": parseInt(EventID + "03"), "min": 150, "max": 150, "promise": true, "special": false },
				{ "type": 8, "id": EventMaterial, "min": 60, "max": 70, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "2"), "min": 20, "max": 30, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "3"), "min": 10, "max": 15, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 15, "max": 20, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "2"), "min": 4, "max": 8, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "3"), "min": 2, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 300, "max": 300, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 300, "max": 300, "promise": true, "special": false }
			]
			break;
		case "0501":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 500, "max": 500, "promise": true, "special": false },
				{ "type": 22, "id": parseInt(EventID + "02"), "min": 200, "max": 200, "promise": true, "special": false },
				{ "type": 8, "id": EventMaterial, "min": 35, "max": 55, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "2"), "min": 8, "max": 15, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 15, "max": 20, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "2"), "min": 4, "max": 8, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 300, "max": 300, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 300, "max": 300, "promise": true, "special": false }
			]
			break;
		case "0502":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 1000, "max": 1000, "promise": true, "special": false },
				{ "type": 22, "id": parseInt(EventID + "02"), "min": 300, "max": 300, "promise": true, "special": false },
				{ "type": 22, "id": parseInt(EventID + "03"), "min": 150, "max": 150, "promise": true, "special": false },
				{ "type": 8, "id": EventMaterial, "min": 60, "max": 70, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "2"), "min": 20, "max": 30, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "3"), "min": 10, "max": 15, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 15, "max": 20, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "2"), "min": 4, "max": 8, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "3"), "min": 2, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 300, "max": 300, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 300, "max": 300, "promise": true, "special": false }
			]
			break;
		case "0601":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 1500, "max": 1500, "promise": true, "special": false },
				{ "type": 8, "id": EventMaterial, "min": 60, "max": 70, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "2"), "min": 20, "max": 30, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "3"), "min": 10, "max": 15, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 15, "max": 20, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "2"), "min": 4, "max": 8, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "3"), "min": 2, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 300, "max": 300, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 300, "max": 300, "promise": true, "special": false }
			]
			break;
		case "0701":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 150, "max": 150, "promise": true, "special": false },
				{ "type": 8, "id": EventMaterial, "min": 20, "max": 30, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "2"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 10, "max": 15, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "2"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 200, "max": 200, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 200, "max": 200, "promise": true, "special": false }
			]
			break;
		case "0702":
			DropTemplate = [
				{ "type": 22, "id": parseInt(EventID + "01"), "min": 300, "max": 300, "promise": true, "special": false },
				{ "type": 8, "id": EventMaterial, "min": 20, "max": 30, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(MDrop + "2"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "1"), "min": 10, "max": 15, "promise": true, "special": false },
				{ "type": 8, "id": parseInt(OrbBase + "2"), "min": 3, "max": 5, "promise": true, "special": false },
				{ "type": 4, "id": 0, "min": 200, "max": 200, "promise": true, "special": false },
				{ "type": 14, "id": 0, "min": 200, "max": 200, "promise": true, "special": false }
			]
			break;
	}
	DropList[List[x]] = DropTemplate;
	
}
fs.writeFileSync('./out.json', JSON.stringify(DropList, null, 2));