var description = document.getElementById('description');
var temp = document.getElementById('temp');
var pressure = document.getElementById('pressure');
var humidity = document.getElementById('humidity');

const key = "c237dfe95bb48e2913f8dee9f3ed8465"
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const keyParam = "&appid=" + key;
const units = "&units=imperial";

function getWeather() {
  const input = document.querySelector("input").value;
  const endpoint = url + input + keyParam + units;
  console.log(endpoint);
  fetch(endpoint).then((response) => {
    if (response.ok) {
      console.log("success");
      return response.json();
    }
  }).then((jsonResponse) => {
      formatJson(jsonResponse);
  });
}

function formatJson(jsonResponse) {
  description.innerHTML = "Description: "  + jsonResponse.weather[0].description 

  temp.innerHTML = "Temperature: "  + jsonResponse.main["temp"]

  pressure.innerHTML = "Pressure: "  + jsonResponse.main["pressure"] 

  humidity.innerHTML = "Humidity: "  + jsonResponse.main["humidity"]
}
