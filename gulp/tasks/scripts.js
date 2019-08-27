module.exports = function () {
    $.gulp.task("scripts", function () {
        return $.gulp.src([
            //"./src/libs/jquery/dist/jquery.js",
            //"./src/libs/util.js",
            //"./src/libs/button.js",
            //"./src/libs/bootstrap.js",
            //"./src/libs/modal.js",
            //"./src/libs/popover.js",
            //"./src/libs/dropdown.js",
            "./src/js/**/*.js",
            "!./src/vendor/**/*.js"
        ])
            .pipe($.sourcemaps.init())
            .pipe($.babel({presets: ["@babel/preset-env"]}))
            .pipe($.concat("main.js"))
            //.pipe($.uglify())
            //.pipe($.rename({suffix: ".min"}))
            //.pipe($.sourcemaps.write("./maps/"))
            .pipe($.gulp.dest("./dest/js/"))
            .pipe($.debug({"title": "scripts"}))
            .on("end", $.browsersync.reload);
    });
};