import myJson from "./mock.json" assert { type: "json" };

const cE = (type) => document.createElement(type);

const containerEl = document.querySelector(".container");

const userCard = (json) => {
  json.forEach((data) => {
    const wrapper = cE("div");
    wrapper.className = "wrapper";
    const wrapperTitle = cE("h1");
    wrapperTitle.textContent = "Carte d'identità della mia famiglia";
    wrapperTitle.className = "title";
    const wrapperEl = cE("div");
    wrapperEl.className = "wrapper-el";
    const wrapperImg = cE("div");
    wrapperImg.className = "wrapper-img";
    const imgEl = cE("img");
    imgEl.setAttribute("src", data.image);
    imgEl.className = "img-el";
    const wrapperInfo = cE("div");
    wrapperInfo.className = "wrapper-info";
    const firstNameEl = cE("p");
    firstNameEl.textContent = "Nome:";
    const firstNameElDue = cE("span");
    firstNameElDue.textContent = data.nome;
    const lastNameEl = cE("p");
    lastNameEl.textContent = "Cognome:";
    const lastNameElDue = cE("span");
    lastNameElDue.textContent = data.cognome;
    const genderEl = cE("p");
    genderEl.textContent = "Sesso:";
    const genderElDue = cE("span");
    genderElDue.textContent = data.sesso;
    const birthDateEl = cE("p");
    birthDateEl.textContent = "Anno di nascita:";
    const birthElDue = cE("span");
    birthElDue.textContent = data.annoDiNascita;
    const addressEl = cE("p");
    addressEl.textContent = "Occhi:";
    const addressElDue = cE("span");
    addressElDue.textContent = data.occhi;
    const addressElCity = cE("p");
    addressElCity.textContent = "Capelli:";
    const addressElCityDue = cE("span");
    addressElCityDue.textContent = data.capelli;

    if (data.sesso === "F") {
      wrapper.classList.add("bg-color");
    }

    wrapperInfo.append(
      firstNameEl,
      firstNameElDue,
      lastNameEl,
      lastNameElDue,
      genderEl,
      genderElDue,
      birthDateEl,
      birthElDue,
      addressEl,
      addressElDue,
      addressElCity,
      addressElCityDue
    );
    wrapperImg.appendChild(imgEl);
    wrapperEl.append(wrapperImg, wrapperInfo);
    wrapper.append(wrapperTitle, wrapperEl);
    containerEl.appendChild(wrapper);
  });
};

userCard(myJson);
