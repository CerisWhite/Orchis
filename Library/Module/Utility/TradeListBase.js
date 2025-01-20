const fs = require('fs');
const EventTradeGroup = JSON.parse(fs.readFileSync('../../Master/EventTradeGroup.json'));
const EventData = JSON.parse(fs.readFileSync('../../Master/EventData.json'));
const QuestData = JSON.parse(fs.readFileSync('../../Master/QuestData.json'));
const TradeIDs = Object.keys(EventTradeGroup);

let TradeList = {};
let NextAugment = Math.floor(Math.random() * 2);
for (const x in TradeIDs) {
	TradeList[TradeIDs[x]] = [];
	const Event = EventData[String(EventTradeGroup[TradeIDs[x]]['_EventId'])];
	
	let AddList = [];
	if (Event['_EventKindType'] == 4) {
		let Element = 1;
		if (QuestData[String(Event['_Id']) + "0301"] != undefined) {
			Element = QuestData[String(Event['_Id']) + "0301"]['_Elemental'];
		}
		else if (QuestData[String(Event['_Id']) + "0401"] != undefined) {
			Element = QuestData[String(Event['_Id']) + "0401"]['_Elemental'];
		}
		let Advantage = 1;
		if (Element == 1) { Advantage = 2; }
		else if (Element == 2) { Advantage = 3; }
		else if (Element == 3) { Advantage = 1; }
		else if (Element == 4) { Advantage = 5; }
		else if (Element == 5) { Advantage = 4; }
		console.log(Element, Advantage);
		const Orb = parseInt("1040010" + String(Advantage) + "3");
		let Augments = [];
		if (NextAugment == 0) { Augments = [ 116001001, 117001001 ]; NextAugment = 1; }
		else if (NextAugment == 1) { Augments = [ 122001001, 123001001 ]; NextAugment = 0; }
		AddList = [
			{ 
				'reward': { 'type': 8, 'id': Event['_ViewEntityId1'], 'quantity': 10 },
				'cost': [
					{ 'type': 22, 'id': parseInt(String(Event['_Id']) + "03"), 'quantity': 1 }
				],
				'limit': 0
			},
			{ 
				'reward': { 'type': 8, 'id': Event['_ViewEntityId1'], 'quantity': 5 },
				'cost': [
					{ 'type': 22, 'id': parseInt(String(Event['_Id']) + "02"), 'quantity': 1 }
				],
				'limit': 0
			},
			{ 
				'reward': { 'type': 8, 'id': Event['_ViewEntityId1'], 'quantity': 1 },
				'cost': [
					{ 'type': 4, 'id': parseInt(String(Event['_Id']) + "03"), 'quantity': 50 }
				],
				'limit': 0
			},
			{ 
				'reward': { 'type': 4, 'id': 0, 'quantity': 50 },
				'cost': [
					{ 'type': 8, 'id': Event['_ViewEntityId1'], 'quantity': 1 }
				],
				'limit': 0
			},
			{ 
				'reward': { 'type': 8, 'id': Orb, 'quantity': 1 },
				'cost': [
					{ 'type': 8, 'id': Event['_ViewEntityId1'], 'quantity': 20 }
				],
				'limit': 100
			},
			{ 
				'reward': { 'type': 8, 'id': Augments[0], 'quantity': 1 },
				'cost': [
					{ 'type': 8, 'id': Event['_ViewEntityId1'], 'quantity': 5 }
				],
				'limit': 50
			},
			{ 
				'reward': { 'type': 8, 'id': Augments[1], 'quantity': 1 },
				'cost': [
					{ 'type': 8, 'id': Event['_ViewEntityId1'], 'quantity': 5 }
				],
				'limit': 50
			},
			{ 
				'reward': { 'type': 8, 'id': 201015001, 'quantity': 1 },
				'cost': [
					{ 'type': 8, 'id': Event['_ViewEntityId1'], 'quantity': 20 }
				],
				'limit': 20
			},
			{ 
				'reward': { 'type': 8, 'id': 111002001, 'quantity': 1 },
				'cost': [
					{ 'type': 22, 'id': parseInt(String(Event['_Id']) + "03"), 'quantity': 100 }
				],
				'limit': 2
			},
			{ 
				'reward': { 'type': 8, 'id': 111001001, 'quantity': 1 },
				'cost': [
					{ 'type': 22, 'id': parseInt(String(Event['_Id']) + "03"), 'quantity': 25 }
				],
				'limit': 8
			}
		];
	}
	else if (Event['_EventKindType'] == 6) {
		AddList = [
			{ 
				'reward': { 'type': 25, 'id': parseInt(String(Event['_Id']) + "01"), 'quantity': 5 },
				'cost': [
					{ 'type': 25, 'id': parseInt(String(Event['_Id']) + "02"), 'quantity': 1 }
				],
				'limit': 0
			},
			{ 
				'reward': { 'type': 25, 'id': parseInt(String(Event['_Id']) + "02"), 'quantity': 1 },
				'cost': [
					{ 'type': 25, 'id': parseInt(String(Event['_Id']) + "01"), 'quantity': 5 }
				],
				'limit': 0
			},
			{ 
				'reward': { 'type': 4, 'id': 0, 'quantity': 50 },
				'cost': [
					{ 'type': 25, 'id': parseInt(String(Event['_Id']) + "01"), 'quantity': 1 }
				],
				'limit': 0
			},
			{ 
				'reward': { 'type': 8, 'id': 101001003, 'quantity': 5 },
				'cost': [
					{ 'type': 25, 'id': parseInt(String(Event['_Id']) + "02"), 'quantity': 1 }
				],
				'limit': 50
			},
			{ 
				'reward': { 'type': 8, 'id': 102001003, 'quantity': 5 },
				'cost': [
					{ 'type': 25, 'id': parseInt(String(Event['_Id']) + "02"), 'quantity': 1 }
				],
				'limit': 50
			},
			{ 
				'reward': { 'type': 8, 'id': 103001003, 'quantity': 5 },
				'cost': [
					{ 'type': 25, 'id': parseInt(String(Event['_Id']) + "02"), 'quantity': 1 }
				],
				'limit': 50
			},
			{ 
				'reward': { 'type': 8, 'id': 201012001, 'quantity': 1 },
				'cost': [
					{ 'type': 25, 'id': parseInt(String(Event['_Id']) + "01"), 'quantity': 50 }
				],
				'limit': 10
			},
			{ 
				'reward': { 'type': 8, 'id': 201015001, 'quantity': 1 },
				'cost': [
					{ 'type': 25, 'id': parseInt(String(Event['_Id']) + "01"), 'quantity': 20 }
				],
				'limit': 20
			},
			{ 
				'reward': { 'type': 8, 'id': 104001041, 'quantity': 5 },
				'cost': [
					{ 'type': 25, 'id': parseInt(String(Event['_Id']) + "01"), 'quantity': 1 }
				],
				'limit': 100
			},
			{ 
				'reward': { 'type': 8, 'id': 104002041, 'quantity': 2 },
				'cost': [
					{ 'type': 25, 'id': parseInt(String(Event['_Id']) + "01"), 'quantity': 1 }
				],
				'limit': 50
			},
			{ 
				'reward': { 'type': 8, 'id': 104002042, 'quantity': 2 },
				'cost': [
					{ 'type': 25, 'id': parseInt(String(Event['_Id']) + "02"), 'quantity': 1 }
				],
				'limit': 20
			},
			{ 
				'reward': { 'type': 8, 'id': 111002001, 'quantity': 1 },
				'cost': [
					{ 'type': 25, 'id': parseInt(String(Event['_Id']) + "02"), 'quantity': 100 }
				],
				'limit': 2
			},
			{ 
				'reward': { 'type': 8, 'id': 111001001, 'quantity': 1 },
				'cost': [
					{ 'type': 25, 'id': parseInt(String(Event['_Id']) + "02"), 'quantity': 25 }
				],
				'limit': 8
			}
		]
	}
	else if (Event['_EventKindType'] == 10) {
		const Element = QuestData[String(Event['_Id']) + "0301"]['_Elemental'];
		const Element2 = QuestData[String(Event['_Id']) + "0401"]['_Elemental'];
		let Advantage = 1;
		let Second = 2;
		if (Element == 1) { Advantage = 2; }
		else if (Element == 2) { Advantage = 3; }
		else if (Element == 3) { Advantage = 1; }
		else if (Element == 4) { Advantage = 5; }
		else if (Element == 5) { Advantage = 4; }
		if (Element2 == 1) { Second = 2; }
		else if (Element2 == 2) { Second = 3; }
		else if (Element2 == 3) { Second = 1; }
		else if (Element2 == 4) { Second = 5; }
		else if (Element2 == 5) { Second = 4; }
		const Orb = parseInt("1040010" + String(Advantage) + "3");
		const Orb2 = parseInt("1040010" + String(Second) + "3");
		const Scale = parseInt("1040020" + String(Advantage) + "2");
		const Scale2 = parseInt("1040020" + String(Second) + "2");
		let Augments = [];
		if (NextAugment == 0) { Augments = [ 116001001, 117001001 ]; NextAugment = 1; }
		else if (NextAugment == 1) { Augments = [ 122001001, 123001001 ]; NextAugment = 0; }
		AddList = [
			{
				'reward': { 'type': 4, 'id': 0, 'quantity': 50 },
				'cost': [
					{ 'type': 34, 'id': parseInt(String(Event['_Id']) + "01"), 'quantity': 1 }
				],
				'limit': 0
			},
			{
				'reward': { 'type': 17, 'id': 10101, 'quantity': 1 },
				'cost': [
					{ 'type': 34, 'id': parseInt(String(Event['_Id']) + "01"), 'quantity': 1000 }
				],
				'limit': 20
			},
			{
				'reward': { 'type': 8, 'id': 101001003, 'quantity': 5 },
				'cost': [
					{ 'type': 34, 'id': parseInt(String(Event['_Id']) + "01"), 'quantity': 10 }
				],
				'limit': 50
			},
			{
				'reward': { 'type': 8, 'id': 102001003, 'quantity': 5 },
				'cost': [
					{ 'type': 34, 'id': parseInt(String(Event['_Id']) + "01"), 'quantity': 10 }
				],
				'limit': 50
			},
			{
				'reward': { 'type': 8, 'id': 103001003, 'quantity': 5 },
				'cost': [
					{ 'type': 34, 'id': parseInt(String(Event['_Id']) + "01"), 'quantity': 10 }
				],
				'limit': 50
			},
			{
				'reward': { 'type': 8, 'id': 104001001, 'quantity': 1 },
				'cost': [
					{ 'type': 34, 'id': parseInt(String(Event['_Id']) + "01"), 'quantity': 10 }
				],
				'limit': 100
			},
			{
				'reward': { 'type': 8, 'id': Orb, 'quantity': 1 },
				'cost': [
					{ 'type': 34, 'id': parseInt(String(Event['_Id']) + "01"), 'quantity': 10 }
				],
				'limit': 100
			},
			{
				'reward': { 'type': 8, 'id': Scale, 'quantity': 1 },
				'cost': [
					{ 'type': 34, 'id': parseInt(String(Event['_Id']) + "01"), 'quantity': 10 }
				],
				'limit': 100
			},
			{ 
				'reward': { 'type': 8, 'id': 111002001, 'quantity': 1 },
				'cost': [
					{ 'type': 34, 'id': parseInt(String(Event['_Id']) + "03"), 'quantity': 200 }
				],
				'limit': 2
			},
			{ 
				'reward': { 'type': 8, 'id': 111001001, 'quantity': 1 },
				'cost': [
					{ 'type': 34, 'id': parseInt(String(Event['_Id']) + "03"), 'quantity': 50 }
				],
				'limit': 8
			}
		]
	}
	else if (Event['_EventKindType'] == 12) {
		const Element = QuestData[String(Event['_Id']) + "0401"]['_Elemental'];
		let Advantage = 1;
		if (Element == 1) { Advantage = 2; }
		else if (Element == 2) { Advantage = 3; }
		else if (Element == 3) { Advantage = 1; }
		else if (Element == 4) { Advantage = 5; }
		else if (Element == 5) { Advantage = 4; }
		const Orb = parseInt("1040010" + String(Advantage) + "3");
		let Augments = [];
		if (NextAugment == 0) { Augments = [ 116001001, 117001001 ]; NextAugment = 1; }
		else if (NextAugment == 1) { Augments = [ 122001001, 123001001 ]; NextAugment = 0; }
		AddList = [
			{
				'reward': { 'type': 40, 'id': parseInt(String(Event['_Id']) + "04"), 'quantity': 1 },
				'cost': [
					{ 'type': 40, 'id': parseInt(String(Event['_Id']) + "03"), 'quantity': 5 }
				],
				'limit': 0
			},
			{
				'reward': { 'type': 40, 'id': parseInt(String(Event['_Id']) + "03"), 'quantity': 5 },
				'cost': [
					{ 'type': 40, 'id': parseInt(String(Event['_Id']) + "04"), 'quantity': 1 }
				],
				'limit': 0
			},
			{
				'reward': { 'type': 4, 'id': 0, 'quantity': 50 },
				'cost': [
					{ 'type': 40, 'id': parseInt(String(Event['_Id']) + "03"), 'quantity': 1 }
				],
				'limit': 0
			},
			{
				'reward': { 'type': 8, 'id': 202004004, 'quantity': 1 },
				'cost': [
					{ 'type': 40, 'id': parseInt(String(Event['_Id']) + "04"), 'quantity': 50 }
				],
				'limit': 10
			},
			{
				'reward': { 'type': 8, 'id': Augments[0], 'quantity': 1 },
				'cost': [
					{ 'type': 40, 'id': parseInt(String(Event['_Id']) + "03"), 'quantity': 1 }
				],
				'limit': 50
			},
			{
				'reward': { 'type': 8, 'id': Augments[1], 'quantity': 1 },
				'cost': [
					{ 'type': 40, 'id': parseInt(String(Event['_Id']) + "03"), 'quantity': 1 }
				],
				'limit': 50
			},
			{
				'reward': { 'type': 8, 'id': Orb, 'quantity': 5 },
				'cost': [
					{ 'type': 40, 'id': parseInt(String(Event['_Id']) + "03"), 'quantity': 25 },
					{ 'type': 40, 'id': parseInt(String(Event['_Id']) + "04"), 'quantity': 5 }
				],
				'limit': 50
			},
			{
				'reward': { 'type': 17, 'id': 10101, 'quantity': 1 },
				'cost': [
					{ 'type': 40, 'id': parseInt(String(Event['_Id']) + "03"), 'quantity': 100 },
					{ 'type': 40, 'id': parseInt(String(Event['_Id']) + "04"), 'quantity': 50 }
				],
				'limit': 10
			},
			{ 
				'reward': { 'type': 8, 'id': 111002001, 'quantity': 1 },
				'cost': [
					{ 'type': 40, 'id': parseInt(String(Event['_Id']) + "04"), 'quantity': 100 }
				],
				'limit': 2
			},
			{ 
				'reward': { 'type': 8, 'id': 111001001, 'quantity': 1 },
				'cost': [
					{ 'type': 40, 'id': parseInt(String(Event['_Id']) + "04"), 'quantity': 25 }
				],
				'limit': 8
			}
		]
	}

	for (const z in AddList) {
		let TradeID = parseInt(String(Event['_Id']) + "00") + TradeList[TradeIDs[x]].length + 1;
		let TradeGroup = parseInt(TradeIDs[x]);
		let Priority = 100000 + ((TradeList[TradeIDs[x]].length + 1) * 100);
		let NeedList = [];
		/*for (const y in AddList[z]['cost']) {
			AddList[z]['cost'][y]['quantity'] = AddList[z]['cost'][y]['quantity'] * -1;
		}*/
		/*
		TradeList[TradeIDs[x]].push({
			'event_trade_id':  TradeID,
			'trade_group_id': parseInt(TradeIDs[x]),
			'read_story_count': 0,
			'priority': 100000 + ((TradeList[TradeIDs[x]].length + 1) * 100),
			'commence_date': 0,
			'complete_date': 0,
			'is_lock_view': 0,
			'clear_target_quest_id': 0,
			'reset_type': 0,
			'limit': AddList[z]['limit'],
			'destination_entity_type': AddList[z]['reward']['type'],
			'destination_entity_id': AddList[z]['reward']['id'],
			'destination_entity_quantity': AddList[z]['reward']['quantity'],
			'need_entity_list': NeedList
		});
		*/
		TradeList[TradeIDs[x]].push({
			'TradeID': TradeID,
			'TradeGroup': TradeGroup,
			'Priority': Priority,
			'Reward': AddList[z]['reward'],
			'Cost': AddList[z]['cost'],
			'Limit': AddList[z]['limit']
		});
	}
}
fs.writeFileSync('./EventTradeList.json', JSON.stringify(TradeList, null, 2));