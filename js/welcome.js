const weatherInfo = document.querySelector(".weather");
const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = document.querySelector("button");
const logOn = document.querySelector(".log-on");
const HIDDEN_CLASS_NAME = "hidden";
const USER_NAME = "name";
const API_KEY = "eb64197db18eabcd24b6f750bf2847e8";

function onGeoFind(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const place = data.name;
      const temp = data.main.temp;
      const weather = data.weather[0].main;
      weatherInfo.innerText = `📌\t ${place} @ ${weather} | ${temp}°C :) `;
    });
}
function onGeoError() {
  alert("위치 정보를 얻는데 실패했어요.");
}

navigator.geolocation.getCurrentPosition(onGeoFind, onGeoError);

function sayWelcome(USER_NAME) {
  logOn.innerText = `어서오세요, ${USER_NAME}님! 오늘 하루도 힘내세요 :D`;
  logOn.classList.remove(HIDDEN_CLASS_NAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS_NAME);
  localStorage.setItem(USER_NAME, username);
  sayWelcome(username);
}

const saveUsername = localStorage.getItem(USER_NAME);
if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS_NAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  navigator.geolocation.getCurrentPosition(onGeoFind, onGeoError);
  sayWelcome(saveUsername);
}
