const Engineer = require("../lib/Engineer");

describe("Engineer constructor", () => {
    it("Engineer constructor initalizes all values correctly", () => {
        let holder = new Engineer("nada", 0, "zero", "null");
        expect(holder.name).toEqual("nada");
        expect(holder.id).toEqual(0);
        expect(holder.email).toEqual("zero");
        expect(holder.github).toEqual("null");
    });
});

describe("Engineer getters", () => {
    let holder = new Engineer("nada", 0, "zero", "null");

    it("getName", () => {
        expect(holder.getName()).toEqual("nada");
    });

    it("getId", () => {
        expect(holder.getId()).toEqual(0);
    });

    it("getEmail", () => {
        expect(holder.getEmail()).toEqual("zero");
    });

    it("getGithub", () => {
        expect(holder.getGithub()).toEqual("null");
    });

    it("getRole", () => {
        expect(holder.getRole()).toEqual("Engineer");
    });
});