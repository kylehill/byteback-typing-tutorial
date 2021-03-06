;(function(){

  const finishLesson = function(page, sc) {
    sc.getMetric("clock").stop()
    sc.stop()
    sc.refresh()

    const wpm = (sc.getMetric("words").value() / sc.getMetric("clock").value()) * 60000
    const accuracy = (sc.getMetric("characters").value() / (sc.getMetric("errors").value() + sc.getMetric("characters").value()))
    const completed = (wpm >= 20 && sc.getMetric("errors").value() <= 5)
    
    const lesson = App.tutorialState.markLesson(page.hash, {
      completed: completed,
      wpm: wpm,
      accuracy: accuracy
    })

    reloadSidebar()

    $(".overlay-container").html(App.templates.overlay({
      hash: page.hash,
      next: page.next,
      completed: completed,
      inaccurate: (accuracy < .95),
      accuracy: {
        average: lesson.average.accuracy,
        best: lesson.iterations.sort(function(a, b){
          return b.accuracy - a.accuracy
        }).slice(0, 5)
      },
      wpm: {
        average: lesson.average.wpm,
        best: lesson.iterations.sort(function(a, b){
          return b.wpm - a.wpm
        }).slice(0, 5)
      }
    })).addClass("active")

    $(".js-overlay-restartbutton").on("click", function(){
      App.loadRoute(page.hash)
    })
  }

  const PackageDefinition = finishLesson
  const PackageName = "finishLesson"

  if ("undefined" !== typeof(exports)) module.exports = PackageDefinition
  else if ("function" === typeof(define) && define.amd) {
    define(PackageName, function() { return PackageDefinition })
  } else {
    window.App = window.App || {}
    window.App[PackageName] = PackageDefinition
  }

})()