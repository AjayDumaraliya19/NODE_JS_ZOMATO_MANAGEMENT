const express = require("express");
const { restroValidation } = require("../../validations");
const { restroController } = require("../../controllers");
const { upload } = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create restaurant */
router.post(
  "/create-restaurant",
  upload.array("restaurant_image", 2),
  validate(restroValidation.create_restaurant),
  restroController.create_restaurant
);

/** Update restaurant with id */
router.put(
  "/update-restaurant/:restaurantId",
  validate(restroValidation.create_restaurant),
  restroController.update_restaurant
);

router.put(
  "/update-restaurant-status/:restaurantId",
  restroController.update_status
);

/** Delete restaurant by id */
router.delete(
  "/delete-restaurant/:restaurantId",
  restroController.delete_restaurant
);

/** Restaurant list */
router.get("/list", restroController.get_restaurant_list);
// Exporting router

/** Exports all data here */
module.exports = router;
