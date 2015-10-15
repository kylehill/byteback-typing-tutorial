var gulp = require("gulp")
var babel = require("gulp-babel")
var babelCompiler = require("babel/register")
var mocha = require("gulp-mocha")
var gutil = require("gulp-util")
var uglify = require("gulp-uglify")

gulp.task("babel", function () {
  return gulp.src("src/js/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist/js"))
})

gulp.task("uglify", ["babel"], function (){
  return gulp.src("dist/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
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

gulp.task("default", ["mocha", "uglify"])

gulp.task("watch", function (){
  gulp.watch(["src/**", "test/**"], ["default"]);
})