const clock = document.querySelector(".clock");
const today = document.querySelector(".today");

function getTimer() {
  const date = new Date();
  const year = date.getFullYear().toString().padStart(2, "0");
  const month = date.getMonth().toString().padStart(2, "0");
  const day = date.getDay().toString().padStart(2, "0");
  today.innerText = `${year}/${month}/${day}`;
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getTimer();
setInterval(getTimer, 1000);
