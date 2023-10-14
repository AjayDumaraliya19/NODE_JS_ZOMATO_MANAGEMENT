const mongoose = require("mongoose");

const restaurant_Schema = mongoose.Schema(
  {
    restaurant_name: {
      type: String,
      trim: true,
    },
    restaurant_address: {
      type: String,
      trim: true,
    },
    restaurant_contact_no: {
      type: String,
      trim: true,
    },
    owner_detail: {
      type: String,
      trim: true,
    },
    owner_contact_no: {
      type: String,
      trim: true,
    },
    whatsapp_notification: {
      type: Boolean,
      default: true,
    },
    restaurant_image: {
      type: String,
      trim: true,
    },
    food_image: {
      type: String,
      trim: true,
    },
    restro_type: {
      type: mongoose.Types.ObjectId,
      ref: "restroType",
    },
    city: {
      type: mongoose.Types.ObjectId,
      ref: "city",
    },
    restaurant_status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Restaurant = mongoose.model("restaurant", restaurant_Schema);
module.exports = Restaurant;
