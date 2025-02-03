const mongoose = require("mongoose");

const StrategySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    accuracy: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    BackTestData: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StrategyData",
      },
    ],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Strategy", StrategySchema);
