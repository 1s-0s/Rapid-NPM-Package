const axios = require("axios");
const { country } = require("..");
const keyword = async (newsKEY,key,country) => {
    await axios.get(`http://newsapi.org/v2/everything?q=${key}&country=${country}&language=${lang}&apiKey=${newsKEY}`)
        .then((res) => {
            //callback(res.data);
            return res.data;
        })
        .catch((err)=>{
            return err;
        })
}
module.exports = keyword;