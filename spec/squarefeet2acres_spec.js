import { squareFeetToAcres } from "../src/squarefeet2acres.js";

describe("squareFeetToAcres", () => {
  it("converts 43,560 sq ft to 1 acre", () => {
    expect(squareFeetToAcres(43560)).toBeCloseTo(1, 5);
  });

  it("converts 87,120 sq ft to 2 acres", () => {
    expect(squareFeetToAcres(87120)).toBeCloseTo(2, 5);
  });

  it("converts 21,780 sq ft to 0.5 acres", () => {
    expect(squareFeetToAcres(21780)).toBeCloseTo(0.5, 5);
  });
});
