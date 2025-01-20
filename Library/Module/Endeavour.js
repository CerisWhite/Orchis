const fs = require('fs');

/*
const Normal = JSON.parse(fs.readFileSync('./Library/Master/MissionNormalData.json'));
const Beginner = JSON.parse(fs.readFileSync('./Library/Master/MissionBeginnerData.json'));
const Daily = JSON.parse(fs.readFileSync('./Library/Master/MissionDailyData.json'));
const Drill = JSON.parse(fs.readFileSync('./Library/Master/MissionDrillData.json'));
const Period = JSON.parse(fs.readFileSync('./Library/Master/MissionPeriodData.json'));
const Special = JSON.parse(fs.readFileSync('./Library/Master/MissionSpecialData.json'));
const Campaign = JSON.parse(fs.readFileSync('./Library/Master/MissionMainStoryData.json'));
const Memory = JSON.parse(fs.readFileSync('./Library/Master/MissionMemoryEventData.json'));
const Album = JSON.parse(fs.readFileSync('./Library/Master/MissionAlbumData.json'));
*/
const EndeavourData = JSON.parse(fs.readFileSync('./Library/Event/EndeavourData.json'));

function MissionNotice() {
	const Data = {
		'is_update': 0,
		'receivable_reward_count': 0,
		'new_complete_mission_id_list': [],
		'pickup_mission_count': 0,
		'all_mission_count': 0,
		'completed_mission_count': 0,
		'current_mission_id': 0
	}
	
	return {
		'normal_mission_notice': { 'is_update': 0, 'receivable_reward_count': 0, 'new_complete_mission_id_list': [], 'pickup_mission_count': 0, 'all_mission_count': 252, 'completed_mission_count': 252, 'current_mission_id': 0 },
		'daily_mission_notice': { 'is_update': 0, 'receivable_reward_count': 0, 'new_complete_mission_id_list': [], 'pickup_mission_count': 0, 'all_mission_count': 9, 'completed_mission_count': 9, 'current_mission_id': 0 },
		'period_mission_notice': { 'is_update': 0, 'receivable_reward_count': 0, 'new_complete_mission_id_list': [], 'pickup_mission_count': 0, 'all_mission_count': 10, 'completed_mission_count': 10, 'current_mission_id': 0 },
		'beginner_mission_notice': Data,
		'special_mission_notice': { 'is_update': 0, 'receivable_reward_count': 0, 'new_complete_mission_id_list': [], 'pickup_mission_count': 0, 'all_mission_count': 56, 'completed_mission_count': 56, 'current_mission_id': 0 },
		'main_story_mission_notice': Data,
		'memory_event_mission_notice': Data,
		'drill_mission_notice': Data,
		'album_mission_notice': { 'is_update': 0, 'receivable_reward_count': 0, 'new_complete_mission_id_list': [], 'pickup_mission_count': 0, 'all_mission_count': 22, 'completed_mission_count': 22, 'current_mission_id': 0 }
	}
}
function MissionList(res) {
	return {
		'normal_mission_list': res.mid.Persist['Endeavour']['Normal'],
		'daily_mission_list': res.mid.Persist['Endeavour']['Daily'],
		'period_mission_list': res.mid.Persist['Endeavour']['Period'],
		'beginner_mission_list': res.mid.Persist['Endeavour']['Beginner'],
		'special_mission_list': res.mid.Persist['Endeavour']['Special'],
		'main_story_mission_list': res.mid.Persist['Endeavour']['Campaign'],
		'memory_event_mission_list': res.mid.Persist['Endeavour']['Memory'],
		'album_mission_list': res.mid.Persist['Endeavour']['Album'],
		'current_main_story_mission': {
			'main_story_mission_group_id': 11,
			'main_story_mission_state_list': [
				{
					'main_story_mission_id': 10110101,
					'state': 2
				},
				{
					'main_story_mission_id': 10110201,
					'state': 2
				},
				{
					'main_story_mission_id': 10110301,
					'state': 2
				},
				{
					'main_story_mission_id': 10110401,
					'state': 2
				},
				{
					'main_story_mission_id': 10110501,
					'state': 2
				}
			]
		},
		'mission_notice': MissionNotice(),
		'special_mission_purchased_group_id_list': []
	}
}

async function Judge(res, URL) {
	let Updated = {
		'Daily': false,
		'Normal': false
	};
	res.mid.Persist['Endeavour']['Daily'].forEach((Daily) => {
		let Complete = 0;
		if (Daily['state'] != 0) { return; }
		const MissionData = Object.values(global.Master.MissionDailyData).find(z => z._Id == Daily['daily_mission_id']);
		switch(Daily['daily_mission_id']) {
			case 15070101:
				if (URL == "/shop/item_summon_exec") {
					Daily['progress'] = 1;
					Daily['state'] = 1;
					Updated['Daily'] = true;
				}
			break;
			case 15070201:
				if (URL == "/fort/get_multi_income" && res.mid.Data['add_coin_list'].length > 0) {
					Daily['progress'] = 1;
					Daily['state'] = 1;
					Updated['Daily'] = true;
				}
			break;
			case 15070301:
				if (res.mid.Persist['Endeavour']['Tracker']['Daily']['Quests'] >= MissionData['_CompleteValue']) {
					Daily['progress'] = MissionData['_CompleteValue'];
					Daily['state'] = 1;
					res.mid.Persist['Endeavour']['Daily'].push({
						'daily_mission_id': 15070401,
						'progress': 0,
						'state': 0,
						'day_no': Daily['day_no'],
						'is_lock_receive_reward': 0,
						'is_pickup': 0,
						'start_date': Daily['start_date'],
						'end_date': Daily['end_date']
					});
					Updated['Daily'] = true;
				}
			break;
			case 15070401:
				if (res.mid.Persist['Endeavour']['Tracker']['Daily']['Quests'] >= MissionData['_CompleteValue']) {
					Daily['progress'] = MissionData['_CompleteValue'];
					Daily['state'] = 1;
					res.mid.Persist['Endeavour']['Daily'].push({
						'daily_mission_id': 15070501,
						'progress': 0,
						'state': 0,
						'day_no': Daily['day_no'],
						'is_lock_receive_reward': 0,
						'is_pickup': 0,
						'start_date': Daily['start_date'],
						'end_date': Daily['end_date']
					});
					Updated['Daily'] = true;
				}
			break;
			case 15070501:
				if (res.mid.Persist['Endeavour']['Tracker']['Daily']['Quests'] >= MissionData['_CompleteValue']) {
					Daily['progress'] = MissionData['_CompleteValue'];
					Daily['state'] = 1;
					Updated['Daily'] = true;
				}
			break;
			case 15070601:
				let Complete = 0;
				res.mid.Persist['Endeavour']['Daily'].forEach((Check) => {
					if (Check['state'] != 0) { Complete += 1; }
				});
				if (Complete >= MissionData['_CompleteValue']) {
					Daily['progress'] = MissionData['_CompleteValue'];
					Daily['state'] = 1;
					Updated['Daily'] = true;
				}
			break;
		}
	});
	
	if (res.mid.Data['update_data_list'] != undefined) {
		Object.keys(Updated).forEach((Type) => { if (Updated[Type] == true) { res.mid.Data['update_data_list']['mission_notice'] = {}; } });
		
		if (Updated['Daily'] == true) {
			res.mid.Data['update_data_list']['mission_notice']['daily_mission_notice'] = {
				'is_update': 1,
				'receivable_reward_count': 0,
				'new_complete_mission_id_list': [],
				'pickup_mission_count': 0,
				'all_mission_count': 5,
				'completed_mission_count': 5,
				'current_mission_id': 0
			}
		}
	}
	return;
}

function MedalCheck(QuestID) {
	let MedalID = 0;
	/*
	100101 = Dragon Trial Master; 100201 = Astral Raid Master;
	100301 = Void Dragon Standard; 100302 = Void Dragon Expert;
	100401 = Void Chimera Standard; 100402 = Void Chimera Expert;
	100501 = High Dragon Standard; 100502 = High Dragon Expert; 100503 = High Dragon Master;
	100601 = Agito Standard; 100602 = Agito Expert; 100603 = Agito Master;
	100701 = Agito Legend;
	100801 = SinDom Standard; 100802 = SinDom Expert; 100803 = SinDom Master;
	100901 = Morsayati Reckoning;
	101001 = TotM Standard; 101002 = TotM Expert; 101003 = TotM Master;
	101101 = SinDom Legend;
	101201 = Kaleido 50; 101202 = Kaleido 60;
	101301 = Primal Dragon Standard; 101302 = Primal Dragon Expert; 101303 = Primal Dragon Master;
	*/
	// Relevant Quest IDs:
	const DTMaster = [203010104, 203020104, 203030104, 203040104, 203050104];
	const Astral = [217010104, 217020104, 217030104, 217040104, 217050104,
					217060104, 217070104, 217080104, 217090104];
	const VDStandard = [227010102, 227020102, 227030102, 227040102, 227040102,
						227060102, 227070102, 227080102, 227090102, 227100102,
						227110102, 300040101, 300041101, 300080101, 300081101,
						300120101, 300121101, 300130101, 300131101, 300180101,
						300181101];
	const VDExpert = [300040102, 300041102, 300080102, 300081102, 300120102,
					  300121102, 300130102, 300131102, 300180102, 300181102];
	const VCStandard = [300220101, 300221101, 300240101, 300241101, 300280101,
						300281101, 300310101, 300311101, 300320101, 300321101];
	const VCExpert = [300220102, 300221102, 300240102, 300241102, 300280102,
					  300281102, 300310102, 300311102, 300320102, 300321102];
	const HDTStandard = [210010101, 210020101, 210030101, 210040101, 210050101,
						 210011101, 210021101, 210031101, 210041101, 210051101];
	const HDTExpert = [210010103, 210020103, 210030103, 210040103, 210050103,
					   210011103, 210021103, 210031103, 210041103, 210051103,
					   227010103, 227020103, 227030103, 227040103, 227050103,
					   227060103, 227070103, 227080103, 227090103, 227100103,
					   227110103];
	const HDTMaster = [210010104, 210020104, 210030104, 210040104, 210050104,
					   210011104, 210021104, 210031104, 210041104, 210051104,
					   227060104, 227070104, 227080104, 227090104, 227100104,
					   227110104];
	const AgitoStandard = [219010101, 219020101, 219030101, 219040101, 219050101,
						   219011101, 219021101, 219031101, 219041101, 219051101];
	const AgitoExpert = [219010102, 219020102, 219030102, 219040102, 219050102,
						 219011102, 219021102, 219031102, 219041102, 219051102];
	const AgitoMaster = [219010103, 219020103, 219030103, 219040103, 219050103,
						 219011103, 219021103, 219031103, 219041103, 219051103];
	const AgitoLegend = [225010101, 225020101, 225030101, 225040101, 225050101,
						 225011101, 225021101, 225031101, 225041101, 225051101];
	const SDStandard = [228010101, 228020101, 228030101, 228040101, 228050101,
						228011101, 228021101, 228031101, 228041101, 228051101];
	const SDExpert = [228010102, 228020102, 228030102, 228040102, 228050102,
					  228011102, 228021102, 228031102, 228041102, 228051102];
	const SDMaster = [228010103, 228020103, 228030103, 228040103, 228050103,
					  228011103, 228021103, 228031103, 228041103, 228051103];
	const SDLegend = [232010101, 232020101, 232030101, 232040101, 232050101,
					  232011101, 232021101, 232031101, 232041101, 232051101];
	const Morsayati = [226010101, 226011101]; // Kaleido 50 = 998; Kaleido 60 = 999;
	const PDStandard = [233010101, 233020101, 233030101, 233040101, 233050101,
						233011101, 233021101, 233031101, 233041101, 233051101];
	const PDExpert = [233010102, 233020102, 233030102, 233040102, 233050102,
					  233011102, 233021102, 233031102, 233041102, 233051102];
	const PDMaster = [233010103, 233020103, 233030103, 233040103, 233050103,
					  233011103, 233021103, 233031103, 233041103, 233051103];
	const TotMStandard = [];
	const TotMExpert = [];
	const TotMMaster = [];
	
	if (DTMaster.includes(QuestID)) { MedalID = 100101; }
	else if (Astral.includes(QuestID)) { MedalID = 100201; }
	else if (VDStandard.includes(QuestID)) { MedalID = 100301; }
	else if (VDExpert.includes(QuestID)) { MedalID = 100302; }
	else if (VCStandard.includes(QuestID)) { MedalID = 100401; }
	else if (VCExpert.includes(QuestID)) { MedalID = 100402; }
	else if (HDTStandard.includes(QuestID)) { MedalID = 100501; }
	else if (HDTExpert.includes(QuestID)) { MedalID = 100502; }
	else if (HDTMaster.includes(QuestID)) { MedalID = 100503; }
	else if (AgitoStandard.includes(QuestID)) { MedalID = 100601; }
	else if (AgitoExpert.includes(QuestID)) { MedalID = 100602; }
	else if (AgitoMaster.includes(QuestID)) { MedalID = 100603; }
	else if (AgitoLegend.includes(QuestID)) { MedalID = 100701; }
	else if (SDStandard.includes(QuestID)) { MedalID = 100801; }
	else if (SDExpert.includes(QuestID)) { MedalID = 100802; }
	else if (SDMaster.includes(QuestID)) { MedalID = 100803; }
	else if (SDLegend.includes(QuestID)) { MedalID = 101101; }
	else if (Morsayati.includes(QuestID)) { MedalID = 100901; }
	else if (PDStandard.includes(QuestID)) { MedalID = 101301; }
	else if (PDExpert.includes(QuestID)) { MedalID = 101302; }
	else if (PDMaster.includes(QuestID)) { MedalID = 101303; }
	else if (TotMStandard.includes(QuestID)) { MedalID = 101001; }
	else if (TotMExpert.includes(QuestID)) { MedalID = 101002; }
	else if (TotMMaster.includes(QuestID)) { MedalID = 101003; }
	else if (QuestID == 998) { MedalID = 101201; }
	else if (QuestID == 999) { MedalID = 101202; }
	
	return MedalID;
}

module.exports = { MissionNotice, MissionList, Judge, MedalCheck }