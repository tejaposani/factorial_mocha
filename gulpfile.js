var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var mocha = require('gulp-mocha');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');

gulp.task('server',function() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
});


gulp.task('html',function() {
  gulp.src('src/index.html')
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream())
});

gulp.task('sass',function() {
  gulp.src('src/sass/index.sass')
  .pipe(sass({
    outputstyle: 'compressed'
  }))
  .pipe(rename('styles.css'))
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.stream())
});

gulp.task('script',function() {
  return browserify('src/script/factorial.js')
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(gulp.dest('dist/scripts'))
  .pipe(browserSync.stream());
});

gulp.task('watch',function() {
  gulp.watch('src/index.html',['html']);
  gulp.watch('src/sass/index.sass',['sass']);
  gulp.watch('src/script/factorial.js',['script']);
  gulp.watch('test/**/*.spec.js', ['test']);
});

gulp.task('test',function() {
  gulp.src('test/**/*.js')
  .pipe(mocha({ reporter : 'nyan'}));
});

gulp.task('default',['html','sass','script']);
gulp.task('start',['html','sass','script','test','server','watch']);
