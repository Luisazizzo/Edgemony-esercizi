const bodyEl = document.querySelector("body");
const loaderEl = document.createElement("p");
loaderEl.className = "loader";
const containerEl = document.querySelector("#container");
const containerElDue = document.querySelector("#container2");
const containerEltre = document.querySelector("#container3");
const carrelloEl = document.querySelector(".carrello");
const tendinaElCarrello = document.querySelector(".tendina-carrello");
const menuEl = document.querySelector(".menu");
const pallinoEl = document.querySelector(".pallino");
const listaCart = document.querySelector(".lista-prodotti-cart");

containerEl.appendChild(loaderEl);

loaderEl.textContent = "Loading...";

carrelloEl.addEventListener("click", () => {
  tendinaElCarrello.classList.toggle("show");
});

fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => {
    const maglietta = data.filter((item) => item.category.id === 2);
    const scarpe = data.filter((item) => item.category.id === 3);
    const borse = data.filter((item) => item.category.id === 4);
    manipolazione(maglietta, containerEl);
    manipolazione(scarpe, containerElDue);
    manipolazione(borse, containerEltre);
  })
  .catch((error) => {
    loaderEl.textContent = "C'è stato un errore";
    console.log(error);
  });

const carrelloArray = [];

const manipolazione = (arrayParams, append) => {
  arrayParams.forEach((item) => {
    loaderEl.remove();
    const divContainer = document.createElement("div");
    divContainer.className = "card";

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", item.images[0]);
    imgEl.className = "img";

    const titleElement = document.createElement("h1");
    titleElement.textContent = item.title;

    const descriEl = document.createElement("p");
    descriEl.className = "description";
    descriEl.textContent = item.description.slice(0, 31);

    const priceEl = document.createElement("p");
    priceEl.textContent = "€ " + item.price;

    const btnCar = document.createElement("button");
    btnCar.textContent = "Aggiungi al carrello";
    btnCar.className = "btn-car";

    btnCar.addEventListener("click", () => {
      const newItem = {
        id: item.id,
        images: item.images[0],
        title: item.title,
        price: item.price,
        qty: 1,
      };

      const filtered = carrelloArray.filter((element) => {
        if (element.id === newItem.id) {
          element.qty++;
          return element;
        }
      });

      if (filtered.length === 0) {
        carrelloArray.push(newItem);
      }

      aggiuntaProductcs();
    });

    divContainer.append(imgEl, titleElement, descriEl, priceEl, btnCar);
    append.appendChild(divContainer);
  });
};

const qntCarDiv = document.createElement("div");
qntCarDiv.className = "quantita-car-div";

const qntCarP = document.createElement("p");
qntCarP.textContent = `Elementi nel carrello: 0`;

qntCarP.className = "quantita-car-p";

const totaleEl = document.createElement("p");
totaleEl.textContent = `Totole: € 0`;

const btnCash = document.createElement("button");
btnCash.textContent = "Vai al pagamento";
btnCash.className = "pagamento-btn";

qntCarDiv.append(qntCarP, totaleEl, btnCash);
tendinaElCarrello.appendChild(qntCarDiv);

const aggiuntaProductcs = () => {
  let sommaQnt = 0;

  let totalPrice = 0;

  listaCart.innerHTML = "";

  pallinoEl.innerHTML = "0";

  qntCarP.textContent = `Elementi nel carrello: 0`;

  carrelloArray.forEach((item, index) => {
    totalPrice = totalPrice + item.price;
    sommaQnt = sommaQnt + item.qty;

    pallinoEl.textContent = sommaQnt;
    qntCarP.textContent = `Elementi nel carrello: ${sommaQnt}`;

    const divCart = document.createElement("div");
    divCart.className = "luisa";

    const imgCar = document.createElement("img");
    imgCar.setAttribute("src", item.images);
    imgCar.className = "img-car";
    const pEl = document.createElement("p");
    pEl.textContent = `${item.title} € ${item.price}`;

    const qnt = document.createElement("p");
    qnt.textContent = item.qty;
    qnt.className = "quantita";

    const deleteEl = document.createElement("button");
    deleteEl.textContent = "x";
    deleteEl.className = "delete";

    divCart.append(imgCar, pEl, qnt, deleteEl);
    listaCart.appendChild(divCart);

    deleteEl.addEventListener("click", () => {
      divCart.remove();
      carrelloArray.splice(index, 1);
      aggiuntaProductcs();
    });
  });
  totaleEl.textContent = `Totole: € ${totalPrice}`;
};
