const mongoose = require("mongoose");

const StrategyDetailSchema = new mongoose.Schema(
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
      enum: ["win", "loss"],
    },
    strategyId: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Strategy",
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Strategy", StrategyDetailSchema);
