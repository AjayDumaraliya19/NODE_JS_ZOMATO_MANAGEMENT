const express = require("express");
const { cityValidation } = require("../../validations");
const { cityController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create city data route */
router.post(
  "/create_city",
  validate(cityValidation.createCity),
  cityController.createCity
);

/** Get city list data route */
router.get("/list", cityController.getCityList);

/** Upata city data route */
router.put(
  "/update_city/:cityId",
  validate(cityValidation.createCity),
  cityController.updateCity
);

/** Delete city data route */
router.delete("/delete_city/:cityId", cityController.deleteCity);

/** Exports all modules here */
module.exports = router;
