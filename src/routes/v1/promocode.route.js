const express = require("express");
const { promocodeValidation } = require("../../validations");
const { promocodeController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create promocode */
router.post(
  "/create-promocode",
  validate(promocodeValidation.createPromocode),
  promocodeController.createPromocode
);

/** Get promocode list */
router.get(
  "/list",
  promocodeController.getPromocodeList
);

/** Get promocode details by id */
router.get(
  "/get-details/:promocodeId",
  promocodeController.getDetails
);

/** promocode details update by id */
router.put(
  "/update-details/:promocodeId",
  promocodeController.updateDetails
);

/** Delete promocode */
router.delete(
  "/delete-promocode/:promocodeId",
  promocodeController.deletePromocode
);

module.exports = router;
