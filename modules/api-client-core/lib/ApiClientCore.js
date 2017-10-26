'use strict';

var url = require('url'),
    _ = require('lodash'),
    configValidator = require('./validation/configValidator'),
    apiCallerValidator = require('./validation/apiCallerValidator'),
    defaultConfiguration = require('./defaultConfiguration'),
    access = require('safe-access'),
    UsersClientCore;

/**
 * Chatbot API client core
 * @param configuration
 * @param  apiCaller {{
 *         get:Function,
 *         post:Function,
 *         put:Function,
 *         del:Function,
 *         head:Function,
 *         patch:Function,
 *         json:Function,
 *         postJson:Function,
 *         putJson:Function
 *     }}
 * @constructor
 */
UsersClientCore = function(configuration, apiCaller) {
    this.configuration = _.assign({}, defaultConfiguration, configuration);
    if (!configValidator.validate(this.configuration)) {
        throw new Error('Configuration is invalid');
    }

    this.apiCaller = apiCaller || require('restler-bluebird');
    if (!apiCallerValidator.validate(this.apiCaller)) {
        throw new Error('API caller implementation is invalid');
    }
};

UsersClientCore.prototype.get = function(url, options) {
    return this.apiCaller.get(url, options);
};

UsersClientCore.prototype.post = function(url, options) {
    return this.apiCaller.post(url, options);
};

UsersClientCore.prototype.put = function(url, options) {
    return this.apiCaller.put(url, options);
};

UsersClientCore.prototype.del = function(url, options) {
    return this.apiCaller.del(url, options);
};

UsersClientCore.prototype.head = function(url, options) {
    return this.apiCaller.head(url, options);
};

UsersClientCore.prototype.patch = function(url, options) {
    return this.apiCaller.patch(url, options);
};

UsersClientCore.prototype.json = function(url, data, options) {
    return this.apiCaller.json(url, data, options);
};

UsersClientCore.prototype.postJson = function(url, data, options) {
    return this.apiCaller.postJson(url, data, options);
};

UsersClientCore.prototype.putJson = function(url, data, options) {
    return this.apiCaller.putJson(url, data, options);
};

/**
 * Returns configuration object for URL node module to build absolute host address
 * @returns {{protocol: (string|schema.schema|schema|exports.schema), hostname: (*|schema.hostname|exports.errors.string.hostname|hostname|expected.hostname|internals.String.hostname), port: (null|port|schema.port|expected.port|creq.port|Function|*)}}
 */
UsersClientCore.prototype.getUrlConfigurationObjectForHost = function() {
    return {
        protocol: this.configuration.schema,
        hostname: this.configuration.hostname,
        port: this.configuration.port
    };
};

/**
 * Returns API HOST
 * @returns {string}
 */
UsersClientCore.prototype.getHost = function() {
    return url.format(this.getUrlConfigurationObjectForHost());
};

/**
 *
 * @param [req]
 * @returns {*}
 */
UsersClientCore.prototype.retrieveAccessTokenQueryString = function(req) {
    var accessToken = access(req, 'user.data.token');
    return accessToken ? {
        Authorization: 'Bearer ' + accessToken,
        // 'x-chatbot-clientid': req.headers['x-chatbot-clientid'],
        // 'x-chatbot-id': req.headers['x-chatbot-id']
    } : {};
};

/**
 * Retrieves default query string from request
 * @param [req]
 * @returns {{query: {}}}
 */
UsersClientCore.prototype.retrieveDefaultQueryStringOption = function(req) {
    var headers = {};

    _.assign(headers, this.retrieveAccessTokenQueryString(req));
    // add new retrievers here

    return {
        headers: headers
    };
};

/**
 * Retrieves default options based on request
 * @param [req]
 * @returns {{}}
 */
UsersClientCore.prototype.retrieveDefaultOptions = function(req) {
    var options = {};

    _.assign(options, this.retrieveDefaultQueryStringOption(req));
    // add new retrievers here

    return options;
};

/**
 * Returns URI for API CALL
 * @param endpointName api call prototype
 * @param [absolute=true] If true - returns absolute URI. False - returns relative URI.
 * @param [params={}]
 * @returns {string}
 */
UsersClientCore.prototype.getUri = function(endpointName, absolute, params) {
    var urlObj;

    absolute = absolute !== false;
    params = params || {};

    urlObj = {
        query: _.assign({}, this.configuration.query, params),
        pathname: this.configuration.pathname + endpointName
    };

    if (absolute) {
        _.assign(urlObj, this.getUrlConfigurationObjectForHost());
    }

    return url.format(urlObj);
};

module.exports = UsersClientCore;
