// Main часть ;)

// Переменная, содержащая инофрмацию о расположении элеменов связанных с Информацией о фильме в DOM
Movie.info = {
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
var movieUL = List.create(1, Movie.horizontalScrollList, Movie.setFocusOnList);
// Создание функции для заполнения списка элементами
var fillMovieList = List.fill(movieUL, Movie.createListElement);

// Создание пустого списка категорий
var categoryUL = List.create(2, Category.horizontalScrollList, Category.setFocusOnList);
// Создание функции для заполнения списка элементами
var fillCategoryList = List.fill(categoryUL, Category.createListElement);

displayCategoryList(categoriesList, categoryContainer, categoryUL);
displayMoviesList(moviesList, movieContainer, movieUL);
