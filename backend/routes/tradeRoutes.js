const express = require("express");
const tradeController = require("../controllers/tradeController.js");
const router = express.Router();

router.post("/", tradeController.createTrade)
router.get("/", tradeController.getTrades)

module.exports = router;
