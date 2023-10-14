const Joi = require("joi");

/** Create Banner route */
const createBanner = {
  body: Joi.object({
    banner_name: Joi.string().trim().required(),
    banner_description: Joi.string().trim().optional(),
    product_image: Joi.string().trim().allow(""),
    rest_type: Joi.string().trim().required(),
  }),
};

/** Get Banner list details route */
const getDetails = {
  params: Joi.object({
    bannerId: Joi.string().required().trim(),
  }),
};

/** Get Banner list */
const getList = {
  query: Joi.object().keys(),
};

/** Update Banner details */
const updateBanner = {
  params: Joi.object({
    bannerId: Joi.string().required().trim(),
  }),
  body: Joi.object({
    banner_name: Joi.string().trim().optional(),
    banner_description: Joi.string().optional(),
    banner_image: Joi.string().optional(),
    rest_type: Joi.string().optional(),
  }),
};

/** Exports all data here */
module.exports = {
  createBanner,
  getDetails,
  getList,
  updateBanner,
};
