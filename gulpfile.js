// Base Gulp plugin pulled in
var gulp = require('gulp');

// All required plugins pulled in
var concat = require('gulp-concat'),
    cssmin = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

// Initial task for scripts
gulp.task('scripts', function() {
  return gulp.src('./src/js/*.js')
          .pipe(concat('app.js'))
          .pipe(gulp.dest('./dist/js'))
          .pipe(uglify())
          .pipe(rename({suffix: '.min'}))
          .pipe(gulp.dest('./dist/js'));
});

// Initial task for styles
gulp.task('styles', function() {
  return gulp.src('./src/sass/*.scss')
          .pipe(sass())
          .pipe(gulp.dest('./dist/css/'))
          .pipe(cssmin())
          .pipe(rename({suffix: '.min'}))
          .pipe(gulp.dest('./dist/css/'));
});

// Setup a default watch task for setup script pipes
gulp.task('watch', function() {
  gulp.watch('./src/js/*.js', ['scripts']);
  gulp.watch('./src/sass/*.scss', ['styles']);
});

// Run everything with the default task and then run gulp from the terminal
gulp.task('default', ['scripts', 'styles', 'watch']);
