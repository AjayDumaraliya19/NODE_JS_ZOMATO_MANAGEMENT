const Joi = require("joi");

/** Create jsonwebtoken */
const genrateToken = {
  body: Joi.object({
    user: Joi.string().trim().required(),
  }),
};

module.exports = {
  genrateToken,
};
