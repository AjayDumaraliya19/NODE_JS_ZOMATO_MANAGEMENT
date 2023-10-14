const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
  {
    state_name: {
      type: String,
      trim: true,
      required: true,
    },
    country: {
      type: mongoose.Types.ObjectId,
      ref: "country",
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

const State = mongoose.model("state", stateSchema);

module.exports = State;
