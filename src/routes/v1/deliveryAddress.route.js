const express = require("express");
const { deliveryAddressValidation } = require("../../validations");
const { deliveryAddressController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create deliveryAddress */
router.post(
  "/create-deliveryAddress",
  validate(deliveryAddressValidation.createDeliveryAddress),
  deliveryAddressController.createDeliveryAddress
);

/** Get deliveryAddress list */
router.get(
  "/list",
  deliveryAddressController.getDeliveryAddressList
);

/** Get deliveryAddress details by id */
router.get(
  "/get-details/:deliveryAddressId",
  deliveryAddressController.getDetails
);

/** deliveryAddress details update by id */
router.put(
  "/update-details/:deliveryAddressId",
  deliveryAddressController.updateDetails
);

/** Delete deliveryAddress */
router.delete(
  "/delete-deliveryAddress/:deliveryAddressId",
  deliveryAddressController.deleteDeliveryAddress
);

module.exports = router;
