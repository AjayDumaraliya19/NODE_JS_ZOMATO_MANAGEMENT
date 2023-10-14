const { OrderItem } = require("../models");


/** Create orderItem */
const createOrderItem = async (reqBody) => {
  return OrderItem.create(reqBody);
};

/** Get orderItem list */
const getOrderItemList = async () => {
  return OrderItem.find({ $or: [{ is_active: true }] })
    .populate({
      path: "order_id",
      select: "status"
    })
    .populate({
      path: "menu_item_id",
      select: "name , description , price"
    })
};

/** Get orderItem details by id */
const getOrderItemById = async (orderItemId) => {
  return OrderItem.findById(orderItemId);
};

/** orderItem details update by id */
const updateDetails = async (orderItemId, updateBody) => {
  return OrderItem.findByIdAndUpdate(orderItemId, { $set: updateBody });
};

/** Delete orderItem */
const deleteOrderItem = async (orderItemId) => {
  return OrderItem.findByIdAndDelete(orderItemId);
};

module.exports = {
  createOrderItem,
  getOrderItemList,
  getOrderItemById,
  updateDetails,
  deleteOrderItem,
};
