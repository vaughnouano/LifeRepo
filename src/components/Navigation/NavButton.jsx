import { Pressable, Text, View } from "react-native";

export default function NavButton({ href, title }) {
  return (
    <View>
      <Pressable>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
}
