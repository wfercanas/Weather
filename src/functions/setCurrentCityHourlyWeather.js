/* Utils */
import { currentHourlyValues } from '../utils/DOMElements.js';
import { weatherIconsTranslation } from '../utils/weatherIconsTranslation.js';

/* Functions */
import { timestampToCityTime } from './timestampToCityTime.js';

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

export { setCurrentCityHourlyWeather };
