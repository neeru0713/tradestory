const { Trade } = require("../models/Trade.js");

async function createTrade(tradeBody) {
  let newTrade = new Trade(tradeBody);
  await newTrade.save();
  return newTrade;
}

async function getTrades() {
  const trades = await Trade.find({});
  return trades;
}

async function deleteTrade(id) {
  const tradeToBeDeleted = await Trade.findOne({_id: id});
  if (tradeToBeDeleted) {
    await Trade.deleteOne({ _id: id });
  }
  const tradesAfterDeleting = await Trade.find({});
  return tradesAfterDeleting;
}

  
async function editTrade(id,body) {
  const tradeToBeEdited = await Trade.findOne({_id: id});
  console.log(tradeToBeEdited, body)
  if (tradeToBeEdited) {
    await Trade.updateOne({ _id: id }, body);
  }
  const tradesAfterEditing = await Trade.find({});
  return tradesAfterEditing;
}

module.exports = {
  createTrade,
  getTrades,
  deleteTrade,
  editTrade,
};
