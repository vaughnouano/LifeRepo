import { View } from "react-native";
import { color } from "../../constants/color";
import NavButton from "./NavButton";
import { layout } from "./navigationStyle";

export default function Navigation() {
  return (
    <View style={[layout.container, color.bg_clr_200]}>
      <NavButton title="Task" href="home/" />
      <NavButton title="Budget" href="budget/budget" />
    </View>
  );
}
