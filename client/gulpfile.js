const gulp = require('gulp');
const scss = require('gulp-sass');

// Compile SASS
gulp.task('scss', () => {
  return gulp.src('./src/scss/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./src/'))
})

// Watch file for changes
gulp.task('watch', () => {
  gulp.watch('./src/scss/**/*.scss', ['scss'])
})

gulp.task('default', ['watch'])