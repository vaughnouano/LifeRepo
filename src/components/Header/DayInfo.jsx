import { Text, View } from "react-native";
import { Typography } from "../../constants/typography";
import { layout } from "./headerStyle";

export default function DayInfo({ Date, DayNumber }) {
  return (
    <View style={layout.dayInfo} asChild>
      <Text style={Typography.heading}>{Date}</Text>
      <Text style={Typography.headingSubTitle}>Day {DayNumber}</Text>
    </View>
  );
}
