const { Trade } = require("../modal/Trade.js");

async function createTrade(tradeBody) {

  let newTrade = new Trade(tradeBody);
  await newTrade.save()
  return newTrade;
}

async function getTrades() {

    const trades = await Trade.find({});
    return trades;

}

module.exports = {
  createTrade,
  getTrades
};
