const { DeliveryDriver } = require("../models");

/**Create deliveryDriver */
const createDeliveryDriver = async (reqBody) => {
  return DeliveryDriver.create(reqBody);
};

/**Get deliveryDriver list */
const getDeliveryDriverList = async () => {
  return DeliveryDriver.find({ $or: [{ is_active: true }] })
    .populate({
      path: "user_id",
      select: "user_name , address"
    })
};

/**Get deliveryDriver details by id */
const getDeliveryDriverById = async (deliveryDriverId) => {
  return DeliveryDriver.findById(deliveryDriverId);
};

/**deliveryDriver details update by id */
const updateDetails = async (deliveryDriverId, updateBody) => {
  return DeliveryDriver.findByIdAndUpdate(deliveryDriverId, { $set: updateBody });
};

/**Delete deliveryDriver */
const deleteDeliveryDriver = async (deliveryDriverId) => {
  return DeliveryDriver.findByIdAndDelete(deliveryDriverId);
};

module.exports = {
  createDeliveryDriver,
  getDeliveryDriverList,
  getDeliveryDriverById,
  updateDetails,
  deleteDeliveryDriver,
};
