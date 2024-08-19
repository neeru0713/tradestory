const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const dotenv = require("dotenv");
const path = require("path");

const envFile =
  process.env.NODE_ENV === "production" ? ".env.production" : ".env";
dotenv.config({ path: path.resolve(__dirname, "../../", envFile) });

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; 
    if (!token) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "No token provided");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    const user = await User.findById(decoded._id); 
    if (!user) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "User not found");
    }
    req.user = user; 
    next(); 
  } catch (error) {
    console.error(error);
    return res.status(httpStatus.UNAUTHORIZED).json({
      message: error.message || "Unauthorized",
    });
  }
};

module.exports = authMiddleware;
