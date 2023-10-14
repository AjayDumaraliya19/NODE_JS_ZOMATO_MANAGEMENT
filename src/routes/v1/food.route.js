const express = require("express");
const { foodValidation } = require("../../validations");
const { foodController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create food route route */
router.post(
  "/create_food",
  validate(foodValidation.create_food),
  foodController.create_food
);

/** Update food by Id route */
router.put(
  "/update_food/:foodId",
  validate(foodValidation.create_food),
  foodController.update_food
);

/** Delete food by id route */
router.delete("/delete-food/:foodId", foodController.delete_food);

/** Get food list route */
router.get("/list", foodController.get_food_list);

/** Exports all data module here */
module.exports = router;
