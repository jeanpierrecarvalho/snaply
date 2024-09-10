import { describe, it, expect } from "vitest";

const deepClone = (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
};

describe("Deep Clone", () => {
  it("Should clone a simple object", () => {
    const original = { name: "Jean-Pierre", age: 32 };
    const clone = deepClone(original);
    expect(clone).toEqual(original);
    expect(clone).not.toBe(original);
  });

  it("Should clone a nested object", () => {
    const original = {
      name: "Jean-Pierre",
      address: { city: "Porto", country: "Portugal" },
    };
    const clone = deepClone(original);
    expect(clone).toEqual(original);
    expect(clone.address).not.toBe(original.address);
  });

  it("Should clone an array", () => {
    const original = [1, 2, { a: 3 }];
    const clone = deepClone(original);
    expect(clone).toEqual(original);
    expect(clone).not.toBe(original);
    expect(clone[2]).not.toBe(original[2]);
  });

  it("Should not clone functions", () => {
    const original = { name: "Jean-Pierre", greetings: () => "Ola!" };
    const clone = deepClone(original);
    expect(clone.greetings).toBeUndefined();
  });
});
