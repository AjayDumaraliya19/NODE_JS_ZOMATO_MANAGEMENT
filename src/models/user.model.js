const mongoose = require("mongoose");

/* -------------------- Create schema for the User model -------------------- */
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
      required: true,
    },
    last_name: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: false,
      minlength: 6,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      unique: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
    mobile_num: {
      type: Number,
      trim: true,
    },
    role: {
      type: String,
      enum: ["Admin", "User", "admin", "user"],
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

const User = mongoose.model("user", userSchema);
module.exports = User;
