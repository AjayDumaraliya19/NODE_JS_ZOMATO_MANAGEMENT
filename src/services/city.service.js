const { City } = require("../models");

/** Create city service */
const createCity = async (reqBody) => {
  return await City.create();
};

/** Get city list service */
const getCityList = async () => {
  return await City.find();
};

/** Get city by Id service */
const getCityById = async (cityId) => {
  return await City.findById(cityId);
};

/** Get city by name service */
const getCityByName = async (city_name) => {
  return await City.findOne({ city_name });
};

/** Udpate city by Id service */
const updateCity = async (cityId, updateBody) => {
  return await City.findByIdAndUpdate(
    cityId,
    { $set: updateBody },
    { new: true }
  );
};

/** Delete city by Id service */
const deleteCity = async (cityId) => {
  return await City.findOneAndDelete(cityId);
};

module.exports = {
  createCity,
  getCityList,
  getCityById,
  getCityByName,
  updateCity,
  deleteCity,
};
