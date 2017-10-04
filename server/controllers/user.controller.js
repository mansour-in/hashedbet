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
    res.cookie('clever', JSON.stringify(_.get(value, 'user', {})), {
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
                            res.header('Cache-Control', 'no-cache');
                            res.send(JSON.stringify({status: 200, data: "Success"}))
                        });
                }
            });
        }
    })(req, res, next);
};

exports.signout = (req, res, next) => {
    res.clearCookie('clever');
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

/**
 * Send Client Message
 */
exports.sendClientMessage = (req, res, next) => {
    userAPI.sendClientMessage(req)
        .then(data => {
            res.status(200).json(data);
        });
};

exports.getEmployeesList = (req, res) => {
    userAPI.getEmployeesList(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.getEmployeeById = (req, res) => {
    userAPI.getEmployeeById(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.createEmployee = (req, res) => {
    userAPI.createEmployee(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.updateEmployee = (req, res) => {
    userAPI.updateEmployee(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.deleteEmployee = (req, res) => {
    userAPI.deleteEmployee(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.createClient = (req, res) => {
    userAPI.createClient(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.getClientList = (req, res) => {
    userAPI.getClientList(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.getClientById = (req, res) => {
    userAPI.getClientById(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.updateClient = (req, res) => {
    userAPI.updateClient(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.deleteClient = (req, res) => {
    userAPI.deleteClient(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.getProfile = (req, res) => {
    userAPI.getProfile(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.updateProfile = (req, res) => {
    let profile = _.get(req, 'body.profile', {});
    return avatarValidation(profile)
        .then(data => {
            return userAPI.updateProfile(req, data);
        })    
        .then(response => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
