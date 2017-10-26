const passport = require('passport');

module.exports = () => {
  // Serialize sessions
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // Deserialize sessions
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  require('./external.server.strategy.js')(); // eslint-disable-line
};
