const config = require('../config');

exports.checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else if (config.publicResources.indexOf(req.url) !== -1) {
    next();
  } else {
    res.status(401).jsonp({
      url: req.originalUrl,
      message: 'Unauthorized',
      status: 401,
    });
  }
};
