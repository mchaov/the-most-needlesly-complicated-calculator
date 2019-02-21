"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
class BasicPage {
    constructor(routes, name, pageHandler) {
        this.name = name;
        this.routes = routes;
        this.router = router;
        routes.forEach(x => {
            this.router.get(x, (req, res, next) => {
                if (typeof pageHandler === "function") {
                    return pageHandler(res);
                }
                return res.render(name, this.data);
            });
        });
    }
    getData() { return this.data; }
    setData(data) { return this.data = data; }
}
exports.BasicPage = BasicPage;
//# sourceMappingURL=BasicPage.js.map