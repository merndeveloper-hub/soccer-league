const mongoose = require("mongoose");
const performanceSchema = require("./performance-schema");

const performance = mongoose.model("performance", performanceSchema);

module.exports = performance;
