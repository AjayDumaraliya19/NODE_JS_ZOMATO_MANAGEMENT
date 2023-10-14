const Joi = require("joi");

/**create paymentMethod */
const createPaymentMethod = {
    body: Joi.object().keys({
        user_id: Joi.string().required().trim(),
        payment_history_id: Joi.string().required().trim(),
        card_number: Joi.string().required().trim(),
        card_holder_name: Joi.string().required().trim(),
    })
}

module.exports = {
    createPaymentMethod
}