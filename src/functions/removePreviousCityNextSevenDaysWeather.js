/* DOM Elements */
import { currentNextSevenContainer } from '../utils/DOMElements.js';

const removePreviousCityNextSevenDaysWeather = () => {
  while (currentNextSevenContainer.childElementCount > 0) {
    currentNextSevenContainer.removeChild(currentNextSevenContainer.lastChild);
  }
};

export { removePreviousCityNextSevenDaysWeather };
