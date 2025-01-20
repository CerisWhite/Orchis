function GetInfo(ID, Attribute) {
	ID = String(ID);
	return global.Master.WeaponData[ID][Attribute];
}
async function GetUnitData(ViewerID, ID) {
	const Data = await global.Module.Fluoresce.Read("OrchisIndex", ViewerID, "weapon_list", { 'weapon_key_id': ID });
	return Data;
}

module.export = { GetInfo, GetUnitData }