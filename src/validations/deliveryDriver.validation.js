const Joi = require("joi");

/** create delivery driver validation */
const createDeliveryDriver = {
    body: Joi.object().keys({
        user_id: Joi.string().required().trim(),
        vehicle_number: Joi.string().required().trim(),
        license_number: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createDeliveryDriver
};