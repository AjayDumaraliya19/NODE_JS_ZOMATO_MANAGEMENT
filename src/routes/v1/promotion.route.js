const express = require("express");
const { promotionValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { promotionController } = require("../../controllers");

const router = express.Router();

/**create promotion */
router.post(
    "/createPromotion",
    validate(promotionValidation.createPromotion),
    promotionController.createPromotion
);

/**get promotion list */
router.get(
    "/getPromotionList",
    promotionController.getPromotionList
);

/**get promotion details */
router.get(
    "/getPromotionDetails/:promotionId",
    promotionController.getPromotionDetails
);

/**update promotion */
router.put(
    "/updatePromotion/:promotionId",
    promotionController.updatePromotion
);

/**delete promotion */
router.delete(
    "/deletePromotion/:promotionId",
    promotionController.deletePromotion
);

module.exports = router;