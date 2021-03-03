const axios = require("axios");
const country = async (callback, cname) => {
    await axios.get(`http://newsapi.org/v2/top-headlines?country=${cname}&apiKey=3c024bb258b14a3796b0ddd518d59c0f`)
        .then((res) => {
            callback(res.data);
        }
        )
}
module.exports = country;