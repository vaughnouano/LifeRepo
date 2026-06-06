import { Text, View } from "react-native";
import { layout } from "./headerStyle";

export default function DayInfo({ Date, DayNumber }) {
  return (
    <View style={layout.dayInfo} asChild>
      <Text>{Date}</Text>
      <Text>Day {DayNumber}</Text>
    </View>
  );
}
