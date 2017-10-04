'use strict';

var access = require('safe-access'),
    UsersClientCore = require('../../api-client-core'),
    UsersApiClient;

/**
 * UsersApiClient
 *
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
UsersApiClient = function(configuration, apiCaller) {
    UsersClientCore.apply(this, arguments);
};
require('util').inherits(UsersApiClient, UsersClientCore);

/**
 * Returns USER LOGIN API URL
 * @returns {string}
 */
UsersApiClient.prototype.getUserLoginUrl = function(relative) {
    return this.getUri('login', !relative);
};

/**
 * Returns Forgot Passsword API URL
 * @returns {string}
 */
UsersApiClient.prototype.getForgotPasswordUri = function(relative) {
    return this.getUri('forgotpassword', !relative);
};

/**
 * Returns Verify Reset Token API URL
 * @returns {string}
 */
UsersApiClient.prototype.getVerifyResetTokenUri = function(req, relative) {
    return this.getUri('verifyResetToken', !relative) + "/" + access(req, 'params.id');
};

/**
 * Returns Change Password API URL
 * @returns {string}
 */
UsersApiClient.prototype.getChangePasswordUri = function(req, relative) {
    return this.getUri('changePassword', !relative) + "/" + access(req, 'params.id');
};

/**
 * Returns Register User API URL
 * @returns {string}
 */
UsersApiClient.prototype.getRegisterUri = function(relative) {
    return this.getUri('register', !relative);
};

/**
 * Returns Send User Message API URL
 * @returns {string}
 */
UsersApiClient.prototype.getSendClientMessageUri = function(relative) {
    return this.getUri('sendMessage', !relative);
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.authenticate = function(email, pass) {
    return this.postJson(this.getUserLoginUrl(), {
        email: email,
        password: pass
    });
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.forgotPassword = function(req) {
    return this.postJson(this.getForgotPasswordUri(), {
        email: access(req, "body.email")
    });
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.verifyResetToken = function(req) {
    return this.get(this.getVerifyResetTokenUri(req), {});
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.changePassword = function(req) {
    return this.postJson(this.getChangePasswordUri(req), {
        password: access(req, "body.password")
    });
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.register = function(req) {
    return this.postJson(this.getRegisterUri(), {
        companyName: access(req, "body.companyName"),
        adminName: access(req, "body.adminName"),
        email: access(req, "body.email"),
        password: access(req, "body.password"),
        ethereumAddress: access(req, "body.ethereumAddress")
    });
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.sendClientMessage = function(req) {
    return this.postJson(this.getSendClientMessageUri(), {
        name: access(req, "body.name"),
        email: access(req, "body.email"),
        subject: access(req, "body.subject"),
        message: access(req, "body.message"),
    });
};


/**
 * Returns Get Employee API URL
 * @returns {string}
 */
UsersApiClient.prototype.getEmployeesListUrl = function (relative) {
    return this.getUri('users', !relative);
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.getEmployeesList = function (req) {
    return this.get(this.getEmployeesListUrl(), this.retrieveDefaultOptions(req));
};

/**
 * Returns Get Employee By Id API URL
 * @returns {string}
 */
UsersApiClient.prototype.getEmployeeByIdUrl = function (relative) {
    return this.getUri('users', !relative);
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.getEmployeeById = function (req) {
    return this.get(this.getEmployeeByIdUrl()+'/'+req.body.id, this.retrieveDefaultOptions(req));
};

/**
 * Returns Create Employee API URL
 * @returns {string}
 */
UsersApiClient.prototype.createEmployeeUrl = function (relative) {
    return this.getUri('users', !relative);
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.createEmployee = function (req) {
    return this.postJson(this.createEmployeeUrl(), req.body.employee, this.retrieveDefaultOptions(req));
};

/**
 * Returns Update Employee API URL
 * @returns {string}
 */
UsersApiClient.prototype.updateEmployeeUrl = function (relative) {
    return this.getUri('users', !relative);
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.updateEmployee = function (req) {
    return this.putJson(this.updateEmployeeUrl()+'/'+req.headers['x-employee-id'], req.body.employee, this.retrieveDefaultOptions(req));
};

/**
 * Returns Delete Employee API URL
 * @returns {string}
 */
UsersApiClient.prototype.deleteEmployeeUrl = function (relative) {
    return this.getUri('users', !relative);
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.deleteEmployee = function (req) {
    return this.del(this.deleteEmployeeUrl()+'/'+req.headers['x-employee-id'], this.retrieveDefaultOptions(req));
};

/**
 * Returns Create Client API URL
 * @returns {string}
 */
UsersApiClient.prototype.createClientUrl = function (relative) {
    return this.getUri('clients', !relative);
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.createClient = function (req) {
    return this.postJson(this.createClientUrl(), req.body.client, this.retrieveDefaultOptions(req));
};

/**
 * Returns Get Client List API URL
 * @returns {string}
 */
UsersApiClient.prototype.getClientListUrl = function (relative) {
    return this.getUri('clients', !relative);
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.getClientList = function (req) {
    return this.get(this.getClientListUrl(), this.retrieveDefaultOptions(req));
};

/**
 * Returns Get Client By ID API URL
 * @returns {string}
 */
UsersApiClient.prototype.getClientByIdUrl = function (relative) {
    return this.getUri('clients', !relative);
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.getClientById = function (req) {
    return this.get(this.getClientByIdUrl()+'/'+req.body.id, this.retrieveDefaultOptions(req));
};

/**
 * Returns Get Update Client API URL
 * @returns {string}
 */
UsersApiClient.prototype.updateClientUrl = function (relative) {
    return this.getUri('clients', !relative);
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.updateClient = function (req) {
    return this.putJson(this.updateClientUrl()+'/'+req.headers['x-client-id'], req.body.client, this.retrieveDefaultOptions(req));
};

/**
 * Returns Delete Client API URL
 * @returns {string}
 */
UsersApiClient.prototype.deleteClientUrl = function (relative) {
    return this.getUri('clients', !relative);
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.deleteClient = function (req) {
    return this.del(this.deleteClientUrl()+'/'+req.headers['x-client-id'], this.retrieveDefaultOptions(req));
};

/**
 * Returns Delete Chatbot API URL
 * @returns {string}
 */
UsersApiClient.prototype.getProfileUrl = function (relative) {
    return this.getUri('profile', !relative);
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.getProfile = function (req) {
    return this.get(this.getProfileUrl(), this.retrieveDefaultOptions(req));
};

/**
 * Returns restler promise
 * @returns {promise}
 */
UsersApiClient.prototype.updateProfile = function (req, data) {
    return this.putJson(this.getProfileUrl(), data, this.retrieveDefaultOptions(req));
};

module.exports = UsersApiClient;
