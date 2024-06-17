const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Generate token that expires in 1 hour
const generateToken = (user) => {
    const payload = {
        user: {
            id: user.id,
        },
    };

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Generate expired token (used for logout)
const generateExpiredToken = () => {
    const payload = {
        expired: true,
    };

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1ms' }); // Expires in 1 millisecond
};

module.exports = { generateToken, generateExpiredToken };
