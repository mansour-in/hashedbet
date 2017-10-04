const users = require('../controllers/user.controller');

module.exports = (app) => {
    app.route('/login').post(users.signin);
    app.route('/logout').get(users.signout);
    app.route('/forgotpassword').post(users.forgotPassword);
    app.route('/resetpassword/:id').get(users.resetPassword);
    app.route('/resetpassword/:id').post(users.resetChangePassword);
    app.route('/register').post(users.register);
};
