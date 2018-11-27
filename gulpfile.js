// GulpJS config for building static sites with Jekyll, SASS & BrowserSync
// Project Variables

// Style paths
var styleSRC                = "./assets/styles/styles.scss"; // Path to main .scss file.
var styleDest               = "./assets/css"; // Places compiled CSS file in root folder, cou
var styleDestSite           = "./_site/assets/css"; // Places compiled CSS file in root folder, could also be "./asset
var criticalStyles          = "./assets/css/styles.min.css"; // Path

// JavaScript paths
var scriptSRC             = [
                              "./assets/scripts/vendor/jquery-3.3.1.min.js",
                              // "./assets/scripts/vendor/bootstrap.bundle.min.js",
                              // "./assets/scripts/vendor/jquery.easing.min.js",
                              // "./assets/scripts/vendor/jquery.fancybox.min.js",
                              // "./assets/scripts/vendor/prism.js",
                              "./assets/scripts/custom.js"
                            ]; // Path to JS vendor and custom files in order.
var scriptDest            = "./assets/js"; // Path to save the compiled JS file.
var scriptDestSite        = "./_site/assets/js"; // Path to save the compiled JS file.
var scriptFile            = "scripts"; // Compiled JS file name.

// Images
var imagesSRC               = "./assets/images/**/*"; // Source folder of unoptimized images
var imagesDest              = "./assets/img"; // Dest folder of optimized images
var imagesDestSite          = "./_site/assets/img"; // Dest folder of optimized images

// File paths
var styleWatchFiles         = "./assets/styles/**/*.scss"; // Path to all *.scss files inside css folder and inside them
var scriptWatchFiles        = "./assets/scripts/**/*.js"; // Path to all JS files.
var markupWatchFiles        = ["./*.html", "./_data/**/*", "./_includes/**/*", "./_layouts/**/*", "./_pages/**/*", "./_posts/**/*", "./_projects/**/*" ]; // Path to all markup files.
var assetBuildFolder        = ["./_site/assets/"]; // assets folder in _site to be cleared after build

// Browsers for autoprefixing
var autoprefixBrowsers      = [
                                "last 2 versions", 
                                "> 1%", 
                                "ie >= 9", 
                                "ie_mob >= 10", 
                                "ff >= 30", 
                                "chrome >= 34", 
                                "safari >= 7", 
                                "opera >= 23", 
                                "ios >= 7", 
                                "android >= 4", 
                                "bb >= 10"
                              ];

// Task packages
var gulp        = require("gulp");
var browserSync = require('browser-sync').create();
var sass        = require("gulp-sass");
var prefix      = require("gulp-autoprefixer");
var imagemin    = require('gulp-imagemin');
var minifycss   = require("gulp-clean-css");
var uglify      = require("gulp-uglify");
var rename      = require("gulp-rename");
var concat      = require("gulp-concat");
var critical    = require('critical');
var cp          = require("child_process");
var jekyll      = process.platform === "win32" ? "jekyll.bat" : "jekyll";

// Build the Jekyll Site
gulp.task("jekyll-build", function (done) {
    return cp.spawn( jekyll , ["build"], {stdio: "inherit"})
    done();
});

// Rebuild Jekyll & do page reload
gulp.task("jekyll-rebuild", gulp.series("jekyll-build", function(done) {
    browserSync.reload();
    done();
}));

// styles
gulp.task("styles", function () {
  return gulp.src(styleSRC)
  .pipe(sass({
    includePaths: ["scss"],
    onError: browserSync.notify
  }))
  .pipe(prefix(autoprefixBrowsers))
  .pipe(minifycss())
  .pipe(rename({ suffix: ".min" }))
  .pipe(gulp.dest(styleDest))
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest(styleDestSite))
});

// run after pages have build to generate critical css
gulp.task('critical', function (done) {
  critical.generate({
    base: '_site/',
    src: 'index.html',
    css: criticalStyles,
    dimensions: [{
      width: 320,
      height: 480
    },{
      width: 768,
      height: 1024
    },{
      width: 1280,
      height: 960
    }],
    dest: '../_includes/critical.css',
    minify: true,
    extract: false,
    ignore: ['font-face']
  });
  done();
});

// scripts
gulp.task("scripts", function() {
  return gulp.src(scriptSRC)
  .pipe(concat(scriptFile + ".js"))
  .pipe(rename({
    basename: scriptFile,
    suffix: ".min"
  }))
  .pipe(uglify())
  .pipe(gulp.dest(scriptDest))
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest(scriptDestSite))
});


// Optimize Images
gulp.task("images", function() {
  return gulp.src(imagesSRC)
  .pipe(imagemin())
  .pipe(gulp.dest(imagesDest))
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest(imagesDestSite))
});



// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', gulp.series("styles", "scripts", "images", "jekyll-build", function(done) {
  browserSync.init({
    server: {
      baseDir: "./_site"
    },
    notify: {
      styles: {
        top: "auto",
        bottom: "0",
        borderBottomLeftRadius: "0",
      }
    },
    port: 3000
  });
  done();
}));

// Reload helper function
function reload(done) {
  browserSync.reload();
  done();
}

// Watch files
gulp.task("watch", function () {
    gulp.watch(styleWatchFiles, gulp.series("styles", reload));
    gulp.watch(scriptWatchFiles, gulp.series("scripts", reload));
    gulp.watch(imagesSRC, gulp.series("images", reload));
    gulp.watch(markupWatchFiles, gulp.series("jekyll-rebuild", reload));
});

// Default task
gulp.task("default", gulp.series("browser-sync", "watch"));






// // // CSS task
// // function styles() {
// //   return gulp
// //     .src(styleSRC)
// //     .pipe(plumber())
// //     .pipe(sass({ outputStyle: "expanded" }))
// //     .pipe(postcss([autoprefixer(autoprefixBrowsers), cssnano()]))
// //     .pipe(rename({
// //       basename: styleFile,
// //       suffix: ".min"
// //     }))
// //     .pipe(gulp.dest(styleDest))
// //     .pipe(browsersync.stream())
// // }

// // // Transpile, concatenate and minify scripts (returns a stream)
// // function scripts() {
// //   return gulp
// //     .src(scriptSRC)
// //     .pipe(plumber())
// //     .pipe(jshint())
// //     .pipe(jshint.reporter("jshint-stylish"))
// //     .pipe(concat(scriptFile + ".js"))
// //     .pipe(rename({
// //       basename: scriptFile,
// //       suffix: ".min"
// //     }))
// //     .pipe(uglify())
// //     .pipe(gulp.dest(scriptDest))
// //     .pipe(browsersync.stream())
// // }


// // // Optimize Images
// // function images() {
// //   return gulp
// //     .src(imagesSRC)
// //     .pipe(newer(imagesDest))
// //     .pipe(
// //       imagemin({
// //         progressive: true,
// //         svgoPlugins: [{ removeViewBox: false }]
// //       })
// //     )
// //     .pipe(gulp.dest(imagesDest));
// // }






// // // clean assets
// // function clean() {
// //   return del(assetBuildFolder);
// // }

// // // watch
// // function watchFiles(done) {
// //   gulp.watch(styleWatchFiles, styles);
// //   gulp.watch(scriptWatchFiles, scripts);
// //   gulp.watch(imagesSRC, images);
// //   gulp.watch(markupWatchFiles, gulp.series(jekyllBuild, browserSyncReload));
// //   done();
// // }

// // // tasks
// // gulp.task("styles", styles);
// // gulp.task("scripts", scripts);
// // gulp.task("images", images);
// // gulp.task("jekyllBuild", jekyllBuild);
// // gulp.task("clean", clean);

// // // build
// // gulp.task(
// //   "build",
// //   gulp.series(clean, gulp.series(styles, scripts, images, jekyllBuild, browserSyncReload))
// // );


// // // watch
// // gulp.task("default", gulp.parallel(jekyllBuild, browserSync, watchFiles));







// // // experiment with this later





// 'gulp build' -- same as 'gulp' but doesn't serve site
// 'gulp build --prod' -- same as above but with production settings
gulp.task('build', gulp.series('clean', 'assets', 'build:site', 'html', 'xml'));

// 'gulp critical' -- builds critical path CSS includes
//   WARNING: run this after substantial CSS changes
//   WARNING: .html files referenced need to exist, run after `gulp build` to ensure.
gulp.task('critical', gulp.series('styles:critical:home', 'styles:critical:archive', 'styles:critical:post'));






// // // // function to properly reload your browser
// // // function reload(done) {
// // //   browserSync.reload();
// // //   done();
// // // }
// // // // "gulp serve" -- open site in browser and watch for changes
// // // // in source files and update them when needed
// // // gulp.task("serve", (done) => {
// // //   browserSync.init({
// // //     // tunnel: true,
// // //     // open: false,
// // //     port: 4000, // change port to match default Jekyll
// // //     ui: {
// // //       port: 4001
// // //     },
// // //     server: [paths.tempFolderName, paths.siteFolderName]
// // //   });
// // //   done();

// // //   // watch various files for changes and do the needful
// // //   gulp.watch([paths.mdFilesGlob, paths.htmlFilesGlob, paths.ymlFilesGlob], gulp.series("build:site", reload));
// // //   gulp.watch([paths.xmlFilesGlob, paths.txtFilesGlob], gulp.series("site", reload));
// // //   gulp.watch(paths.jsFilesGlob, gulp.series("scripts", reload));
// // //   gulp.watch(paths.sassFilesGlob, gulp.series("styles", reload));
// // //   gulp.watch(paths.imageFilesGlob, gulp.series("copy:images", "images:lazyload", "images:feature", reload));
// // // });


