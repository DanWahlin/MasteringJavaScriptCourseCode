var gulp = require('gulp'),
    babel = require('gulp-babel'),
    es2015Path = 'js/*.js',
    compilePath = 'js/compiled';






gulp.task('watch', function() {
    gulp.watch(es2015Path, gulp.series('babel'));
});

gulp.task('default', gulp.series('babel', 'watch'));
