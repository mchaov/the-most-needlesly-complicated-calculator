import "jest";
import { AppState } from "./appState";

describe("AppState", () => {
    it("AppState is a function", () => {
        expect(typeof AppState).toBe("function");
    });

    it("AppState should render without throwing an error", () => {
        const comp = new AppState();
        expect(comp).toBeInstanceOf(AppState);
    });

});