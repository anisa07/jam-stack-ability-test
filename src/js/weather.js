
function success(pos) {
    var crd = pos.coords;
    const url = `/.netlify/functions/weatherapi?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric`;
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