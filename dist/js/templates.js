this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};
this["App"]["templates"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"header-content\">\n  <div class=\"header-branding\">\n    <div class=\"header-branding-content\">\n      <a href=\"http://byteback.org\">\n        <img class=\"header-logo\" src=\"dist/img/header-logo.png\" />\n      </a>\n\n      <div class=\"header-social\">\n        \n        <div class=\"header-social-icon\">\n          <a href=\"https://www.facebook.com/Byte.Back.DC\" target=\"_blank\">\n            <img src=\"dist/img/header-fb.png\" />\n          </a>\n        </div>\n        \n        <div class=\"header-social-icon\">\n          <a href=\"https://twitter.com/ByteBackDC\" target=\"_blank\">\n            <img src=\"dist/img/header-twitter.png\" />\n          </a>\n        </div>\n        \n        <div class=\"header-social-icon\">\n          <a href=\"https://www.linkedin.com/company/byte-back\" target=\"_blank\">\n            <img src=\"dist/img/header-linkedin.png\" />\n          </a>\n        </div>\n        \n        <div class=\"header-social-icon\">\n          <a href=\"https://www.youtube.com/user/ByteBackVideos\" target=\"_blank\">\n            <img src=\"dist/img/header-youtube.png\" />\n          </a>\n        </div>\n        \n        <div class=\"header-social-icon\">\n          <a href=\"https://instagram.com/bytebackdc/\" target=\"_blank\">\n            <img src=\"dist/img/header-instagram.png\" />\n          </a>\n        </div>\n\n        <div class=\"header-donate-icon\">\n          <a href=\"http://byteback.org/donate/\" target=\"_blank\">\n            <img src=\"dist/img/header-donate.png\" />\n          </a>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"header-navigation\">\n\n    <div class=\"header-navigation-content\">\n\n      <div class=\"header-navlink\">\n        <a href=\"http://byteback.org/\">Home</a>\n      </div>\n\n      <div class=\"header-navlink\">\n        <a href=\"http://byteback.org/about/\">About Us</a>\n      </div>\n\n      <div class=\"header-navlink\">\n        <a href=\"http://byteback.org/students/\">For Students</a>\n      </div>\n\n      <div class=\"header-navlink\">\n        <a href=\"http://byteback.org/students/classes/\">Classes</a>\n      </div>\n\n      <div class=\"header-navlink\">\n        <a href=\"http://byteback.org/what-we-do/career/\">Career Services</a>\n      </div>\n\n      <div class=\"header-navlink\">\n        <a href=\"http://byteback.org/what-we-do/first-time-technology/\">Computer Services</a>\n      </div>\n\n      <div class=\"header-navlink\">\n        <a href=\"http://byteback.org/get-involved/\">Get Involved</a>\n      </div>\n\n      <div class=\"header-navlink\">\n        <a href=\"http://byteback.org/blog/\">Blog</a>\n      </div>\n\n    </div>\n\n  </div>\n</div>";
},"useData":true});
this["App"]["templates"]["overlay"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "overlay-complete\n  ";
},"3":function(container,depth0,helpers,partials,data) {
    return "overlay-incomplete";
},"5":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"overlay-title\">Good work!</div>\n    <div class=\"overlay-content\">\n      <p>You had 5 or fewer errors and typed faster than 20 WPM!</p>\n      <p>Now try the next exercise!</p>\n    </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"overlay-title\">Oh, no!</div>\n    <div class=\"overlay-content\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.inaccurate : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "      <p>You had more than 5 errors this time.</p>\n      <p>Try to work on your accuracy! You'll naturally get faster as you practice.</p>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "      <p>You were slower than 20 words per minute.</p>\n      <p>Give this lesson another try and get some more practice!</p>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "  <a class=\"pseudo-button overlay-restartbutton js-overlay-restartbutton\">\n    Restart Lesson\n  </a>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <a class=\"pseudo-button overlay-nextbutton js-overlay-nextbutton\" href=\"#!/"
    + container.escapeExpression(((helper = (helper = helpers.next || (depth0 != null ? depth0.next : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"next","hash":{},"data":data}) : helper)))
    + "\">\n    Next Lesson\n  </a>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "    <div class=\"overlay-statrow\">\n      <div class=\"overlay-statdate\">\n        "
    + alias3((helpers.humanize || (depth0 && depth0.humanize) || alias2).call(alias1,(depth0 != null ? depth0.date : depth0),{"name":"humanize","hash":{},"data":data}))
    + "\n      </div>\n      <div class=\"overlay-statvalue\">\n        "
    + alias3((helpers.percent || (depth0 && depth0.percent) || alias2).call(alias1,(depth0 != null ? depth0.accuracy : depth0),{"name":"percent","hash":{},"data":data}))
    + "\n      </div>\n    </div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "    <div class=\"overlay-statrow\">\n      <div class=\"overlay-statdate\">\n        "
    + alias3((helpers.humanize || (depth0 && depth0.humanize) || alias2).call(alias1,(depth0 != null ? depth0.date : depth0),{"name":"humanize","hash":{},"data":data}))
    + "\n      </div>\n      <div class=\"overlay-statvalue\">\n        "
    + alias3((helpers.round || (depth0 && depth0.round) || alias2).call(alias1,(depth0 != null ? depth0.wpm : depth0),{"name":"round","hash":{},"data":data}))
    + "\n      </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"overlay-text\n  "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hash : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.next : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<div class=\"overlay-stats\">\n  <div class=\"overlay-accuracy overlay-section\">\n    <div class=\"overlay-sectiontitle\">\n      Accuracy\n    </div>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.accuracy : depth0)) != null ? stack1.best : stack1),{"name":"each","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"overlay-statrow overlay-statrow-average\">\n      <div class=\"overlay-statdate\">\n        Average\n      </div>\n      <div class=\"overlay-statvalue\">\n        "
    + alias3((helpers.percent || (depth0 && depth0.percent) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.accuracy : depth0)) != null ? stack1.average : stack1),{"name":"percent","hash":{},"data":data}))
    + "\n      </div>\n    </div>\n  </div>\n  <div class=\"overlay-wpm overlay-section\">\n    <div class=\"overlay-sectiontitle\">\n      Words Per Minute\n    </div>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.wpm : depth0)) != null ? stack1.best : stack1),{"name":"each","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"overlay-statrow overlay-statrow-average\">\n      <div class=\"overlay-statdate\">\n        Average\n      </div>\n      <div class=\"overlay-statvalue\">\n        "
    + alias3((helpers.round || (depth0 && depth0.round) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.wpm : depth0)) != null ? stack1.average : stack1),{"name":"round","hash":{},"data":data}))
    + "\n      </div>\n    </div>\n  </div>\n</div>";
},"useData":true});
this["App"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <h2>\n      "
    + container.escapeExpression(((helper = (helper = helpers.fullTitle || (depth0 != null ? depth0.fullTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"fullTitle","hash":{},"data":data}) : helper)))
    + "\n    </h2>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page-container\">\n\n  <div class=\"instruction-container\">\n    <div class=\"page-content\">\n    </div>\n\n    <button class=\"start-exercise-button\">\n      Start Exercise\n    </button>\n  </div>\n\n  <div class=\"exercise-container\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.fullTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"scorecenter-container\">\n    </div>\n\n    <div class=\"controls-container\">\n      <div class=\"typebox-container\">\n      </div>\n\n      <div class=\"exercise-cueboard-container\">\n      </div>\n\n      <div class=\"startover-container\">\n        <button class=\"pseudo-button overlay-startover js-overlay-startover\">\n          Restart Exercise\n        </button>\n      </div>\n\n      <div class=\"overlay-container\">\n      </div>\n    </div>\n  </div>\n\n</div>";
},"useData":true});
this["App"]["templates"]["sidebar"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "  <div class=\"sidebar-section\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    \n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"sidebar-sectiontitle\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"sidebar-page\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.lesson : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <a class=\"sidebar-pagelink\" href=\"#!/"
    + alias4(((helper = (helper = helpers.hash || (depth0 != null ? depth0.hash : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hash","hash":{},"data":data}) : helper)))
    + "\">\n        "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n      </a>\n    </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "      <div class=\"sidebar-status \n        "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.status : stack1)) != null ? stack1.started : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.status : stack1)) != null ? stack1.completed : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n      </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "sidebar-status-started";
},"8":function(container,depth0,helpers,partials,data) {
    return "sidebar-status-completed";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"sidebar-container\">\n  <!--\n  <div class=\"page-featureimage\">\n    <img src=\"dist/img/byte-back-logo.png\" />\n  </div>\n  -->\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.sections : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
this["App"]["templates"]["advanced-lesson-1"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Advanced Lesson #1: ( and )\n</h2>\n\n<p>\n  An important part of word processing is the use of parenthesis. \n  These are also \"secondary\" or modified keys, so to type \n  parenthesis you will need to be holding down the <strong>shift</strong> \n  key with the <strong>left pinky</strong>. The \n  <strong>opening parenthesis</strong> is typed by reaching the \n  <strong>right ring finger</strong> up 2 rows. The \n  <strong>closing parenthesis</strong> is typed by reaching the \n  </strong>right pinky</strong> up 2 rows.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  This will be tricky, but is very useful once you master it!\n</p>";
},"useData":true});
this["App"]["templates"]["advanced-lesson-2"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Advanced Lesson #2: ' and \"\n</h2>\n\n<p>\n  If you need to type dialogue, or want to use contractions, \n  it is necessary to use the <strong>\"</strong> and <strong>'</strong> \n  key. Both are typed by reaching the <strong>left pinky to the right.</strong> \n  The primary symbol is ' so to type ' simply strike the key. \n  To type a \" hold <strong>shift</strong> with the <strong>left pinky</strong> \n  while striking the key with the right.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Only one more lesson to go!\n</p>";
},"useData":true});
this["App"]["templates"]["advanced-lesson-3"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Advanced Lesson #3: :, -, and /\n</h2>\n\n<p>\n  The last lesson is some more useful punctuation and symbols. \n  The colon is the secondary symbol on the semicolon key, \n  and is typed by holding down the <strong>shift</strong> key and \n  typing the <strong>;</strong> key with the \n  <strong>right pinky</strong>. The <strong>-</strong> is used to \n  hyphenate words and to separate thoughts. This is reached with \n  the <strong>right pinky</strong> and is the primary key so you \n  do not have to hold down shift. Last, the <strong>/</strong> is \n  typed with the <strong>right pinky</strong> by reaching down, \n  and it is also a primary key.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Try the extra challenges when you finish!\n</p>";
},"useData":true});
this["App"]["templates"]["extra-practice-1"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Extra Practice #1: \"A Series of Tubes\"\n</h2>\n\n<p>\n  On June 28, 2006, Senator Ted Stevens (R - Alaska) delivered a speech that included this misinformed understanding of how the internet works.\n</p>";
},"useData":true});
this["App"]["templates"]["extra-practice-2"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Extra Practice #2: \"Echo\"\n</h2>\n\n<p>\n  This passage is adapted from the Wikipedia entry for \n  <a href=\"http://en.wikipedia.org/wiki/Echo_(phenomenon)\">\n    the word \"echo.\"\n  </a>\n</p>";
},"useData":true});
this["App"]["templates"]["extra-practice-3"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Extra Practice #3: \"The Walrus and The Carpenter\"\n</h2>\n\n<p>\n  This passage is two stanzas of a famous Lewis Carrol poem, \n  <a href=\"http://www.jabberwocky.com/carroll/walrus.html\">\n    \"The Walrus and The Carpenter\". \n  </a>\n  The poem was also recited in Alice in Wonderland by \n  Tweedledee and Tweedledum.\n</p>\n";
},"useData":true});
this["App"]["templates"]["extra-practice-4"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Extra Practice #4: \"Extreme Ironing\"\n</h2>\n\n<p>\n  This exercise is an excerpt from the Wikipedia article on \n  <a href=\"http://en.wikipedia.org/wiki/Extreme_ironing\">\n    \"Extreme Ironing.\"\n  </a>\n</p>";
},"useData":true});
this["App"]["templates"]["extra-practice-5"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Extra Practice #5: \"Rain\"\n</h2>\n\n<p>\n  This text is taken from the Wikipedia article on \n  <a href=\"http://en.wikipedia.org/wiki/Rain\">\n    rain.\n  </a>\n</p>";
},"useData":true});
this["App"]["templates"]["final-test"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Final Test\n</h2>\n\n<p>\n  You have now completed all 15 lessons and are ready for the final \n  test! However, you can still take the Advanced Lessons to learn \n  more punctuation, symbols, and numbers, or use the Extra Exercises \n  for more practice. The more you type, the more your speed and \n  accuracy will improve! Additionally, you'll find more tests, \n  exercises, lessons, and even games on the \n  <a href=\"#!/resources\">Resources</a> page.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Congratulations!\n</p>";
},"useData":true});
this["App"]["templates"]["how-to-type"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  How To Type: Hand Placement, Posture, &amp; Tips\n</h2>\n\n<p>\n  To type most effectively and safely, follow these guidelines.\n</p>\n\n<h3>\n  Hand Placement\n</h3>\n\n<p>\n  Place your fingers on the \"home row,\" with your index fingers \n  on <strong>F</strong> and <strong>J</strong> (note the small \n  bump on those two keys) and all other fingers on the next keys.\n</p>\n\n<div class=\"page-featureimage\">\n  <img src=\"dist/img/computer-keyboard-layout.png\" />\n</div>\n\n<p>\n  Your fingers should always remain on home row except when \n  performing a reach as part of a keystroke. The more you move \n  your fingers, the less efficient your typing will be!\n</p>\n\n<h3>\n  Posture\n</h3>\n\n<p>\n  To type correctly with the lowest risk for injury,\n</p>\n\n<img src=\"dist/img/posture.png\" class=\"floated floated-right\" />\n\n<ul>\n  <li>\n    Sit forward in your chair with feet placed flat on the ground.\n  </li>\n  <li>\n    Keep your back straight.\n  </li>\n  <li>\n    Make sure your arms and hands are parallel to the keyboard.\n  </li>\n  <li>\n    Keep your wrists straight, not bending up or down toward \n    the keyboard.\n  </li>\n  <li>\n    Fingers should be curled toward each key, not flat.\n  </li>\n</ul>\n\n<h3>\n  Tips &amp; Tricks\n</h3>\n\n<ol>\n  <li>\n    <strong>DO NOT</strong> look at your fingers when typing. \n    This will slow you down in the long run even though it is \n    easier at first.\n  </li>\n  <li>\n    Begin each exercise by finding the home row and making sure \n    you know which keys are under which fingers. This will make \n    looking at your hands unnecessary!\n  </li>\n  <li>\n    Start slow and focus on accuracy. Speed is easier to \n    gain than poor accuracy is to fix.\n  </li>\n  <li>\n    Be patient! Learning to type accurately and with speed \n    takes a long time and lots of practice. But, if you practice \n    regularly, you should see increases in speed and accuracy \n    within hours!\n  </li>\n</ol>\n\n";
},"useData":true});
this["App"]["templates"]["introduction"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Welcome to the Byte Back Typing Tutorial!\n</h2>\n\n<p>\n  The Byte Back Typing Tutorial is a free course designed to \n  teach touch typing. Lessons, shown on the left, begin by \n  teaching the home row keys and then gradually add additional \n  keys until the entire keyboard is mastered.\n</p>\n\n<p>\n  At the end of each exercise, your words per minute, total time, \n  errors, and characters will be displayed. Repeat each lesson \n  as many times as necessary. It is good to complete a lesson \n  with no more than <strong>5 errors</strong> and at a speed of \n  at least <strong>20 words per minute (WPM)</strong> before \n  moving on to the next lesson.\n</p>\n\n<p>\n  Remember, accuracy is the key! Go slow at first and learn the \n  keyboard. Speed will come naturally with time and practice.\n</p>\n\n<p>\n  Once all the lessons have been completed, additional \n  challenging exercises are provided to help increase speed \n  and accuracy.\n</p>\n\n<div class=\"page-featureimage\">\n  <img src=\"dist/img/typing-hands.jpg\" />\n</div>";
},"useData":true});
this["App"]["templates"]["lesson-0"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #0: Left Hand, Home Row\n</h2>\n\n<p>\n  This is a test lesson! It's really short so the developer can test out\n  how the grading system works quickly. It'll be removed in the final product :)\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>";
},"useData":true});
this["App"]["templates"]["lesson-1"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #1: Left Hand, Home Row\n</h2>\n\n<p>\n  This lesson teaches the four left keys of the home row. \n  <strong>Place your index finger on F, middle finger on D, \n  ring finger on S, and pinky on A.</strong> Your thumb goes on \n  the space bar. However, leave your right hand on the homerow as \n  well to get used to having both hands on the keyboard.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  This is your first lesson, so go slow and try to get fewer than\n   five errors and faster than 20 words per minute (WPM).\n</p>\n\n<p>\n  Spend a minute memorizing the finger positions, and then keep \n  your eyes on the exercise and not on your hands. And don't forget \n  good <a href=\"#!/how-to-type\">posture</a>!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-10"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #10: W and O\n</h2>\n\n<p>\n  Now its time to go back up to the top for W and O. \n  <strong>W and O</strong> are typed by reaching the \n  <strong>ring finger</strong> up to the top row and \n  returning to S and L after each key stroke. \n  After this lesson, you will know all of the vowels!\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Keep going until you feel comfortable!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-11"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #11: Q and P\n</h2>\n\n<p>\n  Here we will finish the top row! <strong>P and Q</strong> are \n  typed with the <strong>pinky of each hand</strong>. \n  The pinky is often one of the hardest fingers to use, \n  so take your time and make sure you are comfortable \n  using both, because P is a commonly used letter!\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Make sure you are using all the correct reaches!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-12"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #12: C and ,\n</h2>\n\n<p>\n  This is an important lesson because C is a very common letter \n  and the comma (,) is your first punctuation mark. \n  <strong>The C and ,</strong> are typed by curling the \n  <strong>middle fingers</strong> down to the bottom row of keys.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  C is one of the hardest reaches to learn. Doing this will be \n  awkward at first, so make sure you are comfortable with C \n  and comma before you move on!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-13"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #13: Z, X, and .\n</h2>\n\n<p>\n  This may be the hardest lesson because you are working with \n  uncommon letters. This makes is even more important, however, \n  because you will not get as much practice with them! \n  <strong>Z</strong> is typed by curling the <strong>left pinky</strong>\n  down a row, <strong>X</strong> is typed by curling the \n  <strong>left ring finger</strong> down a row, and \n  <strong>period</strong> is typed with the \n  <strong>right ring finger</strong>.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Take your time and concentrate on using the correct reaches! \n  This exercise may be slower than many of the earlier ones.\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-14"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #14: The Shift Key\n</h2>\n\n<p>\n  Letters are important, but to actually type, it is important to know the shift key! The shift key, a type of \"modifier\" key, capitalizes letters or shifts a key to its secondary symbol.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  To use the <strong>shift key</strong>, hold the shift key down \n  with the <strong>pinky of the opposite hand</strong> of the \n  letter you are typing. Make sure that when you type the \n  letter down, the shift key is held down. Make sure to release \n  the shift key before typing another key!\n</p>\n\n<p>\n  Make sure you practice using both shift keys!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-15"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #15: ? and !\n</h2>\n\n<p>\n  You can already punctuate your sentences, but now it's time to \n  add some expression. Exclamation point and the question mark \n  are the secondary uses of their keys, meaning that you must hold \n  the shift key while typing them. For <strong>!</strong> hold the \n  <strong>shift</strong> key with your <strong>right pinky</strong> \n  while reaching up to the <strong>1(!)</strong> key in the number \n  row with your </strong>left pinky</strong>. To type \n  <strong>?</strong> hold <strong>shift</strong> with the \n  <strong>left pinky</strong> while reaching down to the \n  <strong>/(?) key</strong> with your <strong>right pinky</strong>.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Once you master these, you're ready for the final test!\n</p>\n\n<p>\n  <strong>Fun Fact:</strong> An exclamation point followed by a question mark \n  is technically called an \n  \"<a href=\"http://en.wikipedia.org/wiki/Interrobang\">interrobang</a>.\" \n  It looks like this: <strong>‽</strong>. A reverse and upside-down interrobang is \n  called a <strong>\"gnaborretni\"</strong> (\"interrobang\" backwards).\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-2"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h2 class=\"page-title\">\n  "
    + container.escapeExpression(((helper = (helper = helpers.fullTitle || (depth0 != null ? depth0.fullTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"fullTitle","hash":{},"data":data}) : helper)))
    + "\n</h2>\n\n<p>\n  This lesson teaches the right four keys of the home row. Your \n  <strong>index finger goes on J, middle finger on K, ring finger \n  on L, and pinky on ;</strong>. Again, leave both hands on the \n  keyboard with your thumbs on the space bar.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Just like the first lesson, go slow and concentrate on accuracy! \n  And no peeking at your fingers either!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-3"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #3: Both Hands, Home Row\n</h2>\n\n<p>\n  Now it's time to combine the first two lessons. Remember to keep \n  your fingers on the home row. This is a large lesson, using almost \n  an entire row of keys so go at your own pace.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Remember the work you did in the previous two lessons!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-4"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #4: Home Row with G and H\n</h2>\n\n<p>\n  This is the last lesson for the home row! The <strong>G and \n  H</strong> keys are typed with the <strong>index finger on each \n  hand</strong> and are the first \"reaches\" you will learn. \n  G is typed by reaching the right index finger while H is typed \n  with the left. Make sure to return your fingers when you are \n  done with each reach, and try to move your other fingers as \n  little as possible during another fingers' reach.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  After this lesson, you will have learned an entire row of the \n  keyboard!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-5"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #5: E and I\n</h2>\n\n<p>\n  So that you can quickly begin typing many words, it's time to \n  learn some more vowels! <strong>I and E</strong> are typed by \n  reaching the <strong>middle finger of each hand</strong> to the \n  top row.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Remember to return to home row position after each reach!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-6"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #6: R and U\n</h2>\n\n<p>\n  When typing, your index fingers do the most work. Now we will \n  learn two more reaches for your index fingers. <strong>R and \n  U</strong> are typed by reaching the <strong>index finger of \n  each hand</strong> up to the top row. Always return your \n  fingers to the correct home row positions.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Now you know over half the letters!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-7"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #7: T and Y\n</h2>\n\n<p>\n  Continuing with the index fingers, it is time to learn \n  <strong>T and Y</strong>. T and Y are typed by reaching the \n  <strong>index fingers up to the top row.</strong> Now you will \n  know enough letters to spell a wide variety of words.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Remember, you can repeat lessons as many times as you want and \n  even return to old lessons to review!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-8"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #8: B and N\n</h2>\n\n<p>\n  It's time to move down to the bottom row. <strong>B and N</strong> \n  are typed with the <strong>index finger of each hand.</strong> \n  Remember to return your fingers to the correct home row position. \n  Now only one reach remains for the index fingers.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Accuracy first!\n</p>";
},"useData":true});
this["App"]["templates"]["lesson-9"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Lesson #9: V and M\n</h2>\n\n<p>\n  Now its time to learn the last reaches for your index fingers. \n  To type <strong>V and M</strong>, reach your <strong>index \n  finger</strong> down, remembering to replace your fingers on \n  the home row after each reach.\n</p>\n\n<div class=\"instruction-cueboard-container\"></div>\n\n<p>\n  Keep up the good work!\n</p>";
},"useData":true});
this["App"]["templates"]["resources"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Online Typing Resources\n</h2>\n\n<p>\n  Get extra practice and access to free services. From computer \n  mouse practice to advanced online courses, career development \n  services and even access to professional attire, it’s all here:\n  <br/>\n  <a href=\"http://byteback.org/students/student-resources\" target=\"_blank\">\n    Byte Back Student Resources\n  </a>\n</p>\n\n<h3>\n  Free Typing Resources\n</h3>\n\n<ul>\n  <li>\n    <a href=\"http://www.sense-lang.org/typing/\">Senselang</a>: \n    Create your own lessons by pasting text into the lesson box.</li>\n  <li>\n    <a href=\"http://www.powertyping.com/qwerty/lessonsq.html\">Power Typing</a>: \n    Great for extra practice.</li>\n  <li>\n    <a href=\"http://www.typingtest.com/games.html\">Typing Games</a>: \n    Free and fun typing games for all ages. \n    Try <a href=\"http://www.typingtest.com/games/keytower.html?keys=abcdefghijklmnopqrstuvwxyz\">Key Tower</a>\n    and <a href=\"http://www.typingtest.com/games/typing-attack/\">Typing Attack</a>!</li>\n  <li>\n    <a href=\"http://www.typingtest.com/\">Typing Test</a>\n  </li>\n</ul>";
},"useData":true});
this["App"]["templates"]["using-the-tutorial"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"page-title\">\n  Using the Tutorial\n</h2>\n\n<p>\n  The Byte Back Typing Tutorial is easy and fun to use! Read \n  this guide, then start with <a href=\"#!/lesson-1\">Lesson #1</a> and \n  complete all 15 lessons in order.\n</p>\n\n<p>\n  If this is not your home computer, click \"Clear Statistics\" \n  before you start.\n</p>\n\n<ol>\n  <li>\n    <strong>Get ready:</strong> Take the correct posture and \n    position your hands on the highlighted keys\n  </li>\n  <li>\n    <strong>Click \"Start Exercise\":</strong> The green button – \n    the clock will start clicking as soon as you type a key\n  </li>\n  <li>\n    <strong>What to Type:</strong> The text will be at the \n    top of the page. The first letter will be red and underlined. \n    Hint: Watch out for spaces – they count too.\n    \n    <div class=\"page-featureimage\">\n      <img src=\"dist/img/typebox-screencap.png\" />\n    </div>\n  </li>\n  <li>\n    <strong>Where to Look:</strong> Look at the keyboard on your \n    screen, not at your hands! The current letter you need to type \n    swill be in green.\n  </li>\n  <li>\n    <strong>Stats:</strong> The statistics are above the keyboard. \n    \n    <div class=\"page-featureimage\">\n      <img src=\"dist/img/scorecenter-screencap.png\" />\n    </div>\n    \n    <ul>\n      <li>\n        <em>Characters</em> – number of keystrokes you have typed\n      </li>\n      <li>\n        <em>Errors</em> – number of incorrect keystrokes\n      </li>\n      <li>\n        <em>Accuracy</em> – percent of keystrokes you have correct\n      </li>\n      <li>\n        <em>WPM</em> – how many words per minute you are typing\n      </li>\n    </ul>\n  </li>\n  <li>\n    <strong>Goal:</strong> Get fewer than five errors and more \n    than 20 WPM for each exercise. We have high expectations for \n    you, so you will probably have to do each exercise multiple \n    times to reach this goal.\n\n    <div class=\"page-featureimage\">\n      <img src=\"dist/img/overlay-screencap.png\" />\n    </div>\n  </li>\n  <li>\n    <strong>Track Your Progress:</strong> If you reach your \n    goal, a green circle will appear next to the lesson. \n    If you don’t pass, a red dot will appear. Track your \n    progress and repeat lessons you haven’t passed yet.\n  </li>\n</ol>";
},"useData":true});