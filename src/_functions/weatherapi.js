
const axios = require('axios');

expirts.handler = async function (event, context, callback) {
  const {lat, lon} = event.queryStringParameters;
    const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
    
    const response = await axios.get(url);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response.data)
    })
    // fetch(url)
    // .then(response => {
    //   return response.json()
    // })
    // then(data => {
    //   document.querySelector('#city').textContent = data.name;
    //   document.querySelector('#temp').textContent = data.main.temp;
    //   document.querySelector('#main').textContent = data.weather[0].main;
    //   document.querySelector('#desc').textContent = data.weather[0].description;
    // })
  };
  
  // function error(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // };
  
  // navigator.geolocation.getCurrentPosition(success, error);