import { airQualityFromAQI } from "../src/airQuality.js";

describe("airQualityFromAQI", () => {
  it("returns Good for AQI 0–50", () => {
    expect(airQualityFromAQI(25)).toBe("Good");
  });

  it("returns Moderate for AQI 51–100", () => {
    expect(airQualityFromAQI(75)).toBe("Moderate");
  });

  it("returns Unhealthy for Sensitive Groups for AQI 101–150", () => {
    expect(airQualityFromAQI(125)).toBe("Unhealthy for Sensitive Groups");
  });

  it("returns Unhealthy for AQI 151–200", () => {
    expect(airQualityFromAQI(175)).toBe("Unhealthy");
  });

  it("returns Very Unhealthy for AQI 201–300", () => {
    expect(airQualityFromAQI(250)).toBe("Very Unhealthy");
  });

  it("returns Hazardous for AQI 300+", () => {
    expect(airQualityFromAQI(350)).toBe("Hazardous");
  });
});
