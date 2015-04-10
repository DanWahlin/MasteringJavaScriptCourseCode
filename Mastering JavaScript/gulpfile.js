var gulp = require('gulp'),
    traceur = require('gulp-traceur'),
    babel = require('gulp-babel'),
    ts = require('gulp-typescript'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    es6Path = 'samples/es6/*.js',
    tsPath = 'samples/typescript/*.ts',
    compilePath = 'js/compiled',
    dist = 'js/dist';

gulp.task('compressScripts', function () {
    gulp.src([
        compilePath + '/babel/*.js'
    ])
        .pipe(plumber())
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist));
});

gulp.task('traceur', function () {
    gulp.src([es6Path])
        .pipe(plumber())
        .pipe(traceur({ blockBinding: true }))
        .pipe(gulp.dest(compilePath + '/traceur'));
});

gulp.task('babel', function () {
    gulp.src([es6Path])
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(compilePath + '/babel'));
});

gulp.task('typescript', function () {
    var tsResult = gulp.src(tsPath)
                       .pipe(ts({
                           target: 'ES5',
                           declarationFiles: false,
                           noExternalResolve: true
                       }));

    tsResult.dts.pipe(gulp.dest(compilePath + '/tsdefinitions'));
    return tsResult.js.pipe(gulp.dest(compilePath + '/typescript'));
});

gulp.task('watch', function() {

    gulp.watch([es6Path,tsPath], ['traceur', 'babel', 'typescript']);

});

gulp.task('default', ['traceur', 'babel', 'typescript', 'watch', 'compressScripts']);
