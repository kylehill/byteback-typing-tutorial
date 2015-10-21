const forEach = function(array, iterator, context) {
  for (let i = 0; i < array.length; i++) {
    iterator.call(context, array[i], i)
  }
}

const map = function(array, iterator, context) {
  let out = []
  for (let i = 0; i < array.length; i++) {
    out.push(iterator.call(context, array[i], i))
  }
  return out
}

const letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const caps = map(letters, function(l){ return l.toUpperCase() })
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")" ]
const extras = ["space", ",", "<", ">", ".", "?", "/", ":", ";", "\"", "'", "{", "[", "}", "]", "|", "\\", "_", "-", "+", "=", "~", "`", "enter", "tab", "delete", "backspace" ]

const keys = [].concat(letters, caps, numbers, extras)

const getHash = function(loc) {
  if (!loc.hash) {
    return ""
  }

  const splitHash = loc.hash.split("#!/")
  return splitHash[1] || ""
}

const getPage = function(hash, lessonsObject) {
  if (!lessonsObject || !lessonsObject.pageMap) { return false }
  if (!lessonsObject.pageMap[hash]) { return false }

  return lessonsObject.pageMap[hash]
}

const pageRoute = function(hash) {
  Mousetrap.reset()

  const page = getPage(hash, App.lessons)
  //if (!page || !page.template) { return next() }

  $(".main").html(App.templates.page(page))
  
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
    keyState: {
      learned: page.keys.active,
      new: page.keys.new
    }
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
      finishLesson(page, sc)
    }

    return (evt.altKey || evt.metaKey || evt.ctrlKey)
  })
  
}

const loadIntro = function() {
  pageRoute("introduction")
}

const onHashChange = function() {
  const hash = getHash(location)

  if (hash === "") {
    return loadIntro()
  }

  return pageRoute(hash)
}

const finishLesson = function(page, sc) {
  sc.getMetric("clock").stop()
  sc.stop()

  const completed = (sc.getMetric("errors").value() <= 5)
  const wpm = (sc.getMetric("words").value() / sc.getMetric("clock").value()) * 60000
  const accuracy = (sc.getMetric("characters").value() / (sc.getMetric("errors").value() + sc.getMetric("characters").value()))

  console.log(page.hash, completed, wpm, accuracy)

  App.tutorialState.markLesson(page.hash, {
    completed: completed,
    wpm: wpm,
    accuracy: accuracy
  })

  reloadSidebar()
}

const reloadSidebar = function() {
  const state = App.tutorialState.getState()

  const lessonData = {
    sections: map(App.lessons.sections, function(section){
      
      section.pages = map(section.pages, function(page){
        if (page.lesson) {
          page.state = state.lessons[page.hash]
        }
        return page
      })

      return section

    })
  }

  // Add structural templates to the page
  $(".sidebar-content").html(App.templates.sidebar(lessonData))
}

const reloadState = function() {
  App.tutorialState.clearState()

  forEach(App.lessons.sections, function(section){
    forEach(section.pages, function(page){
      if (page.lesson) {
        App.tutorialState.addLesson(page)
      }
    })
  })

  App.tutorialState.save()
  reloadSidebar()
}

$(function(){

  var base = location.pathname.substr(0, location.pathname.length - 1)
  reloadSidebar()

  if (App.tutorialState.load() === false) {
    reloadState()
  }

  window.onhashchange = onHashChange
  onHashChange()

  $(".js-sidebar-clearstats").on("click", function(){
    reloadState()
  })
  
})