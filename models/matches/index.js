const mongoose = require("mongoose");
const matchSchema = require("./matches-schema");

const matche = mongoose.model("matche", matchSchema);

module.exports = matche;
