const APIKeys = '9832905a1bed9547d41f2cdaed555ef3';
const coordinatesAPI = 'https://api.openweathermap.org/data/2.5/onecall?';

const coordinatesURL = (lat, lon) => {
  return `${coordinatesAPI}lat=${lat}&lon=${lon}&units=metric&appid=${APIKeys}`;
};

export { coordinatesURL };
