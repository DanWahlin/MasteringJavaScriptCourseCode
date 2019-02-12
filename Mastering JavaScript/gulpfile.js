var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
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

gulp.task('babel', function () {
    return gulp.src([es2015Path])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({
			presets: ['@babel/env']
		}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(compilePath + '/babel'));
});

gulp.task('typescript', function () {
    var tsResult = gulp.src(tsPath)
                       .pipe(ts({
                           target: 'ES5',
                           declarationFiles: false,
                           noResolve: true
                       }));

    tsResult.dts.pipe(gulp.dest(compilePath + '/tsdefinitions'));
    return tsResult.js.pipe(gulp.dest(compilePath + '/typescript'));
});

gulp.task('watch', function() {

    gulp.watch([es2015Path,tsPath], gulp.series('babel', 'typescript'));

});

gulp.task('default', gulp.series('babel', 'typescript', 'watch', 'compressScripts'));
