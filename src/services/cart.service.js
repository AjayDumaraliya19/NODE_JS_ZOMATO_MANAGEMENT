const { Cart } = require("../models");

/** Get the user service */
const get_cart_by_user = async (user) => {
  return Cart.findOne({ user });
};

/** Get user by Id service */
const get_cart_by_id = async (cart_id) => {
  return Cart.findById(cart_id);
};

/** Create the user service */
const create_cart = async (reqbody) => {
  return Cart.create(reqbody);
};

/** Get user list serive */
const get_cart_list = async () => {
  return Cart.find()
    .populate("user", { first_name: 1, last_name: 1, email: 1, password: 1 })
    .populate("food1")
    .populate("food2")
    .populate("food3")
    .populate("food4")
    .populate("food5");
};

/** Delete the user service */
const delete_cart = async (cart_id) => {
  return Cart.findByIdAndDelete(cart_id);
};

/** Update the user service */
const update_cart = async (cart_id, reqbody) => {
  return Cart.findByIdAndUpdate(cart_id, { $set: reqbody });
};

module.exports = {
  get_cart_by_user,
  get_cart_by_id,
  create_cart,
  get_cart_list,
  delete_cart,
  update_cart,
};
