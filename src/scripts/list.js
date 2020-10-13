// Возвращает функцию, которая заполняет ul по переданному правилу createListElement
function fillList (ul, createListElement) {
  return function (list) {
    ul.innerHTML = "";
    for (var i = 0; i < list.length; i++) {
      var li = createListElement(list[i]);
      ul.appendChild(li);
    }
    return ul;
  }
}

// Создает объект ul и привязывает к нему переданные события
function createList (tabIndex, horizontalScrollList, setFocusOnList) {
  var ul = document.createElement("ul");
  ul.classList.add("scrolled-list");
  ul.tabIndex = tabIndex;
  ul.addEventListener("keydown", horizontalScrollList);
  ul.addEventListener("keydown", moveFocus);
  ul.addEventListener("focus", setFocusOnList);
  ul.addEventListener("blur", lostFocus);
  return ul;
}
