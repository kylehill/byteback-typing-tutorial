"use strict";

;(function () {

  var setOptions = function setOptions(optionsObject, defaultKeyValues) {

    for (var key in defaultKeyValues) {
      if (!optionsObject.hasOwnProperty(key)) {
        optionsObject[key] = defaultKeyValues[key];
      }
    }

    return optionsObject;
  };

  var _increment = function _increment(optionalValue) {
    if (optionalValue === undefined) {
      this.value += 1;
      return this.value;
    }

    this.value += optionalValue;
    return this.value;
  };

  var _set = function _set(value) {
    this.value = value;
    return this.value;
  };

  var _start = function _start() {
    if (this.running) {
      return;
    }

    this.running = true;

    if (this.startTime && this.stopTime) {
      this.startTime = +new Date() - (this.stopTime - this.startTime);
      this.stopTime = false;
      return;
    }

    this.startTime = +new Date();
    this.stopTime = false;
  };

  var _stop = function _stop() {
    if (!this.running) {
      return;
    }

    this.running = false;
    this.stopTime = +new Date();
  };

  var _reset = function _reset() {
    this.running = false;
    this.startTime = this.stopTime = false;
  };

  var _setTimer = function _setTimer(time) {
    if (!this.running) {
      this.stopTime = +new Date();
    }
    this.startTime = +new Date() - time;
  };

  var _time = function _time() {
    if (this.stopTime) {
      return this.stopTime - this.startTime;
    }

    var date = +new Date();
    return date - (this.startTime || date);
  };

  var _displayValueTimer = function _displayValueTimer() {
    return this.time();
  };

  var _displayValueCounter = function _displayValueCounter() {
    return this.value;
  };

  var initializeMetric = function initializeMetric(metric) {
    var metricObject = {
      name: metric.name,
      type: metric.type || "counter"
    };

    switch (metricObject.type) {
      case "timer":
        metricObject.start = _start.bind(metricObject);
        metricObject.stop = _stop.bind(metricObject);
        metricObject.reset = _reset.bind(metricObject);
        metricObject.set = _setTimer.bind(metricObject);
        metricObject.time = _time.bind(metricObject);
        metricObject.displayValue = _displayValueTimer.bind(metricObject);
        return metricObject;

      case "counter":
        metricObject.value = metric.value || 0;
        metricObject.increment = _increment.bind(metricObject);
        metricObject.set = _set.bind(metricObject);
        metricObject.displayValue = _displayValueCounter.bind(metricObject);
        return metricObject;
    }

    return metricObject;
  };

  var buildDisplays = function buildDisplays(opts) {
    var $displayContainer = $("<div class='scorecenter js-scorecenter'>");
    $(opts.selector).append($displayContainer);

    return opts.displays.map(function (display) {
      var $display = $("<div class='scorecenter-display'>");
      $displayContainer.append($display);

      var $title = $("<div class='scorecenter-displaytitle'>");
      var $value = $("<div class='scorecenter-displayvalue'>");
      $display.append($title);
      $display.append($value);

      var displayObject = {
        format: display.format || function (value) {
          return value;
        },

        value: display.value || function (metricMap) {
          if (display.metric && metricMap[display.metric]) {
            return metricMap[display.metric].displayValue();
          }

          return 0;
        },

        refresh: function refresh() {
          var value = this.value(opts.metricMap);
          var formatted = this.format(value);
          $value.text(formatted);
        }
      };

      $display.addClass(display.className);
      $title.text(display.title || "Unknown Title");

      displayObject.refresh();
      return displayObject;
    });
  };

  var Scorecenter = function Scorecenter(selector, opts) {
    opts = setOptions(opts, {
      selector: selector,
      metrics: [],
      displays: [],
      refresh: false
    });

    opts.metrics = opts.metrics.map(initializeMetric);
    opts.metricMap = opts.metrics.reduce(function (mem, metric) {
      mem[metric.name] = metric;
      return mem;
    }, {});

    var displays = buildDisplays(opts);

    var scorecenter = {

      getMetric: function getMetric(name) {
        if (!name) {
          return undefined;
        }

        return opts.metricMap[name];
      },

      refresh: function refresh() {
        displays.forEach(function (display) {
          display.refresh();
        });
      }

    };

    var checkTimeout = function checkTimeout() {
      if (opts.refresh) {
        scorecenter.refresh();
        setTimeout(checkTimeout, opts.refresh);
      }
    };
    checkTimeout();

    return scorecenter;
  };

  var PackageDefinition = Scorecenter;
  var PackageName = "scorecenter";

  if ("undefined" !== typeof exports) module.exports = PackageDefinition;else if ("function" === typeof define && define.amd) {
    define(PackageName, function () {
      return PackageDefinition;
    });
  } else window[PackageName] = PackageDefinition;
})();