const express = require("express");
const { cartValidation } = require("../../validations");
const { cartController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create the cart route */
router.post(
  "/create_cart",
  validate(cartValidation.create_cart),
  cartController.create_cart
);

/** Get cart list route */
router.get("/cart_list", cartController.get_cart_list);

/** Update the cart list route */
router.put(
  "/update_cart/:cartId",
  validate(cartValidation.create_cart),
  cartController.update_cart
);

/** Delete the cart route */
router.delete("/delete_cart/:cartId", cartController.delete_cart);

/** Exports all data here */
module.exports = router;
