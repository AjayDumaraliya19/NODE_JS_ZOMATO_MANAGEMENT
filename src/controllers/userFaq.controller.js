const { userFaqService } = require("../services");

/** create userFaq*/
const createUserFaq = async (req, res) => {
  try {
    const reqBody = req.body;
    const userFaq = await userFaqService.createUserFaq(reqBody);
    if (!userFaq) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { userFaq },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get userFaq list*/
const getUserFaqList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await userFaqService.getUserFaqList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of User Faqs successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get userFaq details by id*/
const getDetails = async (req, res) => {
  try {
    const getDetails = await userFaqService.getUserFaqById(req.params.userFaqId);
    if (!getDetails) {
      throw new Error("ooppsss!... User Faq not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of User Faq successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** userFaq details update by id*/
const updateDetails = async (req, res) => {
  try {
    const userFaqId = req.params.userFaqId;
    const userFaqExists = await userFaqService.getUserFaqById(userFaqId);
    if (!userFaqExists) {
      throw new Error("User Faq not found!");
    }

    await userFaqService.updateDetails(userFaqId, req.body);

    res
      .status(200)
      .json({ success: true, message: "User Faq details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete userFaq by id*/
const deleteUserFaq = async (req, res) => {
  try {
    const userFaqId = req.params.userFaqId;
    const userFaqExists = await userFaqService.getUserFaqById(userFaqId);
    if (!userFaqExists) {
      throw new Error("User Faq not found!");
    }

    await userFaqService.deleteUserFaq(userFaqId);

    res.status(200).json({
      success: true,
      message: "User Faq delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createUserFaq,
  getUserFaqList,
  getDetails,
  updateDetails,
  deleteUserFaq,
};
