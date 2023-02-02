const http = require("http");
const libri = require("./libri");
const fs = require("fs");

const style = fs.readFileSync("style.css");

let server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      let html = fs.readFileSync("index.html");
      res.end(html);
    } else if (req.url === "/chi-sono") {
      res.writeHead(200, { "Content-Type": "text/html" });
      let chiSono = fs.readFileSync("chi-sono.html");
      res.end(chiSono);
    } else if (req.url === "/api/libri") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(libri));
    } else if (req.url === "/style.css") res.end(style);
    else {
      res.writeHead(404);
      res.end("Not found");
    }
  })
  .listen(8181);
