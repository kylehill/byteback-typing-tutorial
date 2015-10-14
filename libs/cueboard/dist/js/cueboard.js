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

  var forEach = function forEach(array, iterator, context) {
    for (var i = 0; i < array.length; i++) {
      iterator.call(context, array[i]);
    }
  };

  var defaultKeyboardDefinition = {
    rows: [[{ type: "dual", top: "~", bottom: "`", a: [192] }, { type: "dual", top: "!", bottom: "1", a: [49] }, { type: "dual", top: "@", bottom: "2", a: [50] }, { type: "dual", top: "#", bottom: "3", a: [51] }, { type: "dual", top: "$", bottom: "4", a: [52] }, { type: "dual", top: "%", bottom: "5", a: [53] }, { type: "dual", top: "^", bottom: "6", a: [54] }, { type: "dual", top: "&", bottom: "7", a: [55] }, { type: "dual", top: "*", bottom: "8", a: [56] }, { type: "dual", top: "(", bottom: "9", a: [57] }, { type: "dual", top: ")", bottom: "0", a: [48] }, { type: "dual", top: "_", bottom: "-", a: [189] }, { type: "dual", top: "+", bottom: "=", a: [187] }, { type: "bottom-right", text: "Delete", width: 1.4, a: ["U+0008", "Backspace"] }], [{ type: "bottom-left", text: "Tab", width: 1.4, a: ["U+0009"] }, { type: "center", text: "Q", a: [81] }, { type: "center", text: "W", a: [87] }, { type: "center", text: "E", a: [69] }, { type: "center", text: "R", a: [82] }, { type: "center", text: "T", a: [84] }, { type: "center", text: "Y", a: [89] }, { type: "center", text: "U", a: [85] }, { type: "center", text: "I", a: [73] }, { type: "center", text: "O", a: [79] }, { type: "center", text: "P", a: [80] }, { type: "dual", top: "{", bottom: "[", a: [219] }, { type: "dual", top: "}", bottom: "]", a: [221] }, { type: "dual", top: "|", bottom: "\\", a: [220] }], [{ type: "bottom-left", text: "Caps Lock", a: ["CapsLock"], width: 1.8 }, { type: "center", text: "A", a: [65] }, { type: "center", text: "S", a: [83] }, { type: "center", text: "D", a: [68] }, { type: "center", text: "F", a: [70] }, { type: "center", text: "G", a: [71] }, { type: "center", text: "H", a: [72] }, { type: "center", text: "J", a: [74] }, { type: "center", text: "K", a: [75] }, { type: "center", text: "L", a: [76] }, { type: "dual", top: ":", bottom: ";", a: [186] }, { type: "dual", top: "\"", bottom: "'", a: [222] }, { type: "bottom-right", text: "Return", a: ["Enter"], width: 1.8 }], [{ type: "bottom-left", name: "Left-Shift", a: ["Shift"], text: "Shift", width: 2.4 }, { type: "center", text: "Z", a: [90] }, { type: "center", text: "X", a: [88] }, { type: "center", text: "C", a: [67] }, { type: "center", text: "V", a: [86] }, { type: "center", text: "B", a: [66] }, { type: "center", text: "N", a: [78] }, { type: "center", text: "M", a: [77] }, { type: "dual", top: "<", bottom: ",", a: [188] }, { type: "dual", top: ">", bottom: ".", a: [190] }, { type: "dual", top: "?", bottom: "/", a: [191] }, { type: "bottom-right", name: "Right-Shift", text: "Shift", width: 2.4 }], [{ type: "blank" }, { type: "blank" }, { type: "blank" }, { type: "blank" }, { type: "space", width: 6.2, a: [32] }, { type: "blank" }, { type: "blank" }, { type: "blank" }, { type: "blank" }, { type: "blank" }]]
  };

  var buildKeyboard = function buildKeyboard(opts) {
    var keys = {},
        a = {};
    var $cb = $("<div class='cueboard js-cueboard'>");

    forEach(opts.keyboard.rows, function (row) {
      var $row = $("<div class='cueboard-row js-cueboard-row'>");
      $cb.append($row);

      forEach(row, function (key) {
        var $key = $("<div class='cueboard-key js-cueboard-key'>");
        var $keyText = $("<div class='cueboard-keytext'>");

        var keyObject = {
          state: "",
          changeState: function changeState(state) {
            this.$key.removeClass("cueboard-keystate-" + this.state);
            this.state = state;
            this.$key.addClass("cueboard-keystate-" + this.state);
          },
          $key: $key
        };
        keyObject.changeState(opts.initialKeyState);

        switch (key.type) {
          case "dual":
            $key.addClass("cueboard-dual");
            $keyText.append("<div class='cueboard-key-top'>" + key.top + "</div>");
            $keyText.append("<div class='cueboard-key-bottom'>" + key.bottom + "</div>");

            keyObject.name = key.bottom;
            keyObject.alias = key.top;

            keys[key.bottom] = a[key.top] = keyObject;
            break;
          case "bottom-left":
            $key.addClass("cueboard-bottom-left");
            $keyText.text(key.text);

            keyObject.name = key.name || key.text;
            keys[keyObject.name] = keyObject;
            break;
          case "bottom-right":
            $key.addClass("cueboard-bottom-right");
            $keyText.text(key.text);

            keyObject.name = key.name || key.text;
            keys[keyObject.name] = keyObject;
            break;
          case "center":
            $key.addClass("cueboard-center");
            $keyText.text(key.text);

            keyObject.name = key.name || key.text;
            keys[keyObject.name] = a[keyObject.name.toLowerCase()] = keyObject;
            break;
          case "space":
            $key.addClass("cueboard-space");

            keyObject.name = "Space";
            keyObject.alias = " ";
            keys["Space"] = a["space"] = a[" "] = keyObject;
            break;
          case "blank":
          default:
            $key.addClass("cueboard-blank");
            keyObject.changeState("blank");
            break;
        }

        if (key.width) {
          $key.attr("data-cueboard-keywidth", key.width);
        }

        if (key.a) {
          forEach(key.a, function (alias) {
            a[alias] = keyObject;
          });
        }

        $key.append($keyText);
        $row.append($key);
      });
    });

    $(opts.selector).html($cb);

    var keysFunction = function keysFunction(key) {
      if (keys[key]) {
        return keys[key];
      }

      if (a[key]) {
        return a[key];
      }

      return false;
    };

    return {
      keys: keysFunction,
      $cb: $cb
    };
  };

  var Cueboard = function Cueboard(selector) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    opts = setOptions(opts, {
      keyboard: defaultKeyboardDefinition,
      selector: selector,
      initialkeyState: "inactive",
      keyState: {}
    });

    var instance = buildKeyboard(opts);
    var state = {
      active: {},
      next: false
    };

    var cueboard = {

      changeState: function changeState(state, optionalKeyOrKeyArray) {
        if (optionalKeyOrKeyArray && optionalKeyOrKeyArray.constructor === Array) {
          return forEach(optionalKeyOrKeyArray, function (key) {
            this.changeState(state, key);
          }, this);
        }

        var key = instance.keys(optionalKeyOrKeyArray);
        key && key.changeState(state);
      },

      convert: function convert(key) {
        var k = instance.keys(key);
        return k;
      }

    };

    for (var keyState in opts.keyState) {
      cueboard.changeState(keyState, opts.keyState[keyState]);
    }

    return cueboard;
  };

  var PackageDefinition = Cueboard;
  var PackageName = "cueboard";

  if ("undefined" !== typeof exports) module.exports = PackageDefinition;else if ("function" === typeof define && define.amd) {
    define(PackageName, function () {
      return PackageDefinition;
    });
  } else window[PackageName] = PackageDefinition;
})();