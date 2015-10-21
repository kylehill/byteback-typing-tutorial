"use strict";

;(function () {

  var helpers = function helpers() {

    Handlebars.registerHelper("percent", function (value) {
      return Math.round(value * 1000) / 10 + "%";
    });

    Handlebars.registerHelper("round", function (value) {
      return Math.round(value * 10) / 10;
    });

    Handlebars.registerHelper("humanize", function (value) {
      var msDelta = new Date().valueOf() - value;

      // Less than 5 seconds, go with "Just Now"
      if (msDelta < 5 * 1000) {
        return "just now";
      }

      // Less than 1 minutes, go with "X seconds ago"
      if (msDelta < 60 * 1000) {
        return Math.floor(msDelta / 1000) + " seconds ago";
      }

      // Less than 1 hour, go with "X minutes ago"
      if (msDelta < 60 * 60 * 1000) {
        if (msDelta < 2 * 60 * 1000) {
          return "1 minute ago";
        }

        return Math.floor(msDelta / (60 * 1000)) + " minutes ago";
      }

      // Less than 1 day, go with "X hours ago"
      if (msDelta < 24 * 60 * 60 * 1000) {
        if (msDelta < 2 * 60 * 60 * 1000) {
          return "1 hour ago";
        }

        return Math.floor(msDelta / (60 * 60 * 1000)) + " hours ago";
      }

      // Go with "X days ago"
      if (msDelta < 2 * 24 * 60 * 60 * 1000) {
        return "yesterday";
      }

      return Math.floor(msDelta / (24 * 60 * 60 * 1000)) + " days ago";
    });
  };

  var PackageDefinition = helpers;
  var PackageName = "registerHelpers";

  if ("undefined" !== typeof exports) module.exports = PackageDefinition;else if ("function" === typeof define && define.amd) {
    define(PackageName, function () {
      return PackageDefinition;
    });
  } else {
    window.App = window.App || {};
    window.App[PackageName] = PackageDefinition;
  }
})();
"use strict";

;(function () {

  var lessons = {
    sections: [{
      pages: [{
        title: "Introduction",
        hash: "introduction",
        template: "introduction",
        lesson: false
      }, {
        title: "How to Type",
        hash: "how-to-type",
        template: "how-to-type",
        lesson: false
      }, {
        title: "Using the Tutorial",
        hash: "using-the-tutorial",
        template: "using-the-tutorial",
        lesson: false
      }]
    }, {
      pages: [{
        title: "Test Lesson",
        fullTitle: "Testing Lesson",
        hash: "test",
        template: "lesson-1",
        lesson: true,
        text: "hello world",
        keys: {
          active: ["H", "E", "L", "O", "W", "R", "D", "Space"]
        }
      }, {
        title: "Lesson #1",
        fullTitle: "Lesson #1: Left Hand, Home Row",
        hash: "lesson-1",
        template: "lesson-1",
        lesson: true,
        text: "a s d f s d f f s d as sd ad fs ds sad af sa fa dafa sda dad das afa sfd add sasd df sf saf dds fd ads safd fsd fas sas dafs as fad",
        keys: {
          active: ["A", "S", "D", "F", "Space"],
          "new": ["A", "S", "D", "F", "Space"]
        }
      }, {
        title: "Lesson #2",
        fullTitle: "Lesson #2: Right Hand, Home Row",
        hash: "lesson-2",
        template: "lesson-2",
        lesson: true,
        text: "j k l ; l j k ; j l j k jk jl j; lk ;j jl kj jk ;j l; kl jl kj j klj kk j lj k klj jk; kkj jlk llj kjj ;k lj jk kj lk jj l kjl",
        keys: {
          active: ["J", "K", "L", ";", "Space"],
          "new": ["J", "K", "L", ";"]
        }
      }, {
        title: "Lesson #3",
        fullTitle: "Lesson #3: Both Hands, Home Row",
        hash: "lesson-3",
        template: "lesson-3",
        lesson: true,
        text: "all salads flask; jasks flak sad fall klad lad dajd aj jal safs; fads salks jads flads dj ask; dallas salad kalds afls;",
        keys: {
          active: ["A", "S", "D", "F", "J", "K", "L", ";", "Space"]
        }
      }, {
        title: "Lesson #4",
        fullTitle: "Lesson #4: Home Row with G and H",
        hash: "lesson-4",
        template: "lesson-4",
        lesson: true,
        text: "f g fg gf j h jh hj had jag ask gag sagas gash hag klash flags add glad lag salad lash falls lads gas flask; shall sad dash halk glass",
        keys: {
          active: ["G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["G", "H"]
        }
      }, {
        title: "Lesson #5",
        fullTitle: "Lesson #5: E and I",
        hash: "lesson-5",
        template: "lesson-5",
        lesson: true,
        text: "d de ed de k ki ik ki fed sea hike fade flik jedi flies; skies dial isle seed file skied slide likes jails deal shield hide glide shells figs",
        keys: {
          active: ["E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["E", "I"]
        }
      }, {
        title: "Lesson #6",
        fullTitle: "Lesson #6: R and U",
        hash: "lesson-6",
        template: "lesson-6",
        lesson: true,
        text: "j u ju uj f r r f fr free juries real lull judge read fear shred dusk rash hush grease rake grid fudge hush fired deaf duke rude fired",
        keys: {
          active: ["R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["R", "U"]
        }
      }, {
        title: "Lesson #7",
        fullTitle: "Lesson #7: T and Y",
        hash: "lesson-7",
        template: "lesson-7",
        lesson: true,
        text: "f ft ftg j jy jyh retreat fly just kite year stay treat yikes hurt hurry they style yak dart health great take later litter haste justify",
        keys: {
          active: ["T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["T", "Y"]
        }
      }, {
        title: "Lesson #8",
        fullTitle: "Lesson #8: B and N",
        hash: "lesson-8",
        template: "lesson-8",
        lesson: true,
        text: "j n jn nj f b fb bf find big bury near jab junk burn brink nab bane nasal blind enable bring jab blend fans bandit nifty baffled banana",
        keys: {
          active: ["B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["B", "N"]
        }
      }, {
        title: "Lesson #9",
        fullTitle: "Lesson #9: V and M",
        hash: "lesson-9",
        template: "lesson-9",
        lesson: true,
        text: "f v fv fv j m jm jam vat man vase made mind venus move steam very ever middle veil viking never valve rhyme vanity hive",
        keys: {
          active: ["V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["V", "M"]
        }
      }, {
        title: "Lesson #10",
        fullTitle: "Lesson #10: W and O",
        hash: "lesson-10",
        template: "lesson-10",
        lesson: true,
        text: "s sw ws l lo ol lol work dock weak toy row lord mow worth newt song few lower wind howl web body write low frog jaw",
        keys: {
          active: ["W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["W", "O"]
        }
      }, {
        title: "Lesson #11",
        fullTitle: "Lesson #11: Q and P",
        hash: "lesson-11",
        template: "lesson-11",
        lesson: true,
        text: "a q aq aq ; ;p ;p play paper quit pale quin quail please quietly pink queen quip cape quart pantry equal please post quill",
        keys: {
          active: ["Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["Q", "P"]
        }
      }, {
        title: "Lesson #12",
        fullTitle: "Lesson #12: C and ,",
        hash: "lesson-12",
        template: "lesson-12",
        lesson: true,
        text: "d c dc cd k , k, ,k cat, cow, corn, city, comma; the black car cast quickly, counting, trace, occur space, cold, act, chat, and catch",
        keys: {
          active: ["C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["C", ","]
        }
      }, {
        title: "Lesson #13",
        fullTitle: "Lesson #13: Z, X, and .",
        hash: "lesson-13",
        template: "lesson-13",
        lesson: true,
        text: "a az za s x sx l l. .l tax. zap. extra exact. plaza axle waltz. f.o.x. pizza text. dizzy. exit taxi crazy. zoo exam. next prize",
        keys: {
          active: ["Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["Z", "X", "."]
        }
      }, {
        title: "Lesson #14",
        fullTitle: "Lesson #14: The Shift Key",
        hash: "lesson-14",
        template: "lesson-14",
        lesson: true,
        text: "France, Australia, U.S.A. Tom, Fred, Jan. Egypt Germany Washington. March, April, May, Thursday Friday Saturday.",
        keys: {
          active: ["Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["Left-Shift", "Right-Shift"]
        }
      }, {
        title: "Lesson #15",
        fullTitle: "Lesson #15: ? and !",
        hash: "lesson-15",
        template: "lesson-15",
        lesson: true,
        text: "; / ;? /? 1 ! 1!1! Where did he go? There! When? Now! Exit! Why? Because I said so! No! What? Really!? Yes!",
        keys: {
          active: ["?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["?", "!"]
        }
      }, {
        title: "Final Test",
        fullTitle: "Final Test",
        hash: "final-test",
        template: "final-test",
        lesson: true,
        text: "How does it feel to have completed our typing tutorial? Before you call yourself an expert, however, just pass this quick quiz. Do not be lazy, for if you do a careless job on this evaluation, you should take it again. Make your best effort. Doing great? Almost finished! Now time to get your score!",
        keys: {
          active: ["?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
        }
      }]
    }, {
      title: "Advanced",
      pages: [{
        title: "Lesson #1",
        fullTitle: "Advanced Lesson #1: ( and )",
        hash: "advanced-lesson-1",
        template: "advanced-lesson-1",
        lesson: true,
        text: "(cat) (hex) (zap) (goal) (sign) (seek) (extra) ((Good)game) (daily) ;) (quake) )( (Wreck) (barn) (orient) (open) (drop)",
        keys: {
          active: ["(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["(", ")"]
        }
      }, {
        title: "Lesson #2",
        fullTitle: "Advanced Lesson #2: ' and \"",
        hash: "advanced-lesson-2",
        template: "advanced-lesson-2",
        lesson: true,
        text: "Said Joy, \"Didn't, I hear 'yes?'\" \"No,\" said Quinn, \"It's not 'cause that's wrong.\" \"Listen to me!\" \"I heard you say 'no'.\" \"Let's not.\"",
        keys: {
          active: ["'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["'"]
        }
      }, {
        title: "Lesson #3",
        fullTitle: "Advanced Lesson #3: :, -, and /",
        hash: "advanced-lesson-3",
        template: "advanced-lesson-3",
        lesson: true,
        text: "CD-ROM: Computer/monitor/keyboard: tools-for-using-computers. Red/Blue/Yellow: Color-scheme: Primary-colors. : )",
        keys: {
          active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["-"]
        }
      }]
    }, {
      title: "Extra Practice",
      pages: [{
        title: "Practice #1",
        hash: "practice-1",
        template: "extra-practice-1",
        lesson: true,
        text: "\"They want to deliver vast amounts of information over the internet. And again, the internet is not something you just dump something on. It's not a truck. It's a series of tubes! And if you don't understand those tubes can be filled and if they are filled, when you put your message in, it gets in line and its going to be delayed by anyone that puts into that tube enormous amounts of material, enormous amounts of material.\"",
        keys: {
          active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
        }
      }, {
        title: "Practice #2",
        hash: "practice-2",
        template: "extra-practice-2",
        lesson: true,
        text: "The name \"echo\" comes from the Greek nymph Echo. According to Greek mythology, Echo was a Nymph who had the job of talking incessantly to Hera, the Queen of the Gods. Hera caught on to Echo's trick and cursed her to only be able to say what others had just said - hence the word \"echo\". \"A duck's quack doesn't echo,\" is a much quoted scientific myth. The truth is that a duck's quack in fact, does echo, however it may be difficult to hear.",
        keys: {
          active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
        }
      }, {
        title: "Practice #3",
        hash: "practice-3",
        template: "extra-practice-3",
        lesson: true,
        text: "The Walrus and the Carpenter walked on a mile or so, and then rested on a rock - conveniently low: and all the little oysters stood and waited in a row. \"The time has come,\" the Walrus said, \"To talk of many things: Of shoes-and ships-and sealing-wax-Of cabbages-and kings-And why the sea is boiling hot-And whether pigs have wings.\"",
        keys: {
          active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
        }
      }, {
        title: "Practice #4",
        hash: "practice-4",
        template: "extra-practice-4",
        lesson: true,
        text: "Extreme Ironing (or EI) is an extreme sport and a performance art in which people take an ironing board to a remote location and iron a few items of clothing. According to the official website, extreme ironing is \"the latest danger sport that combines the thrills of an extreme outdoor activity with the satisfaction of a well-pressed shirt.\" Part of the attraction and interest the media has towards extreme ironing seems to centre on the issue of whether it is really a sport or not. It is widely considered to be tongue-in-cheek.",
        keys: {
          active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
        }
      }, {
        title: "Practice #5",
        hash: "practice-5",
        template: "extra-practice-5",
        lesson: true,
        text: "Though the traditional notion of rain in the Western World is negative, rain can also bring joy, as some consider it to be soothing or enjoy the aesthetic appeal of it. In dry places, such as parts of Africa, Australia, India, and the Middle East, rain is greeted with euphoria. (In Botswana, the Setswana word for rain, \"pula,\" is used as the name of the national currency, in recognition of the economic importance of rain in this desert country.)",
        keys: {
          active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
        }
      }]
    }, {
      pages: [{
        title: "Resources",
        hash: "resources",
        template: "resources",
        lesson: false
      }]
    }]
  };

  var reduce = function reduce(array, iterator, memory, context) {
    for (var i = 0; i < array.length; i++) {
      memory = iterator.call(context, memory, array[i]);
    }

    return memory;
  };

  lessons.pageMap = reduce(lessons.sections, function (mem, section) {
    return reduce(section.pages, function (mem, page) {
      mem[page.hash] = page;
      return mem;
    }, mem);
  }, {});

  var PackageDefinition = lessons;
  var PackageName = "lessons";

  if ("undefined" !== typeof exports) module.exports = PackageDefinition;else if ("function" === typeof define && define.amd) {
    define(PackageName, function () {
      return PackageDefinition;
    });
  } else {
    window.App = window.App || {};
    window.App[PackageName] = PackageDefinition;
  }
})();
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
"use strict";

;(function () {

  var reduce = function reduce(array, iterator, memory, optionalContext) {
    for (var i = 0; i < array.length; i++) {
      memory = iterator.call(optionalContext, memory, array[i], i);
    }
    return memory;
  };

  var state = {
    lessons: {}
  };

  var tutorialState = {

    clearState: function clearState() {
      state = {
        lessons: {}
      };
    },

    getState: function getState() {
      return state;
    },

    addLesson: function addLesson(lesson) {
      state.lessons[lesson.hash] = {
        title: lesson.title,
        hash: lesson.hash,
        status: {
          completed: false,
          started: false
        },
        best: {
          accuracy: 0,
          wpm: 0
        },
        average: {
          accuracy: 0,
          wpm: 0
        },
        iterations: []
      };
    },

    markLesson: function markLesson(hash, stats) {
      var lesson = state.lessons[hash];
      var statsObject = {
        wpm: stats.wpm,
        accuracy: stats.accuracy,
        complete: stats.complete,
        date: new Date().valueOf()
      };

      lesson.status.started = true;
      if (stats.completed) {
        lesson.status.completed = true;
      }

      lesson.iterations.push(statsObject);

      lesson.best = reduce(lesson.iterations, function (mem, i) {
        return {
          accuracy: Math.max(mem.accuracy, i.accuracy),
          wpm: Math.max(mem.wpm, i.wpm)
        };
      }, { wpm: 0, accuracy: 0 });

      lesson.average = reduce(lesson.iterations, function (mem, i) {
        return {
          accuracy: mem.accuracy + i.accuracy,
          wpm: mem.wpm + i.wpm
        };
      }, { wpm: 0, accuracy: 0 });

      lesson.average.accuracy = lesson.average.accuracy / lesson.iterations.length;
      lesson.average.wpm = lesson.average.wpm / lesson.iterations.length;

      this.save();

      return lesson;
    },

    serialize: function serialize() {
      return JSON.stringify(state);
    },

    deserialize: function deserialize(stateString) {
      state = JSON.parse(stateString);
    },

    save: function save() {
      var stateString = this.serialize();
      localStorage.setItem("tt-data", stateString);
    },

    load: function load() {
      var stateString = localStorage.getItem("tt-data");
      if (stateString) {
        this.deserialize(stateString);
        return true;
      }

      return false;
    }

  };

  var PackageDefinition = tutorialState;
  var PackageName = "tutorialState";

  if ("undefined" !== typeof exports) module.exports = PackageDefinition;else if ("function" === typeof define && define.amd) {
    define(PackageName, function () {
      return PackageDefinition;
    });
  } else {
    window.App = window.App || {};
    window.App[PackageName] = PackageDefinition;
  }
})();
this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};
this["App"]["templates"]["advanced-lesson-1"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Advanced Lesson #1: ( and )\n</h2>\n\n<p>\n  An important part of word processing is the use of parenthesis. \n  These are also \"secondary\" or modified keys, so to type \n  parenthesis you will need to be holding down the <strong>shift</strong> \n  key with the <strong>left pinky</strong>. The \n  <strong>opening parenthesis</strong> is typed by reaching the \n  <strong>right ring finger</strong> up 2 rows. The \n  <strong>closing parenthesis</strong> is typed by reaching the \n  </strong>right pinky</strong> up 2 rows.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  This will be tricky, but is very useful once you master it!\n</p>";
},"useData":true});
this["App"]["templates"]["advanced-lesson-2"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Advanced Lesson #2: ' and \"\n</h2>\n\n<p>\n  If you need to type dialogue, or want to use contractions, \n  it is necessary to use the <strong>\"</strong> and <strong>'</strong> \n  key. Both are typed by reaching the <strong>left pinky to the right.</strong> \n  The primary symbol is ' so to type ' simply strike the key. \n  To type a \" hold <strong>shift</strong> with the <strong>left pinky</strong> \n  while striking the key with the right.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Only one more lesson to go!\n</p>";
},"useData":true});
this["App"]["templates"]["advanced-lesson-3"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Advanced Lesson #3: :, -, and /\n</h2>\n\n<p>\n  The last lesson is some more useful punctuation and symbols. \n  The colon is the secondary symbol on the semicolon key, \n  and is typed by holding down the <strong>shift</strong> key and \n  typing the <strong>;</strong> key with the \n  <strong>right pinky</strong>. The <strong>-</strong> is used to \n  hyphenate words and to separate thoughts. This is reached with \n  the <strong>right pinky</strong> and is the primary key so you \n  do not have to hold down shift. Last, the <strong>/</strong> is \n  typed with the <strong>right pinky</strong> by reaching down, \n  and it is also a primary key.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Try the extra challenges when you finish!\n</p>";
},"useData":true});
this["App"]["templates"]["extra-practice-1"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Extra Practice #1: \"A Series of Tubes\"\n</h2>\n\n<p>\n  On June 28, 2006, Senator Ted Stevens (R - Alaska) delivered a speech that included this misinformed understanding of how the internet works.\n</p>";
},"useData":true});
this["App"]["templates"]["extra-practice-2"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Extra Practice #2: \"Echo\"\n</h2>\n\n<p>\n  This passage is adapted from the Wikipedia entry for \n  <a href=\"http://en.wikipedia.org/wiki/Echo_(phenomenon)\">\n    the word \"echo.\"\n  </a>\n</p>";
},"useData":true});
this["App"]["templates"]["extra-practice-3"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Extra Practice #3: \"The Walrus and The Carpenter\"\n</h2>\n\n<p>\n  This passage is two stanzas of a famous Lewis Carrol poem, \n  <a href=\"http://www.jabberwocky.com/carroll/walrus.html\">\n    \"The Walrus and The Carpenter\". \n  </a>\n  The poem was also recited in Alice in Wonderland by \n  Tweedledee and Tweedledum.\n</p>\n";
},"useData":true});
this["App"]["templates"]["extra-practice-4"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Extra Practice #4: \"Extreme Ironing\"\n</h2>\n\n<p>\n  This exercise is an excerpt from the Wikipedia article on \n  <a href=\"http://en.wikipedia.org/wiki/Extreme_ironing\">\n    \"Extreme Ironing.\"\n  </a>\n</p>";
},"useData":true});
this["App"]["templates"]["extra-practice-5"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Extra Practice #5: \"Rain\"\n</h2>\n\n<p>\n  This text is taken from the Wikipedia article on \n  <a href=\"http://en.wikipedia.org/wiki/Rain\">\n    rain.\n  </a>\n</p>";
},"useData":true});
this["App"]["templates"]["final-test"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Final Test\n</h2>\n\n<p>\n  You have now completed all 15 lessons and are ready for the final \n  test! However, you can still take the Advanced Lessons to learn \n  more punctuation, symbols, and numbers, or use the Extra Exercises \n  for more practice. The more you type, the more your speed and \n  accuracy will improve! Additionally, you'll find more tests, \n  exercises, lessons, and even games on the \n  <a href=\"#!/resources\">Resources</a> page.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Congratulations!\n</p>";
},"useData":true});
this["App"]["templates"]["how-to-type"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  How To Type: Hand Placement, Posture, &amp; Tips\n</h2>\n\n<p>\n  To type most effectively and safely, follow these guidelines.\n</p>\n\n<h3>\n  Hand Placement\n</h3>\n\n<p>\n  Place your fingers on the \"home row,\" with your index fingers \n  on <strong>F</strong> and <strong>J</strong> (note the small \n  bump on those two keys) and all other fingers on the next keys.\n</p>\n\n<div class=\"page-featureimage\">\n  <img src=\"dist/img/figure1.gif\" />\n</div>\n\n<p>\n  Your fingers should always remain on home row except when \n  performing a reach as part of a keystroke. The more you move \n  your fingers, the less efficient your typing will be!\n</p>\n\n<h3>\n  Posture\n</h3>\n\n<p>\n  To type correctly with the lowest risk for injury,\n</p>\n\n<img src=\"dist/img/posture.jpg\" class=\"floated floated-right\" />\n\n<ul>\n  <li>\n    Sit forward in your chair with feet placed flat on the ground.\n  </li>\n  <li>\n    Keep your back straight.\n  </li>\n  <li>\n    Make sure your arms and hands are parallel to the keyboard.\n  </li>\n  <li>\n    Keep your wrists straight, not bending up or down toward \n    the keyboard.\n  </li>\n  <li>\n    Fingers should be curled toward each key, not flat.\n  </li>\n</ul>\n\n<h3>\n  Tips &amp; Tricks\n</h3>\n\n<ol>\n  <li>\n    <strong>DO NOT</strong> look at your fingers when typing. \n    This will slow you down in the long run even though it is \n    easier at first.\n  </li>\n  <li>\n    Begin each exercise by finding the home row and making sure \n    you know which keys are under which fingers. This will make \n    looking at your hands unnecessary!\n  </li>\n  <li>\n    Start slow and focus on accuracy. Speed is easier to \n    gain than poor accuracy is to fix.\n  </li>\n  <li>\n    Be patient! Learning to type accurately and with speed \n    takes a long time and lots of practice. But, if you practice \n    regularly, you should see increases in speed and accuracy \n    within hours!\n  </li>\n</ol>\n\n";
},"useData":true});
this["App"]["templates"]["introduction"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Welcome to the Byte Back Typing Tutorial!\n</h2>\n\n<p>\n  The Byte Back Typing Tutorial is a free course designed to \n  teach touch typing. Lessons, shown on the left, begin by \n  teaching the home row keys and then gradually add additional \n  keys until the entire keyboard is mastered.\n</p>\n\n<p>\n  At the end of each exercise, your words per minute, total time, \n  errors, and characters will be displayed. Repeat each lesson \n  as many times as necessary. It is good to complete a lesson \n  with no more than <strong>5 errors</strong> and at a speed of \n  at least <strong>20 words per minute (WPM)</strong> before \n  moving on to the next lesson.\n</p>\n\n<p>\n  Remember, accuracy is the key! Go slow at first and learn the \n  keyboard. Speed will come naturally with time and practice.\n</p>\n\n<p>\n  Once all the lessons have been completed, additional \n  challenging exercises are provided to help increase speed \n  and accuracy.\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-1"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #1: Left Hand, Home Row\n</h2>\n\n<p>\n  This lesson teaches the four left keys of the home row. \n  <strong>Place your index finger on F, middle finger on D, \n  ring finger on S, and pinky on A.</strong> Your thumb goes on \n  the space bar. However, leave your right hand on the homerow as \n  well to get used to having both hands on the keyboard.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  This is your first lesson, so go slow and try to get fewer than\n   five errors and faster than 20 words per minute (WPM).\n</p>\n\n<p>\n  Spend a minute memorizing the finger positions, and then keep \n  your eyes on the exercise and not on your hands. And don't forget \n  good <a href=\"#!/how-to-type\">posture</a>!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-10"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #10: W and O\n</h2>\n\n<p>\n  Now its time to go back up to the top for W and O. \n  <strong>W and O</strong> are typed by reaching the \n  <strong>ring finger</strong> up to the top row and \n  returning to S and L after each key stroke. \n  After this lesson, you will know all of the vowels!\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Keep going until you feel comfortable!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-11"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #11: Q and P\n</h2>\n\n<p>\n  Here we will finish the top row! <strong>P and Q</strong> are \n  typed with the <strong>pinky of each hand</strong>. \n  The pinky is often one of the hardest fingers to use, \n  so take your time and make sure you are comfortable \n  using both, because P is a commonly used letter!\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Make sure you are using all the correct reaches!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-12"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #12: C and ,\n</h2>\n\n<p>\n  This is an important lesson because C is a very common letter \n  and the comma (,) is your first punctuation mark. \n  <strong>The C and ,</strong> are typed by curling the \n  <strong>middle fingers</strong> down to the bottom row of keys.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  C is one of the hardest reaches to learn. Doing this will be \n  awkward at first, so make sure you are comfortable with C \n  and comma before you move on!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-13"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #13: Z, X, and .\n</h2>\n\n<p>\n  This may be the hardest lesson because you are working with \n  uncommon letters. This makes is even more important, however, \n  because you will not get as much practice with them! \n  <strong>Z</strong> is typed by curling the <strong>left pinky</strong>\n  down a row, <strong>X</strong> is typed by curling the \n  <strong>left ring finger</strong> down a row, and \n  <strong>period</strong> is typed with the \n  <strong>right ring finger</strong>.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Take your time and concentrate on using the correct reaches! \n  This exercise may be slower than many of the earlier ones.\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-14"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #14: The Shift Key\n</h2>\n\n<p>\n  Letters are important, but to actually type, it is important to know the shift key! The shift key, a type of \"modifier\" key, capitalizes letters or shifts a key to its secondary symbol.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  To use the <strong>shift key</strong>, hold the shift key down \n  with the <strong>pinky of the opposite hand</strong> of the \n  letter you are typing. Make sure that when you type the \n  letter down, the shift key is held down. Make sure to release \n  the shift key before typing another key!\n</p>\n\n<p>\n  Make sure you practice using both shift keys!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-15"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #15: ? and !\n</h2>\n\n<p>\n  You can already punctuate your sentences, but now it's time to \n  add some expression. Exclamation point and the question mark \n  are the secondary uses of their keys, meaning that you must hold \n  the shift key while typing them. For <strong>!</strong> hold the \n  <strong>shift</strong> key with your <strong>right pinky</strong> \n  while reaching up to the <strong>1(!)</strong> key in the number \n  row with your </strong>left pinky</strong>. To type \n  <strong>?</strong> hold <strong>shift</strong> with the \n  <strong>left pinky</strong> while reaching down to the \n  <strong>/(?) key</strong> with your <strong>right pinky</strong>.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Once you master these, you're ready for the final test!\n</p>\n\n<p>\n  <strong>Fun Fact:</strong> An exclamation point followed by a question mark \n  is technically called an \n  \"<a href=\"http://en.wikipedia.org/wiki/Interrobang\">interrobang</a>.\" \n  It looks like this: <strong>‽</strong>. A reverse and upside-down interrobang is \n  called a <strong>\"gnaborretni\"</strong> (\"interrobang\" backwards).\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-2"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h2 class=\"page-title\">\n  "
    + container.escapeExpression(((helper = (helper = helpers.fullTitle || (depth0 != null ? depth0.fullTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"fullTitle","hash":{},"data":data}) : helper)))
    + "\n</h2>\n\n<p>\n  This lesson teaches the right four keys of the home row. Your \n  <strong>index finger goes on J, middle finger on K, ring finger \n  on L, and pinky on ;</strong>. Again, leave both hands on the \n  keyboard with your thumbs on the space bar.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Just like the first lesson, go slow and concentrate on accuracy! \n  And no peeking at your fingers either!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-3"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #3: Both Hands, Home Row\n</h2>\n\n<p>\n  Now it's time to combine the first two lessons. Remember to keep \n  your fingers on the home row. This is a large lesson, using almost \n  an entire row of keys so go at your own pace.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Remember the work you did in the previous two lessons!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-4"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #4: Home Row with G and H\n</h2>\n\n<p>\n  This is the last lesson for the home row! The <strong>G and \n  H</strong> keys are typed with the <strong>index finger on each \n  hand</strong> and are the first \"reaches\" you will learn. \n  G is typed by reaching the right index finger while H is typed \n  with the left. Make sure to return your fingers when you are \n  done with each reach, and try to move your other fingers as \n  little as possible during another fingers' reach.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  After this lesson, you will have learned an entire row of the \n  keyboard!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-5"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #5: E and I\n</h2>\n\n<p>\n  So that you can quickly begin typing many words, it's time to \n  learn some more vowels! <strong>I and E</strong> are typed by \n  reaching the <strong>middle finger of each hand</strong> to the \n  top row.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Remember to return to home row position after each reach!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-6"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #6: R and U\n</h2>\n\n<p>\n  When typing, your index fingers do the most work. Now we will \n  learn two more reaches for your index fingers. <strong>R and \n  U</strong> are typed by reaching the <strong>index finger of \n  each hand</strong> up to the top row. Always return your \n  fingers to the correct home row positions.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Now you know over half the letters!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-7"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #7: T and Y\n</h2>\n\n<p>\n  Continuing with the index fingers, it is time to learn \n  <strong>T and Y</strong>. T and Y are typed by reaching the \n  <strong>index fingers up to the top row.</strong> Now you will \n  know enough letters to spell a wide variety of words.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Remember, you can repeat lessons as many times as you want and \n  even return to old lessons to review!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-8"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #8: B and N\n</h2>\n\n<p>\n  It's time to move down to the bottom row. <strong>B and N</strong> \n  are typed with the <strong>index finger of each hand.</strong> \n  Remember to return your fingers to the correct home row position. \n  Now only one reach remains for the index fingers.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Accuracy first!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-9"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #9: V and M\n</h2>\n\n<p>\n  Now its time to learn the last reaches for your index fingers. \n  To type <strong>V and M</strong>, reach your <strong>index \n  finger</strong> down, remembering to replace your fingers on \n  the home row after each reach.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Keep up the good work!\n</p>";
},"useData":true});
this["App"]["templates"]["resources"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Online Typing Resources\n</h2>\n\n<p>\n  This page contains links to other free, online typing resources \n  that provide additional practice and fun.\n</p>\n\n<h3>\n  Typing Lessons\n</h3>\n\n<ul>\n  <li>\n    <a href=\"http://www.typing-lessons.org/\">Peter's Online Typing Course</a>: \n    Includes instructions, lessons, and practice exercises.</li>\n  <li>\n    <a href=\"http://www.sense-lang.org/typing/\">Senselang</a>: \n    Create your own lessons by pasting text into the lesson box.</li>\n  <li>\n    <a href=\"http://www.powertyping.com/qwerty/lessonsq.html\">Power Typing</a>: \n    Another site good for more practice.</li>\n</ul>\n\n<h3>\n  Typing Games\n</h3>\n\n<ul>\n  <li>\n    <a href=\"http://www.freetypinggame.net/\">Free Typing Games</a>: \n    Includes many good typing games with 30 skill levels each. Focus on anything from homerow to the entire keyboard. Try \"The Frogs Are Off Their Diet\" for beginners or \"Space Invaders\" for more advanced typers.</li>\n  <li>\n    <a href=\"http://www.powertyping.com/baracuda/baracuda.htm\">Barracuda</a>: \n    Another good game for beginners.</li>\n  <li>\n    <a href=\"http://www.popcap.com/gamepopup.html?theGame=typershark\">Typer Shark</a>: \n    A flashy shockwave game, good for more advanced typers.</li>\n</ul>\n\n<h3>\n  Typing Tests\n</h3>\n\n<p>\n  The following tests are simple, easy to use, and provide accurate \n  assessments of your typing ability, giving words per minute in \n  addition to a number of other statistics.\n</p>\n\n<ul>\n  <li>\n    <a href=\"http://www.typingtutor.org/\">Typing Tutor</a>\n  </li>\n  <li>\n    <a href=\"http://www.learn2type.com/TypingTest\">Learn2Type</a>\n  </li>\n  <li>\n    <a href=\"http://www.supertypingwizard.com/wordsperminute.aspx\">Super Typing Wizard</a> \n  </li>\n</ul>\n";
},"useData":true});
this["App"]["templates"]["using-the-tutorial"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Using the Tutorial\n</h2>\n\n<p>\n  The Byte Back Typing Tutorial is easy to use! After reading \n  this guide, start with <a href=\"#!/lesson-1\">Lesson #1</a> and \n  complete all 15 lessons in order.\n</p>\n\n<p>\n  Make sure that when you are doing the exercises, you can see \n  the exercise, the keyboard, and the statistics!\n</p>\n\n<div class=\"page-featureimage\">\n  <img src=\"dist/img/howtouse.jpg\" />\n</div>\n\n<ol>\n  <li>\n    <strong>The Exercise:</strong> The exercise is the top section\n    of text. This is the text that you type in each exercise. \n    When you open an exercise, the first letter should be black \n    and underlined. The timer and WPM counter will start when you \n    begin typing.\n    <ul>\n      <li>\n        Watch out for spaces. Any characters other than a space \n        for spaces count as normal errors.\n      </li>\n    </ul>\n  </li>\n  <li>\n    <strong>The Keyboard:</strong> The keyboard can help you \n    avoid looking at your hands. The current letter you need to \n    type will be in yellow. If you type a wrong letter, it will \n    show you what you typed in red. If nothing is showing and \n    the exercise is not over, you are probably on a space.\n  </li>\n  <li>\n    <strong>The Statistics:</strong> The statistics are just under \n    the keyboard. <strong>Characters</strong> tells you how many \n    keystrokes you have typed so far, <strong>errors</strong> tracks \n    the number of incorrect keystrokes, <strong>WPM</strong> tells \n    you how many words per minute you are typing, and \n    <strong>time</strong> tracks how long the exercise has taken you.\n    <ul>\n      <li>\n        Aim to get fewer than five errors and more than 20 WPM for \n        each exercise. Expect that you will have to do each exercise \n        multiple times to reach this goal.\n      </li>\n    </ul>\n  </li>\n  <li>\n    <strong>Restart Exercise:</strong> If you need to do the \n    exercise again, you can click the \"Restart Exercise\" button to \n    reload the page and its exercise. When you are ready to move on, \n    select the next lesson in the navigation menu.\n  </li>\n</ol>";
},"useData":true});
this["App"]["templates"]["overlay"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "overlay-complete\n  ";
},"3":function(container,depth0,helpers,partials,data) {
    return "overlay-incomplete";
},"5":function(container,depth0,helpers,partials,data) {
    return "    abcd\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "    efgh\n";
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "    <div class=\"overlay-statrow\">\n      <div class=\"overlay-statdate\">\n        "
    + alias3((helpers.humanize || (depth0 && depth0.humanize) || alias2).call(alias1,(depth0 != null ? depth0.date : depth0),{"name":"humanize","hash":{},"data":data}))
    + "\n      </div>\n      <div class=\"overlay-statvalue\">\n        "
    + alias3((helpers.percent || (depth0 && depth0.percent) || alias2).call(alias1,(depth0 != null ? depth0.accuracy : depth0),{"name":"percent","hash":{},"data":data}))
    + "\n      </div>\n    </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "    <div class=\"overlay-statrow\">\n      <div class=\"overlay-statdate\">\n        "
    + alias3((helpers.humanize || (depth0 && depth0.humanize) || alias2).call(alias1,(depth0 != null ? depth0.date : depth0),{"name":"humanize","hash":{},"data":data}))
    + "\n      </div>\n      <div class=\"overlay-statvalue\">\n        "
    + alias3((helpers.round || (depth0 && depth0.round) || alias2).call(alias1,(depth0 != null ? depth0.wpm : depth0),{"name":"round","hash":{},"data":data}))
    + "\n      </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"overlay-text\n  "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n<div class=\"overlay-stats\">\n  <div class=\"overlay-accuracy\">\n    <div class=\"overlay-average\">\n      Average Accuracy: "
    + alias3((helpers.percent || (depth0 && depth0.percent) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.accuracy : depth0)) != null ? stack1.average : stack1),{"name":"percent","hash":{},"data":data}))
    + "\n    </div>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.accuracy : depth0)) != null ? stack1.best : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"overlay-wpm\">\n    <div class=\"overlay-average\">\n      Average WPM: "
    + alias3((helpers.round || (depth0 && depth0.round) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.wpm : depth0)) != null ? stack1.average : stack1),{"name":"round","hash":{},"data":data}))
    + "\n    </div>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.wpm : depth0)) != null ? stack1.best : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>";
},"useData":true});
this["App"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <h2>\n      "
    + container.escapeExpression(((helper = (helper = helpers.fullTitle || (depth0 != null ? depth0.fullTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"fullTitle","hash":{},"data":data}) : helper)))
    + "\n    </h2>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page-container\">\n\n  <div class=\"instruction-container\">\n    <div class=\"page-content\">\n    </div>\n\n    <button class=\"start-exercise-button\">\n      Start Exercise\n    </button>\n  </div>\n\n  <div class=\"exercise-container\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.fullTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"scorecenter-container\">\n    </div>\n\n    <div class=\"controls-container\">\n      <div class=\"typebox-container\">\n      </div>\n\n      <div class=\"exercise-cueboard-container\">\n      </div>\n\n      <div class=\"overlay-container\">\n      </div>\n    </div>\n  </div>\n\n</div>";
},"useData":true});
this["App"]["templates"]["sidebar"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "  <div class=\"sidebar-section\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    \n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"sidebar-sectiontitle\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"sidebar-page\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.lesson : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <a class=\"sidebar-pagelink\" href=\"#!/"
    + alias4(((helper = (helper = helpers.hash || (depth0 != null ? depth0.hash : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hash","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n      </a>\n    </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "      <div class=\"sidebar-status \n        "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.status : stack1)) != null ? stack1.started : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.status : stack1)) != null ? stack1.completed : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n      </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "sidebar-status-started";
},"8":function(container,depth0,helpers,partials,data) {
    return "sidebar-status-completed";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"sidebar-container\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.sections : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
"use strict";

;(function () {

  var helpers = function helpers() {

    Handlebars.registerHelper("percent", function (value) {
      return Math.round(value * 1000) / 10 + "%";
    });

    Handlebars.registerHelper("round", function (value) {
      return Math.round(value * 10) / 10;
    });

    Handlebars.registerHelper("humanize", function (value) {
      var msDelta = new Date().valueOf() - value;

      // Less than 5 seconds, go with "Just Now"
      if (msDelta < 5 * 1000) {
        return "just now";
      }

      // Less than 1 minutes, go with "X seconds ago"
      if (msDelta < 60 * 1000) {
        return Math.floor(msDelta / 1000) + " seconds ago";
      }

      // Less than 1 hour, go with "X minutes ago"
      if (msDelta < 60 * 60 * 1000) {
        if (msDelta < 2 * 60 * 1000) {
          return "1 minute ago";
        }

        return Math.floor(msDelta / (60 * 1000)) + " minutes ago";
      }

      // Less than 1 day, go with "X hours ago"
      if (msDelta < 24 * 60 * 60 * 1000) {
        if (msDelta < 2 * 60 * 60 * 1000) {
          return "1 hour ago";
        }

        return Math.floor(msDelta / (60 * 60 * 1000)) + " hours ago";
      }

      // Go with "X days ago"
      if (msDelta < 2 * 24 * 60 * 60 * 1000) {
        return "yesterday";
      }

      return Math.floor(msDelta / (24 * 60 * 60 * 1000)) + " days ago";
    });
  };

  var PackageDefinition = helpers;
  var PackageName = "registerHelpers";

  if ("undefined" !== typeof exports) module.exports = PackageDefinition;else if ("function" === typeof define && define.amd) {
    define(PackageName, function () {
      return PackageDefinition;
    });
  } else {
    window.App = window.App || {};
    window.App[PackageName] = PackageDefinition;
  }
})();
"use strict";

;(function () {

  var lessons = {
    sections: [{
      pages: [{
        title: "Introduction",
        hash: "introduction",
        template: "introduction",
        lesson: false
      }, {
        title: "How to Type",
        hash: "how-to-type",
        template: "how-to-type",
        lesson: false
      }, {
        title: "Using the Tutorial",
        hash: "using-the-tutorial",
        template: "using-the-tutorial",
        lesson: false
      }]
    }, {
      pages: [{
        title: "Test Lesson",
        fullTitle: "Testing Lesson",
        hash: "test",
        template: "lesson-1",
        lesson: true,
        text: "hello world",
        keys: {
          active: ["H", "E", "L", "O", "W", "R", "D", "Space"]
        }
      }, {
        title: "Lesson #1",
        fullTitle: "Lesson #1: Left Hand, Home Row",
        hash: "lesson-1",
        template: "lesson-1",
        lesson: true,
        text: "a s d f s d f f s d as sd ad fs ds sad af sa fa dafa sda dad das afa sfd add sasd df sf saf dds fd ads safd fsd fas sas dafs as fad",
        keys: {
          active: ["A", "S", "D", "F", "Space"],
          "new": ["A", "S", "D", "F", "Space"]
        }
      }, {
        title: "Lesson #2",
        fullTitle: "Lesson #2: Right Hand, Home Row",
        hash: "lesson-2",
        template: "lesson-2",
        lesson: true,
        text: "j k l ; l j k ; j l j k jk jl j; lk ;j jl kj jk ;j l; kl jl kj j klj kk j lj k klj jk; kkj jlk llj kjj ;k lj jk kj lk jj l kjl",
        keys: {
          active: ["J", "K", "L", ";", "Space"],
          "new": ["J", "K", "L", ";"]
        }
      }, {
        title: "Lesson #3",
        fullTitle: "Lesson #3: Both Hands, Home Row",
        hash: "lesson-3",
        template: "lesson-3",
        lesson: true,
        text: "all salads flask; jasks flak sad fall klad lad dajd aj jal safs; fads salks jads flads dj ask; dallas salad kalds afls;",
        keys: {
          active: ["A", "S", "D", "F", "J", "K", "L", ";", "Space"]
        }
      }, {
        title: "Lesson #4",
        fullTitle: "Lesson #4: Home Row with G and H",
        hash: "lesson-4",
        template: "lesson-4",
        lesson: true,
        text: "f g fg gf j h jh hj had jag ask gag sagas gash hag klash flags add glad lag salad lash falls lads gas flask; shall sad dash halk glass",
        keys: {
          active: ["G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["G", "H"]
        }
      }, {
        title: "Lesson #5",
        fullTitle: "Lesson #5: E and I",
        hash: "lesson-5",
        template: "lesson-5",
        lesson: true,
        text: "d de ed de k ki ik ki fed sea hike fade flik jedi flies; skies dial isle seed file skied slide likes jails deal shield hide glide shells figs",
        keys: {
          active: ["E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["E", "I"]
        }
      }, {
        title: "Lesson #6",
        fullTitle: "Lesson #6: R and U",
        hash: "lesson-6",
        template: "lesson-6",
        lesson: true,
        text: "j u ju uj f r r f fr free juries real lull judge read fear shred dusk rash hush grease rake grid fudge hush fired deaf duke rude fired",
        keys: {
          active: ["R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["R", "U"]
        }
      }, {
        title: "Lesson #7",
        fullTitle: "Lesson #7: T and Y",
        hash: "lesson-7",
        template: "lesson-7",
        lesson: true,
        text: "f ft ftg j jy jyh retreat fly just kite year stay treat yikes hurt hurry they style yak dart health great take later litter haste justify",
        keys: {
          active: ["T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["T", "Y"]
        }
      }, {
        title: "Lesson #8",
        fullTitle: "Lesson #8: B and N",
        hash: "lesson-8",
        template: "lesson-8",
        lesson: true,
        text: "j n jn nj f b fb bf find big bury near jab junk burn brink nab bane nasal blind enable bring jab blend fans bandit nifty baffled banana",
        keys: {
          active: ["B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["B", "N"]
        }
      }, {
        title: "Lesson #9",
        fullTitle: "Lesson #9: V and M",
        hash: "lesson-9",
        template: "lesson-9",
        lesson: true,
        text: "f v fv fv j m jm jam vat man vase made mind venus move steam very ever middle veil viking never valve rhyme vanity hive",
        keys: {
          active: ["V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["V", "M"]
        }
      }, {
        title: "Lesson #10",
        fullTitle: "Lesson #10: W and O",
        hash: "lesson-10",
        template: "lesson-10",
        lesson: true,
        text: "s sw ws l lo ol lol work dock weak toy row lord mow worth newt song few lower wind howl web body write low frog jaw",
        keys: {
          active: ["W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["W", "O"]
        }
      }, {
        title: "Lesson #11",
        fullTitle: "Lesson #11: Q and P",
        hash: "lesson-11",
        template: "lesson-11",
        lesson: true,
        text: "a q aq aq ; ;p ;p play paper quit pale quin quail please quietly pink queen quip cape quart pantry equal please post quill",
        keys: {
          active: ["Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["Q", "P"]
        }
      }, {
        title: "Lesson #12",
        fullTitle: "Lesson #12: C and ,",
        hash: "lesson-12",
        template: "lesson-12",
        lesson: true,
        text: "d c dc cd k , k, ,k cat, cow, corn, city, comma; the black car cast quickly, counting, trace, occur space, cold, act, chat, and catch",
        keys: {
          active: ["C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["C", ","]
        }
      }, {
        title: "Lesson #13",
        fullTitle: "Lesson #13: Z, X, and .",
        hash: "lesson-13",
        template: "lesson-13",
        lesson: true,
        text: "a az za s x sx l l. .l tax. zap. extra exact. plaza axle waltz. f.o.x. pizza text. dizzy. exit taxi crazy. zoo exam. next prize",
        keys: {
          active: ["Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["Z", "X", "."]
        }
      }, {
        title: "Lesson #14",
        fullTitle: "Lesson #14: The Shift Key",
        hash: "lesson-14",
        template: "lesson-14",
        lesson: true,
        text: "France, Australia, U.S.A. Tom, Fred, Jan. Egypt Germany Washington. March, April, May, Thursday Friday Saturday.",
        keys: {
          active: ["Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["Left-Shift", "Right-Shift"]
        }
      }, {
        title: "Lesson #15",
        fullTitle: "Lesson #15: ? and !",
        hash: "lesson-15",
        template: "lesson-15",
        lesson: true,
        text: "; / ;? /? 1 ! 1!1! Where did he go? There! When? Now! Exit! Why? Because I said so! No! What? Really!? Yes!",
        keys: {
          active: ["?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["?", "!"]
        }
      }, {
        title: "Final Test",
        fullTitle: "Final Test",
        hash: "final-test",
        template: "final-test",
        lesson: true,
        text: "How does it feel to have completed our typing tutorial? Before you call yourself an expert, however, just pass this quick quiz. Do not be lazy, for if you do a careless job on this evaluation, you should take it again. Make your best effort. Doing great? Almost finished! Now time to get your score!",
        keys: {
          active: ["?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
        }
      }]
    }, {
      title: "Advanced",
      pages: [{
        title: "Lesson #1",
        fullTitle: "Advanced Lesson #1: ( and )",
        hash: "advanced-lesson-1",
        template: "advanced-lesson-1",
        lesson: true,
        text: "(cat) (hex) (zap) (goal) (sign) (seek) (extra) ((Good)game) (daily) ;) (quake) )( (Wreck) (barn) (orient) (open) (drop)",
        keys: {
          active: ["(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["(", ")"]
        }
      }, {
        title: "Lesson #2",
        fullTitle: "Advanced Lesson #2: ' and \"",
        hash: "advanced-lesson-2",
        template: "advanced-lesson-2",
        lesson: true,
        text: "Said Joy, \"Didn't, I hear 'yes?'\" \"No,\" said Quinn, \"It's not 'cause that's wrong.\" \"Listen to me!\" \"I heard you say 'no'.\" \"Let's not.\"",
        keys: {
          active: ["'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["'"]
        }
      }, {
        title: "Lesson #3",
        fullTitle: "Advanced Lesson #3: :, -, and /",
        hash: "advanced-lesson-3",
        template: "advanced-lesson-3",
        lesson: true,
        text: "CD-ROM: Computer/monitor/keyboard: tools-for-using-computers. Red/Blue/Yellow: Color-scheme: Primary-colors. : )",
        keys: {
          active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"],
          "new": ["-"]
        }
      }]
    }, {
      title: "Extra Practice",
      pages: [{
        title: "Practice #1",
        hash: "practice-1",
        template: "extra-practice-1",
        lesson: true,
        text: "\"They want to deliver vast amounts of information over the internet. And again, the internet is not something you just dump something on. It's not a truck. It's a series of tubes! And if you don't understand those tubes can be filled and if they are filled, when you put your message in, it gets in line and its going to be delayed by anyone that puts into that tube enormous amounts of material, enormous amounts of material.\"",
        keys: {
          active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
        }
      }, {
        title: "Practice #2",
        hash: "practice-2",
        template: "extra-practice-2",
        lesson: true,
        text: "The name \"echo\" comes from the Greek nymph Echo. According to Greek mythology, Echo was a Nymph who had the job of talking incessantly to Hera, the Queen of the Gods. Hera caught on to Echo's trick and cursed her to only be able to say what others had just said - hence the word \"echo\". \"A duck's quack doesn't echo,\" is a much quoted scientific myth. The truth is that a duck's quack in fact, does echo, however it may be difficult to hear.",
        keys: {
          active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
        }
      }, {
        title: "Practice #3",
        hash: "practice-3",
        template: "extra-practice-3",
        lesson: true,
        text: "The Walrus and the Carpenter walked on a mile or so, and then rested on a rock - conveniently low: and all the little oysters stood and waited in a row. \"The time has come,\" the Walrus said, \"To talk of many things: Of shoes-and ships-and sealing-wax-Of cabbages-and kings-And why the sea is boiling hot-And whether pigs have wings.\"",
        keys: {
          active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
        }
      }, {
        title: "Practice #4",
        hash: "practice-4",
        template: "extra-practice-4",
        lesson: true,
        text: "Extreme Ironing (or EI) is an extreme sport and a performance art in which people take an ironing board to a remote location and iron a few items of clothing. According to the official website, extreme ironing is \"the latest danger sport that combines the thrills of an extreme outdoor activity with the satisfaction of a well-pressed shirt.\" Part of the attraction and interest the media has towards extreme ironing seems to centre on the issue of whether it is really a sport or not. It is widely considered to be tongue-in-cheek.",
        keys: {
          active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
        }
      }, {
        title: "Practice #5",
        hash: "practice-5",
        template: "extra-practice-5",
        lesson: true,
        text: "Though the traditional notion of rain in the Western World is negative, rain can also bring joy, as some consider it to be soothing or enjoy the aesthetic appeal of it. In dry places, such as parts of Africa, Australia, India, and the Middle East, rain is greeted with euphoria. (In Botswana, the Setswana word for rain, \"pula,\" is used as the name of the national currency, in recognition of the economic importance of rain in this desert country.)",
        keys: {
          active: ["-", "'", "(", ")", "?", "!", "Left-Shift", "Right-Shift", "Z", "X", ".", "C", ",", "Q", "P", "W", "O", "V", "M", "B", "N", "T", "Y", "R", "U", "E", "I", "G", "H", "A", "S", "D", "F", "J", "K", "L", ";", "Space"]
        }
      }]
    }, {
      pages: [{
        title: "Resources",
        hash: "resources",
        template: "resources",
        lesson: false
      }]
    }]
  };

  var reduce = function reduce(array, iterator, memory, context) {
    for (var i = 0; i < array.length; i++) {
      memory = iterator.call(context, memory, array[i]);
    }

    return memory;
  };

  lessons.pageMap = reduce(lessons.sections, function (mem, section) {
    return reduce(section.pages, function (mem, page) {
      mem[page.hash] = page;
      return mem;
    }, mem);
  }, {});

  var PackageDefinition = lessons;
  var PackageName = "lessons";

  if ("undefined" !== typeof exports) module.exports = PackageDefinition;else if ("function" === typeof define && define.amd) {
    define(PackageName, function () {
      return PackageDefinition;
    });
  } else {
    window.App = window.App || {};
    window.App[PackageName] = PackageDefinition;
  }
})();
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
"use strict";

;(function () {

  var reduce = function reduce(array, iterator, memory, optionalContext) {
    for (var i = 0; i < array.length; i++) {
      memory = iterator.call(optionalContext, memory, array[i], i);
    }
    return memory;
  };

  var state = {
    lessons: {}
  };

  var tutorialState = {

    clearState: function clearState() {
      state = {
        lessons: {}
      };
    },

    getState: function getState() {
      return state;
    },

    addLesson: function addLesson(lesson) {
      state.lessons[lesson.hash] = {
        title: lesson.title,
        hash: lesson.hash,
        status: {
          completed: false,
          started: false
        },
        best: {
          accuracy: 0,
          wpm: 0
        },
        average: {
          accuracy: 0,
          wpm: 0
        },
        iterations: []
      };
    },

    markLesson: function markLesson(hash, stats) {
      var lesson = state.lessons[hash];
      var statsObject = {
        wpm: stats.wpm,
        accuracy: stats.accuracy,
        complete: stats.complete,
        date: new Date().valueOf()
      };

      lesson.status.started = true;
      if (stats.completed) {
        lesson.status.completed = true;
      }

      lesson.iterations.push(statsObject);

      lesson.best = reduce(lesson.iterations, function (mem, i) {
        return {
          accuracy: Math.max(mem.accuracy, i.accuracy),
          wpm: Math.max(mem.wpm, i.wpm)
        };
      }, { wpm: 0, accuracy: 0 });

      lesson.average = reduce(lesson.iterations, function (mem, i) {
        return {
          accuracy: mem.accuracy + i.accuracy,
          wpm: mem.wpm + i.wpm
        };
      }, { wpm: 0, accuracy: 0 });

      lesson.average.accuracy = lesson.average.accuracy / lesson.iterations.length;
      lesson.average.wpm = lesson.average.wpm / lesson.iterations.length;

      this.save();

      return lesson;
    },

    serialize: function serialize() {
      return JSON.stringify(state);
    },

    deserialize: function deserialize(stateString) {
      state = JSON.parse(stateString);
    },

    save: function save() {
      var stateString = this.serialize();
      localStorage.setItem("tt-data", stateString);
    },

    load: function load() {
      var stateString = localStorage.getItem("tt-data");
      if (stateString) {
        this.deserialize(stateString);
        return true;
      }

      return false;
    }

  };

  var PackageDefinition = tutorialState;
  var PackageName = "tutorialState";

  if ("undefined" !== typeof exports) module.exports = PackageDefinition;else if ("function" === typeof define && define.amd) {
    define(PackageName, function () {
      return PackageDefinition;
    });
  } else {
    window.App = window.App || {};
    window.App[PackageName] = PackageDefinition;
  }
})();