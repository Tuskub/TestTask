function displayMoviesList(moviesList) {
  var div = movieContainer;
  
  if (moviesList.length !== 0) {
    movieUL = fillMovieList(moviesList);
    fillMovieInfo(movieUL.firstChild.id);
    movieUL.firstChild.classList.add("selected-movie");
    div.replaceChild(movieUL, div.firstChild);
    document.querySelector(".movie-info").style.visibility = "visible";

  } else {
    var p = document.createElement("p");
    p.textContent = "В выбранной категории фильмы отсутствуют";
    div.replaceChild(p, movieUL);
    document.querySelector(".movie-info").style.visibility = "hidden";
    movieInfo.background.style.background = "";
  }
}

function displayCategoryList(categoriesList) {
  var div = categoryContainer;
  categoryUL = fillCategoryList(categoriesList);
  categoryUL.firstChild.classList.add("selected-category");
  div.appendChild(categoryUL);
}
