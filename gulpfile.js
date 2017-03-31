'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var cleanCSS    = require('gulp-clean-css');
var uglify      = require('gulp-uglify');
var livereload  = require('gulp-livereload');
var rename      = require('gulp-rename');
var concat = require('gulp-concat');



// SASS compilation
gulp.task('compile-css', function () {
    //Home
    gulp.src('./rcs/scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('index.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(livereload());

});

gulp.task('compile-nodes', function () {
    //Bootstrap
    gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css')
    .pipe(gulp.dest('./dist/css/bootstrap'));

    gulp.src('./node_modules/bootstrap/dist/js/bootstrap.js')
    .pipe(gulp.dest('./dist/js/bootstrap'));
});

//WATCH
gulp.task('watch', function () {
    livereload.listen();
    // SCSS
    gulp.watch('./rcs/scss/*.scss', ['compile-css']);
});

// Default task
gulp.task('default', ['compile-nodes', 'compile-css', 'watch']);
