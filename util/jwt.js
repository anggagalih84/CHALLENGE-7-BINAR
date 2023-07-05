const jwt = require('jsonwebtoken')

class Jwt {
    static option = {
        expiresIn: 60 * 15
    }
    static sign = (payload) => {
        return jwt.sign(payload, process.env.SECRET, this.option)
    }

    static verifyAccessToken = (token) =>
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return err;
            }
            return decoded;
        });

}

module.exports = Jwt