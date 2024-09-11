import { describe, it, expect } from "vitest";
import isObject from ".";

const obj = {};

describe("Is Object", () => {
  it("should return `true` for objects", () => {
    expect(isObject(obj)).toBe(true);
  });
});
