const axios = require("axios");
const headlines = async (newsKEY,cat,country="",sortBy="",lang="") => {
    await axios.get(`http://newsapi.org/v2/top-headlines?category=${cat}&country=${country}&sortBy=${sortBy}&language=${lang}&apiKey=${newsKEY}`)
        .then((res) => {
            // callback(res.data);
            console.log(res.data);
            return res.data;
        })
        .catch((err)=>{
            console.log(err);
            return err;
        })
}
module.exports = headlines;