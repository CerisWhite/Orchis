function GetInfo(ID, Attribute) {
	ID = String(ID);
	return global.Master.AmuletData[ID][Attribute];
}
async function GetUnitData(ViewerID, ID) {
	const Data = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "amulet_list", { 'amulet_key_id': ID });
	return Data;
}

module.export = { GetInfo, GetUnitData }