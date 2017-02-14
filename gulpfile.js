var gulp = require('gulp');
var aglio = require('gulp-aglio');
var rename = require("gulp-rename");
var server = require('gulp-server-livereload');

var srcDir = './src/';
var distDir = './dist/';

// Process the blueprints
gulp.task('docs', function () {
  gulp.src(srcDir + 'api.md')
    .pipe(aglio({template: 'slate', includePath: srcDir}))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(distDir));
});

// Watch the blueprints for changes
gulp.task('watch', function () {
  gulp.src(distDir)
    .pipe(server({
      livereload: true,
      open: true
    }));
  gulp.watch(srcDir + '*.md', ['docs']);
});

// Set up the default task
gulp.task('default', ['docs']);
