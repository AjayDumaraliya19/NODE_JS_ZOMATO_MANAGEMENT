const Joi = require("joi");

/**create blog */
const createBlog = {
    body: Joi.object().keys({
        title: Joi.string().required().trim(),
        content: Joi.string().required().trim(),
        author: Joi.string().required().trim(),
        tag: Joi.string().required().trim(),
        published_date: Joi.string().required().trim(),
    })
}

module.exports = {
    createBlog
}