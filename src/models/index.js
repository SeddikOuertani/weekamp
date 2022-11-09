const dbConfig = require("../configs/db.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

//==========EXEMPLE=========
//db.user = require("./user.model")
//db.event = require("./event.model")

module.exports = db;