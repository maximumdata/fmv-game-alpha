// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('dev/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('dev/sass/master.sass')
        .pipe(sass())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('dev/build'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src('dev/js/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dev/build'))
    .pipe(rename('all.min.js'))
    .pipe(sourcemaps.init())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dev/build'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('dev/js/**/*.js', ['lint', 'scripts']);
    gulp.watch('dev/sass/**/*.sass', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);