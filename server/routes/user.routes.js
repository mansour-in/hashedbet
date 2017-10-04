const users = require('../controllers/user.controller');

module.exports = (app) => {
    app.route('/login').post(users.signin);
    app.route('/logout').get(users.signout);
    app.route('/forgotpassword').post(users.forgotPassword);
    app.route('/resetpassword/:id').get(users.resetPassword);
    app.route('/resetpassword/:id').post(users.resetChangePassword);
    app.route('/register').post(users.register);
    app.route('/sendMessage').post(users.sendClientMessage);
    app.route('/api/getEmployeesList').post(users.getEmployeesList);
    app.route('/api/createEmployee').post(users.createEmployee);
    app.route('/api/getEmployeeById').post(users.getEmployeeById);
    app.route('/api/updateEmployee').post(users.updateEmployee);
    app.route('/api/deleteEmployee').post(users.deleteEmployee);
    app.route('/api/getClientsList').post(users.getClientList);
    app.route('/api/createClient').post(users.createClient);
    app.route('/api/getClientById').post(users.getClientById);
    app.route('/api/updateClient').post(users.updateClient);
    app.route('/api/deleteClient').post(users.deleteClient);
    app.route('/api/getProfile').post(users.getProfile);
    app.route('/api/updateProfile').post(users.updateProfile);
};
