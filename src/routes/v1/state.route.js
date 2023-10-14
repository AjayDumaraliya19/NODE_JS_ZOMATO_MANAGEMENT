const express = require("express");
const { stateValidation } = require("../../validations");
const { stateController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create the state route */
router.post(
  "/create_state",
  validate(stateValidation.createState),
  stateController.createState
);

/** Get the state data list route */
router.get("/get_list", stateController.getStateList);

/** Update state data route */
router.put(
  "/update_state/:stateId",
  validate(stateValidation.createState),
  stateController.updateState
);

/** Delete state data route */
router.delete("/delete_state/:stataId", stateController.deleteState);

/** Exports all data here */
module.exports = router;
