
function success(pos) {
    var crd = pos.coords;
    const url = `api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
    fetch(url)
    .then(response => {
      return response.json()
    })
    then(data => {
      document.querySelector('#city').textContent = data.name;
      document.querySelector('#temp').textContent = data.main.temp;
      document.querySelector('#main').textContent = data.weather[0].main;
      document.querySelector('#desc').textContent = data.weather[0].description;
    })
  };
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };
  
  navigator.geolocation.getCurrentPosition(success, error);