const express = require("express");
const { countryValidation } = require("../../validations");
const { countryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create the country data route */
router.post(
  "/create_country",
  validate(countryValidation.createCountry),
  countryController.createCountry
);

/** Get the Country data route */
router.get("/country_list", countryController.getCountryList);

/** Update coutry data route */
router.put(
  "/update_country/:countryId",
  validate(countryValidation.getCountryList),
  countryController.updateCountry
);

/** Delete country data route */
router.delete("/delete-country/:countryId", countryController.deleteCountry);

/** Exports all data here */
module.exports = router;
