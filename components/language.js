const axios = require("axios");
const languages = async (callback, key, lang) => {
    await axios.get(`http://newsapi.org/v2/everything?q=${key}&language=${lang}&apiKey=3c024bb258b14a3796b0ddd518d59c0f`)
        .then((res) => {
            callback(res.data);
        }
        )
}
module.exports = languages;