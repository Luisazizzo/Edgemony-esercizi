const images = [
  {
    id: 0,
    title: "gattino1",
    url: "https://www.focusjunior.it/content/uploads/2018/08/gattini-foto-25.jpg",
  },
  {
    id: 1,
    title: "gattino2",
    url: "https://manualefaidate.com/files/593/gattino_cucciolo_gatto_rosso.jpg",
  },
  {
    id: 2,
    title: "gattino3",
    url: "https://www.zooplus.it/magazine/wp-content/uploads/2020/10/1-37-768x512.jpg",
  },
];

const bodyEl = document.querySelector("body");
const divEl = document.createElement("div");
divEl.className = "div_carousel";

const imgEl = document.createElement("img");
imgEl.setAttribute("src", images[0].url);
imgEl.className = "img_carosel";

const divContainerPall = document.createElement("div");
divContainerPall.className = "container";

const palliniEl1 = document.createElement("div");
palliniEl1.className = "pallini";

const palliniEl2 = document.createElement("div");
palliniEl2.className = "pallini";

const palliniEl3 = document.createElement("div");
palliniEl3.className = "pallini";

divEl.appendChild(imgEl);

divContainerPall.append(palliniEl1, palliniEl2, palliniEl3);

bodyEl.append(divEl, divContainerPall);

palliniEl1.addEventListener("click", () => {
  palliniEl1.style.background = "rgb(255, 111, 0)";
  palliniEl2.style.background = "none";
  palliniEl3.style.background = "none";
  imgEl.setAttribute("src", images[0].url);
});

palliniEl2.addEventListener("click", () => {
  palliniEl2.style.background = "rgb(255, 111, 0)";
  palliniEl1.style.background = "none";
  palliniEl3.style.background = "none";
  imgEl.setAttribute("src", images[1].url);
});

palliniEl3.addEventListener("click", () => {
  palliniEl3.style.background = "rgb(255, 111, 0)";
  palliniEl2.style.background = "none";
  palliniEl1.style.background = "none";
  imgEl.setAttribute("src", images[2].url);
});
