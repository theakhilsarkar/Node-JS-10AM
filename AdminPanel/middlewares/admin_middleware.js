import jwt from 'jsonwebtoken'

export const checkAdmin = (req, res) => {
    const token = req.cookies.auth_token // string token -> jwt
    const user = JSON.parse(jwt.verify(token, process.env.SECRET_KEY));
    if (user.role == 'admin') {
        next();
    }
    else {
        res.json({ status: false, message: "Only admin can access this page !" })
    }
}
