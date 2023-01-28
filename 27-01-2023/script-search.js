import { GET_SEARCH } from "./api.js";
import { createCard } from "./utils.js";

const containerElSerarch = document.querySelector(".container-search");

const deleteCard = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((item) => item.remove());
};
const searchEl = document.querySelector("#search");
const selectEl = document.querySelector("#change");

searchEl.addEventListener("input", (event) => {
  if (event.target.value.trim() !== "") {
    const inputValue = event.target.value.trim();
    inputValue.replaceAll(" ", "%20");
    deleteCard();

    GET_SEARCH(inputValue.replaceAll(" ", "%20"), selectEl.value).then((data) =>
      data.results.forEach((item) => {
        containerElSerarch.appendChild(createCard(item));
      })
    );
  }
});
