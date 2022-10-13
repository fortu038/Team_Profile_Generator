const Employee = require("../lib/Employee");

describe("Employee constructor", () => {
    it("Employye constructor initializes all values correctly", () => {
        let holder = new Employee("nada", 0, "zero");
        expect(holder.name).toEqual("nada");
        expect(holder.id).toEqual(0);
        expect(holder.email).toEqual("zero");
    });
});

describe("Employee getters", () => {
    let holder = new Employee("nada", 0, "zero");

    it("getName", () => {
        expect(holder.getName()).toEqual("nada");
    });

    it("getId", () => {
        expect(holder.getId()).toEqual(0);
    });

    it("getEmail", () => {
        expect(holder.getEmail()).toEqual("zero");
    });

    it("getRole", () => {
        expect(holder.getRole()).toEqual("Employee");
    });
});