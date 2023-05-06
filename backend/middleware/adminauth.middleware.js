const jwt = require('jsonwebtoken');
const adminauth = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        try {
            const decoded = jwt.verify(token.split(" ")[1], "admin");
            if (decoded) {
                req.body.adminEmail = decoded.adminEmail
                req.body.adminType = decoded.adminType
                next()
            } else {
                res.send({ "msg": "Please Login!!" })
            }

        } catch (error) {
            res.send({ "err": error.message })
        }

    }else{
        res.send({ "msg": "Please Login!!" })
    }
}

module.exports = {
    adminauth
}
