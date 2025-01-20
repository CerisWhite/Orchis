const fs = require('fs');
const QuestData = JSON.parse(fs.readFileSync('../../Master/QuestData.json'));
const IDList = Object.keys(QuestData);
let Previous = 0;
let List = {};
for (const x in IDList) {
	const QuestBase = IDList[x].slice(0, 3);
	if (QuestBase != "208") { continue; }
	const Current = QuestData[IDList[x]];
	if (Current['_Difficulty'] == 8500) {
		List[Previous] = [ Current['_Id'] ];
	}
	Previous = IDList[x];
}
fs.writeFileSync('./exlist.json', JSON.stringify(List, null, 2));