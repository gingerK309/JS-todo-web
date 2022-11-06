const weatherInfo = document.querySelector(".weather");
const API_KEY = "eb64197db18eabcd24b6f750bf2847e8";

function onGeoFind(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const place = data.name;
      const temp = data.main.temp.toString().split(".")[0];
      const weather = data.weather[0].main;
      weatherInfo.innerText = `📍 ${place} - ${weather} / ${temp}°C`;
    });
}
function onGeoError() {
  alert("위치 정보를 얻는데 실패했어요.");
}

navigator.geolocation.getCurrentPosition(onGeoFind, onGeoError);
