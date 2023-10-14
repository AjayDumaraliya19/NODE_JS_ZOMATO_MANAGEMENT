const { chatMessageService } = require("../services");

/** Create chatMessage */
const createChatMessage = async (req, res) => {
  try {
    const reqBody = req.body;
    const chatMessage = await chatMessageService.createChatMessage(reqBody);
    if (!chatMessage) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { chatMessage },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get chatMessage list */
const getChatMessageList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await chatMessageService.getChatMessageList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of ChatMessages successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get chatMessage details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await chatMessageService.getChatMessageById(req.params.chatMessageId);
    if (!getDetails) {
      throw new Error("ooppsss!... ChatMessage not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of ChatMessage successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** chatMessage details update by id */
const updateDetails = async (req, res) => {
  try {
    const chatMessageId = req.params.chatMessageId;
    const chatMessageExists = await chatMessageService.getChatMessageById(chatMessageId);
    if (!chatMessageExists) {
      throw new Error("ChatMessage not found!");
    }

    await chatMessageService.updateDetails(chatMessageId, req.body);

    res
      .status(200)
      .json({ success: true, message: "ChatMessage details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete chatMessage by id */
const deleteChatMessage = async (req, res) => {
  try {
    const chatMessageId = req.params.chatMessageId;
    const chatMessageExists = await chatMessageService.getChatMessageById(chatMessageId);
    if (!chatMessageExists) {
      throw new Error("ChatMessage not found!");
    }

    await chatMessageService.deleteChatMessage(chatMessageId);

    res.status(200).json({
      success: true,
      message: "ChatMessage delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createChatMessage,
  getChatMessageList,
  getDetails,
  updateDetails,
  deleteChatMessage,
};
