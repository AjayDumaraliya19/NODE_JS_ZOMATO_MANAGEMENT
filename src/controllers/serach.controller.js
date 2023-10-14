const {
  stateService,
  serachService,
  cityService,
  restroTypeService,
  restrorantService,
} = require("../services");

/** City by state_id passed in params controller */
const city_by_state = async (req, res) => {
  try {
    const state_exist = await stateService.gtestateById(req.params.stateId);
    if (!state_exist) {
      throw new Error("State by this name does not exist -!-");
    }
    const city_list = await serachService.city_by_state(req.params.stateId);
    console.log(city_list);
    res.status(200).json({
      success: true,
      message: "city list by state name dispatch sucessfully :)",
      data: city_list,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** City by state name passed in json */
const city_by_state_json = async (req, res) => {
  try {
    const state_exist = await stateService.getStateByName(req.body.state_name);
    if (!state_exist) {
      throw new Error("State by this name does not exist -!- ");
    }
    const city_list = await serachService.city_by_state_json(
      req.body.state_name
    );
    res.status(200).json({
      success: true,
      message: "city list by state name dispatch sucessfully ^-^ ",
      data: city_list,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** city by state name passed in params */
const city_by_params_state_name = async (req, res) => {
  try {
    const state_exist = await stateService.getStateByName(req.params.stateName);
    if (!state_exist) {
      throw new Error("State by this name does not exist -!- ");
    }
    const city_list = await serachService.city_by_state_json(
      req.params.stateName
    );
    console.log(city_list);
    res.status(200).json({
      success: true,
      message: "city list by state name dispatch sucessfully ^-^ ",
      data: city_list,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Restaurant by city_id passed in params */
const restaurant_by_city = async (req, res) => {
  try {
    const city_exist = await cityService.getCityById(req.params.cityId);
    if (!city_exist) {
      throw new Error("City by this name does not exist -!- ");
    }
    const restaurant_list = await serachService.Restrorant_by_city_json(
      req.params.cityId
    );
    console.log(restaurant_list);
    res.status(200).json({
      success: true,
      message: "Restaurant list by city name dispatch sucessfully ^-^ ",
      data: restaurant_list,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Restaurant by city name passed in json */
const restaurant_by_city_json = async (req, res) => {
  try {
    const city_exist = await cityService.getCityByName(req.body.city_name);
    if (!city_exist) {
      throw new Error("City by this name does not exist -!- ");
    }
    const restaurant_list = await serachService.Restrorant_by_city_json(
      req.body.city_name
    );
    res.status(200).json({
      success: true,
      message: "Restaurant list by city name dispatch sucessfully :)",
      data: restaurant_list,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Restaurant by city name passed in params */
const restaurant_by_params_city_name = async (req, res) => {
  try {
    const city_exist = await cityService.getCityByName(req.params.cityName);
    if (!city_exist) {
      throw new Error("City by this name does not exist -!- ");
    }
    const restaurant_list = await serachService.Restrorant_by_city_json(
      req.params.cityName
    );
    console.log(restaurant_list);
    res.status(200).json({
      success: true,
      message: "Restaurant list by city name dispatch sucessfully ^-^ ",
      data: restaurant_list,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Search restaurant by res_type & city name passed in json */
const restaurant_by_type_and_city = async (req, res) => {
  try {
    const city_exist = await cityService.getCityByName(req.body.city_name);
    if (!city_exist) {
      throw new Error("City by this name does not exist -!- ");
    }
    const restaurant_exist =
      await restroTypeService.get_restaurant_type_by_name(
        req.body.restaurant_type
      );
    if (!restaurant_exist) {
      throw new Error("Restaurant by this type does not exist -!- ");
    }
    const restaurant_list = await serachService.Restrorant_by_city_json(
      req.body.city_name,
      req.body.restaurant_type
    );
    if (!restaurant_list) {
      throw new Error("Something went wrong -!- ");
    }
    res.status(200).json({
      success: true,
      messgae: "Restaurant  :)",
      data: restaurant_list,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Get restaurant by id */
const get_restaurant_by_id = async (req, res) => {
  try {
    const restaurant_id = req.params.restaurantId;
    const restaurant_exist = await restrorantService.get_restaurant_by_id(
      restaurant_id
    );
    if (!restaurant_exist) {
      throw new Error("Restaurant does not exist -!- ");
    }
    res.status(200).json({
      success: true,
      message: `"Restaurant by id ${restaurant_id} found successfully ^-^ "`,
      data: restaurant_exist,
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
  city_by_state,
  city_by_state_json,
  city_by_params_state_name,
  restaurant_by_city,
  restaurant_by_city_json,
  restaurant_by_params_city_name,
  restaurant_by_type_and_city,
  get_restaurant_by_id,
};
