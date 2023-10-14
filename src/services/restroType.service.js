const { RestroType } = require("../models");

/** Get RestroType by name */
const get_restaurant_type_by_name = async (restaurant_type) => {
  return RestroType.findOne({ restaurant_type });
};

/** Create RestroType */
const create_restaurant_type = async (reqbody) => {
  return RestroType.create(reqbody);
};

/** Get RestroType list */
const get_restaurant_type_list = async () => {
  return RestroType.find();
};

/** Get RestroType by id */
const get_restaurant_type_by_id = async (restaurant_type_id) => {
  return RestroType.findById(restaurant_type_id);
};

/** Update RestroType by id */
const update_restaurant_type = async (restaurant_type_id, reqbody) => {
  return RestroType.findByIdAndUpdate(restaurant_type_id, { $set: reqbody });
};

/** Delete RestroType */
const delete_restaurant_type = async (restaurant_type_id) => {
  return RestroType.findByIdAndDelete(restaurant_type_id);
};

/** Exporting services object */
module.exports = {
  get_restaurant_type_by_name,
  create_restaurant_type,
  get_restaurant_type_list,
  get_restaurant_type_by_id,
  update_restaurant_type,
  delete_restaurant_type,
};
