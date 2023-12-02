const gulp = require('gulp'); // gulp
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss'); // postcss
const mqpacker = require('css-mqpacker'); // consolidate media query
const cssnano = require('cssnano'); // minify css
const concat = require('gulp-concat'); // concatenate js

/*
Top Level Functions

gulp.task - define tasks
gulp.src - point to files to use
gulp.dest - points to folder to output
gulp.watch - watch files and folders for changes
*/

// Process CSS
gulp.task('css', function () {
  console.log('gulp css started')
  var plugins = [
    mqpacker(),
    cssnano({ autoprefixer: false,
              reduceIdents: false })
  ];
  return gulp.src('src/css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(autoprefixer({
      browsers: ['last 1 versions']
    }))
    .pipe(gulp.dest('generated/assets/css'))
});

// Concatenate & Minify JS
gulp.task('js', function () {
  console.log('gulp js started')
  return gulp.src(['src/vendors/jquery/jquery-3.3.1.min.js',
                   'src/vendors/prism/prism.js',
                   'src/vendors/scrollreveal/scrollreveal.min.js',
                   'src/js/components/tab.js',
                   'src/js/components/accordion.js',
                   'src/js/components/dropdown.js',
                   'src/js/components/slidemenu.js',
                   'src/js/components/notice.js',
                   'src/js/main.js'])
		.pipe(concat('main.js'))
		.pipe(gulp.dest('generated/assets/js'))
});

gulp.task('default', gulp.parallel('css', 'js'));

// Watch
gulp.task('watch', gulp.series('default', function () {
  gulp.watch(['src/css/**/*.*'], ['css'])
  gulp.watch(['src/js/**/*.*'], ['js'])
  gulp.watch(['src/vendor/**/*.*'], ['js'])
}));
