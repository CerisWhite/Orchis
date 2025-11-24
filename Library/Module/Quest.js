const fs = require('fs');

const QuestDropList = JSON.parse(fs.readFileSync('./Library/Event/QuestDropList.json'));
const QuestEnemyList = JSON.parse(fs.readFileSync('./Library/Event/QuestEnemyList.json'));
const QuestBonusDrops = JSON.parse(fs.readFileSync('./Library/Event/QuestBonusDrops.json'));

function GetInfo(ID, Attribute) {
	return global.Master.QuestData[String(ID)][Attribute];
}

function DropSummary(ID) {
	const DropData = QuestDropList[String(ID)];
	let DropList = [];
	for (const x in DropList) {
		if (DropList[x]['type'] == 4 || DropList[x]['type'] == 14 || DropList[x]['type'] == 18) { continue; }
		DropList.push({
			'entity_type': DropList[x]['type'],
			'entity_id': DropList[x]['id']
		});
	}
	return {
		'quest_drop_info': {
			'drop_info_list': DropList,
			'host_drop_info_list': [],
			'fever_drop_info_list': [],
			'quest_bonus_info_list': [],
			'quest_reborn_bonus_info_list': [],
			'campaign_extra_reward_info_list': []
		}
	}
}

function GetFirstClearSet(ID) {
	ID = String(ID)
	let RewardList = [];
	let i = 0; while (i < 5) {
		if (global.Master.QuestRewardData[ID] == undefined || global.Master.QuestRewardData[ID]['_FirstClearSetEntityType' + String(i + 1)] == 0) { i++; continue; }
		RewardList.push({
			'type': global.Master.QuestRewardData[ID]['_FirstClearSetEntityType' + String(i + 1)],
			'id': global.Master.QuestRewardData[ID]['_FirstClearSetEntityId' + String(i + 1)],
			'quantity': global.Master.QuestRewardData[ID]['_FirstClearSetEntityQuantity' + String(i + 1)],
		});
		i++;
	}
	return RewardList;
}
function GetMissionClearSet(ID) {
	ID = String(ID)
	let RewardList = [];
	let i = 0; while (i < 3) {
		if (global.Master.QuestRewardData[ID] == undefined || global.Master.QuestRewardData[ID]['_MissionsClearSetEntityType' + String(i + 1)] == 0) { i++; continue; }
		RewardList.push({
			'type': global.Master.QuestRewardData[ID]['_MissionsClearSetEntityType' + String(i + 1)],
			'id': global.Master.QuestRewardData[ID]['_MissionsClearSetEntityId' + String(i + 1)],
			'quantity': global.Master.QuestRewardData[ID]['_MissionsClearSetEntityQuantity' + String(i + 1)],
		});
		i++;
	}
	Completion = {
		'type': global.Master.QuestRewardData[ID] == undefined ? 0 : global.Master.QuestRewardData[ID]['_MissionCompleteEntityType'],
		'id': global.Master.QuestRewardData[ID] == undefined ? 0 : global.Master.QuestRewardData[ID]['_MissionCompleteEntityId'],
		'quantity': global.Master.QuestRewardData[ID] == undefined ? 0 : global.Master.QuestRewardData[ID]['_MissionCompleteEntityQuantity'],
	}
	return { 'Clear': RewardList, 'Complete': Completion };
}

function RoomTypeMatch(TabType, ID) {
	/* Due to lack of players, this is disabled lol
	
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
	*/
	return true;
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
	let Value = 0;
	const RotationIndex = QuestBonusDrops.findIndex(x => x.group_id == QuestID);
	if (RotationIndex != -1) {
		const RotationsData = QuestBonusDrops[RotationIndex];
		const IntervalIndex = IntervalTypes.findIndex(x => x.id == RotationsData['interval']);
		if (IntervalTypes[IntervalIndex]['match'].includes(new Date().getDay())) {
			Value = RotationsData['drop_multiplier'] + 1;
		}
	}
	return Value;
}

function GetDrops(ID, EventList, PartyData, PerformCount) {
	let Coin = 0; let Mana = 0; let Wyrmite = 0;
	let CoinBonus = 0; let EventPoint = 0; let EventPointBonus = 0;
	let EventPointFactor = 0.0; let EventMaterialFactor = 0.0;
	let CharaXPFactor = 0.0; let UnitXPFactor = 0.0;
	let CoinFactor = 0.0; let ManaFactor = 0.0;
	
	const EventID = global.Master.QuestData[String(ID)]['_Gid'];
	let EventType = 0;
	if (global.Master.EventData[String(EventID)] != undefined) {
		EventType = global.Master.EventData[String(EventID)]['_EventKindType'];
	}
	
	let Astral = true;
	//for (const x in EventList['astralraid']) {
	//	if (
	//	EventList['astralraid'][x]['start'] < global.ServerTime &&
	//	EventList['astralraid'][x]['end'] > global.ServerTime
	//	) { Astral = true; }
	//}
	
	const DropFactor = parseFloat(GetMultiplier(ID).toFixed(1));
	let DropTable = [];
	
	let AbilityList = [];
	for (const p in PartyData) {
		if (PartyData[p]['chara_data']['chara_id'] != undefined && PartyData[p]['chara_data']['chara_id'] != 0) {
			if (PartyData[p]['chara_data']['ability_1_level'] != 0) {
				AbilityList.push(global.Module.Character.GetInfo(PartyData[p]['chara_data']['chara_id'], "_Abilities1" + String(PartyData[p]['chara_data']['ability_1_level'])));
			}
			if (PartyData[p]['chara_data']['ability_2_level'] != 0) {
				AbilityList.push(global.Module.Character.GetInfo(PartyData[p]['chara_data']['chara_id'], "_Abilities2" + String(PartyData[p]['chara_data']['ability_2_level'])));
			}
			if (PartyData[p]['chara_data']['ability_3_level'] != 0) {
				AbilityList.push(global.Module.Character.GetInfo(PartyData[p]['chara_data']['chara_id'], "_Abilities3" + String(PartyData[p]['chara_data']['ability_3_level'])));
			}
		}
		if (PartyData[p]['dragon_data']['dragon_id'] != undefined && PartyData[p]['dragon_data']['dragon_id'] != 0) {
			if (PartyData[p]['dragon_data']['ability_1_level'] != 0) {
				AbilityList.push(global.Module.Dragon.GetInfo(PartyData[p]['dragon_data']['dragon_id'], "_Abilities1" + String(PartyData[p]['dragon_data']['ability_1_level'])));
			}
			if (PartyData[p]['dragon_data']['ability_2_level'] != 0) {
				AbilityList.push(global.Module.Dragon.GetInfo(PartyData[p]['dragon_data']['dragon_id'], "_Abilities2" + String(PartyData[p]['dragon_data']['ability_2_level'])));
			}
		}
		for (const x in PartyData[p]['crest_slot_type_1_crest_list']) {
			if (
				PartyData[p]['crest_slot_type_1_crest_list'][x]['ability_crest_id'] == undefined
				|| PartyData[p]['crest_slot_type_1_crest_list'][x]['ability_crest_id'] == 0
			) { continue; }
			
			
			if (PartyData[p]['crest_slot_type_1_crest_list'][x]['ability_1_level'] != 0) {
				AbilityList.push(global.Module.Crest.GetInfo(PartyData[p]['crest_slot_type_1_crest_list'][x]['ability_crest_id'], "_Abilities1" + String(PartyData[p]['crest_slot_type_1_crest_list'][x]['ability_1_level'])));
			}
			if (PartyData[p]['crest_slot_type_1_crest_list'][x]['ability_2_level'] != 0) {
				AbilityList.push(global.Module.Crest.GetInfo(PartyData[p]['crest_slot_type_1_crest_list'][x]['ability_crest_id'], "_Abilities2" + String(PartyData[p]['crest_slot_type_1_crest_list'][x]['ability_2_level'])));
			}
		}
		for (const x in PartyData[p]['crest_slot_type_2_crest_list']) {
			if (
				PartyData[p]['crest_slot_type_2_crest_list'][x]['ability_crest_id'] == undefined
				|| PartyData[p]['crest_slot_type_2_crest_list'][x]['ability_crest_id'] == 0
			) { continue; }
			if (PartyData[p]['crest_slot_type_2_crest_list'][x]['ability_1_level'] != 0) {
				AbilityList.push(global.Module.Crest.GetInfo(PartyData[p]['crest_slot_type_2_crest_list'][x]['ability_crest_id'], "_Abilities1" + String(PartyData[p]['crest_slot_type_2_crest_list'][x]['ability_1_level'])));
			}
			if (PartyData[p]['crest_slot_type_2_crest_list'][x]['ability_2_level'] != 0) {
				AbilityList.push(global.Module.Crest.GetInfo(PartyData[p]['crest_slot_type_2_crest_list'][x]['ability_crest_id'], "_Abilities2" + String(PartyData[p]['crest_slot_type_2_crest_list'][x]['ability_2_level'])));
			}
		}
	}
	for (const x in AbilityList) {
		if (global.Master.AbilityData[String(AbilityList[x])] == undefined) { continue; }
		const Ability = global.Master.AbilityData[String(AbilityList[x])];
		let Z = 0; while (Z < 3) {
			Z++;
			const TypeNo = '_AbilityType' + String(Z);
			const TypeUp = TypeNo + 'UpValue';
			if (Ability['_EventId'] == EventID) {
				if (Ability[TypeNo] == 33) {
					EventPointFactor += (Ability[TypeUp] * 0.01);
				}
				else if (Ability[TypeNo] == 34) {
					EventMaterialFactor += (Ability[TypeUp] * 0.01);
				}
				else if (Ability[TypeNo] == 41) {
					EventPointFactor += (Ability[TypeUp] * 0.01);
				}
			}
			
			if (Ability[TypeNo] == 21) {
				CharaXPFactor += (Ability[TypeUp] * 0.01);
			}
			else if (Ability[TypeNo] == 22) {
				UnitXPFactor += (Ability[TypeUp] * 0.01);
			}
			else if (Ability[TypeNo] == 23) {
				CoinFactor += (Ability[TypeUp] * 0.01);
			}
			else if (Ability[TypeNo] == 24) {
				ManaFactor += (Ability[TypeUp] * 0.01);
			}
		}
	}
	
	if (ID >= 210010101 && ID <= 210051104) { CoinBonus += 150000; }
	if (ID >= 219010101 && ID <= 219051103) { CoinBonus += 150000; }
	if (ID >= 228010101 && ID <= 228051103) { CoinBonus += 150000; }
	if (ID >= 232010101 && ID <= 233051103) { CoinBonus += 150000; }
	CoinBonus += Math.floor(CoinBonus * CoinFactor);
	
	let i = 0; while (i < PerformCount) {
		for (const x in QuestDropList[String(ID)]) {
			const DropData = QuestDropList[String(ID)][x];
			if (DropData['type'] == 4) { Coin += DropData['max']; }
			else if (DropData['type'] == 13) { Wyrmite += 5; }
			else if (DropData['type'] == 18) { Mana += DropData['max']; }
			else {
				if (DropData['type'] == 22 && global.Master.BuildEventItem[String(DropData['id'])]['_EventItemType'] == 10001) {
					EventPoint += DropData['max'];
					EventPointBonus += Math.floor(DropData['max'] * EventPointFactor);
					continue;
				}
				else if (DropData['type'] == 25 && global.Master.Clb01EventItem[String(DropData['id'])]['_EventItemType'] == 10201) {
					EventPoint += DropData['max'];
					EventPointBonus += Math.floor(DropData['max'] * EventPointFactor);
					continue;
				}
				else if (DropData['type'] == 34 && global.Master.CombatEventItem[String(DropData['id'])]['_EventItemType'] == 10101) {
					EventPoint += DropData['max'];
					EventPointBonus += Math.floor(DropData['max'] * EventPointFactor);
					continue;
				}
				
				let Granted = false;
				const DropRoll = Math.floor(Math.random() * 100) + 1;
				if (DropData['extra'] == true) {
					if (DropRoll >= 95) { Granted = true; }
				}
				else if (DropData['special'] == true) {
					if (DropRoll >= 75) { Granted = true; }
				}
				else if (DropData['promise'] == true || DropRoll >= 30) {
					Granted = true;
				}
				
				if (Granted == true) {
					const DropVariance = DropData['max'] - DropData['min'];
					let DropCount = Math.floor(Math.random() * DropVariance) + DropData['min'];
					
					if (EventType == 4 && DropData['type'] == 8) {
						const EventMaterialID = global.Module.Event.GetInfo(EventID, "_ViewEntityId1");
						if (DropData['id'] == EventMaterialID) {
							DropCount += Math.floor(DropCount * EventMaterialFactor);
						}
					}
					
					DropTable.push({
						'type': DropData['type'],
						'id': DropData['id'],
						'quantity': DropCount + Math.floor(DropCount * DropFactor),
						'place': 0,
						'factor': DropFactor
					});
				}
			}
		}
		Wyrmite += 10;
		
		i++;
	}
	Coin += Math.floor(Coin * CoinFactor);
	Mana += Math.floor(Mana * ManaFactor);

	return {
		'Item': DropTable,
		'Coin': Coin,
		'CoinBonus': CoinBonus,
		'Mana': Mana,
		'Astral': Astral == true ? Math.floor(Math.random() * 3) + 2 : 0,
		'Wyrmite': Wyrmite,
		'EventPoint': EventPoint,
		'EventPointBonus': EventPointBonus,
		'CharaXPFactor': CharaXPFactor,
		'UnitXPFactor': UnitXPFactor
	}
}

function GetAreaList(ID) {
	let AreaList = [];
	let i = 0; while (i < 6) {
		if (global.Master.QuestData[String(ID)]['_Scene0' + String(i + 1)] != "") {
			AreaList.push({
				'scene_path': global.Master.QuestData[String(ID)]['_Scene0' + String(i + 1)],
				'area_name': global.Master.QuestData[String(ID)]['_AreaName0' + String(i + 1)]
			});
		}
		i++;
	}
	return AreaList;
}

function AreaOdds(QuestID, Persist, Step) {
	const Variation = GetInfo(QuestID, "_VariationType");
	const Scene = GetInfo(QuestID, "_Scene0" + String(Step));
	const Area = GetInfo(QuestID, "_AreaName0" + String(Step));
	const QuestEnemyIDs = QuestEnemyList[Scene][Area][Variation];
	let EnemyList = [];
	for (const x in QuestEnemyIDs) {
		EnemyList.push({
			'param_id': QuestEnemyIDs[x],
			'is_pop': 1,
			'is_rare': 0,
			'piece': 0,
			'enemy_drop_list': [
				{
					'drop_list': [],
					'coin': 0,
					'mana': 0
				}
			],
			'enemy_idx': parseInt(x)
		});
	}
	if (QuestID == 204270302) { for (const x in EnemyList) { EnemyList[x]['is_rare'] = 1; } }
	
	let AreaCount = 1;
	if (GetInfo(QuestID, "_Scene02") != "") { AreaCount += 1; }
	if (GetInfo(QuestID, "_Scene03") != "") { AreaCount += 1; }
	if (GetInfo(QuestID, "_Scene04") != "") { AreaCount += 1; }
	if (GetInfo(QuestID, "_Scene05") != "") { AreaCount += 1; }
	if (GetInfo(QuestID, "_Scene06") != "") { AreaCount += 1; }
	
	if (AreaCount == 1) {
		if (String(QuestID).slice(0, 3) == "204") {
			for (const x in EnemyList) {
				let Divide = 2; if (x > 0) { Divide = (EnemyList.length - 1) * 2 }
				if (EnemyList.length == 1) { Divide = 1; }
				for (const y in Persist['Dungeon']['Item']) {
					const DividedDrop = {
						'type': Persist['Dungeon']['Drop']['Item'][y]['type'],
						'id': Persist['Dungeon']['Drop']['Item'][y]['id'],
						'quantity': Math.floor(Persist['Dungeon']['Drop']['Item'][y]['quantity'] / Divide),
						'place': Persist['Dungeon']['Drop']['Item'][y]['place'],
						'factor': Persist['Dungeon']['Drop']['Item'][y]['factor'],
					}
					EnemyList[x]['enemy_drop_list'][0]['drop_list'].push(DividedDrop);
				}
				EnemyList[x]['enemy_drop_list'][0]['coin'] = Math.floor(Persist['Dungeon']['Drop']['Coin'] / Divide);
				EnemyList[x]['enemy_drop_list'][0]['mana'] = Math.floor(Persist['Dungeon']['Drop']['Mana'] / Divide);
			}
		}
		else if (EnemyList.length > 0) {
			EnemyList[0]['enemy_drop_list'][0]['drop_list'] = Persist['Dungeon']['Drop']['Item'];
			EnemyList[0]['enemy_drop_list'][0]['coin'] = Persist['Dungeon']['Drop']['Coin']
			EnemyList[0]['enemy_drop_list'][0]['mana'] = Persist['Dungeon']['Drop']['Mana']
		}
	}
	else {
		for (const x in EnemyList) {
			let Divide = EnemyList.length * AreaCount;
			for (const y in Persist['Dungeon']['Drop']['Item']) {
				const DividedDrop = {
					'type': Persist['Dungeon']['Drop']['Item'][y]['type'],
					'id': Persist['Dungeon']['Drop']['Item'][y]['id'],
					'quantity': Math.floor(Persist['Dungeon']['Drop']['Item'][y]['quantity'] / Divide),
					'place': Persist['Dungeon']['Drop']['Item'][y]['place'],
					'factor': Persist['Dungeon']['Drop']['Item'][y]['factor'],
				}
				EnemyList[x]['enemy_drop_list'][0]['drop_list'].push(DividedDrop);
			}
			EnemyList[x]['enemy_drop_list'][0]['coin'] = Math.floor(Persist['Dungeon']['Drop']['Coin'] / Divide);
			EnemyList[x]['enemy_drop_list'][0]['mana'] = Math.floor(Persist['Dungeon']['Drop']['Mana'] / Divide);
		}
	}
	
	return {
		'area_index': Step - 1,
		'reaction_obj_count': 0,
		'drop_obj': [],
		'enemy': EnemyList,
		'grade': []
	}
}

const SubstageList = {
  "208010303": [
    208010401
  ],
  "208020303": [
    208020401
  ],
  "208030303": [
    208030401
  ],
  "208040303": [
    208040401
  ],
  "208060203": [
    208060301
  ],
  "208070203": [
    208070301
  ],
  "208080303": [
    208080401
  ],
  "208090303": [
    208090401
  ],
  "208100303": [
    208100401
  ],
  "208110303": [
    208110401
  ],
  "208120303": [
    208120401
  ],
  "208130303": [
    208130401
  ],
  "208140303": [
    208140401
  ],
  "208150303": [
    208150401
  ],
  "208160303": [
    208160401
  ],
  "208170303": [
    208170401
  ],
  "208180303": [
    208180401
  ],
  "208190303": [
    208190401
  ],
  "208200303": [
    208200401
  ],
  "208210303": [
    208210401
  ],
  "208220303": [
    208220401
  ],
  "208230303": [
    208230401
  ],
  "208240303": [
    208240401
  ],
  "208250305": [
    208250401
  ],
  "208260303": [
    208260401
  ],
  "208270303": [
    208270401
  ],
  "208280303": [
    208280401
  ],
  "208290303": [
    208290401
  ],
  "208300303": [
    208300401
  ],
  "208310303": [
    208310401
  ],
  "208330303": [
    208330401
  ],
  "208340303": [
    208340401
  ],
  "208350305": [
    208350401
  ],
  "208360303": [
    208360401
  ],
  "208380303": [
    208380401
  ],
  "208400303": [
    208400401
  ]
}
function GetSubstage(QuestID) {
	if (SubstageList[String(QuestID)] != undefined) { return SubstageList[String(QuestID)]; }
	return 0;
}

const QuestScoreData = Object.values(global.Master.QuestScoringEnemy);
function GetEarnPoint(QuestID, SmashList) {
	const Variation = GetInfo(QuestID, "_VariationType");
	const Scene = GetInfo(QuestID, "_Scene01");
	const Area = GetInfo(QuestID, "_AreaName01");
	const QuestEnemyIDs = QuestEnemyList[Scene][Area][Variation];
	let ScoreList = [];
	let ScoreTotal = 0;
	for (const x in SmashList) {
		const Param = global.Master.EnemyParam[QuestEnemyIDs[x]];
		const Data = global.Master.EnemyData[Param['_DataId']];
		const Book = QuestScoreData.find(z => z._EnemyListId == Data['_BookId']);
		const SmashCount = SmashList[x]['count'];
		if (SmashCount != 0) {
			const Gained = Book['_Point'] * SmashCount;
			const Exists = ScoreList.findIndex(z => z.scoring_enemy_id == Book['_Id']);
			if (Exists == -1) {
				ScoreList.push({
					'scoring_enemy_id': Book['_Id'],
					'smash_count': SmashCount,
					'point': Gained
				});
			}
			else {
				ScoreList[Exists]['smash_count'] += SmashCount;
				ScoreList[Exists]['point'] += Gained;
			}
			ScoreTotal += Gained;
		}
	}
	return {
		'List': ScoreList,
		'Point': ScoreTotal,
		'Mission': []
	}
}

function HasRewardCharacter(StoryID) {
	const HasRewardList = [ 1000103, 1000106, 1000111, 1000202,
							1000808, 1001108, 1001410, 1001610,
							
							1000311 ];
	if (HasRewardList.includes(StoryID)) { return true; }
	return false;
}
function HasRewardDragon(StoryID) {
	const HasRewardList = [ 1000109, 1000210, 1000311, 1000412, 1000509 ]
	if (HasRewardList.includes(StoryID)) { return true; }
	return false;
}
function HasRewardFacility(StoryID) {
	const HasRewardList = [ 1000607, 1000709, 1000808, 1000909, 1001009 ];
	if (HasRewardList.includes(StoryID)) { return true; }
	return false;
}

const RewardCharacter = {
	"1000103": [ 10540201 ],
	"1000106": [ 10440301 ],
	"1000111": [ 10840501 ],
	"1000202": [ 10640401 ],
	"1000808": [ 10340502 ],
	"1001108": [ 10240101 ],
	"1001410": [ 10750504 ],
	"1001610": [ 10650503 ],
	"1000311": [ 10550101 ]
}
const RewardDragon = {
	"1000109": [ 20040301 ],
	"1000210": [ 20040201 ],
	"1000311": [ 20040101 ],
	"1000412": [ 20040401 ],
	"1000509": [ 20040501 ]
}
const RewardFacility = {
	"1000607": [100501, 100501, 100502, 100502,
				100503, 100503, 100504, 100504,
				100505, 100505, 100506, 100506,
				100507, 100507, 100508, 100508,
				100509, 100509, 100603],
	"1000709": [ 100602 ],
	"1000808": [ 100601 ],
	"1000909": [ 100604 ],
	"1001009": [ 100605 ]
}

async function ReadStory(res, StoryID) {
	res.mid.Data = {
		'quest_story_reward_list': [
			{'entity_type': 23, 'entity_id': 0, 'entity_quantity': 25}
		],
		'update_data_list': {
			'quest_story_list': [ {'quest_story_id': parseInt(StoryID), 'state': 1} ]
		}
	}
	res.mid.ItemList.push({ 'type': 23, 'id': 0, 'quantity': 25 });
	
	StoryID = String(StoryID);
	if (HasRewardCharacter(parseInt(StoryID)) == true) {
		for (const x in RewardCharacter[StoryID]) {
			res.mid.ItemList.push({ 'type': 1, 'id': RewardCharacter[StoryID][x], 'quantity': 1 });
			res.mid.Data['quest_story_reward_list'].push({
				'entity_type': 1,
				'entity_id': RewardCharacter[StoryID][x],
				'entity_quantity': 1,
				'entity_level': 1,
				'entity_limit_break_count': 0
			});
		}
	}
	if (HasRewardDragon(parseInt(StoryID)) == true) {
		for (const x in RewardDragon[StoryID]) {
			res.mid.ItemList.push({
				'type': 7,
				'id': RewardDragon[StoryID][x],
				'quantity': 1,
				'level': 1,
				'limit_break_count': 0
			});
			res.mid.Data['quest_story_reward_list'].push({
				'entity_type': 7,
				'entity_id': RewardDragon[StoryID][x],
				'entity_quantity': 1,
				'entity_level': 1,
				'entity_limit_break_count': 0
			});
		}
	}
	if (HasRewardFacility(parseInt(StoryID)) == true) {
		for (const x in RewardFacility[StoryID]) {
			res.mid.ItemList.push({ 'type': 9, 'id': RewardFacility[StoryID][x], 'quantity': 1 });
			res.mid.Data['quest_story_reward_list'].push({
				'entity_type': 9,
				'entity_id': RewardFacility[StoryID][x],
				'entity_quantity': 1,
				'entity_level': 1,
				'entity_limit_break_count': 0
			});
		}
	}
	
	const EventID = String(global.Master.QuestStory[StoryID]['_GroupId']);
	if (
		global.Master.EventData[EventID] != undefined &&
		parseInt(StoryID) == global.Master.EventData[EventID]['_GuestJoinStoryId']
	) {
		const CharacterID = global.Master.EventData[EventID]['_EventCharaId'];
		const CharacterData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "chara_list", { 'chara_id': CharacterID });
		res.mid.ItemList.push({ 'type': 1, 'id': CharacterID, 'quantity': 1 });
		if (global.Master.EventData[EventID]['_IsMemoryEvent'] == 1 || CharacterData != false) {
			res.mid.Persist['Event'][EventID]['Friendship'] = [
				{
					'chara_id': CharacterID,
					'total_point': 500,
					'is_temporary': 0
				}
			];
		}
		else {
			res.mid.Persist['Event'][EventID]['Friendship'] = [
				{
					'chara_id': CharacterID,
					'total_point': 0,
					'is_temporary': 1
				}
			];
		}
	}
	
	return;
}

function ClearStory(res, StoryID) {
	StoryID = String(StoryID);
	res.mid.ItemList.push({ 'type': 23, 'id': 0, 'quantity': 25 });
	if (HasRewardCharacter(parseInt(StoryID)) == true) {
		for (const x in RewardCharacter[StoryID]) {
			res.mid.ItemList.push({ 'type': 1, 'id': RewardCharacter[StoryID][x], 'quantity': 1 });
		}
	}
	if (HasRewardDragon(parseInt(StoryID)) == true) {
		for (const x in RewardDragon[StoryID]) {
			res.mid.ItemList.push({
				'type': 7,
				'id': RewardDragon[StoryID][x],
				'quantity': 1,
				'level': 1,
				'limit_break_count': 0
			});
		}
	}
	if (HasRewardFacility(parseInt(StoryID)) == true) {
		for (const x in RewardFacility[StoryID]) {
			res.mid.ItemList.push({ 'type': 9, 'id': RewardFacility[StoryID][x], 'quantity': 1 });
		}
	}
	
	
	return;
}
const RewardChest = {
	"102101": [ { 'entity_type': 18, 'entity_id': 0, 'entity_quantity': 2000 } ],
	"102102": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2 } ],
	"102201": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2 } ],
	"102202": [ { 'entity_type': 4, 'entity_id': 0, 'entity_quantity': 20000 } ],
	"102301": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2 } ],
	"102302": [ { 'entity_type': 8, 'entity_id': 201011001, 'entity_quantity': 1 } ],
	"104101": [ { 'entity_type': 8, 'entity_id': 101001003, 'entity_quantity': 10 } ],
	"104102": [ { 'entity_type': 8, 'entity_id': 113001003, 'entity_quantity': 10 } ],
	"104201": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2 } ],
	"104202": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2 } ],
	"104301": [ { 'entity_type': 8, 'entity_id': 116001001, 'entity_quantity': 10 } ],
	"104302": [ { 'entity_type': 8, 'entity_id': 117001001, 'entity_quantity': 10 } ],
	"106101": [ { 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300 } ],
	"106201": [ { 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300 } ],
	"106301": [ { 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300 } ],
	"107101": [ { 'entity_type': 4, 'entity_id': 0, 'entity_quantity': 100000 } ],
	"107102": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2 } ],
	"107201": [ { 'entity_type': 4, 'entity_id': 0, 'entity_quantity': 150000 } ],
	"107202": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2 } ],
	"107301": [ { 'entity_type': 8, 'entity_id': 116001001, 'entity_quantity': 10 } ],
	"107302": [ { 'entity_type': 8, 'entity_id': 117001001, 'entity_quantity': 10 } ],
	"108101": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2 } ],
	"108102": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2 } ],
	"108201": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2 } ],
	"108202": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2 } ],
	"108301": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2 } ],
	"108302": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2 } ],
	"109101": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2 } ],
	"109201": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2 } ],
	"109301": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 2 } ],
	"110101": [ { 'entity_type': 8, 'entity_id': 117001001, 'entity_quantity': 10 } ],
	"110201": [ { 'entity_type': 8, 'entity_id': 116001001, 'entity_quantity': 10 } ],
	"110301": [ { 'entity_type': 8, 'entity_id': 117001001, 'entity_quantity': 10 } ],
	"111101": [ { 'entity_type': 8, 'entity_id': 122001001, 'entity_quantity': 10 } ],
	"111201": [ { 'entity_type': 8, 'entity_id': 123001001, 'entity_quantity': 10 } ],
	"111301": [ { 'entity_type': 8, 'entity_id': 122001001, 'entity_quantity': 10 } ],
	"112101": [ { 'entity_type': 8, 'entity_id': 116001001, 'entity_quantity': 10 } ],
	"112201": [ { 'entity_type': 8, 'entity_id': 117001001, 'entity_quantity': 10 } ],
	"112301": [ { 'entity_type': 8, 'entity_id': 116001001, 'entity_quantity': 10 } ],
	"113101": [ { 'entity_type': 8, 'entity_id': 123001001, 'entity_quantity': 10 } ],
	"113201": [ { 'entity_type': 8, 'entity_id': 122001001, 'entity_quantity': 10 } ],
	"113301": [ { 'entity_type': 8, 'entity_id': 123001001, 'entity_quantity': 10 } ],
	"114101": [ { 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300 } ],
	"114201": [ { 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300 } ],
	"114301": [ { 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300 } ],
	"115101": [ { 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300 } ],
	"115201": [ { 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300 } ],
	"115301": [ { 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 300 } ],
	"116101": [ { 'entity_type': 8, 'entity_id': 201011001, 'entity_quantity': 5 } ],
	"116201": [ { 'entity_type': 8, 'entity_id': 201011001, 'entity_quantity': 5 } ],
	"116301": [ { 'entity_type': 8, 'entity_id': 201011001, 'entity_quantity': 10 } ],
	"117101": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 5 } ],
	"117201": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 5 } ],
	"117301": [ { 'entity_type': 17, 'entity_id': 10101, 'entity_quantity': 10 } ],
	"118101": [ { 'entity_type': 8, 'entity_id': 201019041, 'entity_quantity': 5 } ],
	"118201": [ { 'entity_type': 8, 'entity_id': 113001003, 'entity_quantity': 200 } ],
	"118301": [ { 'entity_type': 8, 'entity_id': 103001003, 'entity_quantity': 200 } ],
	"119101": [ { 'entity_type': 8, 'entity_id': 202004005, 'entity_quantity': 50 } ],
	"119201": [ { 'entity_type': 8, 'entity_id': 202004005, 'entity_quantity': 50 } ],
	"119301": [ { 'entity_type': 8, 'entity_id': 202004005, 'entity_quantity': 50 } ],
	"120101": [ { 'entity_type': 8, 'entity_id': 116001001, 'entity_quantity': 10 } ],
	"120201": [ { 'entity_type': 8, 'entity_id': 118001001, 'entity_quantity': 10 } ],
	"120301": [ { 'entity_type': 8, 'entity_id': 122001001, 'entity_quantity': 10 } ],
	"121101": [ { 'entity_type': 8, 'entity_id': 117001001, 'entity_quantity': 10 } ],
	"121201": [ { 'entity_type': 8, 'entity_id': 119001001, 'entity_quantity': 10 } ],
	"121301": [ { 'entity_type': 8, 'entity_id': 123001001, 'entity_quantity': 10 } ],
	"122101": [ { 'entity_type': 8, 'entity_id': 111002001, 'entity_quantity': 1 } ],
	"122201": [ { 'entity_type': 8, 'entity_id': 111002001, 'entity_quantity': 1 } ],
	"122301": [ { 'entity_type': 8, 'entity_id': 111002001, 'entity_quantity': 1 } ],
	"123101": [ { 'entity_type': 8, 'entity_id': 104003002, 'entity_quantity': 1 } ],
	"123201": [ { 'entity_type': 8, 'entity_id': 104003002, 'entity_quantity': 1 } ],
	"123301": [ { 'entity_type': 8, 'entity_id': 104003002, 'entity_quantity': 1 } ],
	"124101": [ { 'entity_type': 8, 'entity_id': 104001001, 'entity_quantity': 50 } ],
	"124201": [ { 'entity_type': 8, 'entity_id': 104001001, 'entity_quantity': 50 } ],
	"124301": [ { 'entity_type': 8, 'entity_id': 104001001, 'entity_quantity': 50 } ],
	"125101": [ { 'entity_type': 8, 'entity_id': 201014004, 'entity_quantity': 100 } ],
	"125201": [ { 'entity_type': 8, 'entity_id': 201014002, 'entity_quantity': 10 } ],
	"125301": [ { 'entity_type': 8, 'entity_id': 201014002, 'entity_quantity': 10 } ],
	"126101": [ { 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 2000 } ],
	"126201": [ { 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 3000 } ],
	"126301": [ { 'entity_type': 23, 'entity_id': 0, 'entity_quantity': 4000 } ]
}

const SkipQuestList = [
  100010102,
  100010103,
  100010104,
  100010105,
  100010106,
  100010107,
  100010108,
  100010201,
  100010202,
  100010203,
  100010204,
  100010205,
  100010206,
  100010207,
  100010208,
  100010301,
  100010302,
  100010303,
  100010304,
  100010305,
  100010306,
  100010307,
  100010308,
  100020101,
  100020102,
  100020103,
  100020104,
  100020105,
  100020106,
  100020107,
  100020108,
  100020151,
  100020152,
  100020201,
  100020202,
  100020203,
  100020204,
  100020205,
  100020206,
  100020207,
  100020208,
  100020251,
  100020252,
  100020301,
  100020302,
  100020303,
  100020304,
  100020305,
  100020306,
  100020307,
  100020308,
  100020351,
  100020352,
  100030101,
  100030102,
  100030103,
  100030104,
  100030105,
  100030106,
  100030107,
  100030108,
  100030109,
  100030110,
  100030201,
  100030202,
  100030203,
  100030204,
  100030205,
  100030206,
  100030207,
  100030208,
  100030209,
  100030210,
  100030301,
  100030302,
  100030303,
  100030304,
  100030305,
  100030306,
  100030307,
  100030308,
  100030309,
  100030310,
  100040101,
  100040102,
  100040103,
  100040104,
  100040105,
  100040106,
  100040107,
  100040108,
  100040109,
  100040110,
  100040111,
  100040112,
  100040113,
  100040151,
  100040152,
  100040201,
  100040202,
  100040203,
  100040204,
  100040205,
  100040206,
  100040207,
  100040208,
  100040209,
  100040210,
  100040211,
  100040212,
  100040213,
  100040251,
  100040252,
  100040301,
  100040302,
  100040303,
  100040304,
  100040305,
  100040306,
  100040307,
  100040308,
  100040309,
  100040310,
  100040311,
  100040312,
  100040313,
  100040351,
  100040352,
  100050101,
  100050102,
  100050103,
  100050104,
  100050105,
  100050106,
  100050107,
  100050108,
  100050109,
  100050201,
  100050202,
  100050203,
  100050204,
  100050205,
  100050206,
  100050207,
  100050208,
  100050209,
  100050301,
  100050302,
  100050303,
  100050304,
  100050305,
  100050306,
  100050307,
  100050308,
  100050309,
  100060101,
  100060102,
  100060103,
  100060104,
  100060105,
  100060106,
  100060107,
  100060108,
  100060109,
  100060110,
  100060111,
  100060112,
  100060113,
  100060114,
  100060151,
  100060152,
  100060201,
  100060202,
  100060203,
  100060204,
  100060205,
  100060206,
  100060207,
  100060208,
  100060209,
  100060210,
  100060211,
  100060212,
  100060213,
  100060214,
  100060251,
  100060252,
  100060301,
  100060302,
  100060303,
  100060304,
  100060305,
  100060306,
  100060307,
  100060308,
  100060309,
  100060310,
  100060311,
  100060312,
  100060313,
  100060314,
  100060351,
  100060352,
  100070101,
  100070102,
  100070103,
  100070104,
  100070105,
  100070106,
  100070107,
  100070108,
  100070109,
  100070110,
  100070111,
  100070112,
  100070151,
  100070152,
  100070201,
  100070202,
  100070203,
  100070204,
  100070205,
  100070206,
  100070207,
  100070208,
  100070209,
  100070210,
  100070211,
  100070212,
  100070251,
  100070252,
  100070301,
  100070302,
  100070303,
  100070304,
  100070305,
  100070306,
  100070307,
  100070308,
  100070309,
  100070310,
  100070311,
  100070312,
  100070351,
  100070352,
  100080101,
  100080102,
  100080103,
  100080104,
  100080105,
  100080106,
  100080107,
  100080108,
  100080109,
  100080110,
  100080111,
  100080112,
  100080151,
  100080152,
  100080201,
  100080202,
  100080203,
  100080204,
  100080205,
  100080206,
  100080207,
  100080208,
  100080209,
  100080210,
  100080211,
  100080212,
  100080251,
  100080252,
  100080301,
  100080302,
  100080303,
  100080304,
  100080305,
  100080306,
  100080307,
  100080308,
  100080309,
  100080310,
  100080311,
  100080312,
  100080351,
  100080352,
  100090101,
  100090102,
  100090103,
  100090104,
  100090105,
  100090106,
  100090107,
  100090151,
  100090201,
  100090202,
  100090203,
  100090204,
  100090205,
  100090206,
  100090207,
  100090251,
  100090301,
  100090302,
  100090303,
  100090304,
  100090305,
  100090306,
  100090307,
  100090351,
  100100101,
  100100102,
  100100103,
  100100104,
  100100105,
  100100106,
  100100107,
  100100151,
  100100152,
  100100201,
  100100202,
  100100203,
  100100204,
  100100205,
  100100206,
  100100207,
  100100251,
  100100252,
  100100301,
  100100302,
  100100303,
  100100304,
  100100305,
  100100306,
  100100307,
  100100351,
  100100352
]

const SkipStoryList = [
  1000102,
  1000103,
  1000104,
  1000105,
  1000106,
  1000107,
  1000108,
  1000109,
  1000110,
  1000111,
  1000201,
  1000202,
  1000203,
  1000204,
  1000205,
  1000206,
  1000207,
  1000208,
  1000209,
  1000210,
  1000301,
  1000302,
  1000303,
  1000304,
  1000305,
  1000306,
  1000307,
  1000308,
  1000309,
  1000310,
  1000311,
  1000401,
  1000402,
  1000403,
  1000404,
  1000405,
  1000406,
  1000407,
  1000408,
  1000409,
  1000410,
  1000411,
  1000412,
  1000501,
  1000502,
  1000503,
  1000504,
  1000505,
  1000506,
  1000507,
  1000508,
  1000509,
  1000601,
  1000602,
  1000603,
  1000604,
  1000605,
  1000606,
  1000607,
  1000608,
  1000609,
  1000701,
  1000702,
  1000703,
  1000704,
  1000705,
  1000706,
  1000707,
  1000708,
  1000709,
  1000801,
  1000802,
  1000803,
  1000804,
  1000805,
  1000806,
  1000807,
  1000808,
  1000901,
  1000902,
  1000903,
  1000904,
  1000905,
  1000906,
  1000907,
  1000908,
  1000909,
  1001001,
  1001002,
  1001003,
  1001004,
  1001005,
  1001006,
  1001007,
  1001008,
  1001009
]

async function CampaignSkip(res) {
	res.mid.Data = {
		'result_state': 1,
		'update_data_list': {
			'quest_list': [],
			'quest_story_list': []
		}
	}
	
	const AddLevel = 60 - res.mid.Persist['User']['level'];
	if (AddLevel > 0) {
		res.mid.Persist['User']['crystal'] += AddLevel * 50;
		res.mid.Persist['User']['level'] = 60;
		res.mid.Persist['User']['exp'] = global.Master.UserLevel["60"]['_TotalExp'];
		res.mid.Persist['User']['stamina_single'] = 999;
		res.mid.Persist['User']['stamina_multi'] = 99;
	}
	
	const QuestList = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "quest_list");
	
	for (const x in SkipQuestList) {
		if (QuestList.findIndex(y => y.quest_id == SkipQuestList[x]) != -1) { continue; }
		const FirstClear = GetFirstClearSet(SkipQuestList[x]);
		for (const z in FirstClear) { res.mid.ItemList.push(FirstClear[z]); }
		const MissionClear = GetMissionClearSet(SkipQuestList[x]);
		for (const z in MissionClear) { res.mid.ItemList.push(MissionClear[z]); }
		
		res.mid.Data['update_data_list']['quest_list'].push({
			'quest_id': SkipQuestList[x],
			'state': 3,
			'is_mission_clear_1': 1,
			'is_mission_clear_2': 1,
			'is_mission_clear_3': 1,
			'play_count': 1,
			'daily_play_count': 0,
			'weekly_play_count': 0,
			'last_daily_reset_time': 0,	
			'last_weekly_reset_time': 0,
			'is_appear': 1,
			'best_clear_time': -1
		});
	}
	
	const StoryList = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "quest_story_list");
	
	for (const x in SkipStoryList) {
		if (StoryList.findIndex(y => y.quest_story_id == SkipStoryList[x]) != -1) { continue; }
		res.mid.ItemList.push({ 'type': 23, 'id': 0, 'quantity': 25 });
		res.mid.Data['update_data_list']['quest_story_list'].push({
			'quest_story_id': SkipStoryList[x],
			'state': 1
		});
		if (HasRewardCharacter(SkipStoryList[x]) == true) {
			for (const y in RewardCharacter[String(SkipStoryList[x])]) {
				res.mid.ItemList.push({ 'type': 1, 'id': RewardCharacter[String(SkipStoryList[x])][y], 'quantity': 1 });
			}
		}
		if (HasRewardDragon(SkipStoryList[x]) == true) {
			for (const y in RewardDragon[String(SkipStoryList[x])]) {
				res.mid.ItemList.push({ 'type': 7, 'id': RewardDragon[String(SkipStoryList[x])][y], 'quantity': 1 });
			}
		}
		/*
		if (HasRewardFacility(SkipStoryList[x]) == true) {
			console.log("Adding Facility");
			for (const y in RewardFacility[String(SkipStoryList[x])]) {
				res.mid.ItemList.push({ 'type': 9, 'id': RewardFacility[String(SkipStoryList[x])][y], 'quantity': 1 });
			}
		}
		*/
	}
	res.mid.Persist['User']['build_time_point'] += 300;
	
	const BuildList = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "build_list");
	const DoubleFacilityID = [ 100401, 100402, 100403, 100404, 100405, 100501, 100502, 100503,
		100504, 100505, 100506, 100507, 100508, 100509 ];
	const DracolithFacilityID = [ 100601, 100602, 100603, 100604, 100605 ];
	for (const x in DoubleFacilityID) {
		let CurrentlyHas = 0;
		for (const z in BuildList) {
			if (BuildList[z]['plant_id'] == DoubleFacilityID[x]) { CurrentlyHas += 1; }
		}
		if (CurrentlyHas == 1) {
			res.mid.ItemList.push({ 'type': 9, 'id': DoubleFacilityID[x], 'quantity': 1, 'level': 10 });
		}
		else if (CurrentlyHas == 0) {
			res.mid.ItemList.push({ 'type': 9, 'id': DoubleFacilityID[x], 'quantity': 1, 'level': 10 });
			res.mid.ItemList.push({ 'type': 9, 'id': DoubleFacilityID[x], 'quantity': 1, 'level': 10 });
		}
	}
	for (const x in DracolithFacilityID) {
		let CurrentlyHas = 0;
		for (const z in BuildList) {
			if (BuildList[z]['plant_id'] == DracolithFacilityID[x]) { CurrentlyHas += 1; }
		}
		if (CurrentlyHas == 0) {
			res.mid.ItemList.push({ 'type': 9, 'id': DracolithFacilityID[x], 'quantity': 1, 'level': 10 });
		}
	}
	
	return;
}

module.exports = { GetInfo, DropSummary, RoomTypeMatch, GetFirstClearSet, GetMissionClearSet, GetDrops, GetAreaList, AreaOdds, GetSubstage, GetEarnPoint, ReadStory, ClearStory, CampaignSkip, RewardChest }
