const Strategy = require("../models/Strategy.js");

async function createStrategy(StrategyBody) {
  let newStrategy = new Strategy(StrategyBody);
  await newStrategy.save();
  return newStrategy;
}

async function getStrategy() {
  const strategies = await Strategy.find({});
  return strategies;
}


const getStrategyByName = async (name) => {
  const strategy = await Strategy.findOne({name});
  if (!strategy) {
    throw new Error("Strategy not found");
  }
  return strategy;
};

module.exports = {
  createStrategy,
  getStrategy,
  getStrategyByName
};