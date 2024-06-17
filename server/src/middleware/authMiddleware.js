const { verifyToken } = require('../utils/jwt.js');

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    const decodedUser = verifyToken(token);
    if (!decodedUser) {
        return res.status(401).json({ msg: 'Token is not valid' });
    }

    req.user = decodedUser;
    next();
};

module.exports = auth;
