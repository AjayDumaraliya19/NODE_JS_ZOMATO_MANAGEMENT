const express = require("express");
const { userSettingValidation } = require("../../validations");
const { userSettingController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Create usersetting */
router.post(
  "/create-userSetting",
  validate(userSettingValidation.createUserSetting),
  userSettingController.createUserSetting
);

/**Get usersetting list */
router.get(
  "/list",
  userSettingController.getUserSettingList
);

/**Get usersetting details by id */
router.get(
  "/get-details/:userSettingId",
  userSettingController.getDetails
);

/**User setting details update by id */
router.put(
  "/update-details/:userSettingId",
  userSettingController.updateDetails
);

/**Delete usersetting */
router.delete(
  "/delete-usersetting/:userSettingId",
  userSettingController.deleteUserSetting
);

module.exports = router;
