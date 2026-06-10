const fs = require('fs');
const QuestData = JSON.parse(fs.readFileSync('./Library/Master/QuestData.json'));
const PrefixList = [
	"204", "208", "213", "214",
	"222", "229", "310"
]

function PadLeft(Input, Length, Value) {
	while (String(Input).length < Length) {
		Input = String(Value) + String(Input)
	}
	return Input;
}

Object.keys(QuestData).forEach((ID) => {
	const Quest = QuestData[ID];
	const QuestPrefix = String(Quest['_Id']).slice(0, 3);
	if (PrefixList.includes(QuestPrefix)) {
		QuestData[ID]['_ViewEndDate'] = "";
		QuestData[ID]['_ViewEndDate2'] = "";
	}
});

fs.writeFileSync('./QuestData.json', JSON.stringify(QuestData, null, 2));