const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Primo esercizio");
  else if (req.url === "/studenti") res.end("Primo esercizio di Node.js");
  else if (req.url === "/corsi") res.end("Esercizio del giorno");
  else {
    res.writeHead(404);
    res.end("Errore! Pagina non trovata");
  }
});

server.listen(3000);
