import { products } from "./mocks.js";

const bodyEl = document.querySelector("body");

const heroElement = () => {
  const sectionHeroEl = document.createElement("section");
  sectionHeroEl.className = "hero";

  const imgHeroEl = document.createElement("img");
  imgHeroEl.setAttribute("src", "shop.jpg");
  imgHeroEl.setAttribute("alt", "hero_img");
  imgHeroEl.className = "img_hero";

  const titleHeroEl = document.createElement("h1");
  titleHeroEl.className = "title_hero";
  titleHeroEl.textContent = "Inizia qui il tuo shopping";

  const paragrafoHeroEl = document.createElement("p");
  paragrafoHeroEl.className = "descri_hero";
  paragrafoHeroEl.textContent =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy";

  const title = document.createElement("h2");
  title.textContent = "I nostri prodotti";
  title.className = "titleDue";

  sectionHeroEl.append(imgHeroEl, titleHeroEl, paragrafoHeroEl, title);
  bodyEl.appendChild(sectionHeroEl);
};

heroElement();

const sectionCard = document.createElement("section");
sectionCard.className = "container";

const cardElement = (product) => {
  const divCard = document.createElement("div");
  divCard.className = "card";

  const imgCard = document.createElement("img");
  imgCard.className = "img_card";
  imgCard.setAttribute("src", product.image);
  imgCard.setAttribute("alt", product.description);

  const h2Card = document.createElement("h2");
  h2Card.className = "title_card";
  h2Card.textContent = product.title;

  const price = document.createElement("span");
  price.className = "title_card";
  price.textContent = product.price;

  const btnCard = document.createElement("button");
  btnCard.className = "btn_card";
  btnCard.textContent = "Aggiungi al carrello";

  divCard.append(imgCard, h2Card, price, btnCard);
  sectionCard.appendChild(divCard);
  bodyEl.appendChild(sectionCard);
};

for (let product of products) {
  cardElement(product);
}
