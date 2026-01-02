import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

const app = express();

app.use(express.json());
app.use(cookieParser());

const USER = {
    email: "admin@gmail.com",
    password: "admin@123",
};

app.post("/signin", (req, res) => {
    try {
        const { email, password } = req.body;
        if (email == USER.email && password == USER.password) {
            // token generate
            const token = jwt.sign({ email: email }, "!@#$%^&*", { expiresIn: "1h" }); // token valid till 1 hour.
            // token store in cookies
            res.cookie("auth_token", token, { maxAge: 1000 * 60 * 60, httpOnly: true });
            res.json({ message: "signin successfully !!" });
        } else {
            res.status(400).json({ message: "invalid credential !!" });
        }
    } catch (err) {
        res.json({ message: "signin failed !" });
    }
})

const verifyToken = (req, res, next) => {
    // param,query,body(raw,form-data)
    // header - auth
    // req.headers
    // const bToken = req.headers.authorization;
    // const bArray = bToken.split(" ");
    // const token = bArray[1];
    try {
        // const token = req.headers.authorization.split(" ")[1];
        // const token = req.cookies.auth_token;
        const decoded = jwt.verify(token, "!@#$%^&*"); // email
        req.user = decoded; // req.user = email
        next();
    } catch (err) {
        res.json({ message: "unauthorized user !!" });
    }
}

app.get("/home", verifyToken, (req, res) => {
    res.json({ message: "token verified !", email: req.user })
});


app.listen(4000, () => {
    console.log("server started !");
})

// owner