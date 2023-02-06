const express = require("express");
const app = express();
const libri = require("./libri");
const authorize = require("./auth");
const PORT = 5000;

app.use(express.static("public"));

app.get("/json", (req, res) => {
  res.json(libri);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/products", authorize, (req, res) => {
  const preferiti = libri.filter((book) => book.id <= 5);
  res.json(preferiti);
});

app.listen(PORT, () => {
  console.log(`Server ascolta sulla porta ${PORT}`);
});
