const axios = require("axios");

const keyword = async (newsKEY, key, country = "", lang = "") => {
    await axios.get(`http://newsapi.org/v2/everything?q=${key}&country=${country}&language=${lang}&apiKey=${newsKEY}`)
        .then((res) => {
            //callback(res.data);
            return res.data;
        })
        .catch((err) => {
            return err;
        })
}
module.exports = keyword;