const express = require("express");
const { restaurantHourValidation } = require("../../validations");
const { restaurantHourController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create restaurantHour */
router.post(
  "/create-restaurantHour",
  validate(restaurantHourValidation.createRestaurantHour),
  restaurantHourController.createRestaurantHour
);

/** Get restaurantHour list */
router.get(
  "/list",
  restaurantHourController.getRestaurantHourList
);

/** Get restaurantHour details by id */
router.get(
  "/get-details/:restaurantHourId",
  restaurantHourController.getDetails
);

/** user setting details update by id */
router.put(
  "/update-details/:restaurantHourId",
  restaurantHourController.updateDetails
);

/** Delete restaurantHour */
router.delete(
  "/delete-restaurantHour/:restaurantHourId",
  restaurantHourController.deleteRestaurantHour
);

module.exports = router;
