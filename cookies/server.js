import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

// user information stored in db
const USER = { email: "admin@gmail.com", password: 123456 };

const isAuthenticated = (req, res, next) => {
  if (req.cookies.auth) {
    next();
  } else {
    res.status(401).json({ message: "Login First to access this site !!" });
  }
}

// middleware to protect route

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


// Blog - articles + auth
// password hash --> 123456
//

// on page seo
// google search engine
//
// user search

// img - alt = best laptop under 50000
// heading - h1,h2,h3
// p
// p --> Heading

// best laptop in 70000
// keywords


// ai --