"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const logger = require("morgan");
const express = require("express");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
const helpers = require("./helpers");
const Pages = require("./pages");
exports.app = express();
const serverPath = path.resolve(path.join(__dirname, "..", "server"));
const viewsPath = path.resolve(path.join(__dirname, "..", "views"));
const pth = path.resolve(path.join(__dirname, "..", "dist"));
const pthImgs = path.resolve(path.join(__dirname, "..", "imgs"));
const hbs = exphbs.create({
    layoutsDir: path.join(viewsPath, "layouts"),
    partialsDir: path.join(viewsPath, "partials"),
    defaultLayout: "main",
    helpers: Object.keys(helpers).reduce((a, b) => {
        a[b] = helpers[b];
        return a;
    }, {})
});
exports.app.engine("handlebars", hbs.engine);
exports.app.set("views", viewsPath);
exports.app.set("view engine", "handlebars");
exports.app.use(favicon(path.join(pthImgs, "favicon.ico")));
exports.app.use(logger("dev"));
exports.app.use(bodyParser.json());
exports.app.use(bodyParser.urlencoded({ extended: false }));
exports.app.use(cookieParser());
exports.app.use(express.static(pth));
exports.app.use(express.static(pthImgs));
exports.app.use('/static', express.static(pth));
exports.app.use('/static', express.static(pthImgs));
let pages = Object.keys(Pages);
if (pages.length > 0) {
    pages.forEach(x => {
        Pages[x].routes.forEach(y => {
            exports.app.use(y, Pages[x].router);
        });
    });
}
else {
    exports.app.use("*", (req, res, next) => {
        res.render("index");
    });
}
exports.app.use(function (req, res, next) {
    res
        .status(404)
        .render("error", {
        status: 404,
        url: req.url,
        layout: false,
        message: "Resourse not found!"
    });
});
//# sourceMappingURL=app.js.map