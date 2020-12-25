
const axios = require('axios');

async function success(pos) {
    var crd = pos.coords;
    const url = `api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
    const response = await axios.get(url);
    
    document.querySelector('#city').textContent = response.data.name;
    document.querySelector('#temp').textContent = response.data.main.temp;
    document.querySelector('#main').textContent = response.data.weather[0].main;
    document.querySelector('#desc').textContent = response.data.weather[0].description;
  };
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };
  
  navigator.geolocation.getCurrentPosition(success, error);