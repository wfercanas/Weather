/* All DOM Elements selection */

/* Search-bar */
const searchBar = document.querySelector('form');
const searchInput = document.querySelector('input');

/* Main data */
const currentWeatherIcon = document.querySelector('.main-data__icon');
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

/* Daily values */
const currentNextSevenContainer = document.querySelector('.day__container');

/* Cards */
const favoritesContainer = document.querySelector('.favorites__container');

export {
  searchBar,
  searchInput,
  currentWeatherIcon,
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
  currentNextSevenContainer,
  favoritesContainer,
};
