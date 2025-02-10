const backTestDataService = require("../services/backTestDataService");
const dayjs = require("dayjs");

const createBackTestData = async (req, res) => {
  try {
    const { strategyId } = req.params;
    let backTestData = await backTestDataService.createBackTestData(
      strategyId,
      req.body
      );
      
      backTestData = {
        ...backTestData.toObject(),
        date: dayjs(backTestData.date).format("D MMM, YYYY"),
      };

      res.status(201).json(backTestData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBackTestData,
};
