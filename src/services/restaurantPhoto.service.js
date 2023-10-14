const { RestaurantPhoto } = require("../models");


/** Create restaurantPhoto */
const createRestaurantPhoto = async (reqBody) => {
  return RestaurantPhoto.create(reqBody);
};

/** Get restaurantPhoto list */
const getRestaurantPhotoList = async () => {
  return RestaurantPhoto.find({$or : [{is_active: true}]})
};

/** Get restaurantPhoto details by id */
const getRestaurantPhotoById = async (restaurantPhotoId) => {
  return RestaurantPhoto.findById(restaurantPhotoId);
};

/** restaurantPhoto details update by id */
const updateDetails = async (restaurantPhotoId, updateBody) => {
  return RestaurantPhoto.findByIdAndUpdate(restaurantPhotoId, { $set: updateBody });
};

/** Delete restaurantPhoto */
const deleteRestaurantPhoto = async (restaurantPhotoId) => {
  return RestaurantPhoto.findByIdAndDelete(restaurantPhotoId);
};

module.exports = {
  createRestaurantPhoto,
  getRestaurantPhotoList,
  getRestaurantPhotoById,
  updateDetails,
  deleteRestaurantPhoto,
};
