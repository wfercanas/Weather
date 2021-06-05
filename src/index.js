import { coordinatesURL } from './API.js';
import { favoriteCities } from './favoriteCities.js';
import { weatherIconsTranslation } from './weatherIconsTranslation.js';

/* DOM Elements */
import {
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
} from './DOMElements.js';

/* Functions */
import { setCurrentCityWeather } from './setCurrentCityWeather.js';

let selectedCityIndex = 0;
const selectedCity = favoriteCities[selectedCityIndex];

/* Return time in city time */
const timestampToCityTime = (timestamp, timezone) => {
  const localTime = new Date(timestamp * 1000);
  const cityTime = new Date(
    localTime.toLocaleString('en-US', { timeZone: timezone })
  );
  const cityTimeHourAndMinutes = {
    hour: `${
      cityTime.getHours() < 10 ? '0' + cityTime.getHours() : cityTime.getHours()
    }`,
    minutes: `${
      cityTime.getMinutes() < 10
        ? '0' + cityTime.getMinutes()
        : cityTime.getMinutes()
    }`,
  };
  return cityTimeHourAndMinutes;
};

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

/* Set Current City Indicators */
const setCurrentCityIndicators = (cityWeather) => {
  currentSunriseValue.textContent = `${
    timestampToCityTime(cityWeather.current.sunrise, cityWeather.timezone).hour
  }:${
    timestampToCityTime(cityWeather.current.sunrise, cityWeather.timezone)
      .minutes
  }`;
  currentSunsetValue.textContent = `${
    timestampToCityTime(cityWeather.current.sunset, cityWeather.timezone).hour
  }:${
    timestampToCityTime(cityWeather.current.sunset, cityWeather.timezone)
      .minutes
  }`;
  currentUvValue.textContent = `${cityWeather.current.uvi}`;
  currentHumidityValue.textContent = `${cityWeather.current.humidity}%`;
  currentPressureValue.textContent = `${cityWeather.current.pressure} hPa`;
  currentWindValue.textContent = `${cityWeather.current.wind_speed} km/h`;
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
