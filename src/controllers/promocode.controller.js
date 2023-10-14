const { promocodeService } = require("../services");

/** create promocode */
const createPromocode = async (req, res) => {
  try {
    const reqBody = req.body;
    const promocode = await promocodeService.createPromocode(reqBody);
    if (!promocode) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { promocode },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get promocode list */
const getPromocodeList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await promocodeService.getPromocodeList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of Promocodes successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get promocode details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await promocodeService.getPromocodeById(req.params.promocodeId);
    if (!getDetails) {
      throw new Error("ooppsss!... Promocode not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of Promocode successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** promocode details update by id */
const updateDetails = async (req, res) => {
  try {
    const promocodeId = req.params.promocodeId;
    const promocodeExists = await promocodeService.getPromocodeById(promocodeId);
    if (!promocodeExists) {
      throw new Error("Promocode not found!");
    }

    await promocodeService.updateDetails(promocodeId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Promocode details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete promocode by id */
const deletePromocode = async (req, res) => {
  try {
    const promocodeId = req.params.promocodeId;
    const promocodeExists = await promocodeService.getPromocodeById(promocodeId);
    if (!promocodeExists) {
      throw new Error("Promocode not found!");
    }

    await promocodeService.deletePromocode(promocodeId);

    res.status(200).json({
      success: true,
      message: "Promocode delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createPromocode,
  getPromocodeList,
  getDetails,
  updateDetails,
  deletePromocode,
};
