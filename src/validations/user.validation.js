/** Requier for the validation, third-party module */
const Joi = require("joi");

/** Create user validation */
const createUser = {
  body: Joi.object().keys({
    first_name: Joi.string().trim().required(),
    last_name: Joi.string().trim().required(),
    password: Joi.string().min(6).max(10).required(),
    email: Joi.string().trim().lowercase().required(),
    address: Joi.string().trim().required(),
    mobile_num: Joi.number().integer().required(),
    role: Joi.string()
      .trim()
      .valid("Admin", "User", "admin", "user")
      .required(),
  }),
};

/** Get user list validation */
const getUserList = {
  query: Joi.object().keys(),
};

/** Get User by Id Validation */
const getUserById = {
  param: Joi.object().keys(),
};

/** User details update by Id validation */
const updateUser = {
  param: Joi.object().keys(),
  body: Joi.object().keys({
    first_name: Joi.string().trim(),
    last_name: Joi.string().trim(),
    password: Joi.string().min(6).max(10),
    email: Joi.string().trim().lowercase(),
    address: Joi.string().trim(),
    mobile_num: Joi.number().integer(),
    role: Joi.string().trim().valid("Admin", "User", "admin", "user"),
  }),
};

/** Exports all modules here */
module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateUser,
};
