const mongoose = require("mongoose");

const StrategySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    accuracy: {
      type: Number,
      required: true,
      min: 0,
      max: 100, 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Strategy", StrategySchema);
