const express = require("express");
const { messageValidation } = require("../../validations");
const { messageController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create message */
router.post(
  "/create-message",
  validate(messageValidation.createMessage),
  messageController.createMessage
);

/**  Get message list*/
router.get(
  "/list",
  messageController.getMessageList
);

/** Get message details by id */
router.get(
  "/get-details/:messageId",
  messageController.getDetails
);

/** message details update by id */
router.put(
  "/update-details/:messageId",
  messageController.updateDetails
);

/** Delete message */
router.delete(
  "/delete-message/:messageId",
  messageController.deleteMessage
);

module.exports = router;
