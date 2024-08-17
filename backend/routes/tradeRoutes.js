const express = require("express");
const tradeController = require("../controllers/tradeController.js");
const router = express.Router();

router.post("/", tradeController.createTrade)
router.get("/", tradeController.getTrades)
router.delete("/:id", tradeController.deleteTrade)
router.put("/:id", tradeController.editTrade)
module.exports = router;
