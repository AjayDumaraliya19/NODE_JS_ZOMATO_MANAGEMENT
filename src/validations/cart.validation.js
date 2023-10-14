const Joi = require("joi");

/** Create the cart validation */
const create_cart = {
  body: Joi.object().keys({
    total_items: Joi.number().required(),
    total_price: Joi.number().required(),
    coupon_code: Joi.string().required().trim(),
    user: Joi.string().required().trim(),
    food1: Joi.string().required().trim(),
    food2: Joi.string().optional().trim(),
    food3: Joi.string().optional().trim(),
    food4: Joi.string().optional().trim(),
    food5: Joi.string().optional().trim(),
  }),
};

/** Exports all module here */
module.exports = {
  create_cart,
};
