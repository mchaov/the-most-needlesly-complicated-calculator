"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controlers_1 = require("../../controlers");
class Home extends controlers_1.BasicPage {
    constructor() {
        super(["/", "/home"], "home", (res) => {
            this.setData({});
            res.render(this.name, this.getData());
        });
    }
}
exports.home = new Home();
//# sourceMappingURL=home.js.map