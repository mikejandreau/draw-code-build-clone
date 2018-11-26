const gulp          = require('gulp');
const browsersync   = require("browser-sync").create();
const sass          = require('gulp-sass');
const autoprefixer  = require("autoprefixer");
const plumber       = require("gulp-plumber");
const postcss       = require("gulp-postcss");
const cssnano       = require("cssnano");
const rename        = require("gulp-rename");
const cp            = require("child_process");
const del           = require("del");

// var jekyllPlatform   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
// var messages = {
//     jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
// };

// /**
//  * Build the Jekyll Site
//  */
// gulp.task('jekyll-build', function (done) {
//     browserSync.notify(messages.jekyllBuild);
//     return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
//         .on('close', done);
// });



// // Jekyll
// function jekyll() {
//   return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
// }


// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

var jekyllPlatform = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
// var messages = {
//     jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
// };

function jekyll() {
  return cp.spawn( jekyllPlatform , ['build'], {stdio: 'inherit'})
}




// Clean assets
function clean() {
  return del(["./_site/assets/"]);
}






// /**
//  * Rebuild Jekyll & do page reload
//  */
// gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
//     browserSync.reload();
// });


// /**
//  * Wait for jekyll-build, then launch the Server
//  */
// gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
//     browserSync({
//         server: {
//             baseDir: '_site'
//         }
//     });
// });

// BrowserSync
function browserSync(done) {
  browsersync.init({
    notify: {
        styles: {
            top: 'auto',
            bottom: '0',
            borderBottomLeftRadius: "0",
        }
    },
    server: {
      baseDir: "./_site/"
  },
  port: 3000
});
  done();
}


// /**
//  * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
//  */
// gulp.task('sass', function () {
//     return gulp.src('assets/src/styles/style.scss')
//         .pipe(sass({
//             includePaths: ['scss'],
//             onError: browserSync.notify
//         }))
//         .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
//         .pipe(gulp.dest('_site/assets/css'))
//         .pipe(browserSync.reload({stream:true}))
//         .pipe(gulp.dest('assets/css'));
// });

// CSS task
function css() {
  return gulp
    .src("assets/src/styles/style.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./_site/assets/css"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./_site/assets/css"))
    .pipe(gulp.dest("./assets/css"))
    .pipe(browsersync.stream())
}


// /**
//  * Watch scss files for changes & recompile
//  * Watch html/md files, run jekyll & reload BrowserSync
//  */
// gulp.task('watch', function () {
//     gulp.watch('assets/src/styles/**/*.scss', ['sass']);
//     gulp.watch(['*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
// });


// Watch files
function watchFiles() {
  gulp.watch("assets/src/styles/**/*.scss", css);
  gulp.watch(
    [
      "./_data/**/*",
      "./_includes/**/*",
      "./_layouts/**/*",
      "./_pages/**/*",
      "./_posts/**/*",
      "./_projects/**/*"
    ],
    gulp.series(jekyll, browserSyncReload)
  );
  // gulp.watch("assets/src/images/**/*", images);
}


/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
// gulp.task('default', ['browser-sync', 'watch']);


// gulp.task('default', ['browser-sync', 'watch']);

// Tasks
// gulp.task("images", images);
gulp.task("css", css);
gulp.task("jekyll", jekyll);
gulp.task("clean", clean);

// // build
// gulp.task(
//   "build",
//   gulp.series(clean, gulp.parallel(css, images, jekyll, "js"))
// );

// build
gulp.task(
  "build",
  gulp.series(clean, gulp.parallel(css, jekyll))
);

// watch
gulp.task("default", gulp.parallel(watchFiles, browserSync));
