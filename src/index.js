/* Utils */
import { favoriteCities } from './utils/favoriteCities.js';
import { favoritesContainer, searchBar } from './utils/DOMElements.js';

/* Functions */
import { fetchInitialCityWeather } from './functions/fetchInitialCityWeather.js';
import { fetchNewCityWeather } from './functions/fetchNewCityWeather.js';
import { getSelectedFavoriteCity } from './functions/getSelectedFavoriteCity.js';
import { searchNewCity } from './functions/searchNewCity.js';

/* Initial values */
let selectedCityIndex = 0;
let selectedCity = favoriteCities[selectedCityIndex];

/* Change current city */
const changeSelectedCity = (event) => {
  const index = getSelectedFavoriteCity(event);
  selectedCityIndex = index;
  selectedCity = favoriteCities[selectedCityIndex];
  fetchNewCityWeather(selectedCity);
};

/* Event Listeners */
window.addEventListener('load', fetchInitialCityWeather(selectedCity));
favoritesContainer.addEventListener('click', changeSelectedCity);
searchBar.addEventListener('submit', searchNewCity);
searchBar.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    searchNewCity(event);
  }
});
