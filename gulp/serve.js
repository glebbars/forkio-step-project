const gulp = require('gulp');
const server = require('browser-sync').create();
const html = require('./html');
const styles = require("./style");
const jsMinify = require('./jsminify');

function readyReload(cb) {
    server.reload();
    cb();
}
module.exports = function serve(cb) {
    server.init({
        server: "",
        notify: false,
        open: true,
        cors: true,
    });
    gulp.watch("index.html", gulp.series(html, readyReload));
    gulp.watch("src/styles/**/*.scss", gulp.series(styles, (cb) => gulp.src("dist/css").pipe(server.stream()).on('end', cb)));
    gulp.watch("src/js/**/*.js", gulp.series(jsMinify, (cb) => gulp.src("dist/js").pipe(server.stream()).on('end', cb)));
    return cb();
};