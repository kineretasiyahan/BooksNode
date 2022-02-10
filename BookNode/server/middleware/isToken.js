const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
const checkAuth = (req, res, next) => {
    const headers = req.headers("Authorization")
    try {
        const token = headers.split(' ')[1];
        jwt.verify(token, SECRET_KEY)
        next();
    }
    catch (err) {
        res.status(401).json({
            message: "You dont have a access",
            error: err.message,
        })
    }
}
module.exports = checkAuth;