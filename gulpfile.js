// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var stripDebug = require('gulp-strip-debug');

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

// Concatenate JS
gulp.task('scripts', function() {
  return gulp.src('dev/js/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dev/build'));
});

// build production JS
gulp.task('build-js', function() {
  return gulp.src('dev/js/**/*.js')
    .pipe(concat('all.min.js'))
    .pipe(stripDebug())
    .pipe(sourcemaps.init())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dev/build'));
});

gulp.task('ts', function() {
  return gulp.src('dev/ts/**/*.ts')
    .pipe(ts())
    .pipe(gulp.dest('dev/build/ts'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('dev/js/**/*.js', ['lint', 'scripts']);
    gulp.watch('dev/sass/**/*.sass', ['sass']);
    gulp.watch('dev/ts/**/*.ts', ['ts']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'ts', 'watch']);
gulp.task('build', ['sass', 'build-js'])