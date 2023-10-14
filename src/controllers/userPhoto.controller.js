const { userPhotoService } = require("../services");

/** create userPhoto */
const createUserPhoto = async (req, res) => {
  try {
    const reqBody = req.body;

    if (req.file) {
      reqBody.userPhoto_image = req.file.filename;
    } else {
      throw new Error("User image is required!");
    }

    const userPhoto = await userPhotoService.createUserPhoto(reqBody);

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { userPhoto },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get userPhoto list */
const getUserPhotoList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await userPhotoService.getUserPhotoList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of UserPhotos successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get userPhoto details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await userPhotoService.getUserPhotoById(req.params.userPhotoId);
    if (!getDetails) {
      throw new Error("ooppsss!... UserPhoto not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of UserPhoto successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** userPhoto details update by id */
const updateDetails = async (req, res) => {
  try {
    const userPhotoId = req.params.userPhotoId;
    const userPhotoExists = await userPhotoService.getUserPhotoById(userPhotoId);
    if (!userPhotoExists) {
      throw new Error("UserPhoto not found!");
    }

    await userPhotoService.updateDetails(userPhotoId, req.body);

    res
      .status(200)
      .json({ success: true, message: "UserPhoto details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete userPhoto by id */
const deleteUserPhoto = async (req, res) => {
  try {
    const userPhotoId = req.params.userPhotoId;
    const userPhotoExists = await userPhotoService.getUserPhotoById(userPhotoId);
    if (!userPhotoExists) {
      throw new Error("UserPhoto not found!");
    }

    await userPhotoService.deleteUserPhoto(userPhotoId);

    res.status(200).json({
      success: true,
      message: "UserPhoto delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createUserPhoto,
  getUserPhotoList,
  getDetails,
  updateDetails,
  deleteUserPhoto,
};
