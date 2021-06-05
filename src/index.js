import { coordinatesURL } from './utils/API.js';
import { favoriteCities } from './utils/favoriteCities.js';
import { weatherIconsTranslation } from './utils/weatherIconsTranslation.js';

/* DOM Elements */
import { currentHourlyValues } from './utils/DOMElements.js';

/* Functions */
import { setCurrentCityWeather } from './functions/setCurrentCityWeather.js';
import { setCurrentCityIndicators } from './functions/setCurrentCityIndicators.js';

let selectedCityIndex = 0;
const selectedCity = favoriteCities[selectedCityIndex];

/* Create hourly weather */
const setCurrentCityHourlyWeather = (cityWeather) => {
  for (let i = 0; i < 24; i++) {
    const hourBlock = document.createElement('div');
    const hour = document.createElement('p');
    const weatherIcon = document.createElement('i');
    const temp = document.createElement('p');

    hourBlock.classList.add('hourly-data__content--block');
    hour.classList.add('hourly-data__content--hour');
    weatherIcon.classList.add('hourly-data__content--icon');
    weatherIcon.classList.add('icon');
    temp.classList.add('hourly-data__content--temp');

    hour.textContent = `${
      timestampToCityTime(cityWeather.hourly[i].dt, cityWeather.timezone).hour
    }:${
      timestampToCityTime(cityWeather.hourly[i].dt, cityWeather.timezone)
        .minutes
    }`;
    weatherIcon.setAttribute(
      'data-icon',
      weatherIconsTranslation[`I${cityWeather.hourly[i].weather[0].icon}`]
    );
    temp.textContent = `${Math.round(cityWeather.hourly[i].temp)}°`;

    hourBlock.append(hour, weatherIcon, temp);
    currentHourlyValues.appendChild(hourBlock);
  }
};

/* Fetch API */
window
  .fetch(coordinatesURL(selectedCity.lat, selectedCity.lon))
  .then((response) => response.json())
  .then((cityWeather) => {
    console.log(cityWeather);
    /* Main Data */
    setCurrentCityWeather(cityWeather, selectedCity.city);
    /* Next 24 hours data */
    setCurrentCityHourlyWeather(cityWeather);
    /* Main Indicators */
    setCurrentCityIndicators(cityWeather);
  });

/* Event Listeners */
