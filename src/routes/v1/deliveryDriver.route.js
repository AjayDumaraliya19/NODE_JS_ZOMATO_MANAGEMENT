const express = require("express");
const { deliveryDriverValidation } = require("../../validations");
const { deliveryDriverController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create deliveryDriver */
router.post(
  "/create-deliveryDriver",
  validate(deliveryDriverValidation.createDeliveryDriver),
  deliveryDriverController.createDeliveryDriver
);

/** Get deliveryDriver list */
router.get(
  "/list",
  deliveryDriverController.getDeliveryDriverList
);

/** Get deliveryDriver details by id */
router.get(
  "/get-details/:deliveryDriverId",
  deliveryDriverController.getDetails
);

/** deliveryDriver details update by id */
router.put(
  "/update-details/:deliveryDriverId",
  deliveryDriverController.updateDetails
);

/** Delete deliveryDriver */
router.delete(
  "/delete-deliveryDriver/:deliveryDriverId",
  deliveryDriverController.deleteDeliveryDriver
);

module.exports = router;
