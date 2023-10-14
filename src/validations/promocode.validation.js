const Joi = require("joi");

/** create promocode validation */
const createPromocode = {
    body: Joi.object().keys({
        restaurant_id: Joi.string().required().trim(),
        menuItem_id: Joi.string().required().trim(),
        code: Joi.number().integer().allow(),
        start_date: Joi.string().required().trim(),
        end_date: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createPromocode
};
