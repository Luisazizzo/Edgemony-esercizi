const express = require("express");
const session = require("cookie-session");
const bodyParser = require("body-parser");
const app = express();
const PORT = 4000;
const hbs = require("hbs");

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));
app.use(session({ secret: "la mia sessione" }));
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", (req, res) => {
  if (!req.body.name || !req.body.password) {
    res.status(400);
    res.render("signup", {
      message: "Aggiungi i dati richiesti",
    });
  } else {
    let name = "Luisa";
    let password = "pippo123";
    let user = { name: name, password: password };

    if (name == req.body.name && password == req.body.password) {
      req.session.user = user;
      res.redirect("/private");
    } else {
      res.redirect("/warning");
    }
  }
});

function checkPage(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/warning");
  }
}

app.get("/private", checkPage, (req, res) => {
  res.render("private");
});

app.get("/warning", (req, res) => {
  res.render("warning");
});

app.get("/logout", (req, res) => {
  req.session = null;
  res.render("signup");
});

app.get("/*", (req, res) => {
  res.render("error", {
    titolo: "Errore",
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo su ${PORT}`);
});
