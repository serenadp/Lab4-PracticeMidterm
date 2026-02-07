export function slope(x1, y1, x2, y2) {
  if (
    typeof x1 !== "number" ||
    typeof y1 !== "number" ||
    typeof x2 !== "number" ||
    typeof y2 !== "number"
  ) {
    throw new Error("All inputs must be numbers");
  }

  const rise = y2 - y1;
  const run = x2 - x1;

  if (run === 0) {
    throw new Error("Slope is undefined when run is 0");
  }

  return rise / run;
}
