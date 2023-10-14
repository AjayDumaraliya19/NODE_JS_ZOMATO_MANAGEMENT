const express = require("express");
const { restaurantOwnersValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { restaurantOwnersController } = require("../../controllers");

const router = express.Router();

/**create restaurantOwners */
router.post(
    "/createRestaurantOwners",
    validate(restaurantOwnersValidation.createRestaurantOwners),
    restaurantOwnersController.createRestaurantOwners
);

/**get restaurantOwners list */
router.get(
    "/getRestaurantOwnersList",
    restaurantOwnersController.getRestaurantOwnersList
);

/**get restaurantOwners details */
router.get(
    "/getRestaurantOwnersDetails/:restaurantOwnersId",
    restaurantOwnersController.getRestaurantOwnersDetails
);

/**update restaurantOwners */
router.put(
    "/updateRestaurantOwners/:restaurantOwnersId",
    restaurantOwnersController.updateRestaurantOwners
);

/**delete restaurantOwners */
router.delete(
    "/deleteRestaurantOwners/:restaurantOwnersId",
    restaurantOwnersController.deleteRestaurantOwners
)

module.exports = router;