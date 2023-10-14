const { deliveryDriverService } = require("../services");

/** create deliveryDriver */
const createDeliveryDriver = async (req, res) => {
  try {
    const reqBody = req.body;
    const deliveryDriver = await deliveryDriverService.createDeliveryDriver(reqBody);
    if (!deliveryDriver) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { deliveryDriver },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get deliveryDriver list */
const getDeliveryDriverList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await deliveryDriverService.getDeliveryDriverList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of DeliveryDrivers successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get deliveryDriver details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await deliveryDriverService.getDeliveryDriverById(req.params.deliveryDriverId);
    if (!getDetails) {
      throw new Error("ooppsss!... DeliveryDriver not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of DeliveryDriver successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** deliveryDriver details update by id */
const updateDetails = async (req, res) => {
  try {
    const deliveryDriverId = req.params.deliveryDriverId;
    const deliveryDriverExists = await deliveryDriverService.getDeliveryDriverById(deliveryDriverId);
    if (!deliveryDriverExists) {
      throw new Error("DeliveryDriver not found!");
    }

    await deliveryDriverService.updateDetails(deliveryDriverId, req.body);

    res
      .status(200)
      .json({ success: true, message: "DeliveryDriver details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete deliveryDriver by id */
const deleteDeliveryDriver = async (req, res) => {
  try {
    const deliveryDriverId = req.params.deliveryDriverId;
    const deliveryDriverExists = await deliveryDriverService.getDeliveryDriverById(deliveryDriverId);
    if (!deliveryDriverExists) {
      throw new Error("DeliveryDriver not found!");
    }

    await deliveryDriverService.deleteDeliveryDriver(deliveryDriverId);

    res.status(200).json({
      success: true,
      message: "DeliveryDriver delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createDeliveryDriver,
  getDeliveryDriverList,
  getDetails,
  updateDetails,
  deleteDeliveryDriver,
};
