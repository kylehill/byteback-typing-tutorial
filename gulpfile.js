var gulp = require("gulp")
var autoprefixer = require("gulp-autoprefixer")
var babel = require("gulp-babel")
var babelCompiler = require("babel/register")
var mocha = require("gulp-mocha")
var gutil = require("gulp-util")
var sass = require("gulp-sass")

var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');

gulp.task("templates", function(){
  return gulp.src("src/templates/**/*.hbs")
    .pipe(handlebars({
      handlebars: require("handlebars")
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: "App.templates",
      noRedeclare: true
    }))
    .pipe(concat("templates.js"))
    .pipe(gulp.dest("dist/js"))
})

gulp.task("babel", function () {
  return gulp.src("src/js/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist/js"))
})

gulp.task("concat-js", ["babel", "templates"], function(){
  return gulp.src([
      "libs/jquery/dist/jquery.min.js",
      "libs/handlebars/handlebars.runtime.min.js",
      "libs/mousetrap/mousetrap.min.js",
      "libs/cueboard/dist/js/cueboard.js",
      "libs/typebox/dist/js/typebox.js",
      "libs/scorecenter/dist/js/scorecenter.js",
      "dist/js/*.js"
    ])
    .pipe(concat("tutorial.js"))
    .pipe(gulp.dest("dist/concat"))
})

gulp.task("sass", function(){
  return gulp.src('src/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
})

gulp.task("concat-css", ["sass"], function(){
  return gulp.src([
      "libs/cueboard/dist/css/cueboard.css",
      "libs/typebox/dist/css/typebox.css",
      'dist/css/index.css', 
      'dist/css/responsive.css',
      'dist/css/header.css'
    ])
    .pipe(concat("tutorial.css"))
    .pipe(gulp.dest("dist/concat"))
})

gulp.task("mocha", function () {
  return gulp.src(['test/*.js'], { read: false })
    .pipe(mocha({ 
      reporter: 'min',
      compilers: {
        js: babelCompiler
      }
    }))
    .on('error', gutil.log);
})

gulp.task("default", ["mocha", "concat-js", "concat-css"])

gulp.task("watch", function (){
  gulp.watch(["src/**", "test/**"], ["default"]);
})