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
    strategies
  };
  res.status(200).json(resObj);
};

const getStrategyByName = async (req, res) => {
    try {
        const { name } = req.params; 
          const strategy = await strategyService.getStrategyByName(name);
        if (!strategy) {
          return res.status(404).json({ message: "Strategy not found" });
          }
        res.status(200).json({strategy});
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch strategy" });
      }
}

// const createStrategyById = async (req, res) => {
// }




  // const  getBackTestData = async(req, res) => {
  //   try {
  //     const { strategyId } = req.params;
  //     const backTestData = await strategyService.getBackTestDataForStrategy(strategyId);
  //     res.status(200).json(backTestData);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // }



module.exports = {
  createStrategy,
  getStrategy,
 getStrategyByName 

 
};
