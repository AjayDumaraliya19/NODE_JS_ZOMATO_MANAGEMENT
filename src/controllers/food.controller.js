const { foodService } = require("../services");

/** Create food controller */
const create_food = async (req, res) => {
  try {
    const reqbody = req.body;
    const food_exist = await foodService.get_food_by_name(reqbody.food_name);
    if (food_exist) {
      throw new Error("Food on this name already exist -!- ");
    }
    const food = await foodService.create_food(reqbody);
    if (!food) {
      throw new Error("Something went wrong, try again later -!- ");
    }
    res.status(200).json({
      succcess: true,
      message: "Food created successfully ^-^ ",
      data: food,
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error.message,
    });
  }
};

/** Update food controller */
const update_food = async (req, res) => {
  try {
    const food_id = req.params.foodId;
    const reqbody = req.body;
    const food_exist = await foodService.get_food_by_id(food_id);
    if (!food_exist) {
      throw new Error("Food does not exist -!- ");
    }
    const food_update = await foodService.update_food(food_id, reqbody);
    if (!food_update) {
      throw new Error("Something went wrong, try again later -!- ");
    }
    res.status(200).json({
      succcess: true,
      message: "Food updated successfully ^-^ ",
      data: reqbody,
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error.message,
    });
  }
};

/** Delete food controller */
const delete_food = async (req, res) => {
  try {
    const food_id = req.params.foodId;
    const food_exist = await foodService.get_food_by_id(food_id);
    if (!food_exist) {
      throw new Error("Food does not exist -!- ");
    }
    const food_delete = await foodService.delete_food(food_id);
    if (!food_delete) {
      throw new Error("Something went wrong, try again later -!- ");
    }
    res.status(200).json({
      succcess: true,
      message: "Food deleted successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error.message,
    });
  }
};

/** Get food list controller */
const get_food_list = async (req, res) => {
  try {
    const food_list = await foodService.get_food_list();
    if (!food_list) {
      throw new Error("Food list data not found -!- ");
    }
    res.status(200).json({
      success: true,
      message: "Get food list dispatch successfully ^-^ ",
      data: food_list,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Exports all data module here */
module.exports = {
  create_food,
  get_food_list,
  update_food,
  delete_food,
};
