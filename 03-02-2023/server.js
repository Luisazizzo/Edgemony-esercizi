const express = require("express");

const app = express();
const PORT = 8181;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/hobby1", (req, res) => {
  res.sendFile(__dirname + "/public/hobby1.html");
});

app.get("/hobby2", (req, res) => {
  res.sendFile(__dirname + "/public/hobby2.html");
});

app.get("/chi-sono", (req, res) => {
  res.sendFile(__dirname + "/public/chi-sono.html");
});

app.get("*", (req, res) => {
  res.send("404 | pagina non trovata");
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
