import { aggiuntaPost, eliminaPost, modificaPost } from "./fetch.js";

const body = document.querySelector("body");
const formProducts = document.querySelector("#formProducts");
const divInfo = document.createElement("div");
divInfo.className = "info";
const paragrafoInfo = document.createElement("p");
paragrafoInfo.className = "info-p";
const btnInfo = document.createElement("button");
btnInfo.className = "info-btn";
btnInfo.textContent = "x";
const categoryForm = document.querySelector("#categoryForm");
const deleteForm = document.querySelector("#deleteDroduct");
const modificaForm = document.querySelector("#formModifica");

divInfo.append(paragrafoInfo, btnInfo);
body.appendChild(divInfo);

categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  divInfo.style = "display: block";

  const newObj = {
    name: event.target[0].value,
    image: event.target[1].value,
  };
  console.log(newObj);
  aggiuntaPost(newObj, "categories")
    .then((data) => {
      console.log(data);
      categoryForm.reset();
      if (data.statusCode >= 400 && data.statusCode < 500) {
        paragrafoInfo.textContent = "C'è stato un errore";
      } else {
        paragrafoInfo.textContent = "Elemento aggiunto";
      }
    })
    .catch((e) => {
      paragrafoInfo.textContent = "C'è stato un errore";
      console.log(e);
    });
});

formProducts.addEventListener("submit", (event) => {
  event.preventDefault();

  divInfo.style = "display: block";

  const newObj = {
    title: event.target[0].value,
    price: parseInt(event.target[1].value),
    categoryId: parseInt(event.target[2].value),
    images: [event.target[3].value],
    description: event.target[4].value,
  };
  console.log(newObj);
  aggiuntaPost(newObj, "products")
    .then((data) => {
      console.log(data);
      formProducts.reset();
      if (data.statusCode >= 400 && data.statusCode < 500) {
        paragrafoInfo.textContent = "C'è stato un errore";
      } else {
        paragrafoInfo.textContent = "Elemento aggiunto";
      }
    })
    .catch((e) => {
      paragrafoInfo.textContent = "C'è stato un errore";
      console.log(e);
    });
});

btnInfo.addEventListener("click", () => {
  divInfo.remove();
});

deleteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  divInfo.style = "display: block";

  eliminaPost("products", event.target[0].value)
    .then((data) => {
      console.log(data);
      deleteForm.value = "";
      if (data != true) {
        paragrafoInfo.textContent = "C'è stato un errore";
      } else {
        paragrafoInfo.textContent = "Elemento Eliminato";
      }
    })
    .catch((e) => {
      console.log("ERRORE: ", e);
    });
});

modificaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  divInfo.style = "display: block";

  const newObj = {
    title: event.target[1].value,
    price: parseInt(event.target[2].value),
    categoryId: parseInt(event.target[3].value),
    images: [event.target[4].value],
    description: event.target[5].value,
  };

  modificaPost(newObj, event.target[0].value)
    .then((data) => {
      modificaForm.reset();
      if (data.statusCode >= 400 && data.statusCode < 500) {
        paragrafoInfo.textContent = "C'è stato un errore";
      } else {
        paragrafoInfo.textContent = "Elemento modificato";
      }
    })
    .catch((e) => {
      paragrafoInfo.textContent = "C'è stato un errore";
      console.log(e);
    });
});
