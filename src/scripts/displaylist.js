function actionIfMovieListNotEmpty(moviesList, container, ul) {
  ul = fillMovieList(moviesList);
  ul.firstChild.classList.add("selected-movie");
  movie.fillInfo(ul.firstChild.id);
  container.replaceChild(ul, container.firstChild);
  document.querySelector(".movie-info").style.visibility = "visible";
}

function actionIfMovieListEmpty(container, ul) {
  var p = document.createElement("p");
  p.textContent = "В выбранной категории фильмы отсутствуют";
  container.replaceChild(p, ul);
  document.querySelector(".movie-info").style.visibility = "hidden";
  movie.info.background.style.background = "";
}

function actionIfCategoryListNotEmpty(categoriesList, container, ul) {
  ul = fillCategoryList(categoriesList);
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
