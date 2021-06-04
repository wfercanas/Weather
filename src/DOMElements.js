/* All DOM Elements selection */

/* Main data */
const currentCityLabel = document.querySelector('.main-data__city');
const currentTempLabel = document.querySelector('.main-data__temp');
const currentFeelTempLabel = document.querySelector('.main-data__feelslike');

/* Hourly values */
const currentHourlyValues = document.querySelector('.hourly-data__content');

/* Indicators value */
const currentSunriseValue = document.getElementById('sunrise');
const currentUvValue = document.getElementById('uv');
const currentWindValue = document.getElementById('wind');
const currentSunsetValue = document.getElementById('sunset');
const currentPressureValue = document.getElementById('pressure');
const currentHumidityValue = document.getElementById('humidity');

export {
  currentCityLabel,
  currentTempLabel,
  currentFeelTempLabel,
  currentHourlyValues,
  currentSunriseValue,
  currentUvValue,
  currentWindValue,
  currentSunsetValue,
  currentPressureValue,
  currentHumidityValue,
};
