'use strict';
var _ = require('lodash');
var decrypt = require('../lib/decrypt');
var access = require('safe-access');
exports.authSession = function(req, res, next) {
    if(!_.get(req, 'cookies.clever', null)) {
        res.redirect('/');
        return;
    }
    next();
};

exports.validateSession = function(req, res, next) {
    if(_.get(req, 'cookies.clever', null)) {
        decrypt.decodeToken(access(req, 'user.data.token'))
            .then((user) => {
                res.redirect('/dashboard');
                return;
            });
    } else {
        next();
    }
};

