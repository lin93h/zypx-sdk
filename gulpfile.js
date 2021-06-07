var gulp = require('gulp'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload

var DEST = 'build/'

gulp.task('build', function() {
    return gulp.src('src/zypx-stat.js')
        .pipe(gulp.dest(DEST))
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js'}))
        .pipe(gulp.dest(DEST))
})

gulp.task('sass', function() {
    return gulp.src('src/style/index.scss')
        .pipe(sass())
        .pipe(gulp.dest(DEST))
})

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: 'src'
        }
    })
    watch(['src/*'], reload)
})