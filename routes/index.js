const express = require("express");
const player = require("./player");
const performance = require("./performance");
const match = require("./matches");
const scorecards = require("./scorecard");
const playersetup = require("./playersetup");

const router = express.Router();



// USER Routes * *
 router.use("/player", player);
 router.use("/matches", match);
 router.use("/performance", performance);
 router.use("/scorecard", scorecards);
 router.use("/playersetup", playersetup);

module.exports = router;
