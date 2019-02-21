import "jest";
import React from "react";
import { mount, render, shallow } from "enzyme";
import { MainMenu } from "./MainMenu";

describe("<MainMenu />", () => {
    it("MainMenu is a function", () => {
        expect(typeof MainMenu).toBe("function");
    });

    it("MainMenu should render without throwing an error", () => {
        const comp = shallow(<MainMenu />);
        expect(comp).not.toBe(undefined)
    });

});