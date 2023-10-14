const { restaurantHourService } = require("../services");

/** create restaurantHour */
const createRestaurantHour = async (req, res) => {
  try {
    const reqBody = req.body;
    const restaurantHour = await restaurantHourService.createRestaurantHour(reqBody);
    if (!restaurantHour) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { restaurantHour },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get restaurantHour list */
const getRestaurantHourList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await restaurantHourService.getRestaurantHourList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of RestaurantHours successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get restaurantHour details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await restaurantHourService.getRestaurantHourById(req.params.restaurantHourId);
    if (!getDetails) {
      throw new Error("ooppsss!... RestaurantHour not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of RestaurantHour successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** restaurantHour details update by id */
const updateDetails = async (req, res) => {
  try {
    const restaurantHourId = req.params.restaurantHourId;
    const restaurantHourExists = await restaurantHourService.getRestaurantHourById(restaurantHourId);
    if (!restaurantHourExists) {
      throw new Error("RestaurantHour not found!");
    }

    await restaurantHourService.updateDetails(restaurantHourId, req.body);

    res
      .status(200)
      .json({ success: true, message: "RestaurantHour details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete restaurantHour by id */
const deleteRestaurantHour = async (req, res) => {
  try {
    const restaurantHourId = req.params.restaurantHourId;
    const restaurantHourExists = await restaurantHourService.getRestaurantHourById(restaurantHourId);
    if (!restaurantHourExists) {
      throw new Error("RestaurantHour not found!");
    }

    await restaurantHourService.deleteRestaurantHour(restaurantHourId);

    res.status(200).json({
      success: true,
      message: "RestaurantHour delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createRestaurantHour,
  getRestaurantHourList,
  getDetails,
  updateDetails,
  deleteRestaurantHour,
};
