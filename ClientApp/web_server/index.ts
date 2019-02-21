import { app } from "./app";

import * as http from "http";
const open = require("open");
import * as debug from "debug";

function normalizePort(val) {
    let port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    let bind = typeof port === "string"
        ? "Pipe " + port
        : "Port " + port;

    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    let addr: any = server.address();
    let bind = typeof addr === "string"
        ? "pipe " + addr
        : "port " + addr.port;
    debug("homeStuff:server")("Listening on " + bind);
    open("http://localhost:" + addr.port);
}

let port = normalizePort(process.env.PORT || "4000");
app.set("port", port);

let server = http.createServer(app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);