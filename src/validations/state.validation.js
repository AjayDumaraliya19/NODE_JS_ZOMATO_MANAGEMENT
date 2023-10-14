const Joi = require("joi");

/** Create State validation */
const createState = {
  body: Joi.object().keys({
    state_name: Joi.string().trim().required(),
    country: Joi.string().trim().required(),
  }),
};

module.exports = {
  createState,
};
