const express = require("express");
const app = express();
const PORT = 4000;
const hbs = require("hbs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render(
    "home",
    (myPreference = {
      nome: "Luisa",
      color: "Rosa",
      pet: "Cane",
      season: "Estate",
    })
  );
});

app.get("/about", (req, res) => {
  res.render("about", {
    titolo: "Node js",
  });
});

app.get("/login", (req, res) => {
  res.render("login", {
    titolo: "Pagina login",
  });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).render("login", {
      risposta: `Benvenuta ${name}`,
    });
  }
});

app.get("/mi-presento", (req, res) => {
  res.render("mi-presento", {
    titolo: "Form presentazione",
  });
});

app.listen(PORT, () => {
  console.log(`Server attivo su ${PORT}`);
});
