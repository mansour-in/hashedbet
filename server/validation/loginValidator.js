const Validator = require('../lib/Validator');
const schema = require('./loginSchema');

module.exports = new Validator(schema);
