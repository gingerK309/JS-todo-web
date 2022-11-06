const clock = document.querySelector(".clock");
const today = document.querySelector(".today");

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
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getTimer();
setInterval(getTimer, 1000);
