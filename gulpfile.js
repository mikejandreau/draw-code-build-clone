// GulpJS config for building static sites with Jekyll, SASS & BrowserSync


// START Project Variables

// Style paths
var styleSRC                = "./_assets/styles/styles.scss"; // Path to main .scss file.
var styleDest               = "./assets/css"; // Places compiled CSS file in root folder, cou
var styleDestSite           = "./_site/assets/css"; // Places compiled CSS file in root folder, could also be "./assets/css/" or some other folder, just remember to update file path in functions.php

// JavaScript paths
var scriptSRC             = [
                              "./_assets/scripts/vendor/jquery-3.3.1.min.js",
                              // "./_assets/scripts/vendor/bootstrap.bundle.min.js",
                              // "./_assets/scripts/vendor/jquery.easing.min.js",
                              // "./_assets/scripts/vendor/jquery.fancybox.min.js",
                              // "./_assets/scripts/vendor/prism.js",
                              "./_assets/scripts/custom.js"
                            ]; // Path to JS vendor and custom files in order.
var scriptDest            = "./assets/js"; // Path to save the compiled JS file.
var scriptDestSite        = "./_site/assets/js"; // Path to save the compiled JS file.
var scriptFile            = "scripts"; // Compiled JS file name.

// Images
var imagesSRC               = "./_assets/images/**/*"; // Source folder of unoptimized images
var imagesDest              = "./assets/img"; // Dest folder of optimized images
var imagesDestSite          = "./_site/assets/img"; // Dest folder of optimized images

// File paths
var styleWatchFiles         = "./_assets/styles/**/*.scss"; // Path to all *.scss files inside css folder and inside them
var scriptWatchFiles        = "./_assets/scripts/**/*.js"; // Path to all JS files.
var markupWatchFiles        = ["./*.html", "./_data/**/*", "./_includes/**/*", "./_layouts/**/*", "./_pages/**/*", "./_posts/**/*", "./_projects/**/*" ]; // Path to all markup files.
var assetBuildFolder        = ["./_site/assets/"]; // assets folder in _site to be cleared after build

// Browsers we care about for autoprefixing
var autoprefixBrowsers      = ["last 2 versions", "> 1%", "ie >= 9", "ie_mob >= 10", "ff >= 30", "chrome >= 34", "safari >= 7", "opera >= 23", "ios >= 7", "android >= 4", "bb >= 10"];







var gulp        = require("gulp");
var browserSync = require('browser-sync').create();
var sass        = require("gulp-sass");
var prefix      = require("gulp-autoprefixer");
var minifycss   = require("gulp-clean-css");
var uglify      = require("gulp-uglify");
var rename      = require("gulp-rename");
var concat      = require("gulp-concat");
var cp          = require("child_process");

var jekyll   = process.platform === "win32" ? "jekyll.bat" : "jekyll";

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







// Compile _scss into both _site/css (live injecting) and site (jekyll builds)
gulp.task("sass", function () {
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


// Compile _scripts into both _site/js (live injecting) and site (jekyll builds)
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


// Wait for jekyll-build, then launch the Server
function browserSync(done) {
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
}

gulp.task('browser-sync', gulp.series("sass", "scripts", "jekyll-build", function(done) {
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






// function to properly reload your browser
function reload(done) {
  browserSync.reload();
  done();
}

// Watch scss/js files for changes & recompile
// Watch html/md files, run jekyll & reload BrowserSync
gulp.task("watch", function () {
    gulp.watch(styleWatchFiles, gulp.series("sass", reload));
    gulp.watch(scriptWatchFiles, gulp.series("scripts", reload));
    gulp.watch(markupWatchFiles, gulp.series("jekyll-rebuild", reload));
});


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


