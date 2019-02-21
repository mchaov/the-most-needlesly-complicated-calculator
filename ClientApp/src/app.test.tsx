import "jest";
import React from "react";
import { mount, render, shallow } from "enzyme";
import { App } from "./app";

describe("<App />", () => {
    it("App is a function", () => {
        expect(typeof App).toBe("function");
    });

    it("App should render without throwing an error", () => {
        const comp = shallow(<App />);
        expect(comp).not.toBe(undefined)
    });

});