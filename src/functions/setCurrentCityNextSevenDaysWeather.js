/* utils */
import { currentNextSevenContainer } from '../utils/DOMElements.js';
import { weatherIconsTranslation } from '../utils/weatherIconsTranslation.js';

/* functions */
import { timestampToCityTime } from './timestampToCityTime.js';

const setCurrentCityNextSevenDaysWeather = (cityWeather) => {
  cityWeather.daily.forEach((day) => {
    /* Create Elements */
    const dayDataContainer = document.createElement('div');
    const iconAndDayInnerContainer = document.createElement('div');
    const lowAndHightTempInnerContainer = document.createElement('div');
    const weatherIcon = document.createElement('i');
    const weatherDay = document.createElement('p');
    const lowTemp = document.createElement('p');
    const highTemp = document.createElement('p');

    /* Add classes */
    dayDataContainer.classList.add('day__data');
    weatherIcon.classList.add('icon');
    lowTemp.classList.add('lowest-temp');
    highTemp.classList.add('highest-temp');

    /* Add content */
    weatherIcon.setAttribute(
      'data-icon',
      weatherIconsTranslation[`I${day.weather[0].icon}`]
    );
    weatherDay.textContent = timestampToCityTime(day.dt).date;
    highTemp.textContent = `${Math.round(day.temp.max)}°`;
    lowTemp.textContent = `${Math.round(day.temp.min)}°`;

    /* Appends */
    lowAndHightTempInnerContainer.append(highTemp, lowTemp);
    iconAndDayInnerContainer.append(weatherIcon, weatherDay);
    dayDataContainer.append(
      iconAndDayInnerContainer,
      lowAndHightTempInnerContainer
    );
    currentNextSevenContainer.appendChild(dayDataContainer);
  });
};

export { setCurrentCityNextSevenDaysWeather };
