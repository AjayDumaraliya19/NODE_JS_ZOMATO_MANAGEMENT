const express = require("express");
const { chatValidation } = require("../../validations");
const { chatController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create chat */
router.post(
  "/create-chat",
  validate(chatValidation.createChat),
  chatController.createChat
);

/** Get chat list */
router.get(
  "/list",
  chatController.getChatList
);

/** Get chat details by id */
router.get(
  "/get-details/:chatId",
  chatController.getDetails
);

/** chat details update by id */
router.put(
  "/update-details/:chatId",
  chatController.updateDetails
);

/** Delete chat */
router.delete(
  "/delete-chat/:chatId",
  chatController.deleteChat
);

module.exports = router;
