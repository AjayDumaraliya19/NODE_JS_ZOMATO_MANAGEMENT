const express = require("express");
const { userFaqValidation } = require("../../validations");
const { userFaqController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create userfaq */
router.post(
  "/create-userFaq",
  validate(userFaqValidation.createUserFaq),
  userFaqController.createUserFaq
);

/** Get userfaq list */
router.get(
  "/list",
  userFaqController.getUserFaqList
);

/** Get userfaq details by id */
router.get(
  "/get-details/:userFaqId",
  userFaqController.getDetails
);

/** userfaq details update by id */
router.put(
  "/update-details/:userFaqId",
  userFaqController.updateDetails
);

/** Delete userfaq */
router.delete(
  "/delete-userFaq/:userFaqId",
  userFaqController.deleteUserFaq
);

module.exports = router;
