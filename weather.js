const weather = document.querySelector(".js-weather");
const COORDS='coords';
const API_KEY = "#";


function getWeather(lat,lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  .then(function(response){
    return response.json();
  }).then(function(json){
   const temp = json.main.temp;
   const place = json.name;
   weather.innerText=`${place}, ${temp}°C`;
  })
}




function saveCoords(coordsObj){
  localStorage.setItem(COORDS,JSON.stringify(coordsObj)); 
}

function getPosition(pos){
 const latitude = pos.coords.latitude;
 const longitude = pos.coords.longitude;
 const coordsObj={
   latitude, longitude
 };
 saveCoords(coordsObj);
 getWeather(latitude,longitude);
}

function error(){
  console.log('Can not access geolocation');
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(getPosition,error,{timeout:5000});
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords===null){
    askForCoords();
  } else{
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude,parseCoords.longitude);
  }
}


function init(){
 loadCoords();
}
init();
