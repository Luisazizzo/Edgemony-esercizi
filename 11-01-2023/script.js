import { quotes } from "./mocks.js";

const body = document.querySelector("body");
const sunClick = document.querySelector(".sole");
const moonClick = document.querySelector(".luna");
const deleteDiv = document.querySelector(".delete");
const aggDiv = document.querySelector(".apri");
const divCard = document.querySelector(".card");
const plusBtn = document.querySelector(".maggiore");
const minusBtn = document.querySelector(".minore");

deleteDiv.addEventListener("click", () => {
  divCard.classList.add("no-show");
  plusBtn.classList.add("no-show");
  minusBtn.classList.add("no-show");
});

aggDiv.addEventListener("click", () => {
  divCard.classList.remove("no-show");
  plusBtn.classList.remove("no-show");
  minusBtn.classList.remove("no-show");
});

moonClick.addEventListener("click", () => {
  body.classList.add("body-dark");
  moonClick.classList.add("display-none");
  sunClick.classList.remove("display-none");
});

sunClick.addEventListener("click", () => {
  body.classList.remove("body-dark");
  sunClick.classList.add("display-none");
  moonClick.classList.remove("display-none");
});

function quoteGen(quoteAuthor, quoteText) {
  const authorH2 = document.querySelector(".author");
  authorH2.textContent = quoteAuthor;

  const testo = document.querySelector(".testo");
  testo.textContent = quoteText;
}

let indice = 0;
quoteGen(quotes[indice].author, quotes[indice].quote);

minusBtn.classList.add("display-none");

plusBtn.addEventListener("click", () => {
  if (indice >= quotes.length - 1) {
    plusBtn.classList.add("display-none");
  } else if (indice < quotes.length - 1) {
    indice++;
    plusBtn.classList.remove("display-none");
    quoteGen(quotes[indice].author, quotes[indice].quote);
  }
  if (indice > 0) {
    minusBtn.classList.remove("display-none");
  }
});

minusBtn.addEventListener("click", () => {
  if (indice <= 0) {
    minusBtn.classList.add("display-none");
  } else if (indice > 0) {
    indice--;
    minusBtn.classList.remove("display-none");
    quoteGen(quotes[indice].author, quotes[indice].quote);
  }
  if (indice < quotes.length - 1) {
    plusBtn.classList.remove("display-none");
  }
});

function quote(quoteAuthor, quoteText) {
  const quoteEl = document.createElement("div");
  const autore = document.createElement("h2");
  const textEl = document.createElement("p");
  const quoteListEl = document.querySelector(".quote-list");

  quoteEl.className = "quote";
  autore.textContent = quoteAuthor;
  textEl.textContent = quoteText;

  quoteEl.append(autore, textEl);
  quoteListEl.appendChild(quoteEl);
}

quotes.forEach((item) => quote(item.author, item.quote));
