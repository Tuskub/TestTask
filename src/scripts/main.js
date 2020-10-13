// Main часть ;)

// Переменная, содержащая инофрмацию о расположении элеменов связанных с Информацией о фильме в DOM
movie.info = {
  title: document.getElementById("title"),
  countryYear: document.getElementById("country-year"),
  category: document.getElementById("category"),
  imdb: document.getElementById("imdb"),
  kinopoisk: document.getElementById("kinopoisk"),
  age: document.getElementById("age"),
  background: document.querySelector(".bg-image")
}

// Сохраняем div'ы в памяти для повторных обращений
var movieContainer = document.querySelector(".movie-container");
var categoryContainer = document.querySelector(".category-container");

var displayMoviesList = displayList(actionIfMovieListNotEmpty, actionIfMovieListEmpty);
var displayCategoryList = displayList(actionIfCategoryListNotEmpty, actionIfCategoryListEmpty);

// Создание пустого списка фильмов
var movieUL = list.create(1, movie.horizontalScrollList, movie.setFocusOnList);
// Создание функции для заполнения списка элементами
var fillMovieList = list.fill(movieUL, movie.createListElement);

// Создание пустого списка категорий
var categoryUL = list.create(2, horizontalScrollCategoryList, setFocusOnCategoryList);
// Создание функции для заполнения списка элементами
var fillCategoryList = list.fill(categoryUL, createCategoryListElement);

displayCategoryList(categoriesList, categoryContainer, categoryUL);
displayMoviesList(moviesList, movieContainer, movieUL);
