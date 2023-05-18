const express = require("express");
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();
const createPlayerSetup = require("./create");
const updatePlayer = require("./update");
const getPlayers = require("./get");
const deleted = require("./remove");

const router = express.Router();

router.post("/create", multipartMiddleware, createPlayerSetup);
router.put("/update/:id", updatePlayer);
router.get('/get', getPlayers);
router.delete('/deleted', deleted);


module.exports = router;
