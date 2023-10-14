const Joi = require("joi");

/**create orders */
const createOrders = {
    body: Joi.object().keys({
        total_price: Joi.number().integer(),
        user_id: Joi.string().required().trim(),
        restaurant_id: Joi.string().required().trim(),
        status: Joi.string().required().trim(),
    })
}

module.exports = {
    createOrders
}