const Joi = require("joi");

/** create order item validation */
const createOrderItem = {
    body: Joi.object().keys({
        order_id: Joi.string().required().trim(),
        menu_item_id: Joi.string().required().trim(),
        quantity: Joi.number().integer().allow(),
        subtotal_price: Joi.number().integer().allow(),
    }),
};

module.exports = {
    createOrderItem
};