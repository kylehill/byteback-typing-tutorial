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

const loadIntro = function() {
  App.loadRoute("introduction")
}

const onHashChange = function() {
  const hash = getHash(location)

  if (hash === "") {
    return loadIntro()
  }

  return App.loadRoute(hash)
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

  App.registerHelpers()

  if (App.tutorialState.load() === false) {
    reloadState()
  }
  reloadSidebar()
  
  window.onhashchange = onHashChange
  onHashChange()

  $(".js-sidebar-clearstats").on("click", function(){
    reloadState()
  })

  $(".header").html(App.templates.header())

  $("body").removeClass("hideUntilLoaded")
  
})