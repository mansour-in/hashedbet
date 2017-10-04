'use strict';

/**
 * Configurations for All Environments
 */
module.exports = {
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
    port: process.env.PORT || 8000,
    publicResources: [
        '/',
        '/a/login',
        '/signup',
    ],
    jwtToken: {
        secretKey: 'VQuGMDwLXfJXEDhAqleOlL6BtiUhRnLz',
    },
    session: {
        key: '',
        secret: 'clever-app',
        collection: 'appsessions',
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // 1 day
            httpOnly: true,
            secure: false,
        },
    },
};
