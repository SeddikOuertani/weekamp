const dbConfig = require("../configs/db.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.event = require('./event.model');
db.program = require ('./program.modal');
db.eventImage = require('./eventImage.model');
db.campsite = require('./campsite.model');
db.client = require('./client.model');

module.exports = db;