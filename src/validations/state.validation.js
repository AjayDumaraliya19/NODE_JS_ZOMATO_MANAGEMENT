const Joi = require("joi");

/** Create state validation */
const createState = {
  body: Joi.object().keys({
    State_name: Joi.string().required().trim(),
    country_id: Joi.string().required().trim(),
    capital_city: Joi.string().required().trim(),
    created_at: Joi.string().required().trim(),
  }),
};

module.exports = {
  createState,
};
