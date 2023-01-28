import { GET } from "./api.js";
import { createCard } from "./utils.js";

const popularEl = document.querySelector(".poppular");
const topRatedEl = document.querySelector(".top-rate");
const newTodayEl = document.querySelector(".new-today");

Promise.all([
  GET("movie", "popular"),
  GET("movie", "top_rated"),
  GET("movie", "upcoming"),
]).then((data) => {
  data[0].results.forEach((serie) => popularEl.appendChild(createCard(serie)));
  data[1].results.forEach((serie) => topRatedEl.appendChild(createCard(serie)));
  data[2].results.forEach((serie) => newTodayEl.appendChild(createCard(serie)));
});
