const Joi = require("joi");

/** create chat validation */
const createChat = {
    body: Joi.object().keys({
        user_id: Joi.string().required().trim(),
        sender: Joi.string().required().trim(),
        reciever: Joi.string().required().trim(),
        text: Joi.string().required().trim(),
        created_at: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createChat
};