/* DOM Elements */
import { currentHourlyValues } from '../utils/DOMElements.js';

const removePreviousCityHourlyWeather = () => {
  while (currentHourlyValues.childElementCount > 0) {
    currentHourlyValues.removeChild(currentHourlyValues.lastChild);
  }
};

export { removePreviousCityHourlyWeather };
