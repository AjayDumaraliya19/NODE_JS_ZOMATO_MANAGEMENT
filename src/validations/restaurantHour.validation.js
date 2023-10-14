const Joi = require("joi");

/** create restaurant hour validation */
const createRestaurantHour = {
    body: Joi.object().keys({
        restaurant_id: Joi.string().required().trim(),
        day_of_week: Joi.string().required().trim(),
        open_time: Joi.string().required().trim(),
        close_time: Joi.string().required().trim(),
    }),
};

module.exports = {
    createRestaurantHour
};
