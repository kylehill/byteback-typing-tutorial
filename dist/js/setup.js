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

  $("main").html(App.templates.page(page));

  $(".page-content").html(App.templates[page.template](page));

  if (!page.lesson) {
    return;
  }

  $(".start-exercise-button").addClass("active").on("click", function () {
    $(".page-container").addClass("exercise");
  });

  cueboard(".instruction-cueboard-container", {
    initialKeyState: "inactive",
    keyState: page.keys || {}
  });

  var cb = cueboard(".exercise-cueboard-container", {
    initialKeyState: "inactive",
    keyState: {
      active: page.keys.active || []
    }
  });

  var tb = typebox(".typebox-container", {
    string: page.text
  });

  var sc = window.sc = scorecenter(".scorecenter-container", {
    refresh: 250,
    metrics: [{
      name: "characters",
      type: "counter"
    }, {
      name: "errors",
      type: "counter"
    }, {
      name: "clock",
      type: "timer"
    }, {
      name: "words",
      type: "counter"
    }],
    displays: [{
      title: "Characters",
      metric: "characters"
    }, {
      title: "Errors",
      metric: "errors"
    }, {
      title: "Accuracy",
      format: function format(value) {
        return Math.round(value * 1000) / 10 + "%";
      },
      value: function value(map) {
        var characters = map.characters.value();
        var errors = map.errors.value();
        return characters / (characters + errors || 1);
      }
    }, {
      title: "Words Per Minute",
      format: function format(value) {
        return Math.round(value * 10) / 10;
      },
      value: function value(map) {
        var words = map.words.value();
        var clock = map.clock.value();

        return words / ((clock || 1) / 60000);
      }
    }]
  });

  var state = tb.state();
  if (state.next) {
    cb.changeState("next", state.next);
  }

  Mousetrap.bind(keys, function (evt, key) {
    sc.getMetric("clock").start();
    var result = tb.applyCharacter(key);

    if (result.accurate === true) {
      sc.getMetric("characters").increment();
      cb.changeState("active", key);

      if (result.next) {
        cb.changeState("next", result.next);
      }

      if (result.next === " " || result.complete) {
        sc.getMetric("words").increment();
      }
    }

    if (result.accurate === false) {
      sc.getMetric("errors").increment();
    }

    if (result.complete) {
      sc.getMetric("clock").stop();
      sc.stop();
    }

    return evt.altKey || evt.metaKey || evt.ctrlKey;
  });
};

var loadIntro = function loadIntro(context, next) {
  pageRoute({ params: { hash: "introduction" } }, next);
};

$(function () {

  var base = location.pathname.substr(0, location.pathname.length - 1);

  // Add structural templates to the page
  $("aside").html(App.templates.sidebar(App.lessons));

  // Setup router
  page("/:hash", pageRoute);
  page("/", loadIntro);

  page(base, loadIntro);

  // Start router
  page({
    hashbang: true
  });
  page.base(base);

  window.onhashchange = function (evt) {
    page.redirect(evt.newURL.split("#!")[1]);
  };
});