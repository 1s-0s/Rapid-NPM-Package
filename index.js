const entertainment = require("./components/entertainment");
const science = require("./components/science");
const meme = require("./components/meme");


const technology = require("./components/technology");
//const KEY="3c024bb258b14a3796b0ddd518d59c0f";
//sortBy-> relevancy, popularity
let sortBy = "popularity";

const callback = (data) => {
    console.log(data);
    return data;
}
entertainment(callback, sortBy);
science(callback, sortBy);
meme(callback);
technology(callback, sortBy);

