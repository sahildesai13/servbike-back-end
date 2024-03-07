const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'default_secret_key';

function authenticateToken(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }

        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
