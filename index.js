const apikey = "90b3dbf58399096ad8f77887ad1818cc";

const waetherDataEl = document .getElementById('weather-data')

const cityInputEl = document.getElementById("city-input")

const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event)=>{
event.preventDefault();
const cityValue = cityInputEl.value;
console.log(cityValue);
getweatherData(cityValue);
});

function getweatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweatheramap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)
  if(response.ok){
    throw new Error("Network response was not ok")
  }

  const data = await response.json()

  const temperature =Math.round (data.main.temp)

  const description = data.weather[0].description

  const icon = data.weather[0].icon

  const humidity = data.weather[0].ddescriptiion

  const details = [
    `Feels like: ${Math.round (data.main.feels_like)}`
  ]
    } catch (error) {
        
    }

