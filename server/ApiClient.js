'use strict';

var ApiClient = require('../modules/api-client'),
    config = require('./config').chatbotApi;

module.exports = new ApiClient(config);