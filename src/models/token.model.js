const { string } = require("joi");
const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      trim: true,
    },
    expire_time: {
      type: Date,
      default: null,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
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

const Token = mongoose.model("token", tokenSchema);

module.exports = Token;
