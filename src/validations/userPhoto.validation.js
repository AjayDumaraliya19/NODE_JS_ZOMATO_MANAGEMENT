const Joi = require("joi");

/** create user photo validation */
const createUserPhoto = {
    body: Joi.object().keys({
        photo_url: Joi.string().required().trim(),
        caption: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createUserPhoto
};
