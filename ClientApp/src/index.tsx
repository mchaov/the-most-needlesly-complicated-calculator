import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "./app";

render(
    <BrowserRouter />,
    document.getElementById("app")
);