const { RestaurantHour } = require("../models");

// Create restaurantHour
const createRestaurantHour = async (reqBody) => {
  return RestaurantHour.create(reqBody);
};

/** Get restaurantHour list */
const getRestaurantHourList = async () => {
  return RestaurantHour.find({ $or: [{ is_active: true }] })
    .populate({
      path: "restaurant_id",
      select: "name , location"
    })
};

/** Get restaurantHour details by id */
const getRestaurantHourById = async (restaurantHourId) => {
  return RestaurantHour.findById(restaurantHourId);
};

/** restaurantHour details update by id */
const updateDetails = async (restaurantHourId, updateBody) => {
  return RestaurantHour.findByIdAndUpdate(restaurantHourId, { $set: updateBody });
};

/** Delete restaurantHour */
const deleteRestaurantHour = async (restaurantHourId) => {
  return RestaurantHour.findByIdAndDelete(restaurantHourId);
};

module.exports = {
  createRestaurantHour,
  getRestaurantHourList,
  getRestaurantHourById,
  updateDetails,
  deleteRestaurantHour,
};
