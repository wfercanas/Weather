/* Utils */
import { cityURL } from '../utils/API.js';
import { fetchNewCityWeather } from './fetchNewCityWeather.js';
import { searchInput, searchResults } from '../utils/DOMElements.js';

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
      if (searchResults.textContent) {
        searchResults.textContent = '';
      }
    })
    .catch(() => {
      searchResults.textContent = '❌ City not found, please check your search';
    });
};

export { searchNewCity };
