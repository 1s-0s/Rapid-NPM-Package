const axios = require("axios");
const weather = async (callback,key,city) => {
    // PUT HTTP
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then((res) => {
            callback(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
}
module.exports = weather;