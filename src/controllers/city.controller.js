const { cityService } = require("../services");

/** create city */
const createCity = async (req, res) => {
  try {
    const reqBody = req.body;
    const city = await cityService.createCity(reqBody);
    if (!city) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { city },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get city list */
const getCityList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await cityService.getCityList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of Cities successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get city details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await cityService.getCityById(req.params.cityId);
    if (!getDetails) {
      throw new Error("ooppsss!... City not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of City successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** city details update by id */
const updateDetails = async (req, res) => {
  try {
    const cityId = req.params.cityId;
    const cityExists = await cityService.getCityById(cityId);
    if (!cityExists) {
      throw new Error("City not found!");
    }

    await cityService.updateDetails(cityId, req.body);

    res
      .status(200)
      .json({ success: true, message: "City details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete city by id */
const deleteCity = async (req, res) => {
  try {
    const cityId = req.params.cityId;
    const cityExists = await cityService.getCityById(cityId);
    if (!cityExists) {
      throw new Error("City not found!");
    }

    await cityService.deleteCity(cityId);

    res.status(200).json({
      success: true,
      message: "City delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createCity,
  getCityList,
  getDetails,
  updateDetails,
  deleteCity,
};
