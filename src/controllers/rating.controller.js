const { ratingService } = require("../services");

/** create rating */
const createRating = async (req, res) => {
  try {
    const reqBody = req.body;
    const rating = await ratingService.createRating(reqBody);
    if (!rating) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { rating },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get rating list */
const getRatingList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await ratingService.getRatingList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of Ratings successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get rating details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await ratingService.getRatingById(req.params.ratingId);
    if (!getDetails) {
      throw new Error("ooppsss!... Rating not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of Rating successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** rating details update by id */
const updateDetails = async (req, res) => {
  try {
    const ratingId = req.params.ratingId;
    const ratingExists = await ratingService.getRatingById(ratingId);
    if (!ratingExists) {
      throw new Error("Rating not found!");
    }

    await ratingService.updateDetails(ratingId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Rating details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete rating by id */
const deleteRating = async (req, res) => {
  try {
    const ratingId = req.params.ratingId;
    const ratingExists = await ratingService.getRatingById(ratingId);
    if (!ratingExists) {
      throw new Error("Rating not found!");
    }

    await ratingService.deleteRating(ratingId);

    res.status(200).json({
      success: true,
      message: "Rating delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createRating,
  getRatingList,
  getDetails,
  updateDetails,
  deleteRating,
};
