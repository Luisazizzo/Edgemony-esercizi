const GET = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data;
};

const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const bloodGroupRange = (value, userBlood) => {
  const wrapperEl = cE("div");
  wrapperEl.className = "status-container";
  const textEl = cE("p");
  textEl.textContent = value;
  const statusEl = cE("div");
  statusEl.className = "statur-bar";
  statusEl.style.height = `${userBlood * 50}px`;

  wrapperEl.append(textEl, statusEl);
  return wrapperEl;
};

const containerEl = qS(".container");

let firstStage, secondStage, thirdStage, fourthStage, fifthStage, sixthStage;
let arrayUser = [];

GET()
  .then(({ users }) => {
    const userBloods = users.map((user) => user.bloodGroup);

    firstStage = {
      blood: userBloods.filter((bloodGroup) => bloodGroup === "A−"),
      text: "A−",
    };
    secondStage = {
      blood: userBloods.filter((bloodGroup) => bloodGroup === "O+"),
      text: "0+",
    };
    thirdStage = {
      blood: userBloods.filter((bloodGroup) => bloodGroup === "B+"),
      text: "B+",
    };
    fourthStage = {
      blood: userBloods.filter((bloodGroup) => bloodGroup === "A+"),
      text: "A+",
    };
    fifthStage = {
      blood: userBloods.filter((bloodGroup) => bloodGroup === "AB−"),
      text: "AB-",
    };
    sixthStage = {
      blood: userBloods.filter((bloodGroup) => bloodGroup === "O−"),
      text: "0-",
    };
    arrayUser.push(
      firstStage,
      secondStage,
      thirdStage,
      fourthStage,
      fifthStage,
      sixthStage
    );
  })
  .then(() => {
    arrayUser.map((stage) =>
      containerEl.appendChild(bloodGroupRange(stage.text, stage.blood.length))
    );
  });
