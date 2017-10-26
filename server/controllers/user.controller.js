const _ = require('lodash');
const passport = require('passport');
var userAPI = require('../ApiClient').usersApiClient;
var decrypt = require('../lib/decrypt');
const access = require('safe-access');
const validator = require('validator');
function stripAuthenticationUserData(user) {
    return {
        success: true,
        user: user.data.token,
    };
}

function setCookie(res, value) {
    const date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
    res.cookie('coinbet', JSON.stringify(_.get(value, 'user', {})), {
        expires: date,
        httpOnly: false,
    });
}

function getUserData(res, userData) {
    const user = stripAuthenticationUserData(userData);
    setCookie(res, user);
    return user;
}

function avatarValidation(profile) {
    return new Promise ((resolve, reject) => {
        if(_.has(profile, 'avatar') && !_.isEmpty(_.get(profile, 'avatar', null)) && !validator.isURL(_.get(profile, 'avatar'))) {
            return s3Bucket.uploadBase64(_.get(profile, 'avatar'))
                .then(data => {
                    profile.avatar = _.get(data, 'Location', null);
                    resolve(profile);
                })
                .catch(err => {
                    reject(err);
                })
        } else {
            resolve(profile);
        }
    });
}

exports.signin = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err || !user) {
            res.send(JSON.stringify({status: 200, data: "Failed"}))
        } else {
            req.login(user, (error) => {
                if (error) {
                    // res.status(401).send(error);
                    // res.render('pages/login', { error: true });
                    res.send(JSON.stringify({status: 200, data: "Failed"}))
                } else {
                    // req.session.user = user;
                    getUserData(res, user);
                // res.redirect('/');
                    decrypt.decodeToken(access(req, 'user.data.token'))
                        .then(user => {
                            // if(user.role === "ADMIN") {
                            //     res.redirect(301, '/dashboard')
                            // }
                            res.send(JSON.stringify({status: 200, data: "Success"}))
                        });
                }
            });
        }
    })(req, res, next);
};

exports.signout = (req, res, next) => {
    res.clearCookie('coinbet');
    res.clearCookie('connect.sid');
    req.logout();
    req.session.destroy();
    req.session = null; // eslint-disable-line
    res.redirect('/');
    next();
};

exports.user = (req, res) => {
    res.status(200).json(getUserData(res, req.user));
};

/**
 * Forgot Password
 */
exports.forgotPassword = (req, res, next) => {
    userAPI.forgotPassword(req)
        .then(status => {
            res.status(200).json(status);
        });
};

/**
 * Reset Password
 */
exports.resetPassword = (req, res, next) => {
    userAPI.verifyResetToken(req)
        .then(status => {
            if (status.status === 'success') {
                res.render('pages/resetpassword', { token: status.data.token });
            } else {
                res.render('error');
            }
        });
};

/**
 * Change Password
 */
exports.resetChangePassword = (req, res, next) => {
    userAPI.changePassword(req)
        .then(data => {
            res.status(200).json(data);
        });
};

/**
 * Register User
 */
exports.register = (req, res, next) => {
    userAPI.register(req)
        .then(data => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.getEtherBalance = (req, res, next) => {
    userAPI.getEtherBalance(req)
        .then(data => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.assignTokenToUser = (req, res, next) => {
    userAPI.assignTokenToUser(req)
        .then(data => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.getConfirmedTokens = (req, res, next) => {
    userAPI.getConfirmedTokens(req)
        .then(data => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
