const express = require("express");
const articoli = require("./articoli");
const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name === "luisa") {
    return res.status(200).send(`Benvenuto/a ${name}`);
  } else {
    return res.status(400).send(`${name} non sei autorizzato`);
  }
});

app.put("/api/articoli/:id", (req, res) => {
  const { id } = req.params;
  const { title, tags } = req.body;
  console.log(req.body);

  const articolo = articoli.find((articolo) => articolo.id === Number(id));

  if (!articolo) {
    return res
      .status(400)
      .json({ success: false, msg: `Non c'è nessuno con id: ${id}` });
  }
  const newArticolo = articoli.map((articolo) => {
    if (articolo.id === Number(id)) {
      articolo.title = title;
      articolo.tags = [...articolo.tags, tags];
    }
    return articolo;
  });
  res.status(200).json({ success: true, data: newArticolo });
});
app.delete("/api/articoli/:id", (req, res) => {
  const articolo = articoli.find(
    (articolo) => articolo.id === Number(req.params.id)
  );

  if (!articolo) {
    return res.status(400).json({
      success: false,
      msg: `Non c'è nessuno con id: ${req.params.id}`,
    });
  }
  const newArticolo = articoli.filter(
    (articolo) => articolo.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newArticolo });
});

app.listen(PORT, () => {
  console.log(`Server attivo alla porta ${PORT}`);
});
