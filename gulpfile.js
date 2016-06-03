var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');


gulp.task('css', function() {
    gulp.src('./dist/css/*.css') // path to your files
        .pipe(concat('build.css'))  // concat and name it "concat.js"
        .pipe(gulp.dest('dist/build/css'));

    gulp.src('./dist/build/css/build.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/build/css'));

});

/*
gulp.task('js', function(){
    gulp.src(['dist/js/require.js']) // path to your files
        .pipe(concat('build.js'))  // concat and name it "concat.js"
        .pipe(gulp.dest('dist/build/js'));

   return gulp.src('./dist/build/js/build.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/build/js'));
});
*/