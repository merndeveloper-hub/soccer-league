const express = require("express");
const createPerformance = require("./create");
const updatePerformance = require("./update");
const getPerformance = require("./get");
const deleted = require("./delete");

const router = express.Router();

router.post("/create", createPerformance);
router.put("/update/:id", updatePerformance);
router.get('/get', getPerformance);
router.delete('/deleted', deleted);


module.exports = router;
