import { Image, Pressable, View } from "react-native";
import { color } from "../../constants/color";
import { layout } from "./headerStyle";

export default function ThemeToggle() {
  return (
    <View style={[layout.themeToggleContainer, color.bg_clr_200]}>
      <Pressable style={[layout.themeToggleButton_active, color.bg_clr_100]}>
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
