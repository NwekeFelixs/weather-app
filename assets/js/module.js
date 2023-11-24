'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/** 
*  Fetch data from server
* @param {number} dateUnix Unix date in seconds
* @param {number} timezone Timezone shift from UTC im seconds
* @returns {string} Date String, Format: "Sunday 10, Jan"
*/

export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/** 
* @param {number} timeUnix Unix date in seconds
* @param {number} timezone Timezone shift from UTC im seconds
* @returns {string} Date String, Format: "HH AM/PM"
*/

export const getHours = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}



export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}


export const aqiText = {
    1: {
        level: "Good",
        message: "Air quality is considered satisfactory, and air pollution poses little or no risk"
    },

    2: {
        level: "Fair",
        message: "Air quality is acceptable, however for some pollutants there may be a moderate health concern for very small number of people "
    },

    3: {
        level: "Moderate",
        message: "Air quality is Moderate, however for some pollutants there may be a moderate health concern for very small number of people "
    },

    4: {
        level: "Poor",
        message: "Air quality is Poor, will be dangerous for people "
    },

    5: {
        level: "Very Poor",
        message: " Air quality is Bad, will be dangerous for people "
    },
}