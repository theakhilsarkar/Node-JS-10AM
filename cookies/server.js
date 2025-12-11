import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

// user information stored in db
const USER = { email: "admin@gmail.com", password: 123456 };

// middleware to protect route
const isAuthenticated = (req, res, next) => {
  const auth = req.cookies.auth;
  if (auth) {
    next();
  } else {
    res.status(401).json({ message: "Please login first !!" });
  }
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email == USER.email && password == USER.password) {
    res.cookie("auth", true, { httpOnly: true, maxAge: 1000 * 60 * 60 });
    res.json({ message: "Login Successfull !!" });
  } else {
    res.status(401).json({ message: "Invalid Credential !" });
  }
});

app.get("/home", isAuthenticated, (req, res) => {
  res.json({ message: "Home Page" });
});

app.listen(4000, () => {
  console.log("server started !!");
});





// FTP-SEO-Hosting
// dsa

// home.html
// www.yourdomainname.com/home

// http://localhost:5173/
// 
// https://www.swiggy.com/