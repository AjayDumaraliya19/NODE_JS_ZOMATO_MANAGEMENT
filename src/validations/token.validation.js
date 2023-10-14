const Joi = require("joi");

/** Create token */
const generateToken = {
  body: Joi.object().keys({
    user: Joi.string().required().trim(),
  }),
};

module.exports = {
  generateToken,
};
