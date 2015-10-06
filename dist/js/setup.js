"use strict";

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var caps = letters.map(function (l) {
  return l.toUpperCase();
});
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var extras = ["space", ",", "<", ">", ".", "?", "/", ":", ";", "\"", "'", "{", "[", "}", "]", "|", "\\", "_", "-", "+", "=", "~", "`", "enter", "tab", "delete", "backspace"];

var keys = [].concat(letters, caps, numbers, extras);

var getPage = function getPage(hash, lessonsObject) {
  if (!lessonsObject || !lessonsObject.pageMap) {
    return false;
  }
  if (!lessonsObject.pageMap[hash]) {
    return false;
  }

  return lessonsObject.pageMap[hash];
};

var pageRoute = function pageRoute(context, next) {
  Mousetrap.reset();

  var page = getPage(context.params.hash, App.lessons);
  if (!page || !page.template) {
    return next();
  }

  $("main").html(App.templates.page);
  $(".page-container").html(App.templates[page.template]);

  if (page.lesson) {
    (function () {
      var cb = cueboard(".cueboard-container", {
        initialKeyState: "inactive",
        keyState: page.keys || {}
      });

      var tb = typebox(".typebox-container", {
        string: page.text
      });

      var state = tb.state();
      if (state.next) {
        cb.changeState("next", state.next);
      }

      Mousetrap.bind(keys, function (evt, key) {
        var result = tb.applyCharacter(key);

        if (result.accurate) {
          cb.changeState("active", key);
          if (result.next) {
            cb.changeState("next", result.next);
          }
        }

        if (evt.altKey || evt.metaKey || evt.ctrlKey) {
          return;
        }

        return false;
      });
    })();
  }
};

var loadIntro = function loadIntro(context, next) {
  pageRoute({ params: { hash: "introduction" } }, next);
};

$(function () {

  // Add structural templates to the page
  $("aside").html(App.templates.sidebar(App.lessons));

  // Setup router
  page("/:hash", pageRoute);
  page("/", loadIntro);

  // Start router
  page({
    hashbang: true
  });
});