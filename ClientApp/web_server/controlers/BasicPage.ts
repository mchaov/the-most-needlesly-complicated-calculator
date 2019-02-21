import * as express from "express";
const router = express.Router();

export class BasicPage {
    private data: any;
    name: string;
    routes: string[];
    router: express.Router;

    constructor(routes: string[], name: string, pageHandler?: Function) {
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