const { customerStoryService } = require("../services");

/** Create customerStory */
const createCustomerStory = async (req, res) => {
  try {
    const reqBody = req.body;
    const customerStory = await customerStoryService.createCustomerStory(reqBody);
    if (!customerStory) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { customerStory },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get customerStory list */
const getCustomerStoryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await customerStoryService.getCustomerStoryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of CustomerStories successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get customerStory details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await customerStoryService.getCustomerStoryById(req.params.customerStoryId);
    if (!getDetails) {
      throw new Error("ooppsss!... CustomerStory not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of CustomerStory successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** customerStory details update by id */
const updateDetails = async (req, res) => {
  try {
    const customerStoryId = req.params.customerStoryId;
    const customerStoryExists = await customerStoryService.getCustomerStoryById(customerStoryId);
    if (!customerStoryExists) {
      throw new Error("CustomerStory not found!");
    }

    await customerStoryService.updateDetails(customerStoryId, req.body);

    res
      .status(200)
      .json({ success: true, message: "CustomerStory details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete customerStory by id */
const deleteCustomerStory = async (req, res) => {
  try {
    const customerStoryId = req.params.customerStoryId;
    const customerStoryExists = await customerStoryService.getCustomerStoryById(customerStoryId);
    if (!customerStoryExists) {
      throw new Error("CustomerStory not found!");
    }

    await customerStoryService.deleteCustomerStory(customerStoryId);

    res.status(200).json({
      success: true,
      message: "CustomerStory delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createCustomerStory,
  getCustomerStoryList,
  getDetails,
  updateDetails,
  deleteCustomerStory,
};
