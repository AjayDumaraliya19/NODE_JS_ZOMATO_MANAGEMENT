const { cartService, userService } = require("../services");

/** Create cart controllere */
const create_cart = async (req, res) => {
  try {
    const reqbody = req.body;
    const user_exist = await userService.getUserById(reqbody.user);
    if (!user_exist) {
      throw new Error("User does not exist -!-");
    }
    const cart_exist = await cartService.get_cart_by_user(reqbody.user);
    if (cart_exist) {
      throw new Error("Cart already exist for this user -!-");
    }
    const cart = await cartService.create_cart(reqbody);
    if (!cart) {
      throw new Error("Something went wrong -!-");
    }
    res.status(200).json({
      success: true,
      message: "Cart created successfully ^-^ ",
      data: cart,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Get cart list controller */
const get_cart_list = async (req, res) => {
  try {
    const cart_list = await cartService.get_cart_list();
    if (!cart_list) {
      throw new Error("Cart list data does not exist -!-");
    }
    res.status(200).json({
      success: true,
      message: "Cart list dispatch successfully ^-^ ",
      data: cart_list,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Delte cart controller */
const delete_cart = async (req, res) => {
  try {
    const cart_exist = await cartService.get_cart_by_id(req.params.cartId);
    if (!cart_exist) {
      throw new Error("Cart does not exist -!-");
    }
    const cart_delete = await cartService.delete_cart(req.params.cartId);
    if (!cart_delete) {
      throw new Error("Something went wrong -!- ");
    }
    res.status(200).json({
      success: true,
      message: "Cart deleted successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Update cart controller */
const update_cart = async (req, res) => {
  try {
    const cart_exist = await cartService.get_cart_by_id(req.params.cartId);
    if (!cart_exist) {
      throw new Error("Cart does not exist -!-");
    }
    const updated = await cartService.update_cart(req.params.cartId, req.body);
    if (!updated) {
      throw new Error("Something went wrong");
    }
    res.status(200).json({
      success: true,
      message: "Cart updated successfully :)",
      data: req.body,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Exports all module here */
module.exports = {
  create_cart,
  get_cart_list,
  delete_cart,
  update_cart,
};
