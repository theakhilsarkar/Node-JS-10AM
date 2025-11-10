import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`<h1>Home Page</h1>
      <p>this is para..</p>  
        `);
  }
});

server.listen(3000, () =>
  console.log("server started on http://localhost:3000")
);

