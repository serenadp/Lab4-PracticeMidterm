import { minutesToMow } from "../src/lawnMowing.js";

describe("minutesToMow", () => {
  it("calculates 10m x 10m at 5 m²/min", () => {
    // area = 100, time = 100 / 5 = 20
    expect(minutesToMow(10, 10, 5)).toBeCloseTo(20, 5);
  });

  it("calculates 20m x 15m at 10 m²/min", () => {
    // area = 300, time = 300 / 10 = 30
    expect(minutesToMow(20, 15, 10)).toBeCloseTo(30, 5);
  });

  it("calculates 5m x 8m at 2 m²/min", () => {
    // area = 40, time = 40 / 2 = 20
    expect(minutesToMow(5, 8, 2)).toBeCloseTo(20, 5);
  });
});
