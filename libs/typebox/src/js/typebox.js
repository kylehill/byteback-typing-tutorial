;(function(){

  const setOptions = function(optionsObject, defaultKeyValues) {

    for (let key in defaultKeyValues) {
      if (!optionsObject.hasOwnProperty(key)) {
        optionsObject[key] = defaultKeyValues[key]
      }
    }

    return optionsObject
  }

  const forEach = function(array, iterator, context) {
    for (var i = 0; i < array.length; i++) {
      iterator.call(context, array[i], i)
    }
  }

  const buildTypebox = function(opts) {
    let $tb = $("<div class='typebox js-typebox'>")
    $(opts.selector).html($tb)

    let charArray = false
    
    const setString = function(string) {
      $tb.empty()

      if (string.length === 0) {
        return false
      }
      
      let charArray = []
      const words = opts.string.split(" ")

      forEach(words, function(word, i){
        let $word = $("<div class='typebox-word'>")
        
        const characters = word.split("")
        forEach(characters, function(character){
          let $character = $("<span class='typebox-character'>")
          $character.text(character)
          $word.append($character)
          charArray.push($character)
        })

        if ((i + 1) < words.length) {
          let $character = $("<span class='typebox-character typebox-space'>")
          $character.html(opts.spaceCharacter)
          $word.append($character)
          charArray.push($character)
        }
        $tb.append($word)
      })

      return charArray
    }

    const highlightPosition = function(position) {
      if (charArray) {
        forEach(charArray, function($char){
          $char.removeClass("typebox-active")
        })

        charArray[position].addClass("typebox-active")
      }
    }

    const endHighlight = function() {
      if (charArray) {
        forEach(charArray, function($char){
          $char.removeClass("typebox-active")
        })
      }
    }

    charArray = setString(opts.string)
    highlightPosition(0)

    return {
      $tb: $tb,
      setString: function(string) {
        charArray = setString(string)
        highlightPosition(0)
      },
      highlightPosition: highlightPosition,
      endHighlight: endHighlight
    }
  }

  const resetState = function(opts) {
    return {
      position: 0,
      string: opts.string,
      next: opts.string[0] || false,
      started: false,
      complete: false
    }
  }

  const Typebox = function(selector, opts) {
    opts = setOptions(opts, {
      string: "",
      selector: selector,
      spaceCharacter: "&nbsp;"
    })

    let instance = buildTypebox(opts)

    let state = resetState(opts)
    
    let typebox = {

      state: function() {
        return state
      },

      reset: function(string) {
        if (string !== undefined) {
          opts.string = string
        }

        instance.setString(opts.string)
        state = resetState(opts)
      },

      applyCharacter: function(character) {
        if (character === "space") {
          character = " "
        }

        if (!state.string) {
          return { started: false }
        }

        if (state.complete) {
          return { complete: true }
        }

        state.started = true
        if (state.next !== character) {
          return { 
            accurate: false, 
            complete: false, 
            next: state.next 
          }
        }

        state.position++
        state.next = state.string[state.position]
        if (state.next === undefined) {
          state.complete = true
          instance.endHighlight()
          return {
            accurate: true,
            complete: true,
            next: false
          }
        }

        instance.highlightPosition(state.position)

        return { 
          accurate: true, 
          complete: false,
          next: state.next 
        }
      }

    }

    return typebox

  }

  const PackageDefinition = Typebox
  const PackageName = "typebox"

  if ("undefined" !== typeof(exports)) module.exports = PackageDefinition
  else if ("function" === typeof(define) && define.amd) {
    define(PackageName, function() { return PackageDefinition })
  } else {
    window[PackageName] = PackageDefinition
  }

})()