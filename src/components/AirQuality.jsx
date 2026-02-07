import { Text, View } from "react-native";
import { airQualityFromAQI } from "../airQuality.js";

export function AirQuality({ aqi }) {
  const quality = airQualityFromAQI(aqi);

  return (
    <View>
      <Text>
        AQI {aqi} → {quality}
      </Text>
    </View>
  );
}
