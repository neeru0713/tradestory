const express = require("express");
const paymentController = require("../controllers/paymentController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");
const router = express.Router();

router.post("/checkout", authMiddleware, paymentController.checkout);
router.post("/verify", authMiddleware, paymentController.verifyPayment);
module.exports = router;
