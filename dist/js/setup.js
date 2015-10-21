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

var getPage = function getPage(hash, lessonsObject) {
  if (!lessonsObject || !lessonsObject.pageMap) {
    return false;
  }
  if (!lessonsObject.pageMap[hash]) {
    return false;
  }

  return lessonsObject.pageMap[hash];
};

var pageRoute = function pageRoute(hash) {
  Mousetrap.reset();

  var page = getPage(hash, App.lessons);

  $(".main").html(App.templates.page(page));

  $(".page-content").html(App.templates[page.template](page));

  if (!page.lesson) {
    return;
  }

  $(".start-exercise-button").addClass("active").on("click", function () {
    $(".page-container").addClass("exercise");
  });

  cueboard(".instruction-cueboard-container", {
    initialKeyState: "inactive",
    keyState: {
      learned: page.keys.active,
      "new": page.keys["new"]
    }
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

  var sc = scorecenter(".scorecenter-container", {
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
      finishLesson(page, sc);
    }

    return evt.altKey || evt.metaKey || evt.ctrlKey;
  });
};

var loadIntro = function loadIntro() {
  pageRoute("introduction");
};

var onHashChange = function onHashChange() {
  var hash = getHash(location);

  if (hash === "") {
    return loadIntro();
  }

  return pageRoute(hash);
};

var finishLesson = function finishLesson(page, sc) {
  sc.getMetric("clock").stop();
  sc.stop();
  sc.refresh();

  var completed = sc.getMetric("errors").value() <= 5;
  var wpm = sc.getMetric("words").value() / sc.getMetric("clock").value() * 60000;
  var accuracy = sc.getMetric("characters").value() / (sc.getMetric("errors").value() + sc.getMetric("characters").value());

  var lesson = App.tutorialState.markLesson(page.hash, {
    completed: completed,
    wpm: wpm,
    accuracy: accuracy
  });

  reloadSidebar();

  $(".overlay-container").html(App.templates.overlay({
    completed: completed,
    accuracy: {
      average: lesson.average.accuracy,
      best: lesson.iterations.sort(function (a, b) {
        return b.accuracy - a.accuracy;
      }).slice(0, 5)
    },
    wpm: {
      average: lesson.average.wpm,
      best: lesson.iterations.sort(function (a, b) {
        return b.wpm - a.wpm;
      }).slice(0, 5)
    }
  }));
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

  var base = location.pathname.substr(0, location.pathname.length - 1);
  reloadSidebar();

  if (App.tutorialState.load() === false) {
    reloadState();
  }

  window.onhashchange = onHashChange;
  onHashChange();

  $(".js-sidebar-clearstats").on("click", function () {
    reloadState();
  });
});