/* Utils */
import { coordinatesURL } from '../utils/API.js';
import { favoriteCities } from '../utils/favoriteCities.js';

/* Functions */
import { removeFavoriteCities } from './removeFavoriteCities.js';
import { removePreviousCityHourlyWeather } from './removePreviousCityHourlyWeather.js';
import { removePreviousCityNextSevenDaysWeather } from './removePreviousCityNextSevenDaysWeather.js';
import { setCurrentCityWeather } from './setCurrentCityWeather.js';
import { setCurrentCityIndicators } from './setCurrentCityIndicators.js';
import { setCurrentCityHourlyWeather } from './setCurrentCityHourlyWeather.js';
import { setCurrentCityNextSevenDaysWeather } from './setCurrentCityNextSevenDaysWeather.js';
import { setFavoriteCities } from './setFavoriteCities.js';

const fetchNewCityWeather = (city) => {
  removePreviousCityHourlyWeather();
  removePreviousCityNextSevenDaysWeather();
  removeFavoriteCities();
  window
    .fetch(coordinatesURL(city.lat, city.lon))
    .then((response) => response.json())
    .then((cityWeather) => {
      setCurrentCityWeather(cityWeather, city.city, city.country);
      setCurrentCityHourlyWeather(cityWeather);
      setCurrentCityIndicators(cityWeather);
      setCurrentCityNextSevenDaysWeather(cityWeather);
      setFavoriteCities(favoriteCities);
    });
};

export { fetchNewCityWeather };
