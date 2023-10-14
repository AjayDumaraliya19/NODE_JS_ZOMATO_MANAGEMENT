const express = require("express");
const { orderItemValidation } = require("../../validations");
const { orderItemController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create orderItem */
router.post(
  "/create-orderItem",
  validate(orderItemValidation.createOrderItem),
  orderItemController.createOrderItem
);

/** Get orderItem list */
router.get(
  "/list",
  orderItemController.getOrderItemList
);

/** Get orderItem details by id */
router.get(
  "/get-details/:orderItemId",
  orderItemController.getDetails
);

/** orderItem details update by id */
router.put(
  "/update-details/:orderItemId",
  orderItemController.updateDetails
);

/** Delete orderItem */
router.delete(
  "/delete-orderItem/:orderItemId",
  orderItemController.deleteOrderItem
);

module.exports = router;
