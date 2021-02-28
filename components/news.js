const axios = require("axios");
const news=async(callback)=>{
    await axios.get("http://newsapi.org/v2/everything?q=tesla&from=2021-01-28&sortBy=publishedAt&apiKey=3c024bb258b14a3796b0ddd518d59c0f")
        .then((res)=>{
            callback(res.data);
        }
    )
}
module.exports=news;