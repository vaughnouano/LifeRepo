import { Image, Pressable, View } from "react-native";
import { layout } from "./headerStyle";

export default function ThemeToggle() {
  return (
    <View style={layout.themeToggleContainer}>
      <Pressable style={layout.themeToggleButton_active}>
        <View>
          <Image
            source={require("../../../assets/images/light_mode_Active.png")}
          />
        </View>
      </Pressable>
      <Pressable style={layout.themeToggleButton}>
        <View>
          <Image
            source={require("../../../assets/images/dark_mode_Active.png")}
          />
        </View>
      </Pressable>
    </View>
  );
}
