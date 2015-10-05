const getPage = function(hash, lessonsObject) {
  if (!lessonsObject || !lessonsObject.pageMap) { return false }
  if (!lessonsObject.pageMap[hash]) { return false }

  return lessonsObject.pageMap[hash]
}

const pageRoute = function(context, next) {
  var page = getPage(context.params.hash, App.lessons)
  if (!page || !page.template) { return next() }

  $("main").html(App.templates.page)
  $(".page-container").html(App.templates[page.template])

  console.log(page)
    
  if (page.lesson) {
    var cb = cueboard(".cueboard-container", {
      initialKeyState: "inactive"
    })
  }
}

const loadIntro = function(context, next) {
  pageRoute({ params: { hash: "introduction" }}, next)
}

$(function(){
  
  // Add structural templates to the page
  $("aside").html(App.templates.sidebar(App.lessons))

})

// Setup router
  page("/:hash", pageRoute)
  page("/", loadIntro)
  
  // Start router
  page({ 
    hashbang: true 
  })
