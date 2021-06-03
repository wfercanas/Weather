import { favoriteCities } from './favoriteCities.js';
import { coordinatesURL } from './API.js';
import {
  currentCityLabel,
  currentTempLabel,
  currentFeelTempLabel,
} from './DOMElements.js';

let selectedCityIndex = 1;
const selectedCity = favoriteCities[selectedCityIndex];

/* Fetch API */

window
  .fetch(coordinatesURL(selectedCity.lat, selectedCity.lon))
  .then((response) => response.json())
  .then((responseJSON) => {
    console.log(responseJSON);
    console.log(currentCityLabel);
    currentCityLabel.textContent = favoriteCities[selectedCityIndex].city;
    currentTempLabel.textContent = `${Math.round(responseJSON.current.temp)}°`;
    currentFeelTempLabel.textContent = `Feels like ${Math.round(
      responseJSON.current.feels_like
    )}°`;
  });
