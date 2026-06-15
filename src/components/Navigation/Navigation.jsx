import { usePathname } from "expo-router";
import { View } from "react-native";
import { color } from "../../constants/color";
import NavButton from "./NavButton";
import { layout } from "./navigationStyle";

export default function Navigation() {
  const pathname = usePathname();

  const isTaskActive = pathname === "/home/" || pathname === "/home";
  const isBudgetActive =
    pathname === "/budget/budget" || pathname === "/budget";

  return (
    <View style={[layout.container, color.bg_clr_200]}>
      <NavButton
        title="Task"
        href="home/"
        style={isTaskActive ? color.bg_clr_100 : null}
      />
      <NavButton
        title="Budget"
        href="budget/budget"
        style={isBudgetActive ? color.bg_clr_100 : null}
      />
    </View>
  );
}
