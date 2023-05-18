const mongoose = require("mongoose");
const teamScorecard = require("./scorecard-schema");

const scorecard = mongoose.model("scorecard", teamScorecard);

module.exports = scorecard;
