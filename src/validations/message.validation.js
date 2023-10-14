const Joi = require("joi");

/** create message validation */
const createMessage = {
    body: Joi.object().keys({
        chat_id: Joi.string().required().trim(),
        user_id: Joi.string().required().trim(),
        content: Joi.string().required().trim(),
        created_at: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createMessage
};