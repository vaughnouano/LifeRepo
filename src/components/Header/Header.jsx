import DayInfo from "./DayInfo";
import ThemeToggle from "./ThemeToggle";

import { View } from "react-native";
import { layout } from "./headerStyle";

export default function Header({ Date, DayNumber }) {
  return (
    <View style={layout.container}>
      <DayInfo Date={Date} DayNumber={DayNumber} />
      <ThemeToggle />
    </View>
  );
}
