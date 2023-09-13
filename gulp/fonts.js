const gulp = require('gulp')

module.exports = function () {
    return gulp.src('src/fonts/**/*.ttf').pipe(gulp.dest('dist/fonts'))
}