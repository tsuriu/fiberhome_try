const fh = require('snmp-fiberhome');

const options = {
    //ip: '10.56.128.174',
    //ip: '10.56.128.170',
    ip: '10.2.218.18',
    community: 'adsl',
    port: 161,
    trapPort: 162,
    enableWarnings: true,
    enableLogs: true
}

module.exports.getSlots =  async function getSlots() {
    return await fh.getSlots(options).then(slots => {return slots});
}

module.exports.getCard = async function getCard(slot) {
    return await fh.getCard(options, slot).then(card => {return card});
}

module.exports.getPonPortList = async function getPonPortList() {
    return await fh.getPonPortList(options).then(ponPorts => {return ponPorts})
}

module.exports.getOnuListByPon = async function getOnuListbyPon(slot, pon) {
    return await fh.getOnuListByPon(options, slot, pon).then(onuList => {return onuList});
}

module.exports.getOnu = async function getOnu(slot, pon, onu) { 
    return await fh.getOnu(options, slot, pon, onu).then(onu => {return onu});
}

module.exports.getAuthorizedOnus = async function getAuthorizedOnus() {
    return await fh.getAuthorizedOnus(options).then(onuList => {return onuList});
}