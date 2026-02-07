import { Text, View } from "react-native";
import { squareFeetToAcres } from "../squarefeet2acres.js";

export function SquareFeetToAcres({ sqft }) {
  const acres = squareFeetToAcres(sqft);

  return (
    <View>
      <Text>
        squareFeetToAcres({sqft}) returned {acres}
      </Text>
    </View>
  );
}
