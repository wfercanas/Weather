import { favoriteCities } from './favoriteCities.js';
import { coordinatesURL } from './API.js';
import {
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

let selectedCityIndex = 1;
const selectedCity = favoriteCities[selectedCityIndex];

/* Return time in city time */
const timestampToCityTime = (timestamp) => {
  const localTime = new Date(timestamp * 1000);
  const cityTime = new Date(
    localTime.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' })
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
const createHourlyWeather = (cityWeatherPerHour) => {
  const hourBlock = document.createElement('div');
  const hour = document.createElement('p');
  const weatherIcon = document.createElement('i');
  const temp = document.createElement('p');

  hourBlock.classList.add('hourly-data__content--block');
  hour.classList.add('hourly-data__content--hour');
  weatherIcon.classList.add('hourly-data__content--icon');
  weatherIcon.classList.add('icon');
  temp.classList.add('hourly-data__content--temp');

  hour.textContent = `${timestampToCityTime(cityWeatherPerHour.dt).hour}:${
    timestampToCityTime(cityWeatherPerHour.dt).minutes
  }`;
  weatherIcon.setAttribute('data-icon', 'B');
  temp.textContent = `${Math.round(cityWeatherPerHour.temp)}°`;

  hourBlock.append(hour, weatherIcon, temp);
  currentHourlyValues.appendChild(hourBlock);
};

/* Fetch API */
window
  .fetch(coordinatesURL(selectedCity.lat, selectedCity.lon))
  .then((response) => response.json())
  .then((cityWeather) => {
    console.log(cityWeather);
    /* Main Data */
    currentCityLabel.textContent = selectedCity.city;
    currentTempLabel.textContent = `${Math.round(cityWeather.current.temp)}°`;
    currentFeelTempLabel.textContent = `Feels like ${Math.round(
      cityWeather.current.feels_like
    )}°`;

    /* Next 24 hours data */
    for (let i = 0; i < 24; i++) {
      createHourlyWeather(cityWeather.hourly[i]);
    }

    /* Main Indicators */
    currentSunriseValue.textContent = `${
      timestampToCityTime(cityWeather.current.sunrise).hour
    }:${timestampToCityTime(cityWeather.current.sunrise).minutes}`;
    currentSunsetValue.textContent = `${
      timestampToCityTime(cityWeather.current.sunset).hour
    }:${timestampToCityTime(cityWeather.current.sunset).minutes}`;
    currentUvValue.textContent = `${cityWeather.current.uvi}`;
    currentHumidityValue.textContent = `${cityWeather.current.humidity}%`;
    currentPressureValue.textContent = `${cityWeather.current.pressure} hPa`;
    currentWindValue.textContent = `${cityWeather.current.wind_speed} km/h`;
  });

/* Event Listeners */
