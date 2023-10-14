const mongoose = require("mongoose");

/** Create the schema for the CART */
const cart_Schema = new mongoose.Schema(
  {
    total_items: {
      type: Number,
      default: 0,
    },
    total_price: {
      type: Number,
      default: 0,
    },
    coupon_code: {
      type: String,
      trim: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    food1: {
      type: mongoose.Types.ObjectId,
      ref: "food",
    },
    food2: {
      type: mongoose.Types.ObjectId,
      ref: "food",
    },
    food3: {
      type: mongoose.Types.ObjectId,
      ref: "food",
    },
    food4: {
      type: mongoose.Types.ObjectId,
      ref: "food",
    },
    food5: {
      type: mongoose.Types.ObjectId,
      ref: "food",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Cart = mongoose.model("cart", cart_Schema);
module.exports = Cart;
