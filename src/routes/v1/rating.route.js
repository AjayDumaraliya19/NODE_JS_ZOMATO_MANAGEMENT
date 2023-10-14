const express = require("express");
const { ratingValidation } = require("../../validations");
const { ratingController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create rating */
router.post(
  "/create-rating",
  validate(ratingValidation.createRating),
  ratingController.createRating
);

/** Get rating list */
router.get(
  "/list",
  ratingController.getRatingList
);

/** Get rating details by id */
router.get(
  "/get-details/:ratingId",
  ratingController.getDetails
);

/** rating details update by id */
router.put(
  "/update-details/:ratingId",
  ratingController.updateDetails
);

/** Delete rating */
router.delete(
  "/delete-rating/:ratingId",
  ratingController.deleteRating
);

module.exports = router;
