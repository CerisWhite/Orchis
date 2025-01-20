const fs = require('fs');
const TextLabel = JSON.parse(fs.readFileSync('../Master/TextLabel.json'));

let EndeavourList = {
	'Normal': JSON.parse(fs.readFileSync('../Master/MissionNormalData.json')),
	'Beginner': JSON.parse(fs.readFileSync('../Master/MissionBeginnerData.json')),
	'Daily': JSON.parse(fs.readFileSync('../Master/MissionDailyData.json')),
	'Drill': JSON.parse(fs.readFileSync('../Master/MissionDrillData.json')),
	'Limited': JSON.parse(fs.readFileSync('../Master/MissionPeriodData.json')),
	'Special': JSON.parse(fs.readFileSync('../Master/MissionSpecialData.json')),
	'Campaign': JSON.parse(fs.readFileSync('../Master/MissionMainStoryData.json')),
	'Memory': JSON.parse(fs.readFileSync('../Master/MissionMemoryEventData.json')),
	'Album': JSON.parse(fs.readFileSync('../Master/MissionAlbumData.json'))
};
let Sorted = {
	// 1 = clear quest (any, from list, group, or event base) ((IsAlternate for Co-Op))
	// 2 = clear all quests in list
	// 3 = read story
	// 4 = clear wall (with or without element, element 99 for all)
	// 5 = collect item (specific type+id, from list, or group) ((fafnir medals/epithets/dragons/etc.))
	// 6 = reach max might
	// 7 = treasure trade (by group ID, or by specific reward id)
	// 8 = item summon
	// 9 = clear all daily endeavours
	
	// 91 = clear kaleidoscape floors (expedition)
	// 92 = clear kaleidoscape floors (total)
	// 93 = clear kaleidoscape floors with # of adventurers
	
	// 101 = awaken character (any or ID)
	// 102 = upgrade character level (any or ID, with or without element)
	// 103 = upgrade character mana circle (any or ID, with or without element)
	// 104 = upgrade character limit break (any or ID, with or without element)
	// 105 = upgrade Strength Augment
	// 106 = upgrade HP Augment
	// 107 = reset augments
	
	// 201 = enter event
	// 202 = collect blazon
	// 205 = collect event point
	// 206 = collect # of event point at one time
	// 207 = collect build material
	// 208 = clear quest (in event id) with specific wyrmprint (target id)
	// 209 = clear # of waves in "challenge battle"
	// 210 = max friendship with event character
	
	// 301 = upgrade weapon level (any or ID, with or without element)
	// 302 = upgrade weapon limit break (any or ID, with or without element)
	// 303 = upgrade weapon refine
	
	// 701 = upgrade dragon level (any or ID, with or without element)
	// 702 = upgrade dragon limit break (any or ID, with or without element)
	// 703 = upgrade dragon bond level (any or ID, with or without element)
	
	// 901 = place facility (any or by id)
	// 902 = upgrade facility (any or by id)
	// 903 = collect stamina
	// 904 = collect rupies
	// 905 = collect dragonfruit
	// 906 = total facility level
	
	// 1201 = upgrade wyrmprint level (any or ID)
	// 1202 = upgrade wyrmprint limit break (any or ID)
	
	'Normal': {
		/*
		{
			'ClearType': 0,
			'Description': "",
			'Progress': 0,
			'ApplicableQuests': [],
			'TargetID': 0, // story or unit ID
			'EventBase': 0, // e.g. 217 (astral raid)
			'Group': 0, // e.g. Event ID
			'IsAlternate': false,
			'EntityType': 0,
			'EntityID': 0,
			'Element': 0,
			'Reward': {}
		}
		*/
	},
	'Beginner': {},
	'Daily': {},
	'Drill': {},
	'Limited': {},
	'Special': {},
	'Campaign': {},
	'Memory': {},
	'Album': {}
};
let EventCollection = {
	/*
	"EventID": {
		"MissionType": [ 101, 201, ... ],
		"MissionType": []
	}
	*/
};
const Labels = Object.keys(EndeavourList);
for (const x in Labels) {
	const SubLabels = Object.keys(EndeavourList[Labels[x]]);
	for (const z in SubLabels) {
		if (EndeavourList[Labels[x]][SubLabels[z]]['_QuestGroupId'] != 0 && EndeavourList[Labels[x]][SubLabels[z]]['_QuestGroupId'] != undefined) {
			if (EventCollection[String(EndeavourList[Labels[x]][SubLabels[z]]['_QuestGroupId'])] == undefined) {
				EventCollection[String(EndeavourList[Labels[x]][SubLabels[z]]['_QuestGroupId'])] = {};
			}
			if (EventCollection[String(EndeavourList[Labels[x]][SubLabels[z]]['_QuestGroupId'])][Labels[x]] == undefined) {
				EventCollection[String(EndeavourList[Labels[x]][SubLabels[z]]['_QuestGroupId'])][Labels[x]] = [];
			}
			EventCollection[String(EndeavourList[Labels[x]][SubLabels[z]]['_QuestGroupId'])][Labels[x]].push(parseInt(SubLabels[z]));
		}
		
		let TextID = EndeavourList[Labels[x]][SubLabels[z]]['_Text'];
		if (Labels[x] == "Drill") { TextID = EndeavourList[Labels[x]][SubLabels[z]]['_TextDetail']; }
		const TextData = TextLabel[TextID]['_Text'];
		
		Sorted[Labels[x]][SubLabels[z]] = {
			'ClearType': 0,
			'Description': TextData,
			'Progress': EndeavourList[Labels[x]][SubLabels[z]]['_CompleteValue'],
			'Count': 0,
			'ApplicableQuests': [],
			'TargetID': 0,
			'EventBase': 0,
			'Group': 0,
			'IsAlternate': false,
			'EntityType': 0,
			'EntityID': 0,
			'Element': 0,
			'Reward': {
				'type': EndeavourList[Labels[x]][SubLabels[z]]['_EntityType'],
				'id': EndeavourList[Labels[x]][SubLabels[z]]['_EntityId'],
				'quantity': EndeavourList[Labels[x]][SubLabels[z]]['_EntityQuantity'],
			}
		}
		
		if (TextData.includes("Slay")) { Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 1; }
		if (TextData.includes("Clear") && !TextData.includes("Daily")) {
			if (TextData.includes("Mercurial Gauntlet")) {
				Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 4;
			}
			else {
				Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 1;
			}
			
			if (TextData.includes("Equipped")) {
				Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 208;
			}
		}
		else if (TextData.includes("Daily Endeavors")) {
			Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 9;
		}
		
		if (TextData.includes("Collect")) {
			if (TextData.includes("Blazons")) {
				Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 202;
			}
			else {
				Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 5;
			}
		}
		
		if (TextData.includes("Co-op") || TextData.includes("Co-Op")) {
			Sorted[Labels[x]][SubLabels[z]]['IsAlternate'] = true;
		}
		
		if (TextData.includes("Trade")) {
			Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 7;
		}
		
		if (TextData.includes("Item Summon")) {
			Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 8;
		}
		if (TextData.includes("Reach") && TextData.includes("Might")) {
			Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 6;
		}
		
		if (TextData.includes("Mana Nodes")) {
			Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 103;
		}
		if (TextData.includes("Raise") || TextData.includes("Upgrade")) {
			if (TextData.includes("Adventurer")) {
				Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 102;
			}
			if (TextData.includes("Weapon")) {
				Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 301;
			}
			if (TextData.includes("Dragon")) {
				Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 701;
			}
			if (TextData.includes("Facility")) {
				Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 902;
			}
			if (TextData.includes("Wyrmprint")) {
				Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 1201;
			}
			
		}
		if (TextData.includes("Unbind")) {
			if (TextData.includes("Adventurer")) {
				Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 104;
			}
			if (TextData.includes("Weapon")) {
				Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 302;
			}
			if (TextData.includes("Dragon")) {
				Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 702;
			}
			if (TextData.includes("Wyrmprint")) {
				Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 1202;
			}
		}
		
		if (TextData.includes("Promote")) {
			Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 101;
		}
		
		if (TextData.includes("Facility")) {
			if (TextData.includes("Rupies")) {
				Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 904;
			}
			else if (TextData.includes("Dragonfruit")) {
				Sorted[Labels[x]][SubLabels[z]]['ClearType'] = 905;
			}
		}
		
		if (TextData.includes("Flame")) {
			Sorted[Labels[x]][SubLabels[z]]['Element'] = 1;
		}
		else if (TextData.includes("Water")) {
			Sorted[Labels[x]][SubLabels[z]]['Element'] = 2;
		}
		else if (TextData.includes("Wind")) {
			Sorted[Labels[x]][SubLabels[z]]['Element'] = 3;
		}
		else if (TextData.includes("Light")) {
			Sorted[Labels[x]][SubLabels[z]]['Element'] = 4;
		}
		else if (TextData.includes("Shadow")) {
			Sorted[Labels[x]][SubLabels[z]]['Element'] = 5;
		}
		else if (TextData.includes("All Elements")) {
			Sorted[Labels[x]][SubLabels[z]]['Element'] = 99;
		}
	}
}

fs.writeFileSync("./testing.json", JSON.stringify(EventCollection, null, 2));
fs.writeFileSync("./testing2.json", JSON.stringify(Sorted, null, 2));