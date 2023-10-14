const express = require("express");
const { stateValidation } = require("../../validations");
const { stateController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create state */
router.post(
  "/create-state",
  validate(stateValidation.createState),
  stateController.createState
);

/** Get state list */
router.get(
  "/list",
  stateController.getStateList
);

/** Get state details by id */
router.get(
  "/get-details/:stateId",
  stateController.getDetails
);

/** state details update by id */
router.put(
  "/update-details/:stateId",
  stateController.updateDetails
);

/** Delete state */
router.delete(
  "/delete-state/:stateId",
  stateController.deleteState
);

module.exports = router;
