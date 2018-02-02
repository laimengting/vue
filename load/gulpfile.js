var fs = require("fs");
var url = require("url");
var path = require("path");
var querystring = require("querystring");
var gulp = require("gulp");
var webserver = require("gulp-webserver");

var getJson = function(req, res, filepath) {
    fs.exists(filepath, function(exist) {
        if (!exist) {
            res.end("error");
            return;
        };
        fs.readFile(filepath, function(err, data) {
            if (err) return console.error(err);
            res.end(data);
        });
    });
}
gulp.task("web", function() {
    gulp.src(".")
        .pipe(webserver({
            host: "localhost",
            port: 8080,
            fallback: "index.html"
        }));
});
gulp.task("server", function() {
    gulp.src(".")
        .pipe(webserver({
            host: "localhost",
            port: 8090,
            livereload: true,
            middleware: function(req, res, next) {
                res.writeHead(200, {
                    "Content-type": "text/json;charset=utf8",
                    "Access-Control-Allow-Origin": "*"
                });
                var oUrl = url.parse('req.url');
                var filename = oUrl.pathname;
                var filepath = path.join(__dirname, 'data', filename + '.json');
                getJson(req, res, filepath);
            }
        }));
});

gulp.task("default", ["web", "server"]);