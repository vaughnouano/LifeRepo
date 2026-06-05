import DayInfo from "./DayInfo";
import ThemeToggle from "./ThemeToggle";

import { View } from "react-native";

export default function Header() {
  return (
    <View>
      <DayInfo />
      <ThemeToggle />
    </View>
  );
}
