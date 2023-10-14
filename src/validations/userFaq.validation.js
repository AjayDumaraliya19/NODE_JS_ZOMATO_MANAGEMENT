const Joi = require("joi");

/**create Userfaq */
const createUserFaq = {
    body: Joi.object().keys({
        question: Joi.string().required().trim(),
        answer: Joi.string().required().trim(),
    })
}

module.exports = {
    createUserFaq
}