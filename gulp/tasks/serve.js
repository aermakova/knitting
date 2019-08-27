module.exports = function () {
    $.gulp.task("serve", function () {
        return new Promise((res, rej) => {
            $.browsersync.init({
                server: {
                    baseDir: "./dest/",
                    index: "calendar-event.html"
                },
                tunnel: true,
                port: 9000
            });
            res();
        });
    });
};