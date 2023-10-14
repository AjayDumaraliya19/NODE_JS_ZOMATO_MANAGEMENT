const { count } = require("../models/country.model");
const { countryService } = require("../services");

/** Create country controllre */
const createCountry = async (req, res) => {
  try {
    const reqBody = req.body;

    const countryExist = await countryService.getCountryByName(
      reqBody.country_name
    );
    if (countryExist) {
      throw new Error("Country on this name already exist -!-");
    }

    const country = await countryService.createCountry(reqBody);
    if (!country) {
      throw new Error("Something went wrong, try again later -!-");
    }

    res.status(200).json({
      success: true,
      message: "Country created successfully :)",
      data: country,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error?.message || "Something went wrong -!-",
      stack: error?.stack,
    });
  }
};

/** Get contry list controller */
const getCountryList = async (req, res) => {
  try {
    const countryList = await countryService.getCountryList();
    if (!countryList) {
      throw new Error("Country list not found -!-");
    }

    res.status(200).json({
      success: true,
      message: "Get country list successfully :)",
      data: countryList,
    });
  } catch {
    res.status(400).json({
      success: false,
      message: error?.message || "Something went wrong -!-",
      stack: error?.stack,
    });
  }
};

/** Update country by Id controller */
const updateCountry = async (req, res) => {
  try {
    const countryId = req.params.countryId;

    const updateBody = req.body;
    const countryExist = await countryService.getCountryById(countryId);
    if (!countryExist) {
      throw new Error("Country does not exist -!-");
    }

    const update = await countryService.updateCountry(countryId, updateBody);
    if (!update) {
      throw new Error("Something went wrong, try again later -!-");
    }

    res.status(200).json({
      success: true,
      message: "Country update successfully :)",
      data: update,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error?.message || "Something went wrong -!-",
      stack: error?.stack,
    });
  }
};

/** Delte country by Id controller */
const deleteCountry = async (req, res) => {
  try {
    const countryId = req.params.countryId;
    const countryExist = await countryService.getCountryById(countryId);
    if (!countryExist) {
      throw new Error("Country does not exist -!-");
    }

    const deleteCtry = await countryService.deleteCountry(countryId);
    if (!deleteCtry) {
      throw new Error("Somtething went wrong -!-");
    }

    res.status(200).json({
      success: true,
      message: "Country delete successfully :(",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error?.message || "Somthinf went wrong -!-",
      stack: error?.stack,
    });
  }
};

module.exports = {
  createCountry,
  getCountryList,
  updateCountry,
  deleteCountry,
};
