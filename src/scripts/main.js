// Main часть ;)

// Переменная, содержащая инофрмацию о расположении элеменов связанных с Информацией о фильме в DOM
var movieInfo = {
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


displayCategoryList(categoriesList);
displayMoviesList(moviesList);
