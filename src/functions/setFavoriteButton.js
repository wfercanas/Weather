/* Utils */
import { favoriteButton } from '../utils/DOMElements.js';
import { favoriteCities } from '../utils/favoriteCities.js';

const setFavoriteButton = (city) => {
  if (favoriteButton.classList.contains('on')) {
    favoriteButton.classList.remove('on');
    favoriteButton.classList.add('off');
  }
  favoriteCities.forEach((favoriteCity) => {
    if (favoriteCity.city === city.city) {
      favoriteButton.classList.remove('off');
      favoriteButton.classList.add('on');
    }
  });
};

export { setFavoriteButton };
