const express = require("express");
const app = express();
const PORT = 4000;
const hbs = require("hbs");

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    titolo: "Home Page",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    titolo: "About",
  });
});

app.get("/contatti", (req, res) => {
  res.render("contatti", {
    titolo: "Contatti",
  });
});

app.get("/formazione", (req, res) => {
  res.render("formazione", {
    titolo: "Formazione",
  });
});

app.get("/web-design", (req, res) => {
  res.render("web-design", {
    titolo: "Web Design",
  });
});

app.get("/*", (req, res) => {
  res.render("error", {
    titolo: "Errore",
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo su ${PORT}`);
});
