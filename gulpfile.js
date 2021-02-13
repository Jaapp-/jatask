const {src, dest, watch, parallel, series} = require("gulp");
const esbuild = require("gulp-esbuild");

function isProduction() {
  return process.env.NODE_ENV === "production";
}

function js() {
  return src("./src/index.js")
    .pipe(
      esbuild({
        outfile: "dist/bundle.js",
        bundle: true,
        sourcemap: !isProduction(),
        minify: isProduction(),
      })
    )
    .pipe(dest("."));
}

function watchJs() {
  watch("src/**/*.js", js);
}

exports.default = js;
exports.watch = series(js, watchJs);
