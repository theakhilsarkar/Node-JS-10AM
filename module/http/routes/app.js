import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/profile") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Profile Page");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 Page not found !!");
  }
});

server.listen(3000, () => {
  console.log("server started on port 3000");
});

// 5xx - server
// 4xx - client
// 2xx - success
