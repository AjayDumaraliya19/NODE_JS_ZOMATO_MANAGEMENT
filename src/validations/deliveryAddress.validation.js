const Joi = require("joi");

/** create delivery address validation */
const createDeliveryAddress = {
    body: Joi.object().keys({
        delieveryDriver_id: Joi.string().required().trim(),
        user_id: Joi.string().required().trim(),
        address_line1: Joi.string().required().trim(),
        address_line2: Joi.string().required().trim(),
        city: Joi.string().required().trim(),
        state: Joi.string().required().trim(),
        country: Joi.string().required().trim(),
        postal_code: Joi.string().required().trim(),
    }),
};

module.exports = {
    createDeliveryAddress
};