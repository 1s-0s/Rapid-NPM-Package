//? IMPORTING FILES

const meme = require("./components/meme");
const headlines = require("./components/headlines");
const keyword = require("./components/keyword");
const {weather,weatherByLatLon,weatherByZip, weatherByCityId, weatherByRectZone} = require("./components/weather");
const food = require("./components/food");

//?dotenv configuration
require('dotenv').config();

//sortBy-> relevancy, popularity
const weatherKEY = process.env.WEATHER_KEY;
const foodKEY = process.env.FOOD_KEY;
const newsKEY = process.env.NEWS_KEY;
const foodID = process.env.FOOD_KEY;
//? CALLBACK FUNCTION
// const callback = (data) => {
//     console.log(data);
//     return data;
// }

//? API CALLS

// meme(callback);
// keyword(callback, key);
// food(callback, foodID, foodKEY, fname)
// weatherByCityId(callback,weatherKEY,"2172797");
// weatherByLatLon(callback,weatherKEY,"55.5","37.5","10");
// weatherByZip(callback,weatherKEY,"94040","us");
// weatherByRectZone(callback,weatherKEY,"12,32,15,37,10");
// weather(callback,weatherKEY,weatherCity); 
// headlines(newsKEY,"sports","in");
module.exports={
    meme,
    headlines,
    keyword,
    food,
    weather,
    weatherByCityId,
    weatherByLatLon,
    weatherByRectZone,
    weatherByZip
}