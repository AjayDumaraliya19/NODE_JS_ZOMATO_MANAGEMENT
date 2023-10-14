const { restrorantService } = require("../services");

/** Create restaurant */
const create_restaurant = async (req, res) => {
  try {
    if (req.files.length < 2) {
      throw new Error("Restaurant and food both images are required -!- ");
    }
    const reqbody = req.body;
    reqbody.restaurant_image = req.files[0].filename;
    reqbody.food_image = req.files[1].filename;
    const restaurant_exist = await restrorantService.get_restaurant_by_name(
      reqbody.restaurant_name
    );
    if (restaurant_exist) {
      throw new Error("Restaurant on this name already exist -!- ");
    }
    const restaurant = await restrorantService.create_restaurant(reqbody);
    if (!restaurant) {
      throw new Error("Something went wrong, try again later -!- ");
    }
    res.status(200).json({
      succcess: true,
      message: "Restaurant created successfully ^-^ ",
      data: restaurant,
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error.message,
    });
  }
};

/** Update restaurant */
const update_restaurant = async (req, res) => {
  try {
    const restaurant_id = req.params.restaurantId;
    const reqbody = req.body;
    const restaurant_exist = await restrorantService.get_restaurant_by_id(
      restaurant_id
    );
    if (!restaurant_exist) {
      throw new Error("Restaurant does not exist -!- ");
    }
    const restaurant_update = await restrorantService.update_restaurant(
      restaurant_id,
      reqbody
    );
    if (!restaurant_update) {
      throw new Error("Something went wrong, try again later -!- ");
    }
    res.status(200).json({
      succcess: true,
      message: "Restaurant updated successfully ^-^ ",
      data: reqbody,
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error.message,
    });
  }
};

/** UPDATE STATUS FOR RESTAIRANT */
const update_status = async (req, res) => {
  try {
    const restaurant_id = req.params.restaurantId;
    const restaurant_exist = await restrorantService.get_restaurant_by_id(
      restaurant_id
    );
    if (!restaurant_exist) {
      throw new Error("Restaurant does not exist -!- ");
    }
    const restaurant_updated = await restrorantService.update_status(
      restaurant_id
    );
    if (!restaurant_updated) {
      throw new Error("Something went wrong -!- ");
    }
    res.status(200).json({
      success: true,
      messgae: "Restaurant status updated successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Delete restaurant */
const delete_restaurant = async (req, res) => {
  try {
    const restaurant_id = req.params.restaurantId;
    const restaurant_exist = await restrorantService.get_restaurant_by_id(
      restaurant_id
    );
    if (!restaurant_exist) {
      throw new Error("Restaurant does not exist -!- ");
    }
    const restaurant_delete = await restrorantService.delete_restaurant(
      restaurant_id
    );
    if (!restaurant_delete) {
      throw new Error("Something went wrong, try again later -!- ");
    }
    res.status(200).json({
      succcess: true,
      message: "Restaurant deleted successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error.message,
    });
  }
};

/** Get restaurant list */
const get_restaurant_list = async (req, res) => {
  try {
    const restaurant_list = await restrorantService.get_restaurant_list();
    if (!restaurant_list) {
      throw new Error("Restaurant list data not found -!- ");
    }
    res.status(200).json({
      success: true,
      message: "Get restaurant list dispatch successfully ^-^ ",
      data: restaurant_list,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Exports all data here */
module.exports = {
  create_restaurant,
  get_restaurant_list,
  update_restaurant,
  delete_restaurant,
  update_status,
};
