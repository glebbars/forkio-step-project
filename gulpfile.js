const gulp = require('gulp');

const html = require('./gulp/html');

const serve = require('./gulp/serve');
const styles = require('./gulp/style');
const imageMin = require('./gulp/imagemin');
const jsMinify = require('./gulp/jsminify');
const clean = require('./gulp/clean');
const fonts = require('./gulp/fonts')

const build = gulp.series(clean, html, styles, imageMin, jsMinify, fonts);

module.exports.build = gulp.series(build)
module.exports.dev = gulp.series(serve);
