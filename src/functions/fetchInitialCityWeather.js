/* Utils */
import { coordinatesURL } from '../utils/API.js';
import { favoriteCities } from '../utils/favoriteCities.js';

/* Functions */
import { setAppTheme } from './setAppTheme.js';
import { setCurrentCityHourlyWeather } from './setCurrentCityHourlyWeather.js';
import { setCurrentCityIndicators } from './setCurrentCityIndicators.js';
import { setCurrentCityNextSevenDaysWeather } from './setCurrentCityNextSevenDaysWeather.js';
import { setCurrentCityWeather } from './setCurrentCityWeather.js';
import { setFavoriteButton } from './setFavoriteButton.js';
import { setFavoriteCities } from './setFavoriteCities.js';

const fetchInitialCityWeather = (city) => {
  window
    .fetch(coordinatesURL(city.lat, city.lon))
    .then((response) => response.json())
    .then((cityWeather) => {
      setAppTheme(cityWeather);
      setCurrentCityWeather(cityWeather, city.city, city.country);
      setFavoriteButton(city);
      setCurrentCityHourlyWeather(cityWeather);
      setCurrentCityIndicators(cityWeather);
      setCurrentCityNextSevenDaysWeather(cityWeather);
      setFavoriteCities(favoriteCities);
    });
};

export { fetchInitialCityWeather };
