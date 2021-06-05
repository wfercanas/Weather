/* DOM Elements */
import { favoritesContainer } from '../utils/DOMElements.js';

const removeFavoriteCities = () => {
  while (favoritesContainer.childElementCount > 0) {
    favoritesContainer.removeChild(favoritesContainer.lastChild);
  }
};

export { removeFavoriteCities };
