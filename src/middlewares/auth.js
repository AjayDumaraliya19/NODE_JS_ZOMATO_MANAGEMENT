const jwt = require("jsonwebtoken");
const { User } = require("../models");
const config = require("../config/config");
const jwtSecrectKey = "jwtsecretkeyhere";

const auth = (role) => async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return next(res.status(401).json({
        status: 401,
        message: "Please authenticate!"
      }));
    }

    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      config.jwt.secret_key
    );

    if (!decoded) {
    }
    console.log(decoded, 'decoded');
    const user = await User.findOne({ _id: decoded.user });

    if (!user) {
      return next(new Error("Please authenticate!"));
    }

    req.user = user;
    next();

    jwt.verify(token, jwtSecrectKey, (err, decoded) => {
      console.log(role, 'role');
      if (err || !role.find((ele) => ele === decoded.role)) {
        console.log(decoded.role, 'decoded.role');
        console.log("Error !", err);
        throw Error("You dont have permission");
      }
    })

  } catch (error) {
    return next(new Error(error));
  }
};

module.exports = { auth };
