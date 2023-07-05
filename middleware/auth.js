const Jwt = require("../util/jwt")


const authentication = async(req, res, next) => {
    try {
        const {
            headers: { authorization = undefined },
        } = req;

        const unauthentication = () => res.status(401).json({ message: 'Unathenticated' });

        if (!authorization) return unauthentication();

        const token = authorization.split(' ')[1];
        const payload = Jwt.verifyAccessToken(token);

        if (payload.message) {
            throw new Error(payload.message);
        }

        const user = await UserService.getUserByUsername({
            Username: payload.Username,
        });


        if (!user || user.email !== payload.email) return unauthorized();

        req.decoded = payload;
        return next();


        if (!user || user.email !== payload.email) return unauthorized();
    } catch (error) {

    }
}




module.exports = authentication