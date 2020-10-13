function createCategoryListElement(category) {
  var li = document.createElement("li");
  var p = document.createElement("p")
  p.innerText = category;
  li.classList.add("category");
  li.appendChild(p);
  return li;
}

//  Возвращает список фильмов которые соответствуют выбранной категории
function filterMovieByCategory(category) {
  if (category === "Все фильмы") {
    return moviesList;
  }
  var filteredMovie = [];
  for (var movie of moviesList) {
    var index = movie.category.indexOf(category);
    if (index !== -1) {
      filteredMovie.push(movie);
    }
  }
  return filteredMovie;
}

// css класс для выбранной категории
var selectedCategory = "selected-category";

var setFocusOnCategoryList = verticalFocus.set(selectedCategory);

// Конкретная реализация прокрутки для категорий
function actionAfterScrollCategory(categoryName) {
  var filteredMoviesPrev = filterMovieByCategory(categoryName);
  displayMoviesList(filteredMoviesPrev, movieContainer, movieUL);
}

var horizontalScrollCategoryList = horizontalScroll.create(
  selectedCategory,
  "start",
  actionAfterScrollCategory,
  "textContent",
  1000
);
