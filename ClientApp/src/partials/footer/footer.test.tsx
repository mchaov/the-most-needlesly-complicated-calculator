import "jest";
import React from "react";
import { mount, render, shallow } from "enzyme";
import { Footer } from "./footer";

describe("<Footer />", () => {
    it("Footer is a function", () => {
        expect(typeof Footer).toBe("function");
    });

    it("Footer should render without throwing an error", () => {
        const comp = shallow(<Footer />);
        expect(comp).not.toBe(undefined)
    });

});