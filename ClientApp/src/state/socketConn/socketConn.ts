import * as io from "socket.io-client";

export const socket = io("http://localhost:4001/");
socket.on("connect", function () { console.log("connected") });
socket.on("disconnect", function () { console.log("disconnected") });