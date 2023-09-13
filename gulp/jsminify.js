const gulp = require('gulp');
const minify = require('gulp-minify');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const concat = require('gulp-concat');

module.exports = function jsMinify() {
    return gulp.src('src/js/*.js')
        .pipe(concat('index.js'))
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))

        .pipe(gulp.dest('dist/js'))
};