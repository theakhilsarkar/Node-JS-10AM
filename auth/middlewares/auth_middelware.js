import { signinPath } from "../server.js";

export const checkAuthRequest = (req, res, next) => {
    if (req.body) {
        const { email, password } = req.body;
        if (email && password) {
            next();
        } else {
            res.status(401).json({ message: "email & password must required !" });
        }
    } else {
        res.status(401).json({ message: "email & password must required !" });
    }
}

export const checkAlreadyLogin = (req, res, next) => {
    try {
        if (req.cookies.auth) {
            next()
        }
    } catch (err) {
        res.sendFile(signinPath);
    }
}
