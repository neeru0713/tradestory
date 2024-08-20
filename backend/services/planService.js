const User = require("../models/User.js");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const Plan = require("../models/Plan.js")

async function addPlanToUser(body, userId) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    
    const newPlan = new Plan(body); 
    user.plans.push(newPlan);
    user.planName = body.name;
    await user.save();
    return user.planName;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
}


module.exports = {
  addPlanToUser,
};
