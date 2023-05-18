const express = require("express");
const updateScoreCard = require("./update");
const getScores = require("./get");
const deleted = require("./delete");
const createScoreCard = require("./create");

const router = express.Router();

router.post("/create", createScoreCard);
router.put("/update/:id", updateScoreCard);
router.get('/get', getScores);
router.delete('/deleted', deleted);


module.exports = router;
