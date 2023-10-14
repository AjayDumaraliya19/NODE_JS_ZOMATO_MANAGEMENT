const express = require("express");
const { complaintValidation } = require("../../validations");
const { complaintController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create complaint */
router.post(
  "/create-complaint",
  validate(complaintValidation.createComplaint),
  complaintController.createComplaint
);

/** Get complaint list */
router.get(
  "/list",
  complaintController.getComplaintList
);

/** Get complaint details by id */
router.get(
  "/get-details/:complaintId",
  complaintController.getDetails
);

/** complaint details update by id */
router.put(
  "/update-details/:complaintId",
  complaintController.updateDetails
);

/** Delete complaint */
router.delete(
  "/delete-complaint/:complaintId",
  complaintController.deleteComplaint
);

module.exports = router;
