const Joi = require("joi");

/**create paymentHistory */
const createPaymentHistory = {
    body: Joi.object().keys({
        amount: Joi.number().integer(),
        user_id: Joi.string().required().trim(),
        order_id: Joi.string().required().trim(),
        paymentMethod_id: Joi.string().required().trim(),
        status: Joi.string().required().trim(),
    })
}

module.exports = {
    createPaymentHistory
}