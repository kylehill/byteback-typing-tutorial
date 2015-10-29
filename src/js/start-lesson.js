;(function(){

  const scOptions = function(){
    return {
      refresh: 250,
      metrics: [
        {
          name: "characters",
          type: "counter"
        },
        {
          name: "errors",
          type: "counter"
        },
        {
          name: "clock",
          type: "timer"
        },
        {
          name: "words",
          type: "counter"
        }
      ],
      displays: [
        {
          title: "Characters",
          metric: "characters"
        },
        {
          title: "Errors",
          metric: "errors"
        },
        {
          title: "Accuracy",
          format: function(value) {
            return (Math.round(value * 1000) / 10) + "%"
          },
          value: function(map) {
            var characters = map.characters.value()
            var errors = map.errors.value()
            return characters / ((characters + errors) || 1)
          }
        },
        {
          title: "Words Per Minute",
          format: function(value) {
            return Math.round(value * 10) / 10
          },
          value: function(map) {
            var words = map.words.value()
            var clock = map.clock.value()

            return words / ((clock || 1) / 60000)
          }
        }
      ]
    }
  }

  const startLesson = function(page) {
    let cb = cueboard(".exercise-cueboard-container", {
      initialKeyState: "inactive",
      keyState: {
        active: page.keys.active || []
      }
    })

    let tb = typebox(".typebox-container", {
      string: page.text
    })

    let sc = scorecenter(".scorecenter-container", scOptions())

    let state = tb.state()
    if (state.next) {
      cb.changeState("next", state.next)
    }
    
    Mousetrap.bind(keys, function(evt, key){
      sc.getMetric("clock").start()
      const result = tb.applyCharacter(key)

      if (result.accurate === true) {
        sc.getMetric("characters").increment()
        cb.changeState("active", key)

        if (result.next) {
          cb.changeState("next", result.next)
        }

        if (result.next === " " || result.complete) {
          sc.getMetric("words").increment()
        }
      }

      if (result.accurate === false) {
        sc.getMetric("errors").increment()
      }

      if (result.complete) {
        App.finishLesson(page, sc)
      }

      return (evt.altKey || evt.metaKey || evt.ctrlKey)
    })

    $(".js-overlay-startover").on("click", function(){
      App.loadRoute(page.hash, true)
    })
  }

  const PackageDefinition = startLesson
  const PackageName = "startLesson"

  if ("undefined" !== typeof(exports)) module.exports = PackageDefinition
  else if ("function" === typeof(define) && define.amd) {
    define(PackageName, function() { return PackageDefinition })
  } else {
    window.App = window.App || {}
    window.App[PackageName] = PackageDefinition
  }

})()