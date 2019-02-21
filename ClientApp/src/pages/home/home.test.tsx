import "jest";
import React from "react";
import { mount, render, shallow } from "enzyme";
import { Home } from "./home";

describe("<Home />", () => {
    it("Home is a function", () => {
        expect(typeof Home).toBe("function");
    });

    it("Home should render without throwing an error", () => {
        const comp = shallow(<Home />);
        expect(comp).not.toBe(undefined)
    });

});