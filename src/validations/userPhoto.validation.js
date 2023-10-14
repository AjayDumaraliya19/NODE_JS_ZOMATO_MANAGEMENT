const Joi = require("joi");

/** create user photo validation */
const createUserPhoto = {
    body: Joi.object().keys({
        userPhoto_image: Joi.string().trim(),
        caption: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createUserPhoto
};
