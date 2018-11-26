// START Project Variables

// Style paths
var styleSRC                = "_assets/src/styles/style.scss"; // Path to main .scss file.
var styleDest               = "./_site/assets/css"; // Places compiled CSS file in root folder, could also be "./assets/css/" or some other folder, just remember to update file path in functions.php

// JavaScript paths
var scriptSRC             = [
                              "./assets/js/**/*", // Include jQuery if you want
                              "./assets/js/vendor/class-helpers.js", // Pure JS class toggling
                              "./assets/js/custom/*.js" // menu-controls.js, scroll-to-top.js, etc.
                            ]; // Path to JS vendor and custom files in order.
var scriptDest            = "./assets/js/"; // Path to save the compiled JS file.
var scriptFile            = "scripts"; // Compiled JS file name.

// Images
var imagesSRC               = "./assets/img/raw/**/*.{png,jpg,gif,svg}"; // Source folder of unoptimized images
var imagesDest              = "./assets/img/"; // Dest folder of optimized images

// File paths
var styleWatchFiles         = "./assets/scss/**/*.scss"; // Path to all *.scss files inside css folder and inside them
var scriptWatchFiles        = ["./assets/js/vendor/*.js", "./assets/js/custom/*.js"]; // Path to all JS files.
var markupWatchFiles        = ["*.html", "./_data/**/*", "./_includes/**/*", "./_layouts/**/*", "./_pages/**/*", "./_posts/**/*", "./_projects/**/*" ]; // Path to all markup files.
var assetBuildFolder        = ["./_site/assets/"]; // assets folder in _site to be cleared after build

// Browsers we care about for autoprefixing
const AUTOPREFIXER_BROWSERS = ["last 2 versions", "> 1%", "ie >= 9", "ie_mob >= 10", "ff >= 30", "chrome >= 34", "safari >= 7", "opera >= 23", "ios >= 7", "android >= 4", "bb >= 10"];

// END Project Variables

// Load gulp plugins and assign semantic names
const gulp          = require("gulp");
const browsersync   = require("browser-sync").create();
const sass          = require("gulp-sass");
const autoprefixer  = require("autoprefixer");
const plumber       = require("gulp-plumber");
const postcss       = require("gulp-postcss");
const cssnano       = require("cssnano");
const rename        = require("gulp-rename");
const cp            = require("child_process");
const del           = require("del");
const jekyll        = process.platform === "win32" ? "jekyllBuild.bat" : "jekyllBuild";

const jshint       = require("gulp-jshint"); // Checks JS for errors
const concat       = require("gulp-concat"); // Concatenates JS files
const uglify       = require("gulp-uglify"); // Minifies JS files

var imagemin     = require('gulp-imagemin'); // Minify PNG, JPEG, GIF and SVG images with imagemin.







function browserSync(done) {
  browsersync.init({
    notify: {
        styles: {
            top: "auto",
            bottom: "0",
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

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}


// Jekyll
function jekyllBuild() {
  return cp.spawn( jekyll , ["build"], {stdio: "inherit"})
}



// CSS task
function styles() {
  return gulp
    .src(styleSRC)
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest(styleDest))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(AUTOPREFIXER_BROWSERS), cssnano()]))
    .pipe(gulp.dest(styleDest))
    .pipe(browsersync.stream())
}

// Transpile, concatenate and minify scripts (returns a stream)
function scripts() {
  return gulp
    .src(scriptSRC)
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"))
    .pipe(concat(scriptFile + ".js"))
    .pipe(rename({
      basename: scriptFile,
      suffix: ".min"
    }))
    .pipe(uglify())
    .pipe(gulp.dest(scriptDest))
    .pipe(browsersync.stream())
}

// Optimize Images
function images() {
  return gulp
    .src(imagesSRC)
    .pipe(newer(imagesDest))
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }]
      }))
    .pipe(gulp.dest(imagesDest));
}

// Clean assets
function clean() {
  return del(assetBuildFolder);
}

// Watch files
function watchFiles() {
  gulp.watch(styleWatchFiles, styles);
  gulp.watch(scriptWatchFiles, scripts);
  gulp.watch(markupWatchFiles, gulp.series(jekyllBuild, browserSyncReload));
  gulp.watch(imagesSRC, images);
}

// Tasks
gulp.task("styles", styles);
gulp.task("scripts", scripts);
gulp.task("images", images);
gulp.task("jekyllBuild", jekyllBuild);
gulp.task("clean", clean);


// build
gulp.task("build", gulp.series(clean, gulp.parallel(styles, scripts, images, jekyllBuild)));

// watch
gulp.task("default", gulp.parallel(watchFiles, browserSync));
