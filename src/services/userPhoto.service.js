const { UserPhoto } = require("../models");


/** Create city */
const createUserPhoto = async (reqBody) => {
  return UserPhoto.create(reqBody);
};

/** Get city list */
const getUserPhotoList = async () => {
  return UserPhoto.find({ $or: [{ is_active: true }] })
};

/** Get city details by id */
const getUserPhotoById = async (cityId) => {
  return UserPhoto.findById(cityId);
};

/** city details update by id */
const updateDetails = async (cityId, updateBody) => {
  return UserPhoto.findByIdAndUpdate(cityId, { $set: updateBody });
};

/** Delete city */
const deleteUserPhoto = async (cityId) => {
  return UserPhoto.findByIdAndDelete(cityId);
};

module.exports = {
  createUserPhoto,
  getUserPhotoList,
  getUserPhotoById,
  updateDetails,
  deleteUserPhoto,
};
