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

// $2b$12$WsFL.SB699gT6CFrcY2NJu0QlSWtyT7smD7MgO6cIuXcmbkwwbs8.
// $2b$12$TKyDqtj4vBIvsd2hcM2B/.p37EsPDd5R.gAwNCyd5p1.38STFHZZW