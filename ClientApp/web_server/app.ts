// import * as orm from "orm";
import * as path from "path";
import * as logger from "morgan";
import * as express from "express";
import * as handlebars from "handlebars";
import * as favicon from "serve-favicon";
import * as bodyParser from "body-parser";
import * as exphbs from "express-handlebars";
import * as cookieParser from "cookie-parser";

import * as helpers from "./helpers";
import * as Pages from "./pages";

export const app = express();

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

app.engine("handlebars", hbs.engine);
app.set("views", viewsPath);
app.set("view engine", "handlebars");

app.use(favicon(path.join(pthImgs, "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(pth));
app.use(express.static(pthImgs));
app.use('/static', express.static(pth))
app.use('/static', express.static(pthImgs))

let pages = Object.keys(Pages);
if (pages.length > 0) {
    pages.forEach(x => {
        Pages[x].routes.forEach(y => {
            app.use(y, Pages[x].router);
        });
    });
} else {
    // used only if there are no page controllers
    app.use("*", (req, res, next) => {
        res.render("index");
    });
}

// handle 404
app.use(function (req, res, next) {
    res
        .status(404)
        .render("error", {
            status: 404,
            url: req.url,
            layout: false,
            message: "Resourse not found!"
        });
});