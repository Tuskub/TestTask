var VerticalFocus = (function () {
  var vertFocus = {};

  vertFocus.set = function (cssClass) {
    return function setFocus (e) {
      var underscoreElement = document.querySelector("." + cssClass);
      underscoreElement.classList.add("underscore");
    };
  };

  vertFocus.lost = function (e) {
    var underscoreElement = document.querySelector(".underscore");
    underscoreElement.classList.remove("underscore");
  };

  vertFocus.move = function (e) {
    switch (e.keyCode) {
      // Стрелка вверх
      case 38:
        document.querySelector("ul[tabindex='2']").focus();
        break;
      // Стрелка вниз
      case 40:
        document.querySelector("ul[tabindex='1']").focus();
        break;
    };
  };

  return vertFocus;
})();
