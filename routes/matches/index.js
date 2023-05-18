const express = require("express");
const createMatch = require("./create");
const updateMatch = require("./update");
const getTeam = require("./get");
const cancelMatch = require("./cancel");

const router = express.Router();

router.post("/create", createMatch);
router.put("/update/:id", updateMatch);
router.get('/get', getTeam);
router.delete('/cancel', cancelMatch);


module.exports = router;
