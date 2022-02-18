function showLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "7217515dc130401eb9daec1124e1a28f";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentData);

  console.log(lat);
  console.log(lon);
}

function locationClick(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}

let locationButton = document.querySelector("#currentButton");
locationButton.addEventListener("click", locationClick);

function inputSearch(event) {
  event.preventDefault();

  let city = document.querySelector("#searchLocation").value;
  citySearch(city);
}

function currentData(response) {
  console.log(response);
  let currentTemp = Math.round(response.data.main.temp);

  let location = document.querySelector(".currentLocation");
  location.innerHTML = response.data.name;

  let temperature = document.querySelector(".temperatureNow");
  temperature.innerHTML = currentTemp;
}

function citySearch(city) {
  let apiKey = "7217515dc130401eb9daec1124e1a28f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentData);
}

let locationSearch = document.querySelector(".header");
locationSearch.addEventListener("submit", inputSearch);









let weather = {
  "paris": {
    temp: 19.7,
    humidity: 80
  },
  "tokyo": {
    temp: 17.3,
    humidity: 50
  },
  "lisbon": {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  "moscow": {
    temp: -5,
    humidity: 20
  }
}

  
let city = prompt("Enter city");
city = city.trim().toLowerCase();


if (weather[city] !== undefined) {
let temperature = weather[city].temp;
let humidity = weather[city].humidity;
  let celsTemperature = Math.round(temperature);
    alert(
        `It is currently ${celsTemperature}℃ in ${city} with a humidity of ${humidity}%`);
   } else {
   alert `Sorry, we don't know the weather for this city, try going to https://www.google.com/weather`;
  }


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




//Week 4 Bonus
function temperatureInCelsius() {
  event.preventDefault();
  let temperatureCelsius = document.querySelector("#todaysTemperature");
  temperatureCelsius.innerHTML = #todaysTemperature;
}
let celsiusButton = document.querySelector("#celsius");
celsiusButton.addEventListener("click", temperatureInCelsius);

function temperatureInFahrenheit() {
  event.preventDefault();
  let temperatureFahrenheit = document.querySelector("#todaysTemperature");
  temperatureFahrenheit.innerHTML = 72;
}
let fahrenheitButton = document.querySelector("#fahrenheit");
fahrenheitButton.addEventListener("click", temperatureInFahrenheit);

//Week 5 

function showWeather(response) {
  let todaysTemperature = document.querySelector(".todaysTemperature");
  let temperature = Math.round(response.data.main.temp);
  todaysTemperature.innerHTML = `${temperatureCelsius}`;
}

function retrievePosition(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}
function searchCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput}`;
    let cityInput = response.data.name
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

navigator.geolocation.getCurrentPosition(retrievePosition);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let message = `It is ${temperature} degrees in ${city}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let units = "metric";
let city = "sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);


function showTemperature(response) {
  let currentLocation = document.querySelector("#current-location");
  currentLocation.innerHTML = response.data.name;
  let currentTemperature = Math.round(response.data.main.temp);
  let currentWheather = document.querySelector("#current-temp");
  currentWheather.innerHTML = `Currently ${currentTemperature}°C`;
  let currentWind = Math.round(response.data.wind.speed);
  let localWind = document.querySelector("#local-wind");
  localWind.innerHTML = `Wind speed: ${currentWind}km/h`;
  let currentDescription = response.data.weather[0].description;
  let localDescription = document.querySelector("#local-description");
  localDescription.innerHTML = `${currentDescription}`;
}

function showWeather(yourLocation) {
  let apiKey = "01c069a1dd0ad5193fff058ba13e03c8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${yourLocation}`;
  axios.get(`${apiUrl}&units=metric&appid=${apiKey}`).then(showTemperature);
}
function returnLocation(event) {
  event.preventDefault();
  let yourLocation = document.querySelector("#your-location").value;
  let currentLocation = document.querySelector("#current-location");
  currentLocation.innerHTML = `${yourLocation}`;
  showWeather(yourLocation);
}
let choosingLocation = document.querySelector("#location-form");
choosingLocation.addEventListener("submit", returnLocation);

function showPosition(position) {
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  let apiKey = "01c069a1dd0ad5193fff058ba13e03c8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}
function findGeolocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", findGeolocation);

//my attempt

function currentLocation(position){
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showTemperature);
}

function findGeolocation(){
    navigator.geolocation.getCurrentPosition(currentLocation);
}

let currentButton = document.querySelector("#current-location");
currentButton.addEventListener("click", findGeolocation);
