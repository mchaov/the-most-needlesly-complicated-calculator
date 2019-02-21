import { BasicPage } from "../../controlers";

class Home extends BasicPage {
    constructor() {
        super(["/", "/home"], "home", (res) => {
            this.setData({});
            res.render(this.name, this.getData());
        });
    }
}

export const home = new Home();