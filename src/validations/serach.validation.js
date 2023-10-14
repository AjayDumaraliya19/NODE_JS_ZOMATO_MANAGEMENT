const Joi = require("joi");

/** Search city by state name validation */
const city_by_state = {
  params: Joi.object({
    state_name: Joi.string().required().trim(),
  }),
};

/** Serch city and restroType validation */
const res_type_and_city = {
  body: Joi.object({
    restaurant_type: Joi.string().required().trim(),
    city_name: Joi.string().required().trim(),
  }),
};

/** Exports all data module here */
module.exports = {
  city_by_state,
  res_type_and_city,
};
