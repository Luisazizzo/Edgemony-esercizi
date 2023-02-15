const MongoClient = require("mongodb").MongoClient;
let url =
  "mongodb+srv://luisa:luisa123@cluster0.mcubqj1.mongodb.net/school?retryWrites=true";

// Mi conneto al DB
MongoClient.connect(url)
  .then((db) => {
    accountsDb = db;
    collection = accountsDb.db("school");
    console.log("Database connesso");
  })
  .catch((err) => {
    console.log(err);
  });

// Creo due collection
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  dbase.createCollection("students", (err, res) => {
    if (err) throw err;
    console.log("Collezione creata");
    db.close();
  });
  dbase.createCollection("courses", (err, res) => {
    if (err) throw err;
    console.log("Collezione creata");
    db.close();
  });
});

// Creo
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");

  let studenti = [
    {
      nome: "mario",
      cognome: "rossi",
      matricola: " 0001",
      corso: "informatica",
      esami: ["php", "chimica"],
    },
    {
      nome: "pippo",
      cognome: "cane",
      matricola: " 0002",
      corso: "medicina",
      esami: ["fisica"],
    },
    {
      nome: "minni",
      cognome: "topo",
      matricola: " 0003",
      corso: "igegneriaGestionale",
      esami: ["fisica", "chimica"],
    },
    {
      nome: "coniglio",
      cognome: "bianco",
      matricola: " 0004",
      corso: "ingegneriaBiochimica",
      esami: ["fisica", "chimica"],
    },
    {
      nome: "pluto",
      cognome: "cane",
      matricola: " 0005",
      corso: "letteratura",
      esami: ["fisica", "chimica"],
    },
    {
      nome: "topolino",
      cognome: "mause",
      matricola: " 0006",
      corso: "informatica",
      esami: ["fisica", "chimica"],
    },
  ];
  dbase.collection("students").insertMany(studenti, (err, res) => {
    if (err) throw err;
    console.log(`Numero di record inserii: ${res.insertedCount}`);
    db.close();
  });
});

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");

  let corsi = [
    {
      nomecorso: "informatica",
      materia: "informatica",
      docenti: "pino-cammino",
    },
    {
      nomecorso: "medicina",
      materia: "reumatologia",
      docenti: "pinco-pallo",
    },
    {
      nomecorso: "letteratura",
      materia: "lettere",
      docenti: "peter-griffin",
    },
    {
      nomecorso: "ingegneria",
      materia: "ingegneria",
      docenti: "sotutto-io",
    },
  ];
  dbase.collection("courses").insertMany(corsi, (err, res) => {
    if (err) throw err;
    console.log(`Numero di record inserii: ${res.insertedCount}`);
    db.close();
  });
});

// Leggo
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  dbase
    .collection("students")
    .find({})
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  dbase
    .collection("courses")
    .find({})
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});

// Aggiorno
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  let query = { matricola: "0002" };
  let newValue = { $set: { esami: ["chimica"] } };

  dbase.collection("students").updateOne(query, newValue, function (err, res) {
    if (err) throw err;
    console.log(`dati aggiornati`);
    db.close();
  });
});

// Cancello
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbase = db.db("school");
  let query = { matricola: "0004" };

  dbase.collection("students").deleteMany(query, function (err, res) {
    if (err) throw err;
    console.log(`${ogj.result} cancellato`);
    db.close();
  });
});
