const http = require("http");
const fs = require("fs");

const PORT = 3001;

let articoli = `<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="./style.css" />
</head>
<body>
<h1>Articoli</h1>
<div>
</div>
</body>
</html>`;

let commenti = `<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="./style.css" />
</head>
<body>
<h1>Commenti</h1>
<div>
</div>
</body>
</html>`;

let utenti = `<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="./style.css" />
</head>
<body>
<h1>Utenti</h1>
<div>
</div>
</body>
</html>`;

let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server avviato correttamente");
  } else if (req.url === "/articoli") res.end(articoli);
  else if (req.url === "/commenti") res.end(commenti);
  else if (req.url === "/utenti") res.end(utenti);
  else {
    res.writeHead(404);
    res.end("Sorry, not found");
  }
});

server.listen(PORT);
console.log(`Server connesso alla porta ${PORT}`);
