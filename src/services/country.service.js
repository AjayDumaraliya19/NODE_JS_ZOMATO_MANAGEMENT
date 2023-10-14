const { Country } = require("../models");


/** Create country */
const createCountry = async (reqBody) => {
  return Country.create(reqBody);
};

/** Get country list */
const getCountryList = async () => {
  return Country.find({ $or: [{ is_active: true }] })
};

/** Get country details by id */
const getCountryById = async (countryId) => {
  return Country.findById(countryId);
};

/** Country details update by id */
const updateDetails = async (countryId, updateBody) => {
  return Country.findByIdAndUpdate(countryId, { $set: updateBody });
};

/** Delete country */
const deleteCountry = async (countryId) => {
  return Country.findByIdAndDelete(countryId);
};

module.exports = {
  createCountry,
  getCountryList,
  getCountryById,
  updateDetails,
  deleteCountry,
};
