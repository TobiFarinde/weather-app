const apikey = "90b3dbf58399096ad8f77887ad1818cc";

const waetherDataEl = document .getElementById('weather-data')

const cityInputEl = document.getElementById("city-input")

const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event)=>{
event.preventDefault();
const cityValue = cityInputEl.value;
console.log(cityValue);
});