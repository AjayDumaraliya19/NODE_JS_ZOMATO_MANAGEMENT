const Joi = require("joi");

/**create Notification */
const createNotification = {
    body: Joi.object().keys({
        user_id: Joi.string().required().trim(),
        message_id: Joi.string().required().trim(),
        chat_id: Joi.string().required().trim(),
        chatMessage_id: Joi.string().required().trim(),
        content: Joi.string().required().trim(),
        read_status: Joi.string().required().trim(),
    })
}

module.exports = {
    createNotification
}