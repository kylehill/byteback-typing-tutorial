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

  var buildTypebox = function buildTypebox(opts) {
    var $tb = $("<div class='typebox js-typebox'>");
    $(opts.selector).html($tb);

    var charArray = false;

    var _setString = function _setString(string) {
      $tb.empty();

      if (string.length === 0) {
        return false;
      }

      var charArray = [];
      var words = opts.string.split(" ");

      words.forEach(function (word, i) {
        var $word = $("<div class='typebox-word'>");

        var characters = word.split("");
        characters.forEach(function (character) {
          var $character = $("<span class='typebox-character'>");
          $character.text(character);
          $word.append($character);
          charArray.push($character);
        });

        if (i + 1 < words.length) {
          var $character = $("<span class='typebox-character typebox-space'>");
          $character.html(opts.spaceCharacter);
          $word.append($character);
          charArray.push($character);
        }
        $tb.append($word);
      });

      return charArray;
    };

    var highlightPosition = function highlightPosition(position) {
      if (charArray) {
        charArray.forEach(function ($char) {
          $char.removeClass("typebox-active");
        });

        charArray[position].addClass("typebox-active");
      }
    };

    var endHighlight = function endHighlight() {
      if (charArray) {
        charArray.forEach(function ($char) {
          $char.removeClass("typebox-active");
        });
      }
    };

    charArray = _setString(opts.string);
    highlightPosition(0);

    return {
      $tb: $tb,
      setString: function setString(string) {
        charArray = _setString(string);
        highlightPosition(0);
      },
      highlightPosition: highlightPosition,
      endHighlight: endHighlight
    };
  };

  var resetState = function resetState(opts) {
    return {
      position: 0,
      string: opts.string,
      next: opts.string[0] || false,
      started: false,
      complete: false
    };
  };

  var Typebox = function Typebox(selector, opts) {
    opts = setOptions(opts, {
      string: "",
      selector: selector,
      spaceCharacter: "&nbsp;"
    });

    var instance = buildTypebox(opts);

    var _state = resetState(opts);

    var typebox = {

      state: function state() {
        return _state;
      },

      reset: function reset(string) {
        if (string !== undefined) {
          opts.string = string;
        }

        instance.setString(opts.string);
        _state = resetState(opts);
      },

      applyCharacter: function applyCharacter(character) {
        if (character === "space") {
          character = " ";
        }

        if (!_state.string) {
          return { started: false };
        }

        if (_state.complete) {
          return { complete: true };
        }

        _state.started = true;
        if (_state.next !== character) {
          return {
            accurate: false,
            complete: false,
            next: _state.next
          };
        }

        _state.position++;
        _state.next = _state.string[_state.position];
        if (_state.next === undefined) {
          _state.complete = true;
          instance.endHighlight();
          return {
            accurate: true,
            complete: true,
            next: false
          };
        }

        instance.highlightPosition(_state.position);

        return {
          accurate: true,
          complete: false,
          next: _state.next
        };
      }

    };

    return typebox;
  };

  var PackageDefinition = Typebox;
  var PackageName = "typebox";

  if ("undefined" !== typeof exports) module.exports = PackageDefinition;else if ("function" === typeof define && define.amd) {
    define(PackageName, function () {
      return PackageDefinition;
    });
  } else {
    window[PackageName] = PackageDefinition;
  }
})();