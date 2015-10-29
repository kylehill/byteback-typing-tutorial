"use strict";

var forEach = function forEach(array, iterator, context) {
  for (var i = 0; i < array.length; i++) {
    iterator.call(context, array[i], i);
  }
};

var map = function map(array, iterator, context) {
  var out = [];
  for (var i = 0; i < array.length; i++) {
    out.push(iterator.call(context, array[i], i));
  }
  return out;
};

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var caps = map(letters, function (l) {
  return l.toUpperCase();
});
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var extras = ["space", ",", "<", ">", ".", "?", "/", ":", ";", "\"", "'", "{", "[", "}", "]", "|", "\\", "_", "-", "+", "=", "~", "`", "enter", "tab", "delete", "backspace"];

var keys = [].concat(letters, caps, numbers, extras);

var getHash = function getHash(loc) {
  if (!loc.hash) {
    return "";
  }

  var splitHash = loc.hash.split("#!/");
  return splitHash[1] || "";
};

var loadIntro = function loadIntro() {
  App.loadRoute("introduction");
};

var onHashChange = function onHashChange() {
  var hash = getHash(location);

  if (hash === "") {
    return loadIntro();
  }

  return App.loadRoute(hash);
};

var reloadSidebar = function reloadSidebar() {
  var state = App.tutorialState.getState();

  var lessonData = {
    sections: map(App.lessons.sections, function (section) {

      section.pages = map(section.pages, function (page) {
        if (page.lesson) {
          page.state = state.lessons[page.hash];
        }
        return page;
      });

      return section;
    })
  };

  // Add structural templates to the page
  $(".sidebar-content").html(App.templates.sidebar(lessonData));
};

var reloadState = function reloadState() {
  App.tutorialState.clearState();

  forEach(App.lessons.sections, function (section) {
    forEach(section.pages, function (page) {
      if (page.lesson) {
        App.tutorialState.addLesson(page);
      }
    });
  });

  App.tutorialState.save();
  reloadSidebar();
};

$(function () {

  App.registerHelpers();

  if (App.tutorialState.load() === false) {
    reloadState();
  }
  reloadSidebar();

  window.onhashchange = onHashChange;
  onHashChange();

  $(".js-sidebar-clearstats").on("click", function () {
    reloadState();
  });

  $("body").removeClass("hideUntilLoaded");
});