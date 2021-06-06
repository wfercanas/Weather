import { body } from '../utils/DOMElements.js';

const setAppTheme = (cityWeather) => {
  const testDay = /d/;
  const testNight = /n/;
  if (
    testNight.test(cityWeather.current.weather[0].icon) &&
    body.classList.contains('day')
  ) {
    body.classList.remove('day');
    body.classList.add('night');
  } else if (
    testDay.test(cityWeather.current.weather[0].icon) &&
    body.classList.contains('night')
  ) {
    body.classList.remove('night');
    body.classList.add('day');
  }
};

export { setAppTheme };
