import { slope } from "../src/slope.js";

describe("slope", () => {
  it("calculates slope of line from (0,0) to (2,2)", () => {
    // rise = 2, run = 2 → slope = 1
    expect(slope(0, 0, 2, 2)).toBeCloseTo(1, 5);
  });

  it("calculates slope of line from (1,1) to (3,5)", () => {
    // rise = 4, run = 2 → slope = 2
    expect(slope(1, 1, 3, 5)).toBeCloseTo(2, 5);
  });

  it("calculates slope of line from (0,4) to (4,0)", () => {
    // rise = -4, run = 4 → slope = -1
    expect(slope(0, 4, 4, 0)).toBeCloseTo(-1, 5);
  });
});
