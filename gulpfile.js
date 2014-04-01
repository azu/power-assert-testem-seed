"use strict";
var gulp = require("gulp");
var espower = require("gulp-espower");
var mocha = require("gulp-mocha");
var paths = {
    test: "./test/*.js",
    powered_test: "./powered-test/*.js",
    powered_test_dist: "./powered-test/"
};
gulp.task("power-assert", function () {
    return gulp.src(paths.test)
        .pipe(espower())
        .pipe(gulp.dest(paths.powered_test_dist));
});
gulp.task("test", ["power-assert"], function () {
    gulp.src(paths.powered_test)
        .pipe(mocha());
});
