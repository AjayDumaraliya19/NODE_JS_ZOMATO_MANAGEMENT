const Joi = require("joi");

/** create special validation */
const createSpecial = {
    body: Joi.object().keys({
        dish_name: Joi.string().required().trim(),
        restaurant_id: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        price: Joi.number().integer().allow(),
    }),
};

module.exports = {
    createSpecial
};
