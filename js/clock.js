const clock = document.querySelector(".clock");
const today = document.querySelector(".today");
const checkAMorPM = document.querySelector(".am-or-pm");

function getDayOfWeek() {
  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const dayOfWeek = week[new Date().getDay()];
  return dayOfWeek;
}

function getTimer() {
  const date = new Date();
  const month = (date.getMonth() + 1).toString();
  const dayOfWeek = getDayOfWeek();
  const day = date.getDate().toString();
  today.innerText = `${month}월 ${day}일 ${dayOfWeek}`;
  const hours = date.getHours();
  const printHours = hours >= 13 ? (hours % 12).toString() : hours.toString();
  const AMorPM = hours >= 12 ? "오후" : "오전";
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  checkAMorPM.innerText = `${AMorPM} `;
  clock.innerText = `${printHours}:${minutes}:${seconds}`;
}
getTimer();
setInterval(getTimer, 1000);
