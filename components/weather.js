const axios = require("axios");
const weather = async (key,city,stateCode='',mode='',units='',lang='') => {
    // PUT HTTP
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${stateCode}&mode=${mode}&units=${units}&lang=${lang}&appid=${key}`)
        .then((res) => {
            //callback(res.data);
            return res.data;
        })
        .catch((err)=>{
            //console.log(err);
            return err;
        })
}
const weatherByCityId = async (key,id,mode='',units='',lang='') => {
    // PUT HTTP
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&mode=${mode}&units=${units}&lang=${lang}&appid=${key}`)
        .then((res) => {
            //callback(res.data);
            return res.data;
        })
        .catch((err)=>{
            //console.log(err);
            return err;
        })
}
//LatLon
const weatherByLatLon = async (key,lat,lon,cnt='1',mode='',units='',lang='') => {
    // PUT HTTP
    await axios.get(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=${cnt}&mode=${mode}&units=${units}&lang=${lang}&appid=${key}`)
        .then((res) => {
            //callback(res.data);
            return res.data;
        })
        .catch((err)=>{
            //console.log(err);
            return err;
        })
}
const weatherByZip = async (key,zip,ccode='',mode='',units='',lang='') => {
    // PUT http://
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},${ccode}&mode=${mode}&units=${units}&lang=${lang}&appid=${key}`)
        .then((res) => {
            //callback(res.data);
            return res.data;
        })
        .catch((err)=>{
            //console.log(err);
            return err;
        })
}
const weatherByRectZone = async (key,bbox,units='',lang='') => {
    // PUT http://
    await axios.get(`http://api.openweathermap.org/data/2.5/box/city?bbox=${bbox}&units=${units}&lang=${lang}&appid=${key}`)
        .then((res) => {
            //callback(res.data);
            return res.data;
        })
        .catch((err)=>{
            //console.log(err);
            return err;
        })
}

module.exports = {
    weather,
    weatherByLatLon,
    weatherByZip,
    weatherByCityId,
    weatherByRectZone,
    
};