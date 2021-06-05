/* Return time in city time */
const timestampToCityTime = (timestamp, timezone) => {
  const localTime = new Date(timestamp * 1000);
  const cityTime = new Date(
    localTime.toLocaleString('en-US', { timeZone: timezone })
  );
  const cityTimeHourAndMinutes = {
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
