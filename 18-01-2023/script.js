const bodyEl = document.querySelector("body");
const loaderEl = document.createElement("p");
loaderEl.className = "loader";
const containerEl = document.querySelector(".container");
const carrelloEl = document.querySelector(".carrello");
const tendinaEl = document.querySelector(".tendina-menu");

containerEl.appendChild(loaderEl);

loaderEl.textContent = "Loading...";

carrelloEl.addEventListener("click", () => {
  tendinaEl.classList.toggle("show");
});

fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) => {
      manipolazione(element);
    })
  )
  .catch((error) => {
    loaderEl.textContent = "C'è stato un errore";
    console.log(error);
  });

const carrelloArray = [];

const manipolazione = (item) => {
  loaderEl.remove();
  const divContainer = document.createElement("div");
  divContainer.className = "card";

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", item.images[0]);
  imgEl.className = "img";

  const titleElement = document.createElement("h1");
  titleElement.textContent = item.title.slice(0, 11);

  const descriEl = document.createElement("p");
  descriEl.className = "description";
  descriEl.textContent = item.description.slice(0, 31);

  const priceEl = document.createElement("p");
  priceEl.textContent = "€ " + item.price;

  const btnCar = document.createElement("button");
  btnCar.textContent = "Aggiungi al carrello";
  btnCar.className = "btn-car";

  btnCar.addEventListener("click", () => {
    carrelloArray.push(item);
    alert("Hai aggiungo un prodotto nel carrello");
    aggiuntaProductcs();
  });

  divContainer.append(imgEl, titleElement, descriEl, priceEl, btnCar);
  containerEl.appendChild(divContainer);
};

const aggiuntaProductcs = () => {
  tendinaEl.innerHTML = "";
  carrelloArray.forEach((item, index) => {
    const divCart = document.createElement("div");
    divCart.className = "luisa";
    const pEl = document.createElement("p");
    pEl.textContent = `${item.title} € ${item.price}`;
    const deleteEl = document.createElement("button");
    deleteEl.textContent = "x";
    deleteEl.className = "delete";

    divCart.append(pEl, deleteEl);
    tendinaEl.appendChild(divCart);

    deleteEl.addEventListener("click", () => {
      divCart.remove();
      carrelloArray.splice(index, 1);
    });
  });
};
