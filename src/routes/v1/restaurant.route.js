const express = require("express");
const { restaurantValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { restaurantController } = require("../../controllers");

const router = express.Router();

/**create restaurant */
router.post(
    "/createRestaurant",
    validate(restaurantValidation.createRestaurant),
    restaurantController.createRestaurant
);

/**get restaurant list */
router.get(
    "/getRestaurantList",
    restaurantController.getRestaurantList
);

/**get restaurant details */
router.get(
    "/getRestaurantDetails/:restaurantId",
    restaurantController.getRestaurantDetails
);

/**update restaurant */
router.put(
    "/updateRestaurant/:restaurantId",
    restaurantController.updateRestaurant
);

/**delete restaurant */
router.delete(
    "/deleteRestaurant/:restaurantId",
    restaurantController.deleteRestaurant
)

module.exports = router;