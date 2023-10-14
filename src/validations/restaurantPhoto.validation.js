const Joi = require("joi");

/** create restaurant photo validation */
const createRestaurantPhoto = {
    body: Joi.object().keys({
        photo_url: Joi.string().required().trim(),
        caption: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createRestaurantPhoto
};
