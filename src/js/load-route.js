;(function(){

  const getPage = function(hash, lessonsObject) {
    if (!lessonsObject || !lessonsObject.pageMap) { return false }
    if (!lessonsObject.pageMap[hash]) { return false }

    return lessonsObject.pageMap[hash]
  }

  const loadRoute = function(hash, jumpToExercise) {
    Mousetrap.reset()

    const page = getPage(hash, App.lessons)
    
    $(".main").html(App.templates.page(page))
    
    $(".page-content").html(App.templates[page.template](page))
    
    if (!page.lesson) {
      return
    }

    cueboard(".instruction-cueboard-container", {
      initialKeyState: "inactive",
      keyState: {
        learned: page.keys.active,
        new: page.keys.new
      }
    })

    if (jumpToExercise) {
      $(".page-container").addClass("exercise")
      App.startLesson(page)
      return
    }

    $(".start-exercise-button")
      .addClass("active")
      .on("click", function(){
        $(".page-container").addClass("exercise")
        App.startLesson(page)
      })
    
  }

  const PackageDefinition = loadRoute
  const PackageName = "loadRoute"

  if ("undefined" !== typeof(exports)) module.exports = PackageDefinition
  else if ("function" === typeof(define) && define.amd) {
    define(PackageName, function() { return PackageDefinition })
  } else {
    window.App = window.App || {}
    window.App[PackageName] = PackageDefinition
  }

})()