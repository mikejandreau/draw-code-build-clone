// GulpJS config for building static sites with Jekyll, SASS & BrowserSync
// Project Variables

// Style paths
var styleSRC                = "./assets/styles/styles.scss"; // Path to main source .scss file
var styleDest               = "./assets/css"; // Destination path for compiled styles
var styleDestSite           = "./_site/assets/css"; // Destination path for compiled styles
var criticalStyles          = "./assets/css/styles.min.css"; // Critical styles path (run 'gulp critical' to generate)

// JavaScript paths - add or remove JS files as needed
var scriptSRC             = [
                              // // '_scripts/vendor/jquery-2.2.4.js', // Include jQuery if you want
                              // '_scripts/class-helpers.js', // Pure JS class toggling
                              // '_scripts/menu-controls.js', // Mobile menu controls
                              // // '_scripts/vendor/baguetteBox.js', // Pure js image lightbox & slideshow (optional)
                              // // '_scripts/vendor/flickity.pkgd.js', // slideshow carousel (optional)
                              // '_scripts/vendor/glightbox.js', // Pure js multimedia lightbox & slideshow (optional)
                              // '_scripts/vendor/autosize.js', // autosize text area in forms to fit content (optional)
                              // '_scripts/scroll-to-top.js', // Internal link scrolling
                              // '_scripts/main.js' // main JS file
                              "./assets/scripts/vendor/jquery-3.3.1.min.js", // jQuery
                              "./assets/scripts/vendor/bootstrap.bundle.min.js", // Bootstrap/PopperJS bundle
                              "./assets/scripts/vendor/jquery.easing.min.js", // jQuery plugin for smooth scrolling
                              "./assets/scripts/vendor/jquery.fancybox.min.js", // Lightbox plugin for galleries
                              "./assets/scripts/vendor/imagesloaded.pkgd.js", // Pure js image loading
                              "./assets/scripts/vendor/isotope-pkgd.js", // Isotope filtering (optional)
                              // "./assets/scripts/vendor/prism.js", // Syntax highlighting for code samples
                              "./assets/scripts/custom.js"
                            ]; // Path to JS vendor and custom files in desired concat order.
var scriptDest            = "./assets/js"; // Path to save the compiled JS file
var scriptDestSite        = "./_site/assets/js"; // Path to save the compiled JS file
var scriptFile            = "scripts"; // Compiled JS file name

// Images
var imagesSRC               = "./assets/images/**/*"; // Source folder of unoptimized images
var imagesDest              = "./assets/img"; // Destination folder of optimized images
var imagesDestSite          = "./_site/assets/img"; // Destination folder of optimized images
var imagesDestThumbs        = "./_site/assets/img/thumbs"; // Destination folder of optimized images

// File paths
var styleWatchFiles         = "./assets/styles/**/*.scss"; // Path to all *.scss files in all subfolders
var scriptWatchFiles        = "./assets/scripts/**/*.js"; // Path to all JS files in all subfolders
var markupWatchFiles        = ["./*.html", "./_data/**/*", "./_includes/**/*", "./_layouts/**/*", "./_pages/**/*", "./_posts/**/*", "./_projects/**/*" ]; // Paths to all markup files.

// Browsers for autoprefixing
var autoprefixBrowsers      = ["last 2 versions", "> 1%", "ie >= 9", "ie_mob >= 10", "ff >= 30", "chrome >= 34", "safari >= 7", "opera >= 23", "ios >= 7", "android >= 4", "bb >= 10"];



// Task plugins
var gulp        = require("gulp");
var cp          = require("child_process");
var browserSync = require('browser-sync').create();
var jekyll      = process.platform === "win32" ? "jekyll.bat" : "jekyll";
var newer       = require("gulp-newer");

// Style related
var sass        = require("gulp-sass");
var prefix      = require("gulp-autoprefixer");
var minifycss   = require("gulp-clean-css");
var critical    = require('critical');

// Script related
var concat      = require("gulp-concat");
var rename      = require("gulp-rename");
var uglify      = require("gulp-uglify");

// Image related
var imagemin    = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');



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
gulp.task("critical", function (done) {
  critical.generate({
    base: "_site/",
    src: "index.html",
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
    dest: "../_includes/critical.css",
    minify: true,
    extract: false,
    ignore: ["font-face"]
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
gulp.task("images", function (done) {
  [360, 1440].forEach(function (size) {
    return gulp.src(imagesSRC)
    .pipe(newer(imagesDestSite)) // get newer images
    .pipe(imageResize({ width: size })) // resize each according to array above
    .pipe(rename(function (path) { path.basename = `${path.basename}-${size}px`; })) // put size in filename
    .pipe(imagemin())
    .pipe(gulp.dest(imagesDest))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest(imagesDestSite))
  });
  done();
});


// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', gulp.series("styles", "scripts", "images",  "jekyll-build", "critical", function(done) {
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
    port: 4000
  });
  done();
}));


// Reload helper function
function reload(done) {
  browserSync.reload();
  done();
}


// Watch files
function watch(done) {
  gulp.watch(styleWatchFiles, gulp.series("styles", reload));
  gulp.watch(scriptWatchFiles, gulp.series("scripts", reload));
  gulp.watch(imagesSRC, gulp.series("images", reload));
  gulp.watch(markupWatchFiles, gulp.series("jekyll-rebuild", reload));
  done();
}


// Default task
gulp.task("default", gulp.series("browser-sync", watch));

// build task
gulp.task("build", gulp.series("styles", "scripts", "images", "jekyll-rebuild", "critical"));

