const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/userApi/userApi.json`, "utf-8");
  const objData = JSON.parse(data);

  if (req.url == "/home") {
    res.end("Home Page");
  } else if (req.url == "/about") {
    res.end("About Page");
  } else if (req.url == "/contact") {
    res.end("Contact Page");
  } else if (req.url == "/userapi") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(objData[4].body);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 error page. Page doesn't exist</h1>");
  }
});

server.listen(4000, "127.0.0.1", () => {
  console.log("listening to the port no 4000");
});
