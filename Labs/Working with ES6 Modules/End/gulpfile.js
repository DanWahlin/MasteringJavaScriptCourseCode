var gulp = require('gulp'),
    babel = require('gulp-babel'),
    es6Path = 'js/*.js',
    compilePath = 'dist';

gulp.task('babel', function () {
    gulp.src([es6Path])
        .pipe(babel())
        .pipe(gulp.dest(compilePath));
});

gulp.task('watch', function() {
    gulp.watch(es6Path, ['babel']);
});

gulp.task('default', ['babel', 'watch']);
