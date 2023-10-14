const { chatService } = require("../services");

/** create chat*/
const createChat = async (req, res) => {
  try {
    const reqBody = req.body;
    const chat = await chatService.createChat(reqBody);
    if (!chat) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { chat },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get chat list*/
const getChatList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await chatService.getChatList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of Chats successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get chat details by id*/
const getDetails = async (req, res) => {
  try {
    const getDetails = await chatService.getChatById(req.params.chatId);
    if (!getDetails) {
      throw new Error("ooppsss!... Chat not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of Chat successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** chat details update by id*/
const updateDetails = async (req, res) => {
  try {
    const chatId = req.params.chatId;
    const chatExists = await chatService.getChatById(chatId);
    if (!chatExists) {
      throw new Error("Chat not found!");
    }

    await chatService.updateDetails(chatId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Chat details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete chat by id*/
const deleteChat = async (req, res) => {
  try {
    const chatId = req.params.chatId;
    const chatExists = await chatService.getChatById(chatId);
    if (!chatExists) {
      throw new Error("Chat not found!");
    }

    await chatService.deleteChat(chatId);

    res.status(200).json({
      success: true,
      message: "Chat delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createChat,
  getChatList,
  getDetails,
  updateDetails,
  deleteChat,
};
