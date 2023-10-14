const express = require("express");
const { restaurantPhotoValidation } = require("../../validations");
const { upload } = require("../../middlewares/upload")
const validate = require("../../middlewares/validate");
const { restaurantPhotoController } = require("../../controllers");

const router = express.Router();

/**create restaurantPhoto */
router.post(
  "/create-restaurantPhoto",
  upload.single("restaurantPhoto_image"),
  validate(restaurantPhotoValidation.createRestaurantPhoto),
  restaurantPhotoController.createRestaurantPhoto
);

/**Get restaurantPhoto list */
router.get(
  "/list",
  restaurantPhotoController.getRestaurantPhotoList
);

/**Get restaurantPhoto details by id */
router.get(
  "/get-details/:restaurantPhotoId",
  restaurantPhotoController.getDetails
);

/**User setting details update by id */
router.put(
  "/update-details/:restaurantPhotoId",
  restaurantPhotoController.updateDetails
);

/**Delete restaurantPhoto */
router.delete(
  "/delete-restaurantPhoto/:restaurantPhotoId",
  restaurantPhotoController.deleteRestaurantPhoto
);

module.exports = router;
