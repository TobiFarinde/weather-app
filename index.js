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



  const details = [
    `Feels like: ${Math.round (data.main.feels_like)}`
    `Humidity: ${data.main.humidity}`
    `Wind speed: ${data.wind.speed}`
  ]

            <div class="temperature">22°C</div>
            <div class="temperature">22°C</div>
            waetherDataEl.querySelector(".icon").innerHTML =<img src= 'http://openweathermap.org/img/wn/${icon.0ld.png''
            waetherDataEl.querySelector(".details").inner html
            waetherDataEl.querySelector( 
              ".temperature" 
              ).textContent) = `${temperature}C` ;
          }

          } catch (error) {

       waetherDataEl.querySelector( 
        ".temperature" 
        ).textContent) = `${temperature}C` ;
    }

