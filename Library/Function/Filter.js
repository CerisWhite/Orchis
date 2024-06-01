const fs = require('fs');
const RegexList = fs.readFileSync("./Library/Function/RegexList.txt", 'utf8');
const RegexArray = RegexList.split("\n");

function Validate(TextData) {
	for (let r in RegexArray) {
		if (TextData.match(RegexArray[r])) { 
			return true;
		}
	}
	return false;
}
module.exports = { Validate }