// minutes = (width * length) / squareMetresPerMinute
export function minutesToMow(widthMetres, lengthMetres, sqmPerMinute) {
  if (
    typeof widthMetres !== "number" ||
    typeof lengthMetres !== "number" ||
    typeof sqmPerMinute !== "number"
  ) {
    throw new Error("All inputs must be numbers");
  }

  if (sqmPerMinute <= 0) {
    throw new Error("sqmPerMinute must be greater than 0");
  }

  const area = widthMetres * lengthMetres; // m²
  return area / sqmPerMinute; // minutes
}
