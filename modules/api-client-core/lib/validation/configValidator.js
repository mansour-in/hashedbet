var Validator = require('./Validator');
var schema = require('./configSchema');

module.exports = new Validator(schema);
