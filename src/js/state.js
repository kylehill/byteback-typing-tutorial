;(function(){

  const reduce = function(array, iterator, memory, optionalContext) {
    for (var i = 0; i < array.length; i++) {
      memory = iterator.call(optionalContext, memory, array[i], i)
    }
    return memory
  }

  let state = {
    lessons: {}
  }

  const tutorialState = {

    clearState: function() {
      state = {
        lessons: {}
      }
    },

    getState: function() {
      return state
    },

    addLesson: function(lesson) {
      state.lessons[lesson.hash] = {
        title: lesson.title,
        hash: lesson.hash,
        status: {
          completed: false,
          started: false
        },
        best: {
          accuracy: 0,
          wpm: 0
        },
        average: {
          accuracy: 0,
          wpm: 0
        },
        iterations: []
      }
    },

    markLesson: function(hash, stats) {
      let lesson = state.lessons[hash]
      let statsObject = {
        wpm: stats.wpm,
        accuracy: stats.accuracy,
        complete: stats.complete,
        date: new Date().valueOf()
      } 

      lesson.status.started = true
      if (stats.completed) {
        lesson.status.completed = true
      }

      lesson.iterations.push(stats)
      
      lesson.best = reduce(lesson.iterations, function(mem, i){
        return {
          accuracy: Math.max(mem.accuracy, i.accuracy),
          wpm: Math.max(mem.wpm, i.wpm)
        }
      }, { wpm: 0, accuracy: 0 })
      
      lesson.average = reduce(lesson.iterations, function(mem, i){
        return {
          accuracy: mem.accuracy + i.accuracy,
          wpm: mem.wpm + i.wpm
        }
      }, { wpm: 0, accuracy: 0 })

      lesson.average.accuracy = (lesson.average.accuracy / lesson.iterations.length)
      lesson.average.wpm = (lesson.average.wpm / lesson.iterations.length)

      this.save()

      return lesson
    },

    serialize: function() {
      return JSON.stringify(state)
    },

    deserialize: function(stateString) {
      state = JSON.parse(stateString)
    },

    save: function() {
      const stateString = this.serialize()
      localStorage.setItem("tt-data", stateString)
    },

    load: function() {
      const stateString = localStorage.getItem("tt-data")
      if (stateString) {
        this.deserialize(stateString)
        return true
      }

      return false
    }

  }

  const PackageDefinition = tutorialState
  const PackageName = "tutorialState"

  if ("undefined" !== typeof(exports)) module.exports = PackageDefinition
  else if ("function" === typeof(define) && define.amd) {
    define(PackageName, function() { return PackageDefinition })
  } else {
    window.App = window.App || {}
    window.App[PackageName] = PackageDefinition
  }

})()