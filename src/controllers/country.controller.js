const { countryService } = require("../services");

/** create country */
const createCountry = async (req, res) => {
  try {
    const reqBody = req.body;
    const country = await countryService.createCountry(reqBody);
    if (!country) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { country },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get country list */
const getCountryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await countryService.getCountryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of Countries successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get country details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await countryService.getCountryById(req.params.countryId);
    if (!getDetails) {
      throw new Error("ooppsss!... Country not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of Country successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** country details update by id */
const updateDetails = async (req, res) => {
  try {
    const countryId = req.params.countryId;
    const countryExists = await countryService.getCountryById(countryId);
    if (!countryExists) {
      throw new Error("Country not found!");
    }

    await countryService.updateDetails(countryId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Country details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete country by id */
const deleteCountry = async (req, res) => {
  try {
    const countryId = req.params.countryId;
    const countryExists = await countryService.getCountryById(countryId);
    if (!countryExists) {
      throw new Error("Country not found!");
    }

    await countryService.deleteCountry(countryId);

    res.status(200).json({
      success: true,
      message: "Country delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createCountry,
  getCountryList,
  getDetails,
  updateDetails,
  deleteCountry,
};
