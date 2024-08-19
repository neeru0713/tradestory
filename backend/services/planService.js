const User = require("../models/User.js");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

async function addPlanToUser(body, userId) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    const plans = body.data;
    user.plans.push(...plans?.map((plan) => plan._id));
    await user.save();
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
}


module.exports = {
  addPlanToUser,
};
