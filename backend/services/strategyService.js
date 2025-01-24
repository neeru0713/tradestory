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

module.exports = {
  createStrategy,
  getStrategy
};