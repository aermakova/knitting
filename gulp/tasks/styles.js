module.exports = function() {
    $.gulp.task("styles", function() {
        return $.gulp.src(["./src/styles/**/main.scss", "./src/styles/**/*.css", "!./src/vendor/**/*.css"])
            .pipe($.plumber())
            //.pipe($.sourcemaps.init())
            .pipe($.sass())
            .pipe($.autoprefixer({browsers: ["last 12 versions", "> 1%", "ie 8", "ie 7"]}))
            //.pipe($.mincss({compatibility: "ie8", level: {1: {specialComments: 0}}}))
            //.pipe($.rename({suffix: ".min"}))
            .pipe($.replace("../../dest/", "../"))
            .pipe($.plumber.stop())
            //.pipe($.sourcemaps.write("./maps/"))
            .pipe($.gulp.dest("./dest/styles/"))
            .pipe($.debug({"title": "styles"}))
            .on("end", $.browsersync.reload);
    });
};
