const Joi = require("joi");

/** Create restrorant type */
const create_restaurant_type = {
  body: Joi.object().keys({
    restaurant_type: Joi.string().required().trim(),
    type_desc: Joi.string().required().trim(),
  }),
};

/** Exports all data here */
module.exports = {
    create_restaurant_type
}