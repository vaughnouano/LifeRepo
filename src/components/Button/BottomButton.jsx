import { Pressable, Text, View } from "react-native";

import { color } from "../../constants/color";
import { Typography } from "../../constants/typography";
import { layout } from "./bottomButtonStyle";

export default function BottomButton({ Title }) {
  return (
    <View style={layout.container}>
      <Pressable style={[layout.button, color.bg_clr_400]}>
        <Text style={[color.fc_clr_100, Typography.listTitle]}>{Title}</Text>
      </Pressable>
    </View>
  );
}
