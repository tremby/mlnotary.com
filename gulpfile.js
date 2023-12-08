const gulp = require("gulp"); // gulp
const concat = require("gulp-concat"); // concatenate js

/*
Top Level Functions

gulp.task - define tasks
gulp.src - point to files to use
gulp.dest - points to folder to output
gulp.watch - watch files and folders for changes
*/

// Concatenate & Minify JS
gulp.task("js", function () {
  console.log("gulp js started");
  return gulp
    .src(["src/js/components/slidemenu.js", "src/js/main.js"])
    .pipe(concat("main.js"))
    .pipe(gulp.dest("generated/assets/js"));
});

gulp.task("default", gulp.parallel("js"));

// Watch
gulp.task(
  "watch",
  gulp.series("default", function () {
    gulp.watch(["src/js/**/*.*"], ["js"]);
    gulp.watch(["src/vendor/**/*.*"], ["js"]);
  }),
);
