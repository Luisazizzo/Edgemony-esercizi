const bodyEl = document.querySelector("body");
const timerH1 = document.createElement("h1");
timerH1.className = "timer-h1";

const btnClear = document.createElement("button");
btnClear.textContent = "PAUSE";
btnClear.className = "btn-clear";
const btnAvvia = document.createElement("button");
btnAvvia.className = "btn-avvia";
btnAvvia.textContent = "RIPRENDI TIMER";

bodyEl.append(timerH1, btnClear, btnAvvia);

let timer = 11;

let reStart;

const counterCheck = () => {
  if (timer === 0) {
    bodyEl.style.backgroundColor = "pink";

    const imgEl = document.createElement("img");
    imgEl.className = "img-timer";
    imgEl.setAttribute(
      "src",
      "https://i.pinimg.com/originals/3a/0b/88/3a0b88d239400e7fde89726357fe2a12.gif"
    );
    bodyEl.appendChild(imgEl);
    timerH1.textContent = "FINE DEL COUNTDOWN";
    clearInterval(clearIntervalId);
    clearInterval(reStart);
    btnClear.remove();
  } else {
    timer--;
    timerH1.textContent = timer;
  }
};

const clearIntervalId = setInterval(counterCheck, 1000);

btnClear.addEventListener("click", () => {
  clearInterval(clearIntervalId);
  clearInterval(reStart);
  btnClear.style.display = "none";
  btnAvvia.style.display = "block";
});

btnAvvia.addEventListener("click", () => {
  reStart = setInterval(counterCheck, 1000);
  btnAvvia.style.display = "none";
  btnClear.style.display = "block";
});
