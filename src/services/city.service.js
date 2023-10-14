const { City } = require("../models");


/** Create city */
const createCity = async (reqBody) => {
  return City.create(reqBody);
};

/** Get city list */
const getCityList = async () => {
  return City.find({ $or: [{ is_active: true }] })
    .populate({
      path: "country_id",
      select: "country_name , currency"
    })
    .populate({
      path: "state_id",
      select: "State_name"
    })
};

/** Get city details by id */
const getCityById = async (cityId) => {
  return City.findById(cityId);
};

/** city details update by id */
const updateDetails = async (cityId, updateBody) => {
  return City.findByIdAndUpdate(cityId, { $set: updateBody });
};

/** Delete city */
const deleteCity = async (cityId) => {
  return City.findByIdAndDelete(cityId);
};

module.exports = {
  createCity,
  getCityList,
  getCityById,
  updateDetails,
  deleteCity,
};
