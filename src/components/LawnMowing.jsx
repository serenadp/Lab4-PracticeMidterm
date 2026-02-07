import { Text, View } from "react-native";
import { minutesToMow } from "../lawnMowing.js";

export function LawnMowing({ width, length, speed }) {
  const minutes = minutesToMow(width, length, speed);

  return (
    <View>
      <Text>
        {width}m x {length}m at {speed} m²/min → {minutes} minutes
      </Text>
    </View>
  );
}
