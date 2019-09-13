const dummy = require('./dummy');

module.exports = function (db) {
    db.push('/contacts', dummy.contacts);
    db.push('/callsHistory', dummy.callsHistory);
};