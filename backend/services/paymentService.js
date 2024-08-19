const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

const dotenv = require("dotenv");
const path = require("path");

const envFile =
  process.env.NODE_ENV === "production" ? ".env.production" : ".env";
dotenv.config({ path: path.resolve(__dirname, "../../", envFile) });

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);

async function checkout(body) {
  try {
    const rawPrice = body.price.replace(/[₹,]/g, ''); 
    const unitAmount = parseFloat(rawPrice) * 100;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: body.name,
            },
            unit_amount: unitAmount, 
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    return session;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
}

async function verifyPayment(sessionId) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status === "paid") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
}

module.exports = {
  checkout,
  verifyPayment,
};
