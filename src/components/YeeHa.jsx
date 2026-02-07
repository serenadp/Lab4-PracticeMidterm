import { Text, View } from "react-native";
import { yee_ha } from "../yeeha.js";

export function YeeHa({ value }) {
  const result = yee_ha(value);

  return (
    <View>
      <Text>
        yee_ha({value}) → {result}
      </Text>
    </View>
  );
}
