import { View } from "react-native";
import NavButton from "./NavButton";
import { layout } from "./navigationStyle";

export default function Navigation() {
  return (
    <View style={layout.container}>
      <NavButton title="Task" href="home/" />
      <NavButton title="Budget" href="budget/budget" />
    </View>
  );
}
