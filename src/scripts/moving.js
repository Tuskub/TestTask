//  Данная функция позволяет переключать фокус между фильмами и категорями
function moveFocus (e) {
  switch (e.keyCode) {
    // Стрелка вверх
    case 38:
      document.querySelector("ul[tabindex='2']").focus();
      break;
    // Стрелка вниз
    case 40:
      document.querySelector("ul[tabindex='1']").focus();
      break;
  }
}

//  Удаляет нижнее подчеркивание под элементом, который находится в списле без фокуса
function lostFocus (e) {
  var underscoreElement = document.querySelector(".underscore");
  underscoreElement.classList.remove("underscore");
}

//  Позволяет подчеркнуть элемен при смене фокуса
function setFocus (cssClass) {
  return function setFocus (e) {
    var underscoreElement = document.querySelector("." + cssClass);
    underscoreElement.classList.add("underscore");
  }
}
