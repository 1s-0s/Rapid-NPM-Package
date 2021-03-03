const axios = require("axios");
const keyword = async (callback, key) => {
    await axios.get(`http://newsapi.org/v2/everything?q=${key}&apiKey=3c024bb258b14a3796b0ddd518d59c0f`)
        .then((res) => {
            callback(res.data);
        }
        )
}
module.exports = keyword;