const Joi = require("joi");

/** create complaint validation */
const createComplaint = {
    body: Joi.object().keys({
        user_id: Joi.string().required().trim(),
        restaurant_id: Joi.string().required().trim(),
        content: Joi.string().required().trim(),
        created_at: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createComplaint
};