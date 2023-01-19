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
const categoryForm = document.querySelector("#categoryForm");
const catName = document.querySelector("#categoryName");
const catImage = document.querySelector("#categoryImage");

divInfo.append(paragrafoInfo, btnInfo);
body.appendChild(divInfo);

categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  divInfo.style = "display: block";

  const newObj = {
    name: catName.value,
    image: catImage.value,
  };
  console.log(newObj);
  aggiuntaPost(newObj, "categories");
});

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

  aggiuntaPost(newObj, "products");
});

const aggiuntaPost = (obj, param) => {
  console.log(obj);
  fetch("https://api.escuelajs.co/api/v1/" + param, {
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
      catName.value = "";
      catImage.value = "";
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
