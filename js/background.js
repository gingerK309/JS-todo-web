const background = new Array(6).fill().map((value, index) => {
  return `${index}.jpg`;
});
const selectBg = background[Math.floor(Math.random() * background.length)];
const bgImg = document.createElement("img");
bgImg.src = `img/${selectBg}`;

const container = document.querySelector(".container");
container.appendChild(bgImg);
