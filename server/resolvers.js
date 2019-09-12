const {contacts, callsHistory} = require('./dummy');

module.exports = {
    Query: {
        contacts: () => contacts,
        callsHistory: () => callsHistory
    }
};