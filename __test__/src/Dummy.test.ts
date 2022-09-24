import { Dummy } from "../../src/Dummy";

it("can test things in src", () => {
    expect(new Dummy().name).toBe("some-name");
});
