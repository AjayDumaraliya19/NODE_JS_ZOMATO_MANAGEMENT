const express = require("express");
const { serachValidation } = require("../../validations");
const { serachController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Searches list city by state */
router.get("/city-by-state/:stateId", serachController.city_by_state);

/** Create city by state json */
router.post(
  "/city-by-state-json",
  validate(serachController.city_by_state),
  serachController.city_by_state_json
);

/** Get city by params state name */
router.get(
  "/city-by-params-state-name/:stateName",
  serachController.city_by_params_state_name
);

/** Searches list restaurant by city */
router.get("/restaurant-by-city/:cityId", serachController.restaurant_by_city);

/** Create restrorant by city json */
router.post(
  "/restaurant-by-city-json",
  validate(serachController.restaurant_by_city),
  serachController.restaurant_by_city_json
);

/** Get restrorant by param city name */
router.get(
  "/restaurant-by-params-city-name/:cityName",
  serachController.restaurant_by_params_city_name
);

/** Searches of restaurant by type and city */
router.post(
  "/restaurant-by-type-and-city",
  validate(serachValidation.res_type_and_city),
  serachController.restaurant_by_type_and_city
);

/** Get restaurant by id */
router.get(
  "/restaurant-by-id/:restaurantId",
  serachController.get_restaurant_by_id
);

/** Exports the all data here */
module.exports = router;
