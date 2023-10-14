const Joi = require("joi");
const pick = require("../helpers/pick");

/* ---------------------- Create the validate function ---------------------- */
const validate = (Schema) => (req, res, next) => {
  const validSchema = pick(Schema, ["params", "query", "body"]);
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({
      errors: { label: "key" },
      abortEarly: false,
    })
    .validate(object);

  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");
    return next(new Error(errorMessage));
  }

  Object.assign(req, value);
  return next();
};

/* ------------------------ Exports all modules here ------------------------ */
module.exports = validate;
