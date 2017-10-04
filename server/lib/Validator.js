const validate = require('joi').validate;

const Validator = (schema) => {
  this.schema = schema;
};

Validator.prototype.validate = (value) => {
  return validate(value, this.schema, { allowUnknown: true }).error === null;
};

Validator.prototype.getErrors = (value) => {
  return (validate(value, this.schema, { abortEarly: false, allowUnknown: true }).error || {}).details || [];
};

module.exports = Validator;
