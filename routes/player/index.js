const express = require("express");
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();
const createPlayer = require("./create");
const updatePlayer = require("./update");
const getPlayers = require("./get");
const deleted = require("./delete");

const router = express.Router();

router.post("/create", multipartMiddleware, createPlayer);
router.put("/update/:id", updatePlayer);
router.get('/get', getPlayers);
router.delete('/deleted', deleted);


module.exports = router;
