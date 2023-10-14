const Joi = require("joi");

/** Create food validation */
const create_food = {
  body: Joi.object().keys({
    food_name: Joi.string().required().trim(),
    food_price: Joi.number().required(),
    restaurant: Joi.string().required().trim(),
  }),
};

/** Exports all module here */
module.exports = {
    create_food
}

