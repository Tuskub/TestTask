var List = (function () {
  var myList = {}

  // Создает объект ul и привязывает к нему переданные события
  myList.create = function (tabIndex, horizontalScrollList, setFocusOnList) {
    var ul = document.createElement("ul");
    ul.classList.add("scrolled-list");
    ul.tabIndex = tabIndex;
    ul.addEventListener("keydown", horizontalScrollList);
    ul.addEventListener("keydown", VerticalFocus.move);
    ul.addEventListener("focus", setFocusOnList);
    ul.addEventListener("blur", VerticalFocus.lost);
    return ul;
  };

  // Возвращает функцию, которая заполняет ul по переданному правилу createListElement
  myList.fill = function (ul, createListElement) {
    return function (list) {
      ul.innerHTML = "";
      for (var i = 0; i < list.length; i++) {
        var li = createListElement(list[i]);
        ul.appendChild(li);
      }
      return ul;
    };
  };
  return myList;
})();