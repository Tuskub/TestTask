var HorizontalScroll = (function () {
  //  Настройка появления элемента при скроле к нему
  var _scrollToElement = function(selectedClass, inline) {
    return function (element) {
      element.scrollIntoView({inline: inline});
    };
  };

  //  Возвращает функцию, которая отвечает за смену текущего элемента на предыдущий или последующий
  var _scrollListItem = function(selectedClass, scrollToElement, actionAfterScroll, param, timeout) {
    return function (element, toLeftSide) {
      var scrollableItem = null;
      //  Узнаём в какую сторону необходимо прокрутить список
      if (toLeftSide) {
        scrollableItem = element.previousElementSibling;
      } else {
        scrollableItem = element.nextElementSibling;
      }
      //  Проверяем, что в выбранном направлении существуют объект
      if (scrollableItem !== null) {
        element.classList.remove(selectedClass, "underscore");
        // Добавляем лоадер
        if (timeout !== 0) {
          var loader = document.getElementById("loader");
          loader.style.display = "block";
          setTimeout(function () {
            loader.style.display = "none";
            actionAfterScroll(scrollableItem[param]);
          }, timeout);
          scrollableItem.classList.add(selectedClass, "underscore");
          scrollToElement(scrollableItem);
        } else {
          scrollableItem.classList.add(selectedClass, "underscore");
          scrollToElement(scrollableItem);
          actionAfterScroll(scrollableItem[param]);
        }
      };
    };
  };

  //  Результирующая функция, которая реализует функцианал перемещения элементов списка
  //  при нажатии на стрелки вправо-влево
  var _horizontalScrollList = function(scrollListItem) {
    return function (e) {
      var selected = document.querySelector(".underscore");
      switch (e.keyCode) {
        //  Стрелка влево
        case 37:
          scrollListItem(selected, true);
          break;
        //  Стрелка вправо
        case 39:
          scrollListItem(selected, false);
          break;
      };
    };
  };

  return {
    create: function (selectedClass, inline, actionAfterScroll, param, timeout) {
      var scrollToElement = _scrollToElement(selectedClass, inline);
      var scrollListItem = _scrollListItem(selectedClass, scrollToElement, actionAfterScroll, param, timeout);
      return _horizontalScrollList(scrollListItem);
    }
  };
})();
