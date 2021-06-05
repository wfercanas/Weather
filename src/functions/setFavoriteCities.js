/* utils */
import { cityURL } from '../utils/API.js';
import { favoritesContainer } from '../utils/DOMElements.js';
import { weatherIconsTranslation } from '../utils/weatherIconsTranslation.js';

const setFavoriteCities = (cities) => {
  cities.forEach((city) => {
    /* Create DOM elements */
    const favoritesCard = document.createElement('div');
    const favoritesCardMainData = document.createElement('div');
    const favoritesCardMainDataValues = document.createElement('div');
    const favoriteCityTemp = document.createElement('p');
    const favoriteCityLocation = document.createElement('p');
    const favoriteCityName = document.createElement('span');
    const favoriteCityCountry = document.createElement('span');
    const favoriteCityWeather = document.createElement('i');
    const favoritesCardOtherData = document.createElement('div');
    const favoritesCardHumidityForecast = document.createElement('div');
    const favoritesCardWindForecast = document.createElement('div');
    const dropletIcon = document.createElement('i');
    const favoriteCityHumidity = document.createElement('p');
    const windIcon = document.createElement('i');
    const favoriteCityWind = document.createElement('p');

    /* Add Classes */
    favoritesCard.classList.add('favorites__card');
    favoritesCardMainData.classList.add('favorites__card--main-data');
    favoritesCardMainDataValues.classList.add(
      'favorites__card--main-data-values'
    );
    favoriteCityTemp.classList.add('temp');
    favoriteCityLocation.classList.add('location');
    favoriteCityName.classList.add('city');
    favoriteCityCountry.classList.add('country');
    favoriteCityWeather.classList.add('icon');
    favoritesCardOtherData.classList.add('favorites__card--other-data');
    dropletIcon.classList.add('icon-droplet');
    favoriteCityHumidity.classList.add('humidity');
    windIcon.classList.add('icon');
    favoriteCityWind.classList.add('wind');

    /* Appends */
    favoritesCardMainDataValues.append(favoriteCityTemp, favoriteCityLocation);
    favoritesCardMainData.append(
      favoritesCardMainDataValues,
      favoriteCityWeather
    );
    favoritesCardHumidityForecast.append(dropletIcon, favoriteCityHumidity);
    favoritesCardWindForecast.append(windIcon, favoriteCityWind);
    favoritesCardOtherData.append(
      favoritesCardHumidityForecast,
      favoritesCardWindForecast
    );
    favoritesCard.append(favoritesCardMainData, favoritesCardOtherData);

    favoritesContainer.appendChild(favoritesCard);

    /* Values */
    favoriteCityName.textContent = city.city;
    favoriteCityCountry.textContent = city.country;
    favoriteCityLocation.append(favoriteCityName, favoriteCityCountry);
    windIcon.setAttribute('data-icon', 'F');
    window
      .fetch(cityURL(city.city, city.country))
      .then((response) => response.json())
      .then((cityWeather) => {
        favoriteCityTemp.textContent = `${Math.round(cityWeather.main.temp)}°`;
        favoriteCityHumidity.textContent = `${cityWeather.main.humidity}%`;
        favoriteCityWind.textContent = `${cityWeather.wind.speed} km/h`;
        favoriteCityWeather.setAttribute(
          'data-icon',
          weatherIconsTranslation[`I${cityWeather.weather[0].icon}`]
        );
      });
  });
};

export { setFavoriteCities };
