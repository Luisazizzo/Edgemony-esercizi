const mongoose = require("mongoose");

//sto creando un oggetto della classe schema con il quale gestisco i miei dati
var notaSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  text: {
    type: String,
  },
  age: {
    type: String,
  },
  nascita: {
    type: String,
  },
  sesso: {
    type: String,
  },
});

mongoose.model("notaModel", notaSchema);
