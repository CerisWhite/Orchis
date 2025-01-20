const fs = require('fs');
const Characters = JSON.parse(fs.readFileSync('./Parsed/Characters.json'));
const Dragons = JSON.parse(fs.readFileSync('./Parsed/Dragons.json'));

let CList = [];
let DList = [];

const Wanted = [ "Gala", "Permanent" ];

for (const x in Characters) {
	if (Characters[x]['IsPlayable'] == true) {
		for (const z in Wanted) {
			if (Characters[x]['Tags'].includes(Wanted[z])) {
				CList.push(Characters[x]['ID']);
			}
		}
	}
}
for (const x in Dragons) {
	if (Dragons[x]['IsPlayable'] == true) {
		for (const z in Wanted) {
			if (Dragons[x]['Tags'].includes(Wanted[z])) {
				DList.push(Dragons[x]['ID']);
			}
		}
	}
}

fs.writeFileSync('./output.json', JSON.stringify({'Characters': CList, 'Dragons': DList}, null, 2));