const jwt = require('jsonwebtoken');
const config = require('../config');

function secureData(data) {
    return {
        clientId: data.clientId,
        email: data.email,
        avatar: data.avatar,
        role: data.role,
        fullName: data.fullName
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
