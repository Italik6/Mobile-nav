// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');
var less = require('gulp-less-sourcemap');
var path = require('path');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function () {
    gulp.src('./less/*.less')
      .pipe(less({
          sourceMap: {
              sourceMapRootpath: '../less' // Optional absolute or relative path to your LESS files 
          }
      }))
      .pipe(gulp.dest('./public/css'));
  });

gulp.task('less', function() {
    gulp.src('*.less')
        .pipe(less())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', ['less'], function() {
    gulp.watch('*.less', ['less']);
})

gulp.task('javascript', function() {
    gulp.src('*.js')
      .pipe(sourcemaps.init())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist'));
  });