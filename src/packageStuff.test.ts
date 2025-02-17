import { describe, expect, it } from "vitest";
import { packageStuff } from "./index.js";

describe("packageStuff", () => {
  it("expects a result with an input", () => {
    expect(packageStuff("thing")).toBe("Package thing");
  });
  it("expects a result without an input", () => {
    expect(packageStuff()).toBe("Package stuff");
  });
});
