const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || "booksNode2021";;
const checkAuth = (req, res, next) => {
    try {
        // const token = req.headers['authorization'].split(' ')[1];
        jwt.verify(token, SECRET_KEY)
        next();
    }
    catch (err) {
        res.status(500).json({
            message: "something wrong",
            error: err.message,
        });
    }
}
module.exports = checkAuth;;


