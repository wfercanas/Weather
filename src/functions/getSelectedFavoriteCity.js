const getSelectedFavoriteCity = (event) => {
  let flag = false;
  let currentTarget = event.target;
  while (!flag) {
    if (currentTarget.classList.contains('favorites__card')) {
      flag = true;
    } else {
      currentTarget = currentTarget.parentNode;
    }
  }
  return currentTarget.getAttribute('city-index');
};

export { getSelectedFavoriteCity };
