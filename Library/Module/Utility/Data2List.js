const fs = require('fs');
const MC = JSON.parse(fs.readFileSync('./RaidEventReward.json'));

let Output = {};

let MC_Key = MC['dict']['entriesKey']['Array'];
let MC_Data = MC['dict']['entriesValue']['Array'];

for (const x in MC_Key) {
	if (MC_Key[x] == 0) { continue; }
	Output[MC_Key[x]] = [];
	let MC_SubData = MC_Data[x]['dict']['entriesValue']['Array'];
	for (const y in MC_SubData) {
		if (MC_SubData[y]['_Id'] == 0) { continue; }
		Output[MC_Key[x]].push(MC_SubData[y]);
	}
}
fs.writeFileSync('./output.json', JSON.stringify(Output, null, 2));