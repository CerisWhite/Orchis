const fs = require('fs');
const RegexList = fs.readFileSync("./Library/Module/FilterList.txt", 'utf8');
const RegexArray = RegexList.split("\n");

function Validate(TextData) {
	for (const r in RegexArray) {
		if (TextData.match(RegexArray[r])) { 
			return true;
		}
	}
	return false;
}
module.exports = { Validate }