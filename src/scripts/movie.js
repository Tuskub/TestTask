//  Заполняет информацию о фильме в нижней части экрана
function fillMovieInfo(movieID) {
  var movieIndex = moviesList.findIndex(function (movie) {
    return movie.id === movieID;
  });
  var selectedMovie = moviesList[movieIndex];
  var countryYear = selectedMovie.country.join(", ") + ", " + selectedMovie.year;
  movieInfo.title.innerText = selectedMovie.title;
  movieInfo.countryYear.innerText = countryYear;
  movieInfo.category.innerText = selectedMovie.category.join(", ");
  movieInfo.imdb.innerText = selectedMovie.imdb;
  movieInfo.kinopoisk.innerText = selectedMovie.kinopoisk;
  movieInfo.age.innerText = moviesList[movieIndex].age;
  movieInfo.background.style.backgroundImage = "url('" + selectedMovie.poster + "')";
}

function createMovieListElement(movie) {
  var li = document.createElement("li");
  var img = document.createElement("img");
  li.id = movie.id;
  img.src = movie.poster;
  img.alt = "Постер фильма " + movie.title;
  li.classList.add("movie");
  li.appendChild(img);
  return li;
}

var selectedMovieClass = "selected-movie";

var setFocusOnMovieList = setFocus(selectedMovieClass);

// Конкретная реализация прокрутки для фильмов

function actionAfterScrollMovie(id) {
  fillMovieInfo(id);
}

var scrollToMovie = scrollToElement(selectedMovieClass, "center");
var scrollMovieListItem = scrollListItem(
  selectedMovieClass,
  scrollToMovie,
  actionAfterScrollMovie,
  "id",
  0
);
var horizontalScrollMovieList = horizontalScrollList(scrollMovieListItem);

// Создание пустого списка фильмов
var movieUL = createList(1, horizontalScrollMovieList, setFocusOnMovieList);

// Создание функции для заполнения списка элементами
var fillMovieList = fillList(movieUL, createMovieListElement);
