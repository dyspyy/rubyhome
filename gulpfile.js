const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}

function watch() {
  gulp.watch('./src/scss/**/*.scss', styles);
}

exports.styles = styles;
exports.watch = watch;
