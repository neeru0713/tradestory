const express = require("express");
const strategyController = require("../controllers/strategyController.js");
const router = express.Router();

router.post("/", strategyController.createStrategy)
router.get("/", strategyController.getStrategy);
router.get("/:name", strategyController.getStrategyByName);

module.exports = router;