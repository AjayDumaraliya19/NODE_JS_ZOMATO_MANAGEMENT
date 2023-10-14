const express = require("express");
const { deliveryAssignmentValidation } = require("../../validations");
const { deliveryAssignmentController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create deliveryAssignment */
router.post(
  "/create-deliveryAssignment",
  validate(deliveryAssignmentValidation.createDeliveryAssignment),
  deliveryAssignmentController.createDeliveryAssignment
);

/** Get deliveryAssignment list */
router.get(
  "/list",
  deliveryAssignmentController.getDeliveryAssignmentList
);

/** Get deliveryAssignment details by id */
router.get(
  "/get-details/:deliveryAssignmentId",
  deliveryAssignmentController.getDetails
);

/** deliveryAssignment details update by id */
router.put(
  "/update-details/:deliveryAssignmentId",
  deliveryAssignmentController.updateDetails
);

/** Delete deliveryAssignment */
router.delete(
  "/delete-deliveryAssignment/:deliveryAssignmentId",
  deliveryAssignmentController.deleteDeliveryAssignment
);

module.exports = router;
