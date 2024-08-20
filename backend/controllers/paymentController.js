const catchAsync = require("../utils/catchAsync.js");
const paymentService = require("../services/paymentService.js");
const planService = require("../services/planService.js");
const httpStatus = require("http-status");

const checkout = catchAsync(async (req, res) => {
  const session = await paymentService.checkout(req.body);
  const curentPlanName = await planService.addPlanToUser(req.body, req.user._id);
  if (session) {
    res.status(httpStatus.OK).json({ url: session.url, planName: curentPlanName });
  } else {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false });
  }
});

const verifyPayment = catchAsync(async (req, res) => {
  const isVerified = await paymentService.verifyPayment(req.body.sessionId);
  if (isVerified) {
    res.status(httpStatus.OK).json({ success: true, planName: req.user.planName });
  } else {
    res.status(httpStatus.BAD_REQUEST).json({ success: false });
  }
});

module.exports = {
  checkout,
  verifyPayment,
};
