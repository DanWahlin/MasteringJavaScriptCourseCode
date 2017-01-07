var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    traceur = require('gulp-traceur'),
    babel = require('gulp-babel'),
    ts = require('gulp-typescript'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    es2015Path = 'samples/es6/*.js',
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
    gulp.src([es2015Path])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(traceur({ blockBinding: true }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(compilePath + '/traceur'));
});

gulp.task('babel', function () {
    gulp.src([es2015Path])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
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

    gulp.watch([es2015Path,tsPath], ['traceur', 'babel', 'typescript']);

});

gulp.task('default', ['traceur', 'babel', 'typescript', 'watch', 'compressScripts']);
