const joi = require("@hapi/joi");

const validateForm = (data) => {
  const schema = joi.object({
    name: joi.string().required(),
    emailOfDeveloper: joi.string().email().required(),
    address: joi.string().min(42).max(42).required(),
    github: joi.string().required(),
    text: joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = validateForm;
