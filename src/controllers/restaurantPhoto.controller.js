const { restaurantPhotoService } = require("../services");

/** create restaurantPhoto */
const createRestaurantPhoto = async (req, res) => {
  try {
    const reqBody = req.body;

    if (req.file) {
      reqBody.restaurantPhoto_image = req.file.filename;
    } else {
      throw new Error("Restaurant image is required!");
    }

    const restaurantPhoto = await restaurantPhotoService.createRestaurantPhoto(reqBody);

    res.status(200).json({
      success: true,
      message: "New image added to the database!",
      data: restaurantPhoto,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get restaurantPhoto list */
const getRestaurantPhotoList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await restaurantPhotoService.getRestaurantPhotoList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of RestaurantPhotos successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get restaurantPhoto details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await restaurantPhotoService.getRestaurantPhotoById(req.params.restaurantPhotoId);
    if (!getDetails) {
      throw new Error("ooppsss!... RestaurantPhoto not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of RestaurantPhoto successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** restaurantPhoto details update by id */
const updateDetails = async (req, res) => {
  try {
    const restaurantPhotoId = req.params.restaurantPhotoId;
    const restaurantPhotoExists = await restaurantPhotoService.getRestaurantPhotoById(restaurantPhotoId);
    if (!restaurantPhotoExists) {
      throw new Error("RestaurantPhoto not found!");
    }

    await restaurantPhotoService.updateDetails(restaurantPhotoId, req.body);

    res
      .status(200)
      .json({ success: true, message: "RestaurantPhoto details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete restaurantPhoto by id */
const deleteRestaurantPhoto = async (req, res) => {
  try {
    const restaurantPhotoId = req.params.restaurantPhotoId;
    const restaurantPhotoExists = await restaurantPhotoService.getRestaurantPhotoById(restaurantPhotoId);
    if (!restaurantPhotoExists) {
      throw new Error("RestaurantPhoto not found!");
    }

    await restaurantPhotoService.deleteRestaurantPhoto(restaurantPhotoId);

    res.status(200).json({
      success: true,
      message: "RestaurantPhoto delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createRestaurantPhoto,
  getRestaurantPhotoList,
  getDetails,
  updateDetails,
  deleteRestaurantPhoto,
};
