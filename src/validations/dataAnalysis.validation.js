const Joi = require("joi");

/**create data analysis */
const createDataAnalysis = {
    body: Joi.object().keys({
        user_id: Joi.string().required().trim(),
        analyst_project: Joi.string().required().trim(),
        analysis_results: Joi.string().required().trim(),
    })
}

module.exports = {
    createDataAnalysis
}