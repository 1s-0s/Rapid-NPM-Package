const axios = require("axios");
const health = async (callback, sortBy) => {
    await axios.get(`http://newsapi.org/v2/top-headlines?category=health&sortBy=${sortBy}&apiKey=3c024bb258b14a3796b0ddd518d59c0f`)
        .then((res) => {
            console.log("health: ");
            callback(res.data);
        }
        )
}
module.exports = health;