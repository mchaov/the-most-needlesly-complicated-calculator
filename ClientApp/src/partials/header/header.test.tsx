import "jest";
import React from "react";
import { mount, render, shallow } from "enzyme";
import { Header } from "./header";

describe("<Header />", () => {
    it("Header is a function", () => {
        expect(typeof Header).toBe("function");
    });

    it("Header should render without throwing an error", () => {
        const comp = shallow(<Header />);
        expect(comp).not.toBe(undefined)
    });

});