var Category = (function () {
  var myCategory = {};
  //  css класс для выбранной категории
  var _selectedCategory = "selected-category";
  myCategory.container = null;
  myCategory.setFocusOnList = VerticalFocus.set(_selectedCategory);
  //  Возвращает список фильмов которые соответствуют выбранной категории
  var _filterMovie = function (category) {
    if (category === "Все фильмы") {
      return moviesList;
    }
    var filteredMovie = [];
    for (var i = 0; i < moviesList.length; i++) {
      var index = moviesList[i].category.indexOf(category);
      if (index !== -1) {
        filteredMovie.push(moviesList[i]);
      }
    };
    console.log(filteredMovie)
    return filteredMovie;
  };

  // Конкретная реализация прокрутки для категорий
  var _actionAfterScroll = function (categoryName) {
    var filteredMoviesPrev = _filterMovie(categoryName);
    displayMoviesList(filteredMoviesPrev, Movie.container, Movie.list);
  };

  myCategory.horizontalScrollList = HorizontalScroll.create(
    _selectedCategory,
    "start",
    _actionAfterScroll,
    "textContent",
    1000
  );

  myCategory.createListElement = function (category) {
    var li = document.createElement("li");
    var p = document.createElement("p")
    p.innerText = category;
    li.classList.add("category");
    li.appendChild(p);
    return li;
  };

  myCategory.list = List.create(2, myCategory.horizontalScrollList, myCategory.setFocusOnList);
  myCategory.fillList = List.fill(myCategory.list, myCategory.createListElement);

  myCategory.actionIfListNotEmpty = function (categoriesList, container, ul) {
    ul = myCategory.fillList(categoriesList);
    ul.firstChild.classList.add("selected-category");
    container.appendChild(ul);
  };

  myCategory.actionIfListEmpty = function actionIfCategoryListEmpty(container, ul) {}

  return myCategory;
})();
