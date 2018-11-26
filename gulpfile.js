// START Project Variables

// Style paths
var styleSRC                = "./_assets/styles/style.scss"; // Path to main .scss file.
var styleDest               = "./assets/css"; // Places compiled CSS file in root folder, could also be "./assets/css/" or some other folder, just remember to update file path in functions.php
var styleFile               = "styles"; // Compiled scss file name.


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
var scriptFile            = "scripts"; // Compiled JS file name.

// Images
var imagesSRC               = "./_assets/images/**/*"; // Source folder of unoptimized images
var imagesDest              = "./assets/img"; // Dest folder of optimized images

// File paths
var styleWatchFiles         = "./_assets/styles/**/*.scss"; // Path to all *.scss files inside css folder and inside them
var scriptWatchFiles        = "./_assets/scripts/**/*.js"; // Path to all JS files.
var markupWatchFiles        = ["./*.html", "./_data/**/*", "./_includes/**/*", "./_layouts/**/*", "./_pages/**/*", "./_posts/**/*", "./_projects/**/*" ]; // Path to all markup files.
var assetBuildFolder        = ["./_site/assets/"]; // assets folder in _site to be cleared after build

// Browsers we care about for autoprefixing
const autoprefixBrowsers    = ["last 2 versions", "> 1%", "ie >= 9", "ie_mob >= 10", "ff >= 30", "chrome >= 34", "safari >= 7", "opera >= 23", "ios >= 7", "android >= 4", "bb >= 10"];

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
const jshint        = require("gulp-jshint"); // Checks JS for errors
const concat        = require("gulp-concat"); // Concatenates JS files
const uglify        = require("gulp-uglify"); // Minifies JS files
const newer         = require("gulp-newer");
const imagemin      = require("gulp-imagemin"); // Minify PNG, JPEG, GIF and SVG images with imagemin.







// // Jekyll
// const jekyll        = process.platform === "win32" ? "jekyllBuild.bat" : "jekyllBuild";
// function jekyllBuild() {
//   return cp.spawn(jekyll, ["build"], {stdio: "inherit"});
// }

function jekyllBuild() {
  return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
}


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


// CSS task
function styles() {
  return gulp
    .src(styleSRC)
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(postcss([autoprefixer(autoprefixBrowsers), cssnano()]))
    .pipe(rename({
      basename: styleFile,
      suffix: ".min"
    }))
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
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }]
      })
    )
    .pipe(gulp.dest(imagesDest));
}






// clean assets
function clean() {
  return del(assetBuildFolder);
}

// watch
function watchFiles() {
  gulp.watch(styleWatchFiles, styles);
  gulp.watch(scriptWatchFiles, scripts);
  gulp.watch(imagesSRC, images);
  gulp.watch(markupWatchFiles, gulp.series(jekyllBuild, browserSyncReload));
}

// tasks
gulp.task("styles", styles);
gulp.task("scripts", scripts);
gulp.task("images", images);
gulp.task("jekyllBuild", jekyllBuild);
gulp.task("clean", clean);

// build
gulp.task(
  "build",
  gulp.series(clean, gulp.series(styles, scripts, images, jekyllBuild, browserSyncReload))
);


// watch
gulp.task("default", gulp.parallel(jekyllBuild, browserSync, watchFiles));
