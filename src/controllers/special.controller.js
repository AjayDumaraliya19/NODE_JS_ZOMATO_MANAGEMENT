const { specialService } = require("../services");

/** create special */
const createSpecial = async (req, res) => {
  try {
    const reqBody = req.body;
    const special = await specialService.createSpecial(reqBody);
    if (!special) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { special },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get special list */
const getSpecialList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await specialService.getSpecialList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of Specials successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get special details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await specialService.getSpecialById(req.params.specialId);
    if (!getDetails) {
      throw new Error("ooppsss!... Special not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of Special successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** special details update by id */
const updateDetails = async (req, res) => {
  try {
    const specialId = req.params.specialId;
    const specialExists = await specialService.getSpecialById(specialId);
    if (!specialExists) {
      throw new Error("Special not found!");
    }

    await specialService.updateDetails(specialId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Special details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete special by id */
const deleteSpecial = async (req, res) => {
  try {
    const specialId = req.params.specialId;
    const specialExists = await specialService.getSpecialById(specialId);
    if (!specialExists) {
      throw new Error("Special not found!");
    }

    await specialService.deleteSpecial(specialId);

    res.status(200).json({
      success: true,
      message: "Special delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createSpecial,
  getSpecialList,
  getDetails,
  updateDetails,
  deleteSpecial,
};
