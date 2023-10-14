const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    city_name: {
      type: String,
      trim: true,
      required: true,
    },
    state: {
      type: mongoose.Types.ObjectId,
      ref: "state",
    },
    is_active: {
      type: Boolean,
      trim: true,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const City = mongoose.model("city", citySchema);

module.exports = City;
