import { observable, action } from "mobx";
import { socket } from "./socketConn";

export type MathObject = {
    num1: string
    num2: string
    action: string
}

enum RouteOptions {
    "sqrt" = "sqrt",
    "-" = "sub",
    "+" = "add",
    "^" = "pow",
    "*" = "mul",
    "/" = "div"
}

export class AppState {
    @observable result: string;

    constructor() {
        this.result = "";

        socket.on(RouteOptions["+"], x => this.setResult(x));
        socket.on(RouteOptions["-"], x => this.setResult(x));
        socket.on(RouteOptions["*"], x => this.setResult(x));
        socket.on(RouteOptions["/"], x => this.setResult(x));
        socket.on(RouteOptions["^"], x => this.setResult(x));
        socket.on(RouteOptions["sqrt"], x => this.setResult(x));
    }

    @action setResult(x?: string) { this.result = x || ""; }

    async route(x: MathObject) {
        if (x.action === "") {
            this.setResult();
        }
        this[RouteOptions[x.action]](x.num1, x.num2);
    }

    private add(x, y) {
        socket.emit("add", JSON.stringify({ x, y }));
    }

    private sub(x, y) {
        socket.emit("sub", JSON.stringify({ x, y }));
    }

    private div(x, y) {
        socket.emit("div", JSON.stringify({ x, y }));
    }

    private mul(x, y) {
        socket.emit("mul", JSON.stringify({ x, y }));
    }

    private pow(x, y) {
        fetch(`http://api.mathjs.org/v4/?expr=${x}%5E${y}`)
            .then(x => x.json())
            .then(x => this.setResult(x));
    }

    private sqrt(x, y) {
        fetch(`http://api.mathjs.org/v4/?expr=sqrt(${x})`)
            .then(x => x.json())
            .then(x => this.setResult(x));
    }

}