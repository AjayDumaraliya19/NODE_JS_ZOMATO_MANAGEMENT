const Joi = require("joi");

/**create promotion */
const createPromotion = {
    body: Joi.object().keys({
        restaurant_id: Joi.string().required().trim(),
        marketingManager_id: Joi.string().required().trim(),
        description: Joi.string().required().trim()
    })
}

module.exports = {
    createPromotion
}