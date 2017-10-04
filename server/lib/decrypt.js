const jwt = require('jsonwebtoken');
const config = require('../config');

function secureData(data) {
    return {
        ethereumAddress: data.ethereumAddress,
        email: data.email,
    };
}

export function decodeToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.jwtToken.secretKey, (err, decoded) => {
            if (!err && decoded) {
                resolve(secureData(decoded.user));
                return;
            }
            console.log(err);
            reject(null);
        });
    });
}
