const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userApiClient = require('../ApiClient').usersApiClient;

function decorateUserResponse(user, done) {
  return done(null, user);
}

module.exports = () => {
    passport.use('local', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        function(email, password, done) {
            function handleError(response) {
                return done({
                    message: response
                }, false, null);
            }
            userApiClient
                .authenticate(email, password)
                .then(response => {
                    decorateUserResponse(response, done);
                })
                .error(handleError)
                .catch(handleError);
        }
    ));
};
