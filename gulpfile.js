
var buildFolder = 'build'; //build folder

var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('build', function () {
    gulp.src('./analysis.js')
        .pipe(uglify({
            compress: {
                drop_console: true
            }
        }))
        .pipe(gulp.dest(buildFolder));
});