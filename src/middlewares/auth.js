const jwt = require("jsonwebtoken");
const { User } = require("../models");
const config = require("../config/config");

/** Create the authentication function */
const auth = () => async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return next(
        res.status(401).json({
          status: 401,
          message: "Please authentication!",
        })
      );
    }

    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      config.jwt.secret_key
    );
    if (!decoded) {
      return next(new Error("Please enter valid toke -!-"));
    }

    const user = await User.findOne({ _id: decoded.user });
    if (!user) {
      return next(new Error("Please authentication -!-"));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new Error(error?.message));
  }
};

module.exports = auth;
