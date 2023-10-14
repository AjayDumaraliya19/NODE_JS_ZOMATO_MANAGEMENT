const Joi = require("joi");

/**create Categories */
const createCategories = {
    body: Joi.object().keys({
        menuItems_id: Joi.string().required().trim(),
        name: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
    })
}

module.exports = {
    createCategories
}