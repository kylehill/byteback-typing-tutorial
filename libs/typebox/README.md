# Typebox

Typebox is a small (~2kb minified/gzipped) JS/CSS library that displays and manages the state of a "typing tutorial"-like set of characters to type on a page, with a cursor to highlight and illustrate the current character that needs to be typed.

It works down to at least IE8.

--

**Typebox has a dependency on something jQuery-like.** (It was built with Zepto, and works fine with 1.x and 2.x jQuery. Let me know if there's any issues with other **$** alternatives.)

--

### **typebox(selector, options)**

Accepts a CSS selector and an optional options object. Creates a typebox in the location(s) specified. 

The options object can contain the following properties:

* **string**: The string that should be used as the definition for the typebox instructions. (Defaults to `""`)
* **spaceCharacter**: In case you want to manually define the character(s) inserted between words. (Defaults to `"&nbsp;"`)

This function returns a reference to the created typebox instance; you'll use that instance later, with...

### **instance.state()**

Returns the current "state" of the typebox's progression through the target string. State is an object with the following properties:

* **string**: Current target string being typed
* **position**: Index of the next character to type in the string (aka "where the cursor is now")
* **next**: The next character to be typed in the string (or `false`, if string is complete or invalid)
* **started**: Whether or not keystrokes have been recorded in the current state
* **completed**: Whether or not progression through the string has been completed

### **instance.reset(optionalString)**

Resets the instance's state and cursor position. If a string is passed in as an optional parameter, changes the target string to be typed to that parameter.

### **instance.applyCharacter(character)**

Checks the character passed in as a parameter against the current cursor position. If the character is correct, it changes the state of the typebox and progresses the cursor to the next character. 

Returns an object containing:

* **accurate**: Whether or not the parameter matched the character at the cursor's position.
* **complete**: Whether or not the progression through the string is now completed
* **next**: The next character to be typed (or `false`, if string is complete)