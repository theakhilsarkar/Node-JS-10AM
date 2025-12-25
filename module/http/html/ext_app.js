// import http from "http";
// import fs from "fs";
// import path from "path";

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const filePath = path.join(__dirname, "index.html");
    console.log(filePath);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end("Internal Sever Erro - 500");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 Page not found!");
  }
});

// http://localhost:3000/

server.listen(4000, () =>
  console.log("server started on http://localhost:4000")
);

