const mongoose = require("mongoose");

/** Create the food schema model */
const food_Schema = new mongoose.Schema(
  {
    food_name: {
      type: String,
      trim: true,
    },
    food_price: {
      type: Number,
      default: 10,
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurant",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Food = mongoose.model("food", food_Schema);
module.exports = Food;
