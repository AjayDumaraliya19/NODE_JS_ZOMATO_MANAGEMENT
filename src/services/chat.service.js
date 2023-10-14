const { Chat } = require("../models");

/**Create chat */
const createChat = async (reqBody) => {
  return Chat.create(reqBody);
};

/**Get chat list */
const getChatList = async () => {
  return Chat.find({ $or: [{ is_active: true }] })
    .populate({
      path: "user_id",
      select: "user_name, profile_info , email"
    })
};

/**Get chat details by id */
const getChatById = async (chatId) => {
  return Chat.findById(chatId);
};

/**Chat details update by id */
const updateDetails = async (chatId, updateBody) => {
  return Chat.findByIdAndUpdate(chatId, { $set: updateBody });
};

/**Delete chat */
const deleteChat = async (chatId) => {
  return Chat.findByIdAndDelete(chatId);
};

module.exports = {
  createChat,
  getChatList,
  getChatById,
  updateDetails,
  deleteChat,
};
