const Joi = require("joi");

/** create chat message validation */
const createChatMessage = {
    body: Joi.object().keys({
        sender_id: Joi.string().required().trim(),
        user_id: Joi.string().required().trim(),
        content: Joi.string().required().trim(),
        created_at: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createChatMessage
};