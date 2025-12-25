import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Express JS");
});

app.get("/about", (req, res) => {
  res.send("this is about page !");
});

app.get("/about/user", (req, res) => {
  res.send("this is about/user page");
});

app.get("/contact", (req, res) => {
  res.send("this is contact page");
});

app.post("/api/post", (req, res) => {
  res.send("this is post request !!");
});

app.get("/api/get", (req, res) => {
  res.json({ name: "Boss", role: "Trainer", city: "Surat" });
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
