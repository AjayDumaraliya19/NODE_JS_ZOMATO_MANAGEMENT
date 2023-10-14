const express = require("express");
const { marketingManagerValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { marketingManagerController } = require("../../controllers");

const router = express.Router();

/**create marketingManager */
router.post(
    "/createMarketingManager",
    validate(marketingManagerValidation.createMarketingManager),
    marketingManagerController.createMarketingManager
);

/**get marketingManager list */
router.get(
    "/getMarketingManagerList",
    marketingManagerController.getMarketingManagerList
);

/**get marketingManager details */
router.get(
    "/getMarketingManagerDetails/:marketingManagerId",
    marketingManagerController.getMarketingManagerDetails
);

/**update marketingManager */
router.put(
    "/updateMarketingManager/:marketingManagerId",
    marketingManagerController.updateMarketingManager
);

/**delete marketingManager */
router.delete(
    "/deleteMarketingManager/:marketingManagerId",
    marketingManagerController.deleteMarketingManager
)

module.exports = router;