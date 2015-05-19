var gulp = require('gulp'),
    traceur = require('gulp-traceur'),
    babel = require('gulp-babel'),
    es6Path = 'js/*.js',
    compilePath = 'js/compiled';

gulp.task('traceur', function () {
    gulp.src([es6Path])
        .pipe(traceur({ blockBinding: true }))
        .pipe(gulp.dest(compilePath + '/traceur'));
});

gulp.task('babel', function () {
    gulp.src([es6Path])
        .pipe(babel())
        .pipe(gulp.dest(compilePath + '/babel'));
});

gulp.task('watch', function() {

    gulp.watch(es6Path, ['traceur', 'babel']);

});

gulp.task('default', ['traceur', 'babel', 'watch']);
