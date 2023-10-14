const jwt = require("jsonwebtoken");
const { Token } = require("../models");
const config = require("../config/config");

/** Create Token in Jsonwebtoken */
const genrateToken = async (reqBody) => {
  let playload = {
    ...reqBody,
    expire_time: reqBody.expire_time.unix(),
  };
  return jwt.sign(playload, config.jwt.secret_key);
};

/** Save token in our database */
const saveToken = async (reqBody) => {
  return Token.findOneAndUpdate(
    { user: reqBody.user },
    { $set: { ...reqBody } },
    { new: true, upsert: true }
  );
};

module.exports = {
  genrateToken,
  saveToken,
};
