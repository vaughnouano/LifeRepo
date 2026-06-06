import { Pressable, Text, View } from "react-native";

import { layout } from "./bottomButtonStyle";

export default function BottomButton({ Title }) {
  return (
    <View style={layout.container}>
      <Pressable style={layout.button}>
        <Text>{Title}</Text>
      </Pressable>
    </View>
  );
}
