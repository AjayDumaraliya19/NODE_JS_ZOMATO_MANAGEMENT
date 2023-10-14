const { stateService, cityService, restroTypeService } = require(".");
const { City, Restrorant } = require("../models");

/** Find the city by id service */
const city_by_state = async (state_id) => {
  return City.find({ $or: [{ state: `${state_id}` }] });
};

/** Find city by name service */
const city_by_state_json = async (state_name) => {
  const city = await stateService.getStateByName(state_name);
  return City.find({ $or: [{ state: `${state._id}` }] });
};

/** Find the restrurant by  id service */
const Restrorant_by_city = async (cityId) => {
  return Restrorant.find({ $or: [{ city: `${cityId}` }] });
};

/** Find the restrurant by city name service */
const Restrorant_by_city_json = async (city_name) => {
  const city = await cityService.getCityByName(city_name);
  return Restrorant.find({ $or: [{ city: `${city._id}` }] });
};

/** Find the restro type and city name service */
const Restrorant_by_type_and_city = async (city_name, Restrorant_type) => {
  const city = await cityService.getCityByName(city_name);
  const Restrorant_type_ = await restroTypeService.get_restaurant_type_by_name(
    Restrorant_type
  );
  console.log(Restrorant_type_._id);
  console.log(city._id);
  return Restrorant.find({
    $and: [{ city: city._id }, { Restrorant_type: Restrorant_type_._id }],
  });
};

/** Exports all data module here */
module.exports = {
  city_by_state,
  city_by_state_json,
  Restrorant_by_city,
  Restrorant_by_city_json,
  Restrorant_by_type_and_city,
};
