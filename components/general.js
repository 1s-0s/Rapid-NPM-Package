const axios = require("axios");
const general = async (callback, sortBy) => {
    await axios.get(`http://newsapi.org/v2/top-headlines?category=general&sortBy=${sortBy}&apiKey=3c024bb258b14a3796b0ddd518d59c0f`)
        .then((res) => {
            callback(res.data);
        }
        )
}
module.exports = general;