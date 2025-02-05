const Strategy = require("../models/Strategy.js");
const BackTestData = require("../models/BackTestData.js")

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
  const strategy = await Strategy.findOne({ name }).populate("backTestData");
  
  if (!strategy) {
    throw new Error("Strategy not found");
  }
  return strategy;
};




  // const  getBackTestDataForStrategy = async (strategyId) => {
  //   return await BackTestDataRecord.find({ strategyId });
  // }




module.exports = {
  createStrategy,
  getStrategy,
  getStrategyByName,
  
};