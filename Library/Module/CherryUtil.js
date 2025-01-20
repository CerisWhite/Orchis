function CompactList(ItemList) {
	let FinalList = [];
	for (const x in ItemList) {
		if (ItemList[x]['quantity'] == 0) { continue; }
		const Index = FinalList.findIndex(z => z.type == ItemList[x]['type'] && z.id == ItemList[x]['id']);
		if (Index == -1) { FinalList.push(ItemList[x]); }
		else { FinalList[Index]['quantity'] = FinalList[Index]['quantity'] + ItemList[x]['quantity']; }
	}
	return FinalList;
}
function CompactEntityList(ItemList) {
	let FinalList = [];
	for (const x in ItemList) {
		if (ItemList[x]['entity_quantity'] == 0) { continue; }
		const Index = FinalList.findIndex(z => z.entity_type == ItemList[x]['entity_type'] && z.entity_id == ItemList[x]['entity_id']);
		if (Index == -1) { FinalList.push(ItemList[x]); }
		else { FinalList[Index]['entity_quantity'] = FinalList[Index]['entity_quantity'] + ItemList[x]['entity_quantity']; }
	}
	return FinalList;
}
function SaneValue(Value) {
	if (Value > 2000000000) { Value = 2000000000; }
	if (Value < 0) { Value = 0; }
	if (Value == undefined || isNaN(Value)) { Value = 0; }
	return Value;
}
function SaneValueDouble(Value) {
	if (Value > 3000000000) { Value = 3000000000; }
	if (Value < 0) { Value = 0; }
	if (Value == undefined || isNaN(Value)) { Value = 0; }
	return Value;
}

module.exports = { CompactList, CompactEntityList, SaneValue, SaneValueDouble }