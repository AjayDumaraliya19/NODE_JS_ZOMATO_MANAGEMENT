const { cityService } = require("../services");

/** Create city controllre */
const createCity = async (req, res) => {
  try {
    const reqBody = req.body;
    const cityExist = await cityService.getCityByName(reqBody.city_name);
    if (cityExist) {
      throw new Error("City name already exist -!-");
    }
    const city = await cityService.createCity(reqBody);
    if (!city) {
      throw new Error("Something went wrong, try again or later -!-");
    }
    res.status(200).json({
      succcess: true,
      message: "City created successfully :)",
      data: city,
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error?.message || "Something went wrong -!-",
    });
  }
};

/** Get city data list controller */
const getCityList = async (req, res) => {
  try {
    const cityList = await cityService.getCityList();
    if (!cityList) {
      throw new Error("City list data not found -!-");
    }
    res.status(200).json({
      success: true,
      message: "City list get successfully :)",
      data: cityList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error?.message || "Something went wrong -!-",
    });
  }
};

/** Update city by Id controller */
const updateCity = async (req, res) => {
  try {
    const cityId = req.params.cityId;
    const cityExist = await cityService.getCityById(cityId);
    if (!cityExist) {
      throw new Error("City does not exist -!-");
    }
    const update = await cityService.updateCity(cityId);
    if (!update) {
      throw new Error("Something went wrong, try again later -!- ");
    }
    res.status(200).json({
      succcess: true,
      message: "City updated successfully :)",
      data: update,
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error?.message || "Something went wrong -!-",
    });
  }
};

/** Delete city by Id controller */
const deleteCity = async (req, res) => {
  try {
    const cityId = req.params.cityId;
    const cityExist = await cityService.getCityById(cityId);
    if (!cityExist) {
      throw new Error("City does not exist -!-");
    }
    const deleteData = await cityService.deleteCity(cityId);
    if (!deleteData) {
      throw new Error("Something went wrong, try again later -!-");
    }
    res.status(200).json({
      succcess: true,
      message: "City deleted successfully :)",
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error?.message || "Something went wrong -!-",
    });
  }
};

module.exports = {
  createCity,
  getCityList,
  updateCity,
  deleteCity,
};
