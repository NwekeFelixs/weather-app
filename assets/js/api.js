'use strict';

const api_key = '44bc5b1e126ec7ffd08b3b322a4da14b';

/** 
*  Fetch data from server
* @param {string} URL API url
* @param {function} callback callback
*/

export const fetchData = function (url, callback) {
    fetch(`${url}&appid=${api_key}`)
      .then(res => res.json())
      .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}`
    },

    forecast(lat, lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}`
    },

    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },

    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },

    /** 
    *  Fetch data from server
    * @param {string} Search query e.g. : "London", "New York"
    */

    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    },
}

