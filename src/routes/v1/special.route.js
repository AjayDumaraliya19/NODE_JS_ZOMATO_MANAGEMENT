const express = require("express");
const { specialValidation } = require("../../validations");
const { specialController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create special */
router.post(
  "/create-special",
  validate(specialValidation.createSpecial),
  specialController.createSpecial
);

/** Get special list */
router.get(
  "/list",
  specialController.getSpecialList
);

/** Get special details by id */
router.get(
  "/get-details/:specialId",
  specialController.getDetails
);

/** special details update by id */
router.put(
  "/update-details/:specialId",
  specialController.updateDetails
);

/** Delete special */
router.delete(
  "/delete-special/:specialId",
  specialController.deleteSpecial
);

module.exports = router;
