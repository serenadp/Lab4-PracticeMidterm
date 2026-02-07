export function yee_ha(n) {
  if (typeof n !== "number") {
    throw new Error("Input must be a number");
  }

  const divisibleBy3 = n % 3 === 0;
  const divisibleBy7 = n % 7 === 0;

  if (divisibleBy3 && divisibleBy7) return "Yee Ha";
  if (divisibleBy3) return "Yee";
  if (divisibleBy7) return "Ha";
  return "Nada";
}
