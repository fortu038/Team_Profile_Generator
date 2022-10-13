const Intern = require("../lib/Intern");

describe("Intern constructor", () => {
    it("Intern constructor initalizes all values correctly", () => {
        let holder = new Intern("nada", 0, "zero", "null");
        expect(holder.name).toEqual("nada");
        expect(holder.id).toEqual(0);
        expect(holder.email).toEqual("zero");
        expect(holder.school).toEqual("null");
    });
});

describe("Intern getters", () => {
    let holder = new Intern("nada", 0, "zero", "null");

    it("getName", () => {
        expect(holder.getName()).toEqual("nada");
    });

    it("getId", () => {
        expect(holder.getId()).toEqual(0);
    });

    it("getEmail", () => {
        expect(holder.getEmail()).toEqual("zero");
    });

    it("getSchool", () => {
        expect(holder.getSchool()).toEqual("null");
    });

    it("getRole", () => {
        expect(holder.getRole()).toEqual("Intern");
    });
});