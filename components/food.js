const axios = require("axios");

// let options = {
//     method: 'GET',
//     url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
//     params: { ingr: 'banana' },
//     headers: {
//         'x-rapidapi-key': 'de231c2f97msh37e7695849917bep1d0608jsn3e905ed8414b',
//         'x-rapidapi-host': 'edamam-food-and-grocery-database.p.rapidapi.com'
//     }
// };

const food = async (foodID, foodKEY, foodName) => {
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
