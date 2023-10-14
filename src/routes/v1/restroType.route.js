const express = require("express");
const { restroTypeValidation } = require("../../validations");
const { restroTypeController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create the Restro type route */
router.post(
  "/create_restroType",
  validate(restroTypeValidation.create_restaurant_type),
  restroTypeController.create_restaurant_type
);

/** Updatet the Restro type route */
router.put(
  "/update_restroType/:restaurant_typeId",
  validate(restroTypeValidation.create_restaurant_type),
  restroTypeController.update_restaurant_type
);

/** Delete the Restro type route */
router.delete(
  "/delete_restroType/:restaurant_typeId",
  restroTypeController.delete_restaurant_type
);

/** Get the Restro type route */
router.get("/restroType_list", restroTypeController.get_restaurant_type_list);

module.exports = router;
