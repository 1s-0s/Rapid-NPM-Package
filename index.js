//? IMPORTING FILES
const entertainment = require("./components/entertainment");
const science = require("./components/science");
const meme = require("./components/meme");
const business = require("./components/business");
const technology = require("./components/technology");
const health = require("./components/health");
const sports = require("./components/sports");
const general = require("./components/general");
const category = require("./components/category");
const keyword = require("./components/keyword");
const language = require("./components/language");
const country = require("./components/country");
const weather = require("./components/weather");
const food = require("./components/food");

//const KEY="3c024bb258b14a3796b0ddd518d59c0f";
//sortBy-> relevancy, popularity
let weatherKEY = "1aa20cbff782a94b88e67eff6f2edc87";
let foodKEY = "69d004c3e3c5b967261e625baea627fc"
let foodID = "85b409cf"
//? PARAMETERS
let sortBy = "popularity";
let type = "health";
let key = "tesla";
let lang = "ar";
let cname = "in";
let weatherCity = "London";
let fname = "watermelon";
//? CALLBACK FUNCTION
const callback = (data) => {
    console.log(data);
    return data;
}

//? API CALLS
// entertainment(callback, sortBy);
// science(callback, sortBy);
// business(callback, sortBy);
// technology(callback, sortBy);
// health(callback, sortBy);
// sports(callback, sortBy);
// general(callback, sortBy);
// meme(callback);
// category(callback, type);
// keyword(callback, key);
// language(callback, key, lang);
// country(callback, cname);
//weather(callback,weatherKEY,weatherCity);
food(callback, foodID, foodKEY, fname)