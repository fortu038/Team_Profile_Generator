const Manager = require("../lib/Manager");

describe("Manager constructor", () => {
    it("Manager constructor initalizes all values correctly", () => {
        let holder = new Manager("nada", 0, "zero", 0);
        expect(holder.name).toEqual("nada");
        expect(holder.id).toEqual(0);
        expect(holder.email).toEqual("zero");
        expect(holder.officeNumber).toEqual(0);
    });
});

describe("Manager getters", () => {
    let holder = new Manager("nada", 0, "zero", 0);

    it("getName", () => {
        expect(holder.getName()).toEqual("nada");
    });

    it("getId", () => {
        expect(holder.getId()).toEqual(0);
    });

    it("getEmail", () => {
        expect(holder.getEmail()).toEqual("zero");
    });

    it("getOfficeNumber", () => {
        expect(holder.getOfficeNumber()).toEqual(0);
    });

    it("getRole", () => {
        expect(holder.getRole()).toEqual("Manager");
    });
});