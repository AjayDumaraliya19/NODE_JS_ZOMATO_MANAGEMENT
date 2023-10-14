const { userSettingService } = require("../services");

/** create userSetting */
const createUserSetting = async (req, res) => {
  try {
    const reqBody = req.body;
    const userSetting = await userSettingService.createUserSetting(reqBody);
    if (!userSetting) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { userSetting },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get userSetting list */
const getUserSettingList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await userSettingService.getUserSettingList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of UserSettings successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get userSetting details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await userSettingService.getUserSettingById(req.params.userSettingId);
    if (!getDetails) {
      throw new Error("ooppsss!... UserSetting not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of UserSetting successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** userSetting details update by id */
const updateDetails = async (req, res) => {
  try {
    const userSettingId = req.params.userSettingId;
    const userSettingExists = await userSettingService.getUserSettingById(userSettingId);
    if (!userSettingExists) {
      throw new Error("UserSetting not found!");
    }

    await userSettingService.updateDetails(userSettingId, req.body);

    res
      .status(200)
      .json({ success: true, message: "UserSetting details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete userSetting by id */
const deleteUserSetting = async (req, res) => {
  try {
    const userSettingId = req.params.userSettingId;
    const userSettingExists = await userSettingService.getUserSettingById(userSettingId);
    if (!userSettingExists) {
      throw new Error("UserSetting not found!");
    }

    await userSettingService.deleteUserSetting(userSettingId);

    res.status(200).json({
      success: true,
      message: "UserSetting delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createUserSetting,
  getUserSettingList,
  getDetails,
  updateDetails,
  deleteUserSetting,
};
