const Joi = require("joi");

/** Create country validation */
const createCountry = {
  body: Joi.object().keys({
    country_name: Joi.string().trim().required(),
  }),
};

module.exports = {
  createCountry,
};
