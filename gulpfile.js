const gulp = require('gulp');
const browserSync = require('browser-sync').create();
// const sass = require('gulp-sass');
// const prefix = require('autoprefixer');
// const cp = require('child_process');
// const postcss = require('gulp-postcss');
// const csswring = require('csswring');
// const cssnano = require('cssnano');
// const del = require('del');

const env = process.env.NODE_ENV || 'prod';
const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
const messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build',
};

var paths = {
  styles: {
    src: '_scss/*.scss',
    dest: '_site/assets/css',
    destsecond: 'assets/css',
  },
  scripts: {
    src: 'assets/scripts/*.js',
    dest: '_site/assets/scripts',
  },
};

/**
 * Build the Jekyll Site
 */
function jekyllBuild() {
  return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
}



// function style() {
//   const processors = [
//     prefix({ browsers: ['> 5%', 'last 3 versions'] }),
//     csswring,
//     cssnano,
//   ];
//   return gulp
//     .src('_scss/main.scss')
//     .pipe(
//       sass({
//         includePaths: ['scss'],
//         onError: browserSync.notify,
//       }),
//     )
//     .pipe(postcss(processors))
//     .pipe(gulp.dest(paths.styles.dest))
//     .pipe(browserSync.reload({ stream: true }))
//     .pipe(gulp.dest(paths.styles.destsecond));
// }

function reload(done) {
  browserSync.reload();
  done();
}

function browserSyncServe() {
  browserSync.init({
    server: {
      baseDir: '_site',
    },
  });
}

// function watch() {
//   gulp.watch(paths.styles.src, style);
//   gulp.watch(
//     [
//       '*.html',
//       '_layouts/*.html',
//       '_pages/*',
//       '_posts/*',
//       '_data/*',
//       '_includes/*',
//       'assets/scripts/*.js',
//       'assets/images/*.*',
//       // './**/*.md' // causes infinite loop
//     ],
//     gulp.series(jekyllBuild, reload),
//   );
// }

/**
 * Delete .publish directory
 */
// gulp.task('clean', () => del('.publish/**/*'));

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', gulp.series(jekyllBuild, reload));

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 * To run locally:
 * $ NODE_ENV=dev gulp
 */
gulp.task('default', gulp.parallel(jekyllBuild, browserSyncServe, watch));

