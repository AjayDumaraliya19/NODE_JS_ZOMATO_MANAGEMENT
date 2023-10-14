const Joi = require("joi");

/** create restaurant owner*/
const createRestaurantOwners = {
    body: Joi.object().keys({
        user_id: Joi.string().required().trim(),
        restaurant_id: Joi.string().required().trim(),
        role: Joi.string().required().trim(),
        ownership_percentage: Joi.string().required().trim(),
    })
}

module.exports = {
    createRestaurantOwners
}