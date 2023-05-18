const mongoose = require("mongoose");
const playerSchema = require("./player-schema");

const player = mongoose.model("player", playerSchema);

module.exports = player;
