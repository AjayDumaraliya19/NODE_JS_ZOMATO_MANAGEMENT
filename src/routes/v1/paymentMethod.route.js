const express = require("express");
const { paymentMethodValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { paymentMethodController } = require("../../controllers");

const router = express.Router();

/**create paymentMethod */
router.post(
    "/createPaymentMethod",
    validate(paymentMethodValidation.createPaymentMethod),
    paymentMethodController.createPaymentMethod
);

/**get paymentMethod list */
router.get(
    "/getPaymentMethodList",
    paymentMethodController.getPaymentMethodList
);

/**get paymentMethod details */
router.get(
    "/getPaymentMethodDetails/:paymentMethodId",
    paymentMethodController.getPaymentMethodDetails
);

/**update paymentMethod */
router.put(
    "/updatePaymentMethod/:paymentMethodId",
    paymentMethodController.updatePaymentMethod
);

/**delete paymentMethod */
router.delete(
    "/deletePaymentMethod/:paymentMethodId",
    paymentMethodController.deletePaymentMethod
);

module.exports = router;