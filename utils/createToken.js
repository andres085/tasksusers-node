const jwt = require('jwt-simple');

const createToken = (user) => {
    const payload = {
        userId: user.id,
        email: user.email
    }

    return jwt.encode(payload, 'secret');
}

module.exports = createToken;