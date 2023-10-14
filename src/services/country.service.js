const { Country } = require("../models");

/** Create country service */
const createCountry = async (reqBody) => {
  return await Country.create(reqBody);
};

/** Get country list service */
const getCountryList = async () => {
  return await Country.find();
};

/** Get country by Id service */
const getCountryById = async (countryId) => {
  return await Country.findById(countryId);
};

/** get country By name service */
const getCountryByName = async (country_name) => {
  return await Country.findOne({ country_name });
};

/** Update country by Id service */
const updateCountry = async (reqBody, updateBody) => {
  return await Country.findByIdAndUpdate(
    reqBody,
    { $set: { updateBody } },
    { new: true }
  );
};

/** Delete country by Id service */
const deleteCountry = async (countryId) => {
  return await Country.findByIdAndDelete(countryId);
};

module.exports = {
  createCountry,
  getCountryList,
  getCountryById,
  getCountryByName,
  updateCountry,
  deleteCountry,
};
