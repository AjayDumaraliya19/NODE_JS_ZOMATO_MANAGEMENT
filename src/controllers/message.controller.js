const { messageService } = require("../services");

/** create message */
const createMessage = async (req, res) => {
  try {
    const reqBody = req.body;
    const message = await messageService.createMessage(reqBody);
    if (!message) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { message },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get message list */
const getMessageList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await messageService.getMessageList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of Messages successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get message details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await messageService.getMessageById(req.params.messageId);
    if (!getDetails) {
      throw new Error("ooppsss!... Message not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of Message successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** message details update by id */
const updateDetails = async (req, res) => {
  try {
    const messageId = req.params.messageId;
    const messageExists = await messageService.getMessageById(messageId);
    if (!messageExists) {
      throw new Error("Message not found!");
    }

    await messageService.updateDetails(messageId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Message details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete message by id */
const deleteMessage = async (req, res) => {
  try {
    const messageId = req.params.messageId;
    const messageExists = await messageService.getMessageById(messageId);
    if (!messageExists) {
      throw new Error("Message not found!");
    }

    await messageService.deleteMessage(messageId);

    res.status(200).json({
      success: true,
      message: "Message delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createMessage,
  getMessageList,
  getDetails,
  updateDetails,
  deleteMessage,
};
