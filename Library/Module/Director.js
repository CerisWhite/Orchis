function GenerateOdds(BannerList) {
	let Data = [];
	for (let x in BannerList) {
		let Template = {
			'summon_id': BannerList[x]['summon_id'],
			'odds': {
				'required_count_to_next': 999,
				'normal': {
					'rarity_list': [
						{'rarity': 5, 'total_rate': "5.00%"},
						{'rarity': 4, 'total_rate': "16.00%"},
						{'rarity': 3, 'total_rate': "79.00%"}
					],
					'rarity_group_list': [],
					'unit': {
						'chara_odds_list': [
							{'pickup': false, 'rarity': 5, 'unit_list': []},
							{'pickup': false, 'rarity': 4, 'unit_list': []},
							{'pickup': false, 'rarity': 3, 'unit_list': []}
						],
						'dragon_odds_list': [
							{'pickup': false, 'rarity': 5, 'unit_list': []},
							{'pickup': false, 'rarity': 4, 'unit_list': []},
							{'pickup': false, 'rarity': 3, 'unit_list': []}
						]
					}
				},
				'guarantee': {
					'rarity_list': [],
					'rarity_group_list': [],
					'unit': {
						'chara_odds_list': [],
						'dragon_odds_list': []
					}
				}
			},
			'prize_odds': {
				'normal': [],
				'guarantee': []
			}
		}
		for (let y in BannerList[x]['characters']) {
			const Current = BannerList[x]['characters'][y];
			const Rarity = global.Module.Character.GetInfo(Current, "_Rarity");
			let IsBoosted = false; if (BannerList[x]['boost_rate'].includes(Current)) { IsBoosted = true; }
			let OddsTemplate = {}
			switch(Rarity) {
				case 5:
					if (IsBoosted) { OddsTemplate = {'id': Current, 'rate': "0.600%"}; }
					else { OddsTemplate = {'id': Current, 'rate': "0.021%"}; }
					Template['odds']['normal']['unit']['chara_odds_list'][0]['unit_list'].push(OddsTemplate);
					break;
				case 4:
					if (IsBoosted) { OddsTemplate = {'id': Current, 'rate': "2.00%"}; }
					else { OddsTemplate = {'id': Current, 'rate': "0.194%"}; }
					Template['odds']['normal']['unit']['chara_odds_list'][1]['unit_list'].push(OddsTemplate);
					break;
				case 3:
					if (IsBoosted) { OddsTemplate = {'id': Current, 'rate': "5.00%"}; }
					else { OddsTemplate = {'id': Current, 'rate': "2.494%"}; }
					Template['odds']['normal']['unit']['chara_odds_list'][2]['unit_list'].push(OddsTemplate);
					break;
			}
		}
		for (let z in BannerList[x]['dragons']) {
			const Current = BannerList[x]['dragons'][z];
			const Rarity = global.Module.Dragon.GetInfo(Current, "_Rarity");
			let IsBoosted = false; if (BannerList[x]['boost_rate'].includes(Current)) { IsBoosted = true; }
			let OddsTemplate = {}
			switch(Rarity) {
				case 5:
					if (IsBoosted) { OddsTemplate = {'id': Current, 'rate': "0.600%"}; }
					else { OddsTemplate = {'id': Current, 'rate': "0.046%"}; }
					Template['odds']['normal']['unit']['dragon_odds_list'][0]['unit_list'].push(OddsTemplate);
					break;
				case 4:
					if (IsBoosted) { OddsTemplate = {'id': Current, 'rate': "5.00%"}; }
					else { OddsTemplate = {'id': Current, 'rate': "0.745%"}; }
					Template['odds']['normal']['unit']['dragon_odds_list'][1]['unit_list'].push(OddsTemplate);
					break;
				case 3:
					if (IsBoosted) { OddsTemplate = {'id': Current, 'rate': "5.00%"}; }
					else { OddsTemplate = {'id': Current, 'rate': "2.106%"}; }
					Template['odds']['normal']['unit']['dragon_odds_list'][2]['unit_list'].push(OddsTemplate);
					break;
			}
		}
		Data.push(Template);
	}
	return Data;
}
function KeyIDByTicket(ID) {
	let TicketKeyID = 0;
	switch(ID) {
		case 10101: TicketKeyID = 1; break;
		case 10102: TicketKeyID = 2; break;
		case 10202: TicketKeyID = 3; break;
		case 10301: TicketKeyID = 4; break;
		case 10302: TicketKeyID = 5; break;
		case 10401: TicketKeyID = 6; break;
		case 10402: TicketKeyID = 7; break;
		case 10403: TicketKeyID = 8; break;
		case 10501: TicketKeyID = 9; break;
		case 10502: TicketKeyID = 10; break;
	}
	return TicketKeyID;
}
function GetQuestRotation(QuestRotationSet, EventList) {
	let QuestRotation = [];
	const RightNow = Math.floor(Date.now()/1000)
	const TypeList = Object.keys(QuestRotationSet);
	for (let y in QuestRotationSet) {
		if (QuestRotationSet[y]['start'] < RightNow && QuestRotationSet[y]['end'] > RightNow) {
			QuestRotation.push({
				'schedule_detail_id': QuestRotationSet[y]['detail_id'],
				'schedule_group_id': QuestRotationSet[y]['group_id'],
				'drop_bonus_percent': QuestRotationSet[y]['drop_multiplier'] * 100,
				'interval_type': QuestRotationSet[y]['interval'],
				'start_date': QuestRotationSet[y]['start'],
				'end_date': QuestRotationSet[y]['end'],
				'limit_shop_goods_type': QuestRotationSet[y]['limit_shop_goods_type']
			});
		}
	}
	for (let z in EventList['astralraid']) {
		if (EventList['astralraid'][z]['start'] < RightNow && EventList['astralraid'][z]['end'] > RightNow) {
			QuestRotation.push({
				'schedule_detail_id': EventList['astralraid'][z]['detail_id'],
				'schedule_group_id': EventList['astralraid'][z]['group_id'],
				'drop_bonus_percent': EventList['astralraid'][z]['drop_multiplier'] * 100,
				'interval_type': EventList['astralraid'][z]['interval'],
				'start_date': EventList['astralraid'][z]['start'],
				'end_date': EventList['astralraid'][z]['end'],
				'limit_shop_goods_type': EventList['astralraid'][z]['limit_shop_goods_type']
			});
		}
	}
	for (let z in EventList['totm']) {
		if (EventList['totm'][z]['start'] < RightNow && EventList['totm'][z]['end'] > RightNow) {
			QuestRotation.push({
				'schedule_detail_id': EventList['totm'][z]['detail_id'],
				'schedule_group_id': EventList['totm'][z]['group_id'],
				'drop_bonus_percent': EventList['totm'][z]['drop_multiplier'] * 100,
				'interval_type': EventList['totm'][z]['interval'],
				'start_date': EventList['totm'][z]['start'],
				'end_date': EventList['totm'][z]['end'],
				'limit_shop_goods_type': EventList['totm'][z]['limit_shop_goods_type']
			});
		}
	}
	return QuestRotation;
}

async function LoginBonus(res, BonusList, DragonItem, ResetTimes, DayStart, DayEnd, DayNumber) {
	res.mid.Data = {
		'support_reward': [],
		'login_bonus_list': [],
		'login_lottery_reward_list': [],
		'dragon_contact_free_gift_count': 0,
		'monthly_wall_receive_list': [],
		'penalty_data': [],
		'exchange_summom_point_list': [],
		'before_exchange_summon_item_quantity': 0,
		'server_time': global.ServerTime,
		'update_data_list': {
			'user_data': res.mid.Persist['User'],
			'diamond_data': { 'free_diamond': 0, 'paid_diamond': res.mid.Persist['Diamantium'] },
			'gather_item_list': []
		}
	}
	
	if (res.mid.Persist['LoginBonus']['Display'] == true) {
		res.mid.ItemList.push({'type': 16, 'id': 0, 'quantity': 12});
		const Day = res.mid.Persist['LoginBonus']['17']['DayCount'] + 1;
		res.mid.Persist['LoginBonus']['17']['DayCount'] = Day;
		let RewardDay = Day % 10;
		if (RewardDay == 0) { RewardDay = 10; }
		const RewardData = global.Master.LoginBonusData['17'][String(RewardDay)];
		res.mid.Data['login_bonus_list'].push({
			'total_login_day': Day,
			'reward_code': 0,
			'reward_day': RewardDay,
			'login_bonus_id': 17,
			'entity_type': RewardData['entity_type'],
			'entity_id': RewardData['entity_id'],
			'entity_quantity': RewardData['entity_quantity'],
			'entity_level': RewardData['entity_level'],
			'entity_limit_break_count': RewardData['entity_limit_break_count']
		});
		for (const x in BonusList) {
			if (BonusList[x]['start_time'] < global.ServerTime && BonusList[x]['end_time'] > global.ServerTime) {
				const BonusID = String(BonusList[x]['id']);
				if (res.mid.Persist['LoginBonus'][BonusID] == undefined) {
					res.mid.Persist['LoginBonus'][BonusID] = { 'DayCount': 0 }
				}
				const BonusReward = global.Master.LoginBonusData[BonusID][String(res.mid.Persist['LoginBonus'][BonusID]['DayCount'] + 1)];
				if (BonusReward != undefined) {
					res.mid.Persist['LoginBonus'][BonusID]['DayCount'] += 1;
					res.mid.Data['login_bonus_list'].push({
						'total_login_day': res.mid.Persist['LoginBonus'][BonusID]['DayCount'],
						'reward_code': 0,
						'reward_day': res.mid.Persist['LoginBonus'][BonusID]['DayCount'],
						'login_bonus_id': BonusList[x]['id'],
						'entity_type': BonusReward['entity_type'],
						'entity_id': BonusReward['entity_id'],
						'entity_quantity': BonusReward['entity_quantity'],
						'entity_level': BonusReward['entity_level'],
						'entity_limit_break_count': BonusReward['entity_limit_break_count']
					});
				}
			}
		}
		
		for (const x in res.mid.Data['login_bonus_list']) {
			res.mid.ItemList.push({
				'type': res.mid.Data['login_bonus_list'][x]['entity_type'],
				'id': res.mid.Data['login_bonus_list'][x]['entity_id'],
				'quantity': res.mid.Data['login_bonus_list'][x]['entity_quantity'],
				'level': res.mid.Data['login_bonus_list'][x]['level'],
				'limit_break_count': res.mid.Data['login_bonus_list'][x]['limit_break_count']
			});
		}
		res.mid.Persist['Summon']['ItemCount'] = 0;
		res.mid.Persist['Summon']['Tenfold'] += 1;
		res.mid.Persist['Summon']['DailyCount'] = 0;
		res.mid.Persist['DMode']['RecoveryCount'] = 0;
		res.mid.Persist['DragonGift'] = [
			{
				"dragon_gift_id": 10001,
				"price": 0,
				"is_buy": 1
			},
			{
				"dragon_gift_id": 10002,
				"price": 1500,
				"is_buy": 1
			},
			{
				"dragon_gift_id": 10003,
				"price": 4000,
				"is_buy": 1
			},
			{
				"dragon_gift_id": 10004,
				"price": 8000,
				"is_buy": 1
			},
			{
				"dragon_gift_id": DragonItem,
				"price": 12000,
				"is_buy": 1
			}
		];
		res.mid.Persist['Endeavour']['Daily'] = [
			{ 'daily_mission_id': 15070101, 'progress': 0, 'state': 0, 'day_no': DayNumber, 'is_lock_receive_reward': 0, 'is_pickup': 0, 'start_date': DayStart, 'end_date': DayEnd }, //item summon
			{ 'daily_mission_id': 15070201, 'progress': 0, 'state': 0, 'day_no': DayNumber, 'is_lock_receive_reward': 0, 'is_pickup': 0, 'start_date': DayStart, 'end_date': DayEnd }, //rupies from facility
			{ 'daily_mission_id': 15070301, 'progress': 0, 'state': 0, 'day_no': DayNumber, 'is_lock_receive_reward': 0, 'is_pickup': 0, 'start_date': DayStart, 'end_date': DayEnd }, //clear quest
			{ 'daily_mission_id': 15070601, 'progress': 0, 'state': 0, 'day_no': DayNumber, 'is_lock_receive_reward': 0, 'is_pickup': 0, 'start_date': DayStart, 'end_date': DayEnd }  //clear all Endeavour
		];
		res.mid.Persist['Endeavour']['Tracker']['Daily']['Quests'] = 0;
		res.mid.Persist['LoginBonus']['Display'] = false;
		
		const GatherList = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "gather_item_list");
		for (const x in GatherList) {
			if (GatherList[x]['quest_last_weekly_reset_time'] < ResetTimes['Weekly']) {
				GatherList[x]['quest_last_weekly_reset_time'] = ResetTimes['Weekly'];
				GatherList[x]['quest_take_weekly_quantity'] = 0;
			}
			res.mid.Data['update_data_list']['gather_item_list'].push(GatherList[x]);
		}
	}
	return;
}

function GetSummonList(res, BannerList) {
	let SummonList = {
		'summon_list': [],
		'summon_point_list': []
	}
	for (const x in BannerList) {
		if (BannerList[x]['start_time'] < global.ServerTime && BannerList[x]['end_time'] > global.ServerTime) {
			SummonList['summon_list'].push({
				'summon_id': BannerList[x]['summon_id'],
				'summon_type': BannerList[x]['summon_type'],
				'single_crystal': BannerList[x]['summon_cost'],
				'single_diamond': BannerList[x]['summon_cost'],
				'multi_crystal': BannerList[x]['summon_cost'] * 10,
				'multi_diamond': BannerList[x]['summon_cost'] * 10,
				'limited_crystal': 0,
				'limited_diamond': BannerList[x]['summon_cost'] / 10,
				'summon_point_id': BannerList[x]['summon_id'],
				'add_summon_point': BannerList[x]['add_sigil_crystal'],
				'add_summon_point_stone': BannerList[x]['add_sigil_stone'],
				'exchange_summon_point': BannerList[x]['sigil_cost'],
				'status': 1,
				'commence_date': parseInt(BannerList[x]['start_time']),
				'complete_date': parseInt(BannerList[x]['end_time']),
				'daily_count': 0,
				'daily_limit': res.mid.Persist['Summon']['DailyCount'],
				'total_limit': 0,
				'total_count': 0,
				'campaign_type': BannerList[x]['campaign_type'],
				'free_count_rest': res.mid.Persist['Summon']['Tenfold'],
				'is_beginner_campaign': 0,
				'beginner_campaign_count_rest': 0,
				'consecution_campaign_count_rest': 0
			});
			if (BannerList[x]['sigil_cost'] != 0) {
				let SigilData = res.mid.Persist['Summon']['Sigil'].find(z => z.summon_point_id == BannerList[x]['summon_id']);
				if (SigilData != undefined) {
					SummonList['summon_point_list'].push(SigilData);
				}
				else {
					SigilData = {
						'summon_point_id': BannerList[x]['summon_id'],
						'summon_point': 0,
						'cs_summon_point': 0,
						'cs_point_term_min_date': 0,
						'cs_point_term_max_data': 0
					}
					res.mid.Persist['Summon']['Sigil'].push(SigilData);
					SummonList['summon_point_list'].push(SigilData);
				}
			}
		}
	}
	return SummonList;
}
function GetSigilTrade(res, BannerList, SummonID) {
	const SummonData = BannerList.find(x => x.summon_id == SummonID);
	const SigilData = res.mid.Persist['Summon']['Sigil'].find(x => x.summon_point_id == SummonID);
	return {
		'summon_point_trade_list': SummonData['sigil'],
		'summon_point_list': [ SigilData ]
	}
}
async function PerformSigilTrade(res, BannerList) {
	const BannerData = BannerList.find(z => z.summon_id == res.mid.Request['summon_id']);
	const TradeData = BannerData['sigil'].find(z => z.trade_id == res.mid.Request['trade_id']);
	const SigilIndex = res.mid.Persist['Summon']['Sigil'].findIndex(z => z.summon_point_id == res.mid.Request['summon_id']);
	res.mid.Persist['Summon']['Sigil'][SigilIndex]['summon_point'] = global.Module.Util.SaneValue(
		res.mid.Persist['Summon']['Sigil'][SigilIndex]['summon_point'] - BannerData['sigil_cost']
	);
	res.mid.ItemList.push({
		'type': TradeData['entity_type'], 'id': TradeData['entity_id'],
		'quantity': 1, 'level': 1, 'limit_break_count': 0
	});
	res.mid.Data = {
		'exchange_entity_list': [],
		'update_data_list': {
			'summon_point_list': [ res.mid.Persist['Summon']['Sigil'][SigilIndex] ]
		}
	}
	return;
}
async function PerformSummon(res, BannerList) {
	const TicketList = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "summon_ticket_list")
	res.mid.Data = {
		'reversal_effect_index': -1,
		'presage_effect_list': [1, 1],
		'result_unit_list': [],
		'result_prize_list': [],
		'result_summon_point': 0,
		'summon_ticket_list': TicketList,
		'update_data_list': {
			'fort_bonus_list': [],
			'summon_point_list': []
		}
	}
	const BannerData = BannerList.find(z => z.summon_id == res.mid.Request['summon_id']);
	const SigilIndex = res.mid.Persist['Summon']['Sigil'].findIndex(z => z.summon_point_id == res.mid.Request['summon_id']);
	let ExecCount = res.mid.Request['exec_count'];
	if (ExecCount < 1) { ExecCount = 1; }
	if (res.mid.Request['exec_type'] == 2) { ExecCount = 10; }
	let AddSigil = 0;
	switch(res.mid.Request['payment_type']) {
		case 2:
			if (res.mid.Request['exec_type'] == 3) {
				res.mid.ItemList.push({'type': 6, 'id': 0, 'quantity': Math.floor(BannerData['summon_cost'] / 5) * -1 });
				res.mid.Persist['Summon']['DailyCount'] = 0;
			}
			else {
				res.mid.ItemList.push({'type': 6, 'id': 0, 'quantity': Math.floor(BannerData['summon_cost'] * ExecCount) * -1 });
			}
			AddSigil = BannerData['add_sigil_stone'];
		break;
		case 3:
			res.mid.ItemList.push({'type': 23, 'id': 0, 'quantity': Math.floor(BannerData['summon_cost'] * ExecCount) * -1 });
			AddSigil = BannerData['add_sigil_crystal'];
		break;
		case 8:
			let Target = 0; let Count = 1;
			if (res.mid.Request['exec_type'] == 1) { Target = 10101; Count = ExecCount; }
			else if (res.mid.Request['exec_type'] == 2) { Target = 10102; Count = 1; }
			res.mid.ItemList.push({'type': 17, 'id': Target, 'quantity': Count * -1 });
			AddSigil = BannerData['add_sigil_crystal'];
			
			const TicketIndex = res.mid.Data['summon_ticket_list'].findIndex(z => z.summon_ticket_id == Target);
			res.mid.Data['summon_ticket_list'][TicketIndex]['quantity'] -= Count;
		break;
		case 9: undefined;
		case 10:
			res.mid.Persist['Summon']['Tenfold'] -= 1;
			AddSigil = BannerData['add_sigil_crystal'];
		break;
	}
	res.mid.Data['result_summon_point'] = AddSigil * ExecCount;
	res.mid.Persist['Summon']['Sigil'][SigilIndex]['summon_point'] += res.mid.Data['result_summon_point'];
	res.mid.Data['update_data_list']['summon_point_list'].push(res.mid.Persist['Summon']['Sigil'][SigilIndex]);
	while (res.mid.Data['result_unit_list'].length < ExecCount) {
		let Result = 0;
		if (BannerData['entity_focus'] == -1 || BannerData['entity_focus'] == undefined) {
			const Draw = Math.floor(Math.random() * 100) + 1;
			if (Draw > 95) { Result = 2; }
			else if (Draw > 50) { Result = 1; }
		}
		else { Result = BannerData['entity_focus']; }
		let DrawData = {};
		let IsNew = false;
		let IsTenfold = false;
		let IsPlatinum = false;
		if (res.mid.Request['exec_type'] == 2 && res.mid.Data['result_unit_list'].length == 9) {
			IsTenfold = true;
		}
		if (res.mid.Request['summon_type'] == 5 && res.mid.Data['result_unit_list'].length == 9) {
			IsPlatinum = true;
		}
		let Index = false;
		switch(Result) {
			case 0:
				DrawData = global.Module.Character.Draw(res.mid.Request['summon_id'], BannerData, IsTenfold, IsPlatinum);
				Index = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "chara_list", { 'chara_id': DrawData['id'] });
				if (Index == false) {
					DrawData['is_new'] = 1;
					res.mid.ItemList.push({'type': 1, 'id': DrawData['id'], 'quantity': 1, 'level': 1});
				}
				else {
					let DewPoint = 0;
					switch(DrawData['rarity']) {
						case 3: DewPoint = 300; break;
						case 4: DewPoint = 2500; break;
						case 5: DewPoint = 8000; break;
						default: DewPoint = 100; break;
					}
					DrawData['is_new'] = 0;
					DrawData['dew_point'] = DewPoint;
					res.mid.ItemList.push({'type': 14, 'id': 0, 'quantity': DewPoint});
				}
			break;
			case 1:
				DrawData = global.Module.Dragon.Draw(res.mid.Request['summon_id'], BannerData, IsTenfold, IsPlatinum);
				res.mid.ItemList.push({'type': 7, 'id': DrawData['id'], 'quantity': 1, 'level': 1, 'limit_break_count': 0});
				Index = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "dragon_reliability_list", { 'dragon_id': DrawData['id'] });
				if (Index == false) { DrawData['is_new'] = 1 }
				else { DrawData['is_new'] = 0; }
			break;
			case 2:
				if (res.mid.IsArchaea == true) {
					DrawData = global.Module.Amulet.Draw(res.mid.Request['summon_id'], BannerData, IsTenfold, IsPlatinum);
					res.mid.ItemList.push({'type': 12, 'id': DrawData['id'], 'quantity': 1});
				}
				else {
					DrawData = global.Module.Crest.Draw(res.mid.Request['summon_id'], BannerData, IsTenfold, IsPlatinum);
					Index = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "ability_crest_list", { 'ability_crest_id': DrawData['id'] });
					if (Index == false) {
						DrawData['is_new'] = 1;
						res.mid.ItemList.push({'type': 39, 'id': DrawData['id'], 'quantity': 1});
					}
					else {
						let DewPoint = 0;
						switch(DrawData['rarity']) {
							case 3: DewPoint = 150; break;
							case 4: DewPoint = 1000; break;
							case 5: DewPoint = 3000; break;
							default: DewPoint = 100; break;
						}
						DrawData['is_new'] = 0;
						DrawData['dew_point'] = DewPoint;
						res.mid.ItemList.push({'type': 14, 'id': 0, 'quantity': DewPoint});
					}
				}
			break;
			case 3:
				if (res.mid.IsArchaea == true) {
					DrawData = global.Module.Weapon.Draw(res.mid.Request['summon_id'], BannerData, IsTenfold, IsPlatinum);
					res.mid.ItemList.push({'type': 3, 'id': DrawData['id'], 'quantity': 1});
				}
				else {
					DrawData = global.Module.WeaponBody.Draw(res.mid.Request['summon_id'], BannerData, IsTenfold, IsPlatinum);
					Index = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "weapon_body_list", { 'weapon_body_id': DrawData['id'] });
					if (Index == false) {
						DrawData['is_new'] = 1;
						res.mid.ItemList.push({'type': 38, 'id': DrawData['id'], 'quantity': 1});
					}
					else {
						let DewPoint = 0;
						switch(DrawData['rarity']) {
							case 3: DewPoint = 150; break;
							case 4: DewPoint = 1000; break;
							case 5: DewPoint = 3000; break;
							default: DewPoint = 100; break;
						}
						DrawData['is_new'] = 0;
						DrawData['dew_point'] = DewPoint;
						res.mid.ItemList.push({'type': 14, 'id': 0, 'quantity': DewPoint});
					}
				}
			break;
		}
		res.mid.Data['result_unit_list'].push(DrawData);
	}
	const UserSummonIndex = res.mid.Persist['Summon']['User'].findIndex(z => z.summon_id == res.mid.Request['summon_id']);
	if (UserSummonIndex == -1) {
		res.mid.Persist['Summon']['User'].push({
			'summon_id': res.mid.Request['summon_id'],
			'summon_count': ExecCount,
			'campaign_type': BannerData['campaign_type'],
			'free_count_rest': 0,
			'is_beginner_campaign': 0,
			'beginner_campaign_count_rest': 0,
			'consecution_campaign_count_rest': 0
		});
	}
	else { res.mid.Persist['Summon']['User'][UserSummonIndex]['summon_count'] += ExecCount; }
	res.mid.Persist['Analytics']['SummonCount'] += ExecCount;
		
	let R4 = 0;
	let R5 = 0;
	let LastR5 = 0;
	for (const x in res.mid.Data['result_unit_list']) {
		if (res.mid.Data['result_unit_list'][x]['rarity'] == 4) { R4 += 1; }
		if (res.mid.Data['result_unit_list'][x]['rarity'] == 5) { R5 += 1; LastR5 = parseInt(x); }
	}
	if (R4 > 0) {
		res.mid.Data['presage_effect_list'][0] = Math.floor(Math.random() * 3) + 1;
		res.mid.Data['presage_effect_list'][1] = 2;
	}
	if (R5 == 1) {
		const ReversalRandom = Math.floor(Math.random() * 100) + 1;
		if (ReversalRandom > 90) {
			res.mid.Data['presage_effect_list'][0] = Math.floor(Math.random() * 3) + 1;
			res.mid.Data['presage_effect_list'][1] = 2;
			res.mid.Data['reversal_effect_index'] = LastR5;
		}
		else {
			res.mid.Data['presage_effect_list'][0] = Math.floor(Math.random() * 2) + 4;
			res.mid.Data['presage_effect_list'][1] = 3;
		}
	}
	else if (R5 > 1) {
		res.mid.Data['presage_effect_list'][0] = Math.floor(Math.random() * 2) + 4;
		res.mid.Data['presage_effect_list'][1] = 3;
	}
	return;
}

const CalcRequires = [ "build_list", "dragon_list", "chara_list", "weapon_body_list" ]
async function CalculateBonuses(res) {
	let BonusList = {
		'param_bonus': [
			{ "weapon_type": 1, "hp": 0, "attack": 0 },
			{ "weapon_type": 2, "hp": 0, "attack": 0 },
			{ "weapon_type": 3, "hp": 0, "attack": 0 },
			{ "weapon_type": 4, "hp": 0, "attack": 0 },
			{ "weapon_type": 5, "hp": 0, "attack": 0 },
			{ "weapon_type": 6, "hp": 0, "attack": 0 },
			{ "weapon_type": 7, "hp": 0, "attack": 0 },
			{ "weapon_type": 8, "hp": 0, "attack": 0 },
			{ "weapon_type": 9, "hp": 0, "attack": 0 }
		],
		'param_bonus_by_weapon': [
			{ "weapon_type": 1, "hp": 0, "attack": 0 },
			{ "weapon_type": 2, "hp": 0, "attack": 0 },
			{ "weapon_type": 3, "hp": 0, "attack": 0 },
			{ "weapon_type": 4, "hp": 0, "attack": 0 },
			{ "weapon_type": 5, "hp": 0, "attack": 0 },
			{ "weapon_type": 6, "hp": 0, "attack": 0 },
			{ "weapon_type": 7, "hp": 0, "attack": 0 },
			{ "weapon_type": 8, "hp": 0, "attack": 0 },
			{ "weapon_type": 9, "hp": 0, "attack": 0 }
		],
		'element_bonus': [
			{ "elemental_type": 1, "hp": 0, "attack": 0 },
			{ "elemental_type": 2, "hp": 0, "attack": 0 },
			{ "elemental_type": 3, "hp": 0, "attack": 0 },
			{ "elemental_type": 4, "hp": 0, "attack": 0 },
			{ "elemental_type": 5, "hp": 0, "attack": 0 },
			{ "elemental_type": 99, "hp": 0, "attack": 0 }
		],
		'dragon_bonus': [
			{ "elemental_type": 1, "dragon_bonus": 0, "hp": 0, "attack": 0 },
			{ "elemental_type": 2, "dragon_bonus": 0, "hp": 0, "attack": 0 },
			{ "elemental_type": 3, "dragon_bonus": 0, "hp": 0, "attack": 0 },
			{ "elemental_type": 4, "dragon_bonus": 0, "hp": 0, "attack": 0 },
			{ "elemental_type": 5, "dragon_bonus": 0, "hp": 0, "attack": 0 },
			{ "elemental_type": 99, "dragon_bonus": 0, "hp": 0, "attack": 0 }
		],
		'chara_bonus_by_album': [
			{ "elemental_type": 1, "hp": 0, "attack": 0 },
			{ "elemental_type": 2, "hp": 0, "attack": 0 },
			{ "elemental_type": 3, "hp": 0, "attack": 0 },
			{ "elemental_type": 4, "hp": 0, "attack": 0 },
			{ "elemental_type": 5, "hp": 0, "attack": 0 },
			{ "elemental_type": 99, "hp": 0, "attack": 0 }
		],
		'dragon_bonus_by_album': [
			{ "elemental_type": 1, "hp": 0, "attack": 0 },
			{ "elemental_type": 2, "hp": 0, "attack": 0 },
			{ "elemental_type": 3, "hp": 0, "attack": 0 },
			{ "elemental_type": 4, "hp": 0, "attack": 0 },
			{ "elemental_type": 5, "hp": 0, "attack": 0 },
			{ "elemental_type": 99, "hp": 0, "attack": 0 }
		],
		'all_bonus': {
			'hp': 0.0,
			'attack': 0.0
		},
		'dragon_time_bonus': {
			'dragon_time_bonus': 0.0
		}
	}
	const UserExists = await global.Module.Fluoresce.Exists("OrchisIndex", res.mid.ViewerID);
	if (UserExists == false) { return BonusList; }
	res.mid.Index = {};
	for (const x in CalcRequires) {
		if (res.mid.Index[CalcRequires[x]] == undefined) {
			res.mid.Index[CalcRequires[x]] = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, CalcRequires[x]);
		}
	}
	
	for (const x in res.mid.Index['build_list']) {
		if (res.mid.Index['build_list'][x]['level'] == 0) { continue; }
		let Target = ""; let Search = ""; let BonusUpType = "";
		const BuildData = global.Master.FortPlantDetail[String(res.mid.Index['build_list'][x]['fort_plant_detail_id'])];
		if (BuildData == undefined) { continue; }
		switch(BuildData['_EffectId']) {
			case 1: Target = "param_bonus"; Search = "weapon_type"; break;
			case 2: Target = "element_bonus"; Search = "elemental_type"; break;
			case 4: Target = "dragon_bonus"; Search = "elemental_type"; BonusUpType = "Dragon"; break;
			case 6: Target = "dragon_bonus"; Search = "elemental_type"; break;
		}
		
		if (Target != "") {
			const Index1 = BonusList[Target].findIndex(z => z[Search] == BuildData['_EffType1']);
			if (Index1 != -1) {
				if (BonusUpType == "Dragon") {
					BonusList[Target][Index1]['dragon_bonus'] += BuildData['_EffArgs1'];
				}
				else {
					BonusList[Target][Index1]['hp'] += BuildData['_EffArgs1'];
					BonusList[Target][Index1]['attack'] += BuildData['_EffArgs2'];
				}
			}
			const Index2 = BonusList[Target].findIndex(z => z[Search] == BuildData['_EffType2']);
			if (Index2 != -1) {
				if (BonusUpType == "Dragon") {
					BonusList[Target][Index2]['dragon_bonus'] += BuildData['_EffArgs1'];
				}
				else {
					BonusList[Target][Index2]['hp'] += BuildData['_EffArgs1'];
					BonusList[Target][Index2]['attack'] += BuildData['_EffArgs2'];
				}
			}
		}
	}
	for (const x in res.mid.Index['chara_list']) {
		if (global.Master.CharaData[String(res.mid.Index['chara_list'][x]['chara_id'])] == undefined) { continue; }
		const Element = global.Module.Character.GetInfo(res.mid.Index['chara_list'][x]['chara_id'], "_ElementalType");
		const Index = BonusList['chara_bonus_by_album'].findIndex(z => z.elemental_type == Element);
		let HP = 0.1; let Attack = 0.1;
		if (Index != -1) {
			if (res.mid.Index['chara_list'][x]['mana_circle_piece_id_list'].length >= 50) {
				HP += 0.1;
				Attack += 0.1;
			}
			if (res.mid.Index['chara_list'][x]['mana_circle_piece_id_list'].length >= 70) {
				HP += 0.1;
				Attack += 0.1;
			}
			if (res.mid.Index['chara_list'][x]['level'] >= 80) {
				HP += 0.1;
				Attack += 0.1;
			}
			if (res.mid.Index['chara_list'][x]['level'] >= 100) {
				HP += 0.1;
				Attack += 0.1;
			}
			BonusList['chara_bonus_by_album'][Index]['hp'] += HP;
			BonusList['chara_bonus_by_album'][Index]['attack'] += Attack;
		}
	}
	let MaxDragon = [];
	for (const x in res.mid.Index['dragon_list']) {
		if (global.Master.DragonData[String(res.mid.Index['dragon_list'][x]['dragon_id'])] == undefined) { continue; }
		const Index = MaxDragon.findIndex(z => z.dragon_id == res.mid.Index['dragon_list'][x]['dragon_id']);
		if (Index == -1) { MaxDragon.push(res.mid.Index['dragon_list'][x]); }
		else {
			if (res.mid.Index['dragon_list'][x]['limit_break_count'] > MaxDragon[Index]['limit_break_count']) {
				MaxDragon[Index] = res.mid.Index['dragon_list'][x];
			}
		}
	}
	for (const x in MaxDragon) {
		const Element = global.Module.Dragon.GetInfo(MaxDragon[x]['dragon_id'], "_ElementalType");
		const Index = BonusList['dragon_bonus_by_album'].findIndex(z => z.elemental_type == Element);
		let HP = 0.1; let Attack = 0.1;
		if (Index != -1) {
			if (MaxDragon[x]['limit_break_count'] >= 4) { HP += 0.1; Attack += 0.1; }
			if (MaxDragon[x]['limit_break_count'] >= 5) { HP += 0.1; Attack += 0.1; }
			if (MaxDragon[x]['level'] >= 60) { HP += 0.1; Attack += 0.1; }
			if (MaxDragon[x]['level'] >= 80) { HP += 0.1; Attack += 0.1; }
			if (MaxDragon[x]['level'] >= 100) { HP += 0.1; Attack += 0.1; }
			BonusList['dragon_bonus_by_album'][Index]['hp'] += HP;
			BonusList['dragon_bonus_by_album'][Index]['attack'] += Attack;
		}
	}
	for (const x in res.mid.Index['weapon_body_list']) {
		const Type = global.Module.WeaponBody.GetInfo(res.mid.Index['weapon_body_list'][x]['weapon_body_id'], "_WeaponType");
		const Index = BonusList['param_bonus_by_weapon'].findIndex(z => z.weapon_type == Type);
		if (Index != -1 && res.mid.Index['weapon_body_list'][x]['fort_passive_chara_weapon_buildup_count'] >= 1) {
			BonusList['param_bonus_by_weapon'][Index]['hp'] += 0.5;
			BonusList['param_bonus_by_weapon'][Index]['attack'] += 0.5;
		}
	}
	
	function CalcAverage(Set) {
		let AverageHP = 0.0; let AverageAttack = 0.0;
		for (const x in Set) {
			if (Set[x]['elemental_type'] == 99) { continue; }
			AverageHP += Set[x]['hp'];
			AverageAttack += Set[x]['attack'];
		}
		const Index = Set.findIndex(z => z.elemental_type == 99);
		if (Index != -1) {
			Set[Index]['hp'] = AverageHP / 5;
			Set[Index]['attack'] = AverageAttack / 5;
		}
		return Set;
	}
	BonusList['element_bonus'] = CalcAverage(BonusList['element_bonus']);
	BonusList['chara_bonus_by_album'] = CalcAverage(BonusList['chara_bonus_by_album']);
	BonusList['dragon_bonus_by_album'] = CalcAverage(BonusList['dragon_bonus_by_album']);
	
	return BonusList;
}
async function GenerateFacilityMax(res) {
	const FacilityMaxID = [
		10010111, 10020145, 10030127, 10040145, 10040245,
		10040345, 10040445, 10040545, 10050140, 10050240,
		10050340, 10050440, 10050540, 10050640, 10050740,
		10050840, 10050940, 10060130, 10060230, 10060330,
		10060430, 10060530, 10070100, 10070200, 10070300,
		10070400, 10070500, 10090135, 10090200, 10100130,
		10100230, 10100330, 10100430, 10100530, 10110135,
		10110200, 10130135, 10130200, 10140109, 10150135,
		10150200, 10160135, 10160200, 10170135, 10170200,
		10180135, 10180200, 10180300, 10190115, 10190215,
		10190315, 10190415, 10190515, 10200135, 10200200,
		10210100, 10220100, 10230130, 10230230, 10230330,
		10230430, 10230530, 10240135, 10240200, 10250135,
		10250200, 10260135, 10270135, 10270200, 10280135,
		10280200, 10290135, 10290200, 10300135, 10300200
	];
	const FacilityDoubleID = [
		100401, 100402, 100403, 100404, 100405,
		100501, 100502, 100503, 100504, 100505,
		100506, 100507, 100508, 100509
	];
	let BuildList = [];
	for (const x in FacilityMaxID) {
		const BuildID = BuildList.length > 0 ? BuildList[BuildList.length]['build_id'] : 59999;
		const Plant = parseInt(String(FacilityMaxID[x]).slice(0, 7));
		const Level = parseInt(String(Plant).slice(-2));
		const BuildData = {
			'build_id': BuildID,
			'fort_plant_detail_id': FacilityMaxID[x],
			'position_x': -1,
			'position_z': -1,
			'build_status': 0,
			'build_start_date': 0,
			'build_end_date': 0,
			'level': Level,
			'plant_id': Plant,
			'is_new': 0,
			'remain_time': 0,
			'last_income_date': -1
		};
		BuildList.push(BuildData);
		if (FacilityDoubleID.includes(FacilityMaxID[x])) {
			BuildData['build_id'] = BuildID + 1;
			BuildList.push(BuildData);
		}
	}
	global.Module.Fluoresce.Write("OrchisIndex", res.mid.ViewerID, "build_list", BuildList);
}
function CreateBuild(PlantID, KeyID, Position) {
	let DetailID = String(PlantID) + "00";
	let BuildData = {
		'build_id': KeyID,
		'fort_plant_detail_id': parseInt(DetailID),
		'position_x': Position['x'],
		'position_z': Position['z'],
		'build_status': 0,
		'build_start_date': 0,
		'build_end_date': 0,
		'level': 0,
		'plant_id': PlantID,
		'is_new': 0,
		'remain_time': 0,
		'last_income_date': -1
	}
	if (global.Master.FortPlantDetail[DetailID] == undefined) {
		DetailID = parseInt(String(PlantID) + "01");
		BuildData['fort_plant_detail_id'] = DetailID;
		BuildData['build_status'] = 1;
		BuildData['build_start_date'] = global.ServerTime;
		BuildData['build_end_date'] = global.ServerTime + global.Master.FortPlantDetail[DetailID]['_Time'];
		BuildData['remain_time'] = global.Master.FortPlantDetail[DetailID]['_Time'];
	}
	if (global.Master.FortPlantDetail[DetailID]['_CostMax'] != 0 || global.Master.FortPlantDetail[DetailID]['_MaterialMax'] != 0) {
		BuildData['last_income_date'] = global.ServerTime;
		BuildData['last_income_time'] = global.Master.FortPlantDetail[DetailID]['_Time'] * -1;
	}
	return {
		'Build': BuildData,
		'Time': global.Master.FortPlantDetail[DetailID]['_Time']
	}
}

async function Crest2Amulet(ViewerID, CrestID, IsPhoton) {
	let Converted = {
		'ability_crest_id': 0,
		'buildup_count': 0,
		'equipable_count': 0,
		'limit_break_count': 0,
		'hp_plus_count': 0,
		'attack_plus_count': 0,
		'ability_1_level': 0,
		'ability_2_level': 0
	}
	if (CrestID == 0) {
		if (IsPhoton == true) { return Converted; }
		else { return {} }
	}
	Converted = await global.Module.Crest.GetUnitData(ViewerID, CrestID);
	if (Converted != false) {
		let AbilityLevel = 1;
		if (Converted['limit_break_count'] >= 2 && Converted['limit_break_count'] < 4) { AbilityLevel = 2; }
		if (Converted['limit_break_count'] == 4) { AbilityLevel = 3; }
		Converted['ability_1_level'] = AbilityLevel;
		Converted['ability_2_level'] = AbilityLevel;
	}
	return Converted;
}
function DefaultWeapon(CharacterID) {
	if (CharacterID == 0) { return {}; }
	const CharacterWeapon = global.Module.Character.GetInfo(CharacterID, "_WeaponType");
	return {
		'weapon_body_id': parseInt(String("30" + CharacterWeapon + "19901")),
		'buildup_count': 0,
		'limit_break_count': 0,
		'limit_over_count': 0,
		'equipable_count': 4,
		'additional_crest_slot_type_1_count': 0,
		'additional_crest_slot_type_2_count': 0,
		'additional_crest_slot_type_3_count': 0,
		'addition_effect_count': 0,
		'skill_no': 1,
		'skill_level': 0,
		'ability_1_level': 0,
		'ability_2_level': 0
	}
}
const AstralPassives = [
	1010108, 1020108, 1030108, 1040108, 1050108, 1060108, 1070108, 1080108, 1090108,
	1010210, 1020210, 1030210, 1040210, 1050210, 1060210, 1070210, 1080210, 1090210,
	1010309, 1020309, 1030309, 1040309, 1050309, 1060309, 1070309, 1080309, 1090309,
	1010408, 1020408, 1030408, 1040408, 1050408, 1060408, 1070408, 1080408, 1090408,
	1010507, 1020507, 1030507, 1040507, 1050507, 1060507, 1070507, 1080507, 1090507
];
const HighDragonPassives = [
	1010109, 1020109, 1030109, 1040109, 1050109, 1060109, 1070109, 1080109, 1090109,
	1010211, 1020211, 1030211, 1040211, 1050211, 1060211, 1070211, 1080211, 1090211,
	1010310, 1020310, 1030310, 1040310, 1050310, 1060310, 1070310, 1080310, 1090310,
	1010409, 1020409, 1030409, 1040409, 1050409, 1060409, 1070409, 1080409, 1090409,
	1010508, 1020508, 1030508, 1040508, 1050508, 1060508, 1070508, 1080508, 1090508
];
function PassiveData(PassiveList, CharacterID, QuestID, IsPhoton) {
	if (CharacterID == 0) { return []; }
	const ElementType = global.Module.Character.GetInfo(CharacterID, '_ElementalType');
	const WeaponType = global.Module.Character.GetInfo(CharacterID, '_WeaponType');
	const CharacterString = parseInt("10" + WeaponType + "0" + ElementType);
	let Passive = [];
	for (let x in PassiveList) {
		const CurrentID = PassiveList[x]['weapon_passive_ability_id'];
		if (AstralPassives.includes(CurrentID) && String(QuestID).slice(0, 3) != 217) { continue; }
		if (HighDragonPassives.includes(CurrentID) && String(QuestID).slice(0, 3) != 210) { continue; }
		const MatchID = parseInt(String(CurrentID).slice(0, String(CurrentID).length - 2));
		if (MatchID == CharacterString) {
			if (IsPhoton == true) {
				Passive.push(PassiveList[x]['weapon_passive_ability_id']);
			}
			else {
				Passive.push(PassiveList[x]);
			}
		}
	}
	return Passive;
}
function WeaponBody2Weapon(WeaponBodyData) {
	let AbilityLevel = 0;
	if (WeaponBodyData['limit_break_count'] >= 4) { AbilityLevel = 2; }
	else if (WeaponBodyData['limit_break_count'] >= 2) { AbilityLevel = 1; }
	WeaponBodyData['skill_no'] = 1;
	WeaponBodyData['skill_level'] = AbilityLevel;
	WeaponBodyData['ability_1_level'] = AbilityLevel;
	WeaponBodyData['ability_2_level'] = AbilityLevel;
	return WeaponBodyData;
}
async function GetShared(ViewerID, SharedID, WeaponData) {
	let SharedData = { 'chara_id': SharedID, 'edit_skill_level': 1 };
	if (SharedID != 0) {
		const SourceData = await global.Module.Character.GetUnitData(ViewerID, SharedID);
		if (SourceData != false) {
			const SharedNum = global.Module.Character.GetInfo(SharedID, "_EditSkillLevelNum");
			SharedData = {
				'chara_id': SharedID,
				'edit_skill_level': SharedNum == 1 ? SourceData['skill_1_level'] : SourceData['skill_2_level']
			}
		}
	}
	else {
		if (WeaponData != undefined) {
			SharedData = { 'chara_id': 0, 'edit_skill_level': WeaponData['skill_level'] }
		}
	}
	return SharedData;
}
async function GetCoOpBonusData(ViewerID, CharacterID, DragonID) {
	const BonusData = await CalculateBonuses({ 'mid': { 'ViewerID': ViewerID } });
	const Element = global.Module.Character.GetInfo(CharacterID, "_ElementalType");
	const Weapon = global.Module.Character.GetInfo(CharacterID, "_WeaponType");
	const ElementData1 = BonusData['element_bonus'].find(z => z.elemental_type == Element);
	const ElementData2 = BonusData['chara_bonus_by_album'].find(z => z.elemental_type == Element);
	const WeaponData1 = BonusData['param_bonus'].find(z => z.weapon_type == Weapon);
	const WeaponData2 = BonusData['param_bonus_by_weapon'].find(z => z.weapon_type == Weapon);
	
	let Bonus = {
		'HpFort': ElementData1['hp'] + WeaponData1['hp'] + WeaponData2['hp'],
		'AtkFort': ElementData1['attack'] + WeaponData1['attack'] + WeaponData2['attack'],
		'HpAlbum': ElementData2['hp'],
		'AtkAlbum': ElementData2['attack'],
		'draHpFort': 0,
		'draAtkFort': 0,
		'draDmgFort': 0,
		'draHpAlbum': 0,
		'draAtkAlbum': 0,
		'draBonusTime': BonusData['dragon_time_bonus']['dragon_time_bonus']
	}
	
	if (DragonID != 0) {
		const DragonElement = global.Module.Dragon.GetInfo(DragonID, "_ElementalType");
		const DragonData1 = BonusData['dragon_bonus'].find(z => z.elemental_type == DragonElement);
		const DragonData2 = BonusData['dragon_bonus_by_album'].find(z => z.elemental_type == DragonElement);
		Bonus['draHpFort'] = DragonData1['hp'];
		Bonus['draAtkFort'] = DragonData1['attack'];
		Bonus['draDmgFort'] = DragonData1['dragon_bonus'];
		Bonus['draHpAlbum'] = DragonData2['hp'];
		Bonus['draAtkAlbum'] = DragonData2['attack'];
	}
	return Bonus;
}
async function DungeonData(res, PartyNoList, QuestID, SupportID, AssignData) {
	const ViewerID = res.mid.ViewerID;
	let UnitList = [];
	let Settings = [];
	let EventPassive = [];
	const PassiveList = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "weapon_passive_ability_list");
	
	for (const x in PartyNoList) {
	let PartyData = {};
	if (AssignData != undefined && AssignData[0] != undefined) {
		PartyData['party_setting_list'] = AssignData;
	}
	else {
		PartyData = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "party_list", { 'party_no': PartyNoList[x] });
	}
	for (const u in PartyData['party_setting_list']) {
		let CharacterData = {};
		if (PartyData['party_setting_list'][u]['chara_id'] != 0) {
			CharacterData = await global.Module.Character.GetUnitData(ViewerID, PartyData['party_setting_list'][u]['chara_id']);
		}
		
		let DragonIndex = {};
		let BondLevel = 0;
		if (PartyData['party_setting_list'][u]['equip_dragon_key_id'] != 0) {
			DragonIndex = await global.Module.Dragon.GetUnitData(ViewerID, PartyData['party_setting_list'][u]['equip_dragon_key_id']);
			const DragonBond = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "dragon_reliability_list", { 'dragon_id': DragonIndex['dragon_id'] });
			BondLevel = DragonBond['reliability_level'];
		}
		
		let WeaponData = DefaultWeapon(PartyData['party_setting_list'][u]['chara_id']);
		if (PartyData['party_setting_list'][u]['equip_weapon_body_id'] != 0) {
			const WeaponIndex = await global.Module.WeaponBody.GetUnitData(ViewerID, PartyData['party_setting_list'][u]['equip_weapon_body_id']);
			WeaponData = WeaponBody2Weapon(WeaponIndex);
		}
		let WeaponSkin = {};
		if (PartyData['party_setting_list'][u]['equip_weapon_skin_id'] != 0) {
			WeaponSkin = { 'weapon_skin_id': PartyData['party_setting_list'][u]['equip_weapon_skin_id'], 'is_new': 0, 'gettime': global.ServerTime }
		}
		const WeaponPassive = PassiveData(PassiveList, PartyData['party_setting_list'][u]['chara_id'], QuestID);
		
		const CrestList1 = [
			await Crest2Amulet(ViewerID, PartyData['party_setting_list'][u]['equip_crest_slot_type_1_crest_id_1']),
			await Crest2Amulet(ViewerID, PartyData['party_setting_list'][u]['equip_crest_slot_type_1_crest_id_2']),
			await Crest2Amulet(ViewerID, PartyData['party_setting_list'][u]['equip_crest_slot_type_1_crest_id_3'])
		]
		const CrestList2 = [
			await Crest2Amulet(ViewerID, PartyData['party_setting_list'][u]['equip_crest_slot_type_2_crest_id_1']),
			await Crest2Amulet(ViewerID, PartyData['party_setting_list'][u]['equip_crest_slot_type_2_crest_id_2'])
		]
		const CrestList3 = [
			await Crest2Amulet(ViewerID, PartyData['party_setting_list'][u]['equip_crest_slot_type_3_crest_id_1']),
			await Crest2Amulet(ViewerID, PartyData['party_setting_list'][u]['equip_crest_slot_type_3_crest_id_2'])
		]
		
		let TalismanData = {};
		if (PartyData['party_setting_list'][u]['equip_talisman_key_id'] != 0) {
			TalismanData = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "talisman_list", { 'talisman_key_id': PartyData['party_setting_list'][u]['equip_talisman_key_id'] });
		}
		
		let Shared1 = { 'chara_id': 0, 'edit_skill_level': 0 };
		let Shared2 = { 'chara_id': 0, 'edit_skill_level': 0 };
		if (u == 0) {
			Shared1 = await GetShared(ViewerID, PartyData['party_setting_list'][u]['edit_skill_1_chara_id'], WeaponData);
			Shared2 = await GetShared(ViewerID, PartyData['party_setting_list'][u]['edit_skill_2_chara_id']);
		}
		
		UnitList.push({
			'position': UnitList.length + 1,
			'chara_data': CharacterData,
			'dragon_data': DragonIndex,
			'dragon_reliability_level': BondLevel,
			'weapon_body_data': WeaponData,
			'weapon_skin_data': WeaponSkin,
			'crest_slot_type_1_crest_list': CrestList1,
			'crest_slot_type_2_crest_list': CrestList2,
			'crest_slot_type_3_crest_list': CrestList3,
			'talisman_data': TalismanData,
			'edit_skill_1_chara_data': Shared1,
			'edit_skill_2_chara_data': Shared2,
			'game_weapon_passive_ability_list': WeaponPassive
		});
		Settings.push(PartyData['party_setting_list'][u]);
	}
	}
	
	if (
		global.Master.EventData[String(global.Master.QuestData[String(QuestID)]['_Gid'])] != undefined &&
		global.Master.EventData[String(global.Master.QuestData[String(QuestID)]['_Gid'])]['_EventKindType'] == 1 &&
		global.Master.EventData[String(global.Master.QuestData[String(QuestID)]['_Gid'])]['_IsMemoryEvent'] == 0
	) {
		
		EventPassive = res.mid.Persist['Event'][String(global.Master.QuestData[String(QuestID)]['_Gid'])]['Passive'];
	}
	
	let SupportData = {
		'Player': [],
		'Info': [],
		'Setting': []
	}
	if (SupportID != 0 && SupportID != undefined) {
		const SupportAccount = await global.Module.Fluoresce.Read("OrchisAccount", SupportID);
		const SupportPersist = await global.Module.Fluoresce.Read("OrchisPersist", SupportAccount['PersistID']);
		
		const SupportCharacter = await global.Module.Character.GetUnitData(SupportID, SupportPersist['Support']['chara_id']);
		const SupportDragon = await global.Module.Dragon.GetUnitData(SupportID, SupportPersist['Support']['equip_dragon_key_id']);
		let SupportWeapon = DefaultWeapon(SupportPersist['Support']['chara_id']);
		const SupportWeaponIndex = await global.Module.WeaponBody.GetUnitData(SupportID, SupportPersist['Support']['equip_weapon_body_id']);
		SupportWeapon = WeaponBody2Weapon(SupportWeaponIndex);
		const SupportCrestList1 = [
			await Crest2Amulet(SupportID, SupportPersist['Support']['equip_crest_slot_type_1_crest_id_1']),
			await Crest2Amulet(SupportID, SupportPersist['Support']['equip_crest_slot_type_1_crest_id_2']),
			await Crest2Amulet(SupportID, SupportPersist['Support']['equip_crest_slot_type_1_crest_id_3'])
		]
		const SupportCrestList2 = [
			await Crest2Amulet(SupportID, SupportPersist['Support']['equip_crest_slot_type_2_crest_id_1']),
			await Crest2Amulet(SupportID, SupportPersist['Support']['equip_crest_slot_type_2_crest_id_2'])
		]
		const SupportCrestList3 = [
			await Crest2Amulet(SupportID, SupportPersist['Support']['equip_crest_slot_type_3_crest_id_1']),
			await Crest2Amulet(SupportID, SupportPersist['Support']['equip_crest_slot_type_3_crest_id_2'])
		]
		
		SupportData['Player'] = [ {'viewer_id': SupportID, 'get_mana_point': 0, 'is_friend': 1, 'apply_send_status': 0} ];
		SupportData['Info'] = [ {
			'viewer_id': SupportID,
			'name': SupportPersist['User']['name'],
			'is_friend': 1,
			'level': SupportPersist['User']['level'],
			'last_login_date': SupportPersist['User']['last_login_time'],
			'emblem_id': SupportPersist['User']['emblem_id'],
			'max_party_power': 50000,
			'support_chara': SupportCharacter,
			'support_dragon': SupportDragon,
			'support_weapon_body': SupportWeapon,
			'support_crest_slot_type_1_list': SupportCrestList1,
			'support_crest_slot_type_2_list': SupportCrestList2,
			'support_crest_slot_type_3_list': SupportCrestList3,
			'support_talisman': {},
			'guild': { 'guild_id': 0 }
		} ]
		SupportData['Setting'] = {
			'viewer_id': SupportID,
			'name': SupportPersist['User']['name'],
			'is_friend': 1,
			'level': SupportPersist['User']['level'],
			'last_login_date': SupportPersist['User']['last_login_time'],
			'emblem_id': SupportPersist['User']['emblem_id'],
			'max_party_power': 50000,
			'chara_data': SupportCharacter,
			'dragon_data': SupportDragon,
			'weapon_body_data': SupportWeapon,
			'crest_slot_type_1_crest_list': SupportCrestList1,
			'crest_slot_type_2_crest_list': SupportCrestList2,
			'crest_slot_type_3_crest_list': SupportCrestList3,
			'talisman_data': {}
		}
	}
	return {
		'Info': {
			'party_unit_list': UnitList,
			'fort_bonus_list': await CalculateBonuses(res),
			'support_data': SupportData['Setting'],
			'event_boost': [],
			'event_passive_grow_list': EventPassive
		},
		'Setting': Settings,
		'Support': SupportData
	}
}
async function DungeonDataArchaea(res, PartyNo, QuestID, SupportID, AssignData) {
	const ViewerID = res.mid.ViewerID;
	let UnitList = [];
	let Settings = [];
	let EventPassive = [];
	const PassiveList = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "weapon_passive_ability_list");
	
	if (AssignData != undefined && AssignData[0] != undefined) {
		PartyData = AssignData;
	}
	else {
		PartyData = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "party_list", { 'party_no': PartyNoList[x] });
	}
	for (const u in PartyData['party_setting_list']) {
		let CharacterData = {};
		if (PartyData['party_setting_list'][u]['chara_id'] != 0) {
			CharacterData = await global.Module.Character.GetUnitData(ViewerID, PartyData['party_setting_list'][u]['chara_id']);
		}
		
		let DragonIndex = {};
		let BondLevel = 0;
		if (PartyData['party_setting_list'][u]['equip_dragon_key_id'] != 0) {
			DragonIndex = await global.Module.Dragon.GetUnitData(ViewerID, PartyData['party_setting_list'][u]['equip_dragon_key_id']);
			const DragonBond = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "dragon_reliability_list", { 'dragon_id': DragonIndex['dragon_id'] });
			BondLevel = DragonBond['reliability_level'];
		}
		
		let WeaponIndex = {}
		if (PartyData['party_setting_list'][u]['equip_weapon_key_id'] != 0) {
			WeaponIndex = await global.Module.Weapon.GetUnitData(ViewerID, PartyData['party_setting_list'][u]['equip_weapon_key_id']);
		}
		let WeaponSkin = {};
		if (PartyData['party_setting_list'][u]['equip_skin_weapon_id'] != 0) {
			WeaponSkin = { 'weapon_id': PartyData['party_setting_list'][u]['equip_skin_weapon_id'], 'is_new': 0, 'gettime': global.ServerTime }
		}
		
		let Amulet1 = {};
		if (PartyData['party_setting_list'][u]['equip_amulet_key_id'] != 0) {
			Amulet1 = await global.Module.Weapon.GetUnitData(ViewerID, PartyData['party_setting_list'][u]['equip_amulet_key_id']);
		}
		let Amulet2 = {};
		if (PartyData['party_setting_list'][u]['equip_amulet_2_key_id'] != 0) {
			Amulet2 = await global.Module.Weapon.GetUnitData(ViewerID, PartyData['party_setting_list'][u]['equip_amulet_2_key_id']);
		}
		
		let Shared1 = { 'chara_id': 0, 'edit_skill_level': 0 };
		let Shared2 = { 'chara_id': 0, 'edit_skill_level': 0 };
		if (u == 0) {
			Shared1 = await GetShared(ViewerID, PartyData['party_setting_list'][u]['edit_skill_1_chara_id'], WeaponData);
			Shared2 = await GetShared(ViewerID, PartyData['party_setting_list'][u]['edit_skill_2_chara_id']);
		}
		
		UnitList.push({
			'position': parseInt(u) + 1,
			'chara_data': CharacterData,
			'dragon_data': DragonIndex,
			'dragon_reliability_level': BondLevel,
			'weapon_data': WeaponData,
			'skin_weapon_data': WeaponSkin,
			'amulet_data': Amulet1,
			'amulet_2_data': Amulet2,
			'edit_skill_1_chara_data': Shared1,
			'edit_skill_2_chara_data': Shared2
		});
		Settings.push(PartyData['party_setting_list'][u]);
	}
		
	if (
		global.Master.EventData[String(global.Master.QuestData[String(QuestID)]['_Gid'])] != undefined &&
		global.Master.EventData[String(global.Master.QuestData[String(QuestID)]['_Gid'])]['_EventKindType'] == 4
	) {
		EventPassive = res.mid.Persist['Event'][String(global.Master.QuestData[String(QuestID)]['_Gid'])]['Passive'];
	}
	
	let IngameSupport = [];
	let SupportData = {
		'Player': [],
		'Info': [],
		'Setting': []
	}
	if (SupportID != 0 && SupportID != undefined) {
		
	}
	return {
		'Info': {
			'party_unit_list': UnitList,
			'fort_bonus_list': CalculateBonuses(res),
			'support_data': IngameSupport,
			'event_boost': [],
			'event_passive_grow_list': EventPassive
		},
		'Setting': Settings,
		'Support': SupportData
	}
}
async function CoOpDungeonData(Persist, PartyNoList, QuestID) {
	const ViewerID = Persist['ViewerID'];
	let EventPassive = [];
	if (
		global.Master.EventData[String(global.Master.QuestData[String(QuestID)]['_Gid'])] != undefined &&
		global.Master.EventData[String(global.Master.QuestData[String(QuestID)]['_Gid'])]['_EventKindType'] == 4
	) {
		const EventID = String(global.Master.QuestData[String(QuestID)]['_Gid']);
		if (Persist['Event'][EventID]['Passive']['event_id'] != undefined) {
			EventPassive = [
				Persist['Event'][EventID]['Passive']['event_passive_grow_list'][0]['progress'],
				Persist['Event'][EventID]['Passive']['event_passive_grow_list'][1]['progress'],
				Persist['Event'][EventID]['Passive']['event_passive_grow_list'][2]['progress'],
				Persist['Event'][EventID]['Passive']['event_passive_grow_list'][3]['progress'],
				Persist['Event'][EventID]['Passive']['event_passive_grow_list'][4]['progress'],
				Persist['Event'][EventID]['Passive']['event_passive_grow_list'][5]['progress'],
				Persist['Event'][EventID]['Passive']['event_passive_grow_list'][6]['progress'],
				Persist['Event'][EventID]['Passive']['event_passive_grow_list'][7]['progress'],
				Persist['Event'][EventID]['Passive']['event_passive_grow_list'][8]['progress'],
				Persist['Event'][EventID]['Passive']['event_passive_grow_list'][9]['progress'],
				Persist['Event'][EventID]['Passive']['event_passive_grow_list'][10]['progress']
			];
		}
		else { EventPassive = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; }
	}
	let PartyList = [];
	const PassiveList = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "weapon_passive_ability_list");
	
	for (const x in PartyNoList) {
	let UnitList = [];
	const PartyData = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "party_list", { 'party_no': PartyNoList[x] });
	for (const u in PartyData['party_setting_list']) {
		if (PartyData['party_setting_list'][u]['chara_id'] == 0) { continue; }
		const CharacterData = await global.Module.Character.GetUnitData(ViewerID, PartyData['party_setting_list'][u]['chara_id']);
		
		let DragonIndex = {
			'dragon_id': 0,
			'level': 0,
			'hp_plus_count': 0,
			'attack_plus_count': 0,
			'skill_1_level': 0,
			'ability_1_level': 0,
			'ability_2_level': 0
		};
		let BondLevel = 0;
		if (PartyData['party_setting_list'][u]['equip_dragon_key_id'] != 0) {
			DragonIndex = await global.Module.Dragon.GetUnitData(ViewerID, PartyData['party_setting_list'][u]['equip_dragon_key_id']);
			const DragonBond = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "dragon_reliability_list", { 'dragon_id': DragonIndex['dragon_id'] });
			BondLevel = DragonBond['reliability_level'];
		}
		
		const BonusData = await GetCoOpBonusData(ViewerID, CharacterData['chara_id'], DragonIndex['dragon_id']);
		
		let WeaponData = DefaultWeapon(PartyData['party_setting_list'][u]['chara_id']);
		if (PartyData['party_setting_list'][u]['equip_weapon_body_id'] != 0) {
			const WeaponIndex = await global.Module.WeaponBody.GetUnitData(ViewerID, PartyData['party_setting_list'][u]['equip_weapon_body_id']);
			WeaponData = WeaponBody2Weapon(WeaponIndex);
		}
		const WeaponPassive = PassiveData(PassiveList, PartyData['party_setting_list'][u]['chara_id'], QuestID, true);
		
		const CrestList1 = [
			await Crest2Amulet(ViewerID, PartyData['party_setting_list'][u]['equip_crest_slot_type_1_crest_id_1']),
			await Crest2Amulet(ViewerID, PartyData['party_setting_list'][u]['equip_crest_slot_type_1_crest_id_2']),
			await Crest2Amulet(ViewerID, PartyData['party_setting_list'][u]['equip_crest_slot_type_1_crest_id_3'])
		]
		const CrestList2 = [
			await Crest2Amulet(ViewerID, PartyData['party_setting_list'][u]['equip_crest_slot_type_2_crest_id_1']),
			await Crest2Amulet(ViewerID, PartyData['party_setting_list'][u]['equip_crest_slot_type_2_crest_id_2'])
		]
		const CrestList3 = [
			await Crest2Amulet(ViewerID, PartyData['party_setting_list'][u]['equip_crest_slot_type_3_crest_id_1']),
			await Crest2Amulet(ViewerID, PartyData['party_setting_list'][u]['equip_crest_slot_type_3_crest_id_2'])
		]
		
		let TalismanIndex = {
			"talisman_id": 0,
			"talisman_ability_id_1": 0,
			"talisman_ability_id_2": 0,
			"talisman_ability_id_3": 0,
			"additional_hp": 0,
			"additional_attack": 0
		};
		if (PartyData['party_setting_list'][u]['equip_talisman_key_id'] != 0) {
			TalismanIndex = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "talisman_list", { 'talisman_key_id': PartyData['party_setting_list'][u]['equip_talisman_key_id'] });
		}
		
		let Shared1 = { 'chara_id': 0, 'edit_skill_level': 0 };
		let Shared2 = { 'chara_id': 0, 'edit_skill_level': 0 };
		if (u == 0) {
			Shared1 = await GetShared(ViewerID, PartyData['party_setting_list'][u]['edit_skill_1_chara_id'], WeaponData);
			Shared2 = await GetShared(ViewerID, PartyData['party_setting_list'][u]['edit_skill_2_chara_id']);
		}
		
		UnitList.push({
			'position': parseInt(u) + 1,
			'originalPosition': 0,
			'plusHp': 0,
			'plusAtk': 0,
			'plusDef': 0,
			'aiType': 0,
			'battleGroup': 0,
			'isEnemyTarget': true,
			'isFriend': false,
			
			'characterId': PartyData['party_setting_list'][u]['chara_id'],
			'level': CharacterData['level'],
			'hp': CharacterData['hp'],
			'attack': CharacterData['attack'],
			'defence': 0,
			'hpPlusCount': CharacterData['hp_plus_count'],
			'attackPlusCount': CharacterData['attack_plus_count'],
			'comboBuildupCount': CharacterData['combo_buildup_count'],
			'burstAttackLv': CharacterData['burst_attack_level'],
			'skill1Lv': CharacterData['skill_1_level'],
			'skill2Lv': CharacterData['skill_2_level'],
			'exAbilityLv': CharacterData['ex_ability_level'],
			'exAbility2Lv': CharacterData['ex_ability_2_level'],
			'ability1Lv': CharacterData['ability_1_level'],
			'ability2Lv': CharacterData['ability_2_level'],
			'ability3Lv': CharacterData['ability_3_level'],
			'editSkillCharacterId1': Shared1['chara_id'],
			'editSkillCharacterId2': Shared2['chara_id'],
			'editSkillLv1': Shared1['edit_skill_level'],
			'editSkillLv2': Shared2['edit_skill_level'],
			'relativeHpFort': BonusData['HpFort'],
			'relativeAtkFort': BonusData['AtkFort'],
			'relativeDefFort': 0,
			'relativeHpAlbum': BonusData['HpAlbum'],
			'relativeAtkAlbum': BonusData['AtkAlbum'],
			'relativeDefAlbum': 0,
			
			'dragonLevel': DragonIndex['level'],
			'dragonId': DragonIndex['dragon_id'],
			'dragonHpPlusCount': DragonIndex['hp_plus_count'],
			'dragonAttackPlusCount': DragonIndex['attack_plus_count'],
			'dragonSkill1Lv': DragonIndex['skill_1_level'],
			'dragonSkill2Lv': DragonIndex['skill_2_level'],
			'dragonAbility1Lv': DragonIndex['ability_1_level'],
			'dragonAbility2Lv': DragonIndex['ability_2_level'],
			'dragonReliabilityLevel': BondLevel,
			'dragonRelativeHp': 0,
			'dragonRelativeAtk': 0,
			'dragonRelativeDef': 0,
			'dragonRelativeDmg': BonusData['draDmgFort'],
			'dragonTime': BonusData['draBonusTime'],
			'dragonRelativeHpFort': BonusData['draHpFort'],
			'dragonRelativeAtkFort': BonusData['draAtkFort'],
			'dragonRelativeDefFort': 0,
			'dragonRelativeHpAlbum': BonusData['draHpAlbum'],
			'dragonRelativeAtkAlbum': BonusData['draAtkAlbum'],
			'dragonRelativeDefAlbum': 0,
			
			'weaponBodyId': WeaponData['weapon_body_id'],
			'weaponBodyBuildupCount': WeaponData['buildup_count'],
			'weaponBodySkillNo': 1,
			'weaponBodySkillLv': WeaponData['skill_level'],
			'weaponBodyAbility1Lv': WeaponData['ability_1_level'],
			'weaponBodyAbility2Lv': WeaponData['ability_2_level'],
			'weaponPassiveAbilityIds': PassiveData,
			'weapon_skin_data': PartyData['party_setting_list'][u]['equip_weapon_skin_id'],
			
			'abilityCrestId': CrestList1[0]['ability_crest_id'],
			'abilityCrestBuildupCount': CrestList1[0]['buildup_count'],
			'abilityCrestAbility1Lv': CrestList1[0]['ability_1_level'],
			'abilityCrestAbility2Lv': CrestList1[0]['ability_2_level'],
			'abilityCrestHpPlusCount': CrestList1[0]['hp_plus_count'],
			'abilityCrestAttackPlusCount': CrestList1[0]['attack_plus_count'],
			'abilityCrest2Id': CrestList1[1]['ability_crest_id'],
			'abilityCrest2BuildupCount': CrestList1[1]['buildup_count'],
			'abilityCrest2Ability1Lv': CrestList1[1]['ability_1_level'],
			'abilityCrest2Ability2Lv': CrestList1[1]['ability_2_level'],
			'abilityCrest2HpPlusCount': CrestList1[1]['hp_plus_count'],
			'abilityCrest2AttackPlusCount': CrestList1[1]['attack_plus_count'],
			'abilityCrest3Id': CrestList1[2]['ability_crest_id'],
			'abilityCrest3BuildupCount': CrestList1[2]['buildup_count'],
			'abilityCrest3Ability1Lv': CrestList1[2]['ability_1_level'],
			'abilityCrest3Ability2Lv': CrestList1[2]['ability_2_level'],
			'abilityCrest3HpPlusCount': CrestList1[2]['hp_plus_count'],
			'abilityCrest3AttackPlusCount': CrestList1[2]['attack_plus_count'],
			'abilityCrest4Id': CrestList2[0]['ability_crest_id'],
			'abilityCrest4BuildupCount': CrestList2[0]['buildup_count'],
			'abilityCrest4Ability1Lv': CrestList2[0]['ability_1_level'],
			'abilityCrest4Ability2Lv': CrestList2[0]['ability_2_level'],
			'abilityCrest4HpPlusCount': CrestList2[0]['hp_plus_count'],
			'abilityCrest4AttackPlusCount': CrestList2[0]['attack_plus_count'],
			'abilityCrest5Id': CrestList2[1]['ability_crest_id'],
			'abilityCrest5BuildupCount': CrestList2[1]['buildup_count'],
			'abilityCrest5Ability1Lv': CrestList2[1]['ability_1_level'],
			'abilityCrest5Ability2Lv': CrestList2[1]['ability_2_level'],
			'abilityCrest5HpPlusCount': CrestList2[1]['hp_plus_count'],
			'abilityCrest5AttackPlusCount': CrestList2[1]['attack_plus_count'],
			'abilityCrest6Id': CrestList3[0]['ability_crest_id'],
			'abilityCrest6BuildupCount': CrestList3[0]['buildup_count'],
			'abilityCrest6Ability1Lv': CrestList3[0]['ability_1_level'],
			'abilityCrest6Ability2Lv': CrestList3[0]['ability_2_level'],
			'abilityCrest6HpPlusCount': CrestList3[0]['hp_plus_count'],
			'abilityCrest6AttackPlusCount': CrestList3[0]['attack_plus_count'],
			'abilityCrest7Id': CrestList3[1]['ability_crest_id'],
			'abilityCrest7BuildupCount': CrestList3[1]['buildup_count'],
			'abilityCrest7Ability1Lv': CrestList3[1]['ability_1_level'],
			'abilityCrest7Ability2Lv': CrestList3[1]['ability_2_level'],
			'abilityCrest7HpPlusCount': CrestList3[1]['hp_plus_count'],
			'abilityCrest7AttackPlusCount': CrestList3[1]['attack_plus_count'],
			
			'talismanId': TalismanIndex['talisman_id'],
			'talismanAbilityId1': TalismanIndex['talisman_ability_id_1'],
			'talismanAbilityId2': TalismanIndex['talisman_ability_id_2'],
			'talismanAbilityId3': TalismanIndex['talisman_ability_id_3'],
			'talismanAdditionalHp': TalismanIndex['additional_hp'],
			'talismanAdditionalAttack': TalismanIndex['additional_attack'],
			
			'eventPassiveGrowList': EventPassive,
			'eventBoostDmg': 0
		});
	}
	PartyList.push(UnitList);
	}
	
	return PartyList;
}

const NoTrackList = [
	"100", "201", "202", "203", "204", "208", "210", "211", "214",
	"218", "220", "222", "223", "229", "300", "301", "310", 
]
const ExceptionList = [
	210010104, 210011104, 210020104, 210021104,
	210030104, 210031104, 210040104, 210041104,
	210050104, 210051104, 100260108, 100260208,
	100260308
]
async function DungeonRecord(res, PlayCount, IsMulti) {
	res.mid.Persist['Endeavour']['Tracker']['Daily']['Quests'] += PlayCount;
	const QuestID = res.mid.Persist['Dungeon']['QuestID'];
	if (QuestID == undefined || QuestID == 0) { res.mid.Error = 120; return; }
	const QuestInfo = global.Master.QuestData[String(QuestID)];
	const QuestSuffix = String(QuestID).slice(-3);
	let EventID = String(QuestInfo['_Gid']);
	let EventType = 0;
	if (global.Master.EventData[EventID] != undefined) {
		EventType = global.Master.EventData[EventID]['_EventKindType'];
	}
	let Substages = [];
	
	if (res.mid.Persist['Stamina'] == true) {
		res.mid.Persist['User']['stamina_single'] -= global.Module.Quest.GetInfo(QuestID, "_PayStaminaSingle");
		res.mid.Persist['User']['stamina_multi'] -= global.Module.Quest.GetInfo(QuestID, "_PayStaminaMulti");
		if (res.mid.Persist['Dungeon']['IsSkip'] == true) {
			res.mid.Persist['User']['quest_skip_point'] -= PlayCount;
		}
	}
	let PayEntity = {
		'type': global.Module.Quest.GetInfo(QuestID, "_PayEntityType"),
		'id': global.Module.Quest.GetInfo(QuestID, "_PayEntityId"),
		'quantity': global.Module.Quest.GetInfo(QuestID, "_PayEntityQuantity") * -1
	}
	if (PayEntity['type'] == 26) {
		PayEntity['quantity'] = PayEntity['quantity'] * res.mid.Request['astral_bet_count'];
		for (const x in res.mid.Persist['Dungeon']['Drop']['Item']) {
			res.mid.Persist['Dungeon']['Drop']['Item'][x]['quantity'] = res.mid.Persist['Dungeon']['Drop']['Item'][x]['quantity'] * res.mid.Request['astral_bet_count'];
		}
	}
	res.mid.ItemList.push(PayEntity);
	
	res.mid.Persist['Dungeon']['Drop']['Item'] = global.Module.Util.CompactList(res.mid.Persist['Dungeon']['Drop']['Item']);
	for (const x in res.mid.Persist['Dungeon']['Drop']['Item']) {
		res.mid.ItemList.push(res.mid.Persist['Dungeon']['Drop']['Item'][x]);
	}
	res.mid.ItemList.push({ 'type': 4, 'id': 0, 'quantity': res.mid.Persist['Dungeon']['Drop']['Coin'] + res.mid.Persist['Dungeon']['Drop']['CoinBonus'] });
	res.mid.ItemList.push({ 'type': 18, 'id': 0, 'quantity': res.mid.Persist['Dungeon']['Drop']['Mana'] });
	res.mid.ItemList.push({ 'type': 23, 'id': 0, 'quantity': res.mid.Persist['Dungeon']['Drop']['Wyrmite'] });
	res.mid.ItemList.push({ 'type': 26, 'id': 10101, 'quantity': res.mid.Persist['Dungeon']['Drop']['Astral'] });
	switch(EventType) {
		case 4:
			res.mid.ItemList.push({
				'type': 22,
				'id': parseInt(EventID + "01"),
				'quantity': res.mid.Persist['Dungeon']['Drop']['EventPoint'] + res.mid.Persist['Dungeon']['Drop']['EventPointBonus']
			});
			const SubstageList = global.Module.Quest.GetSubstage(QuestID);
			for (const x in SubstageList) {
				let SubstageInfo = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "quest_list", { 'quest_id': SubstageList[x] });
				if (SubstageInfo == false) {
					SubstageInfo = {
						'quest_id': SubstageList[x],
						'state': 1,
						'is_mission_clear_1': 0,
						'is_mission_clear_2': 0,
						'is_mission_clear_3': 0,
						'play_count': 0,
						'daily_play_count': 0,
						'weekly_play_count': 0,
						'last_daily_reset_time': 0,	
						'last_weekly_reset_time': 0,
						'is_appear': 1,
						'best_clear_time': -1
					}
				}
				else {
					SubstageInfo['is_appear'] = 1;
				}
				Substages.push(SubstageInfo);
			}
		break;
		case 6:
			res.mid.ItemList.push({
				'type': 25,
				'id': parseInt(EventID + "03"),
				'quantity': res.mid.Persist['Dungeon']['Drop']['EventPoint'] + res.mid.Persist['Dungeon']['Drop']['EventPointBonus']
			});
		break;
		case 12:
			res.mid.ItemList.push({
				'type': 40,
				'id': parseInt(EventID + "01"),
				'quantity': res.mid.Persist['Dungeon']['Drop']['EventPoint'] + res.mid.Persist['Dungeon']['Drop']['EventPointBonus']
			});
			if (res.mid.Persist['Dungeon']['Drop']['EventPoint'] != 0) {
				ScoreData = global.Module.Quest.GetEarnPoint(QuestID, res.mid.Request['play_record']['treasure_record'][0]['enemy_smash']);
				res.mid.Persist['Event'][EventID]['User']['event_point'] += ScoreData['Point'];
				res.mid.Persist['Dungeon']['Drop']['EventPoint'] = ScoreData['Point'];
				res.mid.Persist['Dungeon']['Drop']['EventPointBonus'] = 0;
			}
		break;
	}
	
	let EventPassiveGrowList = [];
	let ScoreData = { 'List': [], 'Point': 0, 'Mission': [] };
	if (EventType == 1 && QuestInfo['_DungeonType'] == 2) {
		const SpecialRoll = Math.floor(Math.random() * 150) + 1;
		if (SpecialRoll >= 140) {
			let Unobtained = [];
			for (const x in res.mid.Persist['Event'][EventID]['Passive']) {
				const PassiveID = String(res.mid.Persist['Event'][EventID]['Passive'][x]['passive_id']);
				if (
					global.Master.EventPassive[PassiveID]['_ViewRarity'] == 1 &&
					res.mid.Persist['Event'][EventID]['Passive'][x]['progress'] != 1
				) {
					Unobtained.push(res.mid.Persist['Event'][EventID]['Passive'][x]['passive_id']);
				}
			}
			if (Unobtained.length > 0) {
				const UpPassive = Unobtained[Math.floor(Math.random() * Unobtained.length)];
				const PassiveIndex = res.mid.Persist['Event'][EventID]['Passive'].findIndex(z => z.passive_id == UpPassive);
				res.mid.Persist['Event'][EventID]['Passive'][PassiveIndex]['progress'] = 1;
				EventPassiveGrowList.push(res.mid.Persist['Event'][EventID]['Passive'][PassiveIndex]);
			}
		}
			
		let BasicUp = Math.floor(Math.random() * 3);
		while (BasicUp > 0) {
			let Unobtained = [];
			for (const x in res.mid.Persist['Event'][EventID]['Passive']) {
				const PassiveID = String(res.mid.Persist['Event'][EventID]['Passive'][x]['passive_id']);
				const MaxValue = global.Master.EventPassive[PassiveID]['_MaxGrowValue'];
				if (
					global.Master.EventPassive[PassiveID]['_ViewRarity'] == 0 &&
					res.mid.Persist['Event'][EventID]['Passive'][x]['progress'] < MaxValue
				) {
					Unobtained.push(res.mid.Persist['Event'][EventID]['Passive'][x]['passive_id']);
				}
			}
			if (Unobtained.length > 0) {
				const UpPassive = Unobtained[Math.floor(Math.random() * Unobtained.length)];
				const PassiveGrowIndex = EventPassiveGrowList.findIndex(z => z.passive_id == UpPassive);
				let UpValue = Math.floor(Math.random() * 10) + 1;
				if (PassiveGrowIndex != -1) { UpValue = Math.floor(Math.random() * 5) + 1; }
				const MaxValue = global.Master.EventPassive[String(UpPassive)]['_MaxGrowValue'];
				const PassiveIndex = res.mid.Persist['Event'][EventID]['Passive'].findIndex(z => z.passive_id == UpPassive);
				res.mid.Persist['Event'][EventID]['Passive'][PassiveIndex]['progress'] += UpValue;
				if (res.mid.Persist['Event'][EventID]['Passive'][PassiveIndex]['progress'] > MaxValue) {
					res.mid.Persist['Event'][EventID]['Passive'][PassiveIndex]['progress'] = MaxValue;
				}
				
				if (PassiveGrowIndex != -1) {
					EventPassiveGrowList[PassiveGrowIndex]['progress'] += UpValue;
				}
				else {
					EventPassiveGrowList.push({
						'passive_id': res.mid.Persist['Event'][EventID]['Passive'][PassiveIndex]['passive_id'],
						'progress': UpValue
					});
				}
			}
			BasicUp--;
		}
	}
	
	let FirstClearSet = [];
	let MissionClearList = [];
	let MissionComplete = [];
	let GrowthTable = [];
	let FriendshipTable = [];
	let LimitRewardList = [];
	
	let BestTime = 0;
	if (res.mid.Persist['Dungeon']['QuestData']['state'] == 2) {
		res.mid.Persist['Dungeon']['QuestData'] = {
			'quest_id': res.mid.Persist['Dungeon']['QuestID'],
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
			'best_clear_time': res.mid.Request['play_record']['time']
		}
		FirstClearSet = global.Module.Quest.GetFirstClearSet(res.mid.Persist['Dungeon']['QuestID']);
		const MissionClearSet = global.Module.Quest.GetMissionClearSet(res.mid.Persist['Dungeon']['QuestID']);
		for (const x in FirstClearSet) {
			res.mid.ItemList.push(FirstClearSet[x]);
		}
		for (const x in MissionClearSet['Clear']) {
			MissionClearSet['Clear'][x]['mission_no'] = parseInt(x) + 1;
			MissionClearList.push(MissionClearSet['Clear'][x]);
			res.mid.ItemList.push(MissionClearSet['Clear'][x]);
		}
		MissionComplete = [ MissionClearSet['Complete'] ];
	}
	else {
		StoredTime = res.mid.Persist['Dungeon']['QuestData']['best_clear_time'];
		if (res.mid.Request['play_record']['time'] != 0 && res.mid.Request['play_record']['time'] < StoredTime) {
			BestTime = res.mid.Request['play_record']['time'];
		}
		res.mid.Persist['Dungeon']['QuestData']['play_count'] += PlayCount;
		res.mid.Persist['Dungeon']['QuestData']['best_clear_time'] = BestTime;
	}
	
	let RepeatInfo = [];
	if (res.mid.Persist['Dungeon']['Repeat']['Active'] == true) {
		for (const x in res.mid.Persist['Dungeon']['Drop']['Item']) {
			res.mid.Persist['Dungeon']['Repeat']['ItemList'].push(res.mid.Persist['Dungeon']['Drop']['Item'][x]);
		}
		res.mid.Persist['Dungeon']['Repeat']['EventPoint'] += res.mid.Persist['Dungeon']['Drop']['EventPoint'];
		res.mid.Persist['Dungeon']['Repeat']['EventPointBonus'] += res.mid.Persist['Dungeon']['Drop']['EventPointBonus'];
		res.mid.Persist['Dungeon']['Repeat']['Coin'] += res.mid.Persist['Dungeon']['Drop']['Coin'];
		res.mid.Persist['Dungeon']['Repeat']['CoinBonus'] += res.mid.Persist['Dungeon']['Drop']['CoinBonus'];
		res.mid.Persist['Dungeon']['Repeat']['Wyrmite'] += res.mid.Persist['Dungeon']['Drop']['Wyrmite'];
		if (res.mid.Request['repeat_state'] == 0 || res.mid.Persist['Dungeon']['Repeat']['Cycle'] >= res.mid.Persist['Dungeon']['Repeat']['Count']) {
			res.mid.Persist['Dungeon']['Drop']['Item'] = res.mid.Persist['Dungeon']['Repeat']['ItemList'];
			res.mid.Persist['Dungeon']['Drop']['EventPoint'] = res.mid.Persist['Dungeon']['Repeat']['EventPoint'];
			res.mid.Persist['Dungeon']['Drop']['EventPointBonus'] = res.mid.Persist['Dungeon']['Repeat']['EventPointBonus'];
			res.mid.Persist['Dungeon']['Drop']['Coin'] = res.mid.Persist['Dungeon']['Repeat']['Coin'];
			res.mid.Persist['Dungeon']['Drop']['CoinBonus'] = res.mid.Persist['Dungeon']['Repeat']['CoinBonus'];
			res.mid.Persist['Dungeon']['Drop']['Wyrmite'] = res.mid.Persist['Dungeon']['Repeat']['Wyrmite'];
		}
		
		RepeatInfo = {
			'repeat_key': res.mid.Persist['Dungeon']['Repeat']['Key'],
			'repeat_count': res.mid.Persist['Dungeon']['Repeat']['Cycle'],
			'repeat_state': res.mid.Persist['Dungeon']['Repeat']['Active'] == true ? 1 : 0
		}
	}
	
	res.mid.Persist['Dungeon']['Drop']['Item'].push({'type': 23, 'id': 0, 'quantity': res.mid.Persist['Dungeon']['Drop']['Wyrmite'] });
	
	let PlayerXP = ((global.Module.Quest.GetInfo(QuestID, "_PayStaminaSingle")
	+ global.Module.Quest.GetInfo(QuestID, "_PayStaminaMulti")
	+ global.Module.Quest.GetInfo(QuestID, "_PayEntityQuantity")) * 80) * PlayCount;
	const UnitXP = (PlayerXP * 2) * PlayCount;
	let CharaGrowList = [];
	for (const x in res.mid.Persist['Dungeon']['Party']['Setting']) {
		if (IsMulti == true && parseInt(x) > 0 && QuestInfo['_DungeonType'] != 2) { continue; }
		const CharacterID = res.mid.Persist['Dungeon']['Party']['Setting'][x]['chara_id'];
		if (CharacterID == 0) { continue; }
		const CharacterData = await global.Module.Character.GetUnitData(res.mid.ViewerID, CharacterID);
		CharacterData['exp'] += UnitXP;
		const MaxLevel = 80 + CharacterData['additional_max_level'];
		if (CharacterData['level'] < MaxLevel) {
			const NewLevel = global.Module.Character.GetLevel(CharacterData);
			CharacterData['level'] = NewLevel['Level'];
			CharacterData['exp'] = NewLevel['EXP'];
			GrowthTable.push({
				'chara_id': CharacterID,
				'take_exp': UnitXP
			});
			const NewStats = global.Module.Character.CalculateStats(CharacterID, CharacterData);
			CharacterData['hp'] = NewStats['HP'];
			CharacterData['attack'] = NewStats['Attack'];
			CharaGrowList.push(CharacterData);
		}
		else {
			GrowthTable.push({
				'chara_id': CharacterID,
				'take_exp': 0
			});
		}
		
		if (global.Module.Character.GetInfo(CharacterID, "_MaxFriendshipPoint") != 0) {
			const EventIDs = Object.keys(global.Master.EventData);
			for (const x in EventIDs) {
				if (
					global.Master.EventData[EventIDs[x]]['_EventCharaId'] == CharacterID &&
					res.mid.Persist['Event'][EventIDs[x]] != undefined
				) {
					if (res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0] != undefined) {
						let AddPoint = 0;
						if (global.Module.Character.GetInfo(CharacterID, "_MaxFriendshipPoint") > res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['total_point']) {
							if ((res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['total_point'] + 6) > global.Module.Character.GetInfo(CharacterID, "_MaxFriendshipPoint")) {
								const Remainder = global.Module.Character.GetInfo(CharacterID, "_MaxFriendshipPoint") - res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['total_point'];
								res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['total_point'] = global.Module.Character.GetInfo(CharacterID, "_MaxFriendshipPoint");
								res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['is_temporary'] = 0;
								AddPoint = Remainder;
							}
							else {
								res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['total_point'] += 6;
								AddPoint = 6;
							}
							FriendshipTable.push({
								'chara_id': res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['chara_id'],
								'total_point': res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['total_point'],
								'is_temporary': res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['is_temporary'],
								'add_point': AddPoint
							});
						}
					}
				}
			}
		}
	
		const Medal = global.Module.Endeavour.MedalCheck(QuestID);
		const CharaMedalIndex = res.mid.Persist['Medals'].findIndex(z => z.chara_id == CharacterID);
		if (CharaMedalIndex == -1) {
			res.mid.Persist['Medals'].push({
				'chara_id': CharacterID,
				'honor_list': [ { 'honor_id': Medal } ]
			});
		}
		else {
			const MedalIndex = res.mid.Persist['Medals'][CharaMedalIndex]['honor_list'].findIndex(z => z.honor_id == Medal);
			if (MedalIndex == -1) { res.mid.Persist['Medals'][CharaMedalIndex]['honor_list'].push({ 'honor_id': Medal }); }
		}
		
		const Element = global.Module.Character.GetInfo(CharacterID, "_ElementalType");
		const Weapon = global.Module.Character.GetInfo(CharacterID, "_WeaponType");
		const Type = global.Module.Character.GetInfo(CharacterID, "_CharaType");
		res.mid.Persist['Endeavour']['Tracker']['Album']['Element'][String(Element)] += 1;
		res.mid.Persist['Endeavour']['Tracker']['Album']['Weapon'][String(Weapon)] += 1;
		res.mid.Persist['Endeavour']['Tracker']['Album']['Type'][String(Type)] += 1;
	}
	let LevelUpReward = 0;
	if (res.mid.Persist['User']['level'] < 250) {
		res.mid.Persist['User']['exp'] += PlayerXP;
		let NewLevel = 0;
		const LevelList = Object.keys(global.Master.UserLevel);
		for (const x in LevelList) {
			if (global.Master.UserLevel[LevelList[x]]['_TotalExp'] > res.mid.Persist['User']['exp']) {
				NewLevel = global.Master.UserLevel[LevelList[x]]['_Id'] - 1;
				break;
			}
		}
		if (res.mid.Persist['User']['exp'] > 28253490) {
			res.mid.Persist['User']['level'] = 250;
			res.mid.Persist['User']['exp'] = 28253490;
		}
		while (res.mid.Persist['User']['level'] < NewLevel) {
			LevelUpReward += 50;
			res.mid.Persist['User']['level'] += 1;
			res.mid.Persist['User']['crystal'] += 50;
			res.mid.Persist['User']['stamina_single'] += global.Master.UserLevel[String(res.mid.Persist['User']['level'])]['_StaminaSingle'];
			if (res.mid.Persist['User']['stamina_single'] > 999) { res.mid.Persist['User']['stamina_single'] = 999; }
			res.mid.Persist['User']['stamina_multi'] += 12;
			if (res.mid.Persist['User']['stamina_multi'] > 99) { res.mid.Persist['User']['stamina_multi'] == 99; }
		}
	}
	
	res.mid.Data = {
		'time_attack_ranking_data': [],
		'ingame_result_data': {
			'dungeon_key': res.mid.Persist['Dungeon']['Key'],
			'play_type': res.mid.Persist['Dungeon']['PlayType'],
			'quest_id': res.mid.Persist['Dungeon']['QuestID'],
			'reward_record': {
				'drop_all': res.mid.Persist['Dungeon']['Drop']['Item'],
				'first_clear_set': FirstClearSet,
				'quest_bonus_list': [],
				'reborn_bonus': [],
				'weekly_limit_reward_list': [],
				'challenge_quest_bonus_list': [],
				'campaign_extra_reward_list': [],
				'shop_quest_bonus_factor': 0,
				'mission_complete': MissionComplete,
				'missions_clear_set': MissionClearList,
				'enemy_piece': [],
				'take_coin': res.mid.Persist['Dungeon']['Drop']['Coin'] + res.mid.Persist['Dungeon']['Drop']['CoinBonus'],
				'take_accumulate_point': res.mid.Persist['Dungeon']['Drop']['EventPoint'] + res.mid.Persist['Dungeon']['Drop']['EventPointBonus'],
				'take_boost_accumulate_point': res.mid.Persist['Dungeon']['Drop']['EventPointBonus'],
				'player_level_up_fstone': LevelUpReward,
				'first_meeting': [],
				'take_astral_item_quantity': res.mid.Persist['Dungeon']['Drop']['Astral'],
				'carry_bonus': []
			},
			'grow_record': {
				'take_player_exp': PlayerXP,
				'take_chara_exp': UnitXP,
				'chara_grow_record': GrowthTable,
				'chara_friendship_list': FriendshipTable,
				'take_mana': res.mid.Persist['Dungeon']['Drop']['Mana'],
				'bonus_factor': 1.0,
				'mana_bonus_factor': 1.0
			},
			'start_time': res.mid.Persist['Dungeon']['Started'],
			'end_time': 0,
			'current_play_count': res.mid.Persist['Dungeon']['QuestData']['play_count'],
			'is_clear': FirstClearSet.length == 0 ? 0 : 1,
			'state': 1,
			'is_host': res.mid.Persist['Dungeon']['IsHost'],
			'is_fever_time': 0,
			'wave_count': 0,
			'reborn_count': 0,
			'helper_list': res.mid.Persist['Dungeon']['Party']['Support']['Info'],
			'helper_detail_list': res.mid.Persist['Dungeon']['Party']['Support']['Player'],
			'quest_party_setting_list': res.mid.Persist['Dungeon']['Party']['Setting'],
			'bonus_factor_list': [],
			'scoring_enemy_point_list': ScoreData['List'],
			'score_mission_success_list': ScoreData['Mission'],
			'event_passive_up_list': EventPassiveGrowList,
			'clear_time': res.mid.Request['play_record']['time'],
			'is_best_clear_time': BestTime != 0 ? 1 : 0,
			'converted_entity_list': [],
			'dungeon_skip_type': PlayCount > 1 ? 1 : 0,
			'total_play_damage': 0
		},
		'event_damage_ranking': [],
		'repeat_data': RepeatInfo,
		'update_data_list': {
			'quest_list': [ res.mid.Persist['Dungeon']['QuestData'] ],
			'chara_list': CharaGrowList
		}
	}
	for (const x in Substages) { res.mid.Data['update_data_list']['quest_list'].push(Substages[x]); }
	if (IsMulti == true) { delete res.mid.Data['repeat_data']; }
	
	if (!NoTrackList.includes(String(QuestID).slice(0,3)) || ExceptionList.includes(QuestID)) {
		let DPSData = {
			'QuestID': QuestID,
			'ClearTime': res.mid.Request['play_record']['time'],
			'CharacterStats': [], // { 'Character': { 'ID': X, 'Stats': {}, 'Dragon': { 'Stats': {}, 'Damage': {} }, 'Weapon': {}, 'Prints': {} } }
			'Shared': {
				'1': [],
				'2': []
			},
			'Timestamp': Math.floor(Date.now() / 1000)
		};
		for (const x in res.mid.Request['play_record']['damage_record']) {
			const Source = res.mid.Request['play_record']['damage_record'][x];
			const DragonSource = res.mid.Request['play_record']['dragon_damage_record'][x];
			if (Source['total'] == 0) { continue; }
			const Position = res.mid.Persist['Dungeon']['Party']['Info']['party_unit_list'].find(z => z.position == parseInt(x) + 1);
			DPSData['CharacterStats'].push({
				'Stats': Position['chara_data'],
				'Damage': {
					'Total': Source['total'],
					'Skill': Source['skill'],
					'Affliction': Source['dot'],
					'Critical': Source['critical'],
					'Overdamage': Source['enchant']
				},
				'Dragon': {
					'Stats': Position['dragon_data'],
					'Damage': {
						'Total': DragonSource['total'],
						'Skill': DragonSource['skill'],
						'Affliction': DragonSource['dot'],
						'Critical': DragonSource['critical'],
						'Overdamage': DragonSource['enchant']
					}
				},
				'Weapon': Position['weapon_body_data'],
				'Prints': {
					'5*': Position['crest_slot_type_1_crest_list'],
					'4*': Position['crest_slot_type_2_crest_list'],
					'9*': Position['crest_slot_type_3_crest_list']
				},
				'Talisman': Position['talisman_data']
			});
		}
		const First = res.mid.Persist['Dungeon']['Party']['Info']['party_unit_list'].find(z => z.position == 1);
		const Second = res.mid.Persist['Dungeon']['Party']['Info']['party_unit_list'].find(z => z.position == 5);
		DPSData['Shared']['1'].push(First['edit_skill_1_chara_data']['chara_id']);
		DPSData['Shared']['1'].push(First['edit_skill_2_chara_data']['chara_id']);
		if (Second != undefined) {
			DPSData['Shared']['2'].push(Second['edit_skill_1_chara_data']['chara_id']);
			DPSData['Shared']['2'].push(Second['edit_skill_2_chara_data']['chara_id']);
		}
		
		await global.Module.Fluoresce.Append("OrchisDPS", res.mid.ViewerID, [ DPSData ]);
	}
	return;
}
async function DungeonRecordArchaea(res, PlayCount, IsMulti) {
	res.mid.Persist['Endeavour']['Tracker']['Daily']['Quests'] += PlayCount;
	const QuestID = res.mid.Persist['Dungeon']['QuestID'];
	const QuestInfo = global.Master.QuestData[String(QuestID)];
	const QuestSuffix = String(QuestID).slice(-3);
	let EventID = String(QuestInfo['_Gid']);
	let EventType = 0;
	if (global.Master.EventData[EventID] != undefined) {
		EventType = global.Master.EventData[EventID]['_EventKindType'];
	}
	let Substages = [];
	
	if (res.mid.Persist['Stamina'] == true) {
		res.mid.Persist['User']['stamina_single'] -= global.Module.Quest.GetInfo(QuestID, "_PayStaminaSingle");
		res.mid.Persist['User']['stamina_multi'] -= global.Module.Quest.GetInfo(QuestID, "_PayStaminaMulti");
		if (res.mid.Persist['Dungeon']['IsSkip'] == true) {
			res.mid.Persist['User']['quest_skip_point'] -= PlayCount;
		}
	}
	let PayEntity = {
		'type': global.Module.Quest.GetInfo(QuestID, "_PayEntityType"),
		'id': global.Module.Quest.GetInfo(QuestID, "_PayEntityId"),
		'quantity': global.Module.Quest.GetInfo(QuestID, "_PayEntityQuantity") * -1
	}
	if (PayEntity['type'] == 26) {
		PayEntity['quantity'] = PayEntity['quantity'] * res.mid.Request['astral_bet_count'];
		for (const x in res.mid.Persist['Dungeon']['Drop']['Item']) {
			res.mid.Persist['Dungeon']['Drop']['Item'][x]['quantity'] = res.mid.Persist['Dungeon']['Drop']['Item'][x]['quantity'] * res.mid.Request['astral_bet_count'];
		}
	}
	res.mid.ItemList.push(PayEntity);
	
	res.mid.Persist['Dungeon']['Drop']['Item'] = global.Module.Util.CompactList(res.mid.Persist['Dungeon']['Drop']['Item']);
	for (const x in res.mid.Persist['Dungeon']['Drop']['Item']) {
		res.mid.ItemList.push(res.mid.Persist['Dungeon']['Drop']['Item'][x]);
	}
	res.mid.ItemList.push({ 'type': 4, 'id': 0, 'quantity': res.mid.Persist['Dungeon']['Drop']['Coin'] + res.mid.Persist['Dungeon']['Drop']['CoinBonus'] });
	res.mid.ItemList.push({ 'type': 18, 'id': 0, 'quantity': res.mid.Persist['Dungeon']['Drop']['Mana'] });
	res.mid.ItemList.push({ 'type': 23, 'id': 0, 'quantity': res.mid.Persist['Dungeon']['Drop']['Wyrmite'] });
	res.mid.ItemList.push({ 'type': 26, 'id': 10101, 'quantity': res.mid.Persist['Dungeon']['Drop']['Astral'] });
	switch(EventType) {
		case 4:
			res.mid.ItemList.push({
				'type': 22,
				'id': parseInt(EventID + "01"),
				'quantity': res.mid.Persist['Dungeon']['Drop']['EventPoint'] + res.mid.Persist['Dungeon']['Drop']['EventPointBonus']
			});
			const SubstageList = global.Module.Quest.GetSubstage(QuestID);
			for (const x in SubstageList) {
				let SubstageInfo = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "quest_list", { 'quest_id': SubstageList[x] });
				if (SubstageInfo == false) {
					SubstageInfo = {
						'quest_id': SubstageList[x],
						'state': 1,
						'is_mission_clear_1': 0,
						'is_mission_clear_2': 0,
						'is_mission_clear_3': 0,
						'play_count': 0,
						'daily_play_count': 0,
						'weekly_play_count': 0,
						'last_daily_reset_time': 0,	
						'last_weekly_reset_time': 0,
						'is_appear': 1,
						'best_clear_time': -1
					}
				}
				else {
					SubstageInfo['is_appear'] = 1;
				}
				Substages.push(SubstageInfo);
			}
		break;
		case 6:
			res.mid.ItemList.push({
				'type': 25,
				'id': parseInt(EventID + "03"),
				'quantity': res.mid.Persist['Dungeon']['Drop']['EventPoint'] + res.mid.Persist['Dungeon']['Drop']['EventPointBonus']
			});
		break;
		case 12:
			res.mid.ItemList.push({
				'type': 40,
				'id': parseInt(EventID + "01"),
				'quantity': res.mid.Persist['Dungeon']['Drop']['EventPoint'] + res.mid.Persist['Dungeon']['Drop']['EventPointBonus']
			});
			if (res.mid.Persist['Dungeon']['Drop']['EventPoint'] != 0) {
				ScoreData = global.Module.Quest.GetEarnPoint(QuestID, res.mid.Request['play_record']['treasure_record'][0]['enemy_smash']);
				res.mid.Persist['Event'][EventID]['User']['event_point'] += ScoreData['Point'];
				res.mid.Persist['Dungeon']['Drop']['EventPoint'] = ScoreData['Point'];
				res.mid.Persist['Dungeon']['Drop']['EventPointBonus'] = 0;
			}
		break;
	}
	
	let EventPassiveGrowList = [];
	let ScoreData = { 'List': [], 'Point': 0, 'Mission': [] };
	if (EventType == 1 && QuestInfo['_DungeonType'] == 2) {
		const SpecialRoll = Math.floor(Math.random() * 150) + 1;
		if (SpecialRoll >= 140) {
			let Unobtained = [];
			for (const x in res.mid.Persist['Event'][EventID]['Passive']) {
				const PassiveID = String(res.mid.Persist['Event'][EventID]['Passive'][x]['passive_id']);
				if (
					global.Master.EventPassive[PassiveID]['_ViewRarity'] == 1 &&
					res.mid.Persist['Event'][EventID]['Passive']['progress'] != 1
				) {
					Unobtained.push(res.mid.Persist['Event'][EventID]['Passive']['passive_id']);
				}
			}
			const UpPassive = Unobtained[Math.floor(Math.random() * Unobtained.length)];
			const PassiveIndex = res.mid.Persist['Event'][EventID]['Passive'].findIndex(z => z.passive_id == UpPassive);
			res.mid.Persist['Event'][EventID]['Passive'][PassiveIndex]['progress'] = 1;
			EventPassiveGrowList.push(res.mid.Persist['Event'][EventID]['Passive'][PassiveIndex]);
		}
			
		let BasicUp = Math.floor(Math.random() * 3);
		while (BasicUp > 0) {
			let Unobtained = [];
			for (const x in res.mid.Persist['Event'][EventID]['Passive']) {
				const PassiveID = String(res.mid.Persist['Event'][EventID]['Passive'][x]['passive_id']);
				const MaxValue = global.Master.EventPassive[PassiveID]['_MaxGrowValue'];
				if (
					global.Master.EventPassive[PassiveID]['_ViewRarity'] == 0 &&
					res.mid.Persist['Event'][EventID]['Passive']['progress'] != MaxValue
				) {
					Unobtained.push(res.mid.Persist['Event'][EventID]['Passive']['passive_id']);
				}
			}
			const UpValue = Math.floor(Math.random() * 10) + 1;
			const UpPassive = Unobtained[Math.floor(Math.random() * Unobtained.length)];
			const PassiveIndex = res.mid.Persist['Event'][EventID]['Passive'].findIndex(z => z.passive_id == UpPassive);
			res.mid.Persist['Event'][EventID]['Passive'][PassiveIndex]['progress'] += UpValue;
			if (res.mid.Persist['Event'][EventID]['Passive'][PassiveIndex]['progress'] > MaxValue) {
				res.mid.Persist['Event'][EventID]['Passive'][PassiveIndex]['progress'] = MaxValue;
			}
			EventPassiveGrowList.push(res.mid.Persist['Event'][EventID]['Passive'][PassiveIndex]);
			BasicUp--;
		}
	}
	
	let FirstClearSet = [];
	let MissionClearList = [];
	let MissionComplete = [];
	let GrowthTable = [];
	let FriendshipTable = [];
	let LimitRewardList = [];
	
	let BestTime = 0;
	if (res.mid.Persist['Dungeon']['QuestData']['state'] == 2) {
		res.mid.Persist['Dungeon']['QuestData'] = {
			'quest_id': res.mid.Persist['Dungeon']['QuestID'],
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
			'best_clear_time': res.mid.Request['play_record']['time']
		}
		FirstClearSet = global.Module.Quest.GetFirstClearSet(res.mid.Persist['Dungeon']['QuestID']);
		const MissionClearSet = global.Module.Quest.GetMissionClearSet(res.mid.Persist['Dungeon']['QuestID']);
		for (const x in FirstClearSet) {
			res.mid.ItemList.push(FirstClearSet[x]);
		}
		for (const x in MissionClearSet['Clear']) {
			MissionClearSet['Clear'][x]['mission_no'] = parseInt(x) + 1;
			MissionClearList.push(MissionClearSet['Clear'][x]);
			res.mid.ItemList.push(MissionClearSet['Clear'][x]);
		}
		MissionComplete = [ MissionClearSet['Complete'] ];
	}
	else {
		StoredTime = res.mid.Persist['Dungeon']['QuestData']['best_clear_time'];
		if (res.mid.Request['play_record']['time'] != 0 && res.mid.Request['play_record']['time'] < StoredTime) {
			BestTime = res.mid.Request['play_record']['time'];
		}
		res.mid.Persist['Dungeon']['QuestData']['play_count'] += PlayCount;
		res.mid.Persist['Dungeon']['QuestData']['best_clear_time'] = BestTime;
	}
	
	let RepeatInfo = [];
	if (res.mid.Persist['Dungeon']['Repeat']['Active'] == true) {
		for (const x in res.mid.Persist['Dungeon']['Drop']['Item']) {
			res.mid.Persist['Dungeon']['Repeat']['ItemList'].push(res.mid.Persist['Dungeon']['Drop']['Item'][x]);
		}
		res.mid.Persist['Dungeon']['Repeat']['EventPoint'] += res.mid.Persist['Dungeon']['Drop']['EventPoint'];
		res.mid.Persist['Dungeon']['Repeat']['EventPointBonus'] += res.mid.Persist['Dungeon']['Drop']['EventPointBonus'];
		res.mid.Persist['Dungeon']['Repeat']['Coin'] += res.mid.Persist['Dungeon']['Drop']['Coin'];
		res.mid.Persist['Dungeon']['Repeat']['CoinBonus'] += res.mid.Persist['Dungeon']['Drop']['CoinBonus'];
		res.mid.Persist['Dungeon']['Repeat']['Wyrmite'] += res.mid.Persist['Dungeon']['Drop']['Wyrmite'];
		if (res.mid.Request['repeat_state'] == 0 || res.mid.Persist['Dungeon']['Repeat']['Cycle'] >= res.mid.Persist['Dungeon']['Repeat']['Count']) {
			res.mid.Persist['Dungeon']['Drop']['Item'] = res.mid.Persist['Dungeon']['Repeat']['ItemList'];
			res.mid.Persist['Dungeon']['Drop']['EventPoint'] = res.mid.Persist['Dungeon']['Repeat']['EventPoint'];
			res.mid.Persist['Dungeon']['Drop']['EventPointBonus'] = res.mid.Persist['Dungeon']['Repeat']['EventPointBonus'];
			res.mid.Persist['Dungeon']['Drop']['Coin'] = res.mid.Persist['Dungeon']['Repeat']['Coin'];
			res.mid.Persist['Dungeon']['Drop']['CoinBonus'] = res.mid.Persist['Dungeon']['Repeat']['CoinBonus'];
			res.mid.Persist['Dungeon']['Drop']['Wyrmite'] = res.mid.Persist['Dungeon']['Repeat']['Wyrmite'];
		}
		
		RepeatInfo = {
			'repeat_key': res.mid.Persist['Dungeon']['Repeat']['Key'],
			'repeat_count': res.mid.Persist['Dungeon']['Repeat']['Cycle'],
			'repeat_state': res.mid.Persist['Dungeon']['Repeat']['Active'] == true ? 1 : 0
		}
	}
	
	res.mid.Persist['Dungeon']['Drop']['Item'].push({'type': 23, 'id': 0, 'quantity': res.mid.Persist['Dungeon']['Drop']['Wyrmite']});
	
	let PlayerXP = ((global.Module.Quest.GetInfo(QuestID, "_PayStaminaSingle")
	+ global.Module.Quest.GetInfo(QuestID, "_PayStaminaMulti")
	+ PayEntity['quantity']) * 120) * PlayCount;
	const UnitXP = (PlayerXP * 2) * PlayCount;
	let CharaGrowList = [];
	for (const x in res.mid.Persist['Dungeon']['Party']['Setting']) {
		if (IsMulti == true && i > 0 && QuestInfo['_DungeonType'] != 2) { continue; }
		const CharacterID = res.mid.Persist['Dungeon']['Party']['Setting'][x]['chara_id'];
		if (CharacterID == 0) { continue; }
		const CharacterData = await global.Module.Character.GetUnitData(res.mid.ViewerID, CharacterID);
		CharacterData['exp'] += UnitXP;
		const MaxLevel = 80 + CharacterData['additional_max_level'];
		if (CharacterData['level'] < MaxLevel) {
			const NewLevel = global.Module.Character.GetLevel(CharacterData);
			CharacterData['level'] = NewLevel['Level'];
			CharacterData['exp'] = NewLevel['EXP'];
			GrowthTable.push({
				'chara_id': CharacterID,
				'take_exp': UnitXP
			});
			const NewStats = global.Module.Character.CalculateStats(CharacterID, CharacterData);
			CharacterData['hp'] = NewStats['HP'];
			CharacterData['attack'] = NewStats['Attack'];
			CharaGrowList.push(CharacterData);
		}
		else {
			GrowthTable.push({
				'chara_id': CharacterID,
				'take_exp': 0
			});
		}
		
		if (global.Module.Character.GetInfo(CharacterID, "_MaxFriendshipPoint") != 0) {
			const EventIDs = Object.keys(global.Master.EventData);
			for (const x in EventIDs) {
				if (
					global.Master.EventData[EventIDs[x]]['_EventCharaId'] == CharacterID &&
					res.mid.Persist['Event'][EventIDs[x]] != undefined
				) {
					if (res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0] != undefined) {
						let AddPoint = 0;
						if (global.Module.Character.GetInfo(CharacterID, "_MaxFriendshipPoint") > res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['total_point']) {
							if ((res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['total_point'] + 6) > global.Module.Character.GetInfo(CharacterID, "_MaxFriendshipPoint")) {
								const Remainder = global.Module.Character.GetInfo(CharacterID, "_MaxFriendshipPoint") - res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['total_point'];
								res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['total_point'] = global.Module.Character.GetInfo(CharacterID, "_MaxFriendshipPoint");
								res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['is_temporary'] = 0;
								AddPoint = Remainder;
							}
							else {
								res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['total_point'] += 6;
								AddPoint = 6;
							}
							FriendshipTable.push({
								'chara_id': res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['chara_id'],
								'total_point': res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['total_point'],
								'is_temporary': res.mid.Persist['Event'][EventIDs[x]]['Friendship'][0]['is_temporary'],
								'add_point': AddPoint
							});
						}
					}
				}
			}
		}
	
		const Medal = global.Module.Endeavour.MedalCheck(QuestID);
		const CharaMedalIndex = res.mid.Persist['Medals'].findIndex(z => z.chara_id == CharacterID);
		if (CharaMedalIndex == -1) {
			res.mid.Persist['Medals'].push({
				'chara_id': CharacterID,
				'honor_list': [ { 'honor_id': Medal } ]
			});
		}
		else {
			const MedalIndex = res.mid.Persist['Medals'][CharaMedalIndex]['honor_list'].findIndex(z => z.honor_id == Medal);
			if (MedalIndex == -1) { res.mid.Persist['Medals'][CharaMedalIndex]['honor_list'].push({ 'honor_id': Medal }); }
		}
		
		const Element = global.Module.Character.GetInfo(CharacterID, "_ElementalType");
		const Weapon = global.Module.Character.GetInfo(CharacterID, "_WeaponType");
		const Type = global.Module.Character.GetInfo(CharacterID, "_CharaType");
		res.mid.Persist['Endeavour']['Tracker']['Album']['Element'][String(Element)] += 1;
		res.mid.Persist['Endeavour']['Tracker']['Album']['Weapon'][String(Weapon)] += 1;
		res.mid.Persist['Endeavour']['Tracker']['Album']['Type'][String(Type)] += 1;
	}
	let LevelUpReward = 0;
	res.mid.Persist['User']['exp'] += PlayerXP;
	let NewLevel = 0;
	const LevelList = Object.keys(global.Master.UserLevel);
	for (const x in LevelList) {
		if (global.Master.UserLevel[LevelList[x]]['_TotalExp'] > res.mid.Persist['User']['exp']) {
			NewLevel = global.Master.UserLevel[LevelList[x]]['_Id'] - 1;
			break;
		}
	}
	while (res.mid.Persist['User']['level'] < NewLevel) {
		LevelUpReward += 50;
		res.mid.Persist['User']['level'] += 1;
		res.mid.Persist['User']['crystal'] += 50;
		res.mid.Persist['User']['stamina_single'] += global.Master.UserLevel[String(res.mid.Persist['User']['level'])]['_StaminaSingle'];
		if (res.mid.Persist['User']['stamina_single'] > 999) { res.mid.Persist['User']['stamina_single'] = 999; }
		res.mid.Persist['User']['stamina_multi'] += 12;
		if (res.mid.Persist['User']['stamina_multi'] > 99) { res.mid.Persist['User']['stamina_multi'] == 99; }
	}
	
	res.mid.Data = {
		'time_attack_ranking_data': [],
		'ingame_result_data': {
			'dungeon_key': res.mid.Persist['Dungeon']['Key'],
			'play_type': res.mid.Persist['Dungeon']['PlayType'],
			'quest_id': res.mid.Persist['Dungeon']['QuestID'],
			'reward_record': {
				'drop_all': res.mid.Persist['Dungeon']['Drop']['Item'],
				'first_clear_set': FirstClearSet,
				'quest_bonus_list': [],
				'reborn_bonus': [],
				'weekly_limit_reward_list': [],
				'challenge_quest_bonus_list': [],
				'campaign_extra_reward_list': [],
				'shop_quest_bonus_factor': 0,
				'mission_complete': MissionComplete,
				'missions_clear_set': MissionClearList,
				'enemy_piece': [],
				'take_coin': res.mid.Persist['Dungeon']['Drop']['Coin'] + res.mid.Persist['Dungeon']['Drop']['CoinBonus'],
				'take_accumulate_point': res.mid.Persist['Dungeon']['Drop']['EventPoint'] + res.mid.Persist['Dungeon']['Drop']['EventPointBonus'],
				'take_boost_accumulate_point': res.mid.Persist['Dungeon']['Drop']['EventPointBonus'],
				'player_level_up_fstone': LevelUpReward,
				'first_meeting': [],
				'take_astral_item_quantity': res.mid.Persist['Dungeon']['Drop']['Astral'],
				'carry_bonus': []
			},
			'grow_record': {
				'take_player_exp': PlayerXP,
				'take_chara_exp': UnitXP,
				'chara_grow_record': GrowthTable,
				'chara_friendship_list': FriendshipTable,
				'take_mana': res.mid.Persist['Dungeon']['Drop']['Mana'],
				'bonus_factor': 1.0,
				'mana_bonus_factor': 1.0
			},
			'start_time': res.mid.Persist['Dungeon']['Started'],
			'end_time': 0,
			'current_play_count': res.mid.Persist['Dungeon']['QuestData']['play_count'],
			'is_clear': FirstClearSet.length == 0 ? 0 : 1,
			'state': 1,
			'is_host': res.mid.Persist['Dungeon']['IsHost'],
			'is_fever_time': 0,
			'wave_count': 0,
			'reborn_count': 0,
			'helper_list': res.mid.Persist['Dungeon']['Party']['Support']['Info'],
			'helper_detail_list': res.mid.Persist['Dungeon']['Party']['Support']['Player'],
			'quest_party_setting': res.mid.Persist['Dungeon']['Party']['Setting'],
			'bonus_factor_list': [],
			'scoring_enemy_point_list': ScoreData['List'],
			'score_mission_success_list': ScoreData['Mission'],
			'event_passive_up_list': EventPassiveGrowList,
			'clear_time': res.mid.Request['play_record']['time'],
			'is_best_clear_time': BestTime != 0 ? 1 : 0,
			'converted_entity_list': [],
			'dungeon_skip_type': PlayCount > 1 ? 1 : 0,
			'total_play_damage': 0
		},
		'event_damage_ranking': [],
		'repeat_data': RepeatInfo,
		'update_data_list': {
			'quest_list': [ res.mid.Persist['Dungeon']['QuestData'] ],
			'chara_list': CharaGrowList
		}
	}
	for (const x in Substages) { res.mid.Data['update_data_list']['quest_list'].push(Substages[x]); }
	if (IsMulti == true) { delete res.mid.Data['repeat_data']; }
	return;
}
async function DungeonMultiClear(res, QuestList, PartyNo, EventList) {
	const PartyData = await DungeonData(res, [ PartyNo ], 0);
	let DisplayList = [];
	let Coin = 0;
	let Mana = 0;
	let PlayerXP = 0;
	for (const x in QuestList) {
		res.mid.Persist['Endeavour']['Tracker']['Daily']['Quests'] += 1;
		const QuestID = QuestList[x]['quest_id'];
		const PlayCount = QuestList[x]['play_count'];
		const Drops = global.Module.Quest.GetDrops(QuestID, EventList, PartyData['Info']['party_unit_list'], PlayCount);
		for (const z in Drops['Item']) {
			res.mid.ItemList.push(Drops['Item'][z]);
			DisplayList.push(Drops['Item'][z]);
		}
		res.mid.ItemList.push({ 'type': 4, 'id': 0, 'quantity': Drops['Coin'] + Drops['CoinBonus'] });
		res.mid.ItemList.push({ 'type': 18, 'id': 0, 'quantity': Drops['Mana'] });
		res.mid.ItemList.push({ 'type': 23, 'id': 0, 'quantity': Drops['Wyrmite'] });
		Coin += Drops['Coin'] + Drops['CoinBonus'];
		Mana += Drops['Mana'];
		
		PlayerXP += (global.Module.Quest.GetInfo(QuestID, "_PayStaminaSingle") * 12) * PlayCount;
	}
	let LevelUpReward = 0;
	if (res.mid.Persist['User']['level'] < 250) {
		res.mid.Persist['User']['exp'] += PlayerXP;
		let NewLevel = 0;
		const LevelList = Object.keys(global.Master.UserLevel);
		for (const x in LevelList) {
			if (global.Master.UserLevel[LevelList[x]]['_TotalExp'] > res.mid.Persist['User']['exp']) {
				NewLevel = global.Master.UserLevel[LevelList[x]]['_Id'] - 1;
				break;
			}
		}
		if (res.mid.Persist['User']['exp'] > 28253490) {
			res.mid.Persist['User']['level'] = 250;
			res.mid.Persist['User']['exp'] = 28253490;
		}
		while (res.mid.Persist['User']['level'] < NewLevel) {
			LevelUpReward += 50;
			res.mid.Persist['User']['level'] += 1;
			res.mid.Persist['User']['crystal'] += 50;
			res.mid.Persist['User']['stamina_single'] += global.Master.UserLevel[String(res.mid.Persist['User']['level'])]['_StaminaSingle'];
			if (res.mid.Persist['User']['stamina_single'] > 999) { res.mid.Persist['User']['stamina_single'] = 999; }
			res.mid.Persist['User']['stamina_multi'] += 12;
			if (res.mid.Persist['User']['stamina_multi'] > 99) { res.mid.Persist['User']['stamina_multi'] == 99; }
		}
	}
	global.Module.Util.CompactList(DisplayList);
	res.mid.ItemList.push({ 'type': 26, 'id': 10101, 'quantity': QuestList.length });
	const UnitXP = PlayerXP * 2;
	
	let GrowthTable = [];
	let FriendshipTable = [];
	let CharaGrowList = [];
	for (const x in PartyData['Setting']) {
		const CharacterID = PartyData['Setting'][x]['chara_id'];
		if (CharacterID == 0) { continue; }
		const CharacterData = await global.Module.Character.GetUnitData(res.mid.ViewerID, CharacterID);
		CharacterData['exp'] += UnitXP;
		const MaxLevel = 80 + CharacterData['additional_max_level'];
		if (CharacterData['level'] < MaxLevel) {
			const NewLevel = global.Module.Character.GetLevel(CharacterData);
			CharacterData['level'] = NewLevel['Level'];
			CharacterData['exp'] = NewLevel['EXP'];
			GrowthTable.push({
				'chara_id': CharacterID,
				'take_exp': UnitXP
			});
			const NewStats = global.Module.Character.CalculateStats(CharacterID, CharacterData);
			CharacterData['hp'] = NewStats['HP'];
			CharacterData['attack'] = NewStats['Attack'];
			CharaGrowList.push(CharacterData);
		}
		else {
			GrowthTable.push({
				'chara_id': CharacterID,
				'take_exp': 0
			});
		}
		
		if (global.Module.Character.GetInfo(CharacterID, "_MaxFriendshipPoint") != 0) {
			const EventIDs = Object.keys(global.Master.EventData);
			for (const x in EventIDs) {
				if (global.Master.EventData[EventIDs[x]]['_EventCharaId'] == CharacterID &&
				res.mid.Persist['Event'][EventIDs[x]] != undefined) {
					let EventTarget = "Raid";
					if (global.Master.EventData[EventIDs[x]]['EventKindType'] == 6) { EventTarget = "CLB01"; }
					if (res.mid.Persist['Event'][EventTarget][EventIDs[x]]['Friendship'][0] != undefined) {
						if (global.Module.Character.GetInfo(CharacterID, "_MaxFriendshipPoint") > res.mid.Persist['Event'][EventTarget][EventIDs[x]]['Friendship'][0]['total_point']) {
							if ((res.mid.Persist['Event'][EventTarget][EventIDs[x]]['Friendship'][0]['total_point'] + 6) > global.Module.Character.GetInfo(CharacterID, "_MaxFriendshipPoint")) {
								const Remainder = global.Module.Character.GetInfo(CharacterID, "_MaxFriendshipPoint") - res.mid.Persist['Event'][EventTarget][EventIDs[x]]['Friendship'][0]['total_point'];
								res.mid.Persist['Event'][EventTarget][EventIDs[x]]['Friendship'][0]['total_point'] = global.Module.Character.GetInfo(CharacterID, "_MaxFriendshipPoint");
								res.mid.Persist['Event'][EventTarget][EventIDs[x]]['Friendship'][0]['is_temporary'] = 0;
								res.mid.Persist['Event'][EventTarget][EventIDs[x]]['Friendship'][0]['add_point'] = Remainder;
							}
							else {
								res.mid.Persist['Event'][EventTarget][EventIDs[x]]['Friendship'][0]['total_point'] += 6;
								res.mid.Persist['Event'][EventTarget][EventIDs[x]]['Friendship'][0]['add_point'] = 6;
							}
							FriendshipTable.push(res.mid.Persist['Event'][EventTarget][EventIDs[x]]['Friendship'][0]);
						}
					}
				}
			}
		}
	}
	
	res.mid.Data = {
		'time_attack_ranking_data': [],
		'ingame_result_data': {
			'play_type': res.mid.Persist['Dungeon']['PlayType'],
			'reward_record': {
				'drop_all': DisplayList,
				'first_clear_set': [],
				'quest_bonus_list': [],
				'reborn_bonus': [],
				'weekly_limit_reward_list': [],
				'challenge_quest_bonus_list': [],
				'campaign_extra_reward_list': [],
				'shop_quest_bonus_factor': 0,
				'mission_complete': [],
				'missions_clear_set': [],
				'enemy_piece': [],
				'take_coin': Coin,
				'take_accumulate_point': 0,
				'take_boost_accumulate_point': 0,
				'player_level_up_fstone': LevelUpReward,
				'first_meeting': [],
				'take_astral_item_quantity': QuestList.length,
				'carry_bonus': []
			},
			'grow_record': {
				'take_player_exp': PlayerXP,
				'take_chara_exp': UnitXP,
				'chara_grow_record': GrowthTable,
				'chara_friendship_list': FriendshipTable,
				'take_mana': Mana,
				'bonus_factor': 1.0,
				'mana_bonus_factor': 1.0
			},
			'start_time': global.ServerTime,
			'end_time': 0,
			'current_play_count': 1,
			'is_clear': 1,
			'state': 1,
			'is_host': 1,
			'is_fever_time': 0,
			'wave_count': 0,
			'reborn_count': 0,
			'helper_list': [],
			'helper_detail_list': [],
			'quest_party_setting_list': PartyData['Setting'],
			'bonus_factor_list': [],
			'scoring_enemy_point_list': [],
			'score_mission_success_list': [],
			'event_passive_up_list': [],
			'clear_time': -1,
			'is_best_clear_time': 0,
			'converted_entity_list': [],
			'dungeon_skip_type': 2,
			'total_play_damage': 0
		},
		'event_damage_ranking': [],
		'repeat_data': [],
		'update_data_list': {
			'chara_list': CharaGrowList
		}
	}
	
	return;
}
async function WallRecord(res, WallID) {
	res.mid.ItemList.push({'type': 4, 'id': 0, 'quantity': res.mid.Persist['Wall']['Drop']['enemy'][0]['enemy_drop_list'][0]['coin']});
	res.mid.ItemList.push({'type': 18, 'id': 0, 'quantity': res.mid.Persist['Wall']['Drop']['enemy'][0]['enemy_drop_list'][0]['coin']});
	res.mid.ItemList.push({'type': 23, 'id': 0, 'quantity': 25});
	
	const WallData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "quest_wall_list", { 'wall_id': WallID });
	res.mid.Data = {
		'wall_clear_reward_list': [{
			'entity_type': 23,
			'entity_id': 0,
			'entity_quantity': 25
		}],
		'wall_drop_reward': {
			'reward_entity_list': [],
			'take_coin': res.mid.Persist['Wall']['Drop']['enemy'][0]['enemy_drop_list'][0]['coin'],
			'take_mana': res.mid.Persist['Wall']['Drop']['enemy'][0]['enemy_drop_list'][0]['mana']
		},
		'wall_unit_info': {
			'helper_list': res.mid.Persist['Wall']['Party']['Support']['Info'],
			'helper_detail_list': res.mid.Persist['Wall']['Party']['Support']['Player'],
			'quest_party_setting_list': res.mid.Persist['Wall']['Party']['Setting']
		},
		'play_wall_detail': {
			'wall_id': WallID,
			'before_wall_id': WallData['wall_level'],
			'after_wall_id': res.mid.Persist['Wall']['Level']
		},
		'update_data_list': {
			'quest_wall_list': [{
                'quest_group_id': 21601,
                'wall_id': WallID,
                'wall_level': res.mid.Persist['Wall']['Level'],
                'is_start_next_level': res.mid.Persist['Wall']['Level'] <= 80 ? 1 : 0
            }]
		}
	}
	return;
}

async function WallReward(res, WallResetTime) {
	const WallList = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "quest_wall_list");
	let WallTotal = 0;
	for (const x in WallList) { WallTotal += WallList[x]['wall_level']; }
	res.mid.Data = {
		'user_wall_reward_list': [{
			'quest_group_id': 21601,
			'sum_wall_level': WallTotal,
			'last_reward_date': 0,
			'reward_status': 2
		}]
	}
	if (res.mid.Persist['WallLastReward'] < WallResetTime) {
		res.mid.Data['wall_monthly_reward_list'] = [];
		res.mid.Persist['WallLastReward'] = global.ServerTime;
		let i = 1; while (i <= WallTotal) {
			const Index = String(i);
			res.mid.Data['wall_monthly_reward_list'].push({
				'entity_type': global.Master.QuestWallMonthlyReward[Index]['_RewardEntityType'],
				'entity_id': global.Master.QuestWallMonthlyReward[Index]['_RewardEntityId'],
				'entity_quantity': global.Master.QuestWallMonthlyReward[Index]['_RewardEntityQuantity'],
			});
			res.mid.ItemList.push({
				'type': global.Master.QuestWallMonthlyReward[Index]['_RewardEntityType'],
				'id': global.Master.QuestWallMonthlyReward[Index]['_RewardEntityId'],
				'quantity': global.Master.QuestWallMonthlyReward[Index]['_RewardEntityQuantity'],
			});
			i++;
		}
		
		res.mid.Data['monthly_wall_receive_list'] = [{
			'quest_group_id': 21601,
			'is_receive_reward': 1
		}];
	}
	
	return;
}
function OvercountGift(res, Item, Prefix) {
	if (res.mid.Persist['Gift']['Normal'].length < 200) {
		res.mid.Persist['Gift']['ID'] += 1;
		res.mid.Persist['Gift']['Normal'].push({
			'present_id': res.mid.Persist['Gift']['ID'],
			'master_id': 0,
			'state': 0,
			'entity_type': Item[Prefix + 'type'],
			'entity_id': Item[Prefix + 'id'],
			'entity_quantity': 1,
			'entity_level': Item[Prefix + 'level'] != undefined ? Item[Prefix + 'level'] : 1,
			'entity_limit_break_count': Item[Prefix + 'limit_break_count'] != undefined ? Item[Prefix + 'limit_break_count'] : 0,
			'entity_status_plus_count': 0,
			'message_id': 2000001,
			'message_param_value_1': 0,
			'message_param_value_2': 0,
			'message_param_value_3': 0,
			'message_param_value_4': 0,
			'create_time': global.ServerTime,
			'receive_limit_time': 0
		});
	}
	return;
}
const NoIDList = [ 4, 5, 6, 14, 16, 18, 23, 28 ];
async function ItemParser(ItemList, res, Prefix) {
	const TypeName = Prefix + "type";
	const IDName = Prefix + "id";
	const AmountName = Prefix + "quantity";
	const LevelName = Prefix + "level";
	const LimitName = Prefix + "limit_break_count";
	
	if (res.mid.Data['update_data_list'] == undefined) {
		res.mid.Data['update_data_list'] = {}
	}
	if (res.mid.Data['entity_result'] == undefined) {
		res.mid.Data['entity_result'] = {
			'new_get_entity_list': [],
			'converted_entity_list': [],
			'over_discard_entity_list': []
		}
	}
	
	ItemList = global.Module.Util.CompactList(ItemList);
	
	for (const x in ItemList) {
		if (!NoIDList.includes(ItemList[x][TypeName]) && ItemList[x][IDName] == 0) { continue; }
		if (ItemList[x][IDName] == undefined || isNaN(ItemList[x][IDName])) { continue; }
		else if (ItemList[x][AmountName] == 0 || ItemList[x][AmountName] == undefined || isNaN(ItemList[x][AmountName])) { continue; }
		let EventID = 0;
		let Index = -1;
		let ItemData = {};
		let Target = "";
		let Count = ItemList[x][AmountName];
		let KeyID = 0;
		let Holding = 0;
		let Added = 0;
		let OverCount = 0;
		let NewData = {};
		switch(ItemList[x][TypeName]) {
			case 1:
				Index = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "chara_list", { "chara_id": ItemList[x][IDName] });
				if (Index == false) {
					Target = "chara_list";
					NewData = global.Module.Character.Create(ItemList[x][IDName], 1);
					if (res.mid.Data['update_data_list']['unit_story_list'] == undefined) {
						res.mid.Data['update_data_list']['unit_story_list'] = [];
					}
					if (global.Module.Character.HasStory(ItemList[x][IDName]) == true) {
						res.mid.Data['update_data_list']['unit_story_list'].push({
							'unit_story_id': global.Module.Character.GetInfo(ItemList[x][IDName], "StoryID"),
							'is_read': 0
						});
					}
					res.mid.Data['entity_result']['new_get_entity_list'].push({
						'entity_type': 1, 'entity_id': ItemList[x][IDName]
					});
				}
			break;
			case 2:
				Target = "item_list";
				NewData = { 'item_id': ItemList[x][IDName] }
				Index = res.mid.Persist['Item'].findIndex(z => z.item_id == ItemList[x][IDName]);
				if (Index == -1) {
					NewData['quantity'] = ItemList[x][AmountName];
					res.mid.Persist['Items'].push(NewData);
				}
				else {
					NewData['quantity'] = global.Module.Util.SaneValue(res.mid.Persist['Item'][Index]['quantity'] + ItemList[x][AmountName]);
					res.mid.Persist['Item'][Index] = NewData;
				}
			break;
			case 3:
				Target = "weapon_list";
				Holding = await global.Module.Fluoresce.Count("OrchisIndex", res.mid.ViewerID, Target);
				if (res.mid.Data['update_data_list']['weapon_list'] != undefined) { Added = res.mid.Data['update_data_list']['weapon_list'].length; }
				NewData = [];
				while ((NewData.length + OverCount) < ItemList[x][AmountName]) {
					if ((Holding + Added + NewData.length) >= res.mid.Persist['User']['max_weapon_quantity']) {
						OvercountGift(res, ItemList[x], Prefix);
						OverCount += 1;
					}
					else {
						res.mid.Persist['Key']['Weapon'] += 1;
						
						const WeaponData = Weapon.Create(ItemList[x][IDName], res.mid.Persist['Key']['Weapon'], ItemList[x][LevelName], ItemList[x][LimitName]);
						
						if (WeaponData['rarity'] == 4 && res.mid.Persist['Options']['is_auto_lock_weapon_sr'] == 1) { WeaponData['is_lock'] = 1; }
						if (WeaponData['rarity'] == 5 && res.mid.Persist['Options']['is_auto_lock_weapon_ssr'] == 1) { WeaponData['is_lock'] = 1; }
						
						NewData.push(WeaponData);
					}
				}
			break;
			case 4:
				Target = "user_data";
				Count = global.Module.Util.SaneValueDouble(res.mid.Persist['User']['coin'] + ItemList[x][AmountName]);
				res.mid.Persist['User']['coin'] = Count;
			break;
			case 5: // technically, this should be free_diamond, but oh well
				Target = "diamond_data";
				Count = global.Module.Util.SaneValue(res.mid.Persist['Diamantium'] + ItemList[x][AmountName]);
				NewData = { 'free_diamond': 0, 'paid_diamond': Count };
				res.mid.Persist['Diamantium'] = Count;
			break;
			case 6:
				Target = "diamond_data";
				Count = global.Module.Util.SaneValue(res.mid.Persist['Diamantium'] + ItemList[x][AmountName]);
				NewData = { 'free_diamond': 0, 'paid_diamond': Count };
				res.mid.Persist['Diamantium'] = Count;
			break;
			case 7:
				Target = "dragon_list";
				Holding = await global.Module.Fluoresce.Count("OrchisIndex", res.mid.ViewerID, Target);
				if (res.mid.Data['update_data_list']['dragon_list'] != undefined) { Added = res.mid.Data['update_data_list']['dragon_list'].length; }
				NewData = [];
				while ((NewData.length + OverCount) < ItemList[x][AmountName]) {
					if ((Holding + Added + NewData.length) >= res.mid.Persist['User']['max_dragon_quantity']) {
						OvercountGift(res, ItemList[x], Prefix);
						OverCount += 1;
					}
					else {
						res.mid.Persist['Key']['Dragon'] += 1;
						const DragonData = global.Module.Dragon.Create(res.mid.Persist['Key']['Dragon'], ItemList[x][IDName], ItemList[x][LevelName], ItemList[x][LimitName]);
						
						if (DragonData['rarity'] == 4 && res.mid.Persist['Options']['is_auto_lock_dragon_sr'] == 1) { DragonData['is_lock'] = 1; }
						if (DragonData['rarity'] == 5 && res.mid.Persist['Options']['is_auto_lock_dragon_ssr'] == 1) { DragonData['is_lock'] = 1; }
						
						NewData.push(DragonData);
						Index = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "dragon_reliability_list", { 'dragon_id': ItemList[x][IDName] });
						if (Index == false) {
							if (res.mid.Data['update_data_list']['dragon_reliability_list'] == undefined) {
								res.mid.Data['update_data_list']['dragon_reliability_list'] = [];
							}
							const DefaultBond = global.Module.Dragon.GetInfo(ItemList[x][IDName], "_DefaultReliabilityLevel");
							if (DefaultBond == 0) {
								res.mid.Data['update_data_list']['dragon_reliability_list'].push({
									'dragon_id': ItemList[x][IDName],
									'get_time': global.ServerTime,
									'reliability_level': 1,
									'reliability_total_exp': 0,
									'last_contact_time': 0
								});
							}
							else {
								const DragonRarity = global.Module.Dragon.GetInfo(ItemList[x][IDName], "_Rarity");
								const BondXP = DragonRarity == 5 ? global.Master.DragonReliabilityLevel[String(DefaultBond)]['_TotalReliability'] : global.Master.DragonReliabilityLevel[String(2000 + DefaultBond)]['_TotalReliability'];
								res.mid.Data['update_data_list']['dragon_reliability_list'].push({
									'dragon_id': ItemList[x][IDName],
									'get_time': global.ServerTime,
									'reliability_level': DefaultBond,
									'reliability_total_exp': BondXP,
									'last_contact_time': 0
								});
								if (res.mid.Data['update_data_list']['unit_story_list'] == undefined) {
									res.mid.Data['update_data_list']['unit_story_list'] = [];
								}
								const DragonStoryID = global.Module.Dragon.GetInfo(ItemList[x][IDName], "StoryID");
								if (DefaultBond >= 5) {
									res.mid.Data['update_data_list']['unit_story_list'].push({
										'unit_story_id': DragonStoryID,
										'is_read': 0
									});
								}
								if (DefaultBond >= 10) {
									res.mid.Data['update_data_list']['unit_story_list'].push({
										'unit_story_id': DragonStoryID + 1,
										'is_read': 0
									});
								}
							}
							res.mid.Data['entity_result']['new_get_entity_list'].push({
								'entity_type': 7, 'entity_id': ItemList[x][IDName]
							});
						}
					}
				}
			break;
			case 8:
				Target = "material_list";
				ItemData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, Target, { "material_id": ItemList[x][IDName] });
				if (ItemData != false) {
					Count = global.Module.Util.SaneValue(ItemData['quantity'] + ItemList[x][AmountName]);
				}
				NewData = { 'material_id': ItemList[x][IDName], 'quantity': Count };
				const MatchPrint = Object.values(global.Master.AbilityCrest).find(z => z._UniqueBuildupMaterialId == ItemList[x][IDName]);
				if (MatchPrint != undefined) {
					Index = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "ability_crest_list", { "ability_crest_id": MatchPrint['_Id'] })
					if (Index == false) {
						if (res.mid.Data['update_data_list']['ability_crest_list'] == undefined) {
							res.mid.Data['update_data_list']['ability_crest_list'] = [];
						}
						res.mid.Data['update_data_list']['ability_crest_list'].push(global.Module.Crest.Create(MatchPrint['_Id'], 0, 0, 1));
						res.mid.Data['entity_result']['new_get_entity_list'].push({ 'entity_type': 12, 'entity_id': MatchPrint['_Id'] });
					}
				}
			break;
			case 9:
				Target = "build_list";
				NewData = [];
				let BuildDetailID = String(ItemList[x][IDName]) + "00";
				let Level = 0;
				if (global.Master.FortPlantDetail[BuildDetailID] == undefined) {
					BuildDetailID = String(ItemList[x][IDName]) + "01";
					Level = 1;
				}
				if (ItemList[x][LevelName] != undefined) {
					Level = ItemList[x][LevelName];
					if (Level < 10) { BuildDetailID = String(ItemList[x][IDName]) + "0" + String(Level); }
					else { BuildDetailID = String(ItemList[x][IDName]) + String(Level); }
				}
				while (Count > 0) {
					res.mid.Persist['Key']['Build'] += 1;
					let FortPlant = {
						'build_id': res.mid.Persist['Key']['Build'],
						'fort_plant_detail_id': parseInt(BuildDetailID),
						'position_x': -1,
						'position_z': -1,
						'build_status': 0,
						'build_start_date': 0,
						'build_end_date': 0,
						'level': Level,
						'plant_id': ItemList[x][IDName],
						'is_new': 0,
						'remain_time': 0,
						'last_income_date': -1
					}
					const BuildData = global.Master.FortPlantDetail[BuildDetailID];
					if (BuildData['_StaminaMax'] != 0 || BuildData['_CostMax'] != 0 || BuildData['_MaterialMax'] != 0) {
						FortPlant['last_income_date'] = global.ServerTime;
						FortPlant['last_income_time'] = 0;
					}
					NewData.push(FortPlant);
					res.mid.Data['entity_result']['new_get_entity_list'].push({
						'entity_type': 9, 'entity_id': ItemList[x][IDName]
					});
					Count--;
				}
			break;
			case 10:
				Index = res.mid.Persist['Epithet'].findIndex(z => z.emblem_id == ItemList[x][IDName]);
				if (Index == -1) {
					Target = "emblem_list";
					NewData = { 'emblem_id': ItemList[x][IDName], 'is_new': 0, 'gettime': global.ServerTime };
					res.mid.Persist['Epithet'].push(NewData);
				}
				else {
					Target = "user_data";
					Count = global.Module.Util.SaneValueDouble(res.mid.Persist['User']['crystal'] + global.Module.EmblemData[String(ItemList[x][IDName])]['_DuplicateEntityQuantity']);
					res.mid.Persist['User']['crystal'] = Count;
				}
			break;
			case 11:
				Index = res.mid.Persist['Stickers'].findIndex(z => z.stamp_id == ItemList[x][IDName]);
				if (Index == -1) {
					Target = "stamp_list";
					NewData = { 'stamp_id': ItemList[x][IDName], 'is_new': 0 };
					res.mid.Persist['Stickers'].push(NewData);
				}
			break;
			case 12:
				Target = "amulet_list";
				Holding = await global.Module.Fluoresce.Count("OrchisIndex", res.mid.ViewerID, Target);
				if (res.mid.Data['update_data_list']['amulet_list'] != undefined) { Added = res.mid.Data['update_data_list']['amulet_list'].length; }
				NewData = [];
				while ((NewData.length + OverCount) < ItemList[x][AmountName]) {
					if ((Holding + Added + NewData.length) >= res.mid.Persist['User']['max_amulet_quantity']) {
						OvercountGift(res, ItemList[x], Prefix);
						OverCount += 1;
					}
					else {
						res.mid.Persist['Key']['Amulet'] += 1;
						
						const AmuletData = Amulet.Create(ItemList[x][IDName], res.mid.Persist['Key']['Amulet'], ItemList[x][LevelName], ItemList[x][LimitName]);
						
						if (AmuletData['rarity'] == 4 && res.mid.Persist['Options']['is_auto_lock_amulet_sr'] == 1) { AmuletData['is_lock'] = 1; }
						if (AmuletData['rarity'] == 5 && res.mid.Persist['Options']['is_auto_lock_amulet_ssr'] == 1) { AmuletData['is_lock'] = 1; }
						
						NewData.push(AmuletData);
					}
				}
			break;
			case 13: break;
			case 14:
				Target = "user_data";
				Count = global.Module.Util.SaneValue(res.mid.Persist['User']['dew_point'] + ItemList[x][AmountName]);
				res.mid.Persist['User']['dew_point'] = Count;
			break;
			case 15:
				Target = "dragon_gift_list";
				ItemData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, Target, { "dragon_gift_id": ItemList[x][IDName] });
				if (ItemData != false) {
					Count = global.Module.Util.SaneValue(ItemData['quantity'] + ItemList[x][AmountName]);
				}
				NewData = { 'dragon_gift_id': ItemList[x][IDName], 'quantity': Count };
			break;
			case 16:
				Target = "user_data";
				Count = global.Module.Util.SaneValue(res.mid.Persist['User']['quest_skip_point'] + ItemList[x][AmountName]);
				res.mid.Persist['User']['quest_skip_point'] = Count;
			break;
			case 17:
				Target = "summon_ticket_list";
				KeyID = KeyIDByTicket(ItemList[x][IDName]);
				ItemData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, Target, { "summon_ticket_id": ItemList[x][IDName] });
				if (ItemData != false) {
					KeyID = ItemData['key_id'];
					Count = global.Module.Util.SaneValue(ItemData['quantity'] + ItemList[x][AmountName]);
				}
				NewData = { 'key_id': KeyID, 'summon_ticket_id': ItemList[x][IDName], 'quantity': Count, 'use_time_limit': 0 };
			break;
			case 18:
				Target = "user_data";
				Count = global.Module.Util.SaneValue(res.mid.Persist['User']['mana_point'] + ItemList[x][AmountName]);
				res.mid.Persist['User']['mana_point'] = Count;
			break;
			case 19: 
				Target = "exchange_ticket_list";
				ItemData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, Target, { "exchange_ticket_id": ItemList[x][IDName] });
				if (ItemData != false) {
					Count = global.Module.Util.SaneValue(ItemData['quantity'] + ItemList[x][AmountName]);
				}
				NewData = { 'exchange_ticket_id': ItemList[x][IDName], 'quantity': Count };
			break;
			case 20:
				Target = "raid_event_user_list";
				EventID = global.Master.RaidEventItem[String(ItemList[x][IDName])]['_RaidEventId'];
				KeyID = global.Master.RaidEventItem[String(ItemList[x][IDName])]['_RaidEventItemType'];
				switch(KeyID) {
					case 10101:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['box_summon_point'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['box_summon_point'] = Count;
					break;
					case 10201:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['raid_point_1'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['raid_point_1'] = Count;
					break;
					case 10202:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['raid_point_2'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['raid_point_2'] = Count;
					break;
					case 10203:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['raid_point_3'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['raid_point_3'] = Count;
					break;
					case 10301:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['advent_item_quantity_1'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['advent_item_quantity_1'] = Count;
					break;
					case 10302:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['advent_item_quantity_2'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['advent_item_quantity_2'] = Count;
					break;
					case 10401:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['ultimate_key_count'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['ultimate_key_count'] = Count;
					break;
					case 10501:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['exchange_item_count'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['exchange_item_count'] = Count;
					break;
					case 10502:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['exchange_item_count_2'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['exchange_item_count'] = Count;
					break;
				}
			break;
			case 21: // Maze event item
			break;
			case 22:
				Target = "build_event_user_list";
				EventID = global.Master.BuildEventItem[String(ItemList[x][IDName])]['_EventId'];
				KeyID = global.Master.BuildEventItem[String(ItemList[x][IDName])]['_EventItemType'];
				Index = res.mid.Persist['Event'][EventID]['User'].findIndex(z => z.user_build_event_item == KeyID);
				Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User'][Index]['event_item_value'] + ItemList[x][AmountName]);
				res.mid.Persist['Event'][EventID]['User'][Index]['event_item_value'] = Count;
			break;
			case 23:
				Target = "user_data";
				Count = global.Module.Util.SaneValue(res.mid.Persist['User']['crystal'] + ItemList[x][AmountName]);
				res.mid.Persist['User']['crystal'] = Count;
			break;
			case 24: // Collect event item
			break;
			case 25:
				Target = "clb_01_event_user_list";
				EventID = global.Master.Clb01EventItem[String(ItemList[x][IDName])]['_EventId'];
				KeyID = global.Master.Clb01EventItem[String(ItemList[x][IDName])]['_EventItemType'];
				Index = res.mid.Persist['Event'][EventID]['User'].findIndex(z => z.user_clb_01_event_item == KeyID);
				Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User'][Index]['event_item_value'] + ItemList[x][AmountName]);
				res.mid.Persist['Event'][EventID]['User'][Index]['event_item_value'] = Count;
			break;
			case 26:
				Target = "astral_item_list";
				ItemData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, Target, { "astral_item_id": ItemList[x][IDName] });
				if (ItemData != false) {
					Count = ItemData['quantity'] + ItemList[x][AmountName];
					if (Count > 300) {
						OverCount = Count - 300;
						Count = 300;
					}
				}
				NewData = { 'astral_item_id': ItemList[x][IDName], 'quantity': Count }
			break;
			case 27: // Guild emblem
			break;
			case 28:
				Target = "user_data";
				Count = global.Module.Util.SaneValue(res.mid.Persist['User']['build_time_point'] + ItemList[x][AmountName]);
				res.mid.Persist['User']['build_time_point'] = Count;
			break;
			case 29: // Mega Man event item
			break;
			case 30: // Simple event item
			break;
			case 31: // Lottery ticket
			break;
			case 32: // Monster Hunter event item
			break;
			case 33:
				Target = "gather_item_list";
				let WeeklyCount = ItemList[x][AmountName];
				let WeeklyReset = global.ServerTime;
				ItemData = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, Target, { "gather_item_id": ItemList[x][IDName] });
				if (ItemData != false) {
					Count = global.Module.Util.SaneValue(ItemData['quantity'] + ItemList[x][AmountName]);
					WeeklyCount = ItemData['quest_take_weekly_quantity'] + ItemList[x][AmountName];
					WeeklyReset = ItemData['quest_last_weekly_reset_time'];
				}
				NewData = { 'gather_item_id': ItemList[x][IDName], 'quantity': Count, 'quest_last_weekly_reset_time': WeeklyReset, 'quest_take_weekly_quantity': WeeklyCount }
			break;
			case 34:
				Target = "combat_event_user_list";
				EventID = global.Master.CombatEventItem[String(ItemList[x][IDName])]['_EventId'];
				KeyID = global.Master.CombatEventItem[String(ItemList[x][IDName])]['_EventItemType'];
				switch(KeyID) {
					case 10101:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['exchange_item_01'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['exchange_item_01'] = Count;
					break;
					case 10201:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['event_point'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['event_point'] = Count;
					break;
					case 10301:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['advent_item_01'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['advent_item_01'] = Count;
					break;
					case 10401:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['quest_unlock_item_01'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['quest_unlock_item_01'] = Count;
					break;
					case 10501:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['story_unlock_item_01'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['story_unlock_item_01'] = Count;
					break;
				}
			break;
			case 35: // Summon Point
			break;
			case 36: // Battle Royale item
			break;
			case 37:
				Index = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "weapon_skin_list", { "weapon_skin_id": ItemList[x][IDName] })
				if (Index == false) {
					Target = "weapon_skin_list";
					NewData = { 'weapon_skin_id': ItemList[x][IDName], 'is_new': 1, 'gettime': global.ServerTime }
					res.mid.Data['entity_result']['new_get_entity_list'].push({
						'entity_type': 37, 'entity_id': ItemList[x][IDName]
					});
				}
				else {
					let NewMaterial = {};
					NewMaterial[TypeName] = global.Master.WeaponSkin[String(ItemList[x][IDName])]['_DuplicateEntityType'];
					NewMaterial[IDName] = global.Master.WeaponSkin[String(ItemList[x][IDName])]['_DuplicateEntityId'];
					NewMaterial[AmountName] = global.Master.WeaponSkin[String(ItemList[x][IDName])]['_DuplicateEntityQuantity'];
					ItemList.push(NewMaterial);
					res.mid.Data['entity_result']['converted_entity_list'].push({
						'before_entity_type': 37,
						'before_entity_id': ItemList[x][IDName],
						'before_entity_amount': ItemList[x][AmountName],
						'after_entity_type': NewMaterial[TypeName],
						'after_entity_id': NewMaterial[IDName],
						'after_entity_quantity': NewMaterial[AmountName]
					});
				}
			break;
			case 38:
				Index = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "weapon_body_list", { "weapon_body_id": ItemList[x][IDName] })
				if (Index == false) {
					Target = "weapon_body_list";
					NewData = global.Module.WeaponBody.Create(ItemList[x][IDName], 0, 0);
					res.mid.Data['entity_result']['new_get_entity_list'].push({
						'entity_type': 3, 'entity_id': ItemList[x][IDName]
					});
					if (res.mid.Data['update_data_list']['weapon_skin_list'] == undefined) {
						res.mid.Data['update_data_list']['weapon_skin_list'] = [];
					}
					res.mid.Data['update_data_list']['weapon_skin_list'].push({
						'weapon_skin_id': global.Master.WeaponBody[String(ItemList[x][IDName])]['_WeaponSkinId'],
						'is_new': 1,
						'gettime': global.ServerTime
					});
					res.mid.Data['entity_result']['new_get_entity_list'].push({
						'entity_type': 37, 'entity_id': global.Master.WeaponBody[String(ItemList[x][IDName])]['_WeaponSkinId']
					});
				}
				else {
					let NewMaterial = {};
					NewMaterial[TypeName] = global.Master.WeaponBody[String(ItemList[x][IDName])]['_DuplicateEntityType'];
					NewMaterial[IDName] = global.Master.WeaponBody[String(ItemList[x][IDName])]['_DuplicateEntityId'];
					NewMaterial[AmountName] = global.Master.WeaponBody[String(ItemList[x][IDName])]['_DuplicateEntityQuantity'];
					ItemList.push(NewMaterial);
					res.mid.Data['entity_result']['converted_entity_list'].push({
						'before_entity_type': 38,
						'before_entity_id': ItemList[x][IDName],
						'before_entity_amount': ItemList[x][AmountName],
						'after_entity_type': NewMaterial[TypeName],
						'after_entity_id': NewMaterial[IDName],
						'after_entity_quantity': NewMaterial[AmountName]
					});
				}
			break;
			case 39:
				Index = await global.Module.Fluoresce.Read("OrchisIndex", res.mid.ViewerID, "ability_crest_list", { "ability_crest_id": ItemList[x][IDName] })
				if (Index == false) {
					Target = "ability_crest_list";
					NewData = global.Module.Crest.Create(ItemList[x][IDName], 0, 0, 1);
					res.mid.Data['entity_result']['new_get_entity_list'].push({
						'entity_type': 12, 'entity_id': ItemList[x][IDName]
					});
				}
				else {
					Target = "user_data";
					let Base = 0;
					const Rarity = global.Module.Crest.GetInfo(ItemList[x][IDName], "_Rarity");
					if (Rarity == 9) { continue; }
					if (Rarity <= 3) { Base = 300; }
					else if (Rarity == 4) { Base = 1000; }
					else if (Rarity == 5) { Base = 3000; }
					Count = global.Module.Util.SaneValue(res.mid.Persist['User']['dew_point'] + (Base * ItemList[x][AmountName]));
					res.mid.Persist['User']['dew_point'] = Count;
					res.mid.Data['entity_result']['converted_entity_list'].push({
						'before_entity_type': 39,
						'before_entity_id': ItemList[x][IDName],
						'before_entity_amount': ItemList[x][AmountName],
						'after_entity_type': 14,
						'after_entity_id': 0,
						'after_entity_quantity': Base * ItemList[x][AmountName]
					});
				}
			break;
			case 40:
				Target = "earn_event_user_list";
				EventID = global.Master.EarnEventItem[String(ItemList[x][IDName])]['_EventId'];
				KeyID = global.Master.EarnEventItem[String(ItemList[x][IDName])]['_EventItemType'];
				switch(KeyID) {
					case 10101:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['advent_item_quantity_01'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['advent_item_quantity_01'] = Count;
					break;
					case 10201:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['exchange_item_01'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['exchange_item_01'] = Count;
					break;
					case 10202:
						Count = global.Module.Util.SaneValue(res.mid.Persist['Event'][EventID]['User']['exchange_item_02'] + ItemList[x][AmountName]);
						res.mid.Persist['Event'][EventID]['User']['exchange_item_02'] = Count;
					break;
				}
			break;
			case 41: // talisman list
			break;
			case 42:
				Target = "dmode_info";
				if (ItemList[x][IDName] == 10001) {
					Count = res.mid.Persist['DMode']['Info']['dmode_point_1'] + ItemList[x][AmountName];
					res.mid.Persist['DMode']['Info']['dmode_point_1'] = Count;
				}
				else if (ItemList[x][IDName] == 10002) {
					Count = res.mid.Persist['DMode']['Info']['dmode_point_2'] + ItemList[x][AmountName];
					res.mid.Persist['DMode']['Info']['dmode_point_2'] = Count;
				}
			break;
		}

		if (Target != "") {
			if (res.mid.Data['update_data_list'][Target] == undefined) {
				res.mid.Data['update_data_list'][Target] = [];
			}
			switch(Target) {
				case "user_data":
					res.mid.Data['update_data_list'][Target] = res.mid.Persist['User'];
				break;
				case "diamond_data":
					res.mid.Data['update_data_list'][Target] = NewData;
				break;
				case "dmode_info":
					res.mid.Data['update_data_list'][Target] = res.mid.Persist['DMode']['Info'];
				break;
				case "raid_event_user_list":
					res.mid.Data['update_data_list'][Target] = [ res.mid.Persist['Event'][EventID]['User'] ];
				break;
				case "build_event_user_list":
					res.mid.Data['update_data_list'][Target] = [{
						'build_event_id': EventID,
						'user_build_event_item_list': res.mid.Persist['Event'][EventID]['User']
					}]
				break;
				case "clb_01_event_user_list":
					res.mid.Data['update_data_list'][Target] = [{
						'clb_01_event_id': EventID,
						'user_clb_01_event_item_list': res.mid.Persist['Event'][EventID]['User']
					}]
				break;
				case "combat_event_user_list":
					res.mid.Data['update_data_list'][Target] = [ res.mid.Persist['Event'][EventID]['User'] ];
				break;
				case "earn_event_user_list":
					res.mid.Data['update_data_list'][Target] = [ res.mid.Persist['Event'][EventID]['User'] ];
				break;
				case "build_list": undefined;
				case "dragon_list": undefined;
				case "weapon_list": undefined;
				case "amulet_list":
					for (const y in NewData) {
						res.mid.Data['update_data_list'][Target].push(NewData[y]);
					}
				break;
				default:
					res.mid.Data['update_data_list'][Target].push(NewData);
				break;
			}
		}
	}
	return;
}

module.exports = { LoginBonus, GenerateOdds, KeyIDByTicket, GetQuestRotation,
				   GetSummonList, GetSigilTrade, PerformSigilTrade,
				   PerformSummon, CalculateBonuses, GenerateFacilityMax, CreateBuild,
				   DungeonData, DungeonDataArchaea, CoOpDungeonData,
				   DungeonRecord, DungeonRecordArchaea, DungeonMultiClear,
				   WallRecord, WallReward,
				   ItemParser }