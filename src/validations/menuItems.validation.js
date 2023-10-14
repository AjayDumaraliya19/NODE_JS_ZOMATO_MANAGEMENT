const Joi = require("joi");

/**create menu items */
const createMenuItems = {
    body: Joi.object().keys({
        category_id: Joi.string().required().trim(),
        restaurant_id: Joi.string().required().trim(),
        name: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        price: Joi.number().integer(),
    })
}

module.exports = {
    createMenuItems
}