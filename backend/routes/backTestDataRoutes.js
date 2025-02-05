const express = require("express");
const backTestDataController = require("../controllers/backTestDataController.js");
const router = express.Router();

router.post("/:strategyId", backTestDataController.createBackTestData)


module.exports = router;