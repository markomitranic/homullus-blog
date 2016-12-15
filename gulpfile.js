
// =========================================================================
// --------------------------------- HTML ----------------------------------
// =========================================================================


// // The input SCSS files and the SCSS output path
// var scssInput = [
//   'scss/style.scss',
//   'scss/print.scss'
//   ];
// var scssOutput = 'html/css';

// // Start everything up.
// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync').create();
// var sourcemaps = require('gulp-sourcemaps');
// var autoprefixer = require('gulp-autoprefixer');


// // Watch SASS.
// gulp.task('sass', function() {
//   return gulp
//     .src(scssInput)
//     .pipe(sourcemaps.init())
//     .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//     .pipe(autoprefixer())
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(scssOutput))
//     .pipe(browserSync.reload({
//       stream: true
//     }))
// });

// // Spin up server and reload.
// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: 'html'
//     },
//   })
// })


// gulp.task('watch', ['browserSync', 'sass'], function (){
//   gulp.watch('scss/**/*.scss', ['sass']); 
//   gulp.watch('html/*.html', browserSync.reload); 
//   gulp.watch('html/js/**/*.js', browserSync.reload); 
// });




// =========================================================================
// ------------------------------- WORDPRESS -------------------------------
// =========================================================================


// The input SCSS files and the SCSS output path
var scssInput = [
 'scss/style.scss',
 'scss/print.scss'
 ];
var scssOutput = 'app/wp-content/themes/pajovic/css';

// Start everything up.
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');


// Watch SASS.
gulp.task('sass', function() {
  return gulp
    .src(scssInput)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(scssOutput))
});


gulp.task('watch', ['sass'], function (){
  gulp.watch('scss/**/*.scss', ['sass']); 
});