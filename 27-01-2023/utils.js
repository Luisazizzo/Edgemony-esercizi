const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const createCard = (data) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  const imgCardEl = document.createElement("img");
  imgCardEl.setAttribute("src", `${IMG_BASE_URL}${data.poster_path}`);
  imgCardEl.className = "img-card";

  cardEl.appendChild(imgCardEl);
  return cardEl;
};
export { createCard };
