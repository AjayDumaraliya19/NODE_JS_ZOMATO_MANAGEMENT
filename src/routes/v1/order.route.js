const express = require("express");
const { orderValidation } = require("../../validations");
const { orderController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create order route */
router.post(
  "/create_order",
  validate(orderValidation.create_order),
  orderController.create_order
);

/** Get order list route */
router.get("/list", orderController.get_order_list);

/** Update order route */
router.put(
  "/update-order/:orderId",
  validate(orderValidation.create_order),
  orderController.update_order
);

/** Delete order list by Id route */
router.delete("/delete-order/:orderId", orderController.delete_order);

/** Exports all data module here */
module.exports = router;
