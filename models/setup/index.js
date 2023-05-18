const mongoose = require("mongoose");
const playerSetupSchema = require("./setup-schema");

const playersetup = mongoose.model("playersetup", playerSetupSchema);

module.exports = playersetup;
