const express = require("express");
const { customerSupportAgentValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { customerSupportAgentController } = require("../../controllers");

const router = express.Router();

/**create customerSupportAgent */
router.post(
    "/createCustomerSupportAgent",
    validate(customerSupportAgentValidation.createCustomerSupportAgent),
    customerSupportAgentController.createCustomerSupportAgent
);

/**get customerSupportAgent list */
router.get(
    "/getCustomerSupportAgentList",
    customerSupportAgentController.getCustomerSupportAgentList
);

/**get customerSupportAgent details */
router.get(
    "/getCustomerSupportAgentDetails/:customerSupportAgentId",
    customerSupportAgentController.getCustomerSupportAgentDetails
);

/**update customerSupportAgent */
router.put(
    "/updateCustomerSupportAgent/:customerSupportAgentId",
    customerSupportAgentController.updateCustomerSupportAgent
);

/**delete customerSupportAgent */
router.delete(
    "/deleteCustomerSupportAgent/:customerSupportAgentId",
    customerSupportAgentController.deleteCustomerSupportAgent
)

module.exports = router;