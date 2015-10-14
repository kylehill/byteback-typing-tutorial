# Cueboard

Cueboard is a small (< 2kb minified/gzipped) JS/CSS library that displays a programmatically defined and manipulable "keyboard" on a webpage. 

It's primarily intended for illustrating instructions to users, specifically for typing tutorials, but you can use it for whatever!

It works at least down to IE8 (although it looks like hot garbage without 2D transforms and border-radius).

Cueboard primarily functions by creating divs, each representing keys, that then programmatically get their "state" changed -- meaning, it replaces any existing `cueboard-keystate-` class (such as `cueboard-state-inactive`) on that key's div with a new class (e.g. `cueboard-state-active`). 

You'll want to define some CSS rules for whatever state classes you end up using; the included **cueboard.css** file just helps with the initial key layout.

--

**Cueboard has a dependency on something jQuery-like.** (It was built with Zepto, and works fine with 1.x and 2.x jQuery. Let me know if there's any issues with other **$** alternatives.)

--

### **cueboard(selector, options)**

Accepts a CSS selector and an optional options object. Creates a cueboard in the location(s) specified. 

The options object can contain the following properties:

* **keyboard**: An object defining the keyboard that cueboard should create (specification provided below; defaults to a standard American QWERTY keyboard)
* **initialKeyState**: A string representing the default initial key state for all keys (defaults to "inactive", so all keys will have the class `cueboard-keystate-inactive`)
* **keyState**: An object containing key-value pairs for initial key states, overriding **initialKeyState** 

This function returns a reference to the created cueboard instance; you'll use that instance to change the state of keys later, with...

### **instance.changeState(state, keys)**

Changes the state of a key (or each in an array of keys) to whatever you specify.

```js
var cb = cueboard(".cueboard-container")
cb.changeState("active", ["a", "S", 68, "F", "Space"])
cb.changeState("next", "a")
```

There's some forgiveness built in to the default keyboard -- capital and lowercase letters work, as well as `which`/`keyCode` codes. For special character/number keys, most of what you think will work will be fine.

--

#### **Keyboard definition**

A keyboard is an object containing a `rows` property, which is an array of arrays; each sub-array contains individual keys.

All keys are objects, and have a `type` property that determine what layouts apply to them. Valid `type` properties include:

* **center**: On-key text should be placed in vertical and horizontal center
* **bottom-left**, **bottom-right**: Positions text in bottom corner of key
* **dual**: Show two lines of text for key (ordinary and shifted, like 1 and !)
* **space**: Spacebar (does a few extra setup things)
* **blank**: Doesn't bind any state to this key; mostly used for spacing purposes

Keys can have the following properties:

```js
{
  // Which type of key layout should be used
  type: string,
  
  // Text displayed by "dual"-type keys
  top: string, 
  bottom: string,
  
  // Text displayed by "center", 
  // "bottom-left", and "bottom-right"-type keys
  text: string,
  
  // Array of aliases to use by instance.changeState
  // Top, bottom, text, and text.toLowerCase() all
  // automatically get set up as aliases
  a: array,
  
  // Width of this key, expressed as a multiple of
  // the width of a standard key -- used for shift/tab/etc.
  width: number
}
```