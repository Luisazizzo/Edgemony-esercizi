const body = document.querySelector("body");
const formProducts = document.querySelector("#formProducts");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputImg = document.querySelector("#img");
const inputDescription = document.querySelector("#description");
const divInfo = document.createElement("div");
divInfo.className = "info";
const paragrafoInfo = document.createElement("p");
paragrafoInfo.className = "info-p";
const btnInfo = document.createElement("button");
btnInfo.className = "info-btn";
btnInfo.textContent = "x";

divInfo.append(paragrafoInfo, btnInfo);
body.appendChild(divInfo);

formProducts.addEventListener("submit", (event) => {
  event.preventDefault();

  divInfo.style = "display: block";

  const newObj = {
    title: inputTitle.value,
    price: parseInt(inputPrice.value),
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value),
    images: [inputImg.value],
  };

  aggiuntaPost(newObj);
});

const aggiuntaPost = (obj) => {
  console.log(obj);
  fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      inputTitle.value = "";
      inputPrice.value = "";
      inputCategory.value = "";
      inputImg.value = "";
      inputDescription.value = "";
      paragrafoInfo.textContent = "Elemento aggiunto";
    })
    .catch((e) => {
      paragrafoInfo.textContent = "C'è stato un errore";
      console.log(e);
    });
};

btnInfo.addEventListener("click", () => {
  divInfo.remove();
});
