var gulp = require('gulp'),
    traceur = require('gulp-traceur'),
    babel = require('gulp-babel'),
    es6Path = 'js/*.js',
    compilePath = 'js/compiled';






gulp.task('watch', function() {

    gulp.watch(es6Path, ['traceur', 'babel']);

});

gulp.task('default', ['traceur', 'babel', 'watch']);
