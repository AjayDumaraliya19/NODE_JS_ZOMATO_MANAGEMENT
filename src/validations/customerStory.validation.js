const Joi = require("joi");

/**create customerStory */
const createCustomerStory = {
    body: Joi.object().keys({
        customer_name: Joi.string().required().trim(),
        story_title: Joi.string().required().trim(),
        story_content: Joi.string().required().trim(),
    })
}

module.exports = {
    createCustomerStory
}