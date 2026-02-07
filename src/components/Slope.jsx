import { Text, View } from "react-native";
import { slope } from "../slope.js";

export function Slope({ x1, y1, x2, y2 }) {
  const m = slope(x1, y1, x2, y2);

  return (
    <View>
      <Text>
        slope(({x1}, {y1}) → ({x2}, {y2})) = {m}
      </Text>
    </View>
  );
}
