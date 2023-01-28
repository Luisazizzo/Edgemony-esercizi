import { GET } from "./api.js";

const cE = (type) => document.createElement(type);

let arrayUser;

const sectionInput = document.querySelector(".input");
const containerEl = document.querySelector(".container");

const userCard = (data) => {
  const { firstName, lastName, gender, birthDate, image, address } = data;

  const wrapper = cE("div");
  wrapper.className = "wrapper";
  const wrapperTitle = cE("h1");
  wrapperTitle.textContent = "Identification Card";
  wrapperTitle.className = "title";
  const wrapperEl = cE("div");
  wrapperEl.className = "wrapper-el";
  const wrapperImg = cE("div");
  wrapperImg.className = "wrapper-img";
  const imgEl = cE("img");
  imgEl.setAttribute("src", image);
  imgEl.className = "img-el";
  const wrapperInfo = cE("div");
  wrapperInfo.className = "wrapper-info";
  const firstNameEl = cE("p");
  firstNameEl.textContent = "First name:";
  const firstNameElDue = cE("span");
  firstNameElDue.textContent = firstName;
  const lastNameEl = cE("p");
  lastNameEl.textContent = "Last name:";
  const lastNameElDue = cE("span");
  lastNameElDue.textContent = lastName;
  const genderEl = cE("p");
  genderEl.textContent = "Gender:";
  const genderElDue = cE("span");
  genderElDue.textContent = gender;
  const birthDateEl = cE("p");
  birthDateEl.textContent = "Birth Date:";
  const birthElDue = cE("span");
  birthElDue.textContent = birthDate;
  const addressEl = cE("p");
  addressEl.textContent = "Address:";
  const addressElDue = cE("span");
  addressElDue.textContent = address.address;
  const addressElCity = cE("p");
  addressElCity.textContent = "City:";
  const addressElCityDue = cE("span");
  addressElCityDue.textContent = address.city;

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
};

GET().then((data) => {
  inputCreator();
  arrayUser = data.users;
  data.users.forEach((user) => {
    userCard(user);
  });
});

const deleteAllCards = () => {
  const allCards = document.querySelectorAll(".wrapper");
  allCards.forEach((item) => item.remove());
};

const inputCreator = () => {
  const searchInputEl = cE("input");

  searchInputEl.addEventListener("input", (e) => {
    deleteAllCards();
    let searchedValue = e.target.value;
    arrayUser
      .filter(
        (item) =>
          item.firstName.toLowerCase().includes(searchedValue.toLowerCase()) ||
          item.lastName.toLowerCase().includes(searchedValue.toLowerCase())
      )
      .forEach((user) => userCard(user));
  });
  sectionInput.appendChild(searchInputEl);
};
