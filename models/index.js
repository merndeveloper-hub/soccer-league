const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;


 db.player = require("./player");
 db.matche = require("./matches");
 db.performance = require("./performance");
 db.scorecard = require("./scorecard");
 db.playersetup = require("./setup");



module.exports = db;
