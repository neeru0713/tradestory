const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const envFile = ".env";
const authRoutes = require("./routes/authRoutes.js")
const tradeRoutes = require("./routes/tradeRoutes.js");
const paymentRoutes = require("./routes/paymentRoutes.js");
const httpStatus = require("http-status");
const { errorHandler } = require("./middlewares/error");
dotenv.config({ path: path.resolve(__dirname, '..', envFile) });
const ApiError = require("./utils/ApiError");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/auth/", authRoutes);
app.use("/api/trade", tradeRoutes);
app.use("/api/payment/", paymentRoutes);

const mongoUrl = process.env.MONGODB_URL;

// MongoDB connection
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Health check endpoint
app.get("/health-check", async (req, res) => {
  try {
    const mongoState = mongoose.connection.readyState;
    const isConnected = mongoState === 1; 
    if (isConnected) {
      res.status(200).json({ message: "success" });
    } else {
      res.status(500).json({ message: "MongoDB connection down" });
    }
  } catch (error) {
    res.status(500).json({ message: "service down", error: error.message });
  }
});

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

app.use(errorHandler);


const port = process.env.PORT || 8080; 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});