const gulp = require('gulp');
const sass = require('gulp-sass');
var minify = require('gulp-minify-css');
const browserSync = require('browser-sync').create();
gulp.task('styles', () => {
    return gulp.src('public/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(gulp.dest('public/assets/css/'))
        .pipe(browserSync.stream());
});
gulp.task('watch', () => {
    browserSync.init({
      server:'./public'
  });
  gulp.watch('public/assets/scss/**/*.scss', (done) => {
      gulp.series(['styles'])(done);
  });
  gulp.watch(['public/*.html']).on('change', browserSync.reload);
  gulp.watch(['public/templates/*.html']).on('change', browserSync.reload);
});
gulp.task('default', gulp.series(['styles', 'watch']));