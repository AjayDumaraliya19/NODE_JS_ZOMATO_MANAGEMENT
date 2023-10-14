const Joi = require("joi");

/** Create city validation */
const createCity = {
  body: Joi.object().keys({
    city_name: Joi.string().trim().required(),
    state_name: Joi.string().trim().required(),
  }),
};

module.exports = {
  createCity,
};
