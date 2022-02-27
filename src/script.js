let now = new Date();
let hours = now.getHours();
if(hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if(minutes < 10) {
  minutes = `0${minutes}`;
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let day = days[now.getDay()];

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `${day}, ${hours}:${minutes}`;



function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#input-search").value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput}`;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&apiid=${apiKey}`).then(showCurrentWeather);
}

function showCurrentWeather(response) {
event.preventDefault();
  let h1 = document.querySelector("h1");
  let changedCity = response.data.name;
  h1.innerHTML = `${changedCity}`;

  let temperature = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `${temperature}`;

  let conditions = response.data.weather[0].main;
  let currentCond = document.querySelector("#current-conditions");
  currentCond.innerHTML = `${conditions}`;

  let wind = Math.round(response.data.wind.speed);
  let currentWind = document.querySelector("#current-wind");
  currentWind.innerHTML = `Wind: ${wind}km/hr`;

  let humidity = response.data.main.humidity;
  let currenthumidity = document.querySelector("#current-humidity");
  currenthumidity.innerHTML = `Humidity: ${humidity}%`;

  
  let weatherIcon = document.querySelector("#main-weather-icon");
  weatherIcon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  weatherIcon.setAttribute("alt", response.data.weather[0].description);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

function currentLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentWeather);

}

function locationClick(event) {
  event.preventDefault();
  console.log(event);
  navigator.geolocation.getCurrentPosition(currentLocation);
}

let locationButton = document.querySelector("#find-current-location");
locationButton.addEventListener("click", locationClick);