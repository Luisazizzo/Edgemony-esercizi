import { GET, qS, cE } from "./apiUtilis.js";

let dataFetch;

GET("https://dummyjson.com/quotes").then((data) => {
  dataFetch = data.quotes;
  createdCard(data.quotes[0]);
});

const random = () => {
  return Math.floor(Math.random() * dataFetch.length);
};

const bodyEl = qS("body");

const createdCard = (element) => {
  bodyEl.innerHTML = "";
  const divCard = cE("div");
  divCard.className = "content";

  const author = cE("h1");
  author.textContent = element.author;

  const quote = cE("p");
  quote.textContent = element.quote;

  const change = cE("button");
  change.textContent = "Cambia pagina";
  change.className = "btn-change";

  change.addEventListener("click", () => {
    createdCard(dataFetch[random()]);
  });

  divCard.append(author, quote, change);
  bodyEl.appendChild(divCard);
};
