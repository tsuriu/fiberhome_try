const fh = require('./fh_funcs');

module.exports.fh_onu = async function fh_onu() {
    var finalResponse = {};

    var onus = await fh.getAuthorizedOnus();
    const slots = [... new Set(onus.map(data => data.slot))];

    var retData = {};
    var retData2 = [];

    for (let slotid = 0; slotid < slots.length; slotid++) {
        var slot = await fh.getCard(slots[slotid]);

        var pons = {};
        
        for (let ponid = 1; ponid <= slot.numberOfPorts; ponid++) {
            let filterCondition = d => d.slot == slot.slot && d.pon == ponid;

            let onu = onus.filter(filterCondition);
            pons[ponid] = onu;
        }
        retData[slot.slot] = pons;
    }
    return retData;
}