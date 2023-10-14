const mongoose = require("mongoose");

const counterySchema = new mongoose.Schema(
  {
    country_name: {
      type: String,
      trim: true,
      required: true,
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

const Country = mongoose.model("country", counterySchema);

module.exports = Country;
