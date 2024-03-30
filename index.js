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
    } catch (error) {
        
    }

