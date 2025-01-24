const strategyService = require("../services/strategyService");

const createStrategy = async (req, res) => {
  try {
    let newStrategy = await strategyService.createStrategy(req.body);
    let resObj = {
      strategy: newStrategy,
      message: "Create strategy successfully",
    };
    res.status(201).json(resObj);
  } catch (error) {
    console.error("Error during creating Strategy:", error);
    res.status(500).json({ error: error.message });
  }
};

const getStrategy = async (req, res) => {
  let strategies = await strategyService.getStrategy();
  let resObj = {
    strategies,
  };
  res.status(200).json(resObj);
};

module.exports = {
  createStrategy,
  getStrategy,
};
