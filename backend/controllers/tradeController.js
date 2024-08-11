const tradeService = require("../services/tradeService");

const createTrade = async (req, res) => {
  try {
    let newTrade = await tradeService.createTrade(req.body);
    let resObj = {
      trade: newTrade,
      message: "Create trade successfully",
    };
    res.status(201).json(resObj);
  } catch (error) {
    console.error("Error during creating Trade:", error);
    res.status(500).json({ error: error.message });
  }
};

const getTrades = async (req, res) => {
  let trades = await tradeService.getTrades();
  let resObj = {
    trades,
  };
  res.status(200).json(resObj);
};

module.exports = {
  createTrade,
  getTrades,
};
