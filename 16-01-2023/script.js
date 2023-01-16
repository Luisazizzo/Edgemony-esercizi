// Primo esercizio

fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => {
    manipolazioneDAta(data);
  });

const manipolazioneDAta = (data) => {
  data.forEach((item) => {
    console.log("-----------");
    console.log(`Titolo: ${item.title}`);
    console.log("-----------");
    console.log(`Descrizione: ${item.description}`);
  });
};

// Avanzato

const bodyEl = document.querySelector("body");
const btnEl = document.createElement("button");
btnEl.className = "btn";
btnEl.textContent = "Accedi al mio e-commerce";
const loaderEl = document.createElement("p");
loaderEl.className = "loader";
const containerEl = document.querySelector(".container");

containerEl.append(btnEl, loaderEl);

btnEl.addEventListener("click", () => {
  loaderEl.textContent = "Loading...";
  btnEl.style = "display: none";

  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      const shoes = data.filter((item) => item.category.name === "Shoes");
      manipolazione(shoes);
    })
    .catch((error) => {
      loaderEl.textContent = "C'è stato un errore";
      console.log(error);
    });
});

const manipolazione = (array) => {
  loaderEl.remove();

  array.forEach((item) => {
    const divContainer = document.createElement("div");
    divContainer.className = "card";

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", item.images[0]);
    imgEl.className = "img";
    const titleElement = document.createElement("h1");
    titleElement.textContent = item.title;

    const indexContainer = document.createElement("p");
    indexContainer.textContent = "€: " + item.price;

    const btnCar = document.createElement("button");
    btnCar.textContent = "Aggiungi al carrello";
    btnCar.className = "btn-car";

    divContainer.append(imgEl, titleElement, indexContainer, btnCar);
    containerEl.appendChild(divContainer);
  });
};
