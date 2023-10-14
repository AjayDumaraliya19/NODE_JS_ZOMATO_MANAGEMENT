const express = require("express");
const validate = require("../../middlewares/validate");
const { tokenValidation } = require("../../validations");
const { tokenController } = require("../../controllers");
const { auth } = require("../../middlewares/auth");

const router = express.Router();

/** Create token */
router.post(
  "/create-token",
  validate(tokenValidation.generateToken),
  tokenController.generateToken
);

/** Verify token to get user details */
router.get("/verify-token", auth(), tokenController.verifyToken);

module.exports = router;
