var Movie = (function () {
  var myMovie = {};
  var _selectedMovie = "selected-movie";
  myMovie.info = {};
  myMovie.setFocusOnList = VerticalFocus.set(_selectedMovie);

  // Конкретная реализация прокрутки для фильмов
  var _actionAfterScroll = function (id) {
    Movie.fillInfo(id);
  }

  myMovie.horizontalScrollList = HorizontalScroll.create(
    _selectedMovie,
    "center",
    _actionAfterScroll,
    "id",
    0
  );

  //  Заполняет информацию о фильме в нижней части экрана
  myMovie.fillInfo =  function (id) {
    var movieIndex = moviesList.findIndex(function (movie) {
      return movie.id === id;
    });
    var selectedMovie = moviesList[movieIndex];
    var countryYear = selectedMovie.country.join(", ") + ", " + selectedMovie.year;
    myMovie.info.title.innerText = selectedMovie.title;
    myMovie.info.countryYear.innerText = countryYear;
    myMovie.info.category.innerText = selectedMovie.category.join(", ");
    myMovie.info.imdb.innerText = selectedMovie.imdb;
    myMovie.info.kinopoisk.innerText = selectedMovie.kinopoisk;
    myMovie.info.age.innerText = moviesList[movieIndex].age;
    myMovie.info.background.style.backgroundImage = "url('" + selectedMovie.poster + "')";
  };

  myMovie.createListElement = function (movie) {
    var li = document.createElement("li");
    var img = document.createElement("img");
    li.id = movie.id;
    img.src = movie.poster;
    img.alt = "Постер фильма " + movie.title;
    li.classList.add("movie");
    li.appendChild(img);
    return li;
  };

  return myMovie;
})();
