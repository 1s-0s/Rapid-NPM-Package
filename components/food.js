const axios = require("axios");

const food = async (foodKEY, foodID, foodName) => {
    await axios.get(`https://api.edamam.com/api/food-database/parser?app_key=${foodKEY}&app_id=${foodID}&ingr=${foodName}`)
        .then((res) => {
            // callback(res.data.parsed);
            //callback(res.data);
            return res.data;
        }).catch((err) => {
            //console.error(err);
            return err;
        });
}


module.exports = food;
