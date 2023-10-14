const { Restaurant } = require("../models");

/** Get restaurant by name */
const get_restaurant_by_name = async (restaurant_name) => {
  return Restaurant.findOne({ restaurant_name });
};

/**  Create restaurant */
const create_restaurant = async (reqbody) => {
  return Restaurant.create(reqbody);
};

/** Get restaurant list */
const get_restaurant_list = async () => {
  return Restaurant.find().populate("restrotype").populate("city");
};

/** Get restaurant by id */
const get_restaurant_by_id = async (restaurant_id) => {
  return Restaurant.findById(restaurant_id);
};

/** Update restaurant by id */
const update_restaurant = async (restaurant_id, reqbody) => {
  return Restaurant.findByIdAndUpdate(restaurant_id, { $set: reqbody });
};

/** Update restaurant status by id */
const update_status = async (restaurant_id) => {
  const restaurant = await get_restaurant_by_id(restaurant_id);
  if (!restaurant) {
    throw new Error("Restaurant does not exist -!-");
  }
  return Restaurant.findByIdAndUpdate(restaurant_id, {
    $set: { restaurant_status: !restaurant.restaurant_status },
  });
};

/** Delete restaurant */
const delete_restaurant = async (restaurant_id) => {
  return Restaurant.findByIdAndDelete(restaurant_id);
};

/** Exports all data here */
module.exports = {
  get_restaurant_by_name,
  create_restaurant,
  get_restaurant_list,
  get_restaurant_by_id,
  update_restaurant,
  delete_restaurant,
  update_status,
};
