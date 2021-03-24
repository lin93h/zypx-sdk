var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload

var DEST = 'build/'

gulp.task('default', function() {
    return gulp.src('src/zypx-stat.js')
        .pipe(gulp.dest(DEST))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js'}))
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