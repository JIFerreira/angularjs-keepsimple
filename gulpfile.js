var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    watch = require("gulp-watch-sass");


gulp.task('sass', function(){
    return sass('./app/sass/**/*.scss').pipe(gulp.dest('./app/css'))
});

gulp.task("sass:watch", () => {
    gulp.watch([
      "./app/sass/**/*.scss"
    ], ["sass"]);
  });

gulp.task('default', ['sass', 'sass:watch']);