/* utils */
import { favoriteCities } from '../utils/favoriteCities.js';
import { favoriteButton } from '../utils/DOMElements.js';

/* Functions */
import { setFavoriteButton } from './setFavoriteButton.js';
import { setFavoriteCities } from './setFavoriteCities.js';
import { removeFavoriteCities } from './removeFavoriteCities.js';

const addOrRemoveCityFromFavorites = (selectedCity) => {
  const isCityFavorite = favoriteButton.classList.contains('on');
  if (isCityFavorite) {
    const cityIndex = favoriteCities.findIndex(
      (city) => city.city === selectedCity.city
    );
    favoriteCities.splice(cityIndex, 1);
  } else {
    favoriteCities.push(selectedCity);
  }
  setFavoriteButton(selectedCity);
  removeFavoriteCities();
  setFavoriteCities(favoriteCities);
};

export { addOrRemoveCityFromFavorites };
