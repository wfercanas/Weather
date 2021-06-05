import { coordinatesURL } from './utils/API.js';
import { favoriteCities } from './utils/favoriteCities.js';

/* Functions */
import { setCurrentCityWeather } from './functions/setCurrentCityWeather.js';
import { setCurrentCityIndicators } from './functions/setCurrentCityIndicators.js';
import { setCurrentCityHourlyWeather } from './functions/setCurrentCityHourlyWeather.js';
import { setCurrentCityNextSevenDaysWeather } from './functions/setCurrentCityNextSevenDaysWeather.js';
import { setFavoriteCities } from './functions/setFavoriteCities.js';

let selectedCityIndex = 0;
const selectedCity = favoriteCities[selectedCityIndex];

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
    /* Next seven day forecast*/
    setCurrentCityNextSevenDaysWeather(cityWeather);
    /* Favorite cities cards*/
    setFavoriteCities(favoriteCities);
  });

/* Event Listeners */
