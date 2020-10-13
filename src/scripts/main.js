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
Movie.container = document.querySelector(".movie-container");
Category.container = document.querySelector(".category-container");

var displayMoviesList = DisplayList.display(Movie.actionIfListNotEmpty, Movie.actionIfListEmpty);
var displayCategoryList = DisplayList.display(Category.actionIfListNotEmpty, Category.actionIfListEmpty);

displayCategoryList(categoriesList, Category.container, Category.list);
displayMoviesList(moviesList, Movie.container, Movie.list);
