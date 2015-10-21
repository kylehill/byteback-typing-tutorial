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