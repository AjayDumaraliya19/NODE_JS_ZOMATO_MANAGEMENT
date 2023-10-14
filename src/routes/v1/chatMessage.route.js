const express = require("express");
const { chatMessageValidation } = require("../../validations");
const { chatMessageController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create chatMessage */
router.post(
  "/create-chatMessage",
  validate(chatMessageValidation.createChatMessage),
  chatMessageController.createChatMessage
);

/** Get chatMessage list */
router.get(
  "/list",
  chatMessageController.getChatMessageList
);

/** Get chatMessage details by id */
router.get(
  "/get-details/:chatMessageId",
  chatMessageController.getDetails
);

/** user setting details update by id */
router.put(
  "/update-details/:chatMessageId",
  chatMessageController.updateDetails
);

/** Delete chatMessage */
router.delete(
  "/delete-chatMessage/:chatMessageId",
  chatMessageController.deleteChatMessage
);

module.exports = router;
