const express = require("express");
const { adminUserValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { adminUserController } = require("../../controllers");

const router = express.Router();

/**create adminUser */
router.post(
    "/createAdminUser",
    validate(adminUserValidation.createAdminUser),
    adminUserController.createAdminUser
);

/**get adminUser list */
router.get(
    "/getadminUserList",
    adminUserController.getAdminUserList
);

/**get adminUser details */
router.get(
    "/getAdminUserDetails/:adminUserId",
    adminUserController.getAdminUserDetails
);

/**update adminUser */
router.put(
    "/updateAdminUser/:adminUserId",
    adminUserController.updateAdminUser
);

/**delete adminUser */
router.delete(
    "/deleteAdminUser/:adminUserId",
    adminUserController.deleteAdminUser
)

module.exports = router;