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
      trim: true,
    },
    backTestData: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BackTestData",
      },
    ],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Strategy", StrategySchema);
