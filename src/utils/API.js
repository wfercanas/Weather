const APIKeys = '9832905a1bed9547d41f2cdaed555ef3';
const coordinatesAPI = 'https://api.openweathermap.org/data/2.5/onecall?';
const cityAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';

const coordinatesURL = (lat, lon) => {
  return `${coordinatesAPI}lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${APIKeys}`;
};

const cityURL = (city, country) => {
  return `${cityAPI}${city},${country}&units=metric&appid=${APIKeys}`;
};

export { coordinatesURL, cityURL };
