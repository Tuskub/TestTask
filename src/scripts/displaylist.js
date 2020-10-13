var DisplayList = (function () {
  return {
    display: function (actionIfListNotEmpty, actionIfListEmpty) {
      return function (moviesList, container, ul) {
        if (moviesList.length !== 0) {
          actionIfListNotEmpty(moviesList, container, ul);
        } else {
          actionIfListEmpty(container, ul);
        }
      };
    }
  };
})();

