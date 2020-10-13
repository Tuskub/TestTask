function actionIfMovieListNotEmpty(moviesList, container, ul) {
  ul = Movie.fillList(moviesList);
  ul.firstChild.classList.add("selected-movie");
  Movie.fillInfo(ul.firstChild.id);
  container.replaceChild(ul, container.firstChild);
  document.querySelector(".movie-info").style.visibility = "visible";
}

function actionIfMovieListEmpty(container, ul) {
  var p = document.createElement("p");
  p.textContent = "В выбранной категории фильмы отсутствуют";
  container.replaceChild(p, ul);
  document.querySelector(".movie-info").style.visibility = "hidden";
  Movie.info.background.style.background = "";
}

function actionIfCategoryListNotEmpty(categoriesList, container, ul) {
  ul = Category.fillList(categoriesList);
  ul.firstChild.classList.add("selected-category");
  container.appendChild(ul);
}

function actionIfCategoryListEmpty(container, ul) {

}

function displayList(actionIfListNotEmpty, actionIfListEmpty) {
  return function (moviesList, container, ul) {
    if (moviesList.length !== 0) {
      actionIfListNotEmpty(moviesList, container, ul);
    } else {
      actionIfListEmpty(container, ul);
    }
  }
}
