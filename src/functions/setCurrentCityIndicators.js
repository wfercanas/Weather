/* DOM Elements */
import {
  currentSunriseValue,
  currentSunsetValue,
  currentUvValue,
  currentHumidityValue,
  currentPressureValue,
  currentWindValue,
} from '../utils/DOMElements.js';

/* Functions */
import { timestampToCityTime } from './timestampToCityTime.js';

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

export { setCurrentCityIndicators };
