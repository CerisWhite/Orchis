const fs = require('fs');
const MC = JSON.parse(fs.readFileSync('./MC.json'));

let Output = {};

let MC_Key = MC['dict']['entriesKey']['Array'];
let MC_Data = MC['dict']['entriesValue']['Array'];

for (const x in MC_Key) {
	if (MC_Key[x] == 0) { continue; }
	Output["MC_0" + String(MC_Key[x])] = [];
	let MC_SubData = MC_Data[x]['dict']['entriesValue']['Array'];
	for (const y in MC_SubData) {
		if (MC_SubData[y]['_Id'] == 0) { continue; }
		Output["MC_0" + String(MC_Key[x])].push({
			"_Id": MC_SubData[y]['_Id'],
            "_Hierarchy": MC_SubData[y]['_Hierarchy'],
            "_No": MC_SubData[y]['_No'],
            "_ManaPieceType": MC_SubData[y]['_ManaPieceType'],
            "_IsReleaseStory": MC_SubData[y]['_IsReleaseStory'],
            "_NecessaryManaPoint": MC_SubData[y]['_NecessaryManaPoint'],
            "_UniqueGrowMaterialCount1": MC_SubData[y]['_UniqueGrowMaterialCount1'],
            "_UniqueGrowMaterialCount2": MC_SubData[y]['_UniqueGrowMaterialCount2'],
            "_GrowMaterialCount": MC_SubData[y]['_GrowMaterialCount'],
		});
	}
}
fs.writeFileSync('./output.js', JSON.stringify(Output, null, 2));