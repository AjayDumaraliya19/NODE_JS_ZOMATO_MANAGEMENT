const express = require("express");
const { customerStoryValidation } = require("../../validations")
const { customerStoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create customerStory */
router.post(
    "/createCustomerStory",
    validate(customerStoryValidation.createCustomerStory),
    customerStoryController.createCustomerStory
);

/**get customerStory list */
router.get(
    "/getCustomerStoryList",
    customerStoryController.getCustomerStoryList
);

/**get customerStory details */
router.get(
    "/getCustomerStoryDetails/:customerStoryId",
    customerStoryController.getDetails
);

/**update customerStory */
router.put(
    "/updateCustomerStory/:customerStoryId",
    customerStoryController.updateDetails
);

/**delete customerStory */
router.delete(
    "/deleteCustomerStory/:customerStoryId",
    customerStoryController.deleteCustomerStory
)

module.exports = router;