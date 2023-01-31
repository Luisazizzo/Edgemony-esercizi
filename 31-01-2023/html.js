const http = require("http");
const fs = require("fs");

const prodottiPage = fs.readFileSync("prodotti.html");
const clientePage = fs.readFileSync("cliente.html");
const style = fs.readFileSync("style.css");

let messaggio = `<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="./style.css" />
</head>
<body>
<h1>HOME PAGE</h1>
<div>
<a href="prodotti">Prodotti</a>
<a href="cliente">Cliente</a>
</div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end(messaggio);
  else if (req.url === "/prodotti") res.end(prodottiPage);
  else if (req.url === "/cliente") res.end(clientePage);
  else if (req.url === "/style.css") res.end(style);
  else {
    res.writeHead(404);
    res.end("Sorry, not found");
  }
});

server.listen(3001);
