import { describe, it, expect } from "vitest";
import isFunction from ".";

const fn = () => {};

describe("Is Function", () => {
  it("should return `true` for functions", () => {
    expect(isFunction(fn)).toBe(true);
  });
});
