const background = new Array(6).fill().map((value, index) => {
  return `${index}.jpg`;
});
const selectBg = background[Math.floor(Math.random() * background.length)];
const bgImg = document.createElement("img");
bgImg.src = `img/${selectBg}`;

const container = document.querySelector(".container");
container.appendChild(bgImg);

const modeBtn = document.querySelector(".mode");
const card = document.querySelector(".card-light");
const MODE = "mode";
const LIGHT = "card-light";
const DARK = "card-dark";
let isMode = LIGHT;

function saveMode() {
  localStorage.setItem(MODE, isMode);
}

function handleMode() {
  if (modeBtn.innerText === "🌙") {
    isMode = DARK;
    card.classList.add(isMode);
    card.classList.remove(LIGHT);
    modeBtn.innerText = "🌞";
    saveMode();
  } else if (modeBtn.innerText === "🌞") {
    isMode = LIGHT;
    card.classList.add(LIGHT);
    card.classList.remove(DARK);
    modeBtn.innerText = "🌙";
    saveMode();
  }
}

modeBtn.addEventListener("click", handleMode);

const nowMode = localStorage.getItem(MODE);
if (nowMode) {
  card.classList.remove(isMode);
  card.classList.add(nowMode);
  if (nowMode === LIGHT) {
    modeBtn.innerText = "🌙";
  } else {
    modeBtn.innerText = "🌞";
  }
}
