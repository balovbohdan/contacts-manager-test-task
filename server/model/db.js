const {JsonDB} = require('node-json-db');
const {Config} = require('node-json-db/dist/lib/JsonDBConfig');

const init = require('./initializer');

const config = new Config('DB', true, false, '/');
const db = new JsonDB(config);

init(db);

module.exports = db;