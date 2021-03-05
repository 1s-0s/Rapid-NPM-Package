<h1> Rapid-JS <a><img width="40" height="40" src="./logo.svg" alt="" ></a> </h1>
<p>
Fast API search and implemetation using various APIs like newsAPI, weatherAPI, memeAPI and FoodAPI.
</p>

<h2> Node JS Usage </h2>

<h3>News API</h3>

```js
const rapidAPI = require('rapid-js');

let topHeadlines = rapidAPI.headlines(KEY,CATEGORY);
let newsByKeyword = rapidAPI.keyword(KEY,SEARCH_WORD,COUNTRY);

```
<h3>Weather API</h3>

```js
const rapidAPI = require('rapid-js');

let weatherData = rapidAPI.weather(KEY,CITYNAME);
let weatherByCityID = rapidAPI.weatherByCityID(KEY,ID);
let weatherByLatLon = rapidAPI.weatherByLatLon(KEY,LAT,LON,COUNT);
let weatherByZIP = rapidAPI.weatherByZIP(KEY,ZIP,COUNTRYCODE);
let weatherByRectZone = rapidAPI.weatherByRectZone(KEY,DIMENSION);

```
<h3>Meme API</h3>

```js
const rapidAPI = require('rapid-js');

let memes = rapidAPI.meme();

```

<h3>Food API</h3>

```js
const rapidAPI = require('rapid-js');

let foodDetails = rapidAPI.food(KEY,Food_ID,FOOD_NAME);

```

