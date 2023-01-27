import { GET, GET_SEARCH } from "./api.js";
import { createCard } from "./utils.js";

const formEl = document.querySelector("#form");
const containerElSerarch = document.querySelector(".container-search");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target[0].value.trim() !== "") {
    const inputValue = event.target[0].value.trim();
    inputValue.replaceAll(" ", "%20");

    GET_SEARCH(inputValue.replaceAll(" ", "%20")).then((data) =>
      data.results.forEach((item) =>
        containerElSerarch.appendChild(createCard(item))
      )
    );
  }
});
