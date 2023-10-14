const Joi = require("joi");

/**create restaurant */
const createRestaurant = {
    body: Joi.object().keys({
        owner_id: Joi.string().required().trim(),
        name: Joi.string().required().trim(),
        location: Joi.string().required().trim(),
        cuisine_type: Joi.string().required().trim(),
    })
}

module.exports = {
    createRestaurant
}