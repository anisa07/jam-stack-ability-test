const axios = require('axios');

module.exports = async function() {
    try {
        const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEWS_API_KEY}`);
        return response.data;
    } catch (e) {

    }
}