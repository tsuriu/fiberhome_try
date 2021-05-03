const fh = require('./fh_funcs');

module.exports.fh_onu = async function fh_onu() {
    var finalResponse = {};

    var onus = await fh.getAuthorizedOnus();
    const slots = [... new Set(onus.map(data => data.slot))];

    var retData = {};
    var retData2 = [];

    for (let it = 0; it < onus.length; it++) {
        onu = onus[it]
        delete onu["_onuIndex"]
        retData2.push(onu)
    }
    console.log("Check")
    return retData2;
}