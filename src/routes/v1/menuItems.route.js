const express = require("express");
const { menuItemsValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { menuItemsController } = require("../../controllers");

const router = express.Router();

/**create menuItems */
router.post(
    "/createMenuItems",
    validate(menuItemsValidation.createMenuItems),
    menuItemsController.createMenuItems
);

/**get menuItems list */
router.get(
    "/getMenuItemsList",
    menuItemsController.getMenuItemsList
);

/**get menuItems details */
router.get(
    "/getMenuItemsDetails/:menuItemsId",
    menuItemsController.getMenuItemsDetails
);

/**update menuItems */
router.put(
    "/updateMenuItems/:menuItemsId",
    menuItemsController.updateMenuItems
);

/**delete menuItems */
router.delete(
    "/deleteMenuItems/:menuItemsId",
    menuItemsController.deleteMenuItems
)

module.exports = router;