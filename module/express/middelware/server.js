import express from "express";
const app = express();

// client -> req -> api -> middleware(next) -> server

// after geting request
// 1. make sure this request is valid.(middelware)
// 2. send response according to request.(routes)

// 1. application middleware
//    -> process/validation which you want to apply on whole app.

// 1. loging of request - store all logging details in file using fs module.

app.use((req, res, next) => {
  const date = new Date();
  console.log(
    `user visited by ${req.method} method on localhost:4000${
      req.url
    } route at ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  );
  next(); // access pass
});

// 2. route level middleware - apply on specific route
// localhost:4000/admin?role=admin
// admin cant access admin page outside working hours. (09am to 6pm)
const checkUser = (req, res, next) => {
  const date = new Date();
  if (req.query.role == "admin") {
    if (date.getHours() >= 9 && date.getHours() <= 18) {
      next(); // access pased to admin route
    } else {
      res.send("Admin not allow to work after working hours, overtime baned");
    }
  } else {
    res.status(403).send("you are not admin !");
  }
};

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

// route level middleware
app.get("/admin", checkUser, (req, res) => {
  res.send("Admin Page");
});

app.listen(4000, () => {
  console.log("server started !");
});

// home search reel message notification profile
// 

// ankit,roshani,deep,

// CREATE TABLE table_name (colum1 datatype colum2 datatype....);