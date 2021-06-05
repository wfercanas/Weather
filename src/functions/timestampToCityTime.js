/* utils */
import {
  monthsOfTheYear,
  dayweekNames,
} from '../utils/monthsAndWeekdayNames.js';

/* Return time in city time */
const getDayOrdinal = (date) => {
  switch (date) {
    case '1':
      return 'st';
      break;
    case '2':
      return 'nd';
      break;
    case '3':
      return 'rd';
      break;
    default:
      return 'th';
      break;
  }
};

const timestampToCityTime = (timestamp, timezone) => {
  const localTime = new Date(timestamp * 1000);
  const cityTime = new Date(
    localTime.toLocaleString('en-US', { timeZone: timezone })
  );
  const cityTimeHourAndMinutes = {
    date: `${dayweekNames[cityTime.getDay()]}, ${
      monthsOfTheYear[cityTime.getMonth()]
    } ${cityTime.getDate()}${getDayOrdinal(cityTime.getDate())}`,
    hour: `${
      cityTime.getHours() < 10 ? '0' + cityTime.getHours() : cityTime.getHours()
    }`,
    minutes: `${
      cityTime.getMinutes() < 10
        ? '0' + cityTime.getMinutes()
        : cityTime.getMinutes()
    }`,
  };
  return cityTimeHourAndMinutes;
};

export { timestampToCityTime };
