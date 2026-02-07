const SQFT_PER_ACRE = 43560;

export function squareFeetToAcres(squareFeet) {
  if (typeof squareFeet !== "number") {
    throw new Error("Input must be a number");
  }
  return squareFeet / SQFT_PER_ACRE;
}
