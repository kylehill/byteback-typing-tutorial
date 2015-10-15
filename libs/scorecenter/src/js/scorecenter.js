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
    for (let i = 0; i < array.length; i++) {
      iterator.call(context, array[i])
    }
  }

  const map = function(array, iterator, context) {
    let out = []
    for (let i = 0; i < array.length; i++) {
      out.push(iterator.call(context, array[i]))
    }
    return out
  }

  const reduce = function(array, iterator, memory, context) {
    for (let i = 0; i < array.length; i++) {
      memory = iterator.call(context, memory, array[i])
    }
    return memory
  }

  const _increment = function(optionalValue) {
    if (optionalValue === undefined) {
      this.count += 1
      return this.count
    }

    this.count += optionalValue
    return this.count
  }

  const _set = function(value) {
    this.count = value
    return this.count
  }

  const _start = function() {
    if (this.running) {
      return
    }

    this.running = true
    
    if (this.startTime && this.stopTime) {
      this.startTime = +(new Date()) - (this.stopTime - this.startTime)
      this.stopTime = false
      return
    }

    this.startTime = +(new Date())
    this.stopTime = false
  }

  const _stop = function() {
    if (!this.running) {
      return
    }

    this.running = false
    this.stopTime = +(new Date())
  }

  const _reset = function() {
    this.running = false
    this.startTime = this.stopTime = false
  }

  const _setTimer = function(time) {
    if (!this.running) {
      this.stopTime = +(new Date())
    }
    this.startTime = +(new Date()) - time
  }

  const _displayValueTimer = function() {
    if (this.stopTime) {
      return this.stopTime - this.startTime
    }

    var date = +(new Date())
    return date - (this.startTime || date)
  }

  const _displayValueCounter = function() {
    return this.count
  }

  const initializeMetric = function(metric) {
    let metricObject = {
      name: metric.name,
      type: metric.type || "counter"
    }

    switch(metricObject.type) {
      case "timer":
        metricObject.start = _start.bind(metricObject)
        metricObject.stop = _stop.bind(metricObject)
        metricObject.reset = _reset.bind(metricObject)
        metricObject.set = _setTimer.bind(metricObject)
        metricObject.value = _displayValueTimer.bind(metricObject)
        return metricObject

      case "counter":
        metricObject.count = (metric.count || 0)
        metricObject.increment = _increment.bind(metricObject)
        metricObject.set = _set.bind(metricObject)
        metricObject.value = _displayValueCounter.bind(metricObject)
        return metricObject
    }

    return metricObject
  }

  const buildDisplays = function(opts) {
    let $displayContainer = $("<div class='scorecenter js-scorecenter'>")
    $(opts.selector).append($displayContainer)

    return map(opts.displays, function(display){
      let $display = $("<div class='scorecenter-display'>")
      $displayContainer.append($display)

      let $title = $("<div class='scorecenter-displaytitle'>")
      let $value = $("<div class='scorecenter-displayvalue'>")
      $display.append($title)
      $display.append($value)

      let displayObject = {
        format: display.format || (function(value){ 
          return value
        }),

        value: display.value || (function(metricMap) {
          if (display.metric && metricMap[display.metric]) {
            return metricMap[display.metric].value()
          }

          return 0
        }),

        refresh: function() {
          const value = this.value(opts.metricMap)
          const formatted = this.format(value)
          $value.text(formatted)
        }
      }

      $display.addClass(display.className)
      $title.text(display.title || "Unknown Title")

      displayObject.refresh()
      return displayObject
    })
  }

  const Scorecenter = function(selector, opts) {
    opts = setOptions(opts, {
      selector: selector,
      metrics: [],
      displays: [],
      refresh: false
    })

    opts.metrics = map(opts.metrics, initializeMetric)
    opts.metricMap = reduce(opts.metrics, function(mem, metric){
      mem[metric.name] = metric
      return mem
    }, {})

    let displays = buildDisplays(opts)

    let scorecenter = {

      getMetric: function(name) {
        if (!name) {
          return undefined
        }

        return opts.metricMap[name]
      },

      refresh: function() {
        forEach(displays, function(display){
          display.refresh()
        })
      },

      interval: function(interval) {
        if (opts.refresh) {
          opts.refresh = interval
          return
        }
        
        opts.refresh = interval
        checkTimeout()
      },

      stop: function() {
        opts.refresh = false
      },

    }

    const checkTimeout = function() {
      if (opts.refresh) {
        scorecenter.refresh()
        setTimeout(checkTimeout, opts.refresh)
      }
    }
    checkTimeout()

    return scorecenter
    
  }

  const PackageDefinition = Scorecenter
  const PackageName = "scorecenter"

  if ("undefined" !== typeof(exports)) module.exports = PackageDefinition
  else if ("function" === typeof(define) && define.amd) {
    define(PackageName, function() { return PackageDefinition })
  } else window[PackageName] = PackageDefinition

})()