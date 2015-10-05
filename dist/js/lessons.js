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
      }, {
        title: "Lesson #1",
        hash: "lesson-1",
        template: "lesson-1",
        lesson: true,
        text: "a s d f s d f f s d as sd ad fs ds sad af sa fa dafa sda dad das afa sfd add sasd df sf saf dds fd ads safd fsd fas sas dafs as fad",
        keys: {
          active: ["A", "S", "D", "F", "Space"]
        }
      }, {
        title: "Lesson #2",
        hash: "lesson-2"
      }, {
        title: "Lesson #3",
        hash: "lesson-3"
      }, {
        title: "Lesson #4",
        hash: "lesson-4"
      }, {
        title: "Lesson #5",
        hash: "lesson-5"
      }, {
        title: "Lesson #6",
        hash: "lesson-6"
      }, {
        title: "Lesson #7",
        hash: "lesson-7"
      }, {
        title: "Lesson #8",
        hash: "lesson-8"
      }, {
        title: "Lesson #9",
        hash: "lesson-9"
      }, {
        title: "Lesson #10",
        hash: "lesson-10"
      }, {
        title: "Lesson #11",
        hash: "lesson-11"
      }, {
        title: "Lesson #12",
        hash: "lesson-12"
      }, {
        title: "Lesson #13",
        hash: "lesson-13"
      }, {
        title: "Lesson #14",
        hash: "lesson-14"
      }, {
        title: "Lesson #15",
        hash: "lesson-15"
      }]
    }, {
      title: "Advanced",
      pages: [{
        title: "Lesson #1",
        hash: "advanced-lesson-1"
      }, {
        title: "Lesson #2",
        hash: "advanced-lesson-2"
      }, {
        title: "Lesson #3",
        hash: "advanced-lesson-3"
      }]
    }, {
      title: "Extra Practice",
      pages: [{
        title: "Practice #1",
        hash: "practice-1"
      }, {
        title: "Practice #2",
        hash: "practice-2"
      }, {
        title: "Practice #3",
        hash: "practice-3"
      }, {
        title: "Practice #4",
        hash: "practice-4"
      }, {
        title: "Practice #5",
        hash: "practice-5"
      }]
    }, {
      pages: [{
        title: "Resources",
        hash: "resources"
      }]
    }]
  };

  lessons.pageMap = lessons.sections.reduce(function (mem, section) {
    return section.pages.reduce(function (mem, page) {
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