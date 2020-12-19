const axios = require('axios');
const countries = require("./countries.json");

async function getNews(country) {
    try {
        const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${process.env.NEWS_API_KEY}`);
        return {
            country,
            articles: response.data.articles
        }
    } catch (e) {
        console.log("e", e)
    }
}

module.exports = async function() {
    const newsPromises = countries.map(getNews);
    // console.log(newsPromises);
    const promiseResult = await Promise.all(newsPromises);
    /// console.log(promiseResult);
    return promiseResult;
}