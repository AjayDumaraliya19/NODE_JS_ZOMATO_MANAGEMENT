const Joi = require("joi");

/**create review */
const createReview = {
    body: Joi.object().keys({
        user_id: Joi.string().required().trim(),
        restaurant_id: Joi.string().required().trim(),
        comment: Joi.string().required().trim(),
        rating: Joi.number().integer(),
    })
}

module.exports = {
    createReview
}