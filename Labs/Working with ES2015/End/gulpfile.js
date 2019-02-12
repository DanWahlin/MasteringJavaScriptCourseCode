var gulp = require('gulp'),
    babel = require('gulp-babel'),
    es2015Path = 'js/*.js',
    compilePath = 'js/compiled';

gulp.task('babel', function () {
    return gulp.src([es2015Path])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest(compilePath + '/babel'));
});

gulp.task('watch', function() {
    gulp.watch(es2015Path, gulp.series('babel'));
});

gulp.task('default', gulp.series('babel', 'watch'));
