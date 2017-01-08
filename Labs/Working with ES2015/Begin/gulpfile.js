var gulp = require('gulp'),
    traceur = require('gulp-traceur'),
    babel = require('gulp-babel'),
    es2015Path = 'js/*.js',
    compilePath = 'js/compiled';






gulp.task('watch', function() {

    gulp.watch(es2015Path, ['traceur', 'babel']);

});

gulp.task('default', ['traceur', 'babel', 'watch']);
