// variables
var config = require('./env/all');

var dev = require('./env/dev');
var prod = require('./env/prod');
var local = require('./env/local');
var stage = require('./env/stage');

var _ = require('lodash');
var myConfig;

switch (process.env.CONFIG_ENV) {
case 'production':
    myConfig = prod;
    break;
case 'development':
    myConfig = dev;
    break;
case 'local':
    myConfig = local;
    break;
case 'staging':
    myConfig = stage;
    break;
default:
    myConfig = local;
    break;
}

config = _.assign({}, config, myConfig);

module.exports = config;
