const fs = require('fs');
const CharaData = JSON.parse(fs.readFileSync('./Data/CharaData.json'));
const DragonData = JSON.parse(fs.readFileSync('./Data/DragonData.json'));
const AbilityCrest = JSON.parse(fs.readFileSync('./Data/AbilityCrest.json'));
const TextLabel = JSON.parse(fs.readFileSync('./Data/TextLabel_US.json'));

let Characters = [];
let Dragons = [];
let Wyrmprints = [];

/*const CharaList = Object.keys(CharaData);
const DragonList = Object.keys(DragonData);
const PrintList = Object.keys(AbilityCrest);
for (const c in CharaList) {
	Character = CharaData[CharaList[c]];
	Name = "";
	if (TextLabel[Character['_Name']] != undefined) { Name = TextLabel[Character['_Name']]['_Text']; }
	let Template = {
		'Name': Name,
		'FullName': "",
		'ID': Character['_Id'],
		'Rarity': Character['_Rarity'],
		'Element': Character['_ElementalType'],
		'Weapon': Character['_WeaponType'],
		'IsPlayable': Character['_IsPlayable'] == 1 ? true : false,
		'Tags': []
	}
	if (TextLabel[Character['_SecondName']] != undefined) {
		Template['FullName'] = TextLabel[Character['_SecondName']]['_Text'];
		const Comment = Template['FullName'].split(" ")[0];
		Template['Tags'].push(Comment);
		if (Comment == "Gala") { Template['Tags'].push("Limited"); }
	}
	else { Template['Tags'].push("Permanent"); }
	Characters.push(Template);
}
for (const d in DragonList) {
	Dragon = DragonData[DragonList[d]];
	Name = "";
	if (TextLabel[Dragon['_Name']] != undefined) { Name = TextLabel[Dragon['_Name']]['_Text']; }
	let Template = {
		'Name': Name,
		'FullName': "",
		'ID': Dragon['_Id'],
		'Rarity': Dragon['_Rarity'],
		'Element': Dragon['_ElementalType'],
		'Weapon': Dragon['_WeaponType'],
		'IsPlayable': Dragon['_IsPlayable'] == 1 ? true : false,
		'Tags': []
	}
	if (TextLabel[Dragon['_SecondName']] != undefined) {
		Template['FullName'] = TextLabel[Dragon['_SecondName']]['_Text'];
		const Comment = Template['FullName'].split(" ")[0];
		Template['Tags'].push(Comment);
		if (Comment == "Gala") { Template['Tags'].push("Limited"); }
	}
	else { Template['Tags'].push("Permanent"); }
	Dragons.push(Template);
}
for (const w in PrintList) {
	Print = AbilityCrest[PrintList[w]];
	Name = "";
	if (TextLabel[Print['_Name']] != undefined) { Name = TextLabel[Print['_Name']]['_Text']; }
	let Template = {
		'Name': Name,
		'ID': Print['_Id'],
		'Rarity': Print['_Rarity'],
		'SlotType': Print['_CrestSlotType'],
		'IsPlayable': Print['_IsPlayable'] == 1 ? true : false,
		'Tags': [ "Permanent" ]
	}
	
	Wyrmprints.push(Template);
}

fs.writeFileSync('./Characters.json', JSON.stringify(Characters, null, 2));
fs.writeFileSync('./Dragons.json', JSON.stringify(Dragons, null, 2));
fs.writeFileSync('./Wyrmprints.json', JSON.stringify(Wyrmprints, null, 2));*/