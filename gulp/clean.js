const  gulp = require('gulp');
const clean = require('gulp-clean');

module.exports = function cleanBuild() {
        return gulp.src('dist/', {read: false, allowEmpty: true})
            .pipe(clean());
};
