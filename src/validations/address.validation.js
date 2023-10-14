const Joi = require("joi");

/**create address */
const createAddress = {
    body: Joi.object().keys({
        user_id: Joi.string().required().trim(),
        address_line: Joi.string().required().trim(),
        city: Joi.string().required().trim(),
        state: Joi.string().required().trim(),
        postal_code: Joi.number().integer(),
    })
}

module.exports = {
    createAddress
}