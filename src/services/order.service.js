const { Order } = require("../models");

/** Get order by name service */
const get_order_by_name = async (order_name) => {
  return Order.findOne({ order_name });
};

/** Create order service */
const create_order = async (reqbody) => {
  return Order.create(reqbody);
};

/** Get order list service */
const get_order_list = async () => {
  return Order.find().populate("cart").populate("user");
};

/** Get order by id service */
const get_order_by_id = async (order_id) => {
  return Order.findById(order_id);
};

/** Update order by id service */
const update_order = async (order_id, reqbody) => {
  return Order.findByIdAndUpdate(order_id, { $set: reqbody });
};

/**m Delete order service */
const delete_order = async (order_id) => {
  return Order.findByIdAndDelete(order_id);
};

/** Exports all data model service */
module.exports = {
  get_order_by_name,
  create_order,
  get_order_by_id,
  update_order,
  delete_order,
  get_order_list,
};
