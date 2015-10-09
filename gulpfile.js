var gulp = require("gulp")
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

gulp.task("copy", ["copy-cueboard", "copy-typebox", "copy-scorecenter"])

gulp.task("copy-cueboard", function(){
  return gulp.src("../cueboard/dist/**/*")
    .pipe(gulp.dest("libs/cueboard/"))
})

gulp.task("copy-typebox", function(){
  return gulp.src("../typebox/dist/**/*")
    .pipe(gulp.dest("libs/typebox/"))
})

gulp.task("copy-scorecenter", function(){
  return gulp.src("../scorecenter/dist/**/*")
    .pipe(gulp.dest("libs/scorecenter/"))
})

gulp.task("babel", function () {
  return gulp.src("src/js/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist/js"))
})

gulp.task("sass", function(){
  gulp.src('src/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
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

gulp.task("default", ["mocha", "babel", "templates", "sass", "copy"])

gulp.task("watch", function (){
  gulp.watch(["src/**", "test/**"], ["default"]);
})