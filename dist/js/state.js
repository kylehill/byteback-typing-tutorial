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

      lesson.iterations.push(stats);

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