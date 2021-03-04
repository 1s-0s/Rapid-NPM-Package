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
const {weather,weatherByLatLon,weatherByZip, weatherByCityId, weatherByRectZone} = require("./components/weather");

//const KEY="3c024bb258b14a3796b0ddd518d59c0f";
//sortBy-> relevancy, popularity
let weatherKEY="1aa20cbff782a94b88e67eff6f2edc87";

//? PARAMETERS
let sortBy = "popularity";
let type = "health";
let key = "tesla";
let lang = "ar";
let cname = "in";
let weatherCity="Delhi";
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
weather(callback,weatherKEY,weatherCity);
weatherByCityId(callback,weatherKEY,"2172797");
weatherByLatLon(callback,weatherKEY,"55.5","37.5","10");
weatherByZip(callback,weatherKEY,"94040","us");
weatherByRectZone(callback,weatherKEY,"12,32,15,37,10");