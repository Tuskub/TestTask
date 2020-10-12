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

var setFocusOnCategoryList = setFocus(selectedCategory);

// Конкретная реализация прокрутки для категорий
function actionAfterScrollCategory(categoryName) {
  var filteredMoviesPrev = filterMovieByCategory(categoryName);
  displayMoviesList(filteredMoviesPrev);
}

var scrollToCategoryItem = scrollToElement(selectedCategory, "start");
var scrollCategoryListItem = scrollListItem(
  selectedCategory,
  scrollToCategoryItem,
  actionAfterScrollCategory,
  "textContent",
  1000
);
var horizontalScrollCategoryList = horizontalScrollList(scrollCategoryListItem);

// Создание пустого списка категорий
var categoryUL = createList(2, horizontalScrollCategoryList, setFocusOnCategoryList);

// Создание функции для заполнения списка элементами
var fillCategoryList = fillList(categoryUL, createCategoryListElement);