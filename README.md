# Byte Back Typing Tutorial

## Deployment

To "install" the code, just copy the `index.html` and the `dist` folder into the folder that this application is being hosted from. 

No other files or folders need to exposed to the public-facing website. There's no sensitive information in any other file, so there's no issue if anything else is exposed publicly, but it's not necessary.

## Installation

To make any modification to the existing state of the code, you'll need to have a few tools installed on your machine. Many of these steps should be a one-off, and they're rather straightforward, so hopefully it's not too scary.

1. You'll need [node.js](https://nodejs.org/en/). Installing node will also install a package manager called [npm](https://www.npmjs.com/). If you're using a Mac with a recent version of OSX, they're already pre-installed.

2. You'll need to install "globally" a utility called [gulp](http://gulpjs.com/), which will let us automatically rebuild the code once you've made changes. At the command line, enter: `npm install --global gulp`. Depending on how your machine is set up, you might get an permission error here; if so, enter `sudo npm install --global gulp` and type in your computer's password when prompted.

3. You'll also need install "globally" a utility called [bower](http://bower.io/), which will let us easily download and install some open source libraries needed by the front-end.

4. Using the command line, navigate to the directory that this code lives in your machine. Once you've done that, enter: `npm install -d` -- this will install a few utilities for you that also help with rebuilding code (they'll all go into the `node_modules` folder in this project). This may take a couple of minutes to download and install everything.

5. Using the command line, in the same folder, enter: `bower install` -- this will pull down a bunch of external libraries (like jQuery and Handlebars) that are used by the application in the user's browser. They'll all go into the `libs` folder in this project.

6. Almost done! Again using the command line in this folder, type in `gulp` -- this will do the magic of rebuilding the entire application, including the CSS, the open source JavaScript, and the code that's powering this specific application into the `dist` folder. It should run a few tasks quickly and tell you when it's done.

7. Type in `npm start` -- this will tell you that the application is now running, and that your computer is now serving up an application on port 3000. Go to `http://localhost:3000` in your web browser and things should be working correctly! (You won't be able to use the command line while the application server is running. When you're done with it, hit `Ctrl` + `C` to stop the process.)

8. Ok -- time to make some modifications. You can enter `npm run background` to always run the web server on port 3000, and enter `gulp watch` to always watch the `src` directory for any changes (at which point it will try to rebuild the application into the `dist` directory). Make whatever changes you want, and check how they work in the browser. (If you make any JavaScript syntax errors, the `gulp watch` process will crash when you save the file; you'll need to restart that process.)

9. When you're ready to deploy your changes, just follow the instructions in the "deployment" section -- replace `index.html` and the `dist` folder.

## Modifications (Under the Hood)

The code that powers this application uses a few cool tricks:

* JavaScript code is written in ES2015, which is compiled to a more widely-supported version of JS through Babel and minified with Uglify.
* Stylesheets are written with SCSS, which is compiled to standard CSS through SASS.
* Almost all HTML content is in a series of Handlebars templates.
* Gulp is leveraged to do code compilation and concatenation.

Content-wise, everything you'll want to modify (besides the `index.html` file in the root folder) is in the `src` directory.

Note: **If you modify any JavaScript or CSS files in the `dist` directory, those changes will get overwritten when you recompile the code.** So you probably don't want to do that.

#### Adding (or removing) a page or lesson

Page/lesson definitions are located in the `src/js/lessons.js` file. Modifying the `lessons` variable will change what lessons are available and where.

The general structure of the `lessons` object is that it contains a single property called `sections`; these sections are the different groups of content displayed on the sidebar, which can optionally have a title. 

Those sections each have a property called `pages`; these are the individual lessons and pages that make up the site's content. Pages are defined as:

```js
{
    // This page's title is (displayed in the sidebar)
    title: "Lesson 1",
    
    // (Optional) This page's full title, as displayed on the page itself
    fullTitle: "Lesson 1: Left Hand, Home Row",

    // This page's URL fragment (e.g. /#!/lesson-1)
    hash: "lesson-1",
    
    // What file from the src/templates folder we should display to the user (e.g. lesson-1.hbs)
    template: "lesson-1",
    
    // Whether or not this page has an exercise at the end
    lesson: true,
    
    // If this is a lesson, what lesson is "next"?
    next: "lesson-2",
    
    // If this has an exercise at the end, what text should the user be typing?
    text: "a s d f s d f f s d as sd ad fs ds sad af sa fa dafa sda dad das afa sfd add sasd df sf saf dds fd ads safd fsd fas sas dafs as fad",
    
    // If this has a keyboard displayed on-screen, what keys should be highlighted?
    keys: {
      // Active keys are all of the ones that will or can be used during the exercise
      active: ["A", "S", "D", "F", "Space"],
      
      // New keys are all of the ones that are newly-introduced this lesson (show up in dark blue)
      new: ["A", "S", "D", "F", "Space"]
    }
}
```

#### Change a page's content

Template files for each page are located in the `src/templates` directory -- the template name for each page corresponds with the file name.

By and large, the page and lesson templates are standard HTML files, so if you're comfortable with HTML, you should be comfortable here.

#### Add/change images

Images are unique -- there's no pre-processing done on them, so they live in the `dist/img` folder. Just make whatever modifications you like directly in there, and they won't get overwritten by any other changes.

#### Update stylesheets

This application uses [SASS](http://sass-lang.com/guide) (SCSS syntax), and makes heavy use of variables, especially for colors. If you change the value any of the `$color_` prefixed variables, you'll change it everywhere that it's used.

Most of the style rules are in `src/css/index.scss`. The `src/css/responsive.scss` file is also used to help content fit onto smaller screens. `src/css/ie-hacks.scss` is only operational on older versions of Internet Explorer (IE 8 and 9) to make adjustments for features that those browsers are missing.