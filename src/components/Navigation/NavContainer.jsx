import { View } from "react-native";
import NavButton from "./navButton";

export default function NavContainer() {
  return (
    <View>
      <NavButton title="Task" href="/index" />
      <NavButton title="Budget" href="/budget" />
    </View>
  );
}
