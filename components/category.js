const axios = require("axios");
const category = async (callback, type) => {
    await axios.get(`http://newsapi.org/v2/top-headlines?category=${type}&apiKey=3c024bb258b14a3796b0ddd518d59c0f`)
        .then((res) => {
            callback(res.data);
        }
        )
}
module.exports = category;