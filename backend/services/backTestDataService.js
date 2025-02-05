const BackTestData = require("../models/BackTestData.js");
const Strategy = require("../models/Strategy.js");

const createBackTestData = async (strategyId, backTestData) => {
    backTestData.strategyId = strategyId
    const newBackTestData = new BackTestData(backTestData);
    const newBackTestDataInModel = await newBackTestData.save();
    
    const strategy = await Strategy.findById(strategyId);

    strategy.backTestData.push(newBackTestDataInModel._id);
    await strategy.save()

  return newBackTestDataInModel;
};








module.exports = {
  createBackTestData
};