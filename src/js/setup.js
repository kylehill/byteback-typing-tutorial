const letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const caps = letters.map(function(l){ return l.toUpperCase() })
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")" ]
const extras = ["space", ",", "<", ">", ".", "?", "/", ":", ";", "\"", "'", "{", "[", "}", "]", "|", "\\", "_", "-", "+", "=", "~", "`", "enter", "tab", "delete", "backspace" ]

const keys = [].concat(letters, caps, numbers, extras)

const getPage = function(hash, lessonsObject) {
  if (!lessonsObject || !lessonsObject.pageMap) { return false }
  if (!lessonsObject.pageMap[hash]) { return false }

  return lessonsObject.pageMap[hash]
}

const pageRoute = function(context, next) {
  Mousetrap.reset()

  const page = getPage(context.params.hash, App.lessons)
  if (!page || !page.template) { return next() }

  $("main").html(App.templates.page(page))
  
  $(".page-content").html(App.templates[page.template](page))
  
  if (!page.lesson) {
    return
  }

  $(".start-exercise-button")
    .addClass("active")
    .on("click", function(){
      $(".page-container").addClass("exercise")
    })

  cueboard(".instruction-cueboard-container", {
    initialKeyState: "inactive",
    keyState: page.keys || {}
  })
  
  let cb = cueboard(".exercise-cueboard-container", {
    initialKeyState: "inactive",
    keyState: {
      active: page.keys.active || []
    }
  })

  let tb = typebox(".typebox-container", {
    string: page.text
  })

  let sc = scorecenter(".scorecenter-container", {
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
          var characters = map.characters.displayValue()
          var errors = map.errors.displayValue()
          return characters / ((characters + errors) || 1)
        }
      },
      {
        title: "Words Per Minute",
        format: function(value) {
          return Math.round(value * 10) / 10
        },
        value: function(map) {
          var words = map.words.displayValue()
          var clock = map.clock.displayValue()

          return words / ((clock || 1) / 60000)
        }
      }
    ]
  })

  const state = tb.state()
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
      sc.getMetric("clock").stop()
    }

    return (evt.altKey || evt.metaKey || evt.ctrlKey)
  })
  
}

const loadIntro = function(context, next) {
  pageRoute({ params: { hash: "introduction" }}, next)
}

$(function(){
  
  // Add structural templates to the page
  $("aside").html(App.templates.sidebar(App.lessons))

  // Setup router
  page("/:hash", pageRoute)
  page("/", loadIntro)

  // Start router
  page({ 
    hashbang: true 
  })

})