const express = require("express");
const { paymentHistoryValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { paymentHistoryController } = require("../../controllers");

const router = express.Router();

/**create paymentHistory */
router.post(
    "/createPaymentHistory",
    validate(paymentHistoryValidation.createPaymentHistory),
    paymentHistoryController.createPaymentHistory
);

/**get paymentHistory list */
router.get(
    "/getPaymentHistoryList",
    paymentHistoryController.getPaymentHistoryList
);

/**get paymentHistory details */
router.get(
    "/getPaymentHistoryDetails/:paymentHistoryId",
    paymentHistoryController.getPaymentHistoryDetails
);

/**update paymentHistory */
router.put(
    "/updatePaymentHistory/:paymentHistoryId",
    paymentHistoryController.updatePaymentHistory
);

/**delete paymentHistory */
router.delete(
    "/deletePaymentHistory/:paymentHistoryId",
    paymentHistoryController.deletePaymentHistory
);

module.exports = router;