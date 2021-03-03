const weather = require("./components/weather");
const entertainment = require("./components/entertainment");
const science = require("./components/science");
const meme = require("./components/meme");
const business = require("./components/business");
const technology = require("./components/technology");
const health = require("./components/health");

const KEY="1aa20cbff782a94b88e67eff6f2edc87";
const city="London";
//sortBy-> relevancy, popularity
let sortBy = "popularity";
const callback = (data) => {
    console.log(data);
    return data;
}
weather(callback,KEY,city);
entertainment(callback, sortBy);
science(callback, sortBy);
business(callback, sortBy);
technology(callback, sortBy);
health(callback, sortBy);
meme(callback);

