const { restroTypeService } = require("../services");

/** Create the restro type service */
const create_restaurant_type = async (req, res) => {
  try {
    const reqbody = req.body;
    const restaurant_type_exist =
      await restroTypeService.get_restaurant_type_by_name(
        reqbody.restaurant_type
      );
    if (restaurant_type_exist) {
      throw new Error("Restaurant type on this name already exist -!-");
    }
    const restaurant_type =
      await restroTypeService.create_restaurant_type(reqbody);
    if (!restaurant_type) {
      throw new Error("Something went wrong, try again later -!-");
    }
    res.status(200).json({
      succcess: true,
      message: "Restaurant type created successfully :)",
      data: restaurant_type,
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error.message,
    });
  }
};

/** Update restaurant_type */
const update_restaurant_type = async (req, res) => {
  try {
    const restaurant_type_id = req.params.restaurant_typeId;
    const reqbody = req.body;
    const restaurant_type_exist =
      await restroTypeService.get_restaurant_type_by_id(
        restaurant_type_id
      );
    if (!restaurant_type_exist) {
      throw new Error("Restaurant type does not exist -!- ");
    }
    const restaurant_type_update =
      await restroTypeService.update_restaurant_type(
        restaurant_type_id,
        reqbody
      );
    if (!restaurant_type_update) {
      throw new Error("Something went wrong, try again later -!- ");
    }
    res.status(200).json({
      succcess: true,
      message: "Restaurant type updated successfully ^-^ ",
      data: reqbody,
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error.message,
    });
  }
};
// Delete restaurant_type
const delete_restaurant_type = async (req, res) => {
  try {
    const restaurant_type_id = req.params.restaurant_typeId;
    const restaurant_type_exist =
      await restroTypeService.get_restaurant_type_by_id(
        restaurant_type_id
      );
    if (!restaurant_type_exist) {
      throw new Error("Restaurant type does not exist -!- ");
    }
    const restaurant_type_delete =
      await restroTypeService.delete_restaurant_type(restaurant_type_id);
    if (!restaurant_type_delete) {
      throw new Error("Something went wrong, try again later -!- ");
    }
    res.status(200).json({
      succcess: true,
      message: "Restaurant type deleted successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error.message,
    });
  }
};
// Get restaurant_type list
const get_restaurant_type_list = async (req, res) => {
  try {
    const restaurant_type_list =
      await restroTypeService.get_restaurant_type_list();
    if (!restaurant_type_list) {
      throw new Error("Restaurant type list data not found -!- ");
    }
    res.status(200).json({
      success: true,
      message: "Get restaurant_type list dispatch successfully ^-^ ",
      data: restaurant_type_list,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// Expoting controller object
module.exports = {
  create_restaurant_type,
  get_restaurant_type_list,
  update_restaurant_type,
  delete_restaurant_type,
};
