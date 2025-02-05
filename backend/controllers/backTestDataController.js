const backTestDataService = require("../services/backTestDataService");

const createBackTestData = async (req, res) => {
  try {
    const { strategyId } = req.params;
    const backTestData = await backTestDataService.createBackTestData(
      strategyId,
      req.body
    );
    res.status(201).json({ backTestDataRecord: backTestData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBackTestData
};

