"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var server = require("browser-sync").create();
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var uglify = require("gulp-uglify");


gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
  });
    gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
    gulp.watch("source/js/**/*.js", gulp.series("copy"));
    gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
 .pipe(gulp.dest("build"));
});

gulp.task("build", gulp.series("clean", "copy", "css", "html"));
gulp.task("start", gulp.series("build", "server"));
