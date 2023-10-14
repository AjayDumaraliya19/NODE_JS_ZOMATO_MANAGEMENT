const express = require("express");
const { tokenValidation } = require("../../validations");
const { tokenController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** Create jsonwebtoken */
router.post(
  "/create_token",
  validate(tokenValidation.genrateToken),
  tokenController.genrateToken
);

/** Verify token to get user details */
router.get("/get_token", auth(), tokenController.verifyToken);

module.exports = router;
