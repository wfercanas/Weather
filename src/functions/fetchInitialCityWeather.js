/* Utils */
import { coordinatesURL } from '../utils/API.js';
import { favoriteCities } from '../utils/favoriteCities.js';

/* Functions */
import { setCurrentCityWeather } from './setCurrentCityWeather.js';
import { setCurrentCityIndicators } from './setCurrentCityIndicators.js';
import { setCurrentCityHourlyWeather } from './setCurrentCityHourlyWeather.js';
import { setCurrentCityNextSevenDaysWeather } from './setCurrentCityNextSevenDaysWeather.js';
import { setFavoriteCities } from './setFavoriteCities.js';

const fetchInitialCityWeather = (city) => {
  window
    .fetch(coordinatesURL(city.lat, city.lon))
    .then((response) => response.json())
    .then((cityWeather) => {
      /* Main Data */
      setCurrentCityWeather(cityWeather, city.city, city.country);
      /* Next 24 hours data */
      setCurrentCityHourlyWeather(cityWeather);
      /* Main Indicators */
      setCurrentCityIndicators(cityWeather);
      /* Next seven day forecast*/
      setCurrentCityNextSevenDaysWeather(cityWeather);
      /* Favorite cities cards*/
      setFavoriteCities(favoriteCities);
    });
};

export { fetchInitialCityWeather };
