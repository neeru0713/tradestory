const mongoose = require("mongoose");

const BackTestDataSchema = new mongoose.Schema(
  {
    time: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    result: {
      type: String,
      required: true,
      trim: true,
      enum: ["profit", "loss"],
    },
    strategyId: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Strategy",
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model(
  "BackTestData",
  BackTestDataSchema
);
