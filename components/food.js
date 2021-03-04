let axios = require("axios");

// let options = {
//     method: 'GET',
//     url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
//     params: { ingr: 'banana' },
//     headers: {
//         'x-rapidapi-key': 'de231c2f97msh37e7695849917bep1d0608jsn3e905ed8414b',
//         'x-rapidapi-host': 'edamam-food-and-grocery-database.p.rapidapi.com'
//     }
// };

const food = async (callback, foodName) => {
    await axios.get(`https://api.edamam.com/api/food-database/parser?app_key=69d004c3e3c5b967261e625baea627fc&app_id=85b409cf&ingr=${foodName}`)
        .then((res) => {
            callback(res.data.parsed);
            //callback(res.data);
        }).catch((err) => {
            console.error(err);
        });
}


module.exports = food;