const Joi = require("joi");

/**create content creater */
const createContentCreater = {
    body: Joi.object().keys({
        user_id: Joi.string().required().trim(),
        content_type: Joi.string().required().trim(),
        content_details: Joi.string().required().trim(),
    })
}

module.exports = {
    createContentCreater
}