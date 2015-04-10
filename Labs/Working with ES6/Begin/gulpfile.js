var gulp = require('gulp'),
    traceur = require('gulp-traceur'),
    to5 = require('gulp-6to5'),
    es6Path = 'js/*.js',
    compilePath = 'js/compiled';






gulp.task('watch', function() {

    gulp.watch(es6Path, ['traceur', '6to5']);

});

gulp.task('default', ['traceur', '6to5', 'watch']);
