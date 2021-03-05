<h1> Rapid-JS <a><img width="40" height="40" src="./logo.svg" alt="" ></a> </h1>
<p>
Fast API search and implementation using various APIs like newsAPI, weatherAPI, memeAPI and FoodAPI.
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

<h2> API Methods and Optional Parameters </h2>
<h3> NewsAPI </h3>
<table>
    <tr>
        <th>Method name</th>
        <th  colspan="5">Parameter list</th>
    </tr> 
    <tr>
        <td>headlines</td>
        <td>API_KEY</td>
        <td>CATEGORY</td>
        <td>COUNTRY<em>(optional)</em></td>
        <td>SORTBY<em>(optional)</em></td>
        <td>LANGUAGE<em>(optional)</em></td>
    </tr>
     <tr>
        <td>keyword</td>
        <td>API_KEY</td>
        <td>SEARCH_WORD</td>
        <td>COUNTRY<em>(optional)</em></td>
        <td>SORTBY<em>(optional)</em></td>
        <td>LANGUAGE<em>(optional)</em></td>
    </tr>
</table>  
<h3> WeatherAPI </h3>
<table>
    <tr>
        <th>Method name</th>
        <th colspan="7">Parameter list</th>
    </tr> 
    <tr>
        <td>weather</td>
        <td>API_KEY</td>
        <td>CITY_NAME</td>
        <td>STATE_CODE<em>(optional)</em></td>
        <td>MODE<em>(optional)</em></td>
        <td>UNITS<em>(optional)</em></td>
        <td colspan="3">LANGUAGE<em>(optional)</em></td>
    </tr>
    <tr>
        <td>weatherByCityId</td>
        <td>API_KEY</td>
        <td>CITY_ID</td>
        <td>MODE<em>(optional)</em></td>
        <td>UNITS<em>(optional)</em></td>
        <td colspan="3">LANGUAGE<em>(optional)</em></td>
    </tr>
    <tr>
        <td>weatherByLatLon</td>
        <td>API_KEY</td>
        <td>LATITUDE</td>
        <td>LONGITUDE</td>
        <td>COUNT<em>(optional)</em></td>
        <td>MODE<em>(optional)</em></td>
        <td>UNITS<em>(optional)</em></td>
        <td>LANGUAGE<em>(optional)</em></td>
    </tr>
    <tr>
        <td>weatherByZip</td>
        <td>API_KEY</td>
        <td>ZIP</td>
        <td>COUNTRY_CODE<em>(optional)</em></td>
        <td>MODE<em>(optional)</em></td>
        <td>UNITS<em>(optional)</em></td>
        <td colspan="2">LANGUAGE<em>(optional)</em></td>
    </tr>
    <tr>
        <td>weatherByRectZone</td>
        <td>API_KEY</td>
        <td>Dimension(BBOX)</td>
        <td>STATE_CODE<em>(optional)</em></td>
        <td>MODE<em>(optional)</em></td>
        <td>UNITS<em>(optional)</em></td>
        <td colspan="2">LANGUAGE<em>(optional)</em></td>
    </tr>
</table>    
<h3> MemeAPI </h3>
<table>
    <tr>
        <th>Method name</th>
        <th>Parameter list</th>
    </tr> 
    <tr>
        <td>meme</td>
        <td>No arguments required</td>
    </tr>
</table> 
<h3> FoodAPI </h3>
<table>
    <tr>
        <th>Method name</th>
        <th colspan="3">Parameter list</th>
    </tr> 
    <tr>
        <td>food</td>
        <td>API_KEY</td>
        <td>FOOD_ID</td>
        <td>FOOD_NAME</td>
    </tr>
</table> 

<h3> Links for API_KEY </h3>
<ul>
    <li><a href="https://newsapi.org/">NewsAPI</a>
    <li><a href="https://openweathermap.org/">WeatherAPI</a>
    <li><a href="https://rapidapi.com/edamam/api/edamam-food-and-grocery-database">FoodAPI</a>
</ul>
