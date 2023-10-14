const express = require("express");
const { ordersValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const { orderController } = require("../../controllers");

const router = express.Router();

/**create order */
router.post(
    "/createOrder",
    validate(ordersValidation.createOrders),
    orderController.createOrder
);

/**get order list */
router.get(
    "/getOrderList",
    orderController.getOrderList
);

/**get order details */
router.get(
    "/orderDetails/:orderId",
    orderController.getOrderDetails
);

/**update order */
router.put(
    "/update/:orderId",
    orderController.updateOrder
);

/**delete order */
router.delete(
    "/delete/:orderId",
    orderController.deleteOrder
);

module.exports = router