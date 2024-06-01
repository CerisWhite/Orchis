// LevelMap.js

const PlayerLevel = [
	{"level":1,"exp":0,"stamina":18}, {"level":2,"exp":120,"stamina":20},
	{"level":3,"exp":270,"stamina":22}, {"level":4,"exp":510,"stamina":24},
	{"level":5,"exp":780,"stamina":25}, {"level":6,"exp":1080,"stamina":26},
	{"level":7,"exp":1410,"stamina":27}, {"level":8,"exp":1770,"stamina":28},
	{"level":9,"exp":2160,"stamina":29}, {"level":10,"exp":2580,"stamina":30},
	{"level":11,"exp":3030,"stamina":31}, {"level":12,"exp":3600,"stamina":32},
	{"level":13,"exp":4200,"stamina":33}, {"level":14,"exp":4830,"stamina":34},
	{"level":15,"exp":5490,"stamina":35}, {"level":16,"exp":6180,"stamina":36},
	{"level":17,"exp":6900,"stamina":37}, {"level":18,"exp":7650,"stamina":38},
	{"level":19,"exp":8430,"stamina":39}, {"level":20,"exp":9240,"stamina":40},
	{"level":21,"exp":10080,"stamina":41}, {"level":22,"exp":10950,"stamina":42},
	{"level":23,"exp":11850,"stamina":43}, {"level":24,"exp":12780,"stamina":44},
	{"level":25,"exp":13740,"stamina":45}, {"level":26,"exp":14730,"stamina":46},
	{"level":27,"exp":15750,"stamina":47}, {"level":28,"exp":16800,"stamina":48},
	{"level":29,"exp":17880,"stamina":49}, {"level":30,"exp":18990,"stamina":50},
	{"level":31,"exp":20130,"stamina":51}, {"level":32,"exp":21300,"stamina":52},
	{"level":33,"exp":22500,"stamina":53}, {"level":34,"exp":23730,"stamina":54},
	{"level":35,"exp":24990,"stamina":55}, {"level":36,"exp":26280,"stamina":56},
	{"level":37,"exp":27600,"stamina":57}, {"level":38,"exp":28950,"stamina":58},
	{"level":39,"exp":30330,"stamina":59}, {"level":40,"exp":31740,"stamina":60},
	{"level":41,"exp":33180,"stamina":61}, {"level":42,"exp":34650,"stamina":62},
	{"level":43,"exp":36150,"stamina":63}, {"level":44,"exp":37680,"stamina":64},
	{"level":45,"exp":39240,"stamina":65}, {"level":46,"exp":40830,"stamina":66},
	{"level":47,"exp":42450,"stamina":67}, {"level":48,"exp":44100,"stamina":68},
	{"level":49,"exp":45780,"stamina":69}, {"level":50,"exp":47490,"stamina":70},
	{"level":51,"exp":49290,"stamina":71}, {"level":52,"exp":51190,"stamina":72},
	{"level":53,"exp":53190,"stamina":73}, {"level":54,"exp":55290,"stamina":74},
	{"level":55,"exp":57490,"stamina":75}, {"level":56,"exp":59790,"stamina":76},
	{"level":57,"exp":62190,"stamina":77}, {"level":58,"exp":64690,"stamina":78},
	{"level":59,"exp":67290,"stamina":79}, {"level":60,"exp":69990,"stamina":80},
	{"level":61,"exp":72790,"stamina":80}, {"level":62,"exp":75790,"stamina":81},
	{"level":63,"exp":78990,"stamina":81}, {"level":64,"exp":82390,"stamina":82},
	{"level":65,"exp":85990,"stamina":82}, {"level":66,"exp":89790,"stamina":83},
	{"level":67,"exp":93790,"stamina":83}, {"level":68,"exp":97990,"stamina":84},
	{"level":69,"exp":102390,"stamina":84}, {"level":70,"exp":106990,"stamina":85},
	{"level":71,"exp":111790,"stamina":85}, {"level":72,"exp":116890,"stamina":86},
	{"level":73,"exp":122290,"stamina":86}, {"level":74,"exp":127990,"stamina":87},
	{"level":75,"exp":133990,"stamina":87}, {"level":76,"exp":140290,"stamina":88},
	{"level":77,"exp":146890,"stamina":88}, {"level":78,"exp":153790,"stamina":89},
	{"level":79,"exp":160990,"stamina":89}, {"level":80,"exp":168490,"stamina":90},
	{"level":81,"exp":176490,"stamina":90}, {"level":82,"exp":184990,"stamina":91},
	{"level":83,"exp":193990,"stamina":91}, {"level":84,"exp":203490,"stamina":92},
	{"level":85,"exp":213490,"stamina":92}, {"level":86,"exp":223990,"stamina":93},
	{"level":87,"exp":234990,"stamina":93}, {"level":88,"exp":246490,"stamina":94},
	{"level":89,"exp":258490,"stamina":94}, {"level":90,"exp":270990,"stamina":95},
	{"level":91,"exp":283990,"stamina":95}, {"level":92,"exp":297490,"stamina":96},
	{"level":93,"exp":311490,"stamina":96}, {"level":94,"exp":325990,"stamina":97},
	{"level":95,"exp":340990,"stamina":97}, {"level":96,"exp":356490,"stamina":98},
	{"level":97,"exp":372490,"stamina":98}, {"level":98,"exp":388990,"stamina":99},
	{"level":99,"exp":405990,"stamina":99}, {"level":100,"exp":423490,"stamina":100},
	{"level":101,"exp":441490,"stamina":100}, {"level":102,"exp":460490,"stamina":101},
	{"level":103,"exp":480490,"stamina":101}, {"level":104,"exp":501490,"stamina":102},
	{"level":105,"exp":523490,"stamina":102}, {"level":106,"exp":546490,"stamina":103},
	{"level":107,"exp":570490,"stamina":103}, {"level":108,"exp":595490,"stamina":104},
	{"level":109,"exp":621490,"stamina":104}, {"level":110,"exp":648490,"stamina":105},
	{"level":111,"exp":676490,"stamina":105}, {"level":112,"exp":705490,"stamina":106},
	{"level":113,"exp":735490,"stamina":106}, {"level":114,"exp":766490,"stamina":107},
	{"level":115,"exp":798490,"stamina":107}, {"level":116,"exp":831490,"stamina":108},
	{"level":117,"exp":865490,"stamina":108}, {"level":118,"exp":900490,"stamina":109},
	{"level":119,"exp":936490,"stamina":109}, {"level":120,"exp":973490,"stamina":110},
	{"level":121,"exp":1012490,"stamina":110}, {"level":122,"exp":1053490,"stamina":111},
	{"level":123,"exp":1096490,"stamina":111}, {"level":124,"exp":1141490,"stamina":112},
	{"level":125,"exp":1188490,"stamina":112}, {"level":126,"exp":1237490,"stamina":113},
	{"level":127,"exp":1288490,"stamina":113}, {"level":128,"exp":1341490,"stamina":114},
	{"level":129,"exp":1396490,"stamina":114}, {"level":130,"exp":1453490,"stamina":115},
	{"level":131,"exp":1512490,"stamina":115}, {"level":132,"exp":1573490,"stamina":115},
	{"level":133,"exp":1636490,"stamina":116}, {"level":134,"exp":1701490,"stamina":116},
	{"level":135,"exp":1768490,"stamina":116}, {"level":136,"exp":1837490,"stamina":117},
	{"level":137,"exp":1908490,"stamina":117}, {"level":138,"exp":1981490,"stamina":117},
	{"level":139,"exp":2056490,"stamina":118}, {"level":140,"exp":2133490,"stamina":118},
	{"level":141,"exp":2212490,"stamina":118}, {"level":142,"exp":2293490,"stamina":119},
	{"level":143,"exp":2376490,"stamina":119}, {"level":144,"exp":2461490,"stamina":119},
	{"level":145,"exp":2548490,"stamina":120}, {"level":146,"exp":2637490,"stamina":120},
	{"level":147,"exp":2728490,"stamina":120}, {"level":148,"exp":2821490,"stamina":121},
	{"level":149,"exp":2916490,"stamina":121}, {"level":150,"exp":3013490,"stamina":121},
	{"level":151,"exp":3112490,"stamina":122}, {"level":152,"exp":3213490,"stamina":122},
	{"level":153,"exp":3316490,"stamina":122}, {"level":154,"exp":3421490,"stamina":123},
	{"level":155,"exp":3528490,"stamina":123}, {"level":156,"exp":3637490,"stamina":123},
	{"level":157,"exp":3748490,"stamina":124}, {"level":158,"exp":3861490,"stamina":124},
	{"level":159,"exp":3976490,"stamina":124}, {"level":160,"exp":4093490,"stamina":125},
	{"level":161,"exp":4212490,"stamina":125}, {"level":162,"exp":4334490,"stamina":125},
	{"level":163,"exp":4459490,"stamina":126}, {"level":164,"exp":4587490,"stamina":126},
	{"level":165,"exp":4718490,"stamina":126}, {"level":166,"exp":4852490,"stamina":127},
	{"level":167,"exp":4989490,"stamina":127}, {"level":168,"exp":5129490,"stamina":127},
	{"level":169,"exp":5272490,"stamina":128}, {"level":170,"exp":5418490,"stamina":128},
	{"level":171,"exp":5567490,"stamina":128}, {"level":172,"exp":5719490,"stamina":129},
	{"level":173,"exp":5874490,"stamina":129}, {"level":174,"exp":6032490,"stamina":129},
	{"level":175,"exp":6193490,"stamina":130}, {"level":176,"exp":6357490,"stamina":130},
	{"level":177,"exp":6524490,"stamina":130}, {"level":178,"exp":6694490,"stamina":131},
	{"level":179,"exp":6867490,"stamina":131}, {"level":180,"exp":7043490,"stamina":131},
	{"level":181,"exp":7222490,"stamina":132}, {"level":182,"exp":7404490,"stamina":132},
	{"level":183,"exp":7589490,"stamina":132}, {"level":184,"exp":7777490,"stamina":133},
	{"level":185,"exp":7968490,"stamina":133}, {"level":186,"exp":8162490,"stamina":133},
	{"level":187,"exp":8359490,"stamina":134}, {"level":188,"exp":8559490,"stamina":134},
	{"level":189,"exp":8762490,"stamina":134}, {"level":190,"exp":8968490,"stamina":135},
	{"level":191,"exp":9177490,"stamina":135}, {"level":192,"exp":9389490,"stamina":135},
	{"level":193,"exp":9604490,"stamina":136}, {"level":194,"exp":9822490,"stamina":136},
	{"level":195,"exp":10043490,"stamina":136}, {"level":196,"exp":10267490,"stamina":137},
	{"level":197,"exp":10494490,"stamina":137}, {"level":198,"exp":10724490,"stamina":137},
	{"level":199,"exp":10957490,"stamina":138}, {"level":200,"exp":11193490,"stamina":138},
	{"level":201,"exp":11432490,"stamina":138}, {"level":202,"exp":11675490,"stamina":139},
	{"level":203,"exp":11922490,"stamina":139}, {"level":204,"exp":12173490,"stamina":139},
	{"level":205,"exp":12428490,"stamina":140}, {"level":206,"exp":12687490,"stamina":140},
	{"level":207,"exp":12950490,"stamina":140}, {"level":208,"exp":13217490,"stamina":141},
	{"level":209,"exp":13488490,"stamina":141}, {"level":210,"exp":13763490,"stamina":141},
	{"level":211,"exp":14042490,"stamina":142}, {"level":212,"exp":14325490,"stamina":142},
	{"level":213,"exp":14612490,"stamina":142}, {"level":214,"exp":14903490,"stamina":143},
	{"level":215,"exp":15198490,"stamina":143}, {"level":216,"exp":15497490,"stamina":143},
	{"level":217,"exp":15800490,"stamina":144}, {"level":218,"exp":16107490,"stamina":144},
	{"level":219,"exp":16418490,"stamina":144}, {"level":220,"exp":16733490,"stamina":145},
	{"level":221,"exp":17052490,"stamina":145}, {"level":222,"exp":17375490,"stamina":145},
	{"level":223,"exp":17702490,"stamina":146}, {"level":224,"exp":18033490,"stamina":146},
	{"level":225,"exp":18368490,"stamina":146}, {"level":226,"exp":18707490,"stamina":147},
	{"level":227,"exp":19050490,"stamina":147}, {"level":228,"exp":19397490,"stamina":147},
	{"level":229,"exp":19748490,"stamina":148}, {"level":230,"exp":20103490,"stamina":148},
	{"level":231,"exp":20463490,"stamina":148}, {"level":232,"exp":20828490,"stamina":149},
	{"level":233,"exp":21198490,"stamina":149}, {"level":234,"exp":21573490,"stamina":149},
	{"level":235,"exp":21953490,"stamina":150}, {"level":236,"exp":22338490,"stamina":150},
	{"level":237,"exp":22728490,"stamina":150}, {"level":238,"exp":23123490,"stamina":151},
	{"level":239,"exp":23523490,"stamina":151}, {"level":240,"exp":23928490,"stamina":151},
	{"level":241,"exp":24338490,"stamina":152}, {"level":242,"exp":24753490,"stamina":152},
	{"level":243,"exp":25173490,"stamina":152}, {"level":244,"exp":25598490,"stamina":153},
	{"level":245,"exp":26028490,"stamina":153}, {"level":246,"exp":26463490,"stamina":153},
	{"level":247,"exp":26903490,"stamina":154}, {"level":248,"exp":27348490,"stamina":154},
	{"level":249,"exp":27798490,"stamina":154}, {"level":250,"exp":28253490,"stamina":155}
]
const CharacterLevel = [
	{"level":1,"exp":0}, {"level":2,"exp":30}, {"level":3,"exp":80},
	{"level":4,"exp":150}, {"level":5,"exp":240}, {"level":6,"exp":350},
	{"level":7,"exp":500}, {"level":8,"exp":690}, {"level":9,"exp":920},
	{"level":10,"exp":1190}, {"level":11,"exp":1500}, {"level":12,"exp":1880},
	{"level":13,"exp":2330}, {"level":14,"exp":2850}, {"level":15,"exp":3440},
	{"level":16,"exp":4100}, {"level":17,"exp":4880}, {"level":18,"exp":5780},
	{"level":19,"exp":6800}, {"level":20,"exp":7940}, {"level":21,"exp":9200},
	{"level":22,"exp":10710}, {"level":23,"exp":12470}, {"level":24,"exp":14480},
	{"level":25,"exp":16740}, {"level":26,"exp":19250}, {"level":27,"exp":22260},
	{"level":28,"exp":25770}, {"level":29,"exp":29780}, {"level":30,"exp":34290},
	{"level":31,"exp":39300}, {"level":32,"exp":45060}, {"level":33,"exp":51570},
	{"level":34,"exp":58830}, {"level":35,"exp":66840}, {"level":36,"exp":75600},
	{"level":37,"exp":85110}, {"level":38,"exp":95370}, {"level":39,"exp":106380},
	{"level":40,"exp":118140}, {"level":41,"exp":130650}, {"level":42,"exp":143910},
	{"level":43,"exp":157920}, {"level":44,"exp":172680}, {"level":45,"exp":188190},
	{"level":46,"exp":204450}, {"level":47,"exp":221460}, {"level":48,"exp":239220},
	{"level":49,"exp":257730}, {"level":50,"exp":276990}, {"level":51,"exp":297000},
	{"level":52,"exp":317760}, {"level":53,"exp":339270}, {"level":54,"exp":361530},
	{"level":55,"exp":384540}, {"level":56,"exp":408300}, {"level":57,"exp":432810},
	{"level":58,"exp":458070}, {"level":59,"exp":484080}, {"level":60,"exp":510840},
	{"level":61,"exp":538350}, {"level":62,"exp":570950}, {"level":63,"exp":603750},
	{"level":64,"exp":636750}, {"level":65,"exp":669950}, {"level":66,"exp":703350},
	{"level":67,"exp":736950}, {"level":68,"exp":770750}, {"level":69,"exp":804750},
	{"level":70,"exp":838950}, {"level":71,"exp":873350}, {"level":72,"exp":907950},
	{"level":73,"exp":942750}, {"level":74,"exp":977750}, {"level":75,"exp":1012950},
	{"level":76,"exp":1048350}, {"level":77,"exp":1083950}, {"level":78,"exp":1119750},
	{"level":79,"exp":1155750}, {"level":80,"exp":1191950}, {"level":81,"exp":1391950},
	{"level":82,"exp":1606950}, {"level":83,"exp":1836950}, {"level":84,"exp":2081950},
	{"level":85,"exp":2341950}, {"level":86,"exp":2616950}, {"level":87,"exp":2906950},
	{"level":88,"exp":3211950}, {"level":89,"exp":3531950}, {"level":90,"exp":3866950},
	{"level":91,"exp":4216950}, {"level":92,"exp":4596950}, {"level":93,"exp":5006950},
	{"level":94,"exp":5446950}, {"level":95,"exp":5916950}, {"level":96,"exp":6416950},
	{"level":97,"exp":6961950}, {"level":98,"exp":7551950}, {"level":99,"exp":8186950},
	{"level":100,"exp":8866950}
]
const DragonLevel = [
	{"level":1,"exp":0}, {"level":2,"exp":240}, {"level":3,"exp":540},
	{"level":4,"exp":900}, {"level":5,"exp":1320}, {"level":6,"exp":1800},
	{"level":7,"exp":2340}, {"level":8,"exp":2940}, {"level":9,"exp":3600},
	{"level":10,"exp":4320}, {"level":11,"exp":5100}, {"level":12,"exp":6000},
	{"level":13,"exp":7020}, {"level":14,"exp":8160}, {"level":15,"exp":9420},
	{"level":16,"exp":10800}, {"level":17,"exp":12300}, {"level":18,"exp":13920},
	{"level":19,"exp":15660}, {"level":20,"exp":17520}, {"level":21,"exp":19500},
	{"level":22,"exp":21660}, {"level":23,"exp":24000}, {"level":24,"exp":26520},
	{"level":25,"exp":29220}, {"level":26,"exp":32100}, {"level":27,"exp":35160},
	{"level":28,"exp":38400}, {"level":29,"exp":41820}, {"level":30,"exp":45420},
	{"level":31,"exp":49200}, {"level":32,"exp":53220}, {"level":33,"exp":57480},
	{"level":34,"exp":61980}, {"level":35,"exp":66720}, {"level":36,"exp":71700},
	{"level":37,"exp":76920}, {"level":38,"exp":82380}, {"level":39,"exp":88080},
	{"level":40,"exp":94020}, {"level":41,"exp":100200}, {"level":42,"exp":106680},
	{"level":43,"exp":113460}, {"level":44,"exp":120540}, {"level":45,"exp":127920},
	{"level":46,"exp":135600}, {"level":47,"exp":143580}, {"level":48,"exp":151860},
	{"level":49,"exp":160440}, {"level":50,"exp":169320}, {"level":51,"exp":178500},
	{"level":52,"exp":188040}, {"level":53,"exp":197940}, {"level":54,"exp":208200},
	{"level":55,"exp":218820}, {"level":56,"exp":229800}, {"level":57,"exp":241140},
	{"level":58,"exp":252840}, {"level":59,"exp":264900}, {"level":60,"exp":277320},
	{"level":61,"exp":290100}, {"level":62,"exp":303330}, {"level":63,"exp":317010},
	{"level":64,"exp":331140}, {"level":65,"exp":345720}, {"level":66,"exp":360750},
	{"level":67,"exp":376230}, {"level":68,"exp":392160}, {"level":69,"exp":408540},
	{"level":70,"exp":425370}, {"level":71,"exp":442650}, {"level":72,"exp":460530},
	{"level":73,"exp":479010}, {"level":74,"exp":498090}, {"level":75,"exp":517770},
	{"level":76,"exp":538050}, {"level":77,"exp":558930}, {"level":78,"exp":580410},
	{"level":79,"exp":602490}, {"level":80,"exp":625170}, {"level":81,"exp":648450},
	{"level":82,"exp":672480}, {"level":83,"exp":697260}, {"level":84,"exp":722790},
	{"level":85,"exp":749070}, {"level":86,"exp":776100}, {"level":87,"exp":803880},
	{"level":88,"exp":832410}, {"level":89,"exp":861690}, {"level":90,"exp":891720},
	{"level":91,"exp":922500}, {"level":92,"exp":954180}, {"level":93,"exp":986760},
	{"level":94,"exp":1020240}, {"level":95,"exp":1054620}, {"level":96,"exp":1089900},
	{"level":97,"exp":1126080}, {"level":98,"exp":1163160}, {"level":99,"exp":1201140},
	{"level":100,"exp":1240020}, {"level":101,"exp":1279800}, {"level":102,"exp":1320580},
	{"level":103,"exp":1363360}, {"level":104,"exp":1409140}, {"level":105,"exp":1458920},
	{"level":106,"exp":1513700}, {"level":107,"exp":1574480}, {"level":108,"exp":1642260},
	{"level":109,"exp":1718040}, {"level":110,"exp":1802820}, {"level":111,"exp":1897600},
	{"level":112,"exp":2003380}, {"level":113,"exp":2121160}, {"level":114,"exp":2251940},
	{"level":115,"exp":2396720}, {"level":116,"exp":2556500}, {"level":117,"exp":2732280},
	{"level":118,"exp":2925060}, {"level":119,"exp":3135840}, {"level":120,"exp":3365620}
]
const DragonBondLevel_1 = [
	{"type":2,"level":1,"exp":0}, {"type":2,"level":2,"exp":100}, {"type":2,"level":3,"exp":200},
	{"type":2,"level":4,"exp":300}, {"type":2,"level":5,"exp":400}, {"type":2,"level":6,"exp":500},
	{"type":2,"level":7,"exp":600}, {"type":2,"level":8,"exp":700}, {"type":2,"level":9,"exp":800},
	{"type":2,"level":10,"exp":900}, {"type":2,"level":11,"exp":1000}, {"type":2,"level":12,"exp":1100},
	{"type":2,"level":13,"exp":1200}, {"type":2,"level":14,"exp":1300}, {"type":2,"level":15,"exp":1400},
	{"type":2,"level":16,"exp":1500}, {"type":2,"level":17,"exp":1600}, {"type":2,"level":18,"exp":1700},
	{"type":2,"level":19,"exp":1800}, {"type":2,"level":20,"exp":1900}, {"type":2,"level":21,"exp":2000},
	{"type":2,"level":22,"exp":2100}, {"type":2,"level":23,"exp":2200}, {"type":2,"level":24,"exp":2300},
	{"type":2,"level":25,"exp":2400}, {"type":2,"level":26,"exp":2500}, {"type":2,"level":27,"exp":2600},
	{"type":2,"level":28,"exp":2700}, {"type":2,"level":29,"exp":2800}, {"type":2,"level":30,"exp":2900}
]
const DragonBondLevel_2 = [
	{"type":1,"level":1,"exp":0}, {"type":1,"level":2,"exp":80}, {"type":1,"level":3,"exp":240},
	{"type":1,"level":4,"exp":420}, {"type":1,"level":5,"exp":620}, {"type":1,"level":6,"exp":840},
	{"type":1,"level":7,"exp":1100}, {"type":1,"level":8,"exp":1400}, {"type":1,"level":9,"exp":1800},
	{"type":1,"level":10,"exp":2300}, {"type":1,"level":11,"exp":2900}, {"type":1,"level":12,"exp":3600},
	{"type":1,"level":13,"exp":4400}, {"type":1,"level":14,"exp":5300}, {"type":1,"level":15,"exp":6300},
	{"type":1,"level":16,"exp":7400}, {"type":1,"level":17,"exp":8600}, {"type":1,"level":18,"exp":9900},
	{"type":1,"level":19,"exp":11300}, {"type":1,"level":20,"exp":12800}, {"type":1,"level":21,"exp":14400},
	{"type":1,"level":22,"exp":16150}, {"type":1,"level":23,"exp":18050}, {"type":1,"level":24,"exp":20100},
	{"type":1,"level":25,"exp":22300}, {"type":1,"level":26,"exp":24700}, {"type":1,"level":27,"exp":27300},
	{"type":1,"level":28,"exp":30100}, {"type":1,"level":29,"exp":33100}, {"type":1,"level":30,"exp":36300}
]
// Kaleidoscape uses divisions of 1000

function Player(EXPCount) {
	if (EXPCount >= 28253490) { return [250, 28253490, 155]; }
	const LevelIndex = PlayerLevel.findIndex(x => x.exp > EXPCount) - 1;
	return [PlayerLevel[LevelIndex]['level'], EXPCount, PlayerLevel[LevelIndex]['stamina']]
}

function Character(PlusMaxLevel, EXPCount, CurrentLevel) {
	let LevelIndex = 0;
	let Difference = 0;
	if (PlusMaxLevel == 0) {
		if (EXPCount >= 1191950) { return [80, 1191950]; }
		LevelIndex = CharacterLevel.findIndex(x => x.exp > EXPCount) - 1;
		Difference = CharacterLevel[LevelIndex]['level'] - CurrentLevel
		return [CharacterLevel[LevelIndex]['level'], EXPCount, Difference];
	}
	else {
		switch(PlusMaxLevel) {
			case 5:
				if (EXPCount >= 2341950) { return [85, 2341950]; }
				LevelIndex = CharacterLevel.findIndex(x => x.exp > EXPCount) - 1;
				Difference = CharacterLevel[LevelIndex]['level'] - CurrentLevel
				return [CharacterLevel[LevelIndex]['level'], EXPCount, Difference]; break;
			case 10:
				if (EXPCount >= 3866950) { return [90, 3866950]; }
				LevelIndex = CharacterLevel.findIndex(x => x.exp > EXPCount) - 1;
				Difference = CharacterLevel[LevelIndex]['level'] - CurrentLevel
				return [CharacterLevel[LevelIndex]['level'], EXPCount, Difference]; break;
			case 15:
				if (EXPCount >= 5916950) { return [95, 5916950]; }
				LevelIndex = CharacterLevel.findIndex(x => x.exp > EXPCount) - 1;
				Difference = CharacterLevel[LevelIndex]['level'] - CurrentLevel
				return [CharacterLevel[LevelIndex]['level'], EXPCount, Difference]; break;
			case 20:
				if (EXPCount >= 8866950) { return [100, 8866950]; }
				LevelIndex = CharacterLevel.findIndex(x => x.exp > EXPCount) - 1;
				Difference = CharacterLevel[LevelIndex]['level'] - CurrentLevel
				return [CharacterLevel[LevelIndex]['level'], EXPCount, Difference]; break;
		}
	}
}

function Dragon(Rarity, LimitBreak, EXPCount) {
	let LevelIndex = 0;
	switch(Rarity) {
		case 3:
			if (LimitBreak == 0 && EXPCount >= 17520) { return [20, 17520]; }
			if (LimitBreak == 1 && EXPCount >= 45420) { return [30, 45420]; }
			if (LimitBreak == 2 && EXPCount >= 94020) { return [40, 94020]; }
			if (LimitBreak == 3 && EXPCount >= 169320) { return [50, 169320]; }
			if (LimitBreak == 4 && EXPCount >= 277320) { return [60, 277320]; }
			LevelIndex = DragonLevel.findIndex(x => x.exp > EXPCount) - 1;
			return [DragonLevel[LevelIndex]['level'], EXPCount]; break;
		case 4:
			if (LimitBreak == 0 && EXPCount >= 45420) { return [30, 45420]; }
			if (LimitBreak == 1 && EXPCount >= 94020) { return [40, 94020]; }
			if (LimitBreak == 2 && EXPCount >= 169320) { return [50, 169320]; }
			if (LimitBreak == 3 && EXPCount >= 345720) { return [65, 345720]; }
			if (LimitBreak == 4 && EXPCount >= 625170) { return [80, 625170]; }
			LevelIndex = DragonLevel.findIndex(x => x.exp > EXPCount) - 1;
			return [DragonLevel[LevelIndex]['level'], EXPCount]; break;
		case 5:
			if (LimitBreak == 0 && EXPCount >= 94020) { return [40, 94020]; }
			if (LimitBreak == 1 && EXPCount >= 218820) { return [55, 218820]; }
			if (LimitBreak == 2 && EXPCount >= 425370) { return [70, 425370]; }
			if (LimitBreak == 3 && EXPCount >= 749070) { return [85, 749070]; }
			if (LimitBreak == 4 && EXPCount >= 1240020) { return [100, 1240020]; }
			if (LimitBreak == 5 && EXPCount >= 3365620) { return [120, 3365620]; }
			LevelIndex = DragonLevel.findIndex(x => x.exp > EXPCount) - 1;
			return [DragonLevel[LevelIndex]['level'], EXPCount]; break;
	}
}

function DragonBond(Type, EXPCount) {
	let LevelIndex = 0;
	switch(Type) {
		case 1:
			if (EXPCount >= 2900) { return [30, 2900]; }
			LevelIndex = DragonBondLevel_1.findIndex(x => x.exp > EXPCount) - 1;
			return [DragonBondLevel_1[LevelIndex]['level'], EXPCount];
			break;
		case 2:
			if (EXPCount >= 36300) { return [30, 36300]; }
			LevelIndex = DragonBondLevel_2.findIndex(x => x.exp > EXPCount) - 1;
			return [DragonBondLevel_2[LevelIndex]['level'], EXPCount];
			break;
	}
}

module.exports = { Character, Dragon, DragonBond, Player }