var Movie = (function () {
  var myMovie = {};

  var _selectedMovie = "selected-movie";

  myMovie.info = {};
  myMovie.container = null;
  myMovie.setFocusOnList = VerticalFocus.set(_selectedMovie);

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

  // Конкретная реализация прокрутки для фильмов
  var _actionAfterScroll = function (id) {
    myMovie.fillInfo(id);
  };

  myMovie.horizontalScrollList = HorizontalScroll.create(
    _selectedMovie,
    "center",
    _actionAfterScroll,
    "id",
    0
  );

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

  // Создаем объект в котором будут находится фильмы
  myMovie.list = List.create(1, myMovie.horizontalScrollList, myMovie.setFocusOnList);
  myMovie.fillList = List.fill(myMovie.list, myMovie.createListElement);

  myMovie.actionIfListNotEmpty = function (moviesList, container, ul) {
    ul = myMovie.fillList(moviesList);
    ul.firstChild.classList.add("selected-movie");
    myMovie.fillInfo(ul.firstChild.id);
    container.replaceChild(ul, container.firstChild);
    document.querySelector(".movie-info").style.visibility = "visible";
  };

  myMovie.actionIfListEmpty = function (container, ul) {
    var p = document.createElement("p");
    p.textContent = "В выбранной категории фильмы отсутствуют";
    container.replaceChild(p, ul);
    document.querySelector(".movie-info").style.visibility = "hidden";
    myMovie.info.background.style.background = "";
  };

  return myMovie;
})();
