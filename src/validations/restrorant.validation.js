const Joi = require("joi");

// Create restaurant
const create_restaurant = {
    body: Joi.object().keys({
        restaurant_name:Joi.string().required().trim(),
        restaurant_address:Joi.string().required().trim(),
        restaurant_contact_no:Joi.string().required().trim(),
        owner_detail:Joi.string().required().trim(),
        owner_contact_no:Joi.string().required().trim(),
        restaurant_image:Joi.optional(),
        food_image:Joi.optional(),
        restro_type:Joi.string().required().trim(),
        city:Joi.string().required().trim(),
    })
}
// Exporting validation object
module.exports = {
    create_restaurant
}