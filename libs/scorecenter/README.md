# Scorecenter

Scorecenter is a small (~2kb minified/gzipped) JS library that records metrics and creates automatically-updating displays based on changes in those metrics.

It works down to at least IE8.

--

**Scorecenter has a dependency on something jQuery-like.** (It was built with Zepto, and works fine with 1.x and 2.x jQuery. Let me know if there's any issues with other **$** alternatives.)

--

Scorecenter operates on two fundamental objects, **metrics** and **displays**. A metric is some single discrete piece of information that's counted (which can be time); a display is a calculation based on one or more of those metrics which is shown to the user.

### **Metric**

All metrics are created as objects, requiring two mandatory parameters:

* **name**: The unique name for this metric

* **type**: The type of metric to create (default is "counter")

Metric currently come in two flavors:

* **counter**: A single value that is manually incremented, decremented, or set (think "times clicked on this button")

* **timer**: A single value representing a duration of time (in milliseconds)

--

**Counter** metrics can be instantiated with an additional property:

* **count**: Start value for this counter (default to 0)

Once created, counter metrics have three additional methods:

* **metric.increment(optionalValue)**: Increases (or decreases, with a negative number) the current value of the metric by the value of the parameter. (If the parameter is omitted, the current value is increased by 1.)

* **metric.set(value)**: Sets the current value of the metric to the value of the parameter.

* **metric.value()**: Returns the current value of the metric.

--

**Timer** metrics, once created, have five additional methods:

* **metric.start()**: Sets the current state of the metric to "running", and starts adding time to the metric's value.

* **metric.stop()**: Sets the current state of the metric to "stopped", and stops adding time to the metric's value.

* **metric.reset()**: Sets the current state of the metric to "stopped", stops adding time to the metric's value, and sets the metric's value to 0.

* **metric.set(value)**: Sets the metric's value to the value of the parameter.

* **metric.value()**: Returns the current value of the metric.


### **Display**

All displays are created as objects. Each can have a number of optional properties:

* **title**: What this display represents will be visually called when shown to the user (defaults to something daft like "Unknown Title")

* **className**: An optional CSS class to be attached to this display.

* **metric**: An optional string matching the `name` property of a single metric. 

* **value(metricObject)**: An optional function, that accepts an object containing all metrics; returns a value that will be shown to the user. If you've specified the `metric` property on this display, you can omit the `value` property for it, as it will default to the value of `display.metric` if available. (Otherwise it will always just return 0.)

* **format(value)**: An optional function which can format the value for display purposes. Think use cases like converting a time value like 82093 to "1:22.09". This function accepts the value returned from the `display.value` function, and returns a string for display purposes. If omitted, this function defaults to a no-op.

--

### **scorecenter(selector, options)**

Accepts a CSS selector and an optional options object. Creates a scorecenter instance in the location(s) specified. 

The options object can contain the following properties:

* **refresh**: Either a number representing the interval, in ms, in which all displays should have their values updated *or* `false` (all updates will be manual)

* **metric**: An array of metric objects (as defined above)

* **display**: An array of display objects (as defined above)

The function returns a reference to the scorecenter instance; that instance is used for...

### **instance.getMetric(metric)**

Returns a reference to the named metric.

### **instance.refresh()**

Manually refresh all displays.

### **instance.stop()**

Stops the scorecenter instance from interval refreshing.

### **instance.interval(interval)**

Sets the scorecenter instance to interval refresh at the number of ms represented by the parameter.
