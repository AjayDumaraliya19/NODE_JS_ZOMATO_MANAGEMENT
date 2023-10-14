const Joi = require("joi");

/** Create order validation */
const create_order = {
  body: Joi.object().keys({
    order_status: Joi.string().required().trim(),
    delivery_address: Joi.string().required().trim(),
    payment_method: Joi.string().required().trim(),
    cart: Joi.string().required().trim(),
    user: Joi.string().required().trim(),
  }),
};

/** exports all data module here */
module.exports = {
  create_order,
};
