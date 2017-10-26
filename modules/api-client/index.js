'use strict';

var camelCase = require('lodash.camelcase'),
    memoize = require('lodash.memoize'),
    ApiClient;

ApiClient = function(configuration, apiCaller) {
    // this.modules.forEach(moduleName => {
        Object.defineProperty(this, this.moduleNameToPropertyName('api-client-core'), {
            get: memoize(function() {
                var Client = require('../api-client-core');
                return new Client(configuration, apiCaller);
            })
        });
        Object.defineProperty(this, this.moduleNameToPropertyName('users-api-client'), {
            get: memoize(function() {
                var Client = require('../users-api-client');
                return new Client(configuration, apiCaller);
            })
        });
    // }, this);
};

ApiClient.prototype.moduleNameToPropertyName = function(moduleName) {
    return camelCase(moduleName);
};

ApiClient.prototype.modules = [
    'api-client-core',
    'users-api-client',
];

module.exports = ApiClient;
