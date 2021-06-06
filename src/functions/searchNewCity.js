/* Utils */
import { cityURL } from '../utils/API.js';
import { fetchNewCityWeather } from './fetchNewCityWeather.js';
import { searchInput } from '../utils/DOMElements.js';

const searchNewCity = (event) => {
  event.preventDefault();
  const cityData = {};
  window
    .fetch(cityURL(searchInput.value))
    .then((response) => response.json())
    .then((responseJSON) => {
      cityData.city = responseJSON.name;
      cityData.country = responseJSON.sys.country;
      cityData.lat = responseJSON.coord.lat;
      cityData.lon = responseJSON.coord.lon;
      fetchNewCityWeather(cityData);
      searchInput.value = '';
    });
};

export { searchNewCity };
