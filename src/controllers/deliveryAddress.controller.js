const { deliveryAddressService } = require("../services");

/** create deliveryAddress */
const createDeliveryAddress = async (req, res) => {
  try {
    const reqBody = req.body;
    const deliveryAddress = await deliveryAddressService.createDeliveryAddress(reqBody);
    if (!deliveryAddress) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { deliveryAddress },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get deliveryAddress list */
const getDeliveryAddressList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await deliveryAddressService.getDeliveryAddressList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of DeliveryAddresss successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get deliveryAddress details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await deliveryAddressService.getDeliveryAddressById(req.params.deliveryAddressId);
    if (!getDetails) {
      throw new Error("ooppsss!... DeliveryAddress not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of DeliveryAddress successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** deliveryAddress details update by id */
const updateDetails = async (req, res) => {
  try {
    const deliveryAddressId = req.params.deliveryAddressId;
    const deliveryAddressExists = await deliveryAddressService.getDeliveryAddressById(deliveryAddressId);
    if (!deliveryAddressExists) {
      throw new Error("DeliveryAddress not found!");
    }

    await deliveryAddressService.updateDetails(deliveryAddressId, req.body);

    res
      .status(200)
      .json({ success: true, message: "DeliveryAddress details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete deliveryAddress by id */
const deleteDeliveryAddress = async (req, res) => {
  try {
    const deliveryAddressId = req.params.deliveryAddressId;
    const deliveryAddressExists = await deliveryAddressService.getDeliveryAddressById(deliveryAddressId);
    if (!deliveryAddressExists) {
      throw new Error("DeliveryAddress not found!");
    }

    await deliveryAddressService.deleteDeliveryAddress(deliveryAddressId);

    res.status(200).json({
      success: true,
      message: "DeliveryAddress delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createDeliveryAddress,
  getDeliveryAddressList,
  getDetails,
  updateDetails,
  deleteDeliveryAddress,
};
