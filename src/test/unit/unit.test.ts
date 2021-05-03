import { callMyFunction, sayHello } from "../../indexTest";

describe("two plus two is four", () => {

    it("Should work 1", () => {
        expect(true).toEqual(true);
    });

    it("calls the passed function", () => {
        const callback = jest.fn();
        callMyFunction(callback);
        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('string returning hello there jest', () => {
        expect(sayHello()).toMatch('hello there jest');
    });

    it("mock non async method with return value", () => {
        const mock = jest.fn();
        mock.mockReturnValue("Hello jest non async");

        expect(mock("foo")).toBe("Hello jest non async");
        expect(mock).toHaveBeenCalledWith("foo");
    });
});
