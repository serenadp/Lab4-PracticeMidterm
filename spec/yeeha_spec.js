import { yee_ha } from "../src/yeeha.js";

describe("yee_ha", () => {
  it("returns 'Yee' when divisible by 3 only", () => {
    expect(yee_ha(9)).toBe("Yee");   // divisible by 3, not 7
  });

  it("returns 'Ha' when divisible by 7 only", () => {
    expect(yee_ha(14)).toBe("Ha");   // divisible by 7, not 3
  });

  it("returns 'Yee Ha' when divisible by both 3 and 7", () => {
    expect(yee_ha(21)).toBe("Yee Ha"); // divisible by 3 and 7
  });

  it("returns 'Nada' when divisible by neither 3 nor 7", () => {
    expect(yee_ha(8)).toBe("Nada");
  });
});
